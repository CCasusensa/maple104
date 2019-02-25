package handling.channel.handler;

import client.MapleCharacter;
import client.MapleClient;
import client.MapleQuestStatus;
import client.SkillFactory;
import constants.ServerConstants;
import handling.channel.ChannelServer;
import handling.login.LoginServer;
import handling.world.*;
import handling.world.exped.MapleExpedition;
import handling.world.guild.MapleGuild;
import java.util.List;
import org.apache.log4j.Logger;
import scripting.NPCScriptManager;
import server.maps.FieldLimitType;
import server.quest.MapleQuest;
import tools.FileoutputUtil;
import tools.MaplePacketCreator;
import tools.Pair;
import tools.data.LittleEndianAccessor;
import tools.packet.*;

/**
 * ��ҽ�����Ϸ
 */
public class InterServerHandler {

    private static final Logger log = Logger.getLogger(InterServerHandler.class);

    public static void EnterMTS(MapleClient c, MapleCharacter chr) {
        if ((chr.hasBlockedInventory()) || (chr.getMap() == null) || (chr.getEventInstance() != null) || (c.getChannelServer() == null)) {
            c.getSession().write(MaplePacketCreator.serverBlocked(4));
            c.getSession().write(MaplePacketCreator.enableActions());
            return;
        }
        if (chr.getMapId() == 180000001) {
            chr.dropMessage(1, "������ط��޷�ʹ�ô˹���.");
            c.getSession().write(MaplePacketCreator.enableActions());
            return;
        }
        if (chr.isBanned()) {
            c.getSession().write(MaplePacketCreator.enableActions());
            return;
        }
        if (chr.getAntiMacro().inProgress()) {
            chr.dropMessage(5, "��ʹ�ò����ʱ�޷�������");
            c.getSession().write(MaplePacketCreator.enableActions());
            return;
        }
        NPCScriptManager.getInstance().dispose(c);
        NPCScriptManager.getInstance().start(c, 9000086, 55);
        c.getSession().write(MaplePacketCreator.enableActions());
    }

    public static void EnterCS(MapleClient c, MapleCharacter chr) {
        if (!chr.isAlive()) {
            c.getPlayer().dropMessage(1, "���ڲ��ܽ����̳�.");
            c.getSession().write(MaplePacketCreator.enableActions());
            return;
        }
        if (chr.isInJailMap()) {
            chr.dropMessage(1, "������ط��޷�ʹ�ôι���.");
            c.getSession().write(MaplePacketCreator.enableActions());
            return;
        }
        if (chr.isBanned()) {
            c.getSession().write(MaplePacketCreator.enableActions());
            return;
        }
        if (chr.getAntiMacro().inProgress()) {
            chr.dropMessage(5, "��ʹ�ò����ʱ�޷�������");
            c.getSession().write(MaplePacketCreator.enableActions());
            return;
        }
        if ((chr.hasBlockedInventory()) || (chr.getMap() == null) || (chr.getEventInstance() != null) || (c.getChannelServer() == null)) {
            c.getSession().write(MaplePacketCreator.serverBlocked(2));
            c.getSession().write(MaplePacketCreator.enableActions());
            return;
        }
        if (World.getPendingCharacterSize() >= 10) {
            chr.dropMessage(1, "������æ�����Ժ����ԡ�");
            c.getSession().write(MaplePacketCreator.enableActions());
            return;
        }

        ChannelServer ch = ChannelServer.getInstance(c.getChannel());
        chr.changeRemoval();
        if (chr.getMessenger() != null) {
            MapleMessengerCharacter messengerplayer = new MapleMessengerCharacter(chr);
            World.Messenger.leaveMessenger(chr.getMessenger().getId(), messengerplayer);
        }
        PlayerBuffStorage.addBuffsToStorage(chr.getId(), chr.getAllBuffs());
        PlayerBuffStorage.addCooldownsToStorage(chr.getId(), chr.getCooldowns());
        PlayerBuffStorage.addDiseaseToStorage(chr.getId(), chr.getAllDiseases());
        World.ChannelChange_Data(new CharacterTransfer(chr), chr.getId(), -10);
        ch.removePlayer(chr);
        c.updateLoginState(3, c.getSessionIPAddress());
        chr.saveToDB(false, false);
        chr.getMap().removePlayer(chr);
        c.getSession().write(MaplePacketCreator.getChannelChange(c, Integer.parseInt(handling.cashshop.CashShopServer.getIP().split(":")[1])));
        c.setPlayer(null);
        c.setReceiving(false);
    }

    public static void Loggedin(int playerid, MapleClient c) {
        ChannelServer channelServer = c.getChannelServer();

        CharacterTransfer transfer = channelServer.getPlayerStorage().getPendingCharacter(playerid);
        boolean loggedin = true;
        MapleCharacter player;
        long loadCharTime = System.currentTimeMillis();
        if (transfer == null) {
            player = MapleCharacter.loadCharFromDB(playerid, c, true);

            System.out.println(new StringBuilder().append("��ɫ��Ϣ������� ��ʱ: ").append((System.currentTimeMillis() - loadCharTime) / 1000L).append(" ��..").toString());
     
            
            Pair<String, String> ip = LoginServer.getLoginAuth(playerid);
            String s = c.getSessionIPAddress();
            if (ip == null || !s.substring(s.indexOf('/') + 1, s.length()).equals(ip.left)) {
                //log.info("ip = " + ip);
                if (ip != null) {
                    LoginServer.putLoginAuth(playerid, ip.left, ip.right);
                }
                c.getSession().close();
                log.info(new StringBuilder().append("������ӵ�ַ - 1 ").append(s).toString());
                return;
            }
            c.setTempIP(ip.right);
        } else {
            player = MapleCharacter.ReconstructChr(transfer, c, true);
            loggedin = false;
        }
        c.setPlayer(player);
        c.setAccID(player.getAccountID());
        if (!c.CheckIPAddress()) {
            c.getSession().close();
            log.info(new StringBuilder().append("������ӵ�ַ - 2 ").append(!c.CheckIPAddress()).toString());
            return;
        }
        int state = c.getLoginState();
        boolean allowLogin = false;
        if ((state == 1) || (state == 3) || (state == 0)) {
            allowLogin = !World.isCharacterListConnected(c.loadCharacterNames(c.getWorld()));
        }
        if (!allowLogin) {
            c.setPlayer(null);
            c.getSession().close();
            log.info(new StringBuilder().append("������ӵ�ַ - 3 ").append(!allowLogin).toString());
            return;
        }
        c.updateLoginState(2, c.getSessionIPAddress());
        channelServer.addPlayer(player);
        player.giveCoolDowns(PlayerBuffStorage.getCooldownsFromStorage(player.getId()));
        player.silentGiveBuffs(PlayerBuffStorage.getBuffsFromStorage(player.getId()));
        player.giveSilentDebuff(PlayerBuffStorage.getDiseaseFromStorage(player.getId()));
        c.getSession().write(MaplePacketCreator.getCharInfo(player));
        c.getSession().write(MTSCSPacket.enableCSUse());
        c.getSession().write(MaplePacketCreator.sendloginSuccess());
        c.getSession().write(MaplePacketCreator.updateMount(player, false));
       // if (player.isAdmin()) {//GM����������
       //     SkillFactory.getSkill(9001004).getEffect(1).applyTo(player);
       // }
        c.getSession().write(MaplePacketCreator.temporaryStats_Reset());
        player.getMap().addPlayer(player);
        try {
            int[] buddyIds = player.getBuddylist().getBuddyIds();
            World.Buddy.loggedOn(player.getName(), player.getId(), c.getChannel(), buddyIds);
            if (player.getParty() != null) {
                MapleParty party = player.getParty();
                World.Party.updateParty(party.getId(), PartyOperation.LOG_ONOFF, new MaplePartyCharacter(player));
                if ((party != null) && (party.getExpeditionId() > 0)) {
                    MapleExpedition me = World.Party.getExped(party.getExpeditionId());
                    if (me != null) {
                        c.getSession().write(PartyPacket.expeditionStatus(me, false));
                    }
                }
            }
            if (player.getSidekick() == null) {
                player.setSidekick(World.Sidekick.getSidekickByChr(player.getId()));
            }
            if (player.getSidekick() != null) {
                c.getSession().write(PartyPacket.updateSidekick(player, player.getSidekick(), false));
            }
            CharacterIdChannelPair[] onlineBuddies = World.Find.multiBuddyFind(player.getId(), buddyIds);
            for (CharacterIdChannelPair onlineBuddy : onlineBuddies) {
                player.getBuddylist().get(onlineBuddy.getCharacterId()).setChannel(onlineBuddy.getChannel());
            }
            c.getSession().write(BuddyListPacket.updateBuddylist(player.getBuddylist().getBuddies()));

            MapleMessenger messenger = player.getMessenger();
            if (messenger != null) {
                World.Messenger.silentJoinMessenger(messenger.getId(), new MapleMessengerCharacter(player));
                World.Messenger.updateMessenger(messenger.getId(), player.getName(), c.getChannel());
            }

            if (player.getGuildId() > 0) {
                World.Guild.setGuildMemberOnline(player.getMGC(), true, c.getChannel());
                c.getSession().write(GuildPacket.showGuildInfo(player));
                MapleGuild gs = World.Guild.getGuild(player.getGuildId());
                if (gs != null) {
                    List<byte[]> packetList = World.Alliance.getAllianceInfo(gs.getAllianceId(), true);
                    if (packetList != null) {
                        for (byte[] pack : packetList) {
                            if (pack != null) {
                                c.getSession().write(pack);
                            }
                        }
                    }
                } else {
                    player.setGuildId(0);
                    player.setGuildRank((byte) 5);
                    player.setAllianceRank((byte) 5);
                    player.saveGuildStatus();
                }
            }

            if (player.getFamilyId() > 0) {
                World.Family.setFamilyMemberOnline(player.getMFC(), true, c.getChannel());
            }
            c.getSession().write(FamilyPacket.getFamilyData());
            c.getSession().write(FamilyPacket.getFamilyInfo(player));
        } catch (Exception e) {
            FileoutputUtil.outputFileError("log\\Login_Error.log", e);
        }

        player.getClient().getSession().write(MaplePacketCreator.serverMessage(channelServer.getServerMessage()));

        player.sendMacros();

        player.showNote();

        player.sendImp();

        player.updatePartyMemberHP();

        player.startFairySchedule(false);

        player.baseSkills();

        c.getSession().write(MaplePacketCreator.getKeymap(player.getKeyLayout()));

        c.getSession().write(MaplePacketCreator.showCharCash(player));

        player.updatePetAuto();
        c.getSession().write(MaplePacketCreator.reportResponse((byte) 0, 0));
        c.getSession().write(MaplePacketCreator.enableReport());

        player.expirationTask(true, transfer == null);

        if (player.getJob() == 132) {
            player.checkBerserk();
        }
        player.spawnClones();

        player.spawnSavedPets();
        if (player.getStat().equippedSummon > 0) {
            SkillFactory.getSkill(player.getStat().equippedSummon).getEffect(1).applyTo(player);
        }

        MapleQuestStatus stat = player.getQuestNoAdd(MapleQuest.getInstance(122700));
        c.getSession().write(MaplePacketCreator.pendantSlot((stat != null) && (stat.getCustomData() != null) && (Long.parseLong(stat.getCustomData()) > System.currentTimeMillis())));

        stat = player.getQuestNoAdd(MapleQuest.getInstance(123000));
        c.getSession().write(MaplePacketCreator.quickSlot((stat != null) && (stat.getCustomData() != null) && (stat.getCustomData().length() == 8) ? stat.getCustomData() : null));

        if (loggedin) {
            
            long maxdamage = (999999 + c.getPlayer().getMaplewing("maple") * c.getPlayer().getMaplewing("cardlevel") * (ChannelServer.getpogpngbilv()));
            if ((maxdamage >= 2147483647) || (maxdamage < 0)) {
                maxdamage = 2147483647;
            }
            
            String dds = "\r\n#k����ʱ���Զ�����#r" + c.getPlayer().getVipExp() + "% #k�������ر��齱����";
            
           // String msg = new StringBuilder().append("��ǰ��ϷΪ: [Ver.").append(ServerConstants.MAPLE_VERSION).append(".").append(ServerConstants.MAPLE_PATCH).append("] ���Ѿ���ȫ��½��ʹ�� @help ���Բ鿴����ǰ��ʹ�õ����� ף�������죡.").toString();
            String msg = new StringBuilder().append("#r").append(player.getVipname(2)).append(" #d").append(player.getName()).append(" #k").append("  \r\n��ӭ���� ").append(c.getChannelServer().getServerName()).append(" ��\r\n��ǰ����˰汾Ϊ: [Ver.#b").append(ServerConstants.MAPLE_VERSION).append(".").append(ServerConstants.MAPLE_PATCH).append("#k] ���Ѿ���ȫ��½��\r\n�ڶԻ������� #r@help #k���Բ鿴����ǰ��ʹ�õ����\r\n�����˺�����Ϊ��#r").append(maxdamage).append(dds).append("\r\n#bף����Ϸ��죡.").toString();
            player.getHyPay(1);
            
            String mds = "��ǰ���Ĺ�������Ϊ�� " + maxdamage + " (ע:�����������Ĺ��׵�͵���ȼ��й�)";
            if (player.getLevel() == 1) {
                player.dropMessage(1, new StringBuilder().append("��ӭ���� ").append(c.getChannelServer().getServerName()).append(", ").append(player.getName()).append(" ��\r\nʹ�� @help ���Բ鿴����ǰ��ʹ�õ����\r\n�����˺�����Ϊ��").append(maxdamage).append(dds).append("\r\nף�������죡").toString());
                player.dropMessage(5, "ʹ�� @help ���Բ鿴����ǰ��ʹ�õ����� ף�������죡");
                c.getPlayer().dropMessage(-11, mds);
                player.gainExp(500, true, false, true);
            } else {
                c.getSession().write(MaplePacketCreator.sendHint(msg, 200, 30));//msgΪ��ɫ��¼����ͷ����Ϣ
            }
            
            
            if (player.getMaplewingJS("tmeso") > 10000) {
                int tmeso = player.getMaplewingJS("tmeso");
                int jmeso = player.getMaplewingJS("jmeso");
                String names = player.getVipname()+ " ���Ľ�ҲƸ��ܶ�ﵽ��" + tmeso + " ���ң�ϵͳ�ᶨʱ�Զ��۳���" + jmeso + "���ҲƸ���";
                player.dropMessage(-1, names);
                player.dropMessage(-11, names);
                
            }
            
            if ((c.getPlayer().hasEquipped(1122017)) || (c.getPlayer().hasEquipped(1122086)) || (c.getPlayer().hasEquipped(1122155)) || (c.getPlayer().hasEquipped(1122156)) ||
                    (c.getPlayer().hasEquipped(1142340)) || (c.getPlayer().hasEquipped(1122214)) || (c.getPlayer().hasEquipped(1022129)) || (c.getPlayer().hasEquipped(1142340))) {
                
                player.dropMessage(5, "��װ���� �����׹ϵ��װ�� ������ʱ���Զ�����10%�ĵ���������齱����");
            }
            
            if (c.getPlayer().haveItem(5420008)) {
                player.dropMessage(5, "��ӵ�� VIP��Ա�� ������ʱ���Զ�����10%�������ر��齱����");
            }
            if (c.getPlayer().hasEquipped(1112918)) {
                player.dropMessage(5, "��ӵ�� �ع��ָ ������ʱ���Զ�����80%���ٻؽ�ָ���齱����");
            }
            
            if (c.getPlayer().hasEquipped(1112312)) {
                player.dropMessage(5, "��ӵ�� �����氮��ָ ������ʱ���Զ�����100%�������ر��齱����");
            } 
            if (c.getPlayer().hasEquipped(1112597)) {
                player.dropMessage(5, "��ӵ�� ϣ��˹����ʯ��ָ ������ʱ���Զ�����100%�������ر��齱����");
            }
            
            if (c.getPlayer().hasEquipped(1003359)) {
                player.dropMessage(5, "��ӵ�� �������� ������ʱ���Զ�����1000%�ľ����ף�����齱����");
            }
            if (c.getPlayer().getMaplewing("cardlevel") >= 1) {
                
                player.dropMessage(5, "��ӵ��Maplewing�� " + c.getPlayer().getVipname(2) + "������ʱ���Զ�����" + c.getPlayer().getVipExp() + "%�������ر��齱����");
            }
            
            
            c.getPlayer().dropMessage(-11, mds);
            c.getPlayer().dropMessage(-1, mds);

            if (c.getChannelServer().getDoubleExp() == 2) {
                player.dropMessage(5, "��ǰ����������˫�������У�ף�������죡");
            }
            

//            if (((player.getItemQuantity(4000463) >= 800) || (player.getCSPoints(-1) >= 900000)) && (player.getHyPay(3) < 200) && (!player.isIntern())) {
//                String msgtext = new StringBuilder().append("��� ").append(player.getName()).append(" �����쳣���������Զ��Ͽ��������ӡ�").append(" ���������: ").append(player.getItemQuantity(4000463)).append(" ����ܶ�: ").append(player.getCSPoints(-1)).toString();
//                World.Broadcast.broadcastGMMessage(MaplePacketCreator.serverNotice(6, new StringBuilder().append("[GM Message] ").append(msgtext).toString()));
//                FileoutputUtil.log("log\\�����쳣.log", msgtext);
//                c.getSession().close();
//            }
        }

        c.getSession().write(MaplePacketCreator.getInventoryStatus());
    }

    public static void ChangeChannel(LittleEndianAccessor slea, MapleClient c, MapleCharacter chr) {
        if ((chr == null) || (chr.hasBlockedInventory()) || (chr.getEventInstance() != null) || (chr.getMap() == null) || (chr.isInBlockedMap()) || (FieldLimitType.ChannelSwitch.check(chr.getMap().getFieldLimit()))) {
            c.getSession().write(MaplePacketCreator.enableActions());
            return;
        }
        if (chr.isBanned()) {
            c.getSession().write(MaplePacketCreator.enableActions());
            return;
        }
        if (chr.getAntiMacro().inProgress()) {
            chr.dropMessage(5, "��ʹ�ò����ʱ�޷�������");
            c.getSession().write(MaplePacketCreator.enableActions());
            return;
        }
        if (World.getPendingCharacterSize() >= 10) {
            chr.dropMessage(1, "������æ�����Ժ����ԡ�");
            c.getSession().write(MaplePacketCreator.enableActions());
            return;
        }
        int chc = slea.readByte() + 1;
        if (!World.isChannelAvailable(chc)) {
            chr.dropMessage(1, "��Ƶ��������������л�������Ƶ��������Ϸ��");
            c.getSession().write(MaplePacketCreator.enableActions());
            return;
        }
        chr.changeChannel(chc);
    }
}

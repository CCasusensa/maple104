package scripting;

import client.*;
import client.inventory.*;
import constants.GameConstants;
import handling.channel.ChannelServer;
import handling.channel.MapleGuildRanking;
import handling.world.MapleParty;
import handling.world.MaplePartyCharacter;
import handling.world.World;
import handling.world.World.Broadcast;
import handling.world.World.Guild;
import handling.world.guild.MapleGuild;
import java.awt.Point;
import java.util.Calendar;
import java.util.List;
import org.apache.log4j.Logger;
import server.*;
import server.events.MapleEvent;
import server.events.MapleEventType;
import server.life.MapleLifeFactory;
import server.life.MapleMonster;
import server.maps.*;
import server.quest.MapleQuest;
import tools.FileoutputUtil;
import tools.MaplePacketCreator;
import tools.StringUtil;
import tools.packet.GuildPacket;
import tools.packet.PetPacket;
import tools.packet.UIPacket;

public abstract class AbstractPlayerInteraction {

    private static final Logger log = Logger.getLogger(AbstractPlayerInteraction.class);
    protected MapleClient c;
    protected int id;
    protected int id2;
    protected int id3;

    public AbstractPlayerInteraction(MapleClient c, int id, int id2, int id3) {
        this.c = c;
        this.id = id;
        this.id2 = id2;
        this.id3 = id3;
    }

    public MapleClient getClient() {
        return this.c;
    }

    public MapleClient getC() {
        return this.c;
    }

    public MapleCharacter getChar() {
        return this.c.getPlayer();
    }

    public MapleCharacter getPlayer() {
        return this.c.getPlayer();
    }

    public ChannelServer getChannelServer() {
        return this.c.getChannelServer();
    }

    public EventManager getEventManager(String event) {
        return this.c.getChannelServer().getEventSM().getEventManager(event);
    }

    public EventInstanceManager getEventInstance() {
        return this.c.getPlayer().getEventInstance();
    }

    public void warp(int map) {
        MapleMap mapz = getWarpMap(map);
        try {
            this.c.getPlayer().changeMap(mapz, mapz.getPortal(Randomizer.nextInt(mapz.getPortals().size())));
        } catch (Exception e) {
            this.c.getPlayer().changeMap(mapz, mapz.getPortal(0));
        }
    //    this.c.getPlayer().setMaplewingmap();
    }

    public void warp_Instanced(int map) {
        MapleMap mapz = getMap_Instanced(map);
        try {
            this.c.getPlayer().changeMap(mapz, mapz.getPortal(Randomizer.nextInt(mapz.getPortals().size())));
        } catch (Exception e) {
            this.c.getPlayer().changeMap(mapz, mapz.getPortal(0));
        }
      //  this.c.getPlayer().setMaplewingmap();
    }

    public void warp(int map, int portal) {
        MapleMap mapz = getWarpMap(map);
        if ((portal != 0) && (map == this.c.getPlayer().getMapId())) {
            Point portalPos = new Point(this.c.getPlayer().getMap().getPortal(portal).getPosition());
            if (portalPos.distanceSq(getPlayer().getTruePosition()) < 90000.0D) {
                this.c.getSession().write(MaplePacketCreator.instantMapWarp((byte) portal));
                this.c.getPlayer().checkFollow();
                this.c.getPlayer().getMap().movePlayer(this.c.getPlayer(), portalPos);
            } else {
                this.c.getPlayer().changeMap(mapz, mapz.getPortal(portal));
            }
        } else {
            this.c.getPlayer().changeMap(mapz, mapz.getPortal(portal));
        }
   //     this.c.getPlayer().setMaplewingmap();
    }

    public void warpS(int map, int portal) {
        MapleMap mapz = getWarpMap(map);
        this.c.getPlayer().changeMap(mapz, mapz.getPortal(portal));
   //     this.c.getPlayer().setMaplewingmap();
    }

    public void warp(int map, String portal) {
        MapleMap mapz = getWarpMap(map);
        if ((map == 109060000) || (map == 109060002) || (map == 109060004)) {
            portal = mapz.getSnowballPortal();
        }
        if (map == this.c.getPlayer().getMapId()) {
            Point portalPos = new Point(this.c.getPlayer().getMap().getPortal(portal).getPosition());
            if (portalPos.distanceSq(getPlayer().getTruePosition()) < 90000.0D) {
                this.c.getPlayer().checkFollow();
                this.c.getSession().write(MaplePacketCreator.instantMapWarp((byte) this.c.getPlayer().getMap().getPortal(portal).getId()));
                this.c.getPlayer().getMap().movePlayer(this.c.getPlayer(), new Point(this.c.getPlayer().getMap().getPortal(portal).getPosition()));
            } else {
                this.c.getPlayer().changeMap(mapz, mapz.getPortal(portal));
            }
        } else {
            this.c.getPlayer().changeMap(mapz, mapz.getPortal(portal));
        }
      //  this.c.getPlayer().setMaplewingmap();
    }

    public void warpS(int map, String portal) {
        MapleMap mapz = getWarpMap(map);
        if ((map == 109060000) || (map == 109060002) || (map == 109060004)) {
            portal = mapz.getSnowballPortal();
        }
        this.c.getPlayer().changeMap(mapz, mapz.getPortal(portal));
     //   this.c.getPlayer().setMaplewingmap();
    }

    public void warpMap(int mapid, int portal) {
        MapleMap map = getMap(mapid);
        for (MapleCharacter chr : this.c.getPlayer().getMap().getCharactersThreadsafe()) {
            chr.changeMap(map, map.getPortal(portal));
        }
      //  this.c.getPlayer().setMaplewingmap();
    }

    public void playPortalSE() {
        this.c.getSession().write(MaplePacketCreator.showOwnBuffEffect(0, 7, 1, 1));
    }

    private MapleMap getWarpMap(int map) {
        return ChannelServer.getInstance(this.c.getChannel()).getMapFactory().getMap(map);
    }

    public MapleMap getMap() {
        return this.c.getPlayer().getMap();
    }

    public MapleMap getMap(int map) {
        return getWarpMap(map);
    }

    public MapleMap getMap_Instanced(int map) {
        return this.c.getPlayer().getEventInstance() == null ? getMap(map) : this.c.getPlayer().getEventInstance().getMapInstance(map);
    }

    public void spawnMonster(int id, int qty) {
        spawnMob(id, qty, this.c.getPlayer().getTruePosition());
    }

    public void spawnMobOnMap(int id, int qty, int x, int y, int map) {
        for (int i = 0; i < qty; i++) {
            getMap(map).spawnMonsterOnGroundBelow(MapleLifeFactory.getMonster(id), new Point(x, y));
        }
    }

    public void spawnMob(int id, int qty, int x, int y) {
        spawnMob(id, qty, new Point(x, y));
    }

    public void spawnMob(int id, int x, int y) {
        spawnMob(id, 1, new Point(x, y));
    }

    private void spawnMob(int id, int qty, Point pos) {
        for (int i = 0; i < qty; i++) {
            this.c.getPlayer().getMap().spawnMonsterOnGroundBelow(MapleLifeFactory.getMonster(id), pos);
        }
    }

    public void killMob(int ids) {
        this.c.getPlayer().getMap().killMonster(ids);
    }

    public void killAllMob() {
        this.c.getPlayer().getMap().killAllMonsters(true);
    }

    public void addHP(int delta) {
        this.c.getPlayer().addHP(delta);
    }

    public int getPlayerStat(String type) {
        if (type.equals("LVL")) {
            return this.c.getPlayer().getLevel();
        }
        if (type.equals("STR")) {
            return this.c.getPlayer().getStat().getStr();
        }
        if (type.equals("DEX")) {
            return this.c.getPlayer().getStat().getDex();
        }
        if (type.equals("INT")) {
            return this.c.getPlayer().getStat().getInt();
        }
        if (type.equals("LUK")) {
            return this.c.getPlayer().getStat().getLuk();
        }
        if (type.equals("HP")) {
            return this.c.getPlayer().getStat().getHp();
        }
        if (type.equals("MP")) {
            return this.c.getPlayer().getStat().getMp();
        }
        if (type.equals("MAXHP")) {
            return this.c.getPlayer().getStat().getMaxHp();
        }
        if (type.equals("MAXMP")) {
            return this.c.getPlayer().getStat().getMaxMp();
        }
        if (type.equals("RAP")) {
            return this.c.getPlayer().getRemainingAp();
        }
        if (type.equals("RSP")) {
            return this.c.getPlayer().getRemainingSp();
        }
        if (type.equals("GID")) {
            return this.c.getPlayer().getGuildId();
        }
        if (type.equals("GRANK")) {
            return this.c.getPlayer().getGuildRank();
        }
        if (type.equals("ARANK")) {
            return this.c.getPlayer().getAllianceRank();
        }
        if (type.equals("GM")) {
            return this.c.getPlayer().isGM() ? 1 : 0;
        }
        if (type.equals("ADMIN")) {
            return this.c.getPlayer().isAdmin() ? 1 : 0;
        }
        if (type.equals("GENDER")) {
            return this.c.getPlayer().getGender();
        }
        if (type.equals("FACE")) {
            return this.c.getPlayer().getFace();
        }
        if (type.equals("HAIR")) {
            return this.c.getPlayer().getHair();
        }
        return -1;
    }

    public int getAndroidStat(String type) {
        if (type.equals("HAIR")) {
            return this.c.getPlayer().getAndroid().getHair();
        }
        if (type.equals("FACE")) {
            return this.c.getPlayer().getAndroid().getFace();
        }
        if (type.equals("SKIN")) {
            return this.c.getPlayer().getAndroid().getSkin();
        }
        if (type.equals("GENDER")) {
            return this.c.getPlayer().getAndroid().getGender();
        }
        return -1;
    }

    public String getName() {
        return this.c.getPlayer().getName();
    }

    public boolean haveItem(int itemid) {
        return haveItem(itemid, 1);
    }

    public boolean haveItem(int itemid, int quantity) {
        return haveItem(itemid, quantity, false, true);
    }

    public boolean haveItem(int itemid, int quantity, boolean checkEquipped, boolean greaterOrEquals) {
        return this.c.getPlayer().haveItem(itemid, quantity, checkEquipped, greaterOrEquals);
    }

    public int getItemQuantity(int itemid) {
        return this.c.getPlayer().getItemQuantity(itemid);
    }

    public boolean canHold() {
        for (int i = 1; i <= 5; i++) {
            if (this.c.getPlayer().getInventory(MapleInventoryType.getByType((byte) i)).getNextFreeSlot() <= -1) {
                return false;
            }
        }
        return true;
    }

    public boolean canHoldSlots(int slot) {
        for (int i = 1; i <= 5; i++) {
            if (this.c.getPlayer().getInventory(MapleInventoryType.getByType((byte) i)).isFull(slot)) {
                return false;
            }
        }
        return true;
    }

    public boolean canHold(int itemid) {
        return this.c.getPlayer().getInventory(GameConstants.getInventoryType(itemid)).getNextFreeSlot() > -1;
    }

    public boolean canHold(int itemid, int quantity) {
        return MapleInventoryManipulator.checkSpace(this.c, itemid, quantity, "");
    }

    public MapleQuestStatus getQuestRecord(int id) {
        return this.c.getPlayer().getQuestNAdd(MapleQuest.getInstance(id));
    }

    public MapleQuestStatus getQuestNoRecord(int id) {
        return this.c.getPlayer().getQuestNoAdd(MapleQuest.getInstance(id));
    }

    public byte getQuestStatus(int id) {
        return this.c.getPlayer().getQuestStatus(id);
    }

    public boolean isQuestActive(int id) {
        return getQuestStatus(id) == 1;
    }

    public boolean isQuestFinished(int id) {
        return getQuestStatus(id) == 2;
    }

    public void showQuestMsg(String msg) {
        this.c.getSession().write(MaplePacketCreator.showQuestMsg(msg));
    }

    public void forceStartQuest(int id, String data) {
        MapleQuest.getInstance(id).forceStart(this.c.getPlayer(), 0, data);
    }

    public void forceStartQuest(int id, int data, boolean filler) {
        MapleQuest.getInstance(id).forceStart(this.c.getPlayer(), 0, filler ? String.valueOf(data) : null);
    }

    public void forceStartQuest(int id) {
        MapleQuest.getInstance(id).forceStart(this.c.getPlayer(), 0, null);
    }

    public void forceCompleteQuest(int id) {
        MapleQuest.getInstance(id).forceComplete(getPlayer(), 0);
    }

    public void spawnNpc(int npcId) {
        this.c.getPlayer().getMap().spawnNpc(npcId, this.c.getPlayer().getPosition());
    }

    public void spawnNpc(int npcId, int x, int y) {
        this.c.getPlayer().getMap().spawnNpc(npcId, new Point(x, y));
    }

    public void spawnNpc(int npcId, Point pos) {
        this.c.getPlayer().getMap().spawnNpc(npcId, pos);
    }

    public void removeNpc(int mapid, int npcId) {
        this.c.getChannelServer().getMapFactory().getMap(mapid).removeNpc(npcId);
    }

    public void removeNpc(int npcId) {
        this.c.getPlayer().getMap().removeNpc(npcId);
    }

    public void forceStartReactor(int mapid, int id) {
        MapleMap map = this.c.getChannelServer().getMapFactory().getMap(mapid);

        for (MapleMapObject remo : map.getAllReactorsThreadsafe()) {
            MapleReactor react = (MapleReactor) remo;
            if (react.getReactorId() == id) {
                react.forceStartReactor(this.c);
                break;
            }
        }
    }

    public void destroyReactor(int mapid, int id) {
        MapleMap map = this.c.getChannelServer().getMapFactory().getMap(mapid);

        for (MapleMapObject remo : map.getAllReactorsThreadsafe()) {
            MapleReactor react = (MapleReactor) remo;
            if (react.getReactorId() == id) {
                react.hitReactor(this.c);
                break;
            }
        }
    }

    public void hitReactor(int mapid, int id) {
        MapleMap map = this.c.getChannelServer().getMapFactory().getMap(mapid);

        for (MapleMapObject remo : map.getAllReactorsThreadsafe()) {
            MapleReactor react = (MapleReactor) remo;
            if (react.getReactorId() == id) {
                react.hitReactor(this.c);
                break;
            }
        }
    }

    public int getJob() {
        return this.c.getPlayer().getJob();
    }

    /**
     * ��ȡ��ǰְҵ��ID
     *
     * @return
     */
    public int getJobId() {
        return this.c.getPlayer().getJob();
    }

    public String getJobName(int id) {
        return MapleCarnivalChallenge.getJobNameById(id);
    }

    public boolean isBeginnerJob() {
        return ((getJob() == 0) || (getJob() == 1000) || (getJob() == 2000) || (getJob() == 2001) || (getJob() == 2002) || (getJob() == 2003) || (getJob() == 3000) || (getJob() == 3001)) && (getLevel() < 11);
    }

    public int getLevel() {
        return this.c.getPlayer().getLevel();
    }

    public int getFame() {
        return this.c.getPlayer().getFame();
    }

    public void gainFame(int famechange) {
        gainFame(famechange, false);
    }

    public void gainFame(int famechange, boolean show) {
        this.c.getPlayer().gainFame(famechange, show);
    }

    public void getNX(int type) {
        if ((type <= 0) || (type > 2)) {
            type = 2;
        }
        this.c.getPlayer().getCSPoints(type);
    }

    public void gainNX(int amount) {
        this.c.getPlayer().modifyCSPoints(1, amount, true);
    }

    public void gainNX(int type, int amount) {
        if ((type <= 0) || (type > 2)) {
            type = 2;
        }
        this.c.getPlayer().modifyCSPoints(type, amount, true);
    }

    public void gainItemPeriod(int id, short quantity, int period) {
        gainItem(id, quantity, false, period, -1, "");
    }

    public void gainItemPeriod(int id, short quantity, long period, String owner) {
        gainItem(id, quantity, false, period, -1, owner);
    }

    public void gainItem(int id, short quantity) {
        gainItem(id, quantity, false, 0L, -1, "");
    }
    
    public void gainItem(int id, int quantitys) {
        short quantity;
        if (quantitys > 300) {
            quantity = 300;
        } else {
            quantity = (short) quantitys;
        }
        gainItem(id, quantity, false, 0L, -1, "");
    }

    public void gainItem(int id, short quantity, boolean randomStats) {
        gainItem(id, quantity, randomStats, 0L, -1, "");
    }

    public void gainItem(int id, short quantity, boolean randomStats, int slots) {
        gainItem(id, quantity, randomStats, 0L, slots, "");
    }

    public void gainItem(int id, short quantity, long period) {
        gainItem(id, quantity, false, period, -1, "");
    }

    public void gainItem(int id, short quantity, boolean randomStats, long period, int slots) {
        gainItem(id, quantity, randomStats, period, slots, "");
    }

    public void gainItem(int id, short quantity, boolean randomStats, long period, int slots, String owner) {
        gainItem(id, quantity, randomStats, period, slots, owner, this.c);
    }

    public void gainItem(int id, short quantity, boolean randomStats, long period, int slots, String owner, MapleClient cg) {
        if (GameConstants.isLogItem(id)) {
            String itemText = new StringBuilder().append("��� ").append(StringUtil.getRightPaddedStr(cg.getPlayer().getName(), ' ', 13)).append(quantity >= 0 ? " ��õ���: " : " ʧȥ����: ").append(id).append(" ����: ").append(StringUtil.getRightPaddedStr(String.valueOf(Math.abs(quantity)), ' ', 5)).append(" ��������: ").append(getItemName(id)).toString();
            log.info(new StringBuilder().append("[��Ʒ] ").append(itemText).toString());
            Broadcast.broadcastGMMessage(MaplePacketCreator.serverNotice(6, new StringBuilder().append("[GM Message] ").append(itemText).toString()));
        }
        if (quantity >= 0) {
            MapleItemInformationProvider ii = MapleItemInformationProvider.getInstance();
            MapleInventoryType type = GameConstants.getInventoryType(id);
            if (!MapleInventoryManipulator.checkSpace(cg, id, quantity, "")) {
                return;
            }
            if ((type.equals(MapleInventoryType.EQUIP)) && (!GameConstants.isThrowingStar(id)) && (!GameConstants.isBullet(id))) {
                Equip item = (Equip) (randomStats ? ii.randomizeStats((Equip) ii.getEquipById(id)) : ii.getEquipById(id));
                if (period > 0L) {
                    item.setExpiration(System.currentTimeMillis() + period * 24L * 60L * 60L * 1000L);
                }
                if (slots > 0) {
                    item.setUpgradeSlots((byte) (item.getUpgradeSlots() + slots));
                }
                if (owner != null) {
                    item.setOwner(owner);
                }
                item.setGMLog(new StringBuilder().append("�ű���� ").append(this.id).append(" (").append(this.id2).append(") ��ͼ: ").append(cg.getPlayer().getMapId()).append(" ʱ��: ").append(FileoutputUtil.CurrentReadable_Time()).toString());
                String name = ii.getName(id);
                if ((id / 10000 == 114) && (name != null) && (name.length() > 0)) {
                    String msg = new StringBuilder().append("��ϲ�����ѫ�� <").append(name).append(">").toString();
                    cg.getPlayer().dropMessage(-1, msg);
                    cg.getPlayer().dropMessage(5, msg);
                }
                MapleInventoryManipulator.addbyItem(cg, item.copy());
            } else {
                MapleInventoryManipulator.addById(cg, id, quantity, owner == null ? "" : owner, null, period, new StringBuilder().append("�ű���� ").append(this.id).append(" (").append(this.id2).append(") ��ͼ: ").append(cg.getPlayer().getMapId()).append(" ʱ��: ").append(FileoutputUtil.CurrentReadable_Time()).toString());
            }
        } else {
            MapleInventoryManipulator.removeById(cg, GameConstants.getInventoryType(id), id, -quantity, true, false);
        }
        cg.getSession().write(MaplePacketCreator.getShowItemGain(id, quantity, true));
    }

    public boolean removeItem(int id) {
        if (MapleInventoryManipulator.removeById_Lock(this.c, GameConstants.getInventoryType(id), id)) {
            c.getSession().write(MaplePacketCreator.getShowItemGain(id, (short) -1, true));
            return true;
        }
        return false;
    }

    public void changeMusic(String songName) {
        getPlayer().getMap().broadcastMessage(MaplePacketCreator.musicChange(songName));
    }

    public void worldMessage(String message) {
        worldMessage(6, message);
    }

    public void worldMessage(int type, String message) {
        Broadcast.broadcastMessage(MaplePacketCreator.serverNotice(type, message));
    }

    public void playerMessage(String message) {
        playerMessage(5, message);
    }

    public void mapMessage(String message) {
        mapMessage(5, message);
    }

    public void guildMessage(String message) {
        guildMessage(5, message);
    }

    public void playerMessage(int type, String message) {
        this.c.getPlayer().dropMessage(type, message);
    }

    public void mapMessage(int type, String message) {
        this.c.getPlayer().getMap().broadcastMessage(MaplePacketCreator.serverNotice(type, message));
    }

    public void guildMessage(int type, String message) {
        if (getPlayer().getGuildId() > 0) {
            Guild.guildPacket(getPlayer().getGuildId(), MaplePacketCreator.serverNotice(type, message));
        }
    }

    public void topMessage(String message) {
        this.c.getSession().write(UIPacket.getTopMsg(message));
    }

    public MapleGuild getGuild() {
        return getGuild(getPlayer().getGuildId());
    }

    public MapleGuild getGuild(int guildid) {
        return Guild.getGuild(guildid);
    }

    public MapleParty getParty() {
        return this.c.getPlayer().getParty();
    }

    public int getCurrentPartyId(int mapid) {
        return getMap(mapid).getCurrentPartyId();
    }

    public boolean isLeader() {
        if (getPlayer().getParty() == null) {
            return false;
        }
        return getParty().getLeader().getId() == this.c.getPlayer().getId();
    }

    public boolean isAllPartyMembersAllowedJob(int job) {
        if (this.c.getPlayer().getParty() == null) {
            return false;
        }
        for (MaplePartyCharacter mem : this.c.getPlayer().getParty().getMembers()) {
            if (mem.getJobId() / 100 != job) {
                return false;
            }
        }
        return true;
    }

    public boolean allMembersHere() {
        if (this.c.getPlayer().getParty() == null) {
            return false;
        }
        for (MaplePartyCharacter mem : this.c.getPlayer().getParty().getMembers()) {
            MapleCharacter chr = this.c.getPlayer().getMap().getCharacterById(mem.getId());
            if (chr == null) {
                return false;
            }
        }
        return true;
    }

    public void warpParty(int mapId) {
        if ((getPlayer().getParty() == null) || (getPlayer().getParty().getMembers().size() == 1)) {
            warp(mapId, 0);
            return;
        }
        MapleMap target = getMap(mapId);
        int cMap = getPlayer().getMapId();
        for (MaplePartyCharacter chr : getPlayer().getParty().getMembers()) {
            MapleCharacter curChar = getChannelServer().getPlayerStorage().getCharacterById(chr.getId());
            if ((curChar != null) && ((curChar.getMapId() == cMap) || (curChar.getEventInstance() == getPlayer().getEventInstance()))) {
                curChar.changeMap(target, target.getPortal(0));
            }
        }
    }

    public void warpParty(int mapId, int portal) {
        if ((getPlayer().getParty() == null) || (getPlayer().getParty().getMembers().size() == 1)) {
            if (portal < 0) {
                warp(mapId);
            } else {
                warp(mapId, portal);
            }
            return;
        }
        boolean rand = portal < 0;
        MapleMap target = getMap(mapId);
        int cMap = getPlayer().getMapId();
        for (MaplePartyCharacter chr : getPlayer().getParty().getMembers()) {
            MapleCharacter curChar = getChannelServer().getPlayerStorage().getCharacterById(chr.getId());
            if ((curChar != null) && ((curChar.getMapId() == cMap) || (curChar.getEventInstance() == getPlayer().getEventInstance()))) {
                if (rand) {
                    try {
                        curChar.changeMap(target, target.getPortal(Randomizer.nextInt(target.getPortals().size())));
                    } catch (Exception e) {
                        curChar.changeMap(target, target.getPortal(0));
                    }
                } else {
                    curChar.changeMap(target, target.getPortal(portal));
                }
            }
        }
    }

    public void warpParty_Instanced(int mapId) {
        if ((getPlayer().getParty() == null) || (getPlayer().getParty().getMembers().size() == 1)) {
            warp_Instanced(mapId);
            return;
        }
        MapleMap target = getMap_Instanced(mapId);

        int cMap = getPlayer().getMapId();
        for (MaplePartyCharacter chr : getPlayer().getParty().getMembers()) {
            MapleCharacter curChar = getChannelServer().getPlayerStorage().getCharacterById(chr.getId());
            if ((curChar != null) && ((curChar.getMapId() == cMap) || (curChar.getEventInstance() == getPlayer().getEventInstance()))) {
                curChar.changeMap(target, target.getPortal(0));
            }
        }
    }

    public void gainMeso(int gain) {
        this.c.getPlayer().gainMeso(gain, true, true);
    }

    public void gainExp(int gain) {
        this.c.getPlayer().gainExp(gain, true, true, true);
    }

    public void gainExpR(int gain) {
        this.c.getPlayer().gainExp(gain * this.c.getChannelServer().getExpRate(), true, true, true);
    }

    public void givePartyItems(int id, short quantity, List<MapleCharacter> party) {
        for (MapleCharacter chr : party) {
            if (quantity >= 0) {
                MapleInventoryManipulator.addById(chr.getClient(), id, quantity, new StringBuilder().append("Received from party interaction ").append(id).append(" (").append(this.id2).append(")").toString());
            } else {
                MapleInventoryManipulator.removeById(chr.getClient(), GameConstants.getInventoryType(id), id, -quantity, true, false);
            }
            chr.getClient().getSession().write(MaplePacketCreator.getShowItemGain(id, quantity, true));
        }
    }

    public void addPartyTrait(String t, int e, List<MapleCharacter> party) {
        for (MapleCharacter chr : party) {
            chr.getTrait(MapleTrait.MapleTraitType.valueOf(t)).addExp(e, chr);
        }
    }

    public void addPartyTrait(String t, int e) {
        if ((getPlayer().getParty() == null) || (getPlayer().getParty().getMembers().size() == 1)) {
            addTrait(t, e);
            return;
        }
        int cMap = getPlayer().getMapId();
        for (MaplePartyCharacter chr : getPlayer().getParty().getMembers()) {
            MapleCharacter curChar = getChannelServer().getPlayerStorage().getCharacterById(chr.getId());
            if ((curChar != null) && ((curChar.getMapId() == cMap) || (curChar.getEventInstance() == getPlayer().getEventInstance()))) {
                curChar.getTrait(MapleTrait.MapleTraitType.valueOf(t)).addExp(e, curChar);
            }
        }
    }

    public void addTrait(String t, int e) {
        getPlayer().getTrait(MapleTrait.MapleTraitType.valueOf(t)).addExp(e, getPlayer());
    }

    public void givePartyItems(int id, short quantity) {
        givePartyItems(id, quantity, false);
    }

    public void givePartyItems(int id, short quantity, boolean removeAll) {
        if ((getPlayer().getParty() == null) || (getPlayer().getParty().getMembers().size() == 1)) {
            gainItem(id, (short) (removeAll ? -getPlayer().itemQuantity(id) : quantity));
            return;
        }
        int cMap = getPlayer().getMapId();
        for (MaplePartyCharacter chr : getPlayer().getParty().getMembers()) {
            MapleCharacter curChar = getChannelServer().getPlayerStorage().getCharacterById(chr.getId());
            if ((curChar != null) && ((curChar.getMapId() == cMap) || (curChar.getEventInstance() == getPlayer().getEventInstance()))) {
                gainItem(id, (short) (removeAll ? -curChar.itemQuantity(id) : quantity), false, 0L, 0, "", curChar.getClient());
            }
        }
    }

    public void givePartyExp_PQ(int maxLevel, double mod, List<MapleCharacter> party) {
        for (MapleCharacter chr : party) {
            int amount = (int) Math.round(GameConstants.getExpNeededForLevel(chr.getLevel() > maxLevel ? maxLevel + (maxLevel - chr.getLevel()) / 10 : chr.getLevel()) / (Math.min(chr.getLevel(), maxLevel) / 5.0D) / (mod * 2.0D));
            chr.gainExp(amount * this.c.getChannelServer().getExpRate(), true, true, true);
        }
    }

    public void gainExp_PQ(int maxLevel, double mod) {
        int amount = (int) Math.round(GameConstants.getExpNeededForLevel(getPlayer().getLevel() > maxLevel ? maxLevel + getPlayer().getLevel() / 10 : getPlayer().getLevel()) / (Math.min(getPlayer().getLevel(), maxLevel) / 10.0D) / mod);
        gainExp(amount * this.c.getChannelServer().getExpRate());
    }

    public void givePartyExp_PQ(int maxLevel, double mod) {
        if ((getPlayer().getParty() == null) || (getPlayer().getParty().getMembers().size() == 1)) {
            int amount = (int) Math.round(GameConstants.getExpNeededForLevel(getPlayer().getLevel() > maxLevel ? maxLevel + getPlayer().getLevel() / 10 : getPlayer().getLevel()) / (Math.min(getPlayer().getLevel(), maxLevel) / 10.0D) / mod);
            gainExp(amount * this.c.getChannelServer().getExpRate());
            return;
        }
        int cMap = getPlayer().getMapId();
        for (MaplePartyCharacter chr : getPlayer().getParty().getMembers()) {
            MapleCharacter curChar = getChannelServer().getPlayerStorage().getCharacterById(chr.getId());
            if ((curChar != null) && ((curChar.getMapId() == cMap) || (curChar.getEventInstance() == getPlayer().getEventInstance()))) {
                int amount = (int) Math.round(GameConstants.getExpNeededForLevel(curChar.getLevel() > maxLevel ? maxLevel + curChar.getLevel() / 10 : curChar.getLevel()) / (Math.min(curChar.getLevel(), maxLevel) / 10.0D) / mod);
                curChar.gainExp(amount * this.c.getChannelServer().getExpRate(), true, true, true);
            }
        }
    }

    public void givePartyExp(int amount, List<MapleCharacter> party) {
        for (MapleCharacter chr : party) {
            chr.gainExp(amount * this.c.getChannelServer().getExpRate(), true, true, true);
        }
    }

    public void givePartyExp(int amount) {
        if ((getPlayer().getParty() == null) || (getPlayer().getParty().getMembers().size() == 1)) {
            gainExp(amount * this.c.getChannelServer().getExpRate());
            return;
        }
        int cMap = getPlayer().getMapId();
        for (MaplePartyCharacter chr : getPlayer().getParty().getMembers()) {
            MapleCharacter curChar = getChannelServer().getPlayerStorage().getCharacterById(chr.getId());
            if ((curChar != null) && ((curChar.getMapId() == cMap) || (curChar.getEventInstance() == getPlayer().getEventInstance()))) {
                curChar.gainExp(amount * this.c.getChannelServer().getExpRate(), true, true, true);
            }
        }
    }

    public void givePartyNX(int amount, List<MapleCharacter> party) {
        for (MapleCharacter chr : party) {
            chr.modifyCSPoints(1, amount, true);
        }
    }

    public void givePartyNX(int amount) {
        if ((getPlayer().getParty() == null) || (getPlayer().getParty().getMembers().size() == 1)) {
            gainNX(amount);
            return;
        }
        int cMap = getPlayer().getMapId();
        for (MaplePartyCharacter chr : getPlayer().getParty().getMembers()) {
            MapleCharacter curChar = getChannelServer().getPlayerStorage().getCharacterById(chr.getId());
            if ((curChar != null) && ((curChar.getMapId() == cMap) || (curChar.getEventInstance() == getPlayer().getEventInstance()))) {
                curChar.modifyCSPoints(1, amount, true);
            }
        }
    }

    public void endPartyQuest(int amount, List<MapleCharacter> party) {
        for (MapleCharacter chr : party) {
            chr.endPartyQuest(amount);
        }
    }

    public void endPartyQuest(int amount) {
        if ((getPlayer().getParty() == null) || (getPlayer().getParty().getMembers().size() == 1)) {
            getPlayer().endPartyQuest(amount);
            return;
        }
        int cMap = getPlayer().getMapId();
        for (MaplePartyCharacter chr : getPlayer().getParty().getMembers()) {
            MapleCharacter curChar = getChannelServer().getPlayerStorage().getCharacterById(chr.getId());
            if ((curChar != null) && ((curChar.getMapId() == cMap) || (curChar.getEventInstance() == getPlayer().getEventInstance()))) {
                curChar.endPartyQuest(amount);
            }
        }
    }

    public void removeFromParty(int id, List<MapleCharacter> party) {
        for (MapleCharacter chr : party) {
            int possesed = chr.getInventory(GameConstants.getInventoryType(id)).countById(id);
            if (possesed > 0) {
                MapleInventoryManipulator.removeById(this.c, GameConstants.getInventoryType(id), id, possesed, true, false);
                chr.getClient().getSession().write(MaplePacketCreator.getShowItemGain(id, (short) (-possesed), true));
            }
        }
    }

    public void removeFromParty(int id) {
        givePartyItems(id, (short) 0, true);
    }

    public void useSkill(int skill, int level) {
        if (level <= 0) {
            return;
        }
        SkillFactory.getSkill(skill).getEffect(level).applyTo(this.c.getPlayer());
    }

    public void useItem(int id) {
        MapleItemInformationProvider.getInstance().getItemEffect(id).applyTo(this.c.getPlayer());
        this.c.getSession().write(UIPacket.getStatusMsg(id));
    }

    public void cancelItem(int id) {
        this.c.getPlayer().cancelEffect(MapleItemInformationProvider.getInstance().getItemEffect(id), false, -1L);
    }

    public int getMorphState() {
        return this.c.getPlayer().getMorphState();
    }

    public void removeAll(int id) {
        this.c.getPlayer().removeAll(id);
    }

    public void gainCloseness(int closeness, int index) {
        MaplePet pet = getPlayer().getPet(index);
        if (pet != null) {
            pet.setCloseness(pet.getCloseness() + closeness * getChannelServer().getTraitRate());
            getClient().getSession().write(PetPacket.updatePet(pet, getPlayer().getInventory(MapleInventoryType.CASH).getItem((short) (byte) pet.getInventoryPosition()), true));
        }
    }

    public void gainClosenessAll(int closeness) {
        for (MaplePet pet : getPlayer().getPets()) {
            if ((pet != null) && (pet.getSummoned())) {
                pet.setCloseness(pet.getCloseness() + closeness);
                getClient().getSession().write(PetPacket.updatePet(pet, getPlayer().getInventory(MapleInventoryType.CASH).getItem((short) (byte) pet.getInventoryPosition()), true));
            }
        }
    }

    public void resetMap(int mapid) {
        getMap(mapid).resetFully();
    }

    public void openNpc(int id) {
        getClient().removeClickedNPC();
        NPCScriptManager.getInstance().start(getClient(), id);
    }

    public void openNpc(MapleClient cg, int id) {
        cg.removeClickedNPC();
        NPCScriptManager.getInstance().start(cg, id);
    }

    public void openNpc(int id, int npcMode) {
        getClient().removeClickedNPC();
        NPCScriptManager.getInstance().start(getClient(), id, npcMode);
    }

    /**
     * ��ȡ��ǰ��ͼ��ID
     *
     * @return
     */
    public int getMapId() {
        return this.c.getPlayer().getMap().getId();
    }

    public boolean haveMonster(int mobid) {
        for (MapleMapObject obj : this.c.getPlayer().getMap().getAllMonstersThreadsafe()) {
            MapleMonster mob = (MapleMonster) obj;
            if (mob.getId() == mobid) {
                return true;
            }
        }
        return false;
    }

    public int getChannelNumber() {
        return this.c.getChannel();
    }

    /**
     * ���ݵ�ͼID��ȡ�õ�ͼ�Ĺ�������
     *
     * @param mapid ��ͼID
     * @return
     */
    public int getMonsterCount(int mapid) {
        return this.c.getChannelServer().getMapFactory().getMap(mapid).getNumMonsters();
    }

    public void teachSkill(int id, int level, byte masterlevel) {
        getPlayer().changeSkillLevel(SkillFactory.getSkill(id), level, masterlevel);
    }

    public void teachSkill(int id, int level) {
        Skill skil = SkillFactory.getSkill(id);
        if (getPlayer().getSkillLevel(skil) > level) {
            level = getPlayer().getSkillLevel(skil);
        }
        getPlayer().changeSkillLevel(skil, level, (byte) skil.getMaxLevel());
    }

    /**
     * ���ݵ�ͼID��ȡ�õ�ͼ�ϵ��������
     *
     * @param mapid ��ͼID
     * @return
     */
    public int getPlayerCount(int mapid) {
        return this.c.getChannelServer().getMapFactory().getMap(mapid).getCharactersSize();
    }

    public void dojo_getUp() {
        this.c.getSession().write(MaplePacketCreator.updateInfoQuest(1207, "pt=1;min=4;belt=1;tuto=1"));
        this.c.getSession().write(MaplePacketCreator.Mulung_DojoUp2());
        this.c.getSession().write(MaplePacketCreator.instantMapWarp((byte) 6));
    }

    public boolean dojoAgent_NextMap(boolean dojo, boolean fromresting) {
        if (dojo) {
            return Event_DojoAgent.warpNextMap(this.c.getPlayer(), fromresting, this.c.getPlayer().getMap());
        }
        return Event_DojoAgent.warpNextMap_Agent(this.c.getPlayer(), fromresting);
    }

    public boolean dojoAgent_NextMap(boolean dojo, boolean fromresting, int mapid) {
        if (dojo) {
            return Event_DojoAgent.warpNextMap(this.c.getPlayer(), fromresting, getMap(mapid));
        }
        return Event_DojoAgent.warpNextMap_Agent(this.c.getPlayer(), fromresting);
    }

    public int dojo_getPts() {
        return this.c.getPlayer().getIntNoRecord(150100);
    }

    public MapleEvent getEvent(String loc) {
        return this.c.getChannelServer().getEvent(MapleEventType.valueOf(loc));
    }

    public int getSavedLocation(String loc) {
        Integer ret = Integer.valueOf(this.c.getPlayer().getSavedLocation(SavedLocationType.fromString(loc)));
        if ((ret == null) || (ret.intValue() == -1)) {
            return 100000000;
        }
        return ret.intValue();
    }

    public void saveLocation(String loc) {
        this.c.getPlayer().saveLocation(SavedLocationType.fromString(loc));
    }

    public void saveReturnLocation(String loc) {
        this.c.getPlayer().saveLocation(SavedLocationType.fromString(loc), this.c.getPlayer().getMap().getReturnMap().getId());
    }

    public void clearSavedLocation(String loc) {
        this.c.getPlayer().clearSavedLocation(SavedLocationType.fromString(loc));
    }

    public void summonMsg(String msg) {
        if (!this.c.getPlayer().hasSummon()) {
            playerSummonHint(true);
        }
        this.c.getSession().write(UIPacket.summonMessage(msg));
    }

    public void summonMsg(int type) {
        if (!this.c.getPlayer().hasSummon()) {
            playerSummonHint(true);
        }
        this.c.getSession().write(UIPacket.summonMessage(type));
    }

    public void showInstruction(String msg, int width, int height) {
        this.c.getSession().write(MaplePacketCreator.sendHint(msg, width, height));
    }

    public void playerSummonHint(boolean summon) {
        this.c.getPlayer().setHasSummon(summon);
        this.c.getSession().write(UIPacket.summonHelper(summon));
    }

    public String getInfoQuest(int id) {
        return this.c.getPlayer().getInfoQuest(id);
    }

    public void updateInfoQuest(int id, String data) {
        this.c.getPlayer().updateInfoQuest(id, data);
    }

    public boolean getEvanIntroState(String data) {
        return getInfoQuest(22013).equals(data);
    }

    public void updateEvanIntroState(String data) {
        updateInfoQuest(22013, data);
    }

    public void Aran_Start() {
        this.c.getSession().write(UIPacket.Aran_Start());
    }

    public void evanTutorial(String data, int v1) {
        this.c.getSession().write(MaplePacketCreator.getEvanTutorial(data));
    }

    public void AranTutInstructionalBubble(String data) {
        this.c.getSession().write(UIPacket.AranTutInstructionalBalloon(data));
    }

    public void ShowWZEffect(String data) {
        this.c.getSession().write(UIPacket.AranTutInstructionalBalloon(data));
    }

    public void showWZEffect(String data) {
        this.c.getSession().write(UIPacket.ShowWZEffect(data));
    }

    public void EarnTitleMsg(String data) {
        this.c.getSession().write(UIPacket.EarnTitleMsg(data));
    }

    public void EnableUI(short i) {
        this.c.getSession().write(UIPacket.IntroEnableUI(i));
    }

    public void DisableUI(boolean enabled) {
        this.c.getSession().write(UIPacket.IntroDisableUI(enabled));
    }

    public void MovieClipIntroUI(boolean enabled) {
        this.c.getSession().write(UIPacket.IntroDisableUI(enabled));
        this.c.getSession().write(UIPacket.IntroLock(enabled));
    }

    public MapleInventoryType getInvType(int i) {
        return MapleInventoryType.getByType((byte) i);
    }

    public String getItemName(int id) {
        return MapleItemInformationProvider.getInstance().getName(id);
    }

    public void gainPet(int id, String name, int level, int closeness, int fullness, long period, short flags) {
        if ((id > 5000200) || (id < 5000000)) {
            id = 5000000;
        }
        if (level > 30) {
            level = 30;
        }
        if (closeness > 30000) {
            closeness = 30000;
        }
        if (fullness > 100) {
            fullness = 100;
        }
        try {
            MapleInventoryManipulator.addById(this.c, id, (short) 1, "", MaplePet.createPet(id, name, level, closeness, fullness, MapleInventoryIdentifier.getInstance(), id == 5000054 ? (int) period : 0, flags, 0), 45L, new StringBuilder().append("Pet from interaction ").append(id).append(" (").append(this.id2).append(")").append(" on ").append(FileoutputUtil.CurrentReadable_Date()).toString());
        } catch (NullPointerException ex) {
            ex.printStackTrace();
        }
    }

    public void removeSlot(int invType, byte slot, short quantity) {
        MapleInventoryManipulator.removeFromSlot(this.c, getInvType(invType), (short) slot, quantity, true);
    }

    public void gainGP(int gp) {
        if (getPlayer().getGuildId() <= 0) {
            return;
        }
        Guild.gainGP(getPlayer().getGuildId(), gp);
    }

    public int getGP() {
        if (getPlayer().getGuildId() <= 0) {
            return 0;
        }
        return Guild.getGP(getPlayer().getGuildId());
    }

    public void showMapEffect(String path) {
        getClient().getSession().write(UIPacket.MapEff(path));
    }

    public int itemQuantity(int itemid) {
        return getPlayer().itemQuantity(itemid);
    }

    public EventInstanceManager getDisconnected(String event) {
        EventManager em = getEventManager(event);
        if (em == null) {
            return null;
        }
        for (EventInstanceManager eim : em.getInstances()) {
            if ((eim.isDisconnected(this.c.getPlayer())) && (eim.getPlayerCount() > 0)) {
                return eim;
            }
        }
        return null;
    }

    public boolean isAllReactorState(int reactorId, int state) {
        boolean ret = false;
        for (MapleReactor r : getMap().getAllReactorsThreadsafe()) {
            if (r.getReactorId() == reactorId) {
                ret = r.getState() == state;
            }
        }
        return ret;
    }

    public long getCurrentTime() {
        return System.currentTimeMillis();
    }

    public void spawnMonster(int id) {
        spawnMonster(id, 1, getPlayer().getTruePosition());
    }

    public void spawnMonster(int id, int x, int y) {
        spawnMonster(id, 1, new Point(x, y));
    }

    public void spawnMonster(int id, int qty, int x, int y) {
        spawnMonster(id, qty, new Point(x, y));
    }

    public void spawnMonster(int id, int qty, Point pos) {
        for (int i = 0; i < qty; i++) {
            getMap().spawnMonsterOnGroundBelow(MapleLifeFactory.getMonster(id), pos);
        }
    }

    public void sendNPCText(String text, int npc) {
        getMap().broadcastMessage(MaplePacketCreator.getNPCTalk(npc, (byte) 0, text, "00 00", (byte) 0));
    }

    public boolean getTempFlag(int flag) {
        return (this.c.getChannelServer().getTempFlag() & flag) == flag;
    }

    public void logPQ(String text) {
    }

    public void outputFileError(Throwable t) {
        FileoutputUtil.outputFileError("log\\Script_Except.log", t);
    }

    public void trembleEffect(int type, int delay) {
        this.c.getSession().write(MaplePacketCreator.trembleEffect(type, delay));
    }

    public int nextInt(int arg0) {
        return Randomizer.nextInt(arg0);
    }

    public MapleQuest getQuest(int arg0) {
        return MapleQuest.getInstance(arg0);
    }

    public void achievement(int a) {
        this.c.getPlayer().getMap().broadcastMessage(MaplePacketCreator.achievementRatio(a));
    }

    public MapleInventory getInventory(int type) {
        return this.c.getPlayer().getInventory(MapleInventoryType.getByType((byte) type));
    }

    public boolean isGMS() {
        return GameConstants.GMS;
    }

    public int randInt(int arg0) {
        return Randomizer.nextInt(arg0);
    }

    public void sendDirectionStatus(int key, int value) {
        this.c.getSession().write(UIPacket.getDirectionInfo(key, value));
        this.c.getSession().write(UIPacket.getDirectionStatus(true));
    }

    public void sendDirectionInfo(String data) {
        this.c.getSession().write(UIPacket.getDirectionInfo(data, 2000, 0, -100, 0));
        this.c.getSession().write(UIPacket.getDirectionInfo(1, 2000));
    }

    public int getProfessions() {
        int ii = 0;

        for (int i = 0; i < 5; i++) {
            int skillId = 92000000 + i * 10000;
            if (this.c.getPlayer().getProfessionLevel(skillId) > 0) {
                ii++;
            }
        }
        return ii;
    }

    /**
     * ����VIP
     *
     * @param vip �ȼ�
     */
    public void setVip(int vip) {
        setVip(vip, 7);
    }

    /**
     * ����VIP
     *
     * @param vip �ȼ�
     * @param period ʱ��
     */
    public void setVip(int vip, long period) {
        this.c.getPlayer().setVip(vip);
        if (period > 0L) {
            this.c.getPlayer().setViptime(period);
        }
    }

    /**
     * ��ȡ��ǰVIP�ȼ�
     *
     * @return
     */
    public int getVip() {
        return this.c.getPlayer().getVip();
    }

    /**
     * �ж��Ƿ�VIP
     *
     * @return
     */
    public boolean isVip() {
        return this.c.getPlayer().getVip() > 0;
    }

    /**
     * ����VIPʱ��
     *
     * @param period
     */
    public void setViptime(long period) {
        if (period != 0L) {
            this.c.getPlayer().setViptime(period);
        }
    }

    /**
     * ����VIP�ɳ�ֵ
     * @param vipczz 
     */
    public void setVipczz(int vipczz) {
        c.getPlayer().setVipczz(vipczz);
    }

    /**
     * ��ȡVIP�ĳɳ�ֵ
     * @return 
     */
    public int getVipczz() {
        return c.getPlayer().getVipczz();
    }

    public int getBossLog(String bossid) {
        return this.c.getPlayer().getBossLog(bossid);
    }

    public int getBossLog(String bossid, int type) {
        return this.c.getPlayer().getBossLog(bossid, type);
    }

    public void setBossLog(String bossid) {
        this.c.getPlayer().setBossLog(bossid);
    }

    public void setBossLog(String bossid, int type) {
        this.c.getPlayer().setBossLog(bossid, type);
    }

    public void setBossLog(String bossid, int type, int count) {
        this.c.getPlayer().setBossLog(bossid, type, count);
    }

    public void resetBossLog(String bossid) {
        this.c.getPlayer().resetBossLog(bossid);
    }

    public void resetBossLog(String bossid, int type) {
        this.c.getPlayer().resetBossLog(bossid, type);
    }

    public void getClock(int time) {
        this.c.getSession().write(MaplePacketCreator.getClock(time));
    }
    
    public int getMaplewing(String te) {
        upMaplewing();
        return this.c.getPlayer().getMaplewing(te);
    }
    
    public int getMaplewing(String te, int ids) {
        upMaplewing(ids);
        return this.c.getPlayer().getMaplewing(te, ids);
    }
    
    public int addMaplewing(String te, int tas) {
        upMaplewing();
        return this.c.getPlayer().addMaplewing(te, tas);
    }
    
    public int addMaplewing(String te, int tas, int ids) {
        upMaplewing(ids);
        return this.c.getPlayer().addMaplewing(te, tas, ids);
    }
    
    public void upMaplewing() {
         this.c.getPlayer().upMaplewing();
    }
    
    public void upMaplewing(int ids) {
         this.c.getPlayer().upMaplewing(ids);
    }
    
    public int setMaplewing(String te, int tas) {
        upMaplewing();
        return this.c.getPlayer().setMaplewing(te, tas);
    }
    
    public int setMaplewing(String te, int das, int ids) {
        upMaplewing(ids);
        return this.c.getPlayer().setMaplewing(te, das, ids);
    }
    
    public String getColor() {
        upMaplewing();
        return this.c.getPlayer().getColor();
    }
    
    public String getColor(int ids) {
        upMaplewing(ids);
        return this.c.getPlayer().getColor(ids);
    }
    
    public String getMaplewings(String te) {
        upMaplewing();
        return this.c.getPlayer().getMaplewings(te);
    }
    
    public String getMaplewings(String te,int ids) {
        upMaplewing(ids);
        return this.c.getPlayer().getMaplewings(te, ids);
    }
    
    public String getVipname() {
        return this.c.getPlayer().getVipname();
    }

    /**
     * ��ָ����ַ
     *
     * @param web ��ַ
     */
    public void openWeb(String web) {
        this.c.getSession().write(MaplePacketCreator.openWeb(web));
    }

    public boolean isCanPvp() {
        return this.c.getChannelServer().isCanPvp();
    }

    public void showDoJangRank() {
        this.c.getSession().write(MaplePacketCreator.showDoJangRank());
    }
    
    /**
     * ��ʾ��������
     */
    public void showlayGuildRanks() {
        this.c.getSession().write(GuildPacket.showGuildRanks(this.id, MapleGuildRanking.getInstance().getRank()));
    }

    public int MarrageChecking() {
        if (getPlayer().getParty() == null) {
            return -1;
        }
        if (getPlayer().getMarriageId() > 0) {
            return 0;
        }
        if (getPlayer().getParty().getMembers().size() != 2) {
            return 1;
        }
        if ((getPlayer().getGender() == 0) && (!getPlayer().haveItem(1050121)) && (!getPlayer().haveItem(1050122)) && (!getPlayer().haveItem(1050113))) {
            return 5;
        }
        if ((getPlayer().getGender() == 1) && (!getPlayer().haveItem(1051129)) && (!getPlayer().haveItem(1051130)) && (!getPlayer().haveItem(1051114))) {
            return 5;
        }
        if (!getPlayer().haveItem(1112001)) {
            return 6;
        }
        for (MaplePartyCharacter chr : getPlayer().getParty().getMembers()) {
            if (chr.getId() == getPlayer().getId()) {
                continue;
            }
            MapleCharacter curChar = getChannelServer().getPlayerStorage().getCharacterById(chr.getId());
            if (curChar == null) {
                return 2;
            }
            if (curChar.getMarriageId() > 0) {
                return 3;
            }
            if (curChar.getGender() == getPlayer().getGender()) {
                return 4;
            }
            if ((curChar.getGender() == 0) && (!curChar.haveItem(1050121)) && (!curChar.haveItem(1050122)) && (!curChar.haveItem(1050113))) {
                return 5;
            }
            if ((curChar.getGender() == 1) && (!curChar.haveItem(1051129)) && (!curChar.haveItem(1051130)) && (!curChar.haveItem(1051114))) {
                return 5;
            }
            if (!curChar.haveItem(1112001)) {
                return 6;
            }
        }
        return 9;
    }

    public int getPartyFormID() {
        int curCharID = -1;
        if (getPlayer().getParty() == null) {
            curCharID = -1;
        } else if (getPlayer().getMarriageId() > 0) {
            curCharID = -2;
        } else if (getPlayer().getParty().getMembers().size() != 2) {
            curCharID = -3;
        }
        for (MaplePartyCharacter chr : getPlayer().getParty().getMembers()) {
            if (chr.getId() == getPlayer().getId()) {
                continue;
            }
            MapleCharacter curChar = getChannelServer().getPlayerStorage().getCharacterById(chr.getId());
            if (curChar == null) {
                curCharID = -4;
            } else {
                curCharID = chr.getId();
            }
        }
        return curCharID;
    }
    public void setattack(final int attack, final int minmapid, final int maxmapid) {
        c.getPlayer().setattack(1, attack, minmapid, maxmapid);
    }

    /**
     * ��ȡGM�ȼ�
     *
     * @return
     */
    public int getGMLevel() {
        return this.c.getPlayer().getGMLevel();
    }

    public void startLieDetector(boolean isItem) {
        this.c.getPlayer().startLieDetector(isItem);
    }
    
    /**
     * ����ϵͳ
     *
     */
    
    public void Chongxiu(int lv, int str, int dex, int in, int luk) {
        this.c.getPlayer().Chongxiu(lv, str, dex, in, luk);
    }
    
    public void Chongxiu(int jobs, int lv, int str, int dex, int in, int luk, int hp, int mp, int reborn) {
        this.c.getPlayer().Chongxiu(jobs, lv, str, dex, in, luk, reborn);
    }
    
    public void Chongxiu(int lv, int sx) {
        this.c.getPlayer().Chongxiu(lv, sx);
    }
    
    /**
     * ���������ͼף��
     *
     */
    
    public void Maplen(String ns, int itemid, int time) {
        World.Broadcast.startMapEffect(ns, itemid, time);
    }
    
    public void Maplen(String ns, int itemid) {
        MaplePacketCreator.startMapEffect(ns, itemid, true);
    }
    
    public int getMaplewingmap(String ns, int ids) {
        return this.c.getPlayer().getMaplewingmap(ns, ids);
    }
    
    public int getMaplewingmap(String ns) {
        return this.c.getPlayer().getMaplewingmap(ns);
    }
    
    public void setMaplewingmap(String ns, int mapids, int ids) {
        this.c.getPlayer().setMaplewingmap(ns, mapids, ids);
    }
    
    public void setMaplewingmap(String ns, int mapids) {
        this.c.getPlayer().setMaplewingmap(ns, mapids);
    }
    
    public void setMaplewingmap(int mapids) {
        this.c.getPlayer().setMaplewingmap(mapids);
    }
    
    public void setMaplewingmap() {
        this.c.getPlayer().setMaplewingmap();
    }
    
    public String getMaplewinggpname(int ids) {
        return this.c.getPlayer().getMaplewinggpname(ids);
    }
    
    public int getMaplewinggpIdByName(String te) {
        return this.c.getPlayer().getMaplewinggpIdByName(te);
    }
    
    public int getMaplewinggp(String te, int ids) {
        return this.c.getPlayer().getMaplewinggp(te, ids);
    }
    
    public void addMaplewinggp(String names, int rate, int point, int lastpoint) {
        this.c.getPlayer().addMaplewinggp(names, rate, point, lastpoint);
        int idss = getMaplewinggpIdByName(names);
        String mds = "[ MapleWing ] : ������Ʊ " + names + " ����Ϊ��" + idss + "�����彻����ϢΪ ����rate: " + rate + " ����point: " + point + " ��һ����lastpoint: " + lastpoint + " ";
        this.c.getPlayer().dropMessage(-1, mds);
        this.c.getPlayer().dropMessage(5, mds);
        World.Broadcast.startMapEffect(mds, 5121009);
    }
    
    public void setMaplewinggp(String te, int tas, int ids) {
        int dss =  this.c.getPlayer().setMaplewinggp(te, tas, ids);
      //  int dsa = getMaplewinggp(te, ids);
        String names = getMaplewinggpname(ids);
        String mds = "��ǰ�Ĺ�Ʊ " + names + " �Ľ�����Ϣ " + te + " ��Maplewing������������Ϊ " + tas;
        if (dss == -1) {
            World.Broadcast.startMapEffect(mds, 5121009);
            this.c.getPlayer().dropMessage(5, mds);
            
        } else {
            World.Broadcast.startMapEffect(mds + "  ���󣡣�������ϵMaplewing�����޸�����", 5121009);
            this.c.getPlayer().dropMessage(5, mds + "  ���󣡣�������ϵMaplewing�����޸�����");
        }
    }
    
    public void setMaplewingjr(String te, int tas) {
         int dss = this.c.getPlayer().setMaplewingjr(te, tas);
         String mds = "���Ľ���Ͷ�� " + te + " ������Ϊ " + tas;
         String nam = getVipname();
         if (dss == -1) {
            this.c.getPlayer().dropMessage(-1, nam + mds);
            this.c.getPlayer().dropMessage(5, nam +  mds);
        } else {
            this.c.getPlayer().dropMessage(-1, nam + mds+ "���󣡣�������ϵMaplewing�����޸�����");
            this.c.getPlayer().dropMessage(5, nam + mds + "���󣡣�������ϵMaplewing�����޸�����");
        }
    }
    
    public void setMaplewingjr(String te, int tas, int ids) {
         int dss = this.c.getPlayer().setMaplewingjr(te, tas, ids);
         String mds = "���Ľ���Ͷ�� " + te + " ������Ϊ " + tas;
         String nam = getVipname();
         if (dss == -1) {
            this.c.getPlayer().dropMessage(-1, nam + mds);
            this.c.getPlayer().dropMessage(5, nam + mds);
        } else {
            this.c.getPlayer().dropMessage(-1, nam + mds + "���󣡣�������ϵMaplewing�����޸�����");
            this.c.getPlayer().dropMessage(5, nam + mds + "���󣡣�������ϵMaplewing�����޸�����");
        }
         
    }
    
    public int getMaplewingjr(String te) {
        return this.c.getPlayer().getMaplewingjr(te);
    }
    
    public int getMaplewingjr(String te, int ids) {
        return this.c.getPlayer().getMaplewingjr(te, ids);
    }
    
    public void addMaplewingjr(String te, int tas) {
        int dss = this.c.getPlayer().addMaplewingjr(te, tas);
        String mds = "���Ľ���Ͷ�� " + te + " ������ " + tas;
        String nam = getVipname();
        if (dss == -1) {
            this.c.getPlayer().dropMessage(-1, mds);
            this.c.getPlayer().dropMessage(5, mds);
        } else {
            this.c.getPlayer().dropMessage(-1, nam + mds + "���󣡣�������ϵMaplewing�����޸�����");
            this.c.getPlayer().dropMessage(5, nam + mds + "���󣡣�������ϵMaplewing�����޸�����");
        }
    }
    
    public void addMaplewingjr(String te, int tas, int ids) {
         int dss = this.c.getPlayer().addMaplewingjr(te, tas, ids);
         String mds = "���Ľ���Ͷ�� " + te + " ������ " + tas;
         String nam = getVipname();
         if (dss == -1) {
            this.c.getPlayer().dropMessage(-1, nam + mds);
            this.c.getPlayer().dropMessage(5, nam + mds);
        } else {
            this.c.getPlayer().dropMessage(-1, nam + mds + "���󣡣�������ϵMaplewing�����޸�����");
            this.c.getPlayer().dropMessage(5, nam + mds + "���󣡣�������ϵMaplewing�����޸�����");
        }
         
    }
    
    public int getMaplewingJS(String te) {
        return this.c.getPlayer().getMaplewingJS(te);
        
    }
    
    public int getMaplewingZJ(int te, int ds) {
        return this.c.getPlayer().getMaplewingZJS(te, ds);
        
    }
    
    public int MaplwingSJTP(String te) {
        
        MapleItemInformationProvider iis = MapleItemInformationProvider.getInstance();
                    
        int reward = RandomRewards.getˮ����ƽ();//���ȡ�ó齱��Ʒ
        if ((c.getPlayer().getInventory(MapleInventoryType.EQUIP).getNumFreeSlot() < 2) || (c.getPlayer().getInventory(MapleInventoryType.USE).getNumFreeSlot() < 2) || (c.getPlayer().getInventory(MapleInventoryType.SETUP).getNumFreeSlot() < 2) || (c.getPlayer().getInventory(MapleInventoryType.CASH).getNumFreeSlot() < 2) || (c.getPlayer().getInventory(MapleInventoryType.ETC).getNumFreeSlot() < 2)) {
            c.getPlayer().dropMessage(5, "��ȷ�������㹻�ı�����ĸ�����Ŀ��1���ռ�����.");
           // return null;
            reward = 3010000;
         } else {
            
            Item items = MapleInventoryManipulator.addbyId_Gachapon(c, reward, (short) 1);
                    if (items == null) {
                        this.c.getPlayer().dropMessage(1, "��ȡ " + te +" �����Ʒʧ��(����ȡ�����ݲ�����)��������һ�Ρ�");
                        c.getSession().write(MaplePacketCreator.enableActions());
                        reward = 3010000;
                       // return -1;
                    } else {
            
            c.getSession().write(MaplePacketCreator.getShowItemGain(reward, (short) 1, true));//����齱��Ʒ
            //�������繫��
            Broadcast.broadcastMessage(MaplePacketCreator.getGachaponMega(c.getPlayer().getName(), new StringBuilder().append(" : ��").append(te).append("�л��{").append(iis.getName(items.getItemId())).append("}�����һ��ϲ���������ɣ�������").toString(), items, (byte)2, c.getChannel()));
                    }
        }
        
        
        return reward;
    }
    
    
    public void MaplwingSJTPS(String te) {
        
        MapleItemInformationProvider iis = MapleItemInformationProvider.getInstance();
                    
        int reward = RandomRewards.getˮ����ƽ();//���ȡ�ó齱��Ʒ
        if ((c.getPlayer().getInventory(MapleInventoryType.EQUIP).getNumFreeSlot() < 2) || (c.getPlayer().getInventory(MapleInventoryType.USE).getNumFreeSlot() < 2) || (c.getPlayer().getInventory(MapleInventoryType.SETUP).getNumFreeSlot() < 2) || (c.getPlayer().getInventory(MapleInventoryType.CASH).getNumFreeSlot() < 2) || (c.getPlayer().getInventory(MapleInventoryType.ETC).getNumFreeSlot() < 2)) {
            c.getPlayer().dropMessage(5, "��ȷ�������㹻�ı�����ĸ�����Ŀ��1���ռ�����.");
           // return null;
         //   reward = 3010000;
         } else {
            
            Item items = MapleInventoryManipulator.addbyId_Gachapon(c, reward, (short) 1);
                    if (items == null) {
                        this.c.getPlayer().dropMessage(1, "��ȡ " + te +" �����Ʒʧ��(����ȡ�����ݲ�����)��������һ�Ρ�");
                        c.getSession().write(MaplePacketCreator.enableActions());
                     //   reward = 3010000;
                       // return -1;
                    } else {
            
            c.getSession().write(MaplePacketCreator.getShowItemGain(reward, (short) 1, true));//����齱��Ʒ
            //�������繫��
            Broadcast.broadcastMessage(MaplePacketCreator.getGachaponMega(c.getPlayer().getName(), new StringBuilder().append(" : ��").append(te).append("�л��{").append(iis.getName(items.getItemId())).append("}�����һ��ϲ���������ɣ�������").toString(), items, (byte)2, c.getChannel()));
                    }
        }
        
        
      //  return reward;
    }
    
    
    public void MaplwingYZ(String te) {
        
        MapleItemInformationProvider iis = MapleItemInformationProvider.getInstance();
                    
        int reward = RandomRewards.get��������();//���ȡ�ó齱��Ʒ
        if ((c.getPlayer().getInventory(MapleInventoryType.EQUIP).getNumFreeSlot() < 2) || (c.getPlayer().getInventory(MapleInventoryType.USE).getNumFreeSlot() < 2) || (c.getPlayer().getInventory(MapleInventoryType.SETUP).getNumFreeSlot() < 2) || (c.getPlayer().getInventory(MapleInventoryType.CASH).getNumFreeSlot() < 2) || (c.getPlayer().getInventory(MapleInventoryType.ETC).getNumFreeSlot() < 2)) {
            c.getPlayer().dropMessage(5, "��ȷ�������㹻�ı�����ĸ�����Ŀ��1���ռ�����.");
           // return null;
         //   reward = 3010000;
         } else {
            
            Item items = MapleInventoryManipulator.addbyId_Gachapon(c, reward, (short) 1);
                    if (items == null) {
                        this.c.getPlayer().dropMessage(1, "��ȡ " + te +" �����Ʒʧ��(����ȡ�����ݲ�����)��������һ�Ρ�");
                        c.getSession().write(MaplePacketCreator.enableActions());
                     //   reward = 3010000;
                       // return -1;
                    } else {
            
            c.getSession().write(MaplePacketCreator.getShowItemGain(reward, (short) 1, true));//����齱��Ʒ
            //�������繫��
            Broadcast.broadcastMessage(MaplePacketCreator.getGachaponMega(c.getPlayer().getName(), new StringBuilder().append(" : ��").append(te).append("�л��{").append(iis.getName(items.getItemId())).append("}�����һ��ϲ���������ɣ�������").toString(), items, (byte)2, c.getChannel()));
                    }
        }
        
        
      //  return reward;
    }
    
    public void gainMaples(int ds) {
        int md1 = (int)(Math.random()*100);
        int md2 = (int)(Math.random()*1000);
        int md3 = (int)(Math.random()*100);
        int md4 = (int)(Math.random()*50);
        int md5 = (int)(Math.random()*10);
        int md6 = (int)(Math.random()*5);
        int md7 = (int)(Math.random()*2);
        
        int md8 = (int)(Math.random()*100);
        int gas = 0;
        
        if (md1 > 99) {
            gas = md2;
        } else if (md1 > 95) {
            gas = md3;
        } else if (md1 > 90) {
            gas = md4;
        } else if (md1 > 20) {
            gas = md5;
        } else if (md1 > 10) {
            gas = md6;
        } else if (md1 >= 0) {
            gas = md7;
        }
        
        if (md8 > 90) {
            addMaplewing("mapley", gas*ds);
        } else if (md8 > 60) {
            addMaplewing("maple", gas*ds);
        } else  if (md8 > 50){
            this.c.getPlayer().modifyCSPoints(1, gas, true);
        } else  if (md8 > 30){
            this.c.getPlayer().modifyCSPoints(2, gas, true);
        } else {
            this.c.getPlayer().gainMeso(gas, true, true);
        }
        
        
        
    }
    
    
    public int getChongxiu() {
        return this.c.getPlayer().getMaplewing("chongxiu");
    }
    
    public void addChongxiu(int i) {
         this.c.getPlayer().addMaplewingjr("chongxiu", i);
    }
    
    public String ȡ�����ί����������(String lvs) {
        return this.c.getPlayer().ȡ�����ί����������(lvs);
    }
    
    public void �������ί��������Ϣ(String te, int tas, int ids) {
         this.c.getPlayer().�������ί��������Ϣ(te, tas, ids);
    }
    
    public void �������ί��������Ϣ(String te, int tas) {
          this.c.getPlayer().�������ί��������Ϣ(te, tas);
     }
    
    public int �������ί��������Ϣ(String te, int das) {
         return this.c.getPlayer().�������ί��������Ϣ(te, das);
     }
     
     
     public int �������ί��������Ϣ(String te, int das, int ids) {
         return this.c.getPlayer().�������ί��������Ϣ(te, das, ids);
     }
     
     public int ����ί��������Ϣ(String te, int das, int ids) {
         return this.c.getPlayer().����ί��������Ϣ(te, das, ids);
     }
     
     public int ȡ�����ί��������Ϣ(String te, int ids) {
         return this.c.getPlayer().ȡ�����ί��������Ϣ(te, ids);
     }
     
     public int ȡ�����ί��������Ϣ(String te) {
         return this.c.getPlayer().ȡ�����ί��������Ϣ(te);
     }
     
     public String ȡ��ί���������() {
         return this.c.getPlayer().ȡ��ί���������();
     }
     
     public String ȡ��ί���������(int ids) {
         return this.c.getPlayer().ȡ��ί���������(ids);
     }
     
     public int ȡ��ί��������Ϣ(String te, int ids) {
         return this.c.getPlayer().ȡ��ί��������Ϣ(te, ids);
     }
     
     public String ȡ��ί����������(int te, int ids) {
         return this.c.getPlayer().ȡ��ί����������(te, ids);
     }
     
     public int ȡ����ҿɽ�ί����������() {
         return this.c.getPlayer().ȡ����ҿɽ�ί����������();
     }
     
     public int ȡ����ҿɽ�ί�������������() {
         return this.c.getPlayer().ȡ����ҿɽ�ί�������������();
     }
     
     public String ί����Ϣ(int te, int ģʽ) {
         
         if (te < 1 || te > 9) {
             te =1;
         }
         int wt = 1;
         int kmob = -1;
         
         switch (te) {
             case 1:
                 wt = ȡ�����ί��������Ϣ("renwu1");
                 kmob  = ȡ�����ί��������Ϣ("mob1");
                 break;
             case 2:
                 wt = ȡ�����ί��������Ϣ("renwu2");
                 kmob  = ȡ�����ί��������Ϣ("mob2");
                 break;
             case 3:
                 wt = ȡ�����ί��������Ϣ("renwu3");
                 kmob  = ȡ�����ί��������Ϣ("mob3");
                 break;
             case 4:
                 wt = ȡ�����ί��������Ϣ("renwu4");
                 kmob  = ȡ�����ί��������Ϣ("mob4");
                 break;
             case 5:
                 wt = ȡ�����ί��������Ϣ("renwu5");
                 kmob  = ȡ�����ί��������Ϣ("mob5");
                 break;
             case 6:
                 wt = ȡ�����ί��������Ϣ("renwu6");
                 kmob  = ȡ�����ί��������Ϣ("mob6");
                 break;
             case 7:
                 wt = ȡ�����ί��������Ϣ("renwu7");
                 kmob  = ȡ�����ί��������Ϣ("mob7");
                 break;
             case 8:
                 wt = ȡ�����ί��������Ϣ("renwu8");
                 kmob  = ȡ�����ί��������Ϣ("mob8");
                 break;
             case 9:
                 wt = ȡ�����ί��������Ϣ("renwu9");
                 kmob  = ȡ�����ί��������Ϣ("mob9");
                 break;
         }
         
         String name = ȡ��ί����������(1, wt);
         String neirong = ȡ��ί����������(2, wt);
         int fnpc = ȡ��ί��������Ϣ("fnpc", wt);
         int npc = ȡ��ί��������Ϣ("npc", wt);
         int maple = ȡ��ί��������Ϣ("reward1maple", wt);
         int mapley = ȡ��ί��������Ϣ("reward2mapley", wt);
         int wmose = ȡ��ί��������Ϣ("reward3wmose", wt);
         int emose = ȡ��ί��������Ϣ("reward4emose", wt);
         int nx = ȡ��ί��������Ϣ("reward5nx", wt);
         int rewarditem = ȡ��ί��������Ϣ("rewarditem", wt);
         int itemsl = ȡ��ί��������Ϣ("itemsl", wt);
         int exp = ȡ��ί��������Ϣ("exp", wt);
         int meso = ȡ��ί��������Ϣ("meso", wt);
         
         int map  = ȡ��ί��������Ϣ("map", wt);
         int mob = ȡ��ί��������Ϣ("mob", wt);
         int nmob = ȡ��ί��������Ϣ("nmob", wt);
         
         int item = ȡ��ί��������Ϣ("item", wt);
         int nitem = ȡ��ί��������Ϣ("nitem", wt);
         int hitem = c.getPlayer().getItemQuantity(item);
         
         StringBuilder ms = new StringBuilder().append("#r���������T��#i4251202##r  ί��������Ϣ  #i4251202# #r��T��������\r\n#r");
         if (wt > 0) {
         if (ģʽ == 1) {
             ms.append(getVipname()).append("  #d����������ȡ��ί������ #r#e").append(te).append("#n#d ��ϸ��Ϣ��\r\n");
         } else {
             ms.append("#d���������ί������ #r#e").append(te).append("#n#d ����ϸ��Ϣ�ɣ��øϽ�����ţ�\r\n");
         }
         ms.append("#bί�������ţ�#e#r").append(wt).append("#n  #bί���������ƣ� #g�� #r").append(name).append(" #g��\r\n");
         ms.append("#b���񷢲�").append((fnpc < 1000000) ? "���": "NPC").append("��#r").append((fnpc < 1000000) ? ȡ��ί���������(fnpc): "#p" + fnpc + "#").append("#b  ί�����񽻸�NPC��#r").append("#p").append(npc).append("#\r\n");
         ms.append("#g��#b������#g��  \r\n#d").append(neirong).append("\r\n");
         ms.append("#b��Ҫ��Ʒ��  #r").append(((item > 1000000) ? "#i" + item + ":#  #b������#r" + nitem + "    #b��ӵ��������#r" + hitem :" ��")).append("\r\n");
         ms.append("#bĿ����  #r").append(((mob >= 100000) ? "#o" + mob + ":#  #b������#r" + nmob + "    #b�Ѵ���������#r" + kmob:" ��")).append("\r\n");
         ms.append("#bִ�еص㣺  #r").append((map > 0 ? "#m" + map + "#":" ����ص�")).append("    #b�ص��ţ�#r").append(map).append("\r\n  ");
         ms.append("#g��#b������#g��  \r\n#d���׵㣺").append((maple > 0 ? " #r#e" + maple + "#n": " ��")).append("  #d��Ծ�㣺").append((mapley > 0 ? " #e#r" + mapley + "#n": " ��")).append("  #d����").append((wmose > 0 ? " #e#r" + wmose + "#n": " ��")).append("\r\n#d�ڼ���").append((emose > 0 ? " #e#r" + emose + "#n" : " ��")).append("  #d���").append((nx > 0 ? " #e#r" + nx + "#n" : " ��")).append("  #d������Ʒ��").append((rewarditem > 0 ? " #i" + rewarditem + ":# ���� #e#r" + itemsl + "#n": " ��")).append("\r\n").append("\r\n#d���飺#r#e").append(exp).append("#n  #d��ң�#e#r").append(meso).append("#n\r\n");
         if ((hitem >= nitem) && (kmob >= nmob)) {
             ms.append("#d���Ѿ������ί������ #r").append(name).append("  #b�Ͽ�ȥ��NPC��#r#p").append(npc).append("# #b��ȡ�����ɣ�\r\n");
         }
         
         } else if (wt != -1) {
             ms.append("\r\n#b�Բ������ί������ #e#r").append(te).append("#n  #b��δ��¼��ί������Ŷ��\r\n�Ͽ�ȥ��ȡ�༸������ɣ�");
         } else {
             ms.append("\r\n#b�Բ������ί������ #e#r").append(te).append("#n  #b��δ����Ŷ��\r\n�����ĵ���ȼ��ﵽ #e#r").append(te).append("#n #bϵͳ�����Զ�����������\r\nĿǰ���ĵ���ȼ�Ϊ��#e#r").append(getMaplewing("cardlevel")).append("#n#d\r\n������У��Ͷ㵽ί���������￴������ȡ����ί������");
         }
         
         return ms.toString();
         
     }
     
     public int getHours() {
        Calendar cal = Calendar.getInstance();
        int hour = cal.get(Calendar.HOUR_OF_DAY);
        return hour;
    }

     
     public String ����ϵͳί����Ϣs(int ����) {
         if (���� > 25) {
             ���� = 25;
         } else if (���� < 10) {
             ���� = 11;
         }
         int mms = 1;
         if ((getHours() > 12) && (getHours() < 18)) {
             mms = (int)(Math.random()*5);
         } else if ((getHours() >= 18) && (getHours() < 24)) {
             mms = (int)(Math.random()*10);
         } else {
             mms = (int)(Math.random()*3);
         }
         
                 
         int level = getMaplewing("cardlevel");
         StringBuilder ms = new StringBuilder().append("#r���������T��#i4251202##r  ϵͳί������  #i4251202# #r��T��������\r\n#r");
         ms.append(getVipname()).append(" ���ã� #d�����ǽ��� #r").append(FileoutputUtil.CurrentReadable_Time()).append("#d\r\n������ί��������Ϣ��\r\n");
     //    ms.append("--------------------ϵͳί������--------------------");
         int dds = 1;
         switch (mms) {
             case 2:
                 dds = 20;
                 break;
             case 3:
                 dds = 30;
                 break;
             case 4:
                 dds = 40;
                 break;
             case 5:
                 dds = 50;
                 break;
             case 6:
                 dds = 60;
                 break;
             case 7:
                 dds = 70;
                 break;
             case 8:
                 dds = 80;
                 break;
             case 9:
                 dds = 90;
                 break;    
         }
         
         for (int dd = dds;dd <= (���� + dds); dd++) {
             if (ȡ��ί��������Ϣ("id", dd) != -2) {
                 if ((ȡ��ί��������Ϣ("maxcishu", dd) > 0) && (level >= ȡ��ί��������Ϣ("level", dd)) && (ȡ��ί��������Ϣ("hastrue", dd) == 0)) {
                 ms.append("#L").append(dd).append("##g��#b��� #e#r").append(dd).append("#n#b#g��#b  #r").append(ȡ��ί����������(1, dd)).append("#l\r\n");
             //    ms.append("#bί���������ݣ�#r").append(ȡ��ί����������(2, dd)).append("\r\n");

                 }
             }
         }
         /*
         if (���� > 0) {
             
             dds = 1000;
             for (int dd = dds;dd <= (���� + 1000); dd++) {
              //   ms.append("------------------��ҷ�����ί������------------------");
                 if ((ȡ��ί��������Ϣ("maxcishu", dd) > 0) && (level >= ȡ��ί��������Ϣ("level", dd)) && (ȡ��ί��������Ϣ("hastrue", dd) == 0)) {
                     ms.append("#L").append(dd).append("##g��#b��� #e#r").append(dd).append("#n#b#g��#b  #r").append(ȡ��ί����������(1, dd)).append("#l\r\n");
              //       ms.append("#bί���������ݣ�#r").append(ȡ��ί����������(2, dd)).append("\r\n");
                 }
                 
             }
         
         }
         * 
         */
         
         return ms.toString();
     }
     
     
     public String ����ϵͳί����Ϣ(int ����) {
         if (���� > 25) {
             ���� = 25;
         } else if (���� < 10) {
             ���� = 11;
         }
         int level = getMaplewing("cardlevel");
         StringBuilder ms = new StringBuilder().append("#r���������T��#i4251202##r  ϵͳί������  #i4251202# #r��T��������\r\n#r");
         ms.append(getVipname()).append(" ���ã� #d�����ǽ��� #r").append(FileoutputUtil.CurrentReadable_Time()).append("#d\r\n������ί��������Ϣ��\r\n");
     //    ms.append("--------------------ϵͳί������--------------------");
         
         for (int dd = 1;dd <= ����; dd++) {
             if (ȡ��ί��������Ϣ("id", dd) != -2) {
                 if ((ȡ��ί��������Ϣ("maxcishu", dd) > 0) && (level >= ȡ��ί��������Ϣ("level", dd)) && (ȡ��ί��������Ϣ("hastrue", dd) == 0)) {
                 ms.append("#L").append(dd).append("##g��#b��� #e#r").append(dd).append("#n#b#g��#b  #r").append(ȡ��ί����������(1, dd)).append("#l\r\n");
             //    ms.append("#bί���������ݣ�#r").append(ȡ��ί����������(2, dd)).append("\r\n");

                 }
             }
         }
         return ms.toString();
     }
     
      public String �������ί����Ϣ(int ����) {
         if (���� > 25) {
             ���� = 25;
         } else if (���� < 10) {
             ���� = 11;
         }
         int level = getMaplewing("cardlevel");
         StringBuilder ms = new StringBuilder().append("#r���������T��#i4251202##r  ���ί������  #i4251202# #r��T��������\r\n#r");
         ms.append(getVipname()).append(" ���ã� #d�����ǽ��� #r").append(FileoutputUtil.CurrentReadable_Time()).append("#d\r\n������ί��������Ϣ��\r\n");
     //    ms.append("--------------------ϵͳί������--------------------");
         
         for (int dd = 1000;dd <= (���� + 1000); dd++) {
             if (ȡ��ί��������Ϣ("id", dd) != -2) {
                 if ((ȡ��ί��������Ϣ("maxcishu", dd) > 0) && (level >= ȡ��ί��������Ϣ("level", dd)) && (ȡ��ί��������Ϣ("hastrue", dd) == 0)) {
                 ms.append("#L").append(dd).append("##g��#b��� #e#r").append(dd).append("#n#b#g��#b  #r").append(ȡ��ί����������(1, dd)).append("#l\r\n");
             //    ms.append("#bί���������ݣ�#r").append(ȡ��ί����������(2, dd)).append("\r\n");

                 }
             }
         }
         return ms.toString();
     }
      
      /**
     * ����ְҵID��ȡְҵ��
     *
     * @param id ְҵID
     * @returnfί����Ϣ
     */
    public String getJobNameByIds(int id) {
        return MapleCarnivalChallenge.getJobNameByIdNull(id);
    }
    
    public String ��ȡί������(int ���) {
        int renwu1 = ȡ�����ί��������Ϣ("renwu1");
        int renwu2 = ȡ�����ί��������Ϣ("renwu2");
        int renwu3 = ȡ�����ί��������Ϣ("renwu3");
        int renwu4 = ȡ�����ί��������Ϣ("renwu4");
        int renwu5 = ȡ�����ί��������Ϣ("renwu5");
        int renwu6 = ȡ�����ί��������Ϣ("renwu6");
        int renwu7 = ȡ�����ί��������Ϣ("renwu7");
        int renwu8 = ȡ�����ί��������Ϣ("renwu8");
        int renwu9 = ȡ�����ί��������Ϣ("renwu9");
        
        int mob = ȡ��ί��������Ϣ("mob", ���);
    //    int nmob = ȡ��ί��������Ϣ("nmob", ���);
        int maxcishu = ȡ��ί��������Ϣ("maxcishu", ���);
        
        boolean �ɹ����� = false;
        if (renwu1 == 0) {
            �������ί��������Ϣ("renwu1", ���);
            if (mob > 0) {
            �������ί��������Ϣ("mobid1", mob);
            �������ί��������Ϣ("mob1", 0);
            }
            ����ί��������Ϣ("maxcishu", maxcishu - 1, ���);
            �ɹ����� = true;
        } else if (renwu2 == 0) {
            �������ί��������Ϣ("renwu2", ���);
            if (mob > 0) {
            �������ί��������Ϣ("mobid2", mob);
            �������ί��������Ϣ("mob2", 0);
            }
            ����ί��������Ϣ("maxcishu", maxcishu - 1, ���);
            �ɹ����� = true;
        } else if (renwu3 == 0) {
            �������ί��������Ϣ("renwu3", ���);
            if (mob > 0) {
            �������ί��������Ϣ("mobid3", mob);
            �������ί��������Ϣ("mob3", 0);
            }
            ����ί��������Ϣ("maxcishu", maxcishu - 1, ���);
            �ɹ����� = true;
        } else if (renwu4 == 0) {
            �������ί��������Ϣ("renwu4", ���);
            if (mob > 0) {
            �������ί��������Ϣ("mobid4", mob);
            �������ί��������Ϣ("mob4", 0);
            }
            ����ί��������Ϣ("maxcishu", maxcishu - 1, ���);
            �ɹ����� = true;
        } else if (renwu5 == 0) {
            �������ί��������Ϣ("renwu5", ���);
            if (mob > 0) {
            �������ί��������Ϣ("mobid5", mob);
            �������ί��������Ϣ("mob5", 0);
            }
            ����ί��������Ϣ("maxcishu", maxcishu - 1, ���);
            �ɹ����� = true;
        } else if (renwu6 == 0) {
            �������ί��������Ϣ("renwu6", ���);
            if (mob > 0) {
            �������ί��������Ϣ("mobid6", mob);
            �������ί��������Ϣ("mob6", 0);
            }
            ����ί��������Ϣ("maxcishu", maxcishu - 1, ���);
            �ɹ����� = true;
        } else if (renwu7 == 0) {
            �������ί��������Ϣ("renwu7", ���);
            if (mob > 0) {
            �������ί��������Ϣ("mobid7", mob);
            �������ί��������Ϣ("mob7", 0);
            }
            ����ί��������Ϣ("maxcishu", maxcishu - 1, ���);
            �ɹ����� = true;
        } else if (renwu8 == 0) {
            �������ί��������Ϣ("renwu8", ���);
            if (mob > 0) {
            �������ί��������Ϣ("mobid8", mob);
            �������ί��������Ϣ("mob8", 0);
            }
            ����ί��������Ϣ("maxcishu", maxcishu - 1, ���);
            �ɹ����� = true;
        } else if (renwu9 == 0) {
            �������ί��������Ϣ("renwu9", ���);
            if (mob > 0) {
            �������ί��������Ϣ("mobid9", mob);
            �������ί��������Ϣ("mob9", 0);
            }
            ����ί��������Ϣ("maxcishu", maxcishu - 1, ���);
            �ɹ����� = true;
        }
        
        if (�ɹ����� = true) {
        return ί����ϸ��Ϣ(���, 2);
        } else {
            return "����ί������ʧ��";
        }
        
    }
    
    public boolean �������Ƿ��Ѿ���ȡ��ѡ��ί������(int ���) {
        int renwu1 = ȡ�����ί��������Ϣ("renwu1");
        int renwu2 = ȡ�����ί��������Ϣ("renwu2");
        int renwu3 = ȡ�����ί��������Ϣ("renwu3");
        int renwu4 = ȡ�����ί��������Ϣ("renwu4");
        int renwu5 = ȡ�����ί��������Ϣ("renwu5");
        int renwu6 = ȡ�����ί��������Ϣ("renwu6");
        int renwu7 = ȡ�����ί��������Ϣ("renwu7");
        int renwu8 = ȡ�����ί��������Ϣ("renwu8");
        int renwu9 = ȡ�����ί��������Ϣ("renwu9");
        
        if ((renwu1 == ���) || (renwu2 == ���) || (renwu3 == ���) || (renwu4 == ���) || (renwu5 == ���) || (renwu6 == ���) || (renwu7 == ���) || (renwu8 == ���) || (renwu9 == ���)) {
            return true;
        } else {
            return false;
        }
        
    }
    
    public int ����������ȡί��������(int ���) {
        int renwu1 = ȡ�����ί��������Ϣ("renwu1");
        int renwu2 = ȡ�����ί��������Ϣ("renwu2");
        int renwu3 = ȡ�����ί��������Ϣ("renwu3");
        int renwu4 = ȡ�����ί��������Ϣ("renwu4");
        int renwu5 = ȡ�����ί��������Ϣ("renwu5");
        int renwu6 = ȡ�����ί��������Ϣ("renwu6");
        int renwu7 = ȡ�����ί��������Ϣ("renwu7");
        int renwu8 = ȡ�����ί��������Ϣ("renwu8");
        int renwu9 = ȡ�����ί��������Ϣ("renwu9");
        
        int mm = 0;
        
        if (renwu1 == ���) {
            mm = 1;
        } else if (renwu2 == ���) {
            mm = 2;
        } else if (renwu3 == ���) {
            mm = 3;
        } else if (renwu4 == ���) {
            mm = 4;
        } else if (renwu5 == ���) {
            mm = 5;
        } else if (renwu6 == ���) {
            mm = 6;
        } else if (renwu7 == ���) {
            mm = 7;
        } else if (renwu8 == ���) {
            mm = 8;
        } else if (renwu9 == ���) {
            mm = 9;
        }


        return mm;
        
    }
      
     
     public String ί����ϸ��Ϣ(int ���, int ģʽ) {
         StringBuilder ms = new StringBuilder().append("#r���������T��#i4251202##r  ί����ϸ��Ϣ  #i4251202# #r��T��������\r\n#r");
         if (ģʽ == 1) {
         ms.append(getVipname()).append(" ���ã� #d����ʱ���� #r").append(FileoutputUtil.CurrentReadable_Time()).append("#k\r\n").append("��������ѡ���ί������\r\n");
         } else {
             ms.append(getVipname()).append(" �� #d����ʱ���� #r").append(FileoutputUtil.CurrentReadable_Time());
         }
         
         if (ȡ��ί��������Ϣ("id", ���) != -2) {
                 
         String name = ȡ��ί����������(1, ���);
         String neirong = ȡ��ί����������(2, ���);
         int fnpc = ȡ��ί��������Ϣ("fnpc", ���);
         int npc = ȡ��ί��������Ϣ("npc", ���);
         int maple = ȡ��ί��������Ϣ("reward1maple", ���);
         int mapley = ȡ��ί��������Ϣ("reward2mapley", ���);
         int wmose = ȡ��ί��������Ϣ("reward3wmose", ���);
         int emose = ȡ��ί��������Ϣ("reward4emose", ���);
         int nx = ȡ��ί��������Ϣ("reward5nx", ���);
         int rewarditem = ȡ��ί��������Ϣ("rewarditem", ���);
         int itemsl = ȡ��ί��������Ϣ("itemsl", ���);
         int exp = ȡ��ί��������Ϣ("exp", ���);
         int meso = ȡ��ί��������Ϣ("meso", ���);
         
         int map  = ȡ��ί��������Ϣ("map", ���);
         int mob = ȡ��ί��������Ϣ("mob", ���);
         int nmob = ȡ��ί��������Ϣ("nmob", ���);
         
         int item = ȡ��ί��������Ϣ("item", ���);
         int nitem = ȡ��ί��������Ϣ("nitem", ���);
         int hitem = c.getPlayer().getItemQuantity(item);
         
         int nlevel = ȡ��ί��������Ϣ("nlevel", ���);
         int nid = ȡ��ί��������Ϣ("nid", ���);
         int njob = ȡ��ί��������Ϣ("njob", ���);
         int nchongxiu = ȡ��ί��������Ϣ("nchongxiu", ���);
         int nguild = ȡ��ί��������Ϣ("nguild", ���);
         
         int maxcishu = ȡ��ί��������Ϣ("maxcishu", ���);
         
         if (ģʽ != 1) {
             ms.append("#d\r\n���Ѿ��ɹ���ȡί������").append(" #g�� #r").append(name).append(" #g��\r\n");
         }
         
         ms.append("#bί�������ţ�#e#r").append(���).append("#n  #bί���������ƣ� #g�� #r").append(name).append(" #g��\r\n");
         ms.append("#b���񷢲�").append((fnpc < 1000000) ? "���": "NPC").append("��#r").append((fnpc < 1000000) ? ȡ��ί���������(fnpc): "#p" + fnpc + "#").append("#b  ί�����񽻸�NPC��#r").append("#p").append(npc).append("#\r\n");
         ms.append("#g��#b������#g��  \r\n#d").append(neirong).append("\r\n");
         ms.append("#b��Ҫ��Ʒ��  #r").append(((item > 1000000) ? "#i" + item + ":#  #b������#r" + nitem + "    #b��ӵ��������#r" + hitem :" ��")).append("\r\n");
         ms.append("#bĿ����  #r").append(((mob >= 100000) ? "#o" + mob + ":#  #b������#r" + nmob :" ��")).append("\r\n");
         ms.append("#bִ�еص㣺  #r").append((map > 0 ? "#m" + map + "#":" ����ص�")).append("    #b�ص��ţ�#r").append(map).append("\r\n");
         if (ģʽ == 1) {
             
             int viplv = ȡ��ί��������Ϣ("level", ���);
         ms.append("#g��#b����Ҫ��#g��  \r\n#d").append("Ҫ��ȼ���#r").append(nlevel).append(" ����    #dҪ�����޵ȼ���#r").append(nchongxiu).append(" ����\r\n");
         ms.append((viplv > 0? "#dҪ����ȼ���#r" + viplv + "    #d��ǰ�ȼ���#r" + getMaplewing("cardlevel") + "\r\n":""));
         ms.append((nid > 0? "Ҫ���ɫ��ţ�#r" + nid + "    #d��ǰ��ţ�#r" + c.getPlayer().getId() + "\r\n": ""));
         ms.append((njob > 0? "Ҫ��ְҵ��#r" + getJobNameByIds(njob) + "    #d��ǰְҵ��#r" + getJobNameByIds(c.getPlayer().getJob()) + "\r\n" : ""));
         ms.append((nguild > 0? "Ҫ������ţ�#r" + nguild + "    #d��ǰ�����ţ�#r" + c.getPlayer().getGuildId() + "\r\n" : ""));
         ms.append("#g��#b����ɽӴ���#g��  #r��ʣ  #e#r").append(maxcishu).append("#n  �Σ�\r\n");
         }
         
         ms.append("#g��#b������#g��  \r\n#d���׵㣺").append((maple > 0 ? " #r#e" + maple + "#n": " ��")).append("  #d��Ծ�㣺").append((mapley > 0 ? " #e#r" + mapley + "#n": " ��")).append("  #d����").append((wmose > 0 ? " #e#r" + wmose + "#n": " ��")).append("\r\n#d�ڼ���").append((emose > 0 ? " #e#r" + emose + "#n" : " ��")).append("  #d���").append((nx > 0 ? " #e#r" + nx + "#n" : " ��")).append("  #d������Ʒ��").append((rewarditem > 0 ? " #i" + rewarditem + ":# ���� #e#r" + itemsl + "#n": " ��")).append("\r\n#d���飺#r#e").append(exp).append("#n  #d��ң�#e#r").append(meso).append("#n\r\n");
         
         ms.append("#bĿǰ��������ȡ��ί����������Ϊ��#e#r").append(ȡ����ҿɽ�ί����������()).append("#n  \r\n").append("#b���ɽ�ί����������Ϊ��#e#r").append(ȡ����ҿɽ�ί�������������()).append("#n \r\n");
         
         if (ģʽ == 1) {
             
             if (maxcishu > 0) {
                 
                 if (�������Ƿ��Ѿ���ȡ��ѡ��ί������(���) == false) {

             if (ȡ����ҿɽ�ί����������() > 0) {
                 
                 if ((nid > 0? c.getPlayer().getId() == nid: true) && (c.getPlayer().getLevel() >= nlevel) &&
                         (njob > 0? c.getPlayer().getJob() == njob : true) && (c.getPlayer().getReborns() >= nchongxiu) &&
                         (nguild > 0? c.getPlayer().getGuildId() == nguild : true)) {
                 ms.append("#b#L").append(���).append("#��ȡί������ #g�� #r").append(name).append(" #g�� #l\r\n");
                 } else {
                     ms.append("#b�Բ����������ϸ�ί�������Ҫ��\r\n�޷���ȡί������ #g�� #r").append(name).append(" #g��\r\n");
                 }
                 
             } else {
                 ms.append("#r�Բ���Ŷ�����Ѿ��޷�������ȡί������\r\n");
             }
                 } else {
                     ms.append("#r�Բ���Ŷ�����Ѿ���ȡ����ί������ί������\r\n").append("#b��������� #e#r@wt ").append(����������ȡί��������(���)).append("#n  #b�鿴����ȡί������ #g�� #r").append(name).append(" #g�� #b����ϸ��Ϣ��");
                 }
             
             } else {
                 
                 ms.append("#r�Բ���Ŷ���������Ѿ��޷�������ȡ�����������ί������ɣ���Ȼ��Ҳ���Եȴ�ί�������ˢ�£�\r\n");
                 
             }
             
             
             
         }
         
         ms.append("#b#L9998#������ҳ��鿴����ί������#l \r\n#L9999#�����Ի�#l\r\n");
         
         } else {
              ms.append("#r ��ί���������ݳ��ִ��󣬱�������⣡��ί������ı��Ϊ��#e#r").append(���).append("#n \r\n#b����ϵ MapleWing �����޸���");
         }
             
         return ms.toString();
     }
     
     

     public void ������ҵ�ί������(int ids, String names, String neirong, int mob, int nmob, int item, int nitem, int reward1wmose, int level) {
         addMaplewing("wmose", -reward1wmose);
        // addMaplewing("wmose", -reward1wmose);
         int exps = 0;
         int vips = getMaplewing("cardlevel");
         if (reward1wmose < 100) {
             exps = vips*10000;
         } else if (reward1wmose < 1000) {
             exps = vips*100000;
         } else if (reward1wmose < 10000) {
             exps = vips*1000000;
         } else if (reward1wmose < 100000) {
             exps = vips*10000000;
         } else if (reward1wmose < 1000000) {
             exps = vips*20000000;
         } else if (reward1wmose < 10000000) {
             exps = vips*50000000;
         } else if (reward1wmose < 100000000) {
             exps = vips*80000000;
         } else if (reward1wmose < 1000000000) {
             exps = vips*100000000;
         } else if (reward1wmose < 2100000000) {
             exps = vips*150000000;
         }
         
         this.c.getPlayer().������ҵ�ί������(ids, names, neirong, mob, nmob, item, nitem, reward1wmose, exps, level);
         
     }
     
     public void ������ҵ�ί��������Թ���(int ids, String names, String neirong, int mob, int nmob, int reward1wmose, int level) {
         addMaplewing("wmose", -reward1wmose);
        // addMaplewing("wmose", -reward1wmose);
         int exps = 0;
         int vips = getMaplewing("cardlevel");
         if (reward1wmose < 100) {
             exps = vips*10000;
         } else if (reward1wmose < 1000) {
             exps = vips*100000;
         } else if (reward1wmose < 10000) {
             exps = vips*1000000;
         } else if (reward1wmose < 100000) {
             exps = vips*10000000;
         } else if (reward1wmose < 1000000) {
             exps = vips*20000000;
         } else if (reward1wmose < 10000000) {
             exps = vips*50000000;
         } else if (reward1wmose < 100000000) {
             exps = vips*80000000;
         } else if (reward1wmose < 1000000000) {
             exps = vips*100000000;
         } else if (reward1wmose < 2100000000) {
             exps = vips*150000000;
         }
         
         this.c.getPlayer().������ҵ�ί������(ids, names, neirong, mob, nmob, 0, 0, reward1wmose, exps, level);
     }
     
     public void ������ҵ�ί�������ռ���Ʒ(int ids, String names, String neirong, int item, int nitem, int reward1wmose, int level) {
         addMaplewing("wmose", -reward1wmose);
        // addMaplewing("wmose", -reward1wmose);
         int exps = 0;
         int vips = getMaplewing("cardlevel");
         if (reward1wmose < 100) {
             exps = vips*10000;
         } else if (reward1wmose < 1000) {
             exps = vips*100000;
         } else if (reward1wmose < 10000) {
             exps = vips*1000000;
         } else if (reward1wmose < 100000) {
             exps = vips*10000000;
         } else if (reward1wmose < 1000000) {
             exps = vips*20000000;
         } else if (reward1wmose < 10000000) {
             exps = vips*50000000;
         } else if (reward1wmose < 100000000) {
             exps = vips*80000000;
         } else if (reward1wmose < 1000000000) {
             exps = vips*100000000;
         } else if (reward1wmose < 2100000000) {
             exps = vips*150000000;
         }
         
         this.c.getPlayer().������ҵ�ί������(ids, names, neirong, 0, 0, item, nitem, reward1wmose, exps, level);
     }
     
     public String ȡ�ÿ���ȡ������ί������() {
         
         StringBuilder ms = new StringBuilder().append("#r���������T��#i4251202##r  ��ȡί�н���  #i4251202# #r��T��������\r\n#r");
         ms.append(getVipname()).append("  ��#d���� #p").append(this.id).append("# �����������������ύ��ί������\r\n");
         int renwu1 = ȡ�����ί��������Ϣ("renwu1");
         int renwu2 = ȡ�����ί��������Ϣ("renwu2");
         int renwu3 = ȡ�����ί��������Ϣ("renwu3");
         int renwu4 = ȡ�����ί��������Ϣ("renwu4");
         int renwu5 = ȡ�����ί��������Ϣ("renwu5");
         int renwu6 = ȡ�����ί��������Ϣ("renwu6");
         int renwu7 = ȡ�����ί��������Ϣ("renwu7");
         int renwu8 = ȡ�����ί��������Ϣ("renwu8");
         int renwu9 = ȡ�����ί��������Ϣ("renwu9");
         
         
         if (renwu1 > 0) {
             int mob1 = ȡ�����ί��������Ϣ("mob1");
             int nmob = ȡ��ί��������Ϣ("nmob", renwu1);
             int item = ȡ��ί��������Ϣ("item", renwu1);
             int nitem = ȡ��ί��������Ϣ("nitem", renwu1);
             int hitem = c.getPlayer().getItemQuantity(item);
             int npcs = ȡ��ί��������Ϣ("npc", renwu1);
             if ((mob1 >= nmob) && (nitem <= hitem) && (this.id == npcs)) {
                 String names = ȡ��ί����������(1, renwu1);
                 ms.append("#b#L").append(renwu1).append("#").append(names).append("#l\r\n");
             }
         }
         if (renwu2 > 0) {
             int mob1 = ȡ�����ί��������Ϣ("mob2");
             int nmob = ȡ��ί��������Ϣ("nmob", renwu2);
             int item = ȡ��ί��������Ϣ("item", renwu2);
             int nitem = ȡ��ί��������Ϣ("nitem", renwu2);
             int hitem = c.getPlayer().getItemQuantity(item);
             int npcs = ȡ��ί��������Ϣ("npc", renwu2);
             if ((mob1 >= nmob) && (nitem <= hitem) && (this.id == npcs)) {
                 String names = ȡ��ί����������(1, renwu2);
                 ms.append("#b#L").append(renwu2).append("#").append(names).append("#l\r\n");
             }
         }
         if (renwu3 > 0) {
             int mob1 = ȡ�����ί��������Ϣ("mob3");
             int nmob = ȡ��ί��������Ϣ("nmob", renwu3);
             int item = ȡ��ί��������Ϣ("item", renwu3);
             int nitem = ȡ��ί��������Ϣ("nitem", renwu3);
             int hitem = c.getPlayer().getItemQuantity(item);
             int npcs = ȡ��ί��������Ϣ("npc", renwu3);
             if ((mob1 >= nmob) && (nitem <= hitem) && (this.id == npcs)) {
                 String names = ȡ��ί����������(1, renwu3);
                 ms.append("#b#L").append(renwu3).append("#").append(names).append("#l\r\n");
             }
         }
         if (renwu4 > 0) {
             int mob1 = ȡ�����ί��������Ϣ("mob4");
             int nmob = ȡ��ί��������Ϣ("nmob", renwu4);
             int item = ȡ��ί��������Ϣ("item", renwu4);
             int nitem = ȡ��ί��������Ϣ("nitem", renwu4);
             int hitem = c.getPlayer().getItemQuantity(item);
             int npcs = ȡ��ί��������Ϣ("npc", renwu4);
             if ((mob1 >= nmob) && (nitem <= hitem) && (this.id == npcs)) {
                 String names = ȡ��ί����������(1, renwu4);
                 ms.append("#b#L").append(renwu4).append("#").append(names).append("#l\r\n");
             }
         }
         if (renwu5 > 0) {
             int mob1 = ȡ�����ί��������Ϣ("mob5");
             int nmob = ȡ��ί��������Ϣ("nmob", renwu5);
             int item = ȡ��ί��������Ϣ("item", renwu5);
             int nitem = ȡ��ί��������Ϣ("nitem", renwu5);
             int hitem = c.getPlayer().getItemQuantity(item);
             int npcs = ȡ��ί��������Ϣ("npc", renwu5);
             if ((mob1 >= nmob) && (nitem <= hitem) && (this.id == npcs)) {
                 String names = ȡ��ί����������(1, renwu5);
                 ms.append("#b#L").append(renwu5).append("#").append(names).append("#l\r\n");
             }
         }
         if (renwu6 > 0) {
             int mob1 = ȡ�����ί��������Ϣ("mob6");
             int nmob = ȡ��ί��������Ϣ("nmob", renwu6);
             int item = ȡ��ί��������Ϣ("item", renwu6);
             int nitem = ȡ��ί��������Ϣ("nitem", renwu6);
             int hitem = c.getPlayer().getItemQuantity(item);
             int npcs = ȡ��ί��������Ϣ("npc", renwu6);
             if ((mob1 >= nmob) && (nitem <= hitem) && (this.id == npcs)) {
                 String names = ȡ��ί����������(1, renwu6);
                 ms.append("#b#L").append(renwu6).append("#").append(names).append("#l\r\n");
             }
         }
         if (renwu7 > 0) {
             int mob1 = ȡ�����ί��������Ϣ("mob7");
             int nmob = ȡ��ί��������Ϣ("nmob", renwu7);
             int item = ȡ��ί��������Ϣ("item", renwu7);
             int nitem = ȡ��ί��������Ϣ("nitem", renwu7);
             int hitem = c.getPlayer().getItemQuantity(item);
             int npcs = ȡ��ί��������Ϣ("npc", renwu7);
             if ((mob1 >= nmob) && (nitem <= hitem) && (this.id == npcs)) {
                 String names = ȡ��ί����������(1, renwu7);
                 ms.append("#b#L").append(renwu7).append("#").append(names).append("#l\r\n");
             }
         }
         if (renwu8 > 0) {
             int mob1 = ȡ�����ί��������Ϣ("mob8");
             int nmob = ȡ��ί��������Ϣ("nmob", renwu8);
             int item = ȡ��ί��������Ϣ("item", renwu8);
             int nitem = ȡ��ί��������Ϣ("nitem", renwu8);
             int hitem = c.getPlayer().getItemQuantity(item);
             int npcs = ȡ��ί��������Ϣ("npc", renwu8);
             if ((mob1 >= nmob) && (nitem <= hitem) && (this.id == npcs)) {
                 String names = ȡ��ί����������(1, renwu8);
                 ms.append("#b#L").append(renwu8).append("#").append(names).append("#l\r\n");
             }
         }
         if (renwu9 > 0) {
             int mob1 = ȡ�����ί��������Ϣ("mob9");
             int nmob = ȡ��ί��������Ϣ("nmob", renwu9);
             int item = ȡ��ί��������Ϣ("item", renwu9);
             int nitem = ȡ��ί��������Ϣ("nitem", renwu9);
             int hitem = c.getPlayer().getItemQuantity(item);
             int npcs = ȡ��ί��������Ϣ("npc", renwu9);
             if ((mob1 >= nmob) && (nitem <= hitem) && (this.id == npcs)) {
                 String names = ȡ��ί����������(1, renwu9);
                 ms.append("#b#L").append(renwu9).append("#").append(names).append("#l\r\n");
             }
         }
         
         if (ms.length() > 1) {
             return ms.toString();
         } else {
             return "#��û�п�����ȡ������ί������Ŷ�����������@wt ����0-9�鿴���Ѿ���ȡ��ί��������ɽ��ȡ�";
         }
         
     }
     
     public boolean �������ί������(int ���) {
         boolean ���� = false;
         int renwu1 = ȡ�����ί��������Ϣ("renwu1");
         int renwu2 = ȡ�����ί��������Ϣ("renwu2");
         int renwu3 = ȡ�����ί��������Ϣ("renwu3");
         int renwu4 = ȡ�����ί��������Ϣ("renwu4");
         int renwu5 = ȡ�����ί��������Ϣ("renwu5");
         int renwu6 = ȡ�����ί��������Ϣ("renwu6");
         int renwu7 = ȡ�����ί��������Ϣ("renwu7");
         int renwu8 = ȡ�����ί��������Ϣ("renwu8");
         int renwu9 = ȡ�����ί��������Ϣ("renwu9");
         if (renwu1 == ���) {
             �������ί��������Ϣ("renwu1", 0);
             ���� = true;
         } else if (renwu2 == ���) {
             �������ί��������Ϣ("renwu2", 0);
             ���� = true;
         } else if (renwu3 == ���) {
             �������ί��������Ϣ("renwu3", 0);
             ���� = true;
         } else if (renwu4 == ���) {
             �������ί��������Ϣ("renwu4", 0);
             ���� = true;
         } else if (renwu5 == ���) {
             �������ί��������Ϣ("renwu5", 0);
             ���� = true;
         } else if (renwu6 == ���) {
             �������ί��������Ϣ("renwu6", 0);
             ���� = true;
         } else if (renwu7 == ���) {
             �������ί��������Ϣ("renwu7", 0);
             ���� = true;
         } else if (renwu8 == ���) {
             �������ί��������Ϣ("renwu8", 0);
             ���� = true;
         } else if (renwu9 == ���) {
             �������ί��������Ϣ("renwu9", 0);
             ���� = true;
         }
         
         return ����;
     }
     
     
     public String ��ȡϵͳί��������(int ���) {
         
         StringBuilder ms = new StringBuilder().append("#r���������T��#i4251202##r  ��ȡί�н���  #i4251202# #r��T��������\r\n#r");
         
         String names = ȡ��ί����������(1, ���);
         
         int npcs = ȡ��ί��������Ϣ("npc", ���);
         
         if (this.id == npcs) {
         
         if (�������ί������(���) == true) {
         
         ms.append(getVipname()).append(" #b��ɹ��ύί������#g�� #r").append(names).append(" #g��\r\n#b������½�����\r\n");
         
         int maple = ȡ��ί��������Ϣ("reward1maple", ���);
         int mapley = ȡ��ί��������Ϣ("reward2mapley", ���);
         int wmose = ȡ��ί��������Ϣ("reward3wmose", ���);
         int emose = ȡ��ί��������Ϣ("reward4emose", ���);
         int nx = ȡ��ί��������Ϣ("reward5nx", ���);
         int rewarditem = ȡ��ί��������Ϣ("rewarditem", ���);
         int itemsl = ȡ��ί��������Ϣ("itemsl", ���);
         int exp = ȡ��ί��������Ϣ("exp", ���);
         int meso = ȡ��ί��������Ϣ("meso", ���);
         
         if (maple > 0) {
             addMaplewing("maple", maple);
             ms.append("#d���׵㣺#r#e").append(maple).append("#n\r\n");
         }
         if (mapley > 0) {
             addMaplewing("mapley", mapley);
             ms.append("#d��Ծ�㣺#r#e").append(mapley).append("#n\r\n");
         }
         if (wmose > 0) {
             addMaplewing("wmose", wmose);
             ms.append("#d����#r#e").append(wmose).append("#n\r\n");
         }
         if (emose > 0) {
             addMaplewing("emose", emose);
             ms.append("#d�ڼ���#r#e").append(emose).append("#n\r\n");
         }
         if (nx > 0) {
             gainNX(1, nx);
             ms.append("#d���#r#e").append(nx).append("#n\r\n");
         }
         if (rewarditem > 1000000) {
            gainItem(rewarditem, itemsl);
            ms.append("#d��Ʒ��#r#i").append(rewarditem).append(":#    #d������#e#r").append(itemsl).append("#n\r\n");
         }
         if (exp > 0) {
             gainExp(exp);
             ms.append("#d���飺#r#e").append(exp).append("#n\r\n");
         }
         if ((meso > 0) && (c.getPlayer().getMeso() + meso < 2100000000)) {
             gainMeso(meso);
             ms.append("#d��ң�#r#e").append(meso).append("#n\r\n");
         }
         
         } else {
             ms.append("#r��ȡ������ʧ�ܣ�ԭ���������ί������ ʧ�ܣ�����ϵMapleWing �޸���\r\n��ȡ�����ţ�#e#r ").append(���);
         }
         
         } else {
             ms.append("\r\n#b��ȡ����ʧ�ܣ�ԭ������ȡ�����ҵ� NPC ����ȷ��\r\n��Ӧ����Ѱ�� NPC �� #r#p").append(npcs).append("# #b��ȡ ί������ #r").append(names).append("  #b�Ľ�����");
         }
         
         
         return ms.toString();
     }
     
     
    
}
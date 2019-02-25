package handling.cashshop.handler;

import client.MapleCharacter;
import client.MapleClient;
import handling.cashshop.CashShopServer;
import handling.login.LoginServer;
import handling.world.CharacterTransfer;
import handling.world.World;
import org.apache.log4j.Logger;
import server.MTSCart;
import server.MTSStorage;
import tools.MaplePacketCreator;
import tools.data.LittleEndianAccessor;
import tools.packet.MTSCSPacket;

public class CashShopOperation {

    private static final Logger log = Logger.getLogger(CashShopOperation.class);

    public static void LeaveCS(LittleEndianAccessor slea, MapleClient c, MapleCharacter chr) {
        CashShopServer.getPlayerStorageMTS().deregisterPlayer(chr);
        CashShopServer.getPlayerStorage().deregisterPlayer(chr);
        c.updateLoginState(1, c.getSessionIPAddress());
        try {
            World.ChannelChange_Data(new CharacterTransfer(chr), chr.getId(), c.getChannel());
            c.getSession().write(MaplePacketCreator.getChannelChange(c, Integer.parseInt(handling.channel.ChannelServer.getInstance(c.getChannel()).getIP().split(":")[1])));
        } finally {
            String s = c.getSessionIPAddress();
            LoginServer.addIPAuth(s.substring(s.indexOf('/') + 1, s.length()));
            chr.saveToDB(false, true);
            c.setPlayer(null);
            c.setReceiving(false);
            c.getSession().close();
        }
    }

    public static void EnterCS(int playerid, MapleClient c) {
        CharacterTransfer transfer = CashShopServer.getPlayerStorage().getPendingCharacter(playerid);
        boolean mts = false;
        if (transfer == null) {
            transfer = CashShopServer.getPlayerStorageMTS().getPendingCharacter(playerid);
            mts = true;
            if (transfer == null) {
                c.getSession().close();
                log.info("�̳Ǽ������ - 1 transfer == null");
                return;
            }
        }
        MapleCharacter chr = MapleCharacter.ReconstructChr(transfer, c, false);

        c.setPlayer(chr);
        c.setAccID(chr.getAccountID());

        if (!c.CheckIPAddress()) {
            c.getSession().close();
            log.info(new StringBuilder().append("�̳Ǽ������ - 2 ").append(!c.CheckIPAddress()).toString());
            return;
        }

        int state = c.getLoginState();
        boolean allowLogin = false;
        if (((state == 1) || (state == 3))
                && (!World.isCharacterListConnected(c.loadCharacterNames(c.getWorld())))) {
            allowLogin = true;
        }

        if (!allowLogin) {
            c.setPlayer(null);
            c.getSession().close();
            log.info(new StringBuilder().append("�̳Ǽ������ - 3 ").append(!allowLogin).toString());
            return;
        }
        c.updateLoginState(2, c.getSessionIPAddress());
        if (mts) {
            CashShopServer.getPlayerStorageMTS().registerPlayer(chr);
            c.getSession().write(MTSCSPacket.startMTS(chr));
            MTSCart cart = MTSStorage.getInstance().getCart(c.getPlayer().getId());
            cart.refreshCurrentView();
            MTSOperation.MTSUpdate(cart, c);
        } else {
            CashShopServer.getPlayerStorage().registerPlayer(chr);
            c.getSession().write(MTSCSPacket.warpchartoCS(c));
            c.getSession().write(MTSCSPacket.warpCS(c));
            c.getSession().write(MTSCSPacket.enableCSUse());
            c.getSession().write(MTSCSPacket.�ȵ��Ƽ�(c.getPlayer()));
            c.getSession().write(MTSCSPacket.ÿ������());
            c.getSession().write(MTSCSPacket.�̳�δ֪���2());
            c.getSession().write(MTSCSPacket.�̳ǵ�������Ϣ(c));
            c.getSession().write(MTSCSPacket.�̳�δ֪���1());
            c.getSession().write(MTSCSPacket.�̳�������Ϣ(c));
            c.getSession().write(MTSCSPacket.�̳ǹ��ﳵ(c.getPlayer(), false));
            c.getSession().write(MTSCSPacket.ˢ�µ����Ϣ(c.getPlayer()));
            c.getSession().write(MTSCSPacket.�̳ǵ�������Ϣ(c));
            c.getPlayer().getCashInventory().checkExpire(c);
        }
    }

    public static void CSUpdate(MapleClient c) {
        c.getSession().write(MTSCSPacket.ˢ�µ����Ϣ(c.getPlayer()));
    }

    public static void doCSPackets(MapleClient c) {
        c.getSession().write(MTSCSPacket.�̳ǵ�������Ϣ(c));
        c.getSession().write(MTSCSPacket.ˢ�µ����Ϣ(c.getPlayer()));
        c.getSession().write(MTSCSPacket.enableCSUse());
        c.getPlayer().getCashInventory().checkExpire(c);
    }
}

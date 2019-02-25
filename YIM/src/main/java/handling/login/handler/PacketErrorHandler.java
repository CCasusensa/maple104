package handling.login.handler;

import client.MapleClient;
import handling.SendPacketOpcode;
import tools.FileoutputUtil;
import tools.StringUtil;
import tools.data.LittleEndianAccessor;

public class PacketErrorHandler {

    public static void handlePacket(LittleEndianAccessor slea, MapleClient c) {
        if (slea.available() >= 6) {
            short badPacketSize = slea.readShort();
            slea.skip(4);
            int pHeader = slea.readShort();
            String pHeaderStr = Integer.toHexString(pHeader).toUpperCase();
            pHeaderStr = StringUtil.getLeftPaddedStr(pHeaderStr, '0', 4);
            String op = lookupRecv(pHeader);
            String from = "";
            if (c.getPlayer() != null) {
                from = "��ɫ: " + c.getPlayer().getName() + " �ȼ�(" + c.getPlayer().getLevel() + ") ְҵ: " + c.getPlayer().getJob() + " \r\n";
            }
            String Recv = "����Recv�������: " + op + " [" + pHeaderStr + "] (" + (badPacketSize - 4) + ")" + slea.toString(true);
            FileoutputUtil.packetLog("log\\�������.log", from + Recv);
        }
    }

    private static String lookupRecv(int val) {
        for (SendPacketOpcode op : SendPacketOpcode.values()) {
            if (op.getValue() == val) {
                return op.name();
            }
        }
        return "UNKNOWN";
    }
}

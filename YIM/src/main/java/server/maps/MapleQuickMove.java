package server.maps;

import java.util.ArrayList;
import java.util.List;

public enum MapleQuickMove {

    ս���㳡("", "�ƶ������Ժ�������ұ���ʵ���Ĵ��Ҷ�����#c<ս���㳡-���>#��\n#c30�����Ͽ����ƶ�", 9070004, 0, 30, new int[]{100000000, 101000000, 102000000, 103000000, 104000000, 120000000, 130000101, 140000000, 200000000, 211000000, 220000000, 221000000, 222000000, 230000000, 240000000, 250000000, 251000000, 260000000, 261000000, 310000000}),
    ���﹫԰("", "�ƶ������ԺͶ�Ա��һ��Ը�ǿ�����������Ϸ����\n#c<���﹫԰>#��\n#c20�����Ͽ��Բμ�", 9071003, 1, 0, new int[]{100000000, 101000000, 102000000, 103000000, 104000000, 120000000, 130000101, 140000000, 200000000, 211000000, 220000000, 221000000, 222000000, 230000000, 240000000, 250000000, 251000000, 260000000, 261000000, 310000000}),
    ��Ԫ֮��("", "ʹ�ÿ����ƶ����������ȸ��������ͼ�ϵ�#c<��Ԫ֮��>#��", 9010022, 2, 10, new int[]{100000000, 101000000, 102000000, 103000000, 104000000, 105000000, 120000000, 130000101, 140000000, 200000000, 211000000, 220000000, 221000000, 222000000, 230000000, 240000000, 250000000, 251000000, 260000000, 261000000, 310000000}),
    �����г�("", "�ƶ������Ժ�������ҽ�����Ʒ��#c<�����г�>#��", 9000087, 3, 0, new int[]{100000100, 101000000, 102000000, 103000000, 104000000, 120000000, 130000101, 140000000, 200000000, 211000000, 220000000, 221000000, 222000000, 230000000, 240000000, 250000000, 251000000, 260000000, 261000000, 310000000, 500000000, 540000000, 550000000, 600000000, 702000000, 800000000}),
    ���˽�("", "�ƶ���רҵ������ׯ#c<���˽�>#��\n#c30�����Ͽ����ƶ�", 9000088, 4, 30, new int[]{100000000, 101000000, 102000000, 103000000, 104000000, 105000000, 120000000, 130000101, 140000000, 200000000, 211000000, 220000000, 221000000, 222000000, 230000000, 240000000, 250000000, 251000000, 260000000, 261000000, 310000000}),
    ���⳵("", "ʹ�ý���ɫ�ƶ���������Ҫ������#c<���⳵>#��", 9000089, 6, 0, new int[]{100000000, 101000000, 102000000, 103000000, 104000000, 120000000});
    public String name;
    public String desc;
    public int npcid;
    public int level;
    public int type;
    public int[] maps;

    private MapleQuickMove(String name, String desc, int npcid, int type, int level, int[] maps) {
        this.name = name;
        this.desc = desc;
        this.npcid = npcid;
        this.type = type;
        this.level = level;
        this.maps = maps;
    }

    public int getNpcId() {
        return this.npcid;
    }

    public static MapleQuickMove getNpcId(int npcid) {
        for (MapleQuickMove pn : values()) {
            if (pn.getNpcId() == npcid) {
                return pn;
            }
        }
        return null;
    }

    public static MapleQuickMove getMapId(int mapid) {
        for (MapleQuickMove pn : values()) {
            for (int i : pn.maps) {
                if (mapid == i) {
                    return pn;
                }
            }
        }
        return null;
    }

    public static List<MapleQuickMove> showQuickMove(int mapid) {
        List ret = new ArrayList();
        for (MapleQuickMove pn : values()) {
            for (int i : pn.maps) {
                if (mapid == i) {
                    ret.add(pn);
                }
            }
        }
        return ret;
    }

    public static boolean isQuickMoveMap(int mapid) {
        switch (mapid) {
            case 100000000:
            case 101000000:
            case 102000000:
            case 103000000:
            case 104000000:
            case 105000000:
            case 120000000:
            case 130000101:
            case 140000000:
            case 200000000:
            case 211000000:
            case 220000000:
            case 221000000:
            case 222000000:
            case 230000000:
            case 240000000:
            case 250000000:
            case 251000000:
            case 260000000:
            case 261000000:
            case 310000000:
                return true;
        }
        return false;
    }
}

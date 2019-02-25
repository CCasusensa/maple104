package client;

public enum MapleStat {

    Ƥ��(0x1),
    ����(0x2),
    ����(0x4),
    �ȼ�(0x10),
    ְҵ(0x20),
    ����(0x40),
    ����(0x80),
    ����(0x100),
    ����(0x200),
    HP(0x400),
    MAXHP(0x800),
    MP(0x1000),
    MAXMP(0x2000),
    AVAILABLEAP(0x4000),
    AVAILABLESP(0x8000),
    ����(0x10000),
    ����(0x20000),
    ���(0x40000),
    ����(0x180008),
    GACHAPONEXP(0x80000),
    ƣ��(0x80000),
    ����(0x100000),
    ����(0x200000),
    ��־(0x400000),
    �ּ�(0x800000),
    ����(0x1000000),
    ����(0x2000000),
    TRAIT_LIMIT(0x8000000),
    BATTLE_EXP(0x10000000),
    BATTLE_RANK(0x20000000L),
    BATTLE_POINTS(0x40000000L),
    ICE_GAGE(0x80000000L),
    VIRTUE(0x100000000L);

    private final long i;

    private MapleStat(long i) {
        this.i = i;
    }

    public long getValue() {
        return this.i;
    }

    public static MapleStat getByValue(long value) {
        for (MapleStat stat : values()) {
            if (stat.i == value) {
                return stat;
            }
        }
        return null;
    }

    public static enum Temp {

        ����(0x1),
        ����(0x2),
        ����(0x4),
        ����(0x8),
        �﹥(0x10),
        ħ��(0x20),
        ���(0x40),
        ħ��(0x80),
        ����(0x100),
        �ر�(0x200),
        �ٶ�(0x400),
        ��Ծ(0x800);
        private final int i;

        private Temp(int i) {
            this.i = i;
        }

        public int getValue() {
            return this.i;
        }
    }
}
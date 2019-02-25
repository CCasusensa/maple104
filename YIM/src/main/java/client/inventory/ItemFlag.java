package client.inventory;

public enum ItemFlag {

    LOCK(1),
    Ь�ӷ���(2),
    �������(4),
    UNTRADEABLE(8),
    KARMA_EQ(16),
    KARMA_USE(2),
    CHARM_EQUIPPED(32),
    ���Խ���(48),
    ANDROID_ACTIVATED(64),
    CRAFTED(128),
    CRAFTED_USE(16),
    ��������(256),
    ���˾���(512),
    KARMA_ACC_USE(1024),
    KARMA_ACC(4096),
    ��������(8192),
    ��������(16384);
    private final int i;

    private ItemFlag(int i) {
        this.i = i;
    }

    public int getValue() {
        return this.i;
    }

    public boolean check(int flag) {
        return (flag & this.i) == this.i;
    }
}

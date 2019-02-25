package client.inventory;

public enum SocketFlag {

    ������Ƕ(1),
    �Ѵ��01(2),
    �Ѵ��02(4),
    �Ѵ��03(8),
    ����Ƕ01(16),
    ����Ƕ02(32),
    ����Ƕ03(64);
    private final int i;

    private SocketFlag(int i) {
        this.i = i;
    }

    public short getValue() {
        return (short) this.i;
    }

    public boolean check(int flag) {
        return (flag & this.i) == this.i;
    }
}

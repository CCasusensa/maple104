function enter(pi) {
    if (pi.isQuestActive(22010) || pi.getPlayer().getJob() != 2001) {
        pi.warp(100030310);
    } else {
        pi.playerMessage("���������̫Σ�գ��������������������ǿ����ڳ�ȥ����.");
    }
    return true;
}
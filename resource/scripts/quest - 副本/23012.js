var status = -1;

function end(mode, type, selection) {
    if (mode == 0) {
	if (status == 0) {
	    qm.sendNext("����һ������Ҫ�ľ�����");
	    qm.safeDispose();
	    return;
	}
	status--;
    } else {
	status++;
    }
    if (status == 0) {
	qm.sendYesNo("���Ѿ��������𣿵ľ����������յģ���������ϸ�ž���Ҫ��ʲô����ȷ�������Ϊһ������������");
    } else if (status == 1) {
	qm.sendNext("�Ҹոճ��͵�����ʹ�������ı�����������������ø�ǿ��ʹ�����Դ��ڣ�S���ʵ����ͳ�ơ�����㲻ȷ��ʲô��ߣ�ֻ���� #bAuto#k.");
	if (qm.getJob() == 3000) {
	    qm.gainItem(1462092,1);
	    qm.expandInventory(1, 4);
	    qm.expandInventory(2, 4);
	    qm.expandInventory(4, 4);
	    qm.changeJob(3300);
	    qm.teachSkill(30001061, 1, 0);
	    qm.teachSkill(30001062, 1, 0);
	    qm.getPlayer().fakeRelog();
	}
	qm.forceCompleteQuest();
    } else if (status == 2) {
	qm.sendNextPrev("��Ҳ��������Ŀ�����Ϊ����豸�ȡ���档���ǵ�ʹ����Щ��ۺ�װ���������������Ʒ.");
    } else if (status == 3) {
	qm.sendNextPrev("���ڡ���Ҫ��ȥ����չʾ��εֿ�����.");
	qm.safeDispose();
    }
}
var status = -1;

function end(mode, type, selection) {
    if (mode == 0) {
	if (status == 0) {
	    qm.sendNext("����һ������Ҫ�ľ���.");
	    qm.safeDispose();
	    return;
	}
	status--;
    } else {
	status++;
    }
    //if (!qm.getPlayer().isGM()) { //not available, sry
	//qm.dispose();
	//return;
    //}
    if (status == 0) {
	qm.sendYesNo("���Ѿ��������𣿵ľ����������յģ���������ϸ�ž���Ҫ��ʲô����ȷ�������Ϊһ����еʦ?");
    } else if (status == 1) {
	qm.sendNext("�Ҹոճ��͵�����ʹ�������Ļ�еʦ����������ø�ǿ��ʹ�����Դ��ڣ�S���ʵ����ͳ�ơ�����㲻ȷ��ʲô��ߣ�ֻ���� #bAuto#k.");
	if (qm.getJob() == 3000) {
	    qm.gainItem(1492014,1); //1492065 desert eagle
	    qm.expandInventory(1, 4);
	    qm.expandInventory(2, 4);
	    qm.expandInventory(4, 4);
	    qm.changeJob(3500);
	    //30001061 = capture, 30001062 = call, 30001068 = mech dash
	    qm.teachSkill(30001068,1,0);
	}
	qm.forceCompleteQuest();
    } else if (status == 2) {
	qm.sendNextPrev("��Ҳ��������Ŀ�����Ϊ����豸�ȡ���档���ǵ�ʹ����Щ��ۺ�װ���������������Ʒ.");
    } else if (status == 3) {
	qm.sendNextPrev("���ڡ���Ҫ��ȥ����չʾ��εֿ�����.");
	qm.safeDispose();
    }
}
var status = -1;

function end(mode, type, selection) {
    if (mode == 0) {
	if (status == 0) {
	    qm.sendNext("����һ������Ҫ�ľ���,");
	    qm.safeDispose();
	    return;
	}
	status--;
    } else {
	status++;
    }
    if (status == 0) {
	qm.sendYesNo("���Ѿ��������𣿵ľ����������յģ���������ϸ�ž���Ҫ��ʲô?");
    } else if (status == 1) {
	qm.sendNext("�Ҹոճ��͵�����ʹ�������Ļ���ʦ����������ø�ǿ��ʹ�����Դ��ڣ�S���ʵ����ͳ�ơ�����㲻ȷ��ʲô��ߣ�ֻ���� #bAuto#k.");
	if (qm.getJob() == 3500) {
	    qm.changeJob(3510);
	}
	qm.forceCompleteQuest();
    } else if (status == 2) {
	qm.sendNextPrev("���ڡ���Ҫ��ȥ����չʾ��εֿ�����.");
	qm.safeDispose();
    }
}
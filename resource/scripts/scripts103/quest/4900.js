var status = -1;

function start(mode, type, selection) {
	if (mode == -1) {
		qm.dispose();
	} else {
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			qm.sendNext("��һ��������Ҷ���𣿣���");
		} else if (status == 1) {
			qm.sendNextPrev("�š�����׼����һЩ���⣬���ܰ���һһ�ش������");
		} else if (status == 2) {
			qm.sendNextPrev("�ðɣ�׼���á���������û��ϵ����������������");
		} else if (status == 3){
			qm.forceStartQuest();
		}
	}
}

var status = 0;

function start() {
status = -1;
action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0)
			cm.sendNexts("���������ˡ�ӵ����Լ�ʸ���ˡ���");
		if (status == 1)
			cm.sendNextPrevs("ִ����Լ�ɡ���");
		if (status == 2) {
			cm.lockUI();
			cm.warp(900090101);
			cm.dispose();
		}
	}
}
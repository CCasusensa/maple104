var status = 0;

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
	if (status >= 0 && mode == 0) {
		cm.sendNext("���б����������û������");
		cm.dispose();
		return;
	}
	if (mode == 1)
		status++;
	else
		status--;
	if (status == 0) {
		cm.sendYesNo("�������Ƿ�ӡ������#b������#k�������ս�����ͽ�ȥ��\r\n#r��������#k3���ٻ�");
	} else if (status == 1) {
		cm.sendNext("��ǰ��.3���ǽ���������");
		cm.dispose();
		}
	}
}
// White Scroll Maker By Sawyer of LynnStory
//Nana(H) (9201001)
importPackage(net.sf.odinms.client);
var status = 0;



function start() {
	status = -1;
	action(1, 0, 0);
}


function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (status >= 2 && mode == 0) {
			cm.sendOk("Rawr!?");
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
				cm.sendNext("����....����...������.......... #v01482013# #v01492013# .�������Ҫ�Ļ�..������#b �ڰ�ˮ��20��#k#v4005004#, #b #k#v01482012#, �Լ� #b500wð��B. .....");
			}
		else if (status == 1) {
			if ((cm.haveItem(4005002, 20)) && (cm.haveItem(1452019)) && (cm.getMeso() >= 5000000)) {
			cm.sendYesNo("����ร��������Ѿ��ռ�������Ҫ�����в���..���ھ͸���ô?");
			}
			else if (!cm.haveItem(4005004, 20)) {
			cm.sendOk("�����ռ��� ˮ��20��#k#v4005004#û�дﵽ����Ҫ�������.");
			cm.dispose();
			}
			else if (!cm.haveItem(01482012)) {
			cm.sendOk("�㻹û��#k#v1482012#");
			cm.dispose();
			}
			else if (!cm.getMeso() <= 5000000) {
			cm.sendOk("�ܱ�Ǹ�������ϵĽ�Ҳ���֧��������������ķ���.");
			cm.dispose();
			}
			
		}
		else if (status == 2) {
			cm.gainItem(4005004, -20);
			cm.gainItem(1482012, -1);
			cm.gainMeso(-5000000);
			cm.gainItem(01482013, 1);
			cm.gainItem(01492013, 1);			
}
}
}
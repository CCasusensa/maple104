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
				cm.sendNext("���� �����ǻ��£����µ�������.#v1472052# #v1332052# .�������Ҫ�Ļ�..������#b ����ˮ��20��#k#v4005003#, #b #k#v1472031#, �Լ� #b500��ð��B. .....");
			}
		else if (status == 1) {
			if ((cm.haveItem(4005003, 20)) && (cm.haveItem(1472031)) && (cm.getMeso() >= 5000000)) {
			cm.sendYesNo("����ร��������Ѿ��ռ�������Ҫ�����в���..���ھ͸���ô?");
			}
			else if (!cm.haveItem(4005003, 20)) {
			cm.sendOk("�����ռ��� ˮ��20��#k#v4005003#û�дﵽ����Ҫ�������.");
			cm.dispose();
			}
			else if (!cm.haveItem(1402035)) {
			cm.sendOk("�㻹û��#k#v1472031#");
			cm.dispose();
			}
			else if (!cm.getMeso() <= 5000000) {
			cm.sendOk("�ܱ�Ǹ�������ϵĽ�Ҳ���֧��������������ķ���.");
			cm.dispose();
			}
			
		}
		else if (status == 2) {
			cm.gainItem(4005003, -20);
			cm.gainItem(1472031, -1);
			cm.gainMeso(-5000000);
			cm.gainItem(1472052, 1);
			cm.gainItem(1332052, 1);			
}
}
}
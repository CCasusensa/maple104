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
				cm.sendNext("�����������ҵ���...�����ҵĿռ�ħ�������ǿ...��  �������ҵ�һЩ����..��Ҫô��.#v1372032# #v1382036# .�������Ҫ�Ļ�..������#b ����ˮ��20��#k#v4005001#, #b #k#v1382007#, �Լ� #b500wð��B. .....");
			}
		else if (status == 1) {
			if ((cm.haveItem(4005001, 20)) && (cm.haveItem(1382007)) && (cm.getMeso() >= 5000000)) {
			cm.sendYesNo("����ร��������Ѿ��ռ�������Ҫ�����в���..���ھ͸���ô?");
			}
			else if (!cm.haveItem(4005001, 20)) {
			cm.sendOk("�����ռ��� ˮ��20��#k#v4005001#û�дﵽ����Ҫ�������.");
			cm.dispose();
			}
			else if (!cm.haveItem(1382007)) {
			cm.sendOk("�㻹û��#k#v1382007#");
			cm.dispose();
			}
			else if (!cm.getMeso() <= 5000000) {
			cm.sendOk("�ܱ�Ǹ�������ϵĽ�Ҳ���֧��������������ķ���.");
			cm.dispose();
			}
			
		}
		else if (status == 2) {
			cm.gainItem(4005001, -20);
			cm.gainItem(1382007, -1);
			cm.gainMeso(-5000000);
			cm.gainItem(1372032, 1);
			cm.gainItem(1382036, 1);			
}
}
}
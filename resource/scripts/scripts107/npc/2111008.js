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
				cm.sendNext("һ���ɹ��ľѻ���..��Ҫ����...���������ǳɹ��Ĺؼ�. #v1452044# #v1462039# .�������Ҫ�Ļ�..������#b ����ˮ��20��#k#v4005002#, #b #k#v1452019#, �Լ� #b500wð��B. .....");
			}
		else if (status == 1) {
			if ((cm.haveItem(4005002, 20)) && (cm.haveItem(1452019)) && (cm.getMeso() >= 5000000)) {
			cm.sendYesNo("����ร��������Ѿ��ռ�������Ҫ�����в���..���ھ͸���ô?");
			}
			else if (!cm.haveItem(4005002, 20)) {
			cm.sendOk("�����ռ��� ˮ��20��#k#v4005002#û�дﵽ����Ҫ�������.");
			cm.dispose();
			}
			else if (!cm.haveItem(1452019)) {
			cm.sendOk("�㻹û��#k#v1452019#");
			cm.dispose();
			}
			else if (!cm.getMeso() <= 5000000) {
			cm.sendOk("�ܱ�Ǹ�������ϵĽ�Ҳ���֧��������������ķ���.");
			cm.dispose();
			}
			
		}
		else if (status == 2) {
			cm.gainItem(4005002, -20);
			cm.gainItem(1452019, -1);
			cm.gainMeso(-5000000);
			cm.gainItem(1452044, 1);
			cm.gainItem(1462039, 1);			
}
}
}
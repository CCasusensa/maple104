importPackage(net.sf.odinms.client);
var menu = new Array("����","���֮��","�ٲ���","����");
var cost = new Array(1000,1000,1000,1000);
var SDtoJ2;
var display = "";
var btwmsg;
var method;

function start() {
	status = -1;
	SDtoJ2 = cm.getEventManager("SDtoJ2");
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if(mode == -1) {
		cm.dispose();
		return;
	} else {
		if(mode == 0 && status == 0) {
			cm.dispose();
			return;
		} else if(mode == 0) {
			cm.sendNext("OK. If you ever change your mind, please let me know.");
			cm.dispose();
			return;
		}
		status++;
		if (status == 0) {
			for(var i=0; i < menu.length; i++) {
				if(cm.getChar().getMapId() == 104020130 && i < 1) {
					display += "\r\n#L"+i+"#�ƶ�ʱ���Լ��#b2����#k��������#b("+cost[i]+")#k��ҡ�";
				} else if(cm.getChar().getMapId() == 250000100 && i > 0 && i < 3) {
					display += "\r\n#L"+i+"##b"+menu[i]+"("+cost[i]+" ���)#k";
				}
			}
			if(cm.getChar().getMapId() == 130000210 || cm.getChar().getMapId() == 251000000) {
				btwmsg = "#b���֮�ǵ�����#k";
			} else if(cm.getChar().getMapId() == 250000100) {
				btwmsg = "#b���귵�����֮�ǻ���ȥ�ٲ���#k";
			}
			if(cm.getChar().getMapId() == 251000000) {
				cm.sendYesNo("��ô�����Ҵ� "+btwmsg+" �ٵ����ڡ��ҵ��ٶȺܿ�İɣ�������뷵�� #b"+menu[3]+"#k ����ô���Ǿ����̳������������ǵø���һЩ����Ǯ���۸��� #b"+cost[3]+" ���#k��");
			} else {
				cm.sendSimple("�š�������˵���������뿪������ħ�����֣�ǰ�����¶���·�������ʱ���Լ��#b2����#k��������1000��ҡ�\r\n" + display);
			}
		} else if(status == 1) {
			if(selection == 2) {
				cm.sendYesNo("��ȷ��Ҫȥ #b"+menu[2]+"#k �� ��ô��Ҫ������ #b"+cost[2]+" ���#k��");
			} else {
				if(cm.getMeso() < cost[selection]) {
					cm.sendNext("��ȷ�������㹻�Ľ�ң�");
					cm.dispose();
				} else {
					if(cm.getChar().getMapId() == 251000000) {
						cm.gainMeso(-cost[3]);
						cm.warp(250000100);
						cm.dispose();
					} else {
						if(SDtoJ2.getProperty("isRiding").equals("false")) {
							cm.gainMeso(-cost[selection]);
							SDtoJ2.newInstance("SDtoJ2");
							SDtoJ2.setProperty("myRide",selection);
							SDtoJ2.getInstance("SDtoJ2").registerPlayer(cm.getChar());
							cm.dispose();
						} else {
							cm.gainMeso(-cost[3]);
							cm.warp(250000100);
							cm.dispose();
						}
					}
				}
			}
		} else if(status == 2) {
			if(cm.getMeso() < cost[2]) {
				cm.sendNext("��ȷ�������㹻�Ľ�ң�");
				cm.dispose();
			} else {
				cm.gainMeso(-cost[2]);
				cm.warp(251000000);
				cm.dispose();
			}
		}
	}
}


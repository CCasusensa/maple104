importPackage(net.sf.odinms.client);
var menu = new Array("����","���֮��","�ٲ���","����");
var cost = new Array(80,80,80,80);
var EnToJ1;
var display = "";
var btwmsg;
var method;

function start() {
	status = -1;
	EnToJ1 = cm.getEventManager("EnToJ1");
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
				if(cm.getChar().getMapId() == 104000000 && i < 1) {
					display += "\r\n#L"+i+"#�ƶ�ʱ���Լ��#b1����#k��������#b("+cost[i]+")#k��ҡ�";
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
				cm.sendSimple("�ҿ��Կ���ר�̴���ȥ#b���#k��������#b���80#kҪ��Ǯ��Ʊ�ˡ�Ҫȥ����𣿴��1�������Ҿ͵��ˡ�\r\n" + display);
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
						if(EnToJ1.getProperty("isRiding").equals("false")) {
							cm.gainMeso(-cost[selection]);
							EnToJ1.newInstance("EnToJ1");
							EnToJ1.setProperty("myRide",selection);
							EnToJ1.getInstance("EnToJ1").registerPlayer(cm.getChar());
							cm.dispose();
						} else {
							cm.sendOk("ϵͳ������������Ƶ�������ϴ���");
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
				cm.sendOk("ϵͳ������������Ƶ�������ϴ���");
				cm.dispose();
			}
		}
	}
}
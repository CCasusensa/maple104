var fromMap = new Array(211000000,220000000,240000000);
var toMap = new Array(211040200,220050300,240030000);
var cost = new Array(45000,25000,55000);
var location;

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if(mode == -1) {
		cm.dispose();
	}
	if(mode == 0) {
		cm.sendNext("��...����ɡ�����ֵ�ó��⳵�ķ����㽫��Զ�����ڣ�");
	}
	if(mode == 1) {
		status++;
	}
	if(status == 0) {
		switch(cm.getChar().getMapId()) {
			case fromMap[0]:
				location = 0;
				break;
			case fromMap[1]:
				location = 1;
				break;
			case fromMap[2]:
				location = 2;
				break;
		}
		cm.sendNext("��ã���Σ�ճ��⳵�����㵽Σ����#m"+cm.getChar().getMapId()+"#��#b#m"+toMap[location]+"##k��������Ҫ��һЩ������ #b"+cost+" ���#k ���ư��󣬵��ǲ����ҵĳ������������ɵĵ���Σ������");
	} else if(status == 1) {
		cm.sendOk("#b��ȷ��Ҫ��������ȥ#b#m"+toMap[location]+"#��");
	} else if(status == 2) {
		if(cm.getMeso() < cost) {
			cm.sendNext("You don't seem to have enough mesos. I am terribly sorry, but I cannot help you unless you pay up. Bring in the mesos by hunting more and come back when you have enough.");
			cm.dispose();
		} else{
			cm.warp(toMap[location]);
			cm.gainMeso(-cost[location]);
			cm.dispose();
		}
	}
}

var section;
var temp;
var cost;
var count;
var menu = "";
var itemID = new Array(4000226,4000229,4000236,4000237,4000261,4000231,4000238,4000239,4000241,4000242,4000234,4000232,4000233,4000235,4000243);

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if(mode == -1) {
		cm.dispose();
		return;
	}
	if(mode == 0 && (status == 0 || status == 1 || status == 2)) {
		cm.dispose();
		return;
	} else if(mode == 0) {
		if(section == 0) {
			cm.sendOk("������ı������Ƿ�����Щ������������Ľ���Ƿ��ã��ٻ�����ı�����λ�Ƿ��ã�");
		} else {
			cm.sendOk("Think about it, and then let me know of your decision.");
		}
		cm.dispose();
		return;
	}
	if(mode == 1) {
		status++;
	}
	if(status == 0) {
		cm.sendSimple("����ʲô��Ҫ����˵��\r\n#L0##b����ħ������#k#l\r\n#L1##bΪ����ľ��#k#l");
	} else if(status == 1) {
		section = selection;
		if(section == 0) {
			cm.sendSimple("���������Ǵ��ӵ��ˣ�����ʲô��?\r\n\r\n#L0##b��õ�#t4031346#��#k#l");
		} else {
			cm.sendNext("���õĽ�������Ǵ峤��ְ��������Ҫ������õĵ��ߡ�����Ϊ�˴�����׳�����ľ�帽���ռ����ĵ�����");
		}
	} else if(status == 2) {
		if(section == 0) {
			cm.sendGetNumber("#b#t4031346##k�ǹ�����Ʒ�����ܰ��͸��㡣����һ���Ĵ��ۿ�����?һ��#b#t4031346##k#b30,000 ���#k\r\n����?Ҫ����?",0,0,99);
		} else {
			for(var i=0; i < itemID.length; i++) {
				menu += "\r\n#L"+i+"##b#t"+itemID[i]+"##k#l";
			}
			cm.sendNext("������׳����ֵ�����?");
			cm.dispose();
		}
	} else if(status == 3) {
		if(section == 0) {
			if(selection == 0) {
				cm.sendOk("�����������Ҫ���������.");
				cm.dispose();
			} else {
				temp = selection;
				cost = temp * 30000;
				cm.sendYesNo("����#b #t4031346#"+temp+"��#k ��Ҫ#b"+cost+"���#k.������?");
			}
		} else {
			temp = selection;
			if(!cm.haveItem(itemID[temp])) {
				cm.sendNext("�㲻��Ϊ��ӵ�и���Ʒ��");
				cm.dispose();
			} else {
				cm.sendGetNumber("How many #b#t"+itemID[temp]+"#k's would you like to donate?\r\n#b< Owned : #c"+itemID[temp]+"# >#k",0,0,"#c"+itemID[temp]+"#");
			}
		}
	} else if(status == 4) {
		if(section == 0) {
			if(cm.getMeso() < cost || !cm.canHold(4031346)) {
				cm.sendOk("������ı������Ƿ�����Щ������������Ľ���Ƿ��ã��ٻ�����ı�����λ�Ƿ��ã�");
			} else {
				cm.sendOk("��ӭ������");
				cm.gainItem(4031346, temp);
				cm.gainMeso(-cost);
			}
			cm.dispose();
		} else {
			count = selection;
			cm.sendYesNo("Are you sure you want to donate #b"+count+" #t"+itemID[temp]+"##k?");
		}
	} else if(status == 5) {
		if(count == 0 || !cm.haveItem(itemID[temp],count)) {
			cm.sendNext("����δӵ�и���Ʒ��");
		} else {
			cm.gainItem(itemID[temp],-count);
			cm.sendNext("�ǳ���л�㡣");
		}
		cm.dispose();
	}
}

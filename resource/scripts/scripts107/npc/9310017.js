var status = 0;
var beauty = 0;
var hairprice = 3000000;
var haircolorprice = 3000000;
var mhair = Array(30000,30020,30030,30060,30110,30120,30160,30260,30270,30300,30340,30420,30550,30760,30680,30840);
var fhair = Array(31000,31030,31040,31280,31290,31310,31320,31410,31420,31550,31740,31700,31820);
var hairnew = Array();

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (mode == 0 && status == 0) {
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			cm.sendSimple("���,����#p9310017#!�������#bԥ԰������һ���Ա��#k��#bԥ԰Ⱦɫһ���Ա�� #k,��ͷ��ĵİѷ��ͽ�����,�һ����������.��ô��Ҫ��ʲô?��ѡ���!\r\n#L1#�ı䷢��(ʹ��#bԥ԰������һ���Ա��#k)#l\r\n#L2#Ⱦɫ(ʹ��#bԥ԰Ⱦɫһ���Ա��#k)#l");								
			} else if (status == 1) {
			if (selection == 0) {
				beauty = 0;
				cm.sendSimple("��ô���빺�����ֻ�Ա����?\r\n#L0##bԥ԰������һ���Ա��#k,��Ҫ#r" + hairprice + "#k���#l\r\n#L1##bԥ԰Ⱦɫһ���Ա��#k,��Ҫ#r" + haircolorprice + "#k���#l");
			} else if (selection == 1) {
				beauty = 1;
				hairnew = Array();
				if (cm.getChar().getGender() == 0) {
					for(var i = 0; i < mhair.length; i++) {
						hairnew.push(mhair[i] + parseInt(cm.getChar().getHair() % 10));
					}
				} 
				if (cm.getChar().getGender() == 1) {
					for(var i = 0; i < fhair.length; i++) {
						hairnew.push(fhair[i] + parseInt(cm.getChar().getHair() % 10));
					}
				}
				cm.sendYesNo("�������#bԥ԰������һ���Ա��#k,��ô�ҽ���������ı�һ�ַ���,��ȷ��Ҫ�ı䷢����?");
			} else if (selection == 2) {
				beauty = 2;
				haircolor = Array();
				var current = parseInt(cm.getChar().getHair()/10)*10;
				for(var i = 0; i < 8; i++) {
					haircolor.push(current + i);
				}
				cm.sendYesNo("�������#bԥ԰Ⱦɫһ���Ա��#k,��ô�ҽ���������ı�һ�ַ�ɫ,��ȷ��Ҫ�ı䷢ɫ��?");
			}
		}
		else if (status == 2){
			cm.dispose();
			if (beauty == 1){
				if (cm.haveItem(5150014)){
					cm.gainItem(5150014, -1);
					cm.setHair(hairnew[Math.floor(Math.random() * hairnew.length)]);
					cm.sendOk("����,����������̾����·��Ͱ�!");
				} else {
					cm.sendOk("�������㲢û�����ǵĻ�Ա��,�ҿ��²��ܸ�����,�Һܱ�Ǹ.�����ȹ����.");
				}
			}
			if (beauty == 2){
				if (cm.haveItem(5151010) == true){
					cm.gainItem(5151010, -1);
					cm.setHair(haircolor[Math.floor(Math.random() * haircolor.length)]);
					cm.sendOk("����,����������̾����·�ɫ��!");
				} else {
					cm.sendOk("�������㲢û�����ǵĻ�Ա��,�ҿ��²��ܸ���Ⱦ��,�Һܱ�Ǹ.�����ȹ����.");
				}
}
	
}
		}
		}
	
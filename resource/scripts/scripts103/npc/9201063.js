var status = 0;
var beauty = 0;
var hairprice = 3000000;
var haircolorprice = 3000000;
var mhair = Array(30730,30280,30220,30410,30200,30050,30230,30160,30110,30250);
var fhair = Array(31730,31310,31470,31150,31160,31300,31260,31220,31410,31270);
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
			cm.sendSimple("���,���������������!�������#b��Ҷ����������ͨ��Ա��#k��#b��Ҷ��Ⱦɫ��ͨ��Ա��#k,��ͷ��ĵİѷ��ͽ�����,�һ����������.��ô��Ҫ��ʲô?��ѡ���!\r\n#L1#�ı䷢��(ʹ��#b��Ҷ����������ͨ��Ա��#k)#l\r\n#L2#Ⱦɫ(ʹ��#b��Ҷ��Ⱦ����ͨ��Ա��#k)#l");								
			} else if (status == 1) {
			if (selection == 0) {
				beauty = 0;
				cm.sendSimple("��ô���빺�����ֻ�Ա����?\r\n#L0##b��Ҷ����������ͨ��Ա��#k,��Ҫ#r" + hairprice + "#k���#l\r\n#L1##b��Ҷ��Ⱦ����ͨ��Ա��#k,��Ҫ#r" + haircolorprice + "#k���#l");
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
				cm.sendYesNo("�������#b��Ҷ����������ͨ��Ա��#k,��ô�ҽ���������ı�һ�ַ���,��ȷ��Ҫ�ı䷢����?");
			} else if (selection == 2) {
				beauty = 2;
				haircolor = Array();
				var current = parseInt(cm.getChar().getHair()/10)*10;
				for(var i = 0; i < 8; i++) {
					haircolor.push(current + i);
				}
				cm.sendYesNo("�������#b��Ҷ��Ⱦ����ͨ��Ա��#k,��ô�ҽ���������ı�һ�ַ�ɫ,��ȷ��Ҫ�ı䷢ɫ��?");
			}
		}
		else if (status == 2){
			cm.dispose();
			if (beauty == 1){
				if (cm.haveItem(5150030)){
					cm.gainItem(5150030, -1);
					cm.setHair(hairnew[Math.floor(Math.random() * hairnew.length)]);
					cm.sendOk("����,����������̾����·��Ͱ�!");
				} else {
					cm.sendOk("�������㲢û�����ǵĻ�Ա��,�ҿ��²��ܸ�����,�Һܱ�Ǹ.�����ȹ����.");
				}
			}
			if (beauty == 2){
				if (cm.haveItem(5151025) == true){
					cm.gainItem(5151025, -1);
					cm.setHair(haircolor[Math.floor(Math.random() * haircolor.length)]);
					cm.sendOk("����,����������̾����·�ɫ��!");
				} else {
					cm.sendOk("�������㲢û�����ǵĻ�Ա��,�ҿ��²��ܸ���Ⱦ��,�Һܱ�Ǹ.�����ȹ����.");
				}
}
	
}
		}
		}
	
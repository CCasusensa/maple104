//������߼���Ա
var status = 0;
var beauty = 0;
var hairprice = 1000000;
var haircolorprice = 1000000;
var mhair = Array(30000,30020,30150,30140,30410,30470,30450,30370,30360,30510,30520,30460,30560);
var fhair = Array(31000,31160,31030,31140,31300,31550,31530,31150,31230,31520,31080,31540,31470,31560);
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
			cm.sendSimple("���,������ɽ��������ĵ곤#p9310032#!�������#b��ɽ������߼���Ա��#k��#b��ɽȾɫ�߼���Ա��#k,��ͷ��ĵİѷ��ͽ�����,�һ����������.��ô��Ҫ��ʲô?��ѡ���!.\r\n#L1#�ı䷢��(ʹ��#b��ɽ������߼���Ա��#k)#l\r\n#L2#Ⱦɫ(ʹ��#b��ɽȾɫ�߼���Ա��#k)#l");						
		} else if (status == 1) {
			 if (selection == 1) {
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
				cm.sendStyle("�ҵ������ǰ�ʦ�������������#b��ɽ������߼���Ա��#k�Ϳ������㻻һ������,��ѡ��ϲ���ķ��Ͱ�.", hairnew,5150035);
			} else if (selection == 2) {
				beauty = 2;
				haircolor = Array();
				var current = parseInt(cm.getChar().getHair()/10)*10;
				for(var i = 0; i < 8; i++) {
					haircolor.push(current + i);
				}
				cm.sendStyle("�ҿ��Ըı���ķ�ɫ,���������ڿ�����Ư��. ��Ϊʲô�����Ÿı�����? �������#b��ɽȾɫ�߼���Ա��#k,�ҽ������ı���ķ�ɫ,��ôѡ��һ������Ҫ���·�ɫ��!", haircolor,5151030);			}
		} else if (status == 2){
			if (beauty == 1){
					if (cm.haveItem(5150035)){
						cm.gainItem(5150035, -1);
						cm.setHair(hairnew[selection]);
						cm.sendOk("����,����������̾����·��Ͱ�!");
					} else {
						cm.sendOk("�������㲢û�����ǵĸ߼���Ա��,�ҿ��²��ܸ���Ⱦ��,�Һܱ�Ǹ.�����ȹ����.");
					}
					cm.dispose();	
				
			}
			if (beauty == 2){
				if (cm.haveItem(5151030) == true){
					cm.gainItem(5151030, -1);
					cm.setHair(haircolor[selection]);
					cm.sendOk("����,����������̾����·�ɫ��!");
					cm.dispose();
				} else {
					cm.sendOk("�������㲢û�����ǵĸ߼���Ա��,�ҿ��²��ܸ���Ⱦ��,�Һܱ�Ǹ.�����ȹ����.");
					cm.dispose();
				}
				
			}
		}
	}
}

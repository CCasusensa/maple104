var status = 0;
var beauty = 0;
var hairprice = 1000000;
var haircolorprice = 1000000;
var mhair = Array(30680,30000,30020,30150,30240,30280,30160,30190,30050,30300,30320,30370,30480,30170,30470);
var fhair = Array(31470,31000,31030,31040,31150,31120,31160,31230,31270,31280,31290,31450,31460,31200,31490,31750);
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
			cm.sendSimple("���,����������ҵ��������ĵ곤#p9270036#!�������#b������ҵ��������߼���Ա��#k��#b������ҵ��Ⱦɫ�߼���Ա��#k,��ͷ��ĵİѷ��ͽ�����,�һ����������.��ô��Ҫ��ʲô?��ѡ���!.\r\n#L1#�ı䷢��(ʹ��#b������ҵ��������߼���Ա��#k)#l\r\n#L2#Ⱦɫ(ʹ��#b������ҵ��Ⱦɫ�߼���Ա��#k)#l");						
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
				cm.sendStyle("�ҵ������ǰ�ʦ�������������#b������ҵ��������߼���Ա��#k�Ϳ������㻻һ������,��ѡ��ϲ���ķ��Ͱ�.", hairnew,5150035);
			} else if (selection == 2) {
				beauty = 2;
				haircolor = Array();
				var current = parseInt(cm.getChar().getHair()/10)*10;
				for(var i = 0; i < 8; i++) {
					haircolor.push(current + i);
				}
				cm.sendStyle("�ҿ��Ըı���ķ�ɫ,���������ڿ�����Ư��. ��Ϊʲô�����Ÿı�����? �������#b�¼���Ⱦɫ�߼���Ա��#k,�ҽ������ı���ķ�ɫ,��ôѡ��һ������Ҫ���·�ɫ��!", haircolor,5151030);			}
		} else if (status == 2){
			if (beauty == 1){
					if (cm.haveItem(5150033)){
						cm.gainItem(5150033, -1);
						cm.setHair(hairnew[selection]);
						cm.sendOk("����,����������̾����·��Ͱ�!");
					} else {
						cm.sendOk("�������㲢û�����ǵĸ߼���Ա��,�ҿ��²��ܸ���Ⱦ��,�Һܱ�Ǹ.�����ȹ����.");
					}
					cm.dispose();	
				
			}
			if (beauty == 2){
				if (cm.haveItem(5151028) == true){
					cm.gainItem(5151028, -1);
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

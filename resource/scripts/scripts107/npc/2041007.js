var status = 0;
var beauty = 0;
var hairprice = 1000000;
var haircolorprice = 1000000;
var mhair = Array(30020,30030,30150,30240,30280,30160,30190,30050,30300,30320,30340,30510,30650,30730,30760,30680,30700,30000);
var fhair = Array(31000,31030,31040,31010,31150,31120,31160,31230,31270,31280,31290,31460,31520,31650,31720,31740,31700,31670);
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
			cm.sendSimple("���,������߳�������ĵ곤#p2041007#!�������#b��߳�������߼���Ա��#k��#b��߳�Ⱦɫ�߼���Ա��#k,��ͷ��ĵİѷ��ͽ�����,�һ����������.��ô��Ҫ��ʲô?��ѡ���!.\r\n#L1#�ı䷢��(ʹ��#b��߳������߼���Ա��#k)#l\r\n#L2#�ı䷢ɫ(ʹ��#b��߳�Ⱦɫ�߼���Ա��#k)#l");						
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
				cm.sendStyle("�ҵ������ǰ�ʦ�������������#b��߳�������߼���Ա��#k�Ϳ������㻻һ������,��ѡ��ϲ���ķ��Ͱ�.", hairnew,5150035);
			} else if (selection == 2) {
				beauty = 2;
				haircolor = Array();
				var current = parseInt(cm.getChar().getHair()/10)*10;
				for(var i = 0; i < 8; i++) {
					haircolor.push(current + i);
				}
				cm.sendStyle("�ҿ��Ըı���ķ�ɫ,���������ڿ�����Ư��. ��Ϊʲô�����Ÿı�����? �������#b��߳�Ⱦɫ�߼���Ա��#k,�ҽ������ı���ķ�ɫ,��ôѡ��һ������Ҫ���·�ɫ��!", haircolor,5151030);			}
		} else if (status == 2){
			if (beauty == 1){
					if (cm.haveItem(5150007)){
						cm.gainItem(5150007, -1);
						cm.setHair(hairnew[selection]);
						cm.sendOk("����,����������̾����·��Ͱ�!");
					} else {
						cm.sendOk("�������㲢û�����ǵĸ߼���Ա��,�ҿ��²��ܸ���Ⱦ��,�Һܱ�Ǹ.�����ȹ����.");
					}
					cm.dispose();	
				
			}
			if (beauty == 2){
				if (cm.haveItem(5151007) == true){
					cm.gainItem(5151007, -1);
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

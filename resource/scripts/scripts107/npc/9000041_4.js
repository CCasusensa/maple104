var status = 0;
var typed=0;
var hcditem=new Array("3060000","3060010","3060020","3060030","3060042","3060052","3060061","3060071","3060100","3060110","3060121","3060131");
var hcc1item=new Array("3061140","3061150","3061160","3061170","3061180","3061190","3061200","3061210","3061220","3061230","3061240","3061250");
var hccitem=new Array("3061140","3061150","3061160","3061170","3061180","3061190","3061200","3061210","3061220","3061230","3061240","3061250","3061260","3061270");
var hcbitem=new Array("3062140","3062150","3062160","3062170","3062180","3062190","3062200","3062210","3062220","3062230","3062240","3062250","3062260","3062270");
var hcaitem=new Array
("3063140","3063150","3063160","3063170","3063180","3063190","3063200","3063210","3063220","3063230","3063240","3063250","3063260","3063270");
var hcsitem=new Array
("3064140","3064150","3064160","3064170","3064180","3064190","3064200","3064210","3064220","3064230","3064240","3064250","3064260","3064290");
var tpitem=new Array("3061140","3061150","3061160","3061170","3061180","3061190","3061200","3061210","3061220","3061230","3061240","3061250","3061260","3061270");
var ypitem=new Array("3062140","3062150","3062160","3062170","3062180","3062190","3062200","3062210","3062220","3062230","3062240","3062250","3062260","3062270");
var jpitem=new Array
("3063140","3063150","3063160","3063170","3063180","3063190","3063200","3063210","3063220","3063230","3063240","3063250","3063260","3063270");
var itemsl=new Array("2","2","2","2","1","1","1","1","2","2","1","1","2","3");

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
			cm.sendSimple("#r<���˺���><VIPÿ�մ�><����֮��>#k���Ի��#bĢ������#k\r\n#i4031996##i4031995##i4031994#\r\n����������һ���ͬ�ȼ���#b����ʯ#k,#b����ʯ#k������Ƕ���п׵�װ����,��������������.\r\n�п�װ������#r<���������˺���,���﹫԰><�����̵�>#k\r\n#L1##d[�һ�]#k#z4031996#��ȡ#dC�ȼ�#k����ʯ#l\r\n#L2##d[�һ�]#k#z4031995#��ȡ#bB�ȼ�#k����ʯ#l\r\n#L3##d[�һ�]#k#z4031994#��ȡ#rA�ȼ�#k����ʯ#l\r\n#L4##d[�ϳ�]#kD�ȼ�����ʯ�ϳ�#dC�ȼ�#k����ʯ#l\r\n#L5##d[�ϳ�]#k#dC�ȼ�#k����ʯ�ϳ�#bB�ȼ�#k����ʯ#l\r\n#L6##d[�ϳ�]#k#bB�ȼ�#k����ʯ�ϳ�#rA�ȼ�#k����ʯ#l\r\n#L7##d[�ϳ�]#k#rA�ȼ�#k����ʯ�ϳ�#gS�ȼ�#k����ʯ#l");					
		} else if (status == 1) {
			if (selection == 1) {
				typed=1;
				var selStr="\r\n";
				for (var i = 0; i < tpitem.length; i++) {//ͭ��
						selStr += "#b#L" + i + "##z" +tpitem[i]+"# #d��Ҫ #r" + itemsl[i] + "#d#z4031996##l\r\n";
					}
				cm.sendSimpleS(selStr,2);
			} else if (selection == 2) {
				typed=2;
				var selStr="\r\n";
				for (var i = 0; i < ypitem.length; i++) {//����
						selStr += "#b#L" + i + "##z" +ypitem[i]+"# #d��Ҫ #r" + itemsl[i] + "#d#z4031995##l\r\n";
					}
				cm.sendSimpleS(selStr,2);
			} else if (selection == 3) {
				typed=3;
				var selStr="\r\n";
				for (var i = 0; i < jpitem.length; i++) {//����
						selStr += "#b#L" + i + "##z" +jpitem[i]+"# #d��Ҫ #r" + itemsl[i] + "#d#z4031994##l\r\n";
					}
				cm.sendSimpleS(selStr,2);
			} else if (selection == 4) {
				typed=4;
				var selStr="�ϳ�����ʯ�ɹ���Ϊ50%,�ϳ�ʧ�ܺ�᷵��1����ǰ�ȼ�����ʯ,����Ҫ��������׼��Ӵ\r\n";
				for (var i = 0; i < hcditem.length; i++) {//D�ϳ�C
						selStr += "#b#L" + i + "##d#z" + hcc1item[i] + "##k��Ҫ2��#z" + hcditem[i] + "#\r\n";
					}
				cm.sendSimpleS(selStr,2);
			} else if (selection == 5) {
				typed=5;
				var selStr="�ϳ�����ʯ�ɹ���Ϊ50%,�ϳ�ʧ�ܺ�᷵��1����ǰ�ȼ�����ʯ,����Ҫ��������׼��Ӵ\r\n";
				for (var i = 0; i < hccitem.length; i++) {//C�ϳ�B
						selStr += "#b#L" + i + "##b#z" + hcbitem[i] + "##k��Ҫ2��#d#z" + hccitem[i] + "#\r\n";
					}
				cm.sendSimpleS(selStr,2);	
			} else if (selection == 6) {
				typed=6;
				var selStr="�ϳ�B������ʯ��A��,��Ҫ��2000���ѱ�\r\n�ϳ�����ʯ�ɹ���Ϊ50%,�ϳ�ʧ�ܺ�᷵��1������ʯ,����Ҫ��������׼��Ӵ\r\n";
				for (var i = 0; i < hccitem.length; i++) {//B�ϳ�A��Ҫ���2000���ѱ�
						selStr += "#b#L" + i + "##r#z" + hcaitem[i] + "##k��Ҫ2��#b#z" + hcbitem[i] + "#\r\n";
					}
				cm.sendSimpleS(selStr,2);
			} else if (selection == 7) {
				typed=7;
				var selStr="�ϳ�A������ʯ��S��,��Ҫ��10000���ѱ�,�ϳɳɹ���100%\r\n";
				for (var i = 0; i < hccitem.length; i++) {//A�ϳ�S��Ҫ���10000���ѱ�
						selStr += "#b#L" + i + "##g#z" + hcsitem[i] + "##k��Ҫ2��#r#z" + hcaitem[i] + "#\r\n";
					}
				cm.sendSimpleS(selStr,2);
			} else if (selection == 8) {
				cm.dispose();
			}
		} else if (status == 2) {
			var ii = Packages.server.MapleItemInformationProvider.getInstance();
			if(typed==1){//ͭ�ƶһ�
				if(cm.haveItem(4031996,itemsl[selection])==false){
						cm.sendOk("���ź������#z4031996#����");
						cm.dispose();
						return;
				}
				cm.gainItem(tpitem[selection],1);
				cm.gainItem(4031996,-itemsl[selection]);
				cm.sendOk("��ϲ����ȡ�ɹ�");
				cm.dispose();
				return;
			}
			if(typed==2){//���ƶһ�
				if(cm.haveItem(4031995,itemsl[selection])==false){
						cm.sendOk("���ź������#z4031995#����");
						cm.dispose();
						return;
				}
				cm.gainItem(ypitem[selection],1);
				cm.gainItem(4031995,-itemsl[selection]);
				cm.sendOk("��ϲ����ȡ�ɹ�");
				cm.dispose();
				return;
			}
			if(typed==3){//���ƶһ�
				if(cm.haveItem(4031994,itemsl[selection])==false){
						cm.sendOk("���ź������#z4031994#����");
						cm.dispose();
						return;
				}
				cm.gainItem(ypitem[selection],1);
				cm.gainItem(4031994,-itemsl[selection]);
				cm.sendOk("��ϲ����ȡ�ɹ�");
				cm.dispose();
				return;
			}
			if(typed==4){//D�ϳ�C
				if(cm.haveItem(hcditem[selection],2)==false){
					cm.sendOk("���ź������#z" + hcditem[selection] + "#����2��");
					cm.dispose();
					return;
				}
				var chance = Math.floor(Math.random()*2);
				var ii = Packages.server.MapleItemInformationProvider.getInstance();
				if(chance==1){
				       cm.gainItem(hcditem[selection],-2);
				       cm.gainItem(hcc1item[selection],1);
				       cm.sendOk("��ϲ���ϳɳɹ���������1��#d#z" + hcc1item[selection] + "##k");
				       cm.worldMessage("[��ʯϵͳ]����ϲ[" + cm.getChar().getName() + "],�ϳ���һ��"+ii.getName(hcc1item[selection])+"");
				}else{
				       cm.gainItem(hcditem[selection],-1);
				       cm.sendOk("���ź����ϳ�ʧ�ܣ�������1��#z" + hcditem[selection] + "#");
				}
				cm.dispose();
				return;
			}
			if(typed==5){//C�ϳ�B
				if(cm.haveItem(hccitem[selection],2)==false){
					cm.sendOk("���ź������#z" + hccitem[selection] + "#����2��");
					cm.dispose();
					return;
				}
				var chance = Math.floor(Math.random()*2);
				var ii = Packages.server.MapleItemInformationProvider.getInstance();
				if(chance==1){
				       cm.gainItem(hccitem[selection],-2);
				       cm.gainItem(hcb1item[selection],1);
				       cm.sendOk("��ϲ���ϳɳɹ���������1��#d#z" + hcbitem[selection] + "##k");
				       cm.worldMessage("[��ʯϵͳ]����ϲ[" + cm.getChar().getName() + "],�ϳ���һ��"+ii.getName(hcbitem[selection])+"");
				}else{
				       cm.gainItem(hccitem[selection],-1);
				       cm.sendOk("���ź����ϳ�ʧ�ܣ�������1��#z" + hccitem[selection] + "#");
				}
				cm.dispose();
				return;
			}
			if(typed==6){//B�ϳ�A
				if(cm.haveItem(hcbitem[selection],2)==false || cm.getHyPay(1) >= 2000){
					cm.sendOk("���ź������#z" + hcbitem[selection] + "#����2��\r\n������û��2000���ѱң�����");
					cm.dispose();
					return;
				}
				var chance = Math.floor(Math.random()*2);
				var ii = Packages.server.MapleItemInformationProvider.getInstance();
				if(chance==1){
				       cm.gainItem(hcbitem[selection],-2);
				       cm.gainItem(hca1item[selection],1);
				       cm.sendOk("��ϲ���ϳɳɹ���������1��#d#z" + hcaitem[selection] + "##k");
				       cm.worldMessage("[��ʯϵͳ]����ϲ[" + cm.getChar().getName() + "],�ϳ���һ��"+ii.getName(hcaitem[selection])+"");
				}else{
				       cm.gainItem(hcbitem[selection],-1);              
				       cm.sendOk("���ź����ϳ�ʧ�ܣ�������1��#z" + hcbitem[selection] + "#");
				}
				cm.dispose();
				return;
			}
			if(typed==7){//A�ϳ�S
				if(cm.haveItem(hcaitem[selection],2)==false || cm.getHyPay(1) >= 10000){
					cm.sendOk("���ź������#z" + hcaitem[selection] + "#����2��\r\n������û��10000���ѱң�����");
					cm.dispose();
					return;
				}
				var ii = Packages.server.MapleItemInformationProvider.getInstance();
				       cm.gainItem(hcaitem[selection],-2);
				       cm.gainItem(hcs1item[selection],1);
				       cm.sendOk("��ϲ���ϳɳɹ���������1��#d#z" + hcsitem[selection] + "##k");
				       cm.worldMessage("[��ʯϵͳ]����ϲ[" + cm.getChar().getName() + "],�ϳ���һ��"+ii.getName(hcsitem[selection])+"");
				cm.dispose();
				return;
			}
		} else if (status == 3) {
			if(typed==40){
				if(cm.haveItem(4310020,60)==false){
					cm.sendOk("���ź�����ļ���һ�����60�����齱ʧ�ܣ�");
					cm.dispose();
					return;
				}
				cm.gainItem(4310020,-60);
				var ii = Packages.server.MapleItemInformationProvider.getInstance();		              
               	                var type = Packages.constants.GameConstants.getInventoryType(xpdmitem[selection]); //���װ��������
                	        var toDrop = ii.randomizeStats(ii.getEquipById(xpdmitem[selection])).copy(); // ����һ��Equip��
                	        toDrop.setStr(15);
                	        toDrop.setDex(15);
                	        toDrop.setInt(15);
                	        toDrop.setLuk(15);
                	        cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������
                	        cm.getC().getSession().write(Packages.tools.MaplePacketCreator.addInventorySlot(type, toDrop)); //ˢ�±���
				cm.sendOk("��ϲ������ɹ���");
				cm.dispose();
				return;
			}
			if(typed==50){
				if(cm.getChar().gettz()<30){
					cm.sendOk("���ź������<�ɹ�>��ս��������30�Σ�");
					cm.dispose();
					return;
				}
				cm.getChar().settz(-30);
				cm.gainTimeItem(xpdmitem[selection],30*24*60*60*1000,1,100,100,100,100,30,30);
				cm.sendOk("��ϲ����ȡ�ɹ����۳�30��<�ɹ�>��ս����������Ŭ�������ռ����ˣ�");
				cm.dispose();
				return;
			}
			if(typed==60){
				if(selection>2){
					if(cm.haveItem(4310020,488)==false){
						cm.sendOk("���ź�����ļ���һ�����488�����齱ʧ�ܣ�");
						cm.dispose();
						return;
					}
					cm.gainItem(4310020,-488);
					cm.sendOk("��ϲ����ȡ�ɹ����۳�488������ң�����Ŭ�������ռ����ˣ�");
				}else{
					if(cm.haveItem(4310020,108)==false){
						cm.sendOk("���ź�����ļ���һ�����108�����齱ʧ�ܣ�");
						cm.dispose();
						return;
					}
					cm.gainItem(4310020,-188);
					cm.sendOk("��ϲ����ȡ�ɹ����۳�108������ң�����Ŭ�������ռ����ˣ�");
				}
				var ii = Packages.server.MapleItemInformationProvider.getInstance();		              
               	                var type = Packages.constants.GameConstants.getInventoryType(csitem[selection]); //���װ��������
                	        var toDrop = ii.randomizeStats(ii.getEquipById(csitem[selection])).copy(); // ����һ��Equip��
                	        toDrop.setStr(188);
                	        toDrop.setDex(188);
                	        toDrop.setInt(188);
                	        toDrop.setLuk(188);
				toDrop.setMatk(188);
				toDrop.setWatk(188);
                	        cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������
                	        cm.getC().getSession().write(Packages.tools.MaplePacketCreator.addInventorySlot(type, toDrop)); //ˢ�±���
				cm.dispose();
				return;
			}
			cm.dispose();
		}
	}
}

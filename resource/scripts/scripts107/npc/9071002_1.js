var status = 0;
var typed=0;
var lvlitem=new Array("1002547","1002550","1002551","1002649","1002773","1082163","1082164","1082167","1082168","1082216","1052071","1052072","1052075","1052134","1092060","1072268","1072269","1072272","1072273","1072321","1002776","1002777","1002778","1002779","1002780","1002790","1002791","1002792","1002793","1002794","1082234","1082235","1082236","1082237","1082238","1082239","1082240","1082241","1082242","1082243","1052155","1052157","1052158","1052159","1052160","1052162","1052163","1052164","1092057","1092058","1092059","1072355","1072356","1072357","1072358","1072359","1072361","1072362","1072363","1072364","1072365","1003177","1003178","1003179","1003180","1003181","1102280","1102281","1102282","1102283","1102284","1082300","1082301","1082302","1082303","1082304","1052319","1052320","1052321","1052322","1052323","1072490","1072491","1072492","1072493","1072494","1372039","1372040","1372041","1372042");
var yzxzitem=new Array("3010002","3010003","3010006","3010007","3010008","3010008","3010009","3010028","3010024","3010064","3010151","1142283","1142292","1142293","1142305","1142306","1142307","1142249","1142119","1142120","1142084","1142002","1142001","1142004");
var xpdmitem=new Array("1122058","1012270","1122007","1152062","1182000","1182001","1182002","1182003","1182004","1182005","1112402","1122007");
var csitem=new Array("1532043","1522026","1352007","1003360","1003359","1003349");
var bsitem=new Array("1002762","1002763","1002764","1002765","1002766");

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
			cm.sendSimple("��ô������ս#r<��԰����>#k����?ս��Ʒ#r<���﹫԰�����>#k#v4310020#�����Ұɣ��һ������ı���ģ�#b\r\n#L1#1.ʹ�ü���ҳ�ȫ����װ��<���ʼ���><110-130��װ��>#l\r\n#L2#2.ʹ�ü���ҳ�ѫ�£�ϡ������<���ʼ���>#l\r\n#L3#3.ʹ�ü���ҳ�ȡ�ݱ˵����Ļ���,����,����#l\r\n#L4#4.ʹ�ü���ҹ����ݱ˵�����������Ʒ,�����..#l\r\n#L6#5.��Ӣ�۴���,ʹ�ü���һ�ȡ������,˫��,��ħ����װ��#l\r\n#L7#6.ʹ�ü���һ�ȡ��������ñ���²�����˭~��#l\r\n#L8#8.���๦��,�����ڴ�..#l");					
		} else if (status == 1) {
			if (selection == 1) {
				typed=1;
				cm.sendNext("�������30������ң������������ȡ110-130����ȫ����װ��(������)��������(150~300)֮��,���Ըߵ;���Ҫ�������Ʒ����#rע�⣬��50%�Ļ���һ������#k ��ϣ�����кõ����� �������һ����ʼ��ȡ.");
			} else if (selection == 2) {
				typed=2;
				cm.sendNext("�����ռ�ѫ�µĴ����𣿻����ռ����ӵĴ��ˣ����û�����Ҿ������ɵõ��Ļ������ˣ�ϲ���ռ�ѫ�º����ӵ���������и�������������ȫ����ȫ�����Ӻ�ѫ�£��������20������ң����������������ȡѫ�»������ӣ�#rע�⣬��50%�Ļ���һ������#k �������һ����ʼ��ȡ.");
			} else if (selection == 3) {
				typed=3;
				cm.sendNext("�������30������ң������������ȡ�ݱ˵���������ȫ����װ����������(1~50)֮��,���Ըߵ;���Ҫ�������Ʒ����#rע�⣬��50%�Ļ���һ������#k ��ϣ�����кõ����� �������һ����ʼ��ȡ.");
			} else if (selection == 4) {
				typed=4;
				cm.sendNext("��������۵Ķ���ȫ����+15���ݱ˵�������Ʒ���������Ҫ������һ���ɣ������һ������!");
			} else if (selection == 5) {
				typed=5;
				cm.sendNext("������ս������ÿ���������һ�ض��ǳ�ǿ����BOSSͳ�죬����������ܳɹ���ɱ�����й���ͻ���������ÿλ��Ա����#rһ����ս�ɹ�����#k����Ȼ�ˣ����Ѿ�ΪӢ����׼��������������Ϊ��ﵽ�ˣ�������һ��,#eÿ�����ս�ɹ���������ȫ��0,������ڵ�����ȡŶ!");	
			} else if (selection == 6) {
				typed=6;
				cm.sendNext("������Ӣ����#b˫���飬������#k�Ѿ���̿���,#b��ħ����#k����Զ��.�����ӵ��#r�㹻��#k�����,�Ǿ��¸ҵĵ����һ����ȡ���İ���װ����!");
			} else if (selection == 7) {
				typed=7;
				var selStr="#eѡһ���ɡ��������ϲ����..#n\r\n";
				for (var i = 0; i < bsitem.length; i++) {//itemyz.length
						selStr += "#b#L" + i + "##z" +bsitem[i]+"# #d��Ҫ #r30#d�������#l\r\n";
					}
				cm.sendSimple(selStr);
			} else if (selection == 8) {
				cm.dispose();
			}
		} else if (status == 2) {
			var ii = Packages.server.MapleItemInformationProvider.getInstance();
			if(typed==1){
				if(cm.haveItem(4310020,30)==false){
					cm.sendOk("���ź�����ļ���һ�����30�����齱ʧ�ܣ�");
					cm.dispose();
					return;
				}
				var chanced = Math.floor(Math.random()*lvlitem.length);
				var chance = Math.floor(Math.random()*2);
				var lvstr = Math.floor(Math.random()*150)+150;
				var lvdex = Math.floor(Math.random()*150)+150;
				var lvint = Math.floor(Math.random()*150)+150;
				var lvluk = Math.floor(Math.random()*150)+150;
				cm.gainItem(4310020,-30);
				if(chance==1){
				       var ii = Packages.server.MapleItemInformationProvider.getInstance();		              
               	                       var type = Packages.constants.GameConstants.getInventoryType(lvlitem[chanced]); //���װ��������
                	               var toDrop = ii.randomizeStats(ii.getEquipById(lvlitem[chanced])).copy(); // ����һ��Equip��
                	               toDrop.setStr(lvstr);
                	               toDrop.setDex(lvdex);
                	               toDrop.setInt(lvint);
                	               toDrop.setLuk(lvluk);
                	               cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������
                	               cm.getC().getSession().write(Packages.tools.MaplePacketCreator.addInventorySlot(type, toDrop)); //ˢ�±���
				       cm.sendOk("��ϲ��������ˣ�#v"+lvlitem[chanced]+"#\r\n����+"+lvstr+" ����+"+lvdex+" ����+"+lvint+" ����+"+lvluk);
				       cm.worldMessage("[����]��ϲ[" + cm.getChar().getName() + "]СͯЬ��á�"+ii.getName(lvlitem[chanced])+"��(ȫ����Ŷ)�㻹��ʲô����ȥ���﹫԰ˢ�ɣ�");
				}else{
					cm.sendOk("���ź����˴γ齱��һ�����У�����Ŭ���ɣ�");
				}
				cm.dispose();
				return;
			}
			if(typed==2){
				if(cm.haveItem(4310020,20)==false){
					cm.sendOk("���ź�����ļ���һ�����20�����齱ʧ�ܣ�");
					cm.dispose();
					return;
				}
				var chanced = Math.floor(Math.random()*yzxzitem.length);
				var chance = Math.floor(Math.random()*2);
				cm.gainItem(4310020,-20);
				if(chance==1){
					cm.gainItem(yzxzitem[chanced],1);
					cm.sendOk("��ϲ��������ˣ�#v"+yzxzitem[chanced]+"#");
					cm.worldMessage("[����]��ϲ[" + cm.getChar().getName() + "]СͯЬ��á�"+ii.getName(yzxzitem[chanced])+"���㻹��ʲô����ȥ���﹫԰ˢ�ɣ�");
				}else{
					cm.sendOk("���ź����˴γ齱��һ�����У�����Ŭ���ɣ�");
				}
				cm.dispose();
				return;
			}
			if(typed==3){
				if(cm.haveItem(4310020,30)==false){
					cm.sendOk("���ź�����ļ���һ�����30�����齱ʧ�ܣ�");
					cm.dispose();
					return;
				}
				var chanced = Math.floor(Math.random()*xpdmitem.length);
				var chance = Math.floor(Math.random()*2);
				var lvstr = Math.floor(Math.random()*50)+1;
				var lvdex = Math.floor(Math.random()*50)+1;
				var lvint = Math.floor(Math.random()*50)+1;
				var lvluk = Math.floor(Math.random()*50)+1;
				cm.gainItem(4310020,-30);
				if(chance==1){
					 var ii = Packages.server.MapleItemInformationProvider.getInstance();             
               	                       var type = Packages.constants.GameConstants.getInventoryType(xpdmitem[chanced]); //���װ��������
                	               var toDrop = ii.randomizeStats(ii.getEquipById(xpdmitem[chanced])).copy(); // ����һ��Equip��
                	               toDrop.setStr(lvstr);
                	               toDrop.setDex(lvdex);
                	               toDrop.setInt(lvint);
                	               toDrop.setLuk(lvluk);
                	               cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������
                	               cm.getC().getSession().write(Packages.tools.MaplePacketCreator.addInventorySlot(type, toDrop)); //ˢ�±���
					cm.sendOk("��ϲ��������ˣ�#v"+xpdmitem[chanced]+"#\r\n����+"+lvstr+" ����+"+lvdex+" ����+"+lvint+" ����+"+lvluk);
					cm.worldMessage("[����]��ϲ[" + cm.getChar().getName() + "]СͯЬ��á�"+ii.getName(xpdmitem[chanced])+"���㻹��ʲô����ȥ���﹫԰ˢ�ɣ�");
				}else{
					cm.sendOk("���ź����˴γ齱��һ�����У�����Ŭ���ɣ�");
				}
				cm.dispose();
				return;
			}
			if(typed==4){
				typed=40;
				var selStr="������û����ϲ����.\r\n";
				for (var i = 0; i < xpdmitem.length; i++) {//itemyz.length
					selStr += "#b#L" + i + "##z" +xpdmitem[i]+"#<ȫ����+15> #d��Ҫ #r60#d�������#l\r\n";
			}
				cm.sendSimpleS(selStr,2);
			}
			if(typed==5){
				typed=50;
				var selStr="#e����<�ɹ�>��ս����:#r"+cm.getChar().gettz()+".#n\r\n";
				for (var i = 0; i < xpdmitem.length; i++) {//itemyz.length
					selStr += "#b#L" + i + "##z" +xpdmitem[i]+"#<ȫ����+100,����+30> #d��Ҫ #r30#d��#l\r\n";
				}
				cm.sendSimpleS(selStr,2);
			}
			if(typed==6){
				typed=60;
				var selStr="#eѡһ���ɡ�#n\r\n";
				for (var i = 0; i < csitem.length; i++) {//itemyz.length
					if(i>2){
						selStr += "#b#L" + i + "##z" +csitem[i]+"#<ȫ����+188,������> #d��Ҫ #r488#d�������#l\r\n";
					}else{
						selStr += "#b#L" + i + "##z" +csitem[i]+"#<ȫ����+188,������> #d��Ҫ #r108#d�������#l\r\n";
					}
					
				}
				cm.sendSimpleS(selStr,2);
			}
			if(typed==7){
				if(cm.haveItem(4310020,30)==false){
						cm.sendOk("���ź�����ļ���һ�����30������ȡʧ�ܣ�");
						cm.dispose();
						return;
				}
				var ii = Packages.server.MapleItemInformationProvider.getInstance();		              
               	                var type = Packages.constants.GameConstants.getInventoryType(bsitem[selection]); //���װ��������
                	        var toDrop = ii.randomizeStats(ii.getEquipById(bsitem[selection])).copy(); // ����һ��Equip��
                	        toDrop.setStr(188);
                	        toDrop.setDex(188);
                	        toDrop.setInt(188);
                	        toDrop.setLuk(188);
				toDrop.setMatk(188);
				toDrop.setWatk(188);
                	        cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������
                	        cm.getC().getSession().write(Packages.tools.MaplePacketCreator.addInventorySlot(type, toDrop)); //ˢ�±���
				cm.gainItem(4310020,-30);
				cm.sendOk("��ϲ����ȡ�ɹ����۳�30������ң�����Ŭ�������ռ����ˣ�");
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

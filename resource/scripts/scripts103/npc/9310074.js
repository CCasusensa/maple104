importPackage(net.sf.odinms.client);

var selStr;
var typeszq=new Array("1702282","1702280","1702281","1702283","1002957","1002737","1002883","1002907","1002935","1002845","1002849","1002851","1002877","1002986","1002972","1002969","1002962","1002945","1002930","1002886","1002868","1002840","1002825","1002838","1002918","1002996","1002997","1022077","1012135","1012148","1012157","1002931","1002965","1102166","1012146","1012141","1012140","1012139","1032063","1102173","1002744","1002751","1002944","1002968","1002953","1702222","1702199","5010086","1002731","1002920","1002921","1002922","1002928","1002956","1002961","1002971","1002976","1002982","1002995","1002976");
var typesitemzqcost=new Array("50","50","50","50","200","500","1000","250","50","80","40","30","20","50","250","50","50","99","999","39","88","99","19","250","250","250","50","100","1000","1000","1000","100","100","100","1000","800","800","800","300","500","500","50","200","200","2000","100","1000","2000","200","100","100","50","250","250","50","30","200","50","50","200");
var typed=0;

var typesqc=new Array("�����߳�ǹ","�������촸","����ħ����","�����޽�","�ھ�������","��̫������","�ƽ�˫����","������ṭ","�ƽ������","��������ȭ","��ˮ����ȭ");
var typesitemqc=new Array("1432038","1422028","1412026","1402036","1382036","1372032","1332051","1452044","1462039","1472053","1472052");

var types=new Array("������ʥǹ","��������","���������","���������","���������[�ɶ̵�-��]","����������","��������[�ɶ̵�-��]","���㾪�繭","����ڤ����","����󱯸�[ȭ��]","�����ȸ��[������]","�������[����ǹ]","���������[����]");
var typesitem=new Array("1432047","1442063","1372044","1382057","1332074","1432037","1332073","1452057","1462050","1472068","1482023","1492023","1342011");

var typesqced=new Array("���ľ��","����","����","������","���̹��","̩��ţ","��ë��","���","�򶹶�������","ŮŮ����","���л���");
var typesitemqced=new Array("1902004","1902008","1902009","1902019","1902014","1902013","1902011","1902028","1902034","1902038","1902039");
var typesitemqceded=new Array("1912002","1912003","1912004","1912012","1912010","1912009","1912007","1912021","1912027","1912031","1912032");

var typeszy=new Array("3010029","3010030","3010035","3010036","3010037","3010039","3010047","3010050","3010052","3010054","3010055","3010061","3010069","3010093","3010062","3012006","3010058","3012001","3010075");



function start() {
	status = -1;
	
	action(1, 0, 0);
}

function action(mode, type, selection) {
            if (mode == -1) {
                cm.dispose();
            }
            else {
                if (status >= 0 && mode == 0) {
			//cm.sendOk("#e#r���ᣬ��������ѽ~~..#k");
			cm.dispose();
			return;                    
                }
                if (mode == 1) {
			status++;
		}
		else {
			status--;
		}
		        if (status == 0) {
					cm.sendSimple("#r��ã��ҵ����ѣ��ҵ�ID:"+cm.getNpc()+"\r\n���Ǳ���������װ������Ա,��ʲô��Ҫ��Ч�͵�ô~~#b\r\n#r#L50#���T����Ҫ����ȫ����3000װ��[��������]��T��#l\r\n#r#L51#���T����Ҫ����ȫ����5000װ��[��������]#n��T��#l\r\n#r#L52#���T����Ҫ����ȫ����10000װ��[��������]#n��T��#l\r\n#r#L53#���T����Ҫ����ȫ����20000װ��[��������]#n��T��#l\r\n#r#L54#���T����Ҫ����ȫ����32767װ��[��������]#n��T��#l\r\n#r#L6#���T����Ҫ����ȫ����32767װ��[140��װ��ȫ����]#n��T#l\r\n#r#L7#���T����Ҫ����ȫ����32767װ��[140������ȫ����]#n��T#l");
			
			//cm.sendSimple("#r#L1#����VIP��԰#l #L2#�߼�VIP̽��#l #g#L3#����VIPʥ���#l \r\n\r\n #b#L40#����װ����#l#L41#���µ��ߡ�#l#L441#������ӿɰ����ר����#l\r\n#L6#1.�����׻���#l #L7#2.���о���#l #L8#3.���ﳣ��#l#r#L801#4.��������#l \r\n\r\n #d#e#L9#��Ϊ����VIP#l #L10#����VIPʥ���#l #L11#����VIPʥ���#l#n  \r\n\r\n#e#b#L12#����VIP����#l#k#n #e#g#L13#�߼�VIP����#l#k#n #e#r#L14#����VIP����#l#k#n \r\n\r\n #e��������-------�����T���ְҵװ����T����---------#l#k#n\r\n #e#r#L15#�����T��ȫսʿװ��������#n#k#l #r#e#L16#�����T��ȫ��ʦװ��#n#k#l\r\n\r\n #e#b#L17#�����T��ȫ����װ��������#n#k#l #b#e#L18#�����T��ȫ������װ��#n#k#l" );
			} else if (status == 1) {
				 if (selection == 441) {
					 typed=441;
						selStr = "#e#b���µ�����㶼������\r\n#rʲô...û������������Out��..zZZzx@#@$...\r\n#n#r��ѡ����Ҫ��������.[2011��1��1�ո���������Ʒ]#b";
						for (var i = 0; i < typeszq.length; i++) {
							selStr += "\r\n#L" + i + "##v" +typeszq[i]+"##r��Ҫ["+typesitemzqcost[i]+"�������]#l";
						}
						cm.sendSimple(selStr);	
				}
				if (selection == 401) {
						cm.openShop(56);
						cm.dispose();    
				}
				if (selection == 41) {
						cm.openShop(198509);
						cm.dispose();    
						  
				} 
				if (selection == 6) {
                       cm.openNpc(9310055);
				}
				 if (selection == 7) {
                       cm.openNpc(9310068);
                }
				if (selection == 8) {                      
                       cm.openShop(1333);
                       cm.dispose();
                }
				if (selection == 40) {                      
                       cm.openShop(56);
                       cm.dispose();   
				}
         			 if (selection == 50) {
				              cm.openNpc(9310063);
				}
				if (selection == 51) {
				              cm.openNpc(9310064);
				}
				if (selection == 52) {
				              cm.openNpc(9310065);
				}
				if (selection == 53) {
				              cm.openNpc(9310066);
				}
				if (selection == 54) {
				              cm.openNpc(9310067);  
				}
				if (selection == 55) {
						cm.warp(910000021);
						cm.dispose();    
				}
				if (selection == 56) {
						cm.warp(910000021);
						cm.dispose();    
				}
				if (selection == 57) {
						cm.warp(910000021);
						cm.dispose();    
				}
				if (selection == 58) {
						cm.warp(910000021);
						cm.dispose();    
				}
				if (selection == 801) {
                       cm.sendOk("#b��ȥ�г�2¥��ʥ���������˹���.");
						cm.dispose();   
				}
				if (selection == 1) {
					if(cm.getChar().getVip() == 1) {
						cm.warp(209000000, 0);
						cm.sendOk("#b��Ļ�Ա�ȼ�:#rVIP1-������Ա#k\r\nף����;��죬�Զ����͵�#rVIP1-������Աר����ͼ.");
						cm.dispose();
					}else{
						typed=1;
						cm.sendSimple("�𾴵Ļ�Ա:��ѡ����Ҫȥ�Ļ�Աר����ͼ#b\r\n#L2#VIP1-VIP2���õ�ͼ#r[������ҿɽ���]#l.\r\n#L3#VIP3-�ƽ�VIP3ר����ͼ#r[����VIP3����������ҽ���]#l.\r\n#L4#VIP4-����VIP4ר����ͼ#r[����VIP4����������ҽ���]#l.\r\n#L5#VIP5-�ռ�VIP5ר����ͼ#r[����VIP5����������ҽ���]#l.\r\n#L6#VIP6-����VIP6ר����ͼ#r[����VIP6����������ҽ���]#l");
					}
				}
				if (selection == 2) {
						typed=2;
						cm.sendSimple("�𾴵Ļ�Ա:��ӭ��Ĺ���. ���Ļ�Ա�ȼ�:#r[VIP"+cm.getChar().getVip()+"]#k\r\n<������ˬ��һ��,ϣ�����ܸ�������������..>#b\r\n#L1#����VIP1-������Ա#r[��ȡ���չ���]#b#l\r\n#L2#����VIP2-�߼���Ա#r[��ȡ���չ���]#b#l\r\n#L3#����VIP3-������Ա#r[��ȡ���չ���]#b#l\r\n#L4#����VIP4-�����Ա#r[��ȡ���չ���]#b#l\r\n#L5#����VIP5-�ռ���Ա#r[��ȡ���չ���]\r\n#L6#����VIP6-������Ա#r[��ȡ���չ���]#l\r\n\r\n<ÿ������һ��Ӵ,�����Ҫ�ȴ�24Сʱ�������.>");
				}
				if (selection == 3) {
						typed=3;
						cm.sendSimple("�𾴵Ļ�Ա:��ӭ��Ĺ���.\r\n<��Աװ��ֻ����ȡһ��,��ȡǰ��ȷ�ϰ����������ո񣬷�����ȡʧ���Լ�����>\r\n#r<������Ļ�Ա������������,����ÿ�չ�����װ��������,�ܷḻŶ��>#b\r\n#L3#��ȡ110��װ��[������ѡһ��][����VIP3��ȡ]#b#l\r\n#L4#��ȡ120��װ��[������ѡһ��][��VIP4-VIP6��ȡ]#b#l\r\n#L5#��ȡ����һ��[��VIP4-VIP6��ȡ]#l\r\n#L6#��ȡ���һֻ[��VIP5-VIP6��ȡ]#l");
				}
				if (selection == 15) {
                       cm.openShop(1358);
                       cm.dispose();   
				} 
				if (selection == 16) {                      
                       cm.openShop(1359);
                       cm.dispose();   
				}
				if (selection == 17) {
                       cm.openShop(1360);
                       cm.dispose();   
				} 
				if (selection == 18) {                      
                       cm.openShop(1361);
                       cm.dispose();   
				}


			} else if (status == 2) {
				if(typed==441){
						if(cm.haveItem(5200002,typesitemzqcost[selection])==true){
							cm.gainItem(typeszq[selection],1);
							cm.gainItem(5200002,-typesitemzqcost[selection]);
							cm.sendOk("��ϲ�㣬����ɹ�����ȥ�鿴һ�°�����.");
							cm.dispose();
						}else{
							cm.sendOk("�Բ�����û���㹻�Ľ����.");
							cm.dispose();
						}
				}
				if(typed==3){
					if (selection == 6) {//qc
						typed=13;
						selStr = "��ѡ����Ҫ��ȡ�����.\r\n#r<ע�⣺װ��������Ҫ������ո�,���������ȡʧ�ܺ���Ը�>#b";
						for (var i = 0; i < typesqced.length; i++) {
							selStr += "\r\n#b#L" + i + "#" +typesqced[i]+"#l";
						}
						cm.sendSimple(selStr);
					}
					if (selection == 5) {//yizi
						typed=12;
						selStr = "��ѡ����Ҫ��ȡ������.\r\n#r<ע�⣺����V4-V6�죬ÿ��ֻ����һ�Ρ�>#b";
						for (var i = 0; i < typeszy.length; i++) {
							selStr += "#b#L" + i + "##v" +typeszy[i]+"##l";
						}
						cm.sendSimple(selStr);
					}
					if (selection == 3) {//110��װ��
						typed=10;
						selStr = "��ѡ����Ҫ��ȡ������.\r\n#r<ע�⣺װ������һ���ܷ��κ�װ��>\r\n#b";
						for (var i = 0; i < typesqc.length; i++) {
							selStr += "\r\n#b#L" + i + "#" +typesqc[i]+"#l";
						}
						cm.sendSimple(selStr);
					}
					if (selection == 4) {//120��װ��
						typed=11;
						selStr = "��ѡ����Ҫ��ȡ������.\r\n#r<ע�⣺װ������һ���ܷ��κ�װ��>#b";
						for (var i = 0; i < types.length; i++) {
							selStr += "\r\n#b#L" + i + "#" +types[i]+"#l";
						}
						cm.sendSimple(selStr);
					}
					if (selection == 2) {//����ͷ��
						if(cm.getChar().getVip() == 1) {
							cm.sendOk("�Բ�����ȡʧ��.����VIP1--������Ա���޷���ȡ���������ߵĻ�Ա.");
							cm.dispose();
						}
						if(cm.getChar().getVip() == 2 ) {
							if (cm.getBossLog('VIPZBTK') < 1){
            var ii = net.sf.odinms.server.MapleItemInformationProvider.getInstance();		                
            var type = ii.getInventoryType(1082002); //���װ��������
            var toDrop = ii.randomizeStats(ii.getEquipById(1082002)).copy(); // ����һ��Equip��
toDrop.setStr(500);
toDrop.setDex(500);
toDrop.setInt(500);
toDrop.setLuk(500);
toDrop.setHp(1);
toDrop.setMp(1);
toDrop.setMatk(1);
toDrop.setWatk(1);
toDrop.setMdef(1);
toDrop.setWdef(1);
toDrop.setAcc(1);
toDrop.setAvoid(1);
toDrop.setHands(1);
toDrop.setSpeed(1);
toDrop.setJump(1);
cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������
cm.getC().getSession().write(net.sf.odinms.tools.MaplePacketCreator.addInventorySlot(type, toDrop)); //ˢ�±���		
cm.getChar().saveToDB(true);
								cm.setBossLog('VIPZBTK');
								cm.sendOk("��ϲ�����𾴵�VIP2-�߼���Ա:\r\n#r���Ѿ��ɹ�����ȡ��#rȫ���Գ���ͷ��+500#v1082002#");
								cm.dispose();
							}else{
								cm.sendOk("�Բ�����ȡʧ��.���Ѿ���ȡ����.");
								cm.dispose();
							}
						}
						if(cm.getChar().getVip() == 3 ) {
							if (cm.getBossLog('VIPZBTK') < 1){
            var ii = net.sf.odinms.server.MapleItemInformationProvider.getInstance();		                
            var type = ii.getInventoryType(1082002); //���װ��������
            var toDrop = ii.randomizeStats(ii.getEquipById(1082002)).copy(); // ����һ��Equip��
toDrop.setStr(1000);
toDrop.setDex(1000);
toDrop.setInt(1000);
toDrop.setLuk(1000);
toDrop.setHp(1);
toDrop.setMp(1);
toDrop.setMatk(1);
toDrop.setWatk(1);
toDrop.setMdef(1);
toDrop.setWdef(1);
toDrop.setAcc(1);
toDrop.setAvoid(1);
toDrop.setHands(1);
toDrop.setSpeed(1);
toDrop.setJump(1);
cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������
cm.getC().getSession().write(net.sf.odinms.tools.MaplePacketCreator.addInventorySlot(type, toDrop)); //ˢ�±���		
cm.getChar().saveToDB(true);
								cm.setBossLog('VIPZBTK');
								cm.sendOk("��ϲ�����𾴵�VIP3-������Ա:\r\n#r���Ѿ��ɹ�����ȡ��#rȫ���Գ���ͷ��+1000#v1082002#");
								cm.dispose();
							}else{
								cm.sendOk("�Բ�����ȡʧ��.���Ѿ���ȡ����.");
								cm.dispose();
							}
						}
						if(cm.getChar().getVip() == 4 ) {
							if (cm.getBossLog('VIPZBTK') < 1){
            var ii = net.sf.odinms.server.MapleItemInformationProvider.getInstance();		                
            var type = ii.getInventoryType(1082002); //���װ��������
            var toDrop = ii.randomizeStats(ii.getEquipById(1082002)).copy(); // ����һ��Equip��
toDrop.setStr(1500);
toDrop.setDex(1500);
toDrop.setInt(1500);
toDrop.setLuk(1500);
toDrop.setHp(1);
toDrop.setMp(1);
toDrop.setMatk(1);
toDrop.setWatk(1);
toDrop.setMdef(1);
toDrop.setWdef(1);
toDrop.setAcc(1);
toDrop.setAvoid(1);
toDrop.setHands(1);
toDrop.setSpeed(1);
toDrop.setJump(1);
cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������
cm.getC().getSession().write(net.sf.odinms.tools.MaplePacketCreator.addInventorySlot(type, toDrop)); //ˢ�±���		
cm.getChar().saveToDB(true);
								cm.setBossLog('VIPZBTK');
								cm.sendOk("��ϲ�����𾴵�VIP4-�����Ա:\r\n#r���Ѿ��ɹ�����ȡ��#rȫ���Գ���ͷ��+1500#v1082002#");
								cm.dispose();
							}else{
								cm.sendOk("�Բ�����ȡʧ��.���Ѿ���ȡ����.");
								cm.dispose();
							}
						}
                                                if(cm.getChar().getVip() == 6 ) {
							if (cm.getBossLog('VIPZBTK') < 1){
            var ii = net.sf.odinms.server.MapleItemInformationProvider.getInstance();		                
            var type = ii.getInventoryType(1082002); //���װ��������
            var toDrop = ii.randomizeStats(ii.getEquipById(1082002)).copy(); // ����һ��Equip��
toDrop.setStr(3000);
toDrop.setDex(3000);
toDrop.setInt(3000);
toDrop.setLuk(3000);
toDrop.setHp(1);
toDrop.setMp(1);
toDrop.setMatk(1);
toDrop.setWatk(1);
toDrop.setMdef(1);
toDrop.setWdef(1);
toDrop.setAcc(1);
toDrop.setAvoid(1);
toDrop.setHands(1);
toDrop.setSpeed(1);
toDrop.setJump(1);
cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������
cm.getC().getSession().write(net.sf.odinms.tools.MaplePacketCreator.addInventorySlot(type, toDrop)); //ˢ�±���		
cm.getChar().saveToDB(true);
								cm.setBossLog('VIPZBTK');
								cm.sendOk("��ϲ�����𾴵�VIP6-�����Ա:\r\n#r���Ѿ��ɹ�����ȡ��#rȫ���Գ���ͷ��+3000#v1082002#");
								cm.dispose();
							}else{
								cm.sendOk("�Բ�����ȡʧ��.���Ѿ���ȡ����.");
								cm.dispose();
							}
						}
                                                if(cm.getChar().getVip() == 7 ) {
							if (cm.getBossLog('VIPZBTK') < 1){
            var ii = net.sf.odinms.server.MapleItemInformationProvider.getInstance();		                
            var type = ii.getInventoryType(1082002); //���װ��������
            var toDrop = ii.randomizeStats(ii.getEquipById(1082002)).copy(); // ����һ��Equip��
toDrop.setStr(5000);
toDrop.setDex(5000);
toDrop.setInt(5000);
toDrop.setLuk(5000);
toDrop.setHp(1);
toDrop.setMp(1);
toDrop.setMatk(1);
toDrop.setWatk(1);
toDrop.setMdef(1);
toDrop.setWdef(1);
toDrop.setAcc(1);
toDrop.setAvoid(1);
toDrop.setHands(1);
toDrop.setSpeed(1);
toDrop.setJump(1);
cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������
cm.getC().getSession().write(net.sf.odinms.tools.MaplePacketCreator.addInventorySlot(type, toDrop)); //ˢ�±���		
cm.getChar().saveToDB(true);

								cm.setBossLog('VIPZBTK');
								cm.sendOk("��ϲ�����𾴵�VIP7-�޵л�Ա:\r\n#r���Ѿ��ɹ�����ȡ��#rȫ���Գ���ͷ��+4000#v1082002#");
								cm.dispose();
							}else{
								cm.sendOk("�Բ�����ȡʧ��.���Ѿ���ȡ����.");
								cm.dispose();
							}
						}
						if(cm.getChar().getVip() == 5 ) {
							if (cm.getBossLog('VIPZBTK') < 1){
            var ii = net.sf.odinms.server.MapleItemInformationProvider.getInstance();		                
            var type = ii.getInventoryType(1082002); //���װ��������
            var toDrop = ii.randomizeStats(ii.getEquipById(1082002)).copy(); // ����һ��Equip��
toDrop.setStr(2000);
toDrop.setDex(2000);
toDrop.setInt(2000);
toDrop.setLuk(2000);
toDrop.setHp(1);
toDrop.setMp(1);
toDrop.setMatk(1);
toDrop.setWatk(1);
toDrop.setMdef(1);
toDrop.setWdef(1);
toDrop.setAcc(1);
toDrop.setAvoid(1);
toDrop.setHands(1);
toDrop.setSpeed(1);
toDrop.setJump(1);
cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������
cm.getC().getSession().write(net.sf.odinms.tools.MaplePacketCreator.addInventorySlot(type, toDrop)); //ˢ�±���		
cm.getChar().saveToDB(true);
								cm.setBossLog('VIPZBTK');
								cm.sendOk("��ϲ�����𾴵�VIP5-�ռ���Ա:\r\n#r���Ѿ��ɹ�����ȡ��#rȫ���Գ���ͷ��+2000>#v1082002#");
								cm.dispose();
							}else{
								cm.sendOk("�Բ�����ȡʧ��.���Ѿ���ȡ����.");
								cm.dispose();
							}
						}
						cm.dispose();
					}
					if (selection == 7) {
						if(cm.getChar().getVip() == 1) {
							cm.sendOk("�Բ�����ȡʧ��.����VIP1--������Ա���޷���ȡ���������ߵĻ�Ա.");
							cm.dispose();
						}
						if(cm.getChar().getVip() == 2 ) {
							if (cm.getBossLog('VIPZBBF2') < 1){
								cm.gainItem(4031678,1);
								cm.setBossLog('VIPZBBF2');
								cm.sendOk("��ϲ�����𾴵�VIP2-�߼���Ա:\r\n#r���Ѿ��ɹ�����ȡ��#rװ������Կ��1��>#v4031678#");
								cm.dispose();
							}else{
								cm.sendOk("�Բ�����ȡʧ��.���Ѿ���ȡ����.");
								cm.dispose();
							}
						}
						if(cm.getChar().getVip() == 3 ) {
							if (cm.getBossLog('VIPZBBF3') < 1){
								cm.gainItem(4031678,2);
								cm.setBossLog('VIPZBBF3');
								cm.sendOk("��ϲ�����𾴵�VIP3-������Ա:\r\n#r���Ѿ��ɹ�����ȡ��#rװ������Կ��2��>#v4031678#");
								cm.dispose();
							}else{
								cm.sendOk("�Բ�����ȡʧ��.���Ѿ���ȡ����.");
								cm.dispose();
							}
						}
						if(cm.getChar().getVip() == 4 ) {
							if (cm.getBossLog('VIPZBBF4') < 1){
								cm.gainItem(4031678,3);
								cm.setBossLog('VIPZBBF4');
								cm.sendOk("��ϲ�����𾴵�VIP4-�����Ա:\r\n#r���Ѿ��ɹ�����ȡ��#rװ������Կ��3��>#v4031678#");
								cm.dispose();
							}else{
								cm.sendOk("�Բ�����ȡʧ��.���Ѿ���ȡ����.");
								cm.dispose();
							}
						}
                                                if(cm.getChar().getVip() == 5 ) {
							if (cm.getBossLog('VIPZBBF5') < 1){
								cm.gainItem(4031678,4);
								cm.setBossLog('VIPZBBF5');
								cm.sendOk("��ϲ�����𾴵�VIP5-������Ա:\r\n#r���Ѿ��ɹ�����ȡ��#rװ������Կ��4��>#v4031678#");
								cm.dispose();
							}else{
								cm.sendOk("�Բ�����ȡʧ��.���Ѿ���ȡ����.");
								cm.dispose();
							}
						}
                                                if(cm.getChar().getVip() == 6 ) {
							if (cm.getBossLog('VIPZBBF6') < 1){
								cm.gainItem(4031678,5);
								cm.setBossLog('VIPZBBF6');
								cm.sendOk("��ϲ�����𾴵�VIP6-������Ա:\r\n#r���Ѿ��ɹ�����ȡ��#rװ������Կ��5��>#v4031678#");
								cm.dispose();
							}else{
								cm.sendOk("�Բ�����ȡʧ��.���Ѿ���ȡ����.");
								cm.dispose();
							}
						}
                                                if(cm.getChar().getVip() == 7 ) {
							if (cm.getBossLog('VIPZBBF7') < 1){
								cm.gainItem(4031678,6);
								cm.setBossLog('VIPZBBF7');
								cm.sendOk("��ϲ�����𾴵�VIP7-�޵л�Ա:\r\n#r���Ѿ��ɹ�����ȡ��#rװ������Կ��6��>#v4031678#");
								cm.dispose();
							}else{
								cm.sendOk("�Բ�����ȡʧ��.���Ѿ���ȡ����.");
								cm.dispose();
							}
						}
						cm.dispose();
					}
				}
				if(typed==2){
					if (selection == 1) {
						if(cm.getChar().getVip() == 1) {
							if (cm.getBossLog('vip1ds') >= 1 || cm.getBossLog('vipgz') >= 1) {
								cm.sendOk("�Բ�����ȡʧ��.���ܵ�ԭ����:\r\n#r1.�������Ѿ���ȡ���ˡ�\r\n2.���ǽ���ż��������--����VIP��Ϊ�˷�ֹ���������ô˹���ˢǮ��������ʱ�޷���ȡ��������������ȡ.");
								cm.dispose(); 
							}else{
						                cm.gainMeso(100000000); 
						                cm.gainItem(4031454,1);//beizi
								cm.setBossLog('vipgz');
								cm.sendOk("��ϲ��,�𾴵�[һ�ǻ�Ա]������Ĺ����Ѿ���ȡ��ϣ��ڽ�����������ǵ���Ӵ��");
								cm.dispose();
							}
						}else{
							cm.sendOk("#b��Ļ�Ա�ȼ�:#rVIP"+cm.getChar().getVip()+"#k\r\n��ȡʧ��,ֻ����VIP1--������Ա��ȡ.");
							cm.dispose();
						}
					}
					if (selection == 2) {
						if(cm.getChar().getVip() == 2) {
							if (cm.getBossLog('vipgz') >= 1) {
								cm.sendOk("�Բ�����ȡʧ��.���ܵ�ԭ����:\r\n#r1.�������Ѿ���ȡ����,������������ȡ.");
								cm.dispose(); 
							}else{
						               //cm.gainNX(10000);
						               //cm.setzb(1000);
								cm.setBossLog('vipgz');
						               //cm.getChar().setgodpoint(50);
						               //cm.setjf(5);
						               cm.gainItem(5390000,2);//����
                                                               cm.gainItem(5390001,2);//����
                                                               cm.gainItem(5390002,2);
                                                               cm.gainItem(4002000,1);//����
						               cm.gainItem(4031454,3);//beizi
						               cm.gainMeso(30000000);
								cm.sendOk("��ϲ��,�𾴵�[���ǻ�Ա]������Ĺ����Ѿ���ȡ��ϣ��ڽ�����������ǵ���Ӵ��");
								cm.dispose();
							}
						}else{
							cm.sendOk("#b��Ļ�Ա�ȼ�:#rVIP"+cm.getChar().getVip()+"#k\r\n��ȡʧ��,ֻ����VIP2--�߼���Ա��ȡ.");
							cm.dispose();
						}
					}
					if (selection == 3) {
						if(cm.getChar().getVip() == 3) {
							if (cm.getBossLog('vipgz') >= 1) {
								cm.sendOk("�Բ�����ȡʧ��.���ܵ�ԭ����:\r\n#r1.�������Ѿ���ȡ����,������������ȡ.");
								cm.dispose(); 
							}else{
								//cm.gainNX(500);
						                //cm.setzb(3000);
								cm.setBossLog('vipgz');
						                cm.gainItem(5390000,3);//����
                                                                cm.gainItem(5390001,3);//����
                                                                cm.gainItem(5390002,3);
                                                                cm.gainItem(4002000,2);
						                cm.gainItem(4031454,4);//beizi
						                cm.gainMeso(100000000);
								cm.sendOk("��ϲ��,�𾴵�[���ǻ�Ա]������Ĺ����Ѿ���ȡ��ϣ��ڽ�����������ǵ���Ӵ��");
								cm.dispose();
							}
						}else{
							cm.sendOk("#b��Ļ�Ա�ȼ�:#rVIP"+cm.getChar().getVip()+"#k\r\n��ȡʧ��,ֻ����VIP3--�ƽ��Ա��ȡ.");
						}
					}
					if (selection == 4) {
						if(cm.getChar().getVip() == 4) {
							if (cm.getBossLog('vipgz') >= 1) {
								cm.sendOk("�Բ�����ȡʧ��.���ܵ�ԭ����:\r\n#r1.�������Ѿ���ȡ����,������������ȡ.");
								cm.dispose(); 
							}else{
						                //cm.gainNX(1000);
						                //cm.setzb(8000);
								cm.setBossLog('vipgz');
						                cm.gainItem(5390000,4);//����
                                                                cm.gainItem(5390001,4);//����
                                                                cm.gainItem(5390002,4);//����
                                                                cm.gainItem(4002000,3);
						                cm.gainItem(4031454,5);//beizi
						                cm.gainMeso(200000000);
								cm.sendOk("��ϲ��,�𾴵�[���ǻ�Ա]������Ĺ����Ѿ���ȡ��ϣ��ڽ�����������ǵ���Ӵ��");
								cm.dispose();
							}
						}else{
							cm.sendOk("#b��Ļ�Ա�ȼ�:#rVIP"+cm.getChar().getVip()+"#k\r\n��ȡʧ��,ֻ����VIP4--�����Ա��ȡ.");
							cm.dispose();
						}
					}
					if (selection == 5) {
						if(cm.getChar().getVip() == 5) {
							if (cm.getBossLog('vipgz') >= 1) {
								cm.sendOk("�Բ�����ȡʧ��.���ܵ�ԭ����:\r\n#r1.�������Ѿ���ȡ����,������������ȡ.");
								cm.dispose(); 
							}else{
						                //cm.gainNX(1800);
						                //cm.setzb(12000);
								cm.setBossLog('vipgz');
						                //cm.getChar().setgodpoint(150);
						                //cm.setjf(8);
						                cm.gainItem(5390000,6);//����
                                                                cm.gainItem(5390001,6);//����
                                                                cm.gainItem(5390002,6);//����
                                                                cm.gainItem(4002000,6);
						                cm.gainItem(4031454,7);//beizi
						                cm.gainMeso(500000000); 
								cm.sendOk("��ϲ��,�𾴵�[���ǻ�Ա]������Ĺ����Ѿ���ȡ��ϣ��ڽ�����������ǵ���Ӵ��");
								cm.dispose();
							}
						}else{
							cm.sendOk("#b��Ļ�Ա�ȼ�:#rVIP"+cm.getChar().getVip()+"#k\r\n��ȡʧ��,ֻ����VIP5--������Ա��ȡ.");
							cm.dispose();
						}
					}
                                        if (selection == 6) {
						if(cm.getChar().getVip() == 6) {
							if (cm.getBossLog('vipgz') >= 1) {
								cm.sendOk("�Բ�����ȡʧ��.���ܵ�ԭ����:\r\n#r1.�������Ѿ���ȡ����,������������ȡ.");
								cm.dispose(); 
							}else{
						                //cm.gainNX(30000);
						                //cm.setzb(15000);
								cm.setBossLog('vipgz');
						                //cm.getChar().setgodpoint(200);
						                //cm.setjf(10);
						                cm.gainItem(5390000,10);//����
                                                                cm.gainItem(5390001,10);//����
                                                                cm.gainItem(5390002,10);//����
						                cm.gainMeso(1500000000);
						                cm.gainItem(4031454,10);//beizi
                                                                cm.gainItem(4002000,10);
								cm.sendOk("��ϲ��,�𾴵�[���ǻ�Ա]������Ĺ����Ѿ���ȡ��ϣ��ڽ�����������ǵ���Ӵ��");
								cm.dispose();
							}
						}else{
							cm.sendOk("#b��Ļ�Ա�ȼ�:#rVIP"+cm.getChar().getVip()+"#k\r\n��ȡʧ��,ֻ����VIP6--������Ա��ȡ.");
							cm.dispose();
						}
					}
                                        if (selection == 7) {
						if(cm.getChar().getVip() == 7) {
							if (cm.getBossLog('vipgz') >= 1) {
								cm.sendOk("�Բ�����ȡʧ��.���ܵ�ԭ����:\r\n#r1.�������Ѿ���ȡ����,������������ȡ.");
								cm.dispose(); 
							}else{
								cm.gainItem(5200002,10); 
								cm.setBossLog('vipgz');
								cm.gainItem(4001129,25);
								cm.gainItem(5390002,10);
								cm.gainItem(5390006,1);
								cm.gainItem(5390005,1);
								cm.gainNX(3000);
								cm.sendOk("��ϲ���ɹ���ȡ25��ת����,10�������,10000���10���龰���ȣ�2���������ȣ�2���������ȣ��ڽ�����������ǵ���Ӵ��");
								cm.dispose();
							}
						}else{
							cm.sendOk("#b��Ļ�Ա�ȼ�:#rVIP"+cm.getChar().getVip()+"#k\r\n��ȡʧ��,ֻ����VIP6--�ռ���Ա��ȡ.");
							cm.dispose();
						}
					}


				}
				if(typed==1){
					if (selection == 1) {
						cm.warp(209000000, 0);
						cm.sendOk("#b��Ļ�Ա�ȼ�:#rVIP"+cm.getChar().getVip()+"#k\r\n�Ѵ��͵�Ŀ�ĵ�.ף����;���.");
						cm.dispose();
					}
					if (selection == 2) {
						if(cm.getChar().getVip() >= 1) {
							cm.warp(209000001, 0);
							cm.sendOk("#b��Ļ�Ա�ȼ�:#rVIP"+cm.getChar().getVip()+"#k\r\n�Ѵ��͵�Ŀ�ĵ�.ף����;���.");
							cm.dispose();
						}else{
							cm.sendOk("#b��Ļ�Ա�ȼ�:#rVIP"+cm.getChar().getVip()+"#k\r\n����ʧ��,�˵�ͼ����VIP1����������ҽ���.");
							cm.dispose();
						}
					}
					if (selection == 3) {
						if(cm.getChar().getVip() >= 3) {
						cm.warp(920010000, 0);
						cm.sendOk("#b��Ļ�Ա�ȼ�:#rVIP"+cm.getChar().getVip()+"#k\r\n�Ѵ��͵�Ŀ�ĵ�.ף����;���.");
						cm.dispose();
						}else{
							cm.sendOk("#b��Ļ�Ա�ȼ�:#rVIP"+cm.getChar().getVip()+"#k\r\n����ʧ��,�˵�ͼ����VIP3����������ҽ���.");
							cm.dispose();
						}
					}
					if (selection == 4) {
						if(cm.getChar().getVip() >= 4) {
						cm.warp(920010000, 0);
						cm.sendOk("#b��Ļ�Ա�ȼ�:#rVIP"+cm.getChar().getVip()+"#k\r\n�Ѵ��͵�Ŀ�ĵ�.ף����;���.");
						cm.dispose();
						}else{
							cm.sendOk("#b��Ļ�Ա�ȼ�:#rVIP"+cm.getChar().getVip()+"#k\r\n����ʧ��,�˵�ͼ����VIP4����������ҽ���.");
							cm.dispose();
						}
					}
                                        if (selection == 5) {
						if(cm.getChar().getVip() >= 5) {
						cm.warp(924010200, 0);
						cm.sendOk("#b��Ļ�Ա�ȼ�:#rVIP"+cm.getChar().getVip()+"#k\r\n�Ѵ��͵�Ŀ�ĵ�.ף����;���.");
						cm.dispose();
						}else{
							cm.sendOk("#b��Ļ�Ա�ȼ�:#rVIP"+cm.getChar().getVip()+"#k\r\n����ʧ��,�˵�ͼ����VIP5����������ҽ���.");
							cm.dispose();
						}
					}
                                        if (selection == 6) {
						if(cm.getChar().getVip() >= 6) {
						cm.warp(922020300, 0);
						cm.sendOk("#b��Ļ�Ա�ȼ�:#rVIP"+cm.getChar().getVip()+"#k\r\n�Ѵ��͵�Ŀ�ĵ�.ף����;���.");
						cm.dispose();
						}else{
							cm.sendOk("#b��Ļ�Ա�ȼ�:#rVIP"+cm.getChar().getVip()+"#k\r\n����ʧ��,�˵�ͼ����VIP6����������ҽ���.");
							cm.dispose();
						}
					}
                                        if (selection == 7) {
						if(cm.getChar().getVip() >= 7) {
						cm.warp(922020300, 0);
						cm.sendOk("#b��Ļ�Ա�ȼ�:#rVIP"+cm.getChar().getVip()+"#k\r\n�Ѵ��͵�Ŀ�ĵ�.ף����;���.");
						cm.dispose();
						}else{
							cm.sendOk("#b��Ļ�Ա�ȼ�:#rVIP"+cm.getChar().getVip()+"#k\r\n����ʧ��,�˵�ͼ����VIP7����������ҽ���.");
							cm.dispose();
						}
					}
				}
	}else if (status == 3) {
		if(typed==13){//QC
				if(cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1)!=null){
					cm.sendOk("#r�Բ������װ�����ڵ�һ����װ��.���ƿ����ڽ��й���,�Է�����.");
					cm.dispose();
					return;
				}
				if(cm.getChar().getVip()>=5 && cm.getBossLog('vip5qc')<1){
						cm.gainItem(typesitemqced[selection],1);
						cm.gainItem(typesitemqceded[selection],1);
						cm.setBossLog('vip5qc');
						cm.sendOk("#e#r��ϲ�����𾴵��ռ���Ա.\r\n���Ѿ��ɹ�����ȡ�����.");
						cm.dispose();
					}else{
						cm.sendOk("#e#r��ȡʧ�ܣ����ܵ�ԭ�����㲻��VIP5���ϻ������Ѿ���ȡ����.");
						cm.dispose();
					}
		}
		if(typed==12){//YI ZI
				if(cm.getChar().getVip()>=4 && cm.getBossLog('vip4YZ')<1){
						cm.gainItem(typeszy[selection],1);
						cm.setBossLog('vip4YZ');
						cm.sendOk("#e#r��ϲ�����𾴵Ļ�Ա.\r\n���Ѿ��ɹ�����ȡ��װ��.");
						cm.dispose();
					}else{
						cm.sendOk("#e#r��ȡʧ�ܣ����ܵ�ԭ�����㲻��VIP4���ϻ������Ѿ���ȡ����.");
						cm.dispose();
					}
		}
		if(typed==11){//120
			if(cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1)!=null){
					cm.sendOk("#r�Բ������װ�����ڵ�һ����װ��.���ƿ����ڽ��й���,�Է�����.");
					cm.dispose();
					return;
				}
				if(cm.getChar().getVip()>=4 && cm.getBossLog('vip4120')<1){
						cm.gainItem(typesitem[selection],1);
						cm.setBossLog('vip4120');
						cm.sendOk("#e#r��ϲ�����𾴵Ļ�Ա.\r\n���Ѿ��ɹ�����ȡ��װ��.");
						cm.dispose();
					}else{
						cm.sendOk("#e#r��ȡʧ�ܣ����ܵ�ԭ�����㲻��VIP5���ϻ������Ѿ���ȡ����.");
						cm.dispose();
					}
		}
		if(typed==10){//110 level
			if(cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1)!=null){
					cm.sendOk("#r�Բ������װ�����ڵ�һ����װ��.���ƿ����ڽ��й���,�Է�����.");
					cm.dispose();
					return;
				}
				if(cm.getChar().getVip()==3 && cm.getBossLog('vip3ed')<1){
						cm.gainItem(typesitemqc[selection],1);
						cm.setBossLog('vip3110');
						cm.sendOk("#e#r��ϲ�����𾴵Ļ�Ա.\r\n���Ѿ��ɹ�����ȡ��װ��.");
						cm.dispose();
					}else{
						cm.sendOk("#e#r��ȡʧ�ܣ����ܵ�ԭ�����㲻��VIP3���ϻ������Ѿ���ȡ����.");
						cm.dispose();
					}
		}
		cm.dispose();
			}			
	}
}

importPackage(java.util);
importPackage(net.sf.odinms.client);
importPackage(net.sf.odinms.server);


var status = 0;
var fstype=0;
var price=500000000; //�Ҿ�۸�
var types=new Array("�����T��װ�����T����","�����T���������T����","�����T���������T����","�����T���������T����","�����T���������T����"); 
var chance3 = (Math.floor(Math.random()*8)+1);
var itemSet120 = new Array(
	1402046,1432047,1002776,
	1082234,1052155,1072355,
	1382057,1002777,1082235,
	1052156,1072356,1452057,
	1002778,1082236,1052157,
	1072357,1332074,1002779,
	1082237,1052158,
	1072358,1492023,1002780,
	1082238,1052159,1072359
	);
var itemSet140 = new Array(
1322096,1003172,1052314,1082295,1072485,1102275,1302152,1442116,1432086,1003173,1052315,1082296,1072486,1102276,1382104,1372084,1522018,1003174,1052316,1082297,1072487,1102277,1452111,1462099,1003176,1052318,1082299,1072489,1102279,1482084,1492085
	);
var rand120 = Math.floor(Math.random() * itemSet120.length);
var rand140 = Math.floor(Math.random() * itemSet140.length);

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
var nextmap = cm.getC().getChannelServer().getMapFactory().getMap(910000007);
var vip3 = nextmap.getCharacters().toArray().length;
var nextmap1 = cm.getC().getChannelServer().getMapFactory().getMap(910000008);
var vip4 = nextmap1.getCharacters().toArray().length;
var nextmap2 = cm.getC().getChannelServer().getMapFactory().getMap(910000009);
var vip5 = nextmap2.getCharacters().toArray().length;
var nextmap3 = cm.getC().getChannelServer().getMapFactory().getMap(910000010);
var vip6 = nextmap3.getCharacters().toArray().length;
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        if (status == 0) {  
			cm.sendSimple("ΰ���#b#h ##k�������ڵĻ�Ա�ȼ�Ϊ��"+cm.getChar().getVip()+"\r\n#rΪ�˷����Ա��װ������,��Աÿ���������������ȡװ��#k\r\n#b(���װ�������õȼ�������װ,������.)#k#l\r\n�㵱����ȡ140װ��ʹ�ô���Ϊ��"+cm.getBossLog('��Ա140װ��')+"��#k\r\n#rVIP4#kÿ�տ�����ȡ1�Ρ�#rVIP5#kÿ�տ�����ȡ2��\r\n#L2#ÿ���漴��ȡһ��140װ��#l");
        } else if (status == 1) {
            if (selection==0){
		if (cm.getChar().getVip() < 3) {
                    cm.sendOk("�㲻�ǻ�Ա��,�޷���ȡ");
                    cm.dispose();
                }else if(cm.getBossLog("hymrlq") >= 1) {
	            cm.sendOk("���,��Ա��ÿ��ֻ����ȡ���120װ��1��");
                    cm.dispose();
		}else{			
			cm.gainItem(itemSet120[rand120],1)
			cm.setBossLog("hymrlq");
			cm.sendOk("������#v" + itemSet120[rand120] + "##z" + itemSet120[rand120] + "#");
			cm.dispose();
		}
            }else if (selection==1){
		if (cm.getChar().getVip() < 4) {
                    cm.sendOk("�㲻�ǻ�Ա��,�޷���ȡ");
                    cm.dispose();
                }else if(cm.getBossLog("hymrlq") >= 2) {
	            cm.sendOk("���,��Ա��ÿ��ֻ����ȡ���120װ��1��");
                    cm.dispose();
		}else{			
			cm.gainItem(itemSet120[rand120],1)
			cm.setBossLog("hymrlq");
			cm.sendOk("������#v" + itemSet120[rand120] + "##z" + itemSet120[rand120] + "#");
			cm.dispose();
		}
            }else if (selection==2){
		if(cm.getBossLog("��Ա140װ��")>0 && cm.getVip()==4){
			cm.sendOk("����յ���ȡ�����Ѿ�ʹ��!");
                	 cm.dispose();
		}else if(cm.getBossLog("��Ա140װ��")>1 && cm.getVip()==5){
			cm.sendOk("����յ���ȡ�����Ѿ�ʹ��!");
                 	 cm.dispose();
		}else{			
			cm.gainItem(itemSet140[rand140],1)
			cm.setBossLog("��Ա140װ��");
			cm.sendOk("������#v" + itemSet140[rand140] + "##z" + itemSet120[rand140] + "#");
			cm.dispose();
		}
            }else if (selection==3){
		if (cm.getChar().getVip() < 6) {
                    cm.sendOk("�㲻�ǻ�Ա��,�޷���ȡ");
                    cm.dispose();
                }else if(cm.getBossLog("hymrlq1") >= 2) {
	            cm.sendOk("���,��Ա��ÿ��ֻ����ȡ���140װ��2��");
                    cm.dispose();
		}else{			
			cm.gainItem(itemSet140[rand140],1)
			cm.setBossLog("hymrlq1");
			cm.sendOk("������#v" + itemSet140[rand140] + "##z" + itemSet120[rand140] + "#");
			cm.dispose();
		}
		}
       } else if (status == 2) {
			if(fstype==10){
				fstype=11;
				var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
				//var statup = new java.util.ArrayList();
				cm.sendAcceptDecline("��һ������Ҫ,��ȷ��һ����Ҫ������װ��.\r\n��Ҫ�ҵ�װ���ǣ�#v"+item.getItemId()+"#\r\n#bȷ����Ϻ󣬵�����ܿ�ʼ����..");
			}
			if(fstype==21){
				fstype=22;
				var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
				//var statup = new java.util.ArrayList();
				cm.sendAcceptDecline("��һ������Ҫ,��ȷ��һ����Ҫ������װ��.\r\n��Ҫ�ҵ�װ���ǣ�#v"+item.getItemId()+"#\r\n#b\ȷ����Ϻ󣬵�����ܿ�ʼ����..");
			}
			if(fstype==31){
				fstype=32;
				var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
				//var statup = new java.util.ArrayList();
				cm.sendNext("���װװ������װ�����ڵĵ�һ�񣬷����㽫���ܳɹ�.\r\n��ȷ��һ����Ҫ�ҵ�װ���ǣ�#v"+item.getItemId()+"#��\r\n #rps:������Ǿͼ��������һ������..");
			}
		}else if(status == 3){
			if(fstype==11){
				if(cm.getChar().getVip() == 5){
					if(cm.getBossLog('vip5sx') < 1){
						var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
						//var statup = new java.util.ArrayList();
						item.setStr((item.getStr()+50));
						item.setDex((item.getDex()+50));
						item.setInt((item.getInt()+50));
						item.setLuk((item.getLuk()+50));
						item.setHp((item.getHp()+50));
						item.setMp((item.getMp()+50));
						item.setMatk((item.getMatk()+50));
						item.setWatk((item.getWatk()+50));
						MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 1, 1, true);
						MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, "admin");
						cm.setBossLog('vip5sx');
		////cm.getC().getChannelServer().broadcastPacket(net.sf.odinms.tools.MaplePacketCreator.serverNotice(0x10,cm.getC().getChannel(),"����Աǿ����"+" : "+"��"+ cm.getChar().getName() +"��ʹ���˻�Ա��ǿ��װ������,��װ��������ȫ����50~")) 
						cm.sendOk("#b��ϲ��ɹ���!��쿴��İ�����!#k");
						cm.getChar().saveToDB(true);
						cm.dispose();
					}else{
						cm.sendOk("�Բ���,������Ѿ�ʹ���˴˹���!");
						cm.dispose();
					}
				}else{
					cm.sendOk("�Բ���,�㲻��VIP5,����ʹ�ô˹���!");
					cm.dispose();
				}
			}
			if(fstype==22){
				if(cm.getChar().getVip() == 6){
					if(cm.getBossLog('vip6sx') < 1){
						var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
						//var statup = new java.util.ArrayList();
						item.setStr((item.getStr()+100));
						item.setDex((item.getDex()+100));
						item.setInt((item.getInt()+100));
						item.setLuk((item.getLuk()+100));
						item.setHp((item.getHp()+100));
						item.setMp((item.getMp()+100));
						item.setMatk((item.getMatk()+100));
						item.setWatk((item.getWatk()+100));
						MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 1, 1, true);
						MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, "admin");
						cm.setBossLog('vip6sx');
		////cm.getC().getChannelServer().broadcastPacket(net.sf.odinms.tools.MaplePacketCreator.serverNotice(0x10,cm.getC().getChannel(),"����Աǿ����"+" : "+"��"+ cm.getChar().getName() +"��ʹ���˻�Ա��ǿ��װ������,��װ��������ȫ����100~")) 
						cm.sendOk("#b��ϲ��ɹ���!��쿴��İ�����!#k");
						cm.getChar().saveToDB(true);
						cm.dispose();
					}else{
						cm.sendOk("�Բ���,������Ѿ�ʹ���˴˹���!");
						cm.dispose();
					}
				}else{
					cm.sendOk("�Բ���,�㲻��VIP6,����ʹ�ô˹���!");
					cm.dispose();
				}
			}
			if(fstype==32){
				if(cm.haveItem(4031160,1)){
					var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
					//var statup = new java.util.ArrayList();
					item.setUpgradeSlots((item.getUpgradeSlots() + 1));
					MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 1, 1, true);
					MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, "admin");
					cm.gainItem(4031160,-1);
					cm.sendOk("#b��ϲ��ɹ���!��쿴��İ�����!#k");
					cm.dispose();
				}else{
					cm.sendOk("�Բ���,��û��#v4031160#,�ڹ���VIP��ʱ��������������!");
					cm.dispose();
			}	
		}
        }
    }
}

var status = 0;
var fstype=0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
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
            cm.sendNext("ΰ���#b#h ##k�����Ǳ���Ψһ���������������NPC����Ҫ���и������������ս�𣿽�����Ȼ�Ƿǳ��ḻ��");
            
        } else if (status == 1) {  
			cm.sendSimple("���ΰ���#b#h ##k�����Ǳ�����������͸�����NPC�������ĸ��������������������Ӵ����Ȼƽʱ�Ļ���¼ӵĸ���Ҳ����������׼��������\r\n#r==============�����е�����͸���===================#k\r\n#L4##r[����]#k����7����#l\r\n#L0##r[ÿ������]#k����֮��#l\r\n#L1##r[ÿ������]#kÿ�մ�#l\r\n#L2##b[������ս]#k���˺���#l����#L12##d�鿴�������#k\r\n#L3##b[������ս]#k���﹫԰#l\r\n\r\n#g==============���ڿ��ŵ�����͸���=================#k\r\n#b#L5##b[������ս]#k��߳����#l\r\n#L6##b[������ս]#k���Ⱥ�������#l");
        } else if (status == 2) {
            if (selection==0){//����֮��
				cm.dispose();
        			cm.openNpc(9010041,1);
            }else if (selection==1){//ÿ��ˢǮ
				cm.dispose();
        			cm.openNpc(9010041,2);
            }else if (selection==2){//���˺����Ľ���
        			cm.warp(251010404);
        			cm.dispose();
            }else if (selection==3){//���﹫԰
        			cm.warp(951000000);
        			cm.dispose();
            }else if (selection==4){//����7��
        			fstype = 4;
        			cm.sendSimple("#r�.1#k������ڵ��ˣ��ս�������û�л�أ�����ÿ���ǩ��������ǩ��5��Ϳ��Ի�ù����ת����������������ף�����ᣬħ�������ӵ�Ӵ\r\n#r�.2#k�������Ѽ���Ʒ�������м��ʻ��(�ƽ�����,�ɵ����ﵺ1������������κ���)(��������ӿ��Կ���GM��,�п�װ��)\r\n#r�.3#k������7�쿪�ų�ֵ�����Ӵ��100����������20,200����40,300����80\r\n#r�.4#k������ÿ������20��00����GM�����߻Ӵ\r\n���ڹ���7���ֻ��ǩ������Ϊ��#r" + cm.getBossLog("qddq", 1) + "#k\r\n#L3##b��ʼ�����Ѽ���Ʒ�#k\r\n#L1##b��Ҫǩ��#k#l#L2##r��Ҫ��ȡ�������#k#l");
            }else if (selection==5){//������
        			cm.sendOk("��ʱδ����");
        			cm.dispose();
            }else if (selection==6){//���Ⱥ���
        			cm.sendOk("��ʱδ����");
        			cm.dispose();
           }else if (selection==12){//���˺����Ľ���
        			cm.sendOk("�����ڵȴ��¸ҵ�ð�ռҡ��������Լ����������ǻۣ�һ���ƽ����⣬����ǿ���#r�������ţ�\r\n\r\n - #e�ȼ�#n��70������#r���Ƽ��ȼ���120��200 ��#k\r\n - #e����ʱ��#n��10����\r\n - #e�μ�����#n��3��4��\r\n - #eͨ�ػ����Ʒ#n��\r\n��#v4031996##v4031995##v4031994v# Ģ������#b�������ã�#k\r\n - #eͨ�������Ʒ#n��\r\n�� #b����ţ��Ʊ,GM�سɾ���,����ҩˮ,����װ��(�п�),ʥ��");
        			cm.dispose();
			}
       } else if (status == 3) {
			if(fstype==1){//�����
				fstype=13;
				var ii = Packages.server.MapleItemInformationProvider.getInstance();
				var item = cm.getInventory(1).getItem(1);
				var statup = new java.util.ArrayList();
				if(item==null){
				cm.sendOk("�Բ���,��װ������һ��û��װ��!"); 
				cm.dispose(); 
				}else if(ii.isCash(item.getItemId())==true){
				cm.sendOk("�̳���Ʒ�ݲ�֧��.");
				cm.dispose();
				}else{
					cm.sendNext("���װװ������װ�����ڵĵ�һ�񣬷����㽫���ܳɹ�.\r\n��ȷ��һ����Ҫ�ҵ�װ���ǣ�#v"+item.getItemId()+"##z"+item.getItemId()+"#��");
				}
				}				
			if(fstype==2){//����װ��
				if(selection==1){
					var it;
					var texts="#r---------------��ѡ����Ҫ�����װ��----------------#b\r\n";
					var inv = cm.getInventory(1);
					for (var i = 1; i <= 96; i++) {
						it = inv.getItem(i);
						if (it != null) {
							texts+="#L"+i+"#װ��ͼƬ:#v"+it.getItemId()+"# װ�����Ƽ�����:#g#z"+it.getItemId()+"##l#b\r\n"
						}
					}
					fstype=101;
					cm.sendSimpleS(texts,2);
				}else if(selection==2){
					var it;
					var texts="#r---------------��ѡ����Ҫ�����װ��----------------#b\r\n";
					var inv = cm.getInventory(5);
					for (var i = 1; i <= 96; i++) {
						it = inv.getItem(i);
						if (it != null) {
							texts+="#L"+i+"#װ��ͼƬ:#v"+it.getItemId()+"# װ�����Ƽ�����:#g#z"+it.getItemId()+"##l#b\r\n"
						}
					}
					fstype=102;
					cm.sendSimpleS(texts,2);
				}
				}
			if(fstype==3){//�ƽ��Ҷ
				fstype=14;
				var ii = Packages.server.MapleItemInformationProvider.getInstance();
				var item = cm.getInventory(1).getItem(1);
				var statup = new java.util.ArrayList();
				if(item==null){
				cm.sendOk("�Բ���,��װ������һ��û��װ��!"); 
				cm.dispose(); 
				}else if(ii.isCash(item.getItemId())==true){
				cm.sendOk("�̳���Ʒ�ݲ�֧��.");
				cm.dispose();
				}else{
					cm.sendNext("���װװ������װ�����ڵĵ�һ�񣬷����㽫���ܳɹ�.\r\n��ȷ��һ����Ҫ�ҵ�װ���ǣ�#v"+item.getItemId()+"##z"+item.getItemId()+"#��");
				}
				}
			if(fstype==4){//����
			if (selection == 1) {
            		var count = cm.getBossLog("qddq", 1);
            		if (cm.getBossLog("qddq") == 0) {
            		cm.setBossLog("qddq",1,count+1);
            		cm.sendOk("ǩ���ɹ�.");
			cm.worldMessage("[����7����]�����["+cm.getChar().getName()+"]����˽���Ĺ���ǩ��,����������ǰ����һ��");
            		cm.dispose();
            		 } else {
            		cm.sendOk("���Ѿ�ǩ������,����������");
            		cm.dispose();
            		}
            		} else if (selection == 2) {
            		if (cm.getBossLog("qddq", 1) >= 5 && cm.getBossLog("qdlb", 1) == 0) {
            		cm.setBossLog("qdlb",1);
                        cm.gainItem(5062002, 10); //�߼�����ħ��
                        cm.gainItem(5062001, 10); //��������ħ��
                        cm.gainItem(2340000, 10); //ף������
			cm.gainItem(2430008,+1);
            		cm.sendOk("��ȡ�ɹ�.");
			cm.worldMessage("[����7����]�����["+cm.getChar().getName()+"]��ȡ�˹���ڵ������");
            		cm.dispose();
            		 } else {
            		cm.sendOk("���Ѿ���ȡ����,������ǩ��δ��6��");
            		cm.dispose();
            		}
            		} else if (selection == 4) {
			cm.sendOk("#e#r10��5��<�1>#k#n\r\n�볡ʱ�䣺20��30����ʼʱ�䣺20��30\r\n#b<��һ�۽�������������>#k\r\n���ȫ��վ�����,GM�п�ʼ��,��ҿ�ʼ��,����8λ���Ȼ����еڶ��ֱ���\r\n#b<�ڶ���36������Ϸ>#k\r\n���볡�غ�,�������GMָ��,GM���ȫ���������վ��һ��������,Ȼ��GM������5λ��ҷֱ��Ϊ1-2-3-4-5��,����վ��,Ȼ��GM˵��ʼ,1����ҾͿ��Կ�ʼ��������,1�����ֻ����1,����2,���Ժ��������,2����ҽ���1�ŵ���,���1������1,��ô2����ҿ�����1���������ֵĻ�����+1����+2,������2,����3,��������,����5����Һ�,1�Ž���5�ŵ���,˭�����˵��36�������,����̭\r\n���������ֻ����Ҷ��ܻ�����ѱ�1W\r\n��������ҿ�����ڶ��ֵ�36\r\n��һ�����һ�����п�ȫ��������200����(+S������һ��)+1�����ѱ�+����վ���˰�\r\n��һ����ڶ�����ϡ������һ��+1�����ѱ�\r\n��һ�����������һ������һ��+1�����ѱ�");
        			cm.dispose();
            		} else if (selection == 8) {
			cm.sendOk("#e#r10��5��<�2>#k#n\r\n�볡ʱ�䣺20��40����ʼʱ�䣺20��40\r\n#b<˭���Ե�>#k\r\nGM�ύ��ÿ����,�������ǵ�һ������,�ڲ�������л���һ�˵Ĵ��ﲻһ��,Ȼ��ÿ���˴�GM���к����������������#r(��ò�Ҫ���ݵ�̫����,��Ҫ�ñ����Եײ�̫����ʲô����,��Ҫ�ö��������������˼)#kȫ���������,��Ҹ�����ҵĺ���ͶƱ,���Ͷ��ȥ�Ĳ����Ե�,��Ϸ����,���Ե׵Ļ�,�Ե���̭,�Ե�ֻҪ�ܴ����ʣ3����Ҿͽ���");
        			cm.dispose();
            		} else if (selection == 6) {
			cm.sendOk("#e#r10��2��<�2>#k#n\r\n�ʴ�ʱ�䣺20��12������ʱ�䣺20��20\r\n#b<ȫ���ʴ�>#k\r\nGMÿ���ʴ��ʱ��������һ�����ʾ,������һ������ѧ��,����˵˵��ʾ�ķ���\r\n#b��ѧ��#k����һЩ�Ӽ��˳�,����׼������ļ�����Ӵ\r\n#b�����#kһЩ����˼�Ĵ���,�����Դ�\r\n#b������#kGM���ܻ�˵��һ����,����ش������,����GM��˵�ؼ���,��ұ���˵��һ����ؼ��ֵĸ��\r\n#b�ս���֪ʶ#kһЩ�����ս���ð�յ��ĳ�ʶ\r\n���������#r�г���,ֱ�������촰�����,�Թ��������־�������,Ҳ����ʹ�����ȴ���#k\r\n���һ������ҽ��ܻ��һ���ƽ�����(GM��,�п�װ��)#k");
			cm.dispose();
            		} else if (selection == 7) {
			cm.sendOk("#e#r10��3��<�2>#k#n\r\n��ʼʱ�䣺21��50\r\nGM�����5�ֵĶ�èè�,GM�غû�,��������ʾ���GM���ڵĳ���,��Ȼ��ʾ��4������ֻ��1���ǶԵ�Ӵ,�ҵ�����ҿ��Ի�ûƽ�����һ��");
			cm.dispose();
            }else if (selection==5){//���﹫԰
        			//cm.warp(749080100);
			cm.sendOk("����Ѿ��ر�");
        			cm.dispose();
            		} else if (selection == 3) { //�Ѽ���Ʒ
			if((cm.getHour() != 15 || cm.getHour() != 19)){
			cm.sendOk("��ǰ������ʱ��:"+cm.getHour()+"��"+cm.getMin()+"��\r\nʱ�仹û��Ŷ.ֻ������15�������19���ύ����");
			cm.dispose();
			} else if (cm.haveItem(4000004,200) == false  || cm.haveItem(4000268,200) == false || cm.haveItem(4000273,200) == false || cm.haveItem(4000188,200) == false ) {
			cm.sendOk("���ϲ���,����Ҫ�Ѽ�#z4000004#x200��,#z4000268#x200��,#z4000273#x200��,#z4000188#x200��\r\nע�⣺�ύ����ֻ����15���19��,������ץ��ʱ��");
			cm.dispose();
			}else{
			cm.gainItem(4000004,-200);
			cm.gainItem(4000268,-200);
			cm.gainItem(4000273,-200);
			cm.gainItem(4000188,-200);
			cm.gainItem(2430008,+1);
			cm.sendOk("��ϲ�������,�����һ��#r#z2430008##k,��ȥ���ﵺ�úö�����");
			cm.worldMessage("[����7����]�����["+cm.getChar().getName()+"]����˹���7���ֵ�����,�����һ���ƽ�����");
			cm.dispose();
				}
			}
			}
		}else if(status == 4){
			if(fstype==13){
				if(cm.getMeso() < price || cm.haveItem(4310034,2)==false){
					cm.sendOk("�Բ���,��û���㹻��ð�ձ�,������û���㹻��#z4310034#");
					cm.dispose();
					return;
				}
				var chance = Math.floor(Math.random()*2);
				if(chance==1){
				var item = cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy();
				var statup = new java.util.ArrayList();
				item.setUpgradeSlots((item.getUpgradeSlots() + 1));
				Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
				Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(),item,false);
				cm.gainMeso(-price);
				cm.gainItem(4310034,-2);
				cm.sendOk("��ϲ��ɹ�������쿴��İ����ɣ�");
				cm.worldMessage("[��������]����ϲ[" + cm.getChar().getName() + "]���г��ѿ�֮ӥ����ʹ�������Ϊ����������1���Ҿ����");
				cm.dispose();
				}else{
				cm.gainMeso(-price/2);
				cm.gainItem(4310034,-2);
				cm.sendOk("���ź�������ʧ��");
				}
				cm.dispose();
				return;
			}
			if(fstype==14){
				if(cm.getMeso() < price || cm.haveItem(4310003,1)==false){
					cm.sendOk("�Բ���,��û���㹻��ð�ձ�,������û���㹻��#z4310003#");
					cm.dispose();
					return;
				}
				var chance = Math.floor(Math.random()*2);
				if(chance==1){
				var item = cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy();
				var statup = new java.util.ArrayList();
				item.setUpgradeSlots((item.getUpgradeSlots() + 1));
				Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
				Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(),item,false);
				cm.gainMeso(-price);
				cm.gainItem(4310003,-1);
				cm.sendOk("��ϲ��ɹ�������쿴��İ����ɣ�");
				cm.worldMessage("[��������]����ϲ[" + cm.getChar().getName() + "]���г��ѿ�֮ӥ����ʹ�ûƽ��ҶΪ����������1���Ҿ����");
				cm.dispose();
				}else{
				cm.gainMeso(-price/2);
				cm.gainItem(4310003,-1);
				cm.sendOk("���ź�������ʧ��");
				}
				cm.dispose();
				return;
			}
			if(fstype==15){
				if(cm.getMeso() < price || cm.haveItem(4032733,30)==false){
					cm.sendOk("�Բ���,��û���㹻��ð�ձ�,������û���㹻��#z4032733#");
					cm.dispose();
					return;
				}
				var chance1 = Math.floor(Math.random()*2);
				if(chance1==1){
				var item = cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy();
				var ii = Packages.server.MapleItemInformationProvider.getInstance();
				var chance = Math.floor(Math.random()*100);
				var lvsj = Math.floor(Math.random()*20)+10;
				cm.gainMeso(-price);
				cm.gainItem(4032733,-30);
				if(chance<=5){//watk
				item.setWatk(item.getWatk()*1+lvsj);
				Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
				Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(),item,false);
				cm.sendOk("��ϲ���ɹ���װ��������:#r"+lvsj+"#k����.");
				cm.worldMessage("[װ������]����ϲ[" + cm.getChar().getName() + "]���г��ѿ�֮ӥ����ʹ�òʺ��Ҷ�����������Ĺ���");
				}else if(chance>5 && chance<=20){//matk
				item.setMatk(item.getMatk()*1+lvsj);
				Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
				Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(),item,false);
				cm.sendOk("��ϲ���ɹ���װ��������:#r"+lvsj+"#kħ��.");
				cm.worldMessage("[װ������]����ϲ[" + cm.getChar().getName() + "]���г��ѿ�֮ӥ����ʹ�òʺ��Ҷ������������ħ������");
				}else if(chance>20 && chance<=40){//str
				item.setStr(item.getStr()*1+lvsj);
				Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
				Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(),item,false);
				cm.sendOk("��ϲ���ɹ���װ��������:#r"+lvsj+"#k����.");
				cm.worldMessage("[װ������]����ϲ[" + cm.getChar().getName() + "]���г��ѿ�֮ӥ����ʹ�òʺ��Ҷ����������������");
				}else if(chance>40 && chance<=60){//dex
				item.setDex(item.getDex()*1+lvsj);
				Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
				Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(),item,false);
				cm.sendOk("��ϲ���ɹ���װ��������:#r"+lvsj+"#k����.");
				cm.worldMessage("[װ������]����ϲ[" + cm.getChar().getName() + "]���г��ѿ�֮ӥ����ʹ�òʺ��Ҷ����������������");
				}else if(chance>60 && chance<=80){//luk
				item.setInt(item.getInt()*1+lvsj);
				Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
				Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(),item,false);
				cm.sendOk("��ϲ���ɹ���װ��������:#r"+lvsj+"#k����.");
				cm.worldMessage("[װ������]����ϲ[" + cm.getChar().getName() + "]���г��ѿ�֮ӥ����ʹ�òʺ��Ҷ����������������");
				}else if(chance>80){//int
				item.setLuk(item.getLuk()*1+lvsj);
				Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
				Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(),item,false);
				cm.sendOk("��ϲ���ɹ���װ��������:#r"+lvsj+"#k����.");
				cm.worldMessage("[װ������]����ϲ[" + cm.getChar().getName() + "]���г��ѿ�֮ӥ����ʹ�òʺ��Ҷ����������������");
			}
				}else{
				cm.gainMeso(-price/2);
				cm.gainItem(4032733,-30);
				cm.sendOk("���ź�������ʧ��");
				}
				cm.dispose();
				return;
			}
			if(fstype==101){
				Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, selection, 1, true);
				cm.sendOk("��ϲ,�˵����ѱ����.");
				cm.dispose();
			}
			if(fstype==102){
				Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.CASH, selection, 1, true);
				cm.sendOk("��ϲ,�˵����ѱ����.");
				cm.dispose();
			}
				}
    }
}

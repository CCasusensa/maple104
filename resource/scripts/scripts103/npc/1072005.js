importPackage(java.util);
importPackage(net.sf.odinms.client);
importPackage(net.sf.odinms.server);


var status = 0;
var fstype=0;
var price=500000000; //�Ҿ�۸�
var types=new Array("�����T��װ�����T����","�����T���������T����","�����T���������T����","�����T���������T����","�����T���������T����"); 
var chance3 = (Math.floor(Math.random()*8)+1);

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
			cm.sendSimple("ΰ���#b#h ##k,�ҵı���ǣ�"+cm.getNpc()+"\r\n���Ǳ���Ψһ��װ��ǿ��ʹ��,��ʲô��Ҫ��Ч�͵�ô~~#e#k#l\r\n#b#L4#������װ���Ҿ������ѫ�°桿#k#l");
        } else if (status == 1) {
            if (selection==0){
				fstype=1;
				cm.sendNext("��Ŀǰѡ�����#r����װ���Ҿ����#k,�����Ŀǰ��Ҫʹ��#r1�����ѵ�#k,��������Ҫ���������?");
            	}else if (selection==1){
				var a="#r�����T����ע��,�����Ϊ����������,�����������ǰ����Ҫ���������ڲֿ�:#b" 
					for(var i=0;i<types.length;i++){ 
						a+= "\r\n#L" + i + "#" + types[ i ]+""; 
						} 
				cm.sendSimple(a);
				fstype=2; 
		}else if (selection==2){
				fstype=21;
				cm.sendAcceptDecline("��Ŀǰѡ�����#r����װ����������#k,�����Ŀǰ��Ҫ��������#r1�����ѵ�#k,�������һ������:\r\n#b1.Ҫ������װ��������ڵ�һ��\r\n2.�����ɹ���,���װ��+10������(Weapon Attack),�Ҿ����-1,װ������������+1");
            	}else if (selection==3){
				fstype=31;
				cm.sendAcceptDecline("��Ŀǰѡ�����#r����װ��ħ��������#k,�����Ŀǰ��Ҫ��������#r1�����ѵ�#k,�������һ������:\r\n#b1.Ҫ������װ��������ڵ�һ��\r\n2.�����ɹ���,���װ��+10ħ����,�Ҿ������1,װ������������+1");
            	}else if (selection==4){
				fstype=41;
				cm.sendNext("��Ŀǰѡ�����#r����װ���Ҿ����#k,�����Ŀǰ��Ҫʹ��#r1��#v4031160##k,��������Ҫ���������?");
		}else if (selection==5){//���������
				fstype=51;
				cm.sendAcceptDecline("��Ŀǰѡ�����#r����װ�����������#k,�����Ŀǰ��Ҫ��������#r1�����ѵ�#k,�������һ������:\r\n#b1.Ҫ������װ��������ڵ�һ��\r\n2.�����ɹ���,���װ��+20���������,�Ҿ������1,װ������������+1");
		}else if (selection==6){//ħ��������
				fstype=61;
				cm.sendAcceptDecline("��Ŀǰѡ�����#r����װ��ħ��������#k,�����Ŀǰ��Ҫ��������#r1�����ѵ�#k,�������һ������:\r\n#b1.Ҫ������װ��������ڵ�һ��\r\n2.�����ɹ���,���װ��+20ħ��������,�Ҿ������1,װ������������+1");
		}else if (selection==7){
				cm.sendSimple("#r#e�����T����ѡ������Ҫ���������͵����ͨK\r\n#L0##v5120000##l#L1##v5121002##l#L2##v5121001##l#L3##v5121000#l");
				fstype=71;
		}else if (selection==8){
				fstype=81;
				cm.sendNext("��Ŀǰѡ�����#r����װ���Ҿ����#k,�����Ŀǰ��Ҫʹ��#r10W���#k,��������Ҫ���������?");
}
       } else if (status == 2) {
			if(fstype==21){
				fstype=22;
				var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
				var statup = new java.util.ArrayList();
				cm.sendAcceptDecline("��һ������Ҫ,��ȷ��һ����Ҫ������װ��.\r\n��Ҫ�ҵ�װ���ǣ�#v"+item.getItemId()+"#\r\n#b\r\nĿǰװ��������:#r"+item.getWatk()+"   #b����������Ϊ:#r"+item.getUpgradeSlots()+"#b ����������:#r"+item.getLevel()+"\r\n#b\r\n��������ɹ�,��ôװ����������Ϊ:#r"+(item.getWatk()+10)+"#b,������������Ϊ:#r"+(item.getUpgradeSlots()-1)+"#d\r\nȷ����Ϻ󣬵�����ܿ�ʼ����..");
			}
			if(fstype==31){
				fstype=32;
				var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
				var statup = new java.util.ArrayList();
				cm.sendAcceptDecline("��һ������Ҫ,��ȷ��һ����Ҫ������װ��.\r\n��Ҫ�ҵ�װ���ǣ�#v"+item.getItemId()+"#\r\n#b\r\nĿǰװ��ħ����:#r"+item.getMatk()+"   #b����������Ϊ:#r"+item.getUpgradeSlots()+"#b ����������:#r"+item.getLevel()+"\r\n#b\r\n��������ɹ�,��ôװ����������Ϊ:#r"+(item.getMatk()+10)+"#b,������������Ϊ:#r"+(item.getUpgradeSlots()-1)+"#d\r\nȷ����Ϻ󣬵�����ܿ�ʼ����..");
			}
			if(fstype==1){
				fstype=3;
				var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
				var statup = new java.util.ArrayList();
				cm.sendNext("���װװ������װ�����ڵĵ�һ�񣬷����㽫���ܳɹ�.\r\n��ȷ��һ����Ҫ�ҵ�װ���ǣ�#v"+item.getItemId()+"#��\r\n #rps:������Ǿͼ��������һ������..");
			}
			if(fstype==41){
				fstype=42;
				var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
				var statup = new java.util.ArrayList();
				cm.sendNext("���װװ������װ�����ڵĵ�һ�񣬷����㽫���ܳɹ�.\r\n��ȷ��һ����Ҫ�ҵ�װ���ǣ�#v"+item.getItemId()+"#��\r\n #rps:������Ǿͼ��������һ������..");
			}
			if (fstype==2){
				cm.deleteItem(selection+1); 
				cm.sendOk("��ϲ,�Ѿ�Ϊ���������!"); 
				cm.dispose(); 
			}
			if(fstype==51){
				fstype=52;
				var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
				var statup = new java.util.ArrayList();
				cm.sendNext("���װװ������װ�����ڵĵ�һ�񣬷����㽫���ܳɹ�.\r\n��ȷ��һ����Ҫ�ҵ�װ���ǣ�#v"+item.getItemId()+"#��\r\n #rps:������Ǿͼ��������һ������..");
			}
			if(fstype==61){
				fstype=62;
				var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
				var statup = new java.util.ArrayList();
				cm.sendNext("���װװ������װ�����ڵĵ�һ�񣬷����㽫���ܳɹ�.\r\n��ȷ��һ����Ҫ�ҵ�װ���ǣ�#v"+item.getItemId()+"#��\r\n #rps:������Ǿͼ��������һ������..");
			}
                        if(fstype==71){
				if(selection==0){
				typedd=5120000;
			}else if(selection==1){
				typedd=5121002;
			}else if(selection==2){
				typedd=5121001;
			}else if(selection==3){
				typedd=5121000;
                        }
                        test=72;
			cm.sendGetText("#r������һ���ֿ�ʼ��!~~~\r\n#b���Ǳ���#r��������ʹ��#b,�����ͷ�һ��֮����,���ͺ�ȫ�����˶�����ף������ʽ��ʾ,�ȹ������͸���,��һ��?\r\n��������ߺ�,1�����ѱ�1��...");
			} 
			if(fstype==81){
				fstype=82;
				var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
				var statup = new java.util.ArrayList();
				cm.sendNext("���װװ������װ�����ڵĵ�һ�񣬷����㽫���ܳɹ�.\r\n��ȷ��һ����Ҫ�ҵ�װ���ǣ�#v"+item.getItemId()+"#��\r\n #rps:������Ǿͼ��������һ������..");
                    }
		}else if(status == 3){
			if(fstype==32){
				if(cm.getbaby() >= 1){
						var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
						var statup = new java.util.ArrayList();
						item.setUpgradeSlots((item.getUpgradeSlots() - 1));
						item.setMatk((item.getMatk() + 10));
						item.setLevel((item.getLevel() + 1));
                    				MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 1, 1, true);
                    				MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, "admin");
						//cm.setbaby(-1);
						//cm.getChar().setbabyLog('zjmfgj=1');
						cm.sendOk("#b��ϲ��ɹ���!��쿴��İ�����!#k");
						cm.getChar().saveToDB(true);
						cm.dispose();
				}else{
					cm.sendOk("�Բ���,��û��1�����ѵ�,���ֵ���ѵ��ʹ�ô˹���!");
					cm.dispose();
				}
			}
			if(fstype==22){
				if(cm.getbaby() >= 1){
					var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
						var statup = new java.util.ArrayList();
						item.setUpgradeSlots((item.getUpgradeSlots() - 1));
						item.setWatk((item.getWatk() + 10));
						item.setLevel((item.getLevel() + 1));
                    				MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 1, 1, true);
                    				MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, "admin");
						cm.setbaby(-1);
						cm.getChar().setbabyLog('zjwlgj=1');
						cm.sendOk("#b��ϲ��ɹ���!��쿴��İ�����!#k");
						cm.getChar().saveToDB(true);
						cm.dispose();
				}else{
					cm.sendOk("�Բ���,��û��1�����ѵ�,���ֵ���ѵ��ʹ�ô˹���!");
					cm.dispose();
				}
			}
			if(fstype==3){
				if(cm.getbaby() >= 1){
						var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
						var statup = new java.util.ArrayList();
						item.setUpgradeSlots((item.getUpgradeSlots() + 1));
                    				MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 1, 1, true);
                    				MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, "admin");
						cm.setbaby(-1);
						cm.getChar().setbabyLog('sjcs=1');
						cm.sendOk("#b��ϲ��ɹ���!��쿴��İ�����!#k");
						cm.getChar().saveToDB(true);
						cm.dispose();
				}else{
					cm.sendOk("�Բ���,��û��1�����ѵ�,���ֵ���ѵ��ʹ�ô˹���!");
					cm.dispose();
				}
	}
			if(fstype==42){
				if(cm.haveItem(4031160,1)){
					var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
					var statup = new java.util.ArrayList();
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
			if(fstype==52){
				if(cm.getbaby() >= 1){
					var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
						var statup = new java.util.ArrayList();
						item.setUpgradeSlots((item.getUpgradeSlots() - 1));
						item.setWdef((item.getWdef() + 15));//���������
						item.setLevel((item.getLevel() + 1));
                    				MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 1, 1, true);
                    				MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, "admin");
						cm.setbaby(-1);
						cm.getChar().setbabyLog('zjwlfy=1');
						cm.sendOk("#b��ϲ��ɹ���!��쿴��İ�����!#k");
						cm.getChar().saveToDB(true);
						cm.dispose();
				}else{
					cm.sendOk("�Բ���,��û��1�����ѵ�,���ֵ���ѵ��ʹ�ô˹���!");
					cm.dispose();
				}
			}
			if(fstype==62){
				if(cm.getbaby() >= 1){
					var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
						var statup = new java.util.ArrayList();
						item.setUpgradeSlots((item.getUpgradeSlots() - 1));
						item.setMdef((item.getMdef() + 15));//ħ��������
						item.setLevel((item.getLevel() + 1));
                    				MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 1, 1, true);
                    				MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, "admin");
						cm.setbaby(-1);
						cm.getChar().setbabyLog('zjwlfy=1');
						cm.sendOk("#b��ϲ��ɹ���!��쿴��İ�����!#k");
						cm.getChar().saveToDB(true);
						cm.dispose();
				}else{
					cm.sendOk("�Բ���,��û��1�����ѵ�,���ֵ���ѵ��ʹ�ô˹���!");
					cm.dispose();
				}
			}
			if(fstype==82) {
				if(cm.getChar().getNX() >= 100000){
					var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
					var statup = new java.util.ArrayList();
					item.setUpgradeSlots((item.getUpgradeSlots() + 1));
					MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 1, 1, true);
					MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, "admin");
					cm.gainNX(-100000);
					cm.sendOk("#b��ϲ��ɹ���!��쿴��İ�����!#k");
					cm.dispose();
				}else{
					cm.sendOk("�Բ���,��û��#r10W���#k!");
					cm.dispose();
				}	
			}
			if (test == 72) {
			if(cm.getbaby()>=1){
				selected = cm.getText();
				cm.superlaba(selected,typedd);
				cm.setbaby(-1);
				cm.getChar().setbabyLog('cjlb=1');
				cm.dispose();
			}else{
				cm.sendOk("�Բ���,��Ŀǰû���㹻�����ѱ�.");
				cm.dispose(); 
				}
			}
        }
    }
}

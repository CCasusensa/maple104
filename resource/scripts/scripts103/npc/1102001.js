importPackage(java.util);
importPackage(net.sf.odinms.client);
importPackage(net.sf.odinms.server);


var status = 0;
var fstype=0;
var price=100000000; //�Ҿ�۸�
var types=new Array("�����T��װ����^_^","�����T��������^_^","�����T��������^_^","�����T��������^_^","�����T���ֽ���^_^"); 
var chance3 = (Math.floor(Math.random()*15)+1);
var chance30 = (Math.floor(Math.random()*3)+1);


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
            return;s
        }
        if (mode == 1)
            status++;
        if (status == 0) {  
			cm.sendSimple("#r��ã��ҵ����ѣ��ҵ�ID:"+cm.getNpc()+"\r\n���Ǳ���Ψһ��װ��ǿ��ʹ��,��ʲô��Ҫ��Ч�͵�ô~~#b\r\n#L0#��������װ���Ҿ����[ʹ�ð��ǽ�ֺ][1/10���ʳɹ�]#l\r\n#L100#��������װ���Ҿ����[ʹ��3000Ԫ��][100%�Ļ��ʳɹ�]#l\r\n#L1#����������[ȫ�������������]#l");
        } else if (status == 1) {
            if (selection==0){
				fstype=1;
				cm.sendNext("��Ŀǰѡ�����#r����װ���Ҿ����#k,�����Ŀǰ��Ҫ��������1��ð�ձ�,����30�����˽�ֺ��,#bע��,����һ������ʧ��Ŷ#k\r\nע�⣺��VIP���[��������Ա] �ɹ�����Ϊ1/10\r\nע�⣺��VIP���[��������Ա] �ɹ�����Ϊ1/7");
            }else if (selection==1){
				var a="#r�����T����ע��,�����Ϊ����������,�����������ǰ����Ҫ���������ڲֿ�:#b" 
					for(var i=0;i<types.length;i++){ 
						a+= "\r\n#L" + i + "#" + types[ i ]+""; 
						} 
				cm.sendSimple(a);
				fstype=2; 
			}else if (selection==100){
				fstype=100;
				cm.sendNext("��Ŀǰѡ�����#r����װ���Ҿ����#k,��������ʹ��Ԫ������,���гɹ�����Ϊ100%�ɹ�...\r\n#b<�����һ����ʼ����>");
			}else if (selection==101){
				if(cm.haveItem(4000054,20)==true){
						cm.gainItem(4000054,-20);
						cm.gainItem(2340000,1);
						cm.dispose();
					}else{
						cm.sendOk("�Բ�����û���㹻�İ����˽�ֺ.�����V3������ʹ��ð�ձ�ֱ�ӹ���");
						cm.dispose();
					}
			}else if (selection==4){
				var String = "��ѡ������һ����Ҫ�������λ��ע�⣬ѡ�����һ���������ѡ����Ҫ�������Ʒ��.\r\n\r\n#b";
				cm.sendSimple(String+"#L0#װ����#l #L1#��Ʒ��#l #L2#�ֽ���#l");
				fstype=20;
			}else if (selection==2){
				fstype=55;
				cm.sendAcceptDecline("��Ŀǰѡ�����#r����װ����������#k,�����Ŀǰ��Ҫ��������һ�������(#v5200002#)+44�����˽�ֺ��(#v4000054#)+5�����˵���#v4001113#,�������һ������:\r\n#b1.Ҫ������װ��������ڵ�һ��.\r\n2.������һ������ʧ��,�뿼�Ǻ�������.\r\n3.�����ɹ���,���װ������10������,�Ҿ������1.\r\n4.����ʧ�ܺ�װ������ʧ.\r\n#rע��,������Ǹ߼�VIP�ȼ����ϵ�,�ɹ��Ļ��ʻ������˵��һЩ...ͬʱ˵��һ��#v4001113#�ڸ���BOSS���ϵ���.");
            }else if (selection==3){
				fstype=66;
				cm.sendAcceptDecline("��Ŀǰѡ�����#r����װ��ħ��������#k,�����Ŀǰ��Ҫ��������һ�������(#v5200002#)+44�����˽�ֺ��(#v4000054#)+5������˵���#v4001114#,�������һ������:\r\n#b1.Ҫ������װ��������ڵ�һ��.\r\n2.������һ������ʧ��,�뿼�Ǻ�������.\r\n3.�����ɹ���,���װ������10ħ����,�Ҿ������1.\r\n4.����ʧ�ܺ�װ������ʧ.\r\n#rע��,������Ǹ߼�VIP�ȼ����ϵ�,�ɹ��Ļ��ʻ������˵��һЩ...ͬʱ˵��һ��#v4001113#�ڸ���BOSS���ϵ���.");
            }
 
       } else if (status == 2) {
			if(fstype==55){
				fstype=56;
				var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
				var statup = new java.util.ArrayList();
				cm.sendAcceptDecline("��һ������Ҫ,��ȷ��һ����Ҫ������װ��.\r\n��Ҫ�ҵ�װ���ǣ�#v"+item.getItemId()+"#\r\n#b\r\nĿǰװ��������:#r"+item.getWatk()+"   #b����������Ϊ:#r"+item.getUpgradeSlots()+"#b ����������:#r"+item.getLevel()+"\r\n#b\r\n��������ɹ�,��ôװ����������Ϊ:#r"+(item.getWatk()+10)+"#b,������������Ϊ:#r"+(item.getUpgradeSlots()-1)+"#d\r\nȷ����Ϻ󣬵�����ܿ�ʼ����..");
			}
			if(fstype==100){
				if(cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1)==null){
					cm.sendOk("���װ������һ��û��װ�������ܽ��д˲���!..");
					cm.dispose();
					return;
				}
                                   if(cm.getChar().GetMoney() >= 3000) {
					   player.GainMoney(-3000);
						var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
						var statup = new java.util.ArrayList();
						item.setUpgradeSlots((item.getUpgradeSlots() + 1));
                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 1, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item);
						cm.sendOk("#b��ϲ��ɹ���!��쿴��İ�����!#k");
						cm.dispose();
				}else{
					cm.sendOk("�Բ���,��û���㹻��Ԫ��.");
					cm.dispose();
				}
			}
			if(fstype==20){
				if (selection==0){
					typed=21;
					cm.sendSimple("��ѡ����Ҫ�������Ʒ��װ��:\r\n"+cm.equipList(1));
				}else if (selection==1){
					typed=22;
					cm.sendSimple("��ѡ����Ҫ�������Ʒ��װ��:\r\n"+cm.equipList(2));
				}else if (selection==2){
					typed=23;
					cm.sendSimple("��ѡ����Ҫ�������Ʒ��װ��:\r\n"+cm.equipList(3));
				}
			}
			if(fstype==66){
				fstype=67;
				var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
				var statup = new java.util.ArrayList();
				cm.sendAcceptDecline("��һ������Ҫ,��ȷ��һ����Ҫ������װ��.\r\n��Ҫ�ҵ�װ���ǣ�#v"+item.getItemId()+"#\r\n#b\r\nĿǰװ��ħ����:#r"+item.getMatk()+"   #b����������Ϊ:#r"+item.getUpgradeSlots()+"#b ����������:#r"+item.getLevel()+"\r\n#b\r\n��������ɹ�,��ôװ����������Ϊ:#r"+(item.getMatk()+10)+"#b,������������Ϊ:#r"+(item.getUpgradeSlots()-1)+"#d\r\nȷ����Ϻ󣬵�����ܿ�ʼ����..");
			}
			if(fstype==1){
				fstype=3;
				if(cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1)==null){
					cm.sendOk("#r�Բ�����ĵ�һ��û��װ�������ܽ����Ҿ�!.");
					cm.dispose();
					return;
				}
				var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
				//var statup = new java.util.ArrayList();
				cm.sendNext("���װװ������װ�����ڵĵ�һ�񣬷����㽫���ܳɹ�.\r\n��ȷ��һ����Ҫ�ҵ�װ���ǣ�#v"+item.getItemId()+"#��\r\n #rps:������Ǿͼ��������һ������..");
			}
			if (fstype==2){
				cm.deleteItem(selection+1); 
				cm.sendOk("��ϲ,�Ѿ�Ϊ���������!"); 
				cm.dispose(); 
			}
		}else if(status == 3){
			if(fstype==21){//װ����Ʒ�ֽ�
				cm.deleteoneItem(1,selection);
				cm.sendOk("��ϲ,�Ѿ��ɹ��������Ʒ!"); 
				cm.dispose(); 
			}
			if(fstype==22){//װ����Ʒ�ֽ�
				cm.deleteoneItem(4,selection);
				cm.sendOk("��ϲ,�Ѿ��ɹ��������Ʒ!"); 
				cm.dispose(); 
			}
			if(fstype==23){//װ����Ʒ�ֽ�
				cm.deleteoneItem(5,selection);
				cm.sendOk("��ϲ,�Ѿ��ɹ��������Ʒ!"); 
				cm.dispose(); 
			}
			if(fstype==67){
				if(cm.haveItem(5200002,1) && cm.haveItem(4000054,44) && cm.haveItem(4001114,5)){
						cm.gainItem(5200002,-1);
						cm.gainItem(4000054,-44);
						cm.gainItem(4001114,-5);
					if(chance3!=5){
						cm.sendOk("�Բ��𣬺�����,����ʧ��!..");
						cm.dispose();
					}else{
						var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
						var statup = new java.util.ArrayList();
						item.setUpgradeSlots((item.getUpgradeSlots() - 1));
						item.setMatk((item.getMatk() + 10));
						item.setLevel((item.getLevel() + 1));
                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 1, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item);
						cm.sendOk("#b��ϲ��ɹ���!��쿴��İ�����!#k");
						cm.serverNotice("[NPC][װ������ʹ��]����ϲ������ϲ��~���:"+cm.getChar().getName()+"�ɹ���װ������һ���ȼ������һ��ף������~~");
						cm.dispose();

						}
				}else{
					cm.sendOk("�Բ���,��û���㹻��ð�ձ�,������û���㹻�İ����˽�ֺ��#v4000054#..");
					cm.dispose();
				}
			}
			if(fstype==56){
				if(cm.haveItem(5200002,1) && cm.haveItem(4000054,44) && cm.haveItem(4001113,5)){
						cm.gainItem(5200002,-1);
						cm.gainItem(4000054,-44);
						cm.gainItem(4001113,-5);
					if(chance3!=3){
						cm.sendOk("�Բ��𣬺�����,����ʧ��!..");
						cm.dispose();
					}else{
						var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
						var statup = new java.util.ArrayList();
						item.setUpgradeSlots((item.getUpgradeSlots() - 1));
						item.setWatk((item.getWatk() + 10));
						item.setLevel((item.getLevel() + 1));
                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 1, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item);
						cm.gainItem(5200002,-1);
						cm.gainItem(4000054,-44);
						cm.gainItem(4001113,-5);
						cm.sendOk("#b��ϲ��ɹ���!��쿴��İ�����!#k");
						cm.serverNotice("[NPC][װ������ʹ��]����ϲ������ϲ��~���:"+cm.getChar().getName()+"�ɹ���װ������һ���ȼ������һ��ף������~~");
						cm.dispose();
						}
				}else{
					cm.sendOk("�Բ���,��û���㹻��ð�ձ�,������û���㹻�İ����˽�ֺ��#v4000054#..");
					cm.dispose();
				}
			}
			if(fstype==3){
				if(cm.getMeso()>=price && cm.haveItem(4000054,30)==true){
					if(chance3!=4){
						cm.sendOk("�Բ����Ҿ�ʧ��!..");
						cm.gainMeso(-price);
						cm.gainItem(4000054,-10);
						cm.dispose();
					}else{
						var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
						var statup = new java.util.ArrayList();
						item.setUpgradeSlots((item.getUpgradeSlots() + 1));
                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 1, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item);
						cm.gainMeso(-price);
						cm.gainItem(4000054,-10);
						cm.sendOk("#b��ϲ��ɹ���!��쿴��İ�����!#k");
						cm.dispose();
						}
				}else{
					cm.sendOk("�Բ���,��û���㹻��ð�ձ�,������û���㹻�İ����˽�ֺ��#v4000054#..");
					cm.dispose();

				}
				}
        }
    }
}
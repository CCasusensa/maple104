var status = 0;
var fstype=0;
var price=100000; //�Ҿ�۸�
var types=new Array("װ����","������","������","������","�ֽ���"); 
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
			cm.sendSimple("���ΰ���#b#h ##k�����Ǳ�������װ����NPC����ͨ�����񣬸�������ֻ��������Ʒ����������������������һ��װ��Ӵ��#r��Ҫע��һ���ǣ������װ���ǲ����һصģ�Ϊ��������������Ҫ���鷳�����������ʹ��#k\r\n#L1#<����>��ձ�������(ѡ����ɾ��)#l\r\n#L6##b<�ʺ���ͨ���>BOSS����װ���ϳ��Ǽ�װ��#l\r\n#L0##b<�ʺ���ͨ���>#z4310034#����װ���Ҿ����#l\r\n#L2#<�ʺ���ͨ���>�ƽ��Ҷ����װ���Ҿ����#l\r\n#L5##b<�ʺ���ͨ���>#z4000054#����װ��ȫ����(10~30)#l\r\n#L3##b<�ʺ���ͨ���>#z4032733#�漴����װ��ȫ����(10~30)#l\r\n#L4##r<�ʺ���������>���ѱ��漴����װ��ȫ����(20~50)#l");
        } else if (status == 1) {
            if (selection==0){//�����
				fstype=1;
				cm.sendNext("��Ŀǰѡ�����#r����װ���Ҿ����#k\r\n�����Ŀǰ��Ҫ��������1Eð�ձ�+2�������\r\n#rע�⣺50%���ʳɹ�#k,��Ȼʧ�ܻ᷵����һ��������ѷ���\r\n#r��ʾ#k��#b#z4310034##k��ͨ���г�#g���С��#k����֮��������");
            }else if (selection==2){//�ƽ��Ҷ
				fstype=3;
				cm.sendNext("��Ŀǰѡ�����#r����װ���Ҿ����#k\r\n�����Ŀǰ��Ҫ��������1Eð�ձ�+1���ƽ��Ҷ\r\n#rע�⣺50%���ʳɹ�#k,��Ȼʧ�ܻ᷵����һ��������ѷ���\r\n#r��ʾ#k��#b�ƽ��Ҷ#k��ͨ��#g����ת��#k���,ÿת��һ�οɻ��1���ƽ��Ҷ");
            }else if (selection==3){//��ɫ��Ҷ
				fstype=4;
				cm.sendNext("��Ŀǰѡ�����#r�漴����װ��ȫ����(10~20)#k\r\n�����Ŀǰ��Ҫ��������1Eð�ձ�+50����ɫ��Ҷ\r\n#bע�⣺50%���ʳɹ�#k,��Ȼʧ�ܻ᷵����һ��������ѷ���\r\nʲô���漴����ȫ�����أ�����ѡ��Ҫ�ӵ�װ���󣬻��漴����װ����ȫ�������һ��(10~20)��ȫƾ��ƷӴ\r\n#r��ʾ#k��#b��ɫ��Ҷ#k��ͨ����ɱ#g����#k����");
            }else if (selection==4){//���ѱ�
				fstype=5;
				cm.sendNext("��Ŀǰѡ�����#r�漴����װ��ȫ����(20~50)#k\r\n�����Ŀǰ��Ҫ��������2000���ѱ�\r\n#bע��,����100%���ʳɹ�Ӵ#k,��Ȼ�Ͳ��õ���ʧ����~\r\nʲô���漴����ȫ�����أ�����ѡ��Ҫ�ӵ�װ���󣬻��漴����װ����ȫ�������һ��(20~50)��ȫƾ��ƷӴ");
            }else if (selection==5){//���˽�ֺ
				fstype=6;
				cm.sendNext("��Ŀǰѡ�����#r�漴����װ��ȫ����(10~20)#k\r\n�����Ŀǰ��Ҫ��������1Eð�ձ�+100�������˽�ֺ\r\n#bע�⣺50%���ʳɹ�#k,��Ȼʧ�ܻ᷵����һ��������ѷ���\r\nʲô���漴����ȫ�����أ�����ѡ��Ҫ�ӵ�װ���󣬻��漴����װ����ȫ�������һ��(10~20)��ȫƾ��ƷӴ\r\n#r��ʾ#k��#b�����˽�ֺ#k��ͨ����ɱ#g������#k����");
            }else if (selection==1){
				fstype=2;
				cm.sendSimple("Ŀǰֻ����#rװ����#k��#r�ֽ���#k������λ������������Ҫ���ǵ��������������޷������װ�����⣬û�еط��ţ�#r����㲻��Ҫĳ��װ������ѡ�����ɾ��~�ǲ��Ǻܷ��㣿ע�⣬�˴�����Ϊ���ɻָ�������������׼������ǰһ���������.\r\n#b#L1#��Ҫ��������װ����ĳһ��װ��#l\r\n#L2#��Ҫ���������ֽ���ĳһ��װ��#l");
            }else if (selection==6){
				cm.dispose();
				cm.openNpc(9310073, 1);
			}
       } else if (status == 2) {
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
			if(fstype==4){//��ɫ��Ҷ
				fstype=15;
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
			if(fstype==5){//���ѱ�
				fstype=16;
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
			if(fstype==6){//��ֺ
				fstype=17;
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
		}else if(status == 3){
			if(fstype==13){
				if(cm.getMeso() < price || cm.haveItem(4310034,0)==false){
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
				cm.gainItem(4310034,0);
				cm.sendOk("��ϲ��ɹ�������쿴��İ����ɣ�");
				cm.worldMessage("[��������]����ϲ[" + cm.getChar().getName() + "]���г�Kin����ʹ�������Ϊ����������1���Ҿ����");
				cm.dispose();
				}else{
				cm.gainMeso(-price/2);
				cm.gainItem(4310034,0);
				cm.sendOk("���ź�������ʧ��");
				}
				cm.dispose();
				return;
			}
			if(fstype==14){
				if(cm.getMeso() < price || cm.haveItem(4310003,0)==false){
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
				cm.gainItem(4310003,0);
				cm.sendOk("��ϲ��ɹ�������쿴��İ����ɣ�");
				cm.worldMessage("[��������]����ϲ[" + cm.getChar().getName() + "]���г�Kin����ʹ�ûƽ��ҶΪ����������1���Ҿ����");
				cm.dispose();
				}else{
				cm.gainMeso(-price/2);
				cm.gainItem(4310003,0);
				cm.sendOk("���ź�������ʧ��");
				}
				cm.dispose();
				return;
			}
			if(fstype==15){
				if(cm.getMeso() < price || cm.haveItem(4032733,0)==false){
					cm.sendOk("�Բ���,��û���㹻��ð�ձ�,������û���㹻��#z4032733#");
					cm.dispose();
					return;
				}
				var chance1 = Math.floor(Math.random()*2);
				if(chance1==1){
				var item = cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy();
				var ii = Packages.server.MapleItemInformationProvider.getInstance();
				var chance = Math.floor(Math.random()*100);
				var lvsj = Math.floor(Math.random()*10)+10;
				cm.gainMeso(-price);
				cm.gainItem(4032733,0);
				if(chance<=5){//watk
				item.setWatk(item.getWatk()*1+lvsj);
				Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
				Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(),item,false);
				cm.sendOk("��ϲ���ɹ���װ��������:#r"+lvsj+"#k����.");
				cm.worldMessage("[װ������]����ϲ[" + cm.getChar().getName() + "]���г�Kin����ʹ�òʺ��Ҷ�����������Ĺ���");
				}else if(chance>5 && chance<=20){//matk
				item.setMatk(item.getMatk()*1+lvsj);
				Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
				Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(),item,false);
				cm.sendOk("��ϲ���ɹ���װ��������:#r"+lvsj+"#kħ��.");
				cm.worldMessage("[װ������]����ϲ[" + cm.getChar().getName() + "]���г�Kin����ʹ�òʺ��Ҷ������������ħ������");
				}else if(chance>20 && chance<=40){//str
				item.setStr(item.getStr()*1+lvsj);
				Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
				Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(),item,false);
				cm.sendOk("��ϲ���ɹ���װ��������:#r"+lvsj+"#k����.");
				cm.worldMessage("[װ������]����ϲ[" + cm.getChar().getName() + "]���г�Kin����ʹ�òʺ��Ҷ����������������");
				}else if(chance>40 && chance<=60){//dex
				item.setDex(item.getDex()*1+lvsj);
				Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
				Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(),item,false);
				cm.sendOk("��ϲ���ɹ���װ��������:#r"+lvsj+"#k����.");
				cm.worldMessage("[װ������]����ϲ[" + cm.getChar().getName() + "]���г�Kin����ʹ�òʺ��Ҷ����������������");
				}else if(chance>60 && chance<=80){//luk
				item.setInt(item.getInt()*1+lvsj);
				Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
				Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(),item,false);
				cm.sendOk("��ϲ���ɹ���װ��������:#r"+lvsj+"#k����.");
				cm.worldMessage("[װ������]����ϲ[" + cm.getChar().getName() + "]���г�Kin����ʹ�òʺ��Ҷ����������������");
				}else if(chance>80){//int
				item.setLuk(item.getLuk()*1+lvsj);
				Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
				Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(),item,false);
				cm.sendOk("��ϲ���ɹ���װ��������:#r"+lvsj+"#k����.");
				cm.worldMessage("[װ������]����ϲ[" + cm.getChar().getName() + "]���г�Kin����ʹ�òʺ��Ҷ����������������");
			}
				}else{
				cm.gainMeso(-price/2);
				cm.gainItem(4032733,0);
				cm.sendOk("���ź�������ʧ��");
				}
				cm.dispose();
				return;
			}
			if(fstype==17){
				if(cm.getMeso() < price || cm.haveItem(4000054,0)==false){
					cm.sendOk("�Բ���,��û���㹻��ð�ձ�,������û���㹻��#z4000054#");
					cm.dispose();
					return;
				}
				var chance1 = Math.floor(Math.random()*2);
				if(chance1==1){
				var item = cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy();
				var ii = Packages.server.MapleItemInformationProvider.getInstance();
				var chance = Math.floor(Math.random()*100);
				var lvsj = Math.floor(Math.random()*10)+10;
				cm.gainMeso(-price);
				cm.gainItem(4032733,0);
				if(chance<=5){//watk
				item.setWatk(item.getWatk()*1+lvsj);
				Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
				Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(),item,false);
				cm.sendOk("��ϲ���ɹ���װ��������:#r"+lvsj+"#k����.");
				cm.worldMessage("[װ������]����ϲ[" + cm.getChar().getName() + "]���г�Kin����ʹ�ð����˽�ֺ�����������Ĺ���");
				}else if(chance>5 && chance<=20){//matk
				item.setMatk(item.getMatk()*1+lvsj);
				Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
				Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(),item,false);
				cm.sendOk("��ϲ���ɹ���װ��������:#r"+lvsj+"#kħ��.");
				cm.worldMessage("[װ������]����ϲ[" + cm.getChar().getName() + "]���г�Kin����ʹ�ð����˽�ֺ������������ħ������");
				}else if(chance>20 && chance<=40){//str
				item.setStr(item.getStr()*1+lvsj);
				Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
				Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(),item,false);
				cm.sendOk("��ϲ���ɹ���װ��������:#r"+lvsj+"#k����.");
				cm.worldMessage("[װ������]����ϲ[" + cm.getChar().getName() + "]���г�Kin����ʹ�ð����˽�ֺ����������������");
				}else if(chance>40 && chance<=60){//dex
				item.setDex(item.getDex()*1+lvsj);
				Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
				Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(),item,false);
				cm.sendOk("��ϲ���ɹ���װ��������:#r"+lvsj+"#k����.");
				cm.worldMessage("[װ������]����ϲ[" + cm.getChar().getName() + "]���г�Kin����ʹ�ð����˽�ֺ����������������");
				}else if(chance>60 && chance<=80){//luk
				item.setInt(item.getInt()*1+lvsj);
				Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
				Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(),item,false);
				cm.sendOk("��ϲ���ɹ���װ��������:#r"+lvsj+"#k����.");
				cm.worldMessage("[װ������]����ϲ[" + cm.getChar().getName() + "]���г�Kin����ʹ�ð����˽�ֺ����������������");
				}else if(chance>80){//int
				item.setLuk(item.getLuk()*1+lvsj);
				Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
				Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(),item,false);
				cm.sendOk("��ϲ���ɹ���װ��������:#r"+lvsj+"#k����.");
				cm.worldMessage("[װ������]����ϲ[" + cm.getChar().getName() + "]���г�Kin����ʹ�ð����˽�ֺ����������������");
			}
				}else{
				cm.gainMeso(-price/2);
				cm.gainItem(4000054,0);
				cm.sendOk("���ź�������ʧ��");
				}
				cm.dispose();
				return;
			}
			if(fstype==16){
				if(cm.getHyPay(1) < 0){
					cm.sendOk("�Բ���,��û���㹻�����ѱ�");
					cm.dispose();
					return;
				}
				var item = cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy();
				var ii = Packages.server.MapleItemInformationProvider.getInstance();
				var chance = Math.floor(Math.random()*100);
				var lvsj = Math.floor(Math.random()*30)+20;
				cm.addHyPay(0);
				if(chance<=5){//watk
				item.setWatk(item.getWatk()*1+lvsj);
				Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
				Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(),item,false);
				cm.sendOk("��ϲ���ɹ���װ��������:#r"+lvsj+"#k����.");
				cm.worldMessage("[װ������]����ϲ[" + cm.getChar().getName() + "]���г�Kin����ʹ�����ѱ�Ҷ�����������Ĺ���");
				}else if(chance>5 && chance<=20){//matk
				item.setMatk(item.getMatk()*1+lvsj);
				Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
				Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(),item,false);
				cm.sendOk("��ϲ���ɹ���װ��������:#r"+lvsj+"#kħ��.");
				cm.worldMessage("[װ������]����ϲ[" + cm.getChar().getName() + "]���г�Kin����ʹ�����ѱ�Ҷ������������ħ������");
				}else if(chance>20 && chance<=40){//str
				item.setStr(item.getStr()*1+lvsj);
				Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
				Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(),item,false);
				cm.sendOk("��ϲ���ɹ���װ��������:#r"+lvsj+"#k����.");
				cm.worldMessage("[װ������]����ϲ[" + cm.getChar().getName() + "]���г�Kin����ʹ�����ѱ�Ҷ����������������");
				}else if(chance>40 && chance<=60){//dex
				item.setDex(item.getDex()*1+lvsj);
				Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
				Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(),item,false);
				cm.sendOk("��ϲ���ɹ���װ��������:#r"+lvsj+"#k����.");
				cm.worldMessage("[װ������]����ϲ[" + cm.getChar().getName() + "]���г�Kin����ʹ�����ѱ�Ҷ����������������");
				}else if(chance>60 && chance<=80){//luk
				item.setInt(item.getInt()*1+lvsj);
				Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
				Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(),item,false);
				cm.sendOk("��ϲ���ɹ���װ��������:#r"+lvsj+"#k����.");
				cm.worldMessage("[װ������]����ϲ[" + cm.getChar().getName() + "]���г�Kin����ʹ�����ѱ�Ҷ����������������");
				}else if(chance>80){//int
				item.setLuk(item.getLuk()*1+lvsj);
				Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
				Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(),item,false);
				cm.sendOk("��ϲ���ɹ���װ��������:#r"+lvsj+"#k����.");
				cm.worldMessage("[װ������]����ϲ[" + cm.getChar().getName() + "]���г�Kin����ʹ�����ѱ�Ҷ����������������");
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

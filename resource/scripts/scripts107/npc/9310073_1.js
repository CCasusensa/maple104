importPackage(java.util);
importPackage(net.sf.odinms.client);
importPackage(net.sf.odinms.server);
importPackage(net.sf.odinms.client.inventory);

var status = 0;
var typed=0;
var selStr;
var xold;
var xnew;
var itemtype=0;
var onesel=0;

var items1=new Array("1452111","1462099","1402095","1422066","1412065","1312065","1322096","1302152","1442116","1432086","1382104","1372084","1332130","1472122","1482084","1492085","1532018","1342036");
var items2=new Array("1302081","1312037","1322060","1332073","1332074","1372044","1382057","1402046","1412033","1422037","1432047","1442063","1452057","1462050","1472068","1482023","1492023","1302086","1312038","1322061","1332075","1332076","1372045","1382059","1402047","1412034","1422038","1432049","1442067","1452059","1462051","1472071","1482024","1492025");
var items3=new Array("1482085","1402096","1422067","1412066","1452112","1342035","1332131","1492086","1522017","1532017","1472123","1382105","1312066","1462100","1322097","1372085","1302153","1442117","1432087");
var items4=new Array("1402073","1462076","1452058","1112584","1112584","1122104","1132085","1032093","1012239");



function start() {
    cm.sendNext("#r��õ����߹�����װ������ս��߹�������,��ֻҪ����������ͬ����Ʒ���Ϳ��Ժϳɸ��߼�������������˵��һ�£�\r\n--------------------------------------------------#k\r\n�������#b������ͨ��110˫�ֽ�#k����ô�����Һ��ҽ�����һ������Ϊ��[#r �� #k]��110��˫�ֽ��������϶�Ҫ#b����ͨ�ĸ�#kӴ\r\n--------------------------------------------------\r\n���������������Ϊ��[ #r��#k ]��110��˫�ֽ������Լ������Һϳ�����Ϊ��[ #r��#k ]��110��˫�ֽ�.\r\n--------------------------------------------------\r\n#k�������׺ϳɵķ����˰ɣ�\r\n ������Ҳû��ϵ�������һ��������ʽ�ĺϳ�һ�ѿ����ϳ�����û�е�װ��������ϵ�ͷ�QQ�ṩװ���������~#rע�⣬���ֻ�ܺϳ���Ȼ��װ�����ӹ����Ե�װ���ϳɵĻ����Իᶪʧ��������ע��!!!");
}

function action(mode, type, selection) {
    if (mode == -1)
        cm.dispose();
    else {
        if (mode == 0) {
            cm.dispose();
        } else
            status++;
        if (status == 1){
			cm.sendSimple("Ŀǰֻ������120-140�������ĺϳɣ�\r\n#rע�⣬���ֻ�ܺϳ���Ȼ��װ�����ӹ����Ե�װ���ϳɵĻ����Իᶪʧ��������ע��!!!\r\n#b\r\n#L0#>>>>��ͨװ���ϳɢ���װ��#l\r\n#L1#>>>>����װ���ϳɢ���װ��#l\r\n#L2#>>>>����װ���ϳɢ���װ��#l\r\n#L3#>>>>����װ���ϳɢ���װ��#l\r\n#L4#>>>>����װ���ϳɢ���װ��#l\r\n#L5#>>>>����װ���ϳɢ���װ��#l\r\n#L6#>>>>����װ���ϳɢ���װ��#l\r\n#L7#>>>>����װ���ϳɢ���װ��#l\r\n#L8#>>>>����װ���ϳ��ռ�����#l");
			
		}else if (status == 2){
			if(selection==0){
				xold=".";
				xnew="��";
			}else if(selection==1){
				xold="��";
				xnew="��";
			}else if(selection==2){
				xold="��";
				xnew="��";
			}else if(selection==3){
				xold="��";
				xnew="��";
			}else if(selection==4){
				xold="��";
				xnew="��";
			}else if(selection==5){
				xold="��";
				xnew="��";
			}else if(selection==6){
				xold="��";
				xnew="��";
			}else if(selection==7){
				xold="��";
				xnew="��";
			}else if(selection==8){
				xold="��";
				xnew="[�ռ�����]";
			}
			cm.sendSimple("��ѡ����Ҫ�ϳɵ��������:\r\n#rע�⣬���ֻ�ܺϳ���Ȼ��װ�����ӹ����Ե�װ���ϳɵĻ����Իᶪʧ��������ע��!!!\r\n#b\r\n#L1#140��װ��#l #L2#120��װ��#l#L3#130��װ��#l #L4#����װ��#l");
		}else if (status == 3){
			selStr = " ��ѡ����Ҫ�ϳɵ�����.ÿ�ϳ�һ�������10��30����.\r\n";
			itemtype=selection;
			if(selection==1){
				for (var i = 0; i < items1.length; i++) {
					selStr += "\r\n#b#L" + i + "#�ϳ�[#d#z" +items1[i]+"##b]"+xnew+" ��Ҫ2�� #d#z"+items1[i]+"##b"+xold+"��#r[��ʼ�ϳ�]#l";
				}
			}
			if(selection==2){
				for (var i = 0; i < items2.length; i++) {
					selStr += "\r\n#b#L" + i + "#�ϳ�[#d#z" +items2[i]+"##b]"+xnew+" ��Ҫ2�� #d#z"+items2[i]+"##b"+xold+"��#r[��ʼ�ϳ�]#l";
				}
			}
			if(selection==3){
				for (var i = 0; i < items3.length; i++) {
					selStr += "\r\n#b#L" + i + "#�ϳ�[#d#z" +items3[i]+"##b]"+xnew+" ��Ҫ2�� #d#z"+items3[i]+"##b"+xold+"��#r[��ʼ�ϳ�]#l";
				}
			}
			if(selection==4){
				for (var i = 0; i < items4.length; i++) {
					selStr += "\r\n#b#L" + i + "#�ϳ�[#d#z" +items4[i]+"##b]"+xnew+" ��Ҫ2�� #d#z"+items4[i]+"##b"+xold+"��#r[��ʼ�ϳ�]#l";
				}
			}
			cm.sendSimple(selStr);
		}else if (status == 4){
			if(itemtype==1){
				onesel=items1[selection];//ѡ�����ƷID
			}
			if(itemtype==2){
				onesel=items2[selection];//ѡ�����ƷID
			}
			if(itemtype==3){
				onesel=items3[selection];//ѡ�����ƷID
			}
			if(itemtype==4){
				onesel=items4[selection];//ѡ�����ƷID
			}
			var inv = cm.getInventory(1);
			var it;
			var itemids;
			var checkitem=0;
			var itemsrc=0;
			var itemsrc2=0;
			for (var i = 0; i <= 96; i++) {
				it = inv.getItem(i);
				if (it != null) {
					itemids = it.getItemId();
					if(itemids==onesel){//����Ƿ���������Ʒ
						if(xold.equals(".")==true){
							if(it.getOwner().length()>0){
							}else{
								checkitem+=1;
								if(checkitem==1){
									itemsrc=i;
								}
								if(checkitem==2){
									itemsrc2=i;
									break;//����FOR
								}
							}
						}else if(it.getOwner().length()>0){//����Ƿ��мӸ��ǵ�
							if(it.getOwner().substring(0, 1).equals(xold)==true){//����Ƿ���ż��ǵ�����
								checkitem+=1;
								if(checkitem==1){
									itemsrc=i;
								}
								if(checkitem==2){
									itemsrc2=i;
									break;//����FOR
								}
							}
						}
					}
				}
			}
			if(checkitem==2){//��⵽��Ʒ����ʼ�ϳɳ���
				var itemd = cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(itemsrc).copy();
				itemd.setOwner(xnew);
				var hwchancess= Math.floor(Math.random()*10+5);
				if(itemd.getMatk()!=0){
					itemd.setMatk(itemd.getMatk()*1+hwchancess);
				}
				if(itemd.getWatk()!=0){
					itemd.setWatk(itemd.getWatk()*1+hwchancess);
				}
				var ii = Packages.server.MapleItemInformationProvider.getInstance();
				cm.worldMessage("��"+ cm.getChar().getName() +"��ͨ���г�NPC[ħ�����]�ϳɳ���������~��ҹ�ϲ��~");
				Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, itemsrc, 1, true);
				Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, itemsrc2, 1, true);
				Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(),itemd,false);
				cm.sendOk("��ϲ���ϳɳɹ�.\r\n�۳�����#r"+xold+"#v"+onesel+"##k.�ڸ���һ���µ�#r"+xnew+"#v"+onesel+"#.");
			}else{
				cm.sendOk("�Բ�����û������"+xold+"#v"+onesel+"#.���Ժϳ�"+xnew+"#v"+onesel+"#ʧ��.");
			}
			cm.dispose();
			return;
		}//end stats
    }
}
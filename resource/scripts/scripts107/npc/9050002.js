importPackage(java.util);
importPackage(net.sf.odinms.client.inventory);
importPackage(org.server);
importPackage(net.sf.odinms.tools);

var itemzb=new Array("1482085","1342035","1342036","1402096","1422067","1412066","1312066","1322097","1302153","1442117","1432087","1492086","1332131","1462100","1452112","1382105","1472123","1482084","1402095","1302152","1442116","1432086","1452111","1462099","1492085","1332130","1382104","1472122");
var status = 0;
var typed=0;


function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (mode == 0 && status >= 0) {
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			cm.sendSimple("ϵͳ�������ȡ��Ʒ�����п��ܻ�����벻���ľ�ϲ��#b\r\n#L3#ʹ��1��#v3993003#�齱#l");
		}else if (status == 1){
			if(selection==3){
				typed=3;
				cm.sendSimple("���ѣ��������һ�Żƽ��Ҷ#v3993003#������������Գ齱Ŷ~��˵��û������~������ȫ��#b�ñ���#k..�����ʻƽ��Ҷ�ĳ������ݴ�ֻ��#b��#k���г�Ŷ~�г�ÿ���Сʱ����һ����ץ��ȥˢ��~#b\r\n#L1#��ʼ�齱[��Ҫ1�Żƽ��Ҷ#v3993003#]#l",2);
			}else if(selection==4){
				typed=4;
				cm.sendSimple("���ѣ��������һ����ɫ����#v3993003#������������Գ齱Ŷ~��˵��û������~#r100%�н�#k,������ȫ��#b�ռ�������130��-140��װ��[��Ȼ��������300�����ϣ��ϲ��ⶥ���Ϳ����ʵ��+�����ˣ���֮���д�װ����>û�κ����⣡]��#k..�����ʺ�ɫ�����ĳ������ݴ�ֻ��#b�ɵ��ϵ�#k�������г�Ŷ~ץ��ȥˢ��~#b#e\r\n#L1#��ʼ�齱[��Ҫ1����ɫ����#v3993003#]#l",2);
			}else{
				cm.dispose();
			}
		}else if (status == 2){
			if(typed==3){
				if(selection==1){
					if(cm.haveItem(3993003,1)==true){
						var randx=Math.floor((Math.random()*26))+1;
						if(randx==1){
							cm.gainItem(2340000,5);
							cm.gainItem(3993003,-1);
							//cm.itemlaba("��"+ cm.getChar().getName() +"�����г�������ʹ�ûƽ��Ҷ���5��ף������~");//��һ�ֻ�ɫ
							cm.sendOk("#e��ϲ�������5��ף������~~~~~");
						}
						if(randx==2){
							cm.gainItem(1402037,1);
							cm.gainItem(3993003,-1);
							//cm.itemlaba("��"+ cm.getChar().getName() +"�����г�������ʹ�ûƽ��Ҷ���������~");//��һ�ֻ�ɫ
							cm.sendOk("#e��ϲ�������������~~~~~");
						}
						if(randx==3){
							cm.gainItem(1092022,1);
							cm.gainItem(3993003,-1);
							cm.itemlaba("��"+ cm.getChar().getName() +"�����г�������ʹ�ûƽ��Ҷ��õ�ɫ��~");//��һ�ֻ�ɫ
							cm.sendOk("#e��ϲ����������:��ɫ��~~~~~");
						}
						if(randx==4){
							cm.gainItem(1702289,1);
							cm.gainItem(3993003,-1);
							//cm.itemlaba("��"+ cm.getChar().getName() +"�����г�������ʹ�ûƽ��Ҷ��ûʼҺ�������~");
							cm.sendOk("#e��ϲ����������:�ʼҺ�������~~~~~");
						}
						if(randx==5){
							cm.gainItem(1702288,1);
							cm.gainItem(3993003,-1);
							//cm.itemlaba("��"+ cm.getChar().getName() +"�����г�������ʹ�ûƽ��Ҷ��ñ���������~");
							cm.sendOk("#e��ϲ����������:����������~~~~~");
						}
						if(randx==6){
							cm.gainItem(1702287,1);
							cm.gainItem(3993003,-1);
							//cm.itemlaba("��"+ cm.getChar().getName() +"�����г�������ʹ�ûƽ��Ҷ��û��鶷ʦ����~");
							cm.sendOk("#e��ϲ����������:���鶷ʦ����~~~~~");
						}
						if(randx==7){
							cm.gainItem(1702275,1);
							cm.gainItem(3993003,-1);
							cm.itemlaba("��"+ cm.getChar().getName() +"�����г�������ʹ�ûƽ��Ҷ��ûʼҲʺ�ɡ~");
							cm.sendOk("#e��ϲ����������:�ʼҲʺ�ɡ~~~~~");
						}
						if(randx==8){
							cm.gainItem(1702191,1);
							cm.gainItem(3993003,-1);
							//cm.itemlaba("��"+ cm.getChar().getName() +"�����г�������ʹ�ûƽ��Ҷ��òʺ罣~");
							cm.sendOk("#e��ϲ����������:�ʺ罣~~~~~");
						}
						if(randx==9){
							cm.makeitem(1462076,15,25,33,55,129,0,7,"");
							cm.gainItem(3993003,-1);
							//cm.itemlaba("��"+ cm.getChar().getName() +"�����г�������ʹ�ûƽ��Ҷ��ó�����װ������֮��~");
							cm.sendOk("#e��ϲ������˳�����װ��:����֮��~~~~~");
						}
						if(randx==10){
							cm.makeitem(1452058,18,25,33,15,125,0,7,"");
							cm.gainItem(3993003,-1);
							//cm.itemlaba("��"+ cm.getChar().getName() +"�����г�������ʹ�ûƽ��Ҷ��ó�����װ��ˮ���鹭~");
							cm.sendOk("#e��ϲ������˳�����װ��:ˮ���鹭~~~~~");
						}
						if(randx==11){
							cm.makeitem(1402073,10,20,23,15,115,0,7,"");
							cm.gainItem(3993003,-1);
							//cm.itemlaba("��"+ cm.getChar().getName() +"�����г�������ʹ�ûƽ��Ҷ��ó�����װ����˹��¡ʥ��~");
							cm.sendOk("#e��ϲ������˳�����װ��:��˹��¡ʥ��~~~~~");}
						if(randx==12){
							cm.gainItem(2022176,28);
							cm.gainItem(3993003,-1);
							cm.sendOk("#e��ϲ������˳���ҩˮ~~~~~");}
						if(randx==13){
							cm.gainItem(2044703,1);
							cm.gainItem(3993003,-1);
							//cm.itemlaba("��"+ cm.getChar().getName() +"�����г�������ʹ�ûƽ��Ҷ���ȭ�׹����سɾ�~");
							cm.sendOk("#e��ϲ�������ȭ�׹����سɾ�~~~~~");}
						if(randx==14){
							cm.gainItem(2044603,1);
							cm.gainItem(3993003,-1);
							//cm.itemlaba("��"+ cm.getChar().getName() +"�����г�������ʹ�ûƽ��Ҷ����󹥻��سɾ�~");
							cm.sendOk("#e��ϲ��������󹥻��سɾ�~~~~~");}
						if(randx==15){
							cm.gainItem(2044503,1);
							cm.gainItem(3993003,-1);
							cm.itemlaba("��"+ cm.getChar().getName() +"�����г�������ʹ�ûƽ��Ҷ��ù������سɾ�~");
							cm.sendOk("#e��ϲ������˹������سɾ�~~~~~");}
						if(randx==16){
							cm.gainItem(2044403,1);
							cm.gainItem(3993003,-1);
							//cm.itemlaba("��"+ cm.getChar().getName() +"�����г�������ʹ�ûƽ��Ҷ���ì�����سɾ�~");
							cm.sendOk("#e��ϲ�������ì�����سɾ�~~~~~");}
						if(randx==17){
							cm.gainItem(2044303,1);
							cm.gainItem(3993003,-1);
							//cm.itemlaba("��"+ cm.getChar().getName() +"�����г�������ʹ�ûƽ��Ҷ���ǹ�����سɾ�~");
							cm.sendOk("#e��ϲ�������ǹ�����سɾ�~~~~~");}
						if(randx==18){
							cm.gainItem(2044203,1);
							cm.gainItem(3993003,-1);
							//cm.itemlaba("��"+ cm.getChar().getName() +"�����г�������ʹ�ûƽ��Ҷ���˫�ֶ��������سɾ�~");
							cm.sendOk("#e��ϲ�������˫�ֶ��������سɾ�~~~~~");}
						if(randx==19){
							cm.gainItem(2044103,1);
							cm.gainItem(3993003,-1);
							//cm.itemlaba("��"+ cm.getChar().getName() +"�����г�������ʹ�ûƽ��Ҷ���˫�ָ������سɾ�~");
							cm.sendOk("#e��ϲ�������˫�ָ������سɾ�~~~~~");}
						if(randx==20){
							cm.gainItem(2044003,1);
							cm.gainItem(3993003,-1);
							//cm.itemlaba("��"+ cm.getChar().getName() +"�����г�������ʹ�ûƽ��Ҷ���˫�ֽ������سɾ�~");
							cm.sendOk("#e��ϲ�������˫�ֽ������سɾ�~~~~~");}
						if(randx==21){
							cm.gainItem(2043803,1);
							cm.gainItem(3993003,-1);
							//cm.itemlaba("��"+ cm.getChar().getName() +"�����г�������ʹ�ûƽ��Ҷ��ó���ħ���سɾ�~");
							cm.sendOk("#e��ϲ������˳���ħ���سɾ�~~~~~");}
						if(randx==22){
							cm.gainItem(2043703,1);
							cm.gainItem(3993003,-1);
							//cm.itemlaba("��"+ cm.getChar().getName() +"�����г�������ʹ�ûƽ��Ҷ��ö��ȹ����سɾ�~");
							cm.sendOk("#e��ϲ������˶��ȹ����سɾ�~~~~~");}
						if(randx==23){
							cm.gainItem(2043303,1);
							cm.gainItem(3993003,-1);
							//cm.itemlaba("��"+ cm.getChar().getName() +"�����г�������ʹ�ûƽ��Ҷ��ö̽������سɾ�~");
							cm.sendOk("#e��ϲ������˶̽������سɾ�~~~~~");
							}
						if(randx==24){
							cm.gainItem(2043203,1);
							cm.gainItem(3993003,-1);
							//cm.itemlaba("��"+ cm.getChar().getName() +"�����г�������ʹ�ûƽ��Ҷ��õ��ֶ��������سɾ�~");
							cm.sendOk("#e��ϲ������˵��ֶ��������سɾ�~~~~~");
							}
						if(randx==25){
							cm.gainItem(2043103,1);
							cm.gainItem(3993003,-1);
							//cm.itemlaba("��"+ cm.getChar().getName() +"�����г�������ʹ�ûƽ��Ҷ��õ��ָ������سɾ�~");
							cm.sendOk("#e��ϲ������˵��ָ������سɾ�~~~~~");
							}
						if(randx==26){
							cm.gainItem(2043003,1);
							cm.gainItem(3993003,-1);
							//cm.itemlaba("��"+ cm.getChar().getName() +"�����г�������ʹ�ûƽ��Ҷ��õ��ֽ������سɾ�~");
							cm.sendOk("#e��ϲ������˵��ֽ������سɾ�~~~~~");
							}
						if(randx==27){
							cm.gainItem(2041024,1);
							cm.gainItem(3993003,-1);
							cm.sendOk("#e��ϲ�����������ħ���سɾ�~~~~~");
						}
					}else{
						cm.sendOk("�Բ���~��Ʒ����,����һ��~~");
					}
				}
			cm.dispose();
			return;
			}
			if(typed==4){
				if(selection==1){
				if(cm.haveItem(3993003,1)==false){
					cm.sendOk("�Բ�����û��һ��#v3993003#");
					cm.dispose();
					return;
				}else{
					cm.gainItem(3993003,-1);
				}
				var ii = net.sf.odinms.server.MapleItemInformationProvider.getInstance();
					var chancestr = Math.floor(Math.random()*20+130);
					var chancedex = Math.floor(Math.random()*20+130); 
					var chanceint = Math.floor(Math.random()*20+130);
					var chanceluk = Math.floor(Math.random()*20+130);
					var chancewatk = Math.floor(Math.random()*30+140);
					var chancematk = Math.floor(Math.random()*30+140);
					var chancezb = Math.floor(Math.random()*itemzb.length);
					cm.makeitem(itemzb[chancezb],chancestr,chancedex,chanceint,chanceluk,chancewatk,chancematk,5,"");
					cm.sendOk("��ϲ�����˴γ鵽:#b#i"+itemzb[chancezb]+"#");
					//cm.itemlaba("��"+ cm.getChar().getName() +"�����г�������ʹ�ú�ɫ�����齱���ȫ����<"+ii.getName(itemzb[chancezb])+">~");//��һ�ֻ�ɫ
				}
				cm.dispose();
				return;
			}
		}else if (status == 3){
		}
	}
}

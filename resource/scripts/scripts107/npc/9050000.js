importPackage(java.util);
importPackage(net.sf.odinms.client.inventory);
importPackage(net.sf.odinms.tools);

var itemzb=new Array("1482085","1342035","1342036","1402096","1422067","1412066","1312066","1322097","1302153","1442117","1432087","1492086","1332131","1462100","1452112","1382105","1472123","1482084","1402095","1302152","1442116","1432086","1452111","1462099","1492085","1332130","1382104","1472122");
//�ƽ��Ҷװ��
var itemfy=new Array("2041133","2043103","2043400");
var itemfyd=new Array("1012057","1022048","1032024","1012104","1022079","1002186","1102039","1082102","1092064","1092067","1072153","2041037","2041035","2041039","2041041","2041059","2041060","2041061","2041062","2041102","2041204","2041209","2041313","2041317","2041319","2041502","1302050","1312006","1322009","1332029","1372024","1382021","1402012","1412017","1422026");
var itemboss=new Array("1302054","1302059","1312030","1312031","1322045","1322052","1332051","1332052","1332050","1332049","1372010","1372032","1402035","1402036","1442044","1442045","1432030","1432038","1472063","1472053","1472051","1472052","1472054","2070011","1422027","1422028","1462015","1462016","1462017","1462039","1382035","1382036","1452019","1452020","1452021","1452044","1412021","1412026","1092036","1092037","1092038","1092060","1092042","1041122","1041123","1041124","1032030","1060109","1060110","1060111","1061121","1061122","1061123","1072273","1072268","1072272","1072269","1492012","1492013","1482012","1482013","1082135","1082136","1082137","1082138","1082139","1082140","1082141","1082158","1082151","1082152","1082153","1082154","1082159","1082160","1082213","1082216","1082168","1072268","1082167","1082163","1102048","1050102","1050103","1050104","1050105","1051090","1051091","1051092","1051093","1051105","1051106","1051107","1050106","1050107","1050108","1050096","1050097","1050098","1050099","1050106","1050107","1050108","1002776","1002777","1002778","1002779","1002780","1082234","1082235","1082236","1082237","1082238","1082239","1082240","1082241","1082242","1082243","1052155","1052156","1052157","1052158","1052159","1052160","1052161","1052162","1052163","1052164","1092057","1092058","1092059");
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
			cm.sendSimple("ð�յ�ת�������и���#bװ���������ϡ������ĵ���#k�ޣ�ʹ��ͨ����Ϸ��õĲ�ͬ���߿������������ȡ����ͬ��������Ʒ��ȷ��Ҫ��ʼ����������#b\r\n#L3#ʹ�ûƽ��Ҷ��#l\r\n#L4#ʹ��#z3993003#�齱#l\r\n#L1#ʹ��#z4001126#��ȡ�ƽ��Ҷװ��,ף����,�سɾ����#l\r\n#L7#[��ս]BOSS�ս���(����BOSS��Ʒ���ռ�װ��)#l");
		}else if (status == 1){
			if(selection==1){
				typed=1;
				cm.sendSimpleS("���������100����Ҷ#v4001126#���Ϳ�����������齱��#b����[��]�ƽ��Ҷװ�������ܳ鵽ף�����ᣬ�سɾ��ᣬ�������������ǣ���Ҷװ��ר��[������]Ǳ�������ᣬ[������]����ħ����#k>����Ҷװ������Ǳ��,�����һ�°�!#r\r\n�ƽ��Ա���з�Ҷװ�����ʽ�����1.2��\r\n�׽��Ա���з�Ҷװ�����ʽ�����1.4��\r\n�����Ա���з�Ҷװ�����ʽ�����1.6��.\r\n#b#L1#ֱ��ʹ��100�ŷ�Ҷ�齱#l\r\n#L2#ʹ��100�ŷ�Ҷ#r(+1000���ѱ�)#b(�����н�2������)#l",2);
			}
			if(selection==7){
				typed=7;
				cm.sendNext("����Ҫ���µ���Ʒ:\r\n#v4001085# x 1(Ƥ��Ŭ˹BOSS����)\r\n#v4001084# x 1(����BOSS����)\r\n#v4001083# x 1(����BOSS����)\r\n#r������ռ��������ϵ���,������һ���齱,�ҽ��������100~120��װ��,�������벻��Ҫ���Ҷ�����ȡ����������ߣ�\r\n#g#ePs:������������Ա,���װ�����ʽ��������.");
			}
			if(selection==3){
				typed=3;
				cm.sendSimpleS("���ѣ�����������Żƽ��Ҷ#v4310003#������������Գ齱Ŷ~��˵��û������~������ȫ��#b�ñ���#k..�����ʻƽ��Ҷ�ĳ������ݴ�ת��һ�ξͻ�������һ��Ӵ��ץ��ȥˢ��~#b\r\n#L1#��ʼ�齱[��Ҫ5�Żƽ��Ҷ#v4310003#]#l",2);
			}
			if(selection==4){
				typed=4;
				cm.sendSimpleS("���ѣ��������һ����ɫ����������������Գ齱Ŷ~��˵��û������~#r100%�н�#k,������ȫ��#b�ռ�������130��-140��װ��[��Ȼ��������300�����ϣ��ϲ��ⶥ���Ϳ����ʵ��+�����ˣ���֮���д�װ����>û�κ����⣡]��#k..�����ʺ�ɫ�����ĳ������ݴ�ֻ��#b��ս����#k�������г�Ŷ~ץ��ȥˢ��~#b#e\r\n#L1#��ʼ�齱[��Ҫ1����ɫ����]#l",2);
			}
			if(selection==5){
				cm.openNpc(9050002);
			}
		}else if (status == 2){
			if(typed==1){
				var ii = Packages.server.MapleItemInformationProvider.getInstance();
				var chance1 = Math.floor(Math.random()*100+1);
				var chance2 =0;
				if(cm.haveItem(4001126,100)==true){
					cm.gainItem(4001126,-100);
				}else{
					cm.sendOk("��Ҫ100����Ҷ���ܳ齱 .");
					cm.dispose();
					return;
				}
				if(selection==1){
					if(chance1>=1){
						chance2 = Math.floor(Math.random()*itemfy.length);
						cm.gainItem(itemfy[chance2],1);
						cm.worldMessage("��"+ cm.getChar().getName() +"�����г�[������]��ʹ�÷�Ҷ�齱���["+ii.getName(itemfy[chance2])+"]���һ��ϲ��.");
						cm.sendOk("��ϲ������ã�#r "+ii.getName(itemfy[chance2])+" #k .");
						cm.dispose();
						return;
					}else{
						chance2 = Math.floor(Math.random()*itemfyd.length);
						cm.gainItem(itemfyd[chance2],1);
						cm.sendOk("��ϲ������ã�#r "+ii.getName(itemfyd[chance2])+" #k .");
						cm.dispose();
						return;
					}
				}else{
					if(cm.getHyPay(1) >= 1000){
						cm.addHyPay(1000);
					}else{
						cm.sendOk("�Բ�����û��1000���ѱ� .");
						cm.dispose();
						return;
					}
					if(chance1>=20 && chance1<=35){
						chance2 = Math.floor(Math.random()*itemfy.length);
						cm.gainItem(itemfy[chance2],1);
						cm.worldMessage("��"+ cm.getChar().getName() +"�����г�[������]��ʹ�÷�Ҷ�齱���["+ii.getName(itemfy[chance2])+"]���һ��ϲ��.");
						cm.sendOk("��ϲ������ã�#r "+ii.getName(itemfy[chance2])+" #k .");
						cm.dispose();
						return;
					}else{
						chance2 = Math.floor(Math.random()*itemfyd.length);
						cm.gainItem(itemfyd[chance2],1);
						cm.sendOk("��ϲ������ã�#r "+ii.getName(itemfyd[chance2])+" #k .");
						cm.dispose();
						return;
					}
				}
				cm.dispose();
				return;
			}
			if(typed==7){
				if(cm.haveItem(4001085,1)==true && cm.haveItem(4001084,1)==true && cm.haveItem(4001083,1)==true){
					cm.gainItem(4001085,-1);
					cm.gainItem(4001084,-1);
					cm.gainItem(4001083,-1);
				}else{
					cm.sendOk("��û���ռ�������Ҫ����Ʒ,����Ҫ:#b\r\n#v4001085# x 1(Ƥ��Ŭ˹BOSS����)\r\n#v4001084# x 1(����BOSS����)\r\n#v4001083# x 1(����BOSS����)");
					cm.dispose();
					return;
				}
				var chance = Math.floor(Math.random()*itemboss.length);
				var ii = Packages.server.MapleItemInformationProvider.getInstance();
				if(itemboss[chance]>0){
					cm.gainItem(itemboss[chance],1);
					cm.worldMessage("<BOSS�齱>"+cm.getChar().getName()+" : "+"��[��Ҷ����]��ʹ��BOSS��Ʒ�齱���["+ii.getName(itemboss[chance])+"]���һ��ϲ��.");
					cm.sendOk("��ϲ�������Ʒ��#v"+itemboss[chance]+"#");
				}else{
					cm.sendOk("���ź���ʲô��û�еõ���");
				}
				cm.dispose();
				return;
			}
			if(typed==3){
				if(selection==1){
					if(cm.haveItem(4310003,5)==true){
						var randx=Math.floor((Math.random()*26))+1;
						if(randx==1){
							cm.gainItem(2340000,5);
							cm.gainItem(4310003,-5);
							cm.worldMessage("��"+ cm.getChar().getName() +"�����г�������ʹ�ûƽ��Ҷ���5��ף������~");//��һ�ֻ�ɫ
							cm.sendOk("#e��ϲ�������5��ף������~~~~~");
						}
						if(randx==2){
							cm.gainItem(1402037,1);
							cm.gainItem(4310003,-5);
							cm.worldMessage("��"+ cm.getChar().getName() +"�����г�������ʹ�ûƽ��Ҷ���������~");//��һ�ֻ�ɫ
							cm.sendOk("#e��ϲ�������������~~~~~");
						}
						if(randx==3){
							cm.gainItem(1092022,1);
							cm.gainItem(4310003,-5);
							cm.worldMessage("��"+ cm.getChar().getName() +"�����г�������ʹ�ûƽ��Ҷ��õ�ɫ��~");//��һ�ֻ�ɫ
							cm.sendOk("#e��ϲ����������:��ɫ��~~~~~");
						}
						if(randx==4){
							cm.gainItem(1702289,1);
							cm.gainItem(4310003,-5);
							cm.worldMessage("��"+ cm.getChar().getName() +"�����г�������ʹ�ûƽ��Ҷ��ûʼҺ�������~");
							cm.sendOk("#e��ϲ����������:�ʼҺ�������~~~~~");
						}
						if(randx==5){
							cm.gainItem(1702288,1);
							cm.gainItem(4310003,-5);
							cm.worldMessage("��"+ cm.getChar().getName() +"�����г�������ʹ�ûƽ��Ҷ��ñ���������~");
							cm.sendOk("#e��ϲ����������:����������~~~~~");
						}
						if(randx==6){
							cm.gainItem(1702287,1);
							cm.gainItem(4310003,-5);
							cm.worldMessage("��"+ cm.getChar().getName() +"�����г�������ʹ�ûƽ��Ҷ��û��鶷ʦ����~");
							cm.sendOk("#e��ϲ����������:���鶷ʦ����~~~~~");
						}
						if(randx==7){
							cm.gainItem(1702275,1);
							cm.gainItem(4310003,-5);
							cm.worldMessage("��"+ cm.getChar().getName() +"�����г�������ʹ�ûƽ��Ҷ��ûʼҲʺ�ɡ~");
							cm.sendOk("#e��ϲ����������:�ʼҲʺ�ɡ~~~~~");
						}
						if(randx==8){
							cm.gainItem(1702191,1);
							cm.gainItem(4310003,-5);
							cm.worldMessage("��"+ cm.getChar().getName() +"�����г�������ʹ�ûƽ��Ҷ��òʺ罣~");
							cm.sendOk("#e��ϲ����������:�ʺ罣~~~~~");
						}
						if(randx==9){
				var ii = Packages.server.MapleItemInformationProvider.getInstance();
					var type = Packages.constants.GameConstants.getInventoryType(1462076);
					var toDrop = ii.randomizeStats(ii.getEquipById(1462076)).copy(); // ����һ��Equip��
					toDrop.setStr(15); //װ������
					toDrop.setDex(25); //װ������
					toDrop.setInt(33); //װ������
					toDrop.setLuk(55); //װ������
					toDrop.setWatk(129);
					cm.getPlayer().getInventory(type).addItem(toDrop); //�����װ���������
            cm.getC().getSession().write(Packages.tools.MaplePacketCreator.addInventorySlot(type, toDrop)); //ˢ�±���
							cm.gainItem(4310003,-5);
							cm.worldMessage("��"+ cm.getChar().getName() +"�����г�������ʹ�ûƽ��Ҷ��ó�����װ������֮��~");
							cm.sendOk("#e��ϲ������˳�����װ��:����֮��~~~~~");
						}
						if(randx==10){
				var ii = Packages.server.MapleItemInformationProvider.getInstance();
					var type = Packages.constants.GameConstants.getInventoryType(1452058);
					var toDrop = ii.randomizeStats(ii.getEquipById(1452058)).copy(); // ����һ��Equip��
					toDrop.setStr(18); //װ������
					toDrop.setDex(25); //װ������
					toDrop.setInt(33); //װ������
					toDrop.setLuk(15); //װ������
					toDrop.setWatk(125);
					cm.getPlayer().getInventory(type).addItem(toDrop); //�����װ���������
            cm.getC().getSession().write(Packages.tools.MaplePacketCreator.addInventorySlot(type, toDrop)); //ˢ�±���
							cm.gainItem(4310003,-5);
							cm.worldMessage("��"+ cm.getChar().getName() +"�����г�������ʹ�ûƽ��Ҷ��ó�����װ��ˮ���鹭~");
							cm.sendOk("#e��ϲ������˳�����װ��:ˮ���鹭~~~~~");
						}
						if(randx==11){
				var ii = Packages.server.MapleItemInformationProvider.getInstance();
					var type = Packages.constants.GameConstants.getInventoryType(1402073);
					var toDrop = ii.randomizeStats(ii.getEquipById(1402073)).copy(); // ����һ��Equip��
					toDrop.setStr(10); //װ������
					toDrop.setDex(20); //װ������
					toDrop.setInt(23); //װ������
					toDrop.setLuk(15); //װ������
					toDrop.setWatk(115);
					cm.getPlayer().getInventory(type).addItem(toDrop); //�����װ���������
            cm.getC().getSession().write(Packages.tools.MaplePacketCreator.addInventorySlot(type, toDrop)); //ˢ�±���
							cm.gainItem(4310003,-5);
							cm.worldMessage("��"+ cm.getChar().getName() +"�����г�������ʹ�ûƽ��Ҷ��ó�����װ����˹��¡ʥ��~");
							cm.sendOk("#e��ϲ������˳�����װ��:��˹��¡ʥ��~~~~~");}
						if(randx==12){
							cm.gainItem(2022176,28);
							cm.gainItem(4310003,-5);
							cm.sendOk("#e��ϲ������˳���ҩˮ~~~~~");}
						if(randx==13){
							cm.gainItem(2044703,1);
							cm.gainItem(4310003,-5);
							cm.worldMessage("��"+ cm.getChar().getName() +"�����г�������ʹ�ûƽ��Ҷ���ȭ�׹����سɾ�~");
							cm.sendOk("#e��ϲ�������ȭ�׹����سɾ�~~~~~");}
						if(randx==14){
							cm.gainItem(2044603,1);
							cm.gainItem(4310003,-5);
							cm.worldMessage("��"+ cm.getChar().getName() +"�����г�������ʹ�ûƽ��Ҷ����󹥻��سɾ�~");
							cm.sendOk("#e��ϲ��������󹥻��سɾ�~~~~~");}
						if(randx==15){
							cm.gainItem(2044503,1);
							cm.gainItem(4310003,-5);
							cm.worldMessage("��"+ cm.getChar().getName() +"�����г�������ʹ�ûƽ��Ҷ��ù������سɾ�~");
							cm.sendOk("#e��ϲ������˹������سɾ�~~~~~");}
						if(randx==16){
							cm.gainItem(2044403,1);
							cm.gainItem(4310003,-5);
							cm.worldMessage("��"+ cm.getChar().getName() +"�����г�������ʹ�ûƽ��Ҷ���ì�����سɾ�~");
							cm.sendOk("#e��ϲ�������ì�����سɾ�~~~~~");}
						if(randx==17){
							cm.gainItem(2044303,1);
							cm.gainItem(4310003,-5);
							cm.worldMessage("��"+ cm.getChar().getName() +"�����г�������ʹ�ûƽ��Ҷ���ǹ�����سɾ�~");
							cm.sendOk("#e��ϲ�������ǹ�����سɾ�~~~~~");}
						if(randx==18){
							cm.gainItem(2044203,1);
							cm.gainItem(4310003,-5);
							cm.worldMessage("��"+ cm.getChar().getName() +"�����г�������ʹ�ûƽ��Ҷ���˫�ֶ��������سɾ�~");
							cm.sendOk("#e��ϲ�������˫�ֶ��������سɾ�~~~~~");}
						if(randx==19){
							cm.gainItem(2044103,1);
							cm.gainItem(4310003,-5);
							cm.worldMessage("��"+ cm.getChar().getName() +"�����г�������ʹ�ûƽ��Ҷ���˫�ָ������سɾ�~");
							cm.sendOk("#e��ϲ�������˫�ָ������سɾ�~~~~~");}
						if(randx==20){
							cm.gainItem(2044003,1);
							cm.gainItem(4310003,-5);
							cm.worldMessage("��"+ cm.getChar().getName() +"�����г�������ʹ�ûƽ��Ҷ���˫�ֽ������سɾ�~");
							cm.sendOk("#e��ϲ�������˫�ֽ������سɾ�~~~~~");}
						if(randx==21){
							cm.gainItem(2043803,1);
							cm.gainItem(4310003,-5);
							cm.worldMessage("��"+ cm.getChar().getName() +"�����г�������ʹ�ûƽ��Ҷ��ó���ħ���سɾ�~");
							cm.sendOk("#e��ϲ������˳���ħ���سɾ�~~~~~");}
						if(randx==22){
							cm.gainItem(2043703,1);
							cm.gainItem(4310003,-5);
							cm.worldMessage("��"+ cm.getChar().getName() +"�����г�������ʹ�ûƽ��Ҷ��ö��ȹ����سɾ�~");
							cm.sendOk("#e��ϲ������˶��ȹ����سɾ�~~~~~");}
						if(randx==23){
							cm.gainItem(2043303,1);
							cm.gainItem(4310003,-5);
							cm.worldMessage("��"+ cm.getChar().getName() +"�����г�������ʹ�ûƽ��Ҷ��ö̽������سɾ�~");
							cm.sendOk("#e��ϲ������˶̽������سɾ�~~~~~");
							}
						if(randx==24){
							cm.gainItem(2043203,1);
							cm.gainItem(4310003,-5);
							cm.worldMessage("��"+ cm.getChar().getName() +"�����г�������ʹ�ûƽ��Ҷ��õ��ֶ��������سɾ�~");
							cm.sendOk("#e��ϲ������˵��ֶ��������سɾ�~~~~~");
							}
						if(randx==25){
							cm.gainItem(2043103,1);
							cm.gainItem(4310003,-5);
							cm.worldMessage("��"+ cm.getChar().getName() +"�����г�������ʹ�ûƽ��Ҷ��õ��ָ������سɾ�~");
							cm.sendOk("#e��ϲ������˵��ָ������سɾ�~~~~~");
							}
						if(randx==26){
							cm.gainItem(2043003,1);
							cm.gainItem(4310003,-5);
							cm.worldMessage("��"+ cm.getChar().getName() +"�����г�������ʹ�ûƽ��Ҷ��õ��ֽ������سɾ�~");
							cm.sendOk("#e��ϲ������˵��ֽ������سɾ�~~~~~");
							}
						if(randx==27){
							cm.gainItem(2041024,1);
							cm.gainItem(4310003,-5);
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
				var ii = Packages.server.MapleItemInformationProvider.getInstance();
					var chancestr = Math.floor(Math.random()*20+130);
					var chancedex = Math.floor(Math.random()*20+130); 
					var chanceint = Math.floor(Math.random()*20+130);
					var chanceluk = Math.floor(Math.random()*20+130);
					var chancewatk = Math.floor(Math.random()*30+140);
					var chancematk = Math.floor(Math.random()*30+140);
					var chancezb = Math.floor(Math.random()*itemzb.length);
					var type = Packages.constants.GameConstants.getInventoryType(itemzb[chancezb]);
					var toDrop = ii.randomizeStats(ii.getEquipById(itemzb[chancezb])).copy(); // ����һ��Equip��
					toDrop.setStr(chancestr); //װ������
					toDrop.setDex(chancedex); //װ������
					toDrop.setInt(chanceint); //װ������
					toDrop.setLuk(chanceluk); //װ������
					toDrop.setWatk(chancewatk);
					toDrop.setMatk(chancematk);;
					cm.getPlayer().getInventory(type).addItem(toDrop); //�����װ���������
            cm.getC().getSession().write(Packages.tools.MaplePacketCreator.addInventorySlot(type, toDrop)); //ˢ�±���
					cm.sendOk("��ϲ�����˴γ鵽:#b#i"+itemzb[chancezb]+"#");
					cm.worldMessage("��"+ cm.getChar().getName() +"�����г�������ʹ�ú�ɫ�����齱���ȫ����<"+ii.getName(itemzb[chancezb])+">~");//��һ�ֻ�ɫ
				}
				cm.dispose();
				return;
			}
		}else if (status == 3){
		}
	}
}

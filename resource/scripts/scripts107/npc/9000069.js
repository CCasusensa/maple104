importPackage(net.sf.odinms.tools);
var status = 0;
var typed=0;
var mmm = 0;
var lockitems=0;
var hwtext=new Array("�˳���Ư��������Ư����","������ʧȥƤ�����Ŷ���ʲ�����������","�̲���������������'����'��","�㷢ŭһ���ӣ���ʧȥ60����Ҹ���","����������Ů�ˣ��Ӵ�ֻ�м����գ�û�ж����ա�","·����ƽһ���𣬺��������ǰ�ߡ�","�Ҹ��Ǹ��Ƚϼ���Ҫ�ж�����ײŸо��õ���","֪ʶ�����ڿ㣬������������Ҫ","��Ϊʧ�ܵĵ��ͣ���ʵ����̫�ɹ���","Ů��ϲ�����û��������ˣ�����ϲ�������˵�����","�����ˣ��������ٿ�","�������ᣬ��ʪ�����ҵ���","��δ���������ù�ȥ��ȥ","���Ժᵶ����Ц��Ц��֮��ȥ˯��","�����̸���飬̸������Ǯ","�µ���һ���˵Ŀ񻶣�����һȺ�˵Ĺµ�","�㲻�������õģ������������溰�浽","�Ҳ��ǲݴ�����ļ��������ⷢ","��İ�������ģ��ҵ���ȴ����ʱ��","�e�����ĵ�ʱ������ң���Ȼ�Ե����Ƕ����","�㲻�ǵ��ӻ�����Ҫ���Ƕ��Ž㿴","��ʹ����������������ҲҪ�ƻ���ľ","����ֻ����һ��Ƶ�� ��ɺ޵��ǻ�û�й��","�������ı��������ǻ�ı����Ҹ�","Ҫ������ʦ˵����������������Ȼ��������ӳ�ȥ","û����󡣬���Ҳ���į","���ǹ���ҿɳܣ��Ҹ������˷�ֽ","����û�������ֻ�к���ͽ��","����ô��Ǯ Ϊʲô���ù�����ĥ��","����˺͹����Ტ�ۣ����������ҳ�","���������������������ȥ","���������˻�ɴ ��Ҳ����������","����������ܸɵĻ��¶����˰ɣ�û������","������ֻ�������� 1 ��Ҳ���� 2 ��Ҳ����","���⳵˾����˾���е�ս��������Ү! ","˼���ж�Զ����͸��ҹ���Զ!","�������ı������ഺ����,�ഺ��ȴ���ڡ�","��򵥵ĳ����ؾ�:���ֺ�������Ҫ����~","������Ҳ��˵�����ǻ�ûʹ���˼���!","��Ҫ���ұ���,�����ú����","�Ҳ��Ǹ������� ���������������","���»�һ���ĵ��ˣ�������һ���Ķ���","�ϻ������� �㵱����HELLO KITTY��","��������߾��磺��ǽ������ǽ����","үү���Ǵ������߹����ġ���","������ǲ��ã����ʱ�����������綼û�ú�","ûʲô�¾Ͳ�Ҫ���ң������˸���Ҫ���ҡ�","���������������Ѿ����ˡ���","Ǯ���Խ�������ⶼ�������⡣","���ģ��ҵ��·������ˣ�","���Ա������������ʰ���","�����Ҳ�ţ������ɵ�˰ɣ�","���³�������׳������ûǮŮ���֡�","�����ǮҲ��һ�ִ�����Ըһ���ٴ�","���˸���ϴ�ƣ��������Ƶ��������Լ���","�úû��ţ���Ϊ���ǻ����ܾ�!","���ֲ���������ѧ�˼�ͺ����","������ţa��ţc֮���ǻ���","���±������ã�������û�á�","�����ҵ�����ô�࣬�����ϼ�? ","�㷢ȥ���٣�ͷм�����ڣ�","��ɫ��԰�ز�ס�����պ��ӳ�ǽ����","��������Ϊ���һ�ｵһ��","bmw�Ǳ����ң�msn��������","ŮΪ�ü�����,��Ϊ�ü���� ","����ʮ�����飬�����׶�԰�ȽϺû�");


function start() {
	var hwchance= Math.floor(Math.random()*hwtext.length);
	cm.sendSimple("#r��Ĭʱ��:"+hwtext[hwchance]+"#k\r\n������ʱ��:#e"+cm.getHour()+"��"+cm.getMin()+"��"+cm.getSec()+"��#n  Ԫ�����:#e"+cm.getzb()+"#n��\r\n#e#b�{��ߩרTһ���¶��Ǳ���������������ɫ����.#k\r\n#L5#���նᱦ#L6#�������#l#L7#����껪#l#L8#��ʱ���#l\r\n#L11##r������#b#l#L14##rնɱħ��#b#l#L15#�ɵ��ϵ�#l#L10#���ǻ���#l\r\n#L24##b��ս����ʿ#b#l#L25##g��սħ������#b#l#L26##r��սʨ����[BT]#l#n\r\n#b#L22##v4002002# x1 #k��#r 1��ð�ձ�#l#L23#1��ð�ձ�#k ��#b#v4002002# x1#l\r\n#b#L18##v4002001# x1 ��#r1000��ð�ձ�#l#L19##v4002000# x1 ��#r100��ð�ձ�#l",2);
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
			if(selection>=800){
				cm.dispose();
				return;
			}
            if(selection==10){
				typed=10;
				cm.sendNext("#e#bHey,Boy~~Come on~~~~\r\n#k��������#r10��ð�ձ�#k,������ȫ�����˶�֪�����ǻ���~��������~.#r������2Ƶ���г�.",2);
			}
			if(selection==11){//������
				typed=11;
                cm.sendNext("��,����,����Ű��������������OUT�ˣ���ӭ����������\r\n#r>>>.Ϊʲôȡ���������~����Ϊ�˸�������BT,һ�������޷�սʤ��~����Ĺ�����Ʒ����ħ��~��������սʤ��,�����Ǳ����ܹܲż���ĳ�����װ��,����ͼ:\r\n#v1432084##v1442113##v1302149##v1462076##v1452058##v1442090##v1432066##v1402073##v1382068##v1382058#һ������Զ��м�,���������160�����ϣ������и���ұ�����300����װ��������������~\r\n#r��������:\r\nÿ���һ�ν�:50����Ҷ#v4001126#��1��ľ����Ʊ#v4002002#\r\n#b�ڶ��μ����ϣ���Ҫ���Ԫ��1��,#g[�ռ���Աֱ�ӽ���]");
			}
			if(selection==14){//նɱħ��
				typed=140;
                cm.sendNext("��˵�У������ߵ�����Ͳ�������а֮�֣����ǻ��Ϊ���������硱��һԱ��������������һλð�ռһ��ܹ����������硱����ʮ���������֣��������־��ǡ���ħ�ۡ�������������̫��ǿ��ڤ�罫���������ӡ�������������ڵ�ħ���Ի�������֮���ǣ�����������ò����������Ҫ��������ͼ�߸�ڤ�����ı���Լ�ģ����������ļ����أ�#rӢ�۵�սʿ��~ά�����ں�ƽ��������~սʤ���л��ʵ��������Իƽ��Ҷװ��:\r\n#v1482073##v1402085##v1422057##v1412055##v1452100##v1302142##v1492073##v1472111##v1382093##v1432075##v1312056##v1462085##v1332114#һ�㹥����Ȼ��180G���ϣ������и���ұ�����300����װ�����Ų�������~\r\n#r��������:\r\nÿ���һ�ν�:100����Ҷ#v4001126#��2��ľ����Ʊ#v4002002#\r\n#b�ڶ��μ����ϣ���Ҫ���Ԫ��1��,#g[�ռ���Աֱ�ӽ���]");
            }
			if(selection==15){//�ɵ��ϵ�
				typed=15;
                cm.sendNextPrev("#bһλð�ռ���Ϊһ��δ֪�����ɣ�Ҫ�����ϵۣ����δ֪��~\r\n#k�ϵ�����֮ʼ~�ƶ������˶��ĵ�һ����~����ΰ������ԣ�������֪����������,�ϵ۸�����������ȴҲ���������ǵ�������Լ���������������Ҹ���ȴȡ������������ɣ��˸��Ӷ���Ĵ��⣬������һƬ���ޣ��ϵ�ֻ���ϵۣ����ϵ۴��������࣬�ϵ۲����������ڵ�����,#d������Ϊ�����ռ�����,����Ҫ2����ӽ���.\r\n#r����:ÿ�αر�һ��#v3993003#�������г�����ߵķ�����NPC�����ռ�װ��ϵ��~\r\n#r��������:\r\nÿ���һ�ν�:200����Ҷ#v4001126#��2��ľ����Ʊ#v4002002#\r\n#b�ڶ��μ����ϣ���Ҫ���Ԫ��2��,#g[�ռ���Աֱ�ӽ���]");	
			}
			if(selection==5){
                typed=5;
                cm.sendNext("���Ƚ�һ�²Ƹ��ᱦ����:\r\n#r1.ÿ�ν�ȥ��ʱ������Ϊ1����\r\n2.ÿˢ��һ����Ʒ,1�����ʧ.\r\n3.��ƷΪ���ˢ����������ڵ���.��������һ��׼��.\r\n\r\n#bÿ�ν�����Ҫ����#b[2��Ԫ��]");
			}
			if(selection==6){
				if(cm.getChar().getBossLog('dctgfb')>5 && cm.getChar().getVip()<3){
					cm.sendOk("ÿ��������5�Σ�#r�����Ա�Ͱ׽��Աÿ����Խ���10�Σ�.");
                    cm.dispose();
                    return;
				}
				if(cm.getChar().getBossLog('dctgfb')>10 && cm.getChar().getVip()>=3){
					cm.sendOk("#r�����Ա�Ͱ׽��Աÿ����Խ���10�Σ�.");
                    cm.dispose();
                    return;
				}
				if (cm.getParty() == null) { // No Party
                    cm.sendOk("��,��֪�ļһ�,��Ҫ�����?\r\n��Ҫ��#b����#kһ�����,����Ĺ�����#r�൱����#k��Ӵ.��Ȼ��,��Ҳ������,�㵥��.�������ʵ���Ļ�zzzZZZZZ..");
                    cm.dispose();
                    return;
                } else if (!cm.isLeader()) { // Not Party Leader
                    cm.sendOk("��жӳ�����˵��.");
                    cm.dispose();
                    return;
                } else {
                    var party = cm.getParty().getMembers();
                    if (party.size() > 1) {
					cm.sendOk("#r�Բ���,ֻ����һ������ս..");
                    cm.dispose();
                    return;
                    }
                    var em = cm.getEventManager("vip4");
					if (em == null) {
						cm.sendOk("�˸���������,����ϵ�ܹ��޸���.");
						cm.dispose();
						return;
					} else {
                        if(em.getProperty("entryPossible")!=null){
							if(em.getProperty("entryPossible").equals("0")==false){
								cm.sendOk("#r�Ѿ���������ս�ˣ����Ե�һ�ᣬ���߻������߳���һ�£�..");
								cm.dispose();
								return;
							}
						}
						cm.getChar().setBossLog('dctgfb');
						cm.itemlaba("��"+ cm.getChar().getName() +"���ǳ��׺������Ų�Ӭ��ȥ��������ء���");
                        em.startInstance(cm.getParty(),cm.getPlayer().getMap());
					}
					cm.dispose();
					return;
                }
			}
			if(selection==7){
                typed=7;
                cm.sendNext("��,����,��ӭ��������껪����:\r\n#r>>>.�����껪������,��ÿ��۵���200Ԫ��,���Ԫ������,���ᱻ������ʵ����.����Ĺ���ˢ��Ϊ��ˢ��,�ܴ���ʱ����سɾ�,ף����,��ϡ�����.ÿ��ˢ�±ر���Ʒ..");
			}
			if(selection==8){
                typed=8;
                cm.sendNext("��,����,���������5������ɱ��555ֻ��,������һ��������ս.�ҽ������׼�����Ľ���.��֤����ˬ....\r\n#r��ס:ÿ��ֻ����ս���3��,��ʼ��ս��������,��Ƶ����������Ϊ�Զ���������.ÿ���͵Ķ������������Ӵ.");
			}
			if(selection==16){
				if(cm.haveItem(4002000,1)==true){
					cm.gainItem(4002000,-1);
					cm.gainMeso(1000000);
					cm.sendOk("��ϲ��ʹ�� #b #v4002000# x1#k,���100��ð�ձ�.");
				}else{
					cm.sendOk("�����û��#b #v4002000# x1");
				}
				cm.dispose();
			}
			if(selection==17){
				if(cm.getMeso()>=1000000){
					cm.gainItem(4002000,1);
					cm.gainMeso(-1000000);
					cm.sendOk("��ϲ��ʹ�� #b100��ð�ձ�. #k,��� #b#v4002000# x1");
				}else{
					cm.sendOk("�����û��5��ð�ձ�.");
				}
				cm.dispose();
			}
			if(selection==18){
				if(cm.haveItem(4002001,1)==true){
					cm.gainItem(4002001,-1);
					cm.gainMeso(10000000);
					cm.sendOk("��ϲ��ʹ�� #b #v4002001# x1#k,���1000��ð�ձ�.");
				}else{
					cm.sendOk("�����û��#b #v4002001# x1");
				}
				cm.dispose();
			}
			if(selection==19){
				if(cm.haveItem(4002000,1)==true){
					cm.gainItem(4002000,-1);
					cm.gainMeso(1000000);
					cm.sendOk("��ϲ��ʹ�� #b #v4002000# x1#k,���100��ð�ձ�.");
				}else{
					cm.sendOk("�����û��#b #v4002000# x1");
				}
				cm.dispose();
			}
			if(selection==20){
				if(cm.haveItem(4002001,10)==true){
					cm.gainItem(4002001,-10);
					cm.gainItem(4002002,1);
					cm.sendOk("��ϲ��ʹ�� #b #v4002001# x10#k,���#v4002002# x1.");
				}else{
					cm.sendOk("�����û��#b #v4002001# x10");
				}
				cm.dispose();
			}
			if(selection==21){
				if(cm.haveItem(4002002,1)==true){
					cm.gainItem(4002002,-1);
					cm.gainItem(4002001,10);
					cm.sendOk("��ϲ��ʹ�� #b #v4002002# x1#k,���#v4002001# x10.");
				}else{
					cm.sendOk("�����û��#b #v4002002# x1");
				}
				cm.dispose();
			}
			if(selection==22){
				if(cm.haveItem(4002002,1)==true){
					cm.gainItem(4002002,-1);
					cm.gainMeso(100000000);
					cm.sendOk("��ϲ��ʹ�� #b #v4002002# x1#k,���1��ð�ձ�.");
				}else{
					cm.sendOk("�����û��#b #v4002002# x1");
				}
				cm.dispose();
			}
			if(selection==23){
				if(cm.getMeso()>=100000000){
					cm.gainItem(4002002,1);
					cm.gainMeso(-100000000);
					cm.sendOk("��ϲ��ʹ�� #b1����ð�ձ�. #k,��� #b#v4002002# x1");
				}else{
					cm.sendOk("�����û��1��ð�ձ�.");
				}
				cm.dispose();
			}
			if(selection==24){
				typed=24;
                cm.sendNext("��˯�еı���ʿ���ڱ������ˣ���δ�������������#r����ϵ��װ��#k��ȫ���Եõ��˴������������Ի����϶�����#e200+����#n���ǾӼ�����֮�ر�װ��,�������԰�~\r\n#r��������:\r\nÿ���һ�ν�:100��Ծֵ+1��ľ����Ʊ+100����Ҷ\r\n#b�ڶ��μ����ϣ���Ҫ���Ԫ��1��,#g[�ռ���Աֱ�ӽ���]");
            }
			if(selection==25){
				typed=25;
                cm.sendNext("�ڴ��Ѿõ�����������������������ճ������������ó��˿��ұ���-(#r140������ϵ��װ��#k)�����Ի����϶�����#e100+����#n�����᲻�ݴ��~\r\n#r��������:\r\nÿ���һ�ν�:200��Ծֵ+2��ľ����Ʊ+300����Ҷ\r\n#b�ڶ��μ����ϣ���Ҫ���Ԫ��2��,#g[�ռ���Աֱ�ӽ���]");
            }
			if(selection==26){
				typed=26;
                cm.sendNext("ʨ������ð�յ���������䣬����һ�е�������ս����������������Ӣ�� ���ϱ���-(#r130��ʨ����ϵ��װ��#k)�����Ի����϶�����#e200+����#n�����᲻�ݴ��~\r\n#r��������:\r\nÿ���һ�ν�:200��Ծֵ+5��ľ����Ʊ+300����Ҷ\r\n#b�ڶ��μ����ϣ���Ҫ���Ԫ��3��,#g[�ռ���Աֱ�ӽ���]");
            }
		}else if(status == 2){
            if(typed==13){
				typed=14;
				var texts="��ѡ����Ҫ�����ĵ�ǰװ����\r\n#L0#----------------------------------------------#l\r\n";
				var inv = cm.getPlayer().getInventory(net.sf.odinms.client.MapleInventoryType.EQUIP);
					for (var i = 1; i <= 96; i++) {
						it = inv.getItem(i);
						if (it != null) {
							texts+="#L"+i+"##v"+it.getItemId()+"##l  ";
						}
					}
					cm.sendSimple(texts,2);
			}
			if(typed==10){
				if(cm.getC().getChannel()==2){
					if(cm.getChar().getMap().mobCount()>5){
						cm.sendOk("��������ô����ˣ�Ϊ�˷������ȶ������ǵ͵���ã���");
						cm.dispose();
						return;
					}
					if(cm.getMeso()>=1000000000){
						var randxsss=Math.floor((Math.random()*9))+1;
						if(randxsss==5){
							cm.summonMobAtPosition(8820001, 1, 1070, 1);
						}else if(randxsss==8){//�ࡤ�װ�
							cm.summonMobAtPosition(9500412, 1, 1070, 1);
						}else{
							cm.summonMobAtPosition(8180000, 10, 1070, 4);
						}
						cm.gainMeso(-1000000000);
						cm.itemlaba("��"+ cm.getChar().getName() +"�������Լ��ǳ�������~~2���г��к�Ϸ���~~.~");
						cm.itemlaba("��"+ cm.getChar().getName() +"�������Լ��ǳ�������~~2���г��к�Ϸ���~~.~");
						cm.itemlaba("��"+ cm.getChar().getName() +"�������Լ��ǳ�������~~2���г��к�Ϸ���~~.~");
						cm.dispose();
						return;
					}else{
						cm.sendOk("�㻹������~�������10��ð�ձ�,�ҳ�ȫ��~���㳹�׵Ļ�һ��~~");
						cm.dispose();
						return;
					}
				}else{
					cm.sendOk("��֪�����ǻ���,����Ϊ��ά������ƽ,���ڶ���ʹ�ô˹���~~");
					cm.dispose();
					return;
				}
			}
            if(typed==9){
                if(cm.getzb()>=5000){
					if(cm.getChar().getGMLevel()<1){
								cm.superlabad("["+cm.getChar().getName()+"]���:"+cm.getText(),5121020);
					}else{
						cm.superlabad("[����]:"+cm.getText(),5121020);
					}
                    cm.setzb(-5000);
                }else{
                    cm.sendOk("�Բ���,û���㹻��Ԫ��.");
                }
                cm.dispose();
                return;
            }
			if(typed==8){
                if(cm.getChar().getdamagemobstart()==0){
                    if(cm.getChar().getBossLog('tzfb01')>=5){
                        cm.sendOk("#e�������Ѿ���ս��5�Σ����������ɣ���");
                        cm.dispose();
                        return;
                    }
                    if(cm.getChar().getBossLog('tzfb01')==0){
                        cm.getChar().delBossLog('tzfb01');
                    }
					cm.itemlaba("��"+ cm.getChar().getName() +"�����ó��ǹ�����ˡ���ʱ��֡�����.������һ���ڴ���~");
                    cm.sendOk("#r����:���Ѿ�#b�ɹ�#r��������ս.��������Ӻ����ұ���ս��.");
                    cm.getChar().setlongtemptime(cm.getnowtonow(5));
                    cm.getChar().settimemob(-cm.getChar().gettimemob());
                    cm.getChar().setdamagemobstart(1);
                    cm.getChar().setBossLog('tzfb01');
                    cm.dispose();
                }else{
                    if(cm.getnow()>=cm.getChar().getlongtemptime()){
                        if(cm.getChar().gettimemob()>=555){
                        cm.sendOk("��ϲ,���ڶ̶̵�#e5������,��ɱ��"+cm.getChar().gettimemob()+"ֻ��.#n\r\n��Ĺ���ս���ܹܺ�������Ҷ��ڿ���,����ȫ���Ľ���.��������Ŭ��,Ϊ����������������.#b�ҵ�СС��������Ц��>>>");
                        cm.getChar().setdamagemobstart(0);
                        tzlinjiang();
                        }else{
                            cm.sendOk("���ź�,���ڶ̶̵�#e5������,��ɱ��"+cm.getChar().gettimemob()+"ֻ��.#n\r\n��û�ڴﵽ���ǵ�Ҫ��555ֻ.ϣ�������Ŭ��..��ȡ��һ�ε�ʤ��.");
                            cm.getChar().setdamagemobstart(0);
                            cm.dispose();
                        }
                    }else{
                        cm.sendOk("��,ʱ�仹û��,ץ��ɱ�ְ�..");
                        cm.dispose();
                    }
                }
			}
			if(typed==15){//vipsd
				if (cm.getParty() == null) { // No Party
                    cm.sendOk("��Ҫ��#b����#kһ�����,����ֻ������һ����~.zzzZZZZZ..");
                    cm.dispose();
                    return;
                } else if (!cm.isLeader()) { // Not Party Leader
                    cm.sendOk("��жӳ�����˵��.");
                    cm.dispose();
                    return;
                } else {
                    var party = cm.getParty().getMembers();
                    if (party.size() != 2) {
					cm.sendOk("#r�Բ���,Ϊ�˳��׵Ĳ������ǵ�����,����2�����ǰ��..");
                    cm.dispose();
                    return;
                    }
                    var em = cm.getEventManager("vipsd");
					if (em == null) {
						cm.sendOk("�˸���������,����ϵ�ܹ��޸���.");
						cm.dispose();
						return;
					} else {
						if(cm.getChar().getVip()>=5){
							cm.itemlaba("��"+ cm.getChar().getName() +"����ʼ��ս�񼶸������ɵ��ϵۡ�~����һ���ڴ����ٹ���~");
								em.startInstance(cm.getParty(),cm.getPlayer().getMap());
						}else{
							if(cm.haveItem(4001126,200)==true && cm.haveItem(4002002,2)==true){
								if(cm.getChar().getBossLog('vipsd')>0){
									if(cm.getzb()<20000){
										cm.sendOk("#r�Բ����������Ѿ���ս��һ���ˣ�����Ҫ�ڴ���ս���������2��Ԫ���ſ��Խ���..");
										cm.dispose();
										return;
									}
									cm.setzb(-20000);
								}else{
									cm.getChar().delBossLog('vipsd');
								}
								cm.gainItem(4001126,-200);
								cm.gainItem(4002002,-2);
								cm.itemlaba("��"+ cm.getChar().getName() +"����ʼ��ս�񼶸������ɵ��ϵۡ�~����һ���ڴ����ٹ���~");
								em.startInstance(cm.getParty(),cm.getPlayer().getMap());
							}else{
							cm.sendOk("#r�����û���㹻�ķ�Ҷ��������Ʊ,�Ҳ��������ȥ..");
							cm.dispose();
							return;
							}
						}
                        
					}
					cm.dispose();
					return;
                }	
			}
			if(typed==140){//նɱħ��
				if (cm.getParty() == null) { // No Party
                    cm.sendOk("��Ҫ��#b����#kһ�����,����ֻ������һ����~.zzzZZZZZ..");
                    cm.dispose();
                    return;
                } else if (!cm.isLeader()) { // Not Party Leader
                    cm.sendOk("��жӳ�����˵��.");
                    cm.dispose();
                    return;
                } else {
                    var party = cm.getParty().getMembers();
                    if (party.size() > 1) {
					cm.sendOk("#r�Բ���,Ϊ�˳��׵Ĳ����������,ֻ��һ��ǰ��..");
                    cm.dispose();
                    return;
                    }
                    var em = cm.getEventManager("vipmd");
					if (em == null) {
						cm.sendOk("�˸���������,����ϵ�ܹ��޸���.");
						cm.dispose();
						return;
					} else {
						if(em.getProperty("entryPossible")!=null){
							if(em.getProperty("entryPossible").equals("1")==true){
								cm.sendOk("#r�Ѿ���������ս�ˣ����Ե�һ�ᣬ���߻������߳���һ�£�..");
								cm.dispose();
								return;
							}
						}
						if(cm.getChar().getVip()>=5){
							cm.itemlaba("��"+ cm.getChar().getName() +"����ʼ��ս�񼶸�����նɱħ�ۡ�~����һ���ڴ����ٹ���~");
							em.startInstance(cm.getParty(),cm.getPlayer().getMap());
						}else{
							if(cm.haveItem(4001126,100)==true  && cm.haveItem(4002002,2)==true){
								if(cm.getChar().getBossLog('vipmd')>0){
									if(cm.getzb()<10000){
										cm.sendOk("#r�Բ����������Ѿ���ս��һ���ˣ�����Ҫ�ڴ���ս���������1��Ԫ���ſ��Խ���..");
										cm.dispose();
										return;
									}
									cm.setzb(-10000);
								}else{
									cm.getChar().delBossLog('vipmd');
								}
								cm.gainItem(4001126,-100);
								cm.gainItem(4002002,-2);
								cm.itemlaba("��"+ cm.getChar().getName() +"����ʼ��ս�񼶸�����նɱħ�ۡ�~����һ���ڴ����ٹ���~");
								em.startInstance(cm.getParty(),cm.getPlayer().getMap());
							}else{
								cm.sendOk("#r�����û���㹻�ķ�Ҷ��������Ʊ,�Ҳ��������ȥ..");
								cm.dispose();
								return;
							}
						}
					}
					cm.dispose();
					return;
                }	
			}
			if(typed==11){//������
				if (cm.getParty() == null) { // No Party
                    cm.sendOk("��Ҫ��#b����#kһ�����,����ֻ������һ����~.zzzZZZZZ..");
                    cm.dispose();
                    return;
                } else if (!cm.isLeader()) { // Not Party Leader
                    cm.sendOk("��жӳ�����˵��.");
                    cm.dispose();
                    return;
                } else {
                    var party = cm.getParty().getMembers();
                    if (party.size() > 1) {
					cm.sendOk("#r�Բ���,Ϊ�˳��׵Ĳ����������,ֻ��һ��ǰ��..");
                    cm.dispose();
                    return;
                    }
                    var em = cm.getEventManager("vippb");
					if (em == null) {
						cm.sendOk("�˸���������,����ϵ�ܹ��޸���.");
						cm.dispose();
						return;
					} else {
                        if(em.getProperty("entryPossible")!=null){
							if(em.getProperty("entryPossible").equals("1")==true){
								cm.sendOk("#r�Ѿ���������ս�ˣ����Ե�һ�ᣬ���߻������߳���һ�£�..");
								cm.dispose();
								return;
							}
						}
						if(cm.getChar().getVip()>=5){
							cm.itemlaba("��"+ cm.getChar().getName() +"����ʼ��ս�񼶸����������衻~����һ���ڴ����ٹ���~");
							em.startInstance(cm.getParty(),cm.getPlayer().getMap());
						}else{
							if(cm.haveItem(4001126,50)==true && cm.haveItem(4002002,1)==true){
								if(cm.getChar().getBossLog('vippb')>0){
									if(cm.getzb()<10000){
										cm.sendOk("#r�Բ����������Ѿ���ս��һ���ˣ�����Ҫ�ڴ���ս���������1��Ԫ���ſ��Խ���..");
										cm.dispose();
										return;
									}
									cm.setzb(-10000);
								}else{
									cm.getChar().delBossLog('vippb');
								}
								cm.gainItem(4001126,-50);
								cm.gainItem(4002002,-1);
								cm.itemlaba("��"+ cm.getChar().getName() +"����ʼ��ս�񼶸����������衻~����һ���ڴ����ٹ���~");
								em.startInstance(cm.getParty(),cm.getPlayer().getMap());
							}else{
								cm.sendOk("#r�����û���㹻��Ԫ�����߷�Ҷ��������Ʊ,�Ҳ��������ȥ..");
								cm.dispose();
								return;
							}
						}
					}
					cm.dispose();
					return;
                }
			}
			if(typed==5){
				if (cm.getParty() == null) { // No Party
                    cm.sendOk("��,����,��ȥ�ᱦ��?\r\n��Ҫ��#b����#kһ�����,����ı�����#r�൱����#k��Ӵ.��Ȼ��,��Щ�������һ�����ʧ,Ҫץ������Ӵ.zzzZZZZZ..");
                    cm.dispose();
                    return;
                } else if (!cm.isLeader()) { // Not Party Leader
                    cm.sendOk("��жӳ�����˵��.");
                    cm.dispose();
                    return;
                } else {
                    var party = cm.getParty().getMembers();
                    if (party.size() > 1) {
					cm.sendOk("#r�Բ���,Ϊ����Ϸƽ��.ֻ����һ���˽�ȥ�ᱦ..");
                    cm.dispose();
                    return;
                    }
                    var em = cm.getEventManager("vip5");//980000304
					if (em == null) {
						cm.sendOk("�˸���������,����ϵ�ܹ��޸���.");
						cm.dispose();
						return;
					} else {
						if(em.getProperty("entryPossible")!=null){
							if(em.getProperty("entryPossible").equals("1")==true){
								cm.sendOk("#r�Ѿ���������ս�ˣ����Ե�һ�ᣬ���߻������߳���һ�£�..");
								cm.dispose();
								return;
							}
						}
                        if(cm.getzb()>=20000){
                        cm.setzb(-20000);
						cm.itemlaba("��"+ cm.getChar().getName() +"�����ſձ��������ˡ��Ƹ��ᱦ������߱�����.������һ���ڴ����ٹ���~");
                        em.startInstance(cm.getParty(),cm.getPlayer().getMap());
                        }else{
                        cm.sendOk("#r�����û���㹻��Ԫ��,�Ҳ��������ȥ..");
						cm.dispose();
						return;
                        }
					}
					cm.dispose();
					return;
                }
			}
			if(typed==7){
				if (cm.getParty() == null) { // No Party
                    cm.sendOk("������껪.�����ഺ?\r\n��Ҫ��#b����#kһ�����,����ı�����Ȼ#r�ܸ���#k��˵.�����ү�����������...zzzZZZZZ..");
                    cm.dispose();
                    return;
                } else if (!cm.isLeader()) { // Not Party Leader
                    cm.sendOk("��жӳ�����˵��.");
                    cm.dispose();
                    return;
                } else {
                    var party = cm.getParty().getMembers();
                    if (party.size() > 1) {
					cm.sendOk("#r�Բ���,Ϊ����Ϸƽ��.ֻ����һ���˽�ȥ�ᱦ..");
                    cm.dispose();
                    return;
                    }
                    var em = cm.getEventManager("vip6mob");//980000403
					if (em == null) {
						cm.sendOk("�˸���������,����ϵ�ܹ��޸���.");
						cm.dispose();
						return;
					} else {
                        if(cm.getzb()<200){
                            cm.sendOk("sorry.���Ԫ��С��200,̫����,��ȥһ�벻���ͳ�����.�����Ҿ������ǲ�����ȥ��..");
                            cm.dispose();
                            return;
                        }
						if(em.getProperty("entryPossible")!=null){
							if(em.getProperty("entryPossible").equals("1")==true){
								cm.sendOk("#r�Ѿ���������ս�ˣ����Ե�һ�ᣬ���߻������߳���һ�£�..");
								cm.dispose();
								return;
							}
						}
						cm.itemlaba("��"+ cm.getChar().getName() +"�����ſձ��������ˡ�����껪������.����:���Ƹ�(��)��Ү~");
                        em.startInstance(cm.getParty(),cm.getPlayer().getMap());
					}
					cm.dispose();
					return;
                }
			}
			if(typed==24){//����ʿ
				if (cm.getParty() == null) { // No Party
                    cm.sendOk("��Ҫ��#b����#kһ�����,����ֻ������һ����~.zzzZZZZZ..");
                    cm.dispose();
                    return;
                } else if (!cm.isLeader()) { // Not Party Leader
                    cm.sendOk("��жӳ�����˵��.");
                    cm.dispose();
                    return;
                } else {
                    var party = cm.getParty().getMembers();
                    if (party.size() > 1) {
					cm.sendOk("#r�Բ���,Ϊ�˳��׵Ĳ����������,ֻ��һ��ǰ��..");
                    cm.dispose();
                    return;
                    }
                    var em = cm.getEventManager("vipbqs");
					if (em == null) {
						cm.sendOk("�˸���������,����ϵ�ܹ��޸���.");
						cm.dispose();
						return;
					} else {
						if(em.getProperty("entryPossible")!=null){
							if(em.getProperty("entryPossible").equals("1")==true){
								cm.sendOk("#r�Ѿ���������ս�ˣ����Ե�һ�ᣬ���߻������߳���һ�£�..");
								cm.dispose();
								return;
							}
						}
						if(cm.getChar().getVip()>=5){
							cm.itemlaba("��"+ cm.getChar().getName() +"����ʼ��ս�񼶸�������ս����ʿ������һ���ڴ����ٹ���~");
							em.startInstance(cm.getParty(),cm.getPlayer().getMap());
						}else{
							if(cm.haveItem(4001126,100)==true && cm.haveItem(4002002,1)==true && cm.getChar().gethyd()>=100){
								if(cm.getChar().getBossLog('vipbqs')>0){
									if(cm.getzb()<10000){
										cm.sendOk("#r�Բ����������Ѿ���ս��һ���ˣ�����Ҫ�ڴ���ս���������1��Ԫ���ſ��Խ���..");
										cm.dispose();
										return;
									}
									cm.setzb(-10000);
								}else{
									cm.getChar().delBossLog('vipbqs');
								}
								cm.gainItem(4001126,-100);
								cm.gainItem(4002002,-1);
								cm.getChar().sethyd(-100);
								cm.getChar().setBossLog('vipbqs');
								cm.itemlaba("��"+ cm.getChar().getName() +"����ʼ��ս�񼶸�������ս����ʿ������һ���ڴ����ٹ���~");
								em.startInstance(cm.getParty(),cm.getPlayer().getMap());
							}else{
								cm.sendOk("#r�����û���㹻�Ļ�Ծ����߷�Ҷ��������Ʊ,�Ҳ��������ȥ..");
							}
						}
                        
					}
					cm.dispose();
					return;
                }	
			}
			if(typed==25){//����ʿ
				if (cm.getParty() == null) { // No Party
                    cm.sendOk("��Ҫ��#b����#kһ�����,����ֻ������һ����~.zzzZZZZZ..");
                    cm.dispose();
                    return;
                } else if (!cm.isLeader()) { // Not Party Leader
                    cm.sendOk("��жӳ�����˵��.");
                    cm.dispose();
                    return;
                } else {
                    var party = cm.getParty().getMembers();
                    if (party.size() > 1) {
					cm.sendOk("#r�Բ���,Ϊ�˳��׵Ĳ����������,ֻ��һ��ǰ��..");
                    cm.dispose();
                    return;
                    }
                    var em = cm.getEventManager("vipsl");
					if (em == null) {
						cm.sendOk("�˸���������,����ϵ�ܹ��޸���.");
						cm.dispose();
						return;
					} else {
						if(em.getProperty("entryPossible")!=null){
							if(em.getProperty("entryPossible").equals("1")==true){
								cm.sendOk("#r�Ѿ���������ս�ˣ����Ե�һ�ᣬ���߻������߳���һ�£�..");
								cm.dispose();
								return;
							}
						}
						if(cm.getChar().getVip()>=5){
							cm.itemlaba("��"+ cm.getChar().getName() +"����ʼ��ս�񼶸�������սħ������������һ���ڴ����ٹ���~");
								em.startInstance(cm.getParty(),cm.getPlayer().getMap());
						}else{
							if(cm.haveItem(4001126,300)==true && cm.haveItem(4002002,2)==true && cm.getChar().gethyd()>=200){
								if(cm.getChar().getBossLog('vipsl')>0){
									if(cm.getzb()<20000){
										cm.sendOk("#r�Բ����������Ѿ���ս��һ���ˣ�����Ҫ�ڴ���ս���������2��Ԫ���ſ��Խ���..");
										cm.dispose();
										return;
									}
									cm.setzb(-20000);
								}else{
									cm.getChar().delBossLog('vipsl');
								}
								cm.gainItem(4001126,-300);
								cm.gainItem(4002002,-2);
								cm.getChar().sethyd(-200);
								cm.getChar().setBossLog('vipsl');
								cm.itemlaba("��"+ cm.getChar().getName() +"����ʼ��ս�񼶸�������սħ������������һ���ڴ����ٹ���~");
								em.startInstance(cm.getParty(),cm.getPlayer().getMap());
							}else{
								cm.sendOk("#r�����û���㹻�ķ�Ҷ���߻�Ծ�㣬����ľ����Ʊ,�Ҳ��������ȥ..");
							}
						}
					}
					cm.dispose();
					return;
                }	
			}
			if(typed==26){//����ʿ
				if (cm.getParty() == null) { // No Party
                    cm.sendOk("��Ҫ��#b����#kһ�����,����ֻ������һ����~.zzzZZZZZ..");
                    cm.dispose();
                    return;
                } else if (!cm.isLeader()) { // Not Party Leader
                    cm.sendOk("��жӳ�����˵��.");
                    cm.dispose();
                    return;
                } else {
                    var party = cm.getParty().getMembers();
                    if (party.size() > 1) {
					cm.sendOk("#r�Բ���,Ϊ�˳��׵Ĳ����������,ֻ��һ��ǰ��..");
                    cm.dispose();
                    return;
                    }
                    var em = cm.getEventManager("vipszw");
					if (em == null) {
						cm.sendOk("�˸���������,����ϵ�ܹ��޸���.");
						cm.dispose();
						return;
					} else {
						if(em.getProperty("entryPossible")!=null){
							if(em.getProperty("entryPossible").equals("1")==true){
								cm.sendOk("#r�Ѿ���������ս�ˣ����Ե�һ�ᣬ���߻������߳���һ�£�..");
								cm.dispose();
								return;
							}
						}
						if(cm.getChar().getVip()>=5){
							cm.itemlaba("��"+ cm.getChar().getName() +"����ʼ��ս�񼶸�������սʨ����������һ���ڴ����ٹ���~");
							em.startInstance(cm.getParty(),cm.getPlayer().getMap());
						}else{
							if(cm.haveItem(4001126,300)==true && cm.haveItem(4002002,5)==true && cm.getChar().gethyd()>=200){
								if(cm.getChar().getBossLog('vipszw')>0){
									if(cm.getzb()<30000){
										cm.sendOk("#r�Բ����������Ѿ���ս��һ���ˣ�����Ҫ�ڴ���ս���������3��Ԫ���ſ��Խ���..");
										cm.dispose();
										return;
									}
									cm.setzb(-30000);
								}else{
									cm.getChar().delBossLog('vipszw');
								}
								cm.gainItem(4001126,-300);
								cm.gainItem(4002002,-5);
								cm.getChar().sethyd(-200);
								cm.getChar().setBossLog('vipszw');
								cm.itemlaba("��"+ cm.getChar().getName() +"����ʼ��ս�񼶸�������սʨ����������һ���ڴ����ٹ���~");
								em.startInstance(cm.getParty(),cm.getPlayer().getMap());
							}else{
								cm.sendOk("#r�����û���㹻�ķ�Ҷ���߻�Ծ�㣬����ľ����Ʊ,�Ҳ��������ȥ..");
							}
						}
					}
					cm.dispose();
					return;
                }	
			}
		}else if(status == 3){
		}else if(status == 4){	
		}
    }
}

function tzlinjiang(){
    var randx=Math.floor((Math.random()*9))+1;
    if(randx==1){
        cm.gainItem(4031454,2);
        cm.serverNotice("����ս�������"+ cm.getChar().getName() +"���ɹ��������ʱ��ָ���.");
        cm.dispose();
    }else if(randx==2){
        cm.gainItem(4001126,200);
        cm.serverNotice("����ս�������"+ cm.getChar().getName() +"���ɹ��������ʱ��ָ���.");
        cm.dispose();
    }else if(randx==3){
        cm.gainItem(5390003,20);
        cm.serverNotice("����ս�������"+ cm.getChar().getName() +"���ɹ��������ʱ��ָ���.");
        cm.dispose();
    }else if(randx==4){
        cm.gainItem(5390004,20);
        cm.serverNotice("����ս�������"+ cm.getChar().getName() +"���ɹ��������ʱ��ָ���.");
        cm.dispose();
    }else if(randx==5){
        cm.gainItem(5010073,1);
        cm.serverNotice("����ս�������"+ cm.getChar().getName() +"���ɹ��������ʱ��ָ���.�����[������Ů]����.");
        cm.dispose();
    }else if(randx==6){
        cm.gainItem(4004000,20);
        cm.serverNotice("����ս�������"+ cm.getChar().getName() +"���ɹ��������ʱ��ָ���.");
        cm.dispose();
    }else if(randx==7){
        cm.gainItem(4004001,20);
        cm.serverNotice("����ս�������"+ cm.getChar().getName() +"���ɹ��������ʱ��ָ���.");
        cm.dispose();
    }else if(randx==8){
        cm.gainItem(4004002,20);
        cm.serverNotice("����ս�������"+ cm.getChar().getName() +"���ɹ��������ʱ��ָ���.");
        cm.dispose();    
    }else if(randx==10){
        cm.gainItem(4004003,20);
        cm.serverNotice("����ս�������"+ cm.getChar().getName() +"���ɹ��������ʱ��ָ���.");
        cm.dispose();  
    }else if(randx==9){
        cm.gainItem(5010074,1);
        cm.serverNotice("����ս�������"+ cm.getChar().getName() +"���ɹ��������ʱ��ָ���.�����[����˧��]����.");
        cm.dispose();
    }
    cm.dispose();
}


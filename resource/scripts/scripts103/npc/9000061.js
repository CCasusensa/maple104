
importPackage(net.sf.odinms.client); 
importPackage(net.sf.odinms.tools); 
importPackage(net.sf.odinms.server);

var status = 0; 
var fee=0; 
var chance = Math.floor(Math.random()*4+1); 
var typed=0;

var compchoice; 
var playerchoice; 
var Frock = "#fUI/UIWindow.img/RpsGame/Frock#"; 
var Fpaper = "#fUI/UIWindow.img/RpsGame/Fpaper#"; 
var Fscissor = "#fUI/UIWindow.img/RpsGame/Fscissor#"; 
var rock = "#fUI/UIWindow.img/RpsGame/rock#"; 
var paper = "#fUI/UIWindow.img/RpsGame/paper#"; 
var scissor = "#fUI/UIWindow.img/RpsGame/scissor#"; 
var win = "#fUI/UIWindow.img/RpsGame/win#"; 
var lose = "#fUI/UIWindow.img/RpsGame/lose#"; 
var draw = "#fUI/UIWindow.img/RpsGame/draw#"; 
var spacing = "                                   "; 
var beta = "#fUI/UIWindow.img/BetaEdition/BetaEdition#\r\n"; 
var winmatch = false; 
var losematch = false 
var drawmatch = false; 
var cost = 2000000; //��Ҫ����Ǯ�棬�����.. �����Լ��ġ���
var winmesos = 2000000; //ӮǮ�������Լ���
var items = new Array(2000005); //�Դ����ƣ���Щ��������������Ӯ��������������д����Щ��������ӵģ�����Ҫ�Լ��ĵ����Ҳ�֪����û����Щ����..
var selectedType = -1; 
var selectedItem = -1; 
var map = 910000000; 
var textedd = new Array("������Ϸף���ҵ���������","ף������Ϸ���Ҹ�����","������Ϸף���ҵ���������");

var types=new Array("ʥ��","ף������","���������������","ȫ���������ݾ���","Ь�������������","���������������","���׹����������","���ֽ������������","�̽������������","����ħ���������","����ħ���������","˫�ֽ������������","˫�ָ������������","˫�ֶ��������������","ǹ�����������","ì�����������","�������������","�󹥻��������","ȭ�׹����������");
var typesitem=new Array("4031454","2340000","2040303","2040506","2040709","2040806","2040807","2043003","2043303","2043703","2043803","2044003","2044103","2044203","2044303","2044403","2044503","2044603","2044703");
var typesitemcost=new Array("555","541","2000","1400","999","888","2000","888","1000","888","1200","1250","777","730","1300","1210","2600","1200","700");


var typeszq=new Array("1302063","1302049","1332021","1302036","1302037","1302058","1302065","1302067","1302071","1302080","1302001","1312012","1322006","1322051","1322053","1372015","1372017","1372031","1432009","1432013","1432045","1432046","1442046","1402014","5010062");
var typesitemzqcost=new Array("4999","19999","29999","6999","3888","3888","9288","9999","3666","14150","2999","2999","999","19999","8888","999","11199","19999","9999","4999","999","8299","4999","29999","29999");

var typeslb=new Array("5390000","5390001","5390002","5072000");
var typesitemlbcost=new Array("200000","200000","200000","2000000");

	
function start() {
    status = -1;
	
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {//ExitChat
        cm.dispose();
    
    }else if (mode == 0){//No
        //cm.sendOk("�õ�,����������Ҫ��ʲô,�һ�������Ϊ������..");
        cm.dispose();

    }else{            //Regular Talk
        if (mode == 1)
            status++;
        else
            status--;
        
        if (status == 0) {
			
            cm.sendSimple("#b���!�ҵ���ID:"+cm.getNpc()+",�ܸ���Ϊ������,��������԰��������?\r\n#L100#[����]����[GM��,ʥ��]#l  #L3#[����]ʯͷ������#l\r\n#L6#[��ȡ]��Ʊ��15�ڽ��#l   #L7#[��ȡ]15�ڽ�һ���Ʊ#l\r\n#L9#[�¿�]��������(��)#l");
        } else if (status == 1) {
            if (selection == 334) {
                cm.openNpc(9000011);					  
            } 
            if (selection == 110) {
                cm.openNpc(9000011);					  
            } 
            if (selection == 6) {
                if(cm.haveItem(4002000,1)==true && cm.getMeso()<=600000000){
                    cm.gainMeso(1500000000);
                    cm.sendOk("��ϲ���һ��ɹ���"); 
                    cm.gainItem(4002000,-1);
                    cm.dispose();
                }else{
                    cm.sendOk("�һ�ʧ�ܣ���û����Ʊ�����������ϵ�Ǯ����������6��!"); 
                    cm.dispose();
                }
            }else if (selection == 21) {
                typed=44;
                selStr = "���н�ʬ�Ľ�����#v4000082#����?.��������㹻�Ľ�������ô�����������ﻻ���������Ӵ���󲿷ݿɶ���Ҫ��ˬ�ҹ���Ŀ���ֱ�ӻ���������ץ�����ٺ٣�����ˬ�绹û���£��Ͽ컻�����~``#b";
                for (var i = 0; i < typeszq.length; i++) {
                    selStr += "\r\n#L" + i + "##v" +typeszq[i]+"##r��Ҫ["+typesitemzqcost[i]+"����ʬ�Ľ���]#l";
                }
                cm.sendSimple(selStr);
            //cm.sendOk("��ͣ����!"); 
            //cm.dispose();
            }else if (selection == 22) {
                cm.openNpc(9100002);
            }else if (selection == 100) {
                typed=101;
                selStr = "��ѡ����Ҫ��ȡ�ľ�.#r\r\n<���µľ���100%�ĳɹ����ʣ���������ΪGM���ᣬ�����������㹻�Ľ�ֺ�Ϳ������һ�ȡ>#b";
                for (var i = 0; i < types.length; i++) {
                    selStr += "\r\n#L" + i + "#" +types[i]+"#r��Ҫ["+typesitemcost[i]+"��]��ֺ#b";
                }
                cm.sendSimple(selStr);
            }else if (selection == 11) {
                typed=166;
                cm.sendGetText("#r��һ���������Ķ�������һ��.\r\n#b1.ȷ��������ͬʱ��һ����ͼ��һ���ߡ�\r\n2.������Ŀ����������Է��Ľ�ɫ����\r\n�������������⣬��ɵ�һ����ʧ�����޷�������Ϸ�����Լ��ͶԷ��е����м�.."); 
            }else if (selection == 7) {
                if(cm.getMeso()>=1500000000){
                    cm.sendOk("��ϲ���һ��ɹ���"); 
                    cm.gainItem(4002000,1);
                    cm.gainMeso(-1500000000);
                    cm.dispose();
                }else{
                    cm.sendOk("�һ�ʧ�ܣ���û���㹻�Ľ�ҡ�"); 
                    cm.dispose();
                }
            }else if (selection == 8) {
                typed=73;
                //cm.sendOk("�ȴ����ţ�GM�����ڲ���."); 
                //cm.dispose();
                cm.sendNext("���������ָע�����#b\r\n1.�����ɹ���,˫�����޷�����Ч��,ֻ�е�����,Ҳ���Ǳ��˲��ܿ��õ�Ч��.\r\n2.������һ�������һ��.\r\n3.ÿ�������ƴ�һ��ֿ�ѽ�ָ��.������Ѿ���һ���ˣ��Ͳ�Ҫ�������ˣ�������Ч��\r\n׼�����˵����һ����.")
            }else if (selection == 9) {
                if (cm.haveItem(4002000,10)==true){
                    cm.changeSex();
                    cm.sendOk("#b��ϲ�㣬�����ǳ��ĳɹ����۳�10����Ʊ\r\n#r�������ĸо��ǲ��Ǻ����ƣ���������������˾���˵�Լ������������˻�����Ů����.ȫ�������ҾͲ����ˣ����Ը���ȥ��.");
                    cm.gainItem(4002000,-10);
                    cm.dispose();
                }else{
                    cm.sendOk("�Բ�����û��10����Ʊ.Ŀǰ��������Ҫ10����Ʊ.");
                    cm.dispose();
                }
            }else if (selection == 10) {
                var statup = new java.util.ArrayList();
                cm.getChar().setHp(0);
                cm.getChar().setMp(0);
                statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.HP, java.lang.Integer.valueOf(0)));
                statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.MP, java.lang.Integer.valueOf(0)));
                cm.c.getPlayer().getClient().getSession().write (net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
                //cm.sendOk("�ȴ����ţ�GM�����ڲ���."); 
                cm.serverNotice("���������ԡ���������"+ cm.getChar().getName() +"���鳡ʧ�⣬���г�������ɱ����Ұ�ο��ο���ɡ�"); 
                cm.dispose();  
            }
            if (selection == 0) {
                typed=26;
                cm.sendSimple("#b��ѡ��һ�ֻ�ȡ��ʽ��#r\r\n#L0#ʹ��5000�����#l\r\n#L3#ʹ��5E��Ϸ�ҽ���#l \r\n#L1#ʹ��30�����˽�ֺ����#l\r\n#L2#ֱ�Ӵ��͵����˵�ͼ#l\r\n\r\n #n#k#bע��:��������Ҫ��5����.\r\n#k��Ŀǰ�Ѿ�ɱ��#r"+cm.getChar().getPvpKills()+"#k��   ��ɱ����:#r"+cm.getChar().getPvpDeaths()+"#k��     ��ˬ��:#r"+cm.getfsb()+"#k��");
			  
            } else if (selection == 1) {
              
			  
            } else if (selection == 2) {
                typed=2;
                cm.sendGetText("������ע���ٽ����?���Ӯ�˵Ļ����Ի��˫��������,�������������!"); 
             
            } else if (selection == 3) {
				
                typed=1;
                cm.sendSimple("ע�⣬ʤ�������200������ʧ����ʧȥ200��...\r\n" 
                    + "#L0##fUI/UIWindow.img/RpsGame/Frock##l" 
                    + "#L1##fUI/UIWindow.img/RpsGame/Fpaper##l" 
                    + "#L2##fUI/UIWindow.img/RpsGame/Fscissor##l" 
                    ); 
            } else if (selection == 5) {
                typed=5;
                var selStr = "����Ҫ��ս��Ķ������㹻ǿ����?����#e#r1��1#k#nPkϵͳ����Ա.�ҿ����ṩ���㵥����һ�������������ѽ���.��ô��?\r\n#e#bPs:(7-12)Ϊ1��1PK����#k#n"; 
                var pvproom = new Array( 
                    "\r\n"+ 
                    cm.getPvpRoom(map+07, 07), 
                    cm.getPvpRoom(map+08, 08)+"\r\n", 
                    cm.getPvpRoom(map+09, 09), 
                    cm.getPvpRoom(map+10, 10)+"\r\n", 
                    cm.getPvpRoom(map+11, 11), 
                    cm.getPvpRoom(map+12, 12));
                for (var i = 0; i < pvproom.length; i++) { 
                    selStr += "" + pvproom[i] + ""; 
                } 
                cm.sendSimple(selStr); 
            } 
        } else if (status == 2) {
            if(typed==1){
                if (selection == 0) { 
                    playerchoice = "rock"; 
                } else if (selection == 1) { 
                    playerchoice = "paper"; 
                } else if (selection == 2) { 
                    playerchoice = "scissor"; 
                } 
                var random = Math.floor(Math.random()*4); 
                if (random <= 1) { 
                    compchoice = "rock"; 
                } else if (random <= 2) { 
                    compchoice = "paper"; 
                } else if (random <= 4) { 
                    compchoice = "scissor"; 
                } 
                typed=2;
                cm.sendNext("��εĽ����..."); //������Ը�
            }else if(typed==44){
                if(cm.haveItem(4000082,typesitemzqcost[selection])==true){
                    cm.gainItem(typeszq[selection],1);
                    cm.gainItem(4000082,-typesitemzqcost[selection]);
                    cm.serverNotice("[�Ĳ�NPC]����ϲ~���:"+cm.getChar().getName()+"�ɹ�ʹ�ý���������һ���������~");
                    cm.sendOk("��ϲ�㣬��ȡ�ɹ�����ȥ�鿴һ�°�����.");
                    cm.dispose();
                }else{
                    cm.sendOk("�Բ�����û���㹻�Ľ���#v4000082#.");
                    cm.dispose();
                }			
            }else if(typed==45){
                if(cm.haveItem(5200002,typesitemlbcost[selection])==true){
                    cm.gainItem(typeslb[selection],3);
                    cm.gainItem(5200002,-typesitemlbcost[selection]);
                    cm.sendOk("��ϲ�㣬����ɹ�����ȥ�鿴һ�°�����.");
                    cm.dispose();
                }else{
                    cm.sendOk("�Բ�����û���㹻�Ľ����.");
                    cm.dispose();
                }		
            }else if(typed==101){
                if(cm.haveItem(4000054,typesitemcost[selection])==true){
                    cm.gainItem(typesitem[selection],1);
                    cm.gainItem(4000054,-typesitemcost[selection]);
                    cm.sendOk("��ϲ�㣬��ȡ�ɹ�����ȥ�鿴һ�°�����.");
                    cm.dispose();
                }else{
                    cm.sendOk("�Բ�����û���㹻�Ľ�ֺ.");
                    cm.dispose();
                }
            }else if(typed==166){
                cm.delRing(cm.getText());
            }else if(typed==2){
                fee = cm.getText(); 
                cm.sendYesNo("��ȷ��Ҫ��ע #r" + fee + "#k ð�ձ���?���ȼ������û����ô��ǮŶ!"); 		
            }else if(typed==5){
                selectedroom = selection; 
                var pvproom2 = new Array(0,1,2,3,4,5,6,7,8,9,10,11,12,13); 
                if (cm.getCharQuantity(map+pvproom2[selectedroom]) == 0) { 
                    cm.warp(map+pvproom2[selection]); 
                    cm.Charnotice(1, "�ɹ�����һ�����䡣"); 
                    cm.dispose(); 
                } else if (cm.getCharQuantity(map+pvproom2[selectedroom]) == 2) { 
                    cm.sendOk("����"+pvproom2[selectedroom]+"��׼����ϣ�"); 
                    cm.dispose(); 
                } else { 
                    cm.warp(map+pvproom2[selectedroom]); 
                    cm.dispose(); 
                }
            }else if(typed==73){
                typed=74;
                cm.sendSimple("��ѡ����Ҫ�����Ľ�ָ���ͣ�\r\n #b#L0#��Ҷֿ�ѽ�ָ#l\r\n#L1#����ֿ�ѽ�ָ#l \r\n#L2#����ֿ�ѽ�ָ#l");
            }else if(typed==26){
                if (selection == 0) { 
                    if (cm.getChar().GetMoney() < 5000) {
                        cm.sendOk("��Ǹ��û��5000����޷���������\r\n������ֱ�ӵ����¼������Ĺ�����ˬ�ң�Ȼ����г�ֵ��ע���ֵʱ������������ߣ��ɹ��������ԱߵĴ�NPC������"); 
                        cm.dispose();
                    }else{
                        player.GainMoney(-5000);
                        cm.gainItem(4001129,1);
                        cm.sendOk("��Ŷ������Ұ����Ǽ���ң���ϲ��ȡ�ɹ����۳�5000���.");
                        cm.dispose();
                    }
                }else if (selection == 3) {
                    if (cm.getMeso() >= 500000000) {
                        cm.sendOk("��ϲ��ϲ����ȡ�ɹ���"); 
                        cm.gainItem(4001129,1);
                        cm.gainMeso(-500000000);
                        cm.dispose();
                    }else{
                        cm.sendNext("�Բ�����û��5E��Ϸ��");
                        cm.dispose();
                    }
                }else if (selection == 1) {
                    if (cm.haveItem(4000054,30)==true) {
                        cm.sendOk("��ϲ��ϲ����ȡ�ɹ���"); 
						
                        cm.gainItem(4000054,-30);
                        cm.gainItem(4001129,1);
                        cm.dispose();
                    }else{
                        typed=230;
                        cm.sendNext("�Բ�����û���㹻�����˽�ֺ,����Ʒ��������#v4000054#.\r\n#r�����һ�����͵����˵�ͼ��ս����!");
                    //cm.dispose();
                    }
                }else if (selection == 2) {	
                    cm.warp(211040800,0);
                    cm.dispose();
                } 
				
              
            }	
				
        } else if (status == 3) {
            if(typed==74){
                if (selection == 0) {
                    if (cm.haveItem(5200002)==true){
                        typed=75;
                        cm.sendGetText("������Է������֣������򲻳��Է������֣���ô������Ҽ������Ȼ�������ִ��棬��ͰѶԺõ����ָ��ƺ��ˣ��ڵ����ﰴctrl+v��ճ������.\r\n#r���ѣ�����������ˣ�����Ǯ���ƣ���ȫ����.������Ѹ���"); 
                    }else{
                        cm.sendOk("�Բ�����û�н����.Ŀǰ��������Ҫһ��.");
                        cm.dispose();
                    }
                }else if (selection == 1) {
                    if (cm.haveItem(5200002)==true){
                        typed=76;
                        cm.sendGetText("������Է������֣������򲻳��Է������֣���ô������Ҽ������Ȼ�������ִ��棬��ͰѶԺõ����ָ��ƺ��ˣ��ڵ����ﰴctrl+v��ճ������.\r\n#r���ѣ�����������ˣ�����Ǯ���ƣ���ȫ����.������Ѹ���"); 
                    }else{
                        cm.sendOk("�Բ�����û�н����.Ŀǰ��������Ҫһ��.");
                        cm.dispose();
                    }
                }else if (selection == 2) {
                    if (cm.haveItem(5200002)==true){
                        typed=77;
                        cm.sendGetText("������Է������֣������򲻳��Է������֣���ô������Ҽ������Ȼ�������ִ��棬��ͰѶԺõ����ָ��ƺ��ˣ��ڵ����ﰴctrl+v��ճ������.\r\n#r���ѣ�����������ˣ�����Ǯ���ƣ���ȫ����.������Ѹ���"); 
                    }else{
                        cm.sendOk("�Բ�����û�н����.Ŀǰ��������Ҫһ��.");
                        cm.dispose();
                    }
                }
            }else if(typed==230){
                cm.warp(211040800,0);
                cm.dispose();
            }else if(typed==2){
                if (playerchoice == "rock" && compchoice == "rock") { 
                    cm.sendOk(Frock + spacing + rock + draw); 
                    drawmatch = true; 
                    cm.gainMeso(-cost);
                } else if (playerchoice == "rock" && compchoice == "paper") { 
                    cm.sendOk(Frock + spacing + paper + lose); 
                    losematch = true; 
                    cm.gainMeso(-cost);
                    cm.serverNotice("�����ֹ��桻����.������"+ cm.getChar().getName() +"����ʯͷ���������ʧ���ˣ����һ��Ϊ������");
                } else if (playerchoice == "rock" && compchoice == "scissor") { 
                    cm.sendOk(Frock + spacing + scissor + win); 
                    winmatch = true; 
                    cm.gainMeso(winmesos);
                    cm.serverNotice("�����ֹ��桻����ϲ"+ cm.getChar().getName() +"����ʯͷ���������ʤ���ˣ�");
                //cm.gainItem(items[Math.floor(Math.random() * items.length)],1);
                } else if (playerchoice == "paper" && compchoice == "rock") { 
                    cm.sendOk(Fpaper + spacing + rock + win); 
                    winmatch = true; 
                    cm.gainMeso(winmesos);
                    //cm.gainItem(items[Math.floor(Math.random() * items.length)],1);
                    cm.serverNotice("�����ֹ��桻����ϲ"+ cm.getChar().getName() +"����ʯͷ���������ʤ���ˣ�");
                } else if (playerchoice == "paper" && compchoice == "paper") { 
                    cm.sendOk(Fpaper + spacing + paper + draw); 
                    drawmatch = true; 
                    cm.gainMeso(-cost);
                } else if (playerchoice == "paper" && compchoice == "scissor") { 
                    cm.sendOk(Fpaper + spacing + scissor + lose); 
                    losematch = true; 
                    cm.gainMeso(-cost);
                    cm.serverNotice("�����ֹ��桻����.������"+ cm.getChar().getName() +"����ʯͷ���������ʧ���ˣ����һ��Ϊ������");
                } else if (playerchoice == "scissor" && compchoice == "rock") { 
                    cm.sendOk(Fscissor + spacing + rock + lose); 
                    losematch = true; 
                    cm.gainMeso(-cost);
                    cm.serverNotice("�����ֹ��桻����.������"+ cm.getChar().getName() +"����ʯͷ���������ʧ���ˣ����һ��Ϊ������");
                } else if (playerchoice == "scissor" && compchoice == "paper") { 
                    cm.sendOk(Fscissor + spacing + paper + win); 
                    winmatch = true; 
                    cm.gainMeso(winmesos);
                    cm.serverNotice("�����ֹ��桻����ϲ"+ cm.getChar().getName() +"����ʯͷ���������ʤ���ˣ�");
                //cm.gainItem(items[Math.floor(Math.random() * items.length)],1);
                } else if (playerchoice == "scissor" && compchoice == "scissor") { 
                    cm.sendOk(Fscissor + spacing + scissor + draw); 
                    drawmatch = true; 
                    cm.gainMeso(-cost);
                } else { 
                    cm.sendOk("������..."); 
                }

            }else{
                if (cm.getMeso() < fee) { 
                    cm.sendOk("Ŷ�ǣ�������˼��û��ô��Ǯ�ˣ�ȥ׬��Ǯ�����ɣ���ɲ�����ѵ�!"); 
                    cm.dispose(); 
                } else if (cm.getMeso() >= 1050000000) { 
                    cm.sendOk("�Բ���,��Ľ�Ҵ���10.5��,���Բ��ܲ��ڴ˴���ע!"); 
                    cm.dispose(); 
                } else if (cm.getText() < 0) { 
                    cm.sendOk("������ó�������Ȼ���븺����һ��ȥ!"); 
                    cm.dispose(); 
                } else if (chance <= 1) { 
                    cm.gainMeso(-fee); 
                    cm.sendNext("Ŷ���������������ô��Ŷ�������� ����һ����!"); 
                    cm.serverNotice("���ĳ����桻����.������"+ cm.getChar().getName() +"���ڶĳ�������⣬���һ��Ϊ�����ɣ�"); 
                    cm.dispose(); 
                } 
                else if (chance == 2) { 
                    cm.gainMeso(-fee); 
                    cm.sendNext("Ŷ���������������ô��Ŷ�������� ����һ����!"); 
                    cm.serverNotice("���ĳ����桻����.������"+ cm.getChar().getName() +"���ڶĳ�������⣬���һ��Ϊ�����ɣ�"); 
                    cm.dispose(); 
                } 
                else if (chance == 3) { 
                    cm.gainMeso(-fee); 
                    cm.sendNext("Ŷ���������������ô��Ŷ�������� ����һ����!"); 
                    cm.serverNotice("���ĳ����桻����.������"+ cm.getChar().getName() +"���ڶĳ�������⣬���һ��Ϊ�����ɣ�"); 
                    cm.dispose(); 
                } 
                else if (chance >= 4) { 
                    cm.gainMeso(fee * 2); 
                    cm.sendNext("#r��������ϲ��#k! ��Ӯ��! ������������������һ�ѹ�!"); 
                    cm.serverNotice("���ĳ����桻����ϲ"+ cm.getChar().getName() +"���ڶĳ�Ӯ�ô�����ң����һ��Ϊ��ף�ذɣ�"); 
                    cm.dispose(); 
                } 
            }
				
				
	            
        } else if (status == 4) {
            if(typed==75){
                cm.gainItem(5200002,-1);
                cm.makeRing(cm.getText(),1112800);
                cm.sendOk("��ϲ�������ɹ�!");
                cm.dispose();
            }else if(typed==76){
                cm.gainItem(5200002,-1);
                cm.makeRing(cm.getText(),1112801);
                cm.sendOk("��ϲ�������ɹ�!");
                cm.dispose();
            }else if(typed==77){
                cm.gainItem(5200002,-1);
                cm.makeRing(cm.getText(),1112802);
                cm.sendOk("��ϲ�������ɹ�!");
                cm.dispose();
            }else{
                cm.dispose();
            }
        }

    }
}
	




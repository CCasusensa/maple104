/*
	Mady By Coffee
	Powered By XXMS
	Warp NPC
*/
var bossmaps = Array( 
                                                                                Array(100020401,0,"#b��ʬĢ���ĳ�Ѩ"),
                                                                                Array(100020301,0,"#b��Ģ�����ĳ�Ѩ"),   
										Array(100020101,0,"#bĢ�����ĳ�Ѩ"),     
										Array(230040420,0,"#bƤ��ū˹��Ѩ"), 
										Array(211042400,0,"#b������̳���"), 
										Array(220080001,0,"#bʱ�����ı�Դ"), 
										Array(240020402,0,"#b�������Ϣ��"), 
										Array(240020102,0,"#b����ҵ�ɭ��"),   
										Array(270050000,0,"#b��Ļƻ�"),
										Array(551030100,0,"#b��ɭ����"),
										Array(541020700,0,"#b�������ż�"),
										Array(240040700,0,"#b����������Ϣ��"),
										Array(702070400,0,"#b�ؾ�����")
										);
var monstermaps = Array(
                                                                                Array(806250097,0,"ˢ���ǽ�ֺ-  ˢˢˢ               δ֪"),
                                                                                Array(100010100,0,"���ִ�   -  �ξ�С��          3��-10��"),
										Array(101020100,0,"��ľ��   -  �ӽ���ĵط�      8��-15��"), 
										Array(102030000,0,"��ʿ���� -  Ұ�������       15��-20��"), 
										Array(102030400,0,"��ʿ���� -  �ҽ�֮��         20��-40��"), 
										Array(551000200,0,"�������� -  ��컨· II      50��-70��"), 
										Array(600020300,0,"�ڲ�����װ�� - ��е֩�붴Ѩ  70��-80��"), 
										Array(702010000,0,"��������   -   ɽ��          80��-90��"), 
										Array(220060000,0,"��߳�   -   Ť����ʱ��1     90��-100��"), 
										Array(220060200,0,"��߳�   -   Ť����ʱ��3    100��-110��"), 
										Array(220060201,0,"��߳�   -   ʱ���쳣֮��   110��-120��"), 
										Array(240040510,0,"��ľ��   -   ������Ѩ       Ҫ��120������")
										); 
var townmaps = Array(
										Array(910000000,0,"#b�����г�"),
                                                                                //Array(809030000,0,"#b������-�齱"),

        Array(100000104,0,"#b���ִ�������"),

        //Array(140000000,0,"#b���"),
                                                                                Array(106020000,0,"#bĢ���Ǳ�"),
                                                                                Array(271010000,0,"#b���ƻ������ִ�"),
										Array(104000000,0,"#b�����"), 
										Array(100000000,0,"#b���ִ�"), 
										Array(101000000,0,"#bħ������"), 
										Array(102000000,0,"#b��ʿ����"), 
										Array(103000000,0,"#b��������"), 
										Array(120000000,0,"#bŵ����˹����ͷ"),
										Array(105000000,0,"#b����֮��"), 
										Array(200000000,0,"#b���֮��"),
										Array(211000000,0,"#b����ѩ��"), 
										Array(230000000,0,"#bˮ������"),  
										Array(222000000,0,"#bͯ����"), 
										Array(220000000,0,"#b��߳�"),
										Array(701000000,0,"#b��������"),
										Array(250000000,0,"#b����"), 
										Array(702000000,0,"#b������"), 
										Array(500000000,0,"#b̩��"),
										Array(260000000,0,"#bɳĮ֮��"), 
										Array(600000000,0,"#b��Ҷ��"), 
										Array(240000000,0,"#b��ľ��"), 
										Array(261000000,0,"#b�������"), 
										Array(221000000,0,"#b�����������"), 
										Array(251000000,0,"#b�ٲ���"),
										Array(701000200,0,"#r�Ϻ�ԥ԰"),
										Array(550000000,0,"#b��¡����"),
										Array(130000000,0,"#bʥ��"),  
										Array(801000000,0,"#b�Ѻʹ�"), 
										Array(540010000,0,"#b�¼��»���"),
										Array(541000000,0,"#b�¼�����ͷ"), 
										Array(270000100,0,"#bʱ�����"), 
										Array(702100000,0,"#b�ؾ���"),  
										Array(800000000,0,"#b�Ŵ�����") 

							);
var chosenMap = -1;
var monsters = 0;
var towns = 0;
var bosses = 0;

importPackage(net.sf.odinms.client);

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
            if (mode == -1) {
                cm.dispose();
            }
            else {
                if (status >= 3 && mode == 0) {
			cm.sendOk("�´��ټ�!.");
			cm.dispose();
			return;                    
                }
                if (mode == 1) {
			status++;
		}
		else {
			status--;
		}
               if (status == 0) {
                        cm.sendNext("#rHi,�������紫��Ա!");                  
                }
               if (status == 1) {
                   cm.sendSimple("#r#fUI/UIWindow.img/QuestIcon/3/0#\r\n#L0#���紫��#l\r\n#L1#��Ǹ,���ߴ���#l");
               }
               else if (status == 2) {
                   if (selection == 0) {
                       cm.sendSimple("#r#fUI/UIWindow.img/QuestIcon/3/0#\r\n#L0##b�����ͼ#l\r\n#L1#������ͼ#l\r\n#L2#BOSS��ͼ#l");
                   }
                   else if (selection == 1) {
                       cm.dispose();
                   }
               }
               else if (status == 3) {
                   if (selection == 0) {
                        var selStr = "ѡ�����Ŀ�ĵذ�.#b";
			for (var i = 0; i < townmaps.length; i++) {
				selStr += "\r\n#L" + i + "#" + townmaps[i][2] + "";
			}
                        cm.sendSimple(selStr);
                        towns = 1;
                   }
                   if (selection == 1) {
                       var selStr = "ѡ�����Ŀ�ĵذ�.#b";
                       for (var i = 0; i < monstermaps.length; i++) {
				selStr += "\r\n#L" + i + "#" + monstermaps[i][2] + "";
                       }
                       cm.sendSimple(selStr);
                       monsters = 1;
                   }
                   if (selection == 2) {
                       var selStr = "ѡ�����Ŀ�ĵذ�.#b";
                       for (var i = 0; i < bossmaps.length; i++) {
				selStr += "\r\n#L" + i + "#" + bossmaps[i][2] + "";
                       }
                       cm.sendSimple(selStr);
                       bosses = 1;
                   }
               }
            else if (status == 4) {
                if (towns == 1) {
                cm.sendYesNo("��ȷ��Ҫȥ " + townmaps[selection][2] + "? �۸�:#r"+townmaps[selection][1]+"#k���");
		chosenMap = selection;
                towns = 2;
                }
                else if (monsters == 1) {
                cm.sendYesNo("��ȷ��Ҫȥ " + monstermaps[selection][2] + "? �۸�:#r"+monstermaps[selection][1]+"#k���");
                chosenMap = selection;
                monsters = 2;
                }
                else if (bosses == 1) {
                cm.sendYesNo("��ȷ��Ҫȥ " + bossmaps[selection][2] + "? �۸�:#r"+bossmaps[selection][1]+"#k���");
                chosenMap = selection;
                bosses = 2;
                }
            }
            else if (status == 5) {
                if (towns == 2) {
                	if(cm.getMeso()>=townmaps[chosenMap][1]){
                		cm.warp(townmaps[chosenMap][0], 0);
                		cm.gainMeso(-townmaps[chosenMap][1]);
				
                	}else{
                		cm.sendOk("��û���㹻�Ľ��Ŷ!");
                	}
                    cm.dispose();
                }
                else if (monsters == 2) {
                    if(cm.getMeso()>=monstermaps[chosenMap][1]){
                		cm.warp(monstermaps[chosenMap][0], 0);
                		cm.gainMeso(-monstermaps[chosenMap][1]);
                	}else{
                		cm.sendOk("��û���㹻�Ľ��Ŷ!");
                	}
                    cm.dispose();
                }
                else if (bosses == 2) {
                    if(cm.getMeso()>=bossmaps[chosenMap][1]){
                		cm.warp(bossmaps[chosenMap][0], 0);
                		cm.gainMeso(-bossmaps[chosenMap][1]);				
                	}else{
                		cm.sendOk("��û���㹻�Ľ��Ŷ!");
                	}
                    cm.dispose();
                }
            }
              
            }
}

/*
	�ű�����: 		����NPC
           �޸ģ�                     һֽ������ؼ
           ����ָ����              �ҷ�ʱ�г���
*/
var bossmaps = Array( 
Array(104010200,0,"#d��ţ����BOSS-��ţ��#e#r���޵ȼ����ơ�#n"), 
Array(100020101,10,"#dĢ��ɭ��BOSS-Ģ����#e#r����Ҫ10���ϡ�#n"), 
Array(100020301,10,"#dĢ��ɭ��BOSS-��Ģ��#e#r����Ҫ10���ϡ�#n"), 
Array(100020401,10,"#dĢ��ɭ��BOSS-��ʬ��#e#r����Ҫ10���ϡ�#n"), 
Array(102020500,10,"#d����ش�BOSS-������#e#r����Ҫ10���ϡ�#n"), 
Array(120030500,10,"#d�ƽ�̲BOSS-�޾�з#e#r����Ҫ10���ϡ�#n"), 
Array(103030400,10,"#d����ش�BOSS-������#e#r����Ҫ10���ϡ�#n"), 
Array(101040300,10,"#d����ɭ��BOSS-��ʿ��#e#r����Ҫ10���ϡ�#n"), 
Array(105020400,30,"#d���嶴ѨBOSS-������#e#r����Ҫ30���ϡ�#n"), 
Array(222010310,30,"#d��������BOSS-��β��#e#r����Ҫ30���ϡ�#n"), 
Array(800010100,50,"#d��ʵ���BOSS-��Ģ��#e#r����Ҫ50���ϡ�#n"), 
Array(200010300,50,"#d���¥��BOSS-������#e#r����Ҫ50���ϡ�#n"), 
Array(925100500,50,"#d��������BOSS-�Ϻ���#e#r����Ҫ50���ϡ�#n"), 
Array(105030500,50,"#d���ɼ�̳BOSS-�����#e#r����Ҫ50���ϡ�#n"), 
Array(250010304,50,"#d�������BOSS-�ϵ���#e#r����Ҫ50���ϡ�#n"), 
Array(260010201,50,"#d���ﰲ��BOSS-������#e#r����Ҫ50���ϡ�#n"), 
Array(220050100,50,"#dʱ������BOSS-èͷӥ#e#r����Ҫ50���ϡ�#n"), 
Array(252020000,80,"#d�ƽ���ԺBOSS-������#e#r����Ҫ80���ϡ�#n"),
Array(221040301,80,"#d���ײ�ԭBOSS-����˾��#e#r����Ҫ80���ϡ�#n"), 
Array(250010503,80,"#d����ɭ��BOSS-������ʦ#e#r����Ҫ80���ϡ�#n"), 
Array(541010060,80,"#d�ߺŴ���BOSS-���鴬��#e#r����Ҫ80���ϡ�#n"), 
Array(211040101,100,"#dѩԭ����BOSS-����ѩ��#e#r����Ҫ100���ϡ�#n"), 
Array(300030310,100,"#d����ɭ��BOSS-����Ů��#e#r����Ҫ100���ϡ���δ�޸�#n"), 
Array(240040401,100,"#d����Ͽ��BOSS-����#e#r����Ҫ120���ϡ�#n"), 
Array(270010500,120,"#d׷��֮·BOSS-���#e#r����Ҫ120���ϡ�#n"), 
Array(270030500,120,"#d��ȴ֮·BOSS-�׿�#e#r����Ҫ120���ϡ�#n"), 
Array(270020500,120,"#d���֮·BOSS-����#e#r����Ҫ120���ϡ�#n"), 
Array(240020402,120,"#d�����ܵ�BOSS-����#e#r����Ҫ120���ϡ�#n"), 
Array(240020101,120,"#d����ɭ��BOSS-��ӥ#e#r����Ҫ120���ϡ�#n"),   
Array(802000101,120,"#d���֮��BOSS-δ��#e#r����Ҫ120���ϡ�#n"), 
Array(230040410,120,"#d���ѨBOSS-Ƥ��ū˹#e#r����Ҫ120���ϡ�#n"), 
Array(211042300,120,"#dѪ��֮ħBOSS-������̳#e#r����Ҫ120���ϡ�#n"), 
Array(220080000,120,"#dʱ�����ı�ԴBOSS-����#e#r����Ҫ120���ϡ�#n"), 
Array(240020402,120,"#d�������Ϣ��BOSS-����#e#r����Ҫ120���ϡ�#n"), 
Array(240020101,120,"#d����ҵ�ɭ��BOSS-��ӥ#e#r����Ҫ120���ϡ�#n"),   
Array(551030100,120,"#d��ɭ����BOSS-�İ�ʨ#e#r����Ҫ120���ϡ�#n"),
Array(541020700,120,"#d�����ż�BOSS-������#e#r����Ҫ120���ϡ�#n"),
Array(240040700,120,"#dԶ�Ű���BOSS-��������#e#r����Ҫ120���ϡ�#n"),
Array(702070400,120,"#d�ؾ�����BOSS-������ɮ#e#r����Ҫ120���ϡ���δ�޸�#n"),
Array(802000801,120,"#d���֮��BOSS-�ʼһ���#e#r����Ҫ120���ϡ���δ�޸�#n"),
Array(271000000,120,"#d��ˬ֮��BOSS-���ɾ���#e#r����Ҫ120���ϡ���δ�޸�#n")
										);
var townmaps = Array(
Array(50000,0,"�ʺ絺"),
Array(914040000,0,"���"),
Array(130000000,0,"ʥ��"),
Array(105000000,0,"����֮��"), 
Array(300000000,0,"����ɭ��"), 
Array(252000000,0,"�ƽ���Ժ"), 
Array(104000000,0,"�����"), 
Array(100000000,0,"���ִ�"), 
Array(310000000,0,"���¶�˹̹"), 
Array(271010000,0,"�ƻ������ִ�"), 
Array(106020000,0,"Ģ����"), 
Array(101000000,0,"ħ������"), 
Array(102000000,0,"��ʿ����"), 
Array(103000000,0,"��������"), 
Array(103040000,0,"�϶��㳡"), 
Array(120000000,0,"ŵ����˹"),
Array(682000000,0,"�ֹ�լۡ"),
Array(110000000,0,"�ƽ𺣰�"),
Array(200000301,0,"��������"),
Array(200000000,0,"���֮��"),
Array(211000000,0,"����ѩ��"), 
Array(230000000,0,"ˮ������"),  
Array(222000000,0,"ͯ����"), 
Array(220000000,0,"��߳�"),
Array(802000101,0,"���֮��"),
Array(600000000,0,"����������"),
Array(103040000,0,"101���"), 
Array(701000000,0,"��������"),
Array(250000000,0,"����"), 
Array(702000000,0,"������"), 
Array(500000000,0,"̩��"),
Array(260000000,0,"���ﰲ��"), 
Array(600000000,0,"��Ҷ��"), 
Array(240000000,0,"��ľ��"), 
Array(261000000,0,"�������"), 
Array(221000000,0,"�����������"), 
Array(251000000,0,"�ٲ���"),
Array(701000200,0,"�Ϻ�ԥ԰"),
Array(550000000,0,"��¡����"),  
Array(801000000,0,"�Ѻʹ�"), 
Array(540000000,0,"�¼��»���"),
Array(270000100,0,"ʱ�����"),  
Array(800000000,0,"�Ŵ�����") 

							);
var monstermaps = Array(
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
                if (status >= 0 && mode == 0) {
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
                   if (selection == 0) {
                       cm.sendSimple("#b#fUI/UIWindow.img/QuestIcon/3/0#\r\n#L0#�����ͼ#l#L1#������ͼ#l#L2#BOSS��ͼ#l\r\n#L3#�Ҹ��� ʥ����#l#L4#��Ӱ�� ��ͼ�ر�#l\r\n#L5#���˽� רҵ������ׯ#l");
                   }
                   else if (selection == 1) {
                       cm.dispose();
                   }
               }
               else if (status == 1) {
                   if (selection == 0) {
                        var selStr = "ѡ�����Ŀ�ĵذ�,�������ͼ������@fm.#b";
			for (var i = 0; i < townmaps.length; i++) {
				selStr += "\r\n#L" + i + "#" + townmaps[i][2] + "";
			}
                        cm.sendSimple(selStr);
                        towns = 1;
                   }
		   if (selection == 1) {
                       var selStr = "ѡ�����Ŀ�ĵذ�,�������ͼ������@fm.#b";
                       for (var i = 0; i < monstermaps.length; i++) {
				selStr += "\r\n#L" + i + "#" + monstermaps[i][2] + "";
                       }
                       cm.sendSimple(selStr);
                       monsters = 1;
                   }
                   if (selection == 2) {
                       var selStr = "";
                       for (var i = 0; i < bossmaps.length; i++) {
				selStr += "#L" + i + "#" + bossmaps[i][2] + "\r\n";
                       }
                       cm.sendSimple(selStr);
                       bosses = 1;
                   }
		   if (selection == 3) {
			cm.warp(209000000);
			cm.dispose();
		   }
		   if (selection == 4) {
			cm.warp(970000100);
			cm.dispose();
		   }
		   if (selection == 5) {
			cm.warp(910001000);
			cm.dispose();
		   }

               }
            else if (status == 2) {
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
                cm.sendYesNo("��ȷ��Ҫȥ " + bossmaps[selection][2] + "?");
                chosenMap = selection;
                bosses = 2;
                }
            }
            else if (status == 3) {
                if (towns == 2) {
                	if(cm.getMeso()>=townmaps[chosenMap][1]){
                		cm.warp(townmaps[chosenMap][0], 0);
                	//	cm.gainMeso(-townmaps[chosenMap][1]);
				
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
                    if(cm.getLevel()>=bossmaps[chosenMap][1]){
                		cm.warp(bossmaps[chosenMap][0], 0);				
                	}else{
                		cm.sendOk("��ĵȼ�����!");
                	}
                    cm.dispose();
                }
            }
              
            }
}



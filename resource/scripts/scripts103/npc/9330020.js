/*
	Mady By Coffee
	Powered By XXMS
	Warp NPC
*/
var bossmaps = Array( 	
Array(803000400,0,"#r#e糺��������(��Ҫ180��)"),								            //Array(211042300,0,"#r#e��������(��Ҫ150��)"), 
//Array(240050400,0,"#r#e���װ�������(��Ҫ160��)"), 
Array(802000820,0,"#n#bŷ����(���BOSS,��Ҫ180��)"), 	
Array(240050000,0,"#r#e��������/���װ�������(��Ҫ120��)"), 									
Array(702070400,0,"#n#b������ɮ(���BOSS,��Ҫ120��)"), 									Array(551030100,0,"#r#e�İ�ʨ���ͱ�����(��Ҫ90��)"),
Array(230040410,0,"#n#bƤ��ū˹(��Ҫ100��)"),									           Array(220080000,0,"#n#b������ͼ˹(��Ҫ80��)"),
Array(211042300,0,"#r#e����/��������(��Ҫ50��)"),    
Array(541020700,0,"#n#b��������(��Ҫ90��)"),
Array(541010060,0,"#n#b���鴬��(��Ҫ80��)"),
Array(211061001,0,"#r#eʨ���� - �ࡤ�װ�(��Ҫ120��)"),
Array(270050000,0,"#r#eʱ������ - Ʒ����(��Ҫ120��)"),
Array(271030600,0,"#r#e�����Ů�� - ϣ��˹(��Ҫ170��)")		                                               								);

var townmaps = Array(                                       								
Array(700000000,0,"����ͼ"),
Array(140000000,0,"���"),
Array(250000000,0,"����"), 
Array(500000000,0,"̩��"),
Array(104000000,0,"�����"), 
Array(100000000,0,"���ִ�"), 
Array(222000000,0,"ͯ����"), 
Array(220000000,0,"��߳�"),
Array(702000000,0,"������"), 
Array(600000000,0,"��Ҷ��"), 
Array(240000000,0,"��ľ��"), 
Array(251000000,0,"�ٲ���"),
Array(801000000,0,"�Ѻʹ�"), 
Array(702100000,0,"�ؾ���"),  
Array(101000000,0,"ħ������"),
Array(102000000,0,"��ʿ����"),  
Array(103000000,0,"��������"), 
Array(105000000,0,"����֮��"), 
Array(200000000,0,"���֮��"),
Array(211000000,0,"����ѩ��"), 
Array(230000000,0,"��������"),  
Array(701000000,0,"��������"),
Array(260000000,0,"���ﰲ��"), 
Array(261000000,0,"�������"), 
Array(270000100,0,"ʱ�����"), 
Array(106020000,0,"Ģ���Ǳ�"),
Array(800000000,0,"�Ŵ�����"),
Array(271000000,0,"δ��֮��"),
Array(550000000,0,"��¡����"),
Array(541000000,0,"�¼�����ͷ"), 
Array(221000000,0,"�����������"),
Array(120000000,0,"ŵ����˹����ͷ")

							);
var chosenMap = -1;
var towns = 0;
var bosses = 0;

importPackage(org.client);

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
                   if (selection == 0) {
                       cm.sendSimple("#k#fUI/UIWindow.img/QuestIcon/3/0#\r\n#L0#���봫�͵������ͼ#l\r\n#L1#���봫�͵�BOSS��ͼ#l#l");
                   }
                   else if (selection == 1) {
                       cm.dispose();
                   }
               }
               else if (status == 1) {
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
                       for (var i = 0; i < bossmaps.length; i++) {
				selStr += "\r\n#L" + i + "#" + bossmaps[i][2] + "";
                       }
                       cm.sendSimple(selStr);
                       bosses = 1;
                   }
               }
            else if (status == 2) {
                if (towns == 1) {
                cm.sendYesNo("#r��ȷ��Ҫȥ " + townmaps[selection][2] + " #r"+townmaps[selection][1]+"");
		chosenMap = selection;
                towns = 2;
                }
                else if (bosses == 1) {
                cm.sendYesNo("#r��ȷ��Ҫȥ " + bossmaps[selection][2] + " #r"+bossmaps[selection][1]+"");
                chosenMap = selection;
                bosses = 2;
                }
            }
            else if (status == 3) {
                if (towns == 2) {
                	if(cm.getMeso()>=townmaps[chosenMap][1]){
                		cm.warp(townmaps[chosenMap][0], 0);
                		cm.gainMeso(-townmaps[chosenMap][1]);
				
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

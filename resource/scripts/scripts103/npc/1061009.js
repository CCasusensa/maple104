importPackage(net.sf.odinms.client);
var ttt ="#fUI/UIWindow.img/Quest/icon9/0#";
var xxx ="#fUI/UIWindow.img/Quest/icon8/0#";
var sss ="#fUI/UIWindow.img/QuestIcon/3/0#";


var status = 0;


function start() {
    status = -1;
    action(1, 0, 0);
}
function action(mode, type, selection) {
    if (mode == -1) {
        cm.sendOk("#b�õ�,�´��ټ�.");
        cm.dispose();
    } else {
        if (status >= 0 && mode == 0) {
            cm.sendOk("#b�õ�,�´��ټ�.");
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;





        if (status == 0) {
		
            var add = "��ӭ����#r�����"+cm.GetSN()+"#k,�����Ǳ�������ϵͳ,\r\n\r\n#r";

	    add += "#g#L100#�˶��ḱ��#l\r\n\r\n";

            add += "#r#L99#��������#l  #L98#�����Ѽ�#l  #L13#��������#l  #L14#糺����#l\r\n";

            add += "#L20##b��սŮ��#l  #L11#�ռ�����#l  #L2#��ҪˢǮ#l  #L1#��ս����#l\r\n";

            add += "#L6##r��������#l  #L12#ʨ������#l  #L15#�ڷ�����#l  #L16#��ħŮ��#l\r\n";

            add += "#L17##b��ţүү#l  #L18#��������#l  #L21#������˵#l  #L29#��ɫ����#l\r\n";

            add += "#L24##r��������#l  #L23#��¸���#l  #L26#������˵#l  #L25#ս����˹#l\r\n";

	    add += "#L10##b���鴳��#l  #L9#������ɮ#l  #L8#���帱��#l  #L7#������#l\r\n";




            cm.sendSimple (add);    

        } else if (status == 1) {


            if (selection == 0) {
                cm.warp(221024500,1);
                cm.dispose();

            } else if(selection == 1) {
                cm.openNpc(9020000);
            } else if(selection == 99) {
                cm.warp(910130101,0);
                cm.dispose();
            } else if(selection == 98) {
                cm.openNpc(9209103);

            } else if(selection == 2) {
                cm.openNpc(9050002);

            } else if(selection == 3) {
                cm.openNpc(9020000);

            } else if(selection == 29) {
                cm.warp(689010000,0);
                cm.dispose();

            } else if(selection == 4) {
                cm.openNpc(9020000);


            } else if(selection == 5) {
                cm.openNpc(9020000);


            } else if(selection == 6) {
                    cm.openNpc(2095000);


            } else if(selection == 7) {
                cm.warp(677000013,0);
                cm.dispose();

            } else if (selection == 20) { 
                cm.openNpc(9050001);

            } else if(selection == 8) {
                cm.openNpc(2010007);

            } else if(selection == 14) {
                cm.warp(803001200,0);
                cm.dispose();

            } else if(selection == 21) {
                cm.openNpc(1013106);

            } else if(selection == 23) {
		if (cm.haveItem(4032532)||cm.haveItem(4032529)) {
                    cm.sendOk("����㱳�������:#v4032532##v4032529#���.");
                    cm.dispose();
                }else {	
                    cm.openNpc(2159001);}
            } else if(selection == 24) {
                cm.openNpc(1096007);
            } else if(selection == 9) {
                cm.warp(702070400,0);
                cm.dispose();

            } else if(selection == 10) {
                if (cm.getHour() < 16) {
                    cm.sendOk("�������鴬�Ĵ��Ż�û�д�.");
                    cm.dispose();
                }else if (cm.haveItem(4000382) ||cm.haveItem(4000379) ||cm.haveItem(4000383)) {
                    cm.sendOk("����㱳�������:#v4000382##v4000379##v4000383#���.");
                    cm.dispose();
                }else {	
                    cm.warp(541010010,0);	
                    cm.sendOk("��Ը���ܴ�����鴬��,����չ�������ʵ����~�ռ�300��#v4000382#.��ע��ʱ��!!!����24��,������Ϊ����.!");
                    cm.dispose();
                }
            } else if(selection == 11) {
                cm.openNpc(9300010);

            } else if(selection == 12) {
                cm.warp(211070100,0);
		cm.sendOk("ʨ������ǰ��׼��������?");
                cm.dispose();

            } else if(selection == 13) {
                cm.warp(280020001,0);
                cm.dispose();

            } else if(selection == 15) {
                cm.openNpc(1012113);
            } else if(selection == 16) {
                cm.openNpc(9050005);
            } else if(selection == 17) {
		if (cm.haveItem(4161035)) {
                    cm.sendOk("����㱳�������:#v4161035#���.");
                    cm.dispose();
                }else {	
                    cm.openNpc(1092094);}
            } else if(selection == 25) {
                cm.openNpc(2142000);
            } else if(selection == 26) {
                cm.openNpc(9001000);
            } else if(selection == 18) {
                cm.openNpc(9310086);
                cm.dispose();
            } else if(selection == 100) {//�˶��ḱ��
                if (cm.getHour() < 12) {
                    cm.sendOk("#r����12���Ժ󿪷�������\r\n\r\n#b���ĵȴ�,(*^__^*) ��������");
                    cm.dispose();
                }else if (cm.haveItem(3994246) ||cm.haveItem(3994247) ||cm.haveItem(3994448) ||cm.haveItem(4001318) ||cm.haveItem(4031954)) {
                    cm.sendOk("����㱳�������:#v3994246#,#v3994247#,#v3994448#,#v4001318#,#v4031954#���.");
                    cm.dispose();
                }else {	
                    cm.warp(910023504,0);	
                    cm.sendOk("#e���Ͱ�.����,\r\n#r���������������ܻ�ø��õĵ��߽���");
                    cm.dispose();
                }

            } else if(selection == 27) {
                    cm.sendOk("������ʱû����");
                    cm.dispose();





            }					
        }
    }
}




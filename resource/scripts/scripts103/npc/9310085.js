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
		
            var add = "��ӭ����#r�����"+cm.GetSN()+"#k,�����Ǳ�������ϵͳ,";

            add += "����������,��������������,��������������ʢ������Ͻ���ǿ��,�����ḻ";

            add += "Ϊ���ǵ�ð��������������Ȥ,�Ͽ������������һ������.\r\n\r\n#r";

            add += "" + sss + "\r\n ";

            add += "#L13#"+xxx+""+ttt+"��������#l#b      #L14#"+ttt+""+xxx+"糺����#l#r\r\n ";

            add += "#L20#"+ttt+""+xxx+"��սŮ��#l#b      #L11#"+xxx+""+ttt+"�ռ�����#l#r\r\n ";

            add += "#L2#"+xxx+""+ttt+"��ҪˢǮ#l#b      #L1#"+ttt+""+xxx+"��ս����#l#r\r\n ";

            add += "#L6#"+ttt+""+xxx+"�������#l#b      #L12#"+xxx+""+ttt+"ʨ��������#l#r\r\n ";

            add += "#L10#"+xxx+""+ttt+"���鴬����#l#b    #L9#"+ttt+""+xxx+"��ս������ɮ#l#b\r\n ";

            add += "#L8#"+ttt+""+xxx+"���帱��#l#b      #L7#"+xxx+""+ttt+"����������#l#l#b\r\n";

            add += " #L15#"+ttt+""+xxx+"�����ڷ�����#l#b  #L16#"+xxx+""+ttt+"��ħŮ�̸���#l#l#b\r\n";

            add += " #L17#"+ttt+""+xxx+"��ţүү����#l#b  #L18#"+xxx+""+ttt+"����ʿ��Ӹ���#l#l#l#b\r\n";

            add += " #L21#"+ttt+""+xxx+"������˵����#l#b   #L19#"+xxx+""+ttt+"ţ�Ƶ����Ӹ���#l#l#l#b\r\n";

            add += " #L24#"+ttt+""+xxx+"ţ�Ƶ����Ӹ���#l#b       #L25#"+xxx+""+ttt+"��ս����˹#l#l#l#b\r\n";

            add += " #L26#"+ttt+""+xxx+"�����㲻�Ǹ���˵#l#b#L27#"+xxx+""+ttt+"����bigbang����#l#l#l#b\r\n";


            cm.sendSimple (add);    

        } else if (status == 1) {


            if (selection == 0) {
                cm.warp(221024500,1);
                cm.dispose();

            } else if(selection == 1) {
                cm.openNpc(9020000);

            } else if(selection == 2) {
                cm.openNpc(9050002);

            } else if(selection == 3) {
                cm.openNpc(9020000);


            } else if(selection == 4) {
                cm.openNpc(9020000);


            } else if(selection == 5) {
                cm.openNpc(9020000);


            } else if(selection == 6) {
                cm.openNpc(2091006);

            } else if(selection == 7) {
                cm.warp(677000013,0);
                cm.dispose();

            } else if (selection == 20) { 
                cm.openNpc(9050001);

            } else if (selection == 19) { 
                cm.openNpc(1096007);

            } else if(selection == 8) {
                cm.openNpc(2010007);

            } else if(selection == 14) {
                cm.warp(803001200,0);
                cm.dispose();

            } else if(selection == 21) {
                cm.openNpc(1013106);

            } else if(selection == 25) {
                cm.openNpc(2142000);
            } else if(selection == 26) {
                cm.openNpc(9001000);
            } else if(selection == 27) {
                cm.openNpc(2152019);

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
                cm.dispose();

            } else if(selection == 13) {
                cm.warp(280020001,0);
                cm.dispose();

            } else if(selection == 15) {
                cm.openNpc(1012113);
            } else if(selection == 16) {
                cm.openNpc(9050005);
            } else if(selection == 17) {
                cm.openNpc(1092094);
            } else if(selection == 24) {
                cm.openNpc(2159001);
            } else if(selection == 18) {
                cm.openNpc(2060009);
                cm.dispose();









            }					
        }
    }
}


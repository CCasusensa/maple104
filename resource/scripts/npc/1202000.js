/*
 * Tutorial Lirin
 */

var status = -1;

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (cm.getPlayer().getMapId() != 140090000) {
        if (status == 0) {
            cm.sendSimple("��ʲô����֪����������#b#l\r\n#L0#����˭��#l #l\r\n#L1#���������#l #l\r\n#L2#����˭��#l#l\r\n#L3#����������Ӧ����Щʲô��#l #l\r\n#L4#����һ�±�����ʹ�á�#l #l\r\n#L5#������߼��ܣ�#l #l\r\n#L6#��������װ����#l #l\r\n#L7#����ʹ�ÿ�ݼ���#l #l\r\n#L8#�������ܴ������ӣ�#l #l\r\n#L9#������������#l#k");
        } else if (status == 1) {
            if (selection == 0) {
                cm.sendNext("����������ǰ���Ӻ�ħ��ʦ��������ð�յ�������ڶ�Ӣ���е�һ������Ϊ����ħ��ʦ�������ʧȥ�����еļ��䡣");
            } else if (selection == 1) {
                cm.sendNext("��������㱻����������˯�����������һ���캮�ض���С��������ľ�����Ϊ��졣");
            } else if (selection == 2) {
                cm.sendNext("�������Ԥ��֮˵������ȴ������ѵ����һ������ա��Ժ�Ҳ��һֱ������򵼡�");
            } else if (selection == 3) {
                cm.sendNext("��ϸ������˴���������˵�������ǲ���һֱ��������øϽ��ش����ֻҪ˳��ָʾ�ƣ����ܻص������");
            } else {
                cm.summonMsg(selection);
            }
            cm.dispose();
        }
    } else {
        if (cm.getInfoQuest(21019).equals("")) {
            if (status == 0) {
                cm.sendNext("���������ˣ�");
            } else if (status == 1) {
                cm.sendNextPrevS("�������ǣ�", 2);
            } else if (status == 2) {
                cm.sendNextPrev("��һֱ�ڵ��㣬����������ͺ�ħ��ʦս����Ӣ��������");
            } else if (status == 3) {
                cm.sendNextPrevS("��������˵ʲô���㵽����˭��", 2);
            } else if (status == 4) {
                cm.sendNextPrevS("�ȵȡ�������˭������ôʲô���벻����������������ͷ���ۣ�", 2);
            } else if (status == 5) {
                cm.showWZEffect("Effect/Direction1.img/aranTutorial/face");
                cm.showWZEffect("Effect/Direction1.img/aranTutorial/ClickLirin");
                cm.updateInfoQuest(21019, "helper=clear");
                cm.dispose();
            }
        } else {
            if (status == 0) {
                cm.sendNext("������");
            } else if (status == 1) {
                cm.sendNextPrevS("�ҡ�����ʲô���ǲ����������������������˭��", 2);
            } else if (status == 2) {
                cm.sendNextPrev("��һ�㡣��ħ��ʦ����������ʧȥ�˼��䡭���������ò��ŵ��ġ�����֪�������飬�Ҷ���һһ�����㡣");
            } else if (status == 3) {
                cm.sendNextPrev("�������ǵ�Ӣ�ۡ�������ǰ�����¸ҵغͺ�ħ��ʦս������������ð�յ����硣�����������ʱ�������˺�ħ��ʦ�����䣬���ⶳ�ڱ������˯�˺þúþá����ԣ�����Ҳ������ʧ�ˡ�");
            } else if (status == 4) {
                cm.sendNextPrev("����ط��������������ħ��ʦ����ⶳ��������ں�ħ��ʦ�������£������ļ��仯��������Զ���Ǳ���ѩƮ���������ڱ��ߵ����������ġ�");
            } else if (status == 5) {
                cm.sendNextPrev("�ҽ����գ��������һ�塣���һ��Ӻܾ���ǰ������Ԥ��������ȴ���Ӣ�۵Ĺ�����Ȼ�󡭡��������ڷ������㡣��������ط�����");
            } else if (status == 6) {
                cm.sendNextPrev("���ǲ���һ��˵��̫�ࣿ����������Щ���ѣ�û��ϵ��������ͻ����ס���#b���ǸϽ��ش������#k���ش��ӵ�·�ϣ���������������͡�");
            } else if (status == 7) {
                cm.playerSummonHint(true);
                cm.warp(140090100, 1);
                cm.dispose();
            }
        }
    }
}
var status = 0;
var typed = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0 && status == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1) status++;
        else status--;
        if (status == 0) {
            cm.sendSimple("#b<����֮��>#k ����ħ��ʦ����ֹ...Ϊ�˳ͷ�...��ʿ���ж�������!��������ָ�ð������ĺ�ƽ.\r\n\r\n#fUI/UIWindow2.img/UtilDlgEx/list0#\r\n#b#L1#ÿ������#l #L2#����֮��#l\r\n#L3#����#l #L4#����һ�ȡ��Ʒ#l");
        } else if (status == 1) {
            if (selection == 1) {
                typed = 1;
                cm.sendYesNo("��ã�#h #��ÿ���½һ�Σ��Ϳ��Ի��1��#r�����#k ����������ȡ������������");
            }
            if (selection == 2) {
                cm.dispose();
                cm.openNpc(9000086, 1);
            }
            if (selection == 3) {
                cm.dispose();
                cm.sendOk("����ڳﱸ��...");
            }
            if (selection == 4) {
                cm.dispose();
                cm.openShop(9010040);
            }
        } else if (status == 2) {
            if (typed == 1) {
                if (cm.getBossLog("ÿ������") == 0) {
                    cm.gainItem(4310034, 1);
                    cm.setBossLog("ÿ������");
                    cm.sendOk("#fUI/UIWindow2.img/QuestIcon/4/0#\r\n#v4310034#�����x1");
                    cm.dispose();
                } else {
                    cm.sendOk("������Ѿ���ȡ����");
                    cm.dispose();
                }
            }
        }
    }
}
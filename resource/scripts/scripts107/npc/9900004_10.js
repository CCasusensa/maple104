var status = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status == 0 && mode == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (status == 0) {
        var selStr = "�װ���#r#h ##k���ã� �����ܸ����ṩÿ�ո���Ӵ#k!\r\n\r\n#L1#ǩ�����ֱؿ�\r\n#L2#��ʼÿ��ǩ��#l\r\n";
        cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
        case 0:
            
        case 1:
            cm.sendOk("#r����ǩ��#k���ۼ�ÿ��ǩ����������Ҳ����������ս��ߵ�֧�֣�˵��������ͻ����ս��߶�����Ӵ\r\n#b��ͨǩ��#kÿ��ǩ���ɻ��1����ĸ��1-5���¹�ͭǮ������#v3991052##v3991053##v3991054##v3991055#�ɳ�ȡһ�αسɾ���\r\n10���¹�ͭǮ���ܻ�ȡ500���ѱ�\r\n#g����ǩ��#kÿ��ǩ���Ϳ��Ի��10�����ֵ���������������¶������У������ڻ��С�㴦��ȡר���ƺ�");
            cm.dispose();
            break;
        case 2:
            cm.dispose();
            cm.openNpc(9900002, 25);
            break;
        case 3:
            cm.dispose();
            cm.openNpc(1012121);
            break;
        case 4:
            cm.dispose();
            cm.warp(749050400);
            break;
        case 5:
            cm.dispose();
            cm.openNpc(9900002, 2);
            break;
        case 6:
            cm.dispose();
            cm.openNpc(9030100);
            break;
        case 7:
            cm.dispose();
            cm.openNpc(9900002, 8);
            break;
        case 8:
            cm.dispose();
            cm.openNpc(9270035);
            break;
        case 9:
            cm.dispose();
            cm.openShop(2060003);
            break;
        }
    }
}

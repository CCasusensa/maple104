function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.sendNext("�����ѡ��1��");
        cm.dispose();
    } else {
        if (status == 0 && mode == 0) {
            cm.sendNext("������������ˣ���㡣");
            cm.dispose();
        }
        if (mode == 1) {
            status++;
        } else {
            status--;
        }
        if (status == 0) {
            cm.sendYesNo("����ϴ�.�������Ͼ�Ҫ׷�����ˣ����ǻ�����Ǹ�ʵ������");
        } else if (status == 1) {
            cm.warp(931000030);
            cm.dispose();
        }
    }
}
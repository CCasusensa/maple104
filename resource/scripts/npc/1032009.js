function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.sendNext("�����ѡ��");
        cm.dispose();
    } else {
        if (status == 0 && mode == 0) {
            cm.sendNext("���ż��������ϾͿ���");
            cm.dispose();
        }
        if (mode == 1) {
            status++;
        } else {
            status--;
        }
        if (status == 0) {
            cm.sendYesNo("�����´����뿪�ɴ����ص�ԭ���ĵط���");
        } else if (status == 1) {
            cm.warp(104020110);
            cm.dispose();
        }
    }
}
function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.sendNext("�����ܹٷ������Ѹ�Ϊ20,�������޷�ʹ��,�붪��");
        cm.dispose();
    } else {
        if (status == 0 && mode == 0) {
            cm.sendNext("�����ܹٷ������Ѹ�Ϊ20,�������޷�ʹ��,�붪��");
            cm.dispose();
        }
        if (mode == 1) {
            status++;
        } else {
            status--;
        }
        if (status == 0) {
            cm.sendNext("��һֱŬ���Ÿ���Ҵ�����õķ���������������ˣ��������Ұ�!");
        } else if (status == 1) {
            cm.dispose();
        }
    }
}
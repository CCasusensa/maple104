var status = 0;
var eff = "#fEffect/CharacterEff/1112905/0/1#";

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
        var selStr = "���ã���ӭ�����ս���ð�յ�,���Ǹ����̳���Ʒ������\r\n��Ŀǰ�����ѱ����:#r" + cm.getHyPay(1) + " #d���ѱұ���:#g1Ԫ=1000���ѱ�\r\n";
	selStr+="#r�����ؼۻ��9����������32767��װ ���ڳ�ֵ�ؼ�ֻҪ999Ԫ=230000���ѱ�#k\r\n";
        selStr += "#r#L0#" + eff + "#d�����̳���Ʒ[ħ��,����,ð�յ�ת����,������]#l\r\n";
        selStr += "#b#L1#" + eff + "��������#l";
        selStr += "#L2#" + eff + "�ſ����#l";
        selStr += "#L4#" + eff + "����/����#l";
        selStr += "#L3#" + eff + "��������#l";
        selStr += "#b#L5#" + eff + "����ñ��#l";
        selStr += "#L6#" + eff + "����Ь��#l";
        selStr += "#L7#" + eff + "����/�·�#l";
        selStr += "#L8#" + eff + "��������#l\r\n";
        selStr += "#L9#" + eff + "��������#l";
        selStr += "#L10#" + eff + "���Խ�ָ,ѫ��,����,׹��,����,΢��.#l";
        cm.sendSimpleS(selStr, 2);
    } else if (status == 1) {
        switch (selection) {
        case 0:
            //�̳���Ʒ
            cm.dispose();
            cm.openNpc(9900002, 11);
            break;
        case 1:
            //��������
            cm.dispose();
            cm.openNpc(9900002, 29);
            break;
        case 2:
            //���
            cm.dispose();
            cm.openNpc(9900002, 27);
            break;
        case 3:
            //��������
            cm.dispose();
            cm.openNpc(9900002, 9);
            break;
        case 4:
            //����
            cm.dispose();
            cm.openNpc(9900002, 4);
            break;
        case 5:
            //����ñ��
            cm.dispose();
            cm.openNpc(9900002, 10);
            break;
        case 6:
            cm.dispose();
            cm.openNpc(9900002, 111);
            break;
        case 7:
            cm.dispose();
            cm.openNpc(9900002, 112);
            break;
        case 8:
            cm.dispose();
            cm.openNpc(9900002, 113);
            break;
        case 9:
            cm.dispose();
            cm.openNpc(9900002, 114);
            break;
        case 10:
            cm.dispose();
            cm.openNpc(9900002, 115);
            break;
        }
    }
}

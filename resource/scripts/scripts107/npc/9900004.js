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
    if (cm.getMapId() == 180000001) {
        cm.sendOk("���ź�������ΪΥ���û����򱻽�ֹ��Ϸ���������������ϵ����Ա.")
        cm.dispose();
    }
    else if (status == 0) {
	var selStr = "#e�������:[#b"+cm.getChar().getName()+"#k]  ��Ϊ��:#r"+cm.getXw()+"#k  ��Ա�ȼ�:#r"+cm.getVip()+"#k\r\n���ѱ�����:#g"+cm.getHyPay(1)+"#k\r\n";
        selStr += "#L0#���͵��г�#l #L2#�鿴�������#l  #L3#ÿ��ǩ��#l\r\n\r\n";
        selStr += "#L1#��������#l ��#L11#�ս������ֽ���#l��#L4#����תְ#l\r\n\r\n";
        selStr += "#L5#��������#l�� #L6#��������#l������#L7#�ֿ����#l\r\n\r\n";
        selStr += "#L8#����ת��#l�� #L9#���ܴ���#l������#L10#��Ϸ�̵�#l\r\n\r\n";
	selStr += "#L11##r��Ա����#k#l�� #L12##r����װ��#k#l������#L13##r��������#k#l\r\n\r\n";
	selStr += "#L14##b��ֵ����#k#l   #L15##b��������#k#l\r\n\r\n";
        cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
        case 0:
            if (cm.getPlayer().getMapId() >= 910000000 && cm.getPlayer().getMapId() <= 910000022) {
                cm.sendOk("���Ѿ����г��ˣ�������ʲô��");
            } else {
                cm.saveReturnLocation("FREE_MARKET");
                cm.warp(910000000, "st00");
            }
            cm.dispose();
            break;
        case 1://������
            cm.dispose();
            cm.openNpc(9900002, 23);
            break;
        case 2://�鿴����
            cm.dispose();
            cm.openNpc(9010000, 1);
            break;

        case 3://ÿ��ǩ��
            cm.dispose();
            cm.openNpc(9900004, 10);
            break;
        case 4://����רְ
            cm.dispose();
            cm.openNpc(9300011);
            break;
        case 5://��������
            cm.dispose();
            cm.openNpc(9900002, 24);
            break;
        case 6://��������
            cm.dispose();
            cm.openNpc(9900002, 26);
            break;
        case 7://�ֿ����
            cm.dispose();
            cm.openNpc(9030100);
            break;
        case 8://����ת��
            cm.dispose();
            cm.openNpc(9310059);
            break;
        case 9://���ܴ���
            cm.dispose();
            cm.openNpc(9900002, 22);
            break;
        case 10://��Ϸ�̵�
            cm.dispose();
            cm.openNpc(1012121);
            break;
	case 11:
		cm.dispose();
            cm.openNpc(9070002);
            break;
	case 12:
		cm.dispose();
            cm.openNpc(9010030);
            break;
	case 13:
		cm.dispose();
            cm.openNpc(9070005);
            break;
	case 15:
		cm.dispose();
            cm.openNpc(3000010);
            break;
	case 14:
		cm.dispose();
            cm.openNpc(9900002, 17);
            break;

        }
    }
}

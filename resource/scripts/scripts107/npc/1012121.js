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
        var selStr = "\r\n"; //#L9#ʨ�������߶һ�#r[New]#k#l\r\n
	//selStr +="#L2#���ӻ���(���ܲ�/��ս��Ʒ/����ʳƷ/��.)#l\r\n";
	selStr +="#L3#���ӻ���(ҩˮ/����/Boss��Ʒ/�Ŵ�/Ǳ�ܾ�/����)#l\r\n";
	selStr +="#L0#��˫�������̵�#l";
	selStr +="#L4#�򿪻�����������#l\r\n";
	selStr +="#L5#��˫��������#l��";
	selStr +="#L6#��ְҵ����װ��������(�����˱���)#l\r\n";
	//selStr +="#L8#������̵�#l����";
	selStr +="#L10#��ְҵװ��(70-110)(��Ӱ�Ѹ���)#l\r\n";
	selStr +="#L11#����սʿ|��������ʹװ����#l";
	selStr +="#L12#ҹ�ⷨʦװ����#l";
        cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
        case 0:
	    cm.openShop(1033001);
            break;
        case 2:
            cm.dispose();
            cm.openShop(1012123);
            break;
        case 3:
            cm.dispose();
            cm.openShop(9090000);
            break;
        case 4:
            cm.dispose();
            cm.openShop(1012124);
            break;
        case 5:
            cm.dispose();
            cm.openShop(1012125);
            break;
        case 6:
            cm.dispose();
		cm.openShop(1011101);
            break;
        case 7:
            cm.dispose();
            break;
        case 8:
            cm.dispose();
            cm.openShop(9010038);
            break;
        case 9:
            cm.dispose();
            cm.openShop(2161010);
            break;
	case 10:
            cm.dispose();
            cm.openNpc(2101018,1);
            break;
	case 11:
            cm.dispose();
            cm.openShop(1012133);
            break;
	case 12:
            cm.dispose();
            cm.openShop(1012132);
            break;
        }
    }
}
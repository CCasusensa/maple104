var status = -1;
var selectedpay = 0;
var acash = 3;

function start() {
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
        if (mode == 1) {
            status++;
        } else {
            if (status == 2) {
                cm.sendNext("�������Ҫ��ֵ���һ��ɵ��Ļ�����ô���´������ң�");
                cm.dispose();
            }
            status--;
        }
        if (status == 0) {
            cm.sendSimple("�װ���#b#h ##k���ã������ս���ð�յ���ҵ���ֵ�һ�Ա�����ڵĳ�ֵ����Ϊ#r1RMB:1000���ѱ�#k��\r\n����������ϢΪ:\r\n���ѱ����:#r " + cm.getHyPay(1) + " #k\r\n�����ѽ��:#r " + cm.getHyPay(2)/1000 + " #kԪ\r\n�ۼƳ�ֵ�ܽ��:#r " + cm.getHyPay(3)/1000 + " #kԪ\r\n#b#L0#�һ����(1000���ѱ�:3000���)#l\r\n#b#L1#��ֵ���ѱ�(1RMB:1000���ѱ�)#l");
        } else if (status == 1) {
		if (selection==0){
            		if (cm.getHyPay(1) == 0) {
                		cm.sendNext("��û�пɶһ��ĵ��");
                		cm.dispose();
            		} else {
                		cm.sendGetNumber("��������Ҫ�һ��ĵ��:\r\n��Ϸ���Ķһ�����Ϊ 1000���ѱ�:3000���\r\n", 1000, 1000, cm.getHyPay(1));
            		}
		}else if (selection==1){
	    		cm.openWeb("http://www.libaopay.com/buy/?wid=12366");
			cm.dispose();
		}
        } else if (status == 2) {
            selectedpay = selection;
            if (cm.getHyPay(1) < selectedpay) {
                cm.sendNext("�����ѱҲ�����");
                cm.dispose();
            } else {
                cm.sendYesNo("���Ƿ�Ҫ��#r " + selectedpay + " #k���ѱҶһ���#b " + selectedpay * acash + " #k�ĵ��");
            }
        } else if (status == 3) {
            if (cm.getHyPay(1) < selectedpay) {
                cm.sendNext("����ֵ������");
            } else if (cm.addHyPay(selectedpay) > 0) {
                cm.gainNX(selectedpay * acash);
                cm.sendOk("��ϲ���ɹ��һ�#b " + selectedpay * acash + " #k�ĵ��");
            } else {
                cm.sendOk("�һ������ִ����뷴��������Ա��");
            }
            cm.dispose();
        } else {
            cm.dispose();
        }
    }
}

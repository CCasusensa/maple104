var status = 0;
var choice;
var itemsc=new Array("5220040","5062000","5062001","5062002","5110000","5072000","2049117","5073000","5074000","5076000","5077000","5390000","5390001","5390002","5390003","5390004","5390005","5390007","5390008","5390006");
var itemsccost=new Array("0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0");

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) cm.dispose();
    else {
        if (status == 0 && mode == 0) {
            cm.dispose();
            return;
        } else if (status >= 1 && mode == 0) {
            cm.sendOk("�ðɣ���ӭ�´μ������٣�.");
            cm.dispose();
            return;
        }
        if (mode == 1) status++;
        else status--;

        if (status == 0) {
            choices = "\r\n���ѱ���#r" + cm.getHyPay(1) + "#k���ѱ� (#r���֧���˻�Ӵ��#k)";
            for (var i = 0; i < itemsc.length; i++) {
                choices += "\r\n#L" + i + "##v" + itemsc[i] + "##z" + itemsc[i] + "#��#d��Ҫ#r" + itemsccost[i] + "#d���ѱ�#k#l";
            }
            cm.sendSimpleS("��ӭ������Ʒ��ߵ�,�����������̵����Ʒô?��ѡ��ɣ�." + choices,2);
        } else if (status == 1) {
                cm.sendGetNumber("��ѡ�����ƷΪ#v" + itemsc[selection] + "#�ۼ�Ϊ��" + itemsccost[selection] + "���ѱ�/��\r\n�������㹺�������",1,1,cm.getHyPay(1));
		choice = selection;
        } else if (status == 2) {
            fee = selection;
            money = fee*itemsccost[choice];
            if (fee < 0) {
            cm.sendOk("�������������!");
            cm.dispose();
            } else if (cm.getHyPay(1) < money) {
            cm.sendOk("�һ�ʧ�ܣ���û��" + money + "�����ѱ�");
            cm.dispose();
            } else {
	    cm.addHyPay(money);
            cm.gainItem(itemsc[choice], fee); //ʥ��
            cm.sendOk("��ϲ������ɹ���");
            cm.dispose();
                }
        }
    }
}
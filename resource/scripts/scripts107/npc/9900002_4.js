var status = 0;
var choice;
var itemxh=new Array("4002002","2330007","2070024","2070023","2070019","2049301","2049300","2049401","2049400","2340000","2040304","2040506","2040710","2040806","2043003","2043103","2043203","2043303","2043703","2043803","2044003","2044019","2044103","2044203","2044303","2044403","2044503","2044603","2044703","2044815","2044908");
var itemxhcost=new Array("0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0");

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
            for (var i = 0; i < itemxh.length; i++) {
                choices += "\r\n#L" + i + "##v" + itemxh[i] + "##z" + itemxh[i] + "#��#d��Ҫ#r" + itemxhcost[i] + "#d���ѱ�#k#l";
            }
            cm.sendSimpleS("��ӭ������Ʒ��ߵ�,�����������̵����Ʒô?��ѡ��ɣ�." + choices,2);
        } else if (status == 1) {
                cm.sendGetNumber("��ѡ�����ƷΪ#v" + itemxh[selection] + "#�ۼ�Ϊ��" + itemxhcost[selection] + "���ѱ�/��\r\n�������㹺�������",1,1,cm.getHyPay(1));
		choice = selection;
        } else if (status == 2) {
            fee = selection;
            money = fee*itemxhcost[choice];
            if (fee < 0) {
            cm.sendOk("�������������!");
            cm.dispose();
            } else if (cm.getHyPay(1) < money) {
            cm.sendOk("�һ�ʧ�ܣ���û��" + money + "�����ѱ�");
            cm.dispose();
            } else {
	    cm.addHyPay(money);
            cm.gainItem(itemxh[choice], fee); //ʥ��
            cm.sendOk("��ϲ������ɹ���");
            cm.dispose();
                }
        }
    }
}
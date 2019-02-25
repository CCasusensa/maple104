var status = 0;
var choice;
var scrolls = Array(
	Array(1422011, 0), 
	Array(1092035, 0), 
	Array(1402037, 0), 
	Array(1302036, 0), 
	Array(1302037, 0),  
	Array(1442068, 0), 
	Array(1072239, 0), 
	Array(1332021, 0),
	Array(1452060, 0), 
	Array(1102215, 0), 
	Array(1012131, 0), 
	Array(1102218, 0), 
	Array(1102368, 0), 
	Array(1002926, 0), 
	Array(1002927, 0), 
	Array(1402029, 0), 
	Array(1302063, 0), 
	Array(1302160, 0), 
	Array(1302162, 0), 
	Array(1302161, 0), 
	Array(1442039, 0), 
	Array(1112238, 0), 
	Array(1112135, 0), 
	Array(1112919, 0), 
	Array(1702305, 0), 
	Array(1702302, 0), 
	Array(1372017, 0), 
	Array(1142321, 0), 
	Array(1302087, 0), 
	Array(1302024, 0), 
	Array(1402014, 0), 
	Array(1322027, 0), 
	Array(1402044, 0), 
	Array(1402063, 0), 
	Array(1412056, 0), 
	Array(1332032, 0), 
	Array(1332053, 0), 
	Array(1302080, 0), 
	Array(1012290, 0), 
	Array(1372033, 0), 
	Array(1302150, 0), 
	Array(1012170, 0)
);

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
            for (var i = 0; i < scrolls.length; i++) {
                choices += "\r\n#L" + i + "##v" + scrolls[i][0] + "##z" + scrolls[i][0] + "#��#d��Ҫ#r" + scrolls[i][1] + "#d���ѱ�#k#l";
            }
            cm.sendSimpleS("��ӭ������Ʒ��ߵ�,�����������̵����Ʒô?��ѡ��ɣ�." + choices,2);
        } else if (status == 1) {
            cm.sendYesNo("��ȷ����Ҫ����#v" + scrolls[selection][0] + "##t" + scrolls[selection][0] + "#?");
            choice = selection;
        } else if (status == 2) {
            var money = scrolls[choice][1];
            if (cm.getHyPay(1) < money) {
                cm.sendOk("��Ǹ����û�㹻�����ѱң�");
                cm.dispose();
            } else {
                cm.addHyPay(money);
                cm.gainItem(scrolls[choice][0], 1);
                cm.sendOk("����ɹ�.");
                cm.dispose();
            }
        }
    }
}
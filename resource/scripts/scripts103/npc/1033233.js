var status = 0;
var choice;
var scrolls = Array(5062000,5062001,5062002,2049300,2049400,5064000);
/*
* moli
*/
function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1)
        cm.dispose();
    else {
        if (status == 0 && mode == 0) {
            cm.dispose();
            return;
        } else if (status >= 1 && mode == 0) {
            cm.sendOk("�ðɣ���ӭ�´μ������٣�.");
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;

        if (status == 0) {
            var choices = "\r\n��ǰ�˻�ʣ��:#r"+player.GetMoney()+"Ԫ�� #k��#k\r\nԪ������#r[1rmb=2000Ԫ��]";
            for (var i = 0; i < scrolls.length; i++) {
                choices += "\r\n#L" + i + "##v" + scrolls[i] + "##t" + scrolls[i] + "##l";
            }
            cm.sendSimple("#b��ӭ����"+cm.GetSN()+" ,�����������̵����Ʒô������ѡ��ɣ�10��2000Ԫ����." + choices);
        } else if (status == 1) {
            cm.sendYesNo("#b��ȷ����Ҫ����10�������Ʒô���⽫������2000Ԫ������#k" +"\r\n#v" + scrolls[selection] + "##t" + scrolls[selection] + "#");
            choice = selection;
        } else if (status == 2) {
            if(cm.getChar().GetMoney() >= 2000) {
                player.GainMoney(-2000); 
                cm.gainItem(scrolls[choice], 10);
                cm.sendOk("лл��Ĺ�ˣ��㹺�����Ʒ�Ѿ�������ı�����.");
                cm.dispose();
            } else {
                cm.sendOk("��Ǹ����û�㹻��Ǯ��.");
                cm.dispose();
            }
        }
    }
}

var status = 0;
var choice;
var scrolls = Array(3010209,3010096,3010044,3010046,3010036,3010068,3010057,3010058,3010069,3010073,3010075,3010077,3010085,3010092,3010094,3010096,3010098,3010099,3010106,3010110,3010111,3010112,3010116,3010117,3010123,3010124,3010125,3010127,3012002,3010146,3010136);
/*
* ħ��ð�յ�
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
            var choices = "\r\n �� ��ǰ�˻�ʣ��:#r"+player.GetMoney()+"Ԫ�� #k��#k\r\nԪ������#r[1rmb=2000Ԫ��]�� 100������ ";
            for (var i = 0; i < scrolls.length; i++) {
                choices += "\r\n#L" + i + "##v" + scrolls[i] + "##t" + scrolls[i] + "##l";
            }
            cm.sendSimple("#b��ӭ����"+cm.GetSN()+" ,�����������̵����Ʒô������ѡ��ɣ�ÿ����Ҫ10000Ԫ����." + choices);
        } else if (status == 1) {
            cm.sendYesNo("#b��ȷ����Ҫ���������Ʒô���⽫������10000Ԫ������#k" +"\r\n#v" + scrolls[selection] + "##t" + scrolls[selection] + "#");
            choice = selection;
        } else if (status == 2) {
            if(cm.getChar().GetMoney() >= 10000) {
                player.GainMoney(-10000); 
                cm.gainItem(scrolls[choice], 1);
                cm.sendOk("лл��Ĺ�ˣ��㹺�����Ʒ�Ѿ�������ı�����.");
                cm.dispose();
            } else {
                cm.sendOk("��Ǹ����û�㹻��Ǯ��.");
                cm.dispose();
            }
        }
    }
}

var status = 0;
var choice;
var scrolls = Array(3010071,3010149,3010137,3010144,3010026,3010129,3010130,3010131,3010191,3010207,3010208,3010211,3010206,3010162,3010163,3010135,3010139,3010168,3010170,3010172,3010286,3010296,3010287,3010290,3010300,3010301,3010302,3010303,3010304,3010138,3010311);
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
            var choices = "\r\n�� ��ǰ�˻�ʣ��:#r"+player.GetMoney()+"Ԫ�� #k��#k\r\nԪ������#r[1rmb=2000Ԫ��]��100������ ";
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

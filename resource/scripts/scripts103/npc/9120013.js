var status = 0;
var choice;
var scrolls = Array(1003173,1052315,1082296,1072486,1102276,1382104,1372084);
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
            var choices = "\r\nע�⣺����Ϊ#r��ʦ140��ϵ��װ��#k,#b����㲻��#r��ʦ#k,#b����ѡ\r\n�����������ѡ��Ĺ�����Ʒ:  ";
            for (var i = 0; i < scrolls.length; i++) {
                choices += "\r\n#L" + i + "##v" + scrolls[i] + "##t" + scrolls[i] + "##l";
            }
            cm.sendSimple("#b��ӭ����"+cm.GetSN()+" ,�����������̵����Ʒô������ѡ��ɣ�ÿ����Ҫ30000Ԫ����." + choices);
        } else if (status == 1) {
            cm.sendYesNo("#b��ȷ����Ҫ���������Ʒô���⽫������30000Ԫ������#k" +"\r\n#v" + scrolls[selection] + "##t" + scrolls[selection] + "#");
            choice = selection;
        } else if (status == 2) {
            if(cm.getChar().GetMoney() >= 30000) {
                player.GainMoney(-30000); 
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

var status = 0;
var choice;
var scrolls = Array(1003181,1052323,1082304,1072494,1102284,1482085,1492086,1532017);
/*
* 099����ð�յ�
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
            var choices = "\r\nע�⣺����Ϊ#r����130��ϵ��װ��#k,#b����㲻��#r����#k,#b����ѡ\r\n�����������ѡ��Ĺ�����Ʒ: ";
            for (var i = 0; i < scrolls.length; i++) {
                    choices += "\r\n#L" + i + "##v" + scrolls[i] + "##t" + scrolls[i] + "##l";
            }
            cm.sendSimple("#b��ӭ����099����ð�յ�,�����������̵����Ʒô������ѡ��ɣ�ÿ����Ҫ20000��ȯ��." + choices);
        } else if (status == 1) {
            cm.sendYesNo("#b��ȷ����Ҫ���������Ʒô���⽫������20000��ȯ����#k" +"\r\n#v" + scrolls[selection] + "##t" + scrolls[selection] + "#");
            choice = selection;
        } else if (status == 2) {
	if(cm.getChar().getNX() >= 20000) {
            cm.gainNX(-20000); 
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

var qian = 20000000;
var status = 0;
var choice;
var scrolls = Array(2049100,2043402,2045202,2045206,2045306,2040016,2040100,2040105,2040200,2040205,2040310,2040412,2040612,2040816,2040915,2040920,2041201,2041206,2043008,2040302,2043107,2043002,2040802,2040820,2040822,2041206,2043008,2043012,2043207,2043302,2043307,2043807,2044002,2044107,2044302,2044402,2044507,2044602,2044702);
/*
* 
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
            var choices = "\r\n�����������ѡ��Ĺ�����Ʒ: ";
            for (var i = 0; i < scrolls.length; i++) {
                    choices += "\r\n#L" + i + "##v" + scrolls[i] + "##t" + scrolls[i] + "##l";
            }
            cm.sendSimple("��ӭ���������̵�#k ,�����������̵����Ʒô������ѡ��ɣ�ÿ����Ҫ"+qian+" ð�ձ�.��." + choices);
      } else if (status == 1) {
           cm.sendGetText("��������Ҫ���������.����ǰӵ��#b"+cm.getMeso()+"#k���.");
            choice = selection;
        } else if (status == 2) {
       sm = cm.getText();
      mesos =qian*sm;
             cm.sendYesNo("��ȷ����Ҫ����#v" + scrolls[choice] + "##t" + scrolls[choice] + "# "+sm+"�����⽫������ "+mesos+" ð�ձң���" +"�Ƿ����?");
            status1 = choice;
        } else if (status == 3) {
            if (cm.getMeso() >= mesos) {
                cm.gainMeso(-mesos);
                cm.gainItem(scrolls[status1], sm);
                cm.sendOk("лл��Ĺ�ˣ��㹺�����Ʒ�Ѿ�������ı�����.");
                cm.dispose();
            } else {
                    cm.sendOk("��Ǹ����û�㹻��Ǯ��.");
                    cm.dispose();
              
            }
        }
    }
}

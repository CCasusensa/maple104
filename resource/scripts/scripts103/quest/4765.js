var status = -1;

function start(mode, type, selection) {
    if (mode == -1) {
        qm.dispose();
    } else {
        if (mode == 1)
            status++;
        else
            status--;
        if(status == -1){
            qm.sendOk("��ô�ˣ�����Ҫ������û��ϵ�����������")
            qm.dispose();
        }else if (status == 0) {
            qm.sendAcceptDecline("��ϲ��ﵽ30������л���"+qm.GetSN()+"��֧�֣�\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#\r\n\r\n#b#i2028061#  #t2028061#1��");
        } else if (status == 1) {
            if (qm.gainItem(2028061,1)){
                qm.forceCompleteQuest();
                qm.dispose();
            }
        }
    }
}

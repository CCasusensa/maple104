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
                           
            qm.sendAcceptDecline("��ϲ��ﵽ40������л���"+qm.GetSN()+"��֧�֣�\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#\r\n\r\n#b#i2430112#  #t2430112#2��\r\n\r\n���:150000");
        } else if (status == 1) {
            if (qm.gainItem(2430112, 2)){
                qm.gainMeso(150000);
                qm.forceCompleteQuest();
                qm.dispose();
            }
        }
    }
}

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
                  
            qm.sendAcceptDecline("��ϲ��ﵽ8������л���"+qm.GetSN()+"��֧�֣�\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#\r\n\r\n#b#i2000006# #t2000006#100����");
        } else if (status == 1) {
            if (qm.gainItem(2000006, 100)){
                qm.forceCompleteQuest();
                qm.sendOk("Ϊ�˸�л���"+qm.GetSN()+"��֧�֣����ǽ���10������һ�����ش���")
                qm.MissionFinish(qm.getPlayer().getId(),100118005)
                qm.dispose();
            }
        }
    }
}

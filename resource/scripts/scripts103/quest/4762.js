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
            qm.sendAcceptDecline("��ϲ��ﵽ10������л���"+qm.GetSN()+"��֧�֣�\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#\r\n\r\n10000���");
			
        } else if (status == 1) {
            qm.gainMeso(10000); 
            qm.forceCompleteQuest();
            qm.sendOk("Ϊ�˸�л���"+qm.GetSN()+"��֧�֣����ǽ���30������һ�����ش���")
            qm.dispose();
        }
    }
}

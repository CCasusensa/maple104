/*
	NPC Name: 		Nineheart
	Description: 		Quest - Do you know the black Magician?
*/

var status = -1;

function start(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 8) {
            qm.sendNext("�ޣ��㻹��ʲô�����������Ҫ���ҶԻ��������´򿪽��档");
            qm.safeDispose();
            return;
        }
        status--;
    }
    if (status == 0) {
        qm.askAcceptDecline("��ã� #h0#�� ��ӭ���� ʥ�ء� �ҵ������� #p1101002# �� \r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#fUI/UIWindow.img/QuestIcon/8/0# 380 exp");
    } else if (status == 1) {
        if (qm.getQuestStatus(20016) == 0) {
            qm.gainExp(380);
            qm.forceCompleteQuest();
        }
        qm.safeDispose();
    }
}

function end(mode, type, selection) {
}

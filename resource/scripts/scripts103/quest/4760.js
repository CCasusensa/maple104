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
qm.sendNext("��ϲ��ﵽ5������л���"+qm.GetSN()+"��֧��\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#\r\n\r\n#i2000002# #t2000002#100��")
                    }else if (status == 1) {
                		if (qm.gainItem(2000002, 100)){
				qm.forceCompleteQuest();
				qm.dispose();
						}
		}
	}
}

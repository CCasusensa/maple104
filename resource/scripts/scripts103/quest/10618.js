/* ===========================================================
			ע��(cm.sendSimple\cm.itemQuantity(5420008))
	�ű�����: 		QUEST
	�ű�����:		
	�����������qm.forceCompleteQuest();
	������������qm.forceStartQuest();
=============================================================
����ʱ�䣺2011��4��13�� 18:18:56
������Ա��
=============================================================
*/
var a = -1;

function start(mode, type, selection) {//������
	if (mode == -1) {
		qm.dispose();
	} else {
		if (mode == 1)
			a++;
		else
			a--;
			if(a == -1){
				qm.dispose();
			}else if (a == 0) {
				qm.sendNext("��Ӱ˫���ﵽ��90����\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#\r\n\r\n#i3800008# èͷӥͼ�� 1����\r\n\r\n#i1012191# #t1012191# 1����")
			}else if (a == 1) {
				qm.sendOk("��ȡ�ɹ��ˡ�")
				qm.gainItem(1012191,1)
				qm.gainItem(3800008,1)
				qm.forceCompleteQuest();
	    			qm.safeDispose();
		}//status
	}//mode
}//function

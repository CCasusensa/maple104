/* ===========================================================
			ע��(cm.sendSimple\cm.itemQuantity(5420008))
	�ű�����: 		QUEST
	�ű�����:		
	�����������qm.forceCompleteQuest();
	������������qm.forceStartQuest();
=============================================================
����ʱ�䣺
������Ա����о
=============================================================
*/
var a = -1;

function end(mode, type, selection) {//������
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
				qm.sendAcceptDecline("�ţ�#h0#���ܸ��������������˽�һ�¹����ֲ��������")
			}else if (a == 1) {  
				qm.sendNextPrev("�����ֲ��ǹ��������ռ���һ�ֹ��￨���ռ��ù��￨֮�������Զ��ռ����ֲᡣ")
			}else if (a == 2) {
				qm.sendNextPrev("���ҿ�����ӵ�м��Ź��￨��")
			}else if (a == 3) {
				qm.sendAcceptDecline("������û���ռ������￨�������㼸�ŻسǾ��ᣬ�����Ļ�����ʱ���������ҡ�")
			}else if (a == 4) {
				if (qm.canHold(2030001)) {
				qm.gainItem(2030001,1)
				qm.forceCompleteQuest()
				qm.sendNextPrev("���պ����͸���Ķ������ռ������￨��ʱ�������ʱ�����ҡ�")
				qm.dispose();
				}else{
				qm.sendNextPrev("�ţ�������ı������㡣����һ���ٸ��ҶԻ��ɡ�")
				qm.dispose();
				}
		}//status
	}//mode
}//function

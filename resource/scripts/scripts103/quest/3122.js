/* ===========================================================
			ע��(cm.sendSimple\cm.itemQuantity(5420008))
	�ű�����: 		QUEST
	�ű�����:		��ӡ��ȷ��
	�����������qm.forceCompleteQuest();
	������������qm.forceStartQuest();
=============================================================
����ʱ�䣺2010��9��12�� 22:45:59
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
				qm.sendOk("����ҸϽ�ȷ�Ϻ�����ɣ�")
				qm.dispose();
			}else if (a == 0) {
				qm.sendYesNo("�ร�����ȷ�Ϻû������� ");
			}else if ( a == 1){
				qm.sendNextPrev("�������ˣ�аĦ˹��������ȷ�Ϲ��ˣ�������ȫ��ӡ��������",2);
			}else if ( a == 2){
				qm.sendPrev("��ģ��Ǿ�̫���ˡ���лл�㡣������㣬һ��Ӧ�ö���������ġ�һ�С���")
				qm.forceCompleteQuest();
				
		}//status
	}//mode
}//function

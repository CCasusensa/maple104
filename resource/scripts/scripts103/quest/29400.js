/* ===========================================================
			ע��(cm.sendSimple\cm.itemQuantity(5420008))
	�ű�����: 		QUEST
	�ű�����:		ѫ������ - �ڷܵ�ð�ռ�ѫ��
	�����������qm.forceCompleteQuest();
	������������qm.forceStartQuest();
=============================================================
����ʱ�䣺2010��8��7�� 11:20:11
������Ա����о
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
				qm.sendNext("#h #k��ð�յ�����ˣ�")
				qm.forceStartQuest();
				qm.dispose();
				
		}//status
	}//mode
}//function

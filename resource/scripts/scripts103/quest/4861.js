/* ===========================================================
			ע��(cm.sendSimple\cm.itemQuantity(5420008))
	�ű�����: 		QUEST
	�ű�����:		�ع���һ
	�����������qm.forceCompleteQuest();
	������������qm.forceStartQuest();
=============================================================
����ʱ�䣺2010��12��30�� 13:33:44
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
				qm.sendNext("Ϊ������������������ڿ�����ȡ����Ŷ��")
			}else if (a == 1) {
				qm.gainItem(2430182,1)
				qm.sendOk("��ȡ�ɹ��ˡ�")
				qm.forceCompleteQuest();
				qm.dispose();
		}//status
	}//mode
}//function

/* ===========================================================
			ע��(qm.sendSimple\qm.itemQuantity(5420008))
	�ű�����: 		QUEST
	�ű�����:		
	�����������qm.forceCompleteQuest();
	������������qm.forceStartQuest();
=============================================================
����ʱ�䣺
������Ա����о
=============================================================
*/
importPackage(net.sf.odinms.client);


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
				qm.sendOk("�٣��㡣����μ�ѵ����")
			}else if (a == 1) {
				qm.sendOk("�����ԱߵĴ��Ϳ����𣿽���Ϳ��Ե���ѵ�����ˡ�")
				qm.forceStartQuest(23103);
				qm.forceCompleteQuest();
		}//status
	}//mode
}//function

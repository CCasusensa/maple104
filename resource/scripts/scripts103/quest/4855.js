/* ===========================================================
			ע��(cm.sendSimple\cm.itemQuantity(5420008))
	�ű�����: 		QUEST
	�ű�����:		��Ը���ʴ�
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
		qm.sendOk("�ش���������롣")	
				qm.dispose();
	} else {
		if (mode == 1)
			a++;
		else
			a--;
			if(a == -1){
				qm.dispose();
			}else if (a == 0) {
				qm.sendYesNo("����O���ǣ���X�����ǣ��ش���һ�����⡣#b\r\nNPC�ȿˡ����»������ջʼ�����ȯ���ܰ�����Ʒ��ͣ�#k")
			}else if (a == 1) {
				qm.sendOk("Ŷ�����˲��𣡻ش���ȷ��")
				qm.forceCompleteQuest();
				qm.dispose();
		}//status
	}//mode
}//function

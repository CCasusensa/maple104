/* ===========================================================
			ע��(cm.sendSimple\cm.itemQuantity(5420008))
	�ű�����: 		QUEST
	�ű�����:		���ӵ����� 1
	�����������qm.forceCompleteQuest();
	������������qm.forceStartQuest();
=============================================================
����ʱ�䣺2010��9��18�� 16:40:09
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
				qm.sendNext("��á����������ܲ���Ŷ��")
			}else if (a == 1) {
				if (mode == 1){
				qm.sendNextPrev("�����ر����򵼣�����#p9105002#��")
				}else{
					qm.sendNext("Ŷ���ܸ��˼����㡣�һ�Ϊ��׼����볡ȯ�������Ե�һ���ٺ���˵����..")
					qm.dispose();
				}
			}else if (a == 2) {
				qm.sendYesNo("��ô������ʱ��Ļ�����Ը��μ�һ�»��")
			}else if (a == 3) {
				qm.sendNext("Ŷ���ܸ��˼����㡣�һ�Ϊ��׼����볡ȯ�������Ե�һ���ٺ���˵����..")
			}else if (a == 4) {
				qm.forceStartQuest();
				qm.dispose();
		}//status
	}//mode
}//function


function end(mode, type, selection) {//�������
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
		}//status
	}//mode
}//function

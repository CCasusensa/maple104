/* ===========================================================
			ע��(cm.sendSimple\cm.itemQuantity(5420008))
	�ű�����: 		QUEST
	�ű�����:		
	�����������qm.forceCompleteQuest();
	������������qm.forceStartQuest();
=============================================================
���ű�Դ��������������Ϊ��������֮�á�����Ȩ������ϵ���ǣ����ǽ��ڵ�һʱ��ɾ����
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
				qm.sendNext("һ�ж�����Ϊ�ڰ�ħ��ʦ��ԭ�򡭡���")
			}else if (a == 1){
				qm.sendNext("��ȥ���ʇ����ȣ��������ҵ��Աߡ�")
				qm.forceStartQuest();
				qm.dispose();
		}//status
	}//mode
}//function
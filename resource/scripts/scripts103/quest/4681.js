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
				if (qm.getQuestCustomData() != null) { 
					a = 3;
					qm.sendYesNo("����� #b#t5252002##k ��������һ���ֽ��̳ǵĶ��������򵽡�")
				}else{
				qm.sendNext("��ã�ð�ռҡ����ǰ����ǣ����ǿ�ķ�����ػ��ߡ�")
				}
			}else if (a == 1) {
				qm.sendNext("��������δ��֮����")
			}else if (a == 2) {
				qm.setQuestCustomData("readHistory");
				qm.sendOk("ֻҪ����� #b#t5252002## �ҾͿ���������롣")
			}else if (a == 3) {
				qm.sendYesNo("����� #b#t5252002##k ��������һ���ֽ��̳ǵĶ��������򵽡�")
			}else if (a == 4) {
				if (qm.haveItem(5252002)){
					qm.gainItem(5252002, -1);
					qm.sendOk("��ϣ�������������֮��!")
					qm.forceStartQuest();
	    			qm.dispose();
				}else{
					qm.sendOk("��û�����֮�����Ҳ�������������֮�����档")
					qm.dispose();
				}
					
		}//status
	}//mode
}//function
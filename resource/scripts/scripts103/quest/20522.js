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
				if (qm.getMeso() >= 10000000){
					if (qm.gainItem(4032117,1)){
				qm.forceStartQuest();
				qm.forceCompleteQuest();
				qm.gainMeso(-10000000)
				qm.sendOk("�ٺ��ҶԻ����һ�����˽���ࡣ")
				qm.dispose();
					}
				}else{
				qm.sendOk("���ܴ�������Ҫ1000������һ����Ľ�ҡ�")	
				}
				qm.dispose();
		}//status
	}//mode
}//function
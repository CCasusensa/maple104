/* ===========================================================
			ע��(qm.sendSimple\qm.itemQuantity(5420008))
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
				qm.sendNext("��֪��ʨ����֮�ǵĿ��ذ�����\r\n\r\n��˵�������ٳִ���ǿ�������Ͷ��������ǲ��������������Ŀ��š�\r\n\r\n���յ��鱨˵�����ذ����������10�㵽����10��֮��ÿ�����㵽����Ѳ�顣\r\n\r\n����±������ܵؽ��У��������������һ�������ơ����15�����ҾͲ���ˡ�")
			}else if (a == 1){
				qm.sendAcceptDecline("��ô����\r\n\r\nԸ�����һ��ȥ����������\r\n\r\n#r������ʱ�򣬴�һ��ƶ�������Ĵ�ׯ��ϣ������ע�⡣")
			}else if (a == 2){
				if (qm.isPlayerInstance()){
					qm.sendOk("����������ִ����Ӹ��������ܽ�����ܵ����뺯��")
					qm.dispose();
				}else{
					var nextmap = qm.getMap(921130000);	
					var nextpe = qm.getMap(921130000).getCharactersSize();
					if (nextpe >= 15){
						qm.sendOk("�Բ�����ս�������Ѿ�����15�ˡ���1Сʱ���������������")
					}else{
						var em = qm.getEventManager("LionIn");
						if (em == null) {
							qm.sendOk("��ʱ��û�п��Ŵ˸�����")
							qm.dispose();
						}else{
							em.newInstance("LionIn").registerPlayer(qm.getChar());	
						}
					}
					qm.dispose();
				}
		}//status
	}//mode
}//function
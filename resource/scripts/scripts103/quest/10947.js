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
var items;

function start(mode, type, selection) {//������
	if (mode == -1) {
		qm.safeDispose();
	} else {
		if (mode == 1)
			a++;
		else
			a--;
			if(a == -1){
				qm.safeDispose();
			}else if (a == 0) {
				qm.sendNext("ð�յ������˻���ʱ������������ʿ�����ڻ����п̿�ĥ�������Լ����ų���ʡ�#b#h0##k���ҿ��Ը���һ�����ᣬ����ȥ֤���Լ��ǲ�����������ʿ���������֤���Լ����Ҿ�����һ������ʿ������������֤���Լ��Ļ��ᣬ������սһ����")
			}else if (a == 1) {
				// -- ���񲿷� --
				if (qm.getJob() >= 2001 && qm.getJob() <= 2218){
					items = 1022117;
				}
				
				// -- ð�ռҲ��� --
				if(qm.getJob() <= 522){
					items = 0;
				}
				
				// -- �����߲��� --
				if(qm.getJob() >= 3000 && qm.getJob() <= 3512){
					items = 1112591;
				}
				
				// -- ս�񲿷� -- 
            	if(qm.getJob() >= 2000 && qm.getJob() <= 2112){
					items = 1112592;
				}
				
				// -- ��ʿ�Ų��� -- 
				if(qm.getJob() >= 1000 && qm.getJob() <= 1510){
					items = 1032095;
				}
				
				if (items == 0){
					qm.sendNext("#b��2011��8��10��#k֮ǰ�ﵽ#b130#k�����Ϳ��Ի��ϡ�е���Ʒ��ϣ��������ս�ɹ���\r\n\r\n#i1112427# #z1112427#\r\n\r\n#i1112428##z1112428#\r\n\r\n#i1112429##z1112429#\r\n\r\n�ĸ�����һ����")
					qm.forceStartQuest();
				qm.safeDispose();
				}else if (items == null){
					qm.sendNext("δ֪��ְҵ��"+qm.getJob()+"��������ϵ����Ա��")
					qm.dispose();
				}else{
				qm.sendNext("#b��2011��8��10��#k֮ǰ�ﵽ#b130#k�����Ϳ��Ի��ϡ�е���Ʒ��ϣ��������ս�ɹ���\r\n#i"+items+"##z"+items+"#")
				qm.MissionMake(qm.getPlayer().getId(), qm.getPlayerStat("LVL"), 0, 0, 0, 0)//��������ȼ��ĸ߼�����
				qm.forceStartQuest();
				qm.safeDispose();
				}
				
		}//status
	}//mode
}//function


function end(mode, type, selection) {//�������
	if (mode == -1) {
		qm.safeDispose();
	} else {
		if (mode == 1)
			a++;
		else
			a--;
			if(a == -1){
				qm.safeDispose();
			}else if (a == 0) {
				qm.sendNext("��ô�����ս�ɹ�����������������")
			}else if (a == 1) {
				if (qm.MissionStatus(qm.getPlayer().getId(),qm.getPlayerStat("LVL"), 0, 4) && qm.getPlayerStat("LVL") >= 130){//�鿴����ȼ���ͬ���Ǿ��������ˣ�Ȼ�����ж�һ�µȼ�
				// -- ���񲿷� --
				if (qm.getJob() >= 2001 && qm.getJob() <= 2218){
					items = 1022117;
				}
				
				// -- ð�ռҲ��� --
				if(qm.getJob() <= 522){
					items = 0;
				}
				
				// -- �����߲��� --
				if(qm.getJob() >= 3000 && qm.getJob() <= 3512){
					items = 1112591;
				}
				
				// -- ս�񲿷� -- 
            	if(qm.getJob() >= 2000 && qm.getJob() <= 2112){
					items = 1112592;
				}
				
				// -- ��ʿ�Ų��� -- 
				if(qm.getJob() >= 1000 && qm.getJob() <= 1510){
					items = 1032095;
				}
				if (items == 0){
				qm.sendSimple("����Ҫ��һ�ֽ�����#b\r\n#L0# #z1112427#\r\n#L1# #z1112428#\r\n#L2# #z1112429#")	
				}else{
					a = 2;
				qm.sendNext("��ϲ������#z"+items+"#һ���������һ����ȡ��")
				}
				}else{
				qm.sendOk("�����û�дﵽĿ��ȼ���#b#h0##k�����Ŀ��ȼ���#b130#k����ϣ�������Ŭ����")	
				qm.dispose();
				}
			}else if (a == 2){
				if (qm.getSpace(1)  >= 1){//�ж��������ǲ��Ǵ���1
				if (selection == 0){
					qm.gainItem(1112427,1)
				}else if (selection == 1){
					qm.gainitem(1112428,1)
				}else if (selection == 2){
					qm.gainItem(1112429,1)
				}
				qm.forceCompleteQuest()
				qm.sendOk("�͸�������Ϊ��ʿ������ú�����~")
				qm.dispose();
				}else{
				qm.sendOk("�Բ������װ�������������ڳ�һ��")
				qm.dispose();
				}
			}else if (a == 3){
				if (qm.getSpace(1)  >= 1){//�ж��������ǲ��Ǵ���1
				qm.gainItem(items,1);
				qm.forceCompleteQuest();
				qm.sendOk("�͸�������Ϊ��ʿ������ú�����~")
				qm.dispose();
				}else{
				qm.sendOk("�Բ������װ�������������ڳ�һ��")
				qm.dispose();	
				}
		}//status
	}//mode
}//function
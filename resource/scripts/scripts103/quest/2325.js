/* 
��о����
��ͬ���ڽ�ֹת��
�ű����ͣ�QUEST
�ű����ݣ�ղķ˹������(1)
cm.sendSimple

*/
var status = -1;

function end(mode, type, selection) {//����ʼ
	if (mode == -1) {
		qm.sendOk("����ȥ���鿴���𡣡�")
		qm.dispose();
	} else {
		if (mode == 1)
			status++;
		else
			status--;
if (status == -1){
qm.sendOk("��ô�ˣ�����������ô������")
qm.dispose();
}else{
		if (status == 0) {
		qm.sendSimple(" ����̫�ֲ��ˣ����ܰ������� #b\r\n\r\n#L0# ����Ҫʲô������")
		}else if (status == 1){//��ʲô�ҿ��԰�������
		if (selection == 0){
		qm.sendYesNo("ǰ���죬�ұ���������׷ɱ��������������Ǻܿ�ͷ������ˡ���ô�졣�������ܰ�������")
		}
}else if (status == 2){
		qm.forceStartQuest();
		qm.forceCompleteQuest();
		qm.dispose();
			
		}//status
	}//mode
}//function
}




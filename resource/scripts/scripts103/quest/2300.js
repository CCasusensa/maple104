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
				qm.sendAcceptDecline("�������ǿ������࣬����һ�������������æ�����Ƿ�Ը��������");
			}else if (a == 1) {
				qm.sendNext("���·�����Ģ�������������������Ҳ��̫��������Ǻ���ܽ�����");
			}else if (a == 2) {
				qm.sendNext("�Ҳ�֪�������ϸ�ڣ�������������æ������ܻ��ʡ�����ʱ�����Ģ��������������һ���ţ������������������ \r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#\r\n#v4032375# #t4032375#");
			}else if (a == 3) {
				qm.forceStartQuest();
				qm.gainItem(4032375, 1);
				qm.sendYesNo("�����������ȥĢ���Ǳ��Ļ����ҿ�������ȥ����ȷ��Ҫȥ��");
			}else if (a == 4) {		
				qm.warp(106020000)
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
				qm.sendNext("�ţ������תְ�̹�����������ż���");
			}else if (a == 1) {
				qm.sendNextPrev("�ҿ���������");
			}else if (a == 2) {
				qm.sendNextPrev("�ðɣ���Ȼ����תְ�̹ٵ��Ƽ��ţ���������һ���ܰ����ˣ��ܱ�Ǹ��û�����ҽ��ܣ����ǰ�ΧĢ���Ǳ����������������������ģ�������������ʱ�Ĳ���֮�أ����ǵ��������⣬������ˣ���ӭ������Ģ��������");
			}else if (a == 3) {
				qm.gainItem(4032375, -1);
		qm.forceCompleteQuest();
		qm.forceStartQuest(2312);
		qm.dispose();
		}//status
	}//mode
}//function
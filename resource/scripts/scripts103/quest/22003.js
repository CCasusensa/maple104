/* ===========================================================
			ע��
	�ű�����: 		QUEST
	�ű�����:		�ͱ㵱
=============================================================
����ʱ�䣺2010��8��5�� 21:18:57
������Ա����о
=============================================================
*/

var status = -1;

function start(mode, type, selection) {
    status++;
	if (mode != 1) {
	    if(type == 1 && mode == 0)
		    status -= 2;
		else{
			qm.sendNext("�ú���Ӧ��������Ļ�������");
			qm.dispose();
			return;
		}
	}
	if (status == 0)
		qm.sendAcceptDecline("ȥũ���ɻ��ʱ��#b�ְ�#k���˰ѱ㵱����ȥ�ˡ�����ȥ#b#m100030300##k���ְ�#b�ͱ㵱#k��");	
	else if (status == 1){
		qm.forceStartQuest();
		qm.sendNext("��Ҫ�����鷳�Ͳ�Ը��ȥ�����Ǹ��ú��ӣ��԰ɣ���������˵���ɡ�");
		if(!qm.haveItem(4032448))
			qm.gainItem(4032448, 1);
	}else if (status == 3)
		qm.sendNextPrev("ȥũ���ɻ��ʱ��#b�ְ�#k���˰ѱ㵱����ȥ�ˡ�����ȥ#b#m100030300##k���ְ�#b�ͱ㵱#k��");
		qm.dispose();
	else if (status == 4){
		//qm.evanTutorial("UI/tutorial/evan/5/0" , 1);
		
	}
}

function end(mode, type, selection) {

}

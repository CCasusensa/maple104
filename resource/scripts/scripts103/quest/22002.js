/* ===========================================================
			ע��
	�ű�����: 		QUEST
	�ű�����:		�����������
=============================================================
����ʱ�䣺2010��8��5�� 21:12:58
������Ա����о
=============================================================
*/

importPackage(Packages.client);

var status = -1;
var a = -1;

function start(mode, type, selection) {
    status++;
	if (mode != 1) {
	    if(type == 1 && mode == 0)
		    status -= 2;
		else{
			qm.sendNext("�ţ�����㲻����緹���𣿲��Զ����ɲ��á��������Է��Ļ������������ҡ������˵�Ļ�����Ҫ���ҳԵ��˰���");
			qm.dispose();
			return;
		}
	}
	if (status == 0)
		qm.sendNext("#p1013102#ι��������С������ȥ���緹�ɡ�������緹��#t2022620#�����ó����ˣ���������ʵ�ϣ�����㲻ȥ��#p1013102#ιʳ���ҾͲ���������緹�ԡ�");
	else if (status == 1)
		qm.sendAcceptDecline("��������#b������#k��#b����֮����������ȥһ��#k���������л�Ҫ����˵��");
	else if (status == 2){
		qm.forceStartQuest();
		qm.sendNextS("#b(�л�Ҫ����˵���Ȱ�#t2022620#���ˣ�Ȼ������ȥ�����ɡ�)#k",2);
		qm.gainItem(2022620, 1);
		qm.dispose();
	}else if (status == 3){
		//qm.evanTutorial("UI/tutorial/evan/3/0" , 1);
		qm.dispose();
	}
}

function end(mode, type, selection) {//������
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
qm.sendNext("�緹������С���㣿���ܰ�������������\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#i1003028# #t1003028#1�� \r\n#i2022621# #t2022621#5��\r\n#i2022622# #t2022622# 5��\r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 60 exp");
			}else if (a == 1) {
					qm.forceCompleteQuest();
		//qm.evanTutorial("UI/tutorial/evan/4/0" , 1);
		qm.gainItem(1003028, 1);
		qm.gainItem(2022621, 5);
		qm.gainItem(2022622, 5);
		qm.gainExp(60);
		qm.dispose();
		}//status
	}//mode
}//function
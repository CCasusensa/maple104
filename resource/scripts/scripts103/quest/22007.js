/* ===========================================================
			ע��
	�ű�����: 		QUEST
	�ű�����:		��������
=============================================================
����ʱ�䣺2010��8��5�� 21:40:06
������Ա����о
=============================================================
*/

importPackage(Packages.client);

var status = -1;

function end(mode, type, selection) {
    status++;
	if (mode != 1) {
	    if(type == 1 && mode == 0)
		    status -= 2;
		else{
			qm.sendNext("�ţ���֡�������û�����úá����³���һ�°ɡ�");
		    qm.dispose();
			return;
		}
	}
	if (status == 0)
		qm.sendNext("Ŷ��#t4032451#�������𣿿�ѵ����Ұɡ������������������");
	if (status == 1)
		qm.sendYesNo("�������š���֪���⵽�׿���������ʲô����\r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 360 exp");
	if (status == 2){
		qm.forceCompleteQuest();
		qm.gainExp(360);
		qm.gainItem(4032451, -1);
		//qm.evanTutorial("UI/tutorial/evan/9/0" , 1);
		qm.dispose();
		}
	}

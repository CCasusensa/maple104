/* ===========================================================
			ע��
	�ű�����: 		QUEST
	�ű�����:		��ֵ���
=============================================================
����ʱ�䣺2010��8��5�� 21:12:58
������Ա����о
=============================================================
*/

importPackage(Packages.client);

var status = -1;

function start(mode, type, selection) {
   if (mode == -1) {
		qm.dispose();
	} else {
		if (mode == 1)
			status++;
		else
			status--;
	if (status == 0){
		qm.sendNext("������С���㣿");
	}else if (status == 1){
		qm.sendNextPrevS("#b�š�������Ҳ������",2);
	}else if (status == 2){
		qm.sendNextPrev("�š�����������ô����û˯���أ��������ϴ���һҹ���ס����Բ�û˯����");
	}else if (status == 3) {
		qm.sendNextPrevS("#b����������Ϊ�Ǹ�������Ϊ����һ����ֵ��Ρ�",2);
	}else if (status == 4){
		qm.sendNextPrev("��ֵ��Σ��μ���ʲô�أ�");
	}else if (status == 5){
		qm.sendNextPrevS("#b�š���#k",2);
	}else if (status == 6){
		qm.sendNextPrevS("#b(˵���μ��������������������顣)",2);
	}else if (status == 7){
		qm.sendYesNo("�ǺǺǺǣ�������ô���ε�����أ�û���Ե�������̫���ˡ������˸���Ȥ���Σ�ȥ����#p1013101#�ɡ���һ����ܸ��˵ġ�");
	}else if (status == 8){
		qm.forceStartQuest();
		qm.sendNext("#b#p1013101##kȥ#b#m100030102##k����Ȯι���ˡ��Ӽ����ȥ���ܼ������ˡ�");
   }else if (status == 9){
		qm.showWZEffect(true,"UI/tutorial/evan/1/0");
		qm.dispose();
	}
}
}

function end(mode, type, selection) {
    status++;
	if (mode != 1) {
	    if(type == 1 && mode == 0)
		    status -= 2;
		else{
		    qm.dispose();
			return;
		}
	}
	if (status == 0){
		qm.sendNext("Ŷ����������С���㣿������ģ���ô��ô��ĺ���Ȧ��������û˯����ʲô��������ֵ��Σ�ʲô�ΰ����ţ��μ�����������");
	}else if (status == 1){
		qm.sendNextPrev("�������������������ˡ���Ȼ�ε����������������й��𣿹���������\r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 20 exp");
	}else if (status == 2){
		qm.gainExp(20);
		//qm.evanTutorial(true,"UI/tutorial/evan/2/0");
		qm.forceCompleteQuest();
		qm.dispose();	
		}
	}

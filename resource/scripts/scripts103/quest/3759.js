/* ===========================================================
			ע��(cm.sendSimple\cm.itemQuantity(5420008))
	�ű�����: 		QUEST
	�ű�����:		������� 2
	�����������  qm.forceCompleteQuest();
	������������  qm.forceStartQuest();
=============================================================
����ʱ�䣺2010��9��1�� 15:09:57
������Ա����о
=============================================================
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
				qm.sendNext("Ŷ�������Ѽ����������Ե�һ�¡�������Ϊ��������ҩ��..");
			}else if (a == 1) {
				qm.sendNextPrev("�õģ�׼��������׼�����˵Ļ���������Ϊ��������ҩ��������������ϡ������Ļ��������������з����ˡ�")
			}else if (a == 2) {
				if(cm.getJob().getId() >= 1000 && cm.getJob().getId() <= 1510){//�������ʿ��
				cm.teachSkill(10001026,1,1);
				return;
				}
				if(cm.getJob().getId() >= 2000){//�����ս��
				cm.teachSkill(20001026,1,1);
                return;
            	}
				if(cm.getJob().getId() <= 600){//�����ð�ռ�
				cm.teachSkill(0001026,1,1);
                return;
            	}
				if(cm.getJob().getId() >= 2200){//���������
				cm.teachSkill(20011026,1,1);
                return;
            	}
				qm.sendNextPrev("���ˣ����輼���Ѿ�׼�����ˡ���һ����Ҫע�⣬ֻ������������Ϣ�ĵط�����ʹ�÷��輼�ܡ�����ɿ�ʼ��Ӧ�þͿ��Է����ˡ�")
			}else if (a == 3) {
				qm.sendNextPrev("���⣬ʹ�÷��輼��ʱ��#b���������ħ��#k����˱�������ħ���Ŀ��ơ���С�Ĵ����ϵ������Ļ������ܻ��ܵ�#b��ƽʱ�ߺܶ��׹���˺�#k���㲻�ã��������������ˡ�ף����ˡ�")
				qm.dispose();
		}//status
	}//mode
}//function

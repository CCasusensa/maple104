/* ===========================================================
			ע��(qm.sendSimple\qm.itemQuantity(5420008))
	�ű�����: 		QUEST
	�ű�����:		
	�����������qm.forceCompleteQuest();
	������������qm.forceStartQuest();
=============================================================
����ʱ�䣺
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
            if (qm.MissionStatus(qm.getPlayer().getId(),101108000, 0, 4)){//�鿴����û
                qm.MissionDelete(qm.getPlayer().getId(), 101108000)
            }
            qm.sendYesNo("Ŀǰð�յ����ڽ��������ͽ����.ÿ�����������õ�������,�Ͻ�ȥ��ս��.")
        }else if (a == 1) {
            qm.updateQuest(-15386, "0");
            //qm.forceStartQuest(-15386);
            qm.MissionMake(qm.getPlayer().getId(), qm.getLevel(), 0, 0, 0, 0)
            qm.sendOk("ÿ�����������õ�����.�Ѽ����Ժ�˵��������ʲô�����鷢����...")
            qm.dispose();
        }//status
    }//mode
}//function



function end(mode, type, selection) {//���
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
            if (qm.MissionStatus(qm.getPlayer().getId(),qm.getLevel(), 0, 4)){//�鿴����û
                qm.sendOk("��ѽ?��û��1����? ����������!")
                qm.dispose();
            }else{
                qm.sendNext("�ۡ�����һ����")
            }
        }else if (a == 1){
            if (!qm.MissionStatus(qm.getPlayer().getId(),101108000, 0, 4)){//�鿴����û
                qm.MissionMake(qm.getPlayer().getId(), 101108000, 0, 0, 0, 0)
            }
            if (!qm.MissionStatus(qm.getPlayer().getId(),101108000, 0, 0)){//�鿴����û
                qm.sendOk("ÿ������ֻ����ȡһ�Σ��뻻Ƶ���������µ�½�ٴν�������")
                qm.dispose();
            }else{
                if (qm.getLevel() >= 30){
                    qm.gainItem(2430084,10)
                }else if (qm.getLevel() >= 50){
                    qm.gainItem(2430085,10)
                }else if (qm.getLevel() >= 70){
                    qm.gainItem(2430086,10)
                }else if (qm.getLevel() >= 80){
                    qm.gainItem(2430087,10)
                }else{
                    qm.gainItem(2430088,5)
                }
                qm.sendOk("�͸������˱��ɣ��ռ���һ������֮����Ը��Ҷһ���Ʒ��")
                qm.MissionFinish(qm.getPlayer().getId(), 101108000)
                qm.forceCompleteQuest();
                qm.dispose();
            }
        }//status
    }//mode
}//function

/* ===========================================================
			ע��(cm.sendSimple\cm.itemQuantity(5420008))
	�ű�����: 		QUEST
	�ű�����:		�����˳¾ɵ���ӪԱЬ�ӣ�
	�����������qm.forceCompleteQuest();
	������������qm.forceStartQuest();
=============================================================
����ʱ�䣺2010��8��22�� 13:39:14
������Ա����о
=============================================================
*/
var a = -1;

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
            qm.sendNext("ʲô�����������ʱ�򣬷�����#b��ӪԱЬ��#k��")
        }else if ( a == 1){
            qm.sendNext("Ŷ���� ���Ь��ѽ�����������ˡ�")
        }else if ( a == 2){
            qm.sendNext("��������׷�ϷǷ�����ʹ���ߵ�ʱ���Ь��Ū���ˣ���л��������˻�����")
        }else if ( a == 3){
            qm.sendNext("#b�������������#bð�յ���ӪԱ#k����Ҫ����ȥ��������������ɡ���",2)
        }else if ( a == 4){
            qm.forceCompleteQuest();
            qm.dispose();
        }//status
    }//mode
}//function

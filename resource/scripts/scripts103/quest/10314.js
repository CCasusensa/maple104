/* ===========================================================
			ע��(cm.sendSimple\cm.itemQuantity(5420008))
	�ű�����: 		QUEST
	�ű�����:		������������������
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
            qm.sendNext("ʲô�����������ʱ�򣬷�����#b������������#k��")
        }else if ( a == 1){
            qm.sendNext("����������Ǻ����ģ���˵��ǰ����Ϊð�ռ���̽�յ�ʱ����ˣ������޿������Ҫ�Ұ����һ����ء�")
        }else if ( a == 2){
            qm.sendNext("�ҵøϽ���ϵ�������������������")
        }else if ( a == 3){
            qm.sendNext("���ˣ���ȥ���������������˵�����������ɢ����ð�����硣")
        }else if ( a == 4){
            qm.forceCompleteQuest();
            qm.dispose();
        }//status
    }//mode
}//function

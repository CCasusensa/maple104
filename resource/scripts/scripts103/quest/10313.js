/* ===========================================================
			ע��(cm.sendSimple\cm.itemQuantity(5420008))
	�ű�����: 		QUEST
	�ű�����:		�����˼ѼѶ�ʧ���۾���
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
            qm.sendNext("ʲô����˵������������з�����#b�����ˮ����#k��")
        }else if ( a == 1){
            qm.sendNext("ˮ����Ҫ�����˵Ļ���û�������ˡ�")
        }else if ( a == 2){
            qm.sendNext("��Ȼ����Ա�ϴ��и���һ���µ�ˮ��������ҾͲ�Ҫ�ˡ�")
        }else if ( a == 3){
            qm.sendNext("���ˣ�Ϊ�˱����㣬������һ�������ɣ��Ͼ��ҶԾɵĶ����������")
        }else if ( a == 4){
            qm.forceCompleteQuest();
            qm.dispose();
        }//status
    }//mode
}//function

/* ===========================================================
			ע��
	�ű�����: 		QUEST
	�ű�����:		ð�յ���ӪԱ��ף��
=============================================================
����ʱ�䣺2010��8��9�� 14:54:36
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
            qm.sendNext("���Ѿ�����20������")
        }else if (a == 1){
            qm.sendNext("�������ţ���Ȼ������ô��ɳ���")
        }else if (a == 2){
            qm.sendNext("����һ�����������㵽��50���Ժ��һ�����һ�����õ�#b���۾�#k��\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n\r\n#v2040232# #t2040232# 1��")
            qm.gainItem(2040232,1)
            qm.forceCompleteQuest();
            qm.dispose();
        }//status
    }//mode
}//function

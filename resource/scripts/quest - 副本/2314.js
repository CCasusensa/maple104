/* ===========================================================
			ע��(cm.sendSimple\cm.itemQuantity(5420008))
	�ű�����: 		QUEST
	���ڵ�ͼ:		���ݴ���
	�ű�����:		̽��Ģ���Ǳ�
=============================================================
����ʱ�䣺2010��8��16�� 14:44:03
������Ա����о
=============================================================
*/

importPackage(Packages.client);

var status = -1;

function start(mode, type, selection) {
    status++;
	if (mode != 1) {
	    if(type == 1 && mode == 0)
		    status -= 2;
		else{
			qm.sendNext("���������������Ģ���Ǳ���");
			qm.dispose();
			return;
		}
	}
	if (status == 0)
		qm.sendYesNo("Ϊ�����ȹ������������ȥ��һ��Ģ��ɭ�֣�����������ǿ���������ϣ���ֹ�κ��˽���Ǳ���");
	if (status == 1)
		qm.sendNext("�����ߣ�վ��Ģ��ɭ�ֵ����ϣ���С��һ�㣬���ﾭ�����п��µĹ����û��");
	if(status == 2){
		qm.forceStartQuest();
		qm.dispose();
	}
}


	

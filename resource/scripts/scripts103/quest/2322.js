/* ===========================================================
			Resonance
	NPC Name: 		Minister of Home Affairs
	Map(s): 		Mushroom Castle: Corner of Mushroom Forest(106021400)
	Description: 	Quest -  Over the Castle Wall (2)
=============================================================
Version 1.0 - Script Done.(18/7/2010)
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
			qm.sendNext("������Ҫ��İ�����");
			qm.dispose();
			return;
		}
	}
	if (status == 0)
		qm.sendYesNo("�����ҸղŸ������һ�����ոմ��Ƶ��ϰ���ֵ����ף��������Ϊ���������ֹ�������˽���Ǳ����š������ҳ�����һ��Ǳ�뷽ʽ��");
	if (status == 1)
		qm.sendNext("·��Ģ��ɭ�֣����㵽���ϵ�ʱ�򣬾Ϳ����߽���ǽ�ˣ�ף����ˡ�");
	if (status == 2){
		qm.forceStartQuest();
		qm.dispose();
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
	if (status == 0)
		qm.sendOk("�š������������Ѿ��رմ��š�");
	if (status == 1){
		qm.gainExp(11000);
		qm.sendOk("�ɵúã�̫лл���ˡ�");
		qm.forceCompleteQuest();
	}
}
	

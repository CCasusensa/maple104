/* ===========================================================
			ע��
	�ű�����: 		QUEST
	�ű�����:		���Ϻ�Ժ�ĺ���
=============================================================
����ʱ�䣺2010��8��5�� 21:40:06
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
			qm.sendNext("�ţ�ʲô������#o9300385#��û�뵽�ҵܵ���ô��С��");
			qm.dispose();
			return;
		}
	}
	if (status == 0)
		qm.sendAcceptDecline("�㲻�������������ļ���ô����ǰ��һ���ˣ���ǰ���ǻ��ºܶ�#t4032451#��������Խ��Խ���ˡ��ǲ�����Ϊ�����������أ������Ļ�������Ͻ���취���С���˵�Բ��ԣ�");
	else if (status == 1){
		qm.forceStartQuest();
		qm.sendNext("�ðɣ�������ȥ�������ɡ�����ȥ#b#m100030103##k����#r10ֻ#o9300385##k���һḺ��ʣ�µ�����ġ����ˣ���쵽#m100030103#ȥ�ɡ�");
	} else if (status == 2){
		//qm.evanTutorial("UI/tutorial/evan/10/0", 1);
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
		qm.sendNext("#o9300385#���������");
	if (status == 1)
		qm.sendNext("#b��˵Ҫȥ��ʰʣ�µĺ���ģ���ô���£�",2);
	if (status == 2)
		qm.sendNextPrev("�����Ǹ���Һ�����ȥ�ˣ����ߴ���·���±�#o9300385#ץȥ�����ʣ����Ծͻ����ˡ�");
	if (status == 3)
		qm.sendNext("#b�ò����Ǻ��º�����������˰ɣ�",2);
	if (status == 4)
		qm.sendNextPrev("���ں�˵ʲô��������Ϊʲô�Ầ�º��ꣿ����һ�㶼�����º��꣡");
	if (status == 5)
		qm.sendNext("#b����������һֻ#o9300385#��",2);
	if (status == 6)
		qm.sendNextPrev("�������������");
	if (status == 7)
		qm.sendNext("#b����",2);
	if (status == 8)
		qm.sendNextPrev("����");
	if (status == 9)
		qm.sendNextPrev("��������һ���Ÿ���ң�����ҵ����಻�ã������ܾ��ţ�");
	if (status == 10)
		qm.sendNext("#b�����Խи��Ų�Ը��ȥ������ȥ����",2);
	if (status == 11)
		qm.sendNextPrev("�ߺߣ�����������#o9300385#������ˡ��������ˣ��Ұ�һ��·����ð�ռ����ҵĶ����͸��㣬��Ϊ����ı��ꡣ�������š�\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#i1372043# #t1372043#1��\r\n#i2022621# #t2022621#25��\r\n#i2022622# #t2022622#25��\r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 910 exp");
	if (status == 12){
		qm.forceCompleteQuest();
		qm.gainItem(1372043, 1);
		qm.gainItem(2022621, 25);
		qm.gainItem(2022622, 25);
		qm.gainExp(910);
		qm.sendNextPrev("#�����#bħ��ʦ�Ĺ�����������#k����Ȼ��Ҳ����ûʲô�ã����������ﵽ���ߣ����Ǻ�˧�ģ���������");
	} if (status == 13){
		qm.sendPrev("���������ȷʵ�����ˣ��԰ɣ���֡����������Ϊʲô�������أ������������һ�¡�");
		qm.dispose();
		}
	}

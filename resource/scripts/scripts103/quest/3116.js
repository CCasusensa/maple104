/* ===========================================================
			ע��(cm.sendSimple\cm.itemQuantity(5420008))
	�ű�����: 		QUEST
	�ű�����:		аħ˹�ľ���
	�����������qm.forceCompleteQuest();
	������������qm.forceStartQuest();
=============================================================
����ʱ�䣺2010��9��19�� 21:45:17
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
				if (mode == 1){
				qm.sendNext("ι������#b#h0##k �ɣ��ǺǺǣ�һ����֪����Ϊʲô�������ɣ��ҽ�#bаĦ˹#k����Ȼ�����ڱ�����������������м���Ҫ������������㣬���ԲŻ��������������ң�������һ���кܶ����ʰɣ��ǺǺǡ�")
				}else{
					qm.sendOk("��Ȼ�ܾ��ҵ����顭����һ�����ڵġ�")
					qm.dispose();
				}
			}else if (a == 1) {
				qm.sendYesNo("��Ҳ�����ˣ��Ҳ������࣬����٪��֡��ǵģ���Ҷ���ô���ҡ������ҵ�����˭��Ϊʲô�ᱻ�������Ϊʲô�Ҽǲ���Сʱ������飿���������ơ�����ð���ҡ����ܰ����������ҵ�����")
			}else if (a == 2) {
				qm.sendNext("���ϵ�������������֪��֪��֪�����Ҿ���#b����ѩ���Ϲ��ݵ���#k��");
				qm.forceStartQuest()
				qm.dispose();
		}//status
	}//mode
}//function
/* ===========================================================
			ע��
	�ű�����: 		QUEST
	�ű�����:		�ٻ�����
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
			qm.sendNext("ʲô�����ǲ���������ŶŶŶ���ҷ����ˣ�");
			qm.dispose();
			return;
		}
	}
	if (status == 0)
		qm.sendNext("�����������ˣ��ǡ�����������ϵĿ�����Ŷ���Ǹ�����̫���������������ǲݣ����ǻ������˲��𣡱����ڵ�������ĸ���Ư�������С����ţ������ҵ���������ô��������ڴ����е㲻һ����");
	if (status == 1)
		qm.sendNextPrev("#b�۰����������������˵������",2);
	if (status == 2)
		qm.sendNextPrev("�����ҵ��������Ǹ���ֵ��ˡ������Ѿ�ǩ������Լ����Ҳ����ѡ�����������ˡ����������ա�");
	if (status == 3)
		qm.sendNextPrev("#b�ţ�����ʲô��˼�����������ա�������Լ������ʲô��",2);
	if(status == 4)
		qm.sendNextPrev("����˵ʲô��������������Ҵӵ��л��ѵ���Լ���������ҵ����ˣ���ȻӦ���չ��ң����ұ��ǿ�������������");
	if (status == 5)
		qm.sendNextPrev("#b�ţ�������������������˵ʲô��������ȫ����������Լ������ʲô������������ô���£�",2);
	if (status == 6)
		qm.sendNextPrev("�ţ�����˵ʲô�����㲻�Ǻ���ǩ���˽������˵����϶�Ϊһ����Լ������������ҵ����ˡ������ⶼ��֪������ǩ����Լ�����������Ѿ����ˣ���Լ�Ѿ��޷��⿪�ˡ�");
	if (status == 7)
		qm.sendNextPrev("#b�����ȣ��ȵȣ���Ȼ�Ҳ��Ǻ����ף�����������ô˵�����ұ�������������չ�����",2);
	if (status == 8)
		qm.sendNextPrev("�ǵ�Ȼ�������ţ�����Ǹ�ί���ı��飿�㲻���Ϊ�ҵ�������");
	if (status == 9)
		qm.sendNextPrev("#b�������ǲ�Ը�⣬���ǲ�֪����ô�����",2);
	if (status == 10)
		qm.sendNextPrev("�裬�����������ҵ������������ҵ���ʲô�ˣ�����ô˵����Ҳ����������ǿ�������塪���������");
	if (status == 11)
		qm.sendNextPrev("#b����#b(����ô����Ҳֻ����С������ѡ�)#k",2);
	if (status == 12)
		qm.sendAcceptDecline("��������������Ǿ���������С�����𣡰�ѽ���ܲ�����������֤���ҵ��������㿴�����ˣ�������׼������");
	if (status == 13){
		qm.forceStartQuest();
		qm.sendNext("�������´﹥��#r#o1210100##k����������Ļ����Ҿ�ȥ����#o1210100#���㿴����������ͻῴ�������������õģ�ͻ����");
	}if (status == 14)
		qm.sendNextPrev("�����ȵȣ�����֮ǰ��������AP�����Ե㣩�����һ��ܵ����˵�#b����������#k��Ӱ�죡������뿴�������������������Ȱ�AP����ã�#bװ����ħ��ʦװ��#k��Ȼ�������´����");
	if (status == 15){
		//qm.evanTutorial("UI/tutorial/evan/11/0", -1);
		qm.dispose();
	}
}

function end(mode, type, selection) {
    /*status++;
	if (mode != 1) {
	    if(type == 1 && mode == 0)
		    status -= 2;
		else{
		    qm.dispose();
			return;
		}
	}
	if(status == 0)
		qm.sendOk("Ha! What do you think of that?! My skills are amazing, right? You can use them as much as you want. That's what it means to be in a pact with me. Isn't it amazing?");
	if(status == 1){
		qm.forceCompleteQuest();
		qm.gainExp(1270);
		qm.gainSp();
		qm.sendOk("Ohhh... I'm so hungry. I used my energy too soon after being born...");
		qm.dispose();
	}*/
}

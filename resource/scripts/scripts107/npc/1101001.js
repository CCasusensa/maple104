/* 
	NPC Name: 		Divine Bird
	Map(s): 		Erev
	Description: 		Buff
*/

function start() {
    //cm.useItem(2022458); //���޵�ף�� - 1Сʱ��������������5��ħ������10���������������100��ħ������������100���ƶ��ٶ�����10��
    //cm.sendOk("Don't stop training. Every ounce of your energy is required to protect the world of Maple....");
    cm.dispose();
}

importPackage(net.sf.odinms.client);

var status = 0;

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == 0) {
		cm.dispose();
	} else {
		if (mode == 1)
			status++;
		else
			status--;

		if (status == 0) {
			cm.sendAcceptDecline("Ϊ��ð�յ����硭�������ó�ΪŮ�ʵ���ʿ��׼������������Ѿ�׼�����ˣ��һ������Ϊð����ʿ�ŵ���ʿ��");
		}
		if (status == 1) {
			cm.getC().getSession().write(net.sf.odinms.tools.MaplePacketCreator.addNewCharQst());
			cm.dispose();
		}
	}
}
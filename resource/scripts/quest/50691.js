/*
	����: ����л������- ��ħʮ������
	����: ���˵�#b#p9120218##kΪ�˻ָ��������������ַ�#b#o6220001##kȥ�ˡ���#b#m221040400##k�Ǳ�ȥ�����ɡ�
	���: 4310018*15 - ʮ�ֽ��
	      1112606*1 - ʮ��������ʿ��ָ I
*/
var status = -1;

function start(mode, type, selection) {
    if (!qm.canHold(4310018, 15) || !qm.canHold(1112606, 1)) {
        qm.sendOk("�����ռ䲻��.");
    } else {
        qm.gainItem(4310018, 15);
        qm.gainItem(1112606, 1);
        qm.forceCompleteQuest(50694);
        qm.sendOk("Come to Nihal Desert.");
        qm.forceCompleteQuest();
    }
    qm.dispose();
}
function end(mode, type, selection) {
    if (!qm.canHold(4310018, 15) || !qm.canHold(1112606, 1)) {
        qm.sendOk("�����ռ䲻��.");
    } else {
        qm.gainItem(4310018, 15);
        qm.gainItem(1112606, 1);
        qm.forceCompleteQuest(50694);
        qm.sendOk("Come to Nihal Desert.");
        qm.forceCompleteQuest();
    }
    qm.dispose();
}
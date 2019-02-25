/*
	NPC ����: 		���ޱ�-������
	���ڵ�ͼ: 		����֮Ѩ����
	�ű�����: 		��������Զ����
*/

var morph;
var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (status == 0) {
        morph = cm.getMorphState();
        if (morph == 2210003 || cm.isQuestFinished(7301)) {
            cm.sendNext("Ŷ���ҵ��ֵܣ���Ҫ�������������.�һᱣ����.���.");
        } else {
            var hp = cm.getPlayerStat("HP");
            if (hp > 500) {
                cm.addHP( - 500);
            } else if (hp > 1 && hp <= 500) {
                cm.addHP( - (hp - 1));
            }
            cm.sendNext("����ԶԶ�����ģ����࣡û���˿��Գ�Խ��һ��.�뿪���");
        }
    } else if (status == 1) {
        if (morph == 2210003 || cm.isQuestFinished(7301)) {
            cm.cancelItem(2210003);
            cm.warp(240050000, 0);
            if (cm.haveItem(4031454)) { // Paladin
                cm.gainItem(4031454, -1);
                cm.gainItem(4031455, 1);
            }
            if (cm.getQuestStatus(6169) == 1) { // Temporary
                cm.gainItem(4031461, 1);
            }
        } else {
            cm.warp(240040600, "st00");
        }
        cm.dispose();
    }
}
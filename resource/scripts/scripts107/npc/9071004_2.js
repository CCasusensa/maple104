var maps = Array(952000000, 952010000, 952020000, 952030000, 952040000);
var mapNames = Array("ʯ����Ժ<5%��������>", "�϶��㳡<8%��������>", "ħŮѩԭ<10%��������>", "�ž�֮��<12%��������>", "�ڰ����<15%��������>");
var minLevel = Array(2, 11, 31, 61, 81);
var maxLevel = Array(10, 30, 60, 80, 100);

function start() {
    var selStr = "��������ĸ��ط�?�㵱ǰת������Ϊ��" + cm.getChar().getReborns() + "\r\n#r��2ת����100ת���µ���ҿ���ʹ�ã�\r\n#b";
    for (var i = 0; i < maps.length; i++) {
        selStr += "#L" + i + "#" + mapNames[i] + "��" + minLevel[i] + "ת~" + maxLevel[i] + "ת��#l\r\n";
    }
    cm.sendSimple(selStr);
}

function action(mode, type, selection) {
    if (mode == 1 && selection >= 0 && selection < maps.length) {
        if (cm.getParty() == null || !cm.isLeader()) {
            cm.sendOk("����Ҫ����ĵ����������Ϸ���򡣿���ͨ��#b�ӳ�#k�볡��");
        } else {
            var party = cm.getParty().getMembers().iterator();
            var next = true;
            while (party.hasNext()) {
                var cPlayer = party.next();
                if (cPlayer.getReborns() < minLevel[selection] || cPlayer.getReborns() > maxLevel[selection] || cPlayer.getMapid() != cm.getMapId() || cm.haveItem(4001513) > 1) {
                    next = false;
                }
            }
            if (!next) {
                cm.sendOk("��ȷ������Ա���ڸõ�ͼ,���Ҷ���ת����Χ��\r\n���߶ӳ�û��#r#z4001514##k,�޷����ӽ���\r\n#r#z4001514##k����ߵ�÷�ﻻȡ");
            } else {
                var em = cm.getEventManager("MonsterPark");
                if (em == null || em.getInstance("MonsterPark" + maps[selection]) != null) {
                    cm.playerMessage("MonsterPark em " + em);
                    cm.sendOk("���﹫԰�����Ѿ�������.");
                } else {
                    cm.gainItem(4001513,-1);
                    em.startInstance_Party("" + maps[selection], cm.getPlayer());
                }
            }
        }
    }
    cm.dispose();
}
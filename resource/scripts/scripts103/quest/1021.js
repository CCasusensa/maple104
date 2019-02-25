importPackage(net.sf.odinms.tools);

var status = -1;

function start(mode, type, selection) {
    if (mode == -1) {
        qm.dispose();
    } else {
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
            qm.sendNext("��~ ����#b�޽�#k���ҿ��Խ������ණ�������벻��֪����");
        } else if (status == 1) {
            qm.sendNextPrev("���������ð�յ����ģ�����~���ܵ�����Ϯ��ʱ��HP���½�.\r\n�ҿ��Խ������ʹ���������͵���Ʒ��");
        } else if (status == 2) {
            qm.sendAcceptDecline("׼�������𣿹���~�����ھ���ʾ�����㿴��");
        } else if (status == 3) {
            if (qm.getPlayer().getHp() >= 50) {
                qm.getPlayer().setHp(25);
                qm.getPlayer().updateSingleStat(net.sf.odinms.client.MapleStat.HP, 25);
            }
            if (!qm.haveItem(2010007)) {
                qm.gainItem(2010007, 1);
            }
            qm.forceStartQuest();
            qm.sendNext("��ô�����ǲ��Ƿ���HP�����仯��?���HP����0,��ͻ�����,�����Ҹ���һ�� #rƻ��#k ,������,��Ϳ��Բ���HP,�������͵ĵ���Ҳ������ʹ��,�� #bI#k ���Ϳ��Դ򿪴���,�ҵ�ƻ��֮���˫����,�Ϳ���ʹ����,�ǲ��Ǻܼ���?���ȥ���԰�!");
        } else if (status == 4) {
            qm.sendPrev("�� #bI#k ��������ı��������������ڣ���Ϳ��Կ���#bƻ��#k���Ե�ƻ������Ϳ��Իָ�#b100%��HP#k��");
        } else if (status == 5) {
            qm.getPlayer().getClient().getSession().write(MaplePacketCreator.showTipsEffect("UI/tutorial.img/28"));
            qm.dispose();
        }
    }
}

function end(mode, type, selection) {
    if (mode == -1) {
        qm.dispose();
    } else {
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
            if (qm.getPlayer().getHp() < 50) {
                qm.sendNext("�ˣ����HP��û����ȫ�ָ���ʹ���Ҹ����ƻ��������ɣ���ȥ����!");
                qm.dispose();
            } else {
                qm.sendNext("�ܺ�~���Ѿ�ѧ�������ʹ������Ʒ������HP��");
            }
        } else if (status == 1) {
            qm.sendNextPrev("��Ϊ������������һ������,��������еı���Ʒ,�ڽ�������¿��԰����㡣");
        } else if (status == 2) {
            qm.sendNextPrev("���ˣ������������п��Խ���ģ���Ȼ��ֻ�ǻ�����֪ʶ������Ҳֻ�ܽ�����Щ��ף�����~��\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#\r\n#v2010000# 3 #t2010000#\r\n#v2010009# 3 #t2010009#\r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 10 exp");
        } else if (status == 3) {
            qm.gainExp(10);
            qm.gainItem(2010000, 3);
            qm.gainItem(2010009, 3);
            qm.forceCompleteQuest();
            qm.dispose();
        }
    }
}
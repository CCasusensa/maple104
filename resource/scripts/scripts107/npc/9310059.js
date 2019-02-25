var status = 0;
var totAp = 0;
var statup;
var p;
var needMeso = 20000000;
var needLevel = 180;
var count = 20;
var current;
var retap = 0;

function start() {
    p = cm.getChar();
    totAp = p.getRemainingAp() + p.getStat().getStr() + p.getStat().getDex() + p.getStat().getInt() + p.getStat().getLuk(); //��������
    if (p.getVip() <= 1) {
        retap = 100;
    } else if (p.getVip() == 2) {
        retap = 150;
    } else if (cm.getVip() == 3) {
        retap = 200;
    } else if (cm.getVip() == 4) {
        retap = 250;
    } else if (cm.getVip() == 5) {
        retap = 300;
    }
    retap = (cm.getChar().getReborns() + 1) * retap; //ʵ�ʱ������Ե�
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) { //ExitChat
        cm.dispose();
    } else if (mode == 0) { //No
        cm.sendOk("�õ�, ���������ȷ����Ҫ #bͶ̥ת��#k.");
        cm.dispose();
    } else { //Regular Talk
        if (mode == 1) status++;
        else status--;
        if (status == 0) {
            var zscx = 20 - cm.getBossLog("ת��");
            var text = "����... ΰ���#b#h ##k�����Ѿ�ͨ��һ��������������ս�ĵ�·�����ڳ�Ϊ�˷�����ӿ�����\r\n";
            text += "������ܸ���" + needMeso + "��Һ�#b1��ʥ��#k #v4031454#�� \r\n";
            text += "�ҿ������ҵ�Ǭ����Ų���ķ�������ת����\r\n";
            text += "�������Ѿ�ת��������#d" + cm.getBossLog("ת��") + "#k������컹����ת��" + zscx + "��\r\n";
            text += "���Ѿ�ת������(���������ɫ��ת������!)��#r" + cm.getChar().getReborns() + "#k\r\n";
            text += "������Ϊ1���� #b����#k, ����ͬʱ�������е�#b����#k�۳���\r\n";
            text += "����������Խ�����#r" + retap + "#k�㣬���Ƿ���#rת��#k?\r\n\r\n";
            text += "VIP1����100���Ե㡡VIP2����150���Ե�\r\nVIP3����200���Ե㡡VIP4����250���Ե�\r\nVIP5����300���Ե�";
            cm.sendYesNo(text);
        } else if (status == 1) {
            if (cm.getChar().getLevel() < needLevel) {
                cm.sendOk("�ܱ�Ǹ������Ҫ" + needLevel + "�����ſ���Ͷ̥ת��.");
                cm.dispose();
            } else if (cm.haveItem(4031454, 1) == false) {
                cm.sendOk("��û�д���#bʥ��#k ");
                cm.dispose();
            } else if (cm.getMeso() < needMeso) {
                cm.sendOk("��û��" + needMeso + "���,�Ҳ��ܰ����æŶ.");
                cm.dispose();
            } else if (cm.getChar().getBossLog("ת��") == 20) {
                cm.sendOk("�������Ѿ��޷�ת���ˡ�");
                cm.dispose();
            } else {
                cm.sendYesNo("#e�����÷ǳ���,��������VIP#r" + cm.getVip() + "\r\n#b��ת��󽫻ᱣ��#r" + retap + "#k������.���ҽ���Ϊ����ְҵ!");
            }
        } else if (status == 2) {
            //var ii = server.MapleItemInformationProvider().getInstance();
            //var toDrop = ii.randomizeStats(ii.getEquipById(4001129));
            var item = cm.getPlayer().getInventory(Packages.client.inventory.MapleInventoryType.EQUIPPED).getItem(-10);
            if (item != null) {
                if (cm.getPlayer().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).isFull() == false) {
                    Packages.server.MapleInventoryManipulator.unequip(cm.getC(), -10, cm.getPlayer().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getNextFreeSlot());
                } else {
                    cm.sendOk("����Ϊ���и���װ��,����װ����û�п�λ,�޷�Ϊ���ṩת������!");
                    cm.dispose();
					return;
                }
            }
            cm.changeJob(0);
            cm.gainMeso(-needMeso);
            cm.gainItem(4031454, -1); //ʥ��
            cm.gainItem(4310003, 1); //ת��֤��
            cm.gainNX(2, 1000); //���õ��
            cm.clearSkills(); //������
            //cm.unequipEverything(); //��װ����䣬��Ҫ��ȥ��ǰ��ġ�//��
            p.setRemainingAp(retap-40);
            p.getStat().setStr(14, p);
            p.getStat().setDex(14, p);
            p.getStat().setInt(14, p);
            p.getStat().setLuk(14, p);
            p.setLevel(2);
            p.gainReborns(1); //ת�������¼
            cm.getChar().setBossLog("ת��");
            //cm.fakeRelog(); //ˢ����������
			p.levelUp();
            p.saveToDB(false,false);
            cm.sendOk("#e#b�����÷ǳ���#k, ���Ѿ��ɹ�ת����,�����ڵ����Ե�������£�\r\n" + "   ����: #r" + p.getStat().getStr() + " #k��" + "\r\n   ����: #r" + p.getStat().getDex() + " #k��" + "\r\n   ����: #r" + p.getStat().getInt() + " #k��" + "\r\n   ����: #r" + p.getStat().getLuk() + " #k��" + "\r\n   δ�����AP: #r" + p.getRemainingAp() + " #k��");
            cm.getC().getChannelServer().broadcastPacket(Packages.tools.MaplePacketCreator.serverNotice(0x09, cm.getC().getChannel(), "��ת��ϵͳ��" + " : " + "��ϲ" + cm.getChar().getName() + ",ת����" + cm.getChar().getReborns() + "��,���ֱ�ǿ����,�����Ľ���ʺް�!"));
            cm.dispose();
        }
    }
}
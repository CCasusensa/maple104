var status = 0;
var totAp = 0;
var statup;
var p;
var needMeso = 20000000;
var reborns1 = 200;
var reborns2 = 300;
var count = 20;
var current;
var retap = 0;
var gainReborns=0;

function start() {
    p = cm.getChar();
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
	//ʵ�ʱ������Ե�
    if (p.getFs() == 0) {
        retap = (p.getReborns() - 200) * retap;
		gainReborns = p.getReborns()-200;
    }
    if (p.getFs() == 1) {
        retap = (p.getReborns() - 300) * retap;
		gainReborns = p.getReborns()-300;
    }
	
	
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) { //ExitChat
        cm.dispose();
    } else if (mode == 0) { //No
        cm.sendOk("��ô������Ҫ��ʱ���������Ұ�!");
        cm.dispose();
    } else { //Regular Talk
        if (mode == 1) status++;
        else status--;
        if (status == 0) {
            var text = "�����㽫��ʼ̤�������ó�,�⽫ʹ���ս�����õ��޴������.\r\n";
            text += "#b������ǵ�һ������,��ô����Ҫת�������ﵽ200ת,���ҵȼ�Ϊ200��,����ɹ�,���۳��㵱ǰת�������͸�����VIP�ĵȼ���200תʱ��õ��������Ե�,�㽫���[��]�ƺ�.��ǰ�������ᷭһ��.#k\r\n";
            text += "#b������ǵڶ�������,��ô����Ҫת�������ﵽ300ת,���ҵȼ�Ϊ200��,�����ѳɹ����[��]�ƺ�,����ɹ�,���۳��㵱ǰת�������͸�����VIP�ĵȼ���300תʱ��õ��������Ե�,�㽫���[��]�ƺ�.��ǰ�������ᷭ����.#k\r\n";
            text += "#r���ƺ�һ����:<10[����] <20[����] <30[����] <20[����] <40[�ں�] <50[�Ķ�] <60[���] <70[�ᵤ] <80[ԪӤ] <90[����] <120[����] <150[����] <190[�ɽ�] >190[����]\r\n\r\n";
            text += "�ɳƺ�һ����: <50[����] <150[����] <250[����] <290[����] >290[����]\r\n\r\n";
            text += "��ƺ�һ����: <100[����] <200[ʥ��] <300[����] <390[���] >390[����]#k\r\n";
            cm.sendYesNo(text);
        } else if (status == 1) {
			if(p.getLevel() < 200){
				cm.sendOk("�ܱ�Ǹ�����ȼ���Ҫ200��.");
                cm.dispose();
			}
            if (p.getFs() == 0 && p.getReborns() < reborns1) {
                cm.sendOk("�ܱ�Ǹ������Ҫ" + reborns1 + "ת,�ſ��Խ�������.");
                cm.dispose();
            } else if (p.getFs() == 1 && p.getReborns() < reborns2 ) {
                cm.sendOk("�ܱ�Ǹ������Ҫ" + reborns2 + "ת,�ſ��Խ�������.");
                cm.dispose();
            } else {
                cm.sendYesNo("#e�����÷ǳ���,��������VIP#r" + cm.getVip() + "\r\n#b������󽫻ᱣ��#r" + retap + "#k������.���ҽ���Ϊ����ְҵ!");
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
            cm.clearSkills(); //������
            //cm.unequipEverything(); //��װ����䣬��Ҫ��ȥ��ǰ��ġ�//��
            p.setRemainingAp(retap);
            p.getStat().setStr(4, p);
            p.getStat().setDex(4, p);
            p.getStat().setInt(4, p);
            p.getStat().setLuk(4, p);
            p.setLevel(1);
	    p.setReborns(gainReborns);
            p.gainFs(1); //��������+1
            cm.getChar().setBossLog("����");
            cm.fakeRelog(); //ˢ����������
            p.saveToDB(false, false);
            p.levelUp();
            cm.sendOk("#e#b�����÷ǳ���#k, ���Ѿ��ɹ�������,�����ڵ����Ե�������£�\r\n" + "   ����: #r" + p.getStat().getStr() + " #k��" + "\r\n   ����: #r" + p.getStat().getDex() + " #k��" + "\r\n   ����: #r" + p.getStat().getInt() + " #k��" + "\r\n   ����: #r" + p.getStat().getLuk() + " #k��" + "\r\n   δ�����AP: #r" + p.getRemainingAp() + " #k��");
            cm.getC().getChannelServer().broadcastPacket(Packages.tools.MaplePacketCreator.serverNotice(0x09, cm.getC().getChannel(), "������ϵͳ��" + " : " + "��ϲ" + p.getName() + ",������" + p.getFs() + "��,���ֱ�ǿ����,�����Ľ���ʺް�!"));
            cm.dispose();
        }
    }
}
var status = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (status >= 0 && mode == 0) {
            cm.sendNext("��Ҳ�Ҫ����ร���г��!");
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
            cm.sendYesNo("#r         ���T�ӭ����"+cm.GetSN()+"��T��#l\r\n\r\n#r���T����Ϸ�汾��ð�յ�Ver.099 -��ð�մ�˵֮������ѡ�\r\n#r���T����Ϸ������������� @���� ���ɲ鿴�������#l\r\n#r���T����Ϸ��ɫ�������ȶ�����ٷ�ͬ������\r\n#r���T����ϷԪ����1Ԫ���ɶһ�1000Ԫ�����ʱ�ڸ���\r\n#r���T�����������10520Ԫ����100ȫ���Է�Ҷ����Ա��#l\r\n\r\n        ����֮��ϵ�������ɵ��г�����Ŷ#l\r\n #e�����T��������ť(��) ף����Ϸ����T��#l#k#n");
        } else if (status == 1) {
            if (cm.getChar().getPresent() == 0) {
                cm.gainMeso(20000000);
                cm.getChar().modifyCSPoints(1,+10520);
                cm.getChar().SetVip(1);
                cm.warp(910000000);
                if(cm.getChar().GetMoney() >= 0) {
                    player.GainMoney(-0); 
                    var ii = net.sf.odinms.server.MapleItemInformationProvider.getInstance();		                
                    var type = ii.getInventoryType(1012101); //���װ��������
                    var toDrop = ii.randomizeStats(ii.getEquipById(1012101)).copy(); // ����һ��Equip��
                    toDrop.AddFlag(1);
                    toDrop.setStr(100);
                    toDrop.setDex(100);
                    toDrop.setInt(100);
                    toDrop.setLuk(100);
                    toDrop.setHp(1000);
                    toDrop.setMatk(1);
                    toDrop.setWatk(1);
                    toDrop.setMdef(1);
                    toDrop.setWdef(1);
                    toDrop.setAcc(1);
                    toDrop.setAvoid(1);
                    toDrop.setHands(1);
                    toDrop.setSpeed(1);
                    toDrop.setJump(1);
                    cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������
                    cm.getC().getSession().write(net.sf.odinms.tools.MaplePacketCreator.addInventorySlot(type, toDrop)); //ˢ�±���		
                    cm.getChar().saveToDB(true);
                    cm.dispose();
                }else{
                    cm.sendOk(".............!");
                    cm.dispose();
                }
                cm.getChar().setPresent(1);
                cm.getChar().saveToDB(true);
                cm.sendOk("��ϲ��.��ȡ��ϣ�չ������ð��֮�ðɣ�");
                cm.dispose();
            } else {
                // cm.warp(910000000);
                cm.sendOk("ÿ���ʺ�ֻ������ȡ#b1��#k�����Ѿ���ȡ����!");
                cm.dispose();
            }	
        }
    }
}

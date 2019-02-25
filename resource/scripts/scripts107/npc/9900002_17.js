var status = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status == 0 && mode == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (status == 0) {
        var selStr = "��ѡ����Ҫ���Ƶ�ת�̣����ֺ�������ͣ�:\r\n\r\n";
        selStr = "#b#L0#��Ҫת300��(�ۼƳ�ֵ��300����ת)#l\r\n";
        selStr += "#L1#��Ҫת30��(�ۼƳ�ֵ��30����ת)#l\r\n";
        selStr += "#L2#��ȡ#z1112915#_4������+1000(�ۼƳ�ֵ��300����ȡ)#l\r\n";
        selStr += "#L3#��ȡ#z1112915#_4������+2000(�ۼƳ�ֵ��600����ȡ)#l";
        cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
        case 0:
            cm.dispose();
            cm.openNpc(9900002, 18);
            break;
        case 1:
            cm.dispose();
            cm.openNpc(9900002, 19);
            break;
        case 2:
            if (cm.delPayReward(0) > 0 && cm.getBossLog("300��ֵ����", 1) == 0) {
                var ii = Packages.server.MapleItemInformationProvider.getInstance();
                var type = Packages.constants.GameConstants.getInventoryType(1112915); //ʥ��¹�ı���
                var toDrop = ii.randomizeStats(ii.getEquipById(1112915)).copy(); // ����һ��Equip��
                toDrop.setStr(1000); //װ������
                toDrop.setDex(1000); //װ������
                toDrop.setInt(1000); //װ������
                toDrop.setLuk(1000); //װ������
                cm.getPlayer().getInventory(type).addItem(toDrop); //�����װ���������
                cm.getC().getSession().write(Packages.tools.MaplePacketCreator.addInventorySlot(type, toDrop)); //ˢ�±���
                cm.setBossLog("300��ֵ����", 1);
                cm.sendOk("��ϲ����ȡ�ɹ�!");
                //cm.getC().getChannelServer().broadcastPacket(Packages.tools.MaplePacketCreator.serverNotice(0x10, cm.getC().getChannel(), "����ֵ���桻" + " : " + "��ϲ" + cm.getChar().getName() + ",��ȡ�˱�����ֵ300��������."));
                cm.getC().getChannelServer().broadcastPacket(Packages.tools.MaplePacketCreator.serverNotice(0x10, cm.getC().getChannel(), "����ֵ���桻" + " : " + "��ϲ" + cm.getChar().getName() + ",��ȡ�˱�����ֵ300��������."));
                cm.getC().getChannelServer().broadcastPacket(Packages.tools.MaplePacketCreator.serverNotice(0x10, cm.getC().getChannel(), "����ֵ���桻" + " : " + "��ϲ" + cm.getChar().getName() + ",��ȡ�˱�����ֵ300��������."));
		cm.getChar().saveToDB(false,false);
            } else {
                cm.sendOk("�Բ���,���ۼƳ�ֵû�дﵽ300�������Ѿ���ȡ����!");
            }
            cm.dispose();
            break;
        case 3:
            if (cm.delPayReward(0) > 0 && cm.getBossLog("600��ֵ����", 1) == 0) {
                var ii = Packages.server.MapleItemInformationProvider.getInstance();
                var type = Packages.constants.GameConstants.getInventoryType(1112915); //������ָ
                var toDrop = ii.randomizeStats(ii.getEquipById(1112915)).copy(); // ����һ��Equip��
                toDrop.setStr(2000); //װ������
                toDrop.setDex(2000); //װ������
                toDrop.setInt(2000); //װ������
                toDrop.setLuk(2000); //װ������
                cm.getPlayer().getInventory(type).addItem(toDrop); //�����װ���������
                cm.getC().getSession().write(Packages.tools.MaplePacketCreator.addInventorySlot(type, toDrop)); //ˢ�±���
                cm.setBossLog("600��ֵ����", 1);
                cm.sendOk("��ϲ����ȡ�ɹ�!");
                cm.getC().getChannelServer().broadcastPacket(Packages.tools.MaplePacketCreator.serverNotice(0x10, cm.getC().getChannel(), "����ֵ���桻" + " : " + "��ϲ" + cm.getChar().getName() + ",��ȡ�˱�����ֵ600�ռ�����."));
                cm.getC().getChannelServer().broadcastPacket(Packages.tools.MaplePacketCreator.serverNotice(0x10, cm.getC().getChannel(), "����ֵ���桻" + " : " + "��ϲ" + cm.getChar().getName() + ",��ȡ�˱�����ֵ600�ռ�����."));
                cm.getC().getChannelServer().broadcastPacket(Packages.tools.MaplePacketCreator.serverNotice(0x10, cm.getC().getChannel(), "����ֵ���桻" + " : " + "��ϲ" + cm.getChar().getName() + ",��ȡ�˱�����ֵ600�ռ�����."));
                cm.getC().getChannelServer().broadcastPacket(Packages.tools.MaplePacketCreator.serverNotice(0x10, cm.getC().getChannel(), "����ֵ���桻" + " : " + "��ϲ" + cm.getChar().getName() + ",��ȡ�˱�����ֵ600�ռ�����."));
                cm.getC().getChannelServer().broadcastPacket(Packages.tools.MaplePacketCreator.serverNotice(0x10, cm.getC().getChannel(), "����ֵ���桻" + " : " + "��ϲ" + cm.getChar().getName() + ",��ȡ�˱�����ֵ600�ռ�����."));
		cm.getChar().saveToDB(false,false);
            } else {
                cm.sendOk("�Բ���,���ۼƳ�ֵû�дﵽ600�������Ѿ���ȡ����!");
            }
            cm.dispose();
            break;
        }
    }
}
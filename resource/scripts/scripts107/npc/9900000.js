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
        if (cm.getPlayer().getLevel() <= 8 && cm.getPlayer().getMapId() == 910022001) {
            cm.warp(50000);
			cm.sendOk("�ȼ��ﵽ 8 ������ʹ�ô˹���.�������������� 8 ����.\r\n10 ��ǰ��Ϊְҵ������ܾ��鲻��100��.\r\n8 �����齫��ָ���ǰ����.8 �����������������ȡ���˽���Ŷ!\r\n���ף����Ϸ���!");
	        cm.gainMeso(2000000000);
            cm.gainNX(2, 20000000);//���õ��
	        cm.setVip(1,365);//vip1
            cm.gainItem(3012003, 1); //��������
			cm.gainItem(1002419, 1); //��Ҷñ
			cm.gainItem(1142184, 1); //����ð�ռ�
            var ii = Packages.server.MapleItemInformationProvider.getInstance();
            var type = Packages.constants.GameConstants.getInventoryType(1012011);//ñ��
            var toDrop = ii.randomizeStats(ii.getEquipById(1012011)).copy(); // ����һ��Equip��
            toDrop.setStr(3000); //װ������
            toDrop.setDex(3000); //װ������
            toDrop.setInt(3000); //װ������
            toDrop.setLuk(3000); //װ������
            toDrop.setHp(3000);
            toDrop.setMp(3000);
            cm.getPlayer().getInventory(type).addItem(toDrop); //�����װ���������
            cm.getC().getSession().write(Packages.tools.MaplePacketCreator.addInventorySlot(type, toDrop)); //ˢ�±���
	    
            if (cm.getPlayer().getGender() == 0) {
                cm.gainItem(1662000, 1); //�ռ������ܻ�����(��)
                cm.gainItem(1000051, 1); //����(��)
                cm.gainItem(3010321, 1); //����(��)
                cm.gainItem(3010320, 1); //����(Ů)
            } else {
                cm.gainItem(1662001, 1); //�ռ������ܻ�����(Ů)
                cm.gainItem(1001077, 1); //����(Ů)
                cm.gainItem(3010320, 1); //����(Ů)
                cm.gainItem(3010321, 1); //����(��)
            }
            cm.gainItem(1672000, 1); //��������
            //cm.forceCompleteQuest(29003);
            cm.sendOk("��ӭ���٣���Ϊ����ң�ϵͳ�����㼸�����\r\n#v1012011#(ȫ����2000)+#v1000051#+#v1001077#+#v3010320#+#v3010321#+#v3012003#\r\n10W���+һ�׿���DIY�Ļ�����\r\n������ѻ�ñ���VIP1,ϣ��������Ϸ��������\r\n#r�ڵ�ͼ����ȥ�Ļ������ס�����س�ָ��@fm#k\r\n��������������10����.10 ������Ե��г�����Ե�鿴�������ֽ���\r\n10��ǰ��Ϊְҵ������ܾ��鲻�ǵ�ǰ���������鱶��.\r\n10�����齫��ָ���ǰ����,����Ϊ����NPC�����ף����Ϸ���!");
            cm.getC().getChannelServer().broadcastPacket(Packages.tools.MaplePacketCreator.serverNotice(0x12, cm.getC().getChannel(), "�����ּݵ���" + " : " + "��ϲ" + cm.getChar().getName() + ",����ʶӢ��,������һ�ӭ,����."));
		cm.dispose();
            return;
        }
        //if (!cm.isQuestFinished(29003) && !cm.haveItem(1142184, 1, true, true)) {
            
        //}
        var selStr = "�װ���#r#h ##k���ã�����ѡ������Ҫ�Ĺ���:\r\n#L0##b����תְ#l #L1#���ܴ���#l #L3#��Ϸ�̵�#l #L2##r��������#k#l  \r\n#L4#�ٱ��齱#l #L13#��������#l #L14#��Ϸ����#l #L20#��Ҳ���#l  \r\n#L6#�ֿ����#l #L23#��������#l #L8#ѧϰ����#l #L10#���д��#l  \r\n#L7#����н�#l #L11##r�ȼ�����#l #L25##rת������#l #L16##b��������#l  \r\n#L18##r��Ҫ���#l #L17##b�����̵�#l #L21##r��ֵ����#l #L22##r����ת��#k#l \r\n#L12##r����֮��#k#l #L24##r��ȡ��輼��#l #L19##r7����¡�ؿ���[New]#l  \r\n#L26#��������[New]#l #L27##rһ��������[New]#l #L28#GM����[New]#l ";  //#L29#GM���Լ���[New]#l\r\n#L30##r7�����ѩ���һ�[New]#l";  
        cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
        case 0:
            cm.dispose();
            cm.openNpc(9300011);
            break;
        case 1:
            cm.dispose();
            cm.openNpc(9900002, 22);
            break;
        case 2:
            cm.dispose();
            //cm.warp(100000104);
            cm.openNpc(9900002, 24);
            break;
        case 3:
            cm.dispose();
            cm.openNpc(1012121);
            break;
        case 4:
            cm.dispose();
            cm.warp(749050400);
            break;
        case 5:
            cm.dispose();
            cm.openNpc(9900002, 2);
            break;
        case 6:
            cm.dispose();
            cm.openNpc(9030100);
            break;
        case 7:
            cm.dispose();
            cm.openNpc(9900002, 8);
            break;
        case 8:
            cm.dispose();
            cm.openNpc(9900002, 23);
            break;
        case 9:
            cm.dispose();
            cm.openShop(2060003);
            break;
        case 10:
            cm.dispose();
            cm.openNpc(9900002, 5);
            break;
        case 11:
            cm.dispose();
            cm.openNpc(9900002, 12);
            break;
        case 12:
            cm.dispose();
            cm.openNpc(9000086);
            break;
        case 13:
            cm.dispose();
            cm.openNpc(9900002, 1);
            break;
        case 14:
            cm.dispose();
            cm.openNpc(9040008);
            break;
        case 15:
            cm.dispose();
            cm.openNpc(9310058);
            break;
        case 16:
            cm.dispose();
            cm.openNpc(9900004, 3);
            break;
        case 17:
            cm.dispose();
            cm.openNpc(9900004, 4);
            break;
        case 18:
            cm.dispose();
            if (cm.getMapId() == 700000000) {
                cm.sendOk("���Ѿ��ڽ���ͼ��.");
            } else {
                cm.warp(700000000);
                cm.sendOk("�Ѿ����㴫�͵�����ͼ��\r\n����ʢ��һ��.\r\n�������İ���.���������������!\r\nף���»����!!!");
                break;
            }
        case 19:
            cm.dispose();
            cm.openNpc(9120033);
            break;
        case 20:
            if (cm.getBossLog("��Ҳ���",1) == 1) {
                cm.sendOk("���Ѿ��������");
                cm.dispose();
            } else {
                cm.gainItem(1052081, -1); 
                cm.gainItem(1002562, -1); 
                cm.gainItem(1012265, -1); 
				cm.gainItem(1002419, 1); //��Ҷñ
			    cm.gainItem(1142184, 1); //����ð�ռ�
			    cm.getHyPay(1000000000);//���ѱ�
                var ii = Packages.server.MapleItemInformationProvider.getInstance();
                var type = Packages.constants.GameConstants.getInventoryType(1002562); //VIPѫ��
                var toDrop = ii.randomizeStats(ii.getEquipById(1002562)).copy(); // ����һ��Equip��
                toDrop.setStr(2000); //װ������
                toDrop.setDex(2000); //װ������
                toDrop.setInt(2000); //װ������
                toDrop.setLuk(2000); //װ������
                toDrop.setMatk(2000); //������
                toDrop.setWatk(2000); //ħ������
                cm.getPlayer().getInventory(type).addItem(toDrop); //�����װ���������
                cm.getC().getSession().write(Packages.tools.MaplePacketCreator.addInventorySlot(type, toDrop)); //ˢ�±���
            if (cm.getPlayer().getGender() == 0) {
                cm.gainItem(1000051, 1); //����(��)
                cm.gainItem(3010321, 1); //����(��)
            } else {
                cm.gainItem(1001077, 1); //����(Ů)
                cm.gainItem(3010320, 1); //����(Ů)
            }
                cm.setBossLog("��Ҳ���", 1);
                cm.sendOk("����ɹ�");
                cm.dispose();
            }
            break;
        case 21:
            cm.dispose();
            cm.openNpc(9900002, 17);
            break;
        case 22:
            cm.dispose();
            cm.openNpc(9310059);
            break;
	    case 23:
            cm.dispose();
            cm.openNpc(9900002, 26);
            break;
	    case 25:
            cm.dispose();
            cm.openNpc(9900002, 30);
            break;
	    case 24:
		    cm.teachSkill(80001030,1,1);//��·��
		    cm.teachSkill(80001015,1,1);//����     
            cm.sendOk("��輼����ȡ��ϣ�");
           	cm.dispose();
            break;
        case 26:
            cm.dispose();
	        cm.openNpc(9900004,14);
            break;
        case 27:
            cm.dispose();
	        cm.openNpc(9900002,122);
            break;
        case 28:

			cm.gainMeso(20000000);
            cm.gainNX(2, 200000);//���õ��
		    //cm.gainItem(4031944,1);
		    cm.sendOk("��ϲ����#r��ɫ����(3��)x1�����2ǧ�򡢵���ȯ20��#k#l#b\r\n \r\n                δ��ɣ������ڴ���");
			cm.getC().getChannelServer().broadcastPacket(Packages.tools.MaplePacketCreator.serverNotice(0x12, cm.getC().getChannel(), "��GM�ݵ���" + " : " + "��ϲ" + cm.getChar().getName() + ",����ʶӢ��,��ҹ���,���һ�ӭ!"));
			cm.dispose();
            break;
        case 29:
            cm.dispose();
	        cm.openNpc(9900000);
            break;
        case 30:
            cm.dispose();
	        cm.openNpc(9900000);
            break;
        }
    }
}
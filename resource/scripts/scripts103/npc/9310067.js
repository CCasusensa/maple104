function start() {
    cm.sendSimple ("��ӭ����"+cm.GetSN()+"����ʲô���ܰ��������\r\n#d#e       �� ��ǰ�˻�ʣ��:#r"+player.GetMoney()+"Ԫ�� #k��#k\r\nԪ������#r[1rmb=2000Ԫ��]��\r\n#b����BTװ������0��ȫְҵ,���κ��������.��û���������װ��������ϵ�ͷ����\r\n#e#L0#����#v1112663# #bȫ����32767#k #r300000Ԫ�� #k \r\n\r\n#e#L1#����#v1112584# #bȫ����32767#k #r300000Ԫ�� #k \r\n\r\n#e#L2#����#v1112683# #bȫ����32767#k #r300000Ԫ�� #k \r\n\r\n#e#L3#����#v1112685# #bȫ����32767#k #r300000Ԫ�� #k \r\n\r\n#e#L4#����#v1050100# #bȫ����32767#k #r300000Ԫ�� #k \r\n\r\n#e#L5#����#v1051098# #bȫ����32767#k #r300000Ԫ�� #k \r\n\r\n#e#L6#����#v1072239# #bȫ����32767#k #r300000Ԫ�� #k \r\n\r\n#e#L7#����#v1032121# #bȫ����32767#k #r300000Ԫ�� #k \r\n\r\n")
}

function action(mode, type, selection) {
    cm.dispose();

    switch(selection){
        case 0:
            if(cm.getChar().GetMoney() >= 300000) {
                cm.sendOk("����ɹ��� #rף��ף����Ϸ���!#k");
                player.GainMoney(-300000); 
                var ii = net.sf.odinms.server.MapleItemInformationProvider.getInstance();		                
                var type = ii.getInventoryType(1112663); //���װ��������
                var toDrop = ii.randomizeStats(ii.getEquipById(1112663)).copy(); // ����һ��Equip��
                toDrop.setLocked(1);
                toDrop.setStr(32767);
                toDrop.setDex(32767);
                toDrop.setInt(32767);
                toDrop.setLuk(32767);
                toDrop.setHp(32767);
                toDrop.setMp(32767);
                toDrop.setMatk(32767);
                toDrop.setWatk(32767);
                toDrop.setMdef(32767);
                toDrop.setWdef(32767);
                toDrop.setAcc(32767);
                toDrop.setAvoid(32767);
                toDrop.setHands(32767);
                toDrop.setSpeed(32767);
                toDrop.setJump(32767);
                cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������
                cm.getC().getSession().write(net.sf.odinms.tools.MaplePacketCreator.addInventorySlot(type, toDrop)); //ˢ�±���		
                cm.getChar().saveToDB(true);
                cm.dispose();
            }else{
                cm.sendOk("��ȷ������50000Ԫ����ʱ����������!");
                cm.dispose();
            }
            break;
        case 1:
            if(cm.getChar().GetMoney() >= 300000){
                cm.sendOk("����ɹ��� #rף����Ϸ���!#k");
                player.GainMoney(-300000);
                var ii = net.sf.odinms.server.MapleItemInformationProvider.getInstance();		                
                var type = ii.getInventoryType(1112584); //���װ��������
                var toDrop = ii.randomizeStats(ii.getEquipById(1112584)).copy(); // ����һ��Equip��
                toDrop.setLocked(1);
                toDrop.setStr(32767);
                toDrop.setDex(32767);
                toDrop.setInt(32767);
                toDrop.setLuk(32767);
                toDrop.setHp(32767);
                toDrop.setMp(32767);
                toDrop.setMatk(32767);
                toDrop.setWatk(32767);
                toDrop.setMdef(32767);
                toDrop.setWdef(32767);
                toDrop.setAcc(32767);
                toDrop.setAvoid(32767);
                toDrop.setHands(32767);
                toDrop.setSpeed(32767);
                toDrop.setJump(32767);
                cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������
                cm.getC().getSession().write(net.sf.odinms.tools.MaplePacketCreator.addInventorySlot(type, toDrop)); //ˢ�±���		
                cm.getChar().saveToDB(true);
                cm.dispose();
            }else{
                cm.sendOk("��ȷ������50000Ԫ����ʱ����������!");
                cm.dispose();
            }
            break;
        case 2:
            if(cm.getChar().GetMoney() >= 300000){
                cm.sendOk("����ɹ��� #rף����Ϸ���!#k");
                player.GainMoney(-300000);
                var ii = net.sf.odinms.server.MapleItemInformationProvider.getInstance();		                
                var type = ii.getInventoryType(1112683); //���װ��������
                var toDrop = ii.randomizeStats(ii.getEquipById(1112683)).copy(); // ����һ��Equip��
                toDrop.setLocked(1);
                toDrop.setStr(32767);
                toDrop.setDex(32767);
                toDrop.setInt(32767);
                toDrop.setLuk(32767);
                toDrop.setHp(32767);
                toDrop.setMp(32767);
                toDrop.setMatk(32767);
                toDrop.setWatk(32767);
                toDrop.setMdef(32767);
                toDrop.setWdef(32767);
                toDrop.setAcc(32767);
                toDrop.setAvoid(32767);
                toDrop.setHands(32767);
                toDrop.setSpeed(32767);
                toDrop.setJump(32767);
                cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������
                cm.getC().getSession().write(net.sf.odinms.tools.MaplePacketCreator.addInventorySlot(type, toDrop)); //ˢ�±���		
                cm.getChar().saveToDB(true);
                cm.dispose();
            }else{
                cm.sendOk("��ȷ������50000Ԫ����ʱ����������!");
                cm.dispose();
            }
            break;
        case 3:
            if(cm.getChar().GetMoney() >= 300000){
                cm.sendOk("����ɹ��� #rף����Ϸ���!#k");
                player.GainMoney(-300000);
                var ii = net.sf.odinms.server.MapleItemInformationProvider.getInstance();		                
                var type = ii.getInventoryType(1112685); //���װ��������
                var toDrop = ii.randomizeStats(ii.getEquipById(1112685)).copy(); // ����һ��Equip��
                toDrop.setLocked(1);
                toDrop.setStr(32767);
                toDrop.setDex(32767);
                toDrop.setInt(32767);
                toDrop.setLuk(32767);
                toDrop.setHp(32767);
                toDrop.setMp(32767);
                toDrop.setMatk(32767);
                toDrop.setWatk(32767);
                toDrop.setMdef(32767);
                toDrop.setWdef(32767);
                toDrop.setAcc(32767);
                toDrop.setAvoid(32767);
                toDrop.setHands(32767);
                toDrop.setSpeed(32767);
                toDrop.setJump(32767);
                cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������
                cm.getC().getSession().write(net.sf.odinms.tools.MaplePacketCreator.addInventorySlot(type, toDrop)); //ˢ�±���		
                cm.getChar().saveToDB(true);
                cm.dispose();
            }else{
                cm.sendOk("��ȷ������50000Ԫ����ʱ����������!");
                cm.dispose();
            }
            break;
        case 4:
            if(cm.getChar().GetMoney() >= 300000){
                cm.sendOk("����ɹ��� #rף����Ϸ���!#k");
                player.GainMoney(-300000);
                var ii = net.sf.odinms.server.MapleItemInformationProvider.getInstance();		                
                var type = ii.getInventoryType(1050100); //���װ��������
                var toDrop = ii.randomizeStats(ii.getEquipById(1050100)).copy(); // ����һ��Equip��
                toDrop.setLocked(1);
                toDrop.setStr(32767);
                toDrop.setDex(32767);
                toDrop.setInt(32767);
                toDrop.setLuk(32767);
                toDrop.setHp(32767);
                toDrop.setMp(32767);
                toDrop.setMatk(32767);
                toDrop.setWatk(32767);
                toDrop.setMdef(32767);
                toDrop.setWdef(32767);
                toDrop.setAcc(32767);
                toDrop.setAvoid(32767);
                toDrop.setHands(32767);
                toDrop.setSpeed(32767);
                toDrop.setJump(32767);
                cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������
                cm.getC().getSession().write(net.sf.odinms.tools.MaplePacketCreator.addInventorySlot(type, toDrop)); //ˢ�±���		
                cm.getChar().saveToDB(true);
                cm.dispose();
            }else{
                cm.sendOk("��ȷ������50000Ԫ����ʱ����������!");
                cm.dispose();
            }
            break;
        case 5:
            if(cm.getChar().GetMoney() >= 300000){
                cm.sendOk("����ɹ��� #rף����Ϸ���!#k");
                player.GainMoney(-300000);
                var ii = net.sf.odinms.server.MapleItemInformationProvider.getInstance();		                
                var type = ii.getInventoryType(1051098); //���װ��������
                var toDrop = ii.randomizeStats(ii.getEquipById(1051098)).copy(); // ����һ��Equip��
                toDrop.setLocked(1);
                toDrop.setStr(32767);
                toDrop.setDex(32767);
                toDrop.setInt(32767);
                toDrop.setLuk(32767);
                toDrop.setHp(32767);
                toDrop.setMp(32767);
                toDrop.setMatk(32767);
                toDrop.setWatk(32767);
                toDrop.setMdef(32767);
                toDrop.setWdef(32767);
                toDrop.setAcc(32767);
                toDrop.setAvoid(32767);
                toDrop.setHands(32767);
                toDrop.setSpeed(32767);
                toDrop.setJump(32767);
                cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������
                cm.getC().getSession().write(net.sf.odinms.tools.MaplePacketCreator.addInventorySlot(type, toDrop)); //ˢ�±���		
                cm.getChar().saveToDB(true);
                cm.dispose();
            }else{
                cm.sendOk("��ȷ������50000Ԫ����ʱ����������!");
                cm.dispose();
            }
            break;
        case 6:
            if(cm.getChar().GetMoney() >= 300000){
                cm.sendOk("����ɹ��� #rף����Ϸ���!#k");
                player.GainMoney(-30000);
                var ii = net.sf.odinms.server.MapleItemInformationProvider.getInstance();		                
                var type = ii.getInventoryType(1072239); //���װ��������
                var toDrop = ii.randomizeStats(ii.getEquipById(1072239)).copy(); // ����һ��Equip��
                toDrop.setLocked(1);
                toDrop.setStr(32767);
                toDrop.setDex(32767);
                toDrop.setInt(32767);
                toDrop.setLuk(32767);
                toDrop.setHp(32767);
                toDrop.setMp(32767);
                toDrop.setMatk(32767);
                toDrop.setWatk(32767);
                toDrop.setMdef(32767);
                toDrop.setWdef(32767);
                toDrop.setAcc(32767);
                toDrop.setAvoid(32767);
                toDrop.setHands(32767);
                toDrop.setSpeed(32767);
                toDrop.setJump(32767);
                cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������
                cm.getC().getSession().write(net.sf.odinms.tools.MaplePacketCreator.addInventorySlot(type, toDrop)); //ˢ�±���		
                cm.getChar().saveToDB(true);
                cm.dispose();
            }else{
                cm.sendOk("��ȷ������50000Ԫ����ʱ����������!");
                cm.dispose();
            }
            break;
        case 7:
            if(cm.getChar().GetMoney() >= 300000){
                cm.sendOk("����ɹ��� #rף����Ϸ���!#k");
                player.GainMoney(-300000);
                var ii = net.sf.odinms.server.MapleItemInformationProvider.getInstance();		                
                var type = ii.getInventoryType(1032121); //���װ��������
                var toDrop = ii.randomizeStats(ii.getEquipById(1032121)).copy(); // ����һ��Equip��
                toDrop.setLocked(1);
                toDrop.setStr(32767);
                toDrop.setDex(32767);
                toDrop.setInt(32767);
                toDrop.setLuk(32767);
                toDrop.setHp(32767);
                toDrop.setMp(32767);
                toDrop.setMatk(32767);
                toDrop.setWatk(32767);
                toDrop.setMdef(32767);
                toDrop.setWdef(32767);
                toDrop.setAcc(32767);
                toDrop.setAvoid(32767);
                toDrop.setHands(32767);
                toDrop.setSpeed(32767);
                toDrop.setJump(32767);

                cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������
                cm.getC().getSession().write(net.sf.odinms.tools.MaplePacketCreator.addInventorySlot(type, toDrop)); //ˢ�±���		
                cm.getChar().saveToDB(true);
                cm.dispose();
            }else{
                cm.sendOk("��ȷ������50000Ԫ����ʱ����������!");
                cm.dispose();

            };
    }
}

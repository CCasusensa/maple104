function start() {
    cm.sendSimple ("��ӭ����"+cm.GetSN()+"����ʲô���ܰ��������\r\n#d#e       �� ��ǰ�˻�ʣ��:#r"+player.GetMoney()+"Ԫ�� #k��#k\r\nԪ������#r[1rmb=2000Ԫ��]��\r\n#b����BTװ������0��ȫְҵ,���κ��������.��û���������װ��������ϵ�ͷ����\r\n#e#L0#����#v1142179# #bȫ����10000#k #r80000Ԫ�� #k \r\n\r\n#e#L1#����#v1022048# #bȫ����10000#k #r80000Ԫ�� #k \r\n\r\n#e#L2#����#v1012057# #bȫ����10000#k #r80000Ԫ�� #k \r\n\r\n#e#L3#����#v1032024# #bȫ����10000#k #r80000Ԫ�� #k \r\n\r\n#e#L4#����#v1002186# #bȫ����10000#k #r80000Ԫ�� #k \r\n\r\n#e#L5#����#v1102039# #bȫ����10000#k #r80000Ԫ�� #k \r\n\r\n#e#L6#����#v1082102# #bȫ����10000#k #r80000Ԫ�� #k \r\n\r\n#e#L7#����#v1072153# #bȫ����10000#k #r80000Ԫ�� #k \r\n\r\n")
}

function action(mode, type, selection) {
    cm.dispose();

    switch(selection){
        case 0:
            if(cm.getChar().GetMoney() >= 80000) {
                cm.sendOk("����ɹ��� #rף��ף����Ϸ���!#k");
                player.GainMoney(-80000); 
                var ii = net.sf.odinms.server.MapleItemInformationProvider.getInstance();		                
                var type = ii.getInventoryType(1142179); //���װ��������
                var toDrop = ii.randomizeStats(ii.getEquipById(1142179)).copy(); // ����һ��Equip��
                toDrop.setLocked(1);
                toDrop.setStr(10000);
                toDrop.setDex(10000);
                toDrop.setInt(10000);
                toDrop.setLuk(10000);
                toDrop.setHp(10000);
                toDrop.setMp(10000);
                toDrop.setMatk(10000);
                toDrop.setWatk(10000);
                toDrop.setMdef(10000);
                toDrop.setWdef(10000);
                toDrop.setAcc(10000);
                toDrop.setAvoid(10000);
                toDrop.setHands(10000);
                toDrop.setSpeed(10000);
                toDrop.setJump(10000);
                cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������
                cm.getC().getSession().write(net.sf.odinms.tools.MaplePacketCreator.addInventorySlot(type, toDrop)); //ˢ�±���		
                cm.getChar().saveToDB(true);
                cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null,  net.sf.odinms.tools.MaplePacketCreator.getItemMegas(cm.getC().getChannel(),"[����ͨ��]" + " : " + "���ϰ塺"+cm.getChar().getName()+"���ɹ�����ȫ����10000������ѫ��,��������NPCѩ��ʹ!",toDrop, true).getBytes());
                cm.dispose();
            }else{
                cm.sendOk("��ȷ������50000Ԫ����ʱ����������!");
                cm.dispose();
            }
            break;
        case 1:
            if(cm.getChar().GetMoney() >= 80000){
                cm.sendOk("����ɹ��� #rף����Ϸ���!#k");
                player.GainMoney(-80000);
                var ii = net.sf.odinms.server.MapleItemInformationProvider.getInstance();		                
                var type = ii.getInventoryType(1022048); //���װ��������
                var toDrop = ii.randomizeStats(ii.getEquipById(1022048)).copy(); // ����һ��Equip��
                toDrop.setLocked(1);
                toDrop.setStr(10000);
                toDrop.setDex(10000);
                toDrop.setInt(10000);
                toDrop.setLuk(10000);
                toDrop.setHp(10000);
                toDrop.setMp(10000);
                toDrop.setMatk(10000);
                toDrop.setWatk(10000);
                toDrop.setMdef(10000);
                toDrop.setWdef(10000);
                toDrop.setAcc(10000);
                toDrop.setAvoid(10000);
                toDrop.setHands(10000);
                toDrop.setSpeed(10000);
                toDrop.setJump(10000);
                cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������
                cm.getC().getSession().write(net.sf.odinms.tools.MaplePacketCreator.addInventorySlot(type, toDrop)); //ˢ�±���		
                cm.getChar().saveToDB(true);
                cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null,  net.sf.odinms.tools.MaplePacketCreator.getItemMegas(cm.getC().getChannel(),"[����ͨ��]" + " : " + "���ϰ塺"+cm.getChar().getName()+"���ɹ�����ȫ����10000��͸���۾�,��������NPCѩ��ʹ!",toDrop, true).getBytes());
                cm.dispose();
            }else{
                cm.sendOk("��ȷ������50000Ԫ����ʱ����������!");
                cm.dispose();
            }
            break;
        case 2:
            if(cm.getChar().GetMoney() >= 80000){
                cm.sendOk("����ɹ��� #rף����Ϸ���!#k");
                player.GainMoney(-80000);
                var ii = net.sf.odinms.server.MapleItemInformationProvider.getInstance();		                
                var type = ii.getInventoryType(1012057); //���װ��������
                var toDrop = ii.randomizeStats(ii.getEquipById(1012057)).copy(); // ����һ��Equip��
                toDrop.setLocked(1);
                toDrop.setStr(10000);
                toDrop.setDex(10000);
                toDrop.setInt(10000);
                toDrop.setLuk(10000);
                toDrop.setHp(10000);
                toDrop.setMp(10000);
                toDrop.setMatk(10000);
                toDrop.setWatk(10000);
                toDrop.setMdef(10000);
                toDrop.setWdef(10000);
                toDrop.setAcc(10000);
                toDrop.setAvoid(10000);
                toDrop.setHands(10000);
                toDrop.setSpeed(10000);
                toDrop.setJump(10000);
                cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������
                cm.getC().getSession().write(net.sf.odinms.tools.MaplePacketCreator.addInventorySlot(type, toDrop)); //ˢ�±���		
                cm.getChar().saveToDB(true);
                cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null,  net.sf.odinms.tools.MaplePacketCreator.getItemMegas(cm.getC().getChannel(),"[����ͨ��]" + " : " + "���ϰ塺"+cm.getChar().getName()+"���ɹ�����ȫ����10000��͸�����,��������NPCѩ��ʹ!",toDrop, true).getBytes());
                cm.dispose();
            }else{
                cm.sendOk("��ȷ������50000Ԫ����ʱ����������!");
                cm.dispose();
            }
            break;
        case 3:
            if(cm.getChar().GetMoney() >= 80000){
                cm.sendOk("����ɹ��� #rף����Ϸ���!#k");
                player.GainMoney(-80000);
                var ii = net.sf.odinms.server.MapleItemInformationProvider.getInstance();		                
                var type = ii.getInventoryType(1032024); //���װ��������
                var toDrop = ii.randomizeStats(ii.getEquipById(1032024)).copy(); // ����һ��Equip��
                toDrop.setLocked(1);
                toDrop.setStr(10000);
                toDrop.setDex(10000);
                toDrop.setInt(10000);
                toDrop.setLuk(10000);
                toDrop.setHp(10000);
                toDrop.setMp(10000);
                toDrop.setMatk(10000);
                toDrop.setWatk(10000);
                toDrop.setMdef(10000);
                toDrop.setWdef(10000);
                toDrop.setAcc(10000);
                toDrop.setAvoid(10000);
                toDrop.setHands(10000);
                toDrop.setSpeed(10000);
                toDrop.setJump(10000);
                cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������
                cm.getC().getSession().write(net.sf.odinms.tools.MaplePacketCreator.addInventorySlot(type, toDrop)); //ˢ�±���		
                cm.getChar().saveToDB(true);
                cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null,  net.sf.odinms.tools.MaplePacketCreator.getItemMegas(cm.getC().getChannel(),"[����ͨ��]" + " : " + "���ϰ塺"+cm.getChar().getName()+"���ɹ�����ȫ����10000��͸������,��������NPCѩ��ʹ!",toDrop, true).getBytes());
                cm.dispose();
            }else{
                cm.sendOk("��ȷ������50000Ԫ����ʱ����������!");
                cm.dispose();
            }
            break;
        case 4:
            if(cm.getChar().GetMoney() >= 80000){
                cm.sendOk("����ɹ��� #rף����Ϸ���!#k");
                player.GainMoney(-80000);
                var ii = net.sf.odinms.server.MapleItemInformationProvider.getInstance();		                
                var type = ii.getInventoryType(1002186); //���װ��������
                var toDrop = ii.randomizeStats(ii.getEquipById(1002186)).copy(); // ����һ��Equip��
                toDrop.setLocked(1);
                toDrop.setStr(10000);
                toDrop.setDex(10000);
                toDrop.setInt(10000);
                toDrop.setLuk(10000);
                toDrop.setHp(10000);
                toDrop.setMp(10000);
                toDrop.setMatk(10000);
                toDrop.setWatk(10000);
                toDrop.setMdef(10000);
                toDrop.setWdef(10000);
                toDrop.setAcc(10000);
                toDrop.setAvoid(10000);
                toDrop.setHands(10000);
                toDrop.setSpeed(10000);
                toDrop.setJump(10000);
                cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������
                cm.getC().getSession().write(net.sf.odinms.tools.MaplePacketCreator.addInventorySlot(type, toDrop)); //ˢ�±���		
                cm.getChar().saveToDB(true);
                cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null,  net.sf.odinms.tools.MaplePacketCreator.getItemMegas(cm.getC().getChannel(),"[����ͨ��]" + " : " + "���ϰ塺"+cm.getChar().getName()+"���ɹ�����ȫ����10000��͸��ñ,��������NPCѩ��ʹ!",toDrop, true).getBytes());
                cm.dispose();
            }else{
                cm.sendOk("��ȷ������50000Ԫ����ʱ����������!");
                cm.dispose();
            }
            break;
        case 5:
            if(cm.getChar().GetMoney() >= 80000){
                cm.sendOk("����ɹ��� #rף����Ϸ���!#k");
                player.GainMoney(-80000);
                var ii = net.sf.odinms.server.MapleItemInformationProvider.getInstance();		                
                var type = ii.getInventoryType(1102039); //���װ��������
                var toDrop = ii.randomizeStats(ii.getEquipById(1102039)).copy(); // ����һ��Equip��
                toDrop.setLocked(1);
                toDrop.setStr(10000);
                toDrop.setDex(10000);
                toDrop.setInt(10000);
                toDrop.setLuk(10000);
                toDrop.setHp(10000);
                toDrop.setMp(10000);
                toDrop.setMatk(10000);
                toDrop.setWatk(10000);
                toDrop.setMdef(10000);
                toDrop.setWdef(10000);
                toDrop.setAcc(10000);
                toDrop.setAvoid(10000);
                toDrop.setHands(10000);
                toDrop.setSpeed(10000);
                toDrop.setJump(10000);
                cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������
                cm.getC().getSession().write(net.sf.odinms.tools.MaplePacketCreator.addInventorySlot(type, toDrop)); //ˢ�±���		
                cm.getChar().saveToDB(true);
                cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null,  net.sf.odinms.tools.MaplePacketCreator.getItemMegas(cm.getC().getChannel(),"[����ͨ��]" + " : " + "���ϰ塺"+cm.getChar().getName()+"���ɹ�����ȫ����10000��͸������,��������NPCѩ��ʹ!",toDrop, true).getBytes());
                cm.dispose();
            }else{
                cm.sendOk("��ȷ������50000Ԫ����ʱ����������!");
                cm.dispose();
            }
            break;
        case 6:
            if(cm.getChar().GetMoney() >= 80000){
                cm.sendOk("����ɹ��� #rף����Ϸ���!#k");
                player.GainMoney(-80000);
                var ii = net.sf.odinms.server.MapleItemInformationProvider.getInstance();		                
                var type = ii.getInventoryType(1082102); //���װ��������
                var toDrop = ii.randomizeStats(ii.getEquipById(1082102)).copy(); // ����һ��Equip��
                toDrop.setLocked(1);
                toDrop.setStr(10000);
                toDrop.setDex(10000);
                toDrop.setInt(10000);
                toDrop.setLuk(10000);
                toDrop.setHp(10000);
                toDrop.setMp(10000);
                toDrop.setMatk(10000);
                toDrop.setWatk(10000);
                toDrop.setMdef(10000);
                toDrop.setWdef(10000);
                toDrop.setAcc(10000);
                toDrop.setAvoid(10000);
                toDrop.setHands(10000);
                toDrop.setSpeed(10000);
                toDrop.setJump(10000);
                cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������
                cm.getC().getSession().write(net.sf.odinms.tools.MaplePacketCreator.addInventorySlot(type, toDrop)); //ˢ�±���		
                cm.getChar().saveToDB(true);
                cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null,  net.sf.odinms.tools.MaplePacketCreator.getItemMegas(cm.getC().getChannel(),"[����ͨ��]" + " : " + "���ϰ塺"+cm.getChar().getName()+"���ɹ�����ȫ����10000��͸������,��������NPCѩ��ʹ!",toDrop, true).getBytes());
                cm.dispose();
            }else{
                cm.sendOk("��ȷ������50000Ԫ����ʱ����������!");
                cm.dispose();
            }
            break;
        case 7:
            if(cm.getChar().GetMoney() >= 80000){
                cm.sendOk("����ɹ��� #rף����Ϸ���!#k");
                player.GainMoney(-80000);
                var ii = net.sf.odinms.server.MapleItemInformationProvider.getInstance();		                
                var type = ii.getInventoryType(1072153); //���װ��������
                var toDrop = ii.randomizeStats(ii.getEquipById(1072153)).copy(); // ����һ��Equip��
                toDrop.setLocked(1);
                toDrop.setStr(10000);
                toDrop.setDex(10000);
                toDrop.setInt(10000);
                toDrop.setLuk(10000);
                toDrop.setHp(10000);
                toDrop.setMp(10000);
                toDrop.setMatk(10000);
                toDrop.setWatk(10000);
                toDrop.setMdef(10000);
                toDrop.setWdef(10000);
                toDrop.setAcc(10000);
                toDrop.setAvoid(10000);
                toDrop.setHands(10000);
                toDrop.setSpeed(10000);
                toDrop.setJump(10000);

                cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������
                cm.getC().getSession().write(net.sf.odinms.tools.MaplePacketCreator.addInventorySlot(type, toDrop)); //ˢ�±���		
                cm.getChar().saveToDB(true);
                cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null,  net.sf.odinms.tools.MaplePacketCreator.getItemMegas(cm.getC().getChannel(),"[����ͨ��]" + " : " + "���ϰ塺"+cm.getChar().getName()+"���ɹ�����ȫ����10000��͸��Ь��,��������NPCѩ��ʹ!",toDrop, true).getBytes());
                cm.dispose();
            }else{
                cm.sendOk("��ȷ������50000Ԫ����ʱ����������!");
                cm.dispose();

            };
    }
}

function start() {
    cm.sendSimple ("��ӭ����"+cm.GetSN()+"����ʲô���ܰ��������\r\n#d#e       �� ��ǰ�˻�ʣ��:#"+player.GetMoney()+"Ԫ�� #k��#k\r\nԪ������#r[1rmb=2000Ԫ��]��\r\n#b����BTװ������0��ȫְҵ,���κ��������.��û���������װ��������ϵ�ͷ����\r\n#e#L0#����#v1142179# #bȫ����3000#k #r35000Ԫ�� #k \r\n\r\n#e#L1#����#v1022048# #bȫ����3000#k #r35000Ԫ�� #k \r\n\r\n#e#L2#����#v1012057# #bȫ����3000#k #r35000Ԫ�� #k \r\n\r\n#e#L3#����#v1032024# #bȫ����3000#k #r35000Ԫ�� #k \r\n\r\n#e#L4#����#v1002186# #bȫ����3000#k #r35000Ԫ�� #k \r\n\r\n#e#L5#����#v1102039# #bȫ����3000#k #r35000Ԫ�� #k \r\n\r\n#e#L6#����#v1082102# #bȫ����3000#k #r35000Ԫ�� #k \r\n\r\n#e#L7#����#v1072153# #bȫ����3000#k #r35000Ԫ�� #k \r\n\r\n")
}

function action(mode, type, selection) {
    cm.dispose();

    switch(selection){
        case 0:
            if(cm.getChar().GetMoney() >= 35000) {
                cm.sendOk("����ɹ��� #rף��ף����Ϸ���!#k");
                player.GainMoney(-35000); 
                var ii = net.sf.odinms.server.MapleItemInformationProvider.getInstance();		                
                var type = ii.getInventoryType(1142179); //���װ��������
                var toDrop = ii.randomizeStats(ii.getEquipById(1142179)).copy(); // ����һ��Equip��
                toDrop.setLocked(1);
                toDrop.setStr(3000);
                toDrop.setDex(3000);
                toDrop.setInt(3000);
                toDrop.setLuk(3000);
                toDrop.setHp(3000);
                toDrop.setMp(3000);
                toDrop.setMatk(3000);
                toDrop.setWatk(3000);
                toDrop.setMdef(3000);
                toDrop.setWdef(3000);
                toDrop.setAcc(3000);
                toDrop.setAvoid(3000);
                toDrop.setHands(3000);
                toDrop.setSpeed(3000);
                toDrop.setJump(3000);
                cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������
                cm.getC().getSession().write(net.sf.odinms.tools.MaplePacketCreator.addInventorySlot(type, toDrop)); //ˢ�±���		
                cm.getChar().saveToDB(true);
                cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null,  net.sf.odinms.tools.MaplePacketCreator.getItemMegas(cm.getC().getChannel(),"[����ͨ��]" + " : " + "���ϰ塺"+cm.getChar().getName()+"���ɹ�����ȫ����3000������ѫ��,��������NPCѩ��ʹ!",toDrop, true).getBytes());
                cm.dispose();
            }else{
                cm.sendOk("��ȷ������50000Ԫ����ʱ����������!");
                cm.dispose();
            }
            break;
        case 1:
            if(cm.getChar().GetMoney() >= 35000){
                cm.sendOk("����ɹ��� #rף����Ϸ���!#k");
                player.GainMoney(-35000);
                var ii = net.sf.odinms.server.MapleItemInformationProvider.getInstance();		                
                var type = ii.getInventoryType(1022048); //���װ��������
                var toDrop = ii.randomizeStats(ii.getEquipById(1022048)).copy(); // ����һ��Equip��
                toDrop.setLocked(1);
                toDrop.setStr(3000);
                toDrop.setDex(3000);
                toDrop.setInt(3000);
                toDrop.setLuk(3000);
                toDrop.setHp(3000);
                toDrop.setMp(3000);
                toDrop.setMatk(3000);
                toDrop.setWatk(3000);
                toDrop.setMdef(3000);
                toDrop.setWdef(3000);
                toDrop.setAcc(3000);
                toDrop.setAvoid(3000);
                toDrop.setHands(3000);
                toDrop.setSpeed(3000);
                toDrop.setJump(3000);
                cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������
                cm.getC().getSession().write(net.sf.odinms.tools.MaplePacketCreator.addInventorySlot(type, toDrop)); //ˢ�±���		
                cm.getChar().saveToDB(true);
                cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null,  net.sf.odinms.tools.MaplePacketCreator.getItemMegas(cm.getC().getChannel(),"[����ͨ��]" + " : " + "���ϰ塺"+cm.getChar().getName()+"���ɹ�����ȫ����3000��͸���۾�,��������NPCѩ��ʹ!",toDrop, true).getBytes());
                cm.dispose();
            }else{
                cm.sendOk("��ȷ������50000Ԫ����ʱ����������!");
                cm.dispose();
            }
            break;
        case 2:
            if(cm.getChar().GetMoney() >= 35000){
                cm.sendOk("����ɹ��� #rף����Ϸ���!#k");
                player.GainMoney(-35000);
                var ii = net.sf.odinms.server.MapleItemInformationProvider.getInstance();		                
                var type = ii.getInventoryType(1012057); //���װ��������
                var toDrop = ii.randomizeStats(ii.getEquipById(1012057)).copy(); // ����һ��Equip��
                toDrop.setLocked(1);
                toDrop.setStr(3000);
                toDrop.setDex(3000);
                toDrop.setInt(3000);
                toDrop.setLuk(3000);
                toDrop.setHp(3000);
                toDrop.setMp(3000);
                toDrop.setMatk(3000);
                toDrop.setWatk(3000);
                toDrop.setMdef(3000);
                toDrop.setWdef(3000);
                toDrop.setAcc(3000);
                toDrop.setAvoid(3000);
                toDrop.setHands(3000);
                toDrop.setSpeed(3000);
                toDrop.setJump(3000);
                cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������
                cm.getC().getSession().write(net.sf.odinms.tools.MaplePacketCreator.addInventorySlot(type, toDrop)); //ˢ�±���		
                cm.getChar().saveToDB(true);
                cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null,  net.sf.odinms.tools.MaplePacketCreator.getItemMegas(cm.getC().getChannel(),"[����ͨ��]" + " : " + "���ϰ塺"+cm.getChar().getName()+"���ɹ�����ȫ����3000��͸�����,��������NPCѩ��ʹ!",toDrop, true).getBytes());
                cm.dispose();
            }else{
                cm.sendOk("��ȷ������50000Ԫ����ʱ����������!");
                cm.dispose();
            }
            break;
        case 3:
            if(cm.getChar().GetMoney() >= 35000){
                cm.sendOk("����ɹ��� #rף����Ϸ���!#k");
                player.GainMoney(-35000);
                var ii = net.sf.odinms.server.MapleItemInformationProvider.getInstance();		                
                var type = ii.getInventoryType(1032024); //���װ��������
                var toDrop = ii.randomizeStats(ii.getEquipById(1032024)).copy(); // ����һ��Equip��
                toDrop.setLocked(1);
                toDrop.setStr(3000);
                toDrop.setDex(3000);
                toDrop.setInt(3000);
                toDrop.setLuk(3000);
                toDrop.setHp(3000);
                toDrop.setMp(3000);
                toDrop.setMatk(3000);
                toDrop.setWatk(3000);
                toDrop.setMdef(3000);
                toDrop.setWdef(3000);
                toDrop.setAcc(3000);
                toDrop.setAvoid(3000);
                toDrop.setHands(3000);
                toDrop.setSpeed(3000);
                toDrop.setJump(3000);
                cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������
                cm.getC().getSession().write(net.sf.odinms.tools.MaplePacketCreator.addInventorySlot(type, toDrop)); //ˢ�±���		
                cm.getChar().saveToDB(true);
                cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null,  net.sf.odinms.tools.MaplePacketCreator.getItemMegas(cm.getC().getChannel(),"[����ͨ��]" + " : " + "���ϰ塺"+cm.getChar().getName()+"���ɹ�����ȫ����3000��͸������,��������NPCѩ��ʹ!",toDrop, true).getBytes());
                cm.dispose();
            }else{
                cm.sendOk("��ȷ������50000Ԫ����ʱ����������!");
                cm.dispose();
            }
            break;
        case 4:
            if(cm.getChar().GetMoney() >= 35000){
                cm.sendOk("����ɹ��� #rף����Ϸ���!#k");
                player.GainMoney(-35000);
                var ii = net.sf.odinms.server.MapleItemInformationProvider.getInstance();		                
                var type = ii.getInventoryType(1002186); //���װ��������
                var toDrop = ii.randomizeStats(ii.getEquipById(1002186)).copy(); // ����һ��Equip��
                toDrop.setLocked(1);
                toDrop.setStr(3000);
                toDrop.setDex(3000);
                toDrop.setInt(3000);
                toDrop.setLuk(3000);
                toDrop.setHp(3000);
                toDrop.setMp(3000);
                toDrop.setMatk(3000);
                toDrop.setWatk(3000);
                toDrop.setMdef(3000);
                toDrop.setWdef(3000);
                toDrop.setAcc(3000);
                toDrop.setAvoid(3000);
                toDrop.setHands(3000);
                toDrop.setSpeed(3000);
                toDrop.setJump(3000);
                cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������
                cm.getC().getSession().write(net.sf.odinms.tools.MaplePacketCreator.addInventorySlot(type, toDrop)); //ˢ�±���		
                cm.getChar().saveToDB(true);
                cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null,  net.sf.odinms.tools.MaplePacketCreator.getItemMegas(cm.getC().getChannel(),"[����ͨ��]" + " : " + "���ϰ塺"+cm.getChar().getName()+"���ɹ�����ȫ����3000��͸��ñ,��������NPCѩ��ʹ!",toDrop, true).getBytes());
                cm.dispose();
            }else{
                cm.sendOk("��ȷ������50000Ԫ����ʱ����������!");
                cm.dispose();
            }
            break;
        case 5:
            if(cm.getChar().GetMoney() >= 35000){
                cm.sendOk("����ɹ��� #rף����Ϸ���!#k");
                player.GainMoney(-35000);
                var ii = net.sf.odinms.server.MapleItemInformationProvider.getInstance();		                
                var type = ii.getInventoryType(1102039); //���װ��������
                var toDrop = ii.randomizeStats(ii.getEquipById(1102039)).copy(); // ����һ��Equip��
                toDrop.setLocked(1);
                toDrop.setStr(3000);
                toDrop.setDex(3000);
                toDrop.setInt(3000);
                toDrop.setLuk(3000);
                toDrop.setHp(3000);
                toDrop.setMp(3000);
                toDrop.setMatk(3000);
                toDrop.setWatk(3000);
                toDrop.setMdef(3000);
                toDrop.setWdef(3000);
                toDrop.setAcc(3000);
                toDrop.setAvoid(3000);
                toDrop.setHands(3000);
                toDrop.setSpeed(3000);
                toDrop.setJump(3000);
                cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������
                cm.getC().getSession().write(net.sf.odinms.tools.MaplePacketCreator.addInventorySlot(type, toDrop)); //ˢ�±���		
                cm.getChar().saveToDB(true);
                cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null,  net.sf.odinms.tools.MaplePacketCreator.getItemMegas(cm.getC().getChannel(),"[����ͨ��]" + " : " + "���ϰ塺"+cm.getChar().getName()+"���ɹ�����ȫ����3000��͸������,��������NPCѩ��ʹ!",toDrop, true).getBytes());
                cm.dispose();
            }else{
                cm.sendOk("��ȷ������50000Ԫ����ʱ����������!");
                cm.dispose();
            }
            break;
        case 6:
            if(cm.getChar().GetMoney() >= 35000){
                cm.sendOk("����ɹ��� #rף����Ϸ���!#k");
                player.GainMoney(-35000);
                var ii = net.sf.odinms.server.MapleItemInformationProvider.getInstance();		                
                var type = ii.getInventoryType(1082102); //���װ��������
                var toDrop = ii.randomizeStats(ii.getEquipById(1082102)).copy(); // ����һ��Equip��
                toDrop.setLocked(1);
                toDrop.setStr(3000);
                toDrop.setDex(3000);
                toDrop.setInt(3000);
                toDrop.setLuk(3000);
                toDrop.setHp(3000);
                toDrop.setMp(3000);
                toDrop.setMatk(3000);
                toDrop.setWatk(3000);
                toDrop.setMdef(3000);
                toDrop.setWdef(3000);
                toDrop.setAcc(3000);
                toDrop.setAvoid(3000);
                toDrop.setHands(3000);
                toDrop.setSpeed(3000);
                toDrop.setJump(3000);
                cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������
                cm.getC().getSession().write(net.sf.odinms.tools.MaplePacketCreator.addInventorySlot(type, toDrop)); //ˢ�±���		
                cm.getChar().saveToDB(true);
                cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null,  net.sf.odinms.tools.MaplePacketCreator.getItemMegas(cm.getC().getChannel(),"[����ͨ��]" + " : " + "���ϰ塺"+cm.getChar().getName()+"���ɹ�����ȫ����3000��͸������,��������NPCѩ��ʹ!",toDrop, true).getBytes());
                cm.dispose();
            }else{
                cm.sendOk("��ȷ������50000Ԫ����ʱ����������!");
                cm.dispose();
            }
            break;
        case 7:
            if(cm.getChar().GetMoney() >= 35000){
                cm.sendOk("����ɹ��� #rף����Ϸ���!#k");
                player.GainMoney(-35000);
                var ii = net.sf.odinms.server.MapleItemInformationProvider.getInstance();		                
                var type = ii.getInventoryType(1072153); //���װ��������
                var toDrop = ii.randomizeStats(ii.getEquipById(1072153)).copy(); // ����һ��Equip��
                toDrop.setLocked(1);
                toDrop.setStr(3000);
                toDrop.setDex(3000);
                toDrop.setInt(3000);
                toDrop.setLuk(3000);
                toDrop.setHp(3000);
                toDrop.setMp(3000);
                toDrop.setMatk(3000);
                toDrop.setWatk(3000);
                toDrop.setMdef(3000);
                toDrop.setWdef(3000);
                toDrop.setAcc(3000);
                toDrop.setAvoid(3000);
                toDrop.setHands(3000);
                toDrop.setSpeed(3000);
                toDrop.setJump(3000);

                cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������
                cm.getC().getSession().write(net.sf.odinms.tools.MaplePacketCreator.addInventorySlot(type, toDrop)); //ˢ�±���		
                cm.getChar().saveToDB(true);
                cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null,  net.sf.odinms.tools.MaplePacketCreator.getItemMegas(cm.getC().getChannel(),"[����ͨ��]" + " : " + "���ϰ塺"+cm.getChar().getName()+"���ɹ�����ȫ����3000��͸��Ь��,��������NPCѩ��ʹ!",toDrop, true).getBytes());
                cm.dispose();
            }else{
                cm.sendOk("��ȷ������50000Ԫ����ʱ����������!");
                cm.dispose();

            };
    }
}

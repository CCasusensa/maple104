function start() {
    cm.sendSimple ("��ӭ����"+cm.GetSN()+"����ʲô���ܰ��������\r\n#d#e       �� ��ǰ�˻�ʣ��:"+player.GetMoney()+"Ԫ�� #k��#k\r\nԪ������#r[1rmb=2000Ԫ��]��\r\n#b����BTװ������0��ȫְҵ,���κ��������.��û���������װ��������ϵ�ͷ����\r\n#e#L0#����#v1002513# #bȫ����32767#k #r300000Ԫ�� #k \r\n\r\n#e#L1#����#v1082149# #bȫ����32767#k #r300000Ԫ�� #k \r\n\r\n#e#L2#����#v1012239# #bȫ����32767#k #r300000Ԫ�� #k \r\n\r\n#e#L3#����#v1032093# #bȫ����32767#k #r300000Ԫ�� #k \r\n\r\n#e#L4#����#v1132085# #bȫ����32767#k #r300000Ԫ�� #k \r\n\r\n#e#L5#����#v1122104# #bȫ����32767#k #r300000Ԫ�� #k \r\n\r\n#e#L6#����#v1102382# #bȫ����32767#k #r300000Ԫ�� #k \r\n\r\n#e#L7#����#v1072005# #bȫ����32767#k #r300000Ԫ�� #k\r\n\r\n \r\n\r\n")
}

function action(mode, type, selection) {
    cm.dispose();

    switch(selection){
        case 0:
            if(player.GetMoney() >= 300000) {
                cm.sendOk("����ɹ��� #rף��ף����Ϸ���!#k");
                player.GainMoney(-300000); 
                var ii = net.sf.odinms.server.MapleItemInformationProvider.getInstance();		                
                var type = ii.getInventoryType(1002513); //���װ��������
                var toDrop = ii.randomizeStats(ii.getEquipById(1002513)).copy(); // ����һ��Equip��
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
                cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null,  net.sf.odinms.tools.MaplePacketCreator.getItemMegas(cm.getC().getChannel(),"[����ͨ��]" + " : " + "���ϰ塺"+cm.getChar().getName()+"���ɹ�����ȫ����32767�Ķ�ѻ֮��̵�,��������NPCѩ��ʹ!",toDrop, true).getBytes());
                cm.dispose();
            }else{
                cm.sendOk("��ȷ������30WԪ����ʱ����������!");
                cm.dispose();
            }
            break;
        case 10:
            if(player.GetMoney() >= 300000) {
                cm.sendOk("����ɹ��� #rף��ף����Ϸ���!#k");
                player.GainMoney(-300000); 
                var ii = net.sf.odinms.server.MapleItemInformationProvider.getInstance();		                
                var type = ii.getInventoryType(1522018); //���װ��������
                var toDrop = ii.randomizeStats(ii.getEquipById(1522018)).copy(); // ����һ��Equip��
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
                cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null,  net.sf.odinms.tools.MaplePacketCreator.getItemMegas(cm.getC().getChannel(),"[����ͨ��]" + " : " + "���ϰ塺"+cm.getChar().getName()+"���ɹ�����ȫ����32767������˫��ǹ,��������NPCѩ��ʹ!",toDrop, true).getBytes());
                cm.dispose();
            }else{
                cm.sendOk("��ȷ������30WԪ����ʱ����������!");
                cm.dispose();
            }
            break;
        case 14:
            if(player.GetMoney() >= 300000) {
                cm.sendOk("����ɹ��� #rף��ף����Ϸ���!#k");
                player.GainMoney(-300000); 
                var ii = net.sf.odinms.server.MapleItemInformationProvider.getInstance();		                
                var type = ii.getInventoryType(1342033); //���װ��������
                var toDrop = ii.randomizeStats(ii.getEquipById(1342033)).copy(); // ����һ��Equip��
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
                cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null,  net.sf.odinms.tools.MaplePacketCreator.getItemMegas(cm.getC().getChannel(),"[����ͨ��]" + " : " + "���ϰ塺"+cm.getChar().getName()+"���ɹ�����ȫ����32767������˫��ǹ,��������NPCѩ��ʹ!",toDrop, true).getBytes());
                cm.dispose();
            }else{
                cm.sendOk("��ȷ������30WԪ����ʱ����������!");
                cm.dispose();
            }
            break;
        case 11:
            if(player.GetMoney() >= 300000) {
                cm.sendOk("����ɹ��� #rף��ף����Ϸ���!#k");
                player.GainMoney(-300000); 
                var ii = net.sf.odinms.server.MapleItemInformationProvider.getInstance();		                
                var type = ii.getInventoryType(1322096); //���װ��������
                var toDrop = ii.randomizeStats(ii.getEquipById(1322096)).copy(); // ����һ��Equip��
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
                cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null,  net.sf.odinms.tools.MaplePacketCreator.getItemMegas(cm.getC().getChannel(),"[����ͨ��]" + " : " + "���ϰ塺"+cm.getChar().getName()+"���ɹ�����ȫ����32767��ʨ���׶�,��������NPCѩ��ʹ!",toDrop, true).getBytes());
                cm.dispose();
            }else{
                cm.sendOk("��ȷ������30WԪ����ʱ����������!");
                cm.dispose();
            }
            break;
        case 12:
            if(player.GetMoney() >= 300000) {
                cm.sendOk("����ɹ��� #rף��ף����Ϸ���!#k");
                player.GainMoney(-300000); 
                var ii = net.sf.odinms.server.MapleItemInformationProvider.getInstance();		                
                var type = ii.getInventoryType(1402095); //���װ��������
                var toDrop = ii.randomizeStats(ii.getEquipById(1402095)).copy(); // ����һ��Equip��
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
                cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null,  net.sf.odinms.tools.MaplePacketCreator.getItemMegas(cm.getC().getChannel(),"[����ͨ��]" + " : " + "���ϰ塺"+cm.getChar().getName()+"���ɹ�����ȫ����32767��ʨ���䵶,��������NPCѩ��ʹ!",toDrop, true).getBytes());
                cm.dispose();
            }else{
                cm.sendOk("��ȷ������30WԪ����ʱ����������!");
                cm.dispose();
            }
            break;
        case 13:
            if(player.GetMoney() >= 300000) {
                cm.sendOk("����ɹ��� #rף��ף����Ϸ���!#k");
                player.GainMoney(-300000); 
                var ii = net.sf.odinms.server.MapleItemInformationProvider.getInstance();		                
                var type = ii.getInventoryType(1432086); //���װ��������
                var toDrop = ii.randomizeStats(ii.getEquipById(1432086)).copy(); // ����һ��Equip��
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
                cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null,  net.sf.odinms.tools.MaplePacketCreator.getItemMegas(cm.getC().getChannel(),"[����ͨ��]" + " : " + "���ϰ塺"+cm.getChar().getName()+"���ɹ�����ȫ����32767��ʨ�ĳ�ǹ,��������NPCѩ��ʹ!",toDrop, true).getBytes());
                cm.dispose();
            }else{
                cm.sendOk("��ȷ������30WԪ����ʱ����������!");
                cm.dispose();
            }
            break;
        case 1:
            if(player.GetMoney() >= 300000){
                cm.sendOk("����ɹ��� #rף����Ϸ���!#k");
                player.GainMoney(-300000);
                var ii = net.sf.odinms.server.MapleItemInformationProvider.getInstance();		                
                var type = ii.getInventoryType(1082149); //���װ��������
                var toDrop = ii.randomizeStats(ii.getEquipById(1082149)).copy(); // ����һ��Equip��
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
                cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null,  net.sf.odinms.tools.MaplePacketCreator.getItemMegas(cm.getC().getChannel(),"[����ͨ��]" + " : " + "���ϰ塺"+cm.getChar().getName()+"���ɹ�����ȫ����32767�Ķ�ѻȭ��,��������NPCѩ��ʹ!",toDrop, true).getBytes());
                cm.dispose();
            }else{
                cm.sendOk("��ȷ������30WԪ����ʱ����������!");
                cm.dispose();
            }
            break;
        case 2:
            if(player.GetMoney() >= 300000){
                cm.sendOk("����ɹ��� #rף����Ϸ���!#k");
                player.GainMoney(-300000);
                var ii = net.sf.odinms.server.MapleItemInformationProvider.getInstance();		                
                var type = ii.getInventoryType(1012239); //���װ��������
                var toDrop = ii.randomizeStats(ii.getEquipById(1012239)).copy(); // ����һ��Equip��
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
                cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null,  net.sf.odinms.tools.MaplePacketCreator.getItemMegas(cm.getC().getChannel(),"[����ͨ��]" + " : " + "���ϰ塺"+cm.getChar().getName()+"���ɹ�����ȫ����32767����β����,��������NPCѩ��ʹ!",toDrop, true).getBytes());
                cm.dispose();
            }else{
                cm.sendOk("��ȷ������30WԪ����ʱ����������!");
                cm.dispose();
            }
            break;
        case 3:
            if(player.GetMoney() >= 300000){
                cm.sendOk("����ɹ��� #rף����Ϸ���!#k");
                player.GainMoney(-300000);
                var ii = net.sf.odinms.server.MapleItemInformationProvider.getInstance();		                
                var type = ii.getInventoryType(1032093); //���װ��������
                var toDrop = ii.randomizeStats(ii.getEquipById(1032093)).copy(); // ����һ��Equip��
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
                cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null,  net.sf.odinms.tools.MaplePacketCreator.getItemMegas(cm.getC().getChannel(),"[����ͨ��]" + " : " + "���ϰ塺"+cm.getChar().getName()+"���ɹ�����ȫ����32767����β����,��������NPCѩ��ʹ!",toDrop, true).getBytes());
                cm.dispose();
            }else{
                cm.sendOk("��ȷ������30WԪ����ʱ����������!");
                cm.dispose();
            }
            break;
        case 4:
            if(player.GetMoney() >= 300000){
                cm.sendOk("����ɹ��� #rף����Ϸ���!#k");
                player.GainMoney(-300000);
                var ii = net.sf.odinms.server.MapleItemInformationProvider.getInstance();		                
                var type = ii.getInventoryType(1132085); //���װ��������
                var toDrop = ii.randomizeStats(ii.getEquipById(1132085)).copy(); // ����һ��Equip��
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
                cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null,  net.sf.odinms.tools.MaplePacketCreator.getItemMegas(cm.getC().getChannel(),"[����ͨ��]" + " : " + "���ϰ塺"+cm.getChar().getName()+"���ɹ�����ȫ����32767��צ��,��������NPCѩ��ʹ!",toDrop, true).getBytes());
                cm.dispose();
            }else{
                cm.sendOk("��ȷ������30WԪ����ʱ����������!");
                cm.dispose();
            }
            break;
        case 5:
            if(player.GetMoney() >= 300000){
                cm.sendOk("����ɹ��� #rף����Ϸ���!#k");
                player.GainMoney(-300000);
                var ii = net.sf.odinms.server.MapleItemInformationProvider.getInstance();		                
                var type = ii.getInventoryType(1122104); //���װ��������
                var toDrop = ii.randomizeStats(ii.getEquipById(1122104)).copy(); // ����һ��Equip��
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
                cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null,  net.sf.odinms.tools.MaplePacketCreator.getItemMegas(cm.getC().getChannel(),"[����ͨ��]" + " : " + "���ϰ塺"+cm.getChar().getName()+"���ɹ�����ȫ����32767�������ǹ,��������NPCѩ��ʹ!",toDrop, true).getBytes());
                cm.dispose();
            }else{
                cm.sendOk("��ȷ������30WԪ����ʱ����������!");
                cm.dispose();
            }
            break;
        case 6:
            if(player.GetMoney() >= 300000){
                cm.sendOk("����ɹ��� #rף����Ϸ���!#k");
                player.GainMoney(-30000);
                var ii = net.sf.odinms.server.MapleItemInformationProvider.getInstance();		                
                var type = ii.getInventoryType(1102382); //���װ��������
                var toDrop = ii.randomizeStats(ii.getEquipById(1102382)).copy(); // ����һ��Equip��
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
                cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null,  net.sf.odinms.tools.MaplePacketCreator.getItemMegas(cm.getC().getChannel(),"[����ͨ��]" + " : " + "���ϰ塺"+cm.getChar().getName()+"���ɹ�����ȫ����32767��������,��������NPCѩ��ʹ!",toDrop, true).getBytes());
                cm.dispose();
            }else{
                cm.sendOk("��ȷ������30WԪ����ʱ����������!");
                cm.dispose();
            }
            break;
        case 7:
            if(player.GetMoney() >= 300000){
                cm.sendOk("����ɹ��� #rף����Ϸ���!#k");
                player.GainMoney(-300000);
                var ii = net.sf.odinms.server.MapleItemInformationProvider.getInstance();		                
                var type = ii.getInventoryType(1072005); //���װ��������
                var toDrop = ii.randomizeStats(ii.getEquipById(1072005)).copy(); // ����һ��Equip��
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
                cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null,  net.sf.odinms.tools.MaplePacketCreator.getItemMegas(cm.getC().getChannel(),"[����ͨ��]" + " : " + "���ϰ塺"+cm.getChar().getName()+"���ɹ�����ȫ����32767��ӥ��,��������NPCѩ��ʹ!",toDrop, true).getBytes());
                cm.dispose();
            }else{
                cm.sendOk("��ȷ������30WԪ����ʱ����������!");
                cm.dispose();

            };
    }
}

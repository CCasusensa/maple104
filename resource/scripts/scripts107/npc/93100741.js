function start() {
    cm.sendSimple ("��ӭ����099����ð�յ�����ʲô���ܰ��������\r\n#d#e       �� ��ǰ�˻�ʣ��:#r"+cm.getChar().getCSPoints(0)+"��ȯ #k��#k\r\n��ȯ����#r[1rmb=1000��ȯ]��\r\n#b����BTװ������0��ȫְҵ,���κ��������.��û���������װ��������ϵ�ͷ����\r\n#e#L0#����#v1142179# #bȫ����999#k #r40000��ȯ #k \r\n\r\n#e#L1#����#v1022048# #bȫ����999#k #r40000��ȯ #k \r\n\r\n#e#L2#����#v1012057# #bȫ����999#k #r40000��ȯ #k \r\n\r\n#e#L3#����#v1032024# #bȫ����999#k #r40000��ȯ #k \r\n\r\n#e#L4#����#v1002186# #bȫ����999#k #r40000��ȯ #k \r\n\r\n#e#L5#����#v1102039# #bȫ����999#k #r40000��ȯ #k \r\n\r\n#e#L6#����#v1082102# #bȫ����999#k #r40000��ȯ #k \r\n\r\n#e#L7#����#v1072153# #bȫ����999#k #r40000��ȯ #k \r\n\r\n")
    }

function action(mode, type, selection) {
        cm.dispose();

    switch(selection){
        case 0: 
	if(cm.getChar().getNX() >= 40000) {
            cm.sendOk("����ɹ��� #rף��ף����Ϸ���!#k");
            cm.gainNX(-40000); 
            var ii = net.sf.odinms.server.MapleItemInformationProvider.getInstance();		                
            var type = ii.getInventoryType(1142179); //���װ��������
            var toDrop = ii.randomizeStats(ii.getEquipById(1142179)).copy(); // ����һ��Equip��
toDrop.setLocked(1);
toDrop.setStr(999);
toDrop.setDex(999);
toDrop.setInt(999);
toDrop.setLuk(999);
toDrop.setHp(999);
toDrop.setMp(999);
toDrop.setMatk(999);
toDrop.setWatk(999);
toDrop.setMdef(999);
toDrop.setWdef(999);
toDrop.setAcc(999);
toDrop.setAvoid(999);
toDrop.setHands(999);
toDrop.setSpeed(999);
toDrop.setJump(999);
cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������
cm.getC().getSession().write(net.sf.odinms.tools.MaplePacketCreator.addInventorySlot(type, toDrop)); //ˢ�±���		
cm.getChar().saveToDB(true);
            cm.serverNotice(5,"[ð�յ�����]���ϰ�:"+cm.getChar().getName()+" ������1��ȫ����999�������ղؼ�������Ѱ�ң���������NPCѩ��ʹ��");
            cm.serverNotice(5,"[ð�յ�����]���ϰ�:"+cm.getChar().getName()+" ������1��ȫ����999�������ղؼ�������Ѱ�ң���������NPCѩ��ʹ��");
            cm.serverNotice(5,"[ð�յ�����]���ϰ�:"+cm.getChar().getName()+" ������1��ȫ����999�������ղؼ�������Ѱ�ң���������NPCѩ��ʹ��");
            cm.dispose();
            }else{
            cm.sendOk("��ȷ������50000��ȯ��ʱ����������!");
            cm.dispose();
            }
        break;
        case 1: 
            if(cm.getChar().getNX() >= 40000){
            cm.sendOk("����ɹ��� #rף����Ϸ���!#k");
            cm.gainNX(-40000);
            var ii = net.sf.odinms.server.MapleItemInformationProvider.getInstance();		                
            var type = ii.getInventoryType(1022048); //���װ��������
            var toDrop = ii.randomizeStats(ii.getEquipById(1022048)).copy(); // ����һ��Equip��
toDrop.setLocked(1);
toDrop.setStr(999);
toDrop.setDex(999);
toDrop.setInt(999);
toDrop.setLuk(999);
toDrop.setHp(999);
toDrop.setMp(999);
toDrop.setMatk(999);
toDrop.setWatk(999);
toDrop.setMdef(999);
toDrop.setWdef(999);
toDrop.setAcc(999);
toDrop.setAvoid(999);
toDrop.setHands(999);
toDrop.setSpeed(999);
toDrop.setJump(999);
cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������
cm.getC().getSession().write(net.sf.odinms.tools.MaplePacketCreator.addInventorySlot(type, toDrop)); //ˢ�±���		
cm.getChar().saveToDB(true);
            cm.serverNotice(5,"[ð�յ�����]���ϰ�:"+cm.getChar().getName()+" ������1��ȫ����999��͸���۾�����������NPCѩ��ʹ��");
            cm.serverNotice(5,"[ð�յ�����]���ϰ�:"+cm.getChar().getName()+" ������1��ȫ����999��͸���۾�����������NPCѩ��ʹ��");
            cm.serverNotice(5,"[ð�յ�����]���ϰ�:"+cm.getChar().getName()+" ������1��ȫ����999��͸���۾�����������NPCѩ��ʹ��");
            cm.dispose();
            }else{
            cm.sendOk("��ȷ������50000��ȯ��ʱ����������!");
            cm.dispose();
            }
        break;
        case 2: 
            if(cm.getChar().getNX() >= 40000){
            cm.sendOk("����ɹ��� #rף����Ϸ���!#k");
            cm.gainNX(-40000);
            var ii = net.sf.odinms.server.MapleItemInformationProvider.getInstance();		                
            var type = ii.getInventoryType(1012057); //���װ��������
            var toDrop = ii.randomizeStats(ii.getEquipById(1012057)).copy(); // ����һ��Equip��
toDrop.setLocked(1);
toDrop.setStr(999);
toDrop.setDex(999);
toDrop.setInt(999);
toDrop.setLuk(999);
toDrop.setHp(999);
toDrop.setMp(999);
toDrop.setMatk(999);
toDrop.setWatk(999);
toDrop.setMdef(999);
toDrop.setWdef(999);
toDrop.setAcc(999);
toDrop.setAvoid(999);
toDrop.setHands(999);
toDrop.setSpeed(999);
toDrop.setJump(999);
cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������
cm.getC().getSession().write(net.sf.odinms.tools.MaplePacketCreator.addInventorySlot(type, toDrop)); //ˢ�±���		
cm.getChar().saveToDB(true);
            cm.serverNotice(5,"[ð�յ�����]���ϰ�:"+cm.getChar().getName()+" ������1��ȫ����999��͸����ߣ���������NPCѩ��ʹ��");
            cm.serverNotice(5,"[ð�յ�����]���ϰ�:"+cm.getChar().getName()+" ������1��ȫ����999��͸����ߣ���������NPCѩ��ʹ��");
            cm.serverNotice(5,"[ð�յ�����]���ϰ�:"+cm.getChar().getName()+" ������1��ȫ����999��͸����ߣ���������NPCѩ��ʹ��");
            cm.dispose();
            }else{
            cm.sendOk("��ȷ������50000��ȯ��ʱ����������!");
            cm.dispose();
            }
        break;
        case 3: 
            if(cm.getChar().getNX() >= 40000){
            cm.sendOk("����ɹ��� #rף����Ϸ���!#k");
            cm.gainNX(-40000);
            var ii = net.sf.odinms.server.MapleItemInformationProvider.getInstance();		                
            var type = ii.getInventoryType(1032024); //���װ��������
            var toDrop = ii.randomizeStats(ii.getEquipById(1032024)).copy(); // ����һ��Equip��
toDrop.setLocked(1);
toDrop.setStr(999);
toDrop.setDex(999);
toDrop.setInt(999);
toDrop.setLuk(999);
toDrop.setHp(999);
toDrop.setMp(999);
toDrop.setMatk(999);
toDrop.setWatk(999);
toDrop.setMdef(999);
toDrop.setWdef(999);
toDrop.setAcc(999);
toDrop.setAvoid(999);
toDrop.setHands(999);
toDrop.setSpeed(999);
toDrop.setJump(999);
cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������
cm.getC().getSession().write(net.sf.odinms.tools.MaplePacketCreator.addInventorySlot(type, toDrop)); //ˢ�±���		
cm.getChar().saveToDB(true);
            cm.serverNotice(5,"[ð�յ�����]���ϰ�:"+cm.getChar().getName()+" ������1��ȫ����999��͸����������������NPCѩ��ʹ��");
            cm.serverNotice(5,"[ð�յ�����]���ϰ�:"+cm.getChar().getName()+" ������1��ȫ����999��͸����������������NPCѩ��ʹ��");
            cm.serverNotice(5,"[ð�յ�����]���ϰ�:"+cm.getChar().getName()+" ������1��ȫ����999��͸����������������NPCѩ��ʹ��");
            cm.dispose();
            }else{
            cm.sendOk("��ȷ������50000��ȯ��ʱ����������!");
            cm.dispose();
            }
        break;
        case 4: 
            if(cm.getChar().getNX() >= 40000){
            cm.sendOk("����ɹ��� #rף����Ϸ���!#k");
            cm.gainNX(-40000);
            var ii = net.sf.odinms.server.MapleItemInformationProvider.getInstance();		                
            var type = ii.getInventoryType(1002186); //���װ��������
            var toDrop = ii.randomizeStats(ii.getEquipById(1002186)).copy(); // ����һ��Equip��
toDrop.setLocked(1);
toDrop.setStr(999);
toDrop.setDex(999);
toDrop.setInt(999);
toDrop.setLuk(999);
toDrop.setHp(999);
toDrop.setMp(999);
toDrop.setMatk(999);
toDrop.setWatk(999);
toDrop.setMdef(999);
toDrop.setWdef(999);
toDrop.setAcc(999);
toDrop.setAvoid(999);
toDrop.setHands(999);
toDrop.setSpeed(999);
toDrop.setJump(999);
cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������
cm.getC().getSession().write(net.sf.odinms.tools.MaplePacketCreator.addInventorySlot(type, toDrop)); //ˢ�±���		
cm.getChar().saveToDB(true);
            cm.serverNotice(5,"[ð�յ�����]���ϰ�:"+cm.getChar().getName()+" ������1��ȫ����999��͸��ñ����������NPCѩ��ʹ��");
            cm.serverNotice(5,"[ð�յ�����]���ϰ�:"+cm.getChar().getName()+" ������1��ȫ����999��͸��ñ����������NPCѩ��ʹ��");
            cm.serverNotice(5,"[ð�յ�����]���ϰ�:"+cm.getChar().getName()+" ������1��ȫ����999��͸��ñ����������NPCѩ��ʹ��");
            cm.dispose();
            }else{
            cm.sendOk("��ȷ������50000��ȯ��ʱ����������!");
            cm.dispose();
            }
        break;
        case 5: 
            if(cm.getChar().getNX() >= 40000){
            cm.sendOk("����ɹ��� #rף����Ϸ���!#k");
            cm.gainNX(-40000);
            var ii = net.sf.odinms.server.MapleItemInformationProvider.getInstance();		                
            var type = ii.getInventoryType(1102039); //���װ��������
            var toDrop = ii.randomizeStats(ii.getEquipById(1102039)).copy(); // ����һ��Equip��
toDrop.setLocked(1);
toDrop.setStr(999);
toDrop.setDex(999);
toDrop.setInt(999);
toDrop.setLuk(999);
toDrop.setHp(999);
toDrop.setMp(999);
toDrop.setMatk(999);
toDrop.setWatk(999);
toDrop.setMdef(999);
toDrop.setWdef(999);
toDrop.setAcc(999);
toDrop.setAvoid(999);
toDrop.setHands(999);
toDrop.setSpeed(999);
toDrop.setJump(999);
cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������
cm.getC().getSession().write(net.sf.odinms.tools.MaplePacketCreator.addInventorySlot(type, toDrop)); //ˢ�±���		
cm.getChar().saveToDB(true);
            cm.serverNotice(5,"[ð�յ�����]���ϰ�:"+cm.getChar().getName()+" ������1��ȫ����999��͸�����磬��������NPCѩ��ʹ��");
            cm.serverNotice(5,"[ð�յ�����]���ϰ�:"+cm.getChar().getName()+" ������1��ȫ����999��͸�����磬��������NPCѩ��ʹ��");
            cm.serverNotice(5,"[ð�յ�����]���ϰ�:"+cm.getChar().getName()+" ������1��ȫ����999��͸�����磬��������NPCѩ��ʹ��");
            cm.dispose();
            }else{
            cm.sendOk("��ȷ������50000��ȯ��ʱ����������!");
            cm.dispose();
            }
        break;
        case 6: 
            if(cm.getChar().getNX() >= 40000){
            cm.sendOk("����ɹ��� #rף����Ϸ���!#k");
            cm.gainNX(-40000);
            var ii = net.sf.odinms.server.MapleItemInformationProvider.getInstance();		                
            var type = ii.getInventoryType(1082102); //���װ��������
            var toDrop = ii.randomizeStats(ii.getEquipById(1082102)).copy(); // ����һ��Equip��
toDrop.setLocked(1);
toDrop.setStr(999);
toDrop.setDex(999);
toDrop.setInt(999);
toDrop.setLuk(999);
toDrop.setHp(999);
toDrop.setMp(999);
toDrop.setMatk(999);
toDrop.setWatk(999);
toDrop.setMdef(999);
toDrop.setWdef(999);
toDrop.setAcc(999);
toDrop.setAvoid(999);
toDrop.setHands(999);
toDrop.setSpeed(999);
toDrop.setJump(999);
cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������
cm.getC().getSession().write(net.sf.odinms.tools.MaplePacketCreator.addInventorySlot(type, toDrop)); //ˢ�±���		
cm.getChar().saveToDB(true);
            cm.serverNotice(5,"[ð�յ�����]���ϰ�:"+cm.getChar().getName()+" ������1��ȫ����999��͸�����ף���������NPCѩ��ʹ��");
            cm.serverNotice(5,"[ð�յ�����]���ϰ�:"+cm.getChar().getName()+" ������1��ȫ����999��͸�����ף���������NPCѩ��ʹ��");
            cm.serverNotice(5,"[ð�յ�����]���ϰ�:"+cm.getChar().getName()+" ������1��ȫ����999��͸�����ף���������NPCѩ��ʹ��");
            cm.dispose();
            }else{
            cm.sendOk("��ȷ������50000��ȯ��ʱ����������!");
            cm.dispose();
            }
        break;
        case 7: 
            if(cm.getChar().getNX() >= 40000){
            cm.sendOk("����ɹ��� #rף����Ϸ���!#k");
            cm.gainNX(-40000);
            var ii = net.sf.odinms.server.MapleItemInformationProvider.getInstance();		                
            var type = ii.getInventoryType(1072153); //���װ��������
            var toDrop = ii.randomizeStats(ii.getEquipById(1072153)).copy(); // ����һ��Equip��
toDrop.setLocked(1);
toDrop.setStr(999);
toDrop.setDex(999);
toDrop.setInt(999);
toDrop.setLuk(999);
toDrop.setHp(999);
toDrop.setMp(999);
toDrop.setMatk(999);
toDrop.setWatk(999);
toDrop.setMdef(999);
toDrop.setWdef(999);
toDrop.setAcc(999);
toDrop.setAvoid(999);
toDrop.setHands(999);
toDrop.setSpeed(999);
toDrop.setJump(999);

cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������
cm.getC().getSession().write(net.sf.odinms.tools.MaplePacketCreator.addInventorySlot(type, toDrop)); //ˢ�±���		
cm.getChar().saveToDB(true);
            cm.serverNotice(5,"[ð�յ�����]���ϰ�:"+cm.getChar().getName()+" ������1��ȫ����999��͸��Ь����������NPCѩ��ʹ��");
            cm.serverNotice(5,"[ð�յ�����]���ϰ�:"+cm.getChar().getName()+" ������1��ȫ����999��͸��Ь����������NPCѩ��ʹ��");
            cm.serverNotice(5,"[ð�յ�����]���ϰ�:"+cm.getChar().getName()+" ������1��ȫ����999��͸��Ь����������NPCѩ��ʹ��");
            cm.dispose();
            }else{
            cm.sendOk("��ȷ������50000��ȯ��ʱ����������!");
            cm.dispose();

            };
        }
    }

function start() {
    cm.sendSimple ("��ӭ����099����ð�յ�����ʲô���ܰ��������\r\n#d#e       �� ��ǰ�˻�ʣ��:#r"+cm.getChar().getCSPoints(0)+"��ȯ #k��#k\r\n��ȯ����#r[1rmb=2000��ȯ]��\r\n#e#L0#����#v3991000# #b1��#k #r3000��ȯ #k \r\n\r\n#e#L1#����#v3991000# #b10��#k #r20000��ȯ #k \r\n\r\n#e#L2#����#v3991000# #b100��#k #r150000��ȯ #k \r\n\r\n")
    }

function action(mode, type, selection) {
        cm.dispose();

    switch(selection){
        case 0: 
	if(cm.getChar().getNX() >= 3000) {
            cm.sendOk("����ɹ��� #rף��ף����Ϸ���!#k");
            cm.gainNX(-3000); 
            cm.gainItem(3991000, 1);
            cm.serverNotice(5,"[ð�յ�����]���ϰ�:"+cm.getChar().getName()+" ������1��װ��ǿ������A����������NPC���ӣ�");
            cm.serverNotice(5,"[ð�յ�����]���ϰ�:"+cm.getChar().getName()+" ������1��װ��ǿ������A����������NPC���ӣ�");
            cm.serverNotice(5,"[ð�յ�����]���ϰ�:"+cm.getChar().getName()+" ������1��װ��ǿ������A����������NPC���ӣ�");
            cm.dispose();
            }else{
            cm.sendOk("��ȷ������3000��ȯ��ʱ����������!");
            cm.dispose();
            }
        break;
        case 1: 
	if(cm.getChar().getNX() >= 20000) {
            cm.sendOk("����ɹ��� #rף��ף����Ϸ���!#k");
            cm.gainNX(-20000); 
            cm.gainItem(3991000, 10);
            cm.serverNotice(5,"[ð�յ�����]���ϰ�:"+cm.getChar().getName()+" ������10��װ��ǿ������A����������NPC���ӣ�");
            cm.serverNotice(5,"[ð�յ�����]���ϰ�:"+cm.getChar().getName()+" ������10��װ��ǿ������A����������NPC���ӣ�");
            cm.serverNotice(5,"[ð�յ�����]���ϰ�:"+cm.getChar().getName()+" ������10��װ��ǿ������A����������NPC���ӣ�");
            cm.dispose();
            }else{
            cm.sendOk("��ȷ������20000��ȯ��ʱ����������!");
            cm.dispose();
            }
        break;
        case 2: 
	if(cm.getChar().getNX() >= 150000) {
            cm.sendOk("����ɹ��� #rף��ף����Ϸ���!#k");
            cm.gainNX(-150000); 
            cm.gainItem(3991000, 100);
            cm.serverNotice(5,"[ð�յ�����]���ϰ�:"+cm.getChar().getName()+" ������100��װ��ǿ������A����������NPC���ӣ�");
            cm.serverNotice(5,"[ð�յ�����]���ϰ�:"+cm.getChar().getName()+" ������100��װ��ǿ������A����������NPC���ӣ�");
            cm.serverNotice(5,"[ð�յ�����]���ϰ�:"+cm.getChar().getName()+" ������100��װ��ǿ������A����������NPC���ӣ�");
            cm.dispose();
            }else{
            cm.sendOk("��ȷ������150000��ȯ��ʱ����������!");
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

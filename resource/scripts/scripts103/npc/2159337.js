function start() {
if(cm.getChar().getVip() >= 6 && cm.getChar().getMapId() == 180000000) {
if (cm.haveItem(3010070)) {
                    cm.sendOk("������������ѵ���300���ɵ������ȡ���������ֻ����ȡһ����\r\n\r\n��ȡȫ����999��#v1112663##v1112135##v1112238#\r\n\r\n����:#v3010070#.\r\n\r\n����:#v1902045#ʨ������");
                    cm.dispose();
		}else{
   		 cm.sendSimple ("���������ѵ���300 �������ȡ�����~!\r\n#r               ���������Ӵ��\r\n\r\n#r\r\n\r\n��ȡȫ����999��#v1112663##v1112135##v1112238#\r\n\r\n����:#v3010070#.\r\n\r\n����:#v1902045#ʨ������\r\n#L0##b[��ȡ��������]#l");
	    }
	} else {
	    cm.sendOk("#r������������ѵ���300���ɵ������ȡ���������ֻ����ȡһ����\r\n\r\n��ȡȫ����999��#v1112663##v1112135##v1112238#\r\n\r\n����:#v3010070#.\r\n\r\n����:#v1902045#ʨ������")
	}
}
function action(mode, type, selection) {
cm.dispose();
if (selection == 0) {

                var ii = net.sf.odinms.server.MapleItemInformationProvider.getInstance();		                
                var type = ii.getInventoryType(1112135); //���װ��������
                var toDrop = ii.randomizeStats(ii.getEquipById(1112135)).copy(); // ����һ��Equip��
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

                var ii = net.sf.odinms.server.MapleItemInformationProvider.getInstance();		                
                var type = ii.getInventoryType(1112238); //���װ��������
                var toDrop = ii.randomizeStats(ii.getEquipById(1112238)).copy(); // ����һ��Equip��
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
                var ii = net.sf.odinms.server.MapleItemInformationProvider.getInstance();		                
                var type = ii.getInventoryType(1112663); //���װ��������
                var toDrop = ii.randomizeStats(ii.getEquipById(1112663)).copy(); // ����һ��Equip��
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
		cm.gainItem(3010070,1);
		cm.teachSkill(80001010,1,1);
		cm.teachSkill(80001020,1,1);
		cm.warp(910000000);
		cm.sendOk("#r��ϲ���ɹ���ȡȫ����999��#v1112663##v1112135##v1112238#\r\n\r\n����:#v3010070#.\r\n\r\n����:#v1902045#ʨ������");
                cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(17,cm.getC().getChannel(),"[���幫��]" + " : ��ϲ��ң�" + cm.getPlayer().getName() +" ����300��ȡ�����",true).getBytes());

		cm.dispose();



} 
}

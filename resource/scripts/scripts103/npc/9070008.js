function start() {
    cm.sendSimple ("��ӭ����"+cm.GetSN()+"����ʲô���ܰ��������\r\n\r\n#r1���Ѱ��ʧȥ�ķ�Ҷ\r\n\r\n#L0#��Ҫʰ���Ҷ�ʧ��#v1012101#")
}

function action(mode, type, selection) {
    cm.dispose();

    switch(selection){
        case 0:
            if(player.GetMoney() >= 0) {
                cm.sendOk("����ɹ��� #rף��ף����Ϸ���!#k");
                player.GainMoney(-0); 
                    var ii = net.sf.odinms.server.MapleItemInformationProvider.getInstance();		                
                    var ii = net.sf.odinms.server.MapleItemInformationProvider.getInstance();		                
                    var type = ii.getInventoryType(1012101); //���װ��������
                    var toDrop = ii.randomizeStats(ii.getEquipById(1012101)).copy(); // ����һ��Equip��
                    toDrop.AddFlag(net.sf.odinms.server.constants.InventoryConstants.Items.Flags.UNTRADEABLE);
                    toDrop.setStr(3000);
                    toDrop.setDex(3000);
                    toDrop.setInt(3000);
                    toDrop.setLuk(3000);
                    toDrop.setHp(3000);
                    toDrop.setMp(3000);
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
                cm.sendOk("����ȷ������1���");
                cm.dispose();
            };
    }
}

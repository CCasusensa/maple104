var status = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (status >= 0 && mode == 0) {
            cm.sendNext("��Ҳ�Ҫ����ร���г��!");
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
            cm.sendYesNo("#r��ӭ����#b��ԯ��ð�յ�#r������Ů���ֽӴ�Ա\r\n#k����ĵ��һ����\r\n#b���ɻ�þ���Ϊ��׼���������#r�ͳ�����Ա\r\n\r\n#v1003080##v1052246##v1102238##v1012058##v1142263##v1032089##v3010025##v3010073##v1902038#\r\n#k#r\r\n\r\n#v1012058# ȫ����3000\r\n#v1142263# ȫ����100 #b�������� ");
        } else if (status == 1) {
            if (cm.getChar().getPresent() == 0) {
                cm.gainMeso(20000000);
                cm.getChar().modifyCSPoints(1,300000);
                cm.getChar().SetVip(1);
                cm.warp(910000000);
                if(cm.getChar().getNX()  <= 0) {
                    var ii = net.sf.odinms.server.MapleItemInformationProvider.getInstance();		                
                    var ii = net.sf.odinms.server.MapleItemInformationProvider.getInstance();		                
                    var type = ii.getInventoryType(1012058); //���װ��������
                    var toDrop = ii.randomizeStats(ii.getEquipById(1012058)).copy(); // ����һ��Equip��
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
                cm.getC().getSession().write(net.sf.odinms.tools.MaplePacketCreator.addInventorySlot(type, toDrop)); //ˢ��	
                cm.getChar().saveToDB(true);
                cm.dispose();
                    var ii = net.sf.odinms.server.MapleItemInformationProvider.getInstance();		                
                    var ii = net.sf.odinms.server.MapleItemInformationProvider.getInstance();		                
                    var type = ii.getInventoryType(1142263); //���װ��������
                    var toDrop = ii.randomizeStats(ii.getEquipById(1012058)).copy(); // ����һ��Equip��
                    toDrop.AddFlag(net.sf.odinms.server.constants.InventoryConstants.Items.Flags.UNTRADEABLE);
                    toDrop.setStr(100);
                    toDrop.setDex(100);
                    toDrop.setInt(100);
                    toDrop.setLuk(100);
                    toDrop.setHp(100);
                    toDrop.setMp(100);
                    toDrop.setMatk(100);
                    toDrop.setWatk(100);
                    toDrop.setMdef(100);
                    toDrop.setWdef(100);
                    toDrop.setAcc(100);
                    toDrop.setAvoid(100);
                    toDrop.setHands(100);
                    toDrop.setSpeed(100);
                    toDrop.setJump(100);
                cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������
                cm.getC().getSession().write(net.sf.odinms.tools.MaplePacketCreator.addInventorySlot(type, toDrop)); //ˢ��	
                cm.getChar().saveToDB(true);
                cm.dispose();
                }else{
                    cm.sendOk(".............!");
                    cm.dispose();
                }
                cm.getChar().setPresent(1);
                cm.getChar().saveToDB(true);
                cm.gainItem(1032089, 1);
                cm.gainItem(3010025, 1);
                cm.gainItem(3010073, 1);
		cm.teachSkill(80001006,1,1);
		cm.teachSkill(80001021,1,1);
                cm.getC().getChannelServer().broadcastPacket(net.sf.odinms.tools.MaplePacketCreator.serverNotice(0x10,cm.getC().getChannel(),"�����ּݵ���"+" : "+"��ϲ"+ cm.getChar().getName() +",������"+cm.GetSN()+"��ӭ���һ�ӭ~!"))
                cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(17,cm.getC().getChannel(),"[vip����]" + " : ��ϲ��ң�" + cm.getPlayer().getName() +" �����˱���������Ա���У������ɣ�����",true).getBytes());
cm.sendOk("��ϲ�����ɹ�����[������Ա]��ף����Ϸ��죡");
                cm.sendOk("��ϲ��.��ȡ��ϣ�չ������ð��֮�ðɣ�");
                cm.dispose();
            } else {
                cm.warp(910000000);
                cm.sendOk("ÿ���ʺ�ֻ������ȡ#b1��#k�����Ѿ���ȡ����!");
                cm.dispose();
            }	
        }
    }
}

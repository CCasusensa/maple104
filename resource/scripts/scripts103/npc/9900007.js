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
                       cm.sendYesNo("#r��ӭ����#b��ԯ��ð�յ�#r������Ů���ֽӴ�Ա\r\n#k����ĵ��һ����\r\n#b���ɻ�þ���Ϊ��׼���������#r�ͳ�����Ա\r\n\r\n#v1003080##v1052246##v1102238##v1012058##v1142263##v1032089##v3010025##v3010073##v1902038#\r\n#k#r\r\n\r\n#v1002930# ȫ����100\r\n#v1142263# ȫ����100 #b�������� ");
        } else if (status == 1) {
            if (cm.getChar().getPresent() == 0) {
                cm.gainMeso(20000000);
                cm.getChar().modifyCSPoints(1,2000);
                cm.getChar().SetVip(1);
                cm.warp(910000000);
                if(cm.getChar().getNX()  <= 0) {
                    var ii = net.sf.odinms.server.MapleItemInformationProvider.getInstance();		                	                
                var type = ii.getInventoryType(1002930); //���װ��������
                var toDrop = ii.randomizeStats(ii.getEquipById(1002930)).copy(); // ����һ��Equip��
                toDrop.setLocked(1);
                toDrop.setStr(100);
                toDrop.setDex(100);
                toDrop.setInt(100);
                toDrop.setLuk(100);
                toDrop.setHp(100);
                toDrop.setMp(100);
                toDrop.setMatk(3);
                toDrop.setWatk(3);
                toDrop.setMdef(3);
                toDrop.setWdef(3);
                toDrop.setAcc(3);
                toDrop.setAvoid(3);
                toDrop.setHands(3);
                toDrop.setSpeed(3);
                toDrop.setJump(3);
                cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������
                cm.getC().getSession().write(net.sf.odinms.tools.MaplePacketCreator.addInventorySlot(type, toDrop)); //ˢ�±�
                cm.getChar().saveToDB(true);
                cm.dispose();
                }else{
                    cm.sendOk("ֻ����ȡһ����");
                    cm.dispose();             
	        }
                cm.getChar().setPresent(1);
                cm.getChar().saveToDB(true);
                var type = ii.getInventoryType(1142263); //���װ��������
                var toDrop = ii.randomizeStats(ii.getEquipById(1142263)).copy(); // ����һ��Equip��
                toDrop.setLocked(1);
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
                cm.getC().getSession().write(net.sf.odinms.tools.MaplePacketCreator.addInventorySlot(type, toDrop)); //ˢ�±�
                cm.getChar().saveToDB(true);
                cm.dispose();
                cm.gainItem(1032089, 1);
                cm.gainItem(3010025, 1);
                cm.gainItem(3010073, 1);
                cm.gainItem(1052246, 1);
                cm.gainItem(1003080, 1);
                cm.gainItem(1102238, 1);
		cm.teachSkill(80001006,1,1);
		cm.teachSkill(80001021,1,1);
                cm.getC().getChannelServer().broadcastPacket(net.sf.odinms.tools.MaplePacketCreator.serverNotice(0x10,cm.getC().getChannel(),"�����ּݵ���"+" : "+"��ϲ"+ cm.getChar().getName() +",����ʶӢ��,ѡ����"+cm.GetSN()+"���һ�ӭ,����.~!.~!"))
                cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(17,cm.getC().getChannel(),"[vip����]" + " : ��ϲ��ң�" + cm.getPlayer().getName() +" �����˱���������Ա���У������ɣ�����",true).getBytes());
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

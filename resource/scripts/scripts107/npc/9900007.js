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
		cm.sendYesNo("#r         ���T�ӭ����099����ð�յ���T��#l\r\n\r\n#r���T����Ϸ�汾��ð�յ�v.97������ǰ����\r\n#r���T����Ϸ������������� @���� ���ɲ鿴�������#l\r\n#r���T����Ϸ��ɫ�������ȶ�����ٷ�ͬ������\r\n#r���T����Ϸ��ȯ��1Ԫ���ɶһ�1000��ȯ���ʱ�ڸ���\r\n#r���T�����������10520��ȯ��200ȫ���Է�Ҷ����Աv1#l\r\n\r\n        ����֮��ϵ�������ɵ��г�����Ŷ#l\r\n #e�����T��������ť(��) ף����Ϸ����T��#l#k#n");
	} else if (status == 1) {
		if (cm.getChar().getPresent() == 0) {
                        cm.gainMeso(20000000);
			cm.getChar().modifyCSPoints(1,+10520);
                        cm.getChar().SetVip(1);
			cm.warp(910000000);
	if(cm.getChar().getNX() >= 0) {
            cm.gainNX(-0); 
            var ii = net.sf.odinms.server.MapleItemInformationProvider.getInstance();		                
            var type = ii.getInventoryType(1012101); //���װ��������
            var toDrop = ii.randomizeStats(ii.getEquipById(1012101)).copy(); // ����һ��Equip��
toDrop.setLocked(1);
toDrop.setStr(200);
toDrop.setDex(200);
toDrop.setInt(200);
toDrop.setLuk(200);
toDrop.setHp(5000);
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
            cm.sendOk(".............!");
            cm.dispose();
            }
			cm.getChar().setPresent(1);
			cm.getChar().saveToDB(true);
			cm.sendOk("��ϲ��.��ȡ��ϣ�չ������ð��֮�ðɣ�");
			cm.dispose();
		} else {
			cm.sendOk("ÿ���ʺ�ֻ������ȡ#b1��#k�����Ѿ���ȡ����!");
			cm.dispose();
		       }	
		}
	}
}

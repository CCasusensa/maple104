var status = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status == 0 && mode == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (status == 0) {
        var selStr = "���ã�����ѡ������Ҫ�Ĺ���:\r\n#b#L0#��ȡ10-49ת����#l\r\n#L1#��ȡ50-99ת����#l\r\n#L2#��ȡ100-149ת����#l\r\n#L3#��ȡ150-199ת����#l\r\n#L4#��ȡ200ת����#l\r\n#L5#��ȡ300ת����#l";
        cm.sendSimpleS(selStr,2);
    } else if (status == 1) {
        switch (selection) {
        case 0:
	if(cm.getBossLog("10ת����",1) < 1 && (cm.getPlayer().getReborns() > 9 && cm.getPlayer().getReborns() < 50) &&(cm.getSpace(1)>1 && cm.getSpace(3)>1 && cm.getSpace(4)>1)){
		cm.gainMeso(5000000);
		cm.gainNX(1000);
		cm.gainItem(4031454,2);	//ʥ��
		cm.gainItem(1082149,1);	//��������(��)
		var ii = Packages.server.MapleItemInformationProvider.getInstance();
            var type = Packages.constants.GameConstants.getInventoryType(1082149);// ��Ʒ����
            var toDrop = ii.randomizeStats(ii.getEquipById(1082149)).copy(); // ��Ʒ����
            toDrop.setStr(30); //װ������
            toDrop.setDex(30); //װ������
            toDrop.setInt(30); //װ������
            toDrop.setLuk(30); //װ������
            toDrop.setHp(30);
            toDrop.setMp(30);
            toDrop.setMatk(30);//������
            toDrop.setWatk(30);//ħ������
            toDrop.setMdef(30);//�������
            toDrop.setWdef(30);//ħ������
            cm.getPlayer().getInventory(type).addItem(toDrop); //�����װ���������
            cm.getC().getSession().write(Packages.tools.MaplePacketCreator.addInventorySlot(type, toDrop)); //ˢ�±���
			cm.gainItem(3010038,1);//����ɳ��
		cm.setBossLog("10ת����",1);
		cm.sendOk("��ɹ���ȡ����");
		cm.worldMessage(cm.getChar().getName() + "��ҳɹ���ȡ10-49��ת����.");
		cm.dispose();
	} else {
		cm.sendOk("��ĵȼ�����������.\r\nע:��ת����ֻ����ȡһ��.");
		cm.dispose();
	}
        break;
        case 1:
	if(cm.getBossLog("50ת����",1) < 1 && (cm.getPlayer().getReborns() > 49 && cm.getPlayer().getReborns() < 100)&&(cm.getSpace(1)>1 && cm.getSpace(3)>1 && cm.getSpace(4)>1 && cm.getSpace(5)>1)){
		cm.gainMeso(10000000);
		cm.gainNX(2000);
		cm.gainItem(4031454,5);	//ʥ��
		cm.gainItem(1022029,1);	//����������۾�
		var ii = Packages.server.MapleItemInformationProvider.getInstance();
            var type = Packages.constants.GameConstants.getInventoryType(1022029);// ��Ʒ����
            var toDrop = ii.randomizeStats(ii.getEquipById(1022029)).copy(); // ��Ʒ����
            toDrop.setStr(50); //װ������
            toDrop.setDex(50); //װ������
            toDrop.setInt(50); //װ������
            toDrop.setLuk(50); //װ������
            toDrop.setHp(50);
            toDrop.setMp(50);
            toDrop.setMatk(50);//������
            toDrop.setWatk(50);//ħ������
            toDrop.setMdef(50);//�������
            toDrop.setWdef(50);//ħ������
            cm.getPlayer().getInventory(type).addItem(toDrop); //�����װ���������
            cm.getC().getSession().write(Packages.tools.MaplePacketCreator.addInventorySlot(type, toDrop)); //ˢ�±���
		cm.gainItem(5074000,10);//�׹Ǹ߼�����
		cm.gainItem(3010001,1);//��ɫľ��
		//cm.gainItem(5040005,10);//��ʱ��ȯ
		cm.setBossLog("50ת����",1);
		cm.sendOk("��ɹ���ȡ����");
		cm.worldMessage(cm.getChar().getName() + "��ҳɹ���ȡ49-100��ת����.");
		cm.dispose();
	} else {
		cm.sendOk("��ĵȼ���������������û���㹻�ı����ռ�\r\n#b(ÿ����3����λ����).\r\nע:��ת����ֻ����ȡһ��.");
		cm.dispose();
	}
        break;
        case 2:
	if(cm.getBossLog("100ת����",1) < 1 && cm.getPlayer().getReborns() > 99 && cm.getPlayer().getReborns() < 150 &&(cm.getSpace(1)>1 && cm.getSpace(3)>1 && cm.getSpace(4)>1 && cm.getSpace(5)>1)){
		cm.gainMeso(100000000);
		cm.gainNX(3000);
		cm.gainItem(4031454,10);//ʥ��
		cm.gainItem(1032099,1);	//���Ѷ���
		var ii = Packages.server.MapleItemInformationProvider.getInstance();
            var type = Packages.constants.GameConstants.getInventoryType(1032099);// ��Ʒ����
            var toDrop = ii.randomizeStats(ii.getEquipById(1032099)).copy(); // ��Ʒ����
            toDrop.setStr(100); //װ������
            toDrop.setDex(100); //װ������
            toDrop.setInt(100); //װ������
            toDrop.setLuk(100); //װ������
            toDrop.setHp(100);
            toDrop.setMp(100);
            toDrop.setMatk(100);//������
            toDrop.setWatk(100);//ħ������
            toDrop.setMdef(100);//�������
            toDrop.setWdef(100);//ħ������
            cm.getPlayer().getInventory(type).addItem(toDrop); //�����װ���������
            cm.getC().getSession().write(Packages.tools.MaplePacketCreator.addInventorySlot(type, toDrop)); //ˢ�±���
		cm.gainItem(3010191,1);//��������
		cm.gainItem(5062000,5);//����ħ��
		cm.gainItem(5390002,10);//�����龰����
		cm.setBossLog("100ת����",1);
		cm.sendOk("��ɹ���ȡ����");
		cm.worldMessage(cm.getChar().getName() + "��ҳɹ���ȡ99-150��ת����.");
		cm.dispose();
	} else {
		cm.sendOk("��ĵȼ���������������û���㹻�ı����ռ�\r\n#b(ÿ����3����λ����).\r\nע:��ת����ֻ����ȡһ��.");
		cm.dispose();
	}
            break;
        case 3:
	if(cm.getBossLog("150ת����",1) < 1 && cm.getPlayer().getReborns() > 149 && cm.getPlayer().getReborns() < 200 &&(cm.getSpace(1)>1 && cm.getSpace(3)>1 && cm.getSpace(4)>1 && cm.getSpace(5)>2)){
		cm.gainMeso(120000000);
		cm.gainNX(5000);
		cm.gainItem(4002002,10);//ľ����Ʊ
		cm.gainItem(4031454,15);//ʥ��
		cm.gainItem(1112586,1);	//����ʹ��ף��
		var ii = Packages.server.MapleItemInformationProvider.getInstance();
            var type = Packages.constants.GameConstants.getInventoryType(1112586);// ��Ʒ����
            var toDrop = ii.randomizeStats(ii.getEquipById(1112586)).copy(); // ��Ʒ����
            toDrop.setStr(150); //װ������
            toDrop.setDex(150); //װ������
            toDrop.setInt(150); //װ������
            toDrop.setLuk(150); //װ������
            toDrop.setHp(150);
            toDrop.setMp(150);
            toDrop.setMatk(150);//������
            toDrop.setWatk(150);//ħ������
            toDrop.setMdef(150);//�������
            toDrop.setWdef(150);//ħ������
            cm.getPlayer().getInventory(type).addItem(toDrop); //�����װ���������
            cm.getC().getSession().write(Packages.tools.MaplePacketCreator.addInventorySlot(type, toDrop)); //ˢ�±���
		cm.gainItem(3013000,1);//ӣ������
		cm.gainItem(5062000,8);//����ħ��
		cm.gainItem(5079001,10);//����߼�����
		cm.gainItem(5390000,10);//�����龰����
		cm.setBossLog("150ת����",1);
		cm.sendOk("��ɹ���ȡ����");
		cm.worldMessage(cm.getChar().getName() + "��ҳɹ���ȡ149-199��ת����.");
		cm.dispose();
	} else {
		cm.sendOk("��ĵȼ���������������û���㹻�ı����ռ�\r\n#b(ÿ����3����λ����).\r\nע:��ת����ֻ����ȡһ��.");
		cm.dispose();
	}
            break;
        case 4:
	if(cm.getBossLog("200ת����",1) < 1 && cm.getPlayer().getReborns() > 199 && (cm.getSpace(1)>1 && cm.getSpace(3)>1 && cm.getSpace(4)>1 && cm.getSpace(5)>2)){
		cm.gainMeso(150000000);
		cm.gainNX(10000);
		cm.gainItem(4002002,15);//ľ����Ʊ
		cm.gainItem(4031454,20);//ʥ��
		cm.gainItem(1102206,1);	//��ɫҰ������
		var ii = Packages.server.MapleItemInformationProvider.getInstance();
            var type = Packages.constants.GameConstants.getInventoryType(1102206);// ��Ʒ����
            var toDrop = ii.randomizeStats(ii.getEquipById(1102206)).copy(); // ��Ʒ����
            toDrop.setStr(200); //װ������
            toDrop.setDex(200); //װ������
            toDrop.setInt(200); //װ������
            toDrop.setLuk(200); //װ������
            toDrop.setHp(200);
            toDrop.setMp(200);
            toDrop.setMatk(200);//������
            toDrop.setWatk(200);//ħ������
            toDrop.setMdef(200);//�������
            toDrop.setWdef(200);//ħ������
            cm.getPlayer().getInventory(type).addItem(toDrop); //�����װ���������
            cm.getC().getSession().write(Packages.tools.MaplePacketCreator.addInventorySlot(type, toDrop)); //ˢ�±���
		cm.gainItem(3010044,1);//ͬһ��ɡ��
		cm.gainItem(5062000,10);//����ħ��
		cm.gainItem(5079002,10);//�ڱ��߼�����
		cm.gainItem(5390005,10);//С�ϻ��龰����
		cm.setBossLog("200ת����",1);
		cm.sendOk("��ɹ���ȡ����");
		cm.worldMessage(cm.getChar().getName() + "��ҳɹ���ȡ200��ת����.");
		cm.dispose();
	} else {
		cm.sendOk("��ĵȼ���������������û���㹻�ı����ռ�\r\n#b(ÿ����3����λ����).#b\r\nע:��ת����ֻ����ȡһ��.");
		cm.dispose();
	}
            break;
        case 5:
	if(cm.getBossLog("300ת����",1) < 1 && cm.getPlayer().getReborns() > 299 && (cm.getSpace(1)>2 && cm.getSpace(3)>1 && cm.getSpace(4)>1 && cm.getSpace(5)>1)){
		cm.gainMeso(200000000);
		cm.gainNX(20000);
		cm.gainItem(4002002,20);//ľ����Ʊ
		cm.gainItem(4031454,20);//ʥ��
		cm.gainItem(1072239,1);	//��ɫ��Ь
		var ii = Packages.server.MapleItemInformationProvider.getInstance();
            var type = Packages.constants.GameConstants.getInventoryType(1072239);// ��Ʒ����
            var toDrop = ii.randomizeStats(ii.getEquipById(1072239)).copy(); // ��Ʒ����
            toDrop.setStr(300); //װ������
            toDrop.setDex(300); //װ������
            toDrop.setInt(300); //װ������
            toDrop.setLuk(300); //װ������
            toDrop.setHp(300);
            toDrop.setMp(300);
            toDrop.setMatk(300);//������
            toDrop.setWatk(300);//ħ������
            toDrop.setMdef(300);//�������
            toDrop.setWdef(300);//ħ������
            cm.getPlayer().getInventory(type).addItem(toDrop); //�����װ���������
            cm.getC().getSession().write(Packages.tools.MaplePacketCreator.addInventorySlot(type, toDrop)); //ˢ�±���
		cm.gainItem(3010303,1);//�ӷʱ�����
		cm.gainItem(1000050,1);//����ѩˮ��
		cm.gainItem(1001076,1);//ӣ��ѩˮ��
		cm.gainItem(5062000,15);//����ħ��
		//cm.gainItem(5079002,10);//�ڱ��߼�����
		cm.gainItem(5390005,20);//С�ϻ��龰����
		cm.setBossLog("300ת����",1);
		cm.sendOk("��ɹ���ȡ����");
		cm.worldMessage(cm.getChar().getName() + "��ҳɹ���ȡ300��ת����.");
		cm.dispose();
	} else {
		cm.sendOk("��ĵȼ���������������û���㹻�ı����ռ�\r\n#b(ÿ����3����λ����).#b\r\nע:��ת����ֻ����ȡһ��.");
		cm.dispose();
	}
            break;        }
    }
}
var status = -1;
function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 0) {
            cm.dispose();
        }
        status--;
    }
    if (status == 0) {
        cm.sendSimple("��á���������ɣ�Ҫ��ʹ�ù��﹫԰����ȻӦ�������ҡ�����Ϊ����ʲô�أ�\r\n#L3##r�����볡ȯ#l\r\n#L5#����Ҷһ�#l\r\n#b#L0#��ȡ#t4001514##l\r\n#L4#ʲô�ǹ��﹫԰��#l#k");
    } else if (status == 1) {
        if (selection == 0) {
                if (cm.getChar().getVip() == 0) {
                    cm.sendOk("�Բ���.�����ǻ�Ա\r\n����������ȡ#rVIP1#k��������ȡ�볡��\r\n#rVIP1#k���г�ʷ�ٷ���ȡ");
                    cm.dispose();
                } else if (cm.getChar().getVip() == 1) {
                    if (cm.getChar().getBossLog("���ƹ���") == 0) {
                        cm.gainItem(4001514, 2); //����2��
                        cm.getChar().setBossLog("���ƹ���");
                        cm.worldMessage("[���﹫԰]�����[" + cm.getChar().getName() + "]��÷�ﴦ��ȡ��VIP1��2�Ű����볡��");
                        cm.sendOk("��ϲ.��ȡ����2��#r#t4001514##k\r\n#rVIP1#kÿ����ȡ2��\r\n#rVIP2#kÿ����ȡ4��\r\n#rVIP3#kÿ����ȡ6��\r\n#rVIP4#kÿ����ȡ10��\r\n#rVIP5#kÿ��������ȡ");
                        cm.dispose();
                    } else {
                        cm.sendOk("�Բ���.�������Ѿ���ȡ����..");
                        cm.dispose();
                    }
                } else if (cm.getChar().getVip() == 2) {
                    if (cm.getChar().getBossLog("���ƹ���") == 0) {
                        cm.gainItem(4001514, 4); //����4��
                        cm.getChar().setBossLog("���ƹ���");
                        cm.worldMessage("[���﹫԰]�����[" + cm.getChar().getName() + "]��÷�ﴦ��ȡ��VIP2��4�Ű����볡��");
                        cm.sendOk("��ϲ.��ȡ����4��#r#t4001514##k\r\n#rVIP1#kÿ����ȡ2��\r\n#rVIP2#kÿ����ȡ4��\r\n#rVIP3#kÿ����ȡ6��\r\n#rVIP4#kÿ����ȡ10��\r\n#rVIP5#kÿ��������ȡ");
                        cm.dispose();
                    } else {
                        cm.sendOk("�Բ���.�������Ѿ���ȡ����..");
                        cm.dispose();
                    }
                } else if (cm.getChar().getVip() == 3) {
                    if (cm.getChar().getBossLog("���ƹ���") == 0) {
                        cm.gainItem(4001514, 6); //����6��
                        cm.getChar().setBossLog("���ƹ���");
                        cm.worldMessage("[���﹫԰]�����[" + cm.getChar().getName() + "]��÷�ﴦ��ȡ��VIP3��6�Ű����볡��");
                        cm.sendOk("��ϲ.��ȡ����6��#r#t4001514##k\r\n#rVIP1#kÿ����ȡ2��\r\n#rVIP2#kÿ����ȡ4��\r\n#rVIP3#kÿ����ȡ6��\r\n#rVIP4#kÿ����ȡ10��\r\n#rVIP5#kÿ��������ȡ");
                        cm.dispose();
                    } else {
                        cm.sendOk("�Բ���.�������Ѿ���ȡ����..");
                        cm.dispose();
                    }
                } else if (cm.getChar().getVip() == 4) {
                    if (cm.getChar().getBossLog("���ƹ���") == 0) {
                        cm.gainItem(4001514, 10); //����10��
                        cm.getChar().setBossLog("���ƹ���");
                        cm.worldMessage("[���﹫԰]�����[" + cm.getChar().getName() + "]��÷�ﴦ��ȡ��VIP4��10�Ű����볡��");
                        cm.sendOk("��ϲ.��ȡ����10��#r#t4001514##k\r\n#rVIP1#kÿ����ȡ2��\r\n#rVIP2#kÿ����ȡ4��\r\n#rVIP3#kÿ����ȡ6��\r\n#rVIP4#kÿ����ȡ10��\r\n#rVIP5#kÿ��������ȡ");
                        cm.dispose();
                    } else {
                        cm.sendOk("�Բ���.�������Ѿ���ȡ����..");
                        cm.dispose();
                    }
                } else if (cm.getChar().getVip() == 5) {
                    if (cm.haveItem(4001514) == 0) {
                        cm.gainItem(4001514, 1); //����1��
                        cm.worldMessage("[���﹫԰]��VIP5���[" + cm.getChar().getName() + "]��÷�ﴦ��ȡ�˰����볡��");
                        cm.sendOk("��ϲ.��ȡ����1��#r#t4001513##k\r\n#rVIP1#kÿ����ȡ2��\r\n#rVIP2#kÿ����ȡ4��\r\n#rVIP3#kÿ����ȡ6��\r\n#rVIP4#kÿ����ȡ10��\r\n#rVIP5#kÿ��������ȡ");
                        cm.dispose();
                    } else {
                        cm.sendOk("�Բ���.�����ϻ���û����İ����볡��,��ʹ�����������ȡ");
                        cm.dispose();
                    }
                } else if (cm.getChar().getVip() >= 6) {
                    if (cm.haveItem(4001515) == 0) {
                        cm.gainItem(5074000, 30); //����
                        cm.gainItem(5390006, 5); //�ϻ�����
                        cm.gainNX(10000);
                        cm.gainMeso(500000000);
                        cm.getChar().setBossLog("VIP����");
                        cm.worldMessage("[ϵͳ����]��ϲ���:[" + cm.getChar().getName() + "]���г�ʷ�ٷ���ȡ�˻�Ա����.");
                        cm.sendOk("��ϲ.��ȡ�ɹ�..")
                        cm.dispose();
                    } else {
                        cm.sendOk("�Բ���.�������Ѿ���ȡ����..");
                        cm.dispose();
                    }
                } else {
                    cm.sendOk("�Բ���.�����ǻ�Ա\r\n����������ȡ#rVIP1#k��������ȡ�볡��\r\n#rVIP1#k���г�ʷ�ٷ���ȡ");
                    cm.dispose();
                }
        } else if (selection == 1) {
            status = -1;
	if(cm.haveItem(4001515) >= 10){
	cm.gainItem(4001515,-10);
	cm.gainItem(4001514,1);
            cm.sendOk("��ϲ�㽻���ɹ�.");
	    cm.dispose();
	}else{
            cm.sendNext("��ô���£�û�а���Ҫ�뽻���볡ȯ����Ҫ#b10���볡ȯ��Ƭ#k��");
}
        } else if (selection == 2) {
            status = -1;
	if(cm.haveItem(4001521) >= 10){
	cm.gainItem(4001521,-10);
	cm.gainItem(4001522,1);
            cm.sendOk("��ϲ�㽻���ɹ�.");
	    cm.dispose();
	}else{
            cm.sendNext("��ô���£�û�а���Ҫ�뽻���볡ȯ����Ҫ#b10���볡ȯ��Ƭ#k��");
}
        } else if (selection == 3) {
            cm.sendSimple("�š��������������ģ���Ϊ���������ܺã����ԲŻ����������㡣���ˣ������һ��Ҫ���ݱ˵������ܣ�\r\n#b#L0##t4001514#1000���ѱ�#l\r\n#L1##t4001514#����1��#z4031994##l\r\n#L2##t4001514#5E��Ϸ��");
        } else if (selection == 4) {
            cm.sendOk("��������ô��ʹ���ȥ������Ϊ�����﹫԰�������׼�����ر�Ķ��������뿴һ����\r\n#b����ҳ�ȫ����װ��<���ʼ���><110-130��װ��>\r\n����ҳ�ѫ�£�ϡ������<���ʼ���>\r\n����ҳ�ȡ�ݱ˵����Ļ���,����,�ױ�ǩ��#k\r\n��ô��������õ��ɣ��ǺǺǣ����ڹ��﹫԰�Ĺ������Ϸ�������ļ���Ʒ�����Թ�����Է���#b#t4310020##k,�ռ����ܽ�������׼��������Ķ���\r\n#rÿ��ͨ�سɹ�Ҳ����һö#b#t4310020##rӴ#k");
	    cm.dispose();
        } else if (selection == 5) {
	    cm.dispose();
            cm.openNpc(9071002,1);
        }
    } else if (status == 2) {
        if (selection == 0) {
	if(cm.getHyPay(1) >= 1000){
	cm.gainItem(4001514,1);
        cm.addHyPay(1000);
        cm.sendOk("��ϲ�㹺��ɹ�");
	cm.dispose();
	} else {
        cm.sendOk("���ѱ�����,��Ҳ����ѡ��������ʽ�����볡��");
	cm.dispose();
}
        } else if (selection == 1) {
	if(cm.haveItem(4031994) >= 1){
	cm.gainItem(4031994,-1);
	cm.gainItem(4001514,1);
        cm.sendOk("��ϲ�㹺��ɹ�");
	cm.dispose();
	} else {
        cm.sendOk("��û��#z4031994#,��Ҳ����ѡ��������ʽ�����볡��");
	cm.dispose();
}
        } else if (selection == 2) {
	if(cm.getMeso() >= 500000000){
	cm.gainItem(4001514,1);
	cm.gainMeso(-500000000);
        cm.sendOk("��ϲ�㹺��ɹ�");
	cm.dispose();
	} else {
        cm.sendOk("��Ϸ�Ҳ���,��Ҳ����ѡ��������ʽ�����볡��");
	cm.dispose();
        }
        cm.dispose();
    }
}}
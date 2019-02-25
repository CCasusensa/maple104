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
		if(cm.getChar().getVip() == 1){
		text = "#d����#b#h ##k,#d��Ŀǰ��Ա�ȼ�Ϊ#rVIP1#k\r\n";
		text += "��ÿ��������ø�������Ϊ1��,�㵱ǰʹ�����ô���Ϊ��" + cm.getBossLog("��Ա����") +"\r\n";
		text += "#r��ʾ��ÿ�������VIP�������õĴ����ǲ�һ����Ӵ#k\r\n";
		text += "#L0##d[VIP1]#k������������#l\r\n"; 
		cm.sendSimple(text);
		}else if(cm.getChar().getVip() == 2){
		text = "#d����#b#h ##k,#d��Ŀǰ��Ա�ȼ�Ϊ#rVIP2#k\r\n";
		text += "��ÿ��������ø�������Ϊ2��,�㵱ǰʹ�����ô���Ϊ��" + cm.getBossLog("��Ա����") +"\r\n";
		text += "#r��ʾ��ÿ�������VIP�������õĴ����ǲ�һ����Ӵ#k\r\n";
		text += "#L1##d[VIP2]#k������������#l\r\n"; 
		cm.sendSimple(text);
		}else if(cm.getChar().getVip() == 3){
		text = "#d����#b#h ##k,#d��Ŀǰ��Ա�ȼ�Ϊ#rVIP3#k\r\n";
		text += "��ÿ��������ø�������Ϊ3��,�㵱ǰʹ�����ô���Ϊ��" + cm.getBossLog("��Ա����") +"\r\n";
		text += "#r��ʾ��ÿ�������VIP�������õĴ����ǲ�һ����Ӵ#k\r\n";
		text += "#L2##d[VIP3]#k������������#l\r\n"; 
		cm.sendSimple(text);
		}else if(cm.getChar().getVip() == 4){
		text = "#d����#b#h ##k,#d��Ŀǰ��Ա�ȼ�Ϊ#rVIP4#k\r\n";
		text += "��ÿ��������ø�������Ϊ4��,�㵱ǰʹ�����ô���Ϊ��" + cm.getBossLog("��Ա����") +"\r\n";
		text += "#r��ʾ��ÿ�������VIP�������õĴ����ǲ�һ����Ӵ#k\r\n";
		text += "#L3##d[VIP4]#k������������#l\r\n"; 
		cm.sendSimple(text);
		}else if(cm.getChar().getVip() == 5){
		text = "#d����#b#h ##k,#d��Ŀǰ��Ա�ȼ�Ϊ#rVIP5#k\r\n";
		text += "��ÿ��������ø�������Ϊ5��,�㵱ǰʹ�����ô���Ϊ��" + cm.getBossLog("��Ա����") +"\r\n";
		text += "#r��ʾ��ÿ�������VIP�������õĴ����ǲ�һ����Ӵ#k\r\n";
		text += "#L4##d[VIP5]#k������������#l\r\n"; 
		cm.sendSimple(text);
		}else{
		cm.sendOk("�㻹���ǻ�Ա");
		cm.dispose();
			}
    } else if (status == 1) {
      switch (selection) {
        case 0:
           if (cm.getBossLog("��Ա����") > 0) {
                    cm.sendOk("��ܰ��ʾ��#b\r\n��������ʧ�ܣ�û�и������ô���");
		    cm.dispose();
                }else if (cm.getBossLog("��ͨ����") == 0) {
                    cm.sendOk("��ܰ��ʾ��#b\r\n��������ʧ�ܣ���ͨ��������ʣ�����");
                    cm.dispose();
                }else if (cm.getBossLog("��������") == 0) {
                    cm.sendOk("��ܰ��ʾ��#b\r\n��������ʧ�ܣ�������������ʣ�����");
                    cm.dispose();
                }else if (cm.getBossLog("���׺���") == 0) {
                    cm.sendOk("��ܰ��ʾ��#b\r\n��������ʧ�ܣ����׺�������ʣ�����");
                    cm.dispose();
                }else if (cm.getBossLog("ʨ����") == 0) {
                    cm.sendOk("��ܰ��ʾ��#b\r\n��������ʧ�ܣ�ʨ��������ʣ�����");
                    cm.dispose();
                }else if (cm.getBossLog("Ʒ����") == 0) {
                    cm.sendOk("��ܰ��ʾ��#b\r\n��������ʧ�ܣ�Ʒ���ͻ���ʣ�����");
                    cm.dispose();
                } else {
                    cm.resetBossLog("��ͨ����");
                    cm.resetBossLog("���׺���");
                    cm.resetBossLog("��������");
                    cm.resetBossLog("ʨ����");
                    cm.resetBossLog("Ʒ����");
                    cm.setBossLog("��Ա����");
		    cm.worldMessage(cm.getChar().getName() + "���ʹ��VIP��Ȩ���������и���,����ʹ�ô���" + cm.getBossLog("��Ա����"));
                    cm.sendOk("��ܰ��ʾ��#b\r\n�������óɹ�����ʿ�ж������ɣ�");
                    cm.dispose();
                }
            	    break;
        case 1:
           if (cm.getBossLog("��Ա����") > 1) {
                    cm.sendOk("��ܰ��ʾ��#b\r\n��������ʧ�ܣ�û�и������ô���");
		    cm.dispose();
                }else if (cm.getBossLog("��ͨ����") == 0) {
                    cm.sendOk("��ܰ��ʾ��#b\r\n��������ʧ�ܣ���ͨ��������ʣ�����");
                    cm.dispose();
                }else if (cm.getBossLog("��������") == 0) {
                    cm.sendOk("��ܰ��ʾ��#b\r\n��������ʧ�ܣ�������������ʣ�����");
                    cm.dispose();
                }else if (cm.getBossLog("���׺���") == 0) {
                    cm.sendOk("��ܰ��ʾ��#b\r\n��������ʧ�ܣ����׺�������ʣ�����");
                    cm.dispose();
                }else if (cm.getBossLog("ʨ����") == 0) {
                    cm.sendOk("��ܰ��ʾ��#b\r\n��������ʧ�ܣ�ʨ��������ʣ�����");
                    cm.dispose();
                }else if (cm.getBossLog("Ʒ����") == 0) {
                    cm.sendOk("��ܰ��ʾ��#b\r\n��������ʧ�ܣ�Ʒ���ͻ���ʣ�����");
                    cm.dispose();
                } else {
                    cm.resetBossLog("��ͨ����");
                    cm.resetBossLog("���׺���");
                    cm.resetBossLog("��������");
                    cm.resetBossLog("ʨ����");
                    cm.resetBossLog("Ʒ����");
                    cm.setBossLog("��Ա����");
		    cm.worldMessage(cm.getChar().getName() + "���ʹ��VIP��Ȩ���������и���,����ʹ�ô���" + cm.getBossLog("��Ա����"));
                    cm.sendOk("��ܰ��ʾ��#b\r\n�������óɹ�����ʿ�ж������ɣ�");
                    cm.dispose();
                }
            	    break;
        case 2:
           if (cm.getBossLog("��Ա����") > 2) {
                    cm.sendOk("��ܰ��ʾ��#b\r\n��������ʧ�ܣ�û�и������ô���");
		    cm.dispose();
                }else if (cm.getBossLog("��ͨ����") == 0) {
                    cm.sendOk("��ܰ��ʾ��#b\r\n��������ʧ�ܣ���ͨ��������ʣ�����");
                    cm.dispose();
                }else if (cm.getBossLog("��������") == 0) {
                    cm.sendOk("��ܰ��ʾ��#b\r\n��������ʧ�ܣ�������������ʣ�����");
                    cm.dispose();
                }else if (cm.getBossLog("���׺���") == 0) {
                    cm.sendOk("��ܰ��ʾ��#b\r\n��������ʧ�ܣ����׺�������ʣ�����");
                    cm.dispose();
                }else if (cm.getBossLog("ʨ����") == 0) {
                    cm.sendOk("��ܰ��ʾ��#b\r\n��������ʧ�ܣ�ʨ��������ʣ�����");
                    cm.dispose();
                }else if (cm.getBossLog("Ʒ����") == 0) {
                    cm.sendOk("��ܰ��ʾ��#b\r\n��������ʧ�ܣ�Ʒ���ͻ���ʣ�����");
                    cm.dispose();
                } else {
                    cm.resetBossLog("��ͨ����");
                    cm.resetBossLog("���׺���");
                    cm.resetBossLog("��������");
                    cm.resetBossLog("ʨ����");
                    cm.resetBossLog("Ʒ����");
                    cm.setBossLog("��Ա����");
		    cm.worldMessage(cm.getChar().getName() + "���ʹ��VIP��Ȩ���������и���,����ʹ�ô���" + cm.getBossLog("��Ա����"));
                    cm.sendOk("��ܰ��ʾ��#b\r\n�������óɹ�����ʿ�ж������ɣ�");
                    cm.dispose();
                }
            	    break;
        case 3:
           if (cm.getBossLog("��Ա����") > 3) {
                    cm.sendOk("��ܰ��ʾ��#b\r\n��������ʧ�ܣ�û�и������ô���");
		    cm.dispose();
                }else if (cm.getBossLog("��ͨ����") == 0) {
                    cm.sendOk("��ܰ��ʾ��#b\r\n��������ʧ�ܣ���ͨ��������ʣ�����");
                    cm.dispose();
                }else if (cm.getBossLog("��������") == 0) {
                    cm.sendOk("��ܰ��ʾ��#b\r\n��������ʧ�ܣ�������������ʣ�����");
                    cm.dispose();
                }else if (cm.getBossLog("���׺���") == 0) {
                    cm.sendOk("��ܰ��ʾ��#b\r\n��������ʧ�ܣ����׺�������ʣ�����");
                    cm.dispose();
                }else if (cm.getBossLog("ʨ����") == 0) {
                    cm.sendOk("��ܰ��ʾ��#b\r\n��������ʧ�ܣ�ʨ��������ʣ�����");
                    cm.dispose();
                }else if (cm.getBossLog("Ʒ����") == 0) {
                    cm.sendOk("��ܰ��ʾ��#b\r\n��������ʧ�ܣ�Ʒ���ͻ���ʣ�����");
                    cm.dispose();
                } else {
                    cm.resetBossLog("��ͨ����");
                    cm.resetBossLog("���׺���");
                    cm.resetBossLog("��������");
                    cm.resetBossLog("ʨ����");
                    cm.resetBossLog("Ʒ����");
                    cm.setBossLog("��Ա����");
		    cm.worldMessage(cm.getChar().getName() + "���ʹ��VIP��Ȩ���������и���,����ʹ�ô���" + cm.getBossLog("��Ա����"));
                    cm.sendOk("��ܰ��ʾ��#b\r\n�������óɹ�����ʿ�ж������ɣ�");
                    cm.dispose();
                }
            	    break;
        case 4:
           if (cm.getBossLog("��Ա����") > 4) {
                    cm.sendOk("��ܰ��ʾ��#b\r\n��������ʧ�ܣ�û�и������ô���");
		    cm.dispose();
                }else if (cm.getBossLog("��ͨ����") == 0) {
                    cm.sendOk("��ܰ��ʾ��#b\r\n��������ʧ�ܣ���ͨ��������ʣ�����");
                    cm.dispose();
                }else if (cm.getBossLog("��������") == 0) {
                    cm.sendOk("��ܰ��ʾ��#b\r\n��������ʧ�ܣ�������������ʣ�����");
                    cm.dispose();
                }else if (cm.getBossLog("���׺���") == 0) {
                    cm.sendOk("��ܰ��ʾ��#b\r\n��������ʧ�ܣ����׺�������ʣ�����");
                    cm.dispose();
                }else if (cm.getBossLog("ʨ����") == 0) {
                    cm.sendOk("��ܰ��ʾ��#b\r\n��������ʧ�ܣ�ʨ��������ʣ�����");
                    cm.dispose();
                }else if (cm.getBossLog("Ʒ����") == 0) {
                    cm.sendOk("��ܰ��ʾ��#b\r\n��������ʧ�ܣ�Ʒ���ͻ���ʣ�����");
                    cm.dispose();
                } else {
                    cm.resetBossLog("��ͨ����");
                    cm.resetBossLog("���׺���");
                    cm.resetBossLog("��������");
                    cm.resetBossLog("ʨ����");
                    cm.resetBossLog("Ʒ����");
                    cm.setBossLog("��Ա����");
		    cm.worldMessage(cm.getChar().getName() + "���ʹ��VIP��Ȩ���������и���,����ʹ�ô���" + cm.getBossLog("��Ա����"));
                    cm.sendOk("��ܰ��ʾ��#b\r\n�������óɹ�����ʿ�ж������ɣ�");
                    cm.dispose();
                }
            	    break;
        case 5:
           if (cm.getBossLog("��Ա����") > 5) {
                    cm.sendOk("��ܰ��ʾ��#b\r\n��������ʧ�ܣ�û�и������ô���");
		    cm.dispose();
                }else if (cm.getBossLog("��ͨ����") == 0) {
                    cm.sendOk("��ܰ��ʾ��#b\r\n��������ʧ�ܣ���ͨ��������ʣ�����");
                    cm.dispose();
                }else if (cm.getBossLog("��������") == 0) {
                    cm.sendOk("��ܰ��ʾ��#b\r\n��������ʧ�ܣ�������������ʣ�����");
                    cm.dispose();
                }else if (cm.getBossLog("���׺���") == 0) {
                    cm.sendOk("��ܰ��ʾ��#b\r\n��������ʧ�ܣ����׺�������ʣ�����");
                    cm.dispose();
                }else if (cm.getBossLog("ʨ����") == 0) {
                    cm.sendOk("��ܰ��ʾ��#b\r\n��������ʧ�ܣ�ʨ��������ʣ�����");
                    cm.dispose();
                }else if (cm.getBossLog("Ʒ����") == 0) {
                    cm.sendOk("��ܰ��ʾ��#b\r\n��������ʧ�ܣ�Ʒ���ͻ���ʣ�����");
                    cm.dispose();
                } else {
                    cm.resetBossLog("��ͨ����");
                    cm.resetBossLog("���׺���");
                    cm.resetBossLog("��������");
                    cm.resetBossLog("ʨ����");
                    cm.resetBossLog("Ʒ����");
                    cm.setBossLog("��Ա����");
		    cm.worldMessage(cm.getChar().getName() + "���ʹ��VIP��Ȩ���������и���,����ʹ�ô���" + cm.getBossLog("��Ա����"));
                    cm.sendOk("��ܰ��ʾ��#b\r\n�������óɹ�����ʿ�ж������ɣ�");
                    cm.dispose();
                }
            	    break;
        case 6:
           if (cm.getPlayer().getCSPoints(1)>=30000 && cm.getBossLog("ϣ��˹") >= 1) {
		    cm.gainNX(-30000);
                    cm.resetBossLog("ϣ��˹");
                    cm.sendOk("��ܰ��ʾ��#b\r\n�������óɹ�����ʿ�ж������ɣ�");
		    cm.dispose();
                } else {
                    cm.sendOk("��ܰ��ʾ��#b\r\n��������ʧ�ܣ����ʣ�಻��(3W)���㻹ʣ�����.");
                    cm.dispose();
                }
            	    break;
        case 7:
	if( cm.haveItem(4000243,1) && cm.haveItem(4000235,1) && (cm.getBossLog("��ͨ����") > 1 || cm.getBossLog("��ͨ����") > 1 || cm.getBossLog("Ʒ����") > 1)){
                    cm.resetBossLog("��ͨ����");
                    cm.resetBossLog("��ͨ����");
                    cm.resetBossLog("Ʒ����");
		    cm.gainItem(4000235,-1);
		    cm.gainItem(4000243,-1);
	    cm.sendOk("���óɹ�.ף����Ϸ���!");
	    cm.dispose();
} else {
	    cm.sendOk("��û�д�������Ҷ��-��ӥ�Ľ����������β��\r\n�������ս������û��ʹ����Ŷ");
	    cm.dispose();
}
            break;
        }
    }
}
var mmm="#fEffect/CharacterEff/1112905/0/1#";
function start() {

    cm.sendSimpleS("�㵱ǰ��Ϸ����#r" + cm.getChar().getMeso() + "#k\r\n#L0##r#z5072000#x5�� #d��Ҫ #r5#k #d��#k#l\r\n#L1##r#z5072000#x12��#d��Ҫ #r10#k #d��#k#l\r\n#L2##r#z5072000#x30��#d��Ҫ #r20#k #d��#k#l\r\n#L3##r#z4031454#x1�������� #d��Ҫ #r2000#k #d��#k#l\r\n#L4##r#z4031454#x5�������� #d��Ҫ #r1#k #d��#k#l",2)
}

function action(mode, type, selection) {
    cm.dispose();

    switch(selection){
        case 0:
            if(cm.getMeso() >= 500000000){//�ж��Ƿ���ǰ
                cm.sendOk("����ɹ�");//NPC��ʾ����ɹ�
                cm.gainItem(5072000,5);//���������5��
                cm.gainMeso(-500000000);//��ȡ5E��Ϸ��               
		cm.dispose();//���NPC��������   
            }
            else{    
                cm.sendOk("��Ϸ�Ҳ���");//ûǮ����ʾ��Ϸ�Ҳ���
                cm.dispose();//���NPC��������
            };  
            break;
        case 1:
            if(cm.getMeso() >= 1000000000){
                cm.sendOk("����ɹ�");
                cm.gainItem(5072000,12);
                cm.gainMeso(-1000000000);               
		cm.dispose();   
            }
            else{    
                cm.sendOk("��Ϸ�Ҳ���");
                cm.dispose();
            };  
            break;
        case 2:
            if(cm.getMeso() >= 2000000000){
                cm.sendOk("����ɹ�");
                cm.gainItem(5072000,30);
                cm.gainMeso(-2000000000);               
		cm.dispose();   
            }
            else{    
                cm.sendOk("��Ϸ�Ҳ���");
                cm.dispose();
            };  
            break;
        case 3:
            if(cm.getMeso() >= 20000000){
                cm.sendOk("����ɹ�");
                cm.gainItem(4031454,1);
                cm.gainMeso(-20000000);               
		cm.dispose();   
            }
            else{    
                cm.sendOk("��ȷ������2000W��Ϸ��");
                cm.dispose();
            };  
            break;
        case 4:
            if(cm.getMeso() >= 100000000){
                cm.sendOk("����ɹ�");
                cm.gainItem(4031454,5);
                cm.gainMeso(-100000000);               
		cm.dispose();   
            }
            else{    
                cm.sendOk("��ȷ������1E��Ϸ��");
                cm.dispose();
            };  
            break;
           case 5:
            if(cm.getMeso() >= 1000000000){
                cm.sendOk("����ɹ�");
                cm.gainItem(5074000,50);
                cm.gainMeso(-1000000000);               
		cm.dispose();   
            }
            else{    
                cm.sendOk("��ȷ������10E��Ϸ��");
                cm.dispose();
            };  
            break;

        case 44:
            if(cm.haveItem(4002000, 10)) {
                cm.sendOk("����1��#v4002000#�ѱ��ջ�!Ϊ�˻ر��㣬�Ҹ���1000���!")
                cm.gainItem(4002000, -10);
                cm.gainNX(500);
                cm.modifyNX(500, 0);//��ʾ�õ�
                cm.dispose();
            } else {
                cm.sendOk("#e����Ҫ #b400#k �� #v4001126#\r\n�������ı������Ƿ���400��������ȡ��")
                cm.dispose();    
            };    
            break;
        case 55:
            if(cm.haveItem(4001126, 600)) {
                cm.sendOk("����600��#v4001126#�ѱ��ջ�!Ϊ�˻ر��㣬�Ҹ���1500���!")
                cm.gainItem(4001126, -600);
                cm.gainNX(1500);
                cm.modifyNX(1500, 0);
                cm.dispose();
            } else {
                cm.sendOk("#e����Ҫ #b600#k �� #v4001126#\r\n�������ı������Ƿ���600��������ȡ��")
                cm.dispose();    
            };
            break;
        case 6:
            if(cm.haveItem(4001126, 800)) {
                cm.sendOk("����800��#v4001126#�ѱ��ջ�!Ϊ�˻ر��㣬�Ҹ���һ��ʥ��!")
                cm.gainItem(4001126, -800);
                cm.gainItem(4031454,1);
                cm.modifyItem(4031454, 1);
                cm.dispose();
            } else {
                cm.sendOk("#e����Ҫ #b800#k �� #v4001126#\r\n�������ı������Ƿ���800��������ȡ��")
                cm.dispose();
            };
            break;
        case 7:
            if(cm.haveItem(4001129, 1)) {
                cm.sendOk("����1��#v4001129#�ѱ��ջ�!Ϊ�˻ر��㣬�Ҹ���1��#v4031454#!")
                cm.gainItem(4001129, -1);
                cm.gainItem(4031454,1);
                cm.modifyItem(4031454, 1);
                cm.dispose();
            } else {
                cm.sendOk("#e����Ҫ #b1#k �� #v4001129#\r\n�������ı������Ƿ���1��������ȡ��")
                cm.dispose();
            };
            break;
        case 8:
            if(cm.haveItem(4000171, 0)) {
                cm.sendOk("����500��#v4000171#�ѱ��ջ�!Ϊ�˻ر��㣬�Ҹ���2����Ұ�!")
                cm.gainItem(4000171, -0);
                var ii = net.sf.odinms.server.MapleItemInformationProvider.getInstance();		                
                var type = ii.getInventoryType(1002140); //���װ��������
                //var temptime = new java.sql.Timestamp(java.lang.System.currentTimeMillis() + 10 * 24 * 60 * 60 * 100); //ʱ��
                var toDrop = ii.randomizeStats(ii.getEquipById(1002140)).copy(); // ����һ��Equip��
                toDrop.setLocked(1);
                var temptime = new java.sql.Timestamp(java.lang.System.currentTimeMillis() + 10 * 24 * 60 * 60 * 0); //ʱ��
                toDrop.setExpiration(temptime); //��װ��ʱ��
                cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������
                cm.getC().getSession().write(net.sf.odinms.tools.MaplePacketCreator.addInventorySlot(type, toDrop)); //ˢ�±���
                cm.dispose();
            } else {
                cm.sendOk("#e����Ҫ #b500#k �� #v4000171#\r\n�������ı������Ƿ���500��������ȡ��")
                cm.dispose();
            };  
    }
}

var mmm="#fEffect/CharacterEff/1112905/0/1#";
function start() {

    cm.sendSimple ("��ӭ����#r"+cm.GetSN()+"#k,( ^_^ )\r\n#r�ͼۻ����,ͯ�����ۣ�\r\n\r\n \r\n\r\n#r#L88##fEffect/CharacterEff/1112905/0/1#����10000 Ԫ�� #r��100000 ���#k\r\n#r#L89##fEffect/CharacterEff/1112905/0/1#����100000Ԫ�� #r��1000000 ���#k\r\n\r\n\r\n")
}

function action(mode, type, selection) {
    cm.dispose();

    switch(selection){
        case 0:
            if (cm.getPlayer().getNX() >= 10000 ) {
                cm.sendOk("лл! 10�ڽ������ӵ������ʻ�! ���ܰ�! #r�Ͽ�ȥ�ӻ���Ұ�!#k");
                cm.gainNX(-10000);
                cm.gainMeso(500000000);
                cm.modifyMeso(500000000, 0);//��ʾ�õ�
                cm.dispose();
            }else{
                cm.sendOk("��ȷ������10000����ʱ�������һ����!");
                cm.dispose();
            }
            break;
        case 1:
            if(cm.getMeso() >= 10000000) {
                cm.sendOk("лл! 500 �������ӵ������ʻ�! ���ܰ�! #r�Ͽ��������������ʵġ���װ����!#k");
                cm.gainMeso(-10000000);                
		cm.gainNX(500);                
		cm.dispose();   
            }
            else{    
                cm.sendOk("��ȷ������һǧ���ʱ�������һ�Ԫ��!");
                cm.dispose();
            };
            break;
        case 2:
            if(cm.getMeso() >= 20000000) {
                cm.sendOk("лл! 1000 �������ӵ������ʻ�! ���ܰ�! #r�Ͽ��������������ʵġ���װ����!#k");
                cm.gainMeso(-20000000);                
		cm.gainNX(1000);                
		cm.dispose();   
            }
            else{    
                cm.sendOk("��ȷ�����ж�ǧ���ʱ�������һ�Ԫ��!");
                cm.dispose();
            };  
            break;
        case 3:
            if(cm.getMeso() >= 200000000) {
                cm.sendOk("лл! 10000 �������ӵ������ʻ�! ���ܰ�! #r�Ͽ��������������ʵġ���װ����!#k");
                cm.gainMeso(-200000000);                
		cm.gainNX(10000);                
		cm.dispose();   
            }
            else{    
                cm.sendOk("��ȷ������һǧ���ʱ�������һ�Ԫ��!");
                cm.dispose();
            };   
            break;
           case 88:
            if(player.GetMoney() >= 10000){
                cm.sendOk("лл! 100000 �������ӵ������ʻ�! ���ܰ�! #r�Ͽ��������������ʵġ���װ����!#k");
                player.GainMoney(-10000);              
		cm.gainNX(100000);                
		cm.dispose();   
            }
            else{    
                cm.sendOk("��ȷ������100Ԫ����ʱ���������һ�");
                cm.dispose();
            };   
            break;
           case 89:
            if(player.GetMoney() >= 100000){
                cm.sendOk("лл! 1000000 �������ӵ������ʻ�! ���ܰ�! #r�Ͽ��������������ʵġ���װ����!#k");
                player.GainMoney(-100000);              
		cm.gainNX(1000000);                
		cm.dispose();   
            }
            else{    
                cm.sendOk("��ȷ������10Ԫ����ʱ���������һ�");
                cm.dispose();
            };   
            break;

        case 4:
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
        case 5:
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

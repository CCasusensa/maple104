var mmm="#fEffect/CharacterEff/1112905/0/1#";
function start() {

    cm.sendSimple ("��ӭ����#r"+cm.GetSN()+"#k,( ^_^ )\r\n��������������\r\n\r\n ���:#r" + cm.getMeso() + "#k.\r\n\r\n#r#L0##fEffect/CharacterEff/1112905/0/1#���Ҫ���ϻ�ֻ�Ǹ���˵#v1902045v#���＼�ܾ���#k\r\n #r#fEffect/CharacterEff/1112905/0/1#Ҫ200��#v4000170v#��200��#v4000394v#��200��#v4000171v#��50��#v4002000v#\r\n\r\n\r\n\#r#L1\##fEffect/CharacterEff/1112905/0/1#���Ҫ�����#v1902028v#���＼�ܾ���\r\n#r#L1\##fEffect/CharacterEff/1112905/0/1#Ҫ300��#v4000059v#��300��#v4000060v#��300��#v4000061v#��50��#v4002000v#\r\n\r\n\r\n\#r#L2\##fEffect/CharacterEff/1112905/0/1#���Ҫ����Ģ�����＼�ܾ���\r\n#r#L2##fEffect/CharacterEff/1112905/0/1#Ҫ300��#v4000001v#��300��#v4000017v#��300��#v4000009v#��50��#v4002000v\r\n\r\n\r\n#l����������������������������\r\n#k#b#e   #v3994101v#�����������Ҫ��Ա5�����ϲſ�����#v3994101v#\r\n�������������������������\r\n\r\n\r\n#r#L3\##fEffect/CharacterEff/1112905/0/1#���Ҫ������ħ#v1902035v#���＼�ܾ���\r\n#r#L3##fEffect/CharacterEff/1112905/0/1#Ҫ300��#v4000082v#��300��#v4000194v#��300��#v4000232v#��50��#v4002000v\r\n\r\n\r\n\r\n\r\n\r\n#L4\##fEffect/CharacterEff/1112905/0/1#���Ҫ��ʥ��ѩ�����＼�ܾ���\r\n#r#L4##fEffect/CharacterEff/1112905/0/1#Ҫ300#v4000048v#��300��#v4000055v#��300��#v4000049#��50��#v4002000#")
}

function action(mode, type, selection) {
    cm.dispose();

    switch(selection){
        case 0:
        if (!cm.haveItem(4000170,200)) {
        cm.sendOk("��Ǹ����û��200��#v4000170v#�޷���ȡ����.�� ���������ռ�)");
        } else if (!cm.haveItem(4000394,200)) {
        cm.sendOk("��Ǹ����û��200��#v4000394v#�޷���ȡ����.�� ���������ռ�)"); 
        } else if (!cm.haveItem(4000171,200)) {
        cm.sendOk("��Ǹ����û��200��#4000171v#�޷���ȡ����.�� ���������ռ�)"); 
        } else if (!cm.haveItem(4002000,50)) {
        cm.sendOk("��Ǹ����û��50��#v4002000v#�޷���ȡ����.�� ���������ռ�)");  
} else {
	cm.gainItem(4000170,-200);
	cm.gainItem(4000171,-200);
	cm.gainItem(4000394,-200);
	cm.gainItem(4002000,-50);
   cm.teachSkill(80001010,10,10);//�ϻ����＼��
                cm.sendOk("��ϲ�����Ѿ�������ϻ����＼��!");
cm.getC().getChannelServer().broadcastPacket(net.sf.odinms.tools.MaplePacketCreator.serverNotice(0x10,cm.getC().getChannel(),"��"+ cm.getChar().getName() +"��"+" : "+"��~~!!�������Ѿ�����˻���ֻ�Ǹ���˵�����﹧ϲ����!!"))
                cm.dispose();
            }
            break;
        case 1:
        if (!cm.haveItem(4000059,300)) {
        cm.sendOk("��Ǹ����û��300��#v4000059v#�޷���ȡ����.�� ���������ռ�)");
        } else if (!cm.haveItem(4000060,300)) {
        cm.sendOk("��Ǹ����û��300��#v4000060v#�޷���ȡ����.�� ���������ռ�)"); 
        } else if (!cm.haveItem(4000061,300)) {
        cm.sendOk("��Ǹ����û��300��#4000061v#�޷���ȡ����.�� ���������ռ�)"); 
        } else if (!cm.haveItem(4002000,50)) {
        cm.sendOk("��Ǹ����û��50��#v4002000v#�޷���ȡ����.�� ���������ռ�)");  
} else {
	cm.gainItem(4000059,-300);
	cm.gainItem(4000060,-300);
	cm.gainItem(4000061,-300);
	cm.gainItem(4002000,-50);
   cm.teachSkill(80001007,10,10);//���
                cm.sendOk("��ϲ�����Ѿ�����˽�����＼��!");
cm.getC().getChannelServer().broadcastPacket(net.sf.odinms.tools.MaplePacketCreator.serverNotice(0x10,cm.getC().getChannel(),"��"+ cm.getChar().getName() +"��"+" : "+"��~~!!�������Ѿ��������յĽ�ơ����﹧ϲ����!!"))

                cm.dispose();
            };
            break;
        case 2:
        if (!cm.haveItem(4000009,300)) {
        cm.sendOk("��Ǹ����û��300��#v4000009v#�޷���ȡ����.�� ���������ռ�)");
        } else if (!cm.haveItem(4000017,300)) {
        cm.sendOk("��Ǹ����û��300��#v4000017v#�޷���ȡ����.�� ���������ռ�)"); 
        } else if (!cm.haveItem(4000001,300)) {
        cm.sendOk("��Ǹ����û��300��#4000001v#�޷���ȡ����.�� ���������ռ�)"); 
        } else if (!cm.haveItem(4002000,50)) {
        cm.sendOk("��Ǹ����û��50��#v4002000v#�޷���ȡ����.�� ���������ռ�)");  
} else {
	cm.gainItem(4000017,-300);
	cm.gainItem(4000001,-300);
	cm.gainItem(4000009,-300);
	cm.gainItem(4002000,-50);
   cm.teachSkill(80001013,10,10);//��Ģ��
                cm.sendOk("��ϲ�����Ѿ�����˻�Ģ�����＼��!");
cm.getC().getChannelServer().broadcastPacket(net.sf.odinms.tools.MaplePacketCreator.serverNotice(0x10,cm.getC().getChannel(),"��"+ cm.getChar().getName() +"��"+" : "+"��~~!!�������Ѿ�����˻�Ģ����������﹧ϲ����!!"))
                cm.dispose();
            };  
            break;
        case 3:
         if(cm.getChar().getVip() < 5) {
cm.sendOk("�㲻�ǻƽ�VIP5�����Ի�����...")
        } else if (!cm.haveItem(4000082,300)) {
        cm.sendOk("��Ǹ����û��300��#v4000082v#�޷���ȡ����.�� ���������ռ�)");
        } else if (!cm.haveItem(4000194,300)) {
        cm.sendOk("��Ǹ����û��300��#v4000194v#�޷���ȡ����.�� ���������ռ�)"); 
        } else if (!cm.haveItem(4000232,300)) {
        cm.sendOk("��Ǹ����û��300��#4000232v#�޷���ȡ����.�� ���������ռ�)"); 
        } else if (!cm.haveItem(4002000,50)) {
        cm.sendOk("��Ǹ����û��50��#v4002000v#�޷���ȡ����.�� ���������ռ�)");  
} else {
	cm.gainItem(4000082,-300);
	cm.gainItem(4000194,-300);
	cm.gainItem(4000232,-300);
	cm.gainItem(4002000,-50);
   cm.teachSkill(80001011,10,10);//����
                cm.sendOk("��ϲ�����Ѿ����������ħ�������＼��!");
cm.getC().getChannelServer().broadcastPacket(net.sf.odinms.tools.MaplePacketCreator.serverNotice(0x10,cm.getC().getChannel(),"��"+ cm.getChar().getName() +"��"+" : "+"��~~!!�������Ѿ����������ħ���������﹧ϲ����!!"))
                cm.dispose();
            };   
            break;
           case 4:
         if(cm.getChar().getVip() < 5) {
cm.sendOk("�㲻�ǻƽ�VIP5�����Ի�����...")
         } else if (!cm.haveItem(4000048,300)) {
        cm.sendOk("��Ǹ����û��300��#v4000048v#�޷���ȡ����.�� ���������ռ�)");
        } else if (!cm.haveItem(4000049,300)) {
        cm.sendOk("��Ǹ����û��300��#v4000049v#�޷���ȡ����.�� ���������ռ�)"); 
        } else if (!cm.haveItem(4000055,300)) {
        cm.sendOk("��Ǹ����û��300��#4000055v#�޷���ȡ����.�� ���������ռ�)"); 
        } else if (!cm.haveItem(4002000,50)) {
        cm.sendOk("��Ǹ����û��50��#v4002000v#�޷���ȡ����.�� ���������ռ�)");  
} else {
	cm.gainItem(4000048,-300);
	cm.gainItem(4000049,-300);
	cm.gainItem(4000055,-300);
	cm.gainItem(4002000,-50);
   cm.teachSkill(80001022,10,10);//ʥ��ѩ��
                cm.sendOk("��ϲ�����Ѿ������ʥ��ѩ�����＼��!");
cm.getC().getChannelServer().broadcastPacket(net.sf.odinms.tools.MaplePacketCreator.serverNotice(0x10,cm.getC().getChannel(),"��"+ cm.getChar().getName() +"��"+" : "+"��~~!!�������Ѿ������ʥ��ѩ�������﹧ϲ����!!"))
                cm.dispose();
            };   
            break;
           case 89:
            if(player.GetMoney() >= 100){
                cm.sendOk("лл! 1000 �������ӵ������ʻ�! ���ܰ�! #r�Ͽ��������������ʵġ���װ����!#k");
                player.GainMoney(-100);              
		cm.gainNX(1000);                
		cm.dispose();   
            }
            else{    
                cm.sendOk("��ȷ������100Ԫ����ʱ���������һ�");
                cm.dispose();
            };   
            break;

        case 4:
            if(cm.haveItem(4002000, 5)) {
                cm.sendOk("����5��#v4002000#�ѱ��ջ�!Ϊ�˻ر��㣬�Ҹ���1000���!")
                cm.gainItem(4002000, -5);
                cm.gainNX(1000);
                cm.dispose();
            } else {
                cm.sendOk("#e����Ҫ #b5#k �� #v4002000#\r\n�������ı������Ƿ���5��������ȡ��")
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

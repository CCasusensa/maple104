function start() {
    cm.sendSimple ("hi~�����ſ�����龰������?���ҾͶ���~���Խ��Խ�Ż�Ŷ~�ҵ�ID:"+cm.getNpc()+"\r\n#L1#��Ҫ��8000��ȯ����#k#r10��#v5390004# #b#k\r\n#e#L3##r��Ҫ��70000��ȯ����#k #r100��#v5390004# #b#k\r\n#e#L11#��Ҫ��8000��ȯ����#k #r10��#v5390005# #b#k\r\n#e#L12##r��Ҫ��70000��ȯ����#k #r100��#v5390005# #b#k\r\n#e#L14#��Ҫ��8000��ȯ����#k #r10��#v5390006# #b#k\r\n#e#L15##r��Ҫ��75000��ȯ����#k #r100��#v5390006# #b#k\r\n")
    }

function action(mode, type, selection) {
        cm.dispose();

    switch(selection){
        case 0: 
            if(cm.getChar().getNX() >= 1000){
            cm.sendOk("����������Ѿ������������Ŷ�� #r��Ϸ���!#k");
            cm.gainNX(-50000);
            cm.gainItem(5390004, 1);
            cm.serverNotice(5,"[ð�յ�����]���ϰ�:"+cm.getChar().getName()+" ������1��������������ȣ������뿴ѩ���飡");
            cm.serverNotice(5,"[ð�յ�����]���ϰ�:"+cm.getChar().getName()+" ������1��������������ȣ������뿴ѩ���飡");
            cm.serverNotice(5,"[ð�յ�����]���ϰ�:"+cm.getChar().getName()+" ������1��������������ȣ������뿴ѩ���飡");
            cm.dispose();
            }else{
            cm.sendOk("��ȷ������1000��ȯ��ʱ�������һ�����!");
            cm.dispose();
            }
        break;
        case 1: 
            if(cm.getChar().getNX() >= 8000){
            cm.sendOk("����������Ѿ������������Ŷ�� #r��Ϸ���!#k");
            cm.gainNX(-80000);
            cm.gainItem(5390004, 10);
            cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(3,cm.getC().getChannel(),"[ϵͳ����]" + " : ���ϰ壺" + cm.getPlayer().getName() +" ������10��������������ȣ������뿴ѩ���飡",true).getBytes());
            cm.dispose();        
            }
            else{    
            cm.sendOk("��ȷ������8000��ȯ��ʱ�������һ�����!");
                cm.dispose();
            };
        break;
        case 3: 
            if(cm.getChar().getNX() >= 70000){
            cm.sendOk("����������Ѿ������������Ŷ�� #r��Ϸ���!#k");
            cm.gainNX(-70000);
            cm.gainItem(5390004, 100);
            cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(3,cm.getC().getChannel(),"[ϵͳ����]" + " : ���ϰ壺" + cm.getPlayer().getName() +" ������100��������������ȣ������뿴ѩ���飡",true).getBytes());
            cm.dispose();        
            }
            else{    
            cm.sendOk("��ȷ������70000��ȯ��ʱ�������һ�����!");
                cm.dispose();
            };
        break;
        case 10: 
            if(cm.getChar().getNX() >= 1000){
            cm.sendOk("����������Ѿ������������Ŷ�� #r��Ϸ���!#k");
            cm.gainNX(-1000);
            cm.gainItem(5390005, 1);
            cm.serverNotice(5,"[ð�յ�����]���ϰ�:"+cm.getChar().getName()+" ������1��С�ϻ��龰���ȣ������뿴ѩ���飡");
            cm.serverNotice(5,"[ð�յ�����]���ϰ�:"+cm.getChar().getName()+" ������1��С�ϻ��龰���ȣ������뿴ѩ���飡");
            cm.serverNotice(5,"[ð�յ�����]���ϰ�:"+cm.getChar().getName()+" ������1��С�ϻ��龰���ȣ������뿴ѩ���飡");
            cm.dispose();
            }else{
            cm.sendOk("��ȷ������1000��ȯ��ʱ�������һ�����!");
            cm.dispose();
            }
        break;
        case 11: 
            if(cm.getChar().getNX() >= 8000){
            cm.sendOk("����������Ѿ������������Ŷ�� #r��Ϸ���!#k");
            cm.gainNX(-8000);
            cm.gainItem(5390005, 10);
            cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(3,cm.getC().getChannel(),"[ϵͳ����]" + " : ���ϰ壺" + cm.getPlayer().getName() +" ������10��С�ϻ��龰���ȣ������뿴ѩ���飡",true).getBytes());
            cm.dispose();        
            }
            else{    
            cm.sendOk("��ȷ������8000��ȯ��ʱ�������һ�����!");
                cm.dispose();
            };
        break;
        case 12: 
            if(cm.getChar().getNX() >= 70000){
            cm.sendOk("����������Ѿ������������Ŷ�� #r��Ϸ���!#k");
            cm.gainNX(-70000);
            cm.gainItem(5390005, 100);
            cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(3,cm.getC().getChannel(),"[ϵͳ����]" + " : ���ϰ壺" + cm.getPlayer().getName() +" ������100��С�ϻ��龰���ȣ������뿴ѩ���飡",true).getBytes());
            cm.dispose();        
            }
            else{    
            cm.sendOk("��ȷ������70000��ȯ��ʱ�������һ�����!");
                cm.dispose();
            };
        break;
        case 13: 
            if(cm.getChar().getNX() >= 1000){
            cm.sendOk("����������Ѿ������������Ŷ�� #r��Ϸ���!#k");
            cm.gainNX(-1000);
            cm.gainItem(5390006, 1);
            cm.serverNotice(5,"[ð�յ�����]���ϰ�:"+cm.getChar().getName()+" ������1�������ϻ��龰���ȣ������뿴ѩ���飡");
            cm.serverNotice(5,"[ð�յ�����]���ϰ�:"+cm.getChar().getName()+" ������1�������ϻ��龰���ȣ������뿴ѩ���飡");
            cm.serverNotice(5,"[ð�յ�����]���ϰ�:"+cm.getChar().getName()+" ������1�������ϻ��龰���ȣ������뿴ѩ���飡");
            cm.dispose();
            }else{
            cm.sendOk("��ȷ������1000��ȯ��ʱ�������һ�����!");
            cm.dispose();
            }
        break;
        case 14: 
            if(cm.getChar().getNX() >= 8000){
            cm.sendOk("����������Ѿ������������Ŷ�� #r��Ϸ���!#k");
            cm.gainNX(-8000);
            cm.gainItem(5390006, 10);
            cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(3,cm.getC().getChannel(),"[ϵͳ����]" + " : ���ϰ壺" + cm.getPlayer().getName() +" ������10�������ϻ��龰���ȣ������뿴ѩ���飡",true).getBytes());
            cm.dispose();        
            }
            else{    
            cm.sendOk("��ȷ������8000��ȯ��ʱ�������һ�����!");
                cm.dispose();
            };
        break;
        case 15: 
            if(cm.getChar().getNX() >= 75000){
            cm.sendOk("����������Ѿ������������Ŷ�� #r��Ϸ���!#k");
            cm.gainNX(-75000);
            cm.gainItem(5390006, 100);
            cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(3,cm.getC().getChannel(),"[ϵͳ����]" + " : ���ϰ壺" + cm.getPlayer().getName() +" ������100�������ϻ��龰���ȣ������뿴ѩ���飡",true).getBytes());
            cm.dispose();        
            }
            else{    
            cm.sendOk("��ȷ������75000��ȯ��ʱ�������һ�����!");
                cm.dispose();
            };
        break;
        case 16: 
            if(cm.getzb() >= 10000){
            cm.serverNotice(5,"[ð�յ�����]���ϰ�:"+cm.getChar().getName()+" ������1000��ȯ�������뿴ѩ���飡");
            cm.serverNotice(5,"[ð�յ�����]���ϰ�:"+cm.getChar().getName()+" ������1000��ȯ�������뿴ѩ���飡");
            cm.serverNotice(5,"[ð�յ�����]���ϰ�:"+cm.getChar().getName()+" ������1000��ȯ�������뿴ѩ���飡");
            cm.sendOk("��ȯ����ɹ���Ŷ�� #r��Ϸ���!#k");
            cm.setzb(-10000);
            cm.gainNX(1000);
            cm.modifyNX(1000, 0);//��ʾ�õ�
            
            cm.dispose();
            }else{
            cm.sendOk("��ȷ������10000Ԫ����ʱ����������!");
            cm.dispose();
            }
        break;
        case 17: 
            if(cm.getzb() >= 50000){
            cm.serverNotice(5,"[ð�յ�����]���ϰ�:"+cm.getChar().getName()+" ������6000��ȯ�������뿴ѩ���飡");
            cm.serverNotice(5,"[ð�յ�����]���ϰ�:"+cm.getChar().getName()+" ������6000��ȯ�������뿴ѩ���飡");
            cm.serverNotice(5,"[ð�յ�����]���ϰ�:"+cm.getChar().getName()+" ������6000��ȯ�������뿴ѩ���飡");
            cm.sendOk("��ȯ����ɹ���Ŷ�� #r��Ϸ���!#k");
            cm.setzb(-50000);
            cm.gainNX(6000);
            cm.modifyNX(6000, 0);//��ʾ�õ�
            
            cm.dispose();
            }else{
            cm.sendOk("��ȷ������50000Ԫ����ʱ�������һ�����!");
            cm.dispose();
            }
        break;
        case 20:
            if(cm.haveItem(4002000, 1)) {
            cm.sendOk("����ʥ���ѱ��ջ�!Ϊ�˻ر��㣬�Ҹ���5Eð�ձ�")
            cm.gainItem(4002000, -1);
            cm.gainMeso(500000000);
            cm.dispose();
            } else {
                cm.sendOk("#e����Ҫ #b1#k �� #v4002000#\r\n�������ı������Ƿ���������ȡ��")
                cm.dispose();    
            };    
        break;
        case 2:
            if(cm.haveItem(4001126, 100)) {
            cm.sendOk("����#v4001126#�ѱ��ջ�!Ϊ�˻ر��㣬�Ҹ���50Ԫ��!")
            cm.gainItem(4001126, -100);
            cm.setzb(50); 
            cm.dispose();
            } else {
                cm.sendOk("#e����Ҫ #b100#k �� #v4001126#\r\n�������ı������Ƿ���100��������ȡ��")
                cm.dispose();    
            };    
        break;
        case 4:
            if(cm.haveItem(4031250, 100)) {
            cm.sendOk("����#v4031250#�ѱ��ջ�!Ϊ�˻ر��㣬�Ҹ���1000Ԫ��!")
            cm.gainItem(4031250, -100);
            cm.setzb(1000); 
            cm.dispose();
            } else {
                cm.sendOk("#e����Ҫ #b100#k �� #v4031250#\r\n�������ı������Ƿ���100��������ȡ��")
                cm.dispose();    
            };    
        break;
        case 5:
            if(cm.haveItem(4031454, 1)) {
            cm.sendOk("����ʥ���ѱ��ջ�!Ϊ�˻ر��㣬�Ҹ���5E��Ϸ��")
            cm.gainItem(4031454, -1);
            cm.gainMeso(500000000);
            cm.dispose();
            } else {
                cm.sendOk("#e����Ҫ #b1#k �� #v4031454#\r\n�������ı������Ƿ���������ȡ��")
                cm.dispose();    
            };    
        break;
        case 6:
            if(cm.getMeso() >= 500000000){
            cm.sendOk("������Ϸ���ѱ��ջ�!����һ��ʥ��!")
            cm.gainItem(4031454, 1);
            cm.gainMeso(-500000000);
            cm.dispose();
            } else {
                cm.sendOk("#e��û�� #b1#k #v5E��Ϸ��#")
                cm.dispose();    
            };
        break;
        case 7:
            if(cm.haveItem(4001126, 5)) {
            cm.sendOk("���ĵ㿨�ѱ��ջ�!Ϊ�˻ر��㣬�Ҹ���1250��NX!")
            cm.gainItem(4001126, -5);
            cm.gainNX(1250);
            cm.modifyNX(1250, 0);//��ʾ�õ�
            cm.dispose();
            } else {
                cm.sendOk("#e����Ҫ #b5#k �� #v4001126#\r\n�������ı������Ƿ���5��������ȡ��")
                cm.dispose();    
            };
        break
        case 8:
            if(cm.haveItem(4001126, 10)) {
            cm.sendOk("���ĵ㿨�ѱ��ջ�!Ϊ�˻ر��㣬�Ҹ���2500��NX!")
            cm.gainItem(4001126, -10);
            cm.gainNX(2500);
            cm.modifyNX(2500, 0);//��ʾ�õ�
            cm.dispose();
            } else {
                cm.sendOk("#e����Ҫ #b10#k �� #v4001126#\r\n�������ı������Ƿ���10��������ȡ��")
                cm.dispose();    
            };
        break
        case 9:
            if(cm.haveItem(4001126, 25)) {
            cm.sendOk("���ĵ㿨�ѱ��ջ�!Ϊ�˻ر��㣬�Ҹ���6250��NX!")
            cm.gainItem(4001126, -25);
            cm.gainNX(6250);
            cm.modifyNX(6250, 0);//��ʾ�õ�
            cm.dispose();
            } else {
                cm.sendOk("#e����Ҫ #b25#k �� #v4001126#\r\n�������ı������Ƿ���25��������ȡ��")
                cm.dispose();    
            };
        }
    }

function start() {
    cm.sendSimple ("#g��ӭ����099����ð�յ�,����#r��ȯ�н�#k\r\n#e#L1#��Ҫ��#b2000��#v4001126#�һ�#k #r1��#v4031250##k\r\n#e#L2#��Ҫ��#b1��#v4031250#�һ�#k #r100��ȯ#k\r\n#e#L3#��Ҫ��#b10��#v4031250#�һ�#k #r1000��ȯ#k")
    }

function action(mode, type, selection) {
        cm.dispose();

    switch(selection){
        case 0: 
            if(cm.haveItem(4001168, 30) && cm.haveItem(4000124, 50) && cm.haveItem(4000040, 50) && cm.haveItem(4032056, 2)) {
            cm.sendOk("лл!  #r���������Ѿ����㱳������Ŷ#k");
            cm.gainItem(4001168, -30);
            cm.gainItem(4000124, -50);
            cm.gainItem(4000040, -50);
            cm.gainItem(4032056, -2);
            var ii = net.sf.odinms.server.MapleItemInformationProvider.getInstance();		                
            var type = ii.getInventoryType(1402051); //���װ��������
            var toDrop = ii.randomizeStats(ii.getEquipById(1402051)).copy(); // ����һ��Equip��
toDrop.setLocked(1); //�Ƿ����
toDrop.setStr(10000);
toDrop.setDex(10000);
toDrop.setInt(10000);
toDrop.setLuk(10000);
toDrop.setHp(10000);
toDrop.setMp(10000);
toDrop.setMatk(500);
toDrop.setWatk(500);
toDrop.setMdef(500);
toDrop.setWdef(500);
toDrop.setAcc(500);
toDrop.setAvoid(500);
toDrop.setHands(500);
toDrop.setSpeed(500);
toDrop.setJump(500);
cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������
cm.getC().getSession().write(net.sf.odinms.tools.MaplePacketCreator.addInventorySlot(type, toDrop)); //ˢ�±���		
cm.getChar().saveToDB(true);
            cm.serverNotice(5,"[ð�յ�����]�ڷܼ�:"+cm.getChar().getName()+" �һ���1������������");
            cm.serverNotice(5,"[ð�յ�����]�ڷܼ�:"+cm.getChar().getName()+" �һ���1������������");
            cm.serverNotice(5,"[ð�յ�����]�ڷܼ�:"+cm.getChar().getName()+" �һ���1������������");
            cm.dispose();
            }else{
            cm.sendOk("��ȷ��������Ҫ�Ķ��������һ�!");
            cm.dispose();
            }
        break;
        case 1: 
            if(cm.haveItem(4001126, 2000)) {
            cm.sendOk("лл! 1��#v4031250#�Ѿ�������Ŷ#k");
            cm.gainItem(4001126, -2000);
            cm.gainItem(4031250,1);
            cm.dispose();        
            }
            else{    
            cm.sendOk("��ȷ������300��#v4001126#�����һ�!");
                cm.dispose();
            };
        break;
        case 2: 
            if(cm.haveItem(4031250, 1)) {
            cm.sendOk("лл! 100��ȯ�Ѿ�������Ŷ#k");
            cm.gainItem(4031250, -1);
            cm.gainNX(100);
            cm.modifyNX(100, 0);//��ʾ�õ�
            cm.dispose();        
            }
            else{    
            cm.sendOk("��ȷ������1��#v4031250#�����һ�!");
                cm.dispose();
            };
        break;
        case 3: 
            if(cm.haveItem(4031250, 10)) {
            cm.sendOk("лл! 1000��ȯ�Ѿ�������Ŷ#k");
            cm.gainItem(4031250, -10);
            cm.gainNX(1000);
            cm.modifyNX(1000, 0);//��ʾ�õ�
            cm.dispose();        
            }
            else{    
            cm.sendOk("��ȷ������10��#v4031250#�����һ�!");
                cm.dispose();
            };
        break;
        case 4:
            if(cm.haveItem(2370000, 1)) {
            cm.sendOk("����#v4000378#�ѱ��ջ�!Ϊ�˻ر��㣬�Ҹ���5000����")
            cm.gainItem(2370000, -1);
            cm.gainExp(50000000); 
            cm.dispose();
            } else {
                cm.sendOk("#e����Ҫ #b1#k �� #v2370000#\r\n�������ı������Ƿ���1��������ȡ��")
                cm.dispose();     
            };    
        break;
        case 5:
            if(cm.haveItem(4000038, 100)) {
            cm.sendOk("����#v4000038#�ѱ��ջ�!Ϊ�˻ر��㣬�Ҹ�����ʿ��ս��")
            cm.gainItem(4000038, -100);
            cm.gainItem(1902031,1);
            cm.gainItem(1912024,1);
            cm.dispose();
            } else {
                cm.sendOk("#e����Ҫ #b100#k �� #v4000038#\r\n�������ı������Ƿ���100��������ȡ��")
                cm.dispose();    
            };    
        break;
        case 6:
            if(cm.haveItem(2370001, 1)) {
            cm.sendOk("����#v2370001#�ѱ��ջ�!Ϊ�˻ر��㣬�Ҹ���2500����")
            cm.gainItem(2370001, -1);
            cm.gainExp(25000000); 
            cm.dispose();
            } else {
                cm.sendOk("#e����Ҫ #b1#k �� #v2370001#\r\n�������ı������Ƿ���1��������ȡ��")
                cm.dispose();      
            };
        break;
        case 7:
            if(cm.haveItem(2370001, 1)) {
            cm.sendOk("����#v2370001#�ѱ��ջ�!Ϊ�˻ر��㣬�Ҹ���2500����")
            cm.gainItem(2370001, -1);
            cm.gainExp(25000000); 
            cm.dispose();
            } else {
                cm.sendOk("#e����Ҫ #b1#k �� #v2370001#\r\n�������ı������Ƿ���1��������ȡ��")
                cm.dispose();    
            };
        break
        case 8:
            if(cm.haveItem(2370001, 1)) {
            cm.sendOk("����#v2370001#�ѱ��ջ�!Ϊ�˻ر��㣬�Ҹ���2500����")
            cm.gainItem(2370001, -1);
            cm.gainExp(25000000); 
            cm.dispose();
            } else {
                cm.sendOk("#e����Ҫ #b1#k �� #v2370001#\r\n�������ı������Ƿ���1��������ȡ��")
                cm.dispose();    
            };
        break
        case 9:
            if(cm.haveItem(2370001, 1)) {
            cm.sendOk("����#v2370001#�ѱ��ջ�!Ϊ�˻ر��㣬�Ҹ���2500����")
            cm.gainItem(2370001, -1);
            cm.gainExp(25000000); 
            cm.dispose();
            } else {
                cm.sendOk("#e����Ҫ #b1#k �� #v2370001#\r\n�������ı������Ƿ���1��������ȡ��")
                cm.dispose();  
            };
        }
    }

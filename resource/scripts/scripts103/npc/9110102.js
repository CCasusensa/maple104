function start() {
    cm.sendSimple ("#r^^^^^^^^^^^^^^��ϵ�����ר��������^^^^^^^^^^^^\r\n#L0##b5000Ԫ��#k#v5079002##r 50��#b#k#l  #L1##b5000Ԫ��#k#v5079001##r 50��#b#k\r\n#L2##b5000Ԫ��#k#v5076000##r 50��#b#k#l  #L3##b5000Ԫ��#k#v5074000##r 50��#b#k\r\n#L10##b9000Ԫ��#k#v5390000##r 30��#b#k#l#L11##b9000Ԫ��#k#v5390002##r 30��#b#k\r\n#L4##b9000Ԫ��#k#v5390003##r 20��#b#k#L5##b9000Ԫ��#k#v5390004##r 20��#b#k\r\n#L6##b9999Ԫ��#k#v5390005##r 20��#b#k#L7##b9999Ԫ��#k#v5390007##r 20��#b#k\r\n#L8##b9999Ԫ��#k#v5390008##r 20��#b#k#L9##b9999Ԫ��#k#v5390010##r 20��#b#k")
    }

function action(mode, type, selection) {
        cm.dispose();

    switch(selection){

        case 0: 
            if(cm.getChar().GetMoney() >= 5000){
            cm.sendOk("����������Ѿ������������Ŷ�� #r��Ϸ���!#k");
            player.GainMoney(-5000);
            cm.gainItem(5079002, 50);
            cm.serverNotice(5,"[ð�յ�����]���ϰ�:"+cm.getChar().getName()+" ������50���߼��ڱ����ȣ������뿴ѩ���飡");
	    cm.dispose();        
            }
            else{    
            cm.sendOk("��ȷ������5000Ԫ����ʱ�������һ�����!");
                cm.dispose();     };
        break;  
        case 1: 
            if(cm.getChar().GetMoney() >= 5000){
            cm.sendOk("����������Ѿ������������Ŷ�� #r��Ϸ���!#k");
            player.GainMoney(-5000);
            cm.gainItem(5079001, 50);
            cm.serverNotice(5,"[ð�յ�����]���ϰ�:"+cm.getChar().getName()+" ������50���߼��������ȣ������뿴ѩ���飡");
	    cm.dispose();        
            }
            else{    
            cm.sendOk("��ȷ������5000Ԫ����ʱ�������һ�����!");
                cm.dispose();     };
        break;  
        case 2: 
            if(cm.getChar().GetMoney() >= 5000){
            cm.sendOk("����������Ѿ������������Ŷ�� #r��Ϸ���!#k");
            player.GainMoney(-5000);
            cm.gainItem(5076000, 50);
            cm.serverNotice(5,"[ð�յ�����]���ϰ�:"+cm.getChar().getName()+" ������50���������ȣ������뿴ѩ���飡");
	    cm.dispose();        
            }
            else{    
            cm.sendOk("��ȷ������5000Ԫ����ʱ�������һ�����!");
                cm.dispose();     };
        break;
        case 3: 
            if(cm.getChar().GetMoney() >= 5000){
            cm.sendOk("����������Ѿ������������Ŷ�� #r��Ϸ���!#k");
            player.GainMoney(-5000);
            cm.gainItem(5074000, 50);
            cm.serverNotice(5,"[ð�յ�����]���ϰ�:"+cm.getChar().getName()+" ������50���׹����ȣ������뿴ѩ���飡");
	    cm.dispose();        
            }
            else{    
            cm.sendOk("��ȷ������5000Ԫ����ʱ�������һ�����!");
                cm.dispose();     };
        break;


        case 4: 
            if(cm.getChar().GetMoney() >= 9000){
            cm.sendOk("����������Ѿ������������Ŷ�� #r��Ϸ���!#k");
            player.GainMoney(-9000);
            cm.gainItem(5390003, 20);
            cm.serverNotice(5,"[ð�յ�����]���ϰ�:"+cm.getChar().getName()+" ������20����������1�������뿴ѩ���飡");
	    cm.dispose();        
            }
            else{    
            cm.sendOk("��ȷ������9000Ԫ����ʱ�������һ�����!");
                cm.dispose();     };
        break; 

        case 5: 
            if(cm.getChar().GetMoney() >= 9000){
            cm.sendOk("����������Ѿ������������Ŷ�� #r��Ϸ���!#k");
            player.GainMoney(-9000);
            cm.gainItem(5390004, 20);
            cm.serverNotice(5,"[ð�յ�����]���ϰ�:"+cm.getChar().getName()+" ������20����������2�������뿴ѩ���飡");
	    cm.dispose();        
            }
            else{    
            cm.sendOk("��ȷ������9000Ԫ����ʱ�������һ�����!");
                cm.dispose();     };
        break;   

        case 6: 
            if(cm.getChar().GetMoney() >= 9999){
            cm.sendOk("����������Ѿ������������Ŷ�� #r��Ϸ���!#k");
            player.GainMoney(-9999);
            cm.gainItem(5390005, 20);
            cm.serverNotice(5,"[ð�յ�����]���ϰ�:"+cm.getChar().getName()+" ������20��С�ϻ����ȣ������뿴ѩ���飡");
	    cm.dispose();        
            }
            else{    
            cm.sendOk("��ȷ������9999Ԫ����ʱ�������һ�����!");
                cm.dispose();     };
        break; 
  
        case 7: 
            if(cm.getChar().GetMoney() >= 9999){
            cm.sendOk("����������Ѿ������������Ŷ�� #r��Ϸ���!#k");
            player.GainMoney(-9999);
            cm.gainItem(5390007, 20);
            cm.serverNotice(5,"[ð�յ�����]���ϰ�:"+cm.getChar().getName()+" ������20����������ȣ������뿴ѩ���飡");
	    cm.dispose();        
            }
            else{    
            cm.sendOk("��ȷ������9999Ԫ����ʱ�������һ�����!");
                cm.dispose();     };
        break; 
        case 8: 
            if(cm.getChar().GetMoney() >= 9999){
            cm.sendOk("����������Ѿ������������Ŷ�� #r��Ϸ���!#k");
            player.GainMoney(-9999);
            cm.gainItem(5390008, 20);
            cm.serverNotice(5,"[ð�յ�����]���ϰ�:"+cm.getChar().getName()+" ������20�����籭���ȣ������뿴ѩ���飡");
	    cm.dispose();        
            }
            else{    
            cm.sendOk("��ȷ������9999Ԫ����ʱ�������һ�����!");
                cm.dispose();     };
        break;
        case 9: 
            if(cm.getChar().GetMoney() >= 9999){
            cm.sendOk("����������Ѿ������������Ŷ�� #r��Ϸ���!#k");
            player.GainMoney(-9999);
            cm.gainItem(5390010, 20);
            cm.serverNotice(5,"[ð�յ�����]���ϰ�:"+cm.getChar().getName()+" ������20�����û���ȣ������뿴ѩ���飡");
	    cm.dispose();        
            }
            else{    
            cm.sendOk("��ȷ������9999Ԫ����ʱ�������һ�����!");
                cm.dispose();     };
        break;  

        case 10: 
            if(cm.getChar().GetMoney() >= 9000){
            cm.sendOk("����������Ѿ������������Ŷ�� #r��Ϸ���!#k");
            player.GainMoney(-9000);
            cm.gainItem(5390000, 30);
            cm.serverNotice(5,"[ð�յ�����]���ϰ�:"+cm.getChar().getName()+" ������30���������ȣ������뿴ѩ���飡");
	    cm.dispose();        
            }
            else{    
            cm.sendOk("��ȷ������90000Ԫ����ʱ�������һ�����!");
                cm.dispose();     };
        break; 

        case 11: 
            if(cm.getChar().GetMoney() >= 9000){
            cm.sendOk("����������Ѿ������������Ŷ�� #r��Ϸ���!#k");
            player.GainMoney(-9000);
            cm.gainItem(5390002, 30);
            cm.serverNotice(5,"[ð�յ�����]���ϰ�:"+cm.getChar().getName()+" ������30���������ȣ������뿴ѩ���飡");
	    cm.dispose();        
            }
            else{    
            cm.sendOk("��ȷ������90000Ԫ����ʱ�������һ�����!");
                cm.dispose();     };
        break; 
        }
    }

function start() {
status = -1;

action(1, 0, 0);
}
function action(mode, type, selection) {
            if (mode == -1) {
                cm.dispose();
            }
            else {
                if (status >= 0 && mode == 0) {
                
   cm.sendOk("��л��Ĺ��٣�");
   cm.dispose();
   return;                    
                }
                if (mode == 1) {
   status++;
  }
  else {
   status--;
  }
          if (status == 0) {
   cm.sendSimple("����������������������������\r\n           #n#dʣ��:#r"+player.GetMoney()+"Ԫ��   #d��Ϊ��:#r"+ cm.getPlayer().getDojoPoints() +"��#k\r\n����������������������������\r\n #r#L0#�����г�#l  #g#L1#Ԫ����ֵ#l #k #L13#ȫ��תְ#l#r #L14#���¸���#l\r\n\r\n #b#L3#��������#l  #L4#��ͨ�̵�#l  #L15#���м���#l #L5#�ֿ����#l \r\n #L6#��������#l  #L8#ϡ�е�װ#l  #g#L16#��Ա����#l#k #b#L9#�����޸�#l \r\n #L10#��Ҫת��#l  #L11#�����Ա#l  #L12##r����ȫ��#l #L20##r������Ʒ#l\r\n #L22##r���Ṻ��#l  #L23##b������#l  #L24##b��Ҫ����#l\r\n\r\n#L21##r��Ϊ�㻻��#l")
    } else if (status == 1) {
           if (selection == 0) {
			   if(cm.getChar().getMapId() >=910000000 && cm.getChar().getMapId() <=910000022) {
			   cm.sendOk("���Ѿ��������г�,���贫��!!");
			   }else{
			   cm.warp(910000000);
			   }
           cm.dispose(); 
    }else if  (selection == 1) {
	   cm.sendTVlink("");
	   cm.sendOk("���ڴ���վ.����г�ֵ!!");
	   cm.dispose();
    }else if  (selection == 2) {//תְ
	   cm.openNpc(9310057);
    }else if  (selection == 3) {//����      
           cm.openNpc(9310059);		           
    }else if  (selection == 4) {//װ��
	   cm.openShop(223);
	   cm.dispose(); 
    }else if  (selection == 15) {//װ��
	   cm.openShop(225); 
	   cm.dispose();
    }else if  (selection == 5) {//�ֿ�
           cm.openNpc(9030100); 
    }else if  (selection == 6) {//����
	   cm.openNpc(9000083); 
    }else if  (selection == 7) {//˵����ɫ     
           cm.openNpc(9310074);  	     
    }else if  (selection == 8) {//����
           cm.openNpc(9310070);  
    }else if  (selection == 10) {//����
           cm.openNpc(2112003); 
    }else if  (selection == 11) {//����
           cm.openNpc(9105004);   
    }else if  (selection == 12) {//����
           cm.openNpc(9330092);    
    }else if  (selection == 13) {//����
           cm.openNpc(9310057);  
    }else if  (selection == 33) {//����
           cm.openNpc(9010023);        
    }else if  (selection == 14) {//����
           cm.openNpc(1061009);   
    }else if  (selection == 16) {//����
           cm.openNpc(2151008); 
    }else if  (selection == 20) {//����
           cm.openNpc(2159008); 
    }else if  (selection == 21) {//����
           cm.openNpc(9310071); 
    }else if  (selection == 22) {//����
           cm.openNpc(1013104);
    }else if  (selection == 23) {//����
           cm.openNpc(9000041);
    }else if  (selection == 24) {//xiuxian
           cm.openNpc(2084001);
    }else if  (selection == 9) {//�����޸�
	   var statup = new java.util.ArrayList();
	   var p = cm.c.getPlayer();
	   if(p.getExp() < 0){
		   p.setExp(0)
		   statup.add (org.tools.Pair(net.sf.odinms.client.MapleStat.EXP, java.lang.Integer.valueOf(0))); 
		   p.getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup,cm.getChar().getJob().getId()));
		   cm.sendOk("����ֵ���޸����");
		   cm.dispose();
	   }else{
		   cm.sendOk("���ľ���ֵ����,�����޸�!");
		   cm.dispose();
	   }
    }else if  (selection == 10) {
	cm.getChar().maxAllSkill();
	cm.sendOk("���Ѿ���������!!!");
	cm.dispose();
}
}
}
}



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
   cm.sendSimple("����������������������������\r\n           #n#dʣ��:#r"+player.GetMoney()+"Ԫ��   #d���ػ���:#r"+ cm.getPlayer().getDojoPoints() +"��#k\r\n����������������������������\r\n #L1#���ӷ�����#l#r #L2#���ӷ�����# #L3#���ӷ�����#l  \r\n\r\n#L4#�������#l  #L5#ϡ������#l #L6#ϡ��ñ��#l #L7#�̳���Ʒ#l")
    } else if (status == 1) {
           if (selection == 0) {
			   if(cm.getChar().getMapId() >=910000000 && cm.getChar().getMapId() <=910000022) {
			   cm.sendOk("���Ѿ��������г�,���贫��!!");
			   }else{
			   cm.warp(910000000);
			   }
           cm.dispose(); 
    }else if  (selection == 1) {
           cm.openNpc(2121020); 
    }else if  (selection == 2) {//����
           cm.openNpc(9270056); 
    }else if  (selection == 3) {//����
           cm.openNpc(2120001); 
    }else if  (selection == 4) {//����
           cm.openNpc(2150008); 
    }else if  (selection == 5) {//����
           cm.openNpc(2150010); 
    }else if  (selection == 6) {//����
           cm.openNpc(2150009); 
    }else if  (selection == 7) {//����
           cm.openNpc(1033233); 
    }else if  (selection == 8) {//����
           cm.openNpc(9000020); 
}
}
}
}



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
   cm.sendSimple("#e���ã���ӭ����#rð�յ�������#k������BTװ���ۻ�Ա:\r\n#bע��:���µĽ��׶���Ҫ#r#eԪ��#n#b,����㻹��֪��λ��,�뵽�ٷ���ֵ�ɣ�\r\n#rע�⣺btװ����������ϣ����ڰ���ᱻ��Ŷ��32767���ܽ���զ��!\r\n#L1#�بp�T����Ҫ����ȫ���Ե�BTñ��#l\r\n#L2#�بp�T����Ҫ����ȫ���Ե�BTѫ��#l\r\n#L3#�بp�T����Ҫ����ȫ���Ե�BT����#l\r\n#L4#�بp�T����Ҫ����ȫ���Ե�BT����#l\r\n#L5#�بp�T����Ҫ����ȫ���Ե�BT��ָ#l\r\n#L6#�بp�T����Ҫ����ȫ���Ե�BT����#l\r\n#L7#�بp�T����Ҫ����ȫ���Ե�BT����#l\r\n#L8#�بp�T����Ҫ����ȫ���Ե�BT����#l");
    } else if (status == 1) {
           if (selection == 0) {
      cm.sendOk("#ewww.xf4060.com");
            cm.dispose();
    }else if  (selection == 1) {
           cm.openNpc(1300006);
    }else if  (selection == 2) {
           cm.openNpc(1300007);
    }else if  (selection == 3) {
           cm.openNpc(1300009); 
    }else if  (selection == 4) {
           cm.openNpc(1300010); 
    }else if  (selection == 5) {
           cm.openNpc(1300003); 
    }else if  (selection == 6) {
           cm.openNpc(1200001); 
    }else if  (selection == 7) {
           cm.openNpc(1200005); 
    }else if  (selection == 8) {
           cm.openNpc(9330065); 
    }else if  (selection == 9) {
           cm.openNpc(9330076); 
    }else if  (selection == 10) {
           cm.openNpc(2101018); 
    }else if  (selection == 11) {
           cm.openNpc(9310084); 
          

}
}      
}
}




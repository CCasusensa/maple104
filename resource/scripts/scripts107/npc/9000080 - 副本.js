/**
	�ű�����: 		NPC
           ������                     һֽ������ؼ
           ����ָ����              �ҷ�ʱ�г���
 **/

function start() {

    if(cm.countMonster()< 1) {
        cm.sendSimple ("����ɮ�˴��,��������һ��#v4001433#�ҾͰ����ٻ�������.\r\n���������ȼ�����ѡ��BOSS����.\r\n#L0#���������� - ����80����#l\r\n#L1#�м������� - ����100����#l\r\n#L2#�߼������� - ����120����#l\r\n#L3#�ռ������� - ����140����#l\r\n#L4#�뿪");
    } else {
        cm.sendOk("һ�β��ܳ�����ֻBOSS,���뿪�����½���.\r\n#L4#�뿪")
    }
}
function action(mode, type, selection) {
    cm.dispose();
    if (selection == 0) {//����
    if (cm.haveItem(4001433) < 1 ){  
        cm.sendOk("�������#v4001433#�Ҳ��ܰ����ٻ�.")
        cm.dispose();
       }else{	
        cm.gainItem(4001433,-1);
	cm.changeMusic("Bgm10/Eregos");
        cm.spawnMob(9500390, 908, 513);   
        cm.dispose();
        }
} else if (selection == 1) {//�м�
    if (cm.haveItem(4001433) < 1 ){  
        cm.sendOk("�������#v4001433#�Ҳ��ܰ����ٻ�.")
        cm.dispose();
}else{	
        cm.gainItem(4001433,-1);
        cm.changeMusic("Bgm10/Eregos");
        cm.spawnMob(9500391, 908, 513);   
        cm.dispose();
        }
} else if (selection == 3) {//�߼�
    if (cm.haveItem(4001433) < 1 ){  
        cm.sendOk("�������#v4001433#�Ҳ��ܰ����ٻ�.")
        cm.dispose();
}else{	
        cm.gainItem(4001433,-1);
        cm.changeMusic("Bgm10/Eregos");
        cm.spawnMob(9500392, 908, 513);   
        cm.dispose();
        }
} else if (selection == 2) {//�ռ�
    if (cm.haveItem(4001433) < 1 ){  
        cm.sendOk("�������#v4001433#�Ҳ��ܰ����ٻ�.")
        cm.dispose();
}else{	
        cm.gainItem(4001433,-1);
        cm.changeMusic("Bgm10/Eregos");
        cm.spawnMob(8800200, 908, 513);   
        cm.dispose();
        }
} else if (selection == 4) {//�뿪��ͼ
            cm.warp(252020000, 0);
            cm.dispose();				
        }
    }
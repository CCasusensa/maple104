function start() {
	if (cm.getChar().getMapId() == 541010010){
	    if(cm.countMonster()<0){
		 cm.sendSimple ("��������սBOSS,��ѡ�������������������ٻ�!!������������ս,�ҿ��԰����ͻ��г�! \r\n \r\n    #L8##r�ص��г�#l");
	    }else{
   		 cm.sendSimple ("#b����������������������������\r\n��������������ܻ�������BOSS������ñ�������Ľ���������ҪС��Ŷ��һ�����һ�������ġ�                \r\n����������������������������\r\n             ��#v4000382#��Ҫ300��#v4000382#��\r\n               #L0#��ս���鴬��#l\r\n\r\n         #L5##r�鿴����#l      #L8##r�ص��г�#l");
	    }
	} else {
	    cm.sendOk("����ʲô�£���Ҫ�����ҵ�����������Ҫ�㹻������")
	}
}
function action(mode, type, selection) {
cm.dispose();
if (selection == 0) {
       if(cm.haveItem(4000382,300) == true) {
        cm.gainItem(4000382,-300);
        cm.summonMob(9420513,1000000000, 400000000, 1);//chuanzhang     
cm.serverNotice("�����鴬�����桻����"+ cm.getChar().getName() +"���������Ĵ������ֱ�����鴬���ϳ�,Ѫ��ɱ��Ƭ�ײ���~!"); 
        }else{
        cm.sendOk("��Ǹ��û��300����ɫ�������Ҳ���Ϊ���ٻ�"); 
	cm.dispose();}
} else if (selection == 1) {
       if(cm.haveItem(4000382,200) == true) {
        cm.gainItem(4000382,-200);
cm.serverNotice("�������󹫹��桻����"+ cm.getChar().getName() +"���������Ķ��ѿ�ʼ��ս�������ռ�BOSS��Ѫ�潫�� ����");  
        cm.summonMob(9400591, 100000000, 40000, 1);//Ѫ�潫��     
        }else{
        cm.sendOk("��Ǹ��û��200����ɫ�������Ҳ���Ϊ���ٻ�"); 
	cm.dispose();}
} else if (selection == 2) {
       if(cm.haveItem(4000382,200) == true) {
        cm.gainItem(4000382,-200);
cm.serverNotice("����Ա���桻����"+ cm.getChar().getName() +"���������Ķ��ѿ�ʼ��ս�������ռ�BOSS����������  ����"); 
        cm.summonMob(9400589, 100000000, 40000, 1);//��������     
        }else{
        cm.sendOk("��Ǹ��û��300����ɫ�������Ҳ���Ϊ���ٻ�"); 
	cm.dispose();}
} else if (selection == 3) { 
        if (!cm.haveItem(4001009,1)) {
        cm.sendOk("��Ǹ����û��1��#v4001009#�޷�Ϊ�㿪��");
        } else if (!cm.haveItem(4001010,1)) {
        cm.sendOk("��Ǹ����û��1��#v4001010#�޷�Ϊ�㿪��"); 
        } else if (!cm.haveItem(4001011,1)) {
        cm.sendOk("��Ǹ����û��1��#v4001011#�޷�Ϊ�㿪��"); 
        } else if (!cm.haveItem(4001012,1)) {
        cm.sendOk("��Ǹ����û��1��#v4001012#�޷�Ϊ�㿪��"); 
        } else if (!cm.haveItem(4001013,1)) {
        cm.sendOk("��Ǹ����û��1��#v4001013#�޷�Ϊ�㿪��"); 
        }else{
	cm.gainItem(4001009,-1);
	cm.gainItem(4001010,-1);
	cm.gainItem(4001011,-1);
	cm.gainItem(4001012,-1);
	cm.gainItem(4001013,-1);
	cm.gainItem(4021010,1);
	cm.dispose();
}
} else if (selection == 4) {
        if (!cm.haveItem(4021010,1)) {
        cm.sendOk("��Ǹ����û��200��#v4021010#�޷�Ϊ�㿪��");
cm.dispose();
    } else {
cm.warp(803001400, 0);
cm.dispose();
}
}else if (selection == 8) {
    cm.warp(910000000, 0);
    cm.dispose();
}else if (selection == 5) {
cm.sendOk("#r����BOSS֮��BOSS��������Ʒ��:\r\n\r\n#v1402017##v1002995##v1052209##v1402116##v5150040##v1052275##v1003151##v1003109##v1072448#  ");      
cm.dispose();
} else if (selection == 6) {
       if(cm.haveItem(4000382,1000) == true) {
        cm.gainItem(4000382,-1000);
cm.serverNotice("����Ա���桻����"+ cm.getChar().getName() +"���������Ķ��ѿ�ʼ��ս�������ռ�BOSS����֮ħŮ  ����"); 
        cm.summonMob(9400590, 10000000, 40000, 1);//��������     
        }else{
        cm.sendOk("��Ǹ��û��1000����ɫ�������Ҳ���Ϊ���ٻ�"); 
	cm.dispose();}
} else if (selection == 7) {
       if(cm.haveItem(4000382,1000) == true) {
        cm.gainItem(4000382,-1000);
cm.serverNotice("����Ա���桻����"+ cm.getChar().getName() +"���������Ķ��ѿ�ʼ��ս�������ռ�BOSS����Ӱɱ��  ����"); 
        cm.summonMob(9400593, 100000000, 40000, 1);//��������     
        }else{
        cm.sendOk("��Ǹ��û��1000����ɫ�������Ҳ���Ϊ���ٻ�"); 
	cm.dispose();}
} else if (selection == 8) {
	if(cm.getMeso() <= 50000000) {
        cm.sendOk("��Ǹ��û��5000���Ҳ���Ϊ���ٻ�"); 
        }else{ 
        cm.gainMeso(-50000000);
        cm.summonMob(9400300, 100000000, 175000000, 1);//��ɮ
	cm.dispose(); } 
} else if (selection == 9) {
	if(cm.getMeso() <= 50000000) {
        cm.sendOk("��Ǹ��û��5000���Ҳ���Ϊ���ٻ�"); 
        }else{ 
        cm.gainMeso(-50000000);
        cm.summonMob(9400549, 1, 200300000, 1);//����
	cm.dispose(); } 
} 
}

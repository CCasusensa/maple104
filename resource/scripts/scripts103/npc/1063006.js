function start() {
	if (cm.getChar().getMapId() == 932000100){
	    if(cm.countMonster()>0){
		 cm.sendSimple ("������������һ��ÿ�˱���Ҫ5��#v4170024##r\r\n<ע���������ѩ��> \r\n \r\n   #b#L0#������һ��#l");
	    }else{
   		 cm.sendSimple ("#b#v4170024##v4170024##v4170024##v4170024##v4170024##v4170024##v4170024##v4170024##v4170024##v4170024##v4170024##v4170024##v4170024##v4170024# #v4170024##v4170024##v4170024##v4170024##v4170024##v4170024# #v4170024##v4170024##v4170024##v4170024#\r\n������������һ��ÿ�˱���Ҫһ��\r\n\r\n     #r������������һ��ÿ�˱���Ҫ20��\r\n    #r#L9#��Ҫ�����#l#k    #b#L0#������һ��#l#k\r\n\r\n       #g#L8#�ص��г�#l");
	    }
	} else {
	    cm.sendOk("����ʲô�£���Ҫ�����ҵ�����������Ҫ�㹻������")
	}
}
function action(mode, type, selection) {
cm.dispose();
if (selection == 0) {
        if (!cm.haveItem(4170024,5)) {
        cm.sendOk("��Ǹ����û�����#v4170024#������ռ�#r˧��(��Ů),�����~!");
        } else if (!cm.haveItem(4170024,5)) {
	cm.gainItem(4170024,-5);
        }else{
	cm.gainItem(4170024,-5);
        cm.warp(932000200,0); 
    cm.dispose();
	cm.dispose();}
} else if (selection == 1) {
       if(cm.haveItem(4001126,200) == true) {
        cm.gainItem(4001126,-200);
cm.serverNotice("�������󹫹��桻����"+ cm.getChar().getName() +"���������Ķ��ѿ�ʼ��ս�������ռ�BOSS��Ѫ�潫�� ����");  
        cm.summonMob(9400591, 100000000, 40000, 1);//Ѫ�潫��     
        }else{
        cm.sendOk("��Ǹ��û��200����Ҷ���Ҳ���Ϊ���ٻ�"); 
	cm.dispose();}
} else if (selection == 2) {
       if(cm.haveItem(4001126,200) == true) {
        cm.gainItem(4001126,-200);
cm.serverNotice("����Ա���桻����"+ cm.getChar().getName() +"���������Ķ��ѿ�ʼ��ս�������ռ�BOSS����������  ����"); 
        cm.summonMob(9400589, 100000000, 40000, 1);//��������     
        }else{
        cm.sendOk("��Ǹ��û��200����Ҷ���Ҳ���Ϊ���ٻ�"); 
	cm.dispose();}
} else if (selection == 3) { 
        if (!cm.haveItem(4001009,1)) {
        cm.sendOk("��Ǹ����û��1��#v4001009#�޷�Ϊ�㿪��#e#r(�г�9����ȡ)");
        } else if (!cm.haveItem(4001010,1)) {
        cm.sendOk("��Ǹ����û��1��#v4001010#�޷�Ϊ�㿪��#e#r(�г�9����ȡ)"); 
        } else if (!cm.haveItem(4001011,1)) {
        cm.sendOk("��Ǹ����û��1��#v4001011#�޷�Ϊ�㿪��#e#r(�г�9����ȡ)"); 
        } else if (!cm.haveItem(4001012,1)) {
        cm.sendOk("��Ǹ����û��1��#v4001012#�޷�Ϊ�㿪��#e#r(�г�9����ȡ)"); 
        } else if (!cm.haveItem(4001013,1)) {
        cm.sendOk("��Ǹ����û��1��#v4001013#�޷�Ϊ�㿪��#e#r(�г�9����ȡ)"); 
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
        cm.sendOk("��Ǹ����û��200��#v4021010#�޷�Ϊ�㿪��#e#r(�г�9����ȡ)");
cm.dispose();
    } else {
cm.warp(803001400, 0);
cm.dispose();
}
}else if (selection == 8) {
    cm.warp(910000000, 0);
    cm.dispose();
}else if (selection == 5) {
cm.sendOk("#r����BOSS֮��BOSS��������Ʒ��:\r\n\r\n#v4170024##v4031454##v4170024##v4032164#");      
cm.dispose();
} else if (selection == 6) {
       if(cm.haveItem(4001126,1000) == true) {
        cm.gainItem(4001126,-1000);
cm.serverNotice("����Ա���桻����"+ cm.getChar().getName() +"���������Ķ��ѿ�ʼ��ս�������ռ�BOSS����֮ħŮ  ����"); 
        cm.summonMob(9400590, 10000000, 40000, 1);//��������     
        }else{
        cm.sendOk("��Ǹ��û��1000����Ҷ���Ҳ���Ϊ���ٻ�"); 
	cm.dispose();}
} else if (selection == 7) {
       if(cm.haveItem(4001126,1000) == true) {
        cm.gainItem(4001126,-1000);
cm.serverNotice("����Ա���桻����"+ cm.getChar().getName() +"���������Ķ��ѿ�ʼ��ս�������ռ�BOSS����Ӱɱ��  ����"); 
        cm.summonMob(9400593, 100000000, 40000, 1);//��������     
        }else{
        cm.sendOk("��Ǹ��û��1000����Ҷ���Ҳ���Ϊ���ٻ�"); 
	cm.dispose();}
} else if (selection == 8) {
	if(cm.getMeso() <= 50000000) {
        cm.sendOk("��Ǹ��û��5000���Ҳ���Ϊ���ٻ�"); 
        }else{ 
        cm.gainMeso(-50000000);
        cm.summonMob(9400300, 100000000, 175000000, 1);//��ɮ
	cm.dispose(); } 
} else if (selection == 9) {
	if(cm.getMeso() <= 1) {
        cm.sendOk("��Ǹ��û��1ð�ձҡ��Ҳ���Ϊ���ٻ�"); 
        }else{ 
        cm.gainMeso(-1);
        cm.summonMob(9001025,100000000, 1, 1);//����
	cm.dispose(); } 
} 
}
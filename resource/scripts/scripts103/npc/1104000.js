function start() {
	if (cm.getChar().getMapId() == 240060201){
	    if(cm.countMonster()<0){
		 cm.sendSimple ("��������սBOSS,��ѡ�������������������ٻ�!!������������ս,�ҿ��԰����ͻ��г�! \r\n \r\n    #L8##r�ص��г�#l");
	    }else{
   		 cm.sendSimple ("#b����������������������������\r\n��������������ܻ�������BOSS������ñ�������Ľ��������������������������������\r\n\r\n     #r��ɱ��?�ȴ����������°�(�������г�9��)\r\n           ��#v4001558##v4001559##v4001560##v4001561##v4001562#��\r\n               #b#L0#��ս��ħŮ��#l\r\n\r\n      #e#r��ս��ħŮ�ѡ�\r\n\r\n         #L5##r�鿴����#l      #L8##r�ص��г�#l");
	    }
	} else {
	    cm.sendOk("����ʲô�£���Ҫ�����ҵ�����������Ҫ�㹻������")
	}
}
function action(mode, type, selection) {
cm.dispose();
if (selection == 0) {
        if (!cm.haveItem(4001558,1)) {
        cm.sendOk("��Ǹ����û��1��#v4001558#�޷�Ϊ�㿪��#e#r(�г�9����ȡ)");
        } else if (!cm.haveItem(4001559,1)) {
        cm.sendOk("��Ǹ����û��1��#v4001559#�޷�Ϊ�㿪��#e#r(�г�9����ȡ)"); 
        } else if (!cm.haveItem(4001560,1)) {
        cm.sendOk("��Ǹ����û��1��#v4001560#�޷�Ϊ�㿪��#e#r(�г�9����ȡ)"); 
        } else if (!cm.haveItem(4001561,1)) {
        cm.sendOk("��Ǹ����û��1��#v4001561#�޷�Ϊ�㿪��#e#r(�г�9����ȡ)"); 
        } else if (!cm.haveItem(4001562,1)) {
        cm.sendOk("��Ǹ����û��1��#v4001562#�޷�Ϊ�㿪��#e#r(�г�9����ȡ)");  
        }else{
	cm.gainItem(4001558,-1);
	cm.gainItem(4001559,-1);
	cm.gainItem(4001560,-1);
	cm.gainItem(4001561,-1);
	cm.gainItem(4001562,-1);
        cm.summonMob(9001039,100000000, 40000, 1);    
        cm.summonMob(9001042,100000000, 40000, 1);     
        cm.summonMob(9001040,100000000, 40000, 1);    
        cm.summonMob(9001041,150000000, 40000, 1);   
cm.serverNotice("��BOSSϵͳ������"+ cm.getChar().getName() +"���Ѿ��ٻ�����ս��ħŮ��,߳�ȵ��� ����ȵĺÿ�~!");
cm.getC().getChannelServer().broadcastPacket(net.sf.odinms.tools.MaplePacketCreator.serverNotice(0x10,cm.getC().getChannel(),"����ս��ħŮ�ѡ�"+" : "+"����ĵ�����,������Ҫ�ú���ʰ��.~!"))	
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
cm.sendOk("#r����BOSS֮��BOSS��������Ʒ��:\r\n\r\n#v1302059##v1322052##v1332021##v1312031##v1122076##v1702274##v1402091##v1102248##v1003114##v1702208##v1402037##v3010046##v3010047##v3010096##v3010107##v3010108##v3010147##v3010128##v3010200#  �ö���...");      
cm.dispose();     

} 
}

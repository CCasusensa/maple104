function start() {
var ico11 = "#fEffect/CharacterEff/1112903/0/0#";
	if (cm.getChar().getMapId() == 910510100){
	    if(cm.countMonster()<0){
		 cm.sendSimple ("...");
	    }else{
   		 cm.sendSimple ("\r\n                 ��������\r\n            #r���һ���Ѽ�4������\r\n           #v4000422##v4000423##v4000424##v4000425#\r\n         ���ɻ�һ��ϡ����߻�������\r\n\r\n       #L1##r�ٻ�#l#L2##r�ٻ�#l#L3##r�ٻ�#l#L4##r�ٻ�#l\r\n       #L5##r�ٻ�#l#L16##r�ٻ�#l#L6##r�ٻ�#l#L7##r�ٻ�#l\r\n       #L8##r�ٻ�#l#L9##r�ٻ�#l#L10##r�ٻ�#l#L11##r�ٻ�#l\r\n       #L12##r�ٻ�#l#L13##r�ٻ�#l#L14##r�ٻ�#l#L15##r�ٻ�#l");
	    }
	} else {
	    cm.sendOk("����ʲô�£���Ҫ�����ҵ�����������Ҫ�㹻������")
	}
}
function action(mode, type, selection) {
cm.dispose();
if (selection == 0) {
        if (!cm.haveItem(4032532,1)) {
        cm.sendOk("#");
        } else if (!cm.haveItem(4032532,1)) {
        }else{
	cm.dispose();}



} if (selection == 1) {
        if (!cm.haveItem(3994471,1)) {
        cm.sendOk("��Ǹ����û��1��#v3994471#�޷�Ϊ�㿪��#e#r(��һ��,����1����)"); 
        }else{
	cm.gainItem(3994471,-1);
        cm.summonMob(9410080,45000, 40000, 1);     
cm.serverNotice("������ϵͳ������"+ cm.getChar().getName() +"���Ѿ��ٻ�����ɫ����boss");
	cm.dispose();}



} if (selection == 2) {
        if (!cm.haveItem(3994471,1)) {
        cm.sendOk("��Ǹ����û��1��#v3994471#�޷�Ϊ�㿪��#e#r(��һ��,����1����)"); 
        }else{
	cm.gainItem(3994471,-1);
        cm.summonMob(9500386,2000000000, 40000, 1);     
cm.serverNotice("������ϵͳ������"+ cm.getChar().getName() +"���Ѿ��ٻ�����ɫ����boss");
	cm.dispose();}


} if (selection == 3) {
        if (!cm.haveItem(3994471,1)) {
        cm.sendOk("��Ǹ����û��1��#v3994471#�޷�Ϊ�㿪��#e#r(��һ��,����1����)"); 
        }else{
	cm.gainItem(3994471,-1);
        cm.summonMob(9500386,2000000000, 40000, 1);     
cm.serverNotice("������ϵͳ������"+ cm.getChar().getName() +"���Ѿ��ٻ�����ɫ����boss");
	cm.dispose();}


} if (selection == 4) {
        if (!cm.haveItem(3994471,1)) {
        cm.sendOk("��Ǹ����û��1��#v3994471#�޷�Ϊ�㿪��#e#r(��һ��,����1����)"); 
        }else{
	cm.gainItem(3994471,-1);
        cm.summonMob(9410080,45000, 40000, 1);     
cm.serverNotice("������ϵͳ������"+ cm.getChar().getName() +"���Ѿ��ٻ�����ɫ����boss");
	cm.dispose();}


} if (selection == 5) {
        if (!cm.haveItem(3994471,1)) {
        cm.sendOk("��Ǹ����û��1��#v3994471#�޷�Ϊ�㿪��#e#r(��һ��,����1����)"); 
        }else{
	cm.gainItem(3994471,-1);
        cm.summonMob(9500386,2000000000, 40000, 1);     
cm.serverNotice("������ϵͳ������"+ cm.getChar().getName() +"���Ѿ��ٻ�����ɫ����boss");
	cm.dispose();}


} if (selection == 6) {
        if (!cm.haveItem(3994471,1)) {
        cm.sendOk("��Ǹ����û��1��#v3994471#�޷�Ϊ�㿪��#e#r(��һ��,����1����)"); 
        }else{
	cm.gainItem(3994471,-1);
        cm.summonMob(9500386,2000000000, 40000, 1);     
cm.serverNotice("������ϵͳ������"+ cm.getChar().getName() +"���Ѿ��ٻ�����ɫ����boss");
	cm.dispose();}

} if (selection == 7) {
        if (!cm.haveItem(3994471,1)) {
        cm.sendOk("��Ǹ����û��1��#v3994471#�޷�Ϊ�㿪��#e#r(��һ��,����1����)"); 
        }else{
	cm.gainItem(3994471,-1);
        cm.summonMob(5250007,2000000000, 40000, 1);     
cm.serverNotice("������ϵͳ������"+ cm.getChar().getName() +"���Ѿ��ٻ�����ɫ����boss");
	cm.dispose();}

} if (selection == 8) {
        if (!cm.haveItem(3994471,1)) {
        cm.sendOk("��Ǹ����û��1��#v3994471#�޷�Ϊ�㿪��#e#r(��һ��,����1����)"); 
        }else{
	cm.gainItem(3994471,-1);
        cm.summonMob(9400754,2000000000, 40000, 1);     
cm.serverNotice("������ϵͳ������"+ cm.getChar().getName() +"���Ѿ��ٻ�����ɫ����boss");
	cm.dispose();}



} if (selection == 9) {
        if (!cm.haveItem(3994471,1)) {
        cm.sendOk("��Ǹ����û��1��#v3994471#�޷�Ϊ�㿪��#e#r(��һ��,����1����)"); 
        }else{
	cm.gainItem(3994471,-1);
        cm.summonMob(9500386,2000000000, 40000, 1);     
cm.serverNotice("������ϵͳ������"+ cm.getChar().getName() +"���Ѿ��ٻ�����ɫ����boss");
	cm.dispose();}


} if (selection == 10) {
        if (!cm.haveItem(3994471,1)) {
        cm.sendOk("��Ǹ����û��1��#v3994471#�޷�Ϊ�㿪��#e#r(��һ��,����1����)"); 
        }else{
	cm.gainItem(3994471,-1);
        cm.summonMob(9500386,2000000000, 40000, 1);     
cm.serverNotice("������ϵͳ������"+ cm.getChar().getName() +"���Ѿ��ٻ�����ɫ����boss");
	cm.dispose();}

} if (selection == 11) {
        if (!cm.haveItem(3994471,1)) {
        cm.sendOk("��Ǹ����û��1��#v3994471#�޷�Ϊ�㿪��#e#r(��һ��,����1����)"); 
        }else{
	cm.gainItem(3994471,-1);
        cm.summonMob(5250007,2000000000, 40000, 1);     
cm.serverNotice("������ϵͳ������"+ cm.getChar().getName() +"���Ѿ��ٻ�����ɫ����boss");
	cm.dispose();}

} if (selection == 12) {
        if (!cm.haveItem(3994471,1)) {
        cm.sendOk("��Ǹ����û��1��#v3994471#�޷�Ϊ�㿪��#e#r(��һ��,����1����)"); 
        }else{
	cm.gainItem(3994471,-1);
        cm.summonMob(9400754,2000000000, 40000, 1);     
cm.serverNotice("������ϵͳ������"+ cm.getChar().getName() +"���Ѿ��ٻ�����ɫ����boss");
	cm.dispose();}


} if (selection == 13) {
        if (!cm.haveItem(3994471,1)) {
        cm.sendOk("��Ǹ����û��1��#v3994471#�޷�Ϊ�㿪��#e#r(��һ��,����1����)"); 
        }else{
	cm.gainItem(3994471,-1);
        cm.summonMob(9500386,2000000000, 40000, 1);     
cm.serverNotice("������ϵͳ������"+ cm.getChar().getName() +"���Ѿ��ٻ�����ɫ����boss");
	cm.dispose();}


} if (selection == 14) {
        if (!cm.haveItem(3994471,1)) {
        cm.sendOk("��Ǹ����û��1��#v3994471#�޷�Ϊ�㿪��#e#r(��һ��,����1����)"); 
        }else{
	cm.gainItem(3994471,-1);
        cm.summonMob(9500386,2000000000, 40000, 1);     
cm.serverNotice("������ϵͳ������"+ cm.getChar().getName() +"���Ѿ��ٻ�����ɫ����boss");
	cm.dispose();}

} if (selection == 15) {
        if (!cm.haveItem(3994471,1)) {
        cm.sendOk("��Ǹ����û��1��#v3994471#�޷�Ϊ�㿪��#e#r(��һ��,����1����)"); 
        }else{
	cm.gainItem(3994471,-1);
        cm.summonMob(5250007,2000000000, 40000, 1);     
cm.serverNotice("������ϵͳ������"+ cm.getChar().getName() +"���Ѿ��ٻ�����ɫ����boss");
	cm.dispose();}


} if (selection == 16) {
        if (!cm.haveItem(3994471,1)) {
        cm.sendOk("��Ǹ����û��1��#v3994471#�޷�Ϊ�㿪��#e#r(��һ��,����1����)"); 
        }else{
	cm.gainItem(3994471,-1);
        cm.summonMob(9500386,2000000000, 40000, 1);     
cm.serverNotice("������ϵͳ������"+ cm.getChar().getName() +"���Ѿ��ٻ�����ɫ����boss");
	cm.dispose();}


}
}
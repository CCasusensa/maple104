function start() {

if (cm.getChar().getMapId() == 803001400){
    cm.sendSimple ("#b���������Ҫ���BOSS�����������ϵõ�ͨ��ƾ֤�����ſ���ͨ��\r\n#L0#��һ�»�ȡ����#l    #L1#ȥ������#l    #r#L2#�鿴����#l");
    } else {
    cm.sendOk("����ʲô�£���Ҫ�����ҵ�����������Ҫ�㹻������")
    }
}
function action(mode, type, selection) {
cm.dispose();
if (selection == 0) {
        if (cm.haveItem(4021010,1)) {
	cm.gainItem(4021010, -1);
        //cm.setbsb(10);
        cm.serverNotice("���콱���桻������"+ cm.getChar().getName() +"��ͨ���ˣ�糺���ʿ���������ˣ������Ľ���");  
	cm.gainItem(4001102,1);
        }else{
        cm.sendOk("��Ǹ����û��#v4021010#�޷�Ϊ�㿪��");
	cm.dispose();}
} else if (selection == 1) {
	if(cm.haveItem(4001102)) {
        cm.warp(103000000, 0);
	cm.dispose();
        }else{ 
        cm.sendOk("�㲻�ñ����Ҫ����"); 
	cm.dispose(); } 
} else if (selection == 2) {
        cm.sendOk("������һ���˿��Ի���һ��#v4001102#������ȥ����������Ȩ�￪���������������ӣ��м��ʻ��#rħ��������װ��Ŷ"); 
	cm.dispose(); 
}  
}

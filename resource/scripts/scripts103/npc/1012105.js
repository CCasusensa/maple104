/* Ms. Tan 
	Henesys Skin Change.
*/
var status = 0;
var skin = Array(0, 1, 2, 3, 4);

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 0 && status == 0) {
	cm.dispose();
	return;
    } else {
	status++;
    }

    if (status == 0) {
	cm.sendNext("�ۣ���ã���ӭ����#m"+cm.getMapId()+"#! �����ӵ��#b#t5153015##k���ҾͿ��԰��㻻һ���·�ɫŶ~");
    } else if (status == 1) {
	cm.sendStyle("���������⿪���Ļ����ɲ鿴�������Ч���ޣ��뻻��ʲô����Ƥ���أ���ѡ��", skin,5153015);
    } else if (status == 2){
	if (cm.setAvatar(5153015, skin[selection]) == 1) {
	    cm.sendOk("�����,����������̾����·�ɫ��!");
	} else {
	    cm.sendOk("�������㲢û�����ǵĻ�Ա��,�ҿ��²��ܸ��㻤��,�Һܱ�Ǹ.�����ȹ����.");
	}
	cm.dispose();
    }
}

/*һת������NPC

*/


var status = 0;

function start() {
	cm.sendSimple("#b#e[���ƻ������ִ��ռ�]��#rҪ�ռ���ſ��Ի���ս����˹֤��[#v4032906#]#k #b#e[���ƻ������ִ��ռ�] \r\n �ռ�#v4000642#��150����\n#v4000643#��150����\n#v4000644#��188��\r\n\r\n#b#L0#���Ѿ��ռ��˵����ȡ#l\r\n\r\n#b#L1#��û���ռ���ɵ�������ռ���ͼ#l\r\n\r\n#r#L2#���Ѿ����ж�����׼�����˽���BOSS��ͼ#l\r\n\r\n");
}
function action(mode, type, selection) {
	cm.dispose();
	if (selection == 0) {
        if (!cm.haveItem(4000642,150)) {
        cm.sendOk("��Ǹ����û��150��#v4000642#�޷�Ϊ�㻻ȡ#e#r(�뵽�ƻ������ִ��ռ�)");
        } else if (!cm.haveItem(4000643,150)) {
        cm.sendOk("��Ǹ����û��150��#v4000643#�޷�Ϊ�㻻ȡ#e#r(�뵽�ƻ������ִ��ռ�)"); 
        } else if (!cm.haveItem(4000644,188)) {
        cm.sendOk("��Ǹ����û��188��#v4000644#�޷�Ϊ�㻻ȡ#e#r(�뵽�ƻ������ִ��ռ�)"); 
} else {
	cm.gainItem(4000642,-150);
	cm.gainItem(4000643,-150);
	cm.gainItem(4000644,-188);
	cm.gainItem(4032906,1);
cm.sendOk("��~!HO����ô����ռ����ˣ��Ͻ�ȥ��ս����˹�ɡ���������");
cm.dispose();}
}else if (selection == 1) {
    cm.warp(271010000, 0);
    cm.dispose();
} else if (selection == 2) {
        if (!cm.haveItem(4032906,1)) {
        cm.sendOk("��Ǹ����û��#v4032906#���޷������ͼ#e#r)");
} else {
    cm.warp(802000311, 0);
cm.sendOk("��~!HO����ô����ռ����ˣ���Щ�Ǹ���ģ��򿪰�������ϲ����");
cm.dispose(); }
			}
	}
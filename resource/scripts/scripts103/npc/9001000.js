/*һת������NPC

*/


var status = 0;

function start() {
	cm.sendSimple("#b#e[��ս�������]��#rҪ�ռ�400��[#v4001126#]#k #b#e[��ս�������϶�Ҫ��������] \r\n\r\n\r\n#b#L2#��ս�������#l\r\n\r\n");
}
function action(mode, type, selection) {
	cm.dispose();
	if (selection == 0) {
        if (!cm.haveItem(4000642,150)) {
        cm.sendOk("��Ǹ����û��150��#v4000642#�޷�Ϊ�㻻ȡ#e#r(�뵽�ƻ������ִ��ռ�)");
        } else if (!cm.haveItem(4000643,150)) {
        cm.sendOk("��Ǹ����û��150��#v4000643#�޷�Ϊ�㻻ȡ#e#r(�뵽�ƻ������ִ��ռ�)"); 
        } else if (!cm.haveItem(4000644,200)) {
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
        if (!cm.haveItem(4001126,400)) {
        cm.sendOk("��Ǹ����û��400��#v4001126#���޷������ͼ#e#r)");
        }else{
    cm.warp(931020011, 0);
cm.dispose();}
			}
	}
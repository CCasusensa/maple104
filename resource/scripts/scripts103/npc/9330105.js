/*һת������NPC

*/


var status = 0;

function start() {
	cm.sendSimple("#b#e������Ҫ#r�ռ���1��#v3994060##v3994067##v3994065##v3994060##v3994059##v3994072##v 3994065#\r\n\r\n\r\n#b#L2#������һ��#l\r\n\r\n");
}
function action(mode, type, selection) {
	cm.dispose();
	if (selection == 0) {
        if (!cm.haveItem(3994060,2)) {
        cm.sendOk("��Ǹ����û��#v3994060#�޷�Ϊ������һ��.�� ���������ռ�)");
        } else if (!cm.haveItem(3994067,1)) {
        cm.sendOk("��Ǹ����û��#v3994067#�޷�������һ��.�� ���������ռ�)"); 
        } else if (!cm.haveItem(3994065,2)) {
        cm.sendOk("��Ǹ����û��#v3991006#�޷�������һ��.�� ���������ռ�)"); 
        } else if (!cm.haveItem(3994059,1)) {
        cm.sendOk("��Ǹ����û��#v3991000#�޷�������һ��.�� ���������ռ�)"); 
        } else if (!cm.haveItem(3994072,1)) {
        cm.sendOk("��Ǹ����û��#v3991013#�޷�������һ��.�� ���������ռ�"); 
} else {
	cm.gainItem(3991001,-2);
	cm.gainItem(3991006,-2);
	cm.gainItem(3991008,-1);
	cm.gainItem(3991000,-1);
	cm.gainItem(3991013,-1);
	cm.gainItem(3994039,1);
        cm.warp(749020900, 0);
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
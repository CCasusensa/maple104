/*һת����NPC

*/


var status = 0;

function start() {
	cm.sendSimple("#e�Ǻ��ǵ�û���������Ѿ����ڽ���ѧԱ�ˣ���Щ����Ӧ���������飬�����ں�æ�кܶ�������Ҫ�����ȥ��ɡ�#r���������һ����һЩ���������ǳ��õĶ������ǵ���װ������20����λŶ��#k \r\n #L0#�ռ�#v4000016#��30�����ʺϵȼ�0-30��#l \r\n #L1#�ռ�#v4000106#��300�����ʺϵȼ�30-70��#l \r\n #L2#�ռ�#v4000051#��500�����ʺϵȼ�70-100��#l \r\n #L3#�ռ�#v4000241#��500�����ʺϵȼ�100-130��#l \r\n\r\n\r\n ������ʾ��\r\n 1��#v4000016#�ڡ����ִ塿ѵ��������ţ�õ� \r\n 2��#v4000106#�ڡ���߳ǡ����Դ�����ܵõ�\r\n 3��#v4000051#�ڡ�����ѩ�򡿿��Դ��ǵõ�\r\n 4��#v4000241#�ڡ���ľ�塿���Դ�����õ�");
}
function action(mode, type, selection) {
	cm.dispose();
	if (selection == 0) {
if(cm.haveItem(4000016,30) == true) {
cm.gainItem(4000016,-30); 
cm.gainItem(1332001,1);
cm.gainItem(1472011,1);
cm.gainItem(1002177,1);
cm.gainItem(1082046,1);
cm.gainItem(1072105,1);
cm.gainItem(1040061,1);
cm.gainItem(1041075,1);
cm.gainItem(1060052,1);
cm.gainItem(1061044,1);
cm.sendOk("��~!HO����ô����ռ����ˣ���Щ�Ǹ���ģ��򿪰�������ϲ����");
cm.dispose();
} else {
cm.sendOk("��û��������Ķһ����ߣ����ռ����������ɡ�"); 
cm.dispose(); }
			} else if (selection == 1) {
if(cm.haveItem(4000106,300) == true) {
cm.gainItem(4000106,-300); 
cm.gainItem(1332018,1);
cm.gainItem(1472027,1);
cm.gainItem(1002281,1);
cm.gainItem(1082095,1);
cm.gainItem(1072162,1);
cm.gainItem(1040107,1);
cm.gainItem(1041101,1);
cm.gainItem(1060087,1);
cm.gainItem(1061101,1);

cm.sendOk("��~!HO����ô����ռ����ˣ���Щ�Ǹ���ģ��򿪰�������ϲ����");
cm.dispose();
} else {
cm.sendOk("��û��������Ķһ����ߣ����ռ����������ɡ�"); 
cm.dispose(); }
			} else if (selection == 2) {
if(cm.haveItem(4000051,500) == true) {
cm.gainItem(4000051,-500); 
cm.gainItem(1332023,1);
cm.gainItem(1472031,1);
cm.gainItem(1002327,1);
cm.gainItem(1082120,1);
cm.gainItem(1072173,1);
cm.gainItem(1040109,1);
cm.gainItem(1060098,1);
cm.gainItem(1061106,1);
cm.sendOk("��~!HO����ô����ռ����ˣ���Щ�Ǹ���ģ��򿪰�������ϲ����");
cm.dispose();
} else {
cm.sendOk("��û��������Ķһ����ߣ����ռ����������ɡ�"); 
cm.dispose(); }
			} else if (selection == 3) {
if(cm.haveItem(4000241,500) == true) {
cm.gainItem(4000241,-500); 
cm.gainItem(1332027,1);
cm.gainItem(1472033,1);
cm.gainItem(1002326,1);
cm.gainItem(1082142,1);
cm.gainItem(1072192,1);
cm.gainItem(1040116,1);
cm.gainItem(1040118,1);
cm.gainItem(1060106,1);
cm.gainItem(1061106,1);
cm.sendOk("��~!HO����ô����ռ����ˣ���Щ�Ǹ���ģ��򿪰�������ϲ����");
cm.dispose();
} else {
cm.sendOk("��û��������Ķһ����ߣ����ռ����������ɡ�"); 
cm.dispose(); }
			}
	}
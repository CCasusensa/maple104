/*һת������NPC

*/


var status = 0;

function start() {
	cm.sendSimple("#e�Ǻ��ǵ�û���������Ѿ����ڽ���ѧԱ�ˣ���Щ����Ӧ���������飬�����ں�æ�кܶ�������Ҫ�����ȥ��ɡ�#r���������һ����һЩ�����֡��ǳ��õĶ������ǵ���װ������20����λŶ��#k \r\n #L0#�ռ�#v4000016#��30�����ʺϵȼ�0-30��#l \r\n #L1#�ռ�#v4000106#��300�����ʺϵȼ�30-70��#l \r\n #L2#�ռ�#v4000051#��500�����ʺϵȼ�70-100��#l \r\n #L3#�ռ�#v4000241#��500�����ʺϵȼ�100-130��#l \r\n\r\n\r\n ������ʾ��\r\n 1��#v4000016#�ڡ����ִ塿ѵ��������ţ�õ� \r\n 2��#v4000106#�ڡ���߳ǡ����Դ�����ܵõ�\r\n 3��#v4000051#�ڡ�����ѩ�򡿿��Դ��ǵõ�\r\n 4��#v4000241#�ڡ���ľ�塿���Դ�����õ�");
}
function action(mode, type, selection) {
	cm.dispose();
	if (selection == 0) {
if(cm.haveItem(4000016,30) == true) {
cm.gainItem(4000016,-30); 
cm.gainItem(1452005,1);
cm.gainItem(1462014,1);
cm.gainItem(1002161,1);
cm.gainItem(1082050,1);
cm.gainItem(1072079,1);
cm.gainItem(1050052,1);
cm.gainItem(1051039,1);
cm.sendOk("��~!HO����ô����ռ����ˣ���Щ�Ǹ���ģ��򿪰�������ϲ����");
cm.dispose();
} else {
cm.sendOk("��û��������Ķһ����ߣ����ռ����������ɡ�"); 
cm.dispose(); }
			} else if (selection == 1) {
if(cm.haveItem(4000106,300) == true) {
cm.gainItem(4000106,-300); 
cm.gainItem(1452010,1);
cm.gainItem(1462009,1);
cm.gainItem(1002289,1);
cm.gainItem(1082107,1);
cm.gainItem(1072164,1);
cm.gainItem(1050062,1);
cm.gainItem(1051063,1);
cm.sendOk("��~!HO����ô����ռ����ˣ���Щ�Ǹ���ģ��򿪰�������ϲ����");
cm.dispose();
} else {
cm.sendOk("��û��������Ķһ����ߣ����ռ����������ɡ�"); 
cm.dispose(); }
			} else if (selection == 2) {
if(cm.haveItem(4000051,500) == true) {
cm.gainItem(4000051,-500); 
cm.gainItem(1452015,1);
cm.gainItem(1462011,1);
cm.gainItem(1002278,1);
cm.gainItem(1082109,1);
cm.gainItem(1072183,1);
cm.gainItem(1050078,1);
cm.gainItem(1050076,1);
cm.sendOk("��~!HO����ô����ռ����ˣ���Щ�Ǹ���ģ��򿪰�������ϲ����");
cm.dispose();
} else {
cm.sendOk("��û��������Ķһ����ߣ����ռ����������ɡ�"); 
cm.dispose(); }
			} else if (selection == 3) {
if(cm.haveItem(4000241,500) == true) {
cm.gainItem(4000241,-500); 
cm.gainItem(1452026,1);
cm.gainItem(1462022,1);
cm.gainItem(1002403,1);
cm.gainItem(1082126,1);
cm.gainItem(1072203,1);
cm.gainItem(1050090,1);
cm.gainItem(1051084,1);
cm.sendOk("��~!HO����ô����ռ����ˣ���Щ�Ǹ���ģ��򿪰�������ϲ����");
cm.dispose();
} else {
cm.sendOk("��û��������Ķһ����ߣ����ռ����������ɡ�"); 
cm.dispose(); }
			}
	}
/*һת��ʦNPC

*/


var status = 0;

function start() {
	cm.sendSimple("#e�Ǻ��ǵ�û���������Ѿ����ڽ���ѧԱ�ˣ���Щ��ʦӦ���������飬�����ں�æ�кܶ�������Ҫ�����ȥ��ɡ�#r���������һ����һЩ����ʦ���ǳ��õĶ���������װ������20����λ#k \r\n #L0#�ռ�#v4000016#��30�����ʺϵȼ�0-30��#l \r\n #L1#�ռ�#v4000106#��300�����ʺϵȼ�30-70��#l \r\n #L2#�ռ�#v4000051#��500�����ʺϵȼ�70-100��#l \r\n #L3#�ռ�#v4000241#��500�����ʺϵȼ�100-130��#l \r\n\r\n\r\n ������ʾ��\r\n 1��#v4000016#�ڡ����ִ塿ѵ��������ţ�õ� \r\n 2��#v4000106#�ڡ���߳ǡ����Դ�����ܵõ�\r\n 3��#v4000051#�ڡ�����ѩ�򡿿��Դ��ǵõ�\r\n 4��#v4000241#�ڡ���ľ�塿���Դ�����õ�");
}
function action(mode, type, selection) {
	cm.dispose();
	if (selection == 0) {
if(cm.haveItem(4000016,30) == true) {
cm.gainItem(4000016,-30); 
cm.gainItem(1372001,1);
cm.gainItem(1382018,1);
cm.gainItem(1002037,1);
cm.gainItem(1072075,1);
cm.gainItem(1050031,1);
cm.gainItem(1051027,1);
cm.sendOk("��~!HO����ô����ռ����ˣ���Щ�Ǹ���ģ��򿪰�������ϲ����");
cm.dispose();
} else {
cm.sendOk("��û��������Ķһ����ߣ����ռ����������ɡ�"); 
cm.dispose(); }

			} else if (selection == 1) {
if(cm.haveItem(4000106,300) == true) {
cm.gainItem(4000106,-300); 
cm.gainItem(1372035,1);
cm.gainItem(1382007,1);
cm.gainItem(1002252,1);
cm.gainItem(1072157,1);
cm.gainItem(1050069,1);
cm.gainItem(1050068,1);
cm.sendOk("��~!HO����ô����ռ����ˣ���Щ�Ǹ���ģ��򿪰�������ϲ����");
cm.dispose();
} else {
cm.sendOk("��û��������Ķһ����ߣ����ռ����������ɡ�"); 
cm.dispose(); }

			} else if (selection == 2) {
if(cm.haveItem(4000051,500) == true) {
cm.gainItem(4000051,-500); 
cm.gainItem(1372016,1);
cm.gainItem(1382013,1);
cm.gainItem(1002271,1);
cm.gainItem(1072179,1);
cm.gainItem(1050073,1);
cm.gainItem(1050072,1);
cm.sendOk("��~!HO����ô����ռ����ˣ���Щ�Ǹ���ģ��򿪰�������ϲ����");
cm.dispose();
} else {
cm.sendOk("��û��������Ķһ����ߣ����ռ����������ɡ�"); 
cm.dispose(); }

			} else if (selection == 3) {
if(cm.haveItem(4000241,500) == true) {
cm.gainItem(4000241,-500); 
cm.gainItem(1372009,1);
cm.gainItem(1382008,1);
cm.gainItem(1002363,1);
cm.gainItem(1072207,1);
cm.gainItem(1050027,1);
cm.gainItem(1050028,1);
cm.sendOk("��~!HO����ô����ռ����ˣ���Щ�Ǹ���ģ��򿪰�������ϲ����");
cm.dispose();
} else {
cm.sendOk("��û��������Ķһ����ߣ����ռ����������ɡ�"); 
cm.dispose(); }

			}
	}
/* Denma the Owner
	Henesys VIP Eye Change.
*/
var status = -1;
var facetype;
var card = 5152057;

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 0) {
	cm.dispose();
	return;
    } else {
	status++;
    }

    if (status == 0) {
	cm.sendNext("��~�����!�������#b#t5152057##k���ҿ���Ϊ���������������");
    } else if (status == 1) {
	var face = cm.getPlayerStat("FACE");

	if (cm.getPlayerStat("GENDER") == 0) {
	    facetype = [20000,20001,20002,20003,20004,20005,20006,20007,20008,20009,20010,20011,20012,20013,20014,20015,20016,20017,20018,20019,20020,20021,20022,20023,20025,20026,20027,20028];
	} else {
	    facetype = [21000,21001,21002,21003,21004,21005,21006,21007,21008,21009,21010,21011,21012,21013,21014,21015,21016,21017,21018,21019,21020,21021,21022,21023,21025,21026];
	}
	for (var i = 0; i < facetype.length; i++) {
	    facetype[i] = facetype[i] + face % 1000 - (face % 100);
	}
	cm.sendStyle("�ҿ��Ըı��������,���������ڿ�����Ư��. ��Ϊʲô�����Ÿı�����? �������#b#t5152057##k,�ҽ������ı��������,��ôѡ��һ������Ҫ�������Ͱ�!", facetype,5152057);
    } else if (status == 2){
	if (cm.setAvatar(5152057, facetype[selection]) == 1) {
	    cm.sendOk("����,���������һ���ϲ�����������!");
	} else {
	    cm.sendOk("�������㲢û�����ǵĸ߼���Ա��,�ҿ��²��ܸ��������������,�Һܱ�Ǹ.�����ȹ����.");
	}
	cm.dispose();
    }
}

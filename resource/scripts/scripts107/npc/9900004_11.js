var status = 0;
//��ӵĻ�ȡ��Ʒ��ò�Ҫһ�λ�ó������������ո�
var duiitems=new Array(
new Array(4000000,1,4000001,1),//new Array(�һ���Ʒ,�һ�����,��Ҫ��Ʒ,��Ҫ����),
new Array(4000001,2,4000000,2),
new Array(4000000,3,4000001,3)
);


function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status == 1 && mode == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
        cm.dispose();
    }
    if (status == 0) {
		var where = "ѡ������Ҫ�һ�����Ʒ��";
			for (var i = 0; i < duiitems.length; i++) {
				where += "\r\n#L" + i + "##b�һ�#v"+duiitems[i][0]+"# #r" + duiitems[i][1] + "#b �� ��Ҫ #v"+duiitems[i][2]+"##r " + duiitems[i][3] + "#b�� #k#l";
			}
        cm.sendSimple(where);
    } else if (status == 1) {
		var is=selection;

		var newitem=duiitems[is][0];
		var newcount=duiitems[is][1];
		var needitemid=duiitems[is][2];
		var needcount=duiitems[is][3];

		if(cm.haveSpaceForId(newitem)){
			if(cm.haveItem(needitemid,needcount)){
			cm.gainItem(needitemid,-needcount);
			cm.gainItem(newitem,newcount);
			cm.sendOk("ף����һ��ɹ�");		
			}else{
				cm.sendOk("�����Ʒ��������\r\n��Ҫ#r"+needcount+"#k��#v"+needitemid+"#...");
			}
		}else{
			cm.sendOk("#b������������Ŀռ������ɶһ�����ȷ�����ı����ռ��Ƿ�����ܹ�װ���»�õ���Ʒ#k");
		}
		
		cm.dispose();
    }
}
var status = 0;
var items = Array(
Array(3010100,10),
Array(3010128,2),
Array(3010139,2),
Array(3010170,2),
Array(3010131,2),
Array(3010172,2),
Array(3010029,1),
Array(3010030,1),
Array(3010031,1),
Array(3010032,1),
Array(3010033,1),
Array(3010046,2),
Array(3010047,2),
Array(3010077,2),
Array(3010093,2),
Array(3010098,2),
Array(3012002,2),
Array(3012003,2),
Array(3012006,2),
Array(3012010,2),
Array(3012011,2),
Array(3010175,2),
Array(3010161,3),
Array(3010177,2),
Array(3010196,3),
Array(3010212,5),
Array(3010221,1),
Array(3010218,3),
Array(3010188,1),
Array(3010188,1),
Array(3010184,3),
Array(3010181,5),
Array(3010180,5),
Array(3010166,2),
Array(3010151,2),
Array(3010140,2),
Array(3010156,3),
Array(3010187,1),
Array(3010053,2),
Array(3010183,2),
Array(3010182,2),
Array(3010168,3),
Array(3010135,2),
Array(3010070,7),
Array(3010071,5),
Array(3010073,4)
);
var selectedItems = -1;
var item = 4031326;
var number = 0;

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (status == 0 && mode == 0) {
			cm.dispose();
			return;
		} else if (status == 2 && mode == 0) {
			cm.dispose();
		}
		if (mode == 1)
			status++;
		else
			status--;
                                          if (status == 0) {
cm.sendSimple("��ӭ����099����ð�յ�����û�������������,����ϵƮ�����Ա��ӣ�#k#b\r\n#L1# ������#t4031326#�һ��������ӡ�\r\n#L2# �������һ��#t4031326# (10000��)")
										  }else if (status == 1){
											  if (selection == 1){
												  var selStr = "��ѡ������һ��Ľ�Ʒ��#b";
												  for (var i = 0; i < items.length; i++) {
						selStr += "\r\n#L" + i + "##z" + items[i][0] + "# ("+items[i][1]+"��#t4031326#)#l";
					}
												cm.sendSimple(selStr);
	}else if (selection == 2){
	if(cm.getChar().getNX() >= 10000) {
            cm.gainNX(-10000); 
	cm.gainItem(4031326,1);
        cm.sendOk("����ɹ���"); 
        }else{
        cm.sendOk("�Բ�����û���㹻�ĵ㣬���ܸ���һ�����"); 
	}
			 cm.dispose()
}
										  }else if (status == 2){
											  selectedItems = selection;
											  number = items[selectedItems][1];
											  itemss = items[selectedItems][0];
cm.sendYesNo("���Ѿ������ã�ȷ��Ҫ�һ� #b#z" + items[selectedItems][0] + "##k��\r\n��ô�㽫Ҫ���� #b" + number +"#k��#t4031326#��");
										  }else if (status == 3){
											  if (cm.itemQuantity(item) < number) {//���С��Ҫ�һ���
											  cm.sendOk("�Բ�����û���㹻��#t4031326#");
											cm.dispose();
										} else {
											cm.gainItem(item,-number);
				cm.gainItem(items[selectedItems][0], 1);
				cm.sendOk("�һ��ɹ�����ʹ����"+number+"��#t4031326#��")
				cm.serverNotice(" [" + cm.getPlayer() + "] �ڷ�Ҷļ������ʹ�ò��������һ��˺������ӡ�")
				cm.dispose();
		}
		}//status
	}//mode
}//function

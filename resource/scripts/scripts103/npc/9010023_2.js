/* ===========================================================
			ע�� itemQuantity()
	�ű�����: 		NPC
	���ڵ�ͼ:		
	�ű�����:		
=============================================================
���ű�Դ��������������Ϊ��������֮�á�����Ȩ������ϵ���ǣ����ǽ��ڵ�һʱ��ɾ����
*/

var a = 0;
var level = Array(0,201);
var items = Array(4000463,4000463);
var name;

function start() {
	a = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (mode == 1)
			a++;
		else
			a--;
			if (a == -1){
				cm.dispose();
			}else if (a == 0) {
					if (cm.getPlayerStat("LVL") <= 0){
					name = items[0];
					}else if (cm.getPlayerStat("LVL") <= 201){
						name = items[1];
					}else{
						name = null;	
					}
					if (name != null){
					cm.sendGetText("#b��������������۽��ױҵ�������\r\n#r Ŀǰӵ��#k��"+cm.itemQuantity(name)+"��#r�����ױҡ�")
					}else{
					cm.sendOk("�Բ����޷�������")	
					cm.dispose();
					}
			}else if (a == 1){
				if (cm.getText() < 1){
					cm.sendOk("����1 �����ֿ������롣")
					cm.dispose();
				}else if (cm.itemQuantity(name) >= cm.getText() * 1){
					cm.gainItem(name,-cm.getText() * 1);
					player.GainMoney(cm.getText() * 500);
					cm.sendOk("�һ��ɹ��������"+cm.getText() * 500+"���")
					cm.dispose();
				}else{
					cm.sendOk("�Բ�����û���㹻����Ʒ���ۡ�");
					cm.dispose();
				}
	}//status
}
}
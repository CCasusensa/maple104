/* ===========================================================
			ע��
	�ű�����: 		QUEST
	�ű�����:		�ʺ��Ҷ�һ�����
=============================================================
����ʱ�䣺2010��8��9�� 15:25:26
������Ա����о
=============================================================
*/

/*
1112401 - 6�������ݽ�ָ - Ϊ��ףð�յ�6�����ն����ƵĽ�ָ.
1112402 - 6����������ָ - Ϊ��ףð�յ�6�����ն����ƵĽ�ָ.
1112403 - 6����������ָ - Ϊ��ףð�յ�6�����ն����ƵĽ�ָ.
1112400 - 6����������ָ - Ϊ��ףð�յ�6�����ն����ƵĽ�ָ.

2041132 - 6�����ָ���� - ������6�����ָ��,ʹ��ָ�����Ա�û�仵.\n�ɹ���:100%

С�ں� <

����NPC��Ľ�ϰ棩

*/

var a = -1;

function end(mode, type, selection) {//������
	if (mode == -1) {
		qm.dispose();
	} else {
		if (mode == 1)
			a++;
		else
			a--;
			if(a == -1){
				qm.dispose();
			}else if (a == 0) {
				 qm.sendNext("��֪����ð�յ�����������ֻ�����вʺ��Ҷ������������ȡΪ��ףð�յ��������ն����ƵĽ�ָ��")  
			}else if (a == 1){
				 qm.sendSimple("#h #��������ر�����ӣ����Ƿ�ܸ����أ�#b\r\n\r\n#L0# ����Ҫ��ȡ6�������ƽ�ָ��\r\n#L1# ����Ҫ��ȡ6�����ָ���ᡣ")
			}else if (a == 2){
				 var ii = net.sf.odinms.server.MapleItemInformationProvider.getInstance();
			for(var i = 1;i<=5;i++){
				if(qm.getPlayer().getInventory(net.sf.odinms.client.MapleInventoryType.getByType(i)).isFull()){
					qm.sendOk("������Ӧ�������а������ճ�һ��");
					qm.dispose();
					return;
				}
			}
			 if (selection == 0){//������ȡ6�������ƽ�ָ
											  if (qm.itemQuantity(4032733) >=10){//�ʺ��Ҷ
											  var rand = Math.floor(Math.random() * 4);
											if (rand == 1) {
											qm.gainItem(1112441, 1); //  6�������ݽ�ָ - Ϊ��ףð�յ�6�����ն����ƵĽ�ָ.
											} else if (rand == 2) {
											qm.gainItem(1112442, 1); //  6����������ָ - Ϊ��ףð�յ�6�����ն����ƵĽ�ָ.
											} else if (rand == 3) {
											qm.gainItem(1112443, 1); //  6����������ָ - Ϊ��ףð�յ�6�����ն����ƵĽ�ָ.
											} else if (rand == 4) {
											qm.gainItem(1112440, 1); //  6����������ָ - Ϊ��ףð�յ�6�����ն����ƵĽ�ָ.
											}
											qm.sendOk("��ȡ�ɹ��������ٸ���˵������ȡ�������ָ���ᡣ")
											qm.gainItem(4032733,-10)
											qm.dispose();
											  }else{
												  qm.sendOk("��Ĳʺ��Ҷ���񲻹��ɣ�����Դ��Թ����òʺ��Ҷ��")
												  qm.dispose();
											  }
											}else if (selection == 1){
												if (qm.itemQuantity(4032733) >=10){//�ʺ��Ҷ
										      qm.sendNext("���Ѿ��ռ���10���ʺ��Ҷ��ѽ���õ�һ��#t2041132#�͸��㡣")
											  qm.gainItem(2041132,1)
											  qm.gainItem(4032733,-10)
												 qm.dispose();
												}else{
											qm.sendOk("��Ĳʺ��Ҷ���񲻹��ɣ�����Դ��Թ����òʺ��Ҷ��")
											qm.dispose();
												}
											}//selection
											qm.forceCompleteQuest();
		}//a
	}//mode
}//function

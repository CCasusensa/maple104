/* ===========================================================
			ע��(qm.sendSimple\qm.itemQuantity(5420008))
	�ű�����: 		QUEST
	�ű�����:		���ӵ����� 2
	�����������qm.forceCompleteQuest();
	������������qm.forceStartQuest();
=============================================================
����ʱ�䣺
������Ա����о
for(var i = 1;i<=5;i++){
				if(qm.getPlayer().getInventory(net.sf.odinms.client.MapleInventoryType.getByType(i)).isFull()){
					qm.startPopMessage(qm.getPlayer().getId(), "���������㣬���顣");
					qm.dispose();
					return;
				}
			}
=============================================================
*/
var a = -1;
// ����ID,�һ���������Ҫ��Ʒ����,�Ƿ�����ʱ��1Ϊ��0Ϊ���ǣ��Ƿ������ֲᣬ1Ϊ��0Ϊ����
/*
var Items = Array(
Array(2000019,50,100,0,0),//����ҩˮ
Array(2100068,1,300,0,0),//Сѩ���ٻ���
Array(1002788,1,700,0,0),//��ɫè���
Array(1002996,1,900,0,0),//���㵰��ñ
Array(1012070,1,1000,1,0),//��ݮѩ�⣬��ʱ
Array(1012161,1,1000,0,0),//����ı���
Array(3010163,1,2000,0,0),//������
Array(3010111,1,3000,0,0),//��������
Array(1122018,1,3500,0,0),//��ů��Χ��
Array(1051151,1,5000,0,0),//ӣ��������ȹ
Array(3010131,1,6000,0,0),//̰����è��
Array(3010132,1,6000,0,0),//����������
Array(3010133,1,7000,0,0),//������
Array(2290023,1,1000,0,1),//[���ֲ�]��������
Array(2290041,1,1000,0,1),//[���ֲ�]�콵����
Array(2290049,1,2000,0,1),//[���ֲ�]ʥ������
Array(2290053,1,2000,0,1),//[���ֲ�]���۾���
Array(2290057,1,1500,0,1),//[���ֲ�]�����
Array(2290061,1,1500,0,1),//[���ֲ�]�������
Array(2290065,1,1500,0,1),//[���ֲ�]���о���
Array(2290085,1,1500,0,1),//[���ֲ�]�����������
Array(2290125,1,5000,0,1)//[���ֲ�]ð�յ���ʿ30
);
*/

var Items = Array(
Array(2000019,50,100,0,0),//����ҩˮ
Array(2022245,100,300,0,0),//����ֹͣ��
Array(1002788,1,700,0,0),//��ɫè���
Array(1002798,1,900,0,0),//ͷ�����
Array(1012070,1,1000,1,0),//��ݮѩ�⣬��ʱ
Array(1002799,1,1000,0,0),//�¹��
Array(3010013,1,2000,0,0),//�Ƴ�����
Array(3010025,1,3000,0,0),//��Ҷ�����
Array(1122018,1,3500,0,0),//��ů��Χ��
Array(1051151,1,5000,0,0),//ӣ��������ȹ
Array(1051152,1,5000,0,1),//[���ֲ�]��������
Array(1051153,1,5000,0,1)//[���ֲ�]�콵����
);

var seleItem = -1;
var needitem = 4032056;


function start(mode, type, selection) {//������
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
				qm.sendNext("���ǽ������ܵĻ��ͼ������볡ȯ��")
			}else if (a == 1) {
				qm.sendNextPrev("�μӵķ����ܼ򵥣����ǵ�ð�յ����ؽ���#b�����ͼ#k�ĵط������Ҹ�����볡ȯ������Щ��ͼ��Ȼ��ͨ�����͵�����ƶ�����ƽ����ͬ������������ͼ�С�")
			}else if (a == 2) {
				qm.sendNextPrev("������ͼ�ķ羰����ǰһ����ֻ�����ᷢ��������#b���ܵĶ���#k��")
			}else if (a == 3) {
				qm.sendNextPrev("#b���ܵĶ���#k�����Ǿ��ǽ���#b#t4032056##k��ˮ���������Ѽ������ܶ��ˮ�����һ�����Ѽ��������͸�����������")
			}else if (a == 4) {
				qm.sendNextPrev("����Ҫ���б��λ�����Զ������ͼ�����ý�����һ�µ���������ο�һ�¡� 1,�볡һ��ֻ��ͣ��10���ӡ�����10����֮���Զ������ 2,ÿ�������Խ��������ͼ10�Ρ� 3,�����״̬���޷��볡�� 4,�ڵ�ͼ���޷�ʹ��ĳЩ�ض����ܡ�")
			}else if (a == 5) {
				qm.sendNextPrev("�ţ��Ѽ�#b#t4032056##k���Ի��ʲô���š������׼���Ľ����ܶ��ޣ���Ҫ�������ӣ���ʱ�������㡣�����ռ�����һ���������������ң�����Ȼ֪����ʲô��������")
			}else if (a == 6) {
				qm.sendNextPrev("��й����ݣ���鿴�ٷ���ҳ����ػ��ҳ����")
			}else if (a == 7) {
				qm.sendNextPrev("���ǻ������ӵ�е�#t4032056#�ĸ�����������õ���������ڻ�ȡ����֮ǰ����ȷ��һ�µ��ߵĸ�����#t4032056#���Դ������У�ϣ�����ܻ����������Ѽ������Ի�ȡ���ǵ�������㹻��ĵ��ߡ�")
			}else if (a == 8) {
				qm.sendNextPrev("���ˣ���ȥ�Ѽ����߰ɡ��һ���������㡫")
				qm.forceStartQuest()
				qm.dispose();
		}//status
	}//mode
}//function



function end(mode, type, selection) {//�ύ����
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
				var selStr = "����Ҫ��һ���أ�#b";
				for (var i = 0; i < Items.length; i++) {
						if (Items[i][0] == 1012070){
						selStr += "\r\n#L" + i + "##i"+needitem+"# : "+Items[i][2]+" (���� : #i"+Items[i][0]+"# - 30��Ȩ)#l";
						}else if (Items[i][0] == 2000019){
							selStr += "\r\n#L" + i + "##i"+needitem+"# : "+Items[i][2]+" (���� : #i"+Items[i][0]+"# x50)#l";
						}else{
							selStr += "\r\n#L" + i + "##i"+needitem+"# : "+Items[i][2]+" (���� : #i"+Items[i][0]+"# )#l";
						}
					}
					qm.sendSimple(selStr);
			}else if (a == 1){
				seleItem = selection;
				if (Items[seleItem][0] == 1012070){
					qm.sendYesNo("��"+Items[seleItem][2]+"��#t"+needitem+"#�һ� #t"+Items[seleItem][0]+"# ��30��Ȩ�� ��");
				}else if (Items[seleItem][0] == 2000019){
					qm.sendYesNo("��"+Items[seleItem][2]+"��#t"+needitem+"#�һ� #t"+Items[seleItem][0]+"# x50 ��");
				}else{
				qm.sendYesNo("��"+Items[seleItem][2]+"��#t"+needitem+"#�һ� #t"+Items[seleItem][0]+"# ��");
				}
			}else if (a == 2){
				for(var i = 1;i<=5;i++){
				if(qm.getPlayer().getInventory(net.sf.odinms.client.MapleInventoryType.getByType(i)).isFull()){
					qm.startPopMessage(qm.getPlayer().getId(), "���������㣬���顣");
					qm.dispose();
					return;
				}
			}
				if (qm.itemQuantity(needitem) < Items[seleItem][2]){//���С������
						qm.sendNext("���#t"+needitem+"#�������㡣")
						qm.dispose();
				}else{
						if (Items[seleItem][0] == 1012070){//����ǲ�ݮѩ��
						qm.gaintimeItem(Items[seleItem][0], 30 * 24 * 60 * 60 * 1000, true)
						}else{
							qm.gainItem(Items[seleItem][0],Items[seleItem][1])
						}
						qm.gainItem(needitem,-Items[seleItem][2]);
						qm.sendOk("�һ��ɹ��ˣ����顣")
						qm.forceCompleteQuest();
						//qm.serverNotice(0,""+cm.getPlayer.getName()+" ������������㸱������"+Items[seleItem][2]+"����Ҷˮ��������"+Items[seleItem][1]+"��")
						qm.dispose();
				}
				
		}//status
	}//mode
}//functionion

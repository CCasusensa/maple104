var status = 0;
var item = 
Array(
			Array(2210029,700,3), //�ƽ�����������
			Array(1092030,700,1), //��Ҷ��
			Array(2022485,700,2), //��Ծ�� +20��30�����ڳ���
			Array(2022488,700,3), //Max HP 15% Max MP 15%��30�����ڳ���
			Array(2100103,700,3), //��������ٻ���_����
			Array(1092008,750,1), //����
			Array(2210000,750,3), //Ģ���еĵ���
			Array(2210001,750,3), //ƯƯ��ĵ���
			Array(2210002,750,3), //�������˵ĵ���
			Array(2210010,750,3), //���˱��α���ҩˮ
			Array(2210011,850,3), //���˱��α���ҩˮ
			Array(1032009,850,1), //�Ʒ�����
			Array(2210012,850,3), //�������
			Array(2210013,850,3), //�������
			Array(1302028,600,1), //����ɡ
			Array(2210019,600,3), //��ɫ���ӱ���ҩˮ
			Array(2210020,600,3), //�ۺ����ӱ���ҩˮ
			Array(1302028,600,1), //����ɡ
			Array(1302061,550,1), //���ٱ���
			Array(2210024,550,3), //���Ǳ�����
			Array(1302061,550,1), //���ٱ���
			Array(1302061,550,1), //���ٱ���
			Array(1302061,550,1), //���ٱ���
			Array(1302063,500,1), //ȼ�յĻ��浶
			Array(1032035,700,1), //��Ҷ����
			Array(2210009,700,3), //�շ����Ƕ�������ż
			Array(1032035,700,1), //��Ҷ����
			Array(2101118,700,3), //��ʨ�����
			Array(2101132,700,3), //��ɫ�ʵ���
			Array(1002508,700,1), //��Ҷͷ��
			Array(2210008,700,3), //�����ǹ�
			Array(1002508,700,1), //��Ҷͷ��
			Array(2101022,700,3), //�ƽ��ٻ���
			Array(1002508,700,1), //��Ҷͷ��
			Array(1302058,700,1), //ð�յ�ɡ
			Array(2022071,850,3), //̫��սʿ
			Array(1302058,700,1), //ð�յ�ɡ
			Array(1302058,700,1), //ð�յ�ɡ
			Array(1302058,700,1), //ð�յ�ɡ
			Array(1002418,700,1), //�ϱ�ֽͷ��
			Array(1002418,700,1), //�ϱ�ֽͷ��
			Array(1002418,700,1), //�ϱ�ֽͷ��
			Array(1002418,700,1), //�ϱ�ֽͷ��
			Array(1032010,700,1), //���Ķ���
			Array(1032010,700,1), //���Ķ���
			Array(1032010,700,1), //���Ķ���
			Array(1032010,700,1), //���Ķ���
			Array(1122003,700,1), //��ɫ�������
			Array(1122003,700,1), //��ɫ�������
			Array(1122003,700,1), //��ɫ�������
			Array(1122003,700,1), //��ɫ�������
			Array(1122003,700,1), //��ɫ�������
			Array(1122003,700,1), //��ɫ�������
			Array(2022141,800,1), //������
			Array(2022141,800,1), //������
			Array(2022141,800,1), //������
			Array(2022141,800,1), //������
			Array(2022141,800,1), //������
			Array(2022139,800,1), //�ļ�����
			Array(2022139,800,1), //�ļ�����
			Array(2022139,800,1), //�ļ�����
			Array(2022139,800,1), //�ļ�����
			Array(2022139,800,1), //�ļ�����
			Array(2022176,900,1), //����ҩˮ
			Array(2022176,900,1), //����ҩˮ
			Array(2022176,900,1), //����ҩˮ
			Array(2022176,900,1), //����ҩˮ
			Array(2022245,800,1), //����ֹͣ��
			Array(2022245,800,1), //����ֹͣ��
			Array(2022245,800,1), //����ֹͣ��
			Array(2022245,800,1), //����ֹͣ��
			Array(2022245,800,1), //����ֹͣ��
			Array(2210006,600,1), //�ʺ���ţ��
			Array(2210006,600,1), //�ʺ���ţ��
			Array(2210006,600,1), //�ʺ���ţ��
			Array(2210006,600,1), //�ʺ���ţ��
			Array(2210006,600,1), //�ʺ���ţ��
			Array(2210024,600,1), //���Ǳ�����
			Array(2210024,600,1), //���Ǳ�����
			Array(2210024,600,1), //���Ǳ�����
			Array(2210024,600,1), //���Ǳ�����
			Array(1402014,100,1), //�¶ȼ�
			Array(3010068,80,1), //¶ˮ����
			Array(3010093,80,1), //�����Ļ�����
			Array(3010044,80,1), //ͬһ��ɡ��
			Array(1442020,500,1), //���鿪ɽ��
			Array(2043803,200,1), //���ʹ����سɾ�
			Array(1122000,20,1) //��������
);

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (mode == 0) {
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			if (cm.haveItem(5220040)) {
				cm.sendYesNo("��ӭ�μӱ���ϵͳ���ʹ�÷�����ĵ���ɻ�����벻������Ʒ��ϵͳ�������ȡ��Ʒ����Ʒ�б���г�NPC��ð�յ�����Ա2 �Ƿ����ʹ�÷��������֮�����г齱��");
			} else {
				cm.sendOk("��ӭ�μӱ���ϵͳ�����ȷ���з�����ĵ���");
				cm.dispose();
			}
		} else if (status == 1){	
			var ii = net.sf.odinms.server.MapleItemInformationProvider.getInstance();
			for(var i = 1;i<=5;i++){
				if(cm.getPlayer().getInventory(net.sf.odinms.client.MapleInventoryType.getByType(i)).isFull()){
					cm.sendOk("������Ӧ�������а������ճ�һ��");
					cm.dispose();
					return;
				}
			}
			var chance = Math.floor(Math.random()*1000);
			var finalitem = Array();
			for(var i = 0 ;i<item.length;i++){
				if(item[i][1] >= chance){
					finalitem.push(item[i]);
				}
			}
			if(finalitem.length != 0){
				var random = new java.util.Random();
				var finalchance = random.nextInt(finalitem.length);
				var itemId = finalitem[finalchance][0];
				var quantity = finalitem[finalchance][2];
				if(ii.getInventoryType(itemId).getType() == 1){
					var toDrop = ii.randomizeStats(ii.getEquipById(itemId));
				}else{
					var toDrop = new net.sf.odinms.client.Item(itemId, 0, quantity);
				}
				net.sf.odinms.server.MapleInventoryManipulator.addFromDrop(cm.getC(), toDrop, -1);
				cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.getItemMegas(cm.getC().getChannel(),cm.getPlayer().getName() + " : " + "��ϵͳ���û��ã����һ��ϲ���������ɣ�����",toDrop, true).getBytes());
				cm.gainItem(5220040,-1);
				cm.sendOk("�ǳ���л�μӱ���ϵͳ������Ŭ������ȡ���������ɣ�");
				cm.dispose();
			} else {
				cm.sendOk("��ѽ������ô��ģ�ʲô��û�õ�������ʱ�������ɣ�");
				cm.gainItem(5220040,-1);
				cm.dispose();
			}
		}
	}
}
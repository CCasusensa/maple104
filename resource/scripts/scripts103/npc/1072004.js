var status = 0;
var item = 
Array(
			//-----����-----
			Array(3010009,1000,1), //�齵�
			Array(3010012,1000,1), //��ʿ ����
			Array(3010013,1000,1), //�Ƴ�����
			Array(3010014,1000,1), //������
			Array(3010019,1000,1), //��˾��
			Array(3010024,1000,1), //��߷�����
			Array(3010028,800,1), //�����ķ�²
			Array(3010029,800,1), //������
			Array(3010030,800,1), //�ڻ���
			Array(3010031,800,1), //�컷��
			Array(3010032,800,1), //�ƻ���
			Array(3010033,800,1), //�̻���
			Array(3010034,1000,1), //�Ƴ�����(��ɫ)
			Array(3010035,1000,1), //�Ƴ�����(��ɫ)
			Array(3010036,1000,1), //������ǧ
			Array(3010037,1000,1), //�����
			Array(3010040,1000,1), //������
			Array(3010041,1000,1), //��������
			Array(3010043,1000,1), //ħŮ�ķ�ɨ��
			Array(3010044,1000,1), //ͬһ��ɡ��
			Array(3010045,1000,1), //��������
			Array(3010046,1000,1), //������
			Array(3010047,1000,1), //������
			Array(3010048,1000,1), //ʥ��������
			Array(3010049,1000,1), //ѩ����
			Array(3010050,1000,1), //������
			Array(3010051,1000,1), //ɳĮ����1����
			Array(3010052,1000,1), //ɳĮ����2����
			Array(3010054,1000,1), //������ല
			Array(3010057,1000,1), //Ѫɫõ��
			Array(3010058,1000,1), //����ĩ��
			Array(3010068,1000,1), //¶ˮ����
			Array(3010073,500,1), //���ް�Ʒ����
			Array(3010071,1000,1), //������
			Array(3010073,500,1), //PB����
			Array(3010077,1000,1), //èͷӥ����
			Array(3010098,1000,1), //����լ��
			Array(3010100,1000,1), //��������
			Array(3010106,1000,1), //ѩ��ս��
			Array(3010111,1000,1), //��������
			Array(3012001,1000,1), //����
			Array(3012002,1000,1), //ԡͰ
			Array(3012003,1000,1), //��ħ����
			Array(3012006,1000,1), //�紵����
			Array(3012010,1000,1), //�ɿ�����������
			Array(3012011,1000,1), //�ɿ������
			Array(3010183,1200,1), //���ܲ�����
			Array(3010182,1200,1), //ѩ��ս��
			Array(3010111,1200,1), //4ֻ��������
			Array(3010179,1200,1), //è�䵹������
			Array(3010174,1200,1), //��ҩ����
			Array(3010171,1200,1), //è�䱧������
			Array(3010154,1200,1), //��еʦ����
			Array(3010146,1200,1), //�������������
			Array(3010131,1200,1), //������è����
			Array(3010075,1200,1), //��Ϊ���ֿ�����
			Array(3010057,1200,1), //Ѫ��õ��
			Array(3010045,1200,1), //����
			Array(3010025,1200,1), //����
			Array(3010007,1200,1), //����
			Array(3010017,1200,1), //����
			Array(3010069,1200,1)//��Ʒ�����

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
			if (cm.haveItem(4031692)) {
				cm.sendYesNo("��ӭ�μ�vip�齱���ϵͳ�������ȡ��Ʒ,�Ƿ����ʹ��ʢ���������İ��ļ�֤#v4031692#���г齱��\r\n#r[100%�н���,����ƭ]#k��Ʒ���£�\r\n#v3010012##v3010013##v3010014##v3010019##v3010024##v3010028##v3010029##v3010030##v3010031##v3010032##v3010033##v3010034##v3010035##v3010036##v3010037##v3010040##v3010041##v3010043##v3010044##v3010045##v3010046##v3010047##v3010048##v3010049##v3010050##v3010051##v3010052##v3010054##v3010057##v3010058##v3010068##v3010073##v3010071##v3010073##v3010077##v3010098##v3010100##v3010106##v3010111##v3012001##v3012002##v3012003##v3012006##v3012010##v3012011##v3010183##v3010111##v3010179##v3010174##v3010171##v3010154##v3010146##v3010131##v3010075##v3010057##v3010045##v3010025##v3010017##v3010069##v3010007#");
			} else {
				cm.sendOk("��ӭ�μ�vip�齱���ϵͳ�������ȡ��Ʒ,�Ƿ����ʹ��ʢ���������İ��ļ�֤#v4031692#���г齱��\r\n#r[100%�н���,����ƭ]#k��Ʒ���£�\r\n#v3010012##v3010013##v3010014##v3010019##v3010024##v3010028##v3010029##v3010030##v3010031##v3010032##v3010033##v3010034##v3010035##v3010036##v3010037##v3010040##v3010041##v3010043##v3010044##v3010045##v3010046##v3010047##v3010048##v3010049##v3010050##v3010051##v3010052##v3010054##v3010057##v3010058##v3010068##v3010073##v3010071##v3010073##v3010077##v3010098##v3010100##v3010106##v3010111##v3012001##v3012002##v3012003##v3012006##v3012010##v3012011##v3010183##v3010111##v3010179##v3010174##v3010171##v3010154##v3010146##v3010131##v3010075##v3010057##v3010045##v3010025##v3010017##v3010069##v3010007#");
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
				var Laba = finalitem[finalchance][2];
			        if(ii.getInventoryType(itemId).getType() == 1){
			        	var toDrop = ii.randomizeStats(ii.getEquipById(itemId)).copy();
				}
				else{
				 	 var toDrop = new net.sf.odinms.client.Equip(itemId,0).copy();
				}
				net.sf.odinms.server.MapleInventoryManipulator.addFromDrop(cm.getC(), toDrop,-1);
				cm.gainItem(4031692,-1);
				cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.getItemMega(cm.getC().getChannel(),cm.getPlayer().getName() + " : " + "��[����ҡ����]��ã����һ��ϲ��/���ɣ�����",toDrop, true).getBytes());
				
				cm.sendOk("�ǳ���л�μӱ���ϵͳ������Ŭ������ȡ���������ɣ�");
				cm.dispose();
			} else {							
				cm.gainItem(4031692,-1);
				cm.sendOk("����Ʒ��ʲô��û�õ�!����~");
				cm.dispose();
			}
		}
	}
}

var status = 0;
var select = 0;
var StringS;
var viplevel = 1;  //���ô򿪴�NPC��ҪVIP�ȼ�

var itemS = Array(
			Array(1402037,200000,"������"),
			Array(1402014,200000,"�¶ȼ�"),
			Array(3010085,500000,"����������"),
			Array(1102245,200000,"̫������"),
			Array(1002890,200000,"��ɫ˿��"),
			Array(1002888,200000,"��ɫ˿��"),
			Array(1042104,100000,"С��ҶT��"),
			Array(1061148,100000,"���Ƿ�ɫ��ȹ"),
			Array(1302063,200000,"Ȼ�յĻ��浶"),
			Array(1442018,100000,"������"),
			//Array(1912036,10000000,"ʨ�Ӱ���"),
			//Array(1302130,10000000,"��Ч���ֽ�"),
			//Array(1312044,10000000,"��Ч��ͷ"),
			//Array(1322070,10000000,"��Ч����"),
			//Array(1432058,10000000,"����ǹ"),
			//Array(1902042,10000000,"�������������"),
			//Array(1912035,10000000,"���������˰���"),
			//Array(1142190,10000000,"����VIPѫ��"),
			//Array(1032098,10000000,"����VIP��Ч"),
			//Array(1902044,10000000,"�ܳ����"),
			//Array(1912037,10000000,"�ܳ�����"),
			//Array(1902046,10000000,"��԰�ܳ����"),
			//Array(1912039,10000000,"��԰�ܳ�����"),
			//Array(1902047,10000000,"Ǳˮͧ���"),
			//Array(1912040,10000000,"Ǳˮͧ����"),
			//Array(1432059,10000000,"����ǹ"),
			//Array(1442084,10000000,"����ì"),
			//Array(1402066,10000000,"����˫�ֽ�"),
			//Array(1302131,10000000,"����"),
			//Array(1442083,10000000,"ѩ֮ì"),
			//Array(1302131,10000000,"����"),
			//Array(1372054,10000000,"�������"),
			//Array(1452086,10000000,"��Ч����"),
			Array(1122012,100000,"��������"),
			Array(1102172,100000,"���㲻������"),
			Array(1302081,100000,"�����Ƽ׽�"),
			Array(1312037,100000,"������Ÿ�"),
			Array(1322060,100000,"���㾪����"),
			Array(1402046,100000,"������ڤ��"),
			Array(1422037,100000,"����������"),
			Array(1432047,100000,"������ʥǹ"),
			Array(1442063,100000,"��������"),
			Array(1372044,100000,"���������"),
			Array(1382057,100000,"���������"),
			Array(1452057,100000,"���㾪�繭"),
			Array(1462050,100000,"����ڤ����"),
			Array(1332073,100000,"��������"),
			Array(1332074,100000,"���������"),
			Array(1472068,100000,"����󱯸�"),
			Array(1482023,100000,"�����ȸ��"),
			Array(1492023,100000,"�������"),
			//Array(1472111,2500,"�ƽ�ȭ��"),
			//Array(1482073,2500,"�ƽ�ȭ��"),
			//Array(1492073,2500,"�ƽ���ǹ"),
			Array(1332021,130000,"������"),
			Array(1322051,200000,"��Ϧ"),
			Array(1402013,110000,"���ս�"),
			Array(1402029,140000,"���������"),
			Array(1402044,280000,"�Ϲϵ���"),
			Array(1402063,300000,"ӣ��ɡ"),
			Array(1422011,120000,"��ƿ"),
			Array(1432013,100200,"�Ϲ�ǹ"),
			Array(1082149,100200,"��������(��)"),
			Array(1082148,100200,"��������(��)"),
			Array(1082147,100200,"��������(��)"),
			Array(1082146,100200,"��������(��)"),
			Array(1082145,100200,"��������(��)"),
			Array(1072238,100200,"��ɫ��Ь"),
			Array(1072239,100200,"��ɫ��Ь"),
			Array(1302024,110200,"�ϱ�ֽ��"),
			Array(1302027,100200,"����ɡ"),
			Array(1302087,200000,"���"),
			Array(1302025,300000,"����ɡ"),
			Array(1302084,200000,"���(��)"),
			Array(1302128,120000,"���"),
			Array(1302085,140000,"����"),
			Array(1302080,300000,"�߲��޺����"),
			Array(1302058,100000,"ð�յ�ɡ"),
			Array(1302049,105000,"���߱���"),
			Array(1302029,105000,"����ɡ"),
			Array(1302061,100500,"���ٱ���"),
			Array(1302035,160000,"��Ҷ��"),
			Array(1322006,101000,"�ֹ�"),
			Array(1322027,101000,"��٤�յ�ƽ�׹�"),
			Array(1332032,180000,"ʥ����"),
			Array(1332030,120000,"����"),
			Array(1332053,200000,"Ұ���տ���"),
			Array(1372017,200000,"��·��"),
			Array(1372031,300000,"ʥ�Ͷ���"),
			Array(1432039,110000,"�����"),
			Array(1422036,100000,"��߽��˵Ĵ���"),
			Array(1092039,100000,"��Ҷ��"),
			Array(1102043,100000,"��������(��)"),
			Array(1102042,100000,"��������(��)"),
			Array(1102041,100000,"��������(��)"),
			Array(1102040,100000,"��������(��)"),
			Array(1051172,100000,"��ɫ��ԡ��")


);



function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (status >= 0 && mode == 0) {
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
				  if(cm.getChar().getVip() >= viplevel){			
					  cm.sendNext("#r����!����VIPר�����NPC,VIP���ܹ���.");   				
					  //cm.getChar().modifyCSPoints(1,9000000000);
				  }else{
					cm.sendOk("����VIP�ȼ���Ȩʹ�ô�NPC! �빺��VIP������!������ʵ��Ŷ");
					cm.dispose();
				  }
		}else if (status == 1) {
				StringS = "��ѡ������Ҫ����ĵ���";
				for (var i = 0; i < itemS.length; i++){
					StringS += "\r\n#L" + i + "#" + itemS[i][2] + "#v" + itemS[i][0] + "#(#r" + itemS[i][1] + "#k���)#l"
				}
				cm.getChar().getNX();
				cm.sendSimple(StringS);			 								     
		}else if (status == 2){
			select = selection;
			cm.sendYesNo("��ȷ��Ҫ��#r" + itemS[select][1] + "#k�����#r"  + itemS[select][2] + "#k��");	
		}else if (status == 3){
			if (cm.getChar().getNX() >= itemS[select][1]){
				if(cm.getPlayer().getInventory(net.sf.odinms.client.MapleInventoryType.getByType(1)).isFull()){
						cm.sendOk("������Ӧ�������б����ճ�����");
						cm.dospose();
				}
				cm.gainNX(-itemS[select][1]);
				var ii = net.sf.odinms.server.MapleItemInformationProvider.getInstance();		                
				var type = ii.getInventoryType(itemS[select][0]);	
				var toDrop = ii.randomizeStats(ii.getEquipById(itemS[select][0])).copy();
				//toDrop.setLocked(1);//����
				cm.getChar().getInventory(type).addItem(toDrop);
				cm.getC().getSession().write(net.sf.odinms.tools.MaplePacketCreator.addInventorySlot(type, toDrop));
				cm.sendOk("����ɹ�����鿴������")
				cm.dispose();
			}else{
				cm.sendOk("�Բ�����û���㹻�ĵ����������");
				cm.dispose();
			}
		}
	}
}

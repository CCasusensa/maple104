var status = 0;
var select = 0;
var StringS;

var itemS = 
Array(
		Array(5062000,2000,"����ħ��"),
		Array(5062001,3000,"�쵰����ħ��"),
		Array(5062002,7000,"�߼�����ħ��"),
		Array(1002702,10000,"��˵ͷ��"),
		Array(1102319,10000,"��˵��������"),
		Array(1112668,10000,"��˵��ָ"),
		Array(1122150,10000,"ͳ���ߵ�׹"),
		Array(1032129,10000,"ϣ��֮��֮��˵����"),
		Array(1122185,10000,"ϣ��֮��֮��˵����"),
		Array(1132135,10000,"ϣ��֮��֮��˵����"),
		Array(1152077,10000,"ϣ��֮��֮��˵�粿"),
		Array(1112135,25000,"ˮī����Ƭ��ָ"),
		Array(1112238,20000,"ˮī�������ָ"),
		Array(1112924,10000,"�������н�ָ"),
		Array(1142310,10000,"ʮ������[���ȱ�]"),
		Array(1142311,10000,"ʮ������[�еȱ�]"),
		Array(1142312,10000,"ʮ������[�ߵȱ�]"),
		Array(1142313,10000,"ʮ������[��ʿ��]"),
		Array(1142314,10000,"ʮ������[׼ξ]"),
		Array(1142315,10000,"ʮ������[��ξ]"),
		Array(1142316,10000,"ʮ������[��ξ]"),
		Array(1142317,10000,"ʮ������[��ξ]"),
		Array(1142318,10000,"ʮ������[��У]"),
		Array(1142319,11000,"ʮ������[��У]"),
		Array(1142320,12000,"ʮ������[��У]"),
		Array(1142321,13000,"ʮ������[�ų�]"),
		Array(1142179,15000,"�����ղؼ�ѫ��"),
		Array(1142174,11000,"ð�յ�������ѫ��"),
		Array(1142073,10000,"������ѫ��"),
		Array(1142070,10000,"�����ѫ��")
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
				  if(cm.getChar().getVip()){			
					  cm.sendNext("#r����!������������ϴ��������ħ��Ŷ��ϴSS��װ���ر���");   				
					  //cm.getChar().modifyCSPoints(1,9000000000);
				  }
		}else if (status == 1) {
				StringS = "��ѡ������Ҫ����ĵ���";
				for (var i = 0; i < itemS.length; i++){
					StringS += "\r\n#L" + i + "#" + itemS[i][2] + "#v" + itemS[i][0] + "#(#r" + itemS[i][1] + "#k���)#l"
				}
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

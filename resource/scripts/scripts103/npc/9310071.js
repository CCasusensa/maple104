
var status = 0;  	
var itemS =  	
Array(
					Array(5062002,15,"�߼�����ħ��"),
					Array(1003274,10000,"#r�ɶ�ñ��"),
					Array(1042223,10000,"#r�ɶ��·�"),
					Array(1062140,10000,"#r�ɶԿ���"),
					Array(1322106,10000,"#r���ɵİ���"),
					Array(1402110,10000,"#r�ɶԼ���"),
					Array(3010313,5000,"��ɫ��������"),
					Array(5062000,12,"����ħ��"),
					Array(5062001,10,"��������ħ��"),
					Array(5064000,20,"����������"),
					Array(1402037,1000,"������"),
					Array(1402014,1000,"�¶ȼ�"),
					Array(3010070,20000,"���ް�Ʒ����"),
					Array(1002894,800,"��ɫ��֯����"),		
					Array(1002895,800,"��ɫ��֯����"),
					Array(1002896,800,"��ɫ��֯����"),
					Array(1002897,800,"��ɫ��֯����"),
					Array(1002898,800,"��ɫ��֯����"),
					Array(1002899,800,"��ɫ��֯����"),
					Array(1002900,800,"��ɫ��֯����"),
					Array(1002901,1200,"��ɫ��֯����"),
					Array(1002902,1400,"��ɫ��֯����"),
					Array(1142000,100,"��ʵ��ð�ռ�ѫ��"),
					Array(1142001,200,"����������ѫ��"),
					Array(1142002,130,"�������ѫ��"),
					Array(1142003,130,"��������ѫ��"),
					Array(1142004,100,"�ڷ�ð�ռ�ѫ��"),
					Array(1142006,180,"ð�յ�ż������ѫ��"),
					Array(1122029,1500,"ð��֮��(սʿ)#r30#k��"),							Array(1122030,1500,"ð��֮��(��ʦ)#r30#kħ"),						        Array(1122031,1500,"ð��֮��(����)#r30#k��"),							Array(1122032,1500,"ð��֮��(����)#r30#k��"),
					Array(1122033,1500,"ð��֮��(����)#r25#k��"),
					Array(1122034,3000,"ð��֮��(սʿ)#r50#k��"),
					Array(1122035,3000,"ð��֮��(��ʦ)#r50#kħ"),
					Array(1122036,3000,"ð��֮��(����)#r50#k��"),
					Array(1122037,3000,"ð��֮��(����)#r50#k��"),
					Array(1122038,3000,"ð��֮��(����)#r45#k��")				
);
var StringS;
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
			
				  cm.sendNext("#rHi,����������߻�ȡNPC����������ֻ����\r\n#b���г���Ϊ��\r\n#r�Ϳ��Ի�ȡһЩ�������Ŷ!!\r\n#v5062002##v1003274##v1042223##v1062140##v1322106##v1402110##v3010313##v5062000##v5062001##v5064000##v1402037##v1402014##v3010070##v1002894##v1002895##v1002896##v1002897##v1002898##v1002899##v1002900##v1002901##v1002902##v1142000##v1142001##v1142002##v1142003##v1142004##v1142006##v1122029##v1122030##v1122031##v1122032##v1122033##v1122034##v1122035##v1122036##v1122037##v1122038#");   
			
		}else if (status == 1) {
				StringS = "����!����ǰ���г���Ϊ��Ϊ#r " + cm.getPlayer().getDojoPoints() + " #k����ѡ������Ҫ�һ��ĵ���";
				for (var i = 0; i < itemS.length; i++){
					StringS += "\r\n#L" + i + "#" + itemS[i][2] + "#v" + itemS[i][0] + "#(��Ҫ�г���Ϊ��#r" + itemS[i][1] + "#k��)#l"
				}
				cm.sendSimple(StringS);			 								     
		}else if (status == 2){
			if (cm.getPlayer().getDojoPoints() >= itemS[selection][1]){
				if(cm.getPlayer().getInventory(net.sf.odinms.client.MapleInventoryType.getByType(1)).isFull(2)){
						cm.sendOk("������Ӧ����װ�����ճ�����");
						cm.dospose();
				}
				cm.getPlayer().setDojoPoints(cm.getPlayer().getDojoPoints() - itemS[selection][1]);
				if (itemS[selection][0] == 1902007){
					cm.gainItem(1912005,1);
				}
				cm.gainItem(itemS[selection][0],1);
				cm.sendOk("�һ��ɹ�����鿴������")
				cm.dispose();
			}else{
				cm.sendOk("�Բ�����û���㹻���г���Ϊ��������ȡ��");
				cm.dispose();
			}
		}
	}
}

importPackage(net.sf.odinms.server.maps);
importPackage(net.sf.odinms.net.channel);
importPackage(net.sf.odinms.tools);
/* ===========================================================
			ע��(cm.sendSimple\cm.itemQuantity())
	�ű�����: 		PORTALS
	���ڵ�ͼ:		�����
	�ű�����:		������볡
=============================================================
����ʱ�䣺
������Ա����о
=============================================================
for(var i = 1;i<=5;i++){
				if(cm.getPlayer().getInventory(net.sf.odinms.client.MapleInventoryType.getByType(i)).isFull()){
					cm.startPopMessage(cm.getPlayer().getId(), "���������Լ��ı����ڳ�һ��");
					cm.dispose();
					return;
				}
			}
pi.isQuestActive(id)//�ж��Ƿ����
pi.isQuestFinished(id)//�Ƿ����
pi.getPlayer().getClient().getSession().write(MaplePacketCreator.serverNotice(5, "text"));
return
*/
function enter(pi) {
	if(pi.isQuestActive(3122)){//�鿴�Ƿ���ˡ���ӡ��ȷ�ϡ�����.
		pi.warp(921120705);
		pi.getPlayer().startMapEffect("������ǰ�ߣ�����������Ӷ�Ѩ��������������˹��ӡ�ĵط���", 5120035);
		return true;
	}else{
		pi.getPlayer().getClient().getSession().write(MaplePacketCreator.serverNotice(5, "���������赲�����ǰ����"));
		return false;
	}
}
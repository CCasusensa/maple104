//�����鷿 ��о����
function enter(pi) {
		var nextmap = pi.getC().getChannelServer().getMapFactory().getMap(910350000);   //�鷿
		if(nextmap.playerCount() > 0){  //�������
		pi.getPlayer().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.serverNotice(5, "�����������鷿��")); 
		return false;	
		}
		nextmap.resetReactors(); 
		nextmap.clearMapTimer();
		pi.warp(910350000);
		nextmap.addMapTimer(60*10,103050100);  //��ʱ������
		return true;
}
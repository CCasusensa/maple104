importPackage(net.sf.odinms.server.maps);
importPackage(net.sf.odinms.net.channel);
importPackage(net.sf.odinms.tools);

function enter(pi) {
	pi.getPlayer().getClient().getSession().write(MaplePacketCreator.serverNotice(5, "��ʧ����̫�գ���δ֪�����������˳�����"));
	pi.warp(199000000);
	return true;
}
importPackage(net.sf.odinms.server.maps);
importPackage(net.sf.odinms.net.channel);
importPackage(net.sf.odinms.tools);


function enter(pi) {
pi.getPlayer().getClient().getSession().write(MaplePacketCreator.serverNotice(5, "ѽ��������̫���ˡ�"));
	pi.warp(922240100);
	return true;
}
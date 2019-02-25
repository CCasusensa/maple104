

importPackage(net.sf.odinms.server.maps);
importPackage(net.sf.odinms.net.channel);
importPackage(net.sf.odinms.tools);

function enter(pi) {
	var nextMap = 926110300;
	var eim = pi.getPlayer().getEventInstance();
	var target = eim.getMapInstance(nextMap);
	var targetPortal = target.getPortal("0");
	// only let people through if the eim is ready
	var avail = eim.getProperty("stage3status");
	if (avail == null) {
		// do nothing; send message to player
		pi.playerMessage("û���������Ļ����ܽ�����һ�ء�");
		return false;
	} else {
		pi.getPlayer().changeMap(926110300, 0);
		return true;
	}
}
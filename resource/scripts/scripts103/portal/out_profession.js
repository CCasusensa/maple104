//���˴��뿪���ͽű�

function enter(pi) {
    var returnMap = pi.getSavedLocation("Inprofession");
    pi.clearSavedLocation("Inprofession");

    if (returnMap < 0) {
	returnMap = 102000000; // ������쳣��ʽ���룬���͵���ʿ���䡣
    }
    var target = pi.getMap(returnMap);
    var portal;
	
    if (portal == null) {
	portal = target.getPortal(0);
    }
    if (pi.getMapId() != target) {
	pi.getPlayer().changeMap(target, portal);
    }
}
function enter(pi) {
	var eim = pi.getPlayer().getEventInstance();
		if (eim.getProperty("pass2") == null){
			pi.playerMessage("Ҫ�����ǰ���������������еļ�̳��");
		}else{
		pi.warp(803000900,"sp")
		}
}
function enter(pi) {
	var eim = pi.getPlayer().getEventInstance();
		if (eim.getProperty("pass5") == null){
			pi.playerMessage("�ڰ�ħ��ʦ������Խ��Խǿ�ˣ��Ͻ����漣�������׸�ʤ������");
		}else{
		pi.warp(803001200,"sp")
		}
}
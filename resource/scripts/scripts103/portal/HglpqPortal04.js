//սʿ����
function enter(pi) {
		var eim = pi.getPlayer().getEventInstance();
		if ((pi.getJob() >= 500 && pi.getJob() <=522) || (pi.getJob() >= 1500 && pi.getJob() <=1512) || (pi.getJob() >= 3500 && pi.getJob() <=3512) || pi.getJob() == 900){
			pi.warp(803001150);
		}else{
			pi.playerMessage("ֻ�к���ְҵ���ܽ��롣")
		}
}
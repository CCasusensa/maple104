//սʿ����
function enter(pi) {
		var eim = pi.getPlayer().getEventInstance();
		if ((pi.getJob() >= 300 && pi.getJob() <=322) || (pi.getJob() >= 1300 && pi.getJob() <=1312)){
			pi.warp(803001140,"sp");
		}else{
			pi.playerMessage("ֻ�й�����ְҵ���ܽ��롣")
		}
}
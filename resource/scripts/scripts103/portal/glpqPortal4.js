function enter(pi) {
	var eim = pi.getPlayer().getEventInstance();
		if (eim.getProperty("pass4") != null){//����Ѿ���������еļ�̨��
			pi.playerMessage("�ڰ�ħ��ʦ������Խ��Խ�ӽ��ˣ��Ͽ��������еļ�̳���������")
		}else{
			pi.warp(803001100,"sp")	
		}
}
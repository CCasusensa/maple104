function enter(pi) {
	var eim = pi.getPlayer().getEventInstance();
		if (eim.getProperty("pass3") == null){//�����û�д�����еļ�̨��
			pi.playerMessage("�ڰ�ħ��ʦ������Խ��Խ�ӽ��ˣ��Ͽ��������еļ�̳���������")
		}else if (eim.getProperty("pass31") == null){//�����������еļ�̨�����ǻ�û�д�����Ĵ��Ϳ��еõ���¼
			pi.playerMessage("�ڰ�ħ��ʦ������Խ��Խ�ӽ��ˣ��Ͽ쵽����ȥ��");
		}else if (eim.getProperty("pass32") == null){//����Ӵ��Ϳ��еõ��˼�¼�����ǻ�û�е��NPC��ֵ
			pi.playerMessage("���ںڰ�ħ��ʦ�ķ������޷�����ǰ�����ܿ˺�����ʲô��Ҫ˵������")
		}else if (eim.getIntVar("var_int") >= eim.getPlayers().size()){//�����NPC����õ��˸�ֵ������������Ѿ��Ӵ��Ϳ��еõ��˼�¼��
			pi.warp(803001100,"sp")
		}else{//
			pi.playerMessage("�˵�ͼ�����������û�д�����Ĵ��Ϳ�ͨ����")
		}
}
function enter(pi) {
	if(pi.isQuestActive(22010)){
		pi.warp(100030310);
	} else {
		pi.playerMessage("���û��ʲô�µĻ��ǲ������뿪ũ���ġ�");
		return false;
	}
	return true;
}
//var baseid = 541020610;
//var dungeonid = 541020620;
//var dungeons = 19;

function enter(pi) {
    if (pi.getMapId() == 251010402) {
	if (pi.getParty() != null) {
	    if (pi.isLeader()) {
		//		for (var i = 0; i < dungeons; i++) {
		//		    if (pi.getPlayerCount(dungeonid + i) == 0) {
		//			pi.warpParty(dungeonid + i);
		pi.warpParty(251010410);
		return true;
	    //		    }
	    //		}
	    } else {
		pi.playerMessage(5, "�㲻�Ƕӳ���");
		return false;
	    }
	} else {
	    //	    for (var i = 0; i < dungeons; i++) {
	    //		if (pi.getPlayerCount(dungeonid + i) == 0) {
	    //		    pi.warp(dungeonid + i);
	    pi.warp(251010410, 0);
	    return true;
	//		}
	//	    }
	}
	pi.playerMessage(5, "�����㲻�ܽ��뵽���棬���Ժ����ԡ��������Ѿ�����ϵͳ���ơ���");
	return false;
    } else {
	
	pi.warp(251010402, "MD00");
	return true;
    }
}
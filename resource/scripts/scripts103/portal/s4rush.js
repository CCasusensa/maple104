function enter(pi) {
    if (pi.getQuestStatus(6110) == 1) {
	 if (pi.getParty() != null) {
	     if (!pi.isLeader()) {
		 pi.playerMessage("ֻ����ӳ����ܾ������롣" );
	     } else {
		 if (pi.getParty().getMembers().size < 2) {
		    pi.playerMessage("�����ӳ�Ա�������ˡ�" );
		 } else {
		      if (!pi.isAllPartyMembersAllowedJob(1)) {
			  pi.playerMessage("�㲻�ܽ�ȥ��������Ա����սʿ��");
		      } else {
			  var em = pi.getEventManager("4jrush");
			  if (em == null) {
			      pi.playerMessage("����δ֪��ԭ�򣬲��ܽ��롣 );
			  } else {
			      em.startInstance(pi.getParty(), pi.getMap());
			      return true;
			  }
		      }
		 }
	     }
	 } else {
	     pi.playerMessage(5, "����Ӻ�������");
	 }
    } else {
	pi.playerMessage("δ֪�������赲�����ǰ����");
    }
    return false;
}
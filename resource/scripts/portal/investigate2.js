//��о����
importPackage(net.sf.odinms.server.maps);
importPackage(net.sf.odinms.net.channel);
importPackage(net.sf.odinms.tools);

function enter(pi) {
if (pi.isQuestFinished(2322)){//���������������
pi.getPlayer().getClient().getSession().write(MaplePacketCreator.serverNotice(5, "������ĳ�������������Ѿ���������������ˡ���"));
return false;
}else if (!pi.isQuestActive(2322)) {//���û�н��������
pi.getPlayer().getClient().getSession().write(MaplePacketCreator.serverNotice(5, "����������ĳ�������������̺���֪����ʲô����"));
return false;
}else if (!pi.isQuestFinished(2322)){//�����û���������
pi.updateQuest(2322, "1");
//pi.startQuest(2322)
pi.getPlayer().getClient().getSession().write(MaplePacketCreator.serverNotice(5, "����������ĳ���������Ͽ��ȥ�������������"));
return false;
}else{
pi.getPlayer().getClient().getSession().write(MaplePacketCreator.serverNotice(5, "����������ĳ�����������ǲ�֪���Ǵ�ʲô�ط������ġ�"));
return false;
}
}

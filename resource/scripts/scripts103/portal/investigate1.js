//��о����
importPackage(net.sf.odinms.server.maps);
importPackage(net.sf.odinms.net.channel);
importPackage(net.sf.odinms.tools);

function enter(pi) {
if (pi.isQuestFinished(2314)){//���������������
pi.getPlayer().getClient().getSession().write(MaplePacketCreator.serverNotice(5, "�о����˺ܴ��ħ����Ϣ�����������˵û��ʲô���⡣"));
return false;
}else if (!pi.isQuestActive(2314)) {//���û�н��������
pi.getPlayer().getClient().getSession().write(MaplePacketCreator.serverNotice(5, "�о����˺ܴ��ħ����Ϣ�����Ǻ����Ҳ��������﷢���ģ�����󳼺���֪����ʲô���顣"));
return false;
}else if (!pi.isQuestFinished(2314)){//�����û���������
pi.updateQuest(2314, "1");
//pi.startQuest(2314)
pi.getPlayer().getClient().getSession().write(MaplePacketCreator.serverNotice(5, "�о����˺ܴ��ħ����Ϣ����ȥ�������������"));
return false;
}else{
pi.getPlayer().getClient().getSession().write(MaplePacketCreator.serverNotice(5, "�о����˺ܴ��ħ����Ϣ�����ǲ�֪���Ǵ����﷢�����ġ�"));
return false;
}
}

importPackage(net.sf.odinms.server.maps);
importPackage(net.sf.odinms.net.channel);
importPackage(net.sf.odinms.tools);

function enter (pi){
if (pi.isQuestFinished(2322)){//���������������
pi.warp(106020500)
pi.getPlayer().getClient().getSession().write(MaplePacketCreator.serverNotice(5, "��߸о���һ��⣬�����Լ���λ�÷����˱仯��"));
}else if (!pi.isQuestActive(2322)) {//���û�н��������
pi.getPlayer().getClient().getSession().write(MaplePacketCreator.serverNotice(5, "δ֪�������赲�����ǰ����"));
return false;
}else{
pi.warp(106020500)
pi.getPlayer().getClient().getSession().write(MaplePacketCreator.serverNotice(5, "��߸о���һ��⣬�����Լ���λ�÷����˱仯��"));
return false;
}
}

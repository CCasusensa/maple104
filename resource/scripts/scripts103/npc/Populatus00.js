
//��ͬ���ֹת��
importPackage(net.sf.odinms.server.maps);
importPackage(net.sf.odinms.net.channel);
importPackage(net.sf.odinms.tools);

function enter(pi) {
    if (pi.getMapCharCount(220080001) > 0) {
        sendMessage(pi,"����������ս.");
        return false;
    }
    if (pi.getBossLog('Populatus00')>=5 && pi.getPlayer().getVip()==0) {
        sendMessage(pi,"ÿ��ֻ����ս5��.��Ա�����ƴ���.");
        return false;
    }
    pi.resetMap(220080001);
    pi.setBossLog('Populatus00');
    pi.warp(220080001,"st00")
    return true;
}

function sendMessage(pi,message) {
    pi.getPlayer().getClient().getSession().write(MaplePacketCreator.serverNotice(5, message));
}

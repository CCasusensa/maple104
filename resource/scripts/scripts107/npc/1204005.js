
var status;

var minPlayers = 1;
var maxPlayers = 6;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1)
        status++;
    else {
        cm.dispose();
        return;
    }
	
    if (status == 0) {
        if (cm.getPlayer().getClient().getChannel() != 3){
            cm.sendOk("ϣ��˹ֻ���ڵ�3Ƶ���ٻ���");
            cm.dispose();
        }else if (cm.getPlayer().getParty() == null) {
            cm.sendOk("#e<�������ð����ʿ��Զ������>#n\r\n�������Ķ�Ա��һ��Ŭ������ܶ����ϣ��˹��\r\n��ô�뿪����ӣ�����3~6����Ա��������˵���ɡ�");
            cm.dispose();
        } else if (!cm.isLeader()) {
            cm.sendOk("����ս�����ϣ��˹�Ļ��������Ķӳ�������̸����");
            cm.dispose();
        } else {
            cm.sendYesNo("#d��ȷ�������Ѿ�׼���ý�ȥ�Կ������ϣ��˹����׼�����˵Ļ�����������ǽ�ȥ��");
        }
    }else if (status == 1) { 
        var party = cm.getParty().getMembers();
        var inMap = cm.partyMembersInMap();
        if (inMap < minPlayers || inMap > maxPlayers) {
            cm.sendOk("��������û�дﵽҪ������ "+minPlayers+"��, ��� "+maxPlayers+"�ˣ�");
            cm.dispose();
        } else {
            var em = cm.getEventManager("xinasi");
            var map = net.sf.odinms.net.channel.ChannelServer.getInstance(cm.getC().getChannel()).getMapFactory().getMap(271040100);
            var playercount = map.getCharacters().toArray().length;
            if (playercount < 1)
            {
                em.setProperty("xinasiOpen" , "true");
            }
            if (em == null) {
                cm.sendOk("��������δ����.");
                cm.dispose();
            } else if (em.getProperty("xinasiOpen").equals("true")) {
                em.startInstance(cm.getParty(), cm.getPlayer().getMap());
                em.setProperty("xinasiOpen" , "false");
                cm.serverNotice("[��������]���¸ҵ���� ["+ cm.getChar().getName() +"] ������Զ��������սϣ��˹��Ϊ���Ǽ��Ͱɣ�");
                cm.dispose();
            } else {
                cm.sendNext("�Ѿ��ж������ڶԿ�ϣ��˹�������Ժ��ڳ��ԣ�");
                cm.dispose();
            }
        }
    }
}
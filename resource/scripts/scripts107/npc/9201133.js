var checkitem = new Array(1082257,1082257,1082259,1072422,1072423,1082260,1082258,1072421,1082256,1072419);
var ishave = false;

function action(mode, type, selection) {
    if (mode != 1) {
        cm.dispose();
        return;
    }
    if (cm.getPlayer().getMapId() == 677000011) {
		for(var i =1;i<=checkitem.length;i++){
			if(cm.haveItem("+checkitem[i]+") == false){
				ishave = false;
				cm.sendOk(i+"��Ǹ,��û��#v"+checkitem[i]+"#");			
				cm.dispose();
			}
		}
        
    } else if (cm.getPlayer().getMapId() == 677000013) {//����boss��ͼ
        if (cm.getParty() == null) {
            cm.sendOk("�������Ӳ��ܽ���!");
        } else {
            var party = cm.getParty().getMembers();
            var mapId = cm.getMapId();
            var next = true;
            var levelValid = 0;
            var inMap = 0;
            var it = party.iterator();
            while (it.hasNext()) {
                var cPlayer = it.next();
                if (cPlayer.getMapid() == mapId) {
                    inMap += 1;
                }
            }
            if (party.size() < 1 || inMap < 1) {
                next = false;
            }
            if (next) {
                if (cm.getMap(677000012).getCharactersSize() > 0) {
                    cm.sendOk("�Ѿ���������ս,���Ժ�����.");
                } else {
                    cm.warpParty(677000012);
                }
            } else {
                cm.sendOk("��Ķ���������2����Ա�ڵ�ǰ��ͼ!");
            }
        }
        cm.dispose();
    } else {
        if (cm.getParty() != null) {
            cm.warpParty(677000011);
        } else {
            cm.warp(677000011, 0);
        }
        cm.dispose();
    }
}
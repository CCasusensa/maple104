

function start() {
    cm.sendSimple ("#e������ս�ڰ������𣿺ڰ������Ǻ�ǿ���BOSS��ÿ��ÿ��ֻ����ս2�Ρ����������ս�����Ѿ����������ˣ���ô���Ե������������ҿ��Զ���������ȥ10�Ρ�������Ҫ�߱������������С�#k\r\n#g����һ:����ӵ��һ�ź�����ս��.#k#v5220006#\r\n#b������:��Ҫ�������ϵĶ���.#k\r\n#r������:��Ա�����˳���5�εľ��޷�������.#k \r\n#L0#�ðɣ��������ˣ�������Ǵ��ͽ�ȥ�� ");
    }

function action(mode, type, selection) {
        cm.dispose();
 
if (selection == 0) {
if (cm.getParty() == null) {
cm.sendOk("��Ǹ��û����ӣ��޷����룬��ս����������Ҫ2����");
} else if (!cm.isLeader()) {
cm.sendOk("����������, ��ô�� #b�����ӳ�#k �������ң�");
} else if (cm.getPartyOnlineNumber() < 1) {
cm.sendOk("�������������������2�� �޷�����");
} else if (cm.isPartyAllHere() == false) {
cm.sendOk("������Ա��û�����룬���������֮����һ����ս����");
} else if (cm.getPartyBossLog('HEILONG', 5)) {
cm.sendOk("������Ա�����˽����Ѿ���ս��5�κ����ˡ�");
} else if(!cm.haveItem(4001017,1)) {
cm.sendOk("��û��#v4001017#,�޷����롣");
} else if (cm.getPartyOnlineNumber() >= 2 && cm.isPartyAllHere() != false) {
cm.setPartyBossLog('HEILONG');
cm.gainMeso(-20000000);
cm.warpParty(910340200);
} else {
cm.sendOk("��ս��������Ҫ2����Ŷ��");
}
}
}

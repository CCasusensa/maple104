/*
	NPC Name: 		Geras
	Map(s): 		Orbis: Station<To Ariant> (200000151)
	Description: 		Orbis Ticketing Usher
*/
var status = 0;

function start() {
    status = -1;
    geenie = cm.getEventManager("Geenie");
    action(1, 0, 0);
}

function action(mode, type, selection) {
    status++;
    if(mode == 0) {
	cm.sendNext("�㻹��ʲô����������û�������");
	cm.dispose();
	return;
    }
    if (status == 0) {
	if(geenie == null) {
	    cm.sendNext("�ű�������������ϵ����Ա�����");
	    cm.dispose();
	} else if (geenie.getProperty("entry").equals("true")) {
	    cm.sendYesNo("��ȥ֮����Ҫ�ɺܾò��ܵ���Ŀ�ĵء�������������м���Ҫ��Ļ������Ȱ�������꣬��ô����");
	} else if(geenie.getProperty("entry").equals("false") && geenie.getProperty("docked").equals("true")) {
	    cm.sendNext("���κ����Ѿ���������ȴ���һ�κ��ࡣ.");
	    cm.dispose();
	} else {
	    cm.sendNext("����ǰ5���ӿ�ʼ�ſ����볡�����Ե�һ�¡�����Ҳ������̫������ǰ1���Ӿͻ��������׼����");
	    cm.dispose();
	}
    } else if(status == 1) {
	cm.warp(200000152, 0);
	cm.dispose();
    }
}
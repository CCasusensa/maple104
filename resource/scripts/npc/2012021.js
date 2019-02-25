/* 
	NPC Name: 		Ramini
	Map(s): 		Orbis: Cabin<To Leafre> (200000131)
	Description: 		Orbis Ticketing Usher
*/
var status = 0;

function start() {
    status = -1;
    flight = cm.getEventManager("Flight");
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
	if(flight == null) {
	    cm.sendNext("The boats are currently down.");
	    cm.dispose();
	} else if(flight.getProperty("entry").equals("true")) {
	    cm.sendYesNo("�ǳ��ã����ϻ����㹻��λ�ã���׼���õǴ������ǽ��������������У����ǲ�����Ǵ���");
	} else if(flight.getProperty("entry").equals("false") && flight.getProperty("docked").equals("true")) {
	    cm.sendNext("���κ����Ѿ������������ĵȴ���һ�κ��ࡣ");
	    cm.dispose();
	} else {
	    cm.sendNext("����ǰ1���Ӿ�ֹͣ�ÿ��˵Ǵ��ˣ���ע��վ̨ʱ�䡣����Ҳ��Ҫ����̫���ˣ�");
	    cm.dispose();
	}
    } else if(status == 1) {
	cm.warp(200000132, 0);
	cm.dispose();
    }
}
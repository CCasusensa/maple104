/**
	NPC Name: 		Han the Broker
	Map(s): 		Magatia
	Description: 	Quest - �����Э��᳤�Ŀ���
*/

var status = -1;
var oreArray;

function start(mode, type, selection) {
}

function end(mode, type, selection) {
    if (mode == -1) {
	qm.dispose();
    } else {
	oreArray = getOreArray();
	if (status == -1) {
	    if (oreArray.length > 0) {
		status++;
		qm.sendSimple("�ޣ�������������һ�����ף����������������š������Ҳ������ΪʲôҪ���뵽����𣚣��Ҫ����ʲô�ر���\r\n" + getOreString(oreArray));
	    } else {
		qm.sendOk("�����ʲô��������û�ио���ʯ������һ��ĸо���û�п�ʯ����Ͳ��ܽ��뵽����娛");
		qm.dispose();
	    }
	} else if (status == 0) {
	    qm.gainItem(oreArray[selection], -2); // Take 2 ores
	    qm.sendNext("���һ��ʱ�䣬��ȥ��һЩ�����������㿼�ԡ�");
	    qm.forceCompleteQuest();
	    qm.dispose();
	} else {
	    qm.dispose();
	}
    }
}

function getOreArray() {
    var ores = new Array();
    var y = 0;
    for (var x = 4020000; x <= 4020008; x++) {
	if (qm.haveItem(x, 2)) {
	    ores[y] = x;
	    y++;
	}
    }
    return ores;
}

function getOreString(ids) { // Parameter 'ids' is just the array of getOreArray()
    var thestring = "#b";
    var extra;
    for (x = 0; x < ids.length; x++) {
	extra = "#L" + x + "##t" + ids[x] + "##l\r\n";
	thestring += extra;
    }
    thestring += "#k";
    return thestring;
}

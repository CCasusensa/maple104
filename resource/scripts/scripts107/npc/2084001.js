/*
	������
*/
var status = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status == 0 && mode == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (cm.getMapId() == 180000001) {
            cm.sendOk("���ź�������ΪΥ���û����򱻽�ֹ��Ϸ���������������ϵ����Ա.")
            cm.dispose();
        } 
    else if (status == 0) {
        var selStr = "��ʲô����\r\n\r\n#b#L0#���ܻ�����#l  \r\n#L1#������Ʒ#l  \r\n#L2#�سɾ���#l  \r\n#L3#ְҵװ��#l  \r\n#L4#רҵ����#l";
		cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
        case 0:
			cm.dispose();
			cm.openNpc(2084001,2)
            break;
        case 1:
			cm.dispose();
			cm.openNpc(2084001,3)
            break;
        case 2:
			cm.dispose();
			cm.openNpc(2084001,4)
            break;
        case 3:
			cm.dispose();
			cm.openNpc(2084001,5)
            break;
        case 4:
			cm.dispose();
			cm.openNpc(2084002)
            break;
        }
    }
}
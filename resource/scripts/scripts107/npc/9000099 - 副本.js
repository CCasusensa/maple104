/*
	�ű�����: 		����NPC
           �޸ģ�                     һֽ������ؼ
           ����ָ����              �ҷ�ʱ�г���
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
        var selStr = "#r#L0#�ƽ��̳-������#k#b#L1#������֮��#L2#�뿪";
        cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
        case 0:
            if (cm.getPlayer().getLevel() > 180) {
                cm.warp(271040100);
            } else {
		cm.sendOk("��ĵȼ�С��180,���ܽ��� ������");
            }
            cm.dispose();
            break;
        case 1:
            if (cm.getPlayer().getLevel() > 1) {
                cm.warp(910000000);
            } else {
		cm.sendOk("��ĵȼ�С��5,���ܽ��� ������");
            }
            cm.dispose();
            break;
         }
    }
}
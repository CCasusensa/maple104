/*
Multi-Purpose NPC
Author: Moogra
 */
var status = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {

    if (mode == -1) {
        cm.sendOk("#e�õģ��������Ҫ�Ұ�����ʱ��������.#k");
        cm.dispose();
    } else {
        if (mode == 0) {
            cm.sendOk("#e�õģ�����֪��ʲô����ʱ������..#k");
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
            cm.sendSimple ("#e���? #e#r[#h #]#k#n ,#e����#e#b���񷢲�NPC#k#n,#e����Ϊֹ."+cm.GetSN()+"��������#k#n\r\n\r\n#e#b��ѡ��:#k#n\r\n\r\n#e#r#L5#[װ]��������#l \r\n\r\n#L6#[װ]��ʦ����#l \r\n\r\n#L7#[װ]��������#l \r\n\r\n#L0#[װ]սʿ����#l \r\n\r\n#L1#[װ]������ͽ#l \r\n\r\n#L2#[װ]Ԫ��ħ��#l#k#n\r\n\r\n#e#r#L3#[װ]���صľѻ���#l \r\n\r\n#L4#[װ]�������ͻ��#l\r\n\r\n#L8#  #g��������....�����ڴ�...#l#k#n");
        } else if (status == 1) {
            switch(selection) {
                case 0:
                    cm.openNpc(9000007);
                    break;
                case 1:
                    cm.openNpc(2111001);
                    break;
                case 2:
                    cm.openNpc(2111005);
                    break;
                case 3:
                    cm.openNpc(2111008);
                    break;
                case 4:
                    cm.openNpc(2110001);
                    break;
                case 5:
                    cm.openNpc(9000011);
                    break;
                case 6:
                    cm.openNpc(2040046);
                    break;
                case 7:
                    cm.openNpc(1052012);
                    break;
                case 8:
                    cm.openNpc(9310070);
                    break;
            }
        }
    }
}

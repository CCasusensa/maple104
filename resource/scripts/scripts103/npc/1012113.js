function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        //cm.warp(240040700);
        cm.dispose();
    } 
    else {
        if (mode == 0) {
            //cm.warp(240040700);
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {			
            cm.sendNext(""+cm.GetSN()+"���������޵Ŀ���~!,#l#k\r\n#r��ս����������ô���ܻ��#e#r\r\n\r\n��:#v1302063##v1302084##v1302087##v1372014##v1372035##v1342006#\r\n��:#v1302080##v1432094##v1302128##v1702136##v1702211##v1702113#\r\n��:#v1702321##v1702240##v3010085##v3010092##v1332077##v1302026#\r\n\r\n��Ļ��͵���һ���~!`");											
        }else if (status == 1) {
            cm.sendYesNo("#e#bȷ��Ҫȥ��ս�������ֵ�ô?");
        }else if (status == 2) {
            cm.warp(910510000);			
            cm.dispose();
        }
    }
}


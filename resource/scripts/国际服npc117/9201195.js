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
    if (status == 0) {
        var selStr = "?���d��棤��#v4000038#5�R?��?? :\r\n\r\n#b#L0#��m#v1662002#?�c�J�~?����(��)#l\r\n#L1#��m#v1662003#?�c�˾J�~?����(��)#l\r\n #L2#��m#v1662004#�M���J�~?����(��)#l\r\n#L3#��m#v1662005#�M���J�~?����(��)#l\r\n#L4#��m#v1662009#�����ѾJ�~?����(��)#l\r\n#L5#��m#v1662010#�����ѾJ�~?����(��)#l\r\n#L6#��m#v1662006#?�Y?�h#l\r\n#L7#��m?����??#l";
          cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
        case 0:
if (cm.haveItem(4000038 ,5) == true) {
cm.gainItem(4000038 ,-5);
    cm.gainItem(1662002,1);
     cm.sendOk("��m�K��.");
            cm.dispose();
}else{
                cm.sendOk("#b��棓��a��V#v4000038#?��?�~�˔��͐�");
                cm.dispose();
            }
            break;
        case 1:
if (cm.haveItem(4000038 ,5) == true) {
cm.gainItem(4000038 ,-5);
    cm.gainItem(1662003,1);
     cm.sendOk("��m�K��.");
            cm.dispose();
}else{
                cm.sendOk("#b��棓��a��V#v4000038#?��?�~�˔��͐�");
                cm.dispose();
            }
            break;
        case 2:
if (cm.haveItem(4000038 ,5) == true) {
cm.gainItem(4000038 ,-5);
    cm.gainItem(1662004,1);
     cm.sendOk("��m�K��.");
            cm.dispose();
}else{
                cm.sendOk("#b��棓��a��V#v4000038#?��?�~�˔��͐�");
                cm.dispose();
            }
            break;
        case 3:
if (cm.haveItem(4000038 ,5) == true) {
cm.gainItem(4000038 ,-5);
    cm.gainItem(1662005,1);
     cm.sendOk("��m�K��.");
            cm.dispose();
}else{
                cm.sendOk("#b��棓��a��V#v4000038#?��?�~�˔��͐�");
                cm.dispose();
            }
            break;
        case 4:
if (cm.haveItem(4000038 ,5) == true) {
cm.gainItem(4000038 ,-5);
    cm.gainItem(1662009,1);
     cm.sendOk("��m�K��.");
            cm.dispose();
}else{
                cm.sendOk("#b��棓��a��V#v4000038#?��?�~�˔��͐�");
                cm.dispose();
            }
            break;
        case 5:
if (cm.haveItem(4000038 ,5) == true) {
cm.gainItem(4000038 ,-5);
    cm.gainItem(1662010,1);
     cm.sendOk("��m�K��.");
            cm.dispose();
}else{
                cm.sendOk("#b��棓��a��V#v4000038#?��?�~�˔��͐�");
                cm.dispose();
            }
            break;
        case 6:
if (cm.haveItem(4000038 ,5) == true) {
cm.gainItem(4000038 ,-5);
    cm.gainItem(1662006,1);
     cm.sendOk("��m�K��.");
            cm.dispose();
}else{
                cm.sendOk("#b��棓��a��V#v4000038#?��?�~�˔��͐�");
                cm.dispose();
            }
            break;
        case 7:
if (cm.haveItem(4000038 ,5) == true) {
cm.gainItem(4000038 ,-5);
cm.gainItem(1672016,1);
     cm.sendOk("��m�KndOk("�ʶR���\.");
            cm.dispose();
}else{
                cm.sendOk("#b�A�I�]�̨S��#v4000038#���פ��൹�A��I");
                cm.dispose();
            }
            break;
        }
    }
}

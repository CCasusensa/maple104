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
        var selStr = "\r\n\r\n#b#L0##v4000038#5?��#v1112586#��?�~�Y�J��#l\r\n#L1##v4000038#5?��#v4032246#�a?�h???��?#l\r\n#L2##v4000038#5?��#v2022720#�_�c�A�V*99#l\r\n#L3##v4000038#5?��#v5062001#����I���U?*99#l";
          cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
        case 0:
if (cm.haveItem(4000038 ,5) == true) {
cm.gainItem(4000038 ,-5);
    cm.gainItem(1112586,1);
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
    cm.gainItem(4032246,1);
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
    cm.gainItem(2022720,99);
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
    cm.gainItem(5062001,99);
     cm.sendOk("��m�K��.");
            cm.dispose();
}else{
                cm.sendOk("#b��棓��a��V#v4000038#?��?�~�˔����A��I");
                cm.dispose();
            }
            break;
        }
    }
}

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
        var selStr = "��m?�K?�s�d24�R���q���|��,�Ȫ�?�|?!:\r\n\r\n#b#L0#��m���?ɨ��#l\r\n#L1#��m?�K?ɨ��#l\r\n#L2#��m#v2340000#�J��?ɨ*99#l\r?\n#L3#��m#v2049703#A�c���~����?ɨ*5#l";
          cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
        case 0:
if (cm.haveItem(4000038 ,5) == true) {
cm.gainItem(4000038 ,-5);
    cm.gainItem(2049117,99);
    cm.gainItem(2049116,99);
    cm.gainItem(2049119,99);
    cm.gainItem(2049124,99);
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
    cm.gainItem(2040303,99);
    cm.gainItem(2040506,99);
    cm.gainItem(2040709,99);
    cm.gainItem(2040710,99);
    cm.gainItem(2043003,99);
    cm.gainItem(2043103,99);
    cm.gainItem(2043203,99);
    cm.gainItem(2043303,99);
    cm.gainItem(2043703,99);
    cm.gainItem(2043803,99);
 cm.gainItem(2044003,99);
 cm.gainItem(2044019,99);
 cm.gainItem(2044103,99);
 cm.gainItem(2044203,99);
 cm.gainItem(2044303,99);
 cm.gainItem(2044403,99);
 cm.gainItem(2044503,99);
 cm.gainItem(2044603,99);
 cm.gainItem(2044703,99);
 cm.gainItem(2044815,99);
 cm.gainItem(2044908,99);
 cm.gainItem(2045202,99);
 cm.gainItem(2040816,99);
 cm.gainItem(2040807,99);
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
    cm.gainItem(2340000,99);
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
    cm.gainItem(2049703,5);
    cm.sendOk("��m�K��.");
            cm.dispose();
}else{
                cm.sendOk("#b��棓��a��V#v4000038#?��?�~�˔��͐�");
                cm.dispose();
            }
            break;
        }
    }
}

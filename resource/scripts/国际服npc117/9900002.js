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
   var selStr = "?���d��!��?�f�E#v4000038#?����?�㼮��?�s�n��?�f�j13�R�x?,�Ȫ�?�u???��:\r\n\r\n#b#L0##v4000038#20?��#?#v1003172#?��?��#l\r\n#L1##v4000038#20?��#?#v1003173#�u??��#l\r\n#L2##v4000038#20?��#?#v1003175#�A??��#l\r\n#L3##v4000038#20?��#?#v1003176#����?��#l\r\n#L4##v4000038#20?��#?#v1003177#��??��#l\r\n#L5##v4000038#5?��#?#v2340000#?�K?ɨ#l\r\n#L6##v4000038#5?��#?#v1112586#���p�ˣ�#l\r\n#L7##v4000038#5?��#?#v1662006#�J�~?����#l"; 
        cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
        case 0:
if (cm.haveItem(4000038 ,20) == true) {
cm.gainItem(4000038 ,-20);
cm.gainItem(1003172,1);
      cm.gainItem(1102275,1);
     cm.gainItem(1082295,1);
     cm.gainItem(1052314,1);
     cm.gainItem(1072485,1);
     cm.gainItem(1402095,1);
     cm.gainItem(1422066,1);
     cm.gainItem(1412065,1);
     cm.gainItem(1312065,1);
     cm.gainItem(1322096,1);
     cm.gainItem(1302152,1);
     cm.gainItem(1442116,1);
     cm.gainItem(1432086,1);
     cm.sendOk("��m�K��.");
	 cm.dispose();
}else{
                cm.sendOk("#b��棓��a��V#v4000038#?��?�~�˔��͐�");
                cm.dispose();
            }
            break;
        case 1:
if (cm.haveItem(4000038 ,20) == true) {
cm.gainItem(4000038 ,-20);
cm.gainItem(1003173,1);
    cm.gainItem(1102276,1);
    cm.gainItem(1082296,1);
    cm.gainItem(1052315,1);
    cm.gainItem(1072486,1);
    cm.gainItem(1382104,1);
    cm.gainItem(1372084,1);
     cm.sendOk("��m�K��.");
            cm.dispose();
}else{
                cm.sendOk("#b��棓��a��V#v4000038#?��?�~�˔��͐�");
                cm.dispose();
            }
            break;
        case 2:
if (cm.haveItem(4000038 ,20) == true) {
cm.gainItem(4000038 ,-20);
cm.gainItem(1003174,1);
    cm.gainItem(1102277,1);
    cm.gainItem(1082297,1);
    cm.gainItem(1052316,1);
    cm.gainItem(1072487,1);
    cm.gainItem(1452111,1);
    cm.gainItem(1462099,1);
    cm.gainItem(1522018,1);
     cm.sendOk("��m�K��.");
            cm.dispose();
}else{
                cm.sendOk("#b��棓��a��V#v4000038#?��?�~�˔��͐�");
                cm.dispose();
            }
            break;
        case 3:
if (cm.haveItem(4000038 ,20) == true) {
cm.gainItem(4000038 ,-20);
cm.gainItem(1003175,1);
    cm.gainItem(1102278,1);
    cm.gainItem(1082298,1);
    cm.gainItem(1052317,1);
    cm.gainItem(1072488,1);
    cm.gainItem(1362019,1);
    cm.gainItem(1332130,1);
    cm.gainItem(1472122,1);
    cm.gainItem(1342036,1);
     cm.sendOk("��m�K��.");
            cm.dispose();
}else{
                cm.sendOk("#b��棓��a��V#v4000038#?��?�~�˔��͐�");
                cm.dispose();
            }
            break;
        case 4:
if (cm.haveItem(4000038 ,20) == true) {
cm.gainItem(4000038 ,-20);
cm.gainItem(1003176,1);
    cm.gainItem(1102279,1);
    cm.gainItem(1082299,1);
    cm.gainItem(1052318,1);
    cm.gainItem(1072489,1);
    cm.gainItem(1482084,1);
    cm.gainItem(1492085,1);
    cm.gainItem(1532018,1);
     cm.sendOk("��m�K��.");
            cm.dispose();
}else{
                cm.sendOk("#b��棓��a��V#v4000038#?��?�~�˔��͐�");
                cm.dispose();
            }
            break;
        case 5:
            cm.dispose();
 cm.openNpc(9250133);
            break;
        case 6:
            cm.dispose();
 cm.openNpc(1012123);
            break;
        case 7:
            cm.dispose();
 cm.openNpc(9201195);
            break;
                       }
    }
}
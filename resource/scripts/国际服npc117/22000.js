/* Joyce
	Event NPC
*/

var status = -1;
var maps;
var pqMaps;
var selectedMap = -1;
var selectedArea = -1;

function start() {
    action(1, 0, 0);
    if (cm.isGMS()) {
        maps = Array(230000000, 260000000, 101000000, 211000000, 120030000, 130000200, 100000000, 103000000, 222000000, 240000000, 240070000, 104000000, 220000000, 120000000, 221000000, 200000000, 102000000, 300000000, 801000000, 540000000, 541000000, 250000000, 251000000
            , 551000000, 550000000, 800040000, 261000000, 541020000, 270000000, 682000000, 140000000, 970010000, 103040000, 555000000, 310000000, 200100000, 211060000, 310040300, 970020000, 960000000, 101050000); 
        pqMaps = Array(541000300, 220050300, 230040200, 541010010, 551030100, 240040500, 800020110, 801040004, 105030500, 102040200, 105100100, 211041100, 670010000, 310040200, 889100100, 951000000);
    } else {
        maps = Array(910001000, 680000000, 230000000, 260000000, 101000000, 211000000, 120030000, 130000200, 100000000, 103000000, 222000000, 240000000, 104000000, 220000000, 802000101, 120000000, 221000000, 200000000, 102000000, 300000000, 801000000, 540000000, 541000000, 250000000, 251000000
            , 551000000, 550000000, 800040000, 261000000, 541020000, 270000000, 682000000, 140000000, 970010000, 103040000, 555000000, 310000000, 200100000, 211060000, 310040300, 219000000, 960000000); 
        pqMaps = Array(682010200, 541000300, 220050300, 229000020, 230040200, 541010010, 551030100, 240040500, 800020110, 801040004, 105030500, 610020004, 102040200, 105100100, 211041100, 610030010, 670010000, 674030100, 310040200, 219010000, 219020000);
    }
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status >= 2 || status == 0) {
            cm.dispose();
            return;
        }
        status--;
    }
    if (status == 0) {
        if (!cm.isQuestFinished(29003) && !cm.haveItem(1142184, 1, true, true)) {
            if (!cm.haveItem(1002419, 1, true, true) && cm.canHold(1002419,1)) {
                cm.gainItem(1002419, 1);
            }
            if (cm.canHold(1142184,1)) {
                cm.gainItem(1142184, 1);
				cm.gainItem(2000005, 600);
                cm.gainMeso(1000000);
                cm.forceCompleteQuest(29003);
                cm.sendOk("?������ StarBlack.117�}?��!                 ");
            } else {
                cm.sendOk("Please get an inventory space.");
            }
            cm.dispose();
            return;
        }1012000
        cm.sendSimple("?! #r#h ##k!. \r\n#b#L100#?��NPC!#l\r\n#b#L3#�H�ʨ{?!#l\r\n#L11#��?�e��#l#k\r\n#L12##b��??#l#k\r\n#L14##b#v4000038#?��??#k#l\r\n#L16##b�g��?��?#k#l\r\n#L101##b��??�U#k#l\r\n#L133##b?�~���e#k#l\r\n");
    } else if (status == 1) {
        if (selection == 12) {
            cm.dispose();
            cm.openNpc(9900000);
            return;
        } else if (selection == 100) {
            cm.dispose();
            cm.openNpc(1012000);
            return;
        } else if (selection == 18) {
            cm.dispose();
            cm.openNpc(9900003);
            return;
} else if (selection == 122) {
            cm.dispose();
            cm.openShop(1503);
            return;
} else if (selection == 133) {
		cm.maxSkillsByJob();
		cm.dispose();
                    } else if (selection == 101) {
            cm.dispose();
            cm.openNpc(9001000);
            return;
                    } else if (selection == 102) {
            cm.dispose();
             cm.openShop(1500);
            return;
                    } else if (selection == 103) {
            cm.dispose();
            cm.openShop(1502);
            return;
              
        } else if (selection == 16) {
            cm.dispose();
            cm.openNpc(9900003);
            return;
        } else if (selection == 17) {
            cm.dispose();
            cm.openShop(305);
            return;
        } else if (selection == 19) {
			cm.dispose();
			cm.openShop(306);
			return;
		}
        else if (selection == 13) { 
            cm.sendOk("Beta is over , so this function have been removed. Please use vote points to get NX.");
            cm.dispose();
            return;
        }
        else if (selection == 14) {
            cm.dispose();
            cm.openNpc(9900002);
            return
        } else if (selection == 2) {
            status = 5;
            cm.sendSimple("#b#L1#Follow the Lead#l\r\n#L4#Monster Rider#l\r\n#L5#Monster Rider Shop#l#k");
        } else if (selection == 3) {
            cm.sendSimple("#b#L0#��?#l\r\n#L1#??[50��?]#l#k");
        } else if (selection == 5) {
            if (cm.getMeso() >= 1147483647) {
                cm.sendOk("You must have room for mesos before doing the trade.");
            } else if (!cm.haveItem(4001165, 1)){
                cm.sendOk("You do not have a Sunshine.");
            } else {
                if (cm.removeItem(4001165)) {
                    cm.gainMeso(1000000000);
                    cm.sendOk("Thank you for the trade, I have given you 1 billion for the Sunshine.");
                } else {
                    cm.sendOk("Please unlock your item.");
				}
            }
			cm.dispose();
        } else if (selection == 6) {
            if (cm.getMeso() < 1000000000) {
                cm.sendOk("You must have 1,000,000,000 mesos before doing the trade.");
            } else if (!cm.canHold(4001165,1)) {
                cm.sendOk("Please make room.");
            } else {
                cm.gainItem(4001165, 1);
                cm.gainMeso(-1000000000);
                cm.sendOk("Thank you for the trade, I have given you Sunshine for 1,000,000,000 meso (1 billion).");
				cm.dispose();
			}
        
        } else if (selection == 11) {
            cm.dispose();
            cm.openNpc(9270035);

        }
    } else if (status == 2) {
        var selStr = "Select your destination.#b";
        if (selection == 0) {
            for (var i = 0; i < maps.length; i++) {
                selStr += "\r\n#L" + i + "##m" + maps[i] + "# #l";
            }
        } else if (selection == 2) {
            cm.dispose();
            cm.openNpc(9010022);
            return;
 
        } else if (selection == 3) {
            cm.dispose();
            cm.openNpc(9070007);
            return;
        } else {
            for (var i = 0; i < pqMaps.length; i++) {
                selStr += "\r\n#L" + i + "##m" + pqMaps[i] + "# #l";
            }
        }
        selectedArea = selection;

        cm.sendSimple(selStr);
    } else if (status == 3) {
        cm.sendYesNo("So you have nothing left to do here? Do you want to go to #m" + (selectedArea == 0 ? maps[selection] : pqMaps[selection]) + "#?");
        selectedMap = selection;

    } else if (status == 4) {
        if (selectedMap >= 0) {
            cm.warp(selectedArea == 0 ? maps[selectedMap] : pqMaps[selectedMap], 0);
        }
        cm.dispose();
    } else if (status == 6) {
        if (selection == 1) {
            if (cm.getPlayer().getSkillLevel(8) > 0 || cm.getPlayer().getSkillLevel(10000018) > 0 || cm.getPlayer().getSkillLevel(20000024) > 0 || cm.getPlayer().getSkillLevel(20011024) > 0 || cm.getPlayer().getSkillLevel(30001024) > 0 || cm.getPlayer().getSkillLevel(30011024) > 0 || cm.getPlayer().getSkillLevel(20021024) > 0) {
                cm.sendOk("You already have this skill.");
            } else {
                if (cm.getJob() == 3001 || (cm.getJob() >= 3100 && cm.getJob() <= 3112)) {
                    cm.teachSkill(30011024, 1, 0); // Maker
                } else if (cm.getJob() >= 3000) {
                    cm.teachSkill(30001024, 1, 0); // Maker
                } else if (cm.getJob() == 2002 || cm.getJob() >= 2300) {
                    cm.teachSkill(20021024, 1, 0); // Maker
                } else if (cm.getJob() == 2001 || cm.getJob() >= 2200) {
                    cm.teachSkill(20011024, 1, 0); // Maker
                } else if (cm.getJob() >= 2000) {
                    cm.teachSkill(20000024, 1, 0); // Maker
                } else if (cm.getJob() >= 1000) {
                    cm.teachSkill(10000018, 1, 0); // Maker
                //} else if (cm.getJob() == 1 || cm.getJob() == 501 || (cm.getJob() > 522 && cm.getJob() <= 532)) {
                //	cm.teachSkill(10008, 1, 0); // Maker, idk TODO JUMP
                } else {
                    cm.teachSkill(8, 1, 0); // Maker
                }
                cm.sendOk("I have taught you Follow the Lead skill.");
            }
            cm.dispose();
        } else if (selection == 4) {
            if (cm.getPlayer().getSkillLevel(80001000) > 0 || cm.getPlayer().getSkillLevel(cm.getPlayer().getStat().getSkillByJob(1004, cm.getPlayer().getJob()))) {
                cm.sendOk("You already have this skill.");
            } else {
                if (cm.getJob() >= 3000) {
                    cm.sendOk("Sorry but Resistance characters may not get the Monster Riding skill.");
                    cm.dispose();
                    return;
                }
                cm.teachSkill(cm.isGMS() ? 80001000 : cm.getPlayer().getStat().getSkillByJob(1004, cm.getPlayer().getJob()), 1, 0); // Maker
                cm.sendOk("I have taught you Monster Rider skill.");
            }
            cm.dispose();
        } else if (selection == 5) {
            cm.openShop(40);
            cm.dispose();
        }
    }
}
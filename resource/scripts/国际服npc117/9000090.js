/* Author: Xterminator
	NPC Name: 		Heena
	Map(s): 		Maple Road : Lower level of the Training Camp (2)
	Description: 		Takes you outside of Training Camp
*/
var status = 0;

function start() {
    cm.sendSimple("��¾�� �Ш� �U��NPC�ʶR�Z��!#b\r\n#L0#���F�C�L#l\r\n#L1#�c�]����#l\r\n#L2#����#l\r\n#L3#�v�Z��#l                      ");
    
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.sendOk("Come back when you want to create one.");
        cm.dispose();
        return;
    }
    if (status == 0) {
        if (selection == 0) {
            if (cm.getPlayerStat("LVL") == 10 && cm.getJob() == 0) {
                cm.changeJob(2312);
                cm.sendOk("You character is now created.");
         cm.changeJob(2312);       cm.dispose();
            } else {
                cm.sendOk("You may not create a legend character because your level is too high or you do not have the required class.");
                cm.dispose();
            }
        } else if (selection == 1) {
            if (cm.getPlayerStat("LVL") == 10 && cm.getJob() == 0) {
                cm.changeJob(3112);
                cm.sendOk("You character is now created.");
                cm.dispose();
            } else {
                cm.sendOk("You may not create a legend character because your level is too high or you do not have the required class.");
                cm.dispose();
            }
        } else if (selection == 2) {
            if (cm.getPlayerStat("LVL") == 10 && cm.getJob() == 0) {
                cm.changeJob(512);
                cm.sendOk("You character is now created.");
                cm.dispose();
            } else {
                cm.sendOk("You may not create a legend character because your level is too high or you do not have the required class.");
                cm.dispose();
            }
        } else if (selection == 3) {
            if (cm.getPlayerStat("LVL") == 10 && cm.getJob() == 0 || cm.getPlayerStat("LVL") == 10 && cm.getJob() == 0) {
          cm.changeJob(434);
                cm.dispose();
            } else {
            cm.changeJob(434);    cm.sendOk("You may not create a Dual Blade character because your level is too high or you do not have the required class.");
                cm.dispose();
            }
        } else {
            cm.sendOk("Come back later.");
            cm.dispose();
        }
    }
}
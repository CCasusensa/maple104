/**
-- Odin JavaScript --------------------------------------------------------------------------------
	Shane - Ellinia (101000000)
-- By ---------------------------------------------------------------------------------------------
	Unknown
-- Version Info -----------------------------------------------------------------------------------
	1.1 - Statement fix [Information]
	1.0 - First Version by Unknown
---------------------------------------------------------------------------------------------------
**/

var status = 0;
var check = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 0) {
	cm.sendOk("Alright, see you next time.");
	cm.dispose();
	return;
    }
    if (mode == 1) {
	status++;
    }
    else {
	status--;
    }
    if (status == 0) {
	if (cm.getPlayerStat("LVL") < 25) {
	    cm.sendOk("你必须提高自己的等级，才能进去！");
	    cm.dispose();
	    check = 1;
	}
	else {
	    cm.sendYesNo("嗨！我叫塞恩。你想进去吗？但是你得付5000金币才能进去哦。");
	}
    } else if (status == 1) {
	if (check != 1) {
	    if (cm.getMeso() < 5000) {
		cm.sendOk("看来你没有足够的资金！")
		cm.dispose();
	    }
	    else {
		if (cm.getQuestStatus(2050) == 1 || cm.getPlayerStat("LVL") < 50) {
		    cm.warp(910130000, 0);
		}
		else if (cm.getQuestStatus(2051) == 1 || cm.getPlayerStat("LVL") >= 50) {
		    cm.warp(910130100, 0);
		}
		cm.gainMeso(-5000);
		cm.dispose();
	    }
	}
    }
}	


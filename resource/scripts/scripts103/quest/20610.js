/*
 * Cygnus Skill -
 */

var status = -1;

function start(mode, type, selection) {
    status++;

    if (status == 0) {
	qm.sendAcceptDecline("����ܽ������");
    } else if (status == 1) {
	    qm.forceStartQuest();
	qm.dispose();
    }
}

function end(mode, type, selection) {
    qm.dispose();
}

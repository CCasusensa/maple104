/*
	NPC Name: 		Athena Pierce
	Map(s): 		Maple Road : Spilt road of choice
	Description: 		Job tutorial, movie clip
*/

var status = -1;

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 1) {
            cm.sendNext("�����鹭�ֵĻ�,�������Ұ�.");
            cm.dispose();
            return;
        }
        status--;
    }
    if (status == 0) {
       cm.MovieClipIntroUI(false);
        cm.sendNext("����ӵ�и����ݼ�����,��ս���и���Զ���빥��,���繭��ְҵ����������õ��ƵĻ�,���Կ��Ƿǳ���������.");
    } else if (status == 1) {
        cm.sendYesNo("��ô��,�����鹭��ô?");
    } else if (status == 2) {
  //      cm.MovieClipIntroUI(true);
     cm.warp(914090010, 0);
        //   cm.Thread.sleep(5000)
   // cm.warp(1020000, 0); // Effect/Direction3.img/archer/Scene00
    cm.ShowWZEffect("Effect/Direction4.img/effect/cannonshooter/balloon/0");
        cm.MovieClipIntroUI(false);
        cm.dispose();
    }
}
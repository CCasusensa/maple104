/* ===========================================================
			注释(cm.sendSimple\cm.itemQuantity(5420008))
	脚本类型: 		QUEST
	脚本名字:		发现了陈旧的运营员鞋子！
	完成任务函数：qm.forceCompleteQuest();
	接受任务函数：qm.forceStartQuest();
=============================================================
制作时间：2010年8月22日 13:39:14
制作人员：笔芯
=============================================================
*/
var a = -1;

function end(mode, type, selection) {//任务完成
    if (mode == -1) {
        qm.dispose();
    } else {
        if (mode == 1)
            a++;
        else
            a--;
        if(a == -1){
            qm.dispose();
        }else if (a == 0) {
            qm.sendNext("什么？分析遗物的时候，发现了#b运营员鞋子#k？")
        }else if ( a == 1){
            qm.sendNext("哦…… 这个鞋子呀，我想起来了。")
        }else if ( a == 2){
            qm.sendNext("这是我在追赶非法程序使用者的时候把鞋子弄丢了，感谢你把他找了回来。")
        }else if ( a == 3){
            qm.sendNext("#b（看来这个东西#b冒险岛运营员#k很重要，我去找找其它的遗物吧。）",2)
        }else if ( a == 4){
            qm.forceCompleteQuest();
            qm.dispose();
        }//status
    }//mode
}//function

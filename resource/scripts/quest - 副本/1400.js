/* Dawnveil
	The 5 paths 
	Mai
    Made by Daenerys
*/
var status = -1;
var sel = 0;

function start(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	if (status == 0) {
	    qm.safeDispose();
	    return;
	}
	status--;
    }
    if (status == 0) {
        qm.sendAcceptDecline("��,Ϊ�����ˮ׼ȡ�����ý�չ�����������ѡ��ʲôְҵ��?�������һ��սʿ�������͸߷���,ħ��ʦ����෨��,��Զ����ļ��Ĺ�����,����һ������,ʹ�ÿ��١����ɵ�Ϯ��,������ָ����ĺ��������ܡ���!");
		qm.startQuest(1400);
	} else if (status == 1) {
        qm.sendSimple("�����ȥά�����ǵ�,�������ǰ������ѡ���ְҵҪ���ʵ�ְҵָ������������֮ǰ,����֪����һ�������Ȥ��,�ҽ�����# bthem # kһ���Ƽ��š��⽫ʹ��������ƽ�!��ô,���ѡ��ʲôְҵ?\r\n#b#L0#I �����Ϊһ��ΰ���սʿ��!#l\r\n#b#L1#I �����Ϊһ�����ص�ħ��ʦ!#l\r\n#b#L2#I �����Ϊһ��������!#l\r\n#b#L3#I �����Ϊһ�����ɵ�С͵!#l\r\n#b#L4#I �����Ϊһ���������Ƶĺ���!#l");
    } else if (status == 2) {
        sel = selection;
	if (selection == 0) {
        qm.sendNext("һ��սʿ,����?�к�,�㽫�õ���ǿ!���ǿ��԰ѳɶֵ��˺�,�Ͳ��㹻�ˡ��ð�,�ҽ������ҵĽ�������# # bDances k,սʿ��������
.");
        } else if (selection == 1) {
		qm.sendNext("�����Ϊһ��ħ��ʦ?���ǿ϶������ص�!���ǵ�ħ���ǳ���ǿ��,�и��ָ�����Ч�������ܵ���ħ��ʦ����֪�����ǵ�����!�ð�,�Ұ��ҵĽ���# bGrendel�����# k,ħ��ʦ��������
.");
        } else if (selection == 2) {
		qm.sendNext("�����Ϊһ��������?��ϣ�����зǳ��õ�Ŀ��!ΰ�������,����û��������⹥���ͷ����˴����������Լ��ġ��ð�,�Ұ��ҵĽ���# bAthenaƤ��˹# k,�����Ĺ���ָ��
.");
        } else if (selection == 3) {
		qm.sendNext("����һ��С͵,����?������˿��ٺͱ���,���˲��������ǵ���,ֱ��Ϊʱ��������̫����!�ð�,�ҽ����ҵ��Ƽ�����# # bDark k,С͵��������
.");
        } else if (selection == 4) {
		qm.sendNext("һ��������?Yarr !��������ǹս�����ս������,��������!�Ҿ��������ս���ð�,�Ұ��ҵĽ���# bKyrin # k,������������
.");
        }
    } else if (status == 3) {
	    if (sel == 0) {
		qm.sendNextPrev("������ϵ���㵽��Lv��10����Ϊһ��ΰ���սʿ
!");
		qm.forceStartQuest(1401);
	    qm.forceCompleteQuest(1400);
		qm.dispose();
	    } else if (sel == 1) {
		qm.sendNext("��֪��ħ��ʦ�����ǵĹ�����������������,����?���׵¶�����ϻ���ϵ��һ����ﵽLv��8����Ϊһ�������ħ��ʦ
!");
		qm.forceStartQuest(1402);
		qm.forceCompleteQuest(1400);
		qm.dispose();
		} else if (sel == 2) {
		qm.sendNext("������ϵ��һ����ﵽ# bLv��10 # k����ϣ�����Ϊһ����ΰ�Ĺ�����
!");
		qm.forceStartQuest(1403);
		qm.forceCompleteQuest(1400);
		qm.dispose();
		} else if (sel == 3) {
		qm.sendNext("�������# bLv��10 # k,������ϵ�㡣��Ϊһ��ΰ���С͵,������
?");
		qm.forceStartQuest(1404);
		qm.forceCompleteQuest(1400);
		qm.dispose();
		} else if (sel == 4) {
		qm.sendNext("������ϵ��һ����ﵽ# bLv��10 # k����Ϊһ�������ĺ���
!");
		qm.forceStartQuest(1405);
		qm.forceCompleteQuest(1400);
		qm.dispose();
	   }
	    qm.dispose();
    }
}
/* 
��о����
��ͬ���ڽ�ֹת��
�ű����ͣ�QUEST
�ű����ݣ�ղķ˹������(2)
cm.sendSimple

*/
var status = -1;

function start(mode, type, selection) {//����ʼ
	if (mode == -1) {
		qm.dispose();
	} else {
		if (mode == 1)
			status++;
		else
			status--;
if (status == -1){
qm.sendOk("��ô�ˣ�����������ô������")
qm.dispose();
}else{
		if (status == 0) {
		qm.sendSimple("#h #������̫�����ˣ���ʵ�ڲ��ҳ�ȥ����#b\r\n\r\n#L0# ��ʲô�ҿ��԰�������")
		}else if (status == 1){//��ʲô�ҿ��԰�������
		if (selection == 0){
		qm.sendNext("����̫�����ˡ��������ٰ���һ��������")
		}
}else if (status == 2){
qm.forceStartQuest();
qm.dispose();
}else if (status == 3){
qm.dispose();
			
		}//status
	}//mode
}//function
}


function end(mode, type, selection) {//����ʼ
	if (mode == -1) {
		qm.dispose();
	} else {
		if (mode == 1)
			status++;
		else
			status--;
if (status == -1){
qm.sendOk("��ô�ˣ�����������ô������")
qm.dispose();
}else{
		if (status == 0) {
		qm.sendNext("#h #����ô�ˣ���תְ�̹ٽ��������𣿺ðɣ��������и���һ��תְ�ٵ��Ƽ���ɣ�",8)
		}else if (status == 1){//��ʲô�ҿ��԰�������
		qm.sendNext("#b�������ڴ�����תְ�ٵ��Ƽ��齻�������ӳ�������",2)	
}else if (status == 2){
		qm.sendNext("���׷���ʲô�����ˣ�",2)
}else if (status == 3){
		qm.sendNext("Ģ���Ǳ��Ĺ��������ˣ�����һ���һ�������⵺�Ĺ�������֮Σ����ͼ��Ģ���Ǳ��������ˡ������һ�Ҫ��Ģ���ǵĹ����޸�������������ӡ���",8)
}else if (status == 4){
		qm.sendNext("����������ʲô�����ˣ�",2)
}else if (status == 5){
		qm.sendNext("������������ϴ�棬Ģ���Ǳ��Ĺ�������һ�첻��һ�죬�ۿ����������Ҫ�ư�Ģ�����ˡ�ð�ռң����ܰ�������",8);
}else if (status == 6){
		qm.sendNext("���ԣ���һ���ᱣ����Ģ���Ǳ���������������Ĺ����óѣ�",2)
}else if (status == 7){
		qm.forceCompleteQuest();
		qm.dispose();
		}//status
	}//mode
}//function
}


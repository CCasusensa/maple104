//��о����
var status = -1;

function start(mode, type, selection) {//������
	if (mode == -1) {
		qm.dispose();
	} else {
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			qm.sendNext("���ҿ�����������ȡ�������");
		} else if (status == 1) {
			qm.sendNextPrev("�š���ֻҪ��������ȴﵽ10000�㣬�ҾͿ��Ը������ѫ�¡�");
		} else if (status == 2) {
			qm.forceStartQuest();
			qm.dispose();
		} else if (status == 3){
			qm.dispose();
		}
	}
}
function end(mode, type, selection) {//�������ʱ����ж���
if (mode == -1) {
		qm.dispose();
	} else {
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			qm.sendNext("���ҿ�����������ȡ�������");
		} else if (status == 1) {
			if(qm.getfame() == 10000){
			qm.sendNext("�š����治��������������Ⱦ�Ȼ�ﵽ�����ֵ��")
			}else{
			qm.sendNext("�š���������������Ȼ�û�дﵽ����Ҫ��ѽ��������")
			qm.dispose();
			}
		} else if (status == 2) {
			qm.sendNext("��!����Լ�����Ҹ���һ��������������")
		} else if (status == 3){
			qm.dispose();
		}
	}
}

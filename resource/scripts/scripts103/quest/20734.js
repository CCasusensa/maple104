var a = -1;

function start(mode, type, selection) {//������
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
				qm.sendNext("��ã���ʿ�ų�������ð�յ��������ٷǳ�Σ�յ������Ҫ���ֹ��ħ��ʦ�ַ������Ҫ����ı�����Ϊ����ʿ���Ǳ�ø�ǿ���Ҿ�����ð�ռҳ����Ǻ������������˱�ð�ռҸ�ǿ���ռ�ð�ռҡ�")
			}else if (a == 1) {
				qm.sendNext("�ռ�ð�ռ�һ��������50��������ӵ������ļ��ܡ���ô���������ռ�ð�ռҵ���ò���������")
			}else if (a == 2) {
				qm.dispose();
		}//status
	}//mode
}//function
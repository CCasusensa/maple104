var a = 0;

function start() {
	a = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (mode == 1)
			a++;
		else
			a--;
			if (a == -1){
				cm.sendNext("�ס������ڲ���ȥ��\r�Ǻðɣ���ӭ�Ժ������ɡ�")
				cm.dispose();
			}else
				if (a == 0) {
					cm.sendYesNo("Ŷ...����ȥ���ĺ�����\r�⹬��λ�����ϣ�ȥ�Ļ�Ҫ����ǮŶ��")
				}else if (a == 1){
					cm.sendNextPrev("�š�����ȥ��𽹬��\r���ȸ�#e2000���#n���Ҿ�����ȥ�������Żݼ�����")
				}else if (a == 2){
					cm.sendNextPrev("�ã�������#e2000���#n��\r����������㵽#b����#k~��")
				}else if (a == 3){
					if (cm.getMeso() < 2000 ){
						cm.sendOk("��Ľ�Ҳ���֧���˷��á�")
						cm.dispose();
					}else{
						cm.warp(700000000);
						cm.gainMeso(-2000)
						cm.dispose();
					}
	}//status
}
}
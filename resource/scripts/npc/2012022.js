var status = -1;

function action(mode, type, selection) {
    status++;
    if (mode == 0) {
	cm.sendOk("��;���������������о����ģ����Ժʹ��ϵ����������ģ�");
	cm.safeDispose();
	return;
    }
    if (status == 0) {
	cm.sendYesNo("һ���뿪���¡��ͻ�ص�ԭ���ĵط�����ȷ��Ҫ�´���");
    } else if(status == 1) {
	cm.warp(200000131, 0);
	cm.dispose();
    }
}
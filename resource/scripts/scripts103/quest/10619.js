/*
�ű����ͣ�Quest
�ű�ID��10619
�ű����֣���Ӱ˫�� - ÿ����������
�ű����ڵ�ͼ��X
�ű������ߣ���о
*/
var status = -1;

function end(mode, type, selection) {//������
    if (mode == -1) {
        qm.dispose();
    } else {
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
            if (qm.haveItem(3994193)){
                qm.sendSimple("���ҫ�۵���ë��������������ʲô�����أ�\r\n#b#L0# #i2022694# #t2022694##l\r\n#L1# #i2450018# #t2450018##l")
            }else{
                qm.sendOk("#r����#k����͹���Ա��ϵ��")
                qm.dispose();
            }
        } else if (status == 1) {
            if(selection == 0){
                qm.sendOk("�����˾���ֵ2�����档�ڽ���ȥ��30�����ڣ�����ʱ��õľ���ֵ���Ϊ2�����˳���Ϸ���ɫ����ʱ������Ч����ʧ������ע�⡣")
                //(��Ҫ�Զ�ʹ��������ߵġ���û����)qm.gainItem(2450018,1)//��Ӱ˫��-����ֵ2����
                qm.dispose();
            }else{
                qm.sendOk("�����˹��ﱩ��2�����档�ڽ���ȥ��30�����ڣ�����ʱ��õľ���ֵ���Ϊ2�����˳���Ϸ���ɫ����ʱ������Ч����ʧ������ע�⡣")
                //(��Ҫ�Զ�ʹ��������ߵġ���û����)qm.gainItem(2022694,1)//��Ӱ˫��-������2����
                qm.dispose();
            }//selection
        }//status
    }//mode
}//function
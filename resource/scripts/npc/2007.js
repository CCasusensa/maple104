var job;
function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (cm.getJob() == 2000) {
        cm.warp(914000000);
//      cm.sendNext("ս��");
        cm.dispose();
    } else {
        if (cm.getJob() == 1000) {
            cm.warp(130030000);
//          cm.sendNext("��ʿ��");
            cm.dispose();
        }
        if (cm.getJob() == 3000) {
            cm.warp(931000000);
//          cm.sendNext("������");
            cm.dispose();
        }
        if (cm.getJob() == 2001) {
            cm.warp(900010200);
// 100030100   900090000      cm.sendNext("����");
            cm.dispose();
        }
        if (cm.getJob() == 508) {
            cm.sendNext("���Ĵ���");
            cm.dispose();
        }
        if (cm.getJob() == 2002) {
            cm.sendNext("˫����");
            cm.dispose();
        }
        if (cm.getJob() == 3001) {
            cm.sendNext("��ħ����");
            cm.dispose();
        }
        if (cm.getJob() == 2003) {
            cm.sendNext("��Ӱ");
            cm.dispose();
        }
        if (cm.getJob() == 5000) {
            cm.sendNext("�׹���");
            cm.dispose();
        }
        if (cm.getJob() == 3001) {
            cm.sendNext("��ħ����");
            cm.dispose();
        }
        if (cm.getJob() == 2004) {
            cm.sendNext("ҹ�ⷨʦ");
            cm.dispose();
        } 
        if (cm.getJob() == 6500) {
            cm.sendNext("��������ʹ");
            cm.dispose();
        }
        if (cm.getJob() == 6000) {
            cm.sendNext("����սʿ");
            cm.dispose();
        }else {
            status--;
        }
        if (cm.getJob() == 0) {
            cm.dispose();
        } else if (cm.getJob() == 2) {
            cm.warp(104000000);
            cm.dispose();
        }
    }
}

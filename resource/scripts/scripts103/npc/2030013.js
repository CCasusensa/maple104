importPackage(net.sf.odinms.tools);
importPackage(net.sf.odinms.client);

/* Adobis
Zakum entrance
*/
var status = 0;
var price = 5000000;
var map = Array(240010501);

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0 && status == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
            cm.sendSimple("��ʿ, #h #. ��ӭ���� #g�����ļ�̨���#k.������3���ٻ�. #dÿ��ֻ�ܽ��������ļ�̨5��.#k#r�������Ѿ�����"+cm.getBossLog('ZAKUM')+"��#k.#k#l ����Ҫ�л�����?\r\n#L0##b���� ����(5,000,000 ð�ձ�)#l#k\r\n\#L1##r����������̨.#l");
        } else if (status == 1) {
            if (selection == 0) {
                if(cm.getMeso() >= 5000000) {
                    cm.gainMeso(-5000000);
                    cm.gainItem(4001017, 1);
                } else {
                    cm.sendOk("��ȷ�����İ��������㹻�Ľ��.");
                }
                cm.dispose();
            } else if (status == 2) {
            } else if (selection == 1 && cm.getLevel() >= 100) {
                if (cm.getBossLog('ZAKUM') < 5 && cm.getC().getChannel() > 1 && cm.getC().getChannel() < 4)
                {
                    if(cm.getC().getChannel() == 3){
                        cm.warp(280030001, 0);
                    }else{
                        cm.warp(280030000, 0);
                    }
                    cm.setBossLog('ZAKUM');
                    cm.dispose();
                }
                else
                {
                    cm.sendOk("��û��������������\r\n��ÿ��ֻ�ܽ���������̳5��.\r\n����BOSS������2-3Ƶ�����ٻ�.������3���ٻ�.");
                    mode = 1;
                    status = -1;
                }
            }
            else{
                cm.sendOk("�����ﵽ100�����ϲ�����ս #m280030000#.");
                mode = 1;
                status = -1;
            }
        }
    }
}
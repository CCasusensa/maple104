//Kippieeej for the base of the script, Mikethemak for editing it for this function.
var status = 0;

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
                cm.sendSimple("Hello #h #, ��ӭ���� #rëëð�յ�#k\r\n����н�����!�������ｻ�׽���ȡ�н��200���Ŷ��~ \r\n#L1##bʹ��5000���һ�1�� #v4002001##k#l \r\n \r\n#L2##bʹ��1�� #v4002001#�һ�4800���#k#l\r\n #L3##bʹ��1000���2000W��Ϸ��#k#l");
        //cm.dispose();
            } else if (status == 1) {
            if (selection == 1) {
    if (cm.itemQuantity(4002001) >= 50) {
    cm.sendOk(" �㴢�����㹻�� #v4002001# ��, �㲻���ڴ�Ÿ���� #v4002001# ��");
    cm.dispose();
        }  else if (cm.getChar().getNX() >= 5000) {
                    cm.gainNX(-5000);                
                    cm.gainItem(4002001, 1); 
                    cm.dispose();
                } else {
                    cm.sendOk("You don't have enough #bMesos#k, are you trying to #eScam#k me!?");
                    cm.dispose();
                }                                
            } else if (selection == 2) {
        if (cm.getMeso() >= 2100000000) {
        cm.sendOk("�뻨�������ϵ�Ǯ�ɣ�ǿ�жһ���ʹ���Ǯ��ɸ���Ŷ���Ǻ�");
                cm.dispose();
        } else if (cm.itemQuantity(4002001) >= 1) {
                   cm.gainNX(4800);                
                    cm.gainItem(4002001, -1); 
                    cm.dispose();
                } else {
                    cm.sendOk("��û�� #v4002001#. ��Ҫ������������ƭ���κζ���!");
                    cm.dispose();
                }    
            } else if (selection == 3) {
    if (cm.itemQuantity(5200000) >= 50) {
    cm.sendOk(" �����㹻��� #v5200001# ��, ���Ŷһ�һ���� #v5200001# �������Ҷһ�����.");
    cm.dispose();
    } else if (cm.getChar().getNX() >= 1000) {
                    cm.gainNX(-1000);                
                     cm.gainMeso(20000000);
                    cm.dispose();
                } else {
                    cm.sendOk("You don't have enough #bMesos#k, are you trying to #eScam#k me!?");
                    cm.dispose();
                  }
        } else if (selection == 4) {
        if (cm.getMeso() >= 1147000000) {
        cm.sendOk("�뻨�������ϵ�Ǯ�ɣ�ǿ�жһ���ʹ���Ǯ��ɸ���Ŷ���Ǻ�");
                cm.dispose();
                } else if (cm.itemQuantity(5200001) >= 1) {
                    cm.gainMeso(950000000);                
                    cm.gainItem(5200001, -1); 
                    cm.dispose();
                } else {
                    cm.sendOk("�������û�� #v5200001#. ����Ǯ����������,��ɲ�����ѷ���!");
                    cm.dispose();
              }    
            } else if (selection == 5) {
    if (cm.itemQuantity(5200000) >= 50) {
    cm.sendOk(" �����㹻��� #v5200000# ��, �ȶһ�һ���� #v5200000# �������������һ�ͭ�Ұ�����");
    cm.dispose();
    } else if (cm.getMeso() >= 500000000) {
                    cm.gainMeso(-500000000);                
                    cm.gainItem(5200000, 1); 
                    cm.dispose();
                } else {
                    cm.sendOk("You don't have enough #bMesos#k, are you trying to #eScam#k me!?");
                    cm.dispose();
            }
                } else if (selection == 6) {
        if (cm.getMeso() >= 1647000000) {
        cm.sendOk("�뻨�������ϵ�Ǯ�ɣ�ǿ�жһ���ʹ���Ǯ��ɸ���Ŷ���Ǻ�");
                cm.dispose();
                } else if (cm.itemQuantity(5200000) >= 1) {
                    cm.gainMeso(450000000);                
                    cm.gainItem(5200000, -1); 
                    cm.dispose();
                } else {
                    cm.sendOk("�������û�� #v5200000#. ����Ǯ�������Ҷһ���!.");
                    cm.dispose();
                    }    
                }
            }
        }
    }

function start() {
    status = -1;
	
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    }
    else {
        if (status >= 0 && mode == 0) {
                
            cm.sendOk("�õ�,����������Ҫ��ʲô,�һ�������Ϊ������..");
            cm.dispose();
            return;                    
        }
        if (mode == 1) {
            status++;
        }
        else {
            status--;
        }
        if (status == 0) {
            cm.sendSimple("#v3994102##v3994103##v3994104##v3994105#\r\n\r\n\r\nӭ����"+cm.GetSN()+"��,�����������Ҫ����Ʒ���ҿ��Ը���һ������߾��飬����ҩˮ�ȵȺö���Ŷ����ô������Ҫ���һ�ô��\r\n\r\n#L0##v3994115# [ʹ��100��#v4000001#��10����]#l\r\n#L1##v3994116# [ʹ��100��#v4000082#��2000����]#l\r\n#L2##v3994117# [ʹ��1��#v4001083#��һ��#v4001210#]#l\r\n#L3##v3994117# [ʹ��1��#v4001084#��һ��#v4001210#]#l\r\n#L4##v3994117# [ʹ��1��#v4001085#��һ��#v4001210#]#l\r\n#L5##v3994118# [ʹ��5��#v4001210#��500���]#l\r\n#L6##v3994118# [ʹ��1��#v4001210#��#v1302024#]#l\r\n#L7##v3994118# [ʹ��1��#v4001210#��#v2028010#]#l\r\n#L8##v3994118# [ʹ��10��#v2028010#��#v2049300#]#l\r\n#L9##v3994118# [ʹ��10��#v4001210#��#v2028063#]#l\r\n#L10##v3994118# [ʹ��1��#v2028063#��#v3010183#]#l");
        } else if (status == 1) {
            if (selection == 0) {
                if(cm.haveItem(4000001) == true) {
                    cm.gainItem(4000001,-100); 
                    cm.gainMeso(100000);//�һ�10����
                    cm.sendOk("��ϲ���ɹ���ȡ5���飬���ٽ�������");
                    cm.dispose();
                } else {
                    cm.sendOk("�㱳����û���㹻��#v4000001#�����ܻ�ȡӴ���Ͻ�ȥ���"); 
                    cm.dispose();
                }
            } else if (selection == 1) {
                if(cm.haveItem(4000082) == true) {
                    cm.gainItem(4000082,-100); 
                    cm.gainExp(20000000);//�һ�2000����
                    cm.sendOk("��ɹ���ȡ��20����,���ٽ�������");
                    cm.dispose();
                } else {
                    cm.sendOk("�㱳����û���㹻��#v4000082#�����ܻ�ȡӴ���Ͻ�ȥ���"); 
                    cm.dispose();
                }
            } else if (selection == 2) {
                if(cm.haveItem(4001083) == true) {
                    cm.gainItem(4001083,-1); 
                    cm.gainItem(4001210,+1);//�һ���Ե��
                    cm.sendOk("��ɹ���ȡ��1����Ե�����");
                    cm.dispose();
                } else {
                    cm.sendOk("�㱳����û��#v4001083#�����ܻ�ȡӴ��"); 
                    cm.dispose();
                }
            } else if (selection == 3) {
                if(cm.haveItem(4001084) == true) {
                    cm.gainItem(4001084,-1); 
                    cm.gainItem(4001210,+1);//�һ���Ե��
                    cm.sendOk("��ɹ���ȡ��1����Ե�����");
                    cm.dispose();
                } else {
                    cm.sendOk("�㱳����û��#v4001084#�����ܻ�ȡӴ��"); 
                    cm.dispose();
                }
            } else if (selection == 4) {
                if(cm.haveItem(4001085) == true) {
                    cm.gainItem(4001085,-1); 
                    cm.gainItem(4001210,+1);//�һ���Ե��
                    cm.sendOk("��ɹ���ȡ��1����Ե�����");
                    cm.dispose();
                } else {
                    cm.sendOk("�㱳����û��#v4001085#�����ܻ�ȡӴ��"); 
                    cm.dispose();
                }
            } else if (selection == 5) {
                if(cm.haveItem(4001210) == true) {
                    cm.gainItem(4001210,-5); 
                    cm.getChar().modifyCSPoints(1,500);//�һ����
                    cm.sendOk("��ɹ���ȡ��500���");
                    cm.dispose();
                } else {
                    cm.sendOk("�㱳����û���㹻��#v4001210#�����ܻ�ȡӴ��"); 
                    cm.dispose();
                }
            } else if (selection == 6) {
                if(cm.haveItem(4001210) == true) {
                    cm.gainItem(4001210,-1); 
                    cm.gainItem(1302024,+1);//�һ�������ֽ
                    cm.sendOk("��ɹ���ȡ��������ֽ��");
                    cm.dispose();
                } else {
                    cm.sendOk("�㱳����û���㹻��#v4001210#�����ܻ�ȡӴ��"); 
                    cm.dispose();
                }
            } else if (selection == 7) {
                if(cm.haveItem(4001210) == true) {
                    cm.gainItem(4001210,-1); 
                    cm.gainItem(2028010,+1);//�߼�Ǳ�ܶһ���
                    cm.sendOk("��ɹ���ȡ����");
                    cm.dispose();
                } else {
                    cm.sendOk("�㱳����û���㹻��#v4001210#�����ܻ�ȡӴ��"); 
                    cm.dispose();
                }
            } else if (selection == 8) {
                if(cm.haveItem(2028010) == true) {
                    cm.gainItem(2028010,-10); 
                    cm.gainItem(2049300,+1);//�߼�Ǳ�ܶһ���
                    cm.sendOk("��ɹ���ȡ����");
                    cm.dispose();
                } else {
                    cm.sendOk("�㱳����û���㹻��#v2028010#�����ܻ�ȡӴ��"); 
                    cm.dispose();
                }
            } else if (selection == 9) {
                if(cm.haveItem(4001210) == true) {
                    cm.gainItem(4001210,-10); 
                    cm.gainItem(2028063,+1);//���ܲ����Ӷһ���
                    cm.sendOk("��ɹ���ȡ����");
                    cm.dispose();
                } else {
                    cm.sendOk("�㱳����û���㹻��#v4001210#�����ܻ�ȡӴ��"); 
                    cm.dispose();
                }
            } else if (selection == 10) {
                if(cm.haveItem(2028063) == true) {
                    cm.gainItem(2028063,-1); 
                    cm.gainItem(3010183,+1);//���ܲ����Ӷһ�
                    cm.sendOk("��ɹ���ȡ�����ܲ����ӡ�");
                    cm.dispose();
                } else {
                    cm.sendOk("�㱳����û���㹻��#v2028063#�����ܻ�ȡӴ��"); 
                    cm.dispose();
                }
            }
        }
    }
}

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
			cm.sendSimple("#v3994102##v3994103##v3994104##v3994105#\r\n\r\n\r\nӭ����099����ð�յ���,�����������Ҫ����Ʒ���ҿ��Ը���һ������߾��飬����ҩˮ�ȵȺö���Ŷ����ô������Ҫ���һ�ô��\r\n\r\n#L0##v3994115# [ʹ��100��#v4032056#��#v2000005#  ����ҩˮ100��]#l\r\n#L1##v3994115# [ʹ��100��#v4032056#��#v2290153#  [���ֲ�]˫���籩 20 һ��]#l\r\n#L2##v3994115# [ʹ��300��#v4032056#��#v2022141#  ������100��]#l\r\n#L3##v3994115# [ʹ��700��#v4032056#��#v1012084#  С������װһ��]#l\r\n#L4##v3994115# [ʹ��700��#v4032056#��#v1012267#  ���ѩ��һ��]#l\r\n#L5##v3994115# [ʹ��700��#v4032056#��#v2290155#  [���ֲ�]������� 30 һ��]#l\r\n#L6##v3994115# [ʹ��700��#v4032056#��#v2290154#  [���ֲ�]����� 20 һ��]#l\r\n#L7##v3994116# [ʹ��1000��#v4032056#��#v1012161#  ����ı���һ��]#l\r\n#L8##v3994116# [ʹ��1000��#v4032056#��#v1012056#  ������һ��]#l\r\n#L9##v3994116# [ʹ��2000��#v4032056#��#v3010107#  �����ĵ�����һ��]#l\r\n#L10##v3994116# [ʹ��2500��#v4032056#��#v3010003#  ��ɫʱ��ת��һ��]#l\r\n#L11##v3994116# [ʹ��2500��#v4032056#��#v1122018#  ��ů��Χ��һ��]#l\r\n#L12##v3994117# [ʹ��4000��#v4032056#��#v1122002#  ��ɫ������һ��]#l\r\n#L13##v3994117# [ʹ��4500��#v4032056#��#v3010077#  èͷӥ����һ��]#l\r\n#L14##v3994117# [ʹ��5200��#v4032056#��#v3010094#  ƯƯ������һ��]#l\r\n#L15##v3994117# [ʹ��7500��#v4032056#��#v3010095#  ʯͷ������һ��]#l\r\n#L16##v3994117# [ʹ��7500��#v4032056#��#v3010127#  ��������һ��]#l\r\n#L17##v3994118# [ʹ��9000��#v4032056#��#v1032084#  ������֮�Ͷ���һ��]#l\r\n#L18##v3994118# [ʹ��9000��#v4032056#��#v1142304#  2011������ѫ��һ��]#l\r\n#L19##v3994118# [ʹ��10000��#v4032056#��#v1142178#  ð�յ������ʹѫ��һ��]#l\r\n#L20##v3994118# [ʹ��10000��#v4032056#��#v3010144#  ��Ϧ����һ��]#l\r\n#L21##v3994118# [ʹ��12000��#v4032056#��#v3010128#  ��������һ��]#l\r\n#L22##v3994118# [ʹ��12500��#v4032056#��#v3010183#  ���ܲ�����һ��]#l\r\n#L23##v3994118# [ʹ��12500��#v4032056#��#v3010155#  ��Ӱ˫����èͷӥ����һ��]#l\r\n");
			} else if (status == 1) {
			if (selection == 0) {
			 if(cm.haveItem(4032056) == true) {
                   	   cm.gainItem(4032056,-100); 
                   	   cm.gainItem(2000005,+100); //����ҩˮ
                   	   cm.sendOk("��ϲ���ɹ���ȡ����ҩˮ100����");
               		   cm.dispose();
                   	   } else {
		   	   cm.sendOk("�㱳����û���㹻��#v4032056#�����ܻ�ȡӴ��"); 
		   	   cm.dispose(); }
			} else if (selection == 1) {
			 if(cm.haveItem(4032056) == true) {
                   	   cm.gainItem(4032056,-100); 
                   	   cm.gainItem(2290153,+1);//˫���籩��
                   	   cm.sendOk("��ɹ���ȡ����");
               		   cm.dispose();
                   	   } else {
		   	   cm.sendOk("�㱳����û���㹻��#v4032056#�����ܻ�ȡӴ��"); 
		   	   cm.dispose(); }
			} else if (selection == 2) {
			 if(cm.haveItem(4032056) == true) {
                   	   cm.gainItem(4032056,-300); 
                   	   cm.gainItem(2022141,+100);//������
                   	   cm.sendOk("��ɹ���ȡ��100��������");
               		   cm.dispose();
                   	   } else {
		   	   cm.sendOk("�㱳����û��#v4032056#�����ܻ�ȡӴ��"); 
		   	   cm.dispose(); }
			} else if (selection == 3) {
			 if(cm.haveItem(4032056) == true) {
                   	   cm.gainItem(4032056,-700); 
                   	   cm.gainItem(1012084,+1);//С�������
                   	   cm.sendOk("��ɹ���ȡ��С�������.");
               		   cm.dispose();
                   	   } else {
		   	   cm.sendOk("�㱳����û��#v4032056#�����ܻ�ȡӴ��"); 
		   	   cm.dispose(); }
			} else if (selection == 4) {
			 if(cm.haveItem(4032056) == true) {
                   	   cm.gainItem(4032056,-700); 
                   	   cm.gainItem(1012267,+1);//���ѩ��
                   	   cm.sendOk("��ɹ���ȡ�����ѩ��.");
               		   cm.dispose();
                   	   } else {
		   	   cm.sendOk("�㱳����û��#v4032056#�����ܻ�ȡӴ��"); 
		   	   cm.dispose(); }
			} else if (selection == 5) {
			 if(cm.haveItem(4032056) == true) {
                   	   cm.gainItem(4032056,-700); 
                   	   cm.gainItem(2290155,+1);//�������
                   	   cm.sendOk("��ɹ���ȡ����");
               		   cm.dispose();
                   	   } else {
		   	   cm.sendOk("�㱳����û���㹻��#v4032056#�����ܻ�ȡӴ��"); 
		   	   cm.dispose(); }
			   } else if (selection == 6) {
			 if(cm.haveItem(4032056) == true) {
                   	   cm.gainItem(4032056,-700); 
                   	   cm.gainItem(2290154,+1);//�����
                   	   cm.sendOk("��ɹ���ȡ����");
               		   cm.dispose();
                   	   } else {
		   	   cm.sendOk("�㱳����û���㹻��#v4032056#�����ܻ�ȡӴ��"); 
		   	   cm.dispose(); }
			   } else if (selection == 7) {
			 if(cm.haveItem(4032056) == true) {
                   	   cm.gainItem(4032056,-1000); 
                   	   cm.gainItem(1012161,+1);//�������
                   	   cm.sendOk("��ɹ���ȡ��������ӡ�");
               		   cm.dispose();
                   	   } else {
		   	   cm.sendOk("�㱳����û���㹻��#v4032056#�����ܻ�ȡӴ��"); 
		   	   cm.dispose(); }
			   } else if (selection == 8) {
			 if(cm.haveItem(4032056) == true) {
                   	   cm.gainItem(4032056,-1000); 
                   	   cm.gainItem(1012056,+1);//������
                   	   cm.sendOk("��ɹ���ȡ�������ǡ�");
               		   cm.dispose();
                   	   } else {
		   	   cm.sendOk("�㱳����û���㹻��#v4032056#�����ܻ�ȡӴ��"); 
		   	   cm.dispose(); }
			   } else if (selection == 9) {
			 if(cm.haveItem(4032056) == true) {
                   	   cm.gainItem(4032056,-2000); 
                   	   cm.gainItem(3010107,+1);//�����ĵ�������
                   	   cm.sendOk("��ɹ���ȡ�������ĵ������ӡ�");
               		   cm.dispose();
                   	   } else {
		   	   cm.sendOk("�㱳����û���㹻��#v4032056#�����ܻ�ȡӴ��"); 
		   	   cm.dispose(); }
			   } else if (selection == 10) {
			 if(cm.haveItem(4032056) == true) {
                   	   cm.gainItem(4032056,-2500); 
                   	   cm.gainItem(3010003,+1);//��ɫʱ��ת��
                   	   cm.sendOk("��ɹ���ȡ����ɫʱ��ת�����ӡ�");
               		   cm.dispose();
                   	   } else {
		   	   cm.sendOk("�㱳����û���㹻��#v4032056#�����ܻ�ȡӴ��"); 
		   	   cm.dispose(); }
			   } else if (selection == 11) {
			 if(cm.haveItem(4032056) == true) {
                   	   cm.gainItem(4032056,-2500); 
                   	   cm.gainItem(1122018,+1);//��ů��Χ��
                   	   cm.sendOk("��ɹ���ȡ����ů��Χ����");
               		   cm.dispose();
                   	   } else {
		   	   cm.sendOk("�㱳����û���㹻��#v4032056#�����ܻ�ȡӴ��"); 
		   	   cm.dispose(); }
			   } else if (selection == 12) {
			 if(cm.haveItem(4032056) == true) {
                   	   cm.gainItem(4032056,-4000); 
                   	   cm.gainItem(1122002,+1);//��ɫ������
                   	   cm.sendOk("��ɹ���ȡ����ɫ�����ᡣ");
               		   cm.dispose();
                   	   } else {
		   	   cm.sendOk("�㱳����û���㹻��#v4032056#�����ܻ�ȡӴ��"); 
		   	   cm.dispose(); }
			   } else if (selection == 13) {
			 if(cm.haveItem(4032056) == true) {
                   	   cm.gainItem(4032056,-4500); 
                   	   cm.gainItem(3010077,+1);//èͷӥ����
                   	   cm.sendOk("��ɹ���ȡ��èͷӥ���ӡ�");
               		   cm.dispose();
                   	   } else {
		   	   cm.sendOk("�㱳����û���㹻��#v4032056#�����ܻ�ȡӴ��"); 
		   	   cm.dispose(); }
			   } else if (selection == 14) {
			 if(cm.haveItem(4032056) == true) {
                   	   cm.gainItem(4032056,-5200); 
                   	   cm.gainItem(3010094,+1);//ƯƯ������
                   	   cm.sendOk("��ɹ���ȡ��ƯƯ�����ӡ�");
               		   cm.dispose();
                   	   } else {
		   	   cm.sendOk("�㱳����û���㹻��#v4032056#�����ܻ�ȡӴ��"); 
		   	   cm.dispose(); }
			   } else if (selection == 15) {
			 if(cm.haveItem(4032056) == true) {
                   	   cm.gainItem(4032056,-7500); 
                   	   cm.gainItem(3010095,+1);//ʯͷ�˱���
                   	   cm.sendOk("��ɹ���ȡ��ʯͷ�˱������ӡ�");
               		   cm.dispose();
                   	   } else {
		   	   cm.sendOk("�㱳����û���㹻��#v4032056#�����ܻ�ȡӴ��"); 
		   	   cm.dispose(); }
			   } else if (selection == 16) {
			 if(cm.haveItem(4032056) == true) {
                   	   cm.gainItem(4032056,-7500); 
                   	   cm.gainItem(3010127,+1);//��������
                   	   cm.sendOk("��ɹ���ȡ�������������ӡ�");
               		   cm.dispose();
                   	   } else {
		   	   cm.sendOk("�㱳����û���㹻��#v4032056#�����ܻ�ȡӴ��"); 
		   	   cm.dispose(); }
			   } else if (selection == 17) {
			 if(cm.haveItem(4032056) == true) {
                   	   cm.gainItem(4032056,-9000); 
                   	   cm.gainItem(1032084,+1);//������֮�Ͷ���
                   	   cm.sendOk("��ɹ���ȡ��������֮�Ͷ�����");
               		   cm.dispose();
                   	   } else {
		   	   cm.sendOk("�㱳����û���㹻��#v4032056#�����ܻ�ȡӴ��"); 
		   	   cm.dispose(); }
			   } else if (selection == 18) {
			 if(cm.haveItem(4032056) == true) {
                   	   cm.gainItem(4032056,-9000); 
                   	   cm.gainItem(1142304,+1);//2011����ѫ��
                   	   cm.sendOk("��ɹ���ȡ��2011����ѫ�¡�");
               		   cm.dispose();
                   	   } else {
		   	   cm.sendOk("�㱳����û���㹻��#v4032056#�����ܻ�ȡӴ��"); 
		   	   cm.dispose(); }
			   } else if (selection == 19) {
			 if(cm.haveItem(4032056) == true) {
                   	   cm.gainItem(4032056,-10000); 
                   	   cm.gainItem(1142178,+1);//ð�յ������ʹѫ��
                   	   cm.sendOk("��ɹ���ȡ��ð�յ������ʹѫ�¡�");
               		   cm.dispose();
                   	   } else {
		   	   cm.sendOk("�㱳����û���㹻��#v4032056#�����ܻ�ȡӴ��"); 
		   	   cm.dispose(); }
			   } else if (selection == 20) {
			 if(cm.haveItem(4032056) == true) {
                   	   cm.gainItem(4032056,-10000); 
                   	   cm.gainItem(3010144,+1);//��Ϧ����
                   	   cm.sendOk("��ɹ���ȡ����Ϧ���ӡ�");
               		   cm.dispose();
                   	   } else {
		   	   cm.sendOk("�㱳����û���㹻��#v4032056#�����ܻ�ȡӴ��"); 
		   	   cm.dispose(); }
			   } else if (selection == 21) {
			 if(cm.haveItem(4032056) == true) {
                   	   cm.gainItem(4032056,-12000); 
                   	   cm.gainItem(3010128,+1);//��������
                   	   cm.sendOk("��ɹ���ȡ�������������ӡ�");
               		   cm.dispose();
                   	   } else {
		   	   cm.sendOk("�㱳����û���㹻��#v4032056#�����ܻ�ȡӴ��"); 
		   	   cm.dispose(); }
			   } else if (selection == 22) {
			 if(cm.haveItem(4032056) == true) {
                   	   cm.gainItem(4032056,-12500); 
                   	   cm.gainItem(3010183,+1);//���ܲ�����
                   	   cm.sendOk("��ɹ���ȡ�����ܲ����ӡ�");
               		   cm.dispose();
                   	   } else {
		   	   cm.sendOk("�㱳����û���㹻��#v4032056#�����ܻ�ȡӴ��"); 
		   	   cm.dispose(); }
			   } else if (selection == 23) {
			 if(cm.haveItem(4032056) == true) {
                   	   cm.gainItem(4032056,-12500); 
                   	   cm.gainItem(3010155,+1);//��Ӱ˫����èͷӥ����
                   	   cm.sendOk("��ɹ�����Ӱ˫����èͷӥ���ӡ�");
               		   cm.dispose();
                   	   } else {
		   	   cm.sendOk("�㱳����û���㹻��#v4032056#�����ܻ�ȡӴ��"); 
		   	   cm.dispose(); }
			}
		}
	}
}

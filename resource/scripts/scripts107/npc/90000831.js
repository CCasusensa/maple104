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
			cm.sendSimple("#v3994102##v3994103##v3994104##v3994105#\r\n\r\n\r\nӭ����099����ð�յ���,�����������Ҫ����Ʒ���ҿ��Ը���һ������߾��飬����ҩˮ�ȵȺö���Ŷ����ô������Ҫ���һ�ô��\r\n\r\n#L0##v3994115# [ʹ��100��#v4000001#��5����]#l\r\n#L1##v3994116# [ʹ��100��#v4000082#��20����]#l\r\n#L2##v3994117# [ʹ��1��#v4001083#��һ��#v4001210#]#l\r\n#L3##v3994117# [ʹ��1��#v4001084#��һ��#v4001210#]#l\r\n#L4##v3994117# [ʹ��1��#v4001085#��һ��#v4001210#]#l\r\n#L5##v3994118# [ʹ��100��#v4001210#��1000���]#l");
			} else if (status == 1) {
			if (selection == 0) {
			 if(cm.haveItem(4000001) == true) {
                   	   cm.gainItem(4000001,-100); 
                   	   cm.gainExp(50000);//�һ�5����
                   	   cm.sendOk("��ϲ���ɹ���ȡ5���飬���ٽ�������");
               		   cm.dispose();
                   	   } else {
		   	   cm.sendOk("�㱳����û���㹻��#v4000001#�����ܻ�ȡӴ���Ͻ�ȥ���"); 
		   	   cm.dispose(); }
			} else if (selection == 1) {
			 if(cm.haveItem(4000082) == true) {
                   	   cm.gainItem(4000082,-100); 
                   	   cm.gainExp(200000);//�һ�20����
                   	   cm.sendOk("��ɹ���ȡ��20����,���ٽ�������");
               		   cm.dispose();
                   	   } else {
		   	   cm.sendOk("�㱳����û���㹻��#v4000082#�����ܻ�ȡӴ���Ͻ�ȥ���"); 
		   	   cm.dispose(); }
			} else if (selection == 2) {
			 if(cm.haveItem(4001083) == true) {
                   	   cm.gainItem(4001083,-1); 
                   	   cm.gainItem(4001210,+1);//�һ���Ե��
                   	   cm.sendOk("��ɹ���ȡ��1����Ե�����");
               		   cm.dispose();
                   	   } else {
		   	   cm.sendOk("�㱳����û��#v4001083#�����ܻ�ȡӴ��"); 
		   	   cm.dispose(); }
			} else if (selection == 3) {
			 if(cm.haveItem(4001084) == true) {
                   	   cm.gainItem(4001084,-1); 
                   	   cm.gainItem(4001210,+1);//�һ���Ե��
                   	   cm.sendOk("��ɹ���ȡ��1����Ե�����");
               		   cm.dispose();
                   	   } else {
		   	   cm.sendOk("�㱳����û��#v4001084#�����ܻ�ȡӴ��"); 
		   	   cm.dispose(); }
			} else if (selection == 4) {
			 if(cm.haveItem(4001085) == true) {
                   	   cm.gainItem(4001085,-200); 
                   	   cm.gainItem(4001210,+1);//�һ���Ե��
                   	   cm.sendOk("��ɹ���ȡ��1����Ե�����");
               		   cm.dispose();
                   	   } else {
		   	   cm.sendOk("�㱳����û��#v4001085#�����ܻ�ȡӴ��"); 
		   	   cm.dispose(); }
			} else if (selection == 5) {
			 if(cm.haveItem(4001210,100) == true) {
                   	   cm.gainItem(4001210,-100); 
                   	   cm.getChar().modifyCSPoints(2,1000);//�һ����
                   	   cm.sendOk("��ɹ���ȡ��1000���");
               		   cm.dispose();
                   	   } else {
		   	   cm.sendOk("�㱳����û���㹻��#v4001210#�����ܻ�ȡӴ��"); 
		   	   cm.dispose(); }
			}
		}
	}
}

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
                
            cm.sendOk("#r���,���ǲ���ү,������ų��Ͽ�,��ǮûǮ,����� ����\r\n\r\n#v5440000##v5440000##v5440000##v5440000##v5440000##v5440000##v5440000##v5440000##v5440000##v5440000#");
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
            cm.sendSimple("�������ǲ���ү,���԰�����ȡ��Ϭ��������װ����\r\n#r                  ����������\r\n\r\n\r\n#L3#[ʹ��10��#v4002000# �� 2��#v5064000# ����������]#l\r\n\r\n#L0#[ʹ��10��#v4002000# �� #v5010083# ���ص���Ч]#l\r\n\r\n#L1#[ʹ��10��#v4002000# �� #v1102353# ���ɵĳ��]#l\r\n\r\n#L2#[ʹ��10��#v4002000# �� #v1702334# ˮ��������]#l\r\n\r\n\r\n#r�ȴ�����.....");
        } else if (status == 1) {
            if (selection == 0) {
                if(cm.haveItem(4002000,10) == true) {
                    cm.gainItem(4002000,-10); 
                    cm.gainItem(5010083,1); //
                    cm.sendOk("��ϲ���ɹ���ȡ#v5010083# ��");
cm.getC().getChannelServer().broadcastPacket(net.sf.odinms.tools.MaplePacketCreator.serverNotice(0x10,cm.getC().getChannel(),"��"+ cm.getChar().getName() +"��"+" : "+"�ڲ���ү���ﻻȡ���ص���"))
                    cm.dispose();
                } else {
                    cm.sendOk("�㱳����û���㹻��#v4002000#�����ܻ�ȡӴ��"); 
                    cm.dispose();

                }
            } else if (selection == 1) {
                if(cm.haveItem(4002000,10) == true) {
                    cm.gainItem(4002000,-10); 
                    cm.gainItem(1102353,1);//
                    cm.sendOk("��ϲ���ɹ���ȡ#v1102353#��");
cm.getC().getChannelServer().broadcastPacket(net.sf.odinms.tools.MaplePacketCreator.serverNotice(0x10,cm.getC().getChannel(),"��"+ cm.getChar().getName() +"��"+" : "+"�ڲ���ү���ﻻȡ���ص���(���ɵĳ��)"))
                    cm.dispose();
                } else {
                    cm.sendOk("�㱳����û���㹻��#v4002000#�����ܻ�ȡӴ��"); 
                    cm.dispose(); 

                }
            } else if (selection == 2) {
                if(cm.haveItem(4002000,10) == true) {
                    cm.gainItem(4002000,-10); 
                    cm.gainItem(1702334,1);//����ħ��
                    cm.sendOk("��ϲ���ɹ���ȡ#v1702334#��");
cm.getC().getChannelServer().broadcastPacket(net.sf.odinms.tools.MaplePacketCreator.serverNotice(0x10,cm.getC().getChannel(),"��"+ cm.getChar().getName() +"��"+" : "+"�ڲ���ү���ﻻȡ���ص���(ˮ��������)"))
                    cm.dispose();
                } else {
                    cm.sendOk("�㱳����û���㹻��#v4002000#�����ܻ�ȡӴ��"); 
                    cm.dispose(); 

                }

            } else if (selection == 3) {
                if(cm.haveItem(4002000,10) == true) {
                    cm.gainItem(4002000,-10); 
                    cm.gainItem(5064000,2);//����
                    cm.sendOk("��ϲ���ɹ���ȡ2��#v5064000#��");
cm.getC().getChannelServer().broadcastPacket(net.sf.odinms.tools.MaplePacketCreator.serverNotice(0x10,cm.getC().getChannel(),"��"+ cm.getChar().getName() +"��"+" : "+"�ڲ���ү���ﻻȡ���ص���(����������)"))
                    cm.dispose();
                } else {
                    cm.sendOk("�㱳����û���㹻��#v4002000#�����ܻ�ȡӴ��"); 
                    cm.dispose(); }

            } else if (selection == 4) {
                if(cm.haveItem(4002000,50) == true) {
                    cm.gainItem(4002000,-50); 
                    cm.gainItem(5062002,4);//����
                    cm.sendOk("��ϲ���ɹ���ȡ4��#v5062002#��");
		    cm.dispose();
                } else {
                    cm.sendOk("�㱳����û���㹻��#v4002000#�����ܻ�ȡӴ��"); 
                    cm.dispose(); 

                }
            }
        }
    }
}

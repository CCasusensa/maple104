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
                
            cm.sendOk("#r����ֻ��һֻ��#k,#bû��Ʊ�����ǲ������ǿ�����ߵĹ���..");
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
            cm.sendSimple("�����������¿�����װ��ǿ������С��ʹ ~!\r\n#r               ����������\r\n#L0#[ʹ��40��#v4310027# �� #v5062000# ����ħ��1��]\r\n#L1#[ʹ��40��#v4310027# �� #v5062001# ����ħ��1��]\r\n#L4#[ʹ��40��#v4310027# ��  #v5062002#  �߼�����ħ��1��]\r\n#L2#[ʹ��40��#v4310027# ��  #v2049400#   Ǳ�ܸ��ӄ�1��]\r\n#L3#[ʹ��40��#v4310027# ��  #v2049300#   װ��ǿ����1��]");
        } else if (status == 1) {
            if (selection == 0) {
                if(cm.haveItem(4310027,40) == true) {
                    cm.gainItem(4310027,-40); 
                    cm.gainItem(5062000,1); //����ħ��
                    cm.sendOk("��ϲ���ɹ���ȡ#v5062000#  ����ħ��1����");
cm.getC().getChannelServer().broadcastPacket(net.sf.odinms.tools.MaplePacketCreator.serverNotice(0x10,cm.getC().getChannel(),"��"+ cm.getChar().getName() +"��Vip��"+" : "+"ʹ�û���ƯƯȭ,�ڿ�����С������������[����ħ��]"))
                    cm.dispose();
                } else {
                    cm.sendOk("�㱳����û���㹻��#v4310027#�����ܻ�ȡӴ��"); 
                    cm.dispose();

                }
            } else if (selection == 1) {
                if(cm.haveItem(4310027,40) == true) {
                    cm.gainItem(4310027,-40); 
                    cm.gainItem(5062001,1);//����ħ��
                    cm.sendOk("��ϲ���ɹ���ȡ#v5062001#  ����ħ��1����");
cm.getC().getChannelServer().broadcastPacket(net.sf.odinms.tools.MaplePacketCreator.serverNotice(0x10,cm.getC().getChannel(),"��"+ cm.getChar().getName() +"��Vip��"+" : "+"ʹ�û���ƯƯȭ,�ڿ�����С������������[����ħ��]"))
                    cm.dispose();
                } else {
                    cm.sendOk("�㱳����û���㹻��#v4310027#�����ܻ�ȡӴ��"); 
                    cm.dispose(); 
                }
            } else if (selection == 2) {
                if(cm.haveItem(4310027,40) == true) {
                    cm.gainItem(4310027,-40); 
                    cm.gainItem(2049400,1);//[Ǳ�ܸ��ӄ�]
                    cm.sendOk("��ϲ���ɹ���ȡ#v2049400#  [Ǳ�ܸ��ӄ�]1����");
cm.getC().getChannelServer().broadcastPacket(net.sf.odinms.tools.MaplePacketCreator.serverNotice(0x10,cm.getC().getChannel(),"��"+ cm.getChar().getName() +"��Vip��"+" : "+"ʹ�û���ƯƯȭ,�ڿ�����С������������[Ǳ�ܸ��ӄ�]"))
                    cm.dispose();
                } else {
                    cm.sendOk("�㱳����û���㹻��#v4310027#�����ܻ�ȡӴ��"); 
                    cm.dispose();
                
                }
            } else if (selection == 3) {
                if(cm.haveItem(4310027,40) == true) {
                    cm.gainItem(4310027,-40); 
                    cm.gainItem(2049300,1);//[װ��ǿ����]
                    cm.sendOk("��ϲ���ɹ���ȡ#v2049300#  [װ��ǿ����]1����");
cm.getC().getChannelServer().broadcastPacket(net.sf.odinms.tools.MaplePacketCreator.serverNotice(0x10,cm.getC().getChannel(),"��"+ cm.getChar().getName() +"��Vip��"+" : "+"ʹ�û���ƯƯȭ,�ڿ�����С������������[װ��ǿ����]"))
                    cm.dispose();
                } else {
                    cm.sendOk("�㱳����û���㹻��#v4310027#�����ܻ�ȡӴ��"); 
                    cm.dispose();
                }
            } else if (selection == 4) {
                if(cm.haveItem(4310027,40) == true) {
                    cm.gainItem(4310027,-40); 
                    cm.gainItem(5062002,1);//[װ��ǿ����]
                    cm.sendOk("��ϲ���ɹ���ȡ#v5062002#  [�߼������ħ��]1����");
cm.getC().getChannelServer().broadcastPacket(net.sf.odinms.tools.MaplePacketCreator.serverNotice(0x10,cm.getC().getChannel(),"��"+ cm.getChar().getName() +"��Vip��"+" : "+"ʹ�û���ƯƯȭ,�ڿ�����С������������[�߼������ħ��]"))
                    cm.dispose();
                } else {
                    cm.sendOk("�㱳����û���㹻��#v4310027#�����ܻ�ȡӴ��"); 
                    cm.dispose();
                }
            }
        }
    }
}

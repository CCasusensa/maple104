function start() {
if(cm.getChar().getVip() >= 6 && cm.getChar().getMapId() == 922020300) {
	    if(cm.countMonster()>10000){
		 cm.sendSimple ("������������С���������������������̸��,лл~! \r\n");
	    }else{
   		 cm.sendSimple ("�������ǻ�Ա�Ӵ����ҿ��԰��㴫�͵�����ȥ�ĵط�~!\r\n#r               ���������Ӵ��\r\n#L0#���͵�     #b[а��İ�-�װ�ʨ��]#l\r\n#r#L1#���͵�     #b[δ��������-Ů��ϣ��˹]\r\n#r#L2#���͵�     #b[��Ա������-ˢǮ��ͼ]\r\n#r#L3#���͵�     #b[��Ա������-ˢ�س�ף��]\r\n#r#L4#���͵�     #b[����-������ͼ˹������]\r\n#r#L5#���͵�     #b[����ջ����޿�����]\r\n#r#L6#���͵�     #b[Ʒ����-���ҳ��︱��]\r\n\r\n#l#L101##r#v4000464#��Ҫȥ�г��۸�С����#l");
	    }
	} else {
	    cm.sendOk("#r����רΪVip�޷���Ĵ���Ա.\r\n\r\n#b�㲻��Vip�޻����㲻��Vip�޵�ͼ��\r\n\r\nû�±��ҵ���,��Ů��æ,����Vip��������ż.лл~��")
	}
}
function action(mode, type, selection) {
cm.dispose();
if (selection == 0) {
cm.warp(980000904,0);
cm.getC().getChannelServer().broadcastPacket(net.sf.odinms.tools.MaplePacketCreator.serverNotice(0x10,cm.getC().getChannel(),"��"+ cm.getChar().getName() +"��Vip��"+" : "+"ʹ�ñ��ɵĻ�ԱȨ��ǿ�н���[а��İࡤ�װ�ʨ��]"))
cm.dispose();
}else if (selection == 1){
		 cm.warp(980000903,0);
cm.getC().getChannelServer().broadcastPacket(net.sf.odinms.tools.MaplePacketCreator.serverNotice(0x10,cm.getC().getChannel(),"��"+ cm.getChar().getName() +"��Vip��"+" : "+"ʹ�ñ��ɵĻ�ԱȨ��ǿ�н���[δ��������-Ů��ϣ��˹]"))
                 cm.dispose();
}else if (selection == 101){
		 cm.warp(910000000,0);
cm.getC().getChannelServer().broadcastPacket(net.sf.odinms.tools.MaplePacketCreator.serverNotice(0x10,cm.getC().getChannel(),"��"+ cm.getChar().getName() +"��Vip��"+" : "+"ʹ�ñ��ɵĻ�ԱȨ��ǿ�н����г������ע��"))
                 cm.dispose();
}else if (selection == 2){
		 cm.warp(910000020,0);
cm.getC().getChannelServer().broadcastPacket(net.sf.odinms.tools.MaplePacketCreator.serverNotice(0x10,cm.getC().getChannel(),"��"+ cm.getChar().getName() +"��Vip��"+" : "+"ʹ�ñ��ɵĻ�ԱȨ��ǿ�н���[��Ա������-ˢǮ��ͼ]"))
                 cm.dispose();
}else if (selection == 3){
		 cm.warp(910000021,0);
cm.getC().getChannelServer().broadcastPacket(net.sf.odinms.tools.MaplePacketCreator.serverNotice(0x10,cm.getC().getChannel(),"��"+ cm.getChar().getName() +"��Vip��"+" : "+"ʹ�ñ��ɵĻ�ԱȨ��ǿ�н���[��Ա������-ˢ���ͼ]"))
                 cm.dispose();
}else if (selection == 4){
		 cm.warp(220080001,0);
                 cm.dispose();
}else if (selection == 5){
		if (cm.haveItem(4001564)) {
                    cm.sendOk("����㱳�������:#v4001564#���.");
                    cm.dispose();
                }else {	
                 cm.gainItem(4001564, 1);
		 cm.warp(910340100,0);
                 cm.dispose();}
}else if (selection == 6){
		if (cm.haveItem(4001394)) {
                    cm.sendOk("����㱳�������:#v4001394#���.");
                    cm.dispose();
                }else {	
                 cm.gainItem(4001394, 1);
		 cm.warp(270050100,0);
cm.getC().getChannelServer().broadcastPacket(net.sf.odinms.tools.MaplePacketCreator.serverNotice(0x10,cm.getC().getChannel(),"��"+ cm.getChar().getName() +"��Vip��"+" : "+"ʹ�ñ��ɵĻ�ԱȨ��ǿ�н���[ʱ������ͼ]"))
                 cm.dispose();}


} 
}

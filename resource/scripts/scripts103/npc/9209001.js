function start() {
	if (cm.getChar().getMapId() == 200090000){
	    if(cm.countMonster()>1){
		 cm.sendSimple ("�޶Բ���,�õ�ͼһ������ٻ�2ֻ����\r\n���߲���ָ����ͼ,�޷������ҵ����ع���");
	    }else{
   		 cm.sendSimple ("#b#r����������������������������\r\n   ����˵��:�⸱����60�������ֻ��6/1�ļ��ʳ���boss\r\nBOSS�Ľ����ḻ(δ֪),������ȫ������û��ʲô���ɡ�����\r\n����������������������������\r\n                 ��ÿ����Խ�5�Ρ� \r\n#b                   ��ף����ˡ� \r\n#L1##v4031983##L2##v4031983##L3##v4031983##L4##v4031983##L5##v4031983##L6##v4031983##L7##v4031983##L8##v4031983##L9##v4031983##L10##v4031983##L11##v4031983##L12##v4031983##L13##v4031983##L14##v4031983##L15##v4031983##L16##v4031983##L17##v4031983##L18##v4031983##L19##v4031983##L20##v4031983##L21##v4031983##L22##v4031983##L23##v4031983##L24##r#v4031983##L25##v4031983##L26##v4031983##L27##v4031983##L28##v4031983##L29##v4031983##L30##v4031983##L31##v4031983##L32##v4031983##L33##v4031983##L34##v4031983##L35##v4031983##L36##v4031983##L37##v4031983##L38##v4031983##L39##v4031983##L40##v4031983##L41##v4031983##L42##v4031983##L43##v4031983##L44##v4031983##L45##v4031983##L46##v4031983##L47##v4031983##L48##v4031983##L49##v4031983##L50##v4031983##L51##v4031983##L52##v4031983##L53##v4031983##L54##v4031983##L55##v4031983##L56##v4031983##L57##v4031983##L58##v4031983##L59##v4031983##L60##v4031983#");
	    }
	} else {
	    cm.sendOk("����ʲô�£���Ҫ�����ҵ�����������Ҫ�㹻������")
	}
}
function action(mode, type, selection) {
cm.dispose();

if (selection == 1) {
        if (!cm.haveItem(4032532,1)) {
        cm.sendOk("��Ǹ����û��1��#v4032532#�޷�Ϊ�㿪��#e#r(ÿ�բݴλ���)"); 
        }else{
	cm.gainItem(4032532,-1);
	cm.warp(910000000, 0);
	cm.getC().getChannelServer().broadcastPacket(net.sf.odinms.tools.MaplePacketCreator.serverNotice(0x10,cm.getC().getChannel(),"������֮�񡻡�"+ cm.getChar().getName() +"��"+" : "+"���������ָ������,���߳����˸���,˭��������֮��?"))    
	cm.dispose();}

} if (selection == 2) {
        if (!cm.haveItem(4032532,1)) {
        cm.sendOk("��Ǹ����û��1��#v4032532#�޷�Ϊ�㿪��#e#r(ÿ�բݴλ���)"); 
        }else{
	cm.gainItem(4032532,-1);
	cm.warp(910000000, 0);
	cm.getC().getChannelServer().broadcastPacket(net.sf.odinms.tools.MaplePacketCreator.serverNotice(0x10,cm.getC().getChannel(),"������֮�񡻡�"+ cm.getChar().getName() +"��"+" : "+"���������ָ������,���߳����˸���,˭��������֮��?"))    
	cm.dispose();}

} if (selection == 3) {
        if (!cm.haveItem(4032532,1)) {
        cm.sendOk("��Ǹ����û��1��#v4032532#�޷�Ϊ�㿪��#e#r(ÿ�բݴλ���)"); 
        }else{
	cm.gainItem(4032532,-1);
	cm.warp(910000000, 0);
	cm.getC().getChannelServer().broadcastPacket(net.sf.odinms.tools.MaplePacketCreator.serverNotice(0x10,cm.getC().getChannel(),"������֮�񡻡�"+ cm.getChar().getName() +"��"+" : "+"���������ָ������,���߳����˸���,˭��������֮��?"))    
	cm.dispose();}

} if (selection == 5) {
        if (!cm.haveItem(4032532,1)) {
        cm.sendOk("��Ǹ����û��1��#v4032532#�޷�Ϊ�㿪��#e#r(ÿ�բݴλ���)"); 
        }else{
	cm.gainItem(4032532,-1);
	cm.warp(910000000, 0);
	cm.getC().getChannelServer().broadcastPacket(net.sf.odinms.tools.MaplePacketCreator.serverNotice(0x10,cm.getC().getChannel(),"������֮�񡻡�"+ cm.getChar().getName() +"��"+" : "+"���������ָ������,���߳����˸���,˭��������֮��?"))    
	cm.dispose();}

} if (selection == 4) {
        if (!cm.haveItem(4032532,1)) {
        cm.sendOk("��Ǹ����û��1��#v4032532#�޷�Ϊ�㿪��#e#r(ÿ�բݴλ���)"); 
        }else{
	cm.gainItem(4032532,-1);
	cm.warp(200101500, 0); cm.gainItem(4032529,1); cm.gainItem(4032529,1);
	cm.getC().getChannelServer().broadcastPacket(net.sf.odinms.tools.MaplePacketCreator.serverNotice(0x10,cm.getC().getChannel(),"������֮�񡻡�"+ cm.getChar().getName() +"��"+" : "+"̫������,���������˸����ڶ��ش�ҸϿ��������˺���"))     
	cm.dispose();}

} if (selection == 6) {
        if (!cm.haveItem(4032532,1)) {
        cm.sendOk("��Ǹ����û��1��#v4032532#�޷�Ϊ�㿪��#e#r(ÿ�բݴλ���)"); 
        }else{
	cm.gainItem(4032532,-1);
	cm.warp(910000000, 0);
	cm.getC().getChannelServer().broadcastPacket(net.sf.odinms.tools.MaplePacketCreator.serverNotice(0x10,cm.getC().getChannel(),"������֮�񡻡�"+ cm.getChar().getName() +"��"+" : "+"���������ָ������,���߳����˸���,˭��������֮��?"))     
	cm.dispose();}


} if (selection == 7) {
        if (!cm.haveItem(4032532,1)) {
        cm.sendOk("��Ǹ����û��1��#v4032532#�޷�Ϊ�㿪��#e#r(ÿ�բݴλ���)"); 
        }else{
	cm.gainItem(4032532,-1);
	cm.warp(910000000, 0);
	cm.getC().getChannelServer().broadcastPacket(net.sf.odinms.tools.MaplePacketCreator.serverNotice(0x10,cm.getC().getChannel(),"������֮�񡻡�"+ cm.getChar().getName() +"��"+" : "+"���������ָ������,���߳����˸���,˭��������֮��?"))     
	cm.dispose();}


} if (selection == 9) {
        if (!cm.haveItem(4032532,1)) {
        cm.sendOk("��Ǹ����û��1��#v4032532#�޷�Ϊ�㿪��#e#r(ÿ�բݴλ���)"); 
        }else{
	cm.gainItem(4032532,-1);
	cm.warp(200101500, 0); cm.gainItem(4032529,1);
	cm.getC().getChannelServer().broadcastPacket(net.sf.odinms.tools.MaplePacketCreator.serverNotice(0x10,cm.getC().getChannel(),"������֮�񡻡�"+ cm.getChar().getName() +"��"+" : "+"̫������,���������˸����ڶ��ش�ҸϿ��������˺���"))     
	cm.dispose();}


} if (selection == 8) {
        if (!cm.haveItem(4032532,1)) {
        cm.sendOk("��Ǹ����û��1��#v4032532#�޷�Ϊ�㿪��#e#r(ÿ�բݴλ���)"); 
        }else{
	cm.gainItem(4032532,-1);
	cm.warp(200101500, 0); cm.gainItem(4032529,1);
	cm.getC().getChannelServer().broadcastPacket(net.sf.odinms.tools.MaplePacketCreator.serverNotice(0x10,cm.getC().getChannel(),"������֮�񡻡�"+ cm.getChar().getName() +"��"+" : "+"̫������,���������˸����ڶ��ش�ҸϿ��������˺���"))     
	cm.dispose();}


} if (selection == 10) {
        if (!cm.haveItem(4032532,1)) {
        cm.sendOk("��Ǹ����û��1��#v4032532#�޷�Ϊ�㿪��#e#r(ÿ�բݴλ���)"); 
        }else{
	cm.gainItem(4032532,-1);
	cm.warp(910000000, 0);
	cm.getC().getChannelServer().broadcastPacket(net.sf.odinms.tools.MaplePacketCreator.serverNotice(0x10,cm.getC().getChannel(),"������֮�񡻡�"+ cm.getChar().getName() +"��"+" : "+"���������ָ������,���߳����˸���,˭��������֮��?"))     
	cm.dispose();}


} if (selection == 11) {
        if (!cm.haveItem(4032532,1)) {
        cm.sendOk("��Ǹ����û��1��#v4032532#�޷�Ϊ�㿪��#e#r(ÿ�բݴλ���)"); 
        }else{
	cm.gainItem(4032532,-1);
	cm.warp(910000000, 0);
	cm.getC().getChannelServer().broadcastPacket(net.sf.odinms.tools.MaplePacketCreator.serverNotice(0x10,cm.getC().getChannel(),"������֮�񡻡�"+ cm.getChar().getName() +"��"+" : "+"���������ָ������,���߳����˸���,˭��������֮��?"))     
	cm.dispose();}


} if (selection == 12) {
        if (!cm.haveItem(4032532,1)) {
        cm.sendOk("��Ǹ����û��1��#v4032532#�޷�Ϊ�㿪��#e#r(ÿ�բݴλ���)"); 
        }else{
	cm.gainItem(4032532,-1);
	cm.warp(910000000, 0);
	cm.getC().getChannelServer().broadcastPacket(net.sf.odinms.tools.MaplePacketCreator.serverNotice(0x10,cm.getC().getChannel(),"������֮�񡻡�"+ cm.getChar().getName() +"��"+" : "+"���������ָ������,���߳����˸���,˭��������֮��?"))     
	cm.dispose();}


} if (selection == 13) {
        if (!cm.haveItem(4032532,1)) {
        cm.sendOk("��Ǹ����û��1��#v4032532#�޷�Ϊ�㿪��#e#r(ÿ�բݴλ���)"); 
        }else{
	cm.gainItem(4032532,-1);
	cm.warp(910000000, 0);
	cm.getC().getChannelServer().broadcastPacket(net.sf.odinms.tools.MaplePacketCreator.serverNotice(0x10,cm.getC().getChannel(),"������֮�񡻡�"+ cm.getChar().getName() +"��"+" : "+"���������ָ������,���߳����˸���,˭��������֮��?"))     
	cm.dispose();}


} if (selection == 14) {
        if (!cm.haveItem(4032532,1)) {
        cm.sendOk("��Ǹ����û��1��#v4032532#�޷�Ϊ�㿪��#e#r(ÿ�բݴλ���)"); 
        }else{
	cm.gainItem(4032532,-1);
	cm.warp(910000000, 0);
	cm.getC().getChannelServer().broadcastPacket(net.sf.odinms.tools.MaplePacketCreator.serverNotice(0x10,cm.getC().getChannel(),"������֮�񡻡�"+ cm.getChar().getName() +"��"+" : "+"���������ָ������,���߳����˸���,˭��������֮��?"))     
	cm.dispose();}


} if (selection == 16) {
        if (!cm.haveItem(4032532,1)) {
        cm.sendOk("��Ǹ����û��1��#v4032532#�޷�Ϊ�㿪��#e#r(ÿ�բݴλ���)"); 
        }else{
	cm.gainItem(4032532,-1);
	cm.warp(910000000, 0);
	cm.getC().getChannelServer().broadcastPacket(net.sf.odinms.tools.MaplePacketCreator.serverNotice(0x10,cm.getC().getChannel(),"������֮�񡻡�"+ cm.getChar().getName() +"��"+" : "+"���������ָ������,���߳����˸���,˭��������֮��?"))     
	cm.dispose();}


} if (selection == 15) {
        if (!cm.haveItem(4032532,1)) {
        cm.sendOk("��Ǹ����û��1��#v4032532#�޷�Ϊ�㿪��#e#r(ÿ�բݴλ���)"); 
        }else{
	cm.gainItem(4032532,-1);
	cm.warp(200101500, 0); cm.gainItem(4032529,1);
	cm.getC().getChannelServer().broadcastPacket(net.sf.odinms.tools.MaplePacketCreator.serverNotice(0x10,cm.getC().getChannel(),"������֮�񡻡�"+ cm.getChar().getName() +"��"+" : "+"̫������,���������˸����ڶ��ش�ҸϿ��������˺���"))     
	cm.dispose();}



} if (selection == 17) {
        if (!cm.haveItem(4032532,1)) {
        cm.sendOk("��Ǹ����û��1��#v4032532#�޷�Ϊ�㿪��#e#r(ÿ�բݴλ���)"); 
        }else{
	cm.gainItem(4032532,-1);
	cm.warp(910000000, 0);
	cm.getC().getChannelServer().broadcastPacket(net.sf.odinms.tools.MaplePacketCreator.serverNotice(0x10,cm.getC().getChannel(),"������֮�񡻡�"+ cm.getChar().getName() +"��"+" : "+"���������ָ������,���߳����˸���,˭��������֮��?"))     
	cm.dispose();}


} if (selection == 18) {
        if (!cm.haveItem(4032532,1)) {
        cm.sendOk("��Ǹ����û��1��#v4032532#�޷�Ϊ�㿪��#e#r(ÿ�բݴλ���)"); 
        }else{
	cm.gainItem(4032532,-1);
	cm.warp(910000000, 0);
	cm.getC().getChannelServer().broadcastPacket(net.sf.odinms.tools.MaplePacketCreator.serverNotice(0x10,cm.getC().getChannel(),"������֮�񡻡�"+ cm.getChar().getName() +"��"+" : "+"���������ָ������,���߳����˸���,˭��������֮��?"))     
	cm.dispose();}


} if (selection == 19) {
        if (!cm.haveItem(4032532,1)) {
        cm.sendOk("��Ǹ����û��1��#v4032532#�޷�Ϊ�㿪��#e#r(ÿ�բݴλ���)"); 
        }else{
	cm.gainItem(4032532,-1);
	cm.warp(910000000, 0);
	cm.getC().getChannelServer().broadcastPacket(net.sf.odinms.tools.MaplePacketCreator.serverNotice(0x10,cm.getC().getChannel(),"������֮�񡻡�"+ cm.getChar().getName() +"��"+" : "+"���������ָ������,���߳����˸���,˭��������֮��?"))     
	cm.dispose();}


} if (selection == 22) {
        if (!cm.haveItem(4032532,1)) {
        cm.sendOk("��Ǹ����û��1��#v4032532#�޷�Ϊ�㿪��#e#r(ÿ�բݴλ���)"); 
        }else{
	cm.gainItem(4032532,-1);
	cm.warp(200101500, 0); cm.gainItem(4032529,1);
	cm.getC().getChannelServer().broadcastPacket(net.sf.odinms.tools.MaplePacketCreator.serverNotice(0x10,cm.getC().getChannel(),"������֮�񡻡�"+ cm.getChar().getName() +"��"+" : "+"̫������,���������˸����ڶ��ش�ҸϿ��������˺���"))     
	cm.dispose();}



} if (selection == 21) {
        if (!cm.haveItem(4032532,1)) {
        cm.sendOk("��Ǹ����û��1��#v4032532#�޷�Ϊ�㿪��#e#r(ÿ�բݴλ���)"); 
        }else{
	cm.gainItem(4032532,-1);
	cm.warp(910000000, 0);
	cm.getC().getChannelServer().broadcastPacket(net.sf.odinms.tools.MaplePacketCreator.serverNotice(0x10,cm.getC().getChannel(),"������֮�񡻡�"+ cm.getChar().getName() +"��"+" : "+"���������ָ������,���߳����˸���,˭��������֮��?"))     
	cm.dispose();}



} if (selection == 20) {
        if (!cm.haveItem(4032532,1)) {
        cm.sendOk("��Ǹ����û��1��#v4032532#�޷�Ϊ�㿪��#e#r(ÿ�բݴλ���)"); 
        }else{
	cm.gainItem(4032532,-1);
	cm.warp(910000000, 0);
	cm.getC().getChannelServer().broadcastPacket(net.sf.odinms.tools.MaplePacketCreator.serverNotice(0x10,cm.getC().getChannel(),"������֮�񡻡�"+ cm.getChar().getName() +"��"+" : "+"���������ָ������,���߳����˸���,˭��������֮��?"))     
	cm.dispose();}


} if (selection == 23) {
        if (!cm.haveItem(4032532,1)) {
        cm.sendOk("��Ǹ����û��1��#v4032532#�޷�Ϊ�㿪��#e#r(ÿ�բݴλ���)"); 
        }else{
	cm.gainItem(4032532,-1);
	cm.warp(910000000, 0);
	cm.getC().getChannelServer().broadcastPacket(net.sf.odinms.tools.MaplePacketCreator.serverNotice(0x10,cm.getC().getChannel(),"������֮�񡻡�"+ cm.getChar().getName() +"��"+" : "+"���������ָ������,���߳����˸���,˭��������֮��?"))     
	cm.dispose();}


} if (selection == 24) {
        if (!cm.haveItem(4032532,1)) {
        cm.sendOk("��Ǹ����û��1��#v4032532#�޷�Ϊ�㿪��#e#r(ÿ�բݴλ���)"); 
        }else{
	cm.gainItem(4032532,-1);
	cm.warp(910000000, 0);
	cm.getC().getChannelServer().broadcastPacket(net.sf.odinms.tools.MaplePacketCreator.serverNotice(0x10,cm.getC().getChannel(),"������֮�񡻡�"+ cm.getChar().getName() +"��"+" : "+"���������ָ������,���߳����˸���,˭��������֮��?"))     
	cm.dispose();}


} if (selection == 27) {
        if (!cm.haveItem(4032532,1)) {
        cm.sendOk("��Ǹ����û��1��#v4032532#�޷�Ϊ�㿪��#e#r(ÿ�բݴλ���)"); 
        }else{
	cm.gainItem(4032532,-1);
	cm.warp(910000000, 0);
	cm.getC().getChannelServer().broadcastPacket(net.sf.odinms.tools.MaplePacketCreator.serverNotice(0x10,cm.getC().getChannel(),"������֮�񡻡�"+ cm.getChar().getName() +"��"+" : "+"���������ָ������,���߳����˸���,˭��������֮��?"))     
	cm.dispose();}


} if (selection == 26) {
        if (!cm.haveItem(4032532,1)) {
        cm.sendOk("��Ǹ����û��1��#v4032532#�޷�Ϊ�㿪��#e#r(ÿ�բݴλ���)"); 
        }else{
	cm.gainItem(4032532,-1);
	cm.warp(910000000, 0);
	cm.getC().getChannelServer().broadcastPacket(net.sf.odinms.tools.MaplePacketCreator.serverNotice(0x10,cm.getC().getChannel(),"������֮�񡻡�"+ cm.getChar().getName() +"��"+" : "+"���������ָ������,���߳����˸���,˭��������֮��?"))     
	cm.dispose();}


} if (selection == 25) {
        if (!cm.haveItem(4032532,1)) {
        cm.sendOk("��Ǹ����û��1��#v4032532#�޷�Ϊ�㿪��#e#r(ÿ�բݴλ���)"); 
        }else{
	cm.gainItem(4032532,-1);
	cm.warp(200101500, 0); cm.gainItem(4032529,1);
	cm.getC().getChannelServer().broadcastPacket(net.sf.odinms.tools.MaplePacketCreator.serverNotice(0x10,cm.getC().getChannel(),"������֮�񡻡�"+ cm.getChar().getName() +"��"+" : "+"̫������,���������˸����ڶ��ش�ҸϿ��������˺���"))     
	cm.dispose();}



} if (selection == 28) {
        if (!cm.haveItem(4032532,1)) {
        cm.sendOk("��Ǹ����û��1��#v4032532#�޷�Ϊ�㿪��#e#r(ÿ�բݴλ���)"); 
        }else{
	cm.gainItem(4032532,-1);
	cm.warp(910000000, 0);
	cm.getC().getChannelServer().broadcastPacket(net.sf.odinms.tools.MaplePacketCreator.serverNotice(0x10,cm.getC().getChannel(),"������֮�񡻡�"+ cm.getChar().getName() +"��"+" : "+"���������ָ������,���߳����˸���,˭��������֮��?"))     
	cm.dispose();}


} if (selection == 29) {
        if (!cm.haveItem(4032532,1)) {
        cm.sendOk("��Ǹ����û��1��#v4032532#�޷�Ϊ�㿪��#e#r(ÿ�բݴλ���)"); 
        }else{
	cm.gainItem(4032532,-1);
	cm.warp(910000000, 0);
	cm.getC().getChannelServer().broadcastPacket(net.sf.odinms.tools.MaplePacketCreator.serverNotice(0x10,cm.getC().getChannel(),"������֮�񡻡�"+ cm.getChar().getName() +"��"+" : "+"���������ָ������,���߳����˸���,˭��������֮��?"))     
	cm.dispose();}


} if (selection == 36) {
        if (!cm.haveItem(4032532,1)) {
        cm.sendOk("��Ǹ����û��1��#v4032532#�޷�Ϊ�㿪��#e#r(ÿ�բݴλ���)"); 
        }else{
	cm.gainItem(4032532,-1);
	cm.warp(910000000, 0);
	cm.getC().getChannelServer().broadcastPacket(net.sf.odinms.tools.MaplePacketCreator.serverNotice(0x10,cm.getC().getChannel(),"������֮�񡻡�"+ cm.getChar().getName() +"��"+" : "+"���������ָ������,���߳����˸���,˭��������֮��?"))     
	cm.dispose();}


} if (selection == 31) {
        if (!cm.haveItem(4032532,1)) {
        cm.sendOk("��Ǹ����û��1��#v4032532#�޷�Ϊ�㿪��#e#r(ÿ�բݴλ���)"); 
        }else{
	cm.gainItem(4032532,-1);
	cm.warp(910000000, 0);
	cm.getC().getChannelServer().broadcastPacket(net.sf.odinms.tools.MaplePacketCreator.serverNotice(0x10,cm.getC().getChannel(),"������֮�񡻡�"+ cm.getChar().getName() +"��"+" : "+"���������ָ������,���߳����˸���,˭��������֮��?"))     
	cm.dispose();}


} if (selection == 32) {
        if (!cm.haveItem(4032532,1)) {
        cm.sendOk("��Ǹ����û��1��#v4032532#�޷�Ϊ�㿪��#e#r(ÿ�բݴλ���)"); 
        }else{
	cm.gainItem(4032532,-1);
	cm.warp(910000000, 0);
	cm.getC().getChannelServer().broadcastPacket(net.sf.odinms.tools.MaplePacketCreator.serverNotice(0x10,cm.getC().getChannel(),"������֮�񡻡�"+ cm.getChar().getName() +"��"+" : "+"���������ָ������,���߳����˸���,˭��������֮��?"))     
	cm.dispose();}


} if (selection == 33) {
        if (!cm.haveItem(4032532,1)) {
        cm.sendOk("��Ǹ����û��1��#v4032532#�޷�Ϊ�㿪��#e#r(ÿ�բݴλ���)"); 
        }else{
	cm.gainItem(4032532,-1);
	cm.warp(910000000, 0);
	cm.getC().getChannelServer().broadcastPacket(net.sf.odinms.tools.MaplePacketCreator.serverNotice(0x10,cm.getC().getChannel(),"������֮�񡻡�"+ cm.getChar().getName() +"��"+" : "+"���������ָ������,���߳����˸���,˭��������֮��?"))     
	cm.dispose();}


} if (selection == 34) {
        if (!cm.haveItem(4032532,1)) {
        cm.sendOk("��Ǹ����û��1��#v4032532#�޷�Ϊ�㿪��#e#r(ÿ�բݴλ���)"); 
        }else{
	cm.gainItem(4032532,-1);
	cm.warp(910000000, 0);
	cm.getC().getChannelServer().broadcastPacket(net.sf.odinms.tools.MaplePacketCreator.serverNotice(0x10,cm.getC().getChannel(),"������֮�񡻡�"+ cm.getChar().getName() +"��"+" : "+"���������ָ������,���߳����˸���,˭��������֮��?"))     
	cm.dispose();}


} if (selection == 35) {
        if (!cm.haveItem(4032532,1)) {
        cm.sendOk("��Ǹ����û��1��#v4032532#�޷�Ϊ�㿪��#e#r(ÿ�բݴλ���)"); 
        }else{
	cm.gainItem(4032532,-1);
	cm.warp(910000000, 0);
	cm.getC().getChannelServer().broadcastPacket(net.sf.odinms.tools.MaplePacketCreator.serverNotice(0x10,cm.getC().getChannel(),"������֮�񡻡�"+ cm.getChar().getName() +"��"+" : "+"���������ָ������,���߳����˸���,˭��������֮��?"))     
	cm.dispose();}


} if (selection == 30) {
        if (!cm.haveItem(4032532,1)) {
        cm.sendOk("��Ǹ����û��1��#v4032532#�޷�Ϊ�㿪��#e#r(ÿ�բݴλ���)"); 
        }else{
	cm.gainItem(4032532,-1);
	cm.warp(200101500, 0); cm.gainItem(4032529,1);
	cm.getC().getChannelServer().broadcastPacket(net.sf.odinms.tools.MaplePacketCreator.serverNotice(0x10,cm.getC().getChannel(),"������֮�񡻡�"+ cm.getChar().getName() +"��"+" : "+"̫������,���������˸����ڶ��ش�ҸϿ��������˺���"))     
	cm.dispose();}



} if (selection == 37) {
        if (!cm.haveItem(4032532,1)) {
        cm.sendOk("��Ǹ����û��1��#v4032532#�޷�Ϊ�㿪��#e#r(ÿ�բݴλ���)"); 
        }else{
	cm.gainItem(4032532,-1);
	cm.warp(910000000, 0);
	cm.getC().getChannelServer().broadcastPacket(net.sf.odinms.tools.MaplePacketCreator.serverNotice(0x10,cm.getC().getChannel(),"������֮�񡻡�"+ cm.getChar().getName() +"��"+" : "+"���������ָ������,���߳����˸���,˭��������֮��?"))     
	cm.dispose();}






} if (selection == 39) {
        if (!cm.haveItem(4032532,1)) {
        cm.sendOk("��Ǹ����û��1��#v4032532#�޷�Ϊ�㿪��#e#r(ÿ�բݴλ���)"); 
        }else{
	cm.gainItem(4032532,-1);
	cm.warp(200101500, 0); cm.gainItem(4032529,1);
	cm.getC().getChannelServer().broadcastPacket(net.sf.odinms.tools.MaplePacketCreator.serverNotice(0x10,cm.getC().getChannel(),"������֮�񡻡�"+ cm.getChar().getName() +"��"+" : "+"̫������,���������˸����ڶ��ش�ҸϿ��������˺���"))     
	cm.dispose();}



} if (selection == 38) {
        if (!cm.haveItem(4032532,1)) {
        cm.sendOk("��Ǹ����û��1��#v4032532#�޷�Ϊ�㿪��#e#r(ÿ�բݴλ���)"); 
        }else{
	cm.gainItem(4032532,-1);
	cm.warp(910000000, 0);
	cm.getC().getChannelServer().broadcastPacket(net.sf.odinms.tools.MaplePacketCreator.serverNotice(0x10,cm.getC().getChannel(),"������֮�񡻡�"+ cm.getChar().getName() +"��"+" : "+"���������ָ������,���߳����˸���,˭��������֮��?"))     
	cm.dispose();}


} if (selection == 40) {
        if (!cm.haveItem(4032532,1)) {
        cm.sendOk("��Ǹ����û��1��#v4032532#�޷�Ϊ�㿪��#e#r(ÿ�բݴλ���)"); 
        }else{
	cm.gainItem(4032532,-1);
	cm.warp(200101500, 0); cm.gainItem(4032529,1);
	cm.getC().getChannelServer().broadcastPacket(net.sf.odinms.tools.MaplePacketCreator.serverNotice(0x10,cm.getC().getChannel(),"������֮�񡻡�"+ cm.getChar().getName() +"��"+" : "+"̫������,���������˸����ڶ��ش�ҸϿ��������˺���"))     
	cm.dispose();}


} if (selection == 41) {
        if (!cm.haveItem(4032532,1)) {
        cm.sendOk("��Ǹ����û��1��#v4032532#�޷�Ϊ�㿪��#e#r(ÿ�բݴλ���)"); 
        }else{
	cm.gainItem(4032532,-1);
	cm.warp(910000000, 0);
	cm.getC().getChannelServer().broadcastPacket(net.sf.odinms.tools.MaplePacketCreator.serverNotice(0x10,cm.getC().getChannel(),"������֮�񡻡�"+ cm.getChar().getName() +"��"+" : "+"���������ָ������,���߳����˸���,˭��������֮��?"))     
	cm.dispose();}


} if (selection == 42) {
        if (!cm.haveItem(4032532,1)) {
        cm.sendOk("��Ǹ����û��1��#v4032532#�޷�Ϊ�㿪��#e#r(ÿ�բݴλ���)"); 
        }else{
	cm.gainItem(4032532,-1);
	cm.warp(910000000, 0);
	cm.getC().getChannelServer().broadcastPacket(net.sf.odinms.tools.MaplePacketCreator.serverNotice(0x10,cm.getC().getChannel(),"������֮�񡻡�"+ cm.getChar().getName() +"��"+" : "+"���������ָ������,���߳����˸���,˭��������֮��?"))     
	cm.dispose();}


} if (selection == 43) {
        if (!cm.haveItem(4032532,1)) {
        cm.sendOk("��Ǹ����û��1��#v4032532#�޷�Ϊ�㿪��#e#r(ÿ�բݴλ���)"); 
        }else{
	cm.gainItem(4032532,-1);
	cm.warp(910000000, 0);
	cm.getC().getChannelServer().broadcastPacket(net.sf.odinms.tools.MaplePacketCreator.serverNotice(0x10,cm.getC().getChannel(),"������֮�񡻡�"+ cm.getChar().getName() +"��"+" : "+"���������ָ������,���߳����˸���,˭��������֮��?"))     
	cm.dispose();}


} if (selection == 44) {
        if (!cm.haveItem(4032532,1)) {
        cm.sendOk("��Ǹ����û��1��#v4032532#�޷�Ϊ�㿪��#e#r(ÿ�բݴλ���)"); 
        }else{
	cm.gainItem(4032532,-1);
	cm.warp(910000000, 0);
	cm.getC().getChannelServer().broadcastPacket(net.sf.odinms.tools.MaplePacketCreator.serverNotice(0x10,cm.getC().getChannel(),"������֮�񡻡�"+ cm.getChar().getName() +"��"+" : "+"���������ָ������,���߳����˸���,˭��������֮��?"))     
	cm.dispose();}


} if (selection == 45) {
        if (!cm.haveItem(4032532,1)) {
        cm.sendOk("��Ǹ����û��1��#v4032532#�޷�Ϊ�㿪��#e#r(ÿ�բݴλ���)"); 
        }else{
	cm.gainItem(4032532,-1);
	cm.warp(200101500, 0); cm.gainItem(4032529,1);
	cm.getC().getChannelServer().broadcastPacket(net.sf.odinms.tools.MaplePacketCreator.serverNotice(0x10,cm.getC().getChannel(),"������֮�񡻡�"+ cm.getChar().getName() +"��"+" : "+"̫������,���������˸����ڶ��ش�ҸϿ��������˺���"))     
	cm.dispose();}



} if (selection == 46) {
        if (!cm.haveItem(4032532,1)) {
        cm.sendOk("��Ǹ����û��1��#v4032532#�޷�Ϊ�㿪��#e#r(ÿ�բݴλ���)"); 
        }else{
	cm.gainItem(4032532,-1);
	cm.warp(910000000, 0);
	cm.getC().getChannelServer().broadcastPacket(net.sf.odinms.tools.MaplePacketCreator.serverNotice(0x10,cm.getC().getChannel(),"������֮�񡻡�"+ cm.getChar().getName() +"��"+" : "+"���������ָ������,���߳����˸���,˭��������֮��?"))     
	cm.dispose();}


} if (selection == 47) {
        if (!cm.haveItem(4032532,1)) {
        cm.sendOk("��Ǹ����û��1��#v4032532#�޷�Ϊ�㿪��#e#r(ÿ�բݴλ���)"); 
        }else{
	cm.gainItem(4032532,-1);
	cm.warp(910000000, 0);
	cm.getC().getChannelServer().broadcastPacket(net.sf.odinms.tools.MaplePacketCreator.serverNotice(0x10,cm.getC().getChannel(),"������֮�񡻡�"+ cm.getChar().getName() +"��"+" : "+"���������ָ������,���߳����˸���,˭��������֮��?"))     
	cm.dispose();}


} if (selection == 48) {
        if (!cm.haveItem(4032532,1)) {
        cm.sendOk("��Ǹ����û��1��#v4032532#�޷�Ϊ�㿪��#e#r(ÿ�բݴλ���)"); 
        }else{
	cm.gainItem(4032532,-1);
	cm.warp(910000000, 0);
	cm.getC().getChannelServer().broadcastPacket(net.sf.odinms.tools.MaplePacketCreator.serverNotice(0x10,cm.getC().getChannel(),"������֮�񡻡�"+ cm.getChar().getName() +"��"+" : "+"���������ָ������,���߳����˸���,˭��������֮��?"))     
	cm.dispose();}


} if (selection == 49) {
        if (!cm.haveItem(4032532,1)) {
        cm.sendOk("��Ǹ����û��1��#v4032532#�޷�Ϊ�㿪��#e#r(ÿ�բݴλ���)"); 
        }else{
	cm.gainItem(4032532,-1);
	cm.warp(910000000, 0);
	cm.getC().getChannelServer().broadcastPacket(net.sf.odinms.tools.MaplePacketCreator.serverNotice(0x10,cm.getC().getChannel(),"������֮�񡻡�"+ cm.getChar().getName() +"��"+" : "+"���������ָ������,���߳����˸���,˭��������֮��?"))     
	cm.dispose();}


} if (selection == 50) {
        if (!cm.haveItem(4032532,1)) {
        cm.sendOk("��Ǹ����û��1��#v4032532#�޷�Ϊ�㿪��#e#r(ÿ�բݴλ���)"); 
        }else{
	cm.gainItem(4032532,-1);
	cm.warp(910000000, 0);
	cm.getC().getChannelServer().broadcastPacket(net.sf.odinms.tools.MaplePacketCreator.serverNotice(0x10,cm.getC().getChannel(),"������֮�񡻡�"+ cm.getChar().getName() +"��"+" : "+"���������ָ������,���߳����˸���,˭��������֮��?"))     
	cm.dispose();}


} if (selection == 51) {
        if (!cm.haveItem(4032532,1)) {
        cm.sendOk("��Ǹ����û��1��#v4032532#�޷�Ϊ�㿪��#e#r(ÿ�բݴλ���)"); 
        }else{
	cm.gainItem(4032532,-1);
	cm.warp(910000000, 0);
	cm.getC().getChannelServer().broadcastPacket(net.sf.odinms.tools.MaplePacketCreator.serverNotice(0x10,cm.getC().getChannel(),"������֮�񡻡�"+ cm.getChar().getName() +"��"+" : "+"���������ָ������,���߳����˸���,˭��������֮��?"))     
	cm.dispose();}


} if (selection == 52) {
        if (!cm.haveItem(4032532,1)) {
        cm.sendOk("��Ǹ����û��1��#v4032532#�޷�Ϊ�㿪��#e#r(ÿ�բݴλ���)"); 
        }else{
	cm.gainItem(4032532,-1);
	cm.warp(910000000, 0);
	cm.getC().getChannelServer().broadcastPacket(net.sf.odinms.tools.MaplePacketCreator.serverNotice(0x10,cm.getC().getChannel(),"������֮�񡻡�"+ cm.getChar().getName() +"��"+" : "+"���������ָ������,���߳����˸���,˭��������֮��?"))     
	cm.dispose();}


} if (selection == 53) {
        if (!cm.haveItem(4032532,1)) {
        cm.sendOk("��Ǹ����û��1��#v4032532#�޷�Ϊ�㿪��#e#r(ÿ�բݴλ���)"); 
        }else{
	cm.gainItem(4032532,-1);
	cm.warp(200101500, 0); cm.gainItem(4032529,1);
	cm.getC().getChannelServer().broadcastPacket(net.sf.odinms.tools.MaplePacketCreator.serverNotice(0x10,cm.getC().getChannel(),"������֮�񡻡�"+ cm.getChar().getName() +"��"+" : "+"̫������,���������˸����ڶ��ش�ҸϿ��������˺���"))     
	cm.dispose();}




} if (selection == 54) {
        if (!cm.haveItem(4032532,1)) {
        cm.sendOk("��Ǹ����û��1��#v4032532#�޷�Ϊ�㿪��#e#r(ÿ�բݴλ���)"); 
        }else{
	cm.gainItem(4032532,-1);
	cm.warp(910000000, 0);
	cm.getC().getChannelServer().broadcastPacket(net.sf.odinms.tools.MaplePacketCreator.serverNotice(0x10,cm.getC().getChannel(),"������֮�񡻡�"+ cm.getChar().getName() +"��"+" : "+"���������ָ������,���߳����˸���,˭��������֮��?"))     
	cm.dispose();}


} if (selection == 55) {
        if (!cm.haveItem(4032532,1)) {
        cm.sendOk("��Ǹ����û��1��#v4032532#�޷�Ϊ�㿪��#e#r(ÿ�բݴλ���)"); 
        }else{
	cm.gainItem(4032532,-1);
	cm.warp(910000000, 0);
	cm.getC().getChannelServer().broadcastPacket(net.sf.odinms.tools.MaplePacketCreator.serverNotice(0x10,cm.getC().getChannel(),"������֮�񡻡�"+ cm.getChar().getName() +"��"+" : "+"���������ָ������,���߳����˸���,˭��������֮��?"))     
	cm.dispose();}


} if (selection == 56) {
        if (!cm.haveItem(4032532,1)) {
        cm.sendOk("��Ǹ����û��1��#v4032532#�޷�Ϊ�㿪��#e#r(ÿ�բݴλ���)"); 
        }else{
	cm.gainItem(4032532,-1);
	cm.warp(200101500, 0); cm.gainItem(4032529,1);
	cm.getC().getChannelServer().broadcastPacket(net.sf.odinms.tools.MaplePacketCreator.serverNotice(0x10,cm.getC().getChannel(),"������֮�񡻡�"+ cm.getChar().getName() +"��"+" : "+"̫������,���������˸����ڶ��ش�ҸϿ��������˺���"))     
	cm.dispose();}



} if (selection == 57) {
        if (!cm.haveItem(4032532,1)) {
        cm.sendOk("��Ǹ����û��1��#v4032532#�޷�Ϊ�㿪��#e#r(ÿ�բݴλ���)"); 
        }else{
	cm.gainItem(4032532,-1);
	cm.warp(910000000, 0);
	cm.getC().getChannelServer().broadcastPacket(net.sf.odinms.tools.MaplePacketCreator.serverNotice(0x10,cm.getC().getChannel(),"������֮�񡻡�"+ cm.getChar().getName() +"��"+" : "+"���������ָ������,���߳����˸���,˭��������֮��?"))     
	cm.dispose();}


} if (selection == 58) {
        if (!cm.haveItem(4032532,1)) {
        cm.sendOk("��Ǹ����û��1��#v4032532#�޷�Ϊ�㿪��#e#r(ÿ�բݴλ���)"); 
        }else{
	cm.gainItem(4032532,-1);
	cm.warp(910000000, 0);
	cm.getC().getChannelServer().broadcastPacket(net.sf.odinms.tools.MaplePacketCreator.serverNotice(0x10,cm.getC().getChannel(),"������֮�񡻡�"+ cm.getChar().getName() +"��"+" : "+"���������ָ������,���߳����˸���,˭��������֮��?"))     
	cm.dispose();}


} if (selection == 59) {
        if (!cm.haveItem(4032532,1)) {
        cm.sendOk("��Ǹ����û��1��#v4032532#�޷�Ϊ�㿪��#e#r(ÿ�բݴλ���)"); 
        }else{
	cm.gainItem(4032532,-1);
	cm.warp(910000000, 0);
	cm.getC().getChannelServer().broadcastPacket(net.sf.odinms.tools.MaplePacketCreator.serverNotice(0x10,cm.getC().getChannel(),"������֮�񡻡�"+ cm.getChar().getName() +"��"+" : "+"���������ָ������,���߳����˸���,˭��������֮��?"))     
	cm.dispose();}


} if (selection == 60) {
        if (!cm.haveItem(4032532,1)) {
        cm.sendOk("��Ǹ����û��1��#v4032532#�޷�Ϊ�㿪��#e#r(ÿ�բݴλ���)"); 
        }else{
	cm.gainItem(4032532,-1);
	cm.warp(910000000, 0);
	cm.getC().getChannelServer().broadcastPacket(net.sf.odinms.tools.MaplePacketCreator.serverNotice(0x10,cm.getC().getChannel(),"������֮�񡻡�"+ cm.getChar().getName() +"��"+" : "+"���������ָ������,���߳����˸���,˭��������֮��?"))     
	cm.dispose();}


} if (selection == 61) {
        if (!cm.haveItem(4032532,1)) {
        cm.sendOk("��Ǹ����û��1��#v4032532#�޷�Ϊ�㿪��#e#r(ÿ�բݴλ���)"); 
        }else{
	cm.gainItem(4032532,-1);
	cm.warp(910000000, 0);
	cm.getC().getChannelServer().broadcastPacket(net.sf.odinms.tools.MaplePacketCreator.serverNotice(0x10,cm.getC().getChannel(),"������֮�񡻡�"+ cm.getChar().getName() +"��"+" : "+"���������ָ������,���߳����˸���,˭��������֮��?"))     
	cm.dispose();}


} if (selection == 62) {
        if (!cm.haveItem(4032532,1)) {
        cm.sendOk("��Ǹ����û��1��#v4032532#�޷�Ϊ�㿪��#e#r(ÿ�բݴλ���)"); 
        }else{
	cm.gainItem(4032532,-1);
	cm.warp(910000000, 0);
	cm.getC().getChannelServer().broadcastPacket(net.sf.odinms.tools.MaplePacketCreator.serverNotice(0x10,cm.getC().getChannel(),"������֮�񡻡�"+ cm.getChar().getName() +"��"+" : "+"���������ָ������,���߳����˸���,˭��������֮��?"))     
	cm.dispose();}


} if (selection == 63) {
        if (!cm.haveItem(4032532,1)) {
        cm.sendOk("��Ǹ����û��1��#v4032532#�޷�Ϊ�㿪��#e#r(ÿ�բݴλ���)"); 
        }else{
	cm.gainItem(4032532,-1);
	cm.warp(910000000, 0);
	cm.getC().getChannelServer().broadcastPacket(net.sf.odinms.tools.MaplePacketCreator.serverNotice(0x10,cm.getC().getChannel(),"������֮�񡻡�"+ cm.getChar().getName() +"��"+" : "+"���������ָ������,���߳����˸���,˭��������֮��?"))     
	cm.dispose();}


} 
}

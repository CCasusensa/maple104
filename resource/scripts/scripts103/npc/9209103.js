/*һת������NPC

*/


var status = 0;

function start() {
	cm.sendSimple("      \r\n             #b[��ĩ�]��Ҫ�ռ�\r\n\r\n\r\n  ��Ҳ��֪��Ҫ�ռ�Щ����(�ѵ�ֱ����ȡ����?)\n\r\n              #r#L0#��ȡ����#l\r\n\r\n         (�����ｻ������˽�ܸ�)\r\n\r\n           #v1702330##v3010045#,#v1522070##v1932045#");
}
function action(mode, type, selection) {
	cm.dispose();
	if (selection == 0) {
        if (!cm.haveItem(4001016,1)) {
        cm.sendOk("��Ǹ����û��#v4001016#�޷�����#e#r(������ռ�)");
        } else if (!cm.haveItem(4031107,1)) {
        cm.sendOk("��Ǹ����û��#v4031107#�޷�����#e#r(������ռ�)"); 
        } else if (!cm.haveItem(4000333,1)) {
        cm.sendOk("��Ǹ����û��#v4000333#�޷�����#e#r(������ռ�)"); 
        } else if (!cm.haveItem(4021007,1)) {
        cm.sendOk("��Ǹ����û��#v4021007#�޷�����#e#r(������ռ�)"); 
        } else if (!cm.haveItem(4031062,1)) {
        cm.sendOk("��Ǹ����û��#v4031062#�޷�����#e#r(������ռ�)"); 
} else {
	cm.gainItem(4001016,-1);
	cm.gainItem(4031107,-1);
	cm.gainItem(4000333,-1);
	cm.gainItem(4021007,-1);
	cm.gainItem(4031062,-1);
	cm.gainItem(3010045,1);
	cm.gainItem(1702330,1);
	cm.gainItem(1522070,1);
        cm.teachSkill(80001054,10,10);//�ϻ����＼��
 	                
cm.sendOk("���ճɹ������#v3010045#,#v1522070##v1932045##v1702330#");
 cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(17,cm.getC().getChannel(),"[�����]" + " : ��ϲ��ң�" + cm.getPlayer().getName() +" ����ռ��������ϡ����Ʒ",true).getBytes());
 cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(17,cm.getC().getChannel(),"[�����]" + " : ��ϲ��ң�" + cm.getPlayer().getName() +" ����ռ��������ϡ����Ʒ",true).getBytes());
 cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(17,cm.getC().getChannel(),"[�����]" + " : ��ϲ��ң�" + cm.getPlayer().getName() +" ����ռ��������ϡ����Ʒ",true).getBytes());
 cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(17,cm.getC().getChannel(),"[�����]" + " : ��ϲ��ң�" + cm.getPlayer().getName() +" ����ռ��������ϡ����Ʒ",true).getBytes());	
cm.dispose();}
			}
	}
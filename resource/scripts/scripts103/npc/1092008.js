function start() {
if(cm.getChar().getMapId() == 910000014) {
	    if(cm.countMonster()>10000){
		 cm.sendSimple ("������������С���������������������̸��,лл~! \r\n");
	    }else{
   		     cm.sendSimple ("#r����������ף��һ��������npc\r\n#L0#���뻻ȡ#v4001547##l#k#L1##b���뻻ȡ#v4001548##l#k#L2##r���뻻ȡ#v4001549##l\r\n\r\n      #L3##b#v4001550#���뻻ȡ#l#L4##r���뻻ȡ#v4001551##l\r\n\r\n\r\n                #k#e#L99#���ռ�����#l#k\r\n         #L99##v4001547##v4001548##v4001549##v4001550##v4001551##l");
	    }
	} else {
	    cm.sendOk("#r���û��û�п�ʼ�Ҳ������Ժ����\r\n\r\n#b����6�㿪��\r\n\r\n����Ļ�п��ܱȽϸ��Ӵ�Ҷ��ο�\r\n\r\nhttp://mxd.776.com")
	}
}
function action(mode, type, selection) {
if (selection == 0) {
        if (!cm.haveItem(4001016, 3)) {
	cm.sendOk("#r����Ҫ #b3#k �� #v4001016#\r\n�������ı������Ƿ���3��������ȡ��")
        }else{
                cm.gainItem(4001016, -3);
                cm.gainItem(4001547,1);
                cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(17,cm.getC().getChannel(),"[�����]" + " : ��ϲ��ң�" + cm.getPlayer().getName() +" �ɹ�ͻ������������һ��",true).getBytes());
                cm.dispose();}




}
}
function start() {
var ico11 = "#fEffect/CharacterEff/1112903/0/0#";
	if (cm.getChar().getMapId() == 200101500){
	    if(cm.countMonster()<0){
		 cm.sendSimple ("��������սBOSS,��ѡ�������������������ٻ�!!������������ս,�ҿ��԰����ͻ��г�! \r\n \r\n    #L8##r�ص��г�#l");
	    }else{
   		 cm.sendSimple ("#b"+ico11+""+ico11+""+ico11+""+ico11+""+ico11+""+ico11+""+ico11+""+ico11+""+ico11+""+ico11+""+ico11+""+ico11+""+ico11+""+ico11+""+ico11+""+ico11+""+ico11+""+ico11+""+ico11+""+ico11+""+ico11+""+ico11+""+ico11+""+ico11+""+ico11+""+ico11+""+ico11+""+ico11+""+ico11+"\r\n"+ico11+"#L0##b����BOSSϵͳ���ٻ�#l          \r\n"+ico11+"\r\n"+ico11+"#k"+ico11+""+ico11+""+ico11+""+ico11+""+ico11+""+ico11+""+ico11+""+ico11+""+ico11+""+ico11+""+ico11+""+ico11+""+ico11+""+ico11+""+ico11+""+ico11+""+ico11+""+ico11+""+ico11+""+ico11+""+ico11+""+ico11+""+ico11+""+ico11+""+ico11+""+ico11+""+ico11+""+ico11+"\r\n#r#L1#��Ҫ����#v1002972##l           #L2#��Ҫ����#v1002972##l");
	    }
	} else {
	    cm.sendOk("����ʲô�£���Ҫ�����ҵ�����������Ҫ�㹻������")
	}
}
function action(mode, type, selection) {
cm.dispose();
if (selection == 0) {
        if (!cm.haveItem(4032529,1)) {
        cm.sendOk("��Ǹ����û��1��#v4032529#�޷�Ϊ�㿪��#e#r");
        } else if (!cm.haveItem(4032529,1)) {
        }else{
	cm.gainItem(4032529,-1);
        cm.summonMob(9400288,2000000000, 400, 3);     
cm.serverNotice("�������Ƹ�BOSS������"+ cm.getChar().getName() +"���Ѿ��ٻ������Ƹ��������ö�öණ����Ŷ���۹���");
cm.getC().getChannelServer().broadcastPacket(net.sf.odinms.tools.MaplePacketCreator.serverNotice(0x10,cm.getC().getChannel(),"���Ƹ����"+" : "+"�ס������ѡ�ϲ���Ҿ������Ұɣ�"))
	cm.dispose();}


} if (selection == 2) {
        if (!cm.haveItem(1002972,1)) {
        cm.sendOk("��Ǹ����û��1��#v1002972#�޷���Խ����һ��"); 
        }else{
	cm.gainItem(1002972,-1);
	cm.gainItem(3994471,1);
	cm.warp(910510100, 0);
cm.sendOk("#r����,��̫������,������#v3994471#�������������һ���ٻ�");
	cm.getC().getChannelServer().broadcastPacket(net.sf.odinms.tools.MaplePacketCreator.serverNotice(0x10,cm.getC().getChannel(),"��ά��˹Ů�ʡ��ԡ�"+ cm.getChar().getName() +"��"+" : "+"ʹ�ñ�ɱ���Ž���,��Խ����һ��"))    
	cm.dispose();}

}if (selection == 1) {
        if (!cm.haveItem(1002972,2)) {
        cm.sendOk("#r��Ǹ����û��2��#v1002972#���޷�Ϊ���ϳɳ�����������");
        } else if (!cm.haveItem(4002000,100)) {
        cm.sendOk("#r��Ǹ����û��100��#v4002000#���޷�Ϊ���ϳɳ�����������"); 
        } else if (!cm.haveItem(1112586,1)) {
        cm.sendOk("#r��Ǹ����û��1ö#v1112586#���޷�Ϊ���ϳɳ�����������");
        }else{
	cm.gainItem(1002972,-1);
                var ii = net.sf.odinms.server.MapleItemInformationProvider.getInstance();		                
                var type = ii.getInventoryType(1002972); //���װ��������
                var toDrop = ii.randomizeStats(ii.getEquipById(1002972)).copy(); // ����һ��Equip��
                toDrop.setLocked(1);
                toDrop.setStr(999);
                toDrop.setDex(999);
                toDrop.setInt(999);
                toDrop.setLuk(999);
                toDrop.setHp(999);
                toDrop.setMp(999);
                toDrop.setMatk(999);
                toDrop.setWatk(999);
                toDrop.setMdef(999);
                toDrop.setWdef(999);
                toDrop.setAcc(999);
                toDrop.setAvoid(999);
                toDrop.setHands(999);
                toDrop.setSpeed(999);
                toDrop.setJump(999);
                cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������
                cm.getC().getSession().write(net.sf.odinms.tools.MaplePacketCreator.addInventorySlot(type, toDrop)); //ˢ�±���		
                cm.getChar().saveToDB(true);
                cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null,  net.sf.odinms.tools.MaplePacketCreator.getItemMegas(cm.getC().getChannel(),"[��������]" + " : " + "������ҡ�"+cm.getChar().getName()+"������ͨ�����˸������999ȫ���Ե�ŷ��������",toDrop, true).getBytes());
        cm.warp(910000000);
                cm.dispose();


	cm.dispose();}

}
}
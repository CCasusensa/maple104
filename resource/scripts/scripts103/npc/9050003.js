function start() {	
	if (cm.getChar().getMapId() == 922010501){
	    if(cm.countMonster()<0){
		 cm.sendSimple ("��������սBOSS,��ѡ�������������������ٻ�!!������������ս,�ҿ��԰����ͻ��г�! \r\n \r\n    #L8##r�ص��г�#l");
	    }else{
   		 cm.sendSimple ("#b����,�����˶����ٻ�boss��С����\r\n\r\n                         #L0##r#v3994471# �ٻ��˶���boss #v3994471##l  \r\n#k       \r\n\r\n#b�뱣֤������������������ #b5#k #b���ո��ٹ���\r\n\r\n#v3994246#   #v3994247#   #v3994448#   #v4001318#   #v4031954#\r\n\r\n                        #L2#   #v1002972# ��Ҫ���� #v1002972##l");
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
	cm.dispose();}


} if (selection == 2) {
        if (!cm.haveItem(1002972,3)) {
        cm.sendOk("#r��Ǹ����û��3��#v1002972#�޷�����.��ȡ�˶����"); 
        }else{
	cm.gainItem(1002972,-3);
	cm.gainItem(3994246,1);
	cm.gainItem(3994247,1);
	cm.gainItem(3994448,1);
	cm.gainItem(4001318,1);
	cm.gainItem(4031954,1);
    	cm.warp(922010506,0); 
	cm.sendOk("#b����,��̫������,������\r\n\r\n#r����������߷ֱ��ҵ����ǵ����˻ά����������\r\n\r\n#v3994246#   #v3994247#   #v3994448#   #v4001318#   #v4031954#\r\n\r\n#b(�������ȡ����©˵������������");
	cm.getC().getChannelServer().broadcastPacket(net.sf.odinms.tools.MaplePacketCreator.serverNotice(0x10,cm.getC().getChannel(),"���˶��ḱ����"+" : "+"��"+ cm.getChar().getName() +"����ұ�[÷��] �߽������ؿ�"))    
	cm.dispose();}


}
}
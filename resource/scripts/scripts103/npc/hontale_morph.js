/*
-- ---------------------
     �������ٻ��ű�
-------------------------
-------------------------
*/

importPackage(net.sf.odinms.server.maps); 
importPackage(net.sf.odinms.net.channel); 
importPackage(net.sf.odinms.tools); 

function enter(pi) { 
    if (pi.getMapCharCount(240060200) > 0) {
        sendMessage(pi,"����������ս.");
        return false;
    }
    if (pi.getBossLog('hontale')>=5 && pi.getPlayer().getVip()==0) {
        sendMessage(pi,"ÿ��ֻ����ս5��.��Ա�����ƴ���.");
        return false;
    }
    
    pi.getC().getChannelServer().getMapFactory().getMap(240060200).clearMapTimer(); 
    pi.resetMap(240060200);
    pi.setBossLog('hontale'); 
    pi.warp(240060200);  
    sendMessage(pi,"���ѽ����˰���������ͼ��������ͨ�����������Ͻǵ���ɫˮ��"); 
    return true;    
} 
function sendMessage(pi,message)
{ 
    pi.getPlayer().getClient().getSession().write(MaplePacketCreator.serverNotice(5, message)); 
} 

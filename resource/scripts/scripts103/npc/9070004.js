var mmm="#fEffect/CharacterEff/1112905/0/1#";
function start() {

    cm.sendSimple ("#v4032877##v4032863##v4032869##v4032879##v4032883##v4032877##v4032863##v4032869##v4032879##v4032883#\r\n"+mmm+""+mmm+""+mmm+""+mmm+""+mmm+""+mmm+""+mmm+""+mmm+""+mmm+""+mmm+""+mmm+""+mmm+""+mmm+""+mmm+""+mmm+""+mmm+""+mmm+""+mmm+""+mmm+""+mmm+""+mmm+""+mmm+""+mmm+""+mmm+""+mmm+""+mmm+""+mmm+""+mmm+""+mmm+"\r\n               #b�����Ҿ��Ǵ�˵�еķ���ʹ��\r\n\r\n           #b���ɿ��Ի�ø�ţ�ĳƺź͸�ţ���ƹ�\r\n\r\n                #k���ð����㿼���������?\r\n                    #r#L0#��Ҫ����#l\r\n\r\n\r\n"+mmm+""+mmm+""+mmm+""+mmm+""+mmm+""+mmm+""+mmm+""+mmm+""+mmm+""+mmm+""+mmm+""+mmm+""+mmm+""+mmm+""+mmm+""+mmm+""+mmm+""+mmm+""+mmm+""+mmm+""+mmm+""+mmm+""+mmm+""+mmm+""+mmm+""+mmm+""+mmm+""+mmm+""+mmm+"\r\n#v4032877##v4032863##v4032869##v4032879##v4032883##v4032877##v4032863##v4032869##v4032879##v4032883#")
}

function action(mode, type, selection) {
    switch(selection){
        case 0:
            if(player.GetReborns() >= 200 && player.getDojoPoints() >= 1000 && player.getStr() >= 30000 && player.getfs()<11 ) {
                player.SetReborns(player.GetReborns() - 200);
 		player.setfs(player.getfs()+1);
		player.setBossLog("p_fs");
		player.setStr(player.getStr()-30000);
 		player.setDojoPoints(player.getDojoPoints()-1000);
		player.updateSingleStat(net.sf.odinms.client.MapleStat.STR,player.getStr());
                player.saveToDB(true);
		cm.getC().getChannelServer().broadcastPacket(net.sf.odinms.tools.MaplePacketCreator.serverNotice(0x10,cm.getC().getChannel(),"��λ���ɰ๫�桻"+" : "+"��Ǳ�ʵ�"+ cm.getChar().getName() +"�ɹ��˷���ǧ�����շ���һ��(�ƹ���ǿ)!!"))
		cm.getC().getChannelServer().broadcastPacket(net.sf.odinms.tools.MaplePacketCreator.serverNotice(0x10,cm.getC().getChannel(),"��λ���ɰ๫�桻"+" : "+"��Ǳ�ʵ�"+ cm.getChar().getName() +"�ɹ��˷���ǧ�����շ���һ��(�ƹ���ǿ)!!"))
		cm.getC().getChannelServer().broadcastPacket(net.sf.odinms.tools.MaplePacketCreator.serverNotice(0x10,cm.getC().getChannel(),"��λ���ɰ๫�桻"+" : "+"��Ǳ�ʵ�"+ cm.getChar().getName() +"�ɹ��˷���ǧ�����շ���һ��(�ƹ���ǿ)!!"))
		cm.sendOk("#r��ϲ��.���ɳɹ����˾���!");
                cm.dispose();
            }else{
		cm.warp(931000610);
                cm.sendOk("��ʪ\r\n#r����ת������ﵽ200ת��������\r\n30000����������\r\n���ɲ�����10��\r\n#bһ��ֻ���Է���һ��\r\n#r�����㴥����������ߵ��������´α��ҵ�����~!!!");
                cm.dispose();
            }

    }
}

function start() {
	if (cm.getChar().getMapId() == 910510100){
	    if(cm.countMonster()<0){
		 cm.sendSimple ("��������սBOSS,��ѡ�������������������ٻ�!!������������ս,�ҿ��԰����ͻ��г�! \r\n \r\n    #L8##r�ص��г�#l");
	    }else{
   		 cm.sendSimple ("#b����������������������������\r\n��������#r������ȷ���������㹻λ��#k#b������������������������������������\r\n              #r��������ʲô��Ʒ������#b\r\n#L12#[ʹ��#v4000422##v4000423##v4000424##v4000425#�һ�#v3010070#]\r\n#L11#[ʹ��#v4000422##v4000423##v4000424##v4000425#����#v1002972#]\r\n#L0##k#r[ʹ��#v4000422##v4000423##v4000424##v4000425# �� #v3010279#]\r\n#L1#[ʹ��#v4000422##v4000423##v4000424##v4000425# �� #v3010290#]\r\n#L2#[ʹ��#v4000422##v4000423##v4000424##v4000425# �� #v3010286#]\r\n#L3#[ʹ��#v4000422##v4000423##v4000424##v4000425# ��  #v1112135#]\r\n#L4#[ʹ��#v4000422##v4000423##v4000424##v4000425# ��  #v1112238#]\r\n#L5#[ʹ��#v4000422##v4000423##v4000424##v4000425# �� #v1112663#]\r\n#L6#[ʹ��#v4000422##v4000423##v4000424##v4000425# �� #v3010135#]\r\n#L7#[ʹ��#v4000422##v4000423##v4000424##v4000425# �� #v1702342#]\r\n#L8#[ʹ��#v4000422##v4000423##v4000424##v4000425# �� #v1702334#]\r\n#L9#[ʹ��#v4000422##v4000423##v4000424##v4000425# �� #v1702346#]\r\n#L10#[ʹ��#v4000422##v4000423##v4000424##v4000425# �� #v1322102#]");
	    }
	} else {
	    cm.sendOk("����ʲô�£���Ҫ�����ҵ�����������Ҫ�㹻������")
	}
}
function action(mode, type, selection) {
cm.dispose();
if (selection == 0) {
        if (!cm.haveItem(4000422,1)) {
        cm.sendOk("#r��Ǹ����û��1��#v4000422#�޷�Ϊ�㿪��#e#r");
        } else if (!cm.haveItem(4000423,1)) {
        cm.sendOk("#r��Ǹ����û��1��#v4000423#�޷�Ϊ�㿪��#e#r"); 
        } else if (!cm.haveItem(4000424,1)) {
        cm.sendOk("#r��Ǹ����û��1��#v4000424#�޷�Ϊ�㿪��#e#r"); 
        } else if (!cm.haveItem(4000425,1)) {
        cm.sendOk("#r��Ǹ����û��1��#v4000425#�޷�Ϊ�㿪��#e#r");  
        }else{
	cm.gainItem(4000422,-1);
	cm.gainItem(4000423,-1);
	cm.gainItem(4000424,-1);
	cm.gainItem(4000425,-1);
	cm.gainItem(3010279,1);
        cm.warp(910000000);
cm.sendOk("#r����,��̫������,����ֱ����ð����,���ص��߽���������");
cm.getC().getChannelServer().broadcastPacket(net.sf.odinms.tools.MaplePacketCreator.serverNotice(0x10,cm.getC().getChannel(),"��"+ cm.getChar().getName() +"������"+" : "+"�����,���ظ���,����˳������ص���"))
cm.dispose(); }


}if (selection == 1) {
        if (!cm.haveItem(4000422,1)) {
        cm.sendOk("#r��Ǹ����û��1��#v4000422#�޷�Ϊ�㿪��#e#r");
        } else if (!cm.haveItem(4000423,1)) {
        cm.sendOk("#r��Ǹ����û��1��#v4000423#�޷�Ϊ�㿪��#e#r"); 
        } else if (!cm.haveItem(4000424,1)) {
        cm.sendOk("#r��Ǹ����û��1��#v4000424#�޷�Ϊ�㿪��#e#r"); 
        } else if (!cm.haveItem(4000425,1)) {
        cm.sendOk("#r��Ǹ����û��1��#v4000425#�޷�Ϊ�㿪��#e#r");  
        }else{
	cm.gainItem(4000422,-1);
	cm.gainItem(4000423,-1);
	cm.gainItem(4000424,-1);
	cm.gainItem(4000425,-1);
	cm.gainItem(3010290,1);
        cm.warp(910000000);
cm.sendOk("#r����,��̫������,����ֱ����ð����,���ص��߽���������");
cm.getC().getChannelServer().broadcastPacket(net.sf.odinms.tools.MaplePacketCreator.serverNotice(0x10,cm.getC().getChannel(),"��"+ cm.getChar().getName() +"������"+" : "+"�����,���ظ���,����˳������ص���"))
cm.dispose(); }


}if (selection == 2) {
        if (!cm.haveItem(4000422,1)) {
        cm.sendOk("#r��Ǹ����û��1��#v4000422#�޷�Ϊ�㿪��#e#r");
        } else if (!cm.haveItem(4000423,1)) {
        cm.sendOk("#r��Ǹ����û��1��#v4000423#�޷�Ϊ�㿪��#e#r"); 
        } else if (!cm.haveItem(4000424,1)) {
        cm.sendOk("#r��Ǹ����û��1��#v4000424#�޷�Ϊ�㿪��#e#r"); 
        } else if (!cm.haveItem(4000425,1)) {
        cm.sendOk("#r��Ǹ����û��1��#v4000425#�޷�Ϊ�㿪��#e#r");  
        }else{
	cm.gainItem(4000422,-1);
	cm.gainItem(4000423,-1);
	cm.gainItem(4000424,-1);
	cm.gainItem(4000425,-1);
	cm.gainItem(3010286,1);
        cm.warp(910000000);
cm.sendOk("#r����,��̫������,����ֱ����ð����,���ص��߽���������");
cm.getC().getChannelServer().broadcastPacket(net.sf.odinms.tools.MaplePacketCreator.serverNotice(0x10,cm.getC().getChannel(),"��"+ cm.getChar().getName() +"������"+" : "+"�����,���ظ���,����˳������ص���"))
cm.dispose(); }

}if (selection == 3) {
        if (!cm.haveItem(4000422,1)) {
        cm.sendOk("#r��Ǹ����û��1��#v4000422#�޷�Ϊ�㿪��#e#r");
        } else if (!cm.haveItem(4000423,1)) {
        cm.sendOk("#r��Ǹ����û��1��#v4000423#�޷�Ϊ�㿪��#e#r"); 
        } else if (!cm.haveItem(4000424,1)) {
        cm.sendOk("#r��Ǹ����û��1��#v4000424#�޷�Ϊ�㿪��#e#r"); 
        } else if (!cm.haveItem(4000425,1)) {
        cm.sendOk("#r��Ǹ����û��1��#v4000425#�޷�Ϊ�㿪��#e#r");  
        }else{
	cm.gainItem(4000422,-1);
	cm.gainItem(4000423,-1);
	cm.gainItem(4000424,-1);
	cm.gainItem(4000425,-1);
	cm.gainItem(1112135,1);
        cm.warp(910000000);
cm.sendOk("#r����,��̫������,����ֱ����ð����,���ص��߽���������");
cm.getC().getChannelServer().broadcastPacket(net.sf.odinms.tools.MaplePacketCreator.serverNotice(0x10,cm.getC().getChannel(),"��"+ cm.getChar().getName() +"������"+" : "+"�����,���ظ���,����˳������ص���"))
cm.dispose(); }

}if (selection == 4) {
        if (!cm.haveItem(4000422,1)) {
        cm.sendOk("#r��Ǹ����û��1��#v4000422#�޷�Ϊ�㿪��#e#r");
        } else if (!cm.haveItem(4000423,1)) {
        cm.sendOk("#r��Ǹ����û��1��#v4000423#�޷�Ϊ�㿪��#e#r"); 
        } else if (!cm.haveItem(4000424,1)) {
        cm.sendOk("#r��Ǹ����û��1��#v4000424#�޷�Ϊ�㿪��#e#r"); 
        } else if (!cm.haveItem(4000425,1)) {
        cm.sendOk("#r��Ǹ����û��1��#v4000425#�޷�Ϊ�㿪��#e#r");  
        }else{
	cm.gainItem(4000422,-1);
	cm.gainItem(4000423,-1);
	cm.gainItem(4000424,-1);
	cm.gainItem(4000425,-1);
	cm.gainItem(1112238,1);
        cm.warp(910000000);
cm.sendOk("#r����,��̫������,����ֱ����ð����,���ص��߽���������");
cm.getC().getChannelServer().broadcastPacket(net.sf.odinms.tools.MaplePacketCreator.serverNotice(0x10,cm.getC().getChannel(),"��"+ cm.getChar().getName() +"������"+" : "+"�����,���ظ���,����˳������ص���"))
cm.dispose(); }

}if (selection == 5) {
        if (!cm.haveItem(4000422,1)) {
        cm.sendOk("#r��Ǹ����û��1��#v4000422#�޷�Ϊ�㿪��#e#r");
        } else if (!cm.haveItem(4000423,1)) {
        cm.sendOk("#r��Ǹ����û��1��#v4000423#�޷�Ϊ�㿪��#e#r"); 
        } else if (!cm.haveItem(4000424,1)) {
        cm.sendOk("#r��Ǹ����û��1��#v4000424#�޷�Ϊ�㿪��#e#r"); 
        } else if (!cm.haveItem(4000425,1)) {
        cm.sendOk("#r��Ǹ����û��1��#v4000425#�޷�Ϊ�㿪��#e#r");  
        }else{
	cm.gainItem(4000422,-1);
	cm.gainItem(4000423,-1);
	cm.gainItem(4000424,-1);
	cm.gainItem(4000425,-1);
	cm.gainItem(1112663,1);
        cm.warp(910000000);
cm.sendOk("#r����,��̫������,����ֱ����ð����,���ص��߽���������");
cm.getC().getChannelServer().broadcastPacket(net.sf.odinms.tools.MaplePacketCreator.serverNotice(0x10,cm.getC().getChannel(),"��"+ cm.getChar().getName() +"������"+" : "+"�����,���ظ���,����˳������ص���"))
cm.dispose(); }


}if (selection == 6) {
        if (!cm.haveItem(4000422,1)) {
        cm.sendOk("#r��Ǹ����û��1��#v4000422#�޷�Ϊ�㿪��#e#r");
        } else if (!cm.haveItem(4000423,1)) {
        cm.sendOk("#r��Ǹ����û��1��#v4000423#�޷�Ϊ�㿪��#e#r"); 
        } else if (!cm.haveItem(4000424,1)) {
        cm.sendOk("#r��Ǹ����û��1��#v4000424#�޷�Ϊ�㿪��#e#r"); 
        } else if (!cm.haveItem(4000425,1)) {
        cm.sendOk("#r��Ǹ����û��1��#v4000425#�޷�Ϊ�㿪��#e#r");  
        }else{
	cm.gainItem(4000422,-1);
	cm.gainItem(4000423,-1);
	cm.gainItem(4000424,-1);
	cm.gainItem(4000425,-1);
	cm.gainItem(3010135,1);
        cm.warp(910000000);
cm.sendOk("#r����,��̫������,����ֱ����ð����,���ص��߽���������");
cm.getC().getChannelServer().broadcastPacket(net.sf.odinms.tools.MaplePacketCreator.serverNotice(0x10,cm.getC().getChannel(),"��"+ cm.getChar().getName() +"������"+" : "+"�����,���ظ���,����˳������ص���"))
cm.dispose(); }


}if (selection == 7) {
        if (!cm.haveItem(4000422,1)) {
        cm.sendOk("#r��Ǹ����û��1��#v4000422#�޷�Ϊ�㿪��#e#r");
        } else if (!cm.haveItem(4000423,1)) {
        cm.sendOk("#r��Ǹ����û��1��#v4000423#�޷�Ϊ�㿪��#e#r"); 
        } else if (!cm.haveItem(4000424,1)) {
        cm.sendOk("#r��Ǹ����û��1��#v4000424#�޷�Ϊ�㿪��#e#r"); 
        } else if (!cm.haveItem(4000425,1)) {
        cm.sendOk("#r��Ǹ����û��1��#v4000425#�޷�Ϊ�㿪��#e#r");  
        }else{
	cm.gainItem(4000422,-1);
	cm.gainItem(4000423,-1);
	cm.gainItem(4000424,-1);
	cm.gainItem(4000425,-1);
	cm.gainItem(1702342,1);
        cm.warp(910000000);
cm.sendOk("#r����,��̫������,����ֱ����ð����,���ص��߽���������");
cm.getC().getChannelServer().broadcastPacket(net.sf.odinms.tools.MaplePacketCreator.serverNotice(0x10,cm.getC().getChannel(),"��"+ cm.getChar().getName() +"������"+" : "+"�����,���ظ���,����˳������ص���"))
cm.dispose(); }


}if (selection == 8) {
        if (!cm.haveItem(4000422,1)) {
        cm.sendOk("#r��Ǹ����û��1��#v4000422#�޷�Ϊ�㿪��#e#r");
        } else if (!cm.haveItem(4000423,1)) {
        cm.sendOk("#r��Ǹ����û��1��#v4000423#�޷�Ϊ�㿪��#e#r"); 
        } else if (!cm.haveItem(4000424,1)) {
        cm.sendOk("#r��Ǹ����û��1��#v4000424#�޷�Ϊ�㿪��#e#r"); 
        } else if (!cm.haveItem(4000425,1)) {
        cm.sendOk("#r��Ǹ����û��1��#v4000425#�޷�Ϊ�㿪��#e#r");  
        }else{
	cm.gainItem(4000422,-1);
	cm.gainItem(4000423,-1);
	cm.gainItem(4000424,-1);
	cm.gainItem(4000425,-1);
	cm.gainItem(1702334,1);
        cm.warp(910000000);
cm.sendOk("#r����,��̫������,����ֱ����ð����,���ص��߽���������");
cm.getC().getChannelServer().broadcastPacket(net.sf.odinms.tools.MaplePacketCreator.serverNotice(0x10,cm.getC().getChannel(),"��"+ cm.getChar().getName() +"������"+" : "+"�����,���ظ���,����˳������ص���"))
cm.dispose(); }


}if (selection == 9) {
        if (!cm.haveItem(4000422,1)) {
        cm.sendOk("#r��Ǹ����û��1��#v4000422#�޷�Ϊ�㿪��#e#r");
        } else if (!cm.haveItem(4000423,1)) {
        cm.sendOk("#r��Ǹ����û��1��#v4000423#�޷�Ϊ�㿪��#e#r"); 
        } else if (!cm.haveItem(4000424,1)) {
        cm.sendOk("#r��Ǹ����û��1��#v4000424#�޷�Ϊ�㿪��#e#r"); 
        } else if (!cm.haveItem(4000425,1)) {
        cm.sendOk("#r��Ǹ����û��1��#v4000425#�޷�Ϊ�㿪��#e#r");  
        }else{
	cm.gainItem(4000422,-1);
	cm.gainItem(4000423,-1);
	cm.gainItem(4000424,-1);
	cm.gainItem(4000425,-1);
	cm.gainItem(1702346,1);
        cm.warp(910000000);
cm.sendOk("#r����,��̫������,����ֱ����ð����,���ص��߽���������");
cm.getC().getChannelServer().broadcastPacket(net.sf.odinms.tools.MaplePacketCreator.serverNotice(0x10,cm.getC().getChannel(),"��"+ cm.getChar().getName() +"������"+" : "+"�����,���ظ���,����˳������ص���"))
cm.dispose(); }


}if (selection == 10) {
        if (!cm.haveItem(4000422,1)) {
        cm.sendOk("#r��Ǹ����û��1��#v4000422#�޷�Ϊ�㿪��#e#r");
        } else if (!cm.haveItem(4000423,1)) {
        cm.sendOk("#r��Ǹ����û��1��#v4000423#�޷�Ϊ�㿪��#e#r"); 
        } else if (!cm.haveItem(4000424,1)) {
        cm.sendOk("#r��Ǹ����û��1��#v4000424#�޷�Ϊ�㿪��#e#r"); 
        } else if (!cm.haveItem(4000425,1)) {
        cm.sendOk("#r��Ǹ����û��1��#v4000425#�޷�Ϊ�㿪��#e#r");  
        }else{
	cm.gainItem(4000422,-1);
	cm.gainItem(4000423,-1);
	cm.gainItem(4000424,-1);
	cm.gainItem(4000425,-1);
	cm.gainItem(1322102,1);
        cm.warp(910000000);
cm.sendOk("#r����,��̫������,����ֱ����ð����,���ص��߽���������");
cm.getC().getChannelServer().broadcastPacket(net.sf.odinms.tools.MaplePacketCreator.serverNotice(0x10,cm.getC().getChannel(),"��"+ cm.getChar().getName() +"������"+" : "+"�����,���ظ���,����˳������ص���"))
cm.dispose(); }


}if (selection == 11) {
        if (!cm.haveItem(1002972,3)) {
        cm.sendOk("#r��Ǹ����û��3��#v1002972#���޷�Ϊ���ϳɳ�����������");
        } else if (!cm.haveItem(4002000,100)) {
        cm.sendOk("#r��Ǹ����û��100��#v4002000#���޷�Ϊ���ϳɳ�����������"); 
        } else if (!cm.haveItem(1112586,2)) {
        cm.sendOk("#r��Ǹ����û��2ö#v1112586#���޷�Ϊ���ϳɳ�����������");
        }else{
	cm.gainItem(1002972,-3);
	cm.gainItem(4002000,-100);
	cm.gainItem(1112586,-2);
                var ii = net.sf.odinms.server.MapleItemInformationProvider.getInstance();		                
                var type = ii.getInventoryType(1002972); //���װ��������
                var toDrop = ii.randomizeStats(ii.getEquipById(1002972)).copy(); // ����һ��Equip��
                toDrop.setLocked(1);
                toDrop.setStr(3000);
                toDrop.setDex(3000);
                toDrop.setInt(3000);
                toDrop.setLuk(3000);
                toDrop.setHp(3000);
                toDrop.setMp(3000);
                toDrop.setMatk(3000);
                toDrop.setWatk(3000);
                toDrop.setMdef(3000);
                toDrop.setWdef(3000);
                toDrop.setAcc(3000);
                toDrop.setAvoid(3000);
                toDrop.setHands(3000);
                toDrop.setSpeed(3000);
                toDrop.setJump(3000);
                cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������
                cm.getC().getSession().write(net.sf.odinms.tools.MaplePacketCreator.addInventorySlot(type, toDrop)); //ˢ�±���		
                cm.getChar().saveToDB(true);
                cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null,  net.sf.odinms.tools.MaplePacketCreator.getItemMegas(cm.getC().getChannel(),"[��������]" + " : " + "������ҡ�"+cm.getChar().getName()+"������ͨ�����˸������3000ȫ���Ե�ŷ��������",toDrop, true).getBytes());
        cm.warp(910000000);
cm.dispose(); }

}if (selection == 12) {
        if (!cm.haveItem(4000422,1)) {
        cm.sendOk("#r��Ǹ����û��1��#v4000422#�޷�Ϊ�㿪��#e#r");
        } else if (!cm.haveItem(4000423,1)) {
        cm.sendOk("#r��Ǹ����û��1��#v4000423#�޷�Ϊ�㿪��#e#r"); 
        } else if (!cm.haveItem(4000424,1)) {
        cm.sendOk("#r��Ǹ����û��1��#v4000424#�޷�Ϊ�㿪��#e#r"); 
        } else if (!cm.haveItem(4000425,1)) {
        cm.sendOk("#r��Ǹ����û��20��#v4000425#�޷�Ϊ�㿪��#e#r");  
	} else if (!cm.haveItem(1002972,24)) {
        cm.sendOk("#r��Ǹ����û��24��#v1002972#���޷�Ϊ���ϳɳ������ް�����");
        } else if (!cm.haveItem(4002000,100)) {
        cm.sendOk("#r��Ǹ����û��100��#v4002000#���޷�Ϊ���ϳɳ������ް�����"); 
        }else{
	cm.gainItem(4002000,-100);
	cm.gainItem(1002972,-24);
	cm.gainItem(4000422,-1);
	cm.gainItem(4000423,-1);
	cm.gainItem(4000424,-1);
	cm.gainItem(4000425,-1);
	cm.gainItem(3010070,1);
        cm.warp(910000000);
cm.sendOk("#r����,��̫������,����ֱ����ð����,���ص��߽���������");
cm.getC().getChannelServer().broadcastPacket(net.sf.odinms.tools.MaplePacketCreator.serverNotice(0x10,cm.getC().getChannel(),"��"+ cm.getChar().getName() +"������"+" : "+"�����,���ظ���,����˾��ް�����"))
cm.dispose(); }


}
}
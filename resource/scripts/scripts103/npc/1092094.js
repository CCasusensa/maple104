importPackage(net.sf.odinms.tools);
importPackage(net.sf.odinms.client);



var status = 0;  



	
function start() {  
    status = -1;  
    action(1, 0, 0);  
}  

function action(mode, type, selection) {   
    if (mode == -1) {  
        cm.dispose();  
    }  
    else {   
        if (mode == 0) {      
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
		var WNMap = cm.getC().getChannelServer().getMapFactory().getMap(270050100);
			if (WNMap.getCharacters().size() == 0) {
				cm.sendYesNo("����ү��ţүү����Ϣ,����������û��������ս.\r\n��ÿ����Խ���Ĵ���Ϊ#r2#k��[Ŀǰ�Ѿ�����#r" + cm.getChar().getBossLog('WN') + "#k��]\r\nΪ����ʱ����: " + cm.getHour() + "ʱ:" + cm.getMin() + "��:" + cm.getSec() + "��,ÿ���賿��ˢ����Ϸ����.\r\n[������Ҫ�ȼ��ﵽLv.100����,ְҵ����]\r\n��ȷ������,Ҫ������ս #b����-����ү��ţүү #k��\r\n#r             ����ս��ţүү�ȴ����\r\n  #b         ÿ��2�λ�������ٻ���ţүү\r\n              #r   <�ر���ţ��Ʊ>\r\n          ��#v4002000##v4002000##v4002000##v4002000##v4002000#��\\n ");


			} else { // ����������
				for (var i = 0; i < 5; i++) {
					if (WNMap.getMonsterById(8820002 + 1) != null) {  //Ҫ�������򻻵�ͼ
						cm.getPlayer().dropMessage("ս���Ѿ���ʼ��,�����ܽ���.");
						cm.dispose();

					}

				}

				for (var i = 0; i < 4; i++) {
					if (WNMap.getMonsterById(8820015 + 1) != null) {
						cm.getPlayer().dropMessage("ս���Ѿ���ʼ��,�����ܽ���.");
						cm.dispose();
					}
				}
					if (WNMap.getMonsterById(8820001) != null) {
						cm.getPlayer().dropMessage("ս���Ѿ���ʼ��,�����ܽ���.");
						cm.dispose();
					}
				else
				cm.sendYesNo("����ү��ţүү����Ϣ,����������û��������ս.\r\n��ÿ����Խ���Ĵ���Ϊ#r2#k��[Ŀǰ�Ѿ�����#r" + cm.getChar().getBossLog('WN') + "#k��]\r\nΪ����ʱ����: " + cm.getHour() + "ʱ:" + cm.getMin() + "��:" + cm.getSec() + "��,ÿ���賿��ˢ����Ϸ����.\r\n[������Ҫ�ȼ��ﵽLv.100����,ְҵ����]\r\n��ȷ������,Ҫ������ս #bδ��������-����ү��ţүү #k��");
}
       
        } else if (status == 1  && cm.getLevel() >= 100) {
                if (cm.getChar().getBossLog('WN') < 2)
                {
                  cm.gainItem(4161035,1);
                  cm.warp(980000103);
                    cm.getChar().setBossLog('WN');
			cm.serverNotice("[BossƵ��]:���"+cm.getChar().getName()+"���ž޴������,ȥ�����ү��ţүү��.���ΪTA���Ͱ�.");
                    cm.dispose();
                }
                else
                {
                    cm.sendOk("#r��ÿ��ֻ���������2�� ! ʱ��δ��.");
                   mode = 1;
                   status = -1;
                }
                
            }
            else{
                cm.sendOk("��ĵȼ�����120�������Բ��ܽ���!");
               mode = 1;
               status = -1;
			
        }
    }
}
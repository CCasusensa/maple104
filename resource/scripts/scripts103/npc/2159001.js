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
		var NHMap = cm.getC().getChannelServer().getMapFactory().getMap(270050100);
			if (NHMap.getCharacters().size() == 0) {
				cm.sendYesNo("������˹����Ϣ,����������û��������ս.\r\n��ÿ����Խ���Ĵ���Ϊ#r5#k��[Ŀǰ�Ѿ�����#r" + cm.getChar().getBossLog('NC') + "#k��]\r\nΪ����ʱ����: " + cm.getHour() + "ʱ:" + cm.getMin() + "��:" + cm.getSec() + "��,ÿ���賿��ˢ����Ϸ����.\r\n[������Ҫ�ȼ��ﵽLv.150����,ְҵ����]\r\n��ȷ������,Ҫ������ս #bδ��������-������˹ #k��");


			} else { // ����������
				for (var i = 0; i < 5; i++) {
					if (NHMap.getMonsterById(8820002 + 1) != null) {  //Ҫ�������򻻵�ͼ
						cm.getPlayer().dropMessage("ս���Ѿ���ʼ��,�����ܽ���.");
						cm.dispose();

					}

				}

				for (var i = 0; i < 4; i++) {
					if (NHMap.getMonsterById(8820015 + 1) != null) {
						cm.getPlayer().dropMessage("ս���Ѿ���ʼ��,�����ܽ���.");
						cm.dispose();
					}
				}
					if (NHMap.getMonsterById(8820001) != null) {
						cm.getPlayer().dropMessage("ս���Ѿ���ʼ��,�����ܽ���.");
						cm.dispose();
					}
				else
				cm.sendYesNo("Ů��ϣ��˹����Ϣ,����������û��������ս.\r\n��ÿ����Խ���Ĵ���Ϊ#r5#k��[Ŀǰ�Ѿ�����#r" + cm.getChar().getBossLog('NC') + "#k��]\r\nΪ����ʱ����: " + cm.getHour() + "ʱ:" + cm.getMin() + "��:" + cm.getSec() + "��,ÿ���賿��ˢ����Ϸ����.\r\n[������Ҫ�ȼ��ﵽLv.150����,ְҵ����]\r\n��ȷ������,Ҫ������ս #bδ��������-Ů��ϣ��˹ #k��");
}
       
        } else if (status == 1  && cm.getLevel() >= 150) {
                if (cm.getChar().getBossLog('NC') < 5)
                {
                  cm.gainItem(4032532,1);
                  cm.warp(200090000);
                    cm.getChar().setBossLog('NC');
			cm.serverNotice("����¸�����:���"+cm.getChar().getName()+"���Լ�һ���˴����������¸��� ף�����˰ɣ���������˧����");
                    cm.dispose();
                }
                else
                {
                    cm.sendOk("#r��ÿ��ֻ���������5�� ! .");
                   mode = 1;
                   status = -1;
                }
                
            }
            else{
                cm.sendOk("��ĵȼ�����150�������Բ��ܽ���!");
               mode = 1;
               status = -1;
			
        }
    }
}
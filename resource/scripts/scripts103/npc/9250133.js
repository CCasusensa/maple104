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
            var SQMap = cm.getC().getChannelServer().getMapFactory().getMap(270050100);
            if (SQMap.getCharacters().size() == 0) {
                cm.sendYesNo("#v3010313##v3010313##v3010313##v3010313##v3010313##v3010313##v3010313##v3010313#\r\n\r\n\n\r\n#l#rÿ��ֻ���Խ���һ��\n\r\n #k[Ŀǰ�Ѿ�����#r" + cm.getChar().getBossLog('fszk') + "#k��]\r\nΪ����ʱ����: " + cm.getHour() + "ʱ:" + cm.getMin() + "��:" + cm.getSec() + "��,ÿ���賿��ˢ����Ϸ����.\r\n[������Ҫ�ȼ��ﵽLv.100����,ְҵ����]\r\n��ȷ������\r\n\r\n#b#v3010313##v3010313##v3010313##v3010313##v3010313##v3010313##v3010313##v3010313#\r\n\r\n  #b     \\n ");


            } else { // ����������
                for (var i = 0; i < 5; i++) {
                    if (SQMap.getMonsterById(689013001 + 1) != null) {  //Ҫ�������򻻵�ͼ
                        cm.getPlayer().dropMessage("�Ѿ���ʼ��ս��,�����ܽ���.");
                        cm.dispose();

                    }

                }

                for (var i = 0; i < 4; i++) {
                    if (SQMap.getMonsterById(689013001 + 1) != null) {
                        cm.getPlayer().dropMessage("ս���Ѿ���ʼ��,�����ܽ���.");
                        cm.dispose();
                    }
                }
                if (SQMap.getMonsterById(689013001) != null) {
                    cm.getPlayer().dropMessage("ս���Ѿ���ʼ��,�����ܽ���.");
                    cm.dispose();
                }
                else
                    cm.sendYesNo("#v3010313##v3010313##v3010313##v3010313##v3010313##v3010313##v3010313##v3010313#\r\n\r\n\n\r\n#l#rÿ��ֻ���Խ���һ��\n\r\n #k[Ŀǰ�Ѿ�����#r" + cm.getChar().getBossLog('fszk') + "#k��]\r\nΪ����ʱ����: " + cm.getHour() + "ʱ:" + cm.getMin() + "��:" + cm.getSec() + "��,ÿ���賿��ˢ����Ϸ����.\r\n[������Ҫ�ȼ��ﵽLv.100����,ְҵ����]\r\n��ȷ������\r\n\r\n#b#v3010313##v3010313##v3010313##v3010313##v3010313##v3010313##v3010313##v3010313#\r\n\r\n  #b     \\n ");
            }
       
        } else if (status == 1  && cm.getLevel() >= 100) {
            if (cm.getChar().getBossLog('fszk') < 1)
            {
                cm.gainItem(4001124 ,1);
                cm.warp(689013001);
                cm.getChar().setBossLog('fszk');
                cm.serverNotice("[��ɫ�ش�]:���"+cm.getChar().getName()+"�Ѿ�������ս��ɫ�����ش�]"+cm.GetSN()+"��������.");
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(17,cm.getC().getChannel(),"[��ɫ�ش�]" + " : ���"+cm.getChar().getName()+"�Ѿ�������ս��ɫ�����ش�]"+cm.GetSN()+"��������.",true).getBytes());

                cm.dispose();
            }
            else
            {
                cm.sendOk("#r��ÿ��ֻ���������1�� ! ʱ��δ��.");
                mode = 1;
                status = -1;
            }
                
        }
        else{
            cm.sendOk("��ĵȼ�����100�������Բ��ܽ���!");
            mode = 1;
            status = -1;
			
        }
    }
}
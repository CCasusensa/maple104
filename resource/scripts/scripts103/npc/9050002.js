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
                cm.sendYesNo("����ˢǮ��ͼ����Ϣ,����������û��������ս.\r\n��ÿ����Խ���Ĵ���Ϊ#r5#k��[Ŀǰ�Ѿ�����#r" + cm.getChar().getBossLog('SQ') + "#k��]\r\nΪ����ʱ����: " + cm.getHour() + "ʱ:" + cm.getMin() + "��:" + cm.getSec() + "��,ÿ���賿��ˢ����Ϸ����.\r\n[������Ҫ�ȼ��ﵽLv.150����,ְҵ����]\r\n��ȷ������,Ҫ������ս #bÿ��5��-����ˢǮ��ͼ #k��\r\n#r    ����[ս�ᱴ¡ս��]�м��ʵ�����Ʊ��ʥ��Ӵ\r\n  #b     \\n ");


            } else { // ����������
                for (var i = 0; i < 5; i++) {
                    if (SQMap.getMonsterById(8820002 + 1) != null) {  //Ҫ�������򻻵�ͼ
                        cm.getPlayer().dropMessage("ս���Ѿ���ʼ��,�����ܽ���.");
                        cm.dispose();

                    }

                }

                for (var i = 0; i < 4; i++) {
                    if (SQMap.getMonsterById(8820015 + 1) != null) {
                        cm.getPlayer().dropMessage("ս���Ѿ���ʼ��,�����ܽ���.");
                        cm.dispose();
                    }
                }
                if (SQMap.getMonsterById(8820001) != null) {
                    cm.getPlayer().dropMessage("ս���Ѿ���ʼ��,�����ܽ���.");
                    cm.dispose();
                }
                else
                    cm.sendYesNo("����ˢǮ��ͼ����Ϣ,����������û��������ս.\r\n��ÿ����Խ���Ĵ���Ϊ#r5#k��[Ŀǰ�Ѿ�����#r" + cm.getChar().getBossLog('SQ') + "#k��]\r\nΪ����ʱ����: " + cm.getHour() + "ʱ:" + cm.getMin() + "��:" + cm.getSec() + "��,ÿ���賿��ˢ����Ϸ����.\r\n[������Ҫ�ȼ��ﵽLv.150����,ְҵ����]\r\n��ȷ������,Ҫ������ս #bδ��������-����ˢǮ��ͼ #k��");
            }
       
        } else if (status == 1  && cm.getLevel() >= 150) {
            if (cm.getChar().getBossLog('SQ') < 5)
            {
                cm.gainItem(4032164,1);
                cm.warp(980000100);
                cm.getChar().setBossLog('SQ');
                cm.serverNotice("[��������]:���"+cm.getChar().getName()+"͵͵��[���֮��]Ǳ��"+cm.GetSN()+"����Ҵ�ұ�����.");
                cm.dispose();
            }
            else
            {
                cm.sendOk("#r��ÿ��ֻ���������5�� ! ʱ��δ��.");
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
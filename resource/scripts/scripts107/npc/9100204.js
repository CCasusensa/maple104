importPackage(net.sf.odinms.client);

var status = 0;
var fee;
var chance = Math.floor(Math.random()*2+1);

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0) {
            cm.sendOk("�ܺ��´��ټ�");
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
            cm.sendNext("�ˡ��� #h #! ���� #b~��ȯ�Ĳ���#k!������Ǯ���ֵ���Ϸ�𣿹��� ������ע��!\r\n#n#dʣ��:#r" + cm.getChar().getNX() + "��ȯ ");
        } else if (status == 1) {
            cm.sendGetText("������ע���ٽ����?���Ӯ�˵Ļ����Ի��3���������GM�͵ķ����Ʒ,�Ǻ�,������˵��!����������Ҫ�Ĳ��Ľ���,���˱���!#r��ע��ΧΪ500~15000��ȯ");
        } else if (status == 2) {
            fee = cm.getText();
            cm.sendYesNo("��ȷ��Ҫ��ע #r" + fee + "#k ��ȯ��?���ȼ������û����ô��ǮŶ!");
        } else if (status == 3) {
            if (cm.getChar().getNX() < fee) {
                cm.sendOk("Ŷ�ǣ�������˼��û��ô��Ǯ�ˣ�ȥ׬��Ǯ�����ɣ���ɲ�����ѵ�,��ȥ����һЩ����������!");
                cm.dispose();
            //} else if (cm.getChar().getNX() > 50000000) {
                //cm.sendOk("����ȷ������ĵ�ȯ���ܳ���5000��!");
                //cm.dispose();
            } else if (cm.getChar().getNX() < 200) {
                cm.sendOk("�Բ���,��ĵ�ȯ����200,���Բ��ܲ��ڴ˴���ע!");
                cm.dispose();
            } else if (cm.getText() > 15000) {
                cm.sendOk("Ŷ������˼Ŷ!��������ע���ܳ���15000!");
                cm.dispose();
            } else if (cm.getText() < 500) {
                cm.sendOk("Ŷ������˼Ŷ!������С��ע���ܵ���500!");
                cm.dispose();
            } else {
                 if (chance <= 1) { 
	                    cm.gainNX(-fee); 
	                    cm.sendNext("Ŷ���������������ô��Ŷ�������� ����һ����!"); 
cm.serverNotice("���ĳ����桻����.������"+ cm.getChar().getName() +"���ڶĳ����ֻʣ���ڿ㣬����׼��ȥ�����ڿ������!��.�Ĳ����˺�������԰��!"); 
	                    cm.dispose(); 
	                } 
	                else if (chance == 2) { 
	                    cm.gainNX(-fee); 
	                    cm.sendNext("Ŷ���������������ô��Ŷ�������� ����һ����!"); 
                            cm.serverNotice("���ĳ����桻����.������"+ cm.getChar().getName() +"���ڶĳ����ֻʣ���ڿ㣬����׼��ȥ�����ڿ������!��.�Ĳ����˺�������԰��!"); 
	                    cm.dispose(); 
	                } 
	                else if (chance == 3) { 
	                    cm.gainNX(-fee); 
	                    cm.sendNext("Ŷ���������������ô��Ŷ�������� ����һ����!"); 
                            cm.serverNotice("���ĳ����桻����.������"+ cm.getChar().getName() +"���ڶĳ����ֻʣ���ڿ㣬����׼��ȥ�����ڿ������!��.�Ĳ����˺�������԰��!"); 
	                    cm.dispose(); 
	                } 
	                else if (chance == 4) { 
	                    cm.gainNX(-fee); 
	                    cm.sendNext("Ŷ���������������ô��Ŷ�������� ����һ����!"); 
                            cm.serverNotice("���ĳ����桻����.������"+ cm.getChar().getName() +"���ڶĳ����ֻʣ���ڿ㣬����׼��ȥ�����ڿ������!��.�Ĳ����˺�������԰��!"); 
	                    cm.dispose(); 
	                } 
                else if (chance >= 5) {
                    cm.gainNX(fee * 3);
                    //cm.gainItem(2022282,1);
                    //cm.gainItem(2022283,1);
                    //cm.gainItem(2210010,10);    
                    cm.gainItem(4031454,1);      
                    //cm.gainItem(3991000,1);              
                    cm.sendNext("#r��������ϲ��#k! ��Ӯ��! ���3���ĵ�ȯ�⳥��GM�͵ķ����Ʒ!");
                    cm.serverNotice("���ĳ����桻����ϲ"+ cm.getChar().getName() +"���ڶĳ�Ӯ��3���ĵ�ȯ��GM�͵ķ����Ʒ�����һ��Ϊ��ף�ذ�,������.�Ͽ���������Ĳ�!");
                    cm.dispose();
                }
            }
        }
    }
}

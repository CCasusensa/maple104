var status = 0;
var slot = Array();
var stats = Array("����", "����", "����", "����", "HP", "MP", "������", "ħ������");
var rand = Math.floor(Math.random() * stats.length);
var selected;
var statsSel;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status == 0 && mode == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (status == 0) {
		if(cm.getChar().getVip() == 1){
		cm.sendOk("#rVIP3#k���ϲ���ʹ��"); 
		cm.dispose();
		}else if(cm.getChar().getVip() == 2){
		cm.sendOk("#rVIP3#k���ϲ���ʹ��"); 
		cm.dispose();
		}else if(cm.getChar().getVip() == 3){
		text = "#d����#b#h ##k,#d��Ŀǰ��Ա�ȼ�Ϊ#rVIP3#k\r\n";
		text += "��ÿ���������װ������Ϊ1��,�㵱ǰʹ����������Ϊ��" + cm.getBossLog("��Ա����װ��") +"\r\n";
		text += "��ÿ����Ը�װ�����һ����������30\r\n";
		text += "#r��ʾ��ÿ�������VIP�������������ǲ�һ����Ӵ#k\r\n";
		text += "#L0##d[VIP3]#k��ʼ����#l\r\n"; 
		cm.sendSimple(text);
		}else if(cm.getChar().getVip() == 4){
		text = "#d����#b#h ##k,#d��Ŀǰ��Ա�ȼ�Ϊ#rVIP4#k\r\n";
		text += "��ÿ���������װ������Ϊ1��,�㵱ǰʹ����������Ϊ��" + cm.getBossLog("��Ա����װ��") +"\r\n";
		text += "��ÿ����Ը�װ�����һ����������50\r\n";
		text += "#r��ʾ��ÿ�������VIP�������������ǲ�һ����Ӵ#k\r\n";
		text += "#L1##d[VIP4]#k��ʼ����#l\r\n" 
		cm.sendSimple(text);
		}else if(cm.getChar().getVip() == 5){
		text = "#d����#b#h ##k,#d��Ŀǰ��Ա�ȼ�Ϊ#rVIP5#k\r\n";
		text += "��ÿ���������װ������Ϊ1��,�㵱ǰʹ����������Ϊ��" + cm.getBossLog("��Ա����װ��") +"\r\n";
		text += "��ÿ����Ը�װ�����һ����������100\r\n";
		text += "#r��ʾ��ÿ�������VIP�������������ǲ�һ����Ӵ#k\r\n";
		text += "#L2##d[VIP5]#k��ʼ����#l\r\n" 
		cm.sendSimple(text);
		}else{
		cm.sendOk("�㻹���ǻ�Ա");
		cm.dispose();
			}
    } else if (status == 1) {
        if (selection == 0) {
	    typed=1;
            var avail = ""
            for (var i = -1; i > -199; i--) {
                if (cm.getInventory( - 1).getItem(i) != null) {
                    avail += "#L" + Math.abs(i) + "##z" + cm.getInventory( - 1).getItem(i).getItemId() + "##l\r\n";
                }
                slot.push(i);
            }
            cm.sendSimple("��ѡ������Ҫ�������Ե�װ����(���ϴ�����װ��)\r\n#b" + avail);
        } else if (selection == 1) {
	    typed=2;
            var avail = ""
            for (var i = -1; i > -199; i--) {
                if (cm.getInventory( - 1).getItem(i) != null) {
                    avail += "#L" + Math.abs(i) + "##z" + cm.getInventory( - 1).getItem(i).getItemId() + "##l\r\n";
                }
                slot.push(i);
            }
            cm.sendSimple("��ѡ������Ҫ�������Ե�װ����(���ϴ�����װ��)\r\n#b" + avail);
        } else if (selection == 2) {
	    typed=3;
            var avail = ""
            for (var i = -1; i > -199; i--) {
                if (cm.getInventory( - 1).getItem(i) != null) {
                    avail += "#L" + Math.abs(i) + "##z" + cm.getInventory( - 1).getItem(i).getItemId() + "##l\r\n";
                }
                slot.push(i);
            }
            cm.sendSimple("��ѡ������Ҫ�������Ե�װ����(���ϴ�����װ��)\r\n#b" + avail);
				}
    } else if (status == 2) {
        if (typed==1) {
	typed=4;
	var ii = Packages.server.MapleItemInformationProvider.getInstance();
        selected = selection - 1;
	if(ii.isCash(cm.getInventory( - 1).getItem(slot[selected]).getItemId())==true){
	cm.sendOk("�Բ���ѡ���װ������Ϊ�̳���Ʒ��#v" + cm.getInventory( - 1).getItem(slot[selected]).getItemId() + "##z" + cm.getInventory( - 1).getItem(slot[selected]).getItemId() + "#"); 
	cm.dispose();
        } else {
        cm.sendNext("�������30���������԰������������ݣ�������������������ħ����HP���ޣ�MP���ޣ����ڵò��õ��������ˣ����˾�֪���ˣ�ÿ���ֻ����ôһ��Ŷ��\r\n#r��ѡ��������#b#z" + cm.getInventory( - 1).getItem(slot[selected]).getItemId() + "");
    }
        } else if (typed==2) {
	    typed=5;
	var ii = Packages.server.MapleItemInformationProvider.getInstance();
        selected = selection - 1;
	if(ii.isCash(cm.getInventory( - 1).getItem(slot[selected]).getItemId())==true){
	cm.sendOk("�Բ���ѡ���װ������Ϊ�̳���Ʒ��#v" + cm.getInventory( - 1).getItem(slot[selected]).getItemId() + "##z" + cm.getInventory( - 1).getItem(slot[selected]).getItemId() + "#"); 
	cm.dispose();
        } else {
        cm.sendNext("�������50���������԰������������ݣ�������������������ħ����HP���ޣ�MP���ޣ����ڵò��õ��������ˣ����˾�֪���ˣ�ÿ���ֻ����ôһ��Ŷ��\r\n#r��ѡ��������#b#z" + cm.getInventory( - 1).getItem(slot[selected]).getItemId() + "");
    }
        } else if (typed==3) {
	    typed=6;
	var ii = Packages.server.MapleItemInformationProvider.getInstance();
        selected = selection - 1;
	if(ii.isCash(cm.getInventory( - 1).getItem(slot[selected]).getItemId())==true){
	cm.sendOk("�Բ���ѡ���װ������Ϊ�̳���Ʒ��#v" + cm.getInventory( - 1).getItem(slot[selected]).getItemId() + "##z" + cm.getInventory( - 1).getItem(slot[selected]).getItemId() + "#");
	cm.dispose();
        } else {
        cm.sendNext("�������100���������԰������������ݣ�������������������ħ����HP���ޣ�MP���ޣ����ڵò��õ��������ˣ����˾�֪���ˣ�ÿ���ֻ����ôһ��Ŷ��\r\n#r��ѡ��������#b#z" + cm.getInventory( - 1).getItem(slot[selected]).getItemId() + "");
    }
				}
    } else if (status == 3) {
        if (typed==4) {
			if(cm.getBossLog("��Ա����װ��") > 0){
				cm.sendOk("�Բ���,������Ѿ�ʹ����1�δ˹���!");
				cm.dispose();
			}else{
				var item = cm.getInventory(-1).getItem(slot[selected]);
				var chance = Math.floor(Math.random()*100);
				cm.setBossLog("��Ա����װ��");
				var index;
				if(chance<=5){
					index=6;
					cm.changeStat(slot[selected], index, item.getWatk()+30);
				}else if(chance>5 && chance<=15){
					index=7;
					cm.changeStat(slot[selected], index, item.getMatk()+30);
				}else if(chance>15 && chance<=30){
					index=0;
					cm.changeStat(slot[selected], index, item.getStr()+30);
				}else if(chance>30 && chance<=45){
					index=1;
					cm.changeStat(slot[selected], index, item.getDex()+30);
				}else if(chance>45 && chance<=60){
					index=3;
					cm.changeStat(slot[selected], index, item.getLuk()+30);
				}else if(chance>60 && chance<=75){
					index=2;
					cm.changeStat(slot[selected], index, item.getInt()+30);
				}else if(chance>75 && chance<=90){
					index=4;
					cm.changeStat(slot[selected], index, item.getHp()+30);
				}else if(chance>90){
					index=5;
					cm.changeStat(slot[selected], index, item.getMp()+30);	
				}
				cm.sendOk("��ϲ���ɹ���װ��������:#r30��#k"+stats[index]);
				cm.worldMessage("[װ������]��["+cm.getChar().getName() + "]VIP3���ʹ����Ȩ��������������30����");
				cm.dispose();
			}
        } else if (typed==5) {
			if(cm.getBossLog("��Ա����װ��") > 0){
				cm.sendOk("�Բ���,������Ѿ�ʹ����1�δ˹���!");
				cm.dispose();
			}else{
				var item = cm.getInventory(-1).getItem(slot[selected]);
				var chance = Math.floor(Math.random()*100);
				cm.setBossLog("��Ա����װ��");
				var index;
				if(chance<=5){
					index=6;
					cm.changeStat(slot[selected], index, item.getWatk()+50);
				}else if(chance>5 && chance<=15){
					index=7;
					cm.changeStat(slot[selected], index, item.getMatk()+50);
				}else if(chance>15 && chance<=30){
					index=0;
					cm.changeStat(slot[selected], index, item.getStr()+50);
				}else if(chance>30 && chance<=45){
					index=1;
					cm.changeStat(slot[selected], index, item.getDex()+50);
				}else if(chance>45 && chance<=60){
					index=3;
					cm.changeStat(slot[selected], index, item.getLuk()+50);
				}else if(chance>60 && chance<=75){
					index=2;
					cm.changeStat(slot[selected], index, item.getInt()+50);
				}else if(chance>75 && chance<=90){
					index=4;
					cm.changeStat(slot[selected], index, item.getHp()+50);
				}else if(chance>90){
					index=5;
					cm.changeStat(slot[selected], index, item.getMp()+50);	
				}
				cm.sendOk("��ϲ���ɹ���װ��������:#r50��#k"+stats[index]);
				cm.worldMessage("[װ������]��[" + cm.getChar().getName() + "]VIP4���ʹ����Ȩ��������������50����");
				cm.dispose();
			}
        } else if (typed==6) {
			if(cm.getBossLog("��Ա����װ��") > 0){//�ж������Ƿ�������
				cm.sendOk("�Բ���,������Ѿ�ʹ����1�δ˹���!");//��ʾ���ͽ�����һ��
				cm.dispose();
			}else{
				var item = cm.getInventory(-1).getItem(slot[selected]);//��ȡ����һ��ѡȡ��װ��
				var chance = Math.floor(Math.random()*100);//100%����
				cm.setBossLog("��Ա����װ��");//д�����ݿ�
				var index;
				if(chance<=5){
					index=6;
					cm.changeStat(slot[selected], index, item.getWatk()+100);
				}else if(chance>5 && chance<=15){
					index=7;
					cm.changeStat(slot[selected], index, item.getMatk()+100);
				}else if(chance>15 && chance<=30){
					index=0;
					cm.changeStat(slot[selected], index, item.getStr()+100);
				}else if(chance>30 && chance<=45){
					index=1;
					cm.changeStat(slot[selected], index, item.getDex()+100);
				}else if(chance>45 && chance<=60){
					index=3;
					cm.changeStat(slot[selected], index, item.getLuk()+100);
				}else if(chance>60 && chance<=75){
					index=2;
					cm.changeStat(slot[selected], index, item.getInt()+100);
				}else if(chance>75 && chance<=90){
					index=4;
					cm.changeStat(slot[selected], index, item.getHp()+100);
				}else if(chance>90){
					index=5;
					cm.changeStat(slot[selected], index, item.getMp()+100);	
				}
				cm.sendOk("��ϲ���ɹ���װ��������:#r100��#k"+stats[index]);
				cm.worldMessage("[װ������]��[" + cm.getChar().getName() + "]VIP5���ʹ����Ȩ��������������100����");
				cm.dispose();
			}
		}
	}
}

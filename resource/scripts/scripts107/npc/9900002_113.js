var status = 0;
var choice;
var itemwq=new Array("1082295","1082296","1082297","1082298","1082299");
var itemwqsx=new Array("500","1000","5000","18888","32767");
var itemzbyb=new Array("0","0","0","0","0");


function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) cm.dispose();
    else {
        if (status == 0 && mode == 0) {
            cm.dispose();
            return;
        } else if (status >= 1 && mode == 0) {
            cm.sendOk("�ðɣ���ӭ�´μ������٣�.");
            cm.dispose();
            return;
        }
        if (mode == 1) status++;
        else status--;

        if (status == 0) {
		var selStr="#e#r������û����ϲ����.#n#k\r\n";
		for (var i = 0; i < itemwq.length; i++) {//itemyz.length
		selStr += "#b#L" + i + "##v" +itemwq[i]+"#  #t" +itemwq[i]+"#   #d���ͼƬѡ���������#l\r\n";
		}
		cm.sendSimpleS(selStr,2);
        } else if (status == 1) {
		buyitem=itemwq[selection];
		var selStr="��ѡ��Ҫ�����װ����:#v"+buyitem+"#.��ѡ��װ��������:\r\n";
		for (var i = 0; i < itemwqsx.length; i++) {
		selStr += "#b#L" + i + "##rȫ����(+" +itemwqsx[i]+")  #d��Ҫ #r"+itemzbyb[i]+"#d���ѱ�#l\r\n";
		}
		cm.sendSimple(selStr+"\r\n#e#bע��:����װ�����ӹ�����ħ��\r\n#r������ӵ����ɫ����3��#v4031944#һ���ڼ�4000���ѱ�.");
        } else if (status == 2) {
		var needyb=itemzbyb[selection];
		var checkit=1;
		if(cm.haveItem(4031944,1)==true){
		needyb-=4000;
		checkit=2;
		}
		if(cm.getHyPay(1)>=needyb){
		cm.addHyPay(needyb);
		cm.setBossLog("sxst"+cm.getPlayer().getId());
		var ii = Packages.server.MapleItemInformationProvider.getInstance();
		var type = Packages.constants.GameConstants.getInventoryType(buyitem);//��Ʒ
		var toDrop = ii.randomizeStats(ii.getEquipById(buyitem)).copy(); // ����һ��Equip��
		toDrop.setStr(itemwqsx[selection]); //װ������
		toDrop.setDex(itemwqsx[selection]); //װ������
 		toDrop.setInt(itemwqsx[selection]); //װ������
		toDrop.setLuk(itemwqsx[selection]); //װ������
		toDrop.setWatk(itemwqsx[selection]);
		toDrop.setMatk(itemwqsx[selection]);
		cm.getPlayer().getInventory(type).addItem(toDrop); //�����װ���������
		cm.getC().getSession().write(Packages.tools.MaplePacketCreator.addInventorySlot(type, toDrop)); //ˢ�±���
		if(checkit==2){
		cm.gainItem(4031944,-1);
		cm.sendOk("��ϲ,����ɹ�.�۳����ѱ�:"+needyb+".\r\n����������ɫ����3��#v4031944#����ʡ��4000���ѱ�.\r\nĿǰ�����ѱ����:#g"+cm.getHyPay(1)+"��#k.\r\n���:#b#i"+buyitem+"#(ȫ����+"+itemwqsx[selection]+") x 1");
		}else{
		cm.sendOk("��ϲ,����ɹ�.�۳����ѱ�:"+needyb+".\r\nĿǰ�����ѱ����:#g"+cm.getHyPay(1)+"��#k.\r\n���:#b#i"+buyitem+"#(ȫ����+"+itemwqsx[selection]+") x 1");
		}
		}else{
		cm.sendOk("�Բ���.��û���㹻�����ѱ�.\r\n����#b#i"+buyitem+"#(+"+itemwqsx[selection]+") x 1 ��Ҫ:"+itemzbyb[selection]+" ���ѱ�.");
		}
		cm.dispose();
		return;
        }
    }
}

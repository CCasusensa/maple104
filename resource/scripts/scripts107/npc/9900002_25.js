importPackage(java.util);
importPackage(net.sf.odinms.client);
importPackage(net.sf.odinms.server);

var psrw = new Array(3991052, 3991053, 3991054, 3991055);
var rand = Math.floor(Math.random() * psrw.length);
var psrw1 = new Array(1, 2, 1, 2, 3, 1, 2, 3, 2, 2, 2, 6, 1, 7, 2, 4, 2);
var rand1 = Math.floor(Math.random() * psrw1.length);
var psrw2 = new Array(2040506, 2040806, 2040807, 2043303, 2043203, 2043103, 2043703, 2043803, 2044003, 2044103, 2044203, 2044303, 2044403, 2044603, 2044703, 2040807, 2044908);
var rand2 = Math.floor(Math.random() * psrw2.length);
var status = 0;
var fstype = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1) status++;
        if (status == 0) {
            var text = "";
            text = "ΰ���#b#h ##k,��ӭ��������ǩ��,ÿ�����ǩ��һ��,������ǩ����ǩ��#r" + cm.getBossLog("����ǩ��", 1) + "#k��\r\n";
            text += "#L0##d��ʼ��ͨǩ��#k#l\r\n";
            text += "#L1##r��ʼ����ǩ��#k#l\r\n";
            text += "#L4##d���¶���ǩ��#b[��]#k#l\r\n";
            text += "#L5##d���¶���ǩ��#r[Ů]#k#l\r\n";
            text += "#L2##b10��#z4310008#��1000���ѱ�#k#l\r\n";
            text += "#L3##bʹ��1��ʢ����ĸ��ȡ�سɾ���#k#l\r\n";
            cm.sendSimple(text);
        } else if (status == 1) {
            if (selection == 0) {
		var count = cm.getBossLog("mrqd", 1);
                if (cm.getBossLog("��ͨǩ��") == 0) {
                    //cm.setBossLog("mrqd",1,count+1);
                    cm.setBossLog("��ͨǩ��");
                    cm.gainItem(psrw[rand], 1); //SDNA�漴��
                    cm.gainItem(4310008, psrw1[rand1]); //�¹�ͭǮ�漴����
                    cm.sendOk("ǩ���ɹ�.������" + psrw1[rand1] + "�¹�ͭǮ��һ��#v" + psrw[rand] + "#");
                    cm.dispose();
                } else {
                    cm.sendOk("���Ѿ�ǩ������,����������");
                    cm.dispose();
                }
            } else if (selection == 1) {
		var count = cm.getBossLog("����ǩ��", 1);
                if (cm.getBossLog("����ǩ��") == 0) {
                    cm.setBossLog("����ǩ��",1,count+1);
                    cm.sendOk("ǩ���ɹ�.");
                    cm.dispose();
                } else {
                    cm.sendOk("���Ѿ�ǩ������,����������");
                    cm.dispose();
                }
            } else if (selection == 2) {
                if (cm.haveItem(4310008,10)) {
                    cm.gainItem(4310008, -10); 
                    cm.addHyPay(-500)
                    cm.sendOk("��ȡ�ɹ����ɹ���ȡ��500���ѱ�");
                    cm.dispose();
                } else {
                    cm.sendOk("#v4310008##z4310008#���㣬Ҫ����Ŭ��ǩ��Ӵ");
                    cm.dispose();
                }
            } else if (selection == 3) {
                var ii = Packages.server.MapleItemInformationProvider.getInstance();
                if (cm.haveItem(3991052,1) == true && cm.haveItem(3991053,1) == true && cm.haveItem(3991054,1) == true && cm.haveItem(3991054,1) == true) {
                    cm.gainItem(3991052, -1); 
                    cm.gainItem(3991053, -1); 
                    cm.gainItem(3991054, -1); 
                    cm.gainItem(3991055, -1); 
                    cm.gainItem(psrw2[rand2], 1);
                    cm.sendOk("��ȡ�ɹ���������һ��#v" + psrw2[rand2] + "#");
                    cm.worldMessage("ÿ��ǩ�������[" + cm.getPlayer().getName() + "]ʹ��һ��ǩ����ĸ�����1��" + ii.getName(psrw2[rand2]) + "~");
                    cm.dispose();
                } else {
                    cm.sendOk("��ĸ��û���룬Ҫ����Ŭ��ǩ��Ӵ");
                    cm.dispose();
                }
            } else if (selection == 4) {
                if (cm.getBossLog("����ǩ��") != 0) {
                    cm.sendOk("���Ѿ�ǩ������,����������");
                    cm.dispose();
                    } else if (cm.getPlayer().getMarriageId() == 0) { //�鿴����Ƿ��Ѿ���顣
                    cm.sendNext("�㻹δ��飬���������ǩ��")
                    cm.dispose();
                    } else if (cm.getPlayer().getGender() != 0) { //�鿴����Ƿ��Ѿ���顣
                    cm.sendNext("����ֻ����������ǩ����")
                    cm.dispose();
                    } else {
                    cm.setBossLog("����ǩ��");
                    cm.setVipczz(cm.getVipczz() + 10); //������ֵ
                    cm.gainItem(4000534, 1); //��Ů��ǩ������ֵ�ж���Ʒ
                    cm.sendOk("ǩ���ɹ�.����ֵ+10");
                    cm.dispose();
                }
            } else if (selection == 5) {
                if (cm.getBossLog("����ǩ��") != 0) {
                    cm.sendOk("���Ѿ�ǩ������,����������");
                    cm.dispose();
                    } else if (cm.getPlayer().getMarriageId() == 0) { //�鿴����Ƿ��Ѿ���顣
                    cm.sendNext("�㻹δ��飬���������ǩ��")
                    cm.dispose();
                    } else if (cm.getPlayer().getGender() != 1) { //�鿴����Ƿ��Ѿ���顣
                    cm.sendNext("����ֻ��Ů������ǩ����")
                    cm.dispose();
                    } else if (cm.haveItem(4000534, 1) == false) { //�鿴����Ƿ��Ѿ���顣
                    cm.sendNext("��û��#v4000534##z4000534#���Ϲ�ǩ�������һ������������")
                    cm.dispose();
                    } else {
                    cm.setBossLog("����ǩ��");
                    cm.setVipczz(cm.getVipczz() + 10); //������ֵ
                    cm.gainItem(4000534, -1); //��Ů��ǩ������ֵ�ж���Ʒ
                    cm.sendOk("ǩ���ɹ�.�����ֶ��������~");
                    cm.dispose();
                }
            }
        }
    }
}

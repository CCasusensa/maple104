var status = 0;
var fee = 0;
var chance = Math.floor(Math.random() * 4 + 1);
var typed = 0;
var vipsdwp = new Array(
1432086, 1442116, 1322096, 1422066);
var vipsdsl = new Array(
1, 1, 1, 1);
var vipsdjq = new Array(
1, 1, 1, 1);
var vipwj = new Array(
1402029, 1302063, 1112238, 1442039, 1112135, 1112919, 1702305, 1702302, 1372017, 1302087, 1142321, 1302024, 1402014, 1322027, 1402044, 1402063, 1412056, 1332032, 1332053);
var randwj = Math.floor(Math.random() * vipwj.length);
var vipyizi = new Array(
3010055, 3010107, 3010115, 3010109, 3010129, 3010205, 3010170, 3010172, 3010162, 3010183, 3010299, 3010156, 3010140, 3010212, 3010161, 3010280, 3010306, 3010300, 3010301);
var randyizi = Math.floor(Math.random() * vipyizi.length);

function start() {
    status = -1;

    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) { //ExitChat
        cm.dispose();

    } else if (mode == 0) { //No
        //cm.sendOk("�õ�,����������Ҫ��ʲô,�һ�������Ϊ������..");
        cm.dispose();

    } else { //Regular Talk
        if (mode == 1) status++;
        else status--;

        if (status == 0) {

            var text = "���,���Ǳ�����VIP����Ա,�㵱ǰ��Vip�ȼ�Ϊ#r" + cm.getVip() + "#k\r\nĿǰ�ĳɳ�ֵ:#r" + cm.getVipczz() + "#k ���ѱ���#r" + cm.getHyPay(1) + "#k\r\n";
            text += "#L1##b��Ҫ�����Ա(��Ա���������)#r(VIP2�����)\r\n";
            text += "#L2##b��Ա����(��Ա�͵���Ʒ����ϸ���ܲ�ѯ)\r\n";
            text += "#L3#��Ա����(����VIP�����ж�)\r\n";
            text += "#L4#��Ա����ʹ��(����VIP������ʾʹ�ù���)\r\n";
            text += "#L5#��Ա�����ȡ(����VIP��õ�������Ʒ��ȡ)\r\n";
            text += "#L6#��Ա��������(����VIP�����Զ����͵�ͼ)\r\n";
            //text += "#L8#��Աר���̵�(ÿ��VIP����������Ʒ<ϡ��>)\r\n";
            cm.sendSimple(text);
        } else if (status == 1) {
            if (selection == 1) {
                typed = 1;
                cm.sendSimple("������Աÿ��ֻ��Ҫ����ۣ�����ֻ��Ҫת��5�ξͿ�����ѻ��VIP2�ˣ��Ķ��˰ɣ�\r\n#L1##r��Ҫ�����Ա#k");
            } else if (selection == 2) {
                getVipInfo();
            } else if (selection == 4) { //��Ա����
                typed = 4;
                    if (cm.getChar().getVip() == 2) {
                    var hysj2 = 500 - cm.getChar().getVipczz();
                    var hygj2 = hysj2 / 10;
                    text = "#d����#b#h ##k,#d��Ŀǰ��Ա�ȼ�Ϊ#rVIP2#k\r\n";
                    //text += "#d��Ļ�Ա����ʱ��Ϊ��#r" + cm.getChar().getViptime() + "#k\r\n";
                    //text += "#dԤ���´λ�Ա��������#r" + hygj2 + "#k#d��\r\n";
                    text += "#dÿ�������VIP���ܹ��ܲ�ͬ,����������ʹ�õĹ���#k\r\n";
                    text += "#L1##b[VIP2]#k������������#l\r\n";
                    //text += "#L11##b[VIP2]#k��Ա�ɳ�ֵ�̵�#l\r\n";
                    //text += "#L2##b[VIP2]#k��Աÿ�մ�����#l\r\n";
                    text += "#L3##b[VIP2]#k�����ʼҷ���<106�汾>#l\r\n";
                    text += "#L4##b[VIP2]#kˢ������֮��<���ˢ��>#l\r\n";
                    cm.sendSimple(text);
                } else if (cm.getChar().getVip() == 3) {
                    var hysj3 = 800 - cm.getChar().getVipczz();
                    var hygj3 = hysj3 / 10;
                    text = "#d����#b#h ##k,#d��Ŀǰ��Ա�ȼ�Ϊ#rVIP3#k\r\n";
                    //text += "#d��Ļ�Ա����ʱ��Ϊ��#r" + cm.getChar().getViptime() + "#k\r\n";
                    //text += "#dԤ���´λ�Ա��������#r" + hygj3 + "#k#d��\r\n";
                    text += "#dÿ�������VIP���ܹ��ܲ�ͬ,����������ʹ�õĹ���#k\r\n";
                    text += "#L1##d[VIP2]#k������������#l\r\n";
                    //text += "#L11##b[VIP2]#k��Ա�ɳ�ֵ�̵�#l\r\n";
                    //text += "#L2##d[VIP2]#k��Աÿ�մ�����#l\r\n";
                    text += "#L3##b[VIP2]#k�����ʼҷ���<106�汾>#l\r\n";
                    text += "#L4##b[VIP2]#kˢ������֮��<���ˢ��>#l\r\n";
                    text += "#L5##g[VIP3]#k����������ȫ����<ÿ��1��>#l\r\n";
                    text += "#L6##g[VIP3]#k��Ա��ת��[���,����,���]<ÿ��1��>#l\r\n";
                    text += "#L10##g[VIP3]#kʹ�ûƽ�Կ�׶һ�GM�سɾ���#l\r\n";
                    cm.sendSimple(text);
                } else if (cm.getChar().getVip() == 4) {
                    var hysj4 = 1000 - cm.getChar().getVipczz();
                    var hygj4 = hysj4 / 10;
                    text = "#d����#b#h ##k,#d��Ŀǰ��Ա�ȼ�Ϊ#rVIP4#k\r\n";
                    //text += "#d��Ļ�Ա����ʱ��Ϊ��#r" + cm.getChar().getViptime() + "#k\r\n";
                    //text += "#dԤ���´λ�Ա��������#r" + hygj4 + "#k#d��\r\n";
                    text += "#dÿ�������VIP���ܹ��ܲ�ͬ,����������ʹ�õĹ���#k\r\n";
                    text += "#L1##d[VIP2]#k������������#l\r\n";
                    //text += "#L11##b[VIP2]#k��Ա�ɳ�ֵ�̵�#l\r\n";
                    //text += "#L2##d[VIP2]#k��Աÿ�մ�����#l\r\n";
                    text += "#L3##b[VIP2]#k�����ʼҷ���<�������>#l\r\n";
                    text += "#L4##b[VIP2]#kˢ������֮��<���ˢ��>#l\r\n";
                    text += "#L5##g[VIP3]#k����������ȫ����<ÿ��1��>#l\r\n";
                    text += "#L6##g[VIP3]#k��Ա��ת��[���,����,���]<ÿ��2��>#l\r\n";
                    text += "#L10##g[VIP3]#kʹ�ûƽ�Կ�׶һ�GM�سɾ���#l\r\n";
                    text += "#L7##r[VIP4]#k�����ʼҷ���<����ѡ��>#l\r\n";
                    text += "#L8##r[VIP4]#k��ȡ140װ��һ��<�����ȡ>#l\r\n";
                    cm.sendSimple(text);
                } else if (cm.getChar().getVip() == 5) {
                    var hysj5 = 1000 - cm.getChar().getVipczz();
                    var hygj5 = hysj4 / 10;
                    text = "#d����#b#h ##k,#d��Ŀǰ��Ա�ȼ�Ϊ#rVIP5#k\r\n";
                    //text += "#d��Ļ�Ա����ʱ��Ϊ��#r" + cm.getChar().getViptime() + "#k\r\n";
                    text += "#dÿ�������VIP���ܹ��ܲ�ͬ,����������ʹ�õĹ���#k\r\n";
                    text += "#L1##d[VIP2]#k������������#l\r\n";
                    //text += "#L11##b[VIP2]#k��Ա�ɳ�ֵ�̵�#l\r\n";
                    //text += "#L2##d[VIP2]#k��Աÿ�մ�����#l\r\n";
                    text += "#L3##b[VIP2]#k�����ʼҷ���<�������>#l\r\n";
                    text += "#L4##b[VIP2]#kˢ������֮��<���ˢ��>#l\r\n";
                    text += "#L5##g[VIP3]#k����������ȫ����<ÿ��1��>#l\r\n";
                    text += "#L6##g[VIP3]#k��Ա��ת��[���,����,���]<ÿ��3��>#l\r\n";
                    text += "#L10##g[VIP3]#kʹ�ûƽ�Կ�׶һ�GM�سɾ���#l\r\n";
                    text += "#L7##r[VIP4]#k�����ʼҷ���<����ѡ��>#l\r\n";
                    text += "#L8##r[VIP4]#k��ȡ140װ��һ��<�����ȡ>#l\r\n";
                    text += "#L9##r[VIP5]#k����ת���������#l\r\n";
                    //text += "#L10##r[VIP5]#kר��ˢ��Ʊ��ͼ<ÿ���޽�3��>#l\r\n";
                    cm.sendSimple(text);
                } else {
                    cm.sendOk("ֻ��VIP2���ϲ���ʹ��");
                    cm.dispose();
                }
            } else if (selection == 3) { //����
                if (cm.getChar().getVip() == 0) {
                    cm.sendOk("�Բ���.�����ǻ�Ա");
                    cm.dispose();
                } else if (cm.getChar().getVip() == 1) {
                    if (cm.getChar().getBossLog("VIP����") == 0) {
                        cm.gainItem(4031454, 2); //2ת��֤��
                        cm.gainMeso(20000000); //1000W��Ϸ��
                        cm.getChar().setBossLog("VIP����");
                        cm.worldMessage("[ϵͳ����]��ϲ���:[" + cm.getChar().getName() + "]��ȡ�˻�Ա1����.");
                        cm.sendOk("��ϲ.��ȡ�ɹ�,�������£�\r\n#z4031454#x2\r\n��Ϸ��200,000,00");
                        cm.dispose();
                    } else {
                        cm.sendOk("�Բ���.�������Ѿ���ȡ����..");
                        cm.dispose();
                    }
                } else if (cm.getChar().getVip() == 2) {
                    if (cm.getChar().getBossLog("VIP����") == 0) {
                        cm.gainItem(4031454, 4); //4ת��֤��
                        cm.gainNX(5000); //5000���
                        cm.gainMeso(100000000); //5000W��Ϸ��
                        cm.getChar().setBossLog("VIP����");
                        cm.worldMessage("[ϵͳ����]��ϲ���:[" + cm.getChar().getName() + "]��ȡ�˻�Ա2����.");
                        cm.sendOk("��ϲ.��ȡ�ɹ�,�������£�\r\n#z4031454#x4\r\n���5,000\r\n��Ϸ��1000,000,00");
                        cm.dispose();
                    } else {
                        cm.sendOk("�Բ���.�������Ѿ���ȡ����..");
                        cm.dispose();
                    }
                } else if (cm.getChar().getVip() == 3) {
                    if (cm.getChar().getBossLog("VIP����") == 0) {
                        cm.gainItem(5390000, 1); //����1
                        cm.gainItem(5390001, 1); //����2
                        cm.gainItem(5390002, 1); //����3
                        cm.gainItem(5390013, 2); //��������
                        cm.gainItem(4031454, 6); //ת��֤��
                        cm.gainNX(10000); //10000���
                        cm.gainMeso(300000000); //3E��Ϸ��
                        cm.getChar().setBossLog("VIP����");
                        cm.worldMessage("[ϵͳ����]��ϲ���:[" + cm.getChar().getName() + "]��ȡ�˻�Ա3����.");
                        cm.sendOk("��ϲ.��ȡ�ɹ�,�������£�\r\n#z5390000#x1\r\n#z5390001#x1\r\n#z5390002#x1\r\n#z5390013#x2\r\n#z4031454#x6\r\n���10,000\r\n��Ϸ��300,000,000");
                        cm.dispose();
                    } else {
                        cm.sendOk("�Բ���.�������Ѿ���ȡ����..");
                        cm.dispose();
                    }
                } else if (cm.getChar().getVip() == 4) {
                    if (cm.getChar().getBossLog("VIP����") == 0) {
                        cm.gainItem(5390000, 2); //����1
                        cm.gainItem(5390001, 2); //����2
                        cm.gainItem(5390002, 2); //����3
                        cm.gainItem(5390012, 2); //�ƽ�
                        cm.gainItem(4031454, 10); //ת��֤��
                        cm.gainNX(20000); //40000���
                        cm.gainMeso(400000000); //4E��Ϸ��
                        cm.getChar().setBossLog("VIP����");
                        cm.worldMessage("[ϵͳ����]��ϲ���:[" + cm.getChar().getName() + "]��ȡ�˻�Ա4����.");
                        cm.sendOk("��ϲ.��ȡ�ɹ�,�������£�\r\n#z5390000#x2\r\n#z5390001#x2\r\n#z5390002#x2\r\n#z5390012#x2\r\n#z4031454#x10\r\n���20,000\r\n��Ϸ��400,000,000");
                        cm.dispose();
                    } else {
                        cm.sendOk("�Բ���.�������Ѿ���ȡ����..");
                        cm.dispose();
                    }
                } else if (cm.getChar().getVip() == 5) {
                    if (cm.getChar().getBossLog("VIP����") == 0) {
                        cm.gainItem(5390000, 4); //����1
                        cm.gainItem(5390001, 4); //����2
                        cm.gainItem(5390002, 4); //����3
                        cm.gainItem(5390011, 2); //��ʯ
                        cm.gainItem(4031454, 15); //ת��֤��
                        cm.gainNX(40000); //40000���
                        cm.gainMeso(1000000000); //10E��Ϸ��
                        cm.getChar().setBossLog("VIP����");
                        cm.worldMessage("[ϵͳ����]��ϲ���:[" + cm.getChar().getName() + "]��ȡ�˻�Ա5����.");
                        cm.sendOk("��ϲ.��ȡ�ɹ�,�������£�\r\n#z5390000#x4\r\n#z5390001#x4\r\n#z5390002#x4\r\n#z5390011#x2\r\n#z4031454#x4\r\n���20,000\r\n��Ϸ��1,000,000,000");
			cm.dispose();
                    } else {
                        cm.sendOk("�Բ���.�������Ѿ���ȡ����..");
                        cm.dispose();
                    }
                } else if (cm.getChar().getVip() >= 6) {
                    if (cm.getChar().getBossLog("VIP����") == 0) {
                        cm.gainItem(5074000, 30); //����
                        cm.gainItem(5390006, 5); //�ϻ�����
                        cm.gainNX(10000);
                        cm.gainMeso(500000000);
                        cm.getChar().setBossLog("VIP����");
                        cm.worldMessage("[ϵͳ����]��ϲ���:[" + cm.getChar().getName() + "]��ȡ�˻�Ա����.");
                        cm.sendOk("��ϲ.��ȡ�ɹ�..")
                        cm.dispose();
                    } else {
                        cm.sendOk("�Բ���.�������Ѿ���ȡ����..");
                        cm.dispose();
                    }
                } else {
                    cm.sendOk("�Բ���.������VIP..");
                    cm.dispose();
                }
            } else if (selection == 5) { //��Աװ����ȡ
                typed = 2;
                if (cm.getChar().getVip() < 2) {
                    cm.sendOk("�Բ���.���Ļ�Ա��������ȡ���");
                    cm.dispose();
                } else if (cm.getChar().getVip() >= 2) {
                    text = "#d����#b#h ##k,#d��Ŀǰ��Ա�ȼ�Ϊ#rVIP" + cm.getChar().getVip() + "#k\r\n";
                    text += "#dÿ�������VIP�����Ʒ��ͬ#k\r\n#r��ȡʱ��ע���Լ��ı�������Ҫ����10~15���ո�.#k\r\n";
                    text += "#dÿ���ȼ��������Ҫ������ȡ.#k\r\n";
                    text += "#L1##b[VIP2]#k��ȡ���#l\r\n";
                    text += "#L2##g[VIP3]#k��ȡ���#l\r\n";
                    text += "#L3##r[VIP4]#k��ȡ���#l\r\n";
                    text += "#L4##r[VIP5]#k��ȡ���#l\r\n";
                    text += "#L5##r[VIP4]#k��ȡ��������ް�#l\r\n";
                    cm.sendSimple(text);
                }
            } else if (selection == 6) {
                if (cm.getChar().getVip() == 2) {
                    cm.warp(910000007);
			cm.dispose();
                } else if (cm.getChar().getVip() == 3) {
                    cm.warp(910000008);
			cm.dispose();
                } else if (cm.getChar().getVip() == 4) {
                    cm.warp(910000009);
			cm.dispose();
                } else if (cm.getChar().getVip() == 5) {
                    cm.warp(910000010);
			cm.dispose();
                } else {
                    cm.sendOk("�Բ���,û���ʺ���Vip�ȼ���ר��������ͼ.");
			cm.dispose();
                }
            } else if (selection == 7) {
                cm.sendOk("����Ա���������...");
                cm.dispose();
            } else if (selection == 8) {
                typed = 8;
                cm.sendSimple("#r��Աר���̵�#k����ÿ�첻��ʱ���ˢ�¼���ϡ����Ʒ��ר���̵�����,��Ȼ��������Ϸ�ҹ���\r\nÿ����Ʒ������������,����#rVIP#kʱ����ער���̵�,���кܴ���ջ�Ӵ\r\n#r��ʾ��#k��ͬ�����VIPר���̵�,���۵�������һ��\r\n#bר���̵������Ʒ#r(GM�سɾ�,ϡ������,ϡ��ҩˮ)#k\r\n#L1##r>>�򿪻�Աר���̵�#k");
            }
        } else if (status == 2) {
            if (typed == 1) {
                typed = 1;
                var text = "#b�㵱ǰ��Vip�ȼ�Ϊ#r" + cm.getVip() + "#k��#b���ѱ���#r" + cm.getHyPay(1) + "#k\r\n";
                text += "#L1##d����VIP2-�ּ�#r10000#d���ѱ�\r\n"
                text += "#L8##r[��Ҫ5��ת��]#d����VIP2-�ּ�#r0#d���ѱ�\r\n"; 
                text += "#L2#����VIP3-�ּ�#r50000#d���ѱ�\r\n";
                text += "#L3#����VIP4-�ּ�#r100000#d���ѱ�\r\n";
		text += "#L4#����VIP5-�ּ�#r150000#d���ѱ�\r\n";
                text += "#L5#VIP2����VIP3-�ּ�#r50000#d���ѱ�\r\n";
                text += "#L6#VIP3����VIP4-�ּ�#r50000#d���ѱ�\r\n";
                text += "#L7#VIP4����VIP5-�ּ�#r50000#d���ѱ�#k\r\n";
                cm.sendSimpleS(text,2);
            } else if (typed == 4) {
                typed = 4;
                if (selection == 1) { //��������
                    cm.dispose();
                    cm.openNpc(9010030, 1);
                } else if (selection == 2) { //ÿ�մ�
                    cm.dispose();
                    cm.openNpc(9010030, 2);
                } else if (selection == 3) { //����ʼҷ���
                    cm.dispose();
                    cm.openNpc(1012117);
                } else if (selection == 4) { //ˢ������֮��	
                    cm.dispose();
                    cm.openNpc(9010030, 4);
                } else if (selection == 5) { //������������	
                    cm.dispose();
                    cm.openNpc(9010030, 5);
                } else if (selection == 6) { //��ת��	
                    cm.dispose();
                    cm.openNpc(9010030, 6);
                } else if (selection == 7) { //VIP4�Զ���	
                    cm.dispose();
                    cm.openNpc(9010030, 7);
                } else if (selection == 8) { //VIP4��ȡװ��	
                    cm.dispose();
                    cm.openNpc(9010030, 8);
                } else if (selection == 11) { //VIP4��ȡװ��	
                            cm.sendOk("��Ʒ���������");
                            cm.dispose();
                } else if (selection == 9) { //����ת������	
                    if (cm.getChar().getVip() >= 5 && cm.getBossLog("ת��") == 20) {
                        if (cm.getBossLog("ת������") < 1) {
                            cm.setBossLog("ת������");
                            cm.resetBossLog("ת��");
                            cm.sendOk("#b��ϲ,���ֿ��Զ�ת20����!");
                            cm.dispose();
                        } else {
                            cm.sendOk("#b������û��1��#z4310034#������24Сʱ�ڽ����Ѿ�ʹ�ù��˹�����,�����޷�ʹ�ô˹���.");
                            cm.dispose();
                        }
                    } else {
                        cm.sendOk("���Ļ�Ա�ȼ��޷�ʹ�ô˹���,�������ת��������û����");
                        cm.dispose();
                    }
                } else if (selection == 10) { 
                    cm.dispose();
                    cm.openShop(2809);
                } else if (selection == 11) {
                    cm.dispose();
                    cm.openNpc(9010030, 11);
                }
            } else if (typed == 2) { //VIP���
                var ii = Packages.server.MapleItemInformationProvider.getInstance();
                if (selection == 0) {

                } else if (selection == 1) { //VIP2���
                    if (cm.getChar().getVip() >= 2) {
                        if (cm.getBossLog("VIP2���", 1) == 0 && (cm.getSpace(1) > 5 && cm.getSpace(2) > 5 && cm.getSpace(4) > 5)) {
                            cm.gainItem(2340000, 10); //ף������
                            cm.gainItem(5064000, 10); //��������
                            cm.gainItem(5062000, 5); //����ħ��5��
                            cm.gainItem(vipyizi[randyizi],1); //����
                            var type = Packages.constants.GameConstants.getInventoryType(1112673); //VIPѫ��
                            var toDrop = ii.randomizeStats(ii.getEquipById(1112673)).copy(); // ����һ��Equip��
                            toDrop.setStr(100); //װ������
                            toDrop.setDex(100); //װ������
                            toDrop.setInt(100); //װ������
                            toDrop.setLuk(100); //װ������
                            toDrop.setMatk(100); //������
                            toDrop.setWatk(100); //ħ������
                            cm.getPlayer().getInventory(type).addItem(toDrop); //�����װ���������
                            cm.getC().getSession().write(Packages.tools.MaplePacketCreator.addInventorySlot(type, toDrop)); //ˢ�±���
                            cm.setBossLog("VIP2���", 1);
                            cm.sendOk("��ϲ,��ȡ#rVIP2#k����ɹ�,VIP2����������Ϊ#z" + vipyizi[randyizi] + "#");
                            cm.dispose();
                        } else {
                            cm.sendOk("��ȡʧ�ܣ�ʧ�ܵ�ԭ������ǣ�\r\n�Ѿ���ȡ����������λ���㣬��Ҫ�������д�����5��λ������");
                            cm.dispose();
                        }
                    } else {
                        cm.sendOk("���Ļ�Ա�ȼ��޷�ʹ�ô˹���");
                        cm.dispose();
                    }
                } else if (selection == 2) { //VIP3���
                    if (cm.getChar().getVip() >= 3) {
                        if (!cm.haveItem(1112673)) {
                            cm.sendOk("��û��VIP2��#z1112673#,����û����װ��������.\r\n������ȡVIP2���");
                            cm.dispose();
                            return;
                        }
                        if (cm.getBossLog("VIP3���", 1) == 0 && (cm.getSpace(1) > 10 && cm.getSpace(2) > 10 && cm.getSpace(4) > 10)) {	
                            cm.gainItem(2340000, 20); //ף������
                            cm.gainItem(5064000, 20); //��������
                            cm.gainItem(5062000, 15); //����ħ��3��
                            cm.gainItem(vipyizi[randyizi],1); //����
                            cm.gainItem(3700071, 1); //����VIP�ƺ�
                            cm.gainItem(3010509, 1); //����VIP����
                            cm.gainItem(1003698, 1); //����VIP�ʹ�
                            cm.gainItem(3010410, 1); //����1
                            cm.gainItem(3010409, 1); //����2
                            cm.gainItem(3010075, 1); //����3
                            cm.gainItem(3010073, 1); //����4
                            cm.gainItem(3010069, 1); //����5
                            cm.gainItem(4031217, 10); //��ѡGM
                            cm.gainItem(1112140, 1); //�׽���Ƭ��ָ
                            cm.gainItem(1112247, 1); //�׽������ָ
                            var type = Packages.constants.GameConstants.getInventoryType(1112787); //VIPѫ��
                            var toDrop = ii.randomizeStats(ii.getEquipById(1112787)).copy(); // ����һ��Equip��
                            toDrop.setStr(500); //װ������
                            toDrop.setDex(500); //װ������
                            toDrop.setInt(500); //װ������
                            toDrop.setLuk(500); //װ������
                            toDrop.setMatk(500); //������
                            toDrop.setWatk(500); //ħ������
                            cm.getPlayer().getInventory(type).addItem(toDrop); //�����װ���������
                            cm.getC().getSession().write(Packages.tools.MaplePacketCreator.addInventorySlot(type, toDrop)); //ˢ�±���
                            cm.setBossLog("VIP3���", 1);
                            cm.sendOk("��ϲ,��ȡ#rVIP3#k����ɹ�,VIP3����������Ϊ#z" + vipyizi[randyizi] + "#");
                            cm.dispose();
                        } else {
                            cm.sendOk("��ȡʧ�ܣ�ʧ�ܵ�ԭ������ǣ�\r\n�Ѿ���ȡ����������λ���㣬��Ҫ�������д�����10��λ������");
                            cm.dispose();
                        }
                    } else {
                        cm.sendOk("���Ļ�Ա�ȼ��޷�ʹ�ô˹���");
                        cm.dispose();
                    }
                } else if (selection == 3) { //VIP4���
                    if (cm.getChar().getVip() >= 4) {
                        if (!cm.haveItem(1112787)) {
                            cm.sendOk("��û��VIP3��#z1112787#,����û����װ��������.\r\n������ȡVIP3���");
                            cm.dispose();
                            return;
                        }
                        if (cm.getBossLog("VIP4���", 1) == 0 && (cm.getSpace(1) > 12 && cm.getSpace(2) > 12 && cm.getSpace(4) > 12)) {
                            cm.gainItem(1112787, -1); //VIP��ָ
                            cm.gainItem(2340000, 20); //ף������
                            cm.gainItem(5062000, 10); //����ħ��2��
                            cm.gainItem(5064000, 20); //��������
                            cm.gainItem(vipwj[randwj],1); //���
                            cm.gainItem(3700070, 1); //�ƽ�VIP�ƺ�
                            cm.gainItem(3010508, 1); //�ƽ�VIP����
                            cm.gainItem(1003697, 1); //�ƽ�VIP�ʹ�
                            cm.gainItem(1112139, 1); //�ƽ���Ƭ��ָ
                            cm.gainItem(1112246, 1); //�ƽ������ָ
                            //cm.gainItem(3010410, 1); //����1
                            //cm.gainItem(3010409, 1); //����2
                            //cm.gainItem(3010075, 1); //����3
                            //cm.gainItem(3010073, 1); //����4
                            //cm.gainItem(3010069, 1); //����5
                            cm.gainItem(3010031, 1); //����6
                            cm.gainItem(3010032, 1); //����7
                            cm.gainItem(3010033, 1); //����8
                            cm.gainItem(4031217, 10); //��ѡGM
                            var type = Packages.constants.GameConstants.getInventoryType(1112786); //VIPѫ��
                            var toDrop = ii.randomizeStats(ii.getEquipById(1112786)).copy(); // ����һ��Equip��
                            toDrop.setStr(3000); //װ������
                            toDrop.setDex(3000); //װ������
                            toDrop.setInt(3000); //װ������
                            toDrop.setLuk(3000); //װ������
                            toDrop.setMatk(3000); //������
                            toDrop.setWatk(3000); //ħ������
                            cm.getPlayer().getInventory(type).addItem(toDrop); //�����װ���������
                            cm.getC().getSession().write(Packages.tools.MaplePacketCreator.addInventorySlot(type, toDrop)); //ˢ�±���
                            cm.setBossLog("VIP4���", 1);
                            cm.sendOk("��ϲ,��ȡ#rVIP4#k����ɹ�,VIP4���������Ϊ#z" + vipwj[randwj] + "#");
                            cm.dispose();
                        } else {
                            cm.sendOk("��ȡʧ�ܣ�ʧ�ܵ�ԭ������ǣ�\r\n�Ѿ���ȡ����������λ���㣬��Ҫ�������д�����12��λ������");
                            cm.dispose();
                        }
                    } else {
                        cm.sendOk("���Ļ�Ա�ȼ��޷�ʹ�ô˹���");
                        cm.dispose();
                    }
                } else if (selection == 4) { //VIP5���
                    if (cm.getChar().getVip() >= 5) {
                        if (!cm.haveItem(1112786)) {
                            cm.sendOk("��û��VIP4��#z1112786#,����û����װ��������.\r\n������ȡVIP4���");
                            cm.dispose();
                            return;
                        }
                        if (cm.getBossLog("VIP5���", 1) == 0 && (cm.getSpace(1) > 15 && cm.getSpace(2) > 15 && cm.getSpace(4) > 15)) {
                            cm.gainItem(1112786, -1); //VIPѫ��
                            cm.gainItem(5062000, 10); //����ħ��
                            cm.gainItem(5062002, 10); //�߼�����ħ��
                            cm.gainItem(5064000, 50); //��������
                            cm.gainItem(1112138, 1); //��ʯ��Ƭ��ָ
                            cm.gainItem(1112245, 1); //��ʯ�����ָ
                            cm.gainItem(2340000, 50); //ף������
                            cm.gainItem(3700069, 1); //��ʯVIP�ƺ�
                            cm.gainItem(3010507, 1); //��ʯVIP����
                            cm.gainItem(1003696, 1); //��ʯVIP�ʹ�
                            //cm.gainItem(3010410, 1); //����1
                            //cm.gainItem(3010409, 1); //����2
                            //cm.gainItem(3010075, 1); //����3
                            //cm.gainItem(3010073, 1); //����4
                            //cm.gainItem(3010069, 1); //����5
                            //cm.gainItem(3010031, 1); //����6
                            //cm.gainItem(3010032, 1); //����7
                            //cm.gainItem(3010033, 1); //����8
                            cm.gainItem(3010030, 1); //����9
                            cm.gainItem(3010029, 1); //����10
                            cm.gainItem(4031217, 20); //��ѡGM
                            cm.gainItem(vipwj[randwj],1); //���
                            var type = Packages.constants.GameConstants.getInventoryType(1112785); //VIPѫ��
                            var toDrop = ii.randomizeStats(ii.getEquipById(1112785)).copy(); // ����һ��Equip��
                            toDrop.setStr(8888); //װ������
                            toDrop.setDex(8888); //װ������
                            toDrop.setInt(8888); //װ������
                            toDrop.setLuk(8888); //װ������
                            toDrop.setMatk(8888); //������
                            toDrop.setWatk(8888); //ħ������
                            cm.getPlayer().getInventory(type).addItem(toDrop); //�����װ���������
                            cm.getC().getSession().write(Packages.tools.MaplePacketCreator.addInventorySlot(type, toDrop)); //ˢ�±���
                            cm.setBossLog("VIP5���", 1);
                            cm.sendOk("��ϲ,��ȡ#rVIP5#k����ɹ�,VIP5���������Ϊ#z" + vipwj[randwj] + "#");
                            cm.dispose();
                        } else {
                            cm.sendOk("��ȡʧ�ܣ�ʧ�ܵ�ԭ������ǣ�\r\n�Ѿ���ȡ����������λ���㣬��Ҫ�������д�����15��λ������");
                            cm.dispose();
                        }
                    } else {
                        cm.sendOk("���Ļ�Ա�ȼ��޷�ʹ�ô˹���");
                        cm.dispose();
                    }
                } else if (selection == 5) { //VIP4���ް�
                    if (cm.getChar().getVip() >= 4) {
                        if (cm.getBossLog("VIP4���ް�", 1) == 0 && (cm.getSpace(1) > 5 && cm.getSpace(2) > 5 && cm.getSpace(2) > 5)) {
                            cm.gainItem(3010417, +1); //VIPѫ��
                            cm.setBossLog("VIP4���ް�", 1);
                            cm.sendOk("��ϲ,��ȡ#rVIP4#k#z3010417#");
                            cm.dispose();
                        } else {
                            cm.sendOk("��ȡʧ�ܣ�ʧ�ܵ�ԭ������ǣ�\r\n�Ѿ���ȡ����������λ���㣬��Ҫ�������д�����5��λ������");
                            cm.dispose();
                        }
                    } else {
                        cm.sendOk("���Ļ�Ա�ȼ��޷�ʹ�ô˹���");
                        cm.dispose();
                    }
                }
            } else if (selection == 2) { //ÿ�մ�
                cm.dispose();
                cm.openNpc(9010030, 2);
            } else if (selection == 3) { //����ʼҷ���
                cm.dispose();
                cm.openNpc(1012117);
            } else if (selection == 4) { //ˢ������֮��	
                cm.dispose();
                cm.openNpc(9010030, 4);
            } else if (selection == 5) { //������������	
                cm.dispose();
                cm.openNpc(9010030, 5);
            } else if (typed == 101) {
                if (cm.haveItem(4000054, typesitemcost[selection]) == true) {
                    cm.gainItem(typesitem[selection], 1);
                    cm.gainItem(4000054, -typesitemcost[selection]);
                    cm.sendOk("��ϲ�㣬��ȡ�ɹ�����ȥ�鿴һ�°�����.");
                    cm.dispose();
                } else {
                    cm.sendOk("�Բ�����û���㹻�Ľ�ֺ.");
                    cm.dispose();
                }
            } else if (typed == 166) {
                cm.delRing(cm.getText());
            } else if (typed == 2) {
                fee = cm.getText();
                cm.sendYesNo("��ȷ��Ҫ��ע #r" + fee + "#k ð�ձ���?���ȼ������û����ô��ǮŶ!");
            } else if (typed == 5) {
                fee = cm.getText();
                if (fee < 0) {
                    cm.sendOk("�������������!");
                    cm.dispose();
                } else if (!cm.haveItem(4002002, fee * 2)) {
                    cm.sendOk("�һ�ʧ�ܣ���û��" + fee * 2 + "��ľ����Ʊ��");
                    cm.dispose();
                } else {
                    cm.gainItem(4002002, -fee * 2); //ľ����Ʊ
                    cm.gainItem(4031454, fee); //ʥ��
                    cm.sendOk("��ϲ���һ��ɹ���");
                    cm.dispose();
                }
            } else if (typed == 8) {
                typed = 8;
		/*var selStr= "����Ϊ��ʱ�γ�����Ʒ,ÿ����Ʒ�޹�һ��\r\n";
		selStr += "#L1##v1432086#��#d��Ҫ#r 1 #d��ҡ���������#r 5 #d�ѡ��ѳ���#r "+cm.getBossLogCount("922��Ʒ1",2)+" #d��#k\r\n";
		selStr += "#L2##v1432086#��#d��Ҫ#r 1 #d��ҡ���������#r 5 #d�ѡ��ѳ���#r "+cm.getBossLogCount("922��Ʒ2",2)+" #d��#k\r\n";
		selStr += "#L3##v1432086#��#d��Ҫ#r 1 #d��ҡ���������#r 5 #d�ѡ��ѳ���#r "+cm.getBossLogCount("922��Ʒ3",2)+" #d��#k\r\n";
		selStr += "#L4##v1432086#��#d��Ҫ#r 1 #d��ҡ���������#r 5 #d�ѡ��ѳ���#r "+cm.getBossLogCount("922��Ʒ4",2)+" #d��#k\r\n";
		cm.sendSimpleS(selStr,2);*/
                cm.sendOk("�̵���ʱ�ر��С���");
                cm.dispose();
            } else if (typed == 1) {
                typed = 2;
                cm.sendGetText("��������Ҫ���������,1���ѱ�/1��(���10��)");
            } else if (typed == 28) {
                typed = 29;
                fee = cm.getText();
                fee1 = 100000000 * fee;
                cm.sendYesNo("��ȷ��Ҫ�һ� #r" + fee1 + "#k ��Ϸ����?����Ҫ������#r" + fee + "ľ����Ʊ");
            } else if (typed == 26) {
                if (selection == 0) {
                    if (player.GetMoney() < 5000) {
                        cm.sendOk("��Ǹ��û��5000����޷���������\r\n������ֱ�ӵ����¼������Ĺ�����ˬ�ң�Ȼ����г�ֵ��ע���ֵʱ������������ߣ��ɹ��������ԱߵĴ�NPC������");
                        cm.dispose();
                    } else {
                        player.GainMoney(-5000);
                        cm.gainItem(4001129, 1);
                        cm.sendOk("��Ŷ������Ұ����Ǽ���ң���ϲ��ȡ�ɹ����۳�5000���.");
                        cm.dispose();
                    }
                } else if (selection == 3) {
                    if (cm.getMeso() >= 500000000) {
                        cm.sendOk("��ϲ��ϲ����ȡ�ɹ���");
                        cm.gainItem(4001129, 1);
                        cm.gainMeso(-500000000);
                        cm.dispose();
                    } else {
                        cm.sendNext("�Բ�����û��5E��Ϸ��");
                        cm.dispose();
                    }
                } else if (selection == 1) {
                    if (cm.haveItem(4000054, 30) == true) {
                        cm.sendOk("��ϲ��ϲ����ȡ�ɹ���");

                        cm.gainItem(4000054, -30);
                        cm.gainItem(4001129, 1);
                        cm.dispose();
                    } else {
                        typed = 230;
                        cm.sendNext("�Բ�����û���㹻�����˽�ֺ,����Ʒ��������#v4000054#.\r\n#r�����һ�����͵����˵�ͼ��ս����!");
                        //cm.dispose();
                    }
                } else if (selection == 2) {
                    cm.warp(211040800, 0);
                    cm.dispose();
                }
            }
        } else if (status == 3) {
            if (typed == 1) {
                var p = cm.getChar();
                var totAp = p.getRemainingAp();
                if (selection == 1) { //V2
                    if (cm.getVip() >= 2) {
                        cm.sendOk("��Ǹ����Ļ�Ա�ȼ�ΪVip" + cm.getVip() + ",�Ѿ������ٹ�����!");
                        cm.dispose();
                    } else if (cm.getHyPay(1) < 10000) {
                        cm.sendOk("��Ǹ����û�㹻�����ѱң�.");
                        cm.dispose();
                    } else {
                        cm.setVip(2, 365);
                        cm.addHyPay(10000);
                        p.setRemainingAp(totAp + 200);
                        p.levelUp(); //ʹ�������ˢ�µ�ǰ��ɫ��״̬
                        cm.sendOk("��ϲ��ɹ�����VIP2");
                        cm.getC().getChannelServer().broadcastPacket(Packages.tools.MaplePacketCreator.serverNotice(0x09, cm.getC().getChannel(), "��Vip��" + " : " + "��ϲ" + cm.getChar().getName() + "��Ϊ����Vip2���,���һ��ף�ذ�!"));
                        cm.dispose();
                    }
                } else if (selection == 2) { //V3
                    if (cm.getVip() >= 3) {
                        cm.sendOk("��Ǹ����Ļ�Ա�ȼ�ΪVip" + cm.getVip() + ",�Ѿ������ٹ�����!");
                        cm.dispose();

                    } else if (cm.getHyPay(1) < 50000) {
                        cm.sendOk("��Ǹ����û�㹻�����ѱң�.");
                        cm.dispose();
                    } else {
                        cm.setVip(3, 365);
                        cm.addHyPay(50000);
                        p.setRemainingAp(totAp + 400);
                        p.levelUp(); //ʹ�������ˢ�µ�ǰ��ɫ��״̬
                        cm.sendOk("��ϲ��ɹ�����VIP3");
                        cm.getC().getChannelServer().broadcastPacket(Packages.tools.MaplePacketCreator.serverNotice(0x09, cm.getC().getChannel(), "��Vip��" + " : " + "��ϲ" + cm.getChar().getName() + "��Ϊ����Vip3���,���һ��ף�ذ�!"));
                        cm.dispose();
                    }
                } else if (selection == 3) { //V4
                    if (cm.getVip() >= 4) {
                        cm.sendOk("��Ǹ����Ļ�Ա�ȼ�ΪVip" + cm.getVip() + ",�Ѿ������ٹ�����!");
                        cm.dispose();
                    } else if (cm.getHyPay(1) < 100000) {
                        cm.sendOk("��Ǹ����û�㹻�����ѱң�.");
                        cm.dispose();
                    } else {
                        cm.setVip(4, 365);
                        cm.addHyPay(100000);
                        p.setRemainingAp(totAp + 600);
                        p.levelUp(); //ʹ�������ˢ�µ�ǰ��ɫ��״̬
                        cm.sendOk("��ϲ��ɹ�����VIP4");
                        cm.getC().getChannelServer().broadcastPacket(Packages.tools.MaplePacketCreator.serverNotice(0x09, cm.getC().getChannel(), "��Vip��" + " : " + "��ϲ" + cm.getChar().getName() + "��Ϊ����Vip4���,���һ��ף�ذ�!"));
                        cm.dispose();
                    }
                } else if (selection == 4) { //V5
                    if (cm.getVip() >= 5) {
                        cm.sendOk("��Ǹ����Ļ�Ա�ȼ�ΪVip" + cm.getVip() + ",�Ѿ������ٹ�����!");
                        cm.dispose();
                    } else if (cm.getHyPay(1) < 150000) {
                        cm.sendOk("��Ǹ����û�㹻�����ѱң�.");
                        cm.dispose();
                    } else {
                        cm.setVip(5, 365);
                        cm.addHyPay(150000);
                        p.setRemainingAp(totAp + 800);
                        p.levelUp(); //ʹ�������ˢ�µ�ǰ��ɫ��״̬
                        cm.sendOk("��ϲ��ɹ�����VIP5");
                        cm.getC().getChannelServer().broadcastPacket(Packages.tools.MaplePacketCreator.serverNotice(0x09, cm.getC().getChannel(), "��Vip��" + " : " + "��ϲ" + cm.getChar().getName() + "��Ϊ����Vip5���,���һ��ף�ذ�!"));
                        cm.dispose();
                    }
                } else if (selection == 5) { //V2~3
                    if (cm.getVip() != 2) {
                        cm.sendOk("��Ǹ�������ڲ���Vip2.");
                        cm.dispose();
                    } else if (cm.getHyPay(1) < 50000) {
                        cm.sendOk("��Ǹ����û�㹻�����ѱң�.");
                        cm.dispose();
                    } else {
                        cm.setVip(3, 365);
                        cm.addHyPay(50000);
                        p.setRemainingAp(totAp + 200);
                        p.levelUp(); //ʹ�������ˢ�µ�ǰ��ɫ��״̬
                        cm.sendOk("��ϲ��ɹ�����ΪVIP3");
                        cm.getC().getChannelServer().broadcastPacket(Packages.tools.MaplePacketCreator.serverNotice(0x09, cm.getC().getChannel(), "��Vip��" + " : " + "��ϲ" + cm.getChar().getName() + "������Ϊ����Vip3���,���һ��ף�ذ�!"));
                        cm.dispose();
                    }
                } else if (selection == 6) { //V3~4
                    if (cm.getVip() != 3) {
                        cm.sendOk("��Ǹ�������ڲ���Vip3.");
                        cm.dispose();
                    } else if (cm.getHyPay(1) < 50000) {
                        cm.sendOk("��Ǹ����û�㹻�����ѱң�.");
                        cm.dispose();
                    } else {
                        cm.setVip(4, 365);
                        cm.addHyPay(50000);
                        p.setRemainingAp(totAp + 400);
                        p.levelUp(); //ʹ�������ˢ�µ�ǰ��ɫ��״̬
                        cm.sendOk("��ϲ��ɹ�����ΪVIP4");
                        cm.getC().getChannelServer().broadcastPacket(Packages.tools.MaplePacketCreator.serverNotice(0x09, cm.getC().getChannel(), "��Vip��" + " : " + "��ϲ" + cm.getChar().getName() + "������Ϊ����Vip4���,���һ��ף�ذ�!"));
                        cm.dispose();
                    }
                } else if (selection == 7) { //V4~5
                    if (cm.getVip() != 4) {
                        cm.sendOk("��Ǹ�������ڲ���Vip4.");
                        cm.dispose();
                    } else if (cm.getHyPay(1) < 50000) {
                        cm.sendOk("��Ǹ����û�㹻�����ѱң�.");
                        cm.dispose();
                    } else {
                        cm.setVip(5, 365);
                        cm.addHyPay(50000);
                        p.setRemainingAp(totAp + 600);
                        p.levelUp(); //ʹ�������ˢ�µ�ǰ��ɫ��״̬
                        cm.sendOk("��ϲ��ɹ���������VIP5");
                        cm.getC().getChannelServer().broadcastPacket(Packages.tools.MaplePacketCreator.serverNotice(0x09, cm.getC().getChannel(), "��Vip��" + " : " + "��ϲ" + cm.getChar().getName() + "������Ϊ����Vip5���,���һ��ף�ذ�!"));
                        cm.dispose();
                    }
                } else if (selection == 8) { //V4~5
                    if (cm.getVip() >= 2) {
                        cm.sendOk("��Ǹ����Ļ�Ա�ȼ�ΪVip" + cm.getVip() + ",�Ѿ������ٹ�����!");
                        cm.dispose();
                    } else if (cm.getPlayer().getReborns() < 5) {
                        cm.sendOk("��Ǹ���㻹û�дﵽ5��ת��������Ŭ����.");
                        cm.dispose();
                    } else {
                        cm.setVip(2, 365);
                        p.setRemainingAp(totAp + 200);
                        p.levelUp(); //ʹ�������ˢ�µ�ǰ��ɫ��״̬
                        cm.sendOk("��ϲ��ɹ�����VIP2");
                        cm.getC().getChannelServer().broadcastPacket(Packages.tools.MaplePacketCreator.serverNotice(0x09, cm.getC().getChannel(), "��Vip��" + " : " + "��ϲ" + cm.getChar().getName() + "��Ϊ����Vip2���,���һ��ף�ذ�!"));
                        cm.dispose();
                    }
                }
            } else if (typed == 8) {
                if (selection == 1) { //��һ����Ʒ
                    var count = cm.getBossLog("922��Ʒ1",1);
                    if (cm.getBossLogCount("922��Ʒ1",1) >= 1) {//��һ����Ʒ�ж������û
                        cm.sendOk("��Ǹ�����ѹ��������Ʒ��,�Ѿ������ٹ�����!");
                        cm.dispose();
                    } else if (cm.getBossLogCount("922��Ʒ1",2) >= 5) {//��һ����Ʒ�ж��Ƿ��л�
                        cm.sendOk("��Ǹ������Ʒ�����꣡.");
                        cm.dispose();
                    } else if (cm.getMeso() < 1) {//��һ����Ʒ�ж��Ƿ񹻽��
                        cm.sendOk("��Ǹ����û���㹻�Ľ��");
                        cm.dispose();
                    } else {
                        cm.gainMeso(-1);
                        cm.gainItem(1432086, 1);
                        cm.setBossLog("922��Ʒ1",1,count+1);
                        cm.sendOk("��ϲ��ɹ��Ե���һ��#v1432086#");
                        cm.worldMessage("[VIPר���̵�]����ϲ���[" + cm.getChar().getName() + "]���г�ʷ�ٷ��Ե���<ʨ�ĳ�ǹ-lv.140>");
                        cm.dispose();
                    }
                } else if (selection == 2) { //�ڶ�����Ʒ
                    var count = cm.getBossLog("922��Ʒ2",1);
                    if (cm.getBossLogCount("922��Ʒ2",1) >= 1) {//�ڶ�����Ʒ�ж������û
                        cm.sendOk("��Ǹ�����ѹ��������Ʒ��,�Ѿ������ٹ�����!");
                        cm.dispose();
                    } else if (cm.getBossLogCount("922��Ʒ2",2) >= 5) {//�ڶ�����Ʒ�ж��Ƿ��л�
                        cm.sendOk("��Ǹ������Ʒ�����꣡.");
                        cm.dispose();
                    } else if (cm.getMeso() < 1) {//�ڶ�����Ʒ�ж��Ƿ񹻽��
                        cm.sendOk("��Ǹ����û���㹻�Ľ��");
                        cm.dispose();
                    } else {
                        cm.gainMeso(-1);
                        cm.gainItem(1432086, 1);
                        cm.setBossLog("922��Ʒ2",1,count+1);
                        cm.sendOk("��ϲ��ɹ��Ե���һ��#v1432086#");
                        cm.worldMessage("[VIPר���̵�]����ϲ���[" + cm.getChar().getName() + "]���г�ʷ�ٷ��Ե���<ʨ�ĳ�ǹ-lv.140>");
                        cm.dispose();
                    }
                } else if (selection == 3) { //��������Ʒ
                    var count = cm.getBossLog("922��Ʒ3",1);
                    if (cm.getBossLogCount("922��Ʒ3",1) >= 1) {//��������Ʒ�ж������û
                        cm.sendOk("��Ǹ�����ѹ��������Ʒ��,�Ѿ������ٹ�����!");
                        cm.dispose();
                    } else if (cm.getBossLogCount("922��Ʒ3",2) >= 5) {//��������Ʒ�ж��Ƿ��л�
                        cm.sendOk("��Ǹ������Ʒ�����꣡.");
                        cm.dispose();
                    } else if (cm.getMeso() < 1) {//��������Ʒ�ж��Ƿ񹻽��
                        cm.sendOk("��Ǹ����û���㹻�Ľ��");
                        cm.dispose();
                    } else {
                        cm.gainMeso(-1);
                        cm.gainItem(1432086, 1);
                        cm.setBossLog("922��Ʒ3",1,count+1);
                        cm.sendOk("��ϲ��ɹ��Ե���һ��#v1432086#");
                        cm.worldMessage("[VIPר���̵�]����ϲ���[" + cm.getChar().getName() + "]���г�ʷ�ٷ��Ե���<ʨ�ĳ�ǹ-lv.140>");
                        cm.dispose();
                    }
                } else if (selection == 4) { //��������Ʒ
                    var count = cm.getBossLog("922��Ʒ4",1);
                    if (cm.getBossLogCount("922��Ʒ4",1) >= 1) {//���ĸ���Ʒ�ж������û
                        cm.sendOk("��Ǹ�����ѹ��������Ʒ��,�Ѿ������ٹ�����!");
                        cm.dispose();
                    } else if (cm.getBossLogCount("922��Ʒ4",2) >= 5) {//���ĸ���Ʒ�ж��Ƿ��л�
                        cm.sendOk("��Ǹ������Ʒ�����꣡.");
                        cm.dispose();
                    } else if (cm.getMeso() < 1) {//���ĸ���Ʒ�ж��Ƿ񹻽��
                        cm.sendOk("��Ǹ����û���㹻�Ľ��");
                        cm.dispose();
                    } else {
                        cm.gainMeso(-1);
                        cm.gainItem(1432086, 1);
                        cm.setBossLog("922��Ʒ4",1,count+1);
                        cm.sendOk("��ϲ��ɹ��Ե���һ��#v1432086#");
                        cm.worldMessage("[VIPר���̵�]����ϲ���[" + cm.getChar().getName() + "]���г�ʷ�ٷ��Ե���<ʨ�ĳ�ǹ-lv.140>");
                        cm.dispose();
                    }
                }
            } else if (typed == 29) {
                meso1 = cm.getChar().getMeso();
                if (fee <= 0 || fee > 21) {
                    cm.sendOk("������ó�������Ҫ����");
                    cm.dispose();
                } else if (cm.haveItem(4002002, fee) < true || (meso1 + fee1) > 2147483647) {
                    cm.sendOk("��Ǹ����û�㹻����ţ��Ʊ��\r\n������ı����Ѿ�װ������ô��Ǯ��");
                    cm.dispose();
                } else {
                    cm.gainMeso(+fee1);
                    cm.gainItem(4002002, -fee);
                    cm.sendOk("�һ��ɹ�.");
                    cm.dispose();
                }
            } else if (typed == 230) {
                cm.warp(211040800, 0);
                cm.dispose();
            } else if (typed == 2) {
                if (playerchoice == "rock" && compchoice == "rock") {
                    cm.sendOk(Frock + spacing + rock + draw);
                    drawmatch = true;
                    cm.gainMeso(-cost);
                } else if (playerchoice == "rock" && compchoice == "paper") {
                    cm.sendOk(Frock + spacing + paper + lose);
                    losematch = true;
                    cm.gainMeso(-cost);
                    cm.serverNotice("�����ֹ��桻����.������" + cm.getChar().getName() + "����ʯͷ���������ʧ���ˣ����һ��Ϊ������");
                } else if (playerchoice == "rock" && compchoice == "scissor") {
                    cm.sendOk(Frock + spacing + scissor + win);
                    winmatch = true;
                    cm.gainMeso(winmesos);
                    cm.serverNotice("�����ֹ��桻����ϲ" + cm.getChar().getName() + "����ʯͷ���������ʤ���ˣ�");
                    //cm.gainItem(items[Math.floor(Math.random() * items.length)],1);
                } else if (playerchoice == "paper" && compchoice == "rock") {
                    cm.sendOk(Fpaper + spacing + rock + win);
                    winmatch = true;
                    cm.gainMeso(winmesos);
                    //cm.gainItem(items[Math.floor(Math.random() * items.length)],1);
                    cm.serverNotice("�����ֹ��桻����ϲ" + cm.getChar().getName() + "����ʯͷ���������ʤ���ˣ�");
                } else if (playerchoice == "paper" && compchoice == "paper") {
                    cm.sendOk(Fpaper + spacing + paper + draw);
                    drawmatch = true;
                    cm.gainMeso(-cost);
                } else if (playerchoice == "paper" && compchoice == "scissor") {
                    cm.sendOk(Fpaper + spacing + scissor + lose);
                    losematch = true;
                    cm.gainMeso(-cost);
                    cm.serverNotice("�����ֹ��桻����.������" + cm.getChar().getName() + "����ʯͷ���������ʧ���ˣ����һ��Ϊ������");
                } else if (playerchoice == "scissor" && compchoice == "rock") {
                    cm.sendOk(Fscissor + spacing + rock + lose);
                    losematch = true;
                    cm.gainMeso(-cost);
                    cm.serverNotice("�����ֹ��桻����.������" + cm.getChar().getName() + "����ʯͷ���������ʧ���ˣ����һ��Ϊ������");
                } else if (playerchoice == "scissor" && compchoice == "paper") {
                    cm.sendOk(Fscissor + spacing + paper + win);
                    winmatch = true;
                    cm.gainMeso(winmesos);
                    cm.serverNotice("�����ֹ��桻����ϲ" + cm.getChar().getName() + "����ʯͷ���������ʤ���ˣ�");
                    //cm.gainItem(items[Math.floor(Math.random() * items.length)],1);
                } else if (playerchoice == "scissor" && compchoice == "scissor") {
                    cm.sendOk(Fscissor + spacing + scissor + draw);
                    drawmatch = true;
                    cm.gainMeso(-cost);
                } else {
                    cm.sendOk("������...");
                }
            } else {
                if (cm.getMeso() < fee) {
                    cm.sendOk("Ŷ�ǣ�������˼��û��ô��Ǯ�ˣ�ȥ׬��Ǯ�����ɣ���ɲ�����ѵ�!");
                    cm.dispose();
                } else if (cm.getMeso() >= 1050000000) {
                    cm.sendOk("�Բ���,��Ľ�Ҵ���10.5��,���Բ��ܲ��ڴ˴���ע!");
                    cm.dispose();
                } else if (cm.getText() < 0) {
                    cm.sendOk("������ó�������Ȼ���븺����һ��ȥ!");
                    cm.dispose();
                } else if (chance <= 1) {
                    cm.gainMeso(-fee);
                    cm.sendNext("Ŷ���������������ô��Ŷ�������� ����һ����!");
                    cm.serverNotice("���ĳ����桻����.������" + cm.getChar().getName() + "���ڶĳ�������⣬���һ��Ϊ�����ɣ�");
                    cm.dispose();
                }
                else if (chance == 2) {
                    cm.gainMeso(-fee);
                    cm.sendNext("Ŷ���������������ô��Ŷ�������� ����һ����!");
                    cm.serverNotice("���ĳ����桻����.������" + cm.getChar().getName() + "���ڶĳ�������⣬���һ��Ϊ�����ɣ�");
                    cm.dispose();
                }
                else if (chance == 3) {
                    cm.gainMeso(-fee);
                    cm.sendNext("Ŷ���������������ô��Ŷ�������� ����һ����!");
                    cm.serverNotice("���ĳ����桻����.������" + cm.getChar().getName() + "���ڶĳ�������⣬���һ��Ϊ�����ɣ�");
                    cm.dispose();
                }
                else if (chance >= 4) {
                    cm.gainMeso(fee * 1);
                    cm.sendNext("#r��������ϲ��#k! ��Ӯ��! ������������������һ�ѹ�!");
                    cm.serverNotice("���ĳ����桻����ϲ" + cm.getChar().getName() + "���ڶĳ�Ӯ�ô�����ң����һ��Ϊ��ף�ذɣ�");
                    cm.dispose();
                }
            }
        } else if (status == 4) {
            if (typed == 1) {

            } else if (typed == 76) {
                cm.gainItem(5200002, -1);
                cm.makeRing(cm.getText(), 1112801);
                cm.sendOk("��ϲ�������ɹ�!");
                cm.dispose();
            } else if (typed == 77) {
                cm.gainItem(5200002, -1);
                cm.makeRing(cm.getText(), 1112802);
                cm.sendOk("��ϲ�������ɹ�!");
                cm.dispose();
            } else {
                cm.dispose();
            }
        }

    }
}

function getVipInfo() {
    var text = "\r\n";

    text += "#r#e��Ա�ȼ�1#n#k-���\r\n";
    text += "#b��Ա���ܣ�#r1.#d��ѻ����з���(���ʼ���)\r\n";
    text += "#b��Ա���ʣ�#d1000Wð�ձ�+2��ʥ��(ת������)\r\n";
    text += "#g=================================================#k\r\n";

    text += "#r#e��Ա�ȼ�2#n#k-5��ת������ȡ\r\n";
    text += "#b��Ա���ܣ�#d#r1.#k��Ա���и���������ʾ,��������\r\n����������#r2.#k�漴�����ʼҷ���#r(106�汾)#k\r\n����������#r3.#kר��������ͼ\r\n����������#r4.#k�г�˫���ݵ���Ϊ\r\n"
    text += "#b��Ա���ʣ�#d5000��ȯ+1Eð�ձ�+4��ʥ��(ת������)#k\r\n";
    text += "#b��Ա�����#d#v2340000##z2340000#x10#v5064000##z5064000#x10\r\n#v2900019#(�漴����)x1#v1112673#(ȫ����100)x1#v5062000##z5062000#x5\r\n\r\n";
    text += "#g=================================================#k\r\n";

    text += "#r#e��Ա3(����)#n#k-30000���ѱ�\r\n";
    text += "#b��Ա���ܣ�#d#r1.#k��Ա���и���������ʾ,��������\r\n����������#r2.#k�漴�����ʼҷ���#r(106�汾)#k\r\n����������#r3.#kÿ�����������ȫ����30\r\n����������#r4.#kÿ���ҡVIP�齱��1��\r\n����������#r4.#kר��������ͼ\r\n����������#r5.#k�г������ݵ���Ϊ\r\n";
    text += "#b��Ա���ʣ�#d1w��ȯ+3Eð�ձ�+6��ʥ��(ת������)\r\n����������3���龰���ȸ�1��-����VIPר������2��\r\n";
    text += "#b��Ա�����#d#v2340000##z2340000#x30#v5064000##z5064000#x30\r\n#v4031217#(��ѡGM��)x10#v2900019#(�漴����)x2#v1112673#(����100)x1\r\n#v5062000##z5062000#x20#v1112787#(����500)x1#v3700071##z3700071#x1\r\n#v3010509##z3010509#x1#v1003698##z1003698#x1\r\n#v1112140##z1112140##v1112247##z1112247#\r\n#v3010410##v3010409##v3010075##v3010073##v3010069#\r\n";
    text += "#g=================================================#k\r\n";

    text += "#r#e��Ա4(�ƽ�)#n#k-60000���ѱ�\r\n";
    text += "#b��Ա���ܣ�#d#r1.#k��Ա���и���������ʾ,��������\r\n����������#r2.#k���������ʼҷ���#r(106�汾)#k\r\n����������#r3.#kÿ�����������ȫ����50\r\n����������#r4.#kÿ���ҡVIP�齱��2��\r\n����������#r5.#kÿ���漴��ȡ140װ��1��(ȫ����100-200)\r\n����������#r6.#k�г��ı��ݵ���Ϊ\r\n����������#r7.#kר��������ͼ\r\n";
    text += "#b��Ա���ʣ�#d2W��ȯ+4Eð�ձ�+10��ʥ��(ת������)\r\n �������� 3���龰���ȸ�2��-�ƽ�VIPר������2��\r\n";
    text += "#b��Ա�������#d#v2340000##z2340000#x50#v5064000##z5064000#x50\r\n#v4031217#(��ѡGM��)x20#v2900019#(�漴����)x2#v1112673#(����100)x1\r\n#v5062000##z5062000#x30#v1112786#(����800)x1#v3700070##z3700070#x1\r\n#v3010508##z3010508#x1#v1003697##z1003697#x1\r\n#v1112139##z1112139##v1112246##z1112246#\r\n#v3010410##v3010409##v3010075##v3010073##v3010069##v3010031##v3010032##v3010033#\r\n";
    text += "#g=================================================#k\r\n";

    text += "#r#e��Ա5(��ʯ)#n#k-120000���ѱ�\r\n";
    text += "#b��Ա���ܣ�#d#r1.#k��Ա���и���������ʾ,��������\r\n����������#r2.#k���������ʼҷ���#r(106�汾)#k\r\n����������#r3.#kÿ�����������ȫ����100\r\n����������#r4.#kÿ���ҡVIP�齱��3��\r\n����������#r5.#kÿ���漴��ȡ140װ��2��(ȫ����100-200)\r\n����������#r6.#k�г��屶�ݵ���Ϊ\r\n����������#r7.#kר��������ͼ\r\n����������#r8.#kÿ���������ת������20��\r\n";
    text += "#b��Ա���ʣ�#d4W��ȯ+10Eð�ձ�+15��ʥ��(ת������)\r\n �������� 3���龰���ȸ�4��-��ʯVIPר������2��\r\n";
    text += "#b��Ա�������#d#v2340000##z2340000#x100#v5064000##z5064000#x100\r\n#v4031217#(��ѡGM��)x40#v2900019#(�漴����)x2#v1112673#(����100)x1\r\n#v5062000##z5062000#x30#v1112785#(����1000)x1#v3700069##z3700069#x1\r\n#v3010507##z3010507#x1#v1003696##z1003696#x1\r\n#v1112138##z1112138##v1112245##z1112245#\r\n#v3010410##v3010409##v3010075##v3010073##v3010069##v3010030##v3010029##v3010031##v3010032##v3010033#\r\n";
    cm.sendOkS(text,3);
    cm.dispose();
}

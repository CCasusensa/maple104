importPackage(net.sf.odinms.server.maps);

var status = 0;
var qty = -1;


//�����
var itemget = new Array(1092022, 1002743, 1102040, 1102041, 1102042, 1102043, 1302013, 1302021, 1302024, 1302049, 1312002, 1312012, 1322009, 1332032, 1332053, 1432013);
//ͼ��
var itemtx = new Array(1202027, 1202031, 1202035, 1202039);

//ͼ����Ҫ��Ʒ
var needthingtx = new Array(

Array(Array(4031996, 1), Array(4007000, 50), Array(4001126, 100)),

Array(Array(4031996, 1), Array(4007000, 50), Array(4001126, 100)),

Array(Array(4031996, 1), Array(4007000, 50), Array(4001126, 100)),

Array(Array(4031996, 1), Array(4007000, 50), Array(4001126, 100))

);

//ͼ��
var itemtx1 = new Array(1202026, 1202030, 1202034, 1202038);

//ͼ����Ҫ��Ʒ
var needthingtx1 = new Array(

Array(Array(4031995, 1), Array(4007001, 50), Array(4001126, 200)),

Array(Array(4031995, 1), Array(4007001, 50), Array(4001126, 200)),

Array(Array(4031995, 1), Array(4007001, 50), Array(4001126, 200)),

Array(Array(4031995, 1), Array(4007001, 50), Array(4001126, 200))

);

//ͼ��
var itemtx2 = new Array(1202027, 1202031, 1202035, 1202039);

//ͼ����Ҫ��Ʒ
var needthingtx2 = new Array(

Array(Array(4031994, 1), Array(4007004, 50), Array(4001126, 300)),

Array(Array(4031994, 1), Array(4007004, 50), Array(4001126, 300)),

Array(Array(4031994, 1), Array(4007004, 50), Array(4001126, 300)),

Array(Array(4031994, 1), Array(4007004, 50), Array(4001126, 300))

);


//�������Ҫ��Ʒ
var needthing = new Array(

Array(Array(4000169, 200), Array(4000188, 200), Array(4000187, 200), Array(4001126, 500), Array(4033220, 1)),

Array(Array(4032312, 300), Array(4000059, 300), Array(4000169, 400), Array(4000188, 500), Array(4000187, 300), Array(4001126, 1000), Array(4033220, 3)),

Array(Array(4000059, 300), Array(4000169, 300), Array(4000188, 300), Array(4000187, 300), Array(4001126, 800), Array(4033220, 2)),

Array(Array(4000059, 500), Array(4000169, 500), Array(4000188, 500), Array(4000187, 500), Array(4001126, 1500), Array(4033220, 5)),

Array(Array(4000059, 300), Array(4000169, 300), Array(4000188, 300), Array(4000187, 300), Array(4001126, 800), Array(4033220, 2)),

Array(Array(4000059, 300), Array(4000169, 300), Array(4000188, 300), Array(4000187, 300), Array(4001126, 800), Array(4033220, 2)),

Array(Array(4000169, 100), Array(4000188, 100), Array(4000187, 200), Array(4001126, 500), Array(4033220, 1)),

Array(Array(4000169, 100), Array(4000188, 150), Array(4000187, 200), Array(4001126, 500), Array(4033220, 1)),

Array(Array(4000169, 200), Array(4000188, 250), Array(4000187, 300), Array(4001126, 800), Array(4033220, 2)),

Array(Array(4032312, 300), Array(4000059, 500), Array(4000169, 300), Array(4000188, 300), Array(4001126, 1000), Array(4033220, 3)),

Array(Array(4000169, 100), Array(4000188, 100), Array(4000187, 100), Array(4001126, 500), Array(4033220, 1)),

Array(Array(4000169, 50), Array(4000188, 80), Array(4000187, 150), Array(4001126, 500), Array(4033220, 1)),

Array(Array(4000169, 50), Array(4000188, 50), Array(4000187, 70), Array(4001126, 500), Array(4033220, 1)),

Array(Array(4000169, 300), Array(4000188, 400), Array(4000187, 400), Array(4001126, 800), Array(4033220, 2)),

Array(Array(4000169, 330), Array(4000188, 280), Array(4000187, 350), Array(4001126, 1000), Array(4033220, 3)),

Array(Array(4000169, 300), Array(4000188, 300), Array(4000187, 450), Array(4001126, 800), Array(4033220, 2))

);





//������
var itemgetqc = new Array(
2340000, 2040807, 2040303, 2040506, 2040710, 2043003, 2043303, 2043703, 2043803, 2044003, 2044019, 2044303, 2044403, 2044503, 2044603, 2044703, 2044815, 2044908);

//������Ҫ��ƷArray(4004000,5),
var needthingqc = new Array(

Array(Array(4004000, 20), Array(4004001, 20), Array(4004002, 20), Array(4004003, 20), Array(4033220, 1)),

Array(Array(4004000, 20), Array(4004001, 20), Array(4004002, 20), Array(4004003, 20), Array(2040805, 1), Array(2040804, 1), Array(4033220, 1)),

Array(Array(4004000, 20), Array(4004001, 20), Array(4004002, 20), Array(4004003, 20), Array(2040302, 1), Array(2040301, 1), Array(4033220, 1)),

Array(Array(4004000, 20), Array(4004001, 20), Array(4004002, 20), Array(4004003, 20), Array(2040502, 1), Array(2040501, 1), Array(4033220, 1)),

Array(Array(4004000, 20), Array(4004001, 20), Array(4004002, 20), Array(4004003, 20), Array(2040705, 1), Array(2040704, 1), Array(4033220, 1)),

Array(Array(4004000, 20), Array(4004001, 20), Array(4004002, 20), Array(4004003, 20), Array(2043002, 1), Array(2043001, 1), Array(4033220, 1)),

Array(Array(4004000, 20), Array(4004001, 20), Array(4004002, 20), Array(4004003, 20), Array(2043302, 1), Array(2043301, 1), Array(4033220, 1)),

Array(Array(4004000, 20), Array(4004001, 20), Array(4004002, 20), Array(4004003, 20), Array(2043702, 1), Array(2043701, 1), Array(4033220, 1)),

Array(Array(4004000, 20), Array(4004001, 20), Array(4004002, 20), Array(4004003, 20), Array(2043802, 1), Array(2043801, 1), Array(4033220, 1)),

Array(Array(4004000, 20), Array(4004001, 20), Array(4004002, 20), Array(4004003, 20), Array(2044002, 1), Array(2044001, 1), Array(4033220, 1)),

Array(Array(4004000, 20), Array(4004001, 20), Array(4004002, 20), Array(4004003, 20), Array(2044014, 1), Array(2044012, 1), Array(4033220, 1)),

Array(Array(4004000, 20), Array(4004001, 20), Array(4004002, 20), Array(4004003, 20), Array(2044302, 1), Array(2044301, 1), Array(4033220, 1)),

Array(Array(4004000, 20), Array(4004001, 20), Array(4004002, 20), Array(4004003, 20), Array(2044402, 1), Array(2044401, 1), Array(4033220, 1)),

Array(Array(4004000, 20), Array(4004001, 20), Array(4004002, 20), Array(4004003, 20), Array(2044502, 1), Array(2044501, 1), Array(4033220, 1)),

Array(Array(4004000, 20), Array(4004001, 20), Array(4004002, 20), Array(4004003, 20), Array(2044602, 1), Array(2044601, 1), Array(4033220, 1)),

Array(Array(4004000, 20), Array(4004001, 20), Array(4004002, 20), Array(4004003, 20), Array(2044702, 1), Array(2044701, 1), Array(4033220, 1)),

Array(Array(4004000, 20), Array(4004001, 20), Array(4004002, 20), Array(4004003, 20), Array(2044802, 1), Array(2044801, 1), Array(4033220, 1)),

Array(Array(4004000, 20), Array(4004001, 20), Array(4004002, 20), Array(4004003, 20), Array(2044902, 1), Array(2044901, 1), Array(4033220, 1)));




//������
var itemgetyz = new Array(3010006, 3010007, 3010008, 3010009, 3010010, 3010016, 3010017, 3010018, 3010024, 3010025, 3010051, 3010052);

//��������Ҫ��Ʒ
var needthingyz = new Array(

Array(Array(4000132, 100), Array(4000282, 130), Array(4003005, 200), Array(4001126, 400), Array(4033220, 1)),

Array(Array(4000132, 300), Array(4000282, 380), Array(4003005, 400), Array(4001126, 500), Array(4033220, 2)),

Array(Array(4000132, 300), Array(4000282, 380), Array(4003005, 400), Array(4001126, 500), Array(4033220, 2)),

Array(Array(4000132, 300), Array(4000282, 380), Array(4003005, 400), Array(4000471, 400), Array(4001126, 1000), Array(4033220, 3)),

Array(Array(4000132, 300), Array(4000282, 300), Array(4003005, 300), Array(4001126, 500), Array(4033220, 2)),

Array(Array(4000132, 300), Array(4000282, 300), Array(4003005, 300), Array(4001126, 500), Array(4033220, 2)),

Array(Array(4000132, 300), Array(4000282, 300), Array(4003005, 300), Array(4001126, 500), Array(4033220, 2)),

Array(Array(4000132, 150), Array(4000282, 200), Array(4003005, 200), Array(4001126, 400), Array(4033220, 1)),

Array(Array(4000132, 100), Array(4000282, 100), Array(4003005, 150), Array(4001126, 250), Array(4033220, 1)),

Array(Array(4000132, 150), Array(4000282, 200), Array(4003005, 200), Array(4001126, 400), Array(4033220, 2)),

Array(Array(4000132, 300), Array(4000282, 380), Array(4003005, 400), Array(4000471, 400), Array(4001126, 750), Array(4033220, 2)),

Array(Array(4000132, 300), Array(4000282, 380), Array(4003005, 400), Array(4000471, 400), Array(4001126, 750), Array(4033220, 2))
);




function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (status == 0 && mode == 0) {
            cm.dispose();
            return;
        } else if (status >= 0 && mode == 0) {
            cm.sendOk("�´������Ҫ����װ����������Ŷ!");
            cm.dispose();
            return;
        }
        if (mode == 1) status++;
        else status--;



        if (status == 0) {
            cm.sendSimple("��������װ����?�����Ҳ���ÿ�춼�ܰ�ʱ����,����.������������װ�����ܷ������벻���ı仯����,����˵#b��������#k,����Ҳ��һ�����ʷ���ʧ�ܡ�ʧ��ʧ���������~\r\n\r\n#L0##b�����������#l\r\n#L2#������������#l\r\n#L1#������������#l\r\n#L3#��������ͼ��[ľ]\r\n#L4#��������ͼ��[��]\r\n#L5#��������ͼ��[��]");


        } else if (status == 1) {
            if (selection == 0) {
                status = 3;
                var smed = "";
                for (var i = 0; i < itemget.length; i++) {
                    smed += "\r\n#L" + i + "##b#z" + itemget[i] + "##l";
                }
                cm.sendSimple("����������Ϊ�����������:" + smed);


            } else if (selection == 1) {
                status = 2;
                var smed = "";
                for (var i = 0; i < itemgetqc.length; i++) {
                    smed += "\r\n#L" + i + "##b#z" + itemgetqc[i] + "##l";
                }
                cm.sendSimple("����������Ϊ�������ľ���:" + smed);




            } else if (selection == 2) {
                status = 6;
                var smed = "";
                for (var i = 0; i < itemgetyz.length; i++) {
                    smed += "\r\n#L" + i + "##b#z" + itemgetyz[i] + "##l";
                }
                cm.sendSimple("����������Ϊ������������:\r\n����ÿ�ܶ������һ��Ӵ" + smed);

            } else if (selection == 3) {
                status = 9;
                var smed = "";
                for (var i = 0; i < itemtx.length; i++) {
                    smed += "\r\n#L" + i + "##b#z" + itemtx[i] + "##l";
                }
                cm.sendSimple("����������Ϊ��������ͼ��:\r\nľͼ��������������Ϊȫ����(10~50)" + smed);
            } else if (selection == 4) {
                status = 12;
                var smed = "";
                for (var i = 0; i < itemtx1.length; i++) {
                    smed += "\r\n#L" + i + "##b#z" + itemtx1[i] + "##l";
                }
                cm.sendSimple("����������Ϊ��������ͼ��:\r\nľͼ��������������Ϊȫ����(20~50)" + smed);
            } else if (selection == 5) {
                status = 15;
                var smed = "";
                for (var i = 0; i < itemtx2.length; i++) {
                    smed += "\r\n#L" + i + "##b#z" + itemtx2[i] + "##l";
                }
                cm.sendSimple("����������Ϊ��������ͼ��:\r\nľͼ��������������Ϊȫ����(30~50)" + smed);
            }


        } else if (status == 2) {
            if (cm.getMeso() < 1500) {
                cm.sendNext("���Һ��񲻹��ɣ���׬��Ǯ�����ɡ�����԰��㴩���·��������������ں��ߴ��ԣ����������ҡ���׬Ǯ�İ취�ܶ�ѽ��");
                cm.dispose();
            } else {
                cm.gainMeso(-1500);
                cm.getChar().saveLocation(SavedLocationType.FLORINA);
                cm.warp(110000000, 0);
                cm.dispose();
            }



        } else if (status == 3) {
            status = 5;
            var prompt = "";
            prompt += "#v" + itemgetqc[selection] + "##b#z" + itemgetqc[selection] + "##k������Ҫ��";
            prompt += "\r\n\r\n";
            for (var m = 0; m < needthingqc[selection].length; m++) {
                prompt += " #v" + needthingqc[selection][m][0] + "##z" + needthingqc[selection][m][0] + "# #b" + needthingqc[selection][m][1] + " #k��\r\n";
            }
            prompt += "\r\n#v4033220##z4033220#��ÿ��Сʱ����ս��������Ӵ\r\nȷ���ռ�����������Ʒ��";
            qty = selection;
            cm.sendYesNo(prompt);

        } else if (status == 5) {
            var prompt = "";
            var complete = true;
            for (var i = 0; i < needthing[qty].length; i++) {
                if (!cm.haveItem(needthing[qty][i][0], needthing[qty][i][1])) {
                    complete = false;
                }
            }
            if (!complete || !cm.canHold(itemgetqc[qty])) {
                prompt += "����ȷ������Ҫ����Ʒ�򱳰������������пռ䡣";
            } else {
                for (var i = 0; i < needthing[qty].length; i++) {
                    cm.gainItem(needthing[qty][i][0], -needthing[qty][i][1]);
                }
                cm.gainItem(itemget[qty], 1);
                prompt += "�ɹ���ȡ#b:#z" + itemget[qty] + "#.";
            }
            cm.sendOk(prompt);
            cm.dispose();

        } else if (status == 10) {
            status = 11;
            var prompt = "";
            prompt += "#v" + itemtx[selection] + "##b#z" + itemtx[selection] + "##k10~50ȫ����������Ҫ��";
            prompt += "\r\n\r\n";
            for (var m = 0; m < needthingtx[selection].length; m++) {
                prompt += " #v" + needthingtx[selection][m][0] + "##z" + needthingtx[selection][m][0] + "# #b" + needthingtx[selection][m][1] + " #k��\r\n\r\n";
            }
            prompt += "100��Ϊ��(�����г�ÿ��������)\r\nȷ���ռ�����������Ʒ��";
            qty1 = selection;
            cm.sendYesNo(prompt);

        } else if (status == 12) {
            var prompt = "";
            var complete = true;
            for (var m = 0; m < needthingtx[qty1].length; m++) {
                if (!cm.haveItem(needthingtx[qty1][m][0], needthingtx[qty1][m][1])) {
                    complete = false;
                }
            }
            if (!complete || !cm.canHold(needthingtx[qty1]) || cm.getXw() < 100) {
                prompt += "����ȷ������Ҫ����Ʒ�򱳰������������пռ���㹻��������";
            } else {
                for (var i = 0; i < needthingtx[qty1].length; m++) {
                    cm.gainItem(needthingtx[qty1][m][0], -needthingtx[qty1][m][1]);
                }
                randxlslot = Math.floor(Math.random() * 40) + 10;
                var ii = Packages.server.MapleItemInformationProvider.getInstance();
                var type = Packages.constants.GameConstants.getInventoryType(itemtx[qty1]); //ñ��
                var toDrop = ii.randomizeStats(ii.getEquipById(itemtx[qty1])).copy(); // ����һ��Equip��
                toDrop.setStr(randxlslot); //װ������
                toDrop.setDex(randxlslot); //װ������
                toDrop.setInt(randxlslot); //װ������
                toDrop.setLuk(randxlslot); //װ������
                toDrop.setMatk(randxlslot);
                toDrop.setWatk(randxlslot);
                cm.getPlayer().getInventory(type).addItem(toDrop); //�����װ���������
                cm.getC().getSession().write(Packages.tools.MaplePacketCreator.addInventorySlot(type, toDrop)); //ˢ�±���
                cm.setXw(cm.getXw() - 100);
                cm.worldMessage("��ͼ��ϵͳ������ϲ" + cm.getChar().getName() + "�����г����紦������ͼ��[ͭ]");
                prompt += "�ɹ���ȡ#b:#z" + itemtx[qty1] + "#.";
            }
            cm.sendOk(prompt);
            cm.dispose();

        } else if (status == 13) {
            status = 14;
            var prompt = "";
            prompt += "#v" + itemtx1[selection] + "##b#z" + itemtx1[selection] + "##k20~50ȫ����������Ҫ��";
            prompt += "\r\n\r\n";
            for (var m = 0; m < needthingtx1[selection].length; m++) {
                prompt += " #v" + needthingtx1[selection][m][0] + "##z" + needthingtx1[selection][m][0] + "# #b" + needthingtx1[selection][m][1] + " #k��\r\n200��Ϊ��(�����г�ÿ��������)\r\n";
            }
            prompt += "\r\nȷ���ռ�����������Ʒ��";
            qty = selection;
            cm.sendYesNo(prompt);

        } else if (status == 15) {
            var prompt = "";
            var complete = true;
            for (var i = 0; i < needthingtx1[qty].length; i++) {
                if (!cm.haveItem(needthingtx1[qty][i][0], needthingtx1[qty][i][1])) {
                    complete = false;
                }
            }
            if (!complete || !cm.canHold(itemtx1[qty]) || cm.getXw() < 200) {
                prompt += "����ȷ������Ҫ����Ʒ�򱳰������������пռ���㹻��������";
            } else {
                for (var i = 0; i < needthingtx1[qty].length; i++) {
                    cm.gainItem(needthingtx1[qty][i][0], -needthingtx1[qty][i][1]);
                }
                randxlslot = Math.floor(Math.random() * 30) + 20;
                var ii = Packages.server.MapleItemInformationProvider.getInstance();
                var type = Packages.constants.GameConstants.getInventoryType(itemtx1[qty]); //ñ��
                var toDrop = ii.randomizeStats(ii.getEquipById(itemtx1[qty])).copy(); // ����һ��Equip��
                toDrop.setStr(randxlslot); //װ������
                toDrop.setDex(randxlslot); //װ������
                toDrop.setInt(randxlslot); //װ������
                toDrop.setLuk(randxlslot); //װ������
                toDrop.setMatk(randxlslot);
                toDrop.setWatk(randxlslot);
                cm.getPlayer().getInventory(type).addItem(toDrop); //�����װ���������
                cm.getC().getSession().write(Packages.tools.MaplePacketCreator.addInventorySlot(type, toDrop)); //ˢ�±���
                cm.setXw(cm.getXw() - 200);
                cm.worldMessage("��ͼ��ϵͳ������ϲ" + cm.getChar().getName() + "�����г����紦������ͼ��[��]");
                prompt += "�ɹ���ȡ#b:#z" + itemtx1[qty] + "#.";
            }
            cm.sendOk(prompt);
            cm.dispose();

        } else if (status == 16) {
            status = 17;
            var prompt = "";
            prompt += "#v" + itemtx2[selection] + "##b#z" + itemtx2[selection] + "##k30~50ȫ����������Ҫ��";
            prompt += "\r\n\r\n";
            for (var m = 0; m < needthingtx2[selection].length; m++) {
                prompt += " #v" + needthingtx2[selection][m][0] + "##z" + needthingtx2[selection][m][0] + "# #b" + needthingtx2[selection][m][1] + " #k��\r\n300��Ϊ��(�����г�ÿ��������)\r\n";
            }
            prompt += "\r\nȷ���ռ�����������Ʒ��";
            qty = selection;
            cm.sendYesNo(prompt);

        } else if (status == 18) {
            var prompt = "";
            var complete = true;
            for (var i = 0; i < needthingtx2[qty].length; i++) {
                if (!cm.haveItem(needthingtx2[qty][i][0], needthingtx2[qty][i][1])) {
                    complete = false;
                }
            }
            if (!complete || !cm.canHold(itemtx2[qty]) || cm.getXw() < 300) {
                prompt += "����ȷ������Ҫ����Ʒ�򱳰������������пռ���㹻��������";
            } else {
                for (var i = 0; i < needthingtx2[qty].length; i++) {
                    cm.gainItem(needthingtx2[qty][i][0], -needthingtx2[qty][i][1]);
                }
                randxlslot = Math.floor(Math.random() * 20) + 30;
                var ii = Packages.server.MapleItemInformationProvider.getInstance();
                var type = Packages.constants.GameConstants.getInventoryType(itemtx2[qty]); //ñ��
                var toDrop = ii.randomizeStats(ii.getEquipById(itemtx2[qty])).copy(); // ����һ��Equip��
                toDrop.setStr(randxlslot); //װ������
                toDrop.setDex(randxlslot); //װ������
                toDrop.setInt(randxlslot); //װ������
                toDrop.setLuk(randxlslot); //װ������
                toDrop.setMatk(randxlslot);
                toDrop.setWatk(randxlslot);
                cm.getPlayer().getInventory(type).addItem(toDrop); //�����װ���������
                cm.getC().getSession().write(Packages.tools.MaplePacketCreator.addInventorySlot(type, toDrop)); //ˢ�±���
                cm.setXw(cm.getXw() - 300);
                cm.worldMessage("��ͼ��ϵͳ������ϲ" + cm.getChar().getName() + "�����г����紦������ͼ��[��]");
                prompt += "�ɹ���ȡ#b:#z" + itemtx2[qty] + "#.";
            }
            cm.sendOk(prompt);
            cm.dispose();



        } else if (status == 4) {
            var prompt = "";
            prompt += "#v" + itemget[selection] + "##b#z" + itemget[selection] + "##k������Ҫ��";
            prompt += "\r\n\r\n";
            for (var m = 0; m < needthing[selection].length; m++) {
                prompt += " #v" + needthing[selection][m][0] + "##z" + needthing[selection][m][0] + "# #b" + needthing[selection][m][1] + " #k��\r\n";
            }
            prompt += "\r\n#v4033220##z4033220#��ÿ��Сʱ����ս��������Ӵ\r\nȷ���ռ�����������Ʒ��";
            qty = selection;
            cm.sendYesNo(prompt);



        } else if (status == 6) {
            var prompt = "";
            var complete = true;
            for (var i = 0; i < needthingqc[qty].length; i++) {
                if (!cm.haveItem(needthingqc[qty][i][0], needthingqc[qty][i][1])) {
                    complete = false;
                }
            }
            if (!complete || !cm.canHold(itemgetqc[qty])) {
                prompt += "����ȷ������Ҫ����Ʒ�򱳰������������пռ䡣";
            } else {
                for (var i = 0; i < needthingqc[qty].length; i++) {
                    cm.gainItem(needthingqc[qty][i][0], -needthingqc[qty][i][1]);
                }
                cm.gainItem(itemgetqc[qty], 1);
                prompt += "�ɹ���ȡ#b:#z" + itemgetqc[qty] + "#.";
            }
            cm.sendOk(prompt);
            cm.dispose();


        } else if (status == 7) {
            var prompt = "";
            prompt += "#v" + itemgetyz[selection] + "##b#z" + itemgetyz[selection] + "##k������Ҫ��";
            prompt += "\r\n\r\n";
            for (var m = 0; m < needthingyz[selection].length; m++) {
                prompt += " #v" + needthingyz[selection][m][0] + "##z" + needthingyz[selection][m][0] + "# #b" + needthingyz[selection][m][1] + " #k��\r\n";
            }
            prompt += "\r\n#v4033220##z4033220#��ÿ��Сʱ����ս��������Ӵ\r\nȷ���ռ�����������Ʒ��";
            qty = selection;
            cm.sendYesNo(prompt);



        } else if (status == 8) {
            var prompt = "";
            var complete = true;
            for (var i = 0; i < needthingyz[qty].length; i++) {
                if (!cm.haveItem(needthingyz[qty][i][0], needthingyz[qty][i][1])) {
                    complete = false;
                }
            }
            if (!complete || !cm.canHold(itemgetyz[qty])) {
                prompt += "����ȷ������Ҫ����Ʒ�򱳰������������пռ䡣";
            } else {
                for (var i = 0; i < needthingyz[qty].length; i++) {
                    cm.gainItem(needthingyz[qty][i][0], -needthingyz[qty][i][1]);
                }
                cm.gainItem(itemgetyz[qty], 1);
                prompt += "�ɹ���ȡ#b:#z" + itemgetyz[qty] + "#.";
            }
            cm.sendOk(prompt);
            cm.dispose();


        }
    }
}
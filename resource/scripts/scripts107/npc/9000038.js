var status = 0;
var typed = 0;
var hairprice = 3000000;
var haircolorprice = 3000000;
var mhair = Array(30310, 30330, 30060, 30150, 30410, 30210, 30140, 30120, 30200, 30560, 30510, 30610, 30470, 31380, 30380, 33350, 33340, 32120, 34270, 33320, 33310, 33300, 33290, 33280, 33260, 33250, 33240, 33230, 34200, 33210, 33200, 33150, 34090, 33130, 33220, 33110, 33190, 33170, 33180, 33160, 33100);
var fhair = Array(31150, 31310, 31300, 31160, 31100, 31410, 31030, 31080, 31070, 31610, 31350, 31510, 31740, 31380, 31360, 31370, 32130, 34300, 34290, 34280, 33310, 33300, 33260, 34240, 34230, 34260, 34250, 34220, 34210, 31990, 34140, 34100, 34070, 34190, 34180, 34110, 34160, 34150, 33220);
var itemjuanold = new Array("2040006", "2040303", "2040506", "2040709", "2040710", "2040711", "2040806", "2043003", "2043103", "2043203", "2043303", "2043703", "2043803", "2044003", "2044019", "2044103", "2044203", "2044303", "2044403", "2044503", "2044603", "2044703", "2044815", "2044908", "2040811");
var itemjuan = new Array("2040600", "2340000", "2040006", "2040921", "2040303", "2040506", "2040709", "2040710", "2040711", "2040806", "2043003", "2043103", "2043203", "2043303", "2040804", "2043703", "2043803", "2044003", "2044019", "2044103", "2044203", "2044303", "2044403", "2044503", "2044603", "2044703", "2044815", "2044908", "2040811", "2043000", "2040025", "2040021", "2040101", "2040321", "2040338", "2040421", "2340000", "2040610", "2040626", "2040700", "2040524", "2040517", "2040814", "2040915", "2041013");

var itemtsid = new Array("1099003", "1532014", "1532014", "1532014", "1532014", "1532014", "1402073", "1462076", "1452058", "1302081", "1312037", "1322060", "1332073", "1332074", "1372044", "1382057", "1402046", "1412033", "1422037", "1432047", "1442063", "1452057", "1462050", "1472068", "1482023", "1492023", "1302059", "1312031", "1322052", "1402036", "1412026", "1422028", "1432038", "1442045", "1452044", "1462039", "1472051", "1472052", "1332050", "1302086", "1312038", "1322061", "1332075", "1332076", "1372045", "1382059", "1402047", "1412034", "1422038", "1432049", "1442067", "1452059", "1462051", "1472071", "1482024", "1492025", "1032025", "1032026", "1032027", "1032028", "1032035", "1032040", "1032047", "1002391", "1002419", "1002436", "1002455", "1002773", "1002794", "1522012", "1522056", "1362020");

var itemjb = new Array("1702155", "1702113", "1002888", "1002890", "1050019", "1072278", "1102065", "1702310", "1112100", "1002720", "1012131", "1002846", "1002839", "1002863", "1050152", "1051180", "1042104", "1042105", "1002566", "1052224", "1042142", "1041142", "1061148", "1052200", "1051131", "1112118", "1112228", "1112119", "1112229", "1112120", "1112230");
var itemjbcost = new Array("20", "20", "20", "20", "30", "30", "30", "30", "30", "50", "50", "50", "50", "50", "50", "60", "60", "60", "60", "60", "60", "60", "60", "80", "80", "80", "80", "80", "80", "80", "80");

var iii = Packages.server.MapleItemInformationProvider.getInstance();
var hairnew = Array();
var seltype = 0;

function start() {
    cm.sendSimpleS("Ŀǰ������ʱ��:#e" + cm.getHour() + "��" + cm.getMin() + "��" + cm.getSec() + "��#n   ����ǰ����Ϊ��:#r" + cm.getChar().getXw() + "#k��\r\n#b#L1#ʲô����Ϊ��?#l\r\n#L2#1.ʹ����Ϊ��齱#g[���Ѷ�:��]#b#l\r\n#L3#2.ʹ����Ϊ�㹺��سɾ���#g[���Ѷ�:��]#b#l\r\n#L4#3.ʹ����Ϊ���ȡ����װ��#r[���Ѷ�:��]#b#l\r\n#n#L6#4.��ս���������Ϊ��#r[���Ѷ�:��]#b\r\n#L9##e5.ʹ����Ϊ��������������100%�ɹ�#g[���Ѷ�:��]#r#l\r\n#L10##e6.ʹ����Ϊ��+��ȡ�������ӿ�����ʯ#g[���Ѷ�:��]#b#l\r\n#L11##e7.��Ծ���Ķ���û��˦?�����Ұ�,����ü�Ǯ#b#l", 2);
}

function action(mode, type, selection) {
    if (mode == -1) cm.dispose();
    else {
        if (mode == 0) {
            cm.dispose();
        } else status++;
        if (status == 1) {
            if (selection == 1) {
                cm.sendOk("#b��Ϊ��ϵͳ#k������Ϊ���ṩ��һ��������ս�Ե��淨.ÿ��ͨ��������,��ս����,վ���г��ݵ�������,��������˵.ֻҪ�����ֳ����߻�����������.�Ǻ����ɾ��ܵõ��ܶ����Ϊ��.����ӵ��һ������Ϊ���.��������������г齱.�Լ���ȡװ��.����سɾ��.");
                cm.dispose();
                return;
            }
            if (selection == 2) {
                typed = 1;
                cm.sendSimple("hi~�ҵ�����,��������㹻����Ϊ������������ܳ鵽�õĽ�ƷŶ.�Ҽ򵥵�˵��һ�°�,ʹ��50����Ϊ����Գ鵽�������,��ף����,�سɾ�.ʹ��100����Ϊ����Գ鵽100-300ȫ���Ե�װ��,ʹ��200����Ϊ����Գ鵽100-500ȫ���Ե�װ��,ʹ��400����Ϊ����Գ鵽100-800ȫ���Ե�װ��.����.��������.�齱���Ĳ�һ��.ƽ���ĶԴ�.Ҳ��.�����������������.#rVer105�Ѽ���˫���Ӱְҵװ��#b\r\n#L1#ʹ��50����Ϊ���������#l\r\n#L2#ʹ��100����Ϊ���100-150ȫ����װ��#l\r\n#L3#ʹ��200����Ϊ���100-200ȫ����װ��#l\r\n#L4#ʹ��400����Ϊ���100-250ȫ����װ��#l");
            }
            if (selection == 3) {
                typed = 2;
                var selStr = "#rע��:1�űسɾ���=100����Ϊ��.#b";
                for (var i = 0; i < itemjuanold.length; i++) {
                    if (i % 2 == 0) {
                        selStr += "\r\n#b#L" + i + "##z" + itemjuanold[i] + "##l";
                    } else {
                        selStr += "#b#L" + i + "##z" + itemjuanold[i] + "##l";
                    }
                }
                cm.sendSimple(selStr);
            }
            if (selection == 4) {
                typed = 3;
                cm.sendSimpleS("��ս����.���ռ�װ��.������Ʒ���Ծ�Ϊ+100.\r\n#b#L1#��������[��Ҫ400����Ϊ��齱]#l\r\n#L2#���ն���[��Ҫ600����Ϊ��齱]#b#l\r\n#L3#���յ�׹[��Ҫ800����Ϊ��齱]#l\r\n#L4#���ս�ָ[��Ҫ1000����Ϊ��齱]#l\r\n\r\n#r#eע��:���Ͼ�Ϊ20%�Ļ��ʻ��.�����ԱΪ40%���ʻ��.", 2);
            }
            if (selection == 5) {
                cm.openNpc(9300010);
            }
            if (selection == 6) {
                cm.sendOk("Sorry.��ʱδ����.Ŀǰ�����Ϊ��ķ�ʽֻ��:\r\n#b1.վ���г�����Ϊ��.\r\n2.�򹤻�������֮��\r\n3.��ÿСʱ�Ļ��˺���");
                cm.dispose();
                return;
            }
            if (selection == 7) {
                typed = 4;
                var nldnow = Math.floor(cm.getChar().getgodpoint() / 10);
                cm.sendNext("#e#r10������=1����Ϊ��~#n#k����ǰ����������:#g" + cm.getChar().getgodpoint() + "#k��.\r\n��ȡ��,���ܵõ�:#b" + nldnow + "����Ϊ��#k.���Ƿ�Ҫ���ڻ�ȡ?");
            }
            if (selection == 8) {
                typed = 8;
                cm.sendNext("Ϊ�˷�ֹ��ҵĴ��ڣ������ر�������ÿ���˵���߹��������ޣ������Ҫ���������ߵĹ��������ޣ�������������ʹ����Ϊ������Ŷ�����Ƚ���һ�´�ҵ���߹���������Ĭ��ֵ:#d\r\n��ͨ���[VIP0]:���150��;\r\n������Ա[VIP1]:���190�򣻻ƽ��Ա[VIP2]:���250��\r\n�׽��Ա[VIP3]:���300�������Ա[VIP4]:���500��#b\r\n�е���ҿ���û����⵽ʲô��˼���������߹�����ָ������װ���ж�ã�������Ļ�Ա�ȼ�����ʼ��߹�����Ĭ��ֵ��Ϊ����д����Ϊ׼.\r\n#r��������Ϊ��ô�͵Ĺ����������ͻ����?���ϵ����һ����.");
            }
            if (selection == 9) { //����
                typed = 10;
                cm.sendNext("�뽫Ҫ������װ��#b����װ������һ��#k,��������#r100��#k��Ϊ��.�����װ��#d���#k�������ԣ�������ֵ��������������Ժò��þ����������Ʒ��.#e100%�ɹ�����һ���������#n��׼�����˵Ļ������һ����ʼ������.");
            }
            if (selection == 10) {
                typed = 11;
                cm.sendGetText("��������Ҫ���һ��������ӵ�����1��#z2430692#=�г���Ϊ50��");
            }
            if (selection == 11) {
                var text = "";
                typed = 12;
                text += "���ǲ��Ǿ�������Ϊ��鵽��ȫ����װ��ֱ�Ӷ�����?����ֱ�����̵�����һ˦?�ð�,����㲻����Ļ�������������,��Ȼ��,�����һ����һ���ü�Ǯ��.\r\n";
                text += "#b#L1#ʹ������װ����ľ����Ʊ10��(��ֵ1E)#l\r\n#L3#ʹ������װ������ֵ4000���ѱҵ���(��ɫ����3��#v4031944#)#l";
                cm.sendSimple(text);
            }
        } else if (status == 2) {
            if (typed == 10) {
                var ii = Packages.server.MapleItemInformationProvider.getInstance();
                var item = cm.getInventory(1).getItem(1);
                if (item != null) {
                    if (ii.isCash(item.getItemId()) == true) {
                        cm.sendOk("�̳���Ʒ�ݲ�֧��.");
                        cm.dispose();
                    } else {
                        if (cm.getChar().getXw() >= 100) {
                            cm.getChar().setXw(cm.getChar().getXw() - 100);
                            var randx = Math.floor(Math.random() * 12) + 1;
                            var randy = Math.floor(Math.random() * 5) + 1;
                            var itemd = cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy();
                            if (randx <= 2) {
                                itemd.setMdef(itemd.getMdef() * 1 + randy);
                                cm.sendOk("��ϲ�����������ɹ�.\r\n���װ������һ����Ʒ��#v" + itemd.getItemId() + "#�ɹ���#rħ��#k������#r" + randy + "��#k����");
                            }
                            if (randx >= 3 && randx <= 5) {
                                itemd.setWdef(itemd.getWdef() * 1 + randy);
                                cm.sendOk("��ϲ�����������ɹ�.\r\n���װ������һ����Ʒ��#v" + itemd.getItemId() + "#�ɹ���#r���#k������#r" + randy + "��#k����");
                            }
                            if (randx == 6) {
                                itemd.setStr(itemd.getStr() * 1 + randy);
                                cm.sendOk("��ϲ�����������ɹ�.\r\n���װ������һ����Ʒ��#v" + itemd.getItemId() + "#�ɹ���#r����#k������#r" + randy + "��#k����");
                            }
                            if (randx == 7) {
                                itemd.setDex(itemd.getDex() * 1 + randy);
                                cm.sendOk("��ϲ�����������ɹ�.\r\n���װ������һ����Ʒ��#v" + itemd.getItemId() + "#�ɹ���#r����#k������#r" + randy + "��#k����");
                            }
                            if (randx == 8) {
                                itemd.setInt(itemd.getInt() * 1 + randy);
                                cm.sendOk("��ϲ�����������ɹ�.\r\n���װ������һ����Ʒ��#v" + itemd.getItemId() + "#�ɹ���#r����#k������#r" + randy + "��#k����");
                            }
                            if (randx == 9) {
                                itemd.setLuk(itemd.getLuk() * 1 + randy);
                                cm.sendOk("��ϲ�����������ɹ�.\r\n���װ������һ����Ʒ��#v" + itemd.getItemId() + "#�ɹ���#r����#k������#r" + randy + "��#k����");
                            }
                            if (randx == 10) {
                                itemd.setWatk(itemd.getWatk() * 1 + randy);
                                cm.sendOk("��ϲ�����������ɹ�.\r\n���װ������һ����Ʒ��#v" + itemd.getItemId() + "#�ɹ���#r������#k������#r" + randy + "��#k����");
                            }
                            if (randx >= 11) {
                                itemd.setMatk(itemd.getMatk() * 1 + randy);
                                cm.sendOk("��ϲ�����������ɹ�.\r\n���װ������һ����Ʒ��#v" + itemd.getItemId() + "#�ɹ���#rħ������#k������#r" + randy + "��#k����");
                            }
                            Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
                            Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), itemd, false);
                            cm.worldMessage("��" + cm.getChar().getName() + "���ɹ�ʹ��100��Ϊ����[NPC������Ա����]���������ɹ���������.");
                        } else {
                            cm.sendOk("û���㹻����Ϊ��.");
                        }
                    }
                } else {
                    cm.sendOk("װ������һ��û����Ʒ���޷�����.");
                }
                cm.dispose();
                return;
            }
            if (typed == 8) {
                typed = 9;
                cm.sendSimpleS("ע�⣺Ϊ��ֹ���ݿ����ÿ���24��00�֣�������ҹ��������޽���ص�Ĭ��״̬.ͬʱÿ����ҹ����������Ϊ21��!#b\r\n#L0#�鿴�ҵ�ǰ�Ĺ�������ֵ#l\r\n#L1#����100�򹥻����ޣ���Ҫ100����Ϊ�㣩#l\r\n#L2#����500�򹥻����ޣ���Ҫ200����Ϊ�㣩#l\r\n#L3#����1000�򹥻����ޣ���Ҫ300����Ϊ�㣩#l\r\n#L4#����1�ڹ������ޣ���Ҫ500����Ϊ�㣩#b#l\r\n#L5##r����1�ڹ������ޣ���Ҫ2�����ѱң�#l", 2);
            }
            if (typed == 12) {
                seltype = selection;
                typed = 13;
                if (selection == 1) {
                    cm.sendNext("װ����ǰ�ĸ�����������ҵ�����װ��(װ���������,����������#r������140����#k),����������,����#r50%#k�Ļ��ʻ��10��ľҪ��Ʊ(��ֵ1E)!#r�����һ����ʼ����..");
                }
                if (selection == 2) {
                    cm.sendNext("��ɫ����2��#v4031946#�����Ʒ������#b[NPC��ҶĹ����]#k��ʹ��,ʹ��#b[NPC��ҶĹ����]#kװ������ȫ���Թ��ܿ�������ʡ2�����ѱ�(�ۻ���).\r\n���Ǻ�����?װ����ǰ�ĸ��������յ�����װ��(װ���������,����������#r������140����#k),����������,50%�ĳɹ�����,���ʧ��,ֻ��������װ��.#r�����һ����ʼ����..");
                }
                if (selection == 3) {
                    cm.sendNext("��ɫ����3��#v4031944#�����Ʒ������#b[ʷ�ٷ��ǲ�ɣ]#k��ʹ��,ʹ��#b[NPCʷ�ٷ��ǲ�ɣ]#k��������ȫ������Ʒ��������ʡ4000���ѱ�(�ۻ���).\r\n���Ǻ�����?װ����ǰ�ĸ��������յ�����װ��(װ���������,����������#r������140����#k),����������,50%�ĳɹ�����,���ʧ��,ֻ��������װ��.#r�����һ����ʼ����..");
                }
            }
            if (typed == 4) {
                var nldnow = Math.floor(cm.getChar().getgodpoint() / 10);
                if (nldnow >= 0) {
                    cm.getChar().setgodpoint(-cm.getChar().getgodpoint());
                    cm.getChar().setXw(cm.getChar().getXw() + nldnow);
                    cm.sendOk("��ϲ��,������#b" + nldnow + "����Ϊ��.");
                }
                cm.dispose();
                return;
            }
            if (typed == 3) {
                var randxlssss = Math.floor(Math.random() * 15) + 1;
                if (selection == 1) {
                    if (cm.getChar().getXw() >= 400) {
                        cm.getChar().setXw(cm.getChar().getXw() - 400);
                        if (randxlssss >= 2 && randxlssss <= 14) {
                            cm.sendOk("���������.ʲôҲû�еõ�..");
                        } else {
                            var ii = Packages.server.MapleItemInformationProvider.getInstance();
                            var type = Packages.constants.GameConstants.getInventoryType(1132085); //ñ��
                            var toDrop = ii.randomizeStats(ii.getEquipById(1132085)).copy(); // ����һ��Equip��
                            toDrop.setStr(100); //װ������
                            toDrop.setDex(100); //װ������
                            toDrop.setInt(100); //װ������
                            toDrop.setLuk(100); //װ������
                            toDrop.setHp(100);
                            toDrop.setMp(100);
                            cm.getPlayer().getInventory(type).addItem(toDrop); //�����װ���������
                            cm.getC().getSession().write(Packages.tools.MaplePacketCreator.addInventorySlot(type, toDrop)); //ˢ�±���
                            cm.sendOk("��ϲ���������[��������+100].");
                            cm.worldMessage("���[" + cm.getPlayer().getName() + "]�������Ǻñ���~�����[��������+100]~");
                        }
                    } else {
                        cm.sendOk("�Բ�����û��400��Ϊ��,ʧ�ܣ�");
                    }
                }
                if (selection == 2) {
                    if (cm.getChar().getXw() >= 600) {
                        cm.getChar().setXw(cm.getChar().getXw() - 600);
                        if (randxlssss >= 2 && randxlssss <= 14) {
                            cm.sendOk("���������.ʲôҲû�еõ�..");
                        } else {
                            var ii = Packages.server.MapleItemInformationProvider.getInstance();
                            var type = Packages.constants.GameConstants.getInventoryType(1032093); //ñ��
                            var toDrop = ii.randomizeStats(ii.getEquipById(1032093)).copy(); // ����һ��Equip��
                            toDrop.setStr(100); //װ������
                            toDrop.setDex(100); //װ������
                            toDrop.setInt(100); //װ������
                            toDrop.setLuk(100); //װ������
                            toDrop.setHp(100);
                            toDrop.setMp(100);
                            cm.getPlayer().getInventory(type).addItem(toDrop); //�����װ���������
                            cm.getC().getSession().write(Packages.tools.MaplePacketCreator.addInventorySlot(type, toDrop)); //ˢ�±���
                            cm.sendOk("��ϲ���������[���ն���+100]~");
                            cm.worldMessage("���[" + cm.getPlayer().getName() + "]�������Ǻñ���~�����[���ն���+100]~");
                        }
                    } else {
                        cm.sendOk("�Բ�����û��600��Ϊ��,����ʧ�ܣ�");
                    }
                }
                if (selection == 3) {
                    if (cm.getChar().getXw() >= 800) {
                        cm.getChar().setXw(cm.getChar().getXw() - 800);
                        if (randxlssss >= 2 && randxlssss <= 14) {
                            cm.sendOk("���������.ʲôҲû�еõ�..");
                        } else {
                            var ii = Packages.server.MapleItemInformationProvider.getInstance();
                            var type = Packages.constants.GameConstants.getInventoryType(1122104); //ñ��
                            var toDrop = ii.randomizeStats(ii.getEquipById(1122104)).copy(); // ����һ��Equip��
                            toDrop.setStr(100); //װ������
                            toDrop.setDex(100); //װ������
                            toDrop.setInt(100); //װ������
                            toDrop.setLuk(100); //װ������
                            toDrop.setHp(100);
                            toDrop.setMp(100);
                            cm.getPlayer().getInventory(type).addItem(toDrop); //�����װ���������
                            cm.getC().getSession().write(Packages.tools.MaplePacketCreator.addInventorySlot(type, toDrop)); //ˢ�±���
                            cm.sendOk("��ϲ���������[���յ�׹+100]~");
                            cm.worldMessage("���[" + cm.getPlayer().getName() + "]�������Ǻñ���~�����[���յ�׹+100]~");
                        }
                    } else {
                        cm.sendOk("�Բ�����û��800��Ϊ��,����ʧ�ܣ�");
                    }
                }
                if (selection == 4) {
                    if (cm.getChar().getXw() >= 1000) {
                        cm.getChar().setXw(cm.getChar().getXw() - 1000);
                        if (randxlssss >= 3 && randxlssss <= 14) {
                            cm.sendOk("���������.ʲôҲû�еõ�..");
                        } else {
                            var ii = Packages.server.MapleItemInformationProvider.getInstance();
                            var type = Packages.constants.GameConstants.getInventoryType(1112584); //ñ��
                            var toDrop = ii.randomizeStats(ii.getEquipById(1112584)).copy(); // ����һ��Equip��
                            toDrop.setStr(100); //װ������
                            toDrop.setDex(100); //װ������
                            toDrop.setInt(100); //װ������
                            toDrop.setLuk(100); //װ������
                            toDrop.setHp(100);
                            toDrop.setMp(100);
                            cm.getPlayer().getInventory(type).addItem(toDrop); //�����װ���������
                            cm.getC().getSession().write(Packages.tools.MaplePacketCreator.addInventorySlot(type, toDrop)); //ˢ�±���
                            cm.sendOk("��ϲ���������[���ս�ָ+100]~");
                            cm.worldMessage("���[" + cm.getPlayer().getName() + "]�������Ǻñ���~�����[���ս�ָ+100]~");
                        }
                    } else {
                        cm.sendOk("�Բ�����û��1000��Ϊ��,����ʧ�ܣ�");
                    }
                }
                cm.dispose();
                return;
            }
            if (typed == 11) {
                typed = 12;
                fee = cm.getText();
                fee1 = 50 * fee;
                cm.sendYesNo("��ȷ��Ҫ�һ� #r" + fee + "#k ����������?\r\n����Ҫ������#r" + fee1 + "�г���Ϊ");
            }
            if (typed == 2) {
                if (cm.getChar().getXw() >= 100) {
                    cm.gainItem(itemjuanold[selection], 1);
                    cm.getChar().setXw(cm.getChar().getXw() - 100);
                    cm.sendOk("��ϲ��������ɹ�.��ӭ�´�����.");
                } else {
                    cm.sendOk("�Բ�����û��100��Ϊ��,����ʧ�ܣ�");
                }
                cm.dispose();
                return;
            }
            if (typed == 1) {
                var ii = Packages.server.MapleItemInformationProvider.getInstance();
                if (selection == 1) {
                    var randx = Math.floor((Math.random() * itemjuan.length)) + 1;
                    var randxlslot = Math.floor(Math.random() * 2) + 1;
                    var itemids = 0;
                    for (var i = 0; i < itemjuan.length; i++) {
                        if (i + 1 == randx) {
                            itemids = itemjuan[i];
                        }
                    }
                    if (cm.getChar().getXw() >= 50) {
                        cm.getChar().setXw(cm.getChar().getXw() - 50);
                        cm.gainItem(itemids, randxlslot);
                        cm.worldMessage("���[" + cm.getPlayer().getName() + "]��NPC[������Ա����]���鵽��" + randxlslot + "��" + ii.getName(itemids) + "~");
                        cm.sendOk("��ϲ��,��� #b" + randxlslot + "#k �� #r#z" + itemids + "#.");
                    } else {
                        cm.sendOk("��û���㹻����Ϊ��.");
                    }
                    cm.dispose();
                    return;
                }
                var randxlslot = 0;
                if (selection == 2) {
                    randxlslot = Math.floor(Math.random() * 30) + 100;
                    if (cm.getChar().getXw() >= 100) {
                        cm.getChar().setXw(cm.getChar().getXw() - 100);
                    } else {
                        cm.sendOk("��û���㹻����Ϊ��.");
                        cm.dispose();
                        return;
                    }
                }
                if (selection == 3) {
                    randxlslot = Math.floor(Math.random() * 50) + 100;
                    if (cm.getChar().getXw() >= 200) {
                        cm.getChar().setXw(cm.getChar().getXw() - 200);
                    } else {
                        cm.sendOk("��û���㹻����Ϊ��.");
                        cm.dispose();
                        return;
                    }
                }
                if (selection == 4) {
                    randxlslot = Math.floor(Math.random() * 100) + 100;
                    if (cm.getChar().getXw() >= 400) {
                        cm.getChar().setXw(cm.getChar().getXw() - 400);
                    } else {
                        cm.sendOk("��û���㹻����Ϊ��.");
                        cm.dispose();
                        return;
                    }
                }
                var randx = Math.floor((Math.random() * itemtsid.length)) + 1;

                var itemids = 0;
                for (var i = 0; i < itemtsid.length; i++) {
                    if (i + 1 == randx) {
                        itemids = itemtsid[i];
                    }
                }
                if (itemids >= 1302000 && itemids <= 1702305) {
                    var ii = Packages.server.MapleItemInformationProvider.getInstance();
                    var type = Packages.constants.GameConstants.getInventoryType(itemids); //ñ��
                    var toDrop = ii.randomizeStats(ii.getEquipById(itemids)).copy(); // ����һ��Equip��
                    toDrop.setStr(randxlslot); //װ������
                    toDrop.setDex(randxlslot); //װ������
                    toDrop.setInt(randxlslot); //װ������
                    toDrop.setLuk(randxlslot); //װ������
                    toDrop.setMatk(randxlslot);
                    toDrop.setWatk(randxlslot);
                    cm.getPlayer().getInventory(type).addItem(toDrop); //�����װ���������
                    cm.getC().getSession().write(Packages.tools.MaplePacketCreator.addInventorySlot(type, toDrop)); //ˢ�±���
                } else {
                    var ii = Packages.server.MapleItemInformationProvider.getInstance();
                    var type = Packages.constants.GameConstants.getInventoryType(itemids); //ñ��
                    var toDrop = ii.randomizeStats(ii.getEquipById(itemids)).copy(); // ����һ��Equip��
                    toDrop.setStr(randxlslot); //װ������
                    toDrop.setDex(randxlslot); //װ������
                    toDrop.setInt(randxlslot); //װ������
                    toDrop.setLuk(randxlslot); //װ������
                    toDrop.setMatk(randxlslot);
                    toDrop.setWatk(randxlslot);
                    cm.getPlayer().getInventory(type).addItem(toDrop); //�����װ���������
                    cm.getC().getSession().write(Packages.tools.MaplePacketCreator.addInventorySlot(type, toDrop)); //ˢ�±���
                }
                cm.worldMessage("���[" + cm.getPlayer().getName() + "]��NPC[������Ա����]���鵽��ȫ����+" + randxlslot + "��" + ii.getName(itemids) + "~");
                cm.sendOk("��ϲ��,��� #bȫ����+" + randxlslot + "#k �� #r#z" + itemids + "#.");
                cm.dispose();
                return;
            }
        } else if (status == 3) {
            if (typed == 13) {
                for (var i = 1; i <= 5; i++) {
                    if (cm.getInventory(i) < 1) {
                        cm.sendOk("������Ӧ�������а������ճ�һ��");
                        cm.dispose();
                        return;
                    }
                }
                checkitem();
            }
            if (typed == 12) {
                meso1 = cm.getChar().getMeso();
                if (fee <= 0 || fee > 100) {
                    cm.sendOk("һ�����һ�100��");
                    cm.dispose();
                } else if (cm.getChar().getXw() < fee1 && cm.getSpace(2) > 1) {
                    cm.sendOk("��Ǹ����û�㹻���г���Ϊ\r\n������ı���û�ո�");
                    cm.dispose();
                } else {
                    cm.gainItem(2430692, +fee);
                    cm.getPlayer().setXw(cm.getPlayer().getXw() - fee1);
                    cm.sendOk("�һ��ɹ�.");
                    cm.dispose();
                }
                if (typed == 9) {
                    if (selection == 0) {
                        cm.sendNext("��Ŀǰ�Ĺ����������ֵΪ:#r" + cm.getChar().getpgmax() + "\r\n#b������������������ֵ����ע�ⲻҪ����21��.");
                    }
                    if (selection == 1) {
                        if (cm.getChar().getXw() >= 100) {
                            cm.getChar().setpgmax(1000000);
                            cm.getChar().setXw(cm.getChar().getXw() - 100);
                            cm.sendOk("��ϲ���ɹ��������������ֵ����100����Ŀǰ����߹�������ֵΪ��#r" + cm.getChar().getpgmax());
                        } else {
                            cm.sendOk("�����Ϊ�㲻�㣬����Ŭ���ɡ�");
                        }
                    }
                    if (selection == 2) {
                        if (cm.getChar().getXw() >= 200) {
                            cm.getChar().setpgmax(5000000);
                            cm.getChar().setXw(cm.getChar().getXw() - 200);
                            cm.sendOk("��ϲ���ɹ��������������ֵ����500����Ŀǰ����߹�������ֵΪ��#r" + cm.getChar().getpgmax());
                        } else {
                            cm.sendOk("�����Ϊ�㲻�㣬����Ŭ���ɡ�");
                        }
                    }
                    if (selection == 3) {
                        if (cm.getChar().getXw() >= 300) {
                            cm.getChar().setpgmax(10000000);
                            cm.getChar().setXw(cm.getChar().getXw() - 300);
                            cm.sendOk("��ϲ���ɹ��������������ֵ����1000����Ŀǰ����߹�������ֵΪ��#r" + cm.getChar().getpgmax());
                        } else {
                            cm.sendOk("�����Ϊ�㲻�㣬����Ŭ���ɡ�");
                        }
                    }
                    if (selection == 4) {
                        if (cm.getChar().getXw() >= 500) {
                            cm.getChar().setpgmax(100000000);
                            cm.getChar().setXw(cm.getChar().getXw() - 500);
                            cm.sendOk("��ϲ���ɹ��������������ֵ����1�ڣ���Ŀǰ����߹�������ֵΪ��#r" + cm.getChar().getpgmax());
                        } else {
                            cm.sendOk("�����Ϊ�㲻�㣬����Ŭ���ɡ�");
                        }
                    }
                    if (selection == 5) {
                        if (cm.getzb() >= 20000) {
                            cm.getChar().setpgmax(100000000);
                            cm.setzb(-20000);
                            cm.sendOk("��ϲ���ɹ��������������ֵ����1�ڣ���Ŀǰ����߹�������ֵΪ��#r" + cm.getChar().getpgmax());
                        } else {
                            cm.sendOk("������ѱҲ��㣬����Ŭ���ɡ�");
                        }
                    }
                    cm.dispose();
                    return;
                }
            } //endstat
        }
    }

    function checkitem() {
        //1
        var item = cm.getInventory(1).getItem(1);
        var ii = Packages.server.MapleItemInformationProvider.getInstance();
        if (item == null) {
            cm.sendOk("װ������1��û��װ��.����.");
            cm.dispose();
            return;
        }
        if (ii.isCash(item.getItemId()) == true) {
            cm.sendOk("�̳���Ʒ�ݲ�֧��.");
            cm.dispose();
            return;
        }
        var items = cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy();
        if (items.getWatk() < 140) {
            cm.sendOk("װ������1����Ʒ����С��140������������..");
            cm.dispose();
            return;
        }
        //2
        item = cm.getInventory(1).getItem(2);
        if (item == null) {
            cm.sendOk("װ������2��û��װ��.����.");
            cm.dispose();
            return;
        }
        if (ii.isCash(item.getItemId()) == true) {
            cm.sendOk("�̳���Ʒ�ݲ�֧��.");
            cm.dispose();
            return;
        }
        var items = cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(2).copy();
        if (items.getWatk() < 140) {
            cm.sendOk("װ������2����Ʒ����С��140������������..");
            cm.dispose();
            return;
        }
        //3
        item = cm.getInventory(1).getItem(3);
        if (item == null) {
            cm.sendOk("װ������3��û��װ��.����.");
            cm.dispose();
            return;
        }
        if (ii.isCash(item.getItemId()) == true) {
            cm.sendOk("�̳���Ʒ�ݲ�֧��.");
            cm.dispose();
            return;
        }
        var items = cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(3).copy();
        if (items.getWatk() < 140) {
            cm.sendOk("װ������3����Ʒ����С��140������������..");
            cm.dispose();
            return;
        }
        //4
        item = cm.getInventory(1).getItem(4);
        if (item == null) {
            cm.sendOk("װ������4��û��װ��.����.");
            cm.dispose();
            return;
        }
        if (ii.isCash(item.getItemId()) == true) {
            cm.sendOk("�̳���Ʒ�ݲ�֧��.");
            cm.dispose();
            return;
        }
        var items = cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(4).copy();
        if (items.getWatk() < 140) {
            cm.sendOk("װ������4����Ʒ����С��140������������..");
            cm.dispose();
            return;
        }
        //...
        Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
        Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 2, 1, false);
        Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 3, 1, false);
        Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 4, 1, false);
        var randx = Math.floor(Math.random() * 20) + 1;
        if (seltype == 1) {
            if (randx < 5) {
                cm.gainItem(4002002, 10);
                cm.sendOk("��ϲ����ϲ����Ʒ�ñ��ˣ���������ţ��Ʊʮ��~.");
                cm.worldMessage("��" + cm.getChar().getName() + "����[�г�NPC������Ա]��ʹ������װ������������ţ��Ʊ~");
            } else {
                cm.sendOk("���ź���û�л����ƱӴ~.");
            }
            cm.dispose();
            return;
        }
        if (seltype == 2) {
            if (randx < 10) {
                cm.gainItem(4031946, 1);
                cm.sendOk("��ϲ����ϲ����Ʒ�ñ��ˣ�������ɫ����2��#v4031946#һ��~.");
                cm.worldMessage("��" + cm.getChar().getName() + "����[�г�NPC������Ա]��ʹ������װ����������ɫ����~");
            } else {
                cm.sendOk("���ź���û�л����ɫ����2��#v4031946#Ӵ~.");
            }
            cm.dispose();
            return;
        }
        if (seltype == 3) {
            if (randx < 10) {
                cm.gainItem(4031944, 1);
                cm.sendOk("��ϲ����ϲ����Ʒ�ñ��ˣ�������ɫ����3��#v4031944#һ��~.");
                cm.worldMessage("��" + cm.getChar().getName() + "����[�г�NPC������Ա]��ʹ������װ����������ɫ����~");
            } else {
                cm.sendOk("���ź���û�л����ɫ����3��#v4031944#Ӵ~.");
            }
            cm.dispose();
            return;
        }
        cm.dispose();
    }
}

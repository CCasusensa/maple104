var status = 0;
var fstype = 0;
var blxz = new Array(1142014, 1142015, 1142016, 1142017);
var rand = Math.floor(Math.random() * blxz.length);

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
            cm.sendSimple("���ΰ���#b#h ##k�����Ǳ������������NPC�������ĵ���ɫ���������������Ӵ����Ȼƽʱ�Ļ���¼ӵ�����Ҳ����������׼��������\r\n#L0##b����֮��(��ȡ�����,�ƽ�����)#l\r\n#L1#��Ҫ��(����װ����Ϸ��,�ƽ�����)#l\r\n#L4#���﹫԰(10�ָ���,�������Ҷһ�)#l\r\n#L5##e#r������ɫ(����ֵ��ȡר���ƺ�~~)#l\r\n#L6#10��27��GM���߻~~#l");
        } else if (status == 1) {
            if (selection == 0) { //����֮��
                cm.dispose();
                cm.openNpc(9010041, 1);
            } else if (selection == 1) { //ÿ��ˢǮ
                cm.dispose();
                cm.openNpc(9010041, 2);
            } else if (selection == 2) { //VIP��
                cm.dispose();
                cm.openNpc(9010030, 2);
            } else if (selection == 3) { //���﹫԰
                cm.warp(951000000);
                cm.dispose();
            } else if (selection == 4) { //����7��
                fstype = 1;
                cm.sendSimple("��������ô��ʹ���ȥ������Ϊ�����﹫԰�������׼�����ر�Ķ��������뿴һ����\r\n#v3010002##v3010003##v3010006##v3010007##v3010008##v3010009##v3010028##v3010024##v3010064##v3010151##v1002547##v1002550##v1002551##v1002649##v1002773##v1082163##v1082164##v1082167##v1082168##v1082216##v1052071##v1052072##v1372042##v1372041##v1372040##v1372039##v1072494##e#r����ȫ����װ��Ӵ#n#k\r\n\r\n��ô��������õ��ɣ��ǺǺǣ����ڹ��﹫԰�Ĺ������Ϸ�������ļ���Ʒ�����Թ�����Է���#b#t4310020##k���Ѽ�֮�󽻸�#b����#k�����ܽ�������׼��������Ķ���\r\n#L0#�����԰#l#L1#����Ҷһ�#l");
            } else if (selection == 5) { //������
                fstype = 2;
                cm.sendSimple("����ֵ�ǽ�����ÿ��ǩ����������ǩ����õ�,ÿ������ǩ���ܻ��10�����ֵ,��С����Ϣ����,�Ժ���ר�������¸���Ҳ�ǼӶ���ֵ��Ӵ,����ֵ����һ���ļ���,�Ϳ����������ﻻȡ�ƺ���Ӵ,�ƺ���ʾ��ͷ����,��������,�Ķ�����\r\n#L0##b50����ֵ��ȡ<Ѱ�ҳ���>�ƺ�#l\r\n#L1#100����ֵ��ȡ<�������˽�>�ƺ�#l\r\n#L2#200����ֵ��ȡ<���˽��ǹ�����>�ƺ�#l");
            } else if (selection == 6) { //���Ⱥ���
                fstype = 3;
                cm.sendSimple("#L6#��ȡ��һ������佱��[����]#l\r\n#L7#��ȡ�ڶ�������佱��[����]#l");
            } else if (selection == 7) { //���Ⱥ���
                fstype = 4;
                cm.sendSimple("#r#e<���Ͱɣ�����>#k#n\r\n���ʼʱ�䣺20��40\r\n��������Ϊ4��������У���������#r���벿��#k���������һ�����䣬���ʼ����ϲ���ѫ�½�����Ϸ���أ�ÿ����Ϸ��һ�����Ĳ���������˶��ܶ�����5000���ѱ�\r\n\r\n#e#b<�һ��36��Ϸ>#k#n\r\n������ͼ���������������ȴﵽ��12�˽�������һ��36��Ϸ���\r\n#r<36��Ϸ����>#k\r\nGM���ȫ���������վ��һ��������,Ȼ��GM������6λ��ҷֱ��Ϊ1-2-3-4-5-6��,����վ��,Ȼ��GM˵��ʼ,1����ҾͿ��Կ�ʼ��������,1�����ֻ����1,����2,���Ժ��������,2����ҽ���1�ŵ���,���1������1,��ô2����ҿ�����1���������ֵĻ�����+1����+2,������2,����3,��������,����6����Һ�,1�Ž���6�ŵ���,˭�������36�������,����̭\r\n���û����û��ϵ,��ȥ��GM��л����ʾ��һ��\r\n��һ�����һ�����п�ȫ��������200����(+S������(��������+5%))+1�����ѱ�+����վ���˰�\r\n��һ����ڶ�����ϡ������һ��+1�����ѱ�\r\n��һ�����������һ������һ��+1�����ѱ�\r\n��36��Ϸ�б���̭��GM�ύ���㣬����ʺŸ�GMͳ�ƺ󣬲μӵ�36��Ϸÿ���ܻ��5000���ѱң������һ�����Լ�����Ļ��в�������5000Ӵ\r\n\r\n#e#b<������ŶӾ�������>#k#n\r\n��ҽ�������ͼ�󣬿�ʼ����������ȥ��ȴ���ÿ�������������һ���������μ���һ������#r(���Դ��ֽ���4�ˣ�ÿ������ĵ�һ��)#k\r\n�����һ������ǰ10��(���ֲ���)ÿ�˻��5000���ѱ�\r\n\r\n�ڶ������һ����ϡ������һ��+1�����ѱ�\r\n�ڶ�����ڶ�����һ������һ��+1�����ѱ�\r\n�ڶ��������������ûƽ�����+5000���ѱ�\r\n�����һ�����Լ�����Ļ��в�������5000Ӵ\r\n#L1#���벿��#l\r\n#L5#��������ͼ#l\r\n#L6#��ȡ��һ������佱��[����]#l\r\n#L7#��ȡ�ڶ�������佱��[����]#l");
            } else if (selection == 12) { //���˺����Ľ���
                cm.sendOk("�����ڵȴ��¸ҵ�ð�ռҡ��������Լ����������ǻۣ�һ���ƽ����⣬����ǿ���#r�������ţ�\r\n\r\n - #e�ȼ�#n��70������#r���Ƽ��ȼ���120��200 ��#k\r\n - #e����ʱ��#n��10����\r\n - #e�μ�����#n��3��4��\r\n - #eͨ�ػ����Ʒ#n��\r\n��#v4031996##v4031995##v4031994v# Ģ������#b�������ã�#k\r\n - #eͨ�������Ʒ#n��\r\n�� #b����ţ��Ʊ,GM�سɾ���,����ҩˮ,����װ��(�п�),ʥ��");
                cm.dispose();
            }
        } else if (status == 2) {
            if (fstype == 1) { //���﹫԰
                if (selection == 0) { //���빫԰
                    cm.warp(951000000);
                    cm.sendOk("�Ѵﵽ���﹫԰��û��Ʊ�Ļ��뵽����ߵ�#b����#k��ȡ");
                    cm.dispose();
                } else if (selection == 1) { //�򿪼����NPC
                    cm.dispose();
                    cm.openNpc(9071002, 1);
                }
            } else if (fstype == 2) { //����װ��
                if (selection == 0) {
                    if (cm.getBossLog("����ֵ50", 1) != 0) {
                        cm.sendOk("���Ѿ���ȡ����..");
                        cm.dispose();
                    } else if (cm.getChar().getVipczz() < 50) {
                        cm.sendOk("��Ķ���ֵ��û���أ�");
                        cm.dispose();
                    } else {
                        cm.setBossLog("����ֵ50", 1);
                        cm.gainItem(3700017, 1); //50�ĳƺ�
                        cm.sendOk("��ϲ����ȡ�˳ƺ�#z3700017#");
                        cm.worldMessage("[�����ƺ�]�����[" + cm.getChar().getName() + "]��ȡ�����¶���ר���ƺ�<Ѱ�ҳ���>");
                        cm.dispose();
                    }
                } else if (selection == 1) {
                    if (cm.getBossLog("����ֵ100", 1) != 0) {
                        cm.sendOk("���Ѿ���ȡ����..");
                        cm.dispose();
                    } else if (cm.getChar().getVipczz() < 100) {
                        cm.sendOk("��Ķ���ֵ��û���أ�");
                        cm.dispose();
                    } else {
                        cm.setBossLog("����ֵ100", 1);
                        cm.gainItem(3700035, 1); //100�ĳƺ�
                        cm.sendOk("��ϲ����ȡ�˳ƺ�#z3700035#");
                        cm.worldMessage("[�����ƺ�]�����[" + cm.getChar().getName() + "]��ȡ�����¶���ר���ƺ�<�������˽�>");
                        cm.dispose();
                    }
                } else if (selection == 2) {
                    if (cm.getBossLog("����ֵ200", 1) != 0) {
                        cm.sendOk("���Ѿ���ȡ����..");
                        cm.dispose();
                    } else if (cm.getChar().getVipczz() < 200) {
                        cm.sendOk("��Ķ���ֵ��û���أ�");
                        cm.dispose();
                    } else {
                        cm.setBossLog("����ֵ200", 1);
                        cm.gainItem(3700036, 1); //200�ĳƺ�
                        cm.sendOk("��ϲ����ȡ�˳ƺ�#z3700036#");
                        cm.worldMessage("[�����ƺ�]�����[" + cm.getChar().getName() + "]��ȡ�����¶���ר���ƺ�<���˽��ǹ�����>");
                        cm.dispose();
                    }
                }
            } else if (fstype == 3) { //�ƽ��Ҷ
                if (selection == 1) {
                    var count = cm.getBossLog("qddq", 1);
                    if (cm.getBossLog("1020�") == 0) {
                        cm.gainItem(blxz[rand], 1); //�漴����ѫ��
                        cm.sendOk("������#z" + blxz[rand] + "");
                    cm.setBossLog("1020�");
                        cm.dispose();
                    } else {
                        cm.sendOk("���Ѿ������������");
                        cm.dispose();
                    }
                } else if (selection == 5) { //���﹫԰
                    //cm.warp(910530100,0);
                    cm.sendOk("���ڱ�����...");
                    cm.dispose();
                } else if (selection == 6) { //���﹫԰
                    if (cm.getBossLog("1020����",1) < 1 && cm.getPlayer().haveItem(1142014)) {
                        cm.addHyPay(-5000);
                        cm.sendOk("��ȡ�ɹ�",1);
                        cm.setBossLog("1020����");
                        cm.dispose();
                    } else {
                        cm.sendOk("����ȡ��ȡ���ˣ������㲻�Ǳ�����ĳ�Ա");
                        cm.dispose();
                    }
                } else if (selection == 7) { //���﹫԰
                    if (cm.getBossLog("1020����",1) < 1 && cm.getPlayer().haveItem(1142017)) {
                        cm.addHyPay(-5000);
                        cm.sendOk("��ȡ�ɹ�");
                        cm.setBossLog("1020����",1);
                        cm.dispose();
                    } else {
                        cm.sendOk("����ȡ��ȡ���ˣ������㲻�Ǳ�����ĳ�Ա");
                        cm.dispose();
                    }
                }
            }
            if (fstype == 4) { //����
                if (selection == 1) {
                    var count = cm.getBossLog("qddq", 1);
                    if (cm.getBossLog("1020�") == 0) {
                        cm.gainItem(blxz[rand], 1); //�߼�����ħ��
                        cm.sendOk("������#z" + blxz[rand] + "");
                        cm.dispose();
                    } else {
                        cm.sendOk("���Ѿ������������");
                        cm.dispose();
                    }
                } else if (selection == 2) {
                    if (cm.getBossLog("qddq", 1) >= 5 && cm.getBossLog("qdlb", 1) == 0) {
                        cm.setBossLog("qdlb", 1);
                        cm.gainItem(5062002, 10); //�߼�����ħ��
                        cm.gainItem(5062001, 10); //��������ħ��
                        cm.gainItem(2340000, 10); //ף������
                        cm.gainItem(2430008, +1);
                        cm.sendOk("��ȡ�ɹ�.");
                        cm.worldMessage("[����7����]�����[" + cm.getChar().getName() + "]��ȡ�˹���ڵ������");
                        cm.dispose();
                    } else {
                        cm.sendOk("���Ѿ���ȡ����,������ǩ��δ��6��");
                        cm.dispose();
                    }
                } else if (selection == 4) {
                    cm.sendOk("#e#r10��5��<�1>#k#n\r\n�볡ʱ�䣺20��30����ʼʱ�䣺20��30\r\n#b<��һ�۽�������������>#k\r\n���ȫ��վ�����,GM�п�ʼ��,��ҿ�ʼ��,����8λ���Ȼ����еڶ��ֱ���\r\n#b<�ڶ���36������Ϸ>#k\r\n���볡�غ�,�������GMָ��,GM���ȫ���������վ��һ��������,Ȼ��GM������5λ��ҷֱ��Ϊ1-2-3-4-5��,����վ��,Ȼ��GM˵��ʼ,1����ҾͿ��Կ�ʼ��������,1�����ֻ����1,����2,���Ժ��������,2����ҽ���1�ŵ���,���1������1,��ô2����ҿ�����1���������ֵĻ�����+1����+2,������2,����3,��������,����5����Һ�,1�Ž���5�ŵ���,˭�����˵��36�������,����̭\r\n���������ֻ����Ҷ��ܻ�����ѱ�1W\r\n��������ҿ�����ڶ��ֵ�36\r\n��һ�����һ�����п�ȫ��������200����(+S������һ��)+1�����ѱ�+����վ���˰�\r\n��һ����ڶ�����ϡ������һ��+1�����ѱ�\r\n��һ�����������һ������һ��+1�����ѱ�");
                    cm.dispose();
                } else if (selection == 8) {
                    cm.sendOk("#e#r10��5��<�2>#k#n\r\n�볡ʱ�䣺20��40����ʼʱ�䣺20��40\r\n#b<˭���Ե�>#k\r\nGM�ύ��ÿ����,�������ǵ�һ������,�ڲ�������л���һ�˵Ĵ��ﲻһ��,Ȼ��ÿ���˴�GM���к����������������#r(��ò�Ҫ���ݵ�̫����,��Ҫ�ñ����Եײ�̫����ʲô����,��Ҫ�ö��������������˼)#kȫ���������,��Ҹ�����ҵĺ���ͶƱ,���Ͷ��ȥ�Ĳ����Ե�,��Ϸ����,���Ե׵Ļ�,�Ե���̭,�Ե�ֻҪ�ܴ����ʣ3����Ҿͽ���");
                    cm.dispose();
                } else if (selection == 6) {
                    cm.sendOk("#e#r10��2��<�2>#k#n\r\n�ʴ�ʱ�䣺20��12������ʱ�䣺20��20\r\n#b<ȫ���ʴ�>#k\r\nGMÿ���ʴ��ʱ��������һ�����ʾ,������һ������ѧ��,����˵˵��ʾ�ķ���\r\n#b��ѧ��#k����һЩ�Ӽ��˳�,����׼������ļ�����Ӵ\r\n#b�����#kһЩ����˼�Ĵ���,�����Դ�\r\n#b������#kGM���ܻ�˵��һ����,����ش������,����GM��˵�ؼ���,��ұ���˵��һ����ؼ��ֵĸ��\r\n#b�ս���֪ʶ#kһЩ�����ս���ð�յ��ĳ�ʶ\r\n���������#r�г���,ֱ�������촰�����,�Թ��������־�������,Ҳ����ʹ�����ȴ���#k\r\n���һ������ҽ��ܻ��һ���ƽ�����(GM��,�п�װ��)#k");
                    cm.dispose();
                } else if (selection == 7) {
                    cm.sendOk("#e#r10��3��<�2>#k#n\r\n��ʼʱ�䣺21��50\r\nGM�����5�ֵĶ�èè�,GM�غû�,��������ʾ���GM���ڵĳ���,��Ȼ��ʾ��4������ֻ��1���ǶԵ�Ӵ,�ҵ�����ҿ��Ի�ûƽ�����һ��");
                    cm.dispose();
                } else if (selection == 5) { //���﹫԰
                    //cm.warp(749080100);
                    cm.sendOk("����Ѿ��ر�");
                    cm.dispose();
                } else if (selection == 3) { //�Ѽ���Ʒ
                    if ((cm.getHour() != 15 || cm.getHour() != 19)) {
                        cm.sendOk("��ǰ������ʱ��:" + cm.getHour() + "��" + cm.getMin() + "��\r\nʱ�仹û��Ŷ.ֻ������15�������19���ύ����");
                        cm.dispose();
                    } else if (cm.haveItem(4000004, 200) == false || cm.haveItem(4000268, 200) == false || cm.haveItem(4000273, 200) == false || cm.haveItem(4000188, 200) == false) {
                        cm.sendOk("���ϲ���,����Ҫ�Ѽ�#z4000004#x200��,#z4000268#x200��,#z4000273#x200��,#z4000188#x200��\r\nע�⣺�ύ����ֻ����15���19��,������ץ��ʱ��");
                        cm.dispose();
                    } else {
                        cm.gainItem(4000004, -200);
                        cm.gainItem(4000268, -200);
                        cm.gainItem(4000273, -200);
                        cm.gainItem(4000188, -200);
                        cm.gainItem(2430008, +1);
                        cm.sendOk("��ϲ�������,�����һ��#r#z2430008##k,��ȥ���ﵺ�úö�����");
                        cm.worldMessage("[����7����]�����[" + cm.getChar().getName() + "]����˹���7���ֵ�����,�����һ���ƽ�����");
                        cm.dispose();
                    }
                }
            }
        } else if (status == 3) {
            if (fstype == 13) {
                if (cm.getMeso() < price || cm.haveItem(4310034, 2) == false) {
                    cm.sendOk("�Բ���,��û���㹻��ð�ձ�,������û���㹻��#z4310034#");
                    cm.dispose();
                    return;
                }
                var chance = Math.floor(Math.random() * 2);
                if (chance == 1) {
                    var item = cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy();
                    var statup = new java.util.ArrayList();
                    item.setUpgradeSlots((item.getUpgradeSlots() + 1));
                    Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
                    Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
                    cm.gainMeso(-price);
                    cm.gainItem(4310034, -2);
                    cm.sendOk("��ϲ��ɹ�������쿴��İ����ɣ�");
                    cm.worldMessage("[��������]����ϲ[" + cm.getChar().getName() + "]���г��ѿ�֮ӥ����ʹ�������Ϊ����������1���Ҿ����");
                    cm.dispose();
                } else {
                    cm.gainMeso(-price / 2);
                    cm.gainItem(4310034, -2);
                    cm.sendOk("���ź�������ʧ��");
                }
                cm.dispose();
                return;
            }
            if (fstype == 14) {
                if (cm.getMeso() < price || cm.haveItem(4310003, 1) == false) {
                    cm.sendOk("�Բ���,��û���㹻��ð�ձ�,������û���㹻��#z4310003#");
                    cm.dispose();
                    return;
                }
                var chance = Math.floor(Math.random() * 2);
                if (chance == 1) {
                    var item = cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy();
                    var statup = new java.util.ArrayList();
                    item.setUpgradeSlots((item.getUpgradeSlots() + 1));
                    Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
                    Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
                    cm.gainMeso(-price);
                    cm.gainItem(4310003, -1);
                    cm.sendOk("��ϲ��ɹ�������쿴��İ����ɣ�");
                    cm.worldMessage("[��������]����ϲ[" + cm.getChar().getName() + "]���г��ѿ�֮ӥ����ʹ�ûƽ��ҶΪ����������1���Ҿ����");
                    cm.dispose();
                } else {
                    cm.gainMeso(-price / 2);
                    cm.gainItem(4310003, -1);
                    cm.sendOk("���ź�������ʧ��");
                }
                cm.dispose();
                return;
            }
            if (fstype == 15) {
                if (cm.getMeso() < price || cm.haveItem(4032733, 30) == false) {
                    cm.sendOk("�Բ���,��û���㹻��ð�ձ�,������û���㹻��#z4032733#");
                    cm.dispose();
                    return;
                }
                var chance1 = Math.floor(Math.random() * 2);
                if (chance1 == 1) {
                    var item = cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy();
                    var ii = Packages.server.MapleItemInformationProvider.getInstance();
                    var chance = Math.floor(Math.random() * 100);
                    var lvsj = Math.floor(Math.random() * 20) + 10;
                    cm.gainMeso(-price);
                    cm.gainItem(4032733, -30);
                    if (chance <= 5) { //watk
                        item.setWatk(item.getWatk() * 1 + lvsj);
                        Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
                        Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
                        cm.sendOk("��ϲ���ɹ���װ��������:#r" + lvsj + "#k����.");
                        cm.worldMessage("[װ������]����ϲ[" + cm.getChar().getName() + "]���г��ѿ�֮ӥ����ʹ�òʺ��Ҷ�����������Ĺ���");
                    } else if (chance > 5 && chance <= 20) { //matk
                        item.setMatk(item.getMatk() * 1 + lvsj);
                        Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
                        Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
                        cm.sendOk("��ϲ���ɹ���װ��������:#r" + lvsj + "#kħ��.");
                        cm.worldMessage("[װ������]����ϲ[" + cm.getChar().getName() + "]���г��ѿ�֮ӥ����ʹ�òʺ��Ҷ������������ħ������");
                    } else if (chance > 20 && chance <= 40) { //str
                        item.setStr(item.getStr() * 1 + lvsj);
                        Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
                        Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
                        cm.sendOk("��ϲ���ɹ���װ��������:#r" + lvsj + "#k����.");
                        cm.worldMessage("[װ������]����ϲ[" + cm.getChar().getName() + "]���г��ѿ�֮ӥ����ʹ�òʺ��Ҷ����������������");
                    } else if (chance > 40 && chance <= 60) { //dex
                        item.setDex(item.getDex() * 1 + lvsj);
                        Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
                        Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
                        cm.sendOk("��ϲ���ɹ���װ��������:#r" + lvsj + "#k����.");
                        cm.worldMessage("[װ������]����ϲ[" + cm.getChar().getName() + "]���г��ѿ�֮ӥ����ʹ�òʺ��Ҷ����������������");
                    } else if (chance > 60 && chance <= 80) { //luk
                        item.setInt(item.getInt() * 1 + lvsj);
                        Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
                        Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
                        cm.sendOk("��ϲ���ɹ���װ��������:#r" + lvsj + "#k����.");
                        cm.worldMessage("[װ������]����ϲ[" + cm.getChar().getName() + "]���г��ѿ�֮ӥ����ʹ�òʺ��Ҷ����������������");
                    } else if (chance > 80) { //int
                        item.setLuk(item.getLuk() * 1 + lvsj);
                        Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
                        Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
                        cm.sendOk("��ϲ���ɹ���װ��������:#r" + lvsj + "#k����.");
                        cm.worldMessage("[װ������]����ϲ[" + cm.getChar().getName() + "]���г��ѿ�֮ӥ����ʹ�òʺ��Ҷ����������������");
                    }
                } else {
                    cm.gainMeso(-price / 2);
                    cm.gainItem(4032733, -30);
                    cm.sendOk("���ź�������ʧ��");
                }
                cm.dispose();
                return;
            }
            if (fstype == 101) {
                Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, selection, 1, true);
                cm.sendOk("��ϲ,�˵����ѱ����.");
                cm.dispose();
            }
            if (fstype == 102) {
                Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.CASH, selection, 1, true);
                cm.sendOk("��ϲ,�˵����ѱ����.");
                cm.dispose();
            }
        }
    }
}

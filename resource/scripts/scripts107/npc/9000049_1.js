var status = 0;
var typede = 0;
var eff = "#fEffect/CharacterEff/1112905/0/1#";
var hwtext = new Array("�˳���Ư��������Ư����", "������ʧȥƤ�����Ŷ���ʲ�����������", "�̲���������������'����'��", "�㷢ŭһ���ӣ���ʧȥ60����Ҹ���", "����������Ů�ˣ��Ӵ�ֻ�м����գ�û�ж����ա�", "·����ƽһ���𣬺��������ǰ�ߡ�", "�Ҹ��Ǹ��Ƚϼ���Ҫ�ж�����ײŸо��õ���", "֪ʶ�����ڿ㣬������������Ҫ", "��Ϊʧ�ܵĵ��ͣ���ʵ����̫�ɹ���", "Ů��ϲ�����û��������ˣ�����ϲ�������˵�����", "�����ˣ��������ٿ�", "�������ᣬ��ʪ�����ҵ���", "��δ���������ù�ȥ��ȥ", "���Ժᵶ����Ц��Ц��֮��ȥ˯��", "�����̸���飬̸������Ǯ", "�µ���һ���˵Ŀ񻶣�����һȺ�˵Ĺµ�", "�㲻�������õģ������������溰�浽", "�Ҳ��ǲݴ�����ļ��������ⷢ", "��İ�������ģ��ҵ���ȴ����ʱ��", "�e�����ĵ�ʱ������ң���Ȼ�Ե����Ƕ����", "�㲻�ǵ��ӻ�����Ҫ���Ƕ��Ž㿴", "��ʹ����������������ҲҪ�ƻ���ľ", "����ֻ����һ��Ƶ�� ��ɺ޵��ǻ�û�й��", "�������ı��������ǻ�ı����Ҹ�", "Ҫ������ʦ˵����������������Ȼ��������ӳ�ȥ", "û����󡣬���Ҳ���į", "���ǹ���ҿɳܣ��Ҹ������˷�ֽ", "����û�������ֻ�к���ͽ��", "����ô��Ǯ Ϊʲô���ù�����ĥ��", "����˺͹����Ტ�ۣ����������ҳ�", "���������������������ȥ", "���������˻�ɴ ��Ҳ����������", "����������ܸɵĻ��¶����˰ɣ�û������", "������ֻ�������� 1 ��Ҳ���� 2 ��Ҳ����", "���⳵˾����˾���е�ս��������Ү! ", "˼���ж�Զ����͸��ҹ���Զ!", "�������ı������ഺ����,�ഺ��ȴ���ڡ�", "��򵥵ĳ����ؾ�:���ֺ�������Ҫ����~", "������Ҳ��˵�����ǻ�ûʹ���˼���!", "��Ҫ���ұ���,�����ú����", "�Ҳ��Ǹ������� ���������������", "���»�һ���ĵ��ˣ�������һ���Ķ���", "�ϻ������� �㵱����HELLO KITTY��", "��������߾��磺��ǽ������ǽ����", "үү���Ǵ������߹����ġ���", "������ǲ��ã����ʱ�����������綼û�ú�", "ûʲô�¾Ͳ�Ҫ���ң������˸���Ҫ���ҡ�", "���������������Ѿ����ˡ���", "Ǯ���Խ�������ⶼ�������⡣", "���ģ��ҵ��·������ˣ�", "���Ա������������ʰ���", "�����Ҳ�ţ������ɵ�˰ɣ�", "���³�������׳������ûǮŮ���֡�", "�����ǮҲ��һ�ִ�����Ըһ���ٴ�", "���˸���ϴ�ƣ��������Ƶ��������Լ���", "�úû��ţ���Ϊ���ǻ����ܾ�!", "���ֲ���������ѧ�˼�ͺ����", "������ţa��ţc֮���ǻ���", "���±������ã�������û�á�", "�����ҵ�����ô�࣬�����ϼ�? ", "�㷢ȥ���٣�ͷм�����ڣ�", "��ɫ��԰�ز�ס�����պ��ӳ�ǽ����", "��������Ϊ���һ�ｵһ��", "bmw�Ǳ����ң�msn��������", "ŮΪ�ü�����,��Ϊ�ü���� ", "����ʮ�����飬�����׶�԰�ȽϺû�");
var psrw2 = new Array(2040506, 2040806, 2040807, 2043303, 2043203, 2043103, 2043703, 2043803, 2044003, 2044103, 2044203, 2044303, 2044403, 2044603, 2044703, 2040807, 2044908);
var rand2 = Math.floor(Math.random() * psrw2.length);
var itemtsid = new Array("1099003", "1532014", "1532014", "1532014", "1532014", "1532014", "1402073", "1462076", "1452058", "1302081", "1312037", "1322060", "1332073", "1332074", "1372044", "1382057", "1402046", "1412033", "1422037", "1432047", "1442063", "1452057", "1462050", "1472068", "1482023", "1492023", "1302059", "1312031", "1322052", "1402036", "1412026", "1422028", "1432038", "1442045", "1452044", "1462039", "1472051", "1472052", "1332050", "1302086", "1312038", "1322061", "1332075", "1332076", "1372045", "1382059", "1402047", "1412034", "1422038", "1432049", "1442067", "1452059", "1462051", "1472071", "1482024", "1492025", "1032025", "1032026", "1032027", "1032028", "1032035", "1032040", "1032047", "1002391", "1002419", "1002436", "1002455", "1002773", "1002794", "1522012", "1522056", "1362020");
var randtsid = Math.floor(Math.random() * itemtsid.length);

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
            if (cm.getMapId() == 910023100 || cm.getMapId() == 910023400) {
                cm.sendSimple("����BOSS����?����\r\n#L0#��Ҫ�뿪");
            } else {
                var text = "";
                if (cm.getChannelServer().getChannel() == 1) {
                    var hwchance = Math.floor(Math.random() * hwtext.length);
                    text += "#r��Ĭʱ��:" + hwtext[hwchance] + "#k\r\n#L1##b1.ʹ��5���ƽ��Ҷ�һ�5������ħ��#l\r\n#L2#2.ʹ��10���ƽ��Ҷ��ȡ�سɾ�(100%�ɹ�)\r\n#L3#3.ʹ��20���ƽ��Ҷ��ȡ��輼��(��������)\r\n#L4#4.ʹ�ûƽ��Ҷ+�ʺ��Ҷ��ȡ�������װ��\r\n#L5##r5.ʹ��20���ƽ��ҶΪ������������#l\r\n#L6#6.ʹ��30���ƽ��Ҷ��ȡȫ����װ��#l";
                    cm.sendSimpleS(text,2);
                } else {
                    text += "��,��ֻ����1Ƶ��Ϊ���ṩ����Ӵ!";
                    cm.sendOk(text);
                    cm.dispose();
                }

            }
        } else if (status == 1) {
            if (selection == 0) { //���ڸ����о��˳�
                cm.warp(910000000, 0);
                cm.dispose();
            } else if (selection == 11) { //��������ϳ�
                cm.sendOk("��������������..�Ժ󿪷�");
                cm.dispose();
            } else if (selection == 12) { //���Ȱ�˹��
                cm.sendOk("��������������..�Ժ󿪷�");
                cm.dispose();
            } else if (selection == 13) { //���˺���
                typede = 13;
                cm.sendNext("�����ڵȴ��¸ҵ�ð�ռҡ��������Լ����������ǻۣ�һ���ƽ����⣬����ǿ���#r��������#k\r\n\r\n - #e�ȼ�#n��70������#r���Ƽ��ȼ���120��200 ��#k\r\n - #e����ʱ��#n������2��-5��\r\n - #e����ʱ��#n��10����\r\n - #e�μ�����#n��3��4��\r\n - #eͨ�ػ����Ʒ#n��\r\n��#v4031996##v4031995##v4031994v# Ģ������#b�������ã�#k\r\n - #eͨ�������Ʒ#n��\r\n�� #b����ţ��Ʊ,GM�سɾ���,����ҩˮ,����װ��(�п�),ʥ��");
            } else if (selection == 14) { //��ʱ�ᱦ
                typede = 14;
                cm.sendNext("������ʱ��:#e" + cm.getHour() + "��" + cm.getMin() + "��" + cm.getSec() + "��#n\r\n��ʱ�ᱦ��ÿ��Сʱֻ����һ����ÿСʱ����ʱ��Ϊ20��-21�֣�����Ҫץ��ʱ��Ӵ������ᱦ������Ҫ�ڹ涨��ʱ���ڻ��ƽ𵰣����ܻ�ý������˶ᱦ�޵ȼ���Ʒ���ƣ�����Ҫץ��ʱ��Ӵ��");
            } else if (selection == 15) { //��ɫ����
                typede = 15;
                cm.sendNext("�����ڵȴ��¸ҵ�ð�ռҡ��������Լ����������ǻۣ�һ���ƽ����⣬����ǿ���#r��ɫ����#k\r\n\r\n - #e�ȼ�#n��70������#r���Ƽ��ȼ���120��200 ��#k\r\n - #e����ʱ��#n������35��-55��\r\n - #e����ʱ��#n��10����\r\n - #e�μ�����#n��3��4��\r\n - #eͨ�ػ����Ʒ#n��\r\n��#v4033220# #z4033220##b������ͼ�ڵĺ��ģ�#k\r\n - #eͨ�������Ʒ#n��\r\n�� #v3010313##v3010203##v3010024##v1003439#");
            } else if (selection == 3) { //������
                cm.sendOk("GM���������С����Ժ󿪷�");
                cm.dispose();
            } else if (selection == 2) { //նɱħ��
                var ii = Packages.server.MapleItemInformationProvider.getInstance();
                if (cm.haveItem(4000313,10)) {
                    cm.gainItem(4000313, -10); 
                    cm.gainItem(psrw2[rand2], +1); 
                    cm.sendOk("��ȡ�ɹ����ɹ���ȡ��#v" + psrw2[rand2] + "#һ��");
                    cm.worldMessage("���[" + cm.getPlayer().getName() + "]�ھ��鸱��[ħŮ��]���鵽��һ��" + ii.getName(psrw2[rand2]) + "~");
                    cm.dispose();
                } else {
                    cm.sendOk("#v4000313##z4000313#���㣬Ҫ����Ŭ��Ӵ");
                    cm.dispose();
                }
            } else if (selection == 1) { //�ɵ��ϵ�
                if (cm.haveItem(4000313,5)) {
                    cm.gainItem(4000313, -5); 
                    cm.gainItem(5062000, +5); 
                    cm.sendOk("��ȡ�ɹ����ɹ���ȡ��#v5062000#x5");
                    cm.dispose();
                } else {
                    cm.sendOk("#v4000313##z4000313#���㣬Ҫ����Ŭ��Ӵ");
                    cm.dispose();
                }
            } else if (selection == 4) { //��ս����
                cm.sendOk("GM���������С����Ժ󿪷�");
                cm.dispose();
            } else if (selection == 5) { //�����
                cm.sendOk("GM���������С����Ժ󿪷�");
                cm.dispose();
            } else if (selection == 6) { //������
                if (cm.haveItem(4000313, 30)) {
                    cm.gainItem(4000313, -30); 
                    randxlslot = Math.floor(Math.random() * 100) + 100;
                    var ii = Packages.server.MapleItemInformationProvider.getInstance();
                    var type = Packages.constants.GameConstants.getInventoryType(itemtsid[randtsid]); //ñ��
                    var toDrop = ii.randomizeStats(ii.getEquipById(itemtsid[randtsid])).copy(); // ����һ��Equip��
                    toDrop.setStr(randxlslot); //װ������
                    toDrop.setDex(randxlslot); //װ������
                    toDrop.setInt(randxlslot); //װ������
                    toDrop.setLuk(randxlslot); //װ������
                    toDrop.setMatk(randxlslot);
                    toDrop.setWatk(randxlslot);
                    cm.getPlayer().getInventory(type).addItem(toDrop); //�����װ���������
                    cm.getC().getSession().write(Packages.tools.MaplePacketCreator.addInventorySlot(type, toDrop)); //ˢ�±�                      cm.worldMessage("���[" + cm.getPlayer().getName() + "]ͨ���˾��鸱��[ħŮ��]ʹ�ûƽ��Ҷ�һ���ȫ����+" + randxlslot + "��" + ii.getName(itemtsid[randtsid]) + "~");
                    cm.sendOk("��ϲ��,��� #bȫ����+" + randxlslot + "#k �� #r#z" + itemtsid[randtsid] + "#.");
                    cm.dispose();
                } else {
                    cm.sendOk("#v4000313##z4000313#���㣬Ҫ����Ŭ��Ӵ");
                    cm.dispose();
                }
            } else if (selection == 7) { //��ͨ���鴬
                typede = 7;
                cm.sendNext("���鴬�Ĵ���-�����ȴ������ս����ӵ�г����Ѫ������ǿ�ķ����������Ĵ������Ϊ���ֵ��㣬�ܷ�Ը����أ�\r\n#b�ø������#r10-50#bת��ҿ��ţ�Ϊ��ͨģʽ�������ͼ������5���ӵ�ʱ����ɱ��#e����#n��ɱ������������[#r��Ʊ����Ϊ�㡢130�߼�����#b����һ��]������������Ŷ��\r\n\r\n���ÿ�տ��Խ���2�Σ�2�κ����1000���ѱ�(VIP5��Աֱ�ӽ���)\r\n#r#e������²���Ӳ��ܽ���#n#b��#b�Ƿ�������һ���أ�");
            } else if (selection == 8) { //��ͨ��ӥ
                typede = 8;
                cm.sendNext("��ӥ������ӥ-��ӥ�ȴ������ս����ӵ�г����Ѫ������ǿ�ķ����������Ĵ������Ϊ���ֵ��㣬�ܷ�Ը����أ�\r\n#b�ø������#r10-50#bת��ҿ��ţ�Ϊ��ͨģʽ�������ͼ������5���ӵ�ʱ����ɱ��#e��ӥ#n��ɱ����ӥ������[#r��Ʊ����Ϊ�㡢130�߼�����#b����һ��]������������Ŷ��\r\n\r\n���ÿ�տ��Խ���2�Σ�2�κ����1000���ѱ�(VIP5��Աֱ�ӽ���)\r\b#r#e������²���Ӳ��ܽ���#n#b��#b�Ƿ�������һ���أ�");
            } else if (selection == 9) { //����ŷ����
                typede = 9;
                cm.sendNext("δ�������ŷ����-ŷ�����ȴ������ս����ӵ�г����Ѫ������ǿ�ķ����������Ĵ������Ϊ���ֵ��㣬�ܷ�Ը����أ�\r\n#b�ø������#r50-200#bת��ҿ��ţ�Ϊ����ģʽ�������ͼ������5���ӵ�ʱ����ɱ��#eŷ����#n\r\n-����������\r\n[#r��Ʊ����Ϊ�㡢130�߼�������C������ʯ#b����һ��]������������Ŷ��\r\n-����Ҫ��\r\n#rÿ��ÿ�˿ɽ���2�Ρ�2�κ����1000���ѱ�(VIP5��Աֱ�ӽ���)");
            } else if (selection == 10) { //��������ħ
                typede = 10;
                cm.sendNext("δ�����������ħ-ŷ��������ħ�ȴ������ս����ӵ�г����Ѫ������ǿ�ķ����������Ĵ������Ϊ���ֵ��㣬�ܷ�Ը����أ�\r\n#b�ø������#r50-200#bת��ҿ��ţ�Ϊ����ģʽ�������ͼ������5���ӵ�ʱ����ɱ��#e����ħ#n\r\n-����������\r\n[#r��Ʊ����Ϊ�㡢130�߼�������C������ʯ#b����һ��]������������Ŷ��\r\n-����Ҫ��\r\n#rÿ��ÿ�˿ɽ���2�Ρ�2�κ����1000���ѱ�(VIP5��Աֱ�ӽ���)");
            } else if (selection == 25) { //����0
                typede = 25;
                cm.sendNext("���������ּ�?�Ǿ�������������˵˵��!�ߺ�...����û�κ�����,ֻҪ�ڹ涨��ʱ���ڱ�����ɽ���!������N�ֹ��﹩����ս.�����ܻ��ʲô��?�涨#b1����#kʱ���ڳɹ���սһ���ܻ��#rð�յ���ʯϵ��#k����װ��һ��!���Ƿ���������?");
            } else if (selection == 26) { //����1
                typede = 26;
                cm.sendNext("���������ּ�?�Ǿ�������������˵˵��!�ߺ�...����û�κ�����,ֻҪ�ڹ涨��ʱ���ڱ�����ɽ���!������N�ֹ��﹩����ս.�����ܻ��ʲô��?�涨#b1����#kʱ���ڳɹ���սһ���ܻ��#rð�յ�����ϵ��#k����װ��һ��!���Ƿ���������?");
            } else if (selection == 27) { //����2
                typede = 27;
                cm.sendNext("���������ּ�?�Ǿ�������������˵˵��!�ߺ�...����û�κ�����,ֻҪ�ڹ涨��ʱ���ڱ�����ɽ���!������N�ֹ��﹩����ս.�����ܻ��ʲô��?�涨#b1����#kʱ���ڳɹ���սһ���ܻ��#r��˵ϵ��#k����װ��һ��!���Ƿ���������?");

            } else if (selection == 35) { //��ţ������Ʊ
                typede = 35;
                cm.sendNext("��˵��ţүү�ռ���������Ʊ,��������Ը�����.��ô����ֻ��ȥ͵��,��������������,��ô����ֻ�ô����,����˳���û���Ʊ.��������#r60#k���ʱ������������Ҵ�����Ʊ����,���δ�ܴ����,��ô��ͻ���ʧ#r30#k��Ϊ��,���ȥ��������?");
            } else if (selection == 36) { //Ӣ�۾���
                typede = 36;
                cm.sendNext("�����Ĺ�����Ģ����������,��ȥ��������,˵����������������Ӵ!���Ģ����,����#z4001318#��������,��������벻���ľ�ϲ.���δ�ܴ����,��ô��ͻ���ʧ#r100#k��Ϊ��,���ȥ��������?��Ȼ��ȥ��ʱ����Ҫ֧��#r300#k��Ϊ��");
            }

        } else if (status == 2) {
            if (typede == 1) { //������
                if (cm.getParty() == null) { // No Party
                    cm.sendOk("��Ҫ��#b����#kһ�����,����ֻ������һ����~.zzzZZZZZ..");
                    cm.dispose();
                    return;
                } else if (!cm.isLeader()) { // Not Party Leader
                    cm.sendOk("��жӳ�����˵��.");
                    cm.dispose();
                    return;
                } else if (cm.getMap(980041000).getCharactersSize() > 0 || cm.getMap(980041100).getCharactersSize() > 0 || cm.getMap(980041200).getCharactersSize() > 0) { // Not Party Leader
                    cm.sendOk("��������ս�˸��������Ե�һ��");
                    cm.dispose();
                    return;
                } else {
                    var party = cm.getParty().getMembers();
                    if (party.size() > 1) {
                        cm.sendOk("#r�Բ���,Ϊ�˳��׵Ĳ����������,ֻ��һ��ǰ��..");
                        cm.dispose();
                        return;
                    }
                    var dh = cm.getEventManager("WitchTower_EASY");
                    if (dh == null) {
                        cm.sendOk("�˸���������,����ϵ�ܹ��޸���.");
                        cm.dispose();
                        return;
                    }
                    if (cm.getChar().getVip() >= 6) {
                        cm.worldMessage("��" + cm.getChar().getName() + "����ʼ��ս�񼶸����������衻~����һ���ڴ����ٹ���~");
                        em.startInstance(cm.getParty(), cm.getPlayer().getMap());
                    } else {
                        if (cm.getBossLog("mvtjd") < 100) {
                            if (cm.getBossLog("mvtjd") > 2) {
                                if (cm.getXw() < 10 || cm.haveItem(4001126, 20) < true) {
                                    cm.sendOk("#r�Բ����������Ѿ���ս��2���ˣ�����Ҫ�ڴ���ս���������10��Ϊ���20��#z4001126#�ſ��Խ���..");
                                    cm.dispose();
                                    return;
                                }
                            cm.setXw(cm.getXw() - 10);
                            cm.gainItem(4001126, -20);
                            } else {
                                //cm.resetBossLog("yfysgw");
                            }
                            cm.setBossLog("mvtjd");
                            cm.worldMessage("��" + cm.getChar().getName() + "����ʼ��ս���鸱��[ħŮ��<��>]~����һ���ڴ����ٹ���~");
                        dh.newInstance(cm.getName()).registerPlayer(cm.getPlayer());
                        } else {
                            cm.sendOk("#r�Ѿ���������ս�ˣ����Ե�һ�ᡣ����");
                            cm.dispose();
                            return;
                        }
                    }
                }
                cm.dispose();
                return;
            }
            else if (typede == 2) { //նɱħ��
                if (cm.getParty() == null) { // No Party
                    cm.sendOk("��Ҫ��#b����#kһ�����,����ֻ������һ����~.zzzZZZZZ..");
                    cm.dispose();
                    return;
                } else if (!cm.isLeader()) { // Not Party Leader
                    cm.sendOk("��жӳ�����˵��.");
                    cm.dispose();
                    return;
                } else if (cm.getMap(980042000).getCharactersSize() > 0 || cm.getMap(980042100).getCharactersSize() > 0 || cm.getMap(980042200).getCharactersSize() > 0) { // Not Party Leader
                    cm.sendOk("��������ս�˸��������Ե�һ��");
                    cm.dispose();
                    return;
                } else {
                    var party = cm.getParty().getMembers();
                    if (party.size() > 1) {
                        cm.sendOk("#r�Բ���,Ϊ�˳��׵Ĳ����������,ֻ��һ��ǰ��..");
                        cm.dispose();
                        return;
                    }
                    var dh = cm.getEventManager("WitchTower_Med");
                    if (dh == null) {
                        cm.sendOk("�˸���������,����ϵ�ܹ��޸���.");
                        cm.dispose();
                        return;
                    }
                    if (cm.getChar().getVip() >= 6) {
                        cm.worldMessage("��" + cm.getChar().getName() + "����ʼ��ս�񼶸����������衻~����һ���ڴ����ٹ���~");
                        em.startInstance(cm.getParty(), cm.getPlayer().getMap());
                    } else {
                        if (cm.getBossLog("mvtpt") < 100) {
                            if (cm.getBossLog("mvtpt") > 2) {
                                if (cm.getXw() < 10 || cm.haveItem(4001126, 50) < true) {
                                 cm.sendOk("#r�Բ����������Ѿ���ս��2���ˣ�����Ҫ�ڴ���ս���������20��Ϊ���50��#z4001126#�ſ��Խ���..");
                                    cm.dispose();
                                    return;
                                }
                            cm.setXw(cm.getXw() - 20);
                            cm.gainItem(4001126, -50);
                            } else {
                                //cm.resetBossLog("yfysgw");
                            }
                            cm.setBossLog("mvtpt");
                            cm.worldMessage("��" + cm.getChar().getName() + "����ʼ��ս���鸱��[ħŮ��<��ͨ>]~����һ���ڴ����ٹ���~");
                        dh.newInstance(cm.getName()).registerPlayer(cm.getPlayer());
                        } else {
                            cm.sendOk("#r�Ѿ���������ս�ˣ����Ե�һ�ᡣ����");
                            cm.dispose();
                            return;
                        }
                    }
                }
                cm.dispose();
                return;
            }
            else if (typede == 3) { //�ɵ��ϵ�
                if (cm.getParty() == null) { // No Party
                    cm.sendOk("��Ҫ��#b����#kһ�����,����ֻ������һ����~.zzzZZZZZ..");
                    cm.dispose();
                    return;
                } else if (!cm.isLeader()) { // Not Party Leader
                    cm.sendOk("��жӳ�����˵��.");
                    cm.dispose();
                    return;
                } else if (cm.getMap(910023100).getCharactersSize() > 0) { // Not Party Leader
                    cm.sendOk("��������ս�˸��������Ե�һ�ᣬ���߻������߳���һ�£�..");
                    cm.dispose();
                    return;
                } else {
                    var party = cm.getParty().getMembers();
                    if (party.size() > 1) {
                        cm.sendOk("#r�Բ���,Ϊ�˳��׵Ĳ����������,ֻ��һ��ǰ��..");
                        cm.dispose();
                        return;
                    }
                    var em = cm.getEventManager("yfgdsd");
                    if (em == null) {
                        cm.sendOk("�˸���������,����ϵ�ܹ��޸���.");
                        cm.dispose();
                        return;
                    } else {
                        var prop = em.getProperty("state");
                        if (prop == null) {
                            cm.sendOk("�Ѿ���������ս�ˣ����Ե�һ�ᣬ���߻������߳���һ�£�..");
                            cm.dispose();
                            return;
                        }
                    }
                    if (cm.getChar().getVip() >= 6) {
                        cm.worldMessage("��" + cm.getChar().getName() + "����ʼ��ս�񼶸������ɵ��ϵۡ�~����һ���ڴ����ٹ���~");
                        em.startInstance(cm.getParty(), cm.getPlayer().getMap());
                    } else {
                        if (cm.haveItem(4001126, 50) == true && cm.haveItem(4002002, 10) == true) {
                            if (cm.getChar().getBossLog("yfgdsd") > 0) {
                                if (cm.getXw() < 300) {
                                    cm.sendOk("#r�Բ����������Ѿ���ս��һ���ˣ�����Ҫ�ڴ���ս���������300��Ϊ��ſ��Խ���..");
                                    cm.dispose();
                                    return;
                                }
                            cm.setXw(cm.getXw() - 300);
                            } else {
                                //cm.resetBossLog("yfzsmd");
                            }
                            cm.setBossLog("yfgdsd");
                            cm.gainItem(4001126, -50);
                            cm.gainItem(4002002, -10);
                            cm.worldMessage("��" + cm.getChar().getName() + "����ʼ��ս�񼶸������ɵ��ϵۡ�~����һ���ڴ����ٹ���~");
                            em.startInstance(cm.getParty(), cm.getPlayer().getMap());
                        } else {
                            cm.sendOk("#r�����û���㹻����Ϊ����߷�Ҷ��������Ʊ,�Ҳ��������ȥ..");
                            cm.dispose();
                            return;
                        }
                    }
                }
                cm.dispose();
                return;
            }
            else if (typede == 4) { //��ս����
                if (cm.getParty() == null) { // No Party
                    cm.sendOk("��Ҫ��#b����#kһ�����,����ֻ������һ����~.zzzZZZZZ..");
                    cm.dispose();
                    return;
                } else if (!cm.isLeader()) { // Not Party Leader
                    cm.sendOk("��жӳ�����˵��.");
                    cm.dispose();
                    return;
                } else if (cm.getMap(910023100).getCharactersSize() > 0) { // Not Party Leader
                    cm.sendOk("��������ս�˸��������Ե�һ�ᣬ���߻������߳���һ�£�..");
                    cm.dispose();
                    return;
                } else {
                    var party = cm.getParty().getMembers();
                    if (party.size() > 1) {
                        cm.sendOk("#r�Բ���,Ϊ�˳��׵Ĳ����������,ֻ��һ��ǰ��..");
                        cm.dispose();
                        return;
                    }
                    var em = cm.getEventManager("yftzcg");
                    if (em == null) {
                        cm.sendOk("�˸���������,����ϵ�ܹ��޸���.");
                        cm.dispose();
                        return;
                    } else {
                        var prop = em.getProperty("state");
                        if (prop == null) {
                            cm.sendOk("�Ѿ���������ս�ˣ����Ե�һ�ᣬ���߻������߳���һ�£�..");
                            cm.dispose();
                            return;
                        }
                    }
                    if (cm.getChar().getVip() >= 6) {
                        cm.worldMessage("��" + cm.getChar().getName() + "����ʼ��ս�񼶸�������ս���硻~����һ���ڴ����ٹ���~");
                        em.startInstance(cm.getParty(), cm.getPlayer().getMap());
                    } else {
                        if (cm.haveItem(4001126, 50) == true && cm.haveItem(4002002, 10) == true) {
                            if (cm.getChar().getBossLog("yftzcg") > 0) {
                                if (cm.getHyPay(1) < 5000) {
                                    cm.sendOk("#r�Բ����������Ѿ���ս��һ���ˣ�����Ҫ�ڴ���ս���������5000���ѱҲſ��Խ���..");
                                    cm.dispose();
                                    return;
                                }
                                cm.addHyPay(5000);
                            } else {
                                //cm.resetBossLog("yftzcg");
                            }
                            cm.setBossLog("yfgdsd");
                            cm.gainItem(4001126, -50);
                            cm.gainItem(4002002, -10);
                            cm.worldMessage("��" + cm.getChar().getName() + "����ʼ��ս�񼶸�������ս���硻~����һ���ڴ����ٹ���~");
                            em.startInstance(cm.getParty(), cm.getPlayer().getMap());
                        } else {
                            cm.sendOk("#r�����û���㹻�����ѱһ��߷�Ҷ��������Ʊ,�Ҳ��������ȥ..");
                            cm.dispose();
                            return;
                        }
                    }
                }
                cm.dispose();
                return;
            }
            else if (typede == 5) { //�����
                if (cm.getParty() == null) { // No Party
                    cm.sendOk("��Ҫ��#b����#kһ�����,����ֻ������һ����~.zzzZZZZZ..");
                    cm.dispose();
                    return;
                } else if (!cm.isLeader()) { // Not Party Leader
                    cm.sendOk("��жӳ�����˵��.");
                    cm.dispose();
                    return;
                } else if (cm.getMap(980000103).getCharactersSize() > 0) { // Not Party Leader
                    cm.sendOk("��������ս�˸��������Ե�һ�ᣬ���߻������߳���һ�£�..");
                    cm.dispose();
                    return;
                } else {
                    var party = cm.getParty().getMembers();
                    if (party.size() > 1) {
                        cm.sendOk("#r�Բ���,Ϊ�˳��׵Ĳ����������,ֻ��һ��ǰ��..");
                        cm.dispose();
                        return;
                    }
                    var em = cm.getEventManager("yfjdwg");
                    if (em == null) {
                        cm.sendOk("�˸���������,����ϵ�ܹ��޸���.");
                        cm.dispose();
                        return;
                    } else {
                        var prop = em.getProperty("state");
                        if (prop == null) {
                            cm.sendOk("�Ѿ���������ս�ˣ����Ե�һ�ᣬ���߻������߳���һ�£�..");
                            cm.dispose();
                            return;
                        }
                    }
                    if (cm.getChar().getVip() >= 5) {
                        cm.worldMessage("��" + cm.getChar().getName() + "����ʼ��ս�򵥼��������������~����һ���ڴ����ٹ���~");
                        em.startInstance(cm.getParty(), cm.getPlayer().getMap());
                    } else {
                        if ((cm.getPlayer().getReborns() >= 0 && cm.getPlayer().getReborns() < 10)) {
                            if (cm.getChar().getBossLog("yfjdwg") > 1) {
                                if (cm.getHyPay(1) < 1000) {
                                    cm.sendOk("#r�Բ����������Ѿ���ս��2���ˣ�����Ҫ�ڴ���ս���������1000���ѱҲſ��Խ���..");
                                    cm.dispose();
                                    return;
                                }
                                cm.addHyPay(1000);
                            } else {
                                //cm.resetBossLog("yfjdwg");
                            }
                            cm.setBossLog("yfjdwg");
                            cm.worldMessage("��" + cm.getChar().getName() + "����ʼ��ս�򵥼��������������~����һ���ڴ����ٹ���~");
                            em.startInstance(cm.getParty(), cm.getPlayer().getMap());
                        } else {
                            cm.sendOk("��ѡ����ѶȲ��ʺ���ĵȼ���..");
                            cm.dispose();
                            return;
                        }
                    }
                }
                cm.dispose();
                return;
            }
            else if (typede == 6) { //������
                if (cm.getParty() == null) { // No Party
                    cm.sendOk("��Ҫ��#b����#kһ�����,����ֻ������һ����~.zzzZZZZZ..");
                    cm.dispose();
                    return;
                } else if (!cm.isLeader()) { // Not Party Leader
                    cm.sendOk("��жӳ�����˵��.");
                    cm.dispose();
                    return;
                } else if (cm.getMap(980000103).getCharactersSize() > 0) { // Not Party Leader
                    cm.sendOk("��������ս�˸��������Ե�һ�ᣬ���߻������߳���һ�£�..");
                    cm.dispose();
                    return;
                } else {
                    var party = cm.getParty().getMembers();
                    if (party.size() > 1) {
                        cm.sendOk("#r�Բ���,Ϊ�˳��׵Ĳ����������,ֻ��һ��ǰ��..");
                        cm.dispose();
                        return;
                    }
                    var em = cm.getEventManager("yfjdrmw");
                    if (em == null) {
                        cm.sendOk("�˸���������,����ϵ�ܹ��޸���.");
                        cm.dispose();
                        return;
                    } else {
                        var prop = em.getProperty("state");
                        if (prop == null) {
                            cm.sendOk("�Ѿ���������ս�ˣ����Ե�һ�ᣬ���߻������߳���һ�£�..");
                            cm.dispose();
                            return;
                        }
                    }
                    if (cm.getChar().getVip() >= 5) {
                        cm.worldMessage("��" + cm.getChar().getName() + "����ʼ��ս�򵥼���������������~����һ���ڴ����ٹ���~");
                        em.startInstance(cm.getParty(), cm.getPlayer().getMap());
                    } else {
                        if ((cm.getPlayer().getReborns() >= 0 && cm.getPlayer().getReborns() < 10)) {
                            if (cm.getChar().getBossLog("yfjdrmw") > 1) {
                                if (cm.getHyPay(1) < 1000) {
                                    cm.sendOk("#r�Բ����������Ѿ���ս��2���ˣ�����Ҫ�ڴ���ս���������1000���ѱҲſ��Խ���..");
                                    cm.dispose();
                                    return;
                                }
                                cm.addHyPay(1000);
                            } else {
                                //cm.resetBossLog("yfjdrmw");
                            }
                            cm.setBossLog("yfjdrmw");
                            cm.worldMessage("��" + cm.getChar().getName() + "����ʼ��ս�򵥼���������������~����һ���ڴ����ٹ���~");
                            em.startInstance(cm.getParty(), cm.getPlayer().getMap());
                        } else {
                            cm.sendOk("��ѡ����ѶȲ��ʺ���ĵȼ���..");
                            cm.dispose();
                            return;
                        }
                    }
                }
                cm.dispose();
                return;
            }
            else if (typede == 7) { //��ͨ���鴬
                if (cm.getParty() == null) { // No Party
                    cm.sendOk("��Ҫ��#b����#kһ�����,����ֻ������һ����~.zzzZZZZZ..");
                    cm.dispose();
                    return;
                } else if (!cm.isLeader()) { // Not Party Leader
                    cm.sendOk("��жӳ�����˵��.");
                    cm.dispose();
                    return;
                } else if (cm.getMap(980000203).getCharactersSize() > 0) { // Not Party Leader
                    cm.sendOk("��������ս�˸��������Ե�һ�ᣬ���߻������߳���һ�£�..");
                    cm.dispose();
                    return;
                } else {
                    var party = cm.getParty().getMembers();
                    if (party.size() > 1) {
                        cm.sendOk("#r�Բ���,Ϊ�˳��׵Ĳ����������,ֻ��һ��ǰ��..");
                        cm.dispose();
                        return;
                    }
                    var em = cm.getEventManager("yfptylc");
                    if (em == null) {
                        cm.sendOk("�˸���������,����ϵ�ܹ��޸���.");
                        cm.dispose();
                        return;
                    } else {
                        var prop = em.getProperty("state");
                        if (prop == null) {
                            cm.sendOk("�Ѿ���������ս�ˣ����Ե�һ�ᣬ���߻������߳���һ�£�..");
                            cm.dispose();
                            return;
                        }
                    }
                    if (cm.getChar().getVip() >= 5) {
                        cm.worldMessage("��" + cm.getChar().getName() + "����ʼ��ս��ͨ�����������鴬��~����һ���ڴ����ٹ���~");
                        em.startInstance(cm.getParty(), cm.getPlayer().getMap());
                    } else {
                        if ((cm.getPlayer().getReborns() > 10 && cm.getPlayer().getReborns() < 50)) {
                            if (cm.getChar().getBossLog("yfptylc") > 1) {
                                if (cm.getHyPay(1) < 1000) {
                                    cm.sendOk("#r�Բ����������Ѿ���ս��2���ˣ�����Ҫ�ڴ���ս���������1000���ѱҲſ��Խ���..");
                                    cm.dispose();
                                    return;
                                }
                                cm.addHyPay(1000);
                            } else {
                                //cm.resetBossLog("yfptylc");
                            }
                            cm.setBossLog("yfptylc");
                            cm.worldMessage("��" + cm.getChar().getName() + "����ʼ��ս��ͨ�����������鴬��~����һ���ڴ����ٹ���~");
                            em.startInstance(cm.getParty(), cm.getPlayer().getMap());
                        } else {
                            cm.sendOk("��ѡ����ѶȲ��ʺ���ĵȼ���..");
                            cm.dispose();
                            return;
                        }
                    }
                }
                cm.dispose();
                return;
            }
            else if (typede == 8) { //��ͨ��ӥ
                if (cm.getParty() == null) { // No Party
                    cm.sendOk("��Ҫ��#b����#kһ�����,����ֻ������һ����~.zzzZZZZZ..");
                    cm.dispose();
                    return;
                } else if (!cm.isLeader()) { // Not Party Leader
                    cm.sendOk("��жӳ�����˵��.");
                    cm.dispose();
                    return;
                } else if (cm.getMap(980000203).getCharactersSize() > 0) { // Not Party Leader
                    cm.sendOk("��������ս�˸��������Ե�һ�ᣬ���߻������߳���һ�£�..");
                    cm.dispose();
                    return;
                } else {
                    var party = cm.getParty().getMembers();
                    if (party.size() > 1) {
                        cm.sendOk("#r�Բ���,Ϊ�˳��׵Ĳ����������,ֻ��һ��ǰ��..");
                        cm.dispose();
                        return;
                    }
                    var em = cm.getEventManager("yfptty");
                    if (em == null) {
                        cm.sendOk("�˸���������,����ϵ�ܹ��޸���.");
                        cm.dispose();
                        return;
                    } else {
                        var prop = em.getProperty("state");
                        if (prop == null) {
                            cm.sendOk("�Ѿ���������ս�ˣ����Ե�һ�ᣬ���߻������߳���һ�£�..");
                            cm.dispose();
                            return;
                        }
                    }
                    if (cm.getChar().getVip() >= 5) {
                        cm.worldMessage("��" + cm.getChar().getName() + "����ʼ��ս��ͨ����������ӥ��~����һ���ڴ����ٹ���~");
                        em.startInstance(cm.getParty(), cm.getPlayer().getMap());
                    } else {
                        if ((cm.getPlayer().getReborns() > 10 && cm.getPlayer().getReborns() < 50)) {
                            if (cm.getChar().getBossLog("yfptty") > 1) {
                                if (cm.getHyPay(1) < 1000) {
                                    cm.sendOk("#r�Բ����������Ѿ���ս��2���ˣ�����Ҫ�ڴ���ս���������1000���ѱҲſ��Խ���..");
                                    cm.dispose();
                                    return;
                                }
                                cm.addHyPay(1000);
                            } else {
                                //cm.resetBossLog("yfptty");
                            }
                            cm.setBossLog("yfptty");
                            cm.worldMessage("��" + cm.getChar().getName() + "����ʼ��ս��ͨ����������ӥ��~����һ���ڴ����ٹ���~");
                            em.startInstance(cm.getParty(), cm.getPlayer().getMap());
                        } else {
                            cm.sendOk("��ѡ����ѶȲ��ʺ���ĵȼ���..");
                            cm.dispose();
                            return;
                        }
                    }
                }
                cm.dispose();
                return;
            }
            else if (typede == 9) { //����Ż����
                if (cm.getParty() == null) { // No Party
                    cm.sendOk("��Ҫ��#b����#kһ�����,����ֻ������һ����~.zzzZZZZZ..");
                    cm.dispose();
                    return;
                } else if (!cm.isLeader()) { // Not Party Leader
                    cm.sendOk("��жӳ�����˵��.");
                    cm.dispose();
                    return;
                } else if (cm.getMap(980000303).getCharactersSize() > 0) { // Not Party Leader
                    cm.sendOk("��������ս�˸��������Ե�һ�ᣬ���߻������߳���һ�£�..");
                    cm.dispose();
                    return;
                } else {
                    var party = cm.getParty().getMembers();
                    if (party.size() > 1) {
                        cm.sendOk("#r�Բ���,Ϊ�˳��׵Ĳ����������,ֻ��һ��ǰ��..");
                        cm.dispose();
                        return;
                    }
                    var em = cm.getEventManager("yfknoll");
                    if (em == null) {
                        cm.sendOk("�˸���������,����ϵ�ܹ��޸���.");
                        cm.dispose();
                        return;
                    } else {
                        var prop = em.getProperty("state");
                        if (prop == null) {
                            cm.sendOk("�Ѿ���������ս�ˣ����Ե�һ�ᣬ���߻������߳���һ�£�..");
                            cm.dispose();
                            return;
                        }
                    }
                    if (cm.getChar().getVip() >= 5) {
                        cm.worldMessage("��" + cm.getChar().getName() + "����ʼ��ս���Ѽ�������ŷ������~����һ���ڴ����ٹ���~");
                        em.startInstance(cm.getParty(), cm.getPlayer().getMap());
                    } else {
                        if ((cm.getPlayer().getReborns() > 50 && cm.getPlayer().getReborns() < 200)) {
                            if (cm.getChar().getBossLog("yfknoll") > 1) {
                                if (cm.getHyPay(1) < 1000) {
                                    cm.sendOk("#r�Բ����������Ѿ���ս��2���ˣ�����Ҫ�ڴ���ս���������1000���ѱҲſ��Խ���..");
                                    cm.dispose();
                                    return;
                                }
                                cm.addHyPay(1000);
                            } else {
                                //cm.resetBossLog("yfknoll");
                            }
                            cm.setBossLog("yfknoll");
                            cm.worldMessage("��" + cm.getChar().getName() + "����ʼ��ս���Ѽ�������ŷ������~����һ���ڴ����ٹ���~");
                            em.startInstance(cm.getParty(), cm.getPlayer().getMap());
                        } else {
                            cm.sendOk("��ѡ����ѶȲ��ʺ���ĵȼ���..");
                            cm.dispose();
                            return;
                        }
                    }
                }
                cm.dispose();
                return;
            }
            else if (typede == 10) { //����Ż����
                if (cm.getParty() == null) { // No Party
                    cm.sendOk("��Ҫ��#b����#kһ�����,����ֻ������һ����~.zzzZZZZZ..");
                    cm.dispose();
                    return;
                } else if (!cm.isLeader()) { // Not Party Leader
                    cm.sendOk("��жӳ�����˵��.");
                    cm.dispose();
                    return;
                } else if (cm.getMap(980000303).getCharactersSize() > 0) { // Not Party Leader
                    cm.sendOk("��������ս�˸��������Ե�һ�ᣬ���߻������߳���һ�£�..");
                    cm.dispose();
                    return;
                } else {
                    var party = cm.getParty().getMembers();
                    if (party.size() > 1) {
                        cm.sendOk("#r�Բ���,Ϊ�˳��׵Ĳ����������,ֻ��һ��ǰ��..");
                        cm.dispose();
                        return;
                    }
                    var em = cm.getEventManager("yfknylm");
                    if (em == null) {
                        cm.sendOk("�˸���������,����ϵ�ܹ��޸���.");
                        cm.dispose();
                        return;
                    } else {
                        var prop = em.getProperty("state");
                        if (prop == null) {
                            cm.sendOk("�Ѿ���������ս�ˣ����Ե�һ�ᣬ���߻������߳���һ�£�..");
                            cm.dispose();
                            return;
                        }
                    }
                    if (cm.getChar().getVip() >= 5) {
                        cm.worldMessage("��" + cm.getChar().getName() + "����ʼ��ս���Ѽ�����������ħ��~����һ���ڴ����ٹ���~");
                        em.startInstance(cm.getParty(), cm.getPlayer().getMap());
                    } else {
                        if ((cm.getPlayer().getReborns() > 50 && cm.getPlayer().getReborns() < 200)) {
                            if (cm.getChar().getBossLog("yfknylm") > 1) {
                                if (cm.getHyPay(1) < 1000) {
                                    cm.sendOk("#r�Բ����������Ѿ���ս��2���ˣ�����Ҫ�ڴ���ս���������1000���ѱҲſ��Խ���..");
                                    cm.dispose();
                                    return;
                                }
                                cm.addHyPay(1000);
                            } else {
                                //cm.resetBossLog("yfknylm");
                            }
                            cm.setBossLog("yfknylm");
                            cm.worldMessage("��" + cm.getChar().getName() + "����ʼ��ս���Ѽ�����������ħ��~����һ���ڴ����ٹ���~");
                            em.startInstance(cm.getParty(), cm.getPlayer().getMap());
                        } else {
                            cm.sendOk("��ѡ����ѶȲ��ʺ���ĵȼ���..");
                            cm.dispose();
                            return;
                        }
                    }
                }
                cm.dispose();
                return;
            } else if (typede == 13) { //����Ż����
                if (cm.getMin() < 2 || cm.getMin() > 5) {
                    cm.sendOk("���˺���������ÿ������2��-5�ֿ���\r\n���磺1��2��-1��5�֣�����Ҳ�ṫ��֪ͨ\r\n������ʱ��:#e" + cm.getHour() + "��" + cm.getMin() + "��" + cm.getSec() + "��#n");
                    cm.dispose();
                } else {
                    cm.warp(251010404);
                    cm.sendOk("����5��֮ǰ����3�˶��鹲ͬ�ֿ��������֣�����˲��볡\r\n������ʱ��:#e" + cm.getHour() + "��" + cm.getMin() + "��" + cm.getSec() + "��#n");
                    cm.dispose();
                }
            } else if (typede == 14) { //����Ż����
                if (cm.getParty() == null) { // Not Party Leader
                    cm.sendOk("��Ҫ��#b����#kһ�����,����ֻ������һ����~.zzzZZZZZ..");
                    cm.dispose();
                } else if (!cm.isLeader()) { // Not Party Leader
                    cm.sendOk("��жӳ�����˵��");
                    cm.dispose();
                } else if (cm.getMap(951000100).getCharactersSize() > 0) { // Not Party Leader
                    cm.sendOk("�����˿�ʼ�ᱦ���¸�ʱ��������....");
                    cm.dispose();
                } else if (cm.getPlayer().getClient().getChannel() != 1) { // Not Party Leader
                    cm.sendOk("�ᱦֻ��1Ƶ������.... ");
                    cm.dispose();
                } else {
                    var party = cm.getParty().getMembers();
                    if (party.size() > 1) {
                        cm.sendOk("�Բ���,����ֿ�ֻ��1�˿��ţ��뵥�����");
                        cm.dispose();
                        return;
                    }
                    var em = cm.getEventManager("yfbeiyong1");
                    if (em == null) {
                        cm.sendOk("�˸���������,����ϵ�ܹ��޸���.");
                        cm.dispose();
                        return;
                    } else {
                        var prop = em.getProperty("state");
                        if (prop == null) {
                            cm.sendOk("�Ѿ���������ս�ˣ����Ե�һ�ᣬ���߻������߳���һ�£�..");
                            cm.dispose();
                            return;
                        }
                    }
                    if (cm.getMin() == 20) {
                        cm.worldMessage("[��ʱ�ᱦ]�����[" + cm.getChar().getName() + "]�����˱���ֿ⣬���ף�����ɡ���");
                        em.startInstance(cm.getParty(), cm.getPlayer().getMap());
                        cm.dispose();
                    } else {
                        cm.sendOk("��ʱ�ᱦ������ÿ������20��-21�ֿ���\r\n���磺1��20��-1��21�֣����ŵ�ʱ��Ҳ�ṫ��֪ͨ\r\n������ʱ��:#e" + cm.getHour() + "��" + cm.getMin() + "��" + cm.getSec() + "��#n");
                        cm.dispose();
                    }
                }
            } else if (typede == 15) { //����Ż����
                if (cm.getParty() == null) { // Not Party Leader
                    cm.sendOk("��Ҫ��#b����#kһ�����,~.zzzZZZZZ..");
                    cm.dispose();
                } else if (!cm.isLeader()) { // Not Party Leader
                    cm.sendOk("��жӳ�����˵��");
                    cm.dispose();
                } else if (cm.getMap(689013000).getCharactersSize() > 0) { // Not Party Leader
                    cm.sendOk("�����˿�ʼ�ᱦ���¸�ʱ��������....");
                    cm.dispose();
                } else if (cm.getPlayer().getClient().getChannel() != 1) { // Not Party Leader
                    cm.sendOk("�ᱦֻ��1Ƶ������.... ");
                    cm.dispose();
                } else {
                    var party = cm.getParty().getMembers();
                    if (party.size() < 3) {
                        cm.sendOk("�Բ��𣬷�ɫ��������ǿ�󣬱���3����Ӳ���ǰ��");
                        cm.dispose();
                        return;
                    }
                    var em = cm.getEventManager("PinkZakum");
                    if (em == null) {
                        cm.sendOk("�˸���������,����ϵ�ܹ��޸���.");
                        cm.dispose();
                        return;
                    } else {
                        var prop = em.getProperty("state");
                        if (prop == null) {
                            cm.sendOk("�Ѿ���������ս�ˣ����Ե�һ�ᣬ���߻������߳���һ�£�..");
                            cm.dispose();
                            return;
                        }
                    }
                    if (cm.getMin() > 35 && cm.getMin() < 58) {
                        cm.worldMessage("[��ɫ����]�����[" + cm.getChar().getName() + "]�������Ķ���ȥ������ɫ����ȥ��~");
                        em.startInstance(cm.getParty(), cm.getPlayer().getMap());
                        cm.dispose();
                    } else {
                        cm.sendOk("��ս��ɫ����������ÿ������35��-55�ֿ���\r\n���磺1��35��-1��55�֣����ŵ�ʱ��Ҳ�ṫ��֪ͨ\r\n������ʱ��:#e" + cm.getHour() + "��" + cm.getMin() + "��" + cm.getSec() + "��#n");
                        cm.dispose();
                    }
                }
            } else if (typede == 25) {
                if (cm.getMin() > 30) {
                    cm.sendOk("���б�ʯ��װ�Ĳ��ӻ�û��...\r\n���ǵ��������Ϣʱ��Ϊ�����0-30�֣��Ǹ�ʱ��������");
                    cm.dispose();
                    return;
                }
                if (cm.getParty() == null) { // Not Party Leader
                    cm.sendOk("��Ҫ��#b����#kһ�����,~.zzzZZZZZ..");
                    cm.dispose();
                    return;
                }
                    var party = cm.getParty().getMembers();
                    if (party.size() > 1) {
                    cm.sendOk("Ϊ�˲������������ֻ��1����ǰ��zzz.....");
                    cm.dispose();
                    return;
                }
                    if (cm.getMap(980000403).getCharactersSize() > 0) {
                    cm.sendOk("�Ѿ���������ս�ˡ��Ժ�������....");
                    cm.dispose();
                    return;
                } else if (!cm.isLeader()) { // Not Party Leader
                    cm.sendOk("��жӳ�����˵��");
                    cm.dispose();
                }
                var em = cm.getEventManager("yfyl0");
                if (em == null) {
                    cm.sendOk("�˸���������,����ϵ�ܹ��޸���.");
                    cm.dispose();
                    return;
                } else {
                    var prop = em.getProperty("state");
                    if (prop == null) {
                        cm.sendOk("�Ѿ���������ս�ˣ����Ե�һ�ᣬ���߻������߳���һ�£�..");
                        cm.dispose();
                        return;
                    }
                }
                cm.worldMessage("[���ָ���]�����[" + cm.getChar().getName() + "]���������ᱦʯ��װ���������ף�����ɡ���");
                em.startInstance(cm.getParty(), cm.getPlayer().getMap());
                cm.dispose();
            } else if (typede == 26) {
                if (cm.getMin() < 30) {
                    cm.sendOk("���в�����װ�Ĳ��ӻ�û��...\r\n���ǵ��������Ϣʱ��Ϊ�����30-59�֣��Ǹ�ʱ��������");
                    cm.dispose();
                    return;
                }
                if (cm.getParty() == null) { // Not Party Leader
                    cm.sendOk("��Ҫ��#b����#kһ�����,~.zzzZZZZZ..");
                    cm.dispose();
                    return;
                }
                    var party = cm.getParty().getMembers();
                    if (party.size() > 1) {
                    cm.sendOk("Ϊ�˲������������ֻ��1����ǰ��zzz.....");
                    cm.dispose();
                    return;
                }
                    if (cm.getMap(980000403).getCharactersSize() > 0) {
                    cm.sendOk("�Ѿ���������ս�ˡ��Ժ�������....");
                    cm.dispose();
                    return;
                } else if (!cm.isLeader()) { // Not Party Leader
                    cm.sendOk("��жӳ�����˵��");
                    cm.dispose();
                }
                var em = cm.getEventManager("yfyl1");
                if (em == null) {
                    cm.sendOk("�˸���������,����ϵ�ܹ��޸���.");
                    cm.dispose();
                    return;
                } else {
                    var prop = em.getProperty("state");
                    if (prop == null) {
                        cm.sendOk("�Ѿ���������ս�ˣ����Ե�һ�ᣬ���߻������߳���һ�£�..");
                        cm.dispose();
                        return;
                    }
                }
                cm.worldMessage("[���ָ���]�����[" + cm.getChar().getName() + "]���������Წ����װ���������ף�����ɡ���");
                em.startInstance(cm.getParty(), cm.getPlayer().getMap());
                cm.dispose();
            } else if (typede == 27) {
                if (cm.getMin() < 20 || cm.getMin() > 41) {
                    cm.sendOk("�Բ���,��ֻ����ÿСʱ��ǰ20~31����Ϊ���ṩ����!");
                    cm.dispose();
                    return;
                }
                if (cm.getParty() == null) { // Not Party Leader
                    cm.sendOk("��Ҫ��#b����#kһ�����,~.zzzZZZZZ..");
                    cm.dispose();
                    return;
                } else if (!cm.isLeader()) { // Not Party Leader
                    cm.sendOk("��жӳ�����˵��");
                    cm.dispose();
                }
                var em = cm.getEventManager("yfyl2");
                if (em == null) {
                    cm.sendOk("�˸���������,����ϵ�ܹ��޸���.");
                    cm.dispose();
                    return;
                } else {
                    var prop = em.getProperty("state");
                    if (prop == null) {
                        cm.sendOk("�Ѿ���������ս�ˣ����Ե�һ�ᣬ���߻������߳���һ�£�..");
                        cm.dispose();
                        return;
                    }
                }
                cm.worldMessage("[���ָ���]�����[" + cm.getChar().getName() + "]���������ָ���2�Ѷȣ����ף�����ɡ���");
                em.startInstance(cm.getParty(), cm.getPlayer().getMap());
                cm.dispose();

            } else if (typede == 35) {
                if (cm.getMin() < 40 || cm.getMin() > 50) {
                    cm.sendOk("��ţүү���ڻ�������Ӵ����һ���������40��-50����Ϣ���Ǹ�ʱ��������");
                    cm.dispose();
                    return;
                }
                if (cm.getParty() == null) {
                    cm.sendOk("��Ҫ��#b����#kһ�����,~.zzzZZZZZ..");
                    cm.dispose();
                    return;
                }
                if (cm.getXw() < 30) {
                    cm.sendOk("�Բ���,����Ϊ�㲻��30��,�����г��ݻ��!");
                    cm.dispose();
                    return;
                }
                    var party = cm.getParty().getMembers();
                    if (party.size() > 1) {
                    cm.sendOk("Ϊ�˲������������ֻ��1����ǰ��zzz.....");
                    cm.dispose();
                    return;
                }
                    if (cm.getMap(980000503).getCharactersSize() > 0) {
                    cm.sendOk("�Ѿ���������ս�ˡ��Ժ�������....");
                    cm.dispose();
                    return;
                }
                 else if (!cm.isLeader()) { // Not Party Leader
                    cm.sendOk("��жӳ�����˵��");
                    cm.dispose();
                    return;
                }
                var em = cm.getEventManager("yfwn");
                if (em == null) {
                    cm.sendOk("�˸���������,����ϵ�ܹ��޸���.");
                    cm.dispose();
                    return;
                } else {
                    var prop = em.getProperty("state");
                    if (prop == null) {
                        cm.sendOk("�Ѿ���������ս�ˣ����Ե�һ�ᣬ���߻������߳���һ�£�..");
                        cm.dispose();
                        return;
                    }
                }
                cm.worldMessage("[���޸���]�����[" + cm.getChar().getName() + "]��������ţ������Ʊ���������ף�����ɡ���");
                em.startInstance(cm.getParty(), cm.getPlayer().getMap());
                cm.dispose();
            } else if (typede == 36) {
                if (cm.getParty() == null) {
                    cm.sendOk("��Ҫ��#b����#kһ�����,~.zzzZZZZZ..");
                    cm.dispose();
                    return;
                }
                if (cm.getXw() < 400) {
                    cm.sendOk("�Բ���,����Ϊ�㲻��400��,�����г��ݻ��!");
                    cm.dispose();
                    return;
                }
                    var party = cm.getParty().getMembers();
                    if (party.size() > 1) {
                    cm.sendOk("Ϊ�˲������������ֻ��1����ǰ��zzz.....");
                    cm.dispose();
                    return;
                }
                    if (cm.getMap(980000503).getCharactersSize() > 0) {
                    cm.sendOk("�Ѿ���������ս�ˡ��Ժ�������....");
                    cm.dispose();
                    return;
                }
                 else if (!cm.isLeader()) { // Not Party Leader
                    cm.sendOk("��жӳ�����˵��");
                    cm.dispose();
                    return;
                }
                var em = cm.getEventManager("yfyxjm");
                if (em == null) {
                    cm.sendOk("�˸���������,����ϵ�ܹ��޸���.");
                    cm.dispose();
                    return;
                } else {
                    var prop = em.getProperty("state");
                    if (prop == null) {
                        cm.sendOk("�Ѿ���������ս�ˣ����Ե�һ�ᣬ���߻������߳���һ�£�..");
                        cm.dispose();
                        return;
                    }
                }
                cm.worldMessage("[���޸���]�����[" + cm.getChar().getName() + "]������Ӣ�۾������������ף�����ɡ���");
                cm.setXw(cm.getXw() - 300);
                em.startInstance(cm.getParty(), cm.getPlayer().getMap());
                cm.dispose();
            }
        } else if (status == 3) {
            if (typede == 13) {
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
            if (typede == 14) {
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
            if (typede == 15) {
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

            if (typede == 101) {
                Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, selection, 1, true);
                cm.sendOk("��ϲ,�˵����ѱ����.");
                cm.dispose();
            }
            if (typede == 102) {
                Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.CASH, selection, 1, true);
                cm.sendOk("��ϲ,�˵����ѱ����.");
                cm.dispose();
            }
        }
    }
}

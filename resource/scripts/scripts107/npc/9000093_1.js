var status = 0;
var typede = 0;
var eff = "#fEffect/CharacterEff/1112905/0/1#";
var hwtext = new Array("�˳���Ư��������Ư����", "������ʧȥƤ�����Ŷ���ʲ�����������", "�̲���������������'����'��", "�㷢ŭһ���ӣ���ʧȥ60����Ҹ���", "����������Ů�ˣ��Ӵ�ֻ�м����գ�û�ж����ա�", "·����ƽһ���𣬺��������ǰ�ߡ�", "�Ҹ��Ǹ��Ƚϼ���Ҫ�ж�����ײŸо��õ���", "֪ʶ�����ڿ㣬������������Ҫ", "��Ϊʧ�ܵĵ��ͣ���ʵ����̫�ɹ���", "Ů��ϲ�����û��������ˣ�����ϲ�������˵�����", "�����ˣ��������ٿ�", "�������ᣬ��ʪ�����ҵ���", "��δ���������ù�ȥ��ȥ", "���Ժᵶ����Ц��Ц��֮��ȥ˯��", "�����̸���飬̸������Ǯ", "�µ���һ���˵Ŀ񻶣�����һȺ�˵Ĺµ�", "�㲻�������õģ������������溰�浽", "�Ҳ��ǲݴ�����ļ��������ⷢ", "��İ�������ģ��ҵ���ȴ����ʱ��", "�e�����ĵ�ʱ������ң���Ȼ�Ե����Ƕ����", "�㲻�ǵ��ӻ�����Ҫ���Ƕ��Ž㿴", "��ʹ����������������ҲҪ�ƻ���ľ", "����ֻ����һ��Ƶ�� ��ɺ޵��ǻ�û�й��", "�������ı��������ǻ�ı����Ҹ�", "Ҫ������ʦ˵����������������Ȼ��������ӳ�ȥ", "û����󡣬���Ҳ���į", "���ǹ���ҿɳܣ��Ҹ������˷�ֽ", "����û�������ֻ�к���ͽ��", "����ô��Ǯ Ϊʲô���ù�����ĥ��", "����˺͹����Ტ�ۣ����������ҳ�", "���������������������ȥ", "���������˻�ɴ ��Ҳ����������", "����������ܸɵĻ��¶����˰ɣ�û������", "������ֻ�������� 1 ��Ҳ���� 2 ��Ҳ����", "���⳵˾����˾���е�ս��������Ү! ", "˼���ж�Զ����͸��ҹ���Զ!", "�������ı������ഺ����,�ഺ��ȴ���ڡ�", "��򵥵ĳ����ؾ�:���ֺ�������Ҫ����~", "������Ҳ��˵�����ǻ�ûʹ���˼���!", "��Ҫ���ұ���,�����ú����", "�Ҳ��Ǹ������� ���������������", "���»�һ���ĵ��ˣ�������һ���Ķ���", "�ϻ������� �㵱����HELLO KITTY��", "��������߾��磺��ǽ������ǽ����", "үү���Ǵ������߹����ġ���", "������ǲ��ã����ʱ�����������綼û�ú�", "ûʲô�¾Ͳ�Ҫ���ң������˸���Ҫ���ҡ�", "���������������Ѿ����ˡ���", "Ǯ���Խ�������ⶼ�������⡣", "���ģ��ҵ��·������ˣ�", "���Ա������������ʰ���", "�����Ҳ�ţ������ɵ�˰ɣ�", "���³�������׳������ûǮŮ���֡�", "�����ǮҲ��һ�ִ�����Ըһ���ٴ�", "���˸���ϴ�ƣ��������Ƶ��������Լ���", "�úû��ţ���Ϊ���ǻ����ܾ�!", "���ֲ���������ѧ�˼�ͺ����", "������ţa��ţc֮���ǻ���", "���±������ã�������û�á�", "�����ҵ�����ô�࣬�����ϼ�? ", "�㷢ȥ���٣�ͷм�����ڣ�", "��ɫ��԰�ز�ס�����պ��ӳ�ǽ����", "��������Ϊ���һ�ｵһ��", "bmw�Ǳ����ң�msn��������", "ŮΪ�ü�����,��Ϊ�ü���� ", "����ʮ�����飬�����׶�԰�ȽϺû�");

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
            cm.sendNext("ΰ���#b#h ##k�����Ǳ������˸�����NPC���������п��ŵĵ��˸����������������Ӵ")
        } else if (status == 1) {
            if (cm.getMapId() == 910023100 || cm.getMapId() == 910023400) {
                cm.sendSimple("����BOSS����?����\r\n#L0#��Ҫ�뿪");
            } else {
                var hwchance = Math.floor(Math.random() * hwtext.length);
                cm.sendSimpleS("#r��Ĭʱ��:" + hwtext[hwchance] + "#k\r\n������ʱ��:#e" + cm.getHour() + "��" + cm.getMin() + "��" + cm.getSec() + "��#n  ���ѱ����:#e" + cm.getHyPay(1) + "#n�� #r#L0#�ص��г�#k#l\r\n\r\n#r=================���Ƽ��𸱱�========================#k\r\n#L5#" + eff + "#g[�򵥼�]#k��ս�����" + eff + "#L6#" + eff + "#g[�򵥼�]#k��ս������" + eff + "#l\r\n#L7#" + eff + "#d[��ͨ��]#k��ս���鴬" + eff + "#L8#" + eff + "#d[��ͨ��]#k��ս��ӥ����" + eff + "#l\r\n#L9#" + eff + "#r[���Ѽ�]#k��սŷ����" + eff + "#L10#" + eff + "#r[���Ѽ�]#k��ս����ħ" + eff + "#l\r\n\r\n#r=================�����Ƽ��𸱱�======================#k\r\n#L1#" + eff + "#r[��]#b[װ��]#k������" + eff + "#L2#" + eff + "#r[��]#b[��װ]#kնɱħ��" + eff + "\r\n#L3#" + eff + "#r[��]#b[����]#k�ɵ��ϵ�" + eff + "#L4#" + eff + "#r[��]#b[����]#k��ս����" + eff + "#l\r\n\r\n#r=================���鸱��=============================#k\r\n#L11#" + eff + "#d[����]#k��������ϳ�" + eff + "#L12#" + eff + "#d[����]#k���Ȱ�˹��" + eff + "", 2);
            }
        } else if (status == 2) {
            if (selection == 0) { //���ڸ����о��˳�
                cm.warp(910000000, 0);
                cm.dispose();
            } else if (selection == 11) { //��������ϳ�
                cm.sendOk("��������������..�Ժ󿪷�");
                cm.dispose();
            } else if (selection == 12) { //���Ȱ�˹��
                cm.sendOk("��������������..�Ժ󿪷�");
                cm.dispose();
            } else if (selection == 1) { //������
                typede = 1;
                cm.sendNext("��,����,����Ű��������������OUT�ˣ���ӭ����������\r\n#r>>>.Ϊʲôȡ���������~����Ϊ�˸�������BT,һ�������޷�սʤ��~����Ĺ����Ƿ�����~��������սʤ��,�����Ǳ����ܹܲż���ĳ�����װ��,����ͼ:\r\n#v1432084##v1442113##v1302149##v1462076##v1452058##v1442090##v1432066##v1402073##v1382068##v1382058#һ������Զ��м�,���������160�����ϣ������и���ұ�����300����װ��������������~\r\n#r��������:\r\nÿ���һ�ν�:100����Ҷ#v4001126#��2��ľ����Ʊ#v4002002#\r\n#b�ڶ��μ����ϣ���Ҫ������ѱ�2000,#g[�ռ���Աֱ�ӽ���]");
            } else if (selection == 2) { //նɱħ��
                typede = 2;
                cm.sendNext("��˵�У������ߵ�����Ͳ�������а֮�֣����ǻ��Ϊ���������硱��һԱ��������������һλð�ռһ��ܹ����������硱����ʮ���������֣��������־��ǡ���ħ�ۡ�������������̫��ǿ��ڤ�罫���������ӡ�������������ڵ�ħ���Ի�������֮���ǣ�����������ò����������Ҫ��������ͼ�߸�ڤ�����ı���Լ�ģ����������ļ����أ�#rӢ�۵�սʿ��~ά�����ں�ƽ��������~սʤ����ϡ�е�װ���䱸:\r\n#v1000050##v1050227##v1001076##v1042081##v1102453##v1102390##v1102389##v1102385##v1102386##v1102368##v1102367##v1102358##v1102355#���и���ϡ�е�װ���㷢��...~\r\n#r��������:\r\nÿ���һ�ν�:100����Ҷ#v4001126#��10��ľ����Ʊ#v4002002#\r\n#b�ڶ��μ����ϣ���Ҫ������ѱ�2000,#g[�ռ���Աֱ�ӽ���]");
            } else if (selection == 3) { //�ɵ��ϵ�
                typede = 3;
                cm.sendNext("#bһλð�ռ���Ϊһ��δ֪�����ɣ�Ҫ�����ϵۣ����δ֪��~\r\n#k�ϵ�����֮ʼ~�ƶ������˶��ĵ�һ����~����ΰ������ԣ�������֪����������,�ϵ۸�����������ȴҲ���������ǵ�������Լ���������������Ҹ���ȴȡ������������ɣ��˸��Ӷ���Ĵ��⣬������һƬ���ޣ��ϵ�ֻ���ϵۣ����ϵ۴��������࣬�ϵ۲����������ڵ�����,#d������Ϊ�����ռ�����.\r\n#r����:ÿ�αر�һ��#v3993003#�������г�����ߵķ�����NPC�����ռ�װ��ϵ��~\r\n#r��������:\r\nÿ���һ�ν�:200����Ҷ#v4001126#��10��ľ����Ʊ#v4002002#\r\n#b�ڶ��μ����ϣ���Ҫ���5000���ѱ�,#g[�ռ���Աֱ�ӽ���]");
            } else if (selection == 4) { //��ս����
                typede = 4;
                cm.sendNext("�ڴ��ѾõĴ���������������δ�����ճ������������ó��˿��ұ���ϡ�����ӣ��������������������ϡ�����ӣ��������ɣ��㽫��ò��ٵ����ӣ����᲻�ݴ��~\r\n#r��������:\r\nÿ���һ�ν�:200��Ϊ��+2��ľ����Ʊ+300����Ҷ\r\n#b�ڶ��μ����ϣ���Ҫ������ѱ�5000,#g[�ռ���Աֱ�ӽ���]");
            } else if (selection == 5) { //�����
                typede = 5;
                cm.sendNext("���������ð�յ������ߣ���û��4ת��û������ͼ��ʱ���������������죬���緶���ɣ��ȴ���ҽ���նɱ��\r\n#b�ø������#r0-10#bת��ҿ��ţ�Ϊ��ģʽ�������ͼ������10���ӵ�ʱ����ɱ��#e1ֻ3000WѪ�����#n��ɱ�������������[#rð�ձҡ�120װ������Ϊ��#b����һ��]������������Ŷ��\r\n\r\nÿ�տɽ���2�Σ�2�κ����1000���ѱ�(�ռ���Աֱ�ӽ���)#r#e������²���Ӳ��ܽ���#n#b��#b�Ƿ�������һ���أ�");
            } else if (selection == 6) { //������
                typede = 6;
                cm.sendNext("������������ð�յ������ߣ���û��4ת��û������ͼ��ʱ����������������죬����緶���ɣ��ȴ���ҽ���նɱ��\r\n#b�ø������#r0-10#bת��ҿ��ţ�Ϊ��ģʽ�������ͼ������10���ӵ�ʱ����ɱ��#e1ֻ3000WѪ������#n��ɱ����򼽫����[#rð�ձҡ�120װ������Ϊ��#b����һ��]������������Ŷ��\r\n\r\nÿ�տɽ���2�Σ�2�κ����1000���ѱ�(�ռ���Աֱ�ӽ���)#r#e������²���Ӳ��ܽ���#n#b��#b�Ƿ�������һ���أ�");
            } else if (selection == 7) { //��ͨ���鴬
                typede = 7;
                cm.sendNext("���鴬�Ĵ���-�����ȴ������ս����ӵ�г����Ѫ������ǿ�ķ����������Ĵ������Ϊ���ֵ��㣬�ܷ�Ը����أ�\r\n#b�ø������#r10-50#bת��ҿ��ţ�Ϊ��ͨģʽ�������ͼ������5���ӵ�ʱ����ɱ��#e����#n��ɱ������������[#r��Ʊ����Ϊ�㡢130�߼�����#b����һ��]������������Ŷ��\r\n\r\n���ÿ�տ��Խ���2�Σ�2�κ����1000���ѱ�(�ռ���Աֱ�ӽ���)\r\n#r#e������²���Ӳ��ܽ���#n#b��#b�Ƿ�������һ���أ�");
            } else if (selection == 8) { //��ͨ��ӥ
                typede = 8;
                cm.sendNext("��ӥ������ӥ-��ӥ�ȴ������ս����ӵ�г����Ѫ������ǿ�ķ����������Ĵ������Ϊ���ֵ��㣬�ܷ�Ը����أ�\r\n#b�ø������#r10-50#bת��ҿ��ţ�Ϊ��ͨģʽ�������ͼ������5���ӵ�ʱ����ɱ��#e��ӥ#n��ɱ����ӥ������[#r��Ʊ����Ϊ�㡢130�߼�����#b����һ��]������������Ŷ��\r\n\r\n���ÿ�տ��Խ���2�Σ�2�κ����1000���ѱ�(�ռ���Աֱ�ӽ���)\r\b#r#e������²���Ӳ��ܽ���#n#b��#b�Ƿ�������һ���أ�");
            } else if (selection == 9) { //����ŷ����
                typede = 9;
                cm.sendNext("δ�������ŷ����-ŷ�����ȴ������ս����ӵ�г����Ѫ������ǿ�ķ����������Ĵ������Ϊ���ֵ��㣬�ܷ�Ը����أ�\r\n#b�ø������#r50-200#bת��ҿ��ţ�Ϊ����ģʽ�������ͼ������5���ӵ�ʱ����ɱ��#eŷ����#n\r\n-����������\r\n[#r��Ʊ����Ϊ�㡢130�߼�������C������ʯ#b����һ��]������������Ŷ��\r\n-����Ҫ��\r\n#rÿ��ÿ�˿ɽ���2�Ρ�2�κ����1000���ѱ�(�ռ���Աֱ�ӽ���)");
            } else if (selection == 10) { //��������ħ
                typede = 10;
                cm.sendNext("δ�����������ħ-ŷ��������ħ�ȴ������ս����ӵ�г����Ѫ������ǿ�ķ����������Ĵ������Ϊ���ֵ��㣬�ܷ�Ը����أ�\r\n#b�ø������#r50-200#bת��ҿ��ţ�Ϊ����ģʽ�������ͼ������5���ӵ�ʱ����ɱ��#e����ħ#n\r\n-����������\r\n[#r��Ʊ����Ϊ�㡢130�߼�������C������ʯ#b����һ��]������������Ŷ��\r\n-����Ҫ��\r\n#rÿ��ÿ�˿ɽ���2�Ρ�2�κ����1000���ѱ�(�ռ���Աֱ�ӽ���)");
            }
        } else if (status == 3) {
            if (typede == 1) { //������
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
                    var em = cm.getEventManager("yfysgw");
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
                        cm.worldMessage("��" + cm.getChar().getName() + "����ʼ��ս�񼶸����������衻~����һ���ڴ����ٹ���~");
                        em.startInstance(cm.getParty(), cm.getPlayer().getMap());
                    } else {
                        if (cm.haveItem(4001126, 50) == true && cm.haveItem(4002002, 10) == true) {
                            if (cm.getBossLog("yfysgw") > 0) {
                                if (cm.getHyPay(1) < 2000) {
                                    cm.sendOk("#r�Բ����������Ѿ���ս��һ���ˣ�����Ҫ�ڴ���ս���������2000���ѱҲſ��Խ���..");
                                    cm.dispose();
                                    return;
                                }
                                cm.addHyPay(2000);
                            } else {
                                //cm.resetBossLog("yfysgw");
                            }
                            cm.gainItem(4001126, -50);
                            cm.gainItem(4002002, -10);
                            cm.setBossLog("yfysgw");
                            cm.worldMessage("��" + cm.getChar().getName() + "����ʼ��ս�񼶸����������衻~����һ���ڴ����ٹ���~");
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
            else if (typede == 2) { //նɱħ��
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
                    var em = cm.getEventManager("yfzsmd");
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
                        cm.worldMessage("��" + cm.getChar().getName() + "����ʼ��ս�񼶸�����նɱħ�ۡ�~����һ���ڴ����ٹ���~");
                        em.startInstance(cm.getParty(), cm.getPlayer().getMap());
                    } else {
                        if (cm.haveItem(4001126, 50) == true && cm.haveItem(4002002, 10) == true) {
                            if (cm.getChar().getBossLog("yfzsmd") > 0) {
                                if (cm.getHyPay(1) < 2000) {
                                    cm.sendOk("#r�Բ����������Ѿ���ս��һ���ˣ�����Ҫ�ڴ���ս���������2000���ѱҲſ��Խ���..");
                                    cm.dispose();
                                    return;
                                }
                                cm.addHyPay(2000);
                            } else {
                                //cm.resetBossLog("yfzsmd");
                            }
                            cm.setBossLog("yfysgw");
                            cm.gainItem(4001126, -50);
                            cm.gainItem(4002002, -10);
                            cm.worldMessage("��" + cm.getChar().getName() + "����ʼ��ս�񼶸�����նɱħ�ۡ�~����һ���ڴ����ٹ���~");
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
                    if (cm.getChar().getVip() >= 5) {
                        cm.worldMessage("��" + cm.getChar().getName() + "����ʼ��ս�񼶸������ɵ��ϵۡ�~����һ���ڴ����ٹ���~");
                        em.startInstance(cm.getParty(), cm.getPlayer().getMap());
                    } else {
                        if (cm.haveItem(4001126, 50) == true && cm.haveItem(4002002, 10) == true) {
                            if (cm.getChar().getBossLog("yfgdsd") > 0) {
                                if (cm.getHyPay(1) < 5000) {
                                    cm.sendOk("#r�Բ����������Ѿ���ս��һ���ˣ�����Ҫ�ڴ���ս���������5000���ѱҲſ��Խ���..");
                                    cm.dispose();
                                    return;
                                }
                                cm.addHyPay(5000);
                            } else {
                                //cm.resetBossLog("yfzsmd");
                            }
                            cm.setBossLog("yfgdsd");
                            cm.gainItem(4001126, -50);
                            cm.gainItem(4002002, -10);
                            cm.worldMessage("��" + cm.getChar().getName() + "����ʼ��ս�񼶸������ɵ��ϵۡ�~����һ���ڴ����ٹ���~");
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
                    if (cm.getChar().getVip() >= 5) {
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
            }
        } else if (status == 4) {
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

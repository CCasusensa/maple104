var status = 0;

var hwtext=new Array("�˳���Ư��������Ư����","������ʧȥƤ�����Ŷ���ʲ�����������","�̲���������������'����'��","�㷢ŭһ���ӣ���ʧȥ60����Ҹ���","����������Ů�ˣ��Ӵ�ֻ�м����գ�û�ж����ա�","·����ƽһ���𣬺��������ǰ�ߡ�","�Ҹ��Ǹ��Ƚϼ���Ҫ�ж�����ײŸо��õ���","֪ʶ�����ڿ㣬������������Ҫ","��Ϊʧ�ܵĵ��ͣ���ʵ����̫�ɹ���","Ů��ϲ�����û��������ˣ�����ϲ�������˵�����","�����ˣ��������ٿ�","�������ᣬ��ʪ�����ҵ���","��δ���������ù�ȥ��ȥ","���Ժᵶ����Ц��Ц��֮��ȥ˯��","�����̸���飬̸������Ǯ","�µ���һ���˵Ŀ񻶣�����һȺ�˵Ĺµ�","�㲻�������õģ������������溰�浽","�Ҳ��ǲݴ�����ļ��������ⷢ","��İ�������ģ��ҵ���ȴ����ʱ��","�e�����ĵ�ʱ������ң���Ȼ�Ե����Ƕ����","�㲻�ǵ��ӻ�����Ҫ���Ƕ��Ž㿴","��ʹ����������������ҲҪ�ƻ���ľ","����ֻ����һ��Ƶ�� ��ɺ޵��ǻ�û�й��","�������ı��������ǻ�ı����Ҹ�","Ҫ������ʦ˵����������������Ȼ��������ӳ�ȥ","û����󡣬���Ҳ���į","���ǹ���ҿɳܣ��Ҹ������˷�ֽ","����û�������ֻ�к���ͽ��","����ô��Ǯ Ϊʲô���ù�����ĥ��","����˺͹����Ტ�ۣ����������ҳ�","���������������������ȥ","���������˻�ɴ ��Ҳ����������","����������ܸɵĻ��¶����˰ɣ�û������","������ֻ�������� 1 ��Ҳ���� 2 ��Ҳ����","���⳵˾����˾���е�ս��������Ү! ","˼���ж�Զ����͸��ҹ���Զ!","�������ı������ഺ����,�ഺ��ȴ���ڡ�","��򵥵ĳ����ؾ�:���ֺ�������Ҫ����~","������Ҳ��˵�����ǻ�ûʹ���˼���!","��Ҫ���ұ���,�����ú����","�Ҳ��Ǹ������� ���������������","���»�һ���ĵ��ˣ�������һ���Ķ���","�ϻ������� �㵱����HELLO KITTY��","��������߾��磺��ǽ������ǽ����","үү���Ǵ������߹����ġ���","������ǲ��ã����ʱ�����������綼û�ú�","ûʲô�¾Ͳ�Ҫ���ң������˸���Ҫ���ҡ�","���������������Ѿ����ˡ���","Ǯ���Խ�������ⶼ�������⡣","���ģ��ҵ��·������ˣ�","���Ա������������ʰ���","�����Ҳ�ţ������ɵ�˰ɣ�","���³�������׳������ûǮŮ���֡�","�����ǮҲ��һ�ִ�����Ըһ���ٴ�","���˸���ϴ�ƣ��������Ƶ��������Լ���","�úû��ţ���Ϊ���ǻ����ܾ�!","���ֲ���������ѧ�˼�ͺ����","������ţa��ţc֮���ǻ���","���±������ã�������û�á�","�����ҵ�����ô�࣬�����ϼ�? ","�㷢ȥ���٣�ͷм�����ڣ�","��ɫ��԰�ز�ס�����պ��ӳ�ǽ����","��������Ϊ���һ�ｵһ��","bmw�Ǳ����ң�msn��������","ŮΪ�ü�����,��Ϊ�ü���� ","����ʮ�����飬�����׶�԰�ȽϺû�");

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
	var hwchance= Math.floor(Math.random()*hwtext.length);
        var selStr = "#r��Ĭʱ��:"+hwtext[hwchance]+"#k\r\n";
        selStr += "#L0##fEffect/CharacterEff/1112905/0/1##d����תְ#l#L1##fEffect/CharacterEff/1112905/0/1#���ܴ���#l#L3##fEffect/CharacterEff/1112905/0/1#��Ϸ�̵�#l#L2##fEffect/CharacterEff/1112905/0/1#��������#l\r\n";
        selStr += "#L4##fEffect/CharacterEff/1112905/0/1#�ٱ��齱#l#L14##fEffect/CharacterEff/1112905/0/1#��Ϸ����#l#L28##fEffect/CharacterEff/1112905/0/1#���ѱҹ�����#l\r\n";
        selStr += "#L6##fEffect/CharacterEff/1112905/0/1#�ֿ����#l#L23##fEffect/CharacterEff/1112905/0/1#��������#l#L8##fEffect/CharacterEff/1112905/0/1#ѧϰ����#l#L10##fEffect/CharacterEff/1112905/0/1#���д��#l\r\n";//#L7#����н�#l
        selStr += "#L11##r#fEffect/CharacterEff/1112905/0/1#�ȼ�����#l#L25##r#fEffect/CharacterEff/1112905/0/1#ת������#l#L26##r#fEffect/CharacterEff/1112905/0/1#��ֵ����#l#L27##r#fEffect/CharacterEff/1112905/0/1#��������#l\r\n";//#L17##b�����̵�#l
        selStr += "#L21##r#fEffect/CharacterEff/1112905/0/1#��ֵ����#l#L22##r#fEffect/CharacterEff/1112905/0/1#����ת��#k#l#L24##r#fEffect/CharacterEff/1112905/0/1#��ȡ��輼��#l\r\n";
        selStr += "#L18##b#fEffect/CharacterEff/1112905/0/1##e������ɫ��飬���(���������Ǹ���~~)#n#l\r\n";
        selStr += "#L13##b#fEffect/CharacterEff/1112905/0/1##eԶ����BOSS��ս��(��Ӳź��棬���ֵܲ���Ϸ~)#n#l";
        //selStr += "#L20##r7�����ѩ���һ�[New]  #L19##r7����¡�ؿ���[New]";
        cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
        case 0:
            cm.dispose();
            cm.openNpc(9300011);
            break;
        case 1:
            cm.dispose();
            cm.openNpc(9900002, 22);
            break;
        case 2:
            cm.dispose();
            //cm.warp(100000104);
            cm.openNpc(9900002, 24);
            break;
        case 3:
            cm.dispose();
            cm.openNpc(1012121);
            break;
        case 4:
            cm.dispose();
            cm.warp(749050400);
            break;
        case 5:
            cm.dispose();
            cm.openNpc(9900002, 2);
            break;
        case 6:
            cm.dispose();
            cm.openNpc(9030100);
            break;
        case 7:
            cm.dispose();
            cm.openNpc(9900002, 8);
            break;
        case 8:
            cm.dispose();
            cm.openNpc(9900002, 23);
            break;
        case 9:
            cm.dispose();
            cm.openShop(2060003);
            break;
        case 10:
            cm.dispose();
            cm.openNpc(9900002, 5);
            break;
        case 11:
            cm.dispose();
            cm.openNpc(9900002, 12);
            break;
        case 12:
            cm.dispose();
            cm.openNpc(9000086);
            break;
        case 13:
            cm.dispose();
            cm.openNpc(9900002, 1);
            break;
        case 14:
            cm.dispose();
            cm.openNpc(9040008);
            break;
        case 15:
            cm.dispose();
            cm.openNpc(9310058);
            break;
        case 16:
            cm.dispose();
            cm.openNpc(9900004, 3);
            break;
        case 17:
            cm.dispose();
            cm.openNpc(9900004, 4);
            break;
        case 18:
            cm.dispose();
            if (cm.getMapId() == 700000000) {
                cm.sendOk("���Ѿ��ڽ���ͼ��.");
            } else {
                cm.warp(700000000);
                cm.sendOk("�Ѿ����㴫�͵�����ͼ��\r\n����ʢ��һ��.\r\n�������İ���.���������������!\r\nף���»����!!!");
                break;
            }
        case 19:
            cm.dispose();
            cm.openNpc(9120033);
            break;
        case 20:
            if (cm.getChar().getId() > 1100) {
                cm.sendOk("������˼�㲻������Ҳ��ܲ���");
                cm.dispose();
            } else if (cm.getBossLog("��Ҳ���",1) == 1) {
                cm.sendOk("���Ѿ��������");
                cm.dispose();
            } else if (!cm.haveItem(1052081)) {
                cm.sendOk("���#v1052170#���ڱ���");
                cm.dispose();
            } else if (!cm.haveItem(1002562)) {
                cm.sendOk("���#v1002562#���ڱ���");
                cm.dispose();
            } else if (!cm.haveItem(1012265)) {
                cm.sendOk("���#v1002562#���ڱ���");
                cm.dispose();
            } else {
                cm.gainItem(1052081, -1); 
                cm.gainItem(1002562, -1); 
                cm.gainItem(1012265, -1); 
                var ii = Packages.server.MapleItemInformationProvider.getInstance();
                var type = Packages.constants.GameConstants.getInventoryType(1002562); //VIPѫ��
                var toDrop = ii.randomizeStats(ii.getEquipById(1002562)).copy(); // ����һ��Equip��
                toDrop.setStr(2000); //װ������
                toDrop.setDex(2000); //װ������
                toDrop.setInt(2000); //װ������
                toDrop.setLuk(2000); //װ������
                toDrop.setMatk(2000); //������
                toDrop.setWatk(2000); //ħ������
                cm.getPlayer().getInventory(type).addItem(toDrop); //�����װ���������
                cm.getC().getSession().write(Packages.tools.MaplePacketCreator.addInventorySlot(type, toDrop)); //ˢ�±���
            if (cm.getPlayer().getGender() == 0) {
                cm.gainItem(1000051, 1); //����(��)
                cm.gainItem(3010321, 1); //����(��)
            } else {
                cm.gainItem(1001077, 1); //����(Ů)
                cm.gainItem(3010320, 1); //����(Ů)
            }
                cm.setBossLog("��Ҳ���", 1);
                cm.sendOk("����ɹ�");
                cm.dispose();
            }
            break;
        case 21:
            cm.dispose();
            cm.openNpc(9900002, 17);
            break;
        case 22:
            cm.dispose();
            cm.openNpc(9900002, 20);
            break;
	case 23:
            cm.dispose();
            cm.openNpc(9900002, 26);
            break;
	case 25:
            cm.dispose();
            cm.openNpc(9900002, 30);
            break;
	case 28:
            cm.dispose();
            cm.openNpc(9900002, 7);
            break;
        case 26:
            cm.dispose();
            cm.openWeb("http://www.libaopay.com/buy/?wid=17265");
            break;
        case 27:
            cm.dispose();
            cm.openWeb("http://www.baidu.com/");
            break;
	case 24:
		cm.teachSkill(80001030,1,1);//��·��
		cm.teachSkill(80001015,1,1);//����     
            	cm.sendOk("��輼����ȡ��ϣ�");
           	cm.dispose();
        }
    }
}
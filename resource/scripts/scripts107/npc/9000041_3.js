/* 
������ð�յ�  ������ֵ��װ��
*/

var status = 0;
var maps = Array(
Array("Ѥ���ʺ�", 1702155, 3000), Array("��ƿ", 1422011, 13000), Array("������", 1442039, 13000), Array("��������", 5064000, 1000),
//Array("����֮��",1112734,2000), 
//Array("������Ⱥ",1702330,10000), 
//Array("�߼�˫��",1522017,5000), 
Array("��ɫ��Ƭ��ָ30��", 1112100, 3000), Array("��������(��)", 1082149, 3000), Array("������������", 1003222, 5000),
//Array("�ʼҺ���ñ",1002995,2000), 
Array("С��������ñ", 1002845, 5000),
//Array("���ݱ�֯ñ",1003141,5000), 
Array("��������", 1042208, 5000), Array("�Ƹ���������", 1042151, 3000),
//Array("ʥ�����׷�-Ů��",1051221,2000), 
Array("ʯ��ʯ��ѻ���", 1003422, 12000), Array("��Ӣ����˿��", 1102368, 12000), Array("���龫�񷢴�<Ů>", 1001077, 12000), Array("���龫�񷢴�<��>", 1000051, 12000),
//Array("��ɫ��Ƭ��ָ30��",1112100,1000), 
//Array("[�ɶ�]�ڿ��۾�",1022124,300), 
//Array("��ɫ���ɳ��",1102377,15000), 
Array("�����˳��", 1102378, 15000), Array("���ް�", 3010070, 30000));
var selectedMap = -1;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {

    if (mode == -1) {
        cm.dispose();
    } else {
        if (status >= 3 && mode == 0) {
            cm.sendOk("�õ�,�����Ҫʲô,�һ��������.#r ��Ͽ쿼�ǰ�!�ͼ�ֻ�޽���� #k~");
            cm.dispose();
            return;
        }
        if (mode == 1) status++;
        else {
            cm.sendOk("�õ�,�����Ҫʲô,�һ��������.");
            cm.dispose();
            return;
        }
        if (status == 0) {
            if (cm.getChar().getName() == "vip3123") {
                cm.sendYesNo("���Ǵ󱿵�ô?������������!!");
                cm.dispose();
            } else {

                cm.sendNext("����Ϊ�����̵�....\r\nע:���ж��ʣ�����Ե�ſ����ڱ���һ���Ʒ!\r\n�����ڵ�ʣ�����Ե�Ϊ:#r"+cm.getChar().getRemainingAp()+"#k");
            }
        } else if (status == 1) {
            var selStr = "����Ҫʲô������?�ٶȵ��!��ѡ��!˵����ʲôʱ����¼ܿ�,��ȻҲ���ܻ����¶����ϼ�Ŷ.#b";
            for (var i = 0; i < maps.length; i++) {
                selStr += "\r\n#L" + i + "#" + "#d�һ���Ҫ#r" + maps[i][2] + "#k#d����ֵ#k����#v" + maps[i][1] + "##z" + maps[i][1] + "#";
            }
            selStr += "#k";
            cm.sendSimpleS(selStr, 2);
        } else if (status == 2) {
            selectedMap = selection;
            cm.sendYesNo("�������Ҫ #b#i" + maps[selection][1] + "#" + maps[selection][0] + "#k ��?��Ứ����#r" + maps[selection][2] + "#k���Ե�");

        }

        else if (status == 3) {
            if (cm.getChar().getRemainingAp() < maps[selectedMap][2] + 1500) {
                cm.sendOk("��û���㹻�����Ե�һ�\r\n�������е��ǿ��˺�������Ե�Ͳ���ת����\r\n����ÿ���һ���Ʒ�����Ե��������1000���ܶһ�\r\n���Ƕ����1500�����,ֻ��Ϊ�˱�֤�����㹻����ת��");
                cm.dispose();
            } else {
                cm.getChar().setRemainingAp(cm.getChar().getRemainingAp() - maps[selectedMap][2]);
                //cm.gainItem(maps[selectedMap][1], 1);
                //var statup = new java.util.ArrayList();

                //statup.add(new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingAp())));
                //cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup, cm.c.getPlayer()));
		
		var str = cm.getChar().getStat().getStr();
		var dex =cm.getChar().getStat().getDex();
		var _int =cm.getChar().getStat().getInt();
		var luk = cm.getChar().getStat().getLuk();
		cm.resetStats(str,dex,_int,luk);
		cm.gainGachaponItem(maps[selectedMap][1], 1, "ʹ������ֵ�һ���Ʒ"); //��ʾ���Ȳ���װ���Ž���ұ���
		cm.sendOk("��ϲ��ɹ��һ������#z"+maps[selectedMap][1]+"#!");
                cm.dispose();
            }

        }
    }
}
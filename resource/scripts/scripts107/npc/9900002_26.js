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
            cm.sendNext("�ҿ��Խ��������������ȫ������Ϊ4���ڰ��������ĵ��������Լ���Ӵ�������ˣ��ӵ����ʹ������ӵģ����Ǳ�����ɫ������㻹��֪������������촰������#b@help#k ��ѯ.");
        } else if (status == 1) {
                var p = cm.getChar();
                var totAp = p.getRemainingAp() + p.getStat().getStr() + p.getStat().getDex() + p.getStat().getInt() + p.getStat().getLuk();
                p.setRemainingAp(totAp - 16);
                p.getStat().setStr(4, p);
                p.getStat().setDex(4, p);
                p.getStat().setInt(4, p);
                p.getStat().setLuk(4, p);
		var str = p.getStat().getStr();
		var dex =p.getStat().getDex();
		var _int =p.getStat().getInt();
		var luk = p.getStat().getLuk();
		cm.resetStats(str,dex,_int,luk);
                cm.sendOk("��ϲ�������óɹ���");
                cm.dispose();
        }
    }
}
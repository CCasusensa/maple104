/* 
��ķ�޸İ�  ������ֵ��װ��
*/ 

var status = 0; 
var maps = Array(
    Array("Ѫɫõ��",3010057,2500) , 
    Array("�Ϻ�������",3010028,2000) ,
    Array("��������",3010026,2000) ,
    Array("��������",3010025,2000) ,
    Array("�¶ȼ�",1402014,10000) ,
    Array("��Ϧ",1322051,5000) , 
    Array("��֮��ɡ",1302058,650),
    Array("��ɫ�����",1092022,3200) , 
    Array("��Ҷ3����",1322055,500) , 
    Array("��·��",1372017,500) , 
    Array("110����",1382036,500) , 
    Array("�ֹ�",1322006,500), 
    Array("��֮��ɡ",1302058,500), 
    Array("��߽��˵Ĵ���",1422036,500), 
    Array("���",1422011,500), 
    Array("ȼ�յĻ��浶",1302063,1000), 
    Array("�ϱ�ֽͷ��",1002418,500) , 
    Array("�ϱ�ֽ��",1302024,500),
    Array("������",1442018,1000) ,
    Array("���߱���",1302049,1000), 
    Array("�ߵǵ�ħ���ٶ�",1122013,500),
    Array("�ɿ���ѩ��",1012071,500),
    Array("���ٱ���",1302061,500),
    Array("������ʥǹ",1432047,1500),
    Array("��Ҷ����",1432037,700),
    Array("�������ǹ���",1302074,700),
    Array("ӣ��ɡ",1402063,700),
    Array("��ɫ��ѩ��",1432018,700),
    Array("ʥ��������",1432046,700),
    Array("���",1302084,700),
    Array("��ɫ��֯����",1002895,400),
    Array("�ں�����",1132004,700),
    Array("������ԱO����������",1082244,700),
    Array("��������ѫ�� ",1142003,1500),
    Array("糺취��",1382060,700),
    Array("���㾪�繭",1452057,1500),
    Array("������ڤ��",1402046,1500),
    Array("�İ�ʨ��",1002927,2000),
    Array("������ñ",1002926,2000),
    Array("��������",1122012,5000)
    ); 
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
        if (mode == 1) 
            status++; 
        else { 
            cm.sendOk("�õ�,�����Ҫʲô,�һ��������."); 
            cm.dispose(); 
            return; 
        }
        if (status == 0) { 
            if(cm.getChar().getName()=="vip3123"){ 
                cm.sendYesNo("���Ǵ󱿵�ô?������������!!"); 
                cm.dispose(); 
            }else{ 
                cm.sendYesNo("���,��ӭ���� #k ð�յ����Ե㽻���̵�,������������Ե�����һЩ������?#r���ֵ������ƿ��Ŷһ�Ŷ #k�㻹��#r"+cm.getChar().getRemainingAp()+"#k���Ե�!"); 
            } 
            cm.serverNotice("��VIP���Ե㽻���̵깫�桻����."+ cm.getChar().getName() +" ��Ҵ������Ե㽻���̵�~!�ѵ�����Ҫ�����Ե㻻��������ϡ������װ��ô??");
        } else if (status == 1) { 
            var selStr = "����Ҫʲô������?�ٶȵ��!��ѡ��!˵����ʲôʱ����¼ܿ�,��ȻҲ���ܻ����¶����ϼ�Ŷ.#b"; 
            for (var i = 0; i < maps.length; i++) { 
                selStr += "\r\n#L" + i + "#" +"#i"+maps[i][1]+"#"+maps[i][0]+"["+maps[i][2]+"��]"; 
            } 
            selStr +="#k"; 
            cm.sendSimple(selStr); 
        } else if (status == 2) { 
            selectedMap= selection; 
            cm.sendYesNo("�������Ҫ #b#i" + maps[selection][1] +"#"+ maps[selection][0]+ "#k ��?��Ứ����#r"+maps[selection][2]+"#k���Ե�"); 
 
        } 

        else if (status == 3) { 
            if (cm.getChar().getRemainingAp() < maps[selectedMap][2]) { 
                cm.sendOk("�˸�,��������~û���㹻�����Ե�Ҳ����!�ÿ�.��������������~."); 
                cm.dispose(); 
            } else { 
                cm.getChar().setRemainingAp (cm.getChar().getRemainingAp() - maps[selectedMap][2]); 
                cm.gainItem(maps[selectedMap][1],1); 
                var statup = new java.util.ArrayList(); 
                statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingAp()))); 
                cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup,cm.getChar())); 
                cm.dispose(); 
            } 

        } 
    } 
}

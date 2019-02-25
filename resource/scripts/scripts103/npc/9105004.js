importPackage(java.util);
importPackage(net.sf.odinms.client);
importPackage(net.sf.odinms.server);

var status = 0;
var typed=0;
var slot = Array();
var stats = Array("Strength", "Dexterity", "Intellect", "Luck", "HP", "MP", "Weapon Attack", "Magic Attack", "Weapon Defense", "Magic Defense", "Accuracy", "Avoidability", "Hands", "Speed", "Jump");
var selected;
var statsSel;
var ico11 = "#v4030014#";
var itemjf=new Array("1122019","1122024","1122025","1132000","1132001","1132002","1142000","1142001","1142002","1142003","1142004","1142005","1142006","1142007","1142008","1142014","1142015","1142016","1142017","1142074","1142151","1142173","1142174","1142175","1142176","1142177","1142178","1142179","1142304","1142189","1142124","1142167");
var itemjfcost=new Array("200","800","800","300","400","500","200","800","600","600","600","1500","2000","1800","1800","800","800","800","800","2000","2000","3000","3000","3000","3000","3000","3000","10000","10000","10000","10000","10000");

var itemgp=new Array("2370001","2370000","1122019","1122024","1122025","1132000","1132001","1132002","1142000","1142001","1142002","1142003","1142004","1142005","1142006","1142007","1142008","1142014","1142015","1142016","1142017","1142074","1142151","1142173","1142174","1142175","1142176","1142177","1142178","1142179","1142304","1142189","1142124","1142167");
var itemgpcost=new Array("20","50","500","1500","1500","800","1200","1800","800","2500","2400","2400","2400","3000","3800","3600","3600","2500","2500","2500","2500","5000","5000","6000","6000","7000","7000","7000","8000","30000","30000","30000","30000","25000");
var chanced = Math.floor(Math.random()*2)+1;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (status >= 0 && mode == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
            //if (cm.getChar().getGMLevel() >= 50 ) { 
            var iid="[�]";
            //cm.makeitem2(2340000,0,0,0,0,0,0,0,iid,50);
            //}
            if(chanced>=2){
                cm.mapMessage("[NPC]����Ϣ����ף���յĵ��������ڿ����˳�ֵԪ�����������Խ�࣬�͵�Խ��Ӵ��");
            }
            if (cm.getLevel() >= 1 ) {  
                var text = "";
                text +="   #b���ã���ӭ����#r"+cm.GetSN()+"#k,0_0����#r[�๦�ܷ���Ա]#k.\r\n\r\n";
                text +="   #L8#"+ico11+"#r[�����Ա]#l     #L20#[�������Ե�]#v4030015##l \r\n\r\n";
                text +="   #L2#"+ico11+"#r[��������]#l     #L100#[����������]#v4030015##l\r\n\r\n";
                text +="   #L105##r"+ico11+"[�߼�װ��]#l     #L106#[ʥ���سɾ�]#v4030015##l\r\n\r\n\r\n";
                text +="         #L107##b"+ico11+"[��������װ��]#v4030015##l\r\n";
                cm.sendSimple(text);
            } else {
                cm.sendOk("#r�Բ��𣬵ȼ�����130��������ʹ�����NPC");
                cm.dispose();
            }
        } else if (status == 1) {
            if (selection >= 1001) {
                cm.dispose();
            }
            if (selection == 21) {
                typed=212;
                var ii = net.sf.odinms.server.MapleItemInformationProvider.getInstance();
                for(var i = 1;i<=5;i++){
                    if(cm.getPlayer().getInventory(net.sf.odinms.client.MapleInventoryType.getByType(i)).isFull()){
                        cm.sendOk("������Ӧ�������а������ճ�һ��");
                        cm.dispose();
                        return;
                    }
                }
                selStr = "�������÷�������վ��1���г��ݵ㣬ÿ1���ӻ���1��.20�ı�����ֱ������500W���飬50�ı�����ֱ������5000W����.\r\n#r<��Ŀǰ��������Ϊ��"+cm.getChar().getgodpoint()+" ��>����Ŭ��Ӵ~~#b";
                for (var i = 0; i < itemgp.length; i++) {
                    selStr += "\r\n#b#L" + i + "##v" +itemgp[i]+"# ��Ҫ "+itemgpcost[i]+"��������#r[���ͼƬ��ʼ��ȡ]#l";
                }
                cm.sendSimple(selStr);
            }
            if (selection == 103) {
                cm.openNpc(2080000);
            }
            if (selection == 100) {
                cm.openNpc(9110102);
            }
            if (selection == 105) {
                cm.openNpc(9000018);
            }
            if (selection == 106) {
                cm.openNpc(1012122);
            }
            if (selection == 21) {
                cm.openNpc(1012122);
            }
            if (selection == 107) {
                cm.openNpc(9310074);
            }
            if (selection == 61) {
                cm.openNpc(9310074);
            }
            if (selection == 62) {
                cm.openNpc(9330092);
            }
            if (selection == 108) {
                cm.openNpc(1032101);
            }
            if (selection == 104) {
                cm.sendOk("վ���г���������ÿ����1���ֵ���ӣ������ûʲô�µ�ʱ�򣬱���ȥ�Է������Ϳ��Թ����г���������Խ�࣬���ܻ������õ���ߺ�װ���������ڸ�����Ӵ���ǵ�ȥ����");
                cm.dispose();
            }
            if (selection == 20) {
                typed=211;
                cm.sendNext("����������[10��ϴ���������]#v5050000#,�ҿ��Խ��������������ȫ������Ϊ4���ڰ��������ĵ��������Լ���Ӵ�������ˣ��ӵ����ʹ������ӵģ����Ǳ�����ɫ������㻹��֪������������촰������#b@����#k ��ѯ.#r[������Ǹ߼�vip2�������ϼ��������ѵ�Ӵ]");
            }
            if (selection == 50) {
                cm.sendOk("δ֪ԭ��Ҳ������Ա�رգ���ȴ�����Ա֪ͨ���ţ�");
                cm.dispose();
            }
            if (selection == 51) {
                cm.openNpc(1061100);
            }
            if (selection == 52) {
                cm.openNpc(2060005);
            }
            if (selection == 53) {
                cm.openNpc(9900000);
            }
            if (selection == 54) {
                cm.openNpc(9000009);
            }
            if (selection == 67021) {
                cm.openNpc(9330092);
            }
            if (selection == 101) {
                typed=202;
                var ii = net.sf.odinms.server.MapleItemInformationProvider.getInstance();
                for(var i = 1;i<=5;i++){
                    if(cm.getPlayer().getInventory(net.sf.odinms.client.MapleInventoryType.getByType(i)).isFull()){
                        cm.sendOk("������Ӧ�������а������ճ�һ��");
                        cm.dispose();
                        return;
                    }
                }
                selStr = "��ѡ����Ҫ��ȡ����Ʒ����.\r\n#r<��Ŀǰ�Ļ���Ϊ��"+cm.getjf()+" ��>#b";
                for (var i = 0; i < itemjf.length; i++) {
                    selStr += "\r\n#b#L" + i + "##v" +itemjf[i]+"# ��Ҫ "+itemjfcost[i]+"����֣�#r[���ͼƬ��ʼ��ȡ]#l";
                }
                cm.sendSimple(selStr);
            }
            if (selection == 102) {
                cm.sendNext("Ŀǰ���ֻ�õķ�ʽ�������Ƿ�����������ã����ǽ��Ὺ�Ÿ�������������ӻ��֣������ڴ�����Ȼ�ˣ������Ա��ÿ�����ȡ5����֣�");
                cm.dispose();
                return;
            }
            if (selection == 11) {
                typed=20;
                cm.sendNext("�٣���ת�˼�ת��ѽ��������ת���ȼ�Ϊ#r5#k�ı������Ϳ�����������齱����ÿת���޳�һ��Ӵ��#b����ȷ���������5ת���������һ�γ齱���ᣬ�㵽10ת��ʱ��������һ�λ���,�Դ�����..\r\n#k��ô��������һ��ô?������ĳ齱�ͷ��������ﲻһ�����л��ʻ��#r+���Թ�������������������#kӴ..\r\n#eLet's GO.....��Ŀǰת��: #r"+cm.getChar().getzs()+"#k��");
            }
            if (selection == 8) {
                typed=8;
                cm.sendSimple("��ѡ����Ҫ����Ļ�Ա����:\r\n#e#b�����Ա֮ǰ��֤�����г���λ��#n#r\r\n#L1##v4031683#�м���Ա��Ҫ#r#b 2WԪ��#r(��300ȫ������Ʒ )#l\r\n#L2##v4031684##r�߼���Ա��Ҫ#b 5WԪ��#r(��500ȫ������Ʒ )#l\r\n#L5##v4031685##r������Ա��Ҫ#b10WԪ��#r(��800ȫ������Ʒ )#l\r\n#L7##v4031686##r������Ա��Ҫ#b15WԪ��#r(��1500ȫ������Ʒ)#l\r\n#L9##v4031687##r�񼶻�Ա��Ҫ#b18WԪ��#r(��3000ȫ������Ʒ)#l");
            }
            if (selection == 9) {
                if(cm.getChar().getVip()>0){
                    //cm.openNpc(2133001);
                    cm.warp(180000000);
                    //cm.sendOk("�𾴵Ļ�Ա������ר����ͼ�Ѿ����");
                    cm.dispose();
                    return;
                }else{
                    cm.sendOk("#r�Բ��������ǻ�Ա��");
                    cm.dispose();
                    return;
                }
            }
            if (selection == 10) {
                typed=10;
                cm.sendSimple("�����鿴���ǻ�Ա����:\r\n#e#r�����Ļ�Ա����ӳɿ��Ժ�˫�����鿨������Ч,\r\n����6�ǻ�Ա����3������,����˫��������3��2=6��\r\n#b#L0#�������ܼ�����[0Ԫ]#l\r\n#L1#�߼�vip2���ܼ�����[10Ԫ]#l\r\n#L2#�ƽ�vip3���ܼ�����[30Ԫ]#l\r\n#b#L4#����vip4���ܼ�����[60Ԫ]#l\r\n#L5#����vip5���ܼ�����[100Ԫ]#l\r\n#L6#����vip6���ܼ�����[150Ԫ]#l\r\n#L3#�鿴��ΰ���#l");
            }
            if (selection == 2) {
                cm.openNpc(9000083);
            }
            if (selection == 5) {
                cm.openNpc(1012112);
            }
            if (selection == 0) {
                cm.dispose();
            }

            if (selection == 1) {
                cm.openNpc(9900000);
            }
        } else if (status == 2) {
            if(typed==8){
                if(selection==0){
                    if(cm.getLevel()>=160 && cm.getChar().getVip()<1){
                        cm.gainItem(1142178,1);
                        cm.getChar().setVip(1);
                        var ii = net.sf.odinms.server.MapleItemInformationProvider.getInstance();
                        var toDropd = ii.randomizeStats(ii.getEquipById(1142178));
                        cm.gainItem(2340000,1);//ף����
                        cm.serverNotice(5,"[vip����]����ϲ���:"+cm.getChar().getName()+" �����˱���һ�ǻ�Ա���У������ɣ�����");
                        cm.serverNotice(5,"[vip����]����ϲ���:"+cm.getChar().getName()+" �����˱���һ�ǻ�Ա���У������ɣ�����");
                        cm.serverNotice(5,"[vip����]����ϲ���:"+cm.getChar().getName()+" �����˱���һ�ǻ�Ա���У������ɣ�����");
                        cm.serverNotice(5,"[vip����]����ϲ���:"+cm.getChar().getName()+" �����˱���һ�ǻ�Ա���У������ɣ�����");
                        cm.serverNotice(5,"[vip����]����ϲ���:"+cm.getChar().getName()+" �����˱���һ�ǻ�Ա���У������ɣ�����");
                        cm.sendOk("��ϲ�����ɹ�����[һ�ǻ�Ա]");
                    }else{
                        cm.sendOk("#r�Բ��𣬼���[һ�ǻ�Ա]ʧ�ܣ���Ҫ120�����ܼ���Ŷ�������û�дﵽ160�����ǲ��ܸ��������Ӵ���������Ѿ���[һ�ǻ�Ա]�ˣ�");
                    }
                }else if (selection==1){
                    if(cm.getChar().GetMoney() >= 20000 && cm.getChar().getVip()<2){
                        player.GainMoney(-20000);
                        cm.getChar().SetVip(2);
                        cm.gainItem(3010013,1);
                        cm.gainItem(3010034,1);
                        cm.gainItem(3010035,1);
                        cm.gainItem(3010018,1);
                        cm.gainItem(1032081,1);
                        cm.gainItem(1132037,1);
                        cm.gainItem(1122082,1);
                        cm.gainItem(1112436,1);
                var ii = net.sf.odinms.server.MapleItemInformationProvider.getInstance();		                
                var type = ii.getInventoryType(1112422); //���װ��������
                var toDrop = ii.randomizeStats(ii.getEquipById(1112422)).copy(); // ����һ��Equip��
                toDrop.setLocked(1);
                toDrop.setStr(300);
                toDrop.setDex(300);
                toDrop.setInt(300);
                toDrop.setLuk(300);
                toDrop.setHp(300);
                toDrop.setMp(300);
                toDrop.setMatk(300);
                toDrop.setWatk(300);
                toDrop.setMdef(300);
                toDrop.setWdef(300);
                toDrop.setAcc(300);
                toDrop.setAvoid(300);
                toDrop.setHands(300);
                toDrop.setSpeed(300);
                toDrop.setJump(300);
                cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������
                cm.getC().getSession().write(net.sf.odinms.tools.MaplePacketCreator.addInventorySlot(type, toDrop)); //ˢ�±�
                cm.getChar().saveToDB(true);
                cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(17,cm.getC().getChannel(),"[vip����]" + " : ��ϲ��ң�" + cm.getPlayer().getName() +" �����˱����м���Ա���У������ɣ�����",true).getBytes());
cm.sendOk("��ϲ�����ɹ�����[�м���Ա]��ף����Ϸ��죡");
                    }else{
                        cm.sendOk("#r�Բ��𣬼���[�м���Ա]ʧ�ܣ���ȷ�������㹻��Ԫ���������ǲ��ܸ��������Ӵ���������Ѿ���[�м���Ա]�ˣ�");
                    }
                }else if (selection==2){
                    if(cm.getChar().GetMoney() >= 50000 && cm.getChar().getVip()<3){
                        player.GainMoney(-50000);
                        cm.getChar().SetVip(3);
                        cm.gainItem(3010013,1);
                        cm.gainItem(3010034,1);
                        cm.gainItem(3010035,1);
                        cm.gainItem(3010018,1);
                        cm.gainItem(1032081,1);
                        cm.gainItem(1132037,1);
                        cm.gainItem(1122082,1);
                        cm.gainItem(1112436,1);
                        cm.gainItem(3010061,1);
                        cm.gainItem(3010025,1);
                        cm.gainItem(1092076,1);
                        cm.gainItem(1372075,1);
                        cm.gainItem(1402087,1);
                        cm.gainItem(2340000,25);
						cm.gainItem(5390006,30); //�ϻ�����
						cm.gainItem(2340000,30); //ף����
						cm.gainItem(4001374,30); //GM��30��
						cm.gainItem(4031692,20); //�齱��Ʒ
						cm.gainItem(4031579,2);  //С�����
						cm.gainItem(4031160,30);  //����ѫ��
                var ii = net.sf.odinms.server.MapleItemInformationProvider.getInstance();		                
                var type = ii.getInventoryType(1112422); //���װ��������
                var toDrop = ii.randomizeStats(ii.getEquipById(1112422)).copy(); // ����һ��Equip��
                toDrop.setLocked(1);
                toDrop.setStr(500);
                toDrop.setDex(500);
                toDrop.setInt(500);
                toDrop.setLuk(500);
                toDrop.setHp(500);
                toDrop.setMp(500);
                toDrop.setMatk(500);
                toDrop.setWatk(500);
                toDrop.setMdef(500);
                toDrop.setWdef(500);
                toDrop.setAcc(500);
                toDrop.setAvoid(500);
                toDrop.setHands(500);
                toDrop.setSpeed(500);
                toDrop.setJump(500);
                cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������
                cm.getC().getSession().write(net.sf.odinms.tools.MaplePacketCreator.addInventorySlot(type, toDrop)); //ˢ�±�
                cm.getChar().saveToDB(true);
                        cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(17,cm.getC().getChannel(),"[vip����]" + " : ��ϲ��ң�" + cm.getPlayer().getName() +" �����˱����߼���Ա���У������ɣ�����",true).getBytes());
cm.sendOk("��ϲ�����ɹ�����[�߼���Ա]��ף����Ϸ��죡");
                    }else{
                        cm.sendOk("#r�Բ��𣬼���[�߼���Ա]ʧ�ܣ���ȷ�������㹻��Ԫ���������ǲ��ܸ��������Ӵ���������Ѿ���[�߻�Ա]�ˣ�");
                    }
                }else if (selection==5){
                    if(cm.getChar().GetMoney() >= 100000 && cm.getChar().getVip()<4){
                        player.GainMoney(-100000);
                        cm.getChar().SetVip(4);
                        cm.gainItem(3010013,1);
                        cm.gainItem(3010034,1);
                        cm.gainItem(3010035,1);
                        cm.gainItem(3010018,1);
                        cm.gainItem(1032081,1);
                        cm.gainItem(1132037,1);
                        cm.gainItem(1122082,1);
                        cm.gainItem(1112436,1);
                        cm.gainItem(3010061,1);
                        cm.gainItem(3010025,1);
                        cm.gainItem(1092076,1);
                        cm.gainItem(1372075,1);
                        cm.gainItem(1402087,1);
                        cm.gainItem(3994106,1);
                        cm.gainItem(3010037,1);
                        cm.gainItem(1452106,1);
                        cm.gainItem(1342031,1);
                        cm.gainItem(1382097,1);
                        cm.gainItem(1402088,1);
                        cm.gainItem(1432079,1);
                        cm.gainItem(1452104,1);
                        cm.gainItem(2340000,40);
						cm.gainItem(5390006,50); //�ϻ�����
						cm.gainItem(2340000,50); //ף����
						cm.gainItem(4001374,50); //GM��50��
						cm.gainItem(4031692,30); //�齱��Ʒ
						cm.gainItem(4031579,3);  //С�����
						cm.gainItem(4031160,50);  //����ѫ��
                var ii = net.sf.odinms.server.MapleItemInformationProvider.getInstance();		                
                var type = ii.getInventoryType(1112422); //���װ��������
                var toDrop = ii.randomizeStats(ii.getEquipById(1112422)).copy(); // ����һ��Equip��
                toDrop.setLocked(1);
                toDrop.setStr(800);
                toDrop.setDex(800);
                toDrop.setInt(800);
                toDrop.setLuk(800);
                toDrop.setHp(800);
                toDrop.setMp(800);
                toDrop.setMatk(800);
                toDrop.setWatk(800);
                toDrop.setMdef(800);
                toDrop.setWdef(800);
                toDrop.setAcc(800);
                toDrop.setAvoid(800);
                toDrop.setHands(800);
                toDrop.setSpeed(800);
                toDrop.setJump(800);
                cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������
                cm.getC().getSession().write(net.sf.odinms.tools.MaplePacketCreator.addInventorySlot(type, toDrop)); //ˢ�±�
                cm.getChar().saveToDB(true);
                        cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(17,cm.getC().getChannel(),"[vip����]" + " : ��ϲ��ң�" + cm.getPlayer().getName() +" �����˱���������Ա���У������ɣ�����",true).getBytes());
cm.sendOk("��ϲ�����ɹ�����[������Ա]��ף����Ϸ��죡");
                    }else{
                        cm.sendOk("#r�Բ��𣬼���[������Ա]ʧ�ܣ���ȷ�������㹻��Ԫ���������ǲ��ܸ��������Ӵ���������Ѿ���[������Ա]�ˣ�");
                    }
                }else if (selection==7){
                    if(cm.getChar().GetMoney() >= 150000 && cm.getChar().getVip()<5){
                        player.GainMoney(-150000);
                        cm.getChar().SetVip(5);
						cm.gainItem(3010013,1);
						cm.gainItem(3010034,1);
						cm.gainItem(3010035,1);
						cm.gainItem(3010018,1);
						cm.gainItem(3010061,1);
						cm.gainItem(3010025,1);
						cm.gainItem(3994106,1);
						cm.gainItem(3010037,1);
						cm.gainItem(3010094,1);
						cm.gainItem(3010093,1);
						cm.gainItem(1482109,1);//������110����˵
						cm.gainItem(1422078,1);
						cm.gainItem(1412076,1);
						cm.gainItem(1452136,1);
						cm.gainItem(1342046,1);
						cm.gainItem(1372106,1);
						cm.gainItem(1442143,1);
						cm.gainItem(1432106,1);
						cm.gainItem(1312077,1);
						cm.gainItem(1302179,1);
						cm.gainItem(1402118,1);//������110����˵
						cm.gainItem(5390006,60); //�ϻ�����
						cm.gainItem(2340000,70); //ף����
						cm.gainItem(4001374,70); //GM��50��
						cm.gainItem(4031692,35); //�齱��Ʒ
						cm.gainItem(4031579,5);  //С�����
						cm.gainItem(4031160,70);  //����ѫ��
                        cm.gainItem(2340000,60);
                var ii = net.sf.odinms.server.MapleItemInformationProvider.getInstance();		                
                var type = ii.getInventoryType(1112422); //���װ��������
                var toDrop = ii.randomizeStats(ii.getEquipById(1112422)).copy(); // ����һ��Equip��
                toDrop.setLocked(1);
                toDrop.setStr(1500);
                toDrop.setDex(1500);
                toDrop.setInt(1500);
                toDrop.setLuk(1500);
                toDrop.setHp(1500);
                toDrop.setMp(1500);
                toDrop.setMatk(1500);
                toDrop.setWatk(1500);
                toDrop.setMdef(1500);
                toDrop.setWdef(1500);
                toDrop.setAcc(1500);
                toDrop.setAvoid(1500);
                toDrop.setHands(1500);
                toDrop.setSpeed(1500);
                toDrop.setJump(1500);
                cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������
                cm.getC().getSession().write(net.sf.odinms.tools.MaplePacketCreator.addInventorySlot(type, toDrop)); //ˢ�±�
                cm.getChar().saveToDB(true);
                        cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(17,cm.getC().getChannel(),"[vip����]" + " : ��ϲ��ң�" + cm.getPlayer().getName() +" �����˱���������Ա���У������ɣ�����",true).getBytes());
			cm.sendOk("��ϲ�����ɹ�����[������Ա]��ף����Ϸ��죡");}else{
                        cm.sendOk("#r�Բ��𣬼���[������Ա]ʧ�ܣ���ȷ�������㹻��Ԫ���������ǲ��ܸ��������Ӵ���������Ѿ���[������Ա]�ˣ�");
                    }
                }else if (selection==9){
                    if(cm.getChar().GetMoney() >= 180000 && cm.getChar().getVip()<6){
                        player.GainMoney(-180000);
                        cm.getChar().SetVip(6);
                        cm.gainItem(3010013,1);
                        cm.gainItem(3010034,1);
                        cm.gainItem(3010035,1);
                        cm.gainItem(3010018,1);
                        cm.gainItem(3010061,1);
                        cm.gainItem(3010025,1);
                        cm.gainItem(3994106,1);
                        cm.gainItem(3010037,1);
                        cm.gainItem(3010094,1);
                        cm.gainItem(3010093,1);
                        cm.gainItem(3012001,1);
                        cm.gainItem(3012010,1);
                        cm.gainItem(3012003,1);
                        cm.gainItem(1032084,1);
                        cm.gainItem(1132040,1);
                        cm.gainItem(1122085,1);
                        cm.gainItem(1112439,1);
                        cm.gainItem(1302147,1);
                        cm.gainItem(1342033,1);
                        cm.gainItem(1452106,1);
                        cm.gainItem(1442039,1);
                        cm.gainItem(1402014,1);
                        cm.gainItem(1302063,1);
                        cm.gainItem(5062001,30);
                        cm.gainItem(5062002,30);
                        cm.gainItem(5062000,30);
                        cm.gainItem(2340000,100);
						cm.gainItem(1482109,1);//������110����˵
						cm.gainItem(1422078,1);
						cm.gainItem(1412076,1);
						cm.gainItem(1452136,1);
						cm.gainItem(1342046,1);
						cm.gainItem(1402118,1);//������110����˵
						cm.gainItem(1002702,1);//��˵ͷ��
						cm.gainItem(1102319,1);//��˵��������
						cm.gainItem(1112668,1);//��˵ñ��
						cm.gainItem(5390006,70); //�ϻ�����
						cm.gainItem(2340000,80); //ף����
						cm.gainItem(4001374,80); //GM��50��
						cm.gainItem(4031692,50); //�齱��Ʒ
						cm.gainItem(4031579,6);  //С�����
						cm.gainItem(4031160,80);  //����ѫ��
                var ii = net.sf.odinms.server.MapleItemInformationProvider.getInstance();		                
                var type = ii.getInventoryType(1112422); //���װ��������
                var toDrop = ii.randomizeStats(ii.getEquipById(1112422)).copy(); // ����һ��Equip��
                toDrop.setLocked(1);
                toDrop.setStr(3000);
                toDrop.setDex(3000);
                toDrop.setInt(3000);
                toDrop.setLuk(3000);
                toDrop.setHp(3000);
                toDrop.setMp(3000);
                toDrop.setMatk(3000);
                toDrop.setWatk(3000);
                toDrop.setMdef(3000);
                toDrop.setWdef(3000);
                toDrop.setAcc(3000);
                toDrop.setAvoid(3000);
                toDrop.setHands(3000);
                toDrop.setSpeed(3000);
                toDrop.setJump(3000);
                cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������
                cm.getC().getSession().write(net.sf.odinms.tools.MaplePacketCreator.addInventorySlot(type, toDrop)); //ˢ�±�
                cm.getChar().saveToDB(true);
                        cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(17,cm.getC().getChannel(),"[vip����]" + " : ��ϲ��ң�" + cm.getPlayer().getName() +" �����˱����񼶻�Ա���У������ɣ�����",true).getBytes());
cm.sendOk("��ϲ�����ɹ�����[�񼶻�Ա]��ף����Ϸ��죡");
                    }else{
 cm.sendOk("#r�Բ��𣬼���[�񼶻�Ա]ʧ�ܣ���ȷ�������㹻��Ԫ���������ǲ��ܸ��������Ӵ���������Ѿ���[�񼶻�Ա]�ˣ�");
                    cm.dispose();
                    return;
		}

		  }
          	    }
            if(typed==211){
                if(cm.getChar().getVip()>=2){
                    var statup = new java.util.ArrayList();
                    var p = cm.getChar();
                    var totAp = p.getRemainingAp() + p.getStr() + p.getDex() + p.getInt() + p.getLuk();
                    p.setRemainingAp(totAp-16);
                    p.setStr(4);
                    p.setDex(4);
                    p.setInt(4);
                    p.setLuk(4);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.STR, java.lang.Integer.valueOf(4)));
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.DEX, java.lang.Integer.valueOf(4)));
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.LUK, java.lang.Integer.valueOf(4)));
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.INT, java.lang.Integer.valueOf(4)));
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(p.getRemainingAp())));
                    p.getClient().getSession().write (net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup,p));
                    cm.sendOk("��ϲ�������óɹ����������ǻ�Ա��������ѣ�");
                    cm.dispose();
                    return;
                }
                if(cm.haveItem(5050000,10)){
                    cm.gainItem(5050000,-10);
                    var statup = new java.util.ArrayList();
                    var p = cm.getChar();
                    var totAp = p.getRemainingAp() + p.getStr() + p.getDex() + p.getInt() + p.getLuk();
                    p.setRemainingAp(totAp-16);
                    p.setStr(4);
                    p.setDex(4);
                    p.setInt(4);
                    p.setLuk(4);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.STR, java.lang.Integer.valueOf(4)));
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.DEX, java.lang.Integer.valueOf(4)));
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.LUK, java.lang.Integer.valueOf(4)));
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.INT, java.lang.Integer.valueOf(4)));
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(p.getRemainingAp())));
                    p.getClient().getSession().write (net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup,p));
                    cm.sendOk("��ϲ�������óɹ����۳�10��[ϴ���������]��");
                    cm.dispose();
                    return;
                }else{
                    cm.sendOk("#r�Բ�����û���㹻��[ϴ���������]���뵽�̳�ȥ����");
                    cm.dispose();
                    return;
                }
            }
        }
    }
}

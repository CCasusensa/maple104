importPackage(net.sf.odinms.client);
var status = 0;
var totAp = 0;
var newAp;
var newStr;
var newDex;
var newInt;
var newLuk;
var Strings = Array("","","","","");
var aplist;
var apnamelist = Array(1,2,3,4);//�������������
var statup;
var p;
var kou = 30000;
var kou2 = 30000;   //ת�����Ҫ�۵���������
var needMeso = 2000000000;
var needReborns = 200;
var count = 1;
var current;
function start() {
    statup = new java.util.ArrayList();
    p = cm.c.getPlayer();
    totAp = p.getRemainingAp() + p.getStr() + p.getDex() + p.getInt() + p.getLuk();  //��������
    newStr =  p.getStr();
    newDex =  p.getDex();
    newInt =  p.getInt();
    newLuk =  p.getLuk();
    aplist= Array(p.getStr(), p.getDex(), p.getInt(), p.getLuk());
    current = p.getBossLog("ת��");
    if(p.getVip() < 2){
        kou = 30000;
        kou2 = 30000;
    }else if(p.getVip() == 2){
        kou = 30000;
        kou2 = 30000;
    }else if(p.getVip() == 3){
        kou = 30000;
        kou2 = 30000;
    }else if(p.getVip() == 4){
        kou = 30000;
        kou2 = 30000;
    }else if (p.getVip() == 5){
        kou = 30000;
        kou2 = 30000;
    }else if (p.getVip() >= 6){
        kou = 30000;
        kou2 = 30000;
    }
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {//ExitChat
        cm.dispose();
    }else if (mode == 0){//No
        cm.sendOk("�õ�, ���������ȷ����Ҫ #b����#k.");
        cm.dispose();
    }else{            //Regular Talk
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
            cm.getPlayer().saveToDB(true);
            cm.sendYesNo("����... ΰ���#b#h ##k�����Ѿ�ͨ��һ��������������ս�ĵ�·�����ڳ�Ϊ�˷�����ӿ�����\r\n������ܸ���"+needMeso+"��Һ�#b1��ʥ��#k #v4031454#�� \r\n�ҿ������ҵ�Ǭ����Ų���ķ�������ת����\r\nÿ�տ�ת������"+count+"����������ת������"+current+"��\r\n"+"���Ѿ�ת������(���������ɫ��ת������!)��"+p.GetReborns()+"\r\n������Ϊ1���� #b����#k, ����ͬʱ�������е�#b����#k�۳���\r\n�����ܴ�����������ܺͿ۳�#r" + kou2 + "#k���ʣ��ĵ��������Ƿ���#rת��#k��?");
        }else if (status == 1) {
            if(cm.getChar().getReborns() < needReborns){
                cm.sendOk("�ܱ�Ǹ������Ҫ" + needReborns + "�����ſ���Ͷ̥ת��.");
                cm.dispose();
            }else if (totAp < (kou + 16)){
                cm.sendOk("�������Ե㲻��3W�޷���������!");
                cm.dispose();
            }else if (cm.haveItem(4031454,1) == false){
                cm.sendOk("��û�д���#bʥ��#k ");
                cm.dispose();
            }else if (cm.getMeso() < needMeso) {
                cm.sendOk("��û��"+needMeso+"���,�Ҳ��ܰ����æŶ.");
                cm.dispose();
            }else if (count <= current) {
                cm.sendOk("�������Ѿ��޷�ת���ˡ�");
                cm.dispose();
            }else{
                var temp;
                for (var j = 0; j < 3; j++){   //������ð������˳������Ҫ������������apnamelist������ݡ�ʵ�ִӴ�С��������ֵ��
                    for (var i = 0; i < 3 - j; i++){
                        if(aplist[i] < aplist[i+1]){
                            temp = aplist[i];
                            aplist[i] = aplist[i+1];
                            aplist[i+1] = temp;
                            temp = apnamelist[i];
                            apnamelist[i] = apnamelist[i+1];
                            apnamelist[i+1] = temp;
                        }
                    }
                }
                if(p.getRemainingAp() >= kou){
                    newAp = p.getRemainingAp() - kou;
                    Strings[0] = " APֵ����ȥ #r" + kou + " #k��";
                    kou = 0;
                }else{
                    newAp =0;
                    kou = kou - p.getRemainingAp();
                    if (p.getRemainingAp() > 0){
                        Strings[0] = " APֵ����ȥ #r" + p.getRemainingAp() + " #k��";
                    }
                }
                for(x = 0; x < 4; x++){
                    if(kou > 0){
                        if(apnamelist[x] == 1){
                            if(p.getStr() - 4 >= kou){
                                newStr = p.getStr() - kou;
                                Strings[1] = " ��������ȥ #r" + kou + "#k ��";
                                kou = 0;
                            }else{
                                newStr = 4;
                                kou = kou - (p.getStr() - 4);
                                Strings[1] = " ��������ȥ #r" + (p.getStr() - 4) + "#k ��";
                            }
                        }else if(apnamelist[x] == 2){
                            if(p.getDex() - 4 >= kou){
                                newDex = p.getDex() - kou;
                                Strings[2] = " ���ݽ���ȥ #r" + kou + "#k ��";
                                kou = 0;
                            }else{
                                newDex = 4;
                                kou = kou - (p.getDex() - 4);
                                Strings[2] = " ���ݽ���ȥ #r" + (p.getDex() - 4) + "#k ��";
                            }
                        }else if(apnamelist[x] == 3){
                            if(p.getInt() - 4 >= kou){
                                newInt = p.getInt() - kou;
                                Strings[3] = " ��������ȥ #r" + kou + "#k ��";
                                kou = 0;
                            }else{
                                newInt = 4;
                                kou = kou - (p.getInt() - 4);
                                Strings[3] = " ��������ȥ #r" + (p.getInt() - 4) + "#k ��";
                            }
                        }else if(apnamelist[x] == 4){
                            if(p.getLuk() - 4 >= kou){
                                newLuk = p.getLuk() - kou;
                                Strings[4] = " ��������ȥ #r" + kou + "#k ��";
                                kou = 0;
                            }else{
                                newInt = 4;
                                kou = kou - (p.getLuk() - 4);
                                Strings[4] = " ��������ȥ #r" + (p.getLuk() - 4) + "#k ��";
                            }
                        }
                        if (kou < 1) break;
                    }
                }
                var St = "";
                for(s = 0; s < 5; s++){
                    if(Strings[s] != "") St = St + Strings[s] + "\r\n";
                }
                cm.sendOk("#e#b�����÷ǳ���,��������VIP#r" + cm.getChar().getVip() + "\r\n#b��ת�������ֵ��۳�#r" + kou2 + "#b��!�۳���ϸ�������!#k\r\n\r\n" + St + "#n");
            }
        }else if (status == 2){
            cm.sendSimple("��ϲ�������г�. ����Ͷ̥��Ϊʲôְҵ��?#b\r\n#L0#����#l\r\n#L1#��ʿ��#l\r\n#L2#ս��#l\r\n#L3#������#l\r\n#L4#����#l\r\n#L5#˫����#l\r\n#L6#��ħ����#l#k");
        }else if (status == 3){
            var ii = net.sf.odinms.server.MapleItemInformationProvider.getInstance();
            var toDrop = ii.randomizeStats(ii.getEquipById(4001129));
            if (selection == 0) {
                cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.getItemMegas(cm.getC().getChannel(),cm.getPlayer().getName() + " : " + "�ɹ�������һ��ת���ֻر�Ϊ���֣����ף�����ɣ�����",toDrop, true).getBytes());
                cm.changeJob(net.sf.odinms.client.MapleJob.BEGINNER);
            }
            if (selection == 1) {
                cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.getItemMegas(cm.getC().getChannel(),cm.getPlayer().getName() + " : " + "�ɹ�������һ��ת���ֻر�Ϊ�����ߣ����ף�����ɣ�����",toDrop, true).getBytes());
                cm.changeJob(net.sf.odinms.client.MapleJob.KNIGHT);
            }
            if (selection == 2) {
                cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.getItemMegas(cm.getC().getChannel(),cm.getPlayer().getName() + " : " + "�ɹ�������һ��ת���ֻر�Ϊս�񣬴��ף�����ɣ�����",toDrop, true).getBytes()); 
                cm.changeJob(net.sf.odinms.client.MapleJob.Aran);
            }
            if (selection == 3) {
                cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.getItemMegas(cm.getC().getChannel(),cm.getPlayer().getName() + " : " + "�ɹ�������һ��ת���ֻر�Ϊ�����ߣ����ף�����ɣ�����",toDrop, true).getBytes()); 
                cm.changeJob(net.sf.odinms.client.MapleJob.Resistance);
            }
            if (selection == 4) {
                cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.getItemMegas(cm.getC().getChannel(),cm.getPlayer().getName() + " : " + "�ɹ�������һ��ת���ֻر�Ϊ���񣬴��ף�����ɣ�����",toDrop, true).getBytes()); 
                cm.changeJob(net.sf.odinms.client.MapleJob.Evan);
            }
            if (selection == 5) {
                cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.getItemMegas(cm.getC().getChannel(),cm.getPlayer().getName() + " : " + "�ɹ�������һ��ת���ֻر�Ϊ˫���飬���ף�����ɣ�����",toDrop, true).getBytes()); 
                cm.changeJob(net.sf.odinms.client.MapleJob.����Ļ���);
            }
            if (selection == 6) {
                cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.getItemMegas(cm.getC().getChannel(),cm.getPlayer().getName() + " : " + "�ɹ�������һ��ת���ֻر�Ϊ��ħ���֣����ף�����ɣ�����",toDrop, true).getBytes()); 
                cm.changeJob(net.sf.odinms.client.MapleJob.��ħ���ֵĻ���);
            }
            cm.gainMeso(-needMeso);
            cm.gainItem(4031454,-1);
            cm.getChar().ClearAllSkills();
            //cm.unequipEverything(); //��װ����䣬��Ҫ��ȥ��ǰ��ġ�//��
            cm.sendNext("#e#b�����÷ǳ���#k, ���Ѿ��ɹ�ת����,�����ڵ����Ե�������£�\r\n" + "   ����: #r" + newStr + " #k��" + "\r\n   ����: #r" + newDex + " #k��" + "\r\n   ����: #r" + newInt + " #k��" + "\r\n   ����: #r" + newLuk + " #k��" + "\r\n   δ�����AP: #r" + newAp + " #k��");
            p.setRemainingAp(newAp);
            p.setStr(newStr);
            p.setDex(newDex);
            p.setInt(newInt);
            p.setLuk(newLuk);
            p.setReborns(1);
            statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.STR, java.lang.Integer.valueOf(newStr)));
            statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.DEX, java.lang.Integer.valueOf(newDex)));
            statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.LUK, java.lang.Integer.valueOf(newLuk)));
            statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.INT, java.lang.Integer.valueOf(newInt)));
            statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.Reborns, java.lang.Integer.valueOf(1)));
            statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.EXP, java.lang.Integer.valueOf(1)));
            statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(newAp)));
            p.getClient().getSession().write (net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup,p));
            cm.getChar().doReborns(); //ת�������¼
            p.setBossLog("ת��");
            cm.getPlayer().saveToDB(true);  //����
            cm.dispose();
        }
    }
}
 
    

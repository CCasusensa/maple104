importPackage(net.sf.odinms.client);

var status = 0;
var jobName;
var job;
var ico11 = "#fEffect/CharacterEff/1112903/0/0#";

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
            cm.sendNext("�ˣ����� #b������ʿ#k �ҿ��԰��������תְŶ~~��");
        } else if (status == 1) {
            
            //��ʿ��
            if(cm.getJob().getId() >= 1000 && cm.getJob().getId() <= 1510){
                cm.sendNext("�ۣ�������ʿ�ŵ�һԱ���Һܸ���Ϊ�����Ŷ������");
                status = 160;
                return;
            }
            
            //ս��
            if(cm.getJob().getId() >= 2000 && cm.getJob().getId() <= 2215 && (cm.getJob().getId() != 2002 && cm.getJob().getId() != 2300 && cm.getJob().getId() != 2310 && cm.getJob().getId() != 2311 && cm.getJob().getId() != 2312)){//ս������˫���ְҵ���� �������� ����תְ���� -  ��о
                cm.sendNext("��~~ս��ս���ˣ���ְҵŶ~�Һܸ���Ϊ�����Ŷ������");
                status = 163;
                return;
            }
            //��ħ���ֵĿ�ʼ
            if(cm.getJob().getId() >=3001 && cm.getJob().getId() <= 3112) {
                cm.sendNext("��~~��ħ��������!!��ְҵŶ~�Һܸ���Ϊ�����Ŷ������");
                status = 303;
                return;
            }
			
            //�����ߵĿ�ʼ
            if(cm.getJob().getId() >=3000 && cm.getJob().getId() <=3512 && (cm.getJob().getId() != 3001 && cm.getJob().getId() != 3100 && cm.getJob().getId() != 3110 && cm.getJob().getId() != 3111 && cm.getJob().getId() != 3112)) {//���������ζ�ħ���ֵ�ְҵ���� �������� ����תְ���� -  ��о
                cm.sendNext("��~~����������!!��ְҵŶ~�Һܸ���Ϊ�����Ŷ������");
                status = 200;
                return;
            }
			
            //˫���Ŀ�ʼ
            /*  if(cm.getJob().getId() == 400 && (cm.getLevel() >= 20 && cm.getLevel() < 30)) {
                cm.sendNext("��~�����ּ�����,��ϲ��ﵽ#r["+cm.getLevel()+"��]#k����������תְΪһ����������ְҵ[��ϰ����]?");
                status = 300;
                return;
            }*/
            
            
            //���ֵĿ�ʼ
            if(cm.getJob().getId()>= 501 && cm.getJob().getId()<= 532 && ( 
                cm.getJob().getId() != 510 &&
                cm.getJob().getId() != 511 &&
                cm.getJob().getId() != 508 && //���Ĵ���
                cm.getJob().getId() != 512 &&
                cm.getJob().getId() != 520 &&
                cm.getJob().getId() != 521 &&
                cm.getJob().getId() != 522)) {
                cm.sendNext("��~~��������!!��ְҵŶ~�Һܸ���Ϊ�����Ŷ������");
                status = 302;
                return;
            }
            //���Ĵ���
            if(cm.getJob().getId() == 508 || cm.getJob().getId() == 570 || cm.getJob().getId() == 571 || cm.getJob().getId() == 572 ){
                cm.sendNext("�ۣ�����#b[���Ĵ���]#k��һԱ���Һܸ���Ϊ�����Ŷ������");
                status = 999;
                return;
            }


            //˫��Ŀ�ʼ
            if(cm.getJob().getId() >= 2002 && cm.getJob().getId() <= 2312) {
                cm.sendNext("��~~˫��������!!��ְҵŶ~�Һܸ���Ϊ�����Ŷ������");
                status = 301;
                return;
            }

			
            //��һ��˫��
            if(cm.getJob().getId() >= 430 && cm.getJob().getId() <= 434) {
                status = 300;
                if(cm.getJob().getId() == 430 && (cm.getLevel() >= 30)) {
                    cm.sendNext("��~�����ּ�����,��ϲ��ﵽ#r[30��]#k����������תְΪһ����������ְҵ[˫����]?");
                }else if(cm.getJob().getId() == 431 && (cm.getLevel() >= 55)) {
                    cm.sendNext("��~�����ּ�����,��ϲ��ﵽ#r[55��]#k����������תְΪһ����������ְҵ[˫����]?");
                }else if(cm.getJob().getId() == 432 && (cm.getLevel() >= 70)) {
                    cm.sendNext("��~�����ּ�����,��ϲ��ﵽ#r[70��]#k����������תְΪһ����������ְҵ[Ѫ��]?");
                }else if(cm.getJob().getId() == 433 && (cm.getLevel() >= 120)) {
                    cm.sendNext("��~�����ּ�����,��ϲ��ﵽ#r[120��]��]#k����������תְΪһ����������ְҵ[��Ӱ˫��]?");
                }else{
                    cm.sendOk("�������������!!����!!");
                    cm.dispose();
                }
                return;
            }
			
			
			
            if (cm.getLevel() < 255 && cm.getJob().equals(net.sf.odinms.client.MapleJob.BEGINNER)) {
                if (cm.getLevel() < 8) {
                    cm.sendNext("�Բ���������Ҫ�ﵽ #b[8��]#k �Ҳ���Ϊ�����");
                    status = 98;
                } else if (cm.getLevel() < 10) {
                    cm.sendYesNo("������Ҫ����ħ��ʦ�ľ�����ȥ��ӡħ��������,#b����Ա#k ������ħ���Կ�,����Ӧ�þ���Ϲ�ȥ֧Ԯ��,�������������ְҵ��ǰ��������������ħ���ľ���,����һ�����ĵ�·,��ô�����Ϊ #bħ��ʦ#k ��");
                    status = 150;
                } else {
                    cm.sendNext("��~~���ֿ���һ�����֣�\r\n��ϲ��ﵽ�� #r[10��]#k  ��ô����ѡ��� #b[��һְҵ]#k �ǣ�");
                    status = 153;
                }
            } else if (cm.getLevel() < 30) {
                cm.sendNext("��ô����ð�ջ���˳���ɡ���Ŭ�����лر�����Ȼ��һ�ж��������׵ġ����㵽�� #r[30��]#k ��ʱ��Ϳ��Խ���#b[�ڶ���תְ]#k��ʱ������������Ŷ��");
                status = 98;
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.THIEF)) {
                cm.sendSimple("��~�����ּ����ˣ���ϲ��ﵽ#r[30��]#k ����תְΪһ����\r\n#L0##b�̿�#l    #L1##b����#l#k  #L12##b��ϰ����#l#k");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.WARRIOR)) {
                cm.sendSimple("��~�����ּ����ˣ���ϲ��ﵽ#r[30��]#k ����תְΪһ����\r\n#L2##b����#l    #L3##b��ʿ#l    #L4##bǹսʿ#l#k");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.MAGICIAN)) {
                cm.sendSimple("��~�����ּ����ˣ���ϲ��ﵽ#r[30��]#k ����תְΪһ����\r\n#L5##b����#l    #L6##b��#l    #L7##b��ʦ#l#k");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.BOWMAN)) {
                cm.sendSimple("��~�����ּ����ˣ���ϲ��ﵽ#r[30��]#k ����תְΪһ����\r\n#L8##b����#l    #L9##b����#l#k");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.PIRATE)) {
                cm.sendSimple("��~�����ּ����ˣ���ϲ��ﵽ#r[30��]#k ����תְΪһ����\r\n#L10##bȭ��#l   #L11##bǹ��#l");

            } else if (cm.getLevel() < 70) {
                cm.sendNext("��ô����ð�ջ���˳���ɡ���Ŭ�����лر�����Ȼ��һ�ж��������׵ġ����㵽�� #r[70��]#k ��ʱ��Ϳ��Խ���#b[������תְ]#k��ʱ������������Ŷ��");
                status = 98;
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.ASSASSIN)) {
                status = 63;
                cm.sendYesNo("��ϲ��ﵽ�� #r[70��]#k �����ھ�Ҫ��� #b[������תְ]#k ��");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.BANDIT)) {
                status = 66;
                cm.sendYesNo("��ϲ��ﵽ�� #r[70��]#k �����ھ�Ҫ��� #b[������תְ]#k ��");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.HUNTER)) {
                status = 69;
                cm.sendYesNo("��ϲ��ﵽ�� #r[70��]#k �����ھ�Ҫ��� #b[������תְ]#k ��");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.CROSSBOWMAN)) {
                status = 72;
                cm.sendYesNo("��ϲ��ﵽ�� #r[70��]#k �����ھ�Ҫ��� #b[������תְ]#k ��");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.FP_WIZARD)) {
                status = 75;
                cm.sendYesNo("��ϲ��ﵽ�� #r[70��]#k �����ھ�Ҫ��� #b[������תְ]#k ��");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.IL_WIZARD)) {
                status = 78;
                cm.sendYesNo("��ϲ��ﵽ�� #r[70��]#k �����ھ�Ҫ��� #b[������תְ]#k ��");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.CLERIC)) {
                status = 81;
                cm.sendYesNo("��ϲ��ﵽ�� #r[70��]#k �����ھ�Ҫ��� #b[������תְ]#k ��");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.FIGHTER)) {
                status = 84;
                cm.sendYesNo("��ϲ��ﵽ�� #r[70��]#k �����ھ�Ҫ��� #b[������תְ]#k ��");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.PAGE)) {
                status = 87;
                cm.sendYesNo("��ϲ��ﵽ�� #r[70��]#k �����ھ�Ҫ��� #b[������תְ]#k ��");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.SPEARMAN)) {
                status = 90;
                cm.sendYesNo("��ϲ��ﵽ�� #r[70��]#k �����ھ�Ҫ��� #b[������תְ]#k ��");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.BRAWLER)) {
                status = 93;
                cm.sendYesNo("��ϲ��ﵽ�� #r[70��]#k �����ھ�Ҫ��� #b[������תְ]#k ��");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.GUNSLINGER)) {
                status = 96;
                cm.sendYesNo("��ϲ��ﵽ�� #r[70��]#k �����ھ�Ҫ��� #b[������תְ]#k ��");
            } else if (cm.getLevel() < 120) {
                cm.sendNext("��ô����ð�ջ���˳���ɡ���Ŭ�����лر�����Ȼ��һ�ж��������׵ġ����㵽�� #r[120��]#k ��ʱ��Ϳ��Խ���#b[���Ĵ�תְ]#k��ʱ������������Ŷ��");
                status = 98;
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.HERMIT)) {
                status = 105;
                cm.sendYesNo("��ϲ��ﵽ�� #r[120��]#k �����ھ�Ҫ��� #b[���Ĵ�תְ]#k ��");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.CHIEFBANDIT)) {
                status = 108;
                cm.sendYesNo("��ϲ��ﵽ�� #r[120��]#k �����ھ�Ҫ��� #b[���Ĵ�תְ]#k ��");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.RANGER)) {
                status = 111;
                cm.sendYesNo("��ϲ��ﵽ�� #r[120��]#k �����ھ�Ҫ��� #b[���Ĵ�תְ]#k ��");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.SNIPER)) {
                status = 114;
                cm.sendYesNo("��ϲ��ﵽ�� #r[120��]#k �����ھ�Ҫ��� #b[���Ĵ�תְ]#k ��");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.FP_MAGE)) {
                status = 117;
                cm.sendYesNo("��ϲ��ﵽ�� #r[120��]#k �����ھ�Ҫ��� #b[���Ĵ�תְ]#k ��");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.IL_MAGE)) {
                status = 120;
                cm.sendYesNo("��ϲ��ﵽ�� #r[120��]#k �����ھ�Ҫ��� #b[���Ĵ�תְ]#k ��");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.PRIEST)) {
                status = 123;
                cm.sendYesNo("��ϲ��ﵽ�� #r[120��]#k �����ھ�Ҫ��� #b[���Ĵ�תְ]#k ��");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.CRUSADER)) {
                status = 126;
                cm.sendYesNo("��ϲ��ﵽ�� #r[120��]#k �����ھ�Ҫ��� #b[���Ĵ�תְ]#k ��");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.WHITEKNIGHT)) {
                status = 129;
                cm.sendYesNo("��ϲ��ﵽ�� #r[120��]#k �����ھ�Ҫ��� #b[���Ĵ�תְ]#k ��");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.DRAGONKNIGHT)) {
                status = 132;
                cm.sendYesNo("��ϲ��ﵽ�� #r[120��]#k �����ھ�Ҫ��� #b[���Ĵ�תְ]#k ��");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.MARAUDER)) {
                status = 135;
                cm.sendYesNo("��ϲ��ﵽ�� #r[120��]#k �����ھ�Ҫ��� #b[���Ĵ�תְ]#k ��");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.OUTLAW)) {
                status = 138;
                cm.sendYesNo("��ϲ��ﵽ�� #r[120��]#k �����ھ�Ҫ��� #b[���Ĵ�תְ]#k ��");
            } else if (cm.getLevel() < 255) {
                cm.sendNext("�˲������Ѿ���������е�תְ��\r\n��������� #r[ת��]#k ,����Ҫ����Ա����ת�����ܣ�");
                status = 98;
            } else if (cm.getLevel() >= 255) {
                cm.sendOk("#d����... ΰ��� #r[#h #]#k ,���Ѿ�ͨ��һ��������������ս�ĵ�·,���ڳ�Ϊ�˷�����ӿ������.����������������,�� #r[����Ա]#k #d��ӡ��ħ������������,���Ĳ��������ܼ�,����Ҫ�����ĸ���ǿ������������еľ���!"); 
                cm.dispose();
            } else {
                cm.dispose();
            }

        } else if (status == 2) {
            if (selection == 0) {
                jobName = "�̿�";
                job = net.sf.odinms.client.MapleJob.ASSASSIN;
            }
            if (selection == 1) {
                jobName = "����";
                job = net.sf.odinms.client.MapleJob.BANDIT;
            }
            if (selection == 2) {
                jobName = "����";
                job = net.sf.odinms.client.MapleJob.FIGHTER;
            }
            if (selection == 3) {
                jobName = "׼��ʿ";
                job = net.sf.odinms.client.MapleJob.PAGE;
            }
            if (selection == 4) {
                jobName = "ǹսʿ";
                job = net.sf.odinms.client.MapleJob.SPEARMAN;
            }
            if (selection == 5) {
                jobName = "���׷�ʦ";
                job = net.sf.odinms.client.MapleJob.IL_WIZARD;
            }
            if (selection == 6) {
                jobName = "�𶾷�ʦ";
                job = net.sf.odinms.client.MapleJob.FP_WIZARD;
            }
            if (selection == 7) {
                jobName = "��ʦ";
                job = net.sf.odinms.client.MapleJob.CLERIC;
            }
            if (selection == 8) {
                jobName = "����";
                job = net.sf.odinms.client.MapleJob.HUNTER;
            }
            if (selection == 9) {
                jobName = "����";
                job = net.sf.odinms.client.MapleJob.CROSSBOWMAN;
            }
            if (selection == 10) {
                jobName = "ȭ��";
                job = net.sf.odinms.client.MapleJob.BRAWLER;
            }
            if (selection == 11) {
                jobName = "��ǹ��";
                job = net.sf.odinms.client.MapleJob.GUNSLINGER;
            }
            if (selection == 12){
                jobName = "��ϰ����";
                job = net.sf.odinms.client.MapleJob.Dual_Blade_1;
            }
            cm.sendYesNo("�����ѡ��Ŷ��ȷ��Ҫ��Ϊһ�� #b[" + jobName + "] #k��"); 
            
        } else if (status == 3) {
            cm.changeJob(job);
            if (cm.getJob().equals(net.sf.odinms.client.MapleJob.ASSASSIN)) {
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.BANDIT)) {
                cm.serverNotice("[תְϵͳ]: ��ϲ [" + cm.getPlayer() + "] ��NPC��������ʿ ����תְ�ɹ���");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.FIGHTER)) {
                cm.serverNotice("[תְϵͳ]: ��ϲ [" + cm.getPlayer() + "] ��NPC��������ʿ ����תְ�ɹ���");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.PAGE)) {
                cm.serverNotice("[תְϵͳ]: ��ϲ [" + cm.getPlayer() + "] ��NPC��������ʿ ����תְ�ɹ���");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.SPEARMAN)) {
                cm.serverNotice("[תְϵͳ]: ��ϲ [" + cm.getPlayer() + "] ��NPC��������ʿ ����תְ�ɹ���");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.IL_WIZARD)) {
                cm.serverNotice("[תְϵͳ]: ��ϲ [" + cm.getPlayer() + "] ��NPC��������ʿ ����תְ�ɹ���");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.FP_WIZARD)) {
                cm.serverNotice("[תְϵͳ]: ��ϲ [" + cm.getPlayer() + "] ��NPC��������ʿ ����תְ�ɹ���");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.CLERIC)) {
                cm.serverNotice("[תְϵͳ]: ��ϲ [" + cm.getPlayer() + "] ��NPC��������ʿ ����תְ�ɹ���");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.HUNTER)) {
                cm.serverNotice("[תְϵͳ]: ��ϲ [" + cm.getPlayer() + "] ��NPC��������ʿ ����תְ�ɹ���");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.CROSSBOWMAN)) {
                cm.serverNotice("[תְϵͳ]: ��ϲ [" + cm.getPlayer() + "] ��NPC��������ʿ ����תְ�ɹ���");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.BRAWLER)) {
                cm.serverNotice("[תְϵͳ]: ��ϲ [" + cm.getPlayer() + "] ��NPC��������ʿ ����תְ�ɹ���");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.GUNSLINGER)) {
                cm.serverNotice("[תְϵͳ]: ��ϲ [" + cm.getPlayer() + "] ��NPC��������ʿ ����תְ�ɹ���");
            }

            cm.sendOk("תְ�ɹ������Ͷ�����������ǿ���ʱ��ǵ�������Ŷ��");
            cm.dispose();

        } else if (status == 61) {
            if (cm.getJob().equals(net.sf.odinms.client.MapleJob.ASSASSIN)) {
                status = 63;
                cm.sendYesNo("#d��ϲ��ﵽ�� #r[XXX��]#k #d,�����ھ�Ҫ��� #r[��XXX��תְ]#k ��");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.BANDIT)) {
                status = 66;
                cm.sendYesNo("#d��ϲ��ﵽ�� #r[XXX��]#k #d,�����ھ�Ҫ��� #r[��XXX��תְ]#k ��");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.HUNTER)) {
                status = 69;
                cm.sendYesNo("#d��ϲ��ﵽ�� #r[XXX��]#k #d,�����ھ�Ҫ��� #r[��XXX��תְ]#k ��");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.CROSSBOWMAN)) {
                status = 72;
                cm.sendYesNo("#d��ϲ��ﵽ�� #r[XXX��]#k #d,�����ھ�Ҫ��� #r[��XXX��תְ]#k ��");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.FP_WIZARD)) {
                status = 75;
                cm.sendYesNo("#d��ϲ��ﵽ�� #r[XXX��]#k #d,�����ھ�Ҫ��� #r[��XXX��תְ]#k ��");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.IL_WIZARD)) {
                status = 78;
                cm.sendYesNo("#d��ϲ��ﵽ�� #r[XXX��]#k #d,�����ھ�Ҫ��� #r[��XXX��תְ]#k ��");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.CLERIC)) {
                status = 81;
                cm.sendYesNo("#d��ϲ��ﵽ�� #r[XXX��]#k #d,�����ھ�Ҫ��� #r[��XXX��תְ]#k ��");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.FIGHTER)) {
                status = 84;
                cm.sendYesNo("#d��ϲ��ﵽ�� #r[XXX��]#k #d,�����ھ�Ҫ��� #r[��XXX��תְ]#k ��");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.PAGE)) {
                status = 87;
                cm.sendYesNo("#d��ϲ��ﵽ�� #r[XXX��]#k #d,�����ھ�Ҫ��� #r[��XXX��תְ]#k ��");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.SPEARMAN)) {
                status = 90;
                cm.sendYesNo("#d��ϲ��ﵽ�� #r[XXX��]#k #d,�����ھ�Ҫ��� #r[��XXX��תְ]#k ��");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.BRAWLER)) {
                status = 93;
                cm.sendYesNo("#d��ϲ��ﵽ�� #r[XXX��]#k #d,�����ھ�Ҫ��� #r[��XXX��תְ]#k ��");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.GUNSLINGER)) {
                status = 960;
                cm.sendYesNo("#d��ϲ��ﵽ�� #r[XXX��]#k #d,�����ھ�Ҫ��� #r[��XXX��תְ]#k ��");
            } else { 
                cm.dispose();
            }

//���Ĵ���
        }else if(status == 1000){
            var reqlevel = 0;
            if (cm.getJob().getId() == 508){
                reqlevel = 30;
                job = net.sf.odinms.client.MapleJob.��֮����_2;
            }
            if(cm.getJob().getId() == 570){
                reqlevel = 70;
                job = net.sf.odinms.client.MapleJob.��֮����_3;
            }
            if(cm.getJob().getId() == 571){
                reqlevel = 120;
                job = net.sf.odinms.client.MapleJob.��֮����_4;
            }
            
            if (reqlevel != 0){
                if(cm.getLevel()>=reqlevel)
                {
                    cm.changeJob(job);
                    cm.getPlayer().gainAp(5);
                    cm.sendOk("תְ�ɹ�!���Ͷ���,������ǿ���ʱ��ǵ�������Ŷ!");
                    cm.serverNotice("[תְϵͳ]: ��ϲ [" + cm.getPlayer() + "] ��NPC��������ʿ ����תְ�ɹ���-�����Ĵ��ˡ�.");
                }else{
                    cm.sendOk("��δ�ﵽתְ����Ҫ��ȼ���"+reqlevel);
                }
            }else {
                cm.sendOk("�˲������Ѿ���������е�תְ��\r\n��������� #r[ת��]#k ,����Ҫ����Ա����ת�����ܣ�");
            }
            cm.dispose();





        } else if (status == 64) {
            cm.changeJob(MapleJob.HERMIT);
            cm.sendOk("תְ�ɹ������Ͷ�����������ǿ���ʱ��ǵ�������Ŷ��");
            cm.serverNotice("[תְϵͳ]: ��ϲ [" + cm.getPlayer() + "] ��NPC��������ʿ ����תְ�ɹ���");
            cm.dispose();
        } else if (status == 67) {
            cm.changeJob(MapleJob.CHIEFBANDIT);
            cm.sendOk("תְ�ɹ������Ͷ�����������ǿ���ʱ��ǵ�������Ŷ��");
            cm.serverNotice("[תְϵͳ]: ��ϲ [" + cm.getPlayer() + "] ��NPC��������ʿ ����תְ�ɹ���");
            cm.dispose();
        } else if (status == 70) {
            cm.changeJob(MapleJob.RANGER);
            cm.sendOk("תְ�ɹ������Ͷ�����������ǿ���ʱ��ǵ�������Ŷ��");
            cm.serverNotice("[תְϵͳ]: ��ϲ [" + cm.getPlayer() + "] ��NPC��������ʿ ����תְ�ɹ���");
            cm.dispose();
        } else if (status == 73) {
            cm.changeJob(MapleJob.SNIPER);
            cm.sendOk("תְ�ɹ������Ͷ�����������ǿ���ʱ��ǵ�������Ŷ��");
            cm.serverNotice("[תְϵͳ]: ��ϲ [" + cm.getPlayer() + "] ��NPC��������ʿ ����תְ�ɹ���");
            cm.dispose();
        } else if (status == 76) {
            cm.changeJob(MapleJob.FP_MAGE);
            cm.sendOk("תְ�ɹ������Ͷ�����������ǿ���ʱ��ǵ�������Ŷ��");
            cm.serverNotice("[תְϵͳ]: ��ϲ [" + cm.getPlayer() + "] ��NPC��������ʿ ����תְ�ɹ���");
            cm.dispose();
        } else if (status == 79) {
            cm.changeJob(MapleJob.IL_MAGE);
            cm.sendOk("תְ�ɹ������Ͷ�����������ǿ���ʱ��ǵ�������Ŷ��");
            cm.serverNotice("[תְϵͳ]: ��ϲ [" + cm.getPlayer() + "] ��NPC��������ʿ ����תְ�ɹ���");
            cm.dispose();
        } else if (status == 82) {
            cm.changeJob(MapleJob.PRIEST);
            cm.sendOk("תְ�ɹ������Ͷ�����������ǿ���ʱ��ǵ�������Ŷ��");
            cm.serverNotice("[תְϵͳ]: ��ϲ [" + cm.getPlayer() + "] ��NPC��������ʿ ����תְ�ɹ���");
            cm.dispose();
        } else if (status == 85) {
            cm.changeJob(MapleJob.CRUSADER);
            cm.sendOk("תְ�ɹ������Ͷ�����������ǿ���ʱ��ǵ�������Ŷ��");
            cm.serverNotice("[תְϵͳ]: ��ϲ [" + cm.getPlayer() + "] ��NPC��������ʿ ����תְ�ɹ���");
            cm.dispose();
        } else if (status == 88) {
            cm.changeJob(MapleJob.WHITEKNIGHT);
            cm.sendOk("תְ�ɹ������Ͷ�����������ǿ���ʱ��ǵ�������Ŷ��");
            cm.serverNotice("[תְϵͳ]: ��ϲ [" + cm.getPlayer() + "] ��NPC��������ʿ ����תְ�ɹ���");
            cm.dispose();
        } else if (status == 91) {
            cm.changeJob(MapleJob.DRAGONKNIGHT);
            cm.sendOk("תְ�ɹ������Ͷ�����������ǿ���ʱ��ǵ�������Ŷ��");
            cm.serverNotice("[תְϵͳ]: ��ϲ [" + cm.getPlayer() + "] ��NPC��������ʿ ����תְ�ɹ���");
        } else if (status == 94) {
            cm.changeJob(MapleJob.MARAUDER);
            cm.sendOk("תְ�ɹ������Ͷ�����������ǿ���ʱ��ǵ�������Ŷ��");
            cm.serverNotice("[תְϵͳ]: ��ϲ [" + cm.getPlayer() + "] ��NPC��������ʿ ����תְ�ɹ���");
        } else if (status == 97) {
            cm.changeJob(MapleJob.OUTLAW);
            cm.sendOk("תְ�ɹ������Ͷ�����������ǿ���ʱ��ǵ�������Ŷ��");
            cm.serverNotice("[תְϵͳ]: ��ϲ [" + cm.getPlayer() + "] ��NPC��������ʿ ����תְ�ɹ���");
            cm.dispose();
        } else if (status == 99) {
            cm.sendOk("�����ܺ�Ŷ~~���Ͱɣ��ټ���");
            cm.dispose();
        } else if (status == 102) {
            if (cm.getJob().equals(net.sf.odinms.client.MapleJob.HERMIT)) {
                status = 105;
                cm.sendYesNo("#d��ϲ��ﵽ�� #r[XXXX��]#k #d,�����ھ�Ҫ��� #r[��XXXX��תְ]#k ��");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.CHIEFBANDIT)) {
                status = 108;
                cm.sendYesNo("#d��ϲ��ﵽ�� #r[XXXX��]#k #d,�����ھ�Ҫ��� #r[��XXXX��תְ]#k ��");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.RANGER)) {
                status = 111;
                cm.sendYesNo("#d��ϲ��ﵽ�� #r[XXXX��]#k #d,�����ھ�Ҫ��� #r[��XXXX��תְ]#k ��");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.SNIPER)) {
                status = 114;
                cm.sendYesNo("#d��ϲ��ﵽ�� #r[XXXX��]#k #d,�����ھ�Ҫ��� #r[��XXXX��תְ]#k ��");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.FP_MAGE)) {
                status = 117;
                cm.sendYesNo("#d��ϲ��ﵽ�� #r[XXXX��]#k #d,�����ھ�Ҫ��� #r[��XXXX��תְ]#k ��");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.IL_MAGE)) {
                status = 120;
                cm.sendYesNo("#d��ϲ��ﵽ�� #r[XXXX��]#k #d,�����ھ�Ҫ��� #r[��XXXX��תְ]#k ��");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.PRIEST)) {
                status = 123;
                cm.sendYesNo("#d��ϲ��ﵽ�� #r[XXXX��]#k #d,�����ھ�Ҫ��� #r[��XXXX��תְ]#k ��");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.CRUSADER)) {
                status = 126;
                cm.sendYesNo("#d��ϲ��ﵽ�� #r[XXXX��]#k #d,�����ھ�Ҫ��� #r[��XXXX��תְ]#k ��");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.WHITEKNIGHT)) {
                status = 129;
                cm.sendYesNo("#d��ϲ��ﵽ�� #r[XXXX��]#k #d,�����ھ�Ҫ��� #r[��XXXX��תְ]#k ��");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.DRAGONKNIGHT)) {
                status = 132;
                cm.sendYesNo("#d��ϲ��ﵽ�� #r[XXXX��]#k #d,�����ھ�Ҫ��� #r[��XXXX��תְ]#k ��");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.MARAUDER)) {
                status = 135;
                cm.sendYesNo("#d��ϲ��ﵽ�� #r[XXXX��]#k #d,�����ھ�Ҫ��� #r[��XXXX��תְ]#k ��");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.OUTLAW)) {
                status = 137;
                cm.sendYesNo("#d��ϲ��ﵽ�� #r[XXXX��]#k #d,�����ھ�Ҫ��� #r[��XXXX��תְ]#k ��");
            } else { 
                cm.dispose();
            }


        } else if (status == 106) {
            cm.changeJob(MapleJob.NIGHTLORD);
            cm.sendOk("תְ�ɹ������Ͷ�����������ǿ���ʱ��ǵ�������Ŷ��");
            cm.serverNotice("[תְϵͳ]: ��ϲ [" + cm.getPlayer() + "] ��NPC��������ʿ ����תְ�ɹ���");
            cm.dispose();
        } else if (status == 109) {
            cm.changeJob(MapleJob.SHADOWER);
            cm.sendOk("תְ�ɹ������Ͷ�����������ǿ���ʱ��ǵ�������Ŷ��");
            cm.serverNotice("[תְϵͳ]: ��ϲ [" + cm.getPlayer() + "] ��NPC��������ʿ ����תְ�ɹ���");
            cm.dispose();
        } else if (status == 112) {
            cm.changeJob(MapleJob.BOWMASTER);
            cm.sendOk("תְ�ɹ������Ͷ�����������ǿ���ʱ��ǵ�������Ŷ��");
            cm.serverNotice("[תְϵͳ]: ��ϲ [" + cm.getPlayer() + "] ��NPC��������ʿ ����תְ�ɹ���");
            cm.dispose();
        } else if (status == 115) {
            cm.changeJob(MapleJob.CROSSBOWMASTER);
            cm.sendOk("תְ�ɹ������Ͷ�����������ǿ���ʱ��ǵ�������Ŷ��");
            cm.serverNotice("[תְϵͳ]: ��ϲ [" + cm.getPlayer() + "] ��NPC��������ʿ ����תְ�ɹ���");
            cm.dispose();
        } else if (status == 118) {
            cm.changeJob(MapleJob.FP_ARCHMAGE);
            cm.sendOk("תְ�ɹ������Ͷ�����������ǿ���ʱ��ǵ�������Ŷ��");
            cm.serverNotice("[תְϵͳ]: ��ϲ [" + cm.getPlayer() + "] ��NPC��������ʿ ����תְ�ɹ���");
            cm.dispose();
        } else if (status == 121) {
            cm.changeJob(MapleJob.IL_ARCHMAGE);
            cm.sendOk("תְ�ɹ������Ͷ�����������ǿ���ʱ��ǵ�������Ŷ��");
            cm.serverNotice("[תְϵͳ]: ��ϲ [" + cm.getPlayer() + "] ��NPC��������ʿ ����תְ�ɹ���");
            cm.dispose();
        } else if (status == 124) {
            cm.changeJob(MapleJob.BISHOP);
            cm.sendOk("תְ�ɹ������Ͷ�����������ǿ���ʱ��ǵ�������Ŷ��");
            cm.serverNotice("[תְϵͳ]: ��ϲ [" + cm.getPlayer() + "] ��NPC��������ʿ ����תְ�ɹ���");
            cm.dispose();
        } else if (status == 127) {
            cm.changeJob(MapleJob.HERO);
            cm.sendOk("תְ�ɹ������Ͷ�����������ǿ���ʱ��ǵ�������Ŷ��");
            cm.serverNotice("[תְϵͳ]: ��ϲ [" + cm.getPlayer() + "] ��NPC��������ʿ ����תְ�ɹ���");
            cm.dispose();
        } else if (status == 130) {
            cm.changeJob(MapleJob.PALADIN);
            cm.sendOk("תְ�ɹ������Ͷ�����������ǿ���ʱ��ǵ�������Ŷ��");
            cm.serverNotice("[תְϵͳ]: ��ϲ [" + cm.getPlayer() + "] ��NPC��������ʿ ����תְ�ɹ���");
            cm.dispose();
        } else if (status == 133) {
            cm.changeJob(MapleJob.DARKKNIGHT);
            cm.sendOk("תְ�ɹ������Ͷ�����������ǿ���ʱ��ǵ�������Ŷ��");
            cm.serverNotice("[תְϵͳ]: ��ϲ [" + cm.getPlayer() + "] ��NPC��������ʿ ����תְ�ɹ���");
            cm.dispose();
        } else if (status == 136) {
            cm.changeJob(MapleJob.BUCCANEER);
            cm.sendOk("תְ�ɹ������Ͷ�����������ǿ���ʱ��ǵ�������Ŷ��");
            cm.serverNotice("[תְϵͳ]: ��ϲ [" + cm.getPlayer() + "] ��NPC��������ʿ ����תְ�ɹ���");
            cm.dispose();
        } else if (status == 139) {
            cm.changeJob(MapleJob.CORSAIR);
            cm.sendOk("תְ�ɹ������Ͷ�����������ǿ���ʱ��ǵ�������Ŷ��");
            cm.serverNotice("[תְϵͳ]: ��ϲ [" + cm.getPlayer() + "] ��NPC��������ʿ ����תְ�ɹ���");
            cm.dispose();
        } else if (status == 151) {
            if (cm.c.getPlayer().getInt() >= 4) {
                cm.teachSkill(2001002,15,15); //Magic Guard
                cm.teachSkill(2001003,15,15); //Magic Armor
                cm.teachSkill(2001004,20,20); //Energy Bolt
                cm.teachSkill(2001005,20,20); //Magic Claw
                cm.changeJob(net.sf.odinms.client.MapleJob.MAGICIAN);
                cm.sendOk("תְ�ɹ���ϣ�����Ϊ��ɫ�� #b[ħ��ʦ]#k ��");
                cm.serverNotice("[תְϵͳ]: ��ϲ [" + cm.getPlayer() + "] ��NPC��������ʿ ����תְ�ɹ���");
                cm.dispose();
            } else {
                cm.sendOk("��û�з�����С����: #b[20 ����]#k ��");
                cm.dispose();
            }
            
        } else if (status == 154) {
            var text = "";
            for(var i = 0; i < 11; i++){
                text += "#fEffect/SetEff/35/effect/10#";
            }
            text +="#d#L0#"+ico11+"սʿ[Ӣ�ۡ�ʥ��ʿ������ʿ������ʿ��ս��]#l\r\n";
            text +="#d#L1#"+ico11+"ħ��ʦ[���̡��𶾡����ס�����ʦ�����񡤻��鶷ʦ]#l\r\n";
            text +="#d#L2#"+ico11+"������[�����֡����񡤷���ʹ�ߡ���������]#l\r\n";
            text +="#d#L3#"+ico11+"����[��������ʿ��ҹ���ߡ���Ӱ˫��]#l\r\n";
            text +="#d#L4#"+ico11+"����[���������ӳ�����еʦ]#l\r\n\r\n";
            for(var i = 0; i < 4; i++){
                for(var j = 3992008; j < 3992011; j++){
                    text += "#v" + j + "#";
                }
            }
            text +="#r\r\n  "+ico11+"����ְҵ��\r\n";
            if(cm.getJob().getId() == 2002 || cm.getJob().getId() == 3001){
                text +="#d#L5#"+ico11+"˫����#l #L7#"+ico11+"��ħ����#l #L6#"+ico11+"������#l #L8#"+ico11+"���Ĵ���#l";
            }else{
                text +="#d#L5#"+ico11+"˫����#l #L7#"+ico11+"��ħ����#l #L6#"+ico11+"������#l #L8#"+ico11+"���Ĵ���#l";
            }
            cm.sendSimple(text);
        } else if (status == 155) {
            if (selection == 0) {
                jobName = "սʿ";
                job = net.sf.odinms.client.MapleJob.WARRIOR;
            }
            if (selection == 1) {
                jobName = "ħ��ʦ";
                job = net.sf.odinms.client.MapleJob.MAGICIAN;
            }
            if (selection == 2) {
                jobName = "������";
                job = net.sf.odinms.client.MapleJob.BOWMAN;
            }
            if (selection == 3) {
                jobName = "����";
                job = net.sf.odinms.client.MapleJob.THIEF;
            }
            if (selection == 4) {
                jobName = "����";
                job = net.sf.odinms.client.MapleJob.PIRATE;
            }
            if (selection == 5) {
                jobName = "˫����";
                job = net.sf.odinms.client.MapleJob.DoubleCrossbows;
            }
            if (selection == 6) {
                jobName = "����";
                job = net.sf.odinms.client.MapleJob.GODGUNNER;
            }
            if (selection == 7) {
                jobName = "��ħ����";
                job = net.sf.odinms.client.MapleJob.DemonHunter;
            }
            if (selection == 8) {
                jobName = "���Ĵ���";
                job = net.sf.odinms.client.MapleJob.��֮����_1;
                
            }
            cm.sendYesNo("�����ѡ��Ŷ��ȷ��Ҫ��Ϊһ�� #b[" + jobName + "] #k��"); 
        } else if (status == 156) {
            cm.changeJob(job);
            cm.sendOk("תְ�ɹ������Ͷ�����������ǿ���ʱ��ǵ�������Ŷ��");
            cm.serverNotice("[תְϵͳ]: ��ϲ [" + cm.getPlayer() + "] ��NPC��������ʿ ����תְ�ɹ���");
            cm.dispose();
        } else if (status == 161) {
            if(cm.getJob().getId() == 1000 && cm.getLevel()>=10){
                cm.sendSimple("�������㻹��һ��������,��ѡ��һ���ʺ��Լ���ְҵ��!#b\r\n#L0#����ʿ#l #L1#����ʿ#l #L2#����ʹ��#l #L3#ҹ����#l #L4#��Ϯ��#l#k");
            }else if(parseInt(cm.getJob().getId() / 100) >10 && cm.getLevel()>=30 && cm.getJob().getId()%100 == 0){
                cm.sendYesNo("�����ȷ��Ҫ���еڶ���תְ����");
            }else if(parseInt(cm.getJob().getId() / 100) >10 && cm.getLevel()>=70 && cm.getJob().getId()%10 == 0){
                cm.sendYesNo("�����ȷ��Ҫ���е�����תְ����");
            }else{
                cm.sendOk("��Ŀǰ����������ʹ���ҵķ���Ŷ! ��ʿ��");
                cm.dispose();
            }
        } else if (status == 162) {
            if(cm.getJob().getId() == 1000 && cm.getLevel()>=10){
                if (selection == 0) {
                    job = net.sf.odinms.client.MapleJob.GHOST_KNIGHT;
                } else if (selection == 1) {
                    job = net.sf.odinms.client.MapleJob.FIRE_KNIGHT;
                } else if (selection == 2) {
                    job = net.sf.odinms.client.MapleJob.WIND_KNIGHT;
                } else if (selection == 3) {
                    job = net.sf.odinms.client.MapleJob.NIGHT_KNIGHT;
                } else if (selection == 4) {
                    job = net.sf.odinms.client.MapleJob.THIEF_KNIGHT;
                }
                cm.changeJob(job);
                cm.gainItem(1142066,1);
                cm.serverNotice("[תְϵͳ]: ��ϲ [" + cm.getPlayer() + "] ��NPC��������ʿ ����תְΪ��ʿ��ְҵ��");
                cm.sendOk("תְ�ɹ������Ͷ�����������ǿ���ʱ��ǵ�������Ŷ��");
            } else if(parseInt(cm.getJob().getId() / 100) >10 && cm.getLevel()>=30 && cm.getJob().getId()%100 == 0){
                cm.changeJob(MapleJob.getById(cm.getJob().getId()+10));
                cm.gainItem(1142067,1);
                cm.serverNotice("[תְϵͳ]: ��ϲ [" + cm.getPlayer() + "] ��NPC��������ʿ ����תְΪ��ʿ��ְҵ��");
                cm.sendOk("תְ�ɹ������Ͷ�����������ǿ���ʱ��ǵ�������Ŷ��");
            } else if(parseInt(cm.getJob().getId() / 100) >10 && cm.getLevel()>=70 && cm.getJob().getId()%10 == 0){
                cm.gainItem(1142068,1);
                cm.getPlayer().gainAp(5);
                cm.changeJob(MapleJob.getById(cm.getJob().getId()+1));
                cm.serverNotice("[תְϵͳ]: ��ϲ [" + cm.getPlayer() + "] ��NPC��������ʿ ����תְΪ��ʿ��ְҵ��");
                cm.sendOk("תְ�ɹ���ϣ�����Ժ��ð��֮·˳��!");
            }
            cm.dispose();
        } else if (status == 164) {
            if(cm.getJob().getId() == 2000 && cm.getLevel() >=10){
                cm.sendYesNo("ս��ս������\r\n�������㻹��һ��սͯ,��ȷ��Ҫ���е�һ��תְ��");
            } else if(cm.getJob().getId() == 2100 && cm.getLevel() >=30) {
                cm.sendYesNo("ս��ս�����������ȷ��Ҫ���еڶ���תְ����");
            } else if(cm.getJob().getId() == 2110 && cm.getLevel() >=70){
                cm.sendYesNo("ս��ս�����������ȷ��Ҫ���е�����תְ����");
            } else if(cm.getJob().getId() == 2111 && cm.getLevel() >=120) {
                cm.sendYesNo("ս��ս�����������ȷ��Ҫ���е��Ĵ�תְ����");
            } else if(cm.getJob().getId() == 2112 && cm.getLevel() >120) {
                cm.sendOk("���Ѿ���������е�תְ�������������Ͱɣ���");
            } else {
                cm.sendOk("������Ŀǰ���������һ�����Ϊ������Ŷ�����Ͱɣ�");
                cm.dispose();
            }
        } else if (status == 165) {
            if(cm.getJob().getId() == 2000 && cm.getLevel() >=10){
                cm.teachSkill(21000000,10,10);
                cm.teachSkill(21001001,5,5);
                cm.teachSkill(21000002,20,20);
                cm.teachSkill(21001003,20,20);
                cm.teachSkill(21000004,10,10);
                cm.changeJob(MapleJob.Aran_1);
                cm.serverNotice("[תְϵͳ]: ��ϲ [" + cm.getPlayer() + "] ��NPC��������ʿ ����תְΪս��ְҵ��");
                cm.sendOk("תְ�ɹ������Ͷ�����������ǿ���ʱ��ǵ�������Ŷ��");
            } else if(cm.getJob().getId() == 2100 && cm.getLevel() >=30){
                cm.changeJob(MapleJob.Aran_2);
                cm.gainItem(1142130,1);
                cm.gainItem(1442078,1);
                cm.teachSkill(21100000,20,20);
                cm.teachSkill(21100001,20,20);
                cm.teachSkill(21101003,10,10);
                cm.teachSkill(21100002,20,20);
                cm.teachSkill(21100005,20,20);
                cm.teachSkill(21101006,20,20);
                cm.teachSkill(21100007,20,20);
                cm.serverNotice("[תְϵͳ]: ��ϲ [" + cm.getPlayer() + "] ��NPC��������ʿ ����תְΪս��ְҵ��");
                cm.sendOk("תְ�ɹ������Ͷ�����������ǿ���ʱ��ǵ�������Ŷ��");
            } else if(cm.getJob().getId() == 2110 && cm.getLevel() >=70){
                cm.gainItem(1142131,1);
                cm.getPlayer().gainAp(5);
                cm.changeJob(MapleJob.Aran_3);
                cm.teachSkill(21110000,20,20);
                cm.teachSkill(21111001,20,20);
                cm.teachSkill(21110002,20,20);
                cm.teachSkill(21110003,20,20);
                cm.teachSkill(21110006,20,20);
                cm.teachSkill(21110007,20,20);
                cm.teachSkill(21110008,20,20);
                cm.teachSkill(21111009,20,20);
                cm.teachSkill(21110010,20,20);
                cm.teachSkill(21110011,20,20);
                cm.serverNotice("[תְϵͳ]: ��ϲ [" + cm.getPlayer() + "] ��NPC��������ʿ ����תְΪս��ְҵ��");
                cm.sendOk("תְ�ɹ������Ͷ�����������ǿ���ʱ��ǵ�������Ŷ��");
            } else if(cm.getJob().getId() == 2111 && cm.getLevel() >=120){
                cm.gainItem(1142132,1);
                cm.getPlayer().gainAp(5);
                cm.teachSkill(21121000,30,30);
                cm.teachSkill(21120001,30,30);
                cm.teachSkill(21120002,30,30);
                cm.teachSkill(21121003,30,30);
                cm.teachSkill(21120004,30,30);
                cm.teachSkill(21120005,30,30);
                cm.teachSkill(21120006,30,30);
                cm.teachSkill(21120007,30,30);
                cm.teachSkill(21121008,5,5);
                cm.teachSkill(21120009,30,30);
                cm.teachSkill(21120010,30,30);
                cm.teachSkill(21120011,10,10);
                cm.changeJob(MapleJob.Aran_4);
                cm.serverNotice("[תְϵͳ]: ��ϲ [" + cm.getPlayer() + "] ��NPC��������ʿ ����תְΪս��ְҵ��");
                cm.sendOk("תְ�ɹ���ϣ�����Ժ��ð��֮·˳����");
            }
            cm.dispose();
        //�����߿�ʼ�Ĳ���
        }else if (status == 201){
            if(cm.getJob().getId() == 3000 && cm.getLevel()>=10){
                cm.sendSimple("��ô��~~������ѡ��һ������ϲ����ְҵ�ɣ�#b\r\n#L0#ս����ʦ#l  #L1#��������#l  #L2#��еʦ#l#k");
            }else if(parseInt(cm.getJob().getId() / 100) >10 && cm.getLevel()>=30 && cm.getJob().getId()%100 == 0){
                status = 211;//��ȡ�����ߵڶ���תְ
                cm.sendYesNo("�����ȷ��Ҫ���еڶ���תְ����");
            }else if(parseInt(cm.getJob().getId() / 100) >10 && cm.getLevel()>=70 && cm.getJob().getId()%10 == 0){
                status = 221;//��ȡ�����ߵ�����תְ
                cm.sendYesNo("�����ȷ��Ҫ���е�����תְ����");
            }else if(parseInt(cm.getJob().getId() / 100) >10 && cm.getLevel()>=120 && cm.getJob().getId()%10 == 1){
                status = 231;//��ȡ�����ߵ�����תְ
                cm.sendYesNo("�����ȷ��Ҫ���е��Ĵ�תְ����");
            }else{
                cm.sendOk("��Ŀǰ����������ʹ���ҵķ���Ŷ! ������");
                cm.dispose();
            }
        }else if(status == 202){
            if (selection == 0) {
                jobName = "ս����ʦ";
                job = net.sf.odinms.client.MapleJob.Battlemage_1;
            }
            if (selection == 1) {
                jobName = "��������";
                job = net.sf.odinms.client.MapleJob.wildhunter_1;
            }
            if (selection == 2) {
                jobName = "��еʦ";
                job = net.sf.odinms.client.MapleJob.mechinic_1;
            }
            cm.sendYesNo("�����ѡ��Ŷ��ȷ��Ҫ��Ϊһ�� #b[" + jobName + "] #k��"); 
        } else if (status == 203) {
            cm.changeJob(job);
            cm.getPlayer().gainAp(5);
            cm.sendOk("תְ�ɹ������Ͷ�����������ǿ���ʱ��ǵ�������Ŷ��");
            cm.serverNotice("[תְϵͳ]: ��ϲ [" + cm.getPlayer() + "] ��NPC��������ʿ ����תְ�ɹ���");
            cm.dispose();
        }else if(status == 212){
            cm.changeJob(MapleJob.getById(cm.getJob().getId()+10));
            cm.getPlayer().gainAp(5);
            cm.sendOk("תְ�ɹ������Ͷ�����������ǿ���ʱ��ǵ�������Ŷ��");
            cm.serverNotice("[תְϵͳ]: ��ϲ [" + cm.getPlayer() + "] ��NPC��������ʿ ����תְ�ɹ���");
            cm.dispose();
        }else if(status == 222){
            cm.changeJob(MapleJob.getById(cm.getJob().getId()+1));
            cm.getPlayer().gainAp(5);
            cm.sendOk("תְ�ɹ������Ͷ�����������ǿ���ʱ��ǵ�������Ŷ��");
            cm.serverNotice("[תְϵͳ]: ��ϲ [" + cm.getPlayer() + "] ��NPC��������ʿ ����תְ�ɹ���");
            cm.dispose();
        }else if(status == 232){
            cm.changeJob(MapleJob.getById(cm.getJob().getId()+1));
            cm.getPlayer().gainAp(5);
            cm.sendOk("תְ�ɹ������Ͷ�����������ǿ���ʱ��ǵ�������Ŷ��");
            cm.serverNotice("[תְϵͳ]: ��ϲ [" + cm.getPlayer() + "] ��NPC��������ʿ ����תְ�ɹ���");
            cm.dispose();
        }else if(status == 301){
            if(cm.getJob().getId() == 400 && cm.getLevel() >= 20){//��ϰ˫��
                cm.changeJob(net.sf.odinms.client.MapleJob.Dual_Blade_1);
                cm.getPlayer().gainAp(5);
                cm.sendOk("תְ�ɹ�!���Ͷ���,������ǿ���ʱ��ǵ�������Ŷ!��һ��תְΪ[30]��!");
                cm.serverNotice("[תְϵͳ]: ��ϲ [" + cm.getPlayer() + "] ��NPC��������ʿ ����תְ�ɹ���");
                cm.dispose();
            }else if(cm.getJob().getId() == 430 && cm.getLevel() >= 30 && cm.getJob().getId()%100 == 30){//˫����
                cm.changeJob(MapleJob.getById(cm.getJob().getId()+1));
                cm.getPlayer().gainAp(5);
                cm.sendOk("תְ�ɹ�!���Ͷ���,������ǿ���ʱ��ǵ�������Ŷ!��һ��תְΪ[55]��!");
                cm.serverNotice("[תְϵͳ]: ��ϲ [" + cm.getPlayer() + "] ��NPC��������ʿ ����תְ�ɹ���");
                cm.dispose();
            }else if(cm.getJob().getId() == 431 && cm.getLevel() >= 55 && cm.getJob().getId()%100 == 31){//˫����
                cm.changeJob(MapleJob.getById(cm.getJob().getId()+1));
                cm.getPlayer().gainAp(5);
                cm.sendOk("תְ�ɹ�!���Ͷ���,������ǿ���ʱ��ǵ�������Ŷ!��һ��תְΪ[70]��!");
                cm.serverNotice("[תְϵͳ]: ��ϲ [" + cm.getPlayer() + "] ��NPC��������ʿ ����תְ�ɹ���");
                cm.dispose();
            }else if(cm.getJob().getId() == 432 && cm.getLevel() >= 70 && cm.getJob().getId()%100 == 32){//Ѫ��
                cm.changeJob(MapleJob.getById(cm.getJob().getId()+1));
                cm.getPlayer().gainAp(5);
                cm.sendOk("תְ�ɹ�!���Ͷ���,������ǿ���ʱ��ǵ�������Ŷ!��һ��תְΪ[120]��!");
                cm.serverNotice("[תְϵͳ]: ��ϲ [" + cm.getPlayer() + "] ��NPC��������ʿ ����תְ�ɹ���");
                cm.dispose();
            }else if(cm.getJob().getId() == 433 && cm.getLevel() >= 120 && cm.getJob().getId()%100 == 33){//��Ӱ˫��
                cm.changeJob(MapleJob.getById(cm.getJob().getId()+1));
                cm.getPlayer().gainAp(5);
                cm.sendOk("תְ�ɹ������ְҵ�����Ѿ������!!");
                cm.serverNotice("[תְϵͳ]: ��ϲ [" + cm.getPlayer() + "] ��NPC��������ʿ ����תְ�ɹ���");
                cm.dispose();
            }else{
                cm.sendOk("��δ�ﵽתְ����!!"+cm.getJob().getId()%100);
                cm.dispose();
            }

        }else if(status == 302){
            var reqlevel = 0;
            if (cm.getJob().getId() == 2002){
                reqlevel = 10;
                job = net.sf.odinms.client.MapleJob.DoubleCrossbows;
            }
            if(cm.getJob().getId() == 2300){
                reqlevel = 30;
                job = net.sf.odinms.client.MapleJob.DoubleCrossbows_2;
            }
            if(cm.getJob().getId() == 2310){
                reqlevel = 70;
                job = net.sf.odinms.client.MapleJob.DoubleCrossbows_3;
            }
            if(cm.getJob().getId() == 2311){
                reqlevel = 120;
                job = net.sf.odinms.client.MapleJob.DoubleCrossbows_4;
            }
            if (reqlevel != 0){
                if(cm.getLevel()>=reqlevel)
                {
                    cm.changeJob(job);
                    cm.getPlayer().gainAp(5);
                    cm.sendOk("תְ�ɹ�!���Ͷ���,������ǿ���ʱ��ǵ�������Ŷ!");
                    cm.serverNotice("[תְϵͳ]: ��ϲ [" + cm.getPlayer() + "] ��NPC��������ʿ ����תְ�ɹ���");
                }else{
                    cm.sendOk("��δ�ﵽתְ����Ҫ��ȼ���"+reqlevel);
                }
            }else {
                cm.sendOk("�˲������Ѿ���������е�תְ��\r\n��������� #r[ת��]#k ,����Ҫ����Ա����ת�����ܣ�");
            }
            cm.dispose();
        }else if(status == 303){
            var reqlevel = 0;
            if(cm.getJob().getId() == 501){
                reqlevel = 30;
                job = net.sf.odinms.client.MapleJob.GODGUNNER_2;
            }
            if(cm.getJob().getId() == 530){
                reqlevel = 70;
                job = net.sf.odinms.client.MapleJob.GODGUNNER_3;
            }
            if(cm.getJob().getId() == 531){
                reqlevel = 120;
                job = net.sf.odinms.client.MapleJob.GODGUNNER_4;
            }
            if (reqlevel != 0){
                if(cm.getLevel()>=reqlevel)
                {
                    cm.changeJob(job);
                    cm.getPlayer().gainAp(5);
                    cm.sendOk("תְ�ɹ�!���Ͷ���,������ǿ���ʱ��ǵ�������Ŷ!");
                    cm.serverNotice("[תְϵͳ]: ��ϲ [" + cm.getPlayer() + "] ��NPC��������ʿ ����תְ�ɹ���");
                }else{
                    cm.sendOk("��δ�ﵽתְ����Ҫ��ȼ���"+reqlevel);
                }
            }else {
                cm.sendOk("�˲������Ѿ���������е�תְ��\r\n��������� #r[ת��]#k ,����Ҫ����Ա����ת�����ܣ�");
            }
            cm.dispose();
            cm.dispose();
        }else if(status == 304){
            var reqlevel = 0;
            if (cm.getJob().getId() == 3001){
                reqlevel = 10;
                job = net.sf.odinms.client.MapleJob.DemonHunter;
            }
            if(cm.getJob().getId() == 3100){
                reqlevel = 30;
                job = net.sf.odinms.client.MapleJob.DemonHunter_2;
            }
            if(cm.getJob().getId() == 3110){
                reqlevel = 70;
                job = net.sf.odinms.client.MapleJob.DemonHunter_3;
            }
            if(cm.getJob().getId() == 3111){
                reqlevel = 120;
                job = net.sf.odinms.client.MapleJob.DemonHunter_4;
            }
            if (reqlevel != 0){
                if(cm.getLevel()>=reqlevel)
                {
                    cm.changeJob(job);
                    cm.getPlayer().gainAp(5);
                    cm.sendOk("תְ�ɹ�!���Ͷ���,������ǿ���ʱ��ǵ�������Ŷ!");
                    cm.serverNotice("[תְϵͳ]: ��ϲ [" + cm.getPlayer() + "] ��NPC��������ʿ ����תְ�ɹ���");
                }else{
                    cm.sendOk("��δ�ﵽתְ����Ҫ��ȼ���"+reqlevel);
                }
            }else {
                cm.sendOk("�˲������Ѿ���������е�תְ��\r\n��������� #r[ת��]#k ,����Ҫ����Ա����ת�����ܣ�");
            }
            cm.dispose();
        } else {
            cm.dispose();
        }  

    }
}
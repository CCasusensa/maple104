var status = 0;
var statuss = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status == 1 && mode == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
        cm.dispose();
    }
    if (status == 0) {
        cm.sendSimple("#r107�汾���޸�תְ�ȼ�,������,��ʿ��֮������ְҵתְ3ת�ȼ�����Ϊ60��,4ת�ȼ�����Ϊ100��#k.\r\n��ȷ��Ҫתְ?��ѡ���������ְҵ��\r\n#b#L100#����սʿתְ(1~4ת)#l	#b#L110#��������ʹתְ(1~4ת)#l\r\n#b#L13#ð�ռ�תְ(1~4ת)#l	#b#L12#��ʿ��תְ(1~4ת)#l\r\n#b#L0#������תְ(1~4ת)#l	#b#L1#��Ӱ˫��תְ(1~5ת)#l\r\n#b#L2#˫��תְ(1~4ת)#l	#b#L3#��ħתְ(1~4ת)#l\r\n#b#L4#�׹���תְ(1~4ת)#l	#b#L5#��Ӱ��͵תְ(1~4ת)#l\r\n#r#L6#ҹ�ⷨʦתְ(1~4ת)#l	#b#L7#���鶷ʦתְ(1~4ת)#l\r\n#b#L8#������תְ(1~4ת)#l	#b#L9#��еʦתְ(1~4ת)#l\r\n#b#L10#ս��תְ(1~4ת)#l	#b#L11#����תְ(1~10ת)#l");
    } else if (status == 1) {
        switch (selection) {
        case 0:
            if (cm.getJob() == 0 && cm.getPlayer().getLevel() >= 10) {
                cm.getPlayer().changeJob(501);
                cm.sendOk("ϵͳ�Ѿ�Ϊ��תְΪ������1ת.");
            } else if (cm.getJob() == 501 && cm.getPlayer().getLevel() >= 30) {
                cm.getPlayer().changeJob(530);
                cm.sendOk("ϵͳ�Ѿ�Ϊ��תְΪ������2ת.");
            } else if (cm.getJob() == 530 && cm.getPlayer().getLevel() >= 60) {
                cm.getPlayer().changeJob(531);
                cm.sendOk("ϵͳ�Ѿ�Ϊ��תְΪ������3ת.");
            } else if (cm.getJob() == 531 && cm.getPlayer().getLevel() >= 100) {
                cm.getPlayer().changeJob(532);
                cm.sendOk("ϵͳ�Ѿ�Ϊ��תְΪ������4ת.");
            } else {
                cm.sendOk("��ĵ�ǰְҵ����������,�޷�Ϊ���ṩתְ����!");
            }
            cm.dispose();
            break;
        case 1:
            if (cm.getJob() == 400 && cm.getPlayer().getLevel() >= 20) {
                cm.getPlayer().changeJob(430);
                cm.sendOk("ϵͳ�Ѿ�Ϊ��תְΪ��Ӱ˫��1ת.");
            } else if (cm.getJob() == 430 && cm.getPlayer().getLevel() >= 30) {
                cm.getPlayer().changeJob(431);
                cm.sendOk("ϵͳ�Ѿ�Ϊ��תְΪ��Ӱ˫��2ת.");
            } else if (cm.getJob() == 431 && cm.getPlayer().getLevel() >= 55) {
                cm.getPlayer().changeJob(432);
                cm.sendOk("ϵͳ�Ѿ�Ϊ��תְΪ��Ӱ˫��3ת.");
            } else if (cm.getJob() == 432 && cm.getPlayer().getLevel() >= 60) {
                cm.getPlayer().changeJob(433);
                cm.sendOk("ϵͳ�Ѿ�Ϊ��תְΪ��Ӱ˫��4ת.");
            } else if (cm.getJob() == 433 && cm.getPlayer().getLevel() >= 100) {
                cm.getPlayer().changeJob(434);
                cm.sendOk("ϵͳ�Ѿ�Ϊ��תְΪ��Ӱ˫��5ת.");
            } else {
                cm.sendOk("�㲻�Ƿ���(һת)ְҵ ����ĵȼ�û�дﵽ20.(˫��һת��ת����)");
            }
            cm.dispose();
            break;
        case 2:
            if ((cm.getJob() == 0 || cm.getJob() == 2002) && cm.getPlayer().getLevel() >= 10) {
                cm.getPlayer().changeJob(2300);
                cm.sendOk("ϵͳ�Ѿ�Ϊ��תְΪ˫����1ת.");
            } else if (cm.getJob() == 2300 && cm.getPlayer().getLevel() >= 30) {
                cm.getPlayer().changeJob(2310);
                cm.sendOk("ϵͳ�Ѿ�Ϊ��תְΪ˫����2ת.");
            } else if (cm.getJob() == 2310 && cm.getPlayer().getLevel() >= 60) {
                cm.getPlayer().changeJob(2311);
                cm.sendOk("ϵͳ�Ѿ�Ϊ��תְΪ˫����3ת.");
            } else if (cm.getJob() == 2311 && cm.getPlayer().getLevel() >= 100) {
                cm.getPlayer().changeJob(2312);
                cm.sendOk("ϵͳ�Ѿ�Ϊ��תְΪ˫����4ת.");
            } else {
                cm.sendOk("��ĵ�ǰְҵ����������,�޷�Ϊ���ṩתְ����!");
            }
            cm.dispose();
            break;
        case 3:
            if ((cm.getJob() == 0 || cm.getJob() == 3001) && cm.getPlayer().getLevel() >= 10) {
                cm.getPlayer().changeJob(3100);
                cm.sendOk("ϵͳ�Ѿ�Ϊ��תְΪ��ħ����1ת.");
            } else if (cm.getJob() == 3100 && cm.getPlayer().getLevel() >= 30) {
                cm.getPlayer().changeJob(3110);
                cm.sendOk("ϵͳ�Ѿ�Ϊ��תְΪ��ħ����2ת.");
            } else if (cm.getJob() == 3110 && cm.getPlayer().getLevel() >= 60) {
                cm.getPlayer().changeJob(3111);
                cm.sendOk("ϵͳ�Ѿ�Ϊ��תְΪ��ħ����3ת.");
            } else if (cm.getJob() == 3111 && cm.getPlayer().getLevel() >= 100) {
                cm.getPlayer().changeJob(3112);
                cm.sendOk("ϵͳ�Ѿ�Ϊ��תְΪ��ħ����4ת.");
            } else {
                cm.sendOk("��ĵ�ǰְҵ����������,�޷�Ϊ���ṩתְ����!");
            }
            cm.dispose();
            break;
        case 4:
            if ((cm.getJob() == 0 || cm.getJob() == 5000) && cm.getPlayer().getLevel() >= 10) {
                cm.getPlayer().changeJob(5100);
				equip(1098000);
                cm.sendOk("ϵͳ�Ѿ�Ϊ��תְΪ�׹���1ת.");
            } else if (cm.getJob() == 5100 && cm.getPlayer().getLevel() >= 30) {
                cm.getPlayer().changeJob(5110);
				equip(1098001);
                cm.sendOk("ϵͳ�Ѿ�Ϊ��תְΪ�׹���2ת.");
            } else if (cm.getJob() == 5110 && cm.getPlayer().getLevel() >= 60) {
                cm.getPlayer().changeJob(5111);
				equip(1098002);
                cm.sendOk("ϵͳ�Ѿ�Ϊ��תְΪ�׹���3ת.");
            } else if (cm.getJob() == 5111 && cm.getPlayer().getLevel() >= 100) {
                cm.getPlayer().changeJob(5112);
				equip(1098003);
                cm.sendOk("ϵͳ�Ѿ�Ϊ��תְΪ�׹���4ת.");
            } else {
                cm.sendOk("��ĵ�ǰְҵ����������,�޷�Ϊ���ṩתְ����!");
            }
            cm.dispose();
            break;
        case 5:
            if ((cm.getJob() == 0 || cm.getJob() == 2003) && cm.getPlayer().getLevel() >= 10) {
                cm.getPlayer().changeJob(2400);
                cm.sendOk("ϵͳ�Ѿ�Ϊ��תְΪ��Ӱ��͵1ת.");
            } else if (cm.getJob() == 2400 && cm.getPlayer().getLevel() >= 30) {
                cm.getPlayer().changeJob(2410);
                cm.sendOk("ϵͳ�Ѿ�Ϊ��תְΪ��Ӱ��͵2ת.");
            } else if (cm.getJob() == 2410 && cm.getPlayer().getLevel() >= 60) {
                cm.getPlayer().changeJob(2411);
                cm.sendOk("ϵͳ�Ѿ�Ϊ��תְΪ��Ӱ��͵3ת.");
            } else if (cm.getJob() == 2411 && cm.getPlayer().getLevel() >= 100) {
                cm.getPlayer().changeJob(2412);
                cm.sendOk("ϵͳ�Ѿ�Ϊ��תְΪ��Ӱ��͵4ת.");
            } else {
                cm.sendOk("��ĵ�ǰְҵ����������,�޷�Ϊ���ṩתְ����!");
            }
            cm.dispose();
            break;
        case 6:
            if ((cm.getJob() == 0 || cm.getJob() == 2004) && cm.getPlayer().getLevel() >= 10) {
                cm.getPlayer().changeJob(2700);
                cm.sendOk("ϵͳ�Ѿ�Ϊ��תְΪҹ�ⷨʦ1ת.");
            } else if (cm.getJob() == 2700 && cm.getPlayer().getLevel() >= 30) {
                cm.getPlayer().changeJob(2710);
                cm.sendOk("ϵͳ�Ѿ�Ϊ��תְΪҹ�ⷨʦ2ת.");
            } else if (cm.getJob() == 2710 && cm.getPlayer().getLevel() >= 60) {
                cm.getPlayer().changeJob(2711);
                cm.sendOk("ϵͳ�Ѿ�Ϊ��תְΪҹ�ⷨʦ3ת.");
            } else if (cm.getJob() == 2711 && cm.getPlayer().getLevel() >= 100) {
                cm.getPlayer().changeJob(2712);
                cm.sendOk("ϵͳ�Ѿ�Ϊ��תְΪҹ�ⷨʦ4ת.");
            } else {
                cm.sendOk("��ĵ�ǰְҵ����������,�޷�Ϊ���ṩתְ����!");
            }
            cm.dispose();
            break;
        case 7:
            if ((cm.getJob() == 0 || cm.getJob() == 3000) && cm.getPlayer().getLevel() >= 10) {
                cm.getPlayer().changeJob(3200);
                cm.sendOk("ϵͳ�Ѿ�Ϊ��תְΪ���鶷ʦ1ת.");
            } else if (cm.getJob() == 3200 && cm.getPlayer().getLevel() >= 30) {
                cm.getPlayer().changeJob(3210);
                cm.sendOk("ϵͳ�Ѿ�Ϊ��תְΪ���鶷ʦ2ת.");
            } else if (cm.getJob() == 3210 && cm.getPlayer().getLevel() >= 60) {
                cm.getPlayer().changeJob(3211);
                cm.sendOk("ϵͳ�Ѿ�Ϊ��תְΪ���鶷ʦ3ת.");
            } else if (cm.getJob() == 3211 && cm.getPlayer().getLevel() >= 100) {
                cm.getPlayer().changeJob(3212);
                cm.sendOk("ϵͳ�Ѿ�Ϊ��תְΪ���鶷ʦ4ת.");
            } else {
                cm.sendOk("��ĵ�ǰְҵ����������,�޷�Ϊ���ṩתְ����!");
            }
            cm.dispose();
            break;
        case 8:
            if ((cm.getJob() == 0 || cm.getJob() == 3000) && cm.getPlayer().getLevel() >= 10) {
                cm.getPlayer().changeJob(3300);
                cm.teachSkill(80001000, 1, 1);
                cm.sendOk("ϵͳ�Ѿ�Ϊ��תְΪ������1ת.");
            } else if (cm.getJob() == 3300 && cm.getPlayer().getLevel() >= 30) {
                cm.getPlayer().changeJob(3310);
                cm.sendOk("ϵͳ�Ѿ�Ϊ��תְΪ������2ת.");
            } else if (cm.getJob() == 3310 && cm.getPlayer().getLevel() >= 60) {
                cm.getPlayer().changeJob(3311);
                cm.sendOk("ϵͳ�Ѿ�Ϊ��תְΪ������3ת.");
            } else if (cm.getJob() == 3311 && cm.getPlayer().getLevel() >= 100) {
                cm.getPlayer().changeJob(3312);
                cm.sendOk("ϵͳ�Ѿ�Ϊ��תְΪ������4ת.");
            } else {
                cm.sendOk("��ĵ�ǰְҵ����������,�޷�Ϊ���ṩתְ����!");
            }
            cm.dispose();
            break;
        case 9:
            if ((cm.getJob() == 0 || cm.getJob() == 3000) && cm.getPlayer().getLevel() >= 10) {
                cm.getPlayer().changeJob(3500);
                cm.sendOk("ϵͳ�Ѿ�Ϊ��תְΪ��еʦ1ת.");
            } else if (cm.getJob() == 3500 && cm.getPlayer().getLevel() >= 30) {
                cm.getPlayer().changeJob(3510);
                cm.sendOk("ϵͳ�Ѿ�Ϊ��תְΪ��еʦ2ת.");
            } else if (cm.getJob() == 3510 && cm.getPlayer().getLevel() >= 60) {
                cm.getPlayer().changeJob(3511);
                cm.sendOk("ϵͳ�Ѿ�Ϊ��תְΪ��еʦ3ת.");
            } else if (cm.getJob() == 3511 && cm.getPlayer().getLevel() >= 100) {
                cm.getPlayer().changeJob(3512);
                cm.sendOk("ϵͳ�Ѿ�Ϊ��תְΪ��еʦ4ת.");
            } else {
                cm.sendOk("��ĵ�ǰְҵ����������,�޷�Ϊ���ṩתְ����!");
            }
            cm.dispose();
            break;
        case 10:
            if ((cm.getJob() == 0 || cm.getJob() == 2000) && cm.getPlayer().getLevel() >= 10) {
                cm.getPlayer().changeJob(2100);
                cm.sendOk("ϵͳ�Ѿ�Ϊ��תְΪս��1ת.");
            } else if (cm.getJob() == 2100 && cm.getPlayer().getLevel() >= 30) {
                cm.getPlayer().changeJob(2110);
                cm.sendOk("ϵͳ�Ѿ�Ϊ��תְΪս��2ת.");
            } else if (cm.getJob() == 2110 && cm.getPlayer().getLevel() >= 60) {
                cm.getPlayer().changeJob(2111);
                cm.sendOk("ϵͳ�Ѿ�Ϊ��תְΪս��3ת.");
            } else if (cm.getJob() == 2111 && cm.getPlayer().getLevel() >= 100) {
                cm.getPlayer().changeJob(2112);
                cm.sendOk("ϵͳ�Ѿ�Ϊ��תְΪս��4ת.");
            } else {
                cm.sendOk("��ĵ�ǰְҵ����������,�޷�Ϊ���ṩתְ����!");
            }
            cm.dispose();
            break;
        case 11:
            if ((cm.getJob() == 0 || cm.getJob() == 2001) && cm.getPlayer().getLevel() >= 10) {
                cm.getPlayer().changeJob(2200);
                cm.sendOk("ϵͳ�Ѿ�Ϊ��תְΪ����1ת.");
            } else if (cm.getJob() == 2200 && cm.getPlayer().getLevel() >= 20) {
                cm.getPlayer().changeJob(2210);
                cm.sendOk("ϵͳ�Ѿ�Ϊ��תְΪ����2ת.");
            } else if (cm.getJob() == 2210 && cm.getPlayer().getLevel() >= 30) {
                cm.getPlayer().changeJob(2211);
                cm.sendOk("ϵͳ�Ѿ�Ϊ��תְΪ����3ת.");
            } else if (cm.getJob() == 2211 && cm.getPlayer().getLevel() >= 40) {
                cm.getPlayer().changeJob(2212);
                cm.sendOk("ϵͳ�Ѿ�Ϊ��תְΪ����4ת.");
            } else if (cm.getJob() == 2212 && cm.getPlayer().getLevel() >= 60) {
                cm.getPlayer().changeJob(2213);
                cm.sendOk("ϵͳ�Ѿ�Ϊ��תְΪ����5ת.");
            } else if (cm.getJob() == 2213 && cm.getPlayer().getLevel() >= 80) {
                cm.getPlayer().changeJob(2214);
                cm.sendOk("ϵͳ�Ѿ�Ϊ��תְΪ����6ת.");
            } else if (cm.getJob() == 2214 && cm.getPlayer().getLevel() >= 100) {
                cm.getPlayer().changeJob(2215);
                cm.sendOk("ϵͳ�Ѿ�Ϊ��תְΪ����7ת.");
            } else if (cm.getJob() == 2215 && cm.getPlayer().getLevel() >= 120) {
                cm.getPlayer().changeJob(2216);
                cm.sendOk("ϵͳ�Ѿ�Ϊ��תְΪ����8ת.");
            } else if (cm.getJob() == 2216 && cm.getPlayer().getLevel() >= 140) {
                cm.getPlayer().changeJob(2217);
                cm.sendOk("ϵͳ�Ѿ�Ϊ��תְΪ����9ת.");
            } else if (cm.getJob() == 2217 && cm.getPlayer().getLevel() >= 160) {
                cm.getPlayer().changeJob(2218);
                cm.sendOk("ϵͳ�Ѿ�Ϊ��תְΪ����10ת.");
            } else {
                cm.sendOk("��ĵ�ǰְҵ����������,�޷�Ϊ���ṩתְ����!");
            }
            cm.dispose();
            break;
        case 12:
            cm.sendSimple("��ʿ��ְҵתְ�ȼ��ֱ�Ϊ(10,30,70),����Ҫתְ��?\r\n#b#L13#����ʿתְ(1~4ת)#l\r\n#b#L14#����ʿתְ(1~3ת)#l\r\n#b#L15#����ʹ��תְ(1~3ת)#l\r\n#b#L16#ҹ����תְ(1~3ת)#l\r\n#b#L17#��Ϯ��תְ(1~3ת)#l");
            break;
        case 13:
            cm.sendSimple("ð�ռ�ְҵתְ�ȼ��ֱ�Ϊ(10,30,60,100),����Ҫתְ��?\r\n#b#L18#սʿתְ(1~4ת)#l\r\n#b#L19#ħ��ʦתְ(1~4ת)#l\r\n#b#L20#������תְ(1~4ת)#l\r\n#b#L21#����תְ(1~4ת)#l\r\n#b#L22#����תְ(1~4ת)#l");
            break;
        case 100:
            if ((cm.getJob() == 0 || cm.getJob() == 6000) && cm.getPlayer().getLevel() >= 10) {
                cm.getPlayer().changeJob(6100);
				equip(1352500);
                cm.sendOk("ϵͳ�Ѿ�Ϊ��תְΪ����սʿ1ת.");
            } else if (cm.getJob() == 6100 && cm.getPlayer().getLevel() >= 30) {
                cm.getPlayer().changeJob(6110);
				equip(1352501);
                cm.sendOk("ϵͳ�Ѿ�Ϊ��תְΪ����սʿת.");
            } else if (cm.getJob() == 6110 && cm.getPlayer().getLevel() >= 60) {
                cm.getPlayer().changeJob(6111);
				equip(1352502);
                cm.sendOk("ϵͳ�Ѿ�Ϊ��תְΪ����սʿ3ת.");
            } else if (cm.getJob() == 6111 && cm.getPlayer().getLevel() >= 100) {
                cm.getPlayer().changeJob(6112);
				equip(1352503);
                cm.sendOk("ϵͳ�Ѿ�Ϊ��תְΪ����սʿ4ת.");
            } else {
                cm.sendOk("��ĵ�ǰְҵ����������,�޷�Ϊ���ṩתְ����!");
            }
            cm.dispose();
            break;
        case 110:
            if ((cm.getJob() == 0 || cm.getJob() == 6001) && cm.getPlayer().getLevel() >= 10) {
                cm.getPlayer().changeJob(6500);
				equip(1352601);
                cm.sendOk("ϵͳ�Ѿ�Ϊ��תְΪ��������ʹ1ת.");
            } else if (cm.getJob() == 6500 && cm.getPlayer().getLevel() >= 30) {
                cm.getPlayer().changeJob(6510);
				equip(1352602);
                cm.sendOk("ϵͳ�Ѿ�Ϊ��תְΪ��������ʹת.");
            } else if (cm.getJob() == 6510 && cm.getPlayer().getLevel() >= 60) {
                cm.getPlayer().changeJob(6511);
				equip(1352603);
                cm.sendOk("ϵͳ�Ѿ�Ϊ��תְΪ��������ʹ3ת.");
            } else if (cm.getJob() == 6511 && cm.getPlayer().getLevel() >= 100) {
                cm.getPlayer().changeJob(6512);
				equip(1352604);
                cm.sendOk("ϵͳ�Ѿ�Ϊ��תְΪ��������ʹ4ת.");
            } else {
                cm.sendOk("��ĵ�ǰְҵ����������,�޷�Ϊ���ṩתְ����!");
            }
            cm.dispose();
            break;
        }
    } else if (status == 2) {
        if (selection == 13) {
            changeJobByKnights(1);
        } else if (selection == 14) {
            changeJobByKnights(2);
        } else if (selection == 15) {
            changeJobByKnights(3);
        } else if (selection == 16) {
            changeJobByKnights(4);
        } else if (selection == 17) {
            changeJobByKnights(5);
        } else if (selection == 18) {
            if (cm.getJob() == 0 && cm.getPlayer().getLevel() >= 10) {
                cm.getPlayer().changeJob(100);
                cm.sendOk("ϵͳ�Ѿ�Ϊ��תְΪսʿ1ת.");
                cm.dispose();
            } else if (cm.getJob() >= 100 && cm.getPlayer().getLevel() >= 30) {
                cm.sendSimple("#b#L23#����תְ(2~4ת)#l\r\n#b#L24#׼��ʿתְ(2~4ת)#l\r\n#b#L25#ǹսʿתְ(2~4ת)#l\r\n");
            } else {
                cm.sendOk("��ĵ�ǰְҵ����������,�޷�Ϊ���ṩתְ����!");
                cm.dispose();
            }
        } else if (selection == 19) {
            if (cm.getJob() == 0 && cm.getPlayer().getLevel() >= 8) {
                cm.getPlayer().changeJob(200);
                cm.sendOk("ϵͳ�Ѿ�Ϊ��תְΪħ��ʦ1ת.");
                cm.dispose();
            } else if (cm.getJob() >= 200 && cm.getPlayer().getLevel() >= 30) {
                cm.sendSimple("#b#L26#�𶾷�ʦתְ(2~4ת)#l\r\n#b#L27#���׷�ʦתְ(2~4ת)#l\r\n#b#L28#��ʦ��ʦתְ(2~4ת)#l\r\n");
            } else {
                cm.sendOk("��ĵ�ǰְҵ����������,�޷�Ϊ���ṩתְ����!");
                cm.dispose();
            }
        } else if (selection == 20) {
            if (cm.getJob() == 0 && cm.getPlayer().getLevel() >= 10) {
                cm.getPlayer().changeJob(300);
                cm.sendOk("ϵͳ�Ѿ�Ϊ��תְΪ������1ת.");
                cm.dispose();
            } else if (cm.getJob() >= 300 && cm.getPlayer().getLevel() >= 30) {
                cm.sendSimple("#b#L29#����תְ(2~4ת)#l\r\n#b#L30#����תְ(2~4ת)#l");
            } else {
                cm.sendOk("��ĵ�ǰְҵ����������,�޷�Ϊ���ṩתְ����!");
                cm.dispose();
            }
        } else if (selection == 21) {
            if (cm.getJob() == 0 && cm.getPlayer().getLevel() >= 10) {
                cm.getPlayer().changeJob(400);
                cm.sendOk("ϵͳ�Ѿ�Ϊ��תְΪ����1ת.");
                cm.dispose();
            } else if (cm.getJob() >= 400 && cm.getPlayer().getLevel() >= 30) {
                cm.sendSimple("#b#L31#�̿�תְ(2~4ת)#l\r\n#b#L32#����תְ(2~4ת)#l");
            } else {
                cm.sendOk("��ĵ�ǰְҵ����������,�޷�Ϊ���ṩתְ����!");
                cm.dispose();
            }
        } else if (selection == 22) {
            if (cm.getJob() == 0 && cm.getPlayer().getLevel() >= 10) {
                cm.getPlayer().changeJob(500);
                cm.sendOk("ϵͳ�Ѿ�Ϊ��תְΪ����1ת.");
                cm.dispose();
            } else if (cm.getJob() >= 500 && cm.getPlayer().getLevel() >= 30) {
                cm.sendSimple("#b#L33#ȭ��תְ(2~4ת)#l\r\n#b#L34#��ǹ��תְ(2~4ת)#l");
            } else {
                cm.sendOk("��ĵ�ǰְҵ����������,�޷�Ϊ���ṩתְ����!");
                cm.dispose();
            }
        }
    } else if (status == 3) {
        if (selection == 23) {
            changeJobByAdventurer(1);
        } else if (selection == 24) {
            changeJobByAdventurer(2);
        } else if (selection == 25) {
            changeJobByAdventurer(3);
        } else if (selection == 26) {
            changeJobByAdventurer(4);
        } else if (selection == 27) {
            changeJobByAdventurer(5);
        } else if (selection == 28) {
            changeJobByAdventurer(6);
        } else if (selection == 29) {
            changeJobByAdventurer(7);
        } else if (selection == 30) {
            changeJobByAdventurer(8);
        } else if (selection == 31) {
            changeJobByAdventurer(9);
        } else if (selection == 32) {
            changeJobByAdventurer(10);
        } else if (selection == 33) {
            changeJobByAdventurer(11);
        } else if (selection == 34) {
            changeJobByAdventurer(12);
        }
    }
}

/*
ð�ռ�תְ
*/

function changeJobByAdventurer(type) {
    if (type == 1) {
        if (cm.getJob() == 100 && cm.getPlayer().getLevel() >= 30) {
            cm.getPlayer().changeJob(110);
            cm.sendOk("ϵͳ�Ѿ�Ϊ��תְΪ����(սʿ2ת).");
        } else if (cm.getJob() == 110 && cm.getPlayer().getLevel() >= 60) {
            cm.getPlayer().changeJob(111);
            cm.sendOk("ϵͳ�Ѿ�Ϊ��תְΪ��ʿ(սʿ3ת).");
        } else if (cm.getJob() == 111 && cm.getPlayer().getLevel() >= 100) {
            cm.getPlayer().changeJob(112);
            cm.sendOk("ϵͳ�Ѿ�Ϊ��תְΪӢ��(սʿ4ת).");
        } else {
            cm.sendOk("��ĵ�ǰְҵ����������,�޷�Ϊ���ṩתְ����!");
        }
    } else if (type == 2) {
        if (cm.getJob() == 100 && cm.getPlayer().getLevel() >= 30) {
            cm.getPlayer().changeJob(120);
            cm.sendOk("ϵͳ�Ѿ�Ϊ��תְΪ׼��ʿ(սʿ2ת).");
        } else if (cm.getJob() == 120 && cm.getPlayer().getLevel() >= 60) {
            cm.getPlayer().changeJob(121);
            cm.sendOk("ϵͳ�Ѿ�Ϊ��תְΪ��ʿ(սʿ3ת).");
        } else if (cm.getJob() == 121 && cm.getPlayer().getLevel() >= 100) {
            cm.getPlayer().changeJob(122);
            cm.sendOk("ϵͳ�Ѿ�Ϊ��תְΪʥ��ʿ(սʿ4ת).");
        } else {
            cm.sendOk("��ĵ�ǰְҵ����������,�޷�Ϊ���ṩתְ����!");
        }
    } else if (type == 3) {
        if (cm.getJob() == 100 && cm.getPlayer().getLevel() >= 30) {
            cm.getPlayer().changeJob(130);
            cm.sendOk("ϵͳ�Ѿ�Ϊ��תְΪǹսʿ(սʿ2ת).");
        } else if (cm.getJob() == 130 && cm.getPlayer().getLevel() >= 60) {
            cm.getPlayer().changeJob(131);
            cm.sendOk("ϵͳ�Ѿ�Ϊ��תְΪ����ʿ(սʿ3ת).");
        } else if (cm.getJob() == 131 && cm.getPlayer().getLevel() >= 100) {
            cm.getPlayer().changeJob(132);
            cm.sendOk("ϵͳ�Ѿ�Ϊ��תְΪ����ʿ(սʿ4ת).");
        } else {
            cm.sendOk("��ĵ�ǰְҵ����������,�޷�Ϊ���ṩתְ����!");
        }
    } else if (type == 4) {
        if (cm.getJob() == 200 && cm.getPlayer().getLevel() >= 30) {
            cm.getPlayer().changeJob(210);
            cm.sendOk("ϵͳ�Ѿ�Ϊ��תְΪ�𶾷�ʦ(ħ��ʦ2ת).");
        } else if (cm.getJob() == 210 && cm.getPlayer().getLevel() >= 60) {
            cm.getPlayer().changeJob(211);
            cm.sendOk("ϵͳ�Ѿ�Ϊ��תְΪ����ʦ(ħ��ʦ3ת).");
        } else if (cm.getJob() == 211 && cm.getPlayer().getLevel() >= 100) {
            cm.getPlayer().changeJob(212);
            cm.sendOk("ϵͳ�Ѿ�Ϊ��תְΪ��ħ��ʦ(ħ��ʦ4ת).");
        } else {
            cm.sendOk("��ĵ�ǰְҵ����������,�޷�Ϊ���ṩתְ����!");
        }
    } else if (type == 5) {
        if (cm.getJob() == 200 && cm.getPlayer().getLevel() >= 30) {
            cm.getPlayer().changeJob(220);
            cm.sendOk("ϵͳ�Ѿ�Ϊ��תְΪ���׷�ʦ(ħ��ʦ2ת).");
        } else if (cm.getJob() == 220 && cm.getPlayer().getLevel() >= 60) {
            cm.getPlayer().changeJob(221);
            cm.sendOk("ϵͳ�Ѿ�Ϊ��תְΪ������ʦ(ħ��ʦ3ת).");
        } else if (cm.getJob() == 221 && cm.getPlayer().getLevel() >= 100) {
            cm.getPlayer().changeJob(222);
            cm.sendOk("ϵͳ�Ѿ�Ϊ��תְΪ����ħ��ʦ(ħ��ʦ4ת).");
        } else {
            cm.sendOk("��ĵ�ǰְҵ����������,�޷�Ϊ���ṩתְ����!");
        }
    } else if (type == 6) {
        if (cm.getJob() == 200 && cm.getPlayer().getLevel() >= 30) {
            cm.getPlayer().changeJob(230);
            cm.sendOk("ϵͳ�Ѿ�Ϊ��תְΪ��ʦ(ħ��ʦ2ת).");
        } else if (cm.getJob() == 230 && cm.getPlayer().getLevel() >= 60) {
            cm.getPlayer().changeJob(231);
            cm.sendOk("ϵͳ�Ѿ�Ϊ��תְΪ����(ħ��ʦ3ת).");
        } else if (cm.getJob() == 231 && cm.getPlayer().getLevel() >= 100) {
            cm.getPlayer().changeJob(232);
            cm.sendOk("ϵͳ�Ѿ�Ϊ��תְΪ����(ħ��ʦ4ת).");
        } else {
            cm.sendOk("��ĵ�ǰְҵ����������,�޷�Ϊ���ṩתְ����!");
        }
    } else if (type == 7) {
        if (cm.getJob() == 300 && cm.getPlayer().getLevel() >= 30) {
            cm.getPlayer().changeJob(310);
            cm.sendOk("ϵͳ�Ѿ�Ϊ��תְΪ����(������2ת).");
        } else if (cm.getJob() == 310 && cm.getPlayer().getLevel() >= 60) {
            cm.getPlayer().changeJob(311);
            cm.sendOk("ϵͳ�Ѿ�Ϊ��תְΪ����(������3ת).");
        } else if (cm.getJob() == 311 && cm.getPlayer().getLevel() >= 100) {
            cm.getPlayer().changeJob(312);
            cm.sendOk("ϵͳ�Ѿ�Ϊ��תְΪ������(������4ת).");
        } else {
            cm.sendOk("��ĵ�ǰְҵ����������,�޷�Ϊ���ṩתְ����!");
        }
    } else if (type == 8) {
        if (cm.getJob() == 300 && cm.getPlayer().getLevel() >= 30) {
            cm.getPlayer().changeJob(320);
            cm.sendOk("ϵͳ�Ѿ�Ϊ��תְΪ����(������2ת).");
        } else if (cm.getJob() == 320 && cm.getPlayer().getLevel() >= 60) {
            cm.getPlayer().changeJob(321);
            cm.sendOk("ϵͳ�Ѿ�Ϊ��תְΪ����(������3ת).");
        } else if (cm.getJob() == 321 && cm.getPlayer().getLevel() >= 100) {
            cm.getPlayer().changeJob(322);
            cm.sendOk("ϵͳ�Ѿ�Ϊ��תְΪ����(������4ת).");
        } else {
            cm.sendOk("��ĵ�ǰְҵ����������,�޷�Ϊ���ṩתְ����!");
        }
    } else if (type == 9) {
        if (cm.getJob() == 400 && cm.getPlayer().getLevel() >= 30) {
            cm.getPlayer().changeJob(410);
            cm.sendOk("ϵͳ�Ѿ�Ϊ��תְΪ�̿�(����2ת).");
        } else if (cm.getJob() == 410 && cm.getPlayer().getLevel() >= 60) {
            cm.getPlayer().changeJob(411);
            cm.sendOk("ϵͳ�Ѿ�Ϊ��תְΪ��Ӱ��(����3ת).");
        } else if (cm.getJob() == 411 && cm.getPlayer().getLevel() >= 100) {
            cm.getPlayer().changeJob(412);
            cm.sendOk("ϵͳ�Ѿ�Ϊ��תְΪ��ʿ(����4ת).");
        } else {
            cm.sendOk("��ĵ�ǰְҵ����������,�޷�Ϊ���ṩתְ����!");
        }
    } else if (type == 10) {
        if (cm.getJob() == 400 && cm.getPlayer().getLevel() >= 30) {
            cm.getPlayer().changeJob(420);
            cm.sendOk("ϵͳ�Ѿ�Ϊ��תְΪ����(����2ת).");
        } else if (cm.getJob() == 420 && cm.getPlayer().getLevel() >= 60) {
            cm.getPlayer().changeJob(421);
            cm.sendOk("ϵͳ�Ѿ�Ϊ��תְΪ���п�(����3ת).");
        } else if (cm.getJob() == 421 && cm.getPlayer().getLevel() >= 100) {
            cm.getPlayer().changeJob(422);
            cm.sendOk("ϵͳ�Ѿ�Ϊ��תְΪ����(����4ת).");
        } else {
            cm.sendOk("��ĵ�ǰְҵ����������,�޷�Ϊ���ṩתְ����!");
        }
    } else if (type == 11) {
        if (cm.getJob() == 500 && cm.getPlayer().getLevel() >= 30) {
            cm.getPlayer().changeJob(510);
            cm.sendOk("ϵͳ�Ѿ�Ϊ��תְΪȭ��(����2ת).");
        } else if (cm.getJob() == 510 && cm.getPlayer().getLevel() >= 60) {
            cm.getPlayer().changeJob(511);
            cm.sendOk("ϵͳ�Ѿ�Ϊ��תְΪ��ʿ(����3ת).");
        } else if (cm.getJob() == 511 && cm.getPlayer().getLevel() >= 100) {
            cm.getPlayer().changeJob(512);
            cm.sendOk("ϵͳ�Ѿ�Ϊ��תְΪ���ӳ�(����4ת).");
        } else {
            cm.sendOk("��ĵ�ǰְҵ����������,�޷�Ϊ���ṩתְ����!");
        }
    } else {
        if (cm.getJob() == 500 && cm.getPlayer().getLevel() >= 30) {
            cm.getPlayer().changeJob(520);
            cm.sendOk("ϵͳ�Ѿ�Ϊ��תְΪ��ǹ��(����2ת).");
        } else if (cm.getJob() == 520 && cm.getPlayer().getLevel() >= 60) {
            cm.getPlayer().changeJob(521);
            cm.sendOk("ϵͳ�Ѿ�Ϊ��תְΪ��(����3ת).");
        } else if (cm.getJob() == 521 && cm.getPlayer().getLevel() >= 100) {
            cm.getPlayer().changeJob(522);
            cm.sendOk("ϵͳ�Ѿ�Ϊ��תְΪ����(����4ת).");
        } else {
            cm.sendOk("��ĵ�ǰְҵ����������,�޷�Ϊ���ṩתְ����!");
        }
    }
    cm.dispose();
}

/*
��ʿ��תְ
*/

function changeJobByKnights(type) {
    if (type == 1) {
        if ((cm.getJob() == 0 || cm.getJob() == 1000) && cm.getPlayer().getLevel() >= 10) {
            cm.getPlayer().changeJob(1100);
            cm.sendOk("ϵͳ�Ѿ�Ϊ��תְΪ����ʿ1ת.");
        } else if (cm.getJob() == 1100 && cm.getPlayer().getLevel() >= 30) {
            cm.getPlayer().changeJob(1110);
            cm.sendOk("ϵͳ�Ѿ�Ϊ��תְΪ����ʿ2ת.");
        } else if (cm.getJob() == 1110 && cm.getPlayer().getLevel() >= 70) {
            cm.getPlayer().changeJob(1111);
            cm.sendOk("ϵͳ�Ѿ�Ϊ��תְΪ����ʿ3ת.");
        } else {
            cm.sendOk("��ĵ�ǰְҵ����������,�޷�Ϊ���ṩתְ����!");
        }
    } else if (type == 2) {
        if ((cm.getJob() == 0 || cm.getJob() == 1000) && cm.getPlayer().getLevel() >= 10) {
            cm.getPlayer().changeJob(1200);
            cm.sendOk("ϵͳ�Ѿ�Ϊ��תְΪ����ʿ1ת.");
        } else if (cm.getJob() == 1200 && cm.getPlayer().getLevel() >= 30) {
            cm.getPlayer().changeJob(1210);
            cm.sendOk("ϵͳ�Ѿ�Ϊ��תְΪ����ʿ2ת.");
        } else if (cm.getJob() == 1210 && cm.getPlayer().getLevel() >= 70) {
            cm.getPlayer().changeJob(1211);
            cm.sendOk("ϵͳ�Ѿ�Ϊ��תְΪ����ʿ3ת.");
        } else {
            cm.sendOk("��ĵ�ǰְҵ����������,�޷�Ϊ���ṩתְ����!");
        }
    } else if (type == 2) {
        if ((cm.getJob() == 0 || cm.getJob() == 1000) && cm.getPlayer().getLevel() >= 10) {
            cm.getPlayer().changeJob(1300);
            cm.sendOk("ϵͳ�Ѿ�Ϊ��תְΪ����ʹ��1ת.");
        } else if (cm.getJob() == 1300 && cm.getPlayer().getLevel() >= 30) {
            cm.getPlayer().changeJob(1310);
            cm.sendOk("ϵͳ�Ѿ�Ϊ��תְΪ����ʹ��2ת.");
        } else if (cm.getJob() == 1310 && cm.getPlayer().getLevel() >= 70) {
            cm.getPlayer().changeJob(1311);
            cm.sendOk("ϵͳ�Ѿ�Ϊ��תְΪ����ʹ��3ת.");
        } else {
            cm.sendOk("��ĵ�ǰְҵ����������,�޷�Ϊ���ṩתְ����!");
        }
    } else if (type == 2) {
        if ((cm.getJob() == 0 || cm.getJob() == 1000) && cm.getPlayer().getLevel() >= 10) {
            cm.getPlayer().changeJob(1400);
            cm.sendOk("ϵͳ�Ѿ�Ϊ��תְΪҹ����1ת.");
        } else if (cm.getJob() == 1400 && cm.getPlayer().getLevel() >= 30) {
            cm.getPlayer().changeJob(1410);
            cm.sendOk("ϵͳ�Ѿ�Ϊ��תְΪҹ����2ת.");
        } else if (cm.getJob() == 1410 && cm.getPlayer().getLevel() >= 70) {
            cm.getPlayer().changeJob(1411);
            cm.sendOk("ϵͳ�Ѿ�Ϊ��תְΪҹ����3ת.");
        } else {
            cm.sendOk("��ĵ�ǰְҵ����������,�޷�Ϊ���ṩתְ����!");
        }
    } else {
        if ((cm.getJob() == 0 || cm.getJob() == 1000) && cm.getPlayer().getLevel() >= 10) {
            cm.getPlayer().changeJob(1500);
            cm.sendOk("ϵͳ�Ѿ�Ϊ��תְΪ��Ϯ��1ת.");
        } else if (cm.getJob() == 1500 && cm.getPlayer().getLevel() >= 30) {
            cm.getPlayer().changeJob(1510);
            cm.sendOk("ϵͳ�Ѿ�Ϊ��תְΪ��Ϯ��2ת.");
        } else if (cm.getJob() == 1510 && cm.getPlayer().getLevel() >= 70) {
            cm.getPlayer().changeJob(1511);
            cm.sendOk("ϵͳ�Ѿ�Ϊ��תְΪ��Ϯ��3ת.");
        } else {
            cm.sendOk("��ĵ�ǰְҵ����������,�޷�Ϊ���ṩתְ����!");
        }
    }
    cm.dispose();
}

function equip(itemId){
	var item = cm.getPlayer().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).findById(itemId);
	if(item==null){
		cm.gainItem(itemId, 1);
	}
	//�����ٲ���һ�� ��ֹ��һ�β��ҵ�ʱ��Ϊnull
	var item2 = cm.getPlayer().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).findById(itemId);
	//var item2 = cm.getPlayer().getInventory(Packages.client.inventory.MapleInventoryType.EQUIPPED).getItem(-10);
	//������ұ�����û�������Ʒ,û�о͸����
	if(item2 !=null){
		var pos = item2.getPosition();
		Packages.server.MapleInventoryManipulator.equip(cm.getC(),pos,-10);
	}
	//����Ѿ�װ���˸����������߱���û����������� ȡ�¸���װ��������
	//if(item2 !=null && cm.getPlayer().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).isFull() == false){
		//Packages.server.MapleInventoryManipulator.unequip(cm.getC(),-10,cm.getPlayer().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getNextFreeSlot());
	//}
	
}
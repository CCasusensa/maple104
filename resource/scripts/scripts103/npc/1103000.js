function start() {

if(cm.getChar().getVip() >= 0 && cm.getChar().getMapId() == 924010200 && cm.countMonster()<15) {
    cm.sendSimple ("#b���, ����Ϊ���ٻ�BOSS.\r\n��ѡ����Ҫ�ٻ��Ĺ���.  #l#k\r\n #L200#�ص��г�#l \r\n#l#k\r\n#r1��� BOSS�Կ�#l#b #L45##r��̬��ţ#l#b \r\n#r#L110#�г�#l");
    } else {
    cm.sendOk("����רΪ����VIP����Ĺ����ٻ�ʦ.\r\n�㲻�ǳ���VIP�����㲻�ڳ���VIP��ͼ�����ʲô��������...")
    }
}
function action(mode, type, selection) {
        cm.dispose();
    

    if (selection == 199) {
        cm.warp(910000014, 0);
    } else if (selection == 200) {
        cm.warp(910000000, 0);
    } else if (selection == 201) {
        if (cm.getMeso() >= 1){
				cm.gainMeso(-50000000);
				cm.sendOk("����ɹ�.");
				cm.gainItem(2340000,1);
				cm.dispose();
				}else{
					cm.sendOk("����ʧ�ܣ������û��5000��ð�ձ�.");
     cm.dispose();
    } 
}

if (cm.getMeso() >= 10000000) {

cm.dispose();
        
    if (selection == 202) {
        cm.gainMeso(-10000000);
        //����ID, HP, EXP, ����
        cm.summonMob(8500001, 10000000, 5000000, 1);//����
    } else if (selection == 203) {
        cm.gainMeso(-10000000);
        cm.summonMob(8810026, 100000000, 8000000, 1);//����
    
    } else if (selection == 204) {
        cm.gainMeso(-10000000);
        cm.summonMob(9400205, 100000, 10000, 15);//��Ģ����15��
   
              
        
   
		cm.dispose();
    } 
}




if (cm.getMeso() >= 1000000) {

cm.dispose();
        
    if (selection == 0) {
        cm.gainMeso(-1000000);
        //����ID, HP, EXP, ����
        cm.summonMob(8130100, 75000000, 1150, 1);//�����
    } else if (selection == 1) {
        cm.gainMeso(-1000000);
        cm.summonMob(8150000, 75000000, 1150, 1);//����ħ(����)
    } else if (selection == 2) {
        cm.gainMeso(-1000000);
        cm.summonMob(9400572, 75000000, 1150, 1);//����ħ(�e��)
    } else if (selection == 3) {
        cm.gainMeso(-1000000);
        cm.summonMob(9400536, 75000000, 1150, 1);//����ħ(��ӡ)
    } else if (selection == 4) {
        cm.gainMeso(-1000000);
        cm.summonMob(9400120, 18000000, 1150, 1);//���ϰ� 
    } else if (selection == 5) {
        cm.gainMeso(-1000000);
        cm.summonMob(9400121, 75000000, 1150, 1);//Ů�ϰ� 
    } else if (selection == 6) {
        cm.gainMeso(-1000000);
        cm.summonMob(9400112, 400000000, 1150, 1);//����A 
    } else if (selection == 7) {
        cm.gainMeso(-1000000);
        cm.summonMob(9400113, 500000000, 1150, 1);//����B
    } else if (selection == 8) {
        cm.gainMeso(-1000000);
        cm.summonMob(9400300, 150000000, 1150, 1);//��ɮ
    } else if (selection == 9) {
        cm.gainMeso(-1000000);
        cm.summonMob(9400549, 3500000, 1150, 1);//����
    } else if (selection == 10) {
        cm.gainMeso(-1000000);
        cm.summonMob(8180001, 3700000, 1150, 1);//��ӥ
    } else if (selection == 11) {
        cm.gainMeso(-1000000);
        cm.summonMob(8180000, 3700000, 1150, 1);//������
    } else if (selection == 12) {
        cm.gainMeso(-1000000);
        cm.summonMob(9300012, 18000000, 1150, 1);//����ɯ��
    } else if (selection == 13) {
        cm.gainMeso(-1000000);
        cm.summonMob(8220001, 18000000, 1150, 1);//����ѩ��
    } else if (selection == 108) {
        cm.warp(910500000, 0);	
	} else if (selection == 109) {
        cm.warp(910000001, 0);
    } else if (selection == 110) {
        cm.warp(910000000, 0);
	} else if (selection == 111) {
        cm.warp(220080001, 0);
	} else if (selection == 112) {
        cm.warp(280030000, 0);
	} else if (selection == 113) {
        cm.warp(240060200, 0);
	} else if (selection == 114) {
        cm.openShop (2015);
		cm.dispose();
    } 
}

if (cm.getMeso() >= 5000000) {

cm.dispose();
        
    if (selection == 41) {
        cm.gainMeso(-1000000);
        cm.summonMob(9500167, 18000, 500, 10);//����
    } else if (selection == 42) {
        cm.gainMeso(-1000000);
        cm.summonMob(6130207, 16700, 1200, 10);//Գ��
    } else if (selection == 43) {
        cm.gainMeso(-1000000);
        cm.summonMob(4230102, 18500, 1500, 10);//������ 
    } else if (selection == 44) {
        cm.gainMeso(-5000000);
        cm.summonMob(9001000, 1800000, 450, 5);//�̹�
        cm.summonMob(9001001, 1800000, 450, 5);
        cm.summonMob(9001002, 1800000, 450, 5);
        cm.summonMob(9001003, 1800000, 450, 5);
    } else if (selection == 45) {
        cm.gainMeso(-1);
        cm.summonMob(100100,1,99999999, 5);//����ţ 
    } else if (selection == 46) {
        cm.gainMeso(-5000000);
        cm.summonMob(7130001, 75000, 110, 20);//��Ȯ
    } else if (selection == 47) {
        cm.gainMeso(-5000000);
        cm.summonMob(8140500, 150000, 1750, 10);//������Ȯ
    } else if (selection == 48) {
        cm.gainMeso(-5000000);
        cm.summonMob(7130200, 18000, 1000, 10);//����
    } else if (selection == 49) {
        cm.gainMeso(-5000000);
        cm.summonMob(8140000, 200000, 1400, 20);//����
    } else if (selection == 50) {
        cm.gainMeso(-5000000);
        cm.summonMob(8140100, 50000, 1000, 8);//��������ѩ�� 
    } else if (selection == 51) {
        cm.gainMeso(-5000000);
        cm.summonMob(8140103, 1800, 1050, 1);//����������
    } else if (selection == 52) {
        cm.gainMeso(-5000000);
        cm.summonMob(8140101, 2000, 1200, 1);//���ڰ�����
    } else if (selection == 53) {
        cm.gainMeso(-5000000);
        cm.summonMob(8810020, 300000, 1000, 8);//������ 
    } else if (selection == 54) {
        cm.gainMeso(-5000000);
        cm.summonMob(8810021, 30000, 1000, 8);//�ڷ���
    } else if (selection == 55) {
        cm.gainMeso(-5000000);
        cm.summonMob(8150201, 50000, 1500, 5);//а��˫������
    } else if (selection == 56) {
        cm.gainMeso(-5000000);
        cm.summonMob(9300077, 200000, 3000, 5);//������
    } else if (selection == 57) {
        cm.gainMeso(-5000000);
        cm.summonMob(8150101, 18000, 1000, 10);//������� 
    } else if (selection == 58) {
        cm.gainMeso(-5000000);
        cm.summonMob(8142100, 18000, 1000, 10);//���������� 
    } else if (selection == 59) {
        cm.gainMeso(-5000000);
        cm.summonMob(8160000, 40000, 1150, 10);//ʱ������ 
    } else if (selection == 60) {
        cm.gainMeso(-5000000);
        cm.summonMob(8170000, 5000000, 1150, 10);//�ڼ�����
    } else if (selection == 61) {
        cm.gainMeso(-5000000);
        cm.summonMob(8141100, 6000000, 1250, 10);//������
    } else if (selection == 62) {
        cm.gainMeso(-5000000);
        cm.summonMob(8143000, 60000, 1250, 10);//ʱ֮���� 
    } else if (selection == 100) {
        cm.gainMeso(-5000000);
        cm.gainItem(4000019,200);//��ɫ��ţ�� 
    } else if (selection == 101) {
        cm.gainMeso(-5000000);
        cm.gainItem(4000000,200);//��ɫ��ţ��  
    } else if (selection == 102) {
        cm.gainMeso(-5000000); 
        cm.gainItem(4000016,200);//��ɫ��ţ�� 
        
    } 
    
} else {
        cm.sendSimple ("���Ǯ����ѽ.");
        cm.dispose();
        }
        cm.dispose();
    }
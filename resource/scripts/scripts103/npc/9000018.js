importPackage(net.sf.odinms.client);
var status = 0;
//����������������������ΪVIP��ͼ����,�������Ҫ���õ�ͼID
var vip1map = 803001200;
var vip2map = 925020000;
var vip2bj = 910000004;
var vip3map = 925010400;
var vip3bj = 910000005;
var vip4map = 920010000;
var vip4bj = 910000006;


//����������������������Ϊ���ʣ���ң�����,�������Ҫ��������;
var GZ_Player_money = 2000000;
var GZ_V1_money = 50000000;
var GZ_V2_money = 100000000;
var GZ_V3_money = 200000000;
var GZ_V4_money = 300000000;


//����������������������Ϊ���ʣ����ߣ�����,�������Ҫ��������; 
var GZ_Player_item = Array(1002140,0);   //���÷��� ֻ����� Aarray(����ID,����);
var GZ_V1_item = Array(2340000,0);       //����Ϊ0 ��ʾ����.
var GZ_V2_item = Array(2340000,5);
var GZ_V3_item = Array(2340000,10);
var GZ_V4_item = Array(2340000,20);


//����������������������Ϊ���ʣ�����ȯ������,�������Ҫ��������;

var GZ_Player_Nx = 10000;
var GZ_V1_Nx = 10000;
var GZ_V2_Nx = 20000;
var GZ_V3_Nx = 30000;
var GZ_V4_Nx = 40000;


//����������������������Ϊ���ʣ�������������,�������Ҫ��������;

var GZ_Player_zb = 1000;
var GZ_V1_zb = 1000;
var GZ_V2_zb = 5000;
var GZ_V3_zb = 7000;
var GZ_V4_zb = 10000;


//////////////////////////////////////////////////////////
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
            cm.sendSimple("��ã�����#r"+cm.GetSN()+"#k��ְҵ�ȼ������������⣬ϣ������ϲ����\r\n��ѡ����Ҫ���������.\r\n#b�����������130���߼�װ�������������\r\n#L1#սʿϵ��130��װ��#l        #b#L2#��ʦϵ��130��װ��#l\r\n#b#L3#����ϵ��130������#l        #b#L4#����ϵ��130������#l\r\n#b#L5#����ϵ��130��װ��#l\r\n\r\n�����������140������װ�������������\r\n#L6#սʿϵ��140��װ��#l        #L7#��ʦϵ��140��װ��#l\r\n#L8#����ϵ��140��װ��#l        #L9#����ϵ��140��װ��#l\r\n#b#L10#����ϵ��140��װ��#l");	
			
        }else if (status == 1) {

            var viplevel = cm.getChar().getVip();

            if(selection == 0){
                if(viplevel < 0){					
                    cm.sendOk("#b�������Ҹ���Ա,�޷�����˵�ͼ")
                    cm.dispose();
                }else{
                    cm.warp(vip1map,0);
                    cm.sendOk("#b��糺�ϵ��װ��!.");					
                    cm.dispose();
                }

            } else if (selection == 10) { 
                cm.openNpc(9270057);

            } else if (selection == 1) { 
                cm.openNpc(9250016);

            }else if(selection == 2){
                cm.openNpc(9250008);

            } else if (selection == 3) { 
                cm.openNpc(9250009);

            } else if (selection == 7) { 
                cm.openNpc(9120013);
            } else if (selection == 8) { 
                cm.openNpc(9000021);
            } else if (selection == 9) { 
                cm.openNpc(9270056);
            } else if (selection == 4) {
                cm.openNpc(9250011);
            } else if (selection == 11) {
                cm.warp(921133000,0);
                cm.dispose();

            } else if (selection == 5) { 
                cm.openNpc(9250006);

            } else if (selection == 6) { 
                cm.openNpc(9120017);




            }										
        }
    }
}


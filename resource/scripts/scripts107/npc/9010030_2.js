var status = 0;
var mmm = 0;
var �ս���k = 0;
var chance1 = Math.floor(Math.random()*6+1);
var itemchance = Math.floor(Math.random()*30+1);
var mgb = new Array(4031996,4031996,4031996,4031996,4031996,4031996,4031996,4031996,4031996,4031996,4031996,4031996,4031996,4031996,4031996,4031995,4031995,4031995,4031995,4031995,4031994);
var randmgb = Math.floor(Math.random() * mgb.length);

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (status == 6 || mode == -1) {
		cm.dispose();
	} else {
		if (status == 5) {
			status = 6;
			return;
		}
	if (mode == 1)
		status++;
	else
		status--;
		if (status == 0) {
				if(cm.getChar().getBossLog("��ԱJ2")>=10 || cm.getChar().getVip() < 2){
					cm.sendOk("�㲻��VIP2���ϣ������������Ѿ���10�������ˣ�����������");
					cm.dispose();
				}else{
					if(cm.getChar().getBossLog("��ԱJ2")==0){
						cm.resetBossLog("��ԱJ1");
					}
					if (cm.getChar().getBossLog("��ԱJ01") == 1 ){
							mmm = 2;
							cm.sendNext("#e�ռ����ҵĶ�������?.����Ҫ#v4000034#(��Ƥ100��),#v4000021#����Ƥ,#v4000135# ����������ñ�Ӹ�50��,..");
					}else if (cm.getChar().getBossLog("��ԱJ02") == 1 ){
							mmm = 2;
							cm.sendNext("#e�ռ����ҵĶ�������?.����Ҫ�������֮β100��#v4000007#,#v4000143#��ʬ����,#v4000180#�������ļ�����100��,...");
					}else if (cm.getChar().getBossLog("��ԱJ03") == 1 ){
							mmm = 2;
							cm.sendNext("#e�ռ����ҵĶ�������?.����Ҫ#v4000013#(������޵�β��), #v4000129#��С���С��,#v4000263#�������ĺ캣�����ı��Ǹ�100��,..");
					}else if (cm.getChar().getBossLog("��ԱJ04") == 1 ){
							mmm = 2;
							cm.sendNext("#e�ռ����ҵĶ�������?.����Ҫ#v4000171#��Ƥ,#v4000110#ľ������Ľ�,#v4000267#а��˫���������ϵ����׸�100��,");
					}else if (cm.getChar().getBossLog("��ԱJ05") == 1 ){
							mmm = 2;
							cm.sendNext("#e�ռ����ҵĶ�������?.����Ҫ#v4000465#�ǻ�,#v4000232#������Ļ�,#v4000268#������ĺ�ɫ����30��,");
					}else if (cm.getChar().getBossLog("��ԱJ06") == 1 ){
							mmm = 2;
							cm.sendNext("#e�ռ����ҵĶ�������?.����Ҫ#v4000035#С���������,#v4000291#������,#v4000274#������ͷ���϶����ѵĽǸ�50��,");
					}else if (cm.getChar().getBossLog("��ԱJ07") == 1 ){
							mmm = 2;
							cm.sendNext("#e�ռ����ҵĶ�������?.����Ҫ#v4000039#�ø��������������������,#v4000019#��ɫ��ţ��,#v4000270#���ںڷ���������˵ļ���ָ�׸�100��,");										
					}else{
						mmm = 1;
						cm.sendNext("��ӭ���μӽ��յ���������.ÿ�����ֻ����10������\r\nÿ������ɺ��ܵõ�1��#r��Ա�ɳ�ֵ#k\r\n��,��,ͭĢ���������һ��\r\nȫ��������ж���5��#r��Ա�ɳ�ֵ#k\r\n��Ȼ��.Ҫע����;�ǲ��ܷ�����Ӵ.��������Ȥ�Ļ����ھͿ��Կ�ʼӴ...\r\n#r������������(" + cm.getChar().getBossLog("��ԱJ1") + "/10)#k");
					}
				}
		} else if (status == 1) {
			if (mmm == 1){
			if (chance1 == 1){
				cm.sendOk("#eȥ����Ѱ��#v4000034#(��Ƥ100��),#v4000021#����Ƥ,#v4000135# ����������ñ��,��50��,�ҵ����������Ұ�!");
				cm.setBossLog("��ԱJ01");
				cm.dispose();
			}else if (chance1 == 2){
				cm.sendOk("#eȥ����Ѱ�һ������֮β100��#v4000007#,#v4000143#��ʬ����,#v4000180#�������ļ���,��100��,�ҵ����������Ұ�!");
				cm.setBossLog("��ԱJ02");
				cm.dispose();
			}else if (chance1 == 3){
				cm.sendOk("#eȥ����Ѱ��#v4000013#(������޵�β��), #v4000129#��С���С��,#v4000263#�������ĺ캣�����ı���,��100��,�ҵ����������Ұ�!");
				cm.setBossLog("��ԱJ03");
				cm.dispose();
			}else if (chance1 == 4){
				cm.sendOk("#eȥ����Ѱ��#v4000171#��Ƥ,#v4000110#ľ������Ľ�,#v4000267#а��˫���������ϵ�����,��100��,�ҵ����������Ұ�!");
				cm.setBossLog("��ԱJ04");
				cm.dispose();
			}else if (chance1 == 5){
				cm.sendOk("#eȥ����Ѱ��#v4000465#�ǻ�,#v4000232#С��Ȯ�ļ���,#v4000268#������ĺ�ɫ���,��30��,�ҵ����������Ұ�!");
				cm.setBossLog("��ԱJ05");
				cm.dispose();
			}else if (chance1 == 6){
				cm.sendOk("#eȥ����Ѱ��#v4000035#С���������,#v4000291#������,#v4000274#������ͷ���϶����ѵĽ�,��50��,�ҵ����������Ұ�!");
				cm.setBossLog("��ԱJ06");
				cm.dispose();
			}else if (chance1 == 7){
				cm.sendOk("#eȥ����Ѱ��#v000039#�ø��������������������,#v4000019#��ɫ��ţ��,#v4000270#���ںڷ���������˵ļ���ָ��,��100��,�ҵ����������Ұ�!");
				cm.setBossLog("��ԱJ07");
				cm.dispose();
				}
			}else if (mmm ==2){
			if (cm.getChar().getBossLog("��ԱJ01") == 1){
				if (cm.haveItem(4000034,100) && cm.haveItem(4000021,100) && cm.haveItem(4000135,100)){
					�ս���k = 1;
					cm.sendNext("#e��ô����ռ���������Ҫ����Ʒ��Ӵ,�����ܻ��ʲô�õ���Ʒ��!");
				}else{
					cm.sendOk("#e�����㻹û���ռ�������Ҫ����Ʒ,����������Ҫ�����ĵ�..���Ͱ�!!!..!");
					cm.dispose();
				}
			}else if(cm.getChar().getBossLog("��ԱJ02") == 1){
				if (cm.haveItem(4000007,100) && cm.haveItem(4000143,100) && cm.haveItem(4000180,100)){
					�ս���k = 2;
					cm.sendNext("#e��ô����ռ���������Ҫ����Ʒ��Ӵ,�����ܻ��ʲô�õ���Ʒ��!");
				}else{
					cm.sendOk("#e�����㻹û���ռ�������Ҫ����Ʒ,����������Ҫ�����ĵ�..���Ͱ�!!!..!");
					cm.dispose();
				}
			}else if(cm.getChar().getBossLog("��ԱJ03") == 1){
				if (cm.haveItem(4000013,100) && cm.haveItem(4000129,100) && cm.haveItem(4000263,100)){
					�ս���k = 3;
					cm.sendNext("#e��ô����ռ���������Ҫ����Ʒ��Ӵ,�����ܻ��ʲô�õ���Ʒ��!");
				}else{
					cm.sendOk("#e�����㻹û���ռ�������Ҫ����Ʒ,����������Ҫ�����ĵ�..���Ͱ�!!!..!");
					cm.dispose();
				}
			}else if(cm.getChar().getBossLog("��ԱJ04") == 1){
				if (cm.haveItem(4000171,100) && cm.haveItem(4000110,100) && cm.haveItem(4000267,100)){
					�ս���k = 4;
					cm.sendNext("#e��ô����ռ���������Ҫ����Ʒ��Ӵ,�����ܻ��ʲô�õ���Ʒ��!");
				}else{
					cm.sendOk("#e�����㻹û���ռ�������Ҫ����Ʒ,����������Ҫ�����ĵ�..���Ͱ�!!!..!");
					cm.dispose();
				}
			}else if(cm.getChar().getBossLog("��ԱJ05") == 1){
				if (cm.haveItem(4000465,100) && cm.haveItem(4000232,100) && cm.haveItem(4000268,100)){
					�ս���k = 5;
					cm.sendNext("#e��ô����ռ���������Ҫ����Ʒ��Ӵ,�����ܻ��ʲô�õ���Ʒ��!");
				}else{
					cm.sendOk("#e�����㻹û���ռ�������Ҫ����Ʒ,����������Ҫ�����ĵ�..���Ͱ�!!!..!");
					cm.dispose();
				}
			}else if(cm.getChar().getBossLog("��ԱJ06") == 1){
				if (cm.haveItem(4000035,100) && cm.haveItem(4000291,100) && cm.haveItem(4000274,100)){
					�ս���k = 6;
					cm.sendNext("#e��ô����ռ���������Ҫ����Ʒ��Ӵ,�����ܻ��ʲô�õ���Ʒ��!");
				}else{
					cm.sendOk("#e�����㻹û���ռ�������Ҫ����Ʒ,����������Ҫ�����ĵ�..���Ͱ�!!!..!");
					cm.dispose();
				}
			}else if(cm.getChar().getBossLog("��ԱJ07") == 1){
				if (cm.haveItem(4000039,100) && cm.haveItem(4000019,100) && cm.haveItem(4000270,100)){
					�ս���k = 7;
					cm.sendNext("#e��ô����ռ���������Ҫ����Ʒ��Ӵ,�����ܻ��ʲô�õ���Ʒ��!");
				}else{
					cm.sendOk("#e�����㻹û���ռ�������Ҫ����Ʒ,����������Ҫ�����ĵ�..���Ͱ�!!!..!");
					cm.dispose();
					}
				}//���һ��IF��β
			}
		} else if (status == 2) {
				var fyitem = Math.floor(Math.random()*5+1);
                                var czz = cm.getChar().getVipczz();
				cm.gainItem(mgb[randmgb],1);
				cm.setVipczz(czz+1);
				cm.getChar().setXw(cm.getChar().getXw() + 5);
            if (�ս���k ==1){
				cm.sendNext("��ϲ������˴�����\r\n#r��Ա�ɳ�ֵ#k+1\r\n�����#z" + mgb[randmgb] + "#x1");
				cm.gainItem(4000034, -100);
				cm.gainItem(4000021, -100);
				cm.gainItem(4000135, -100);
				cm.resetBossLog("��ԱJ01");
				cm.setBossLog("��ԱJ1",1);
				cm.setBossLog("��ԱJ2");
            }else if (�ս���k ==2){
				cm.sendNext("��ϲ������˴�����\r\n#r��Ա�ɳ�ֵ#k+1\r\n�����#z" + mgb[randmgb] + "#x1");
				cm.gainItem(4000007, -100);
				cm.gainItem(4000143, -100);
				cm.gainItem(4000180, -100);
				cm.resetBossLog("��ԱJ02");
				cm.setBossLog("��ԱJ1",1);
				cm.setBossLog("��ԱJ2");
            }else if (�ս���k ==3){
				cm.sendNext("��ϲ������˴�����\r\n#r��Ա�ɳ�ֵ#k+1\r\n�����#z" + mgb[randmgb] + "#x1");
				cm.gainItem(4000013, -100);
				cm.gainItem(4000129, -100);
				cm.gainItem(4000263, -100);
				cm.resetBossLog("��ԱJ03");
				cm.setBossLog("��ԱJ1",1);
				cm.setBossLog("��ԱJ2");
            }else if (�ս���k ==4){
				cm.sendNext("��ϲ������˴�����\r\n#r��Ա�ɳ�ֵ#k+1\r\n�����#z" + mgb[randmgb] + "#x1");
				cm.gainItem(4000171, -100);
				cm.gainItem(4000110, -100);
				cm.gainItem(4000267, -100);
				cm.resetBossLog("��ԱJ04");
				cm.setBossLog("��ԱJ1",1);
				cm.setBossLog("��ԱJ2");
            }else if (�ս���k ==5){
				cm.sendNext("��ϲ������˴�����\r\n#r��Ա�ɳ�ֵ#k+1\r\n�����#z" + mgb[randmgb] + "#x1");
				cm.gainItem(4000465, -100);
				cm.gainItem(4000232, -100);
				cm.gainItem(4000268, -100);
				cm.resetBossLog("��ԱJ05");
				cm.setBossLog("��ԱJ1",1);
				cm.setBossLog("��ԱJ2");
            }else if (�ս���k ==6){
				cm.sendNext("��ϲ������˴�����\r\n#r��Ա�ɳ�ֵ#k+1\r\n�����#z" + mgb[randmgb] + "#x1");
				cm.gainItem(4000035, -100);
				cm.gainItem(4000291, -100);
				cm.gainItem(4000274, -100);
				cm.resetBossLog("��ԱJ06");
				cm.setBossLog("��ԱJ1",1);
				cm.setBossLog("��ԱJ2");
            }else if (�ս���k ==7){
				cm.sendNext("��ϲ������˴�����\r\n#r��Ա�ɳ�ֵ#k+1\r\n�����#z" + mgb[randmgb] + "#x1");
				cm.gainItem(4000039, -100);
				cm.gainItem(4000019, -100);
				cm.gainItem(4000270, -100);
				cm.resetBossLog("��ԱJ07");
				cm.setBossLog("��ԱJ1",1);
				cm.setBossLog("��ԱJ2");
            }
			if(cm.getBossLog("��ԱJ1",1) == 10){
				cm.getChar().setVipczz(czz+5);
				cm.worldMessage("[VIPÿ������]����ϲ���:["+cm.getChar().getName()+"]�����10��VIP����,��������5�Ļ�Ա�ɳ�ֵ");
			}else{
				cm.dispose();
			}
		} else if (status == 3) {
			cm.sendOk("��ϲ����������10�����񣬶�����5��#r��Ա�ɳ�ֵ#k");
			cm.dispose();
		} else if (status == 4) {
			cm.sendNext("#b...#k");
		} else if (status == 5) {
			cm.sendOk("..!");
			cm.dispose();
		}
	}
} 

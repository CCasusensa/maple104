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
				if(cm.getChar().getBossLog("����֮��")>=10){
					cm.sendOk("#e�������Ѿ�����10�������ˣ����������ɣ���");
					cm.dispose();
				}else{
					if (cm.getChar().getMrsq() == 1){
							mmm = 2;
							cm.sendNext("#e�ռ����ҵĶ�������?.����Ҫ#v4000034#(#z4000034#100��),#v4000021##z4000021#,#v4000135# #z4000135#��100��,..");
					}else if (cm.getChar().getMrsq() == 2){
							mmm = 2;
							cm.sendNext("#e�ռ����ҵĶ�������?.����Ҫ#z4000007#100��#v4000007#,#v4000143##z4000143#,#v4000180##z4000180#��100��,...");
					}else if (cm.getChar().getMrsq() == 3){
							mmm = 2;
							cm.sendNext("#e�ռ����ҵĶ�������?.����Ҫ#v4000013#(#z4000013#), #v4000129##z4000129#,#v4000263##z4000263#��100��,..");
					}else if (cm.getChar().getMrsq() == 4){
							mmm = 2;
							cm.sendNext("#e�ռ����ҵĶ�������?.����Ҫ#v4000171##z4000171#,#v4000110##z4000110#,#v4000267##z4000267#��100��,");
					}else if (cm.getChar().getMrsq() == 5){
							mmm = 2;
							cm.sendNext("#e�ռ����ҵĶ�������?.����Ҫ#v4000465##z4000465#,#v4000232##z4000232#,#v4000268##z4000268#��100��,");
					}else if (cm.getChar().getMrsq() == 6){
							mmm = 2;
							cm.sendNext("#e�ռ����ҵĶ�������?.����Ҫ#v4000035##z4000035#,#v4000291##z4000291#,#v4000274##z4000274#��100��,");
					}else if (cm.getChar().getMrsq() == 7){
							mmm = 2;
							cm.sendNext("#e�ռ����ҵĶ�������?.����Ҫ#v4000039##z4000039#,#v4000019##z4000019#,#v4000270##z4000270#��100��,");										
					}else{
						mmm = 1;
						cm.sendNext("��ӭ���μӽ��յ���������.ÿ�����ֻ����10������\r\nÿ������ɺ��ܵõ�1ö#b#z4310034##k\r\n��,��,ͭĢ���������һ��\r\n10�����껹�ܶ����ûƽ�����Ӵ����Ȼ��;���ܷ���\r\n#r������������(" + cm.getChar().getBossLog("����֮��") + "/10)#k");
					}
				}
		} else if (status == 1) {
			if (mmm == 1){
			if (chance1 == 1){
				cm.sendOk("#eȥ����Ѱ��#v4000034#(��Ƥ100��),#v4000021#����Ƥ,#v4000135# ����������ñ��,��100��,�ҵ����������Ұ�!");
				cm.getChar().setMrsq(1);
				cm.dispose();
			}else if (chance1 == 2){
				cm.sendOk("#eȥ����Ѱ�һ������֮β100��#v4000007#,#v4000143#��ʬ����,#v4000180#�������ļ���,��100��,�ҵ����������Ұ�!");
				cm.getChar().setMrsq(2);
				cm.dispose();
			}else if (chance1 == 3){
				cm.sendOk("#eȥ����Ѱ��#v4000013#(������޵�β��), #v4000129#��С���С��,#v4000263#�������ĺ캣�����ı���,��100��,�ҵ����������Ұ�!");
				cm.getChar().setMrsq(3);
				cm.dispose();
			}else if (chance1 == 4){
				cm.sendOk("#eȥ����Ѱ��#v4000171#��Ƥ,#v4000110#ľ������Ľ�,#v4000267#а��˫���������ϵ�����,��100��,�ҵ����������Ұ�!");
				cm.getChar().setMrsq(4);
				cm.dispose();
			}else if (chance1 == 5){
				cm.sendOk("#eȥ����Ѱ��#v4000465#�ǻ�,#v4000232#С��Ȯ�ļ���,#v4000268#������ĺ�ɫ���,��100��,�ҵ����������Ұ�!");
				cm.getChar().setMrsq(5);
				cm.dispose();
			}else if (chance1 == 6){
				cm.sendOk("#eȥ����Ѱ��#v4000035#С���������,#v4000291#������,#v4000274#������ͷ���϶����ѵĽ�,��100��,�ҵ����������Ұ�!");
				cm.getChar().setMrsq(5);
				cm.dispose();
			}else if (chance1 == 7){
				cm.sendOk("#eȥ����Ѱ��#v000039#�ø��������������������,#v4000019#��ɫ��ţ��,#v4000270#���ںڷ���������˵ļ���ָ��,��100��,�ҵ����������Ұ�!");
				cm.getChar().setMrsq(7);
				cm.dispose();
				}
			}else if (mmm ==2){
			if (cm.getChar().getMrsq() == 1){
				if (cm.haveItem(4000034,100) && cm.haveItem(4000021,100) && cm.haveItem(4000135,100)){
					�ս���k = 1;
					cm.sendNext("#e��ô����ռ���������Ҫ����Ʒ��Ӵ,�����ܻ��ʲô�õ���Ʒ��!");
				}else{
					cm.sendOk("#e�����㻹û���ռ�������Ҫ����Ʒ,����������Ҫ�����ĵ�..���Ͱ�!!!..!");
					cm.dispose();
				}
			}else if(cm.getChar().getMrsq() == 2){
				if (cm.haveItem(4000007,100) && cm.haveItem(4000143,100) && cm.haveItem(4000180,100)){
					�ս���k = 2;
					cm.sendNext("#e��ô����ռ���������Ҫ����Ʒ��Ӵ,�����ܻ��ʲô�õ���Ʒ��!");
				}else{
					cm.sendOk("#e�����㻹û���ռ�������Ҫ����Ʒ,����������Ҫ�����ĵ�..���Ͱ�!!!..!");
					cm.dispose();
				}
			}else if(cm.getChar().getMrsq() == 3){
				if (cm.haveItem(4000013,100) && cm.haveItem(4000129,100) && cm.haveItem(4000263,100)){
					�ս���k = 3;
					cm.sendNext("#e��ô����ռ���������Ҫ����Ʒ��Ӵ,�����ܻ��ʲô�õ���Ʒ��!");
				}else{
					cm.sendOk("#e�����㻹û���ռ�������Ҫ����Ʒ,����������Ҫ�����ĵ�..���Ͱ�!!!..!");
					cm.dispose();
				}
			}else if(cm.getChar().getMrsq() == 4){
				if (cm.haveItem(4000171,100) && cm.haveItem(4000110,100) && cm.haveItem(4000267,100)){
					�ս���k = 4;
					cm.sendNext("#e��ô����ռ���������Ҫ����Ʒ��Ӵ,�����ܻ��ʲô�õ���Ʒ��!");
				}else{
					cm.sendOk("#e�����㻹û���ռ�������Ҫ����Ʒ,����������Ҫ�����ĵ�..���Ͱ�!!!..!");
					cm.dispose();
				}
			}else if(cm.getChar().getMrsq() == 5){
				if (cm.haveItem(4000465,100) && cm.haveItem(4000232,100) && cm.haveItem(4000268,100)){
					�ս���k = 5;
					cm.sendNext("#e��ô����ռ���������Ҫ����Ʒ��Ӵ,�����ܻ��ʲô�õ���Ʒ��!");
				}else{
					cm.sendOk("#e�����㻹û���ռ�������Ҫ����Ʒ,����������Ҫ�����ĵ�..���Ͱ�!!!..!");
					cm.dispose();
				}
			}else if(cm.getChar().getMrsq() == 6){
				if (cm.haveItem(4000035,100) && cm.haveItem(4000291,100) && cm.haveItem(4000274,100)){
					�ս���k = 6;
					cm.sendNext("#e��ô����ռ���������Ҫ����Ʒ��Ӵ,�����ܻ��ʲô�õ���Ʒ��!");
				}else{
					cm.sendOk("#e�����㻹û���ռ�������Ҫ����Ʒ,����������Ҫ�����ĵ�..���Ͱ�!!!..!");
					cm.dispose();
				}
			}else if(cm.getChar().getMrsq() == 7){
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
				cm.gainItem(mgb[randmgb],1);
				cm.gainItem(4310034,1);
				cm.getChar().setXw(cm.getChar().getXw() + 5);
            if (�ս���k ==1){
				cm.sendNext("��ϲ������˴�����\r\n�����һ�������\r\n�����#z" + mgb[randmgb] + "#x1");
				cm.gainItem(4000034, -100);
				cm.gainItem(4000021, -100);
				cm.gainItem(4000135, -100);
				cm.getChar().setMrsq(0);
				cm.setBossLog("����֮��");
				cm.setBossLog("����֮��1");
            }else if (�ս���k ==2){
				cm.sendNext("��ϲ������˴�����\r\n�����һ�������\r\n�����#z" + mgb[randmgb] + "#x1");
				cm.gainItem(4000007, -100);
				cm.gainItem(4000143, -100);
				cm.gainItem(4000180, -100);
				cm.getChar().setMrsq(0);
				cm.setBossLog("����֮��");
				cm.setBossLog("����֮��1");
            }else if (�ս���k ==3){
				cm.sendNext("��ϲ������˴�����\r\n�����һ�������\r\n�����#z" + mgb[randmgb] + "#x1");
				cm.gainItem(4000013, -100);
				cm.gainItem(4000129, -100);
				cm.gainItem(4000263, -100);
				cm.getChar().setMrsq(0);
				cm.setBossLog("����֮��");
				cm.setBossLog("����֮��1");
            }else if (�ս���k ==4){
				cm.sendNext("��ϲ������˴�����\r\n�����һ�������\r\n�����#z" + mgb[randmgb] + "#x1");
				cm.gainItem(4000171, -100);
				cm.gainItem(4000110, -100);
				cm.gainItem(4000267, -100);
				cm.getChar().setMrsq(0);
				cm.setBossLog("����֮��");
				cm.setBossLog("����֮��1");
            }else if (�ս���k ==5){
				cm.sendNext("��ϲ������˴�����\r\n�����һ�������\r\n�����#z" + mgb[randmgb] + "#x1");
				cm.gainItem(4000465, -100);
				cm.gainItem(4000232, -100);
				cm.gainItem(4000268, -100);
				cm.getChar().setMrsq(0);
				cm.setBossLog("����֮��");
				cm.setBossLog("����֮��1");
            }else if (�ս���k ==6){
				cm.sendNext("��ϲ������˴�����\r\n�����һ�������\r\n�����#z" + mgb[randmgb] + "#x1");
				cm.gainItem(4000035, -100);
				cm.gainItem(4000291, -100);
				cm.gainItem(4000274, -100);
				cm.getChar().setMrsq(0);
				cm.setBossLog("����֮��");
				cm.setBossLog("����֮��1");
            }else if (�ս���k ==7){
				cm.sendNext("��ϲ������˴�����\r\n�����һ�������\r\n�����#z" + mgb[randmgb] + "#x1");
				cm.gainItem(4000039, -100);
				cm.gainItem(4000019, -100);
				cm.gainItem(4000270, -100);
				cm.getChar().setMrsq(0);
				cm.setBossLog("����֮��");
				cm.setBossLog("����֮��1");
            }
			if(cm.getBossLog("����֮��1") == 10){
				cm.gainItem(2430008, +1);
				cm.worldMessage("[����֮��]����ϲ��ң�["+cm.getChar().getName()+"]�����10������֮�£������һ���ƽ�����");
			}else{
				cm.dispose();
			}
		} else if (status == 3) {
			cm.sendOk("��ϲ����������10�����񣬶�����һ���ƽ�����");
			cm.dispose();
		} else if (status == 4) {
			cm.sendNext("#b...#k");
		} else if (status == 5) {
			cm.sendOk("..!");
			cm.dispose();
		}
	}
} 

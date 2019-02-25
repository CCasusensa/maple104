importPackage(net.sf.odinms.server.maps);

var belts = Array(1132000, 1132001, 1132002, 1132003, 1132004);
var belt_level = Array(25, 35, 45, 60, 75);
var belt_points = Array(200, 1800, 4000, 9200, 17000);

var status = -1;
var selectedMenu = -1;

function start() {
	if (isRestingSpot(cm.getPlayer().getMap().getId())) {
		cm.sendSimple("I'm surprised you made it this far! But it won't be easy from here on out. You still want the challenge?\r\n\r\n#b#L0#I want to continue#l\r\n#L1#I want to leave#l\r\n#L2#I want to record my score up to this points#l");
	} else if (cm.getPlayer().getLevel() >= 25) {
		if (cm.getPlayer().getMap().getId() == 925020001) {
			cm.sendSimple("ʦ��������ĵ�һǿ�ߡ��������ּһ�Ҳ����ս������ڵģ�\r\n#b#L0#������ս#l\r\n#L1#�Ŷ���ս#l\r\n#L2#��ȡ����#l\r\n#L3#���ʼ����������#l\r\n#L5#���������ʲô��#l");
		} else {
			cm.sendYesNo("ʲô����Ҫ���������ϧ���˳��Ļ���Ҫ���¿�ʼ�ˡ��Ƿ���ķ������˳���");
		}
	} else {
		cm.sendOk("ʲô������Ϊ����˭���㳰Ц�ҵ����ˣ����ֱ��һ��Ц������������Ҫ #b25#k ���ſ�����ս��");
		cm.dispose();
	}
}

function action(mode, type, selection) {
	if (cm.getPlayer().getMap().getId() == 925020001) {
		if (mode >= 0) {
			if (status == -1)
				selectedMenu = selection;
			status++;
			
			if (selectedMenu == 0) {
				if (cm.getPlayer().getMojoTime() == 0) {
					if (status == 0) {
						cm.sendYesNo("�����㣡�����㣡����Ӧ��������˰ɡ�����ʦ���ɲ�������û�µ��ˣ�ĬĬ���������ǲ��ܼ���ġ���������ĳ����������Ը��Ѵ´������ˡ�ֻҪ����Ҿ͸�����սʦ���Ļ��ᣡ��Σ��������Ԥ��Ľ���ǡ�");
					} else if (status == 1) {
						if (mode == 0) {
							cm.sendNext("��������һȭ�ͱ������ļһ�Ҳ����ս���ǣ���ȥ���������ɣ�");
						} else {
							cm.warp(925020010, 0);
						}
						cm.dispose();
					}
				} else {
					cm.getC().getChannelServer().getMapFactory().getMap(925020100).resetReactors();
					cm.getC().getChannelServer().getMapFactory().getMap(925020100).killAllMonsters(false);
					cm.warp(925020100, 0);
					cm.dispose();
				}
			} else if (selectedMenu == 1) {
				var party = cm.getPlayer().getParty();
				if (party == null || party.getLeader().getId() != cm.getPlayer().getId()) {
					cm.sendNext("�㲻�Ƕӳ��������Ƕӳ���˵���ɣ�");
					cm.dispose();
				} else if (party.getMembers().size() == 1) {
					cm.sendNext("�Լ�Ҫ����ӵ�ģʽ��ս��");
				} else {
					warpParty(925020100);
				}
				cm.dispose();
			} else if (selectedMenu == 2) {
				if (status == 0) {
					var selStr = "�����������Ϊ #b" + cm.getPlayer().getMojoPoints() + "��#kʦ��ϲ���в��ܵ��ˡ������һ���������������Ϳ��Ը���������������ȡ������\r\n";
					for (var i = 0; i < belts.length; i++)
						selStr += "\r\n#L" + i + "##i" + belts[i] + "# #t" + belts[i] + "#";
					cm.sendSimple(selStr);
				} else if (status == 1) {
					var belt = belts[selection];
					var level = belt_level[selection];
					var points = belt_points[selection];
					if(cm.getPlayer().getMojoPoints() >= points){
						cm.getPlayer().addMojoPoints(-points);
						cm.gainItem(belt , 1);
						cm.sendOk("��ȡ�����ɹ����Ѿ���������������п۳� " + points +" �㡣");
					} else {
						cm.sendOk("Ŀǰ��û���㹻������������ȡ��һ������");
					}
					cm.dispose();
				}
			} else if (selectedMenu == 3) {
				if (status == 0) {
					cm.sendYesNo("ѵ����������ʼ������Ϊ0��ม���������Ӧ�����ף�����δ�ز��á�ѵ����������ʼ��ʱ֮ǰ�ļ�¼��ɾ�����㻹��ӵ�����������ʰ�ѵ������Ҫ��ʼ����");
				} else if (status == 1) {
					if (mode == 0) {
						cm.sendNext("���������������Ŀ������");
					} else {
						var total = cm.getPlayer().getMojoPoints();
						cm.getPlayer().addMojoPoints(-total);
						cm.sendNext("�����ɹ���ѵ�������Ѿ��ɹ���ʼ������ô��ʼ�µ�ѵ���ɣ�");
					}
					cm.dispose();
				}
			} else if (selectedMenu == 4) {
				if (status == 0) {
					cm.sendYesNo("You haven't attempted the medal yet? If you finish this pq 100 times then you can receive this medal called #b Vanquisher#k. It looks like you haven't even earned the #b#t1142033##k... Do you want to try out for the #b#t1142033##k?");
				} else if (status == 1) {
					if (mode == 0) {
						cm.sendNext("If you don't want to, that's fine.");
						cm.dispose();
					} else {
						if(cm.getPlayer().getMojoCompleted() >= 100){
							cm.gainItem(1142033,1);
							cm.getPlayer().addMojoCompleted(-100);
							cm.sendOk("Thanks for completing this pq over 100 times. Now you have received a special medal as a gift from us!");
							cm.dispose();
						}else{
							cm.sendOk("Sorry but you havent completed this pq enough times to receive the medal!");
							cm.dispose();
						}
					}
					cm.dispose();
				}
			} else if (selectedMenu == 5) { //What is a Mu Lung Dojo?
				cm.sendNext("�ҵ�ʦ������������ǿ��һλ���������ӡ��ֻ���ڴ�����ط���������������������Լ38¥֮�ߵĽ�����������������ͬʱҲ������ѵ��ָ������Ȼ�����ʵ��ȥ��������Щ���ѡ�");
				cm.dispose();
			}
		} else
			cm.dispose();
	} else if (isRestingSpot(cm.getPlayer().getMap().getId())) {
		if (selectedMenu == -1)
			selectedMenu = selection;
		status++;
		
		if (selectedMenu == 0) {
			cm.warp(cm.getPlayer().getMap().getId() + 100, 0);
			cm.dispose();
		} else if (selectedMenu == 1) { //I want to leave
			if (status == 0) {
				cm.sendAcceptDecline("So, you're giving up? You're really going to leave?");
			} else {
				if (mode == 0) {
					//warp them out?
				} else {
					//what.
				}
				cm.dispose();
			}
		} else if (selectedMenu == 2) { //I want to record my score up to this point
			if (status == 0) {
				cm.sendYesNo("If you record your score, you can start where you left off the next time. Isn't that convenient? Do you want to record your current score?");
			} else {
				if (mode == 0) {
					cm.sendNext("You think you can go even higher? Good luck!");
				} else {
					cm.sendNext("I recorded your score. If you tell me the next time you go up, you'll be able to start where you left off.");
					//cm.getPlayer().recordDojoScore(stage);
				}
				cm.dispose();
			}
		}
	} else {
		if (mode <= 0) {
			cm.sendNext("Stop changing your mind! Soon, you'll be crying, begging me to go back.");
		} else {
			cm.warp(925020001, 0);
		}
		cm.dispose();
	}
}

function isRestingSpot(id) {
    var shortid = id / 100;

    switch (shortid) {
	case 9250206:
	case 9250212:
	case 9250218:
	case 9250224:
	case 9250230:
	case 9250236:
	    return true;
    }
    return false;
}
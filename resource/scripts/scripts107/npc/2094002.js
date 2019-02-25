var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	status--;
    }
    if (cm.getPlayer().getMapId() == 925100700) {
	cm.removeAll(4001117);
	cm.removeAll(4001120);
	cm.removeAll(4001121);
	cm.removeAll(4001122);
	cm.warp(251010404,0);
	cm.dispose();
	return;
    }
    var em = cm.getEventManager("Pirate");
    if (em == null) {
	cm.sendNext("The event isn't started...");
	cm.dispose();
	return;
    }
    if (!cm.isLeader()) {
	cm.sendNext("��ӳ������ҽ�̸");
	cm.dispose();
	return;
    }
    switch(cm.getPlayer().getMapId()) {
	case 925100000:
	   cm.sendNext("�����ߵ��Ǻ��������ã�����Ҫ�������й����ػ���\r\n#r���Ҫ�˳�����,������������#k");
	   cm.dispose();
	   break;
	case 925100100:
	   var emp = em.getProperty("stage2");
	   if (emp == null) {
		em.setProperty("stage2", "0");
		emp = "0";
	   }
	   if (emp.equals("0")) {
		if (cm.haveItem(4001120,20)) {
		    cm.sendNext("�����Ѽ�����,�����Ѽ���һ�׶ε�֤����");
		    cm.gainItem(4001120,-20);
		    em.setProperty("stage2", "1");
		} else {
	   	    cm.sendNext("�����ߵ��Ǻ��������õ��ģ����Ǳ���ʹ�Լ��ĸ߹󺣵�\r\n���Ѽ�#v4001120##z4001120#20��������");
		}
	   } else if (emp.equals("1")) {
		if (cm.haveItem(4001121,20)) {
		    cm.sendNext("�����Ѽ�����,�����Ѽ���һ�׶ε�֤����");
		    cm.gainItem(4001121,-20);
		    em.setProperty("stage2", "2");
		} else {
	   	    cm.sendNext("�����ߵ��Ǻ��������õ��ģ����Ǳ���ʹ�Լ��ĸ߹󺣵�\r\n���Ѽ�#v4001122##z4001121#20��������");
		}
	   } else if (emp.equals("2")) {
		if (cm.haveItem(4001122,20)) {
		    cm.sendNext("���������ǽ�����һ�׶ΰ�");
		    cm.gainItem(4001122,-20);
		    em.setProperty("stage2", "3");
		} else {
	   	    cm.sendNext("�����ߵ��Ǻ��������õ��ģ����Ǳ���ʹ�Լ��ĸ߹󺣵�\r\n���Ѽ�#v4001122##z4001122#20��������");
		}
	   } else {
		cm.sendNext("��һ�׶����Ѿ��򿪣���ȥ��");
	   }
	   cm.dispose();
	   break;
	case 925100200:
	   cm.sendNext("�����ͼ�����еĹ�,��һ�׶ε��Ż��Զ���");
	   cm.dispose();
	   break;
	case 925100201:
	   if (cm.getMap().getAllMonstersThreadsafe().size() == 0) {
		cm.sendNext("Excellent.");
		if (em.getProperty("stage2a").equals("0")) {
		    cm.getMap().setReactorState();
		    em.setProperty("stage2a", "1");
		}
	   } else {
	   	cm.sendNext("��Щ������ڶ�ء�����һ��Ҫ�������");
	   }
	   cm.dispose();
	   break;
	case 925100301:
	   if (cm.getMap().getAllMonstersThreadsafe().size() == 0) {
		cm.sendNext("Excellent.");
		if (em.getProperty("stage3a").equals("0")) {
		    cm.getMap().setReactorState();
		    em.setProperty("stage3a", "1");
		}
	   } else {
	   	cm.sendNext("��Щ������ڶ�ء�����һ��Ҫ�������");
	   }
	   cm.dispose();
	   break;
	case 925100202:
	case 925100302:
	   cm.sendNext("��Щ�Ǵ����Ϳ�³�ˣ�������һ�������׸����ĺ�����ɱ�����ǣ���������������");
	   cm.dispose();
	   break;
	case 925100400:
	   cm.sendNext("���Ǹô��Ķ�����Դ�����Ǳ����ܷ���þɽ�����������");
	   cm.dispose();
	   break;
	case 925100500:
	   if (cm.getMap().getAllMonstersThreadsafe().size() == 0) {
		cm.warpParty(925100600);
	   } else {
	   	cm.sendNext("������еĹ����ʹ��������ū��");
	   }
	   cm.dispose();
	   break;
    }
}
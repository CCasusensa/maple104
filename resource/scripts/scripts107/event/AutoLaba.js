var setupTask;

function init() {
    scheduleNew();
}

function scheduleNew() {
    var cal = java.util.Calendar.getInstance();
    cal.set(java.util.Calendar.HOUR, 0);
    cal.set(java.util.Calendar.MINUTE, 50);
    cal.set(java.util.Calendar.SECOND, 0);
    var nextTime = cal.getTimeInMillis();
	
    while (nextTime <= java.lang.System.currentTimeMillis()) {
        nextTime += 1000 * 60;
    }
    		setupTask = em.scheduleAtTimestamp("start", nextTime);
}

function cancelSchedule() {
    setupTask.cancel(true);
}

function start() {
	var cal = java.util.Calendar.getInstance();
	var hour = cal.get(java.util.Calendar.HOUR);
	var min = cal.get(java.util.Calendar.MINUTE);
	var sec = cal.get(java.util.Calendar.SECOND);
	
	scheduleNew();
	if(min == 1){
		//em.startSuperlabaed("���б�ʯ��װ�Ĳ��ӵ��ս��߲�����Ϣ��������װ����ʿ�ǿ���ȥ�г�������������ս",5121025);
		em.broadcastServerMsg(5121025,"���б�ʯ��װ�Ĳ��ӵ��ս��߲�����Ϣ��������װ����ʿ�ǿ���ȥ�г�������������ս",true);
    	} else if (min == 15) {
		//em.startSuperlabaed("ÿСʱ��ʱ����<���˺���>���г�������������,��ʿ�ǿ����ȥͨ�ذ�,�����ḻӴ",5121031);
		em.broadcastServerMsg(5121031,"ÿСʱ��ʱ����<���˺���>���г�������������,��ʿ�ǿ����ȥͨ�ذ�,�����ḻӴ",true);
    	} else if (min == 20) {
		//em.startSuperlabaed("ÿСʱ����<��ʱ�ᱦ>���г�������������,˭�������������볡�����أ�",5121031);
		em.broadcastServerMsg(5121031,"ÿСʱ����<��ʱ�ᱦ>���г�������������,˭�������������볡�����أ�",true);
    	} else if (min == 30) {
		//em.startSuperlabaed("������ʼ�ˣ�ϲ���������ҿ��Ե��г���������������",5121031);
		em.broadcastServerMsg(5121031,"������ʼ�ˣ�ϲ���������ҿ��Ե��г���������������",true);
    	} else if (min == 31) {
		//em.startSuperlabaed("���в�����װ�Ĳ��ӵ��ս��߲�����Ϣ��������װ����ʿ�ǿ���ȥ�г�������������ս",5121025);
		em.broadcastServerMsg(5121025,"���в�����װ�Ĳ��ӵ��ս��߲�����Ϣ��������װ����ʿ�ǿ���ȥ�г�������������ս",true);
    	} else if (min == 35) {
		//em.startSuperlabaed("ÿСʱ����<��ս����>���г�������������,��ʿ�ǿ������������..",5121010);
		em.broadcastServerMsg(5121010,"ÿСʱ����<��ս����>���г�������������,��ʿ�ǿ������������..",true);
	}
    
}

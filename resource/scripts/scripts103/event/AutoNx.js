var setupTask;

function init() {
	scheduleNew();
}

function scheduleNew() {
	var cal = java.util.Calendar.getInstance();
	cal.set(java.util.Calendar.HOUR, 3);
	cal.set(java.util.Calendar.MINUTE, 50);
	cal.set(java.util.Calendar.SECOND, 0);
	var nextTime = cal.getTimeInMillis();
	while (nextTime <= java.lang.System.currentTimeMillis()) {
		nextTime += 100 * 6 * 1;
	}
	setupTask = em.scheduleAtTimestamp("start", nextTime);
}

function cancelSchedule() {
	setupTask.cancel(true);
}

function start() {
	scheduleNew();
	em.getPlayers().getClient().getChannelServer().getMapFactory().getMap(910000000).AutoNx(1);
} 
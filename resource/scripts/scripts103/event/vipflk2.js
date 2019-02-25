var exitMap;
var instanceId;
var minPlayers = 6;
var mapId=952000000;

function init() {
	instanceId = 1;
}

function monsterValue(eim, mobId) {
	return 1;
}

function setup() {
	exitMap = em.getChannelServer().getMapFactory().getMap(910000000); // <exit>
	var instanceName = "vipflk2" ;
	var eim = em.newInstance(instanceName);
	var mf = eim.getMapFactory();
	instanceId++;
	var eventTime = 10 * (1000 * 60);
	em.schedule("timeOut", eventTime);
	em.schedule("monsterstart", 6000);
	em.setProperty("entryPossible", "1");
	eim.startEventTimer(eventTime);
	
	return eim;
}

function playerEntry(eim, player) {

	var map = eim.getMapInstance(mapId);
	player.changeMap(map, map.getPortal(0));

	if (eim.isLeader(player)) { // Check for party leader
		monsterstart();//�������ظ�ˢ��
	}
	
}

function monsterstart() {

var map = eim.getMapFactory().getMap(mapId); 


	if(map.getId() ==952000000){
		
while (iter.hasNext()) {
		var eim = iter.next();
			var mob = net.sf.odinms.server.life.MapleLifeFactory.getMonster(9600010);
			var overrideStats = new net.sf.odinms.server.life.MapleMonsterStats(); 
			var map = eim.getMapFactory().getMap(mapId); 
			var xRand = 330-Math.floor(Math.random() * 650);
			var hprand = 40000;
			overrideStats.setHp(hprand); 
			overrideStats.setExp(2000); 
			overrideStats.setMp(20000); 
			mob.setOverrideStats(overrideStats); 
			mob.setHp(hprand);
			eim.registerMonster(mob);
			
map.spawnMonsterOnGroudBelow(mob, new java.awt.Point(23, 35));


	}


	}else if(map.getId() ==952000100){
		mapId=952000200;
		em.setProperty("entryPossible2", "3");
	}else if(map.getId() ==952000200){
		mapId=952000300;
		em.setProperty("entryPossible3", "4");
	}else if(map.getId() ==952000300){
		mapId=952000400;
		em.setProperty("entryPossible4", "5");
	}else if(map.getId() ==952000400){
		mapId=952000500;
		em.setProperty("entryPossible5", "6");
	}


	


}

function playerDead(eim, player) {
}

function playerRevive(eim, player) {
	if (eim.isLeader(player)) { 
		var party = eim.getPlayers();
		for (var i = 0; i < party.size(); i++) {
			playerExit(eim, party.get(i));
		}
		eim.dispose();
	}
	else { //boot dead player
		// If only 2 players are left, uncompletable:
		var party = eim.getPlayers();
		if (party.size() <= minPlayers) {
			for (var i = 0; i < party.size(); i++) {
				playerExit(eim,party.get(i));
			}
			eim.dispose();
		}
		else
			playerExit(eim, player);
	}
}

function playerDisconnected(eim, player) {
	if (eim.isLeader(player)) { //check for party leader
		//boot whole party and end
		var party = eim.getPlayers();
		for (var i = 0; i < party.size(); i++) {
			if (party.get(i).equals(player)) {
				removePlayer(eim, player);
			}			
			else {
				playerExit(eim, party.get(i));
			}
		}
		eim.dispose();
	}
	else { //boot d/ced player
		// If only 2 players are left, uncompletable:
		var party = eim.getPlayers();
		if (party.size() < minPlayers) {
			for (var i = 0; i < party.size(); i++) {
				playerExit(eim,party.get(i));
			}
			eim.dispose();
		}
		else
			playerExit(eim, player);
	}
}

function leftParty(eim, player) {			
	// If only 2 players are left, uncompletable:
	var party = eim.getPlayers();
	if (party.size() <= minPlayers) {
		for (var i = 0; i < party.size(); i++) {
			playerExit(eim,party.get(i));
		}
		eim.dispose();
	}
	else
		playerExit(eim, player);
}

function disbandParty(eim) {
	//boot whole party and end
	var party = eim.getPlayers();
	for (var i = 0; i < party.size(); i++) {
		playerExit(eim, party.get(i));
	}
	eim.dispose();
}

function playerExit(eim, player) {
	em.setProperty("entryPossible", "0");
	eim.unregisterPlayer(player);
	player.changeMap(exitMap, exitMap.getPortal(0));
}

//for offline players
function removePlayer(eim, player) {
	eim.unregisterPlayer(player);
	player.getMap().removePlayer(player);
	player.setMap(exitMap);
}

function clearPQ(eim) {
	//KPQ does nothing special with winners
	var party = eim.getPlayers();
	for (var i = 0; i < party.size(); i++) {
		playerExit(eim, party.get(i));
	}
	eim.dispose();
}

function allMonstersDead(eim) {
    var iter = em.getInstances().iterator();
	while (iter.hasNext()) {
		var eim = iter.next();
		var mob2 = net.sf.odinms.server.life.MapleLifeFactory.getMonster(9300140);


        var overrideStats = new net.sf.odinms.server.life.MapleMonsterStats(); 
        var map = eim.getMapFactory().getMap(mapId); 
        var xRand = Math.floor(Math.random() * 150)+25;
        if(em.getProperty("entryPossible").equals("1")==true){
            em.setProperty("entryPossible", "2");
            overrideStats.setHp(1000000); 
            overrideStats.setExp(80000); 
            overrideStats.setMp(50000); 
            mob2.setOverrideStats(overrideStats); 
            mob2.setHp(1000000);
 eim.registerMonster(mob2);
        map.spawnMonsterOnGroudBelow(mob2, new java.awt.Point(68, 209));
			var eims = eim.getPlayers().iterator();
            while (eims.hasNext()) {
                var chrs=eims.next();
				//chrs.sethyd(2);
				//chrs.dropMessage(5,"��ϲ,��ͨ��!");
			}
        }else if(em.getProperty("entryPossible").equals("2")==true){
            var iter = em.getInstances().iterator();
            while (iter.hasNext()) {
                var eim = iter.next();
                var pIter = eim.getPlayers().iterator();
                while (pIter.hasNext()) {
                var chr=pIter.next();
                    //chr.startMapEffect("[��ϲ���ɹ�ͨ��]", 5121008);
					//chr.sethyd(20);
					//chr.dropMessage(5,"��ϲ,��ͨ��!");
              //  em.getChannelServer().broadcastPacket(net.sf.odinms.tools.MaplePacketCreator.serverNotice(0,"��� "+chr.getName()+" ͨ����糺���ʿ��."));
             
                }
            }
            
            return;
        }
       
       // map.broadcastMessage(net.sf.odinms.tools.MaplePacketCreator.serverNotice(5, "��"+em.getProperty("entryPossible")+"�׶� 糺���ʿ�� ��ʼ!!."));
	}
}

function cancelSchedule() {
}

function timeOut() {
	var iter = em.getInstances().iterator();
	while (iter.hasNext()) {
		var eim = iter.next();
		if (eim.getPlayerCount() > 0) {
			var pIter = eim.getPlayers().iterator();
			while (pIter.hasNext()) {
				playerExit(eim, pIter.next());
			}
		}
		eim.dispose();
	}
}

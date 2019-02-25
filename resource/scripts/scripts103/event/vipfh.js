var exitMap;
var instanceId;
var minPlayers = 6;
var mapId=803011200;

function init() {
	instanceId = 1;
}

function monsterValue(eim, mobId) {
	return 1;
}

function setup() {
	exitMap = em.getChannelServer().getMapFactory().getMap(803011400); // <exit>
	var instanceName = "vipfh" ;
	var eim = em.newInstance(instanceName);
	var mf = eim.getMapFactory();
	instanceId++;
	var eventTime = 10 * (6000 * 60);
	em.schedule("timeOut", eventTime);
	em.schedule("monsterstart", 6000);
	em.setProperty("entryPossible", "1");
	eim.startEventTimer(eventTime);
	
	return eim;
}

function playerEntry(eim, player) {
	var map = eim.getMapInstance(mapId);
	player.changeMap(map, map.getPortal(0));
	
}

function monsterstart() {
    var iter = em.getInstances().iterator();
	while (iter.hasNext()) {
		var eim = iter.next();
		var mob = net.sf.odinms.server.life.MapleLifeFactory.getMonster(9400419);
        var overrideStats = new net.sf.odinms.server.life.MapleMonsterStats(); 
        var map = eim.getMapFactory().getMap(mapId); 
        var xRand = Math.floor(Math.random() * 150)+25;
        overrideStats.setHp(10000000); 
        overrideStats.setExp(10000); 
        overrideStats.setMp(50000); 
        mob.setOverrideStats(overrideStats); 
        mob.setHp(10000000);
        eim.registerMonster(mob);
        map.spawnMonsterOnGroudBelow(mob, new java.awt.Point(1795, 276));
        map.broadcastMessage(net.sf.odinms.tools.MaplePacketCreator.serverNotice(5, "糺���ʿ��Ҫ�� ��ʼ! ��������BOSSһ����һ������!"));
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
		var mob2 = net.sf.odinms.server.life.MapleLifeFactory.getMonster(9400420);

var mob3 = net.sf.odinms.server.life.MapleLifeFactory.getMonster(9400421);
var mob4 = net.sf.odinms.server.life.MapleLifeFactory.getMonster(9400422);
var mob5 = net.sf.odinms.server.life.MapleLifeFactory.getMonster(9400423);
        var overrideStats = new net.sf.odinms.server.life.MapleMonsterStats(); 
        var map = eim.getMapFactory().getMap(mapId); 
        var xRand = Math.floor(Math.random() * 150)+25;
        if(em.getProperty("entryPossible").equals("1")==true){
            em.setProperty("entryPossible", "2");
            overrideStats.setHp(30000000); 
            overrideStats.setExp(10000); 
            overrideStats.setMp(50000); 
            mob2.setOverrideStats(overrideStats); 
            mob2.setHp(30000000);
 eim.registerMonster(mob2);
        map.spawnMonsterOnGroudBelow(mob2, new java.awt.Point(1795, 276));
			var eims = eim.getPlayers().iterator();
            while (eims.hasNext()) {
                var chrs=eims.next();
				//chrs.sethyd(2);
				//chrs.dropMessage(5,"��ϲ,��ͨ��!");
			}
        }else if(em.getProperty("entryPossible").equals("2")==true){
            em.setProperty("entryPossible", "3");
            overrideStats.setHp(50000000); 
            overrideStats.setExp(10000); 
            overrideStats.setMp(50000); 
            mob3.setOverrideStats(overrideStats); 
            mob3.setHp(50000000);
 eim.registerMonster(mob3);
        map.spawnMonsterOnGroudBelow(mob3, new java.awt.Point(1795, 276));
			var eims = eim.getPlayers().iterator();
            while (eims.hasNext()) {
                var chrs=eims.next();
				//chrs.sethyd(3);
				//chrs.dropMessage(5,"��ϲ,��ͨ�أ�");
			}
        }else if(em.getProperty("entryPossible").equals("3")==true){
            em.setProperty("entryPossible", "4");
            overrideStats.setHp(100000000); 
            overrideStats.setExp(10000); 
            overrideStats.setMp(50000); 
            mob4.setOverrideStats(overrideStats); 
            mob4.setHp(100000000);
 eim.registerMonster(mob4);
        map.spawnMonsterOnGroudBelow(mob4, new java.awt.Point(1795, 276));
			var eims = eim.getPlayers().iterator();
            while (eims.hasNext()) {
                var chrs=eims.next();
				//chrs.sethyd(4);
				//chrs.dropMessage(5,"��ϲ,��ͨ��!");
			}
        }else if(em.getProperty("entryPossible").equals("4")==true){
            em.setProperty("entryPossible", "5");
            overrideStats.setHp(400000000); 
            overrideStats.setExp(100000); 
            overrideStats.setMp(50000); 
            mob5.setOverrideStats(overrideStats); 
            mob5.setHp(400000000);
 eim.registerMonster(mob5);
        map.spawnMonsterOnGroudBelow(mob5, new java.awt.Point(1795, 276));
			var eims = eim.getPlayers().iterator();
            while (eims.hasNext()) {
                var chrs=eims.next();
				//chrs.sethyd(5);
				//chrs.dropMessage(5,"��ϲ,��ͨ��!");
			}
       
     
        }else if(em.getProperty("entryPossible").equals("5")==true){
            var iter = em.getInstances().iterator();
            while (iter.hasNext()) {
                var eim = iter.next();
                var pIter = eim.getPlayers().iterator();
                while (pIter.hasNext()) {
                var chr=pIter.next();
                    //chr.startMapEffect("[��ϲ���ɹ�ͨ��]", 5121008);
					//chr.sethyd(20);
					//chr.dropMessage(5,"��ϲ,��ͨ��!");
                em.getChannelServer().broadcastPacket(net.sf.odinms.tools.MaplePacketCreator.serverNotice(0,"��� "+chr.getName()+" ͨ����糺���ʿ��."));
             
                }
            }
            
            return;
        }
       
        map.broadcastMessage(net.sf.odinms.tools.MaplePacketCreator.serverNotice(5, "��"+em.getProperty("entryPossible")+"�׶� 糺���ʿ�� ��ʼ!!."));
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

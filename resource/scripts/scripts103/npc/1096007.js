/*
 *
 *  �˽ű��ɷɷ�ð�յ��������
 * ������ҵ�ű����Ⱥ:1049548
 *
 */

importPackage(net.sf.odinms.server.maps); 
importPackage(net.sf.odinms.net.channel); 
importPackage(net.sf.odinms.tools);
importPackage(net.sf.odinms.server.life);
importPackage(java.awt);

var status = 0;

function start() 
	{
	status = -1;
	action(1, 0, 0);
	}

function action(mode, type, selection)
{
	var nextmap = cm.getC().getChannelServer().getMapFactory().getMap(280010000);
	if (mode == -1)
	{
		cm.dispose();
	}
	else if (mode == 0)
	{
		cm.sendOk("�õ����Ҫ��ս#bţ�Ƶ�����#k��ʱ������.");
		cm.dispose();
	} 
	else 
	{
	if (mode == 1)
	status++;
	else
	status--;
		
	if (status == 0)
	{	if (cm.getC().getChannel() != 2){
			cm.sendOk("   ţ�Ƶ����ӵ���սֻ����#r2#kƵ������!");
			cm.dispose();
      		}else{
			cm.sendYesNo("���Ƿ�Ҫ��ս#bţ�Ƶ�����#k��?");
		}
	}
	else if (status == 1) 
	{ 	
		var party = cm.getPlayer().getParty();		
		if (party == null || party.getLeader().getId() != cm.getPlayer().getId()) {
                    cm.sendOk("�㲻�Ƕӳ��������Ƕӳ���˵���ɣ�");
                    cm.dispose();
                }else if(cm.getBossLog("shaoling") >= 4) {
	            cm.sendOk("����,ϵͳ�޶�ÿ��ֻ����ս4��,���ǿ�н���,�ᱻϵͳ��������!");
                    cm.dispose();
		}else if(party.getMembers().size() > 2) {
	            cm.sendOk("��Ҫ 2 �����ϵ���Ӳ��ܽ��룡!");
                    cm.dispose();
		}else{			
			nextmap.resetReactors();
	    		nextmap.killAllMonsters();
			nextmap.clearMapTimer();			
			nextmap.setOnUserEnter("naozhi");
			cm.gainItem(4031052,1);
			cm.warpParty(280010000);
			cm.dispose();
		}
	}
}
}

/*
 *
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
	var nextmap = cm.getC().getChannelServer().getMapFactory().getMap(702060000);
	if (mode == -1)
	{
		cm.dispose();
	}
	else if (mode == 0)
	{
		cm.sendOk("�õ����Ҫ��ս#b�����ս���#k��ʱ������.");
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
			cm.sendOk("   �����ս���ֻ����#r2#kƵ������!");
			cm.dispose();
      		}else{
			cm.sendYesNo("���Ƿ�Ҫ��ս#b�����ս���#k��?");
		}
	}
	else if (status == 1) 
	{ 	
		var party = cm.getPlayer().getParty();		
		if (party == null || party.getLeader().getId() != cm.getPlayer().getId()) {
                    cm.sendOk("�㲻�Ƕӳ��������Ƕӳ���˵���ɣ�");
                    cm.dispose();
                }else if(cm.getBossLog("shaoling") >= 3) {
	            cm.sendOk("����,ϵͳ�޶�ÿ��ֻ����ս����,���ǿ�н���,�ᱻϵͳ��������!");
                    cm.dispose();
		}else if(party.getMembers().size() <3) {
	            cm.sendOk("��Ҫ 3 �����ϵ���Ӳ��ܽ��룡!");
                    cm.dispose();
		}else{			
			nextmap.resetReactors();
	    		nextmap.killAllMonsters();
			nextmap.clearMapTimer();			
			nextmap.setOnUserEnter("shaoling");
			cm.gainItem(4031466,1);
			cm.gainItem(4001402,1);
			cm.warpParty(674030200);
cm.serverNotice("�������ս��߸���������"+ cm.getChar().getName() +"����Ȼ�������Ķ�����ս�����ս��ߣ�");
			cm.dispose();
		}
	}
}
}

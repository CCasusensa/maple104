/* ===========================================================
			ע��(qm.sendSimple\qm.itemQuantity(5420008))
	�ű�����: 		QUEST
	�ű�����:		
	�����������qm.forceCompleteQuest();
	������������qm.forceStartQuest();
=============================================================
����ʱ�䣺
������Ա����о
=============================================================
*/
importPackage(net.sf.odinms.client);


var a = -1;

function end(mode, type, selection) {//������
	if (mode == -1) {
		qm.dispose();
	} else {
		if (mode == 1)
			a++;
		else
			a--;
			if(a == -1){
				qm.sendOk("������ѡ������һ�㲻��ʲô���¡�")
				qm.dispose();
			}else if (a == 0) {
				qm.sendYesNo("лл����ôˬ��ؽ��ܡ�������ľ�����˼�������𣿻��鶷ʦ��Ȼ��ǿ����Ҳ���Ѳ������ڽ�ս������ͬʱ������������Զ���Ĺ������ڲٿط���Ҫ��ܸߡ�����������ϣ������ϸ�������֮���ٻش��ҡ�")
			} else if (a == 1){
				qm.changeJob(MapleJob.getById(3200));
				/*var statup = new java.util.ArrayList();
				var p = qm.getPlayer();
				var totAp = p.getRemainingAp() + p.getStr() + p.getDex() + p.getInt() + p.getLuk();		
				p.setStr(4);
				p.setDex(4);
				p.setInt(4);
				p.setLuk(4);
				p.setRemainingAp (totAp - 16);
				statup.add(new net.sf.odinms.tools.Pair(MapleStat.STR, java.lang.Integer.valueOf(4)));
				statup.add(new net.sf.odinms.tools.Pair(MapleStat.DEX, java.lang.Integer.valueOf(4)));
				statup.add(new net.sf.odinms.tools.Pair(MapleStat.LUK, java.lang.Integer.valueOf(4)));
				statup.add(new net.sf.odinms.tools.Pair(MapleStat.INT, java.lang.Integer.valueOf(4)));
				statup.add(new net.sf.odinms.tools.Pair(MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(p.getRemainingAp())));
				qm.getC().getSession().write (net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
				*/
                qm.gainItem(1142242,1);//�ر�γ�����
              
			   qm.forceCompleteQuest();
				qm.sendOk("���������ܺã���ӭ����ʽ��Ϊ�����ߡ������ڿ�ʼ������ǻ��鶷ʦ�ˡ�ϣ������������ʥ�ĳ��ȣ��ֿ���ħ��ʦ��")
			}else if (a == 2){
				qm.sendOk("����������ᵽ���鶷ʦ�Ļ�������������ɫ֮��Ļ��ɡ����Դ����ڿ�ʼ����Ҫ���Ұ����Ρ����������ҽ����ر�γ̵�ѧ�����ǺǺǡ�������˼�ɣ��ҵ��ر�γ̻������������õĻ��鶷ʦ��")
			} else if (a == 3){
				// qm.startPopMessage(cm.getPlayer().getId(), "�����<����γ�����>�ƺš�");
				 qm.dispose();
		}//status
	}//mode
}//function

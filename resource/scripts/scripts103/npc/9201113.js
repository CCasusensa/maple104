/* ===========================================================
			ע�� itemQuantity()
	�ű�����: 		NPC
	���ڵ�ͼ:		�����ļ�̨���
	�ű�����:		����Զ����
=============================================================
���ű�Դ��������������Ϊ��������֮�á�����Ȩ������ϵ���ǣ����ǽ��ڵ�һʱ��ɾ����
*/

var a = 0;
var selects = -1;

function start() {
	a = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (mode == 1)
			a++;
		else
			a--;
			if (a == -1){
				cm.dispose();
			}else if (a == 0) {
				cm.sendSimple("ͨ����ʥ���ҵ���ս��Ҫ��ʼ�ˣ�#b\r\n#L0# ����Զ���ӡ�\r\n#L1# �鿴�ؿ����̡�")
			}else if (a == 1) {
				if (selection == 0){
				var em = cm.getEventManager("RedQuest");
				 if (em == null) {
					cm.sendOk("�����嵥Ϊ�գ�����ϵ����Ա��");
					cm.safeDispose();
					return;
	    		 }
				 var squadAvailability = cm.getSquadAvailability("RedQuest");// �õ�����Զ��������
				 if (squadAvailability == -1) {
					//a = 1;
					cm.sendYesNo("���ڿ��Բ���ľ���Զ���ӣ������ΪԶ���Ӷӳ���");
				 } else if (squadAvailability == 1) {
					var type = cm.isSquadLeader("RedQuest");// �õ�����Զ���Ӷӳ�
					if (type == -1) {
		    		cm.sendOk("�Ѿ����������롣");
		    		cm.safeDispose();
					} else if (type == 0) {
			var memberType = cm.isSquadMember("RedQuest"); // �õ�����Զ���ӳ�Ա����
		    if (memberType == 2) {
			cm.sendOk("��Զ���ӵ��Ʋ�������");
			cm.safeDispose();
		    } else if (memberType == 1) {
			a = 4;
 			cm.sendSimple("����������ʲô��\r\n#b#L0#�鿴Զ���ӳ�Ա��#l \r\n#b#L1#����Զ���ӡ�#l \r\n#b#L2#�˳�Զ���ӡ�#l");
		    } else if (memberType == -1) {
			cm.sendOk("Զ����Ա�Ѿ��ﵽ30�������Ժ����ԡ�");
			cm.safeDispose();
		    } else {
			a = 4;
			 cm.sendSimple("����������ʲô��\r\n#b#L0#�鿴Զ���ӳ�Ա��#l \r\n#b#L1#����Զ���ӡ�#l \r\n#b#L2#�˳�Զ���ӡ�#l");
		    }
					} else { // Is leader
		   	 a = 9;
			 cm.sendSimple("����������ʲô��\r\n#b#L0#�鿴Զ�����顣#l \r\n#b#L1#�Ʋ�Զ�����顣#l \r\n#r#L3#�����ͼ��#l");
					}
			   } else {
				cm.sendOk("�����Ѿ��Ѿ���ʼ�ˣ��㲻�ܽ�ȥ��");
				cm.safeDispose();
			   }
				}else if (selection == 1){
					cm.sendOk("�ؿ����������766��̳����ð�յ���̳��")
					cm.dispose();
				}//selection
			}else if (a == 2){
				if (mode == 1) {
				cm.registerSquad("RedQuest", 5, " �Ѿ���Ϊ��Զ���Ӷӳ�������������Զ���ӣ������´򿪶Ի��������Զ���ӡ�");
				cm.sendOk("���Ѿ���Ϊ��Զ���Ӷӳ�����������5���ӣ���ȴ���Ա�ǵ����롣");
	    		} else {
				cm.sendOk("���º��ҶԻ�����������������Զ���ӡ�")
	    		}
	    		cm.safeDispose();
			}else if (a == 5){
				  if (selection == 0) {
		if (!cm.getSquadList("RedQuest", 0)) {
		    cm.sendOk("����δ֪�Ĵ��󣬲���ʧ�ܡ�");
		    cm.safeDispose();
		} else {
		    cm.dispose();
		}
	    } else if (selection == 1) { // join
		var ba = cm.addMember("RedQuest", true);
		if (ba == 2) {
		    cm.sendOk("Զ����Ա�Ѿ��ﵽ30�������Ժ����ԡ�");
		    cm.safeDispose();
		} else if (ba == 1) {
		    cm.sendOk("�������Զ���ӳɹ�����Ⱥ�ӳ�ָʾ��");
		    cm.safeDispose();
		} else {
		    cm.sendOk("���Ѿ��μ���Զ���ӣ���Ⱥ�ӳ�ָʾ��");
		    cm.safeDispose();
		}
	    } else {// withdraw
		var baa = cm.addMember("RedQuest", false);
		if (baa == 1) {
		    cm.sendOk("�Ʋ�ָ���ĳ�Ա�ɹ���");
		    cm.safeDispose();
		} else {
		    cm.sendOk("��û�вμ�Զ���ӡ�");
		    cm.safeDispose();
		}
	    }
			}else if (a == 10){
				 if (selection == 0) {
		if (!cm.getSquadList("RedQuest", 0)) {
		    cm.sendOk("����δ֪�Ĵ��󣬲���ʧ�ܡ�");
		}
		cm.safeDispose();
	    } else if (selection == 1) {
		a = 10;
		if (!cm.getSquadList("RedQuest", 1)) {
		    cm.sendOk("����δ֪�Ĵ��󣬲���ʧ�ܡ�");
		}
		cm.safeDispose();
	    } else if (selection == 2) {
		a = 11;
		if (!cm.getSquadList("RedQuest", 2)) {
		    cm.sendOk("����δ֪�Ĵ��󣬲���ʧ�ܡ�");
		}
		cm.safeDispose();
	    } else if (selection == 3) { // get insode
		if (cm.getSquad("RedQuest") != null) {
		    var dd = cm.getEventManager("RedQuest");
		    dd.startInstance(cm.getSquad("RedQuest"), cm.getMap());
			cm.setBossLog("RedQuest")
		    cm.dispose();
		} else {
		    cm.sendOk("����δ֪�Ĵ��󣬲���ʧ�ܡ�");
		    cm.safeDispose();
		}
	    }
			}else if (a == 11){
				 cm.banMember("RedQuest", selection);
	   			 cm.dispose();
			}else if (a == 12){
				 if (selection != -1) {
				cm.acceptMember("RedQuest", selection);
	   			 }
	    cm.dispose();
	}//a
}
}
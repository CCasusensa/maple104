/* ===========================================================
			ע�� itemQuantity()
	�ű�����: 		NPC
	���ڵ�ͼ:		�����ļ�̨���
	�ű�����:		����Զ����
=============================================================
���ű�Դ��������������Ϊ��������֮�á�����Ȩ������ϵ���ǣ����ǽ��ڵ�һʱ��ɾ����
*/

var a = 0;

var books = Array(
Array(2290126,5),
Array(2290127,5),
Array(2290130,5),
Array(2290131,5),
Array(2290132,5),
Array(2290133,5),
Array(2290134,5),
Array(2290135,5),
Array(2290136,5),
Array(2290137,5),
Array(2290196,5),
Array(2290144,5),
Array(2290145,5),
Array(2290018,5),
Array(2290019,5),
Array(2290020,5),
Array(2290021,5),
Array(2290022,5),
Array(2290023,5),
Array(2290204,5),
Array(2290205,5),
Array(2290230,5),
Array(2290231,5),
Array(2290236,5),
Array(2290026,5),
Array(2290027,5),
Array(2290052,5),
Array(2290053,5),
Array(2290056,5),
Array(2290057,5),
Array(2290058,5),
Array(2290059,5),
Array(2290060,5),
Array(2290061,5),
Array(2290092,5),
Array(2290092,5),
Array(2290076,5),
Array(2290077,5),
Array(2290078,5),
Array(2290079,5),
Array(2290048,5),
Array(2290049,5)
);//������ ��Ӱ˫�� (����� 20 ˫���籩 20)
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
				if (cm.getMapId() == 802000821){
					a = 12;
					cm.sendYesNo("�����뿪������")
				}else{
				cm.sendSimple("��սŷ������Ҫ��ʼ�ˣ�#b\r\n#L0# ������ʼ��ս ŷ������\r\n#L1# ʹ��ŷ������ʱɳ�һ����ֲᡣ")
				}
			}else if (a == 1) {
				if (selection == 0){
				var em = cm.getEventManager("Tokyo3Battle");
				 if (em == null) {
					cm.sendOk("�����嵥Ϊ�գ�����ϵ����Ա��");
					cm.safeDispose();
					return;
	    		 }
				 var squadAvailability = cm.getSquadAvailability("TOKYO3");// �õ�����Զ��������
				 if (squadAvailability == -1) {
					//a = 1;
					cm.sendYesNo("���ڿ�������ŷ������Զ���ӣ������ΪԶ���Ӷӳ���");
				 } else if (squadAvailability == 1) {
					var type = cm.isSquadLeader("TOKYO3");// �õ�����Զ���Ӷӳ�
					if (type == -1) {
		    		cm.sendOk("�Ѿ����������롣");
		    		cm.safeDispose();
					} else if (type == 0) {
			var memberType = cm.isSquadMember("TOKYO3"); // �õ�����Զ���ӳ�Ա����
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
					var Text = "��ѡ����Ҫ�һ������ֲ�"
					 var selStr = "������ʲô��#b";
			for (var i = 0; i < books.length; i++) {
						selStr += "\r\n#L" + i + "##z" + books[i][0] + "# ŷ������ʱɳ "+books[i][1]+"����)#l";
			}
			a = 13;
			cm.sendSimple(selStr);
				}//selection
			}else if (a == 2){
				if (mode == 1) {
				cm.registerSquad("TOKYO3", 5, " �Ѿ���Ϊ��Զ���Ӷӳ�������������Զ���ӣ������´򿪶Ի��������Զ���ӡ�");
				cm.sendOk("���Ѿ���Ϊ��Զ���Ӷӳ�����������5���ӣ���ȴ���Ա�ǵ����롣");
	    		} else {
				cm.sendOk("���º��ҶԻ�����������������Զ���ӡ�")
	    		}
	    		cm.safeDispose();
			}else if (a == 5){
				  if (selection == 0) {
		if (!cm.getSquadList("TOKYO3", 0)) {
		    cm.sendOk("����δ֪�Ĵ��󣬲���ʧ�ܡ�");
		    cm.safeDispose();
		} else {
		    cm.dispose();
		}
	    } else if (selection == 1) { // join
		var ba = cm.addMember("TOKYO3", true);
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
		var baa = cm.addMember("TOKYO3", false);
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
		if (!cm.getSquadList("TOKYO3", 0)) {
		    cm.sendOk("����δ֪�Ĵ��󣬲���ʧ�ܡ�");
		}
		cm.safeDispose();
	    } else if (selection == 1) {
		a = 10;
		if (!cm.getSquadList("TOKYO3", 1)) {
		    cm.sendOk("����δ֪�Ĵ��󣬲���ʧ�ܡ�");
		}
		cm.safeDispose();
	    } else if (selection == 2) {
		a = 11;
		if (!cm.getSquadList("TOKYO3", 2)) {
		    cm.sendOk("����δ֪�Ĵ��󣬲���ʧ�ܡ�");
		}
		cm.safeDispose();
	    } else if (selection == 3) { // get insode
		if (cm.getSquad("TOKYO3") != null) {
			if (cm.getSquad("TOKYO3").getSquadSize() < 1){
					cm.sendOk("Զ������Ҫ3�����ϲ��ܽ��롣")
					cm.dispose();
			}else{
		    var dd = cm.getEventManager("Tokyo3Battle");
		    dd.startInstance(cm.getSquad("TOKYO3"), cm.getMap());
			cm.setBossLog("TOKYO3")
		    cm.dispose();
			}
		} else {
		    cm.sendOk("����δ֪�Ĵ��󣬲���ʧ�ܡ�");
		    cm.safeDispose();
		}
	    }
			}else if (a == 11){
				 cm.banMember("TOKYO3", selection);
	   			 cm.dispose();
			}else if (a == 12){
				 if (selection != -1) {
				cm.acceptMember("TOKYO3", selection);
	   			 }
	    cm.dispose();
			}else if (a == 13){
				cm.warp(802000822)
				cm.dispose();
			}else if (a == 14){
				selects = selection;
				if (cm.haveItem(4032518,books[selects][1])){
					if(cm.gainItem(books[selects][0],1)){
					cm.gainItem(4032518,-books[selects][1])
					cm.sendOk("�һ��ɹ��ˡ�")
					}
				}else{
					cm.sendOk("��û���㹻 ŷ������ʱɳ�����ܶһ����ֲᡣ")
				}
				cm.dispose();
	}//a
}
}

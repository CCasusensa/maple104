var a = 0;

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
			}else
				if (a == 0) {
					if(mode == 1){
cm.sendSimple("������ĺ�𽹬�ſڡ�������ʲô��\r\n#b#L0#�����ȥ��𽹬��#l\r\n#L1#������ҹ��ڽ�����Ϣ��#l\r\n#L2#���Ǻؿ͡�����ȥ����á�#l\r\n#L3#������ҹ�������˵����#l\r\n#L4#�����ȥ���ǵ#l\r\n#L5#����ؼҡ�#l")
					}else{
						cm.sendNext("��...�����ٲ���ȥ��û�취�������Ժ������ɡ�")
						cm.dispose();
					}
				}else if ( a == 1){
					if (selection == 0){//�����ȥ��𽹬
						 if (cm.getParty() == null || !cm.isLeader()) {
                	 cm.sendOk("ֻ����ӳ�������˵�ſ������������ǽ�ȥ���������жӳ�������˵�ɡ�");
                	 cm.dispose();
						 }else{
							 cm.sendYesNo("Ŷ�����������ȥ�����𣿽�����������£�Ҫ��ȥ����Ҫ���㼸�������������������Ҫ�������������Ը����˵����")
						 }
					}else if (selection == 1){//������ҹ��ڽ�����Ϣ��
						a = 3;
						cm.sendNext("����Ƕ����˵��£����������Ҫ��һ������ɣ���һ������ô�ܽ�飿")
					}else if (selection == 2){//���Ǻؿ͡�����ȥ����á�
						a = 9;
						cm.sendNext("��Ҫȥ�������Ҫȥ����ñ���������ſ��Խ�ȥ��")
					}else if (selection == 3){//������ҹ�������˵����
						a = 11;
						cm.sendNext("�����������������ɡ�")
					}else if (selection == 4){//�����ȥ���ǵ
						a = 14;
						cm.sendNext("����ȥ���ǵ���Ҫ��ȥ��һ��Ҫ�н���ָ����������ѡ�")
					}else if (selection == 5){//����ؼҡ�
						a = 15;
						cm.sendYesNo("�����ȥ���������ȥ��������ʱ��Ҫ���ѡ�")
					}//selection
				}else if ( a == 2){
					cm.sendNext("�ã��ҿ������Ƿ�������������󣬾����㵽�����")
				}else if ( a == 3){
					var party = cm.getPlayer().getParty();
					if (!cm.getParty().getMembers().size() == 2){//�ж���ӳ�Ա�Ƿ�ﵽ2�ˡ�
					cm.sendNext("�����Ա���ܳ��������ˡ��������������˽����")
					cm.dispose();
					} else if (!cm.isLeader()) { // ���Ƕӳ�
					cm.sendOk("�� ���������Ǿ��������ӳ����ҽ����ɡ� ��");
					cm.dispose();
					}else if(cm.isMarriage(cm.getPlayer().getId())){//�鿴����Ƿ��Ѿ���顣
						cm.sendNext("���Ѿ�����˰ɡ� ���Ļ��ǲ����ٽ��ġ�")
						cm.dispose();
					}else if(PartyhaveMarried(Party)){
						cm.sendNext("�������У�#b"+party.getPartyMembers().get(i).getName()+"#k�Ѿ�������ˡ�\r\n��������ԡ�");
						cm.dispose();
					}else if(PartyhaveItems(Party) == false){//���û��ָ����Ʒ
						cm.sendNext("���Ǻ���û������ɣ����û�������ô�����أ�")
						cm.dispose();
					}else{
						cm.dispose()//�ȴ�����
					}//�жϽ������
				}else if ( a == 4){
					cm.sendNext("��λ�������������һ��Ҫ������֤����λ���������˵ı�־���������˽�ָ��ͬʱ��λ����������˽�ָ�����ܽ�ȥ��顣")
				}else if ( a == 5){
					cm.sendNext("Ҫ��黹��Ҫ����������������һ������λӦ����ӣ���Ӻ���ӳ�������˵������һ���ȥ��")
				}else if ( a == 6){
					cm.sendNext("�ڶ�������������Ӧ�ô��ý���������Ҫ������ʥ�ĺ��һ��Ҫ���á�����׼������")
				}else if ( a == 7){
					cm.sendNext("Ҫ�����·�����������ʿ:#b#b#t1050121##k��#b#b#t1050122##k��#b#b#t1050113##k��Ůʿ:#b#t1051129##k��#b#t1051130##k��#b#t1051114##k������#b#t1050121##k��#b#t1051129##k��#b#t1050113##k��#b#t1051114##k,��Щ������ð���̳ǿ��Թ���#b#t1050122##k��#b#t1051130##k�����Ǳ���λ����Ů��������")
				}else if ( a == 8){
					cm.sendNext("������Ҫ���һ��Ҫ�����ǼǷѣ�Ҫ10���ҡ����Ǳ����Ŷ���Ǻǡ�")
				}else if ( a == 9){
					cm.sendNext("����ֻ��һ��һ�����˽�飬�����������Ҫ�ȴ����������ǽ�ȥ���ʱ���������5����֮�ڰ�������������")
					cm.dispose();
				}else if ( a == 10){
					if (cm.haveItem(4150000)){
						cm.sendNext("�����������������������ȥ����á�")
					}else{
						cm.sendNext("�����û�����ɡ�û�����ͽ���ȥ")
						cm.dispose();
					}
				}else if ( a == 11){
					cm.warp(700000200)
					cm.gainItem(4150000,-1)
					cm.dispose();
				}else if ( a == 12){
					cm.sendNext("���������飬��ȥ���ǵ���Խ�����顣�ڹ��ǵ��з���ʦ������˵�����������˵ĵܵܡ�")
				}else if ( a == 13){
					cm.sendNext("����Ҫ������ڱ����Ž���ָ������Ҫ�������Ǯ����Ϊ��鲻����ô���׵����顣����Ҫ100���ҡ�")
				}else if ( a == 14){
					if(mode == 1){
					cm.sendNext("������100���Һ��ȥ���ǵ����ʦ������㴦��������ˡ�����һ�����󣬽���ָ��ͬʱ��ʧ��")
					}else{
					cm.dispose();
					}
					cm.dispose();
				}else if ( a == 15){
					if (cm.haveItem(1112804)){//����ָ
					cm.warp(700000101)
					cm.dispose();
					}else{
						cm.sendOk("�����û�н���ָ�ɡ�û�н�ָ�ͽ���ȥ.")
						cm.dispose();
					}
				}else if ( a == 16){
					cm.warp(100000000)
					cm.dispose();				
	}//status
}
}


function PartyhaveMarried(party) {//�ж�����е�������ɫ�Ƿ��Ѿ����
	var party = cm.getPlayer().getParty();
	for(var i = 0; i < party.size();i++){
                if(party.getMembers().get(i).isMarried()){
                     return true;
                }
             
        }
        return false;
}

function PartyhaveItems(party) {//�ж�����е����н�ɫ�Ƿ��Ѿ���ָ����Ʒ��
	var party = cm.getPlayer().getParty();
	for(var i = 0; i < party.size();i++){
               if(cm.getGender() == 0){//���������
			     if(party.getMembers().get(i) && cm.haveItem(1050122)){//�����Ƿ��Ѿ�����������
				 	return true;
				 }
			   }else{
				   if(party.getMembers().get(i) && cm.haveItem(1051130)){//Ů���Ƿ��Ѿ�����������
				 	return true;
				 }
			   }
             
        }
        return false;
}
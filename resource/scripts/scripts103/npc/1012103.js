/* Natalie
	Henesys VIP Hair/Hair Color Change.
*/
var status = -1;
var beauty = 0;
var hair_Colo_new;

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 0) {
	cm.dispose();
	return;
    } else {
	status++;
    }

    if (status == 0) {
	cm.sendSimple("��ã�#h0#������#p"+cm.getNpc()+"#�� �����ӵ�� #b#t5150052##k ���� #b#t5151036##k �Ϳ��Ի���ͷ���ˡ� ��ѡ������Ҫ��#b\r\n#L0#����  #i5150052##t5150052##l\r\n#L1#Ⱦ�� #i5151036##t5151036##l");
    } else if (status == 1) {
	if (selection == 0) {
	    var hair = cm.getPlayerStat("HAIR");
	    hair_Colo_new = [];
	    beauty = 1;
	    if (cm.getPlayerStat("GENDER") == 0) {
		hair_Colo_new = [33100,33120,33160,33220,33150,33110,33200,33210,33040,33000,33050,30730,30920,30830,30780,30800];
	    } else {
		hair_Colo_new = [34210,34170,34120,34110,34150,34160,34180,34220,34200,31990,34140,34100,34010,34000,31760,34040,34050,34060,31890,31950,31940,31930,31920,31910,31890,31880,31870,31860,31850,31820,31800];
	    }
	    for (var i = 0; i < hair_Colo_new.length; i++) {
		hair_Colo_new[i] = hair_Colo_new[i] + (hair % 10);
	    }
		/*if (cm.getPlayerStat("HAIR") % 10 != 0){//����ں�ɫ��ͷ��
var currenthaircolo = Math.floor((cm.getPlayerStat("HAIR") / 10)) * 10;
cm.setAvatar(-1,currenthaircolo);
}*/
		var currenthaircolo = Math.floor((cm.getPlayerStat("HAIR") / 10)) * 10;
		//cm.setAvatar(-1,30020)
			
	    cm.sendStyle("�ҿ��Ըı���ķ���,���������ڿ�����Ư������Ϊʲô�����Ÿı�����? �������#b#t5150052##k,�ҽ������ı���ķ���,��ôѡ��һ������Ҫ���·��Ͱ�!.", hair_Colo_new,5150052);

	} else if (selection == 1) {
	    var currenthaircolo = Math.floor((cm.getPlayerStat("HAIR") / 10)) * 10;
	    hair_Colo_new = [];
	    beauty = 2;

	    for (var i = 0; i < 8; i++) {
		hair_Colo_new[i] = currenthaircolo + i;
	    }
	    cm.sendStyle("�ҿ��Ըı���ķ���,���������ڿ�����Ư������Ϊʲô�����Ÿı�����? �������#b#t5151036##k,�ҽ������ı���ķ���,��ôѡ��һ������Ҫ���·��Ͱ�!", hair_Colo_new,5151036);
	} else if (selection == 2){ 
	var currenthaircolo = Math.floor((cm.getPlayerStat("HAIR") / 10)) * 10;
		cm.sendOk(""+currenthaircolo+"");
		cm.dispose();
	}//selection
    } else if (status == 2){
	if (beauty == 1){
	    if (cm.setAvatar(5150052, hair_Colo_new[selection]) == 1) {
		cm.sendOk("�����ˣ���ô������������·��Ͱɣ�");
	    } else {
		cm.sendOk("��������û��#b#t5150052##k����ȥ�̳ǹ���һ���ɣ�");
	    }
	} else {
	    if (cm.setAvatar(5151036, hair_Colo_new[selection]) == 1) {
		cm.sendOk("����,����������̾����·�ɫ��!");
	    } else {
		cm.sendOk("��������û��#b#t5151036##k����ȥ�̳ǹ���һ���ɣ�");
	    }
	}
	cm.dispose();
    }
}

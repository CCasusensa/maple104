function start() {
	var text ="���.����ר��ͳ�Ʊ���������Ϣ��,���Ƿ��ϰ�����?\r\n";
	text +="#L0#�鿴�ս���#g[��������]#l#k\r\n";
	text +="#L1#�鿴�ս���#d[��������]#k\r\n";
	text +="#L2#�鿴�ս���#r[ת������]#k\r\n";
	text +="#L3#�鿴�ս���#r[��������]#k";
	cm.sendSimpleS (text,2);
	    
}
function action(mode, type, selection) {
	cm.dispose();
	if  (selection == 0) {
        	var a = "���������� #fEffect/SetItemInfoEff/1/8#\r\n#e#r#fEffect/ItemEff/1112811/0/0#�ս���ȫ����һ�������#fEffect/ItemEff/1112811/0/0##n#k\r\n#fEffect/ItemEff/1112312/0/3#"; 
        	a+=cm.rqMing();        
        	cm.sendOkS(a,2);
        	cm.dispose();
    	}else if  (selection == 1) {
        	var a = "���������� #fEffect/SetItemInfoEff/1/8#\r\n#e#r#fEffect/ItemEff/1112811/0/0#�ս���ȫ����һ����#fEffect/ItemEff/1112811/0/0##n#k\r\n#fEffect/ItemEff/1112312/0/3#"; 
        	a+=cm.guildMing();        
        	cm.sendOkS(a,2);
        	cm.dispose();
    	}else if  (selection == 2) {
        	var a = "���������� #fEffect/SetItemInfoEff/1/8#\r\n#e#r#fEffect/ItemEff/1112811/0/0#�ս���ȫ����һת�����#fEffect/ItemEff/1112811/0/0##n#k\r\n#fEffect/ItemEff/1112312/0/3#"; 
        	a+=cm.paiMing();        
        	cm.sendOkS(a,2);
        	cm.dispose();
    	}else if  (selection == 3) {
        	var a = "���������� #fEffect/SetItemInfoEff/1/8#\r\n#e#r#fEffect/ItemEff/1112312/0/3#�ս���ȫ����һ��������#fEffect/ItemEff/1112312/0/3##n#k\r\n"; 
        	a+=cm.marriageMing();        
        	cm.sendOkS(a,2);
        	cm.dispose();
	}
}

function start() {
	var text ="\r\n";
	text +="#L0#�鿴�ս���#g��������#l#k\r\n";
	text +="#L1#�鿴�ս���#d[��������]#k\r\n";
	text +="#L2#�鿴�ս���#r[ת������]#k";
	cm.sendSimpleS (text,2);
	    
}
function action(mode, type, selection) {
	cm.dispose();
	if  (selection == 0) {
        	var a = "#v4032386#"; 
        	a+=cm.rqMing();        
        	cm.sendOk(a);
        	cm.dispose();
    	}else if  (selection == 1) {
        	var a = "#v4032386#"; 
        	a+=cm.guildMing();        
        	cm.sendOk(a);
        	cm.dispose();
    	}else if  (selection == 2) {
        	var a = "#v4032386#"; 
        	a+=cm.paiMing();        
        	cm.sendOk(a);
        	cm.dispose();
	}
}

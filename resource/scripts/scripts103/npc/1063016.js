function start() {
var ico11 = "#fEffect/CharacterEff/1112903/0/0#";
	if (cm.getChar().getMapId() == 200101500){
	    if(cm.countMonster()<0){
		 cm.sendSimple ("#");
	    }else{
   		 cm.sendSimple ("");
	    }
	} else {
	    cm.sendOk("#r��ǰ��\r\n����������������������������\r\n#b����������������������������\r\n#k����������������������������")
	}
}
function action(mode, type, selection) {
cm.dispose();
if (selection == 0) {
        if (!cm.haveItem(4032529,1)) {
        cm.sendOk("#");
	cm.dispose();}


}
}
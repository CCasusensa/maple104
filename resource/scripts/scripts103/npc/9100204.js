var myDate = new Date(); // ʵ����һ��Date��ı������� 
var status = 0;
function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (mode == 0 && status == 0) {
			
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
	   var text = "#r#fUI/UIWindow.img/QuestIcon/3/0#\r\n"
        text += "������ÿ���ʺ�ֻ����ȡһ��!\r\n\r\n"; 


 text += "#L1##e��Ҫ��ȡ���������#n#l\r\n\r\n"; 
  text += "#L2##e��Ҫ��ȡ���������#n#l\r\n\r\n"; 
  text += "#L4##e��Ҫ��ȡ���������#n#l\r\n\r\n"; 
            
                       

			cm.sendSimple(text);
			
		} else if (status == 1) {

			if (selection == 3){

if (cm.getChar().getPresent() == 0 &&cm.getChar().getLevel() >=1 ) {

if (cm.getChar().getGender() == 0 ) {

var text = " #fUI/UIWindow.img/QuestIcon/3/0#\r\n�������#v5150040#X��,#v1142263#X��,#v1003192#X��,#v1040154#X��,#v1060145#X��,#v1072516#X��\r\n\r\n"

	    text += "#L0#��Ҫ��ȡ�������\r\n\r\n"; 

cm.sendSimple(text);
}else if (cm.getChar().getGender() == 1 ) {

var text = "#fUI/UIWindow.img/QuestIcon/3/0#\r\n�������#v5150040#X��,#v1142263#X��,#v1003193#X��,#v1041156#X��,#v1061166#X��,#v1072516#X��\r\n\r\n"

	   text += "#L1#��Ҫ��ȡ�������\r\n\r\n"; 
cm.sendSimple(text);

}


} else {
			cm.sendOk("#e���Ѿ���ȡ����!");
			cm.dispose();
		       }
	  }else if (selection == 4){


if (cm.getChar().getPresent() == 3 &&cm.getChar().getLevel() >=30 ) {
  cm.gainItem(1032080, 1);

  cm.gainItem(1132036, 1);
  cm.gainItem(1122081, 1);
  cm.gainItem(1112435, 1);


 cm.getChar().setPresent(4);
	cm.getChar().saveToDB(true);

    cm.getPlayer().startMapEffect("��ȡ�ɹ�!ף����Ϸ���!", 5120004);
cm.dispose();


}else{ 
  cm.getPlayer().dropMessage(1, "���Ѿ���ȡ����,����û����ȡ��һ�����!����û�дﵽ30��!");
cm.dispose();
}


}else if (selection == 1){

if (cm.getChar().getPresent() == 1 &&cm.getChar().getLevel() >=1 ) {
  cm.gainItem(1142265, 1);


 cm.getChar().setPresent(2);
	cm.getChar().saveToDB(true);

   
    cm.getPlayer().startMapEffect("��ȡ����2000���õ��,ף����Ϸ���!", 5120004);
cm.getPlayer().modifyCSPoints(1,+2000);
cm.dispose();


}else{ 
  cm.getPlayer().dropMessage(1, "���Ѿ���ȡ����,����û����ȡ��һ�����!");
cm.dispose();
}

}else if (selection == 2){

if (cm.getChar().getPresent() == 2 &&cm.getChar().getLevel() >=1 ) {
  cm.gainItem(2040807, 7);
  cm.gainItem(1082149, 1);

 cm.getChar().setPresent(3);
	cm.getChar().saveToDB(true);

    cm.getPlayer().startMapEffect("��ȡ�ɹ�!ף����Ϸ���!", 5120004);
cm.dispose();


}else{ 
  cm.getPlayer().dropMessage(1, "���Ѿ���ȡ����,����û����ȡ��һ�����!");
cm.dispose();
}

}		
}else if (status == 2) {
 if(selection == 0){


 cm.gainItem(5150040, 1);

 cm.gainItem(1142263, 1);
 cm.gainItem(1003192, 1);
 cm.gainItem(1040154, 1);
 cm.gainItem(1060145, 1);

 cm.gainItem(1072516, 1);
cm.getChar().setPresent(1);
	cm.getChar().saveToDB(true);

    cm.getPlayer().startMapEffect("��ȡ�ɹ�,ף����Ϸ���!", 5120004);
cm.dispose();




}else if(selection == 1){


 cm.gainItem(5150040, 1);

 cm.gainItem(1142263, 1);
 cm.gainItem(1003193, 1);
 cm.gainItem(1041156, 1);
 cm.gainItem(1061166, 1);
 cm.gainItem(1072516, 1);

cm.getChar().setPresent(1);
	cm.getChar().saveToDB(true);

    cm.getPlayer().startMapEffect("��ȡ�ɹ�,ף����Ϸ���!", 5120004);
cm.dispose();





}else if(selection == 2){


if (cm.itemQuantity(4000019) >= 100) {
   cm.gainItem(4000019, -100); 
cm.getChar().SetShuoHua(3);
cm.sendOk("��ϲ�����óɹ�!!");	
cm.dispose();
}else{ 
  cm.getPlayer().dropMessage(1, "���ϲ���!");
cm.dispose();
}

}else if(selection == 3){
cm.getChar().SetShuoHua(0);
cm.sendOk("��ϲ��ȡ���ɹ�!!");	
cm.dispose();
}
else if(selection == 4){
if (cm.itemQuantity(4000019) >= 500) {
cm.gainItem(4000019, -500); 
cm.getChar().SetSD(1);
cm.sendOk("��ϲ�㿪���ɹ�!!������ֻ������رմ˹��ܣ���Ȼ�����þͲ������");	
cm.dispose();
}else{ 
  cm.getPlayer().dropMessage(1, "���ϲ���!");
cm.dispose();
}
}else if(selection == 5){
cm.getChar().SetSD(0);
cm.sendOk("��ϲ��ȡ���ɹ�!!��ֻ���ߵ���ұ���ȡ��Ŷ����Ȼ�����þͲ������");	
cm.dispose();
}
}



	}
}	
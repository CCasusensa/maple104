function start() {
if(cm.getChar().getMapId() == 910130101) {
	    if(cm.countMonster()>10000){
		 cm.sendSimple ("������������С���������������������̸��,лл~! \r\n");
	    }else{
   		 cm.sendSimple ("      #v4000464#���÷��Ľ�����??!#v4000464#\r\n\r\n        #L0##b��Ҫ�߽ݾ�#l        #r#L1#�����г�#l\r\n\r\n\r\n   ��ɸ�������Ի��ħ�������Ƴ���ħ��ɨ������\r\n  \r\n  #v1992006##v1992006##v1992006##v1992006##v1992006##v1992006##v1992006##v1992006##v1992006#");
	    }
	} else {
	    cm.sendOk("...")
	}
}
function action(mode, type, selection) {
cm.dispose();
if (selection == 0	) {
cm.sendSimple ("#rû�нݾ�����#k��Ŭ����~!\r\n#b                            ����");
cm.dispose();}
if (selection == 1	) {
cm.warp(910000000,0);
cm.dispose();}
}
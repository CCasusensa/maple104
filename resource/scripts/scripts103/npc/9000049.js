function start() {
if(cm.getChar().getMapId() == 9100016) {
	    if(cm.countMonster()>=1){
		 cm.sendSimple ("��������8����׼��������?ֻ���ٻ�һֻ��~! \r\n");
	    }else{
   		 cm.sendSimple ("��������8����׼��������?!\r\n#r9���Ժ��ҽ�����һֻ��è#v4000464#\r\n\r\n\r\n       #L0##b��Ҫ��ս#l        #r#L1#�����г�#l\r\n\r\n\r\n��������\r\n\r\n#v1002544##v1002699##v1002839##v1003391##v1003439##v1003509##v1003510##v1003516##v1042231##v1042235##v1052448##v1052449##v1112136##v1112930##v1112928##v1102391##v1092108##v3010313##v3010361##v3010362#");
	    }
	} else {
	    cm.sendOk("�����")
	}
}
function action(mode, type, selection) {
cm.dispose();
if (selection == 0	) {
cm.summonMob(9400900,2000000000, 40000, 1); 
cm.dispose();}
if (selection == 1	) {
cm.warp(910000000,0);
cm.dispose();}
}

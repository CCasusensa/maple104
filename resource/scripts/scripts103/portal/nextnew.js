function enter(pi) {
	if (pi.getMapId() == 970000001){
if (pi.haveItem(4000019,3)){//���ӵ����������ţ��
pi.openNpc(9900005);
return false;
}else{
pi.getPlayer().dropMessage("�����ռ�������ţ��֮����ܽ�����һ�ء�");
return false;
}
	}else if (pi.getMapId() == 970000002){
if (pi.haveItem(4000000,3)){//���ӵ����������ţ��
pi.openNpc(9900005);
return false;
}else{
pi.getPlayer().dropMessage("�����ռ�������ɫ��ţ��֮����ܽ�����һ�ء�");
return false;
}		
	}else if (pi.getMapId() == 970000003){
if (pi.haveItem(4000016,3)){//���ӵ����������ţ��
pi.openNpc(9900005);
return false;
}else{
pi.getPlayer().dropMessage("�����ռ�������ɫ��ţ��֮����ܽ�����һ�ء�");
return false;
}		
	}//getMapId
}
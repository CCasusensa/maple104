/*
*	����ɳ���ҩ
*/
function start() {
	if(im.getChar().getLevel()<200){
		im.getChar().levelUp();
		im.gainItem(2430218,-1);
		im.dispose();
	}else{
		im.sendOk("�Բ���,200�����ϲ�����ʹ�ô���Ʒ!");
	}
	
}
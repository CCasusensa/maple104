function start() {
	
	var rand = Math.floor(Math.random() * 44);
	var item;
	var num;
	var name;
	
	if (rand <3){
		item = 2043003;
		num = 1;
		name = "���۾�";
	}else if (rand < 1){
		item = 2044019
		num = 1;
		name = "VIPѫ��"
	}else if (rand == 2){
		item = 2044019
		num = 1;
		name = "�������"
	}else if (rand == 3){
		item = 2043103
		num = 1;
		name = "���յ�׹"
	}else if (rand == 4){
		item = 2043203
		num = 1;
		name = "��Ӱ˫�����"
	}else if (rand == 5){
		item = 2043303
		num = 1;
		name = "ʥ��¹����ñ"
	}else if (rand == 11){
		item = 2043703
		num = 1;
		name = "�Ϲ����Ž�ָLV49"
	}else if (rand == 12){
		item = 2043803
		num = 1;
		name = "��Ӱ˫�����ܾ���"
	}else if (rand == 6){
		item = 2044003
		num = 1;
		name = "���ѵ�ð��֮��(սʿ)"
	}else if (rand == 7){
		item = 2044203
		num = 1;
		name = "���ѵ�ð��֮��(ħ��ʦ)"
	}else if (rand == 8){
		item = 2044303
		num = 1;
		name = "���ѵ�ð��֮��(������)"
	}else if (rand == 9){
		item = 2044403
		num = 1;
		name = "���ѵ�ð��֮��(����)"
	}else if (rand == 10){
		item = 2044503
		num = 1;
		name = "���ѵ�ð��֮��(����)"
	}else if (rand == 11){
		item = 2044603
		num = 1;
		name = "���۾�ר���������"
	}else if (rand == 12){
		item = 2044815
		num = 1;
		name = "���۾�ר���������"
	}else if (rand == 13){
		item = 2044908
		num = 1;
		name = "���۾�ר���������"
	}else if (rand == 14){
		item = 2340000
		num = 1;
		name = "���۾�ר���������"
	}else if (rand == 15){
		item = 1032142
		num = 1;
		name = "���۾�ר���������"
	}else if (rand == 16){
		item = 1122197
		num = 1;
		name = "���۾�ר���������"
	}else if (rand == 17){
		item = 1132152
		num = 1;
		name = "���۾�ר���������"
	}else if (rand == 18){
		item = 1002961
		num = 1;
		name = "���۾�ר���������"
	}else if (rand == 19){
		item = 1003540
		num = 1;
		name = "���۾�ר���������"
	}else if (rand == 20){
		item = 1082432
		num = 1;
		name = "���۾�ר���������"
	}else if (rand == 21){
		item = 4002002
		num = 5;
		name = "���۾�ר���������"
	}else if (rand == 22){
		item = 4002002
		num = 10;
		name = "���۾�ר���������"
	}else{
		item = 4002002
		num = 5;
		name = "���۾�ר���������"
	}//rand
	var ii = Packages.server.MapleItemInformationProvider.getInstance();	
	im.gainItem(item,+num); //����������
	im.gainItem(2430483,-1); //����1��ʹ�õ��������
	im.sendOk("��ȡ�� #v"+item+"# "+num+"��")
	im.worldMessage("[��ϵͳ]����ϲ���<" + im.getChar().getName() + ">�򿪽��������ӻ����"+ii.getName(item)+"" );
	im.dispose(); 
}
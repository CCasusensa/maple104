importPackage(net.sf.odinms.client);
importPackage(net.sf.odinms.tools);
importPackage(net.sf.odinms.server.maps);
importPackage(net.sf.odinms.client.messages);
importPackage(net.sf.odinms.net.channel);
importPackage(net.sf.odinms.server);


var status = 0;

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (status == 0 && mode == 0) {
			cm.dispose();
			return;
		} else if (status == 2 && mode == 0) {
			cm.dispose();
		}
		if (mode == 1)
			status++;
		else
			status--;
if (status == 0) {
cm.sendSimple("#r��ѡ������ְҵ\r\n#rע�⣺����ֻ��ѧϰ3-4ת�ļ��ܣ�����3ת�Ժ����ѧϰ\r\n#d#L19#���#L20#Ⱥ��#L18#˫��\n#L17#ս��\r\n\r\n#L13#����ʿ\n#L14#����ʿ\n#L16#ҹ����\n#L15#����ʹ��#b\r\n\r\n#L1#��ʿ/Ӣ��\n#L2#��ʿ/ʥ��ʿ\n#L3#����ʿ/����ʿ\r\n\r\n#L4#��˾/����\n#L5#��/ħ��ʦ\n#L6#����/ħ��ʦ\r\n\r\b#b#L7#����/����\n#L8#����/������\n#L9#��ʿ/��Ӱ��\r\n\r\n#b#L11#��/����\n#L10#����/���п�\n#L12#��ʿ/���ӳ�")
} else if (status == 1) {//ѡ���
//=====================��ʿ��Ӣ��
if (selection == 1){
if (cm.getJob().getId() == 111 || cm.getJob().getId() == 112){
//��ʿ
cm.teachSkill(1110000,20,20);//ħ���ָ�
cm.teachSkill(1110001,20,20);//�ܷ���ͨ
cm.teachSkill(1111002,30,30);//��������
cm.teachSkill(1111003,30,30);//����֮��
cm.teachSkill(1111004,30,20);//����֮��
cm.teachSkill(1111005,30,30);//������
cm.teachSkill(1111006,30,30);//������
cm.teachSkill(1111007,20,20);//��������
cm.teachSkill(1111008,30,30);//������
//Ӣ��
cm.teachSkill(1120003,30,30);//���׶���
cm.teachSkill(1120004,30,30);//������˹
cm.teachSkill(1120005,30,30);//������
cm.teachSkill(1121000,30,30);//ð�յ���ʿ
cm.teachSkill(1121001,30,30);//��ʯ
cm.teachSkill(1121002,30,30);//����̩ɽ
cm.teachSkill(1121006,30,30);//ͻ��
cm.teachSkill(1121008,30,30);//�������
//cm.teachSkill(1121009,30,30);//Ӣ��֮��
cm.teachSkill(1121010,30,30);//��������
cm.teachSkill(1121011,5,5);//ʿ����־
cm.sendOk("�Ѿ��ɹ�ѧϰ����!");
			cm.dispose();
}else{
			cm.sendOk("��ǰְҵ������ѧϰҪ��")
			cm.dispose();
}


//=====================��ʿ��ʥ��ʿ
}else if (selection == 2){
if (cm.getJob().getId() == 121 || cm.getJob().getId() == 122){
//��ʿ
cm.teachSkill(1210000,20,20);//ħ���ָ�
cm.teachSkill(1210001,20,20);//�ܷ���ͨ
cm.teachSkill(1211002,30,30);//���Թ���
cm.teachSkill(1211003,30,30);//����֮��
cm.teachSkill(1211004,30,30);//�������
cm.teachSkill(1211005,30,30);//����֮��
cm.teachSkill(1211006,30,30);//��������
cm.teachSkill(1211007,30,30);//�׵�֮������
cm.teachSkill(1211008,30,30);//�׵�֮��������
cm.teachSkill(1211009,20,20);//ħ����Ч
//ʥ��ʿ
cm.teachSkill(1220005,30,30);//������˹
cm.teachSkill(1220006,30,30);//������
cm.teachSkill(1220010,10,10);//����һ��
cm.teachSkill(1221000,30,30);//ð�յ���ʿ
cm.teachSkill(1221001,30,30);//��ʯ
cm.teachSkill(1221002,30,30);//����̩ɽ
cm.teachSkill(1221003,20,20);//ʥ��֮��
cm.teachSkill(1221004,20,20);//ʥ��֮��
cm.teachSkill(1221007,30,30);//ͻ��
cm.teachSkill(1221009,30,30);//��������
cm.teachSkill(1221011,30,30);//ʥ��
cm.teachSkill(1221012,5,5);//��ʿ����־
cm.sendOk("�Ѿ��ɹ�ѧϰ����!");
			cm.dispose();
}else{
			cm.sendOk("��ǰְҵ������ѧϰҪ��")
			cm.dispose();
}


//=====================����ʿ������ʿ
}else if (selection == 3){
if (cm.getJob().getId() == 131 || cm.getJob().getId() == 132){
//����ʿ
cm.teachSkill(1300000,20,20);//��׼ǹ
cm.teachSkill(1300001,20,20);//��׼ì
cm.teachSkill(1300002,30,30);//�ռ�ǹ
cm.teachSkill(1300003,30,30);//�ռ�ì
cm.teachSkill(1301004,20,20);//����ǹ
cm.teachSkill(1301005,20,20);//����ì
cm.teachSkill(1301006,20,20);//���޷���
cm.teachSkill(1301007,30,30);//��ʥ֮��
cm.teachSkill(1310000,20,20);//ħ������
cm.teachSkill(1311001,30,30);//ǹ����
cm.teachSkill(1311002,30,30);//ì����
cm.teachSkill(1311003,30,30);//��˫ǹ
cm.teachSkill(1311004,30,30);//��˫ì
cm.teachSkill(1311005,30,30);//��֮�׼�
cm.teachSkill(1311006,30,30);//������
cm.teachSkill(1311007,20,20);//��������
cm.teachSkill(1311008,20,20);//��֮��
//����ʿ
cm.teachSkill(1320005,30,30);//������˹
cm.teachSkill(1320006,30,30);//��������
cm.teachSkill(1320008,25,25);//�������
cm.teachSkill(1320009,25,25);//���ף��
cm.teachSkill(1321000,30,30);//ð�յ���ʿ
cm.teachSkill(1321001,30,30);//��ʯ
cm.teachSkill(1321002,30,30);//����̩ɽ
cm.teachSkill(1321003,30,30);//ͻ��
cm.teachSkill(1321007,10,10);//�������
cm.teachSkill(1321010,5,5);//��ʿ����־
cm.sendOk("�Ѿ��ɹ�ѧϰ����!");
			cm.dispose();
}else{
			cm.sendOk("��ǰְҵ������ѧϰҪ��")
			cm.dispose();
}
//=====================��˾������
}else if (selection == 4){
if (cm.getJob().getId() == 231 || cm.getJob().getId() == 232){
//��˾
cm.teachSkill(2310000,20,20);//ħ������
cm.teachSkill(2311001,20,20);//����
cm.teachSkill(2311002,20,20);//ʱ����
cm.teachSkill(2311003,30,30);//��ʥ��
cm.teachSkill(2311004,30,30);//ʥ��
cm.teachSkill(2311005,30,30);//�׶���
cm.teachSkill(2311006,30,30);//ʥ���ٻ�
//����
cm.teachSkill(2321000,30,30);//ð�յ���ʿ
cm.teachSkill(2321001,30,30);//����֮��
cm.teachSkill(2321002,30,30);//ħ������
cm.teachSkill(2321003,30,30);//ǿ��ʥ��
cm.teachSkill(2321004,30,30);//�ռ�����
cm.teachSkill(2321005,30,30);//ʥ��֮��
cm.teachSkill(2321006,10,10);//������
cm.teachSkill(2321007,30,30);//��â�ɼ�
cm.teachSkill(2321008,30,30);//ʥ������
cm.teachSkill(2321009,5,5);//��ʿ����־
cm.sendOk("�Ѿ��ɹ�ѧϰ����!");
			cm.dispose();
}else{
			cm.sendOk("��ǰְҵ������ѧϰҪ��")
			cm.dispose();
}


//=====================��ʦ�𶾡�ħ��ʦ��
}else if (selection == 5){
if (cm.getJob().getId() == 211 || cm.getJob().getId() == 212){
//��ʦ��
cm.teachSkill(2110000,20,20);//�𶾿���
cm.teachSkill(2110001,30,30);//ħ������
cm.teachSkill(2111002,30,30);//ĩ������
cm.teachSkill(2111003,30,30);//��������
cm.teachSkill(2111004,20,20);//��ӡ��
cm.teachSkill(2111005,20,20);//ħ����
cm.teachSkill(2111006,30,30);//�𶾺ϻ�
//ħ��ʦ��
cm.teachSkill(2121000,30,30);//ð�յ���ʿ
cm.teachSkill(2121001,30,30);//����֮��
cm.teachSkill(2121002,30,30);//ħ������
cm.teachSkill(2121003,30,30);//�����
cm.teachSkill(2121004,30,30);//�ռ�����
cm.teachSkill(2121005,30,30);//����ħ��
cm.teachSkill(2121006,30,30);//��������
cm.teachSkill(2121007,30,30);//�콵����
cm.teachSkill(2121008,5,5);//��ʿ����־
cm.sendOk("�Ѿ��ɹ�ѧϰ����!");
			cm.dispose();
}else{
			cm.sendOk("��ǰְҵ������ѧϰҪ��")
			cm.dispose();
}
//=====================��ʦ���ס�ħ��ʦ����
}else if (selection == 6){
if (cm.getJob().getId() == 221 || cm.getJob().getId() == 222){
//��ʦ����
cm.teachSkill(2210000,20,20);//���׿���
cm.teachSkill(2210001,30,30);//ħ������
cm.teachSkill(2211002,30,30);//������
cm.teachSkill(2211003,30,30);//����ǹ
cm.teachSkill(2211004,20,20);//��ӡ��
cm.teachSkill(2211005,20,20);//ħ����
cm.teachSkill(2211006,30,30);//���׺ϻ�
//ħ��ʦ����
cm.teachSkill(2221000,30,30);//ð�յ���ʿ
cm.teachSkill(2221001,30,30);//����֮��
cm.teachSkill(2221002,30,30);//ħ������
cm.teachSkill(2221003,30,30);//������
cm.teachSkill(2221004,30,30);//�ռ�����
cm.teachSkill(2221005,30,30);//��ħ��
cm.teachSkill(2221006,30,30);//��������
cm.teachSkill(2221007,30,30);//��˪����
cm.teachSkill(2221008,5,5);//��ʿ����־
cm.sendOk("�Ѿ��ɹ�ѧϰ����!");
			cm.dispose();
}else{
			cm.sendOk("��ǰְҵ������ѧϰҪ��")
			cm.dispose();
}


//=====================����������
}else if (selection == 7){
if (cm.getJob().getId() == 321 || cm.getJob().getId() == 322){
//����
cm.teachSkill(3210000,20,20);//���粽
cm.teachSkill(3210001,20,20);//�ᴩ��
cm.teachSkill(3211002,20,20);//������
cm.teachSkill(3211003,30,30);//������
cm.teachSkill(3211004,30,30);//������
cm.teachSkill(3211005,30,30);//��ӥ�ٻ�
cm.teachSkill(3211006,30,30);//��ɨ��
//����
cm.teachSkill(3220004,30,30);//������
cm.teachSkill(3221000,30,30);//ð�յ���ʿ
cm.teachSkill(3221001,30,30);//��͸��
cm.teachSkill(3221002,30,30);//���۾���
cm.teachSkill(3221003,30,30);//���������
cm.teachSkill(3221005,30,30);//�����
cm.teachSkill(3221006,30,30);//���ۼ�
cm.teachSkill(3221007,30,30);//һ��Ҫ����
cm.teachSkill(3221008,5,5);//��ʿ����־
cm.sendOk("�Ѿ��ɹ�ѧϰ����!");
			cm.dispose();
}else{
			cm.sendOk("��ǰְҵ������ѧϰҪ��")
			cm.dispose();
}


//=====================���֡�������
}else if (selection == 8){
if (cm.getJob().getId() == 311 || cm.getJob().getId() == 312){
//����
cm.teachSkill(3110000,20,20);//���粽
cm.teachSkill(3110001,20,20);//�ᴩ��
cm.teachSkill(3111002,20,20);//������
cm.teachSkill(3111003,30,30);//�һ��
cm.teachSkill(3111004,30,30);//����
cm.teachSkill(3111005,30,30);//��ӥ�ٻ�
cm.teachSkill(3111006,30,30);//��ɨ��
//������
cm.teachSkill(3120005,30,30);//�����
cm.teachSkill(3121000,30,30);//ð�յ���ʿ
cm.teachSkill(3121002,30,30);//���۾���
cm.teachSkill(3121003,30,30);//���������
cm.teachSkill(3121004,30,30);//�������
cm.teachSkill(3121006,30,30);//����
cm.teachSkill(3121007,30,30);//���˼�
cm.teachSkill(3121008,30,30);//���о���
cm.teachSkill(3121009,5,5);//��ʿ����־
cm.sendOk("�Ѿ��ɹ�ѧϰ����!");
			cm.dispose();
}else{
			cm.sendOk("��ǰְҵ������ѧϰҪ��")
			cm.dispose();
}


//=====================��Ӱ�ˡ���ʿ
}else if (selection == 9){
if (cm.getJob().getId() == 411 || cm.getJob().getId() == 412){
//��Ӱ��
cm.teachSkill(4110000,20,20);//ҩ����ͨ
cm.teachSkill(4111001,20,20);//�۲���
cm.teachSkill(4111002,30,30);//Ӱ����
cm.teachSkill(4111003,20,20);//Ӱ����
cm.teachSkill(4111004,30,30);//��Ǯ����
cm.teachSkill(4111005,30,30);//���ط���
cm.teachSkill(4111006,20,20);//������
//��ʿ
cm.teachSkill(4120002,30,30);//�ٶ���
cm.teachSkill(4120005,30,30);//�����ö�Һ
cm.teachSkill(4121000,30,30);//ð�յ���ʿ
cm.teachSkill(4121003,30,30);//����
cm.teachSkill(4121004,30,30);//���߷���
cm.teachSkill(4121006,30,30);//��������
cm.teachSkill(4121007,30,30);//�����������
cm.teachSkill(4121008,30,30);//���߳��
cm.teachSkill(3221008,5,5);//��ʿ����־
cm.sendOk("�Ѿ��ɹ�ѧϰ����!");
			cm.dispose();
}else{
			cm.sendOk("��ǰְҵ������ѧϰҪ��")
			cm.dispose();
}


//=====================���������п�
}else if (selection == 10){
if (cm.getJob().getId() == 421 || cm.getJob().getId() == 422){
//���п�
cm.teachSkill(4210000,20,20);//�ܷ���ͨ
cm.teachSkill(4211001,30,30);//ת����
cm.teachSkill(4211002,30,30);//��Ҷն
cm.teachSkill(4211003,20,20);//������
cm.teachSkill(4211004,30,30);//������
cm.teachSkill(4211005,20,20);//��Ǯ����
cm.teachSkill(4211006,30,30);//��Ǯը��
//����
cm.teachSkill(4220002,30,30);//�ٶ���
cm.teachSkill(4220005,30,30);//�����ö�Һ
cm.teachSkill(4221000,30,30);//ð�յ���ʿ
cm.teachSkill(4221001,30,30);//��ɱ
cm.teachSkill(4221003,30,30);//����
cm.teachSkill(4221004,30,30);//���߷���
cm.teachSkill(4221006,30,30);//��Ļ��
cm.teachSkill(4221007,30,30);//һ��˫��
cm.teachSkill(3221008,5,5);//��ʿ����־
cm.sendOk("�Ѿ��ɹ�ѧϰ����!");
			cm.dispose();
}else{
			cm.sendOk("��ǰְҵ������ѧϰҪ��")
			cm.dispose();
}

/*
//=====================���������
}else if (selection == 11){
if (cm.getJob().getId() == 521 || cm.getJob().getId() == 522){
//���
cm.teachSkill(5210000,20,20);//������ɱ
cm.teachSkill(5211001,30,30);//������̨
cm.teachSkill(5211002,30,30);//��Ÿ��Ϯ
cm.teachSkill(5211004,30,30);//��������
cm.teachSkill(5211005,30,30);//��������
cm.teachSkill(5211006,30,30);//����
//����
cm.teachSkill(5220001,30,30);//����ǿ��
cm.teachSkill(5220002,20,20);//����������̨
cm.teachSkill(5220003,30,30);//��̺ʽ��Ϯ
cm.teachSkill(5220004,30,30);//�����籩
cm.teachSkill(5220006,10,10);//��װ
cm.teachSkill(5220007,30,30);//������
cm.teachSkill(5220008,30,30);//�����ڻ�
cm.teachSkill(5220009,20,20);//�������
cm.teachSkill(5220010,5,5);//��ʿ����־
cm.sendOk("�Ѿ��ɹ�ѧϰ����!");
			cm.dispose();
}else{
			cm.sendOk("��ǰְҵ������ѧϰҪ��")
			cm.dispose();
}
*/
}else if (selection == 11){
cm.sendOk("��ְҵ��BUG����ʱ�رգ�");
			cm.dispose();


//=====================��ʿ�����ӳ�
}else if (selection == 12){
if (cm.getJob().getId() == 511 || cm.getJob().getId() == 512){
//��ʿ
cm.teachSkill(5110000,20,20);//�Ի󹥻�
cm.teachSkill(5110001,40,40);//�������
cm.teachSkill(5111002,30,30);//��������
cm.teachSkill(5111004,20,20);//������ת
cm.teachSkill(5111005,20,20);//���˱���
cm.teachSkill(5111006,30,30);//��ʯ�һ�
//���ӳ�
cm.teachSkill(5121000,30,30);//ð�յ���ʿ
cm.teachSkill(5121001,30,30);//Ǳ����Ԩ
cm.teachSkill(5121002,30,30);//������
cm.teachSkill(5121003,30,30);//��������
cm.teachSkill(5121004,30,30);//����ָ
cm.teachSkill(5121005,30,30);//����
cm.teachSkill(5121007,30,30);//����ȭ
cm.teachSkill(5121009,20,20);//��������
cm.teachSkill(5121010,30,30);//�Ż�����
cm.teachSkill(5121008,5,5);//��ʿ����־
cm.sendOk("�Ѿ��ɹ�ѧϰ����!");
			cm.dispose();
}else{
			cm.sendOk("��ǰְҵ������ѧϰҪ��")
			cm.dispose();
}


//=====================����ʿ
}else if (selection == 13){
if (cm.getJob().getId() == 1111){
//����ʿ
cm.teachSkill(11110000,20,20);//ħ���ָ�
cm.teachSkill(11111001,20,20);//��������
cm.teachSkill(11111002,20,20);//�ֻ�
cm.teachSkill(11111003,20,20);//����
cm.teachSkill(11111004,30,30);//�������
cm.teachSkill(11110005,20,20);//���׶���
cm.teachSkill(11111006,20,20);//���ͻ��
cm.teachSkill(11111007,20,20);//�������
cm.sendOk("�Ѿ��ɹ�ѧϰ����!");
			cm.dispose();
}else{
			cm.sendOk("��ǰְҵ������ѧϰҪ��")
			cm.dispose();
}


//=====================����ʿ
}else if (selection == 14){
if (cm.getJob().getId() == 1211){
//����ʿ
cm.teachSkill(12110000,20,20);//ħ������
cm.teachSkill(12110001,20,20);//ħ������
cm.teachSkill(12111002,20,20);//��ӡ��
cm.teachSkill(12111003,20,20);//�콵����
cm.teachSkill(12111004,20,20);//��ħ��
cm.teachSkill(12111005,30,30);//����������
cm.teachSkill(12111006,30,30);//��籩
cm.sendOk("�Ѿ��ɹ�ѧϰ����!");
			cm.dispose();
}else{
			cm.sendOk("��ǰְҵ������ѧϰҪ��")
			cm.dispose();
}


//=====================����ʹ��
}else if (selection == 15){
if (cm.getJob().getId() == 1311){
//����ʹ��
cm.teachSkill(13111000,20,20);//����
cm.teachSkill(13111001,30,30);//��ɨ��
cm.teachSkill(13111002,20,20);//�������
cm.teachSkill(13110003,20,20);//�����
cm.teachSkill(13111004,20,20);//������
cm.teachSkill(13111005,10,10);//������
cm.teachSkill(13111006,20,20);//���鴩Խ
cm.teachSkill(13111007,20,20);//����ɨ��
cm.sendOk("�Ѿ��ɹ�ѧϰ����!");
			cm.dispose();
}else{
			cm.sendOk("��ǰְҵ������ѧϰҪ��")
			cm.dispose();
}


//=====================ҹ����
}else if (selection == 16){
if (cm.getJob().getId() == 1411){
//ҹ����
cm.teachSkill(14111000,30,30);//Ӱ����
cm.teachSkill(14111001,20,20);//Ӱ����
cm.teachSkill(14111002,30,30);//���ط���
cm.teachSkill(14110003,20,20);//ҩ����ͨ
cm.teachSkill(14110004,20,20);//�����ö�Һ
cm.teachSkill(14111005,20,20);//�����������
cm.teachSkill(14111006,30,30);//��ը��
cm.sendOk("�Ѿ��ɹ�ѧϰ����!");
			cm.dispose();
}else{
			cm.sendOk("��ǰְҵ������ѧϰҪ��")
			cm.dispose();
}


}else if (selection == 17){
if (cm.getJob().getId() == 2100 || cm.getJob().getId() == 2110 || cm.getJob().getId() == 2111 || cm.getJob().getId() == 2112){
cm.teachSkill(21000000,10,10);
cm.teachSkill(21001001,15,15);
cm.teachSkill(21000002,20,20);
cm.teachSkill(21001003,20,20);
cm.teachSkill(21100000,20,20);
cm.teachSkill(21100002,30,30);
cm.teachSkill(21101003,20,20);
cm.teachSkill(21100004,20,20);
cm.teachSkill(21100005,20,20);
cm.teachSkill(21110000,20,20);
cm.teachSkill(21111001,20,20);
cm.teachSkill(21110002,20,20);
cm.teachSkill(21110003,30,30);
cm.teachSkill(21110004,30,30);
cm.teachSkill(21111005,20,20);
cm.teachSkill(21110006,20,20);
cm.teachSkill(21121000,30,30);
cm.teachSkill(21120001,30,30);
cm.teachSkill(21120002,30,30);
cm.teachSkill(21121003,20,20);
cm.teachSkill(21120004,30,30);
cm.teachSkill(21120005,30,30);
cm.teachSkill(21120006,30,30);
cm.teachSkill(21120007,30,30);
cm.sendOk("�Ѿ��ɹ�Ϊ�����ս����!");
cm.dispose();
}else{
			cm.sendOk("�Բ����㲻��ս�񣬲���ʹ�ô˹��ܡ�")
			cm.dispose();
}


}else if(selection == 18){
if (cm.getJob().getId() == 430 || cm.getJob().getId() == 431 || cm.getJob().getId() == 432|| cm.getJob().getId() == 433 || cm.getJob().getId() == 434){
cm.teachSkill(4300000,10,20);
cm.teachSkill(4301001,10,10);
cm.teachSkill(4301002,20,20);
cm.teachSkill(4310000,20,20);
cm.teachSkill(4311001,20,20);
cm.teachSkill(4311002,20,20);
cm.teachSkill(4311003,20,20);
cm.teachSkill(4321000,20,20);
cm.teachSkill(4321001,20,20);
cm.teachSkill(4321002,20,20);
cm.teachSkill(4321003,20,20);
cm.teachSkill(4331000,10,10);
cm.teachSkill(4330001,20,20);
cm.teachSkill(4331002,30,30);
cm.teachSkill(4331003,20,20);
cm.teachSkill(4331004,20,20);
cm.teachSkill(4331005,20,20);
cm.teachSkill(4341000,30,30);
cm.teachSkill(4340001,30,30);
cm.teachSkill(4341002,30,30);
cm.teachSkill(4341003,30,30);
cm.teachSkill(4341004,30,30);
cm.teachSkill(4341005,30,30);
cm.teachSkill(4341006,30,30);
cm.teachSkill(4341008,5,5);
cm.sendOk("�Ѿ��ɹ�Ϊ�������Ӱ˫������!");
cm.dispose();
		}else{
			cm.sendOk("�Բ����㲻�ǰ�Ӱ˫��������ʹ�ô˹��ܡ�")
			cm.dispose();
}

}else if(selection == 19){
cm.teachSkill(1004,1,1);
cm.teachSkill(10001004,1,1);
cm.teachSkill(20001004,1,1);
cm.teachSkill(20011004,1,1);
cm.sendOk("�Ѿ��ɹ�Ϊ�������輼��!");
cm.dispose();

}else if(selection == 20){
cm.teachSkill(1004,1,1);
cm.teachSkill(10001004,1,1);
cm.teachSkill(20001004,1,1);
cm.teachSkill(20011004,1,1);
cm.sendOk("�Ѿ��ɹ�Ϊ�����Ⱥ�輼��!");
cm.dispose();

}//selection		
		}
	}
}

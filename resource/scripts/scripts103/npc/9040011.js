importPackage(net.sf.odinms.client);

function start() {
	status = -1;
	
	action(1, 0, 0);
}

function action(mode, type, selection) {
            if (mode == -1) {
                cm.dispose();
            }
            else {
                if (status >= 0 && mode == 0) {
                
			cm.sendOk("#e�õ�,����������Ҫ��ʲô,�һ������Ϊ������..");
			cm.dispose();
			return;                    
                }
                if (mode == 1) {
			status++;
		}
		else {
			status--;
		}
		        if (status == 0) {
cm.sendSimple("����Ҫ����һ��#v4001374##k\r\n#L28#ף������#b[1��2��]#k#r[Hot]#k\r\n#L2##b[��������GM����]#L4#[ȫ����������GM����]\r\n#L7#[Ь������GM����]#L8#[Ь����ԾGM����]\r\n#L9#[��������GM����]#L11#[����ħ��GM����]\r\n#L13#[��������ʯ]#L14#[���ֽ�����GM����]\r\n#L15#[���ָ�����GM����]#L16#[���ֶ�������GM����]\r\n#L17#[�̽�����GM����]n#L18#[����ħ��GM����]\r\n#L19#[����ħ��GM����]#L20#[˫�ֽ�����GM����]\r\n#L21#[˫�ָ�����GM����]#L22#[˫�ֶ�������GM����]\r\n#L23#[ǹ����GM����]#L24#[ì����GM����]\r\n#L25#[������GM����]#L26#[�󹥻�GM����]\r\n#L27#[ȭ�׹���GM����]#L29#[���׹���GM����]\r\n#L30#[��ǹ����GM����]");
}else if (status == 1) {
if (selection == 1) {
if (cm.haveItem(4001374) == false){
cm.sendOk("��Ǹ��û����Ҫ�Ķ���,���ܶһ�"); cm.dispose();
}else{
	cm.gainItem(4001374,-1);
cm.gainItem(2040006,1);
cm.sendOk("����,��ȡ�ɹ�,��ȥ�Ҽ�Ʒװ����");
cm.dispose(); }
}else if (selection == 2) {
if (cm.haveItem(4001374) == false){
cm.sendOk("��Ǹ��û����Ҫ�Ķ���,���ܶһ�"); cm.dispose();
}else{
	cm.gainItem(4001374,-1);
cm.gainItem(2040303,1);
cm.sendOk("����,��ȡ�ɹ�,��ȥ�Ҽ�Ʒװ����");
cm.dispose(); }
}else if (selection == 3) {
if (cm.haveItem(4001374) == false){
cm.sendOk("��Ǹ��û����Ҫ�Ķ���,���ܶһ�"); cm.dispose();
}else{
	cm.gainItem(4001374,-1);
cm.gainItem(2040403,1);
cm.sendOk("����,��ȡ�ɹ�,��ȥ�Ҽ�Ʒװ����");
cm.dispose(); }
}else if (selection == 4) {
if (cm.haveItem(4001374) == false){
cm.sendOk("��Ǹ��û����Ҫ�Ķ���,���ܶһ�"); cm.dispose();
}else{
	cm.gainItem(4001374,-1);
cm.gainItem(2040506,1);
cm.sendOk("����,��ȡ�ɹ�,��ȥ�Ҽ�Ʒװ����");
cm.dispose(); }
}else if (selection == 5) {
if (cm.haveItem(4001374) == false){
cm.sendOk("��Ǹ��û����Ҫ�Ķ���,���ܶһ�"); cm.dispose();
}else{
	cm.gainItem(4001374,-1);
cm.gainItem(2040507,1);
cm.sendOk("����,��ȡ�ɹ�,��ȥ�Ҽ�Ʒװ����");
cm.dispose(); }
}else if (selection == 6) {
if (cm.haveItem(4001374) == false){
cm.sendOk("��Ǹ��û����Ҫ�Ķ���,���ܶһ�"); cm.dispose();
}else{
	cm.gainItem(4001374,-1);
cm.gainItem(2040603,1);
cm.sendOk("����,��ȡ�ɹ�,��ȥ�Ҽ�Ʒװ����");
cm.dispose(); }
}else if (selection == 7) {
if (cm.haveItem(4001374) == false){
cm.sendOk("��Ǹ��û����Ҫ�Ķ���,���ܶһ�"); cm.dispose();
}else{
	cm.gainItem(4001374,-1);
cm.gainItem(2040709,1);
cm.sendOk("����,��ȡ�ɹ�,��ȥ�Ҽ�Ʒװ����");
cm.dispose(); }
}else if (selection == 8) {
if (cm.haveItem(4001374) == false){
cm.sendOk("��Ǹ��û����Ҫ�Ķ���,���ܶһ�"); cm.dispose();
}else{
	cm.gainItem(4001374,-1);
cm.gainItem(2040710,1);
cm.sendOk("����,��ȡ�ɹ�,��ȥ�Ҽ�Ʒװ����");
cm.dispose(); }
}else if (selection == 9) {
if (cm.haveItem(4001374) == false){
cm.sendOk("��Ǹ��û����Ҫ�Ķ���,���ܶһ�"); cm.dispose();
}else{
	cm.gainItem(4001374,-1);
cm.gainItem(2040806,1);
cm.sendOk("����,��ȡ�ɹ�,��ȥ�Ҽ�Ʒװ����");
cm.dispose(); }
}else if (selection == 10) {
if (cm.haveItem(4001374) == false){
cm.sendOk("��Ǹ��û����Ҫ�Ķ���,���ܶһ�"); cm.dispose();
}else{
	cm.gainItem(4001374,-1);
cm.gainItem(2040903,1);
cm.sendOk("����,��ȡ�ɹ�,��ȥ�Ҽ�Ʒװ����");
cm.dispose(); }
}else if (selection == 11) {
if (cm.haveItem(4001374) == false){
cm.sendOk("��Ǹ��û����Ҫ�Ķ���,���ܶһ�"); cm.dispose();
}else{
	cm.gainItem(4001374,-1);
cm.gainItem(2041024,1);
cm.sendOk("����,��ȡ�ɹ�,��ȥ�Ҽ�Ʒװ����");
cm.dispose(); }
}else if (selection == 12) {
if (cm.haveItem(4001374) == false){
cm.sendOk("��Ǹ��û����Ҫ�Ķ���,���ܶһ�"); cm.dispose();
}else{
	cm.gainItem(4001374,-1);
cm.gainItem(2041025,1);
cm.sendOk("����,��ȡ�ɹ�,��ȥ�Ҽ�Ʒװ����");
cm.dispose(); }
}else if (selection == 13) {
if (cm.haveItem(4001374) == false){
cm.sendOk("��Ǹ��û����Ҫ�Ķ���,���ܶһ�"); cm.dispose();
}else{
	cm.gainItem(4001374,-1);
cm.gainItem(2041200,1);
cm.sendOk("����,��ȡ�ɹ�,��ȥ�Ҽ�Ʒװ����");
cm.dispose(); }
}else if (selection == 14) {
if (cm.haveItem(4001374) == false){
cm.sendOk("��Ǹ��û����Ҫ�Ķ���,���ܶһ�"); cm.dispose();
}else{
	cm.gainItem(4001374,-1);
cm.gainItem(2043003,1);
cm.sendOk("����,��ȡ�ɹ�,��ȥ�Ҽ�Ʒװ����");
cm.dispose(); }
}else if (selection == 15) {
if (cm.haveItem(4001374) == false){
cm.sendOk("��Ǹ��û����Ҫ�Ķ���,���ܶһ�"); cm.dispose();
}else{
	cm.gainItem(4001374,-1);
cm.gainItem(2043103,1);
cm.sendOk("����,��ȡ�ɹ�,��ȥ�Ҽ�Ʒװ����");
cm.dispose(); }
}else if (selection == 16) {
if (cm.haveItem(4001374) == false){
cm.sendOk("��Ǹ��û����Ҫ�Ķ���,���ܶһ�"); cm.dispose();
}else{
	cm.gainItem(4001374,-1);
cm.gainItem(2043203,1);
cm.sendOk("����,��ȡ�ɹ�,��ȥ�Ҽ�Ʒװ����");
cm.dispose(); }
}else if (selection == 17) {
if (cm.haveItem(4001374) == false){
cm.sendOk("��Ǹ��û����Ҫ�Ķ���,���ܶһ�"); cm.dispose();
}else{
	cm.gainItem(4001374,-1);
cm.gainItem(2043303,1);
cm.sendOk("����,��ȡ�ɹ�,��ȥ�Ҽ�Ʒװ����");
cm.dispose(); }
}else if (selection == 18) {
if (cm.haveItem(4001374) == false){
cm.sendOk("��Ǹ��û����Ҫ�Ķ���,���ܶһ�"); cm.dispose();
}else{
	cm.gainItem(4001374,-1);
cm.gainItem(2043703,1);
cm.sendOk("����,��ȡ�ɹ�,��ȥ�Ҽ�Ʒװ����");
cm.dispose(); }
}else if (selection == 19) {
if (cm.haveItem(4001374) == false){
cm.sendOk("��Ǹ��û����Ҫ�Ķ���,���ܶһ�"); cm.dispose();
}else{
	cm.gainItem(4001374,-1);
cm.gainItem(2043803,1);
cm.sendOk("����,��ȡ�ɹ�,��ȥ�Ҽ�Ʒװ����");
cm.dispose(); }
}else if (selection == 20) {
if (cm.haveItem(4001374) == false){
cm.sendOk("��Ǹ��û����Ҫ�Ķ���,���ܶһ�"); cm.dispose();
}else{
	cm.gainItem(4001374,-1);
cm.gainItem(2044003,1);
cm.sendOk("����,��ȡ�ɹ�,��ȥ�Ҽ�Ʒװ����");
cm.dispose(); }
}else if (selection == 21) {
if (cm.haveItem(4001374) == false){
cm.sendOk("��Ǹ��û����Ҫ�Ķ���,���ܶһ�"); cm.dispose();
}else{
	cm.gainItem(4001374,-1);
cm.gainItem(2044103,1);
cm.sendOk("����,��ȡ�ɹ�,��ȥ�Ҽ�Ʒװ����");
cm.dispose(); }
}else if (selection == 22) {
if (cm.haveItem(4001374) == false){
cm.sendOk("��Ǹ��û����Ҫ�Ķ���,���ܶһ�"); cm.dispose();
}else{
	cm.gainItem(4001374,-1);
cm.gainItem(2044203,1);
cm.sendOk("����,��ȡ�ɹ�,��ȥ�Ҽ�Ʒװ����");
cm.dispose(); }
}else if (selection == 23) {
if (cm.haveItem(4001374) == false){
cm.sendOk("��Ǹ��û����Ҫ�Ķ���,���ܶһ�"); cm.dispose();
}else{
	cm.gainItem(4001374,-1);
cm.gainItem(2044303,1);
cm.sendOk("����,��ȡ�ɹ�,��ȥ�Ҽ�Ʒװ����");
cm.dispose(); }
}else if (selection == 24) {
if (cm.haveItem(4001374) == false){
cm.sendOk("��Ǹ��û����Ҫ�Ķ���,���ܶһ�"); cm.dispose();
}else{
	cm.gainItem(4001374,-1);
cm.gainItem(2044403,1);
cm.sendOk("����,��ȡ�ɹ�,��ȥ�Ҽ�Ʒװ����");
cm.dispose(); }
}else if (selection == 25) {
if (cm.haveItem(4001374) == false){
cm.sendOk("��Ǹ��û����Ҫ�Ķ���,���ܶһ�"); cm.dispose();
}else{
	cm.gainItem(4001374,-1);
cm.gainItem(2044503,1);
cm.sendOk("����,��ȡ�ɹ�,��ȥ�Ҽ�Ʒװ����");
cm.dispose(); }
}else if (selection == 26) {
if (cm.haveItem(4001374) == false){
cm.sendOk("��Ǹ��û����Ҫ�Ķ���,���ܶһ�"); cm.dispose();
}else{
	cm.gainItem(4001374,-1);
cm.gainItem(2044603,1);
cm.sendOk("����,��ȡ�ɹ�,��ȥ�Ҽ�Ʒװ����");
cm.dispose(); }
}else if (selection == 27) {
if (cm.haveItem(4001374) == false){
cm.sendOk("��Ǹ��û����Ҫ�Ķ���,���ܶһ�"); cm.dispose();
}else{
	cm.gainItem(4001374,-1);
cm.gainItem(2044703,1);
cm.sendOk("����,��ȡ�ɹ�,��ȥ�Ҽ�Ʒװ����");
cm.dispose(); }
}else if (selection == 28) {
if (cm.haveItem(4001374) == false){
cm.sendOk("��Ǹ��û����Ҫ�Ķ���,���ܶһ�"); cm.dispose();
}else{
	cm.gainItem(4001374,-1);
cm.gainItem(2340000,2);
cm.sendOk("����,��ȡ�ɹ�,��ȥ�Ҽ�Ʒװ����");
cm.dispose(); }
}else if (selection == 29) {
if (cm.haveItem(4001374) == false){
cm.sendOk("��Ǹ��û����Ҫ�Ķ���,���ܶһ�"); cm.dispose();
}else{
	cm.gainItem(4001374,-1);
cm.gainItem(2040807,1);
cm.sendOk("����,��ȡ�ɹ�,��ȥ�Ҽ�Ʒװ����");
cm.dispose(); }
}else if (selection == 30) {
if (cm.haveItem(4001374) == false){
cm.sendOk("��Ǹ��û����Ҫ�Ķ���,���ܶһ�"); cm.dispose();
}else{
	cm.gainItem(4001374,-1);
cm.gainItem(2044908,1);
cm.sendOk("����,��ȡ�ɹ�,��ȥ�Ҽ�Ʒװ����");
cm.dispose(); }
}
}
}
}
importPackage(net.sf.cherry.client);

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
cm.sendSimple("#e#b�������һö7�������#v4310002#,�������һö7��������,���һ�ȡ���µ��κ�һöGM��,�Ҿ�ɹ���100%\r\n#rǱ�ܺ�ǿ�����᲻��100%�ɹ�#k\r\n\r\n\r\n\r\n#L30##v2043404#��������(�Ǳس�)\r\n#L29##v2049401#Ǳ�ܸ��Ӿ���\r\n#L28##v2049301#װ��ǿ������\r\n#L1##v2040006#ͷ�������������\r\n#L2##v2040303#���������������\r\n#L3##v2040403#���·����������\r\n#L4##v2040506#ȫ�����������������\r\n#L5##v2040507#ȫ�����׷����������\r\n#L6##v2040603#��/ȹ�����������\r\n#L7##v2040709#Ь�������������\r\n#L8##v2040710#Ь����Ծ�������\r\n#L9##v2040806#���������������\r\n#L10##v2040903#���Ʒ����������\r\n#L11##v2041024#����ħ���������\r\n#L12##v2041025#��������������\r\n#L13##v2041200#��������ʯ\r\n#L14##v2043003#���ֽ������������\r\n#L15##v2043103#���ָ������������\r\n#L16##v2043203#���ֶ��������������\r\n#L17##v2043303#�̽������������\r\n#L18##v2043703#����ħ���������\r\n#L19##v2043803#����ħ���������\r\n#L20##v2044003#˫�ֽ������������\r\n#L21##v2044103#˫�ָ������������\r\n#L22##v2044203#˫�ֶ��������������\r\n#L23##v2044303#ǹ�����������\r\n#L24##v2044403#ì�����������\r\n#L25##v2044503#�������������\r\n#L26##v2044603#�󹥻��������\r\n#L27##v2044703#ȭ�׹����������");
}else if (status == 1) {
  if(cm.getPlayer().getInventory(net.sf.cherry.client.MapleInventoryType.getByType(2)).isFull()){
							cm.sendOk("�뱣֤������λ��1���ո���ܶһ���Ʒ.");
							cm.dispose();
}else   
if (selection == 1) {
if (cm.haveItem(4310002) == false){
cm.sendOk("��Ǹ,��û�д�����,�����Ҳ��ܺ��㽻��"); cm.dispose();
}else{
cm.gainItem(4310002,-1);
cm.gainItem(2040006,1);
cm.sendOk("����,��ȡ�ɹ�,��ȥ�Ҽ�Ʒװ����");
cm.dispose(); }
}else if (selection == 2) {
if (cm.haveItem(4310002) == false){
cm.sendOk("��Ǹ,��û�д�����,�����Ҳ��ܺ��㽻��"); cm.dispose();
}else{
cm.gainItem(4310002,-1);
cm.gainItem(2040303,1);
cm.sendOk("����,��ȡ�ɹ�,��ȥ�Ҽ�Ʒװ����");
cm.dispose(); }
}else if (selection == 3) {
if (cm.haveItem(4310002) == false){
cm.sendOk("��Ǹ,��û�д�����,�����Ҳ��ܺ��㽻��"); cm.dispose();
}else{
cm.gainItem(4310002,-1);
cm.gainItem(2040403,1);
cm.sendOk("����,��ȡ�ɹ�,��ȥ�Ҽ�Ʒװ����");
cm.dispose(); }
}else if (selection == 4) {
if (cm.haveItem(4310002) == false){
cm.sendOk("��Ǹ,��û�д�����,�����Ҳ��ܺ��㽻��"); cm.dispose();
}else{
cm.gainItem(4310002,-1);
cm.gainItem(2040506,1);
cm.sendOk("����,��ȡ�ɹ�,��ȥ�Ҽ�Ʒװ����");
cm.dispose(); }
}else if (selection == 5) {
if (cm.haveItem(4310002) == false){
cm.sendOk("��Ǹ,��û�д�����,�����Ҳ��ܺ��㽻��"); cm.dispose();
}else{
cm.gainItem(4310002,-1);
cm.gainItem(2040507,1);
cm.sendOk("����,��ȡ�ɹ�,��ȥ�Ҽ�Ʒװ����");
cm.dispose(); }
}else if (selection == 6) {
if (cm.haveItem(4310002) == false){
cm.sendOk("��Ǹ,��û�д�����,�����Ҳ��ܺ��㽻��"); cm.dispose();
}else{
cm.gainItem(4310002,-1);
cm.gainItem(2040603,1);
cm.sendOk("����,��ȡ�ɹ�,��ȥ�Ҽ�Ʒװ����");
cm.dispose(); }
}else if (selection == 7) {
if (cm.haveItem(4310002) == false){
cm.sendOk("��Ǹ,��û�д�����,�����Ҳ��ܺ��㽻��"); cm.dispose();
}else{
cm.gainItem(4310002,-1);
cm.gainItem(2040709,1);
cm.sendOk("����,��ȡ�ɹ�,��ȥ�Ҽ�Ʒװ����");
cm.dispose(); }
}else if (selection == 8) {
if (cm.haveItem(4310002) == false){
cm.sendOk("��Ǹ,��û�д�����,�����Ҳ��ܺ��㽻��"); cm.dispose();
}else{
cm.gainItem(4310002,-1);
cm.gainItem(2040710,1);
cm.sendOk("����,��ȡ�ɹ�,��ȥ�Ҽ�Ʒװ����");
cm.dispose(); }
}else if (selection == 9) {
if (cm.haveItem(4310002) == false){
cm.sendOk("��Ǹ,��û�д�����,�����Ҳ��ܺ��㽻��"); cm.dispose();
}else{
cm.gainItem(4310002,-1);
cm.gainItem(2040806,1);
cm.sendOk("����,��ȡ�ɹ�,��ȥ�Ҽ�Ʒװ����");
cm.dispose(); }
}else if (selection == 10) {
if (cm.haveItem(4310002) == false){
cm.sendOk("��Ǹ,��û�д�����,�����Ҳ��ܺ��㽻��"); cm.dispose();
}else{
cm.gainItem(4310002,-1);
cm.gainItem(2040903,1);
cm.sendOk("����,��ȡ�ɹ�,��ȥ�Ҽ�Ʒװ����");
cm.dispose(); }
}else if (selection == 11) {
if (cm.haveItem(4310002) == false){
cm.sendOk("��Ǹ,��û�д�����,�����Ҳ��ܺ��㽻��"); cm.dispose();
}else{
cm.gainItem(4310002,-1);
cm.gainItem(2041024,1);
cm.sendOk("����,��ȡ�ɹ�,��ȥ�Ҽ�Ʒװ����");
cm.dispose(); }
}else if (selection == 12) {
if (cm.haveItem(4310002) == false){
cm.sendOk("��Ǹ,��û�д�����,�����Ҳ��ܺ��㽻��"); cm.dispose();
}else{
cm.gainItem(4310002,-1);
cm.gainItem(2041025,1);
cm.sendOk("����,��ȡ�ɹ�,��ȥ�Ҽ�Ʒװ����");
cm.dispose(); }
}else if (selection == 13) {
if (cm.haveItem(4310002) == false){
cm.sendOk("��Ǹ,��û�д�����,�����Ҳ��ܺ��㽻��"); cm.dispose();
}else{
cm.gainItem(4310002,-1);
cm.gainItem(2041200,1);
cm.sendOk("����,��ȡ�ɹ�,��ȥ�Ҽ�Ʒװ����");
cm.dispose(); }
}else if (selection == 14) {
if (cm.haveItem(4310002) == false){
cm.sendOk("��Ǹ,��û�д�����,�����Ҳ��ܺ��㽻��"); cm.dispose();
}else{
cm.gainItem(4310002,-1);
cm.gainItem(2043003,1);
cm.sendOk("����,��ȡ�ɹ�,��ȥ�Ҽ�Ʒװ����");
cm.dispose(); }
}else if (selection == 15) {
if (cm.haveItem(4310002) == false){
cm.sendOk("��Ǹ,��û�д�����,�����Ҳ��ܺ��㽻��"); cm.dispose();
}else{
cm.gainItem(4310002,-1);
cm.gainItem(2043103,1);
cm.sendOk("����,��ȡ�ɹ�,��ȥ�Ҽ�Ʒװ����");
cm.dispose(); }
}else if (selection == 16) {
if (cm.haveItem(4310002) == false){
cm.sendOk("��Ǹ,��û�д�����,�����Ҳ��ܺ��㽻��"); cm.dispose();
}else{
cm.gainItem(4310002,-1);
cm.gainItem(2043203,1);
cm.sendOk("����,��ȡ�ɹ�,��ȥ�Ҽ�Ʒװ����");
cm.dispose(); }
}else if (selection == 17) {
if (cm.haveItem(4310002) == false){
cm.sendOk("��Ǹ,��û�д�����,�����Ҳ��ܺ��㽻��"); cm.dispose();
}else{
cm.gainItem(4310002,-1);
cm.gainItem(2043303,1);
cm.sendOk("����,��ȡ�ɹ�,��ȥ�Ҽ�Ʒװ����");
cm.dispose(); }
}else if (selection == 18) {
if (cm.haveItem(4310002) == false){
cm.sendOk("��Ǹ,��û�д�����,�����Ҳ��ܺ��㽻��"); cm.dispose();
}else{
cm.gainItem(4310002,-1);
cm.gainItem(2043703,1);
cm.sendOk("����,��ȡ�ɹ�,��ȥ�Ҽ�Ʒװ����");
cm.dispose(); }
}else if (selection == 19) {
if (cm.haveItem(4310002) == false){
cm.sendOk("��Ǹ,��û�д�����,�����Ҳ��ܺ��㽻��"); cm.dispose();
}else{
cm.gainItem(4310002,-1);
cm.gainItem(2043803,1);
cm.sendOk("����,��ȡ�ɹ�,��ȥ�Ҽ�Ʒװ����");
cm.dispose(); }
}else if (selection == 20) {
if (cm.haveItem(4310002) == false){
cm.sendOk("��Ǹ,��û�д�����,�����Ҳ��ܺ��㽻��"); cm.dispose();
}else{
cm.gainItem(4310002,-1);
cm.gainItem(2044003,1);
cm.sendOk("����,��ȡ�ɹ�,��ȥ�Ҽ�Ʒװ����");
cm.dispose(); }
}else if (selection == 21) {
if (cm.haveItem(4310002) == false){
cm.sendOk("��Ǹ,��û�д�����,�����Ҳ��ܺ��㽻��"); cm.dispose();
}else{
cm.gainItem(4310002,-1);
cm.gainItem(2044103,1);
cm.sendOk("����,��ȡ�ɹ�,��ȥ�Ҽ�Ʒװ����");
cm.dispose(); }
}else if (selection == 22) {
if (cm.haveItem(4310002) == false){
cm.sendOk("��Ǹ,��û�д�����,�����Ҳ��ܺ��㽻��"); cm.dispose();
}else{
cm.gainItem(4310002,-1);
cm.gainItem(2044203,1);
cm.sendOk("����,��ȡ�ɹ�,��ȥ�Ҽ�Ʒװ����");
cm.dispose(); }
}else if (selection == 23) {
if (cm.haveItem(4310002) == false){
cm.sendOk("��Ǹ,��û�д�����,�����Ҳ��ܺ��㽻��"); cm.dispose();
}else{
cm.gainItem(4310002,-1);
cm.gainItem(2044303,1);
cm.sendOk("����,��ȡ�ɹ�,��ȥ�Ҽ�Ʒװ����");
cm.dispose(); }
}else if (selection == 24) {
if (cm.haveItem(4310002) == false){
cm.sendOk("��Ǹ,��û�д�����,�����Ҳ��ܺ��㽻��"); cm.dispose();
}else{
cm.gainItem(4310002,-1);
cm.gainItem(2044403,1);
cm.sendOk("����,��ȡ�ɹ�,��ȥ�Ҽ�Ʒװ����");
cm.dispose(); }
}else if (selection == 25) {
if (cm.haveItem(4310002) == false){
cm.sendOk("��Ǹ,��û�д�����,�����Ҳ��ܺ��㽻��"); cm.dispose();
}else{
cm.gainItem(4310002,-1);
cm.gainItem(2044503,1);
cm.sendOk("����,��ȡ�ɹ�,��ȥ�Ҽ�Ʒװ����");
cm.dispose(); }
}else if (selection == 26) {
if (cm.haveItem(4310002) == false){
cm.sendOk("��Ǹ,��û�д�����,�����Ҳ��ܺ��㽻��"); cm.dispose();
}else{
cm.gainItem(4310002,-1);
cm.gainItem(2044603,1);
cm.sendOk("����,��ȡ�ɹ�,��ȥ�Ҽ�Ʒװ����");
cm.dispose(); }
}else if (selection == 27) {
if (cm.haveItem(4310002) == false){
cm.sendOk("��Ǹ,��û�д�����,�����Ҳ��ܺ��㽻��"); cm.dispose();
}else{
cm.gainItem(4310002,-1);
cm.gainItem(2044703,1);
cm.sendOk("����,��ȡ�ɹ�,��ȥ�Ҽ�Ʒװ����");
cm.dispose(); }
}else if (selection == 28) {
if (cm.haveItem(4310002) == false){
cm.sendOk("��Ǹ,��û�д�����,�����Ҳ��ܺ��㽻��"); cm.dispose();
}else{
cm.gainItem(4310002,-1);
cm.gainItem(2049301,1);
cm.sendOk("����,��ȡ�ɹ�,��ȥ�Ҽ�Ʒװ����");
cm.dispose(); }
}else if (selection == 29) {
if (cm.haveItem(4310002) == false){
cm.sendOk("��Ǹ,��û�д�����,�����Ҳ��ܺ��㽻��"); cm.dispose();
}else{
cm.gainItem(4310002,-1);
cm.gainItem(2049401,1);
cm.sendOk("����,��ȡ�ɹ�,��ȥ�Ҽ�Ʒװ����");
cm.dispose(); }
}else if (selection == 30) {
if (cm.haveItem(4310002) == false){
cm.sendOk("��Ǹ,��û�д�����,�����Ҳ��ܺ��㽻��"); cm.dispose();
}else{
cm.gainItem(4310002,-1);
cm.gainItem(2043404,1);
cm.sendOk("����,��ȡ�ɹ�,��ȥ�Ҽ�Ʒװ����");
cm.dispose(); }
}
}
}
}
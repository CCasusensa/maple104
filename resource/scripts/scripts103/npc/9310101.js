

var status = 0;
var zz =" С��ð�յ�"; //������������
var yb = 5; //Ԫ��
var ttt ="#fUI/Basic/CheckBox/3#";//"+ttt+"//����
var temp = "#fEtc/pachinko/controller/base/1#";
var temp2 = "#fEtc/SpeedAnimationQuiz/BeijingOlympic/AniQuiz/5/ani/1#";
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

if (cm.getPlayer().getnld() >= 0) {

var text ="\r\n#b#L1##r"+mmm+"�����¶ȼ�#k(5Ԫ��)#n#l ";
text +="\r\n#b#L2##r"+mmm+"�������浶#k(5Ԫ��)#n#l ";
text +="\r\n#b#L3##r"+mmm+"�������ٱ�#k(5Ԫ��)#n#l ";
text +="\r\n#b#L4##r"+mmm+"����ʥ����#k(5Ԫ��)#n#l ";
text +="\r\n#b#L5##r"+mmm+"������Ϧ��#k(5Ԫ��)#n#l ";
text +="\r\n#b#L6##r"+mmm+"�������߱�#k(5Ԫ��)#n#l ";
text +="\r\n#b#L7##r"+mmm+"�������ָ#k(5Ԫ��)#n#l ";
text +="\r\n#b#L8##r"+mmm+"����ʥ����#k(5Ԫ��)#n#l ";
text +="\r\n#b#L9##r"+mmm+"�������ս�#k(5Ԫ��)#n#l ";
text +="\r\n#b#L10##r"+mmm+"������·��#k(5Ԫ��)#n#l ";
text +="\r\n#b#L11##r"+mmm+"�����Ϲϵ�#k(5Ԫ��)#n#l ";
text +="\r\n#b#L12##r"+mmm+"��������#k(5Ԫ��)#n#l ";
text +="\r\n#b#L13##r"+mmm+"����������#k(5Ԫ��)#n#l ";
text +="\r\n#b#L14##r"+mmm+"������ɫ��#k(5Ԫ��)#n#l ";
text +="\r\n#b#L15##r"+mmm+"�����޺��#k(5Ԫ��)#n#l ";
text +="\r\n#b#L16##r"+mmm+"����ӣ��ɡ#k(5Ԫ��)#n#l ";
text +="\r\n#b#L17##r"+mmm+"�����й���#k(5Ԫ��)#n#l ";
text +="\r\n#b#L18##r"+mmm+"���������#k(5Ԫ��)#n#l ";
text +="\r\n#b#L19##r"+mmm+"��������#k(5Ԫ��)#n#l ";
text +="\r\n#b#L20##r"+mmm+"�������ͬ#k(5Ԫ��)#n#l ";
cm.sendSimple("��ӭ����#r"+zz+"#k,������С��ð�յ�����( ^_^ )\r\n\r\n#r��ʾ��#k\r\n1.�����ӵ���㹻��Ԫ���ſ��Խ��л���\r\n2.�����󲻿��˻�"+
text);
}

} else if (status == 1) {

if (selection == 1) {
if(cm.getzb() >= yb){
if(cm.haveItem(1402014,1,true,false)){
cm.sendOk("���Ѿ���һ���¶ȼ��ˣ�");
cm.dispose();
}else{
cm.setzb(-yb);
var ii = net.sf.odinms.server.MapleItemInformationProvider.getInstance();		                
var type = ii.getInventoryType(1402014); //���װ��������
var toDrop = ii.randomizeStats(ii.getEquipById(1402014)).copy(); // ����һ��Equip��
//
toDrop.setLocked(1);
cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������
cm.getC().getSession().write(net.sf.odinms.tools.MaplePacketCreator.addInventorySlot(type, toDrop)); //ˢ�±���		
cm.getChar().saveToDB(true);
cm.sendOk("���Ѿ��ɹ��������ߣ�");
cm.dispose();
}					
}else{
cm.sendOk("��û���㹻��Ԫ����");
cm.dispose();
}
}

if (selection == 2) {
if(cm.getzb() >= yb){
if(cm.haveItem(1302063,1,true,false)){
cm.sendOk("���Ѿ���һ�����浶���ˣ�");
cm.dispose();
}else{
cm.setzb(-yb);
var ii = net.sf.odinms.server.MapleItemInformationProvider.getInstance();
	                
var type = ii.getInventoryType(1302063); //���װ��������
var toDrop = ii.randomizeStats(ii.getEquipById(1302063)).copy(); // ����һ��Equip��
//
toDrop.setLocked(1);	
cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������
cm.getC().getSession().write(net.sf.odinms.tools.MaplePacketCreator.addInventorySlot(type, toDrop)); //ˢ�±���		
cm.getChar().saveToDB(true);
cm.sendOk("���Ѿ��ɹ��������ߣ�");
cm.dispose();
}					
}else{
cm.sendOk("��û���㹻��Ԫ����");
cm.dispose();
}
}

if (selection == 3) {
if(cm.getzb() >= yb){
if(cm.haveItem(1302061,1,true,false)){
cm.sendOk("���Ѿ���һ�����ٱ��ˣ�");
cm.dispose();
}else{
cm.setzb(-yb);
var ii = net.sf.odinms.server.MapleItemInformationProvider.getInstance();		                
var type = ii.getInventoryType(1302061); //���װ��������
var toDrop = ii.randomizeStats(ii.getEquipById(1302061)).copy(); // ����һ��Equip��
//
toDrop.setLocked(1);
cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������
cm.getC().getSession().write(net.sf.odinms.tools.MaplePacketCreator.addInventorySlot(type, toDrop)); //ˢ�±���		
cm.getChar().saveToDB(true);
cm.sendOk("���Ѿ��ɹ��������ߣ�");
cm.dispose();
}					
}else{
cm.sendOk("��û���㹻��Ԫ����");
cm.dispose();
}
}

if (selection == 4) {
if(cm.getzb() >= yb){
if(cm.haveItem(1372031,1,true,false)){
cm.sendOk("���Ѿ���һ��ʥ�����ˣ�");
cm.dispose();
}else{
cm.setzb(-yb);
var ii = net.sf.odinms.server.MapleItemInformationProvider.getInstance();		                
var type = ii.getInventoryType(1372031); //���װ��������
var toDrop = ii.randomizeStats(ii.getEquipById(1372031)).copy(); // ����һ��Equip��
//
toDrop.setLocked(1);
cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������
cm.getC().getSession().write(net.sf.odinms.tools.MaplePacketCreator.addInventorySlot(type, toDrop)); //ˢ�±���		
cm.getChar().saveToDB(true);
cm.sendOk("���Ѿ��ɹ��������ߣ�");
cm.dispose();
}					
}else{
cm.sendOk("��û���㹻��Ԫ����");
cm.dispose();
}
}


if (selection == 5) {
if(cm.getzb() >= yb){
if(cm.haveItem(1322051,1,true,false)){
cm.sendOk("���Ѿ���һ����Ϧ�ˣ�");
cm.dispose();
}else{
cm.setzb(-yb);
var ii = net.sf.odinms.server.MapleItemInformationProvider.getInstance();		                
var type = ii.getInventoryType(1322051); //���װ��������
var toDrop = ii.randomizeStats(ii.getEquipById(1322051)).copy(); // ����һ��Equip��
//
toDrop.setLocked(1);
cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������
cm.getC().getSession().write(net.sf.odinms.tools.MaplePacketCreator.addInventorySlot(type, toDrop)); //ˢ�±���		
cm.getChar().saveToDB(true);
cm.sendOk("���Ѿ��ɹ��������ߣ�");
cm.dispose();
}					
}else{
cm.sendOk("��û���㹻��Ԫ����");
cm.dispose();
}
}




if (selection == 6) {
if(cm.getzb() >= yb){
if(cm.haveItem(1302049,1,true,false)){
cm.sendOk("���Ѿ���һ�����߱����ˣ�");
cm.dispose();
}else{
cm.setzb(-yb);
var ii = net.sf.odinms.server.MapleItemInformationProvider.getInstance();		                
var type = ii.getInventoryType(1302049); //���װ��������
var toDrop = ii.randomizeStats(ii.getEquipById(1302049)).copy(); // ����һ��Equip��
//
toDrop.setLocked(1);
cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������
cm.getC().getSession().write(net.sf.odinms.tools.MaplePacketCreator.addInventorySlot(type, toDrop)); //ˢ�±���		
cm.getChar().saveToDB(true);
cm.sendOk("���Ѿ��ɹ��������ߣ�");
cm.dispose();
}					
}else{
cm.sendOk("��û���㹻��Ԫ����");
cm.dispose();
}
}



if (selection == 7) {
if(cm.getzb() >= yb){
if(cm.haveItem(1112907,1,true,false)){
cm.sendOk("���Ѿ���һ��С���ָ�ˣ�");
cm.dispose();
}else{
cm.setzb(-yb);
var ii = net.sf.odinms.server.MapleItemInformationProvider.getInstance();		                
var type = ii.getInventoryType(1112907); //���װ��������
var toDrop = ii.randomizeStats(ii.getEquipById(1112907)).copy(); // ����һ��Equip��
//
toDrop.setLocked(1);
cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������
cm.getC().getSession().write(net.sf.odinms.tools.MaplePacketCreator.addInventorySlot(type, toDrop)); //ˢ�±���		
cm.getChar().saveToDB(true);
cm.sendOk("���Ѿ��ɹ��������ߣ�");
cm.dispose();
}					
}else{
cm.sendOk("��û���㹻��Ԫ����");
cm.dispose();
}
}



if (selection == 8) {
if(cm.getzb() >= yb){
if(cm.haveItem(1332032,1,true,false)){
cm.sendOk("���Ѿ���һ��ʥ�����ˣ�");
cm.dispose();
}else{
cm.setzb(-yb);
var ii = net.sf.odinms.server.MapleItemInformationProvider.getInstance();		                
var type = ii.getInventoryType(1332032); //���װ��������
var toDrop = ii.randomizeStats(ii.getEquipById(1332032)).copy(); // ����һ��Equip��
//
toDrop.setLocked(1);
cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������
cm.getC().getSession().write(net.sf.odinms.tools.MaplePacketCreator.addInventorySlot(type, toDrop)); //ˢ�±���		
cm.getChar().saveToDB(true);
cm.sendOk("���Ѿ��ɹ��������ߣ�");
cm.dispose();
}					
}else{
cm.sendOk("��û���㹻��Ԫ����");
cm.dispose();
}
}




if (selection == 9) {
if(cm.getzb() >= yb){
if(cm.haveItem(1402013,1,true,false)){
cm.sendOk("���Ѿ���һ�����ս��ˣ�");
cm.dispose();
}else{
cm.setzb(-yb);
var ii = net.sf.odinms.server.MapleItemInformationProvider.getInstance();		                
var type = ii.getInventoryType(1402013); //���װ��������
var toDrop = ii.randomizeStats(ii.getEquipById(1402013)).copy(); // ����һ��Equip��
//
toDrop.setLocked(1);
cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������
cm.getC().getSession().write(net.sf.odinms.tools.MaplePacketCreator.addInventorySlot(type, toDrop)); //ˢ�±���		
cm.getChar().saveToDB(true);
cm.sendOk("���Ѿ��ɹ��������ߣ�");
cm.dispose();
}					
}else{
cm.sendOk("��û���㹻��Ԫ����");
cm.dispose();
}
}



if (selection == 10) {
if(cm.getzb() >= yb){
if(cm.haveItem(1372017,1,true,false)){
cm.sendOk("���Ѿ���һ����·���ˣ�");
cm.dispose();
}else{
cm.setzb(-yb);
var ii = net.sf.odinms.server.MapleItemInformationProvider.getInstance();		                
var type = ii.getInventoryType(1372017); //���װ��������
var toDrop = ii.randomizeStats(ii.getEquipById(1372017)).copy(); // ����һ��Equip��
//
toDrop.setLocked(1);
cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������
cm.getC().getSession().write(net.sf.odinms.tools.MaplePacketCreator.addInventorySlot(type, toDrop)); //ˢ�±���		
cm.getChar().saveToDB(true);
cm.sendOk("���Ѿ��ɹ��������ߣ�");
cm.dispose();
}					
}else{
cm.sendOk("��û���㹻��Ԫ����");
cm.dispose();
}
}

if (selection == 11) {
if(cm.getzb() >= yb){
if(cm.haveItem(1402044,1,true,false)){
cm.sendOk("���Ѿ���һ���Ϲϵ��ˣ�");
cm.dispose();
}else{
cm.setzb(-yb);
var ii = net.sf.odinms.server.MapleItemInformationProvider.getInstance();		                
var type = ii.getInventoryType(1402044); //���װ��������
var toDrop = ii.randomizeStats(ii.getEquipById(1402044)).copy(); // ����һ��Equip��
//
toDrop.setLocked(1);
cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������
cm.getC().getSession().write(net.sf.odinms.tools.MaplePacketCreator.addInventorySlot(type, toDrop)); //ˢ�±���		
cm.getChar().saveToDB(true);
cm.sendOk("���Ѿ��ɹ��������ߣ�");
cm.dispose();
}					
}else{
cm.sendOk("��û���㹻��Ԫ����");
cm.dispose();
}
}




if (selection == 12) {
if(cm.getzb() >= yb){
if(cm.haveItem(1432037,1,true,false)){
cm.sendOk("���Ѿ���һ�������ˣ�");
cm.dispose();
}else{
cm.setzb(-yb);
var ii = net.sf.odinms.server.MapleItemInformationProvider.getInstance();		                
var type = ii.getInventoryType(1432037); //���װ��������
var toDrop = ii.randomizeStats(ii.getEquipById(1432037)).copy(); // ����һ��Equip��
//
toDrop.setLocked(1);
cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������
cm.getC().getSession().write(net.sf.odinms.tools.MaplePacketCreator.addInventorySlot(type, toDrop)); //ˢ�±���		
cm.getChar().saveToDB(true);
cm.sendOk("���Ѿ��ɹ��������ߣ�");
cm.dispose();
}					
}else{
cm.sendOk("��û���㹻��Ԫ����");
cm.dispose();
}
}





if (selection == 13) {
if(cm.getzb() >= yb){
if(cm.haveItem(1332021,1,true,false)){
cm.sendOk("���Ѿ���һ���������ˣ�");
cm.dispose();
}else{
cm.setzb(-yb);
var ii = net.sf.odinms.server.MapleItemInformationProvider.getInstance();		                
var type = ii.getInventoryType(1332021); //���װ��������
var toDrop = ii.randomizeStats(ii.getEquipById(1332021)).copy(); // ����һ��Equip��
//
toDrop.setLocked(1);
cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������
cm.getC().getSession().write(net.sf.odinms.tools.MaplePacketCreator.addInventorySlot(type, toDrop)); //ˢ�±���		
cm.getChar().saveToDB(true);
cm.sendOk("���Ѿ��ɹ��������ߣ�");
cm.dispose();
}					
}else{
cm.sendOk("��û���㹻��Ԫ����");
cm.dispose();
}
}



if (selection == 14) {
if(cm.getzb() >= yb){
if(cm.haveItem(1092022,1,true,false)){
cm.sendOk("���Ѿ���һ����ɫ���ˣ�");
cm.dispose();
}else{
cm.setzb(-yb);
var ii = net.sf.odinms.server.MapleItemInformationProvider.getInstance();		                
var type = ii.getInventoryType(1092022); //���װ��������
var toDrop = ii.randomizeStats(ii.getEquipById(1092022)).copy(); // ����һ��Equip��
//
toDrop.setLocked(1);
cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������
cm.getC().getSession().write(net.sf.odinms.tools.MaplePacketCreator.addInventorySlot(type, toDrop)); //ˢ�±���		
cm.getChar().saveToDB(true);
cm.sendOk("���Ѿ��ɹ��������ߣ�");
cm.dispose();
}					
}else{
cm.sendOk("��û���㹻��Ԫ����");
cm.dispose();
}
}




if (selection == 15) {
if(cm.getzb() >= yb){
if(cm.haveItem(1302080,1,true,false)){
cm.sendOk("���Ѿ���һ���޺���ˣ�");
cm.dispose();
}else{
cm.setzb(-yb);
var ii = net.sf.odinms.server.MapleItemInformationProvider.getInstance();		                
var type = ii.getInventoryType(1302080); //���װ��������
var toDrop = ii.randomizeStats(ii.getEquipById(1302080)).copy(); // ����һ��Equip��
//
toDrop.setLocked(1);
cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������
cm.getC().getSession().write(net.sf.odinms.tools.MaplePacketCreator.addInventorySlot(type, toDrop)); //ˢ�±���		
cm.getChar().saveToDB(true);
cm.sendOk("���Ѿ��ɹ��������ߣ�");
cm.dispose();
}					
}else{
cm.sendOk("��û���㹻��Ԫ����");
cm.dispose();
}
}



if (selection == 16) {
if(cm.getzb() >= yb){
if(cm.haveItem(1402063,1,true,false)){
cm.sendOk("���Ѿ���һ��ӣ��ɡ�ˣ�");
cm.dispose();
}else{
cm.setzb(-yb);
var ii = net.sf.odinms.server.MapleItemInformationProvider.getInstance();		                
var type = ii.getInventoryType(1402063); //���װ��������
var toDrop = ii.randomizeStats(ii.getEquipById(1402063)).copy(); // ����һ��Equip��
//
toDrop.setLocked(1);
cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������
cm.getC().getSession().write(net.sf.odinms.tools.MaplePacketCreator.addInventorySlot(type, toDrop)); //ˢ�±���		
cm.getChar().saveToDB(true);
cm.sendOk("���Ѿ��ɹ��������ߣ�");
cm.dispose();
}					
}else{
cm.sendOk("��û���㹻��Ԫ����");
cm.dispose();
}
}



if (selection == 17) {
if(cm.getzb() >= yb){
if(cm.haveItem(1702116,1,true,false)){
cm.sendOk("���Ѿ���һ���й����ˣ�");
cm.dispose();
}else{
cm.setzb(-yb);
var ii = net.sf.odinms.server.MapleItemInformationProvider.getInstance();		                
var type = ii.getInventoryType(1702116); //���װ��������
var toDrop = ii.randomizeStats(ii.getEquipById(1702116)).copy(); // ����һ��Equip��
//
toDrop.setLocked(1);
cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������
cm.getC().getSession().write(net.sf.odinms.tools.MaplePacketCreator.addInventorySlot(type, toDrop)); //ˢ�±���		
cm.getChar().saveToDB(true);
cm.sendOk("���Ѿ��ɹ��������ߣ�");
cm.dispose();
}					
}else{
cm.sendOk("��û���㹻��Ԫ����");
cm.dispose();
}
}



if (selection == 18) {
if(cm.getzb() >= yb){
if(cm.haveItem(1432039,1,true,false)){
cm.sendOk("���Ѿ���һ��������ˣ�");
cm.dispose();
}else{
cm.setzb(-yb);
var ii = net.sf.odinms.server.MapleItemInformationProvider.getInstance();		                
var type = ii.getInventoryType(1432039); //���װ��������
var toDrop = ii.randomizeStats(ii.getEquipById(1432039)).copy(); // ����һ��Equip��
//
toDrop.setLocked(1);
cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������
cm.getC().getSession().write(net.sf.odinms.tools.MaplePacketCreator.addInventorySlot(type, toDrop)); //ˢ�±���		
cm.getChar().saveToDB(true);
cm.sendOk("���Ѿ��ɹ��������ߣ�");
cm.dispose();
}					
}else{
cm.sendOk("��û���㹻��Ԫ����");
cm.dispose();
}
}



if (selection == 19) {
if(cm.getzb() >= yb){
if(cm.haveItem(1302128,1,true,false)){
cm.sendOk("���Ѿ���һ�������ˣ�");
cm.dispose();
}else{
cm.setzb(-yb);
var ii = net.sf.odinms.server.MapleItemInformationProvider.getInstance();		                
var type = ii.getInventoryType(1302128); //���װ��������
var toDrop = ii.randomizeStats(ii.getEquipById(1302128)).copy(); // ����һ��Equip��
//
toDrop.setLocked(1);
cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������
cm.getC().getSession().write(net.sf.odinms.tools.MaplePacketCreator.addInventorySlot(type, toDrop)); //ˢ�±���		
cm.getChar().saveToDB(true);
cm.sendOk("���Ѿ��ɹ��������ߣ�");
cm.dispose();
}					
}else{
cm.sendOk("��û���㹻��Ԫ����");
cm.dispose();
}
}



if (selection == 20) {
if(cm.getzb() >= yb){
if(cm.haveItem(1302087,1,true,false)){
cm.sendOk("���Ѿ���һ�����ͬ�ˣ�");
cm.dispose();
}else{
cm.setzb(-yb);
var ii = net.sf.odinms.server.MapleItemInformationProvider.getInstance();		                
var type = ii.getInventoryType(1302087); //���װ��������
var toDrop = ii.randomizeStats(ii.getEquipById(1302087)).copy(); // ����һ��Equip��
//
toDrop.setLocked(1);
cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������
cm.getC().getSession().write(net.sf.odinms.tools.MaplePacketCreator.addInventorySlot(type, toDrop)); //ˢ�±���		
cm.getChar().saveToDB(true);
cm.sendOk("���Ѿ��ɹ��������ߣ�");
cm.dispose();
}					
}else{
cm.sendOk("��û���㹻��Ԫ����");
cm.dispose();
}
}

//--------------------------


}
}
}

//debuger
var status = 0;

//����VIP�۸� �ж��ٸ��ȼ��ͼӶ��ٸ�����Ҫ�಻Ҫ��
var buyvipprice =new Array(0,25000,50000,80000,120000);

//����ʱ����
//VIP�ȼ� ��ƷID,����(��װ������),����,���� ���� ���� ���� ħ��(��ͨ�����������)
var givingitem =new Array(
new Array(1,1032035,1,100,100,100,100,0,0),
new Array(2,1032035,1,200,200,200,200,0,0),
new Array(3,1032035,1,300,300,300,300,0,0),
new Array(4,1032036,1,400,400,400,400,0,0),
new Array(5,1032038,1,500,500,500,500,0,0)
);

//(VIP�ȼ�,��Ӧ�ĵ�ͼID,��ͼ����)
var vipmap =new Array(
new Array(1,910000007,"�����г�7��"),//new Array(VIP�ȼ�,��ͼID,��ͼ����),
new Array(2,910000008,"�����г�8��"),
new Array(3,910000009,"�����г�9��"),
new Array(3,910000009,"�����г�9��"),
new Array(4,910000009,"�����г�9��"),
new Array(5,910000009,"�����г�9��"),
new Array(5,910000009,"�����г�9��")
);

//ÿ�չ���,���ߵ�
var dailywageItem=new Array(
new Array(1,4031454,1),//new Array(VIP�ȼ�,����ID,��������),
new Array(2,4031454,3),
new Array(3,4031454,6),
new Array(3,4031454,6),
new Array(4,4031454,6),
new Array(5,4031454,6),
new Array(5,4031454,6)
);
//ÿ�� ��� �ж��ٸ��ȼ��ͼӶ��ٸ�����Ҫ�಻Ҫ��
var dailywageMeso=new Array(1000000,10000000,50000000,50000000,50000000);
//ÿ�� ����  �ж��ٸ��ȼ��ͼӶ��ٸ�����Ҫ�಻Ҫ��
var dailywageNX=new Array(1000,10000,50000,50000,50000);


var status1type=-1;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status == 1 && mode == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
        cm.dispose();
    }
    if (status == 0) {
		var says="#L1##b����VIP#l#k\r\n#L2##b��ȡ����#l#k\r\n#L3##b����ˢǮ#l#k\r\n#L4##b����#l#k";
		cm.sendSimple(says);
	} else if (status == 1) {
		status1type=selection;
		var where = "";
		switch(status1type){
			case 1:
				where+="#b����ǰ������Ϊ:#r"+cm.getPlayer().getCSPoints(1);
				for (var i = 0; i < buyvipprice.length; i++) {
				where+="\r\n#L"+i+"##b����#rVIP["+(i+1)+"]#k#b��Ҫ���:#r"+buyvipprice[i]+"#k#l";
					where+="\r\n\r\n��ȡ�������:"
					for(var j=0;j<givingitem.length;j++){
						if((i+1)==givingitem[j][0]){
							where+="\r\n#v"+givingitem[j][1]+"##r"+givingitem[j][2]+"#b�� ��:#r"+givingitem[j][3]+" #b��:#r"+givingitem[j][4]+" #b��:#r"+givingitem[j][5]+" #b��:#r"+givingitem[j][6]+" #b�﹥:#r"+givingitem[j][7]+" #bħ��:#r"+givingitem[j][8];
						}
					}
				}
			break;
			case 2:
				where+="#b����VIP����Ϊ:#r"+cm.getPlayer().getVip();
				where+="\r\n#bVIPÿ�տ�����ȡ�ĵ���Ϊ:";
				for(var i=0;i<dailywageItem.length;i++){
					where +="\r\nVIP�ȼ�:#r"+dailywageItem[i][0]+"#b������ȡ#v"+dailywageItem[i][1]+"##r "+dailywageItem[i][2]+"#b ����"
				}
				where+="\r\nVIPÿ�տ�����ȡ�Ľ��:";
				for(var i=0;i<dailywageMeso.length;i++){
					where +="\r\nVIP�ȼ�:#r"+(i+1)+"#b������ȡ#r"+dailywageMeso[i]+"#b ��ҡ�"
				}
				where+="\r\nVIPÿ�տ�����ȡ�ĵ���ȯ:";
				for(var i=0;i<dailywageNX.length;i++){
					where +="\r\nVIP�ȼ�:#r"+(i+1)+"#b������ȡ#r"+dailywageNX[i]+"#b ���þ�"
				}
			break;
			case 3:
				where+="��ѡ����Ҫ���͵ĵ�ͼ";
				for (var i = 0; i < vipmap.length; i++) {
				where += "\r\n#L" + i + "##b"+vipmap[i][2]+" ��ҪVIP�ȼ�����:"+vipmap[i][0]+"#k#l";
				}
			break;
			case 4:
			cm.sendOk("����������NPC,�������//ȥ��,���滻������NPCID");
			//cm.openNpc(9900004);//�Լ��޸�����NPC ID
			cm.dispose();
			break;
			default:
			cm.sendOk("û�и�ѡ��");
			cm.dispose();
			break;
		}
        cm.sendSimple(where);

    } else if (status == 2) {		
		var select=selection;
		switch(status1type){
		case 1:
			if(cm.getVip()-1>=select){
				cm.sendOk("���Ѿ���VIP"+cm.getPlayer().getVip()+"��,����Ҫ�ظ�����"+(select+1)+"");
			}else
			if(cm.getPlayer().getCSPoints(1)>=buyvipprice[select]){
				var cvi=0;				
				for(var i=0;i<givingitem.length;i++){
					if(givingitem[i][0]==cm.getPlayer().getVip()){
						cvi++;
					}					
				}
				if(cm.getPlayer().getSpace(1)>=cvi){
				cm.gainNX(-buyvipprice[select]);
				cm.getPlayer().setVip(select+1);
				for(var i=0;i<givingitem.length;i++){
					if(givingitem[i][0]==(select+1)){
						cm.givingVIPItem(givingitem[i][1],givingitem[i][2],givingitem[i][3],givingitem[i][4],givingitem[i][5],givingitem[i][6],givingitem[i][7],givingitem[i][8]);
					}					
				}
				cm.worldMessage("#b��ϲ["+cm.getPlayer().getName()+"] ��Ϊ�� VIP "+(select+1)+" �������VIP������װ����Ҷ�ף����");
				cm.sendOk("#b��ϲ����Ϊ��VIP"+(select+1)+"");
				}
				else{
				cm.sendOk("#b��ȷ������װ�����ռ����ٿ���"+cvi+"��");
				}				
			}
		break;

		case 2:
			if(cm.getPlayer().getVip()<=0){
				cm.sendOk("#b��������VIP������ȡ");
				break;
			}
			var dcount=cm.getBossLog("vipdayitem");
			var cvi=0;
			var freesolt=99;
				for(var i=0;i<dailywageItem.length;i++){
					if(dailywageItem[i][0]==cm.getVip()){
						var fs=cm.getPlayer().haveSpaceForId(dailywageItem[i][1]);
						if(fs<freesolt){
							freesolt=fs;
						}
						cvi++;
					}
				}
			if(dcount<=0){
				if(freesolt>=cvi){
					for(var i=0;i<dailywageItem.length;i++){
						if(dailywageItem[i][0]==cm.getVip()){
							cm.gainItem(dailywageItem[i][1],dailywageItem[i][2]);
						}
					}
					cm.gainMeso(dailywageMeso[(cm.getVip()-1)]);
					cm.gainNX(2,dailywageNX[(cm.getVip()-1)]);
					cm.setBossLog("vipdayitem");
					var says="#b��ϲ������ÿ��VIP���:";
					for(var i=0;i<dailywageItem.length;i++){
						if(dailywageItem[i][0]==cm.getVip()){
							says+="\r\n#v"+dailywageItem[i][1]+"##r "+dailywageItem[i][2]+"#b ����"
						}
					}
					says+="\r\n#b���: #r"+dailywageMeso[(cm.getVip()-1)]+" #b��"
					says+="\r\n#b����ȯ: #r"+dailywageNX[(cm.getVip()-1)]+" #b��"
					cm.sendOk(says);
				}else{
					cm.sendOk("#b�������ı���Ҫ�������� "+cvi+" ���ո�λ��");
				}				
			}else{
				cm.sendOk("#b�����Ѿ���ȡ���ˣ�����������");
			}
		break;
		case 3:
			if(!cm.isVip()){
				cm.sendOk("��������VIP������ʹ�ø÷���");
				break;
			}
			if(vipmap[select][0]<=cm.getVip()){
				cm.warp(vipmap[select][1]);
				cm.playerMessage("ʹ��VIP���͵���:"+vipmap[select][2]);
			}else{
				cm.sendOk("����ǰ��VIP����Ϊ:"+cm.getVip()+",�õ�ͼ��ҪVIP����Ϊ:"+vipmap[select][0]);
			}
		break;
		}
		cm.dispose();		
    } else if (status == 3) {
	
		cm.dispose();
	}
}
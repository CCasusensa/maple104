//debuger
var status = 0;
//��ӵĻ�ȡ��Ʒ��ò�Ҫһ�λ�ó������������ո�
var rate=500;

var scroll_15=new Array(
new Array(2040301,500),//new Array(�һ���Ʒ,����[Խ��Խ���׻��������һ�����ڵ���rate]),
new Array(2040301,100),
new Array(2040301,50)
);
var scroll_65=new Array(
new Array(2040301,500),//new Array(�һ���Ʒ,����[Խ��Խ���׻��������һ�����ڵ���rate]),
new Array(2040301,100),
new Array(2040301,50)
);
var scroll_30=new Array(
new Array(2040301,500),//new Array(�һ���Ʒ,����[Խ��Խ���׻��������һ�����ڵ���rate]),
new Array(2040301,100),
new Array(2040301,50)
);
var scroll_70=new Array(
new Array(2040301,500),//new Array(�һ���Ʒ,����[Խ��Խ���׻��������һ�����ڵ���rate]),
new Array(2040301,100),
new Array(2040301,50)
);
var scroll_other=new Array(
new Array(2040301,500),//new Array(�һ���Ʒ,����[Խ��Խ���׻��������һ�����ڵ���rate]),
new Array(2040301,100),
new Array(2040301,50)
);


var allScroll=new Array(
new Array(4031997,100,"15%����",scroll_15,1),//(��Ҫ�ĵ���,��Ҫ������,"�һ���",�һ��������,�һ�����)
new Array(4031994,20,"65%����",scroll_65,2),
new Array(4031995,40,"30%����",scroll_30,3),
new Array(4031996,50,"70%����",scroll_70,4),
new Array(4031997,30,"�������",scroll_other,1)
);


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
		var where = "ѡ������Ҫ�һ�����Ʒ��";
			for (var i = 0; i < allScroll.length; i++) {
				where += "\r\n#L" + i + "##b��Ҫʹ��#v"+allScroll[i][0]+"# #r" + allScroll[i][1] + " #b�� �һ����#k "+allScroll[i][2]+"#r " + allScroll[i][4] + " #b�� #k#l";
			}
        cm.sendSimple(where);
    } else if (status == 1) {
		var is=selection;		
		var needitemid=allScroll[is][0];
		var needcount=allScroll[is][1];
		var scrolls=allScroll[is][3];
		var newcount=allScroll[is][4];
		var chance = Math.floor(Math.random()*rate);
		var finalitem = Array();
		for(var i = 0 ;i<scrolls.length;i++){
				if(scrolls[i][1] >= chance){
					finalitem.push(scrolls[i]);
				}
			}
		if(finalitem.length != 0){
			var random = new java.util.Random();
				var finalchance = random.nextInt(finalitem.length);
				var itemId = finalitem[finalchance][0];
				var quantity = newcount;
				var itemChance = finalitem[finalchance][1];
			if(cm.haveSpaceForId(itemId)){
				if(cm.haveItem(needitemid,needcount)){
					cm.gainItem(needitemid,-needcount);
					cm.gainItem(itemId,newcount);
					cm.sendOk("ף����һ��ɹ�");		
				}else{
					cm.sendOk("�����Ʒ��������\r\n��Ҫ#r"+needcount+"#k��#v"+needitemid+"#...");
				}
			}else{
				cm.sendOk("#b������������Ŀռ������ɶһ�����ȷ�����ı����ռ��Ƿ�����ܹ�װ���»�õ���Ʒ#k");
			}
		}else{
			cm.sendOk("��ѽʲô������ʲô��û�õ�����ϣ�����´�����Ŷ��");
		}
		
		
		cm.dispose();
    }
}
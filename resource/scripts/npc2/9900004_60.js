var newopen = 0;//消耗商品

var news = Array(
        Array(80001003,"购买后在新手技能册里可直接使用\r\n可以骑着突击！木马移动。",12000), //突击！木马
	Array(80001032,"购买后在新手技能册里可直接使用\r\n可以骑着跑车移动。",18000),//跑车
	Array(80001030,"购买后在新手技能册里可直接使用\r\n可以骑着走路鸡移动。",18000),//走路鸡
	Array(80001049,"购买后在新手技能册里可直接使用\r\n可以骑着恶魔石像移动。",18000),//恶魔石像
	Array(80001021,"购买后在新手技能册里可直接使用\r\n可以骑着蓝色电单车移动。",18000), //蓝色电单车
	Array(80001048,"购买后在新手技能册里可直接使用\r\n可以骑着田园红卡车移动。",12000),//田园红卡车
	Array(80001004,"购买后在新手技能册里可直接使用\r\n可以骑着鳄鱼鳄鱼移动。",18000), //鳄鱼
	Array(80001005,"购买后在新手技能册里可直接使用\r\n可以骑着男男机车移动。",12000), //男男机车
	Array(80001006,"购买后在新手技能册里可直接使用\r\n可以骑着女女机车移动。",12000), //女女机车
	Array(80001007,"购买后在新手技能册里可直接使用\r\n可以骑着筋斗云移动。",48000), //筋斗云
	Array(80001008,"购买后在新手技能册里可直接使用\r\n可以骑着蝙蝠怪移动。",30000), //蝙蝠怪
	Array(80001009,"购买后在新手技能册里可直接使用\r\n可以骑着赛车移动。",30000), //赛车
	Array(80001010,"购买后在新手技能册里可直接使用\r\n可以骑着老虎传说移动。",48000), //老虎传说
	Array(80001011,"购买后在新手技能册里可直接使用\r\n可以骑着蝙蝠魔先生移动。",36000), //蝙蝠魔先生
	Array(80001012,"购买后在新手技能册里可直接使用\r\n可以骑着圣兽提拉奥斯移动。",30000), //圣兽提拉奥斯
	Array(80001013,"购买后在新手技能册里可直接使用\r\n可以骑着花蘑菇移动。",30000), //花蘑菇
	Array(80001014,"购买后在新手技能册里可直接使用\r\n可以骑着梦魇移动。",60000), //梦魇
	Array(80001015,"购买后在新手技能册里可直接使用\r\n可以骑着鸵鸟移动。",6000), //鸵鸟
	Array(80001016,"购买后在新手技能册里可直接使用\r\n可以骑着粉红熊热气球移动。",20000), //粉红熊热气球
	Array(80001017,"购买后在新手技能册里可直接使用\r\n可以骑着变形金刚移动。",20000), //变形金刚
	Array(80001018,"购买后在新手技能册里可直接使用\r\n可以骑着暴风摩托移动。",20000), //暴风摩托
	Array(80001019,"购买后在新手技能册里可直接使用\r\n可以骑着超能套装移动。",30000), //超能套装
	Array(80001020,"购买后在新手技能册里可直接使用\r\n可以骑着雄狮骑宠移动。",30000), //雄狮骑宠
	Array(80001022,"购买后在新手技能册里可直接使用\r\n可以骑着圣诞雪橇移动。",60000), //圣诞雪橇
	Array(80001023,"购买后在新手技能册里可直接使用\r\n可以骑着福袋移动。",30000), //福袋
	Array(80001026,"购买后在新手技能册里可直接使用\r\n可以骑着魔女的扫把移动。",120000),//魔女的扫把
	Array(80001027,"购买后在新手技能册里可直接使用\r\n可以骑着木飞机移动。",30000),//木飞机
	Array(80001028,"购买后在新手技能册里可直接使用\r\n可以骑着红飞机移动。",30000),//红飞机
	Array(80001029,"购买后在新手技能册里可直接使用\r\n可以骑着骑士团战车移动。",12000),//骑士团战车
	Array(80001031,"购买后在新手技能册里可直接使用\r\n可以骑着猫头鹰移动。",30000),//猫头鹰
	Array(80001033,"购买后在新手技能册里可直接使用\r\n可以骑着休彼德蔓的热气球移动。",60000),//休彼德蔓的热气球
	Array(80001045,"购买后在新手技能册里可直接使用\r\n可以骑着狮子王移动。",30000),//狮子王
	Array(80001054,"购买后在新手技能册里可直接使用\r\n可以骑着巨无霸兔子移动。",6000),//巨无霸兔子
	Array(80001055,"购买后在新手技能册里可直接使用\r\n可以骑着兔兔加油移动。",6000),//兔兔加油
	Array(80001056,"购买后在新手技能册里可直接使用\r\n可以骑着兔子车夫移动。",6000),//兔子车夫
	Array(80001059,"购买后在新手技能册里可直接使用\r\n可以骑着青蛙移动。",6000),//青蛙
	Array(80001060,"购买后在新手技能册里可直接使用\r\n可以骑着小龟龟移动。",120000),//小龟龟
	Array(80001061,"购买后在新手技能册里可直接使用\r\n可以骑着维京战车移动。",30000),//维京战车
	Array(80001062,"购买后在新手技能册里可直接使用\r\n可以骑着拿破仑的白马移动。",60000)//拿破仑的白马
    );


var Select = -1;

function start() {
    a = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (a >= 2 && mode != 1){
        cm.dispose();
    }else{
        if (mode == -1) {
            cm.dispose();
        } else {
            if (mode == 1)
                a++;
            else
                a--;
            if (a == -1){
                cm.dispose();
            }else
            if (a == 0) {
                cm.sendSimple("#r - 小秘书主页 >> 点卷商城#k \r\n #L1#骑宠专卖#l")
            }else if (a == 1){
                if (selection == 1){
                    var selStr = "#b - 小秘书主页 >> 点卷商城 >> 消耗商品#b#k";
                    for (var i = 0; i < news.length; i++) {
                        selStr += "\r\n#L"+ i +"##b #s"+news[i][0]+"#  #q"+news[i][0]+"##l\r\n\r\n#r\r\n商品说明：#d"+news[i][1]+"#r\r\n商品价格：#d"+news[i][2]+" #r点卷。 "
                    }
                    if (newopen == 0){
                        cm.sendSimple(selStr)
                    }else{
                        a = -1
                        cm.sendNext("商城好像正在上架。");
                    }
				}
            }else if (a == 2){
                Select = selection;
                cm.sendYesNo("#r - 小秘书主页 >> 点卷商城 >> 骑宠专卖 >> 购物车 #k\r\n\r\n 即将购买 ------------------- #b\r\n\r\n#b#s"+news[Select][0]+"##q"+news[Select][0]+"##l\r\n#r商品说明：#d"+news[Select][1]+"#r 。\r\n商品价格：#d"+news[Select][2]+" #r点卷。");
				
            }else if (a == 3){
				
                cm.sendGetText("你想购买多少个？请输入1,输错损失自负！\r\n#b必须输入整数1！#r\r\n输入小数点将会翻倍扣除点卷，后果自负！");
				
            }else if (a == 4){
                cost = cm.getText() * news[Select][2] ;
                if (cm.getText() < 1){
                    cm.sendOk("大于1 的数字可以输入。")
                    cm.dispose();
                }else if (cm.getPlayer().getCSPoints(1) < cost){
                    cm.sendOk("对不起，你的点卷余额不足 #r"+ cost +"#k 点。")
                    cm.dispose();
                }else{
		            cm.teachSkill(news[Select][0],1,1);
                    cm.gainNX(-cost)
                    cm.sendOk("购买成功了，你一共花费了"+ cost +" 点卷 。")
                    cm.dispose();
                }
            }
        }
    }
}
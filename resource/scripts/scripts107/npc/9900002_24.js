/*
		射手村整形NPC 加入换眼晴颜色
*/
var status = 0;
var beauty = 0;
var price = 5000000;
var mhair = Array(30900, 30910, 30920, 30930, 30940, 30950, 30990, 30800, 30810, 30820, 30830, 30840, 30850, 30860, 30870, 30880, 30890, 30700, 30710, 30720, 30730, 30740, 30750, 30760, 30770, 30780, 30790, 30600, 30610, 30620, 30630, 30640, 30650, 30660, 30670, 30680, 30510, 30520, 30530, 30540, 30550, 30560, 30400, 30410, 30420, 30430, 30440, 30450, 30460, 30470, 30480, 30490, 30300, 30310, 30320, 30330, 30340, 30350, 30360, 30370, 30000, 30010, 30020, 30030, 30040, 30050, 30060, 30070, 30080, 30090, 30100, 30110, 30120, 30130, 30140, 30150, 30160, 30170, 30180, 30190, 30200, 30210, 30220, 30230, 30240, 30250, 30260, 30270, 30280, 30290, 30300, 30310, 30320, 30330, 30340, 30350, 30360, 30370, 33000, 33030, 33040, 33050, 30610, 33190, 33220, 33230, 33100, 33130, 33210, 33320, 33260, 33310, 33430, 33440, 33390, 33350, 33150, 32120, 33250, 30910, 33400, 33410, 32140);
var fhair = Array(34000, 34010, 34040, 34050, 34060, 31910, 31920, 31930, 31940, 31950, 31800, 31810, 31820, 31830, 31840, 31850, 31860, 31870, 31880, 31890, 31740, 31700, 31710, 31720, 31730, 31750, 31760, 31770, 31780, 31790, 31110, 31120, 31130, 31140, 31150, 31300, 31310, 31320, 31330, 31340, 31350, 31160, 31170, 31180, 31190, 31050, 31610, 31620, 31630, 31640, 31650, 31660, 31670, 31680, 31690, 31100, 31510, 31520, 31530, 31540, 31550, 31560, 31400, 31410, 31420, 31430, 31440, 31450, 31460, 31470, 31480, 31490, 31030, 31080, 31000, 31010, 31020, 31040, 31060, 31090, 31070, 31200, 31210, 31220, 31230, 31240, 31250, 31260, 31270, 31280, 31290, 34160, 34110, 34120, 34130, 34170, 31180, 34220, 34290, 34300, 34100, 34140, 31990, 34200, 34150, 34210, 34260, 34230, 34240, 34450, 31990, 32130, 34250, 32140);
var hairnew = Array();
var mface = Array(20000, 20001, 20002, 20003, 20004, 20005, 20006, 20007, 20008, 20009, 20010, 20011, 20012, 20013, 20014, 20015, 20016, 20017, 20018, 20019, 20020, 20021, 20022, 20023, 20024, 20025, 20026, 20027, 20028, 20029, 20033, 20036, 20047, 20045, 20043, 20037, 20038, 20040, 20046, 20048, 20049, 20050, 20051, 20052, 20053, 20055, 20056, 20058, 20059, 20060, 20061, 20062, 20063, 20064, 20065, 20066, 20068, 20067, 20069);
var fface = Array(21000, 21001, 21002, 21003, 21004, 21005, 21006, 21007, 21008, 21009, 21010, 21011, 21012, 21013, 21014, 21015, 21016, 21017, 21018, 21019, 21020, 21021, 21022, 21023, 21024, 21025, 21026, 21027, 21033, 21045, 21034, 21043, 21041, 21028, 21029, 21030, 21031, 21034, 21035, 21036, 21038, 21139, 21140, 21042, 21046, 21044, 21047, 21048, 21049, 21050, 21052, 21053, 21054, 21055, 21056, 21057, 21058, 21059, 21060, 21061, 21062, 21063, 21064);
var facenew = Array();
var skin = Array(1, 2, 3, 4, 9, 10);
var mmhair = Array(30900, 30910, 30920, 30930, 30940, 30950, 30990, 30800, 30810, 30820, 30830, 30840, 30850, 30860, 30870, 30880, 30890, 30700, 30710, 30720, 30730, 30740, 30750, 30760, 30770, 30780, 30790, 30600, 30610, 30620, 30630, 30640, 30650, 30660, 30670, 30680, 30510, 30520, 30530, 30540, 30550, 30560, 30400, 30410, 30420, 30430, 30440, 30450, 30460, 30470, 30480, 30490, 30300, 30310, 30320, 30330, 30340, 30350, 30360, 30370, 30000, 30020, 30030, 30040, 30050, 30060, 30070, 30080, 30090, 30100, 30110, 30120, 30130, 30140, 30150, 30160, 30170, 30180, 30190, 30200, 30210, 30220, 30230, 30240, 30250, 30260, 30270, 30280, 30290, 30300, 30310, 30320, 30330, 30340, 30350, 30360, 30370, 33000, 33030, 33040, 33050, 30610, 33190, 33220, 33230, 33100, 33130, 33210, 33320, 33260, 33310);
var mfhair = Array(34000, 34010, 34040, 34050, 34060, 31910, 31920, 31930, 31940, 31950, 31800, 31810, 31820, 31830, 31840, 31850, 31860, 31870, 31880, 31890, 31740, 31700, 31710, 31720, 31730, 31750, 31760, 31770, 31780, 31790, 31110, 31120, 31130, 31140, 31150, 31300, 31310, 31320, 31330, 31340, 31350, 31160, 31170, 31180, 31190, 31050, 31610, 31620, 31630, 31640, 31650, 31660, 31670, 31680, 31690, 31100, 31510, 31520, 31530, 31540, 31550, 31560, 31400, 31410, 31420, 31430, 31440, 31450, 31460, 31470, 31480, 31490, 31030, 31080, 31000, 31010, 31020, 31040, 31060, 31090, 31070, 31200, 31210, 31220, 31230, 31240, 31250, 31260, 31270, 31280, 31290, 34160, 34110, 34120, 34130, 34170, 31180, 34220, 34290, 34300, 34100, 34140, 31990, 34200, 34150, 34210, 34260, 34230, 34240);
var hairnew = Array();

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
        if (mode == 1) status++;
        else status--;
        if (status == 0) {
            cm.sendSimple("#khallo,我可以为#bVIP#k用户美容、美发、换肤、整形喔!#k\r\n#L4#肤色#l\r\n#L3#发型#l\r\n#L2#头发颜色#l\r\n#L0#眼睛#l\r\n#L1#眼晴颜色#l");
        } else if (status == 1) {
            if (selection == 0) {
                facenew = Array();
                if (cm.getChar().getGender() == 0) {
                    for (var i = 0; i < mface.length; i++) {
                        facenew.push(mface[i] + cm.getChar().getFace() % 1000 - (cm.getChar().getFace() % 100));
                    }
                }
                if (cm.getChar().getGender() == 1) {
                    for (var i = 0; i < fface.length; i++) {
                        facenew.push(fface[i] + cm.getChar().getFace() % 1000 - (cm.getChar().getFace() % 100));
                    }
                }
                cm.sendStyle("我可以改变你的脸型,让它比现在看起来漂亮. 你为什么不试着改变它下? ,我将会帮你改变你的脸型,那么选择一个你想要的新脸型吧!", facenew, 5152001);
            } else if (selection == 1) {
                beauty = 1;
                if (cm.getChar().getGender() == 0) {
                    var current = cm.getChar().getFace() % 100 + 20000;
                } else {
                    var current = cm.getChar().getFace() % 100 + 21000;
                }
                colors = Array();
                colors = Array(current, current + 100, current + 200, current + 300, current + 400, current + 500, current + 600, current + 700, current + 800);
                cm.sendStyle("请选择你喜欢的颜色.", colors, 5152001);
            } else if (selection == 2) {
                beauty = 2;
                haircolor = Array();
                var current = parseInt(cm.getChar().getHair() / 10) * 10;
                for (var i = 0; i < 8; i++) {
                    haircolor.push(current + i);
                }
                cm.sendStyle("我可以改变你的发色,让它比现在看起来漂亮. 你为什么不试着改变它下? 我将会帮你改变你的发色,那么选择一个你想要的新发色吧!", haircolor, 5151001);

            } else if (selection == 3) {
                beauty = 3;
                facenew = Array();
                hairnew = Array();
                if (cm.getChar().getGender() == 0) {
                    for (var i = 0; i < mhair.length; i++) {
                        hairnew.push(mhair[i] + parseInt(cm.getChar().getHair() % 10));
                    }
                }
                if (cm.getChar().getGender() == 1) {
                    for (var i = 0; i < fhair.length; i++) {
                        hairnew.push(fhair[i] + parseInt(cm.getChar().getHair() % 10));
                    }
                }
                cm.sendStyle("我可以改变你的发型,让它比现在看起来漂亮.你为什么不试着改变它下? 我将会帮你改变你的发型,那么选择一个你想要的新发型吧!", hairnew, 5150001);
            } else if (selection == 4) {
                beauty = 4;
                cm.sendStyle("用我们特殊开发的机器可查看护肤后的效果噢,想换成什么样的皮肤呢？请选择～~", skin, 5153000);
            } else if (selection == 5) {
                beauty = 5;
                hairnew = Array();
                if (cm.getChar().getGender() == 0) {
                    for (var i = 0; i < mmhair.length; i++) {
                        hairnew.push(mmhair[i] + parseInt(cm.getChar().getHair() % 10));
                    }
                }
                if (cm.getChar().getGender() == 1) {
                    for (var i = 0; i < mfhair.length; i++) {
                        hairnew.push(mfhair[i] + parseInt(cm.getChar().getHair() % 10));
                    }
                }
                cm.sendStyle("我可以改变你的发型,让它比现在看起来漂亮。你为什么不试着改变它下? 我将会帮你改变你的发型,那么选择一个你想要的新发型吧!", hairnew, 5150001);
            }
        } else if (status == 2) {
            cm.dispose();
            if (beauty == 0) {
                if (cm.haveItem(5152001) == 0) {
                    cm.gainItem(5152001, -0);
                    cm.setFace(facenew[selection]);
                    cm.sendOk("好了,你的朋友们一定认不出来是你了!");
                } else if (cm.getPlayer().getCSPoints(1) >= 0) {
                    cm.getPlayer().modifyCSPoints(1, -0);
                    cm.setFace(facenew[selection]);
                    cm.sendOk("好了,你的朋友们一定认不出来是你了!");
                } else {
                    cm.sendOk("看起来你并没有我们的高级会员卡,我恐怕不能给你进行整形手术,我很抱歉.请你先购买吧.");
                }
            } else if (beauty == 1) {
                if (cm.haveItem(5152001) == 0) {
                    cm.gainItem(5152001, -0);
                    cm.setFace(colors[selection]);
                    cm.sendOk("好了,你的朋友们一定认不出来是你了!");
                } else if (cm.getPlayer().getCSPoints(1) >= 0) {
                    cm.getPlayer().modifyCSPoints(1, -0);
                    cm.getPlayer().UpdateCash();
                    cm.setFace(colors[selection]);
                    cm.sendOk("好了,你的朋友们一定认不出来是你了!");
                } else {
                    cm.sendOk("看起来你并没有我们的高级会员卡,我恐怕不能给你进行整形手术,我很抱歉.请你先购买吧.");
                }
            } else if (beauty == 2) {
                if (cm.haveItem(5151001) == 0) {
                    cm.gainItem(5151001, -0);
                    cm.setHair(haircolor[selection]);
                    cm.sendOk("好了,你的朋友们一定认不出来是你了!");
                } else if (cm.getPlayer().getCSPoints(1) >= 0) {
                    cm.getPlayer().modifyCSPoints(1, -0);
                    cm.getPlayer().UpdateCash();
                    cm.setHair(haircolor[selection]);
                    cm.sendOk("好了,你的朋友们一定认不出来是你了!");
                } else {
                    cm.sendOk("看起来你并没有我们的高级会员卡,我恐怕不能给你进行整形手术,我很抱歉.请你先购买吧.");
                }
            } else if (beauty == 3) {
                if (cm.haveItem(5150001) == 0) {
                    cm.gainItem(5150001, -0);
                    cm.setHair(hairnew[selection]);
                    cm.sendOk("好了,你的朋友们一定认不出来是你了!");
                } else if (cm.getPlayer().getCSPoints(1) >= 0) {
                    cm.getPlayer().modifyCSPoints(1, -0);
                    cm.getPlayer().UpdateCash();
                    cm.setHair(hairnew[selection]);
                    cm.sendOk("好了,你的朋友们一定认不出来是你了!");
                } else {
                    cm.sendOk("看起来你并没有我们的高级会员卡,我恐怕不能给你进行整形手术,我很抱歉.请你先购买吧.");
                }
            } else if (beauty == 4) {
                if (cm.haveItem(5153000) == 0) {
                    cm.gainItem(5153000, -0);
                    cm.setSkin(skin[selection]);
                    cm.sendOk("好了,你的朋友们一定认不出来是你了!");
                } else if (cm.getPlayer().getCSPoints(1) >= 0) {
                    cm.getPlayer().modifyCSPoints(1, -0);
                    cm.getPlayer().UpdateCash();
                    cm.setSkin(skin[selection]);
                    cm.sendOk("好了,你的朋友们一定认不出来是你了!");
                } else {
                    cm.sendOk("看起来你并没有我们的高级会员卡,我恐怕不能给你进行整形手术,我很抱歉.请你先购买吧.");
                }
            } else if (beauty == 5) {
                if (cm.haveItem(5150001) == 0) {
                    cm.gainItem(5150001, -0);
                    cm.setHair(hairnew[selection]);
                    cm.sendOk("好了,你的朋友们一定认不出来是你了!");
                } else if (cm.getPlayer().getCSPoints(1) >= 0) {
                    cm.getPlayer().modifyCSPoints(1, -0);
                    cm.getPlayer().UpdateCash();
                    cm.setHair(hairnew[selection]);
                    cm.sendOk("好了,你的朋友们一定认不出来是你了!");
                } else {
                    cm.sendOk("看起来你并没有我们的高级会员卡,我恐怕不能给你进行整形手术,我很抱歉.请你先购买吧.");
                }
            }
        }
    }
}
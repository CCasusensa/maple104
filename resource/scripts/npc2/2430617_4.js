var status = -1;
var selectedType = 0;
var selectedMeso = 0;
var moneyMeso = 1;
var youxibi = 100000000;

function start() {
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
        if (mode == 1) {
            status++;
        } else {
            if (status == 2) {
                cm.sendOk("尊贵的#r#h ##k再见！");
                cm.dispose();
            }
            status--;
        }
        if (status == 0) {
            cm.sendSimple("尊贵的#r#h ##k您好！请选择您需要操作的项目:\r\n\r\n您目前身上有#r " + cm.getMeso() + " #k金币\r\n您的Maplewing贡献点数为#r " + cm.getMaplewing() + " #k点\r\n#b#L0#增加Maplewing贡献点数#l\r\n#L2#兑换成纪念币#l\r\n#L1#领取游戏币#l");
        } else if (status == 1) {
            selectedType = selection;
            if (selectedType == 0) {
                cm.sendGetNumber("请输入您要增加的Maplewing贡献点数:\r\n", 1, 1, 9999999);
            } else if (selectedType == 1) {
                cm.sendGetNumber("请输入您要取款的金额(单位: 亿 ):\r\n", 1, 1, 10);
            }
        } else if (status == 2) {
            selectedMeso = selection;
            if (selectedType == 0) {
                cm.sendYesNo("您是否要增加的Maplewing贡献点数#r " + selectedMeso + " #k。");
            } else if (selectedType == 1) {
                cm.sendYesNo("您是否要取出#r " + selectedMeso + " #k。");
            }
        } else if (status == 3) {
            if (selectedType == 0) {
                //if (cm.getMeso() >= selectedMeso * moneyMeso) {
                   // cm.sendNext("您的金币不够。"); //}else 
                if (cm.addMaplewing(selectedMeso, 0) > 0) {
                    //cm.gainMeso( - selectedMeso * moneyMeso);
                    cm.sendOk("好的，已经增加Maplewing贡献点数！\r\n您的Maplewing贡献点数为#r " + cm.getMaplewing() + " #k点");
                } else {
                    cm.sendOk("增加Maplewing贡献点数出现错误，请反馈给管理员！");
                }
                cm.dispose();
            } else if (selectedType == 1) {
                if (cm.getMaplewing() < selectedMeso) {
                    cm.sendNext("您没有存那么多钱。");
                } else if (cm.getMeso() > 1000000000) {
                    cm.sendNext("您身上的金币超过了 10 亿，领取失败。请将金币存入仓库后来找我领取吧！");
                } else if (cm.addMaplewing( - selectedMeso, 1) > 0) {
                    cm.gainMeso(selectedMeso * youxibi);
                    cm.sendOk("好的，请收好您的钱！");
                } else {
                    cm.sendOk("取款出现错误，请反馈给管理员！");
                }
                cm.dispose();
            }
        } else {
            cm.dispose();
        }
    }
}
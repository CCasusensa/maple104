/* 
	
*/
var status = -1;
var hair_Colo_new;

function action(mode, type, selection) {
    if (mode == 0) {
        cm.dispose();
        return;
    } else {
        status++;
    }
    if (status == 0) {
        cm.sendSimple("��á�����С����Ƹ��Ĺ��ʶ�������ʦ#b#p1012117##k���������#b#t05150040##k���ҿ���Ϊ�����һ������ϡ�з��ͣ������������������ڲ�ͬ����ô����Ҫ����һ����\r\n#b#L0#��������(ʹ�ûʼ�����ȯ)#l");
    } else if (status == 1) {
        if (selection == 0) {
            var hair = cm.getPlayerStat("HAIR");
            hair_Colo_new = [];
            if (cm.getPlayerStat("GENDER") == 0) {
                hair_Colo_new = [36370, 36360, 36310, 36300, 36290, 36220, 36180, 36140, 36050, 36030, 36020, 36010, 36000, 33990, 33980, 33970, 33960, 33950, 33940, 33810, 33800, 33790, 33780, 33770, 33760, 33750, 33720, 33660, 33650, 33640, 33630, 33580, 33550, 33540, 33520, 33500, 33480, 33470, 33440, 33400, 33390, 33380, 33340, 33330, 33270, 36080, 36110, 36130, 36150, 36190, 36230, 36330, 36340, 36410, 36430, ];
            } else {
                hair_Colo_new = [37290, 37280, 37190, 37090, 37060, 37000, 34900, 34880, 34770, 34750, 34670, 34560, 34490, 34450, 34430, 34440, 34380, 34370, 34360, 34350, 34340, 34310, 34510, 34820, 37420, 37010, 37020, 37070, 37100, 37210, 37230, 37320, ];
            }
            for (var i = 0; i < hair_Colo_new.length; i++) {
                hair_Colo_new[i] = hair_Colo_new[i] + (hair % 10);
            }
            cm.sendYesNo("ʹ�ûʼ�����ȯ����������������͡������Ҫʹ��#b#t05150040##k������������");
        }
    } else if (status == 2) {
        if (cm.setRandomAvatar(5150040, hair_Colo_new) == 1) {
            cm.sendOk("����,����������̾����·��Ͱ�!");
        } else {
            cm.sendOk("����Ҫ�лʼ�����ȯ���Ҳ���Ϊ��������");
        }
        cm.safeDispose();
    }
}
importPackage(net.sf.odinms.tools);
importPackage(net.sf.odinms.client);

/* Adobis
feiqi entrance
*/
var status = 1;
var price = 5000000;
var map = Array(910340100);

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
            cm.sendSimple("��ʿ, #h #. ������������һ��μ������ս������.��ս��ɺ���������벻���Ľ�������˵����Ա����˺ܶ��̳��򲻵��ĵ�װ�����Ӵ��������һ��ȥ���԰� \r\n#g�������ʿ��Ӹ���#k.\r\n #dÿ��ֻ�ܽ�����ʿ��Ӹ����ݴ�.#k#r�������Ѿ�����"+cm.getBossLog('feiqi')+"��#k.#k#l\r\n#L1##r�������ʿ��Ӹ���.#l");
        } else if (status == 1) {
            if (selection == 0) {
                if(cm.getMeso() >= 5000000) {
                    cm.gainMeso(-5000000);
                    cm.gainItem(4001564, -1000);
                    cm.gainItem(4001564, 1);
                } else {
                    cm.sendOk("��ȷ�����İ��������㹻�Ľ��.");
                }
                cm.dispose();
            } else if (status == 2) {
            } else if (cm.getLevel() >= 100) {
                if(cm.getParty() == null){
                    cm.sendOk("���Ƚ�����ӡ�");
                    cm.dispose();
                    return;
                }
                if(!cm.isLeader()){
                    cm.sendOk("���öӳ�����˵����");
                    cm.dispose();
                    return;
                }
                if(!cm.getParty().AllMembersAtMap(cm.getChar())){
                    cm.sendOk("��Ķ�Ա���������");
                    cm.dispose();
                    return;
                }
                var map = cm.getC().getChannelServer().getMapFactory().getMap(910340100);
                if(map.getCharacters().size()>0){
                    cm.sendOk("�����Ѿ������ˡ�");
                    cm.dispose();
                    return;
                }
                if ((cm.getParty().AllMembersNoBossLog('feiqi',10,false) && cm.getC().getChannel() > 1 && cm.getC().getChannel() < 9)
                    )
                    { 
                    map.resetReactors();
                    map.killAllMonsters();
                    cm.getParty().WarpToMap(map,0);
                    cm.getParty().AllMembersSetBossLog('feiqi');
                    cm.gainItem(4001564, 1);
                    cm.dispose();
                }
                else
                {
                    cm.sendOk("��Ķ�Աû��������������\r\n��Ķ�Աÿ��5��.VIP��Ա�����ƴ���.\r\n������2-3Ƶ������.");
                    mode = 1;
                    status = -1;
                }
            } else{
                cm.sendOk("�����ﵽ100�����ϲ�����ս #m910340100#.");
                mode = 1;
                status = -1;
            }
        }
    }
}
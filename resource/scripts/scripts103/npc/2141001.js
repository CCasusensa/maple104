importPackage(net.sf.odinms.tools);
importPackage(net.sf.odinms.client);

/* Adobis
PB entrance
*/
var status = 1;
var price = 5000000;
var map = Array(270050100);

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
            cm.sendSimple("��ʿ, #h #. ������������һ��μ������ս������.��ս��ɺ���������벻���Ľ�������˵����Ա����˺ܶ��̳��򲻵��ĵ�װ�����Ӵ��������һ��ȥ���԰� \r\n#g����ʱ����-PB����#k.\r\n #dÿ��ֻ�ܽ�ʱ����-PB�����۴�.#k#r�������Ѿ�����"+cm.getBossLog('PB')+"��#k.#k#l\r\n#L1##r����ʱ����-PB����.#l");
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
                var map = cm.getC().getChannelServer().getMapFactory().getMap(270050100);
                if(map.getCharacters().size()>1){
                    cm.sendOk("�����Ѿ������ˡ�");
                    cm.dispose();
                    return;
                }
                if ((cm.getParty().AllMembersNoBossLog('PB',10,false) && cm.getC().getChannel() > 1 && cm.getC().getChannel() < 9)
                    )
                    { 
                    map.resetReactors();
                    map.killAllMonsters();
                    cm.getParty().WarpToMap(map,0);
                    cm.getParty().AllMembersSetBossLog('PB');
                    cm.gainItem(4001394, 1);
cm.serverNotice("��ʱ��������������"+ cm.getChar().getName() +"����Ȼ�������Ķ�����սʱ����BOSS��");
                    cm.dispose();
                }
                else
                {
                    cm.sendOk("��Ķ�Աû��������������\r\n��Ķ�Աÿ��3��.VIP��Ա�����ƴ���.\r\n������2-3Ƶ������.");
                    mode = 1;
                    status = -1;
                }
            } else{
                cm.sendOk("�����ﵽ100�����ϲ�����ս ");
                mode = 1;
                status = -1;
            }
        }
    }
}
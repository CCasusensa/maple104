var mmm="#fEffect/CharacterEff/1112905/0/1#";
function start() {

    cm.sendSimple ("��ӭ����#r"+cm.GetSN()+"#k,( ^_^ )\r\n#r���ǿɰ�����ţ����\r\n#b�����˶����ҹ���\r\n#r#L1#1��#v3994246#��ȡ#v4310030##l    #L2#10��#v3994246#��ȡ#v3010215#")
}

function action(mode, type, selection) {
    cm.dispose();

    switch(selection){

        case 1:
            if(cm.haveItem(3994246, 1)) {
                cm.sendOk("����1��#v3994246#�ѱ��ջ�!Ϊ�˻ر��㣬�Ҹ���#v4310030#!")
                cm.gainItem(3994246, -1);
                cm.gainItem(4310030, 1);
                        cm.serverNotice(5,"[�˶��ṫ��]����ϲ�˶�����:"+cm.getChar().getName()+" �ɹ����һö�˶�����");
                cm.dispose();
            } else {
                cm.sendOk("#r������һ��#v3994246#��ʱ���ҿ��Ը�����ȡһö#v4310030#")
                cm.dispose();    
            };    
            break;
        case 2:
            if(cm.haveItem(3994246, 10)) {
                cm.sendOk("����10��#v3994246#�ѱ��ջ�!Ϊ�˻ر��㣬�Ҹ���#v3010215#!")
                cm.gainItem(3994246, -10);
                cm.gainItem(3010215, 1);
                cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(17,cm.getC().getChannel(),"[�˶��ṫ��]" + " : ��ϲ�˶�������" + cm.getPlayer().getName() +" �ɹ��ռ�10���˶����һ�ȡ��Ҷ������",true).getBytes());
                cm.dispose();
            } else {
                cm.sendOk("#r������10��#v3994246#��ʱ���ҿ��Ը�����ȡ����#v3010215#")
                cm.dispose();    
            };    
            break;
    }
}

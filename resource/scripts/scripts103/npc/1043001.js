var mmm="#fEffect/CharacterEff/1112905/0/1#";
function start() {

    cm.sendSimple ("��ӭ����#r"+cm.GetSN()+"#k,( ^_^ )\r\n�����ǽ���С�ݣ�\r\n#L0#��ϲ�������.#l")
}

function action(mode, type, selection) {
    cm.dispose();

    switch(selection){
        case 0:
        if (!cm.haveItem(4002000,1)) {
        cm.sendOk("��Ǹ����û��1��#v4002000v#�޷���ȡ����.�� ���������ռ�)");
} else {
	cm.gainItem(4002000,-1);
   cm.teachSkill(80001026,10,10);//ɨ�Ѽ���
                cm.warp(910000000,0);
                cm.sendOk("��ϲ�����Ѿ������ɨ�����＼��!˫������,ѡ������ʹ��");
cm.getC().getChannelServer().broadcastPacket(net.sf.odinms.tools.MaplePacketCreator.serverNotice(0x10,cm.getC().getChannel(),"��"+ cm.getChar().getName() +"��"+" : "+"��~~!!�������Ѿ������ħ������������������﹧ϲ����!!"))
                cm.dispose();
            }
           
    }
}

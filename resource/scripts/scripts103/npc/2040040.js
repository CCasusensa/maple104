var mmm="#fEffect/CharacterEff/1112905/0/1#";
function start() {

    cm.sendSimple ("��ӭ����#r"+cm.GetSN()+"#k,( ^_^ )\r\n\r\n#v4310030##v4310030##v4310030##v4310030##v4310030##v4310030##v4310030##v4310030##v4310030##v4310030##v4310030#\r\n\r\n#r����,�����˶�������?\r\n#b����������·��Ѱ����ţ������ȡ��Ұ�")
}

function action(mode, type, selection) {
    cm.dispose();

    switch(selection){

        case 1:
            if(cm.haveItem(4031020, 1)) {
                cm.sendOk("����1��#v4031020#�ѱ��ջ�!Ϊ�˻ر��㣬�Ҹ���#v4310030#!")
                cm.gainItem(4031020, -1);
                cm.gainItem(4310030, 1);
                        cm.serverNotice(5,"[�˶��ṫ��]����ϲ�˶�����:"+cm.getChar().getName()+" �ɹ����һö�˶�����");
                cm.dispose();
            } else {
                cm.sendOk("#r������һ��#v4031020#��ʱ���ҿ��Ը�����ȡһö#v4310030#")
                cm.dispose();    
            };    
            break;

}
}


var minPlayers = 1;
var maxPlayers = 6;
var status = 0;

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
            if (cm.haveItem(4032923)){
                cm.sendSimple("���Ѿ���Կ���ˣ������ظ���ȡ��\r\n\r\n#L6#ϣ��˹��ͥԺ#l ");
            }else{ 
                cm.sendSimple("���뵽����֮��ȥ��û��#v4032923##b#z4032923##k�ǽ���ȥ�ģ������������ľ��飬��˵��������Եõ�ϣ��˹��ͥԺ��Կ�ף�Ϊ�˺�ƽ�������Ŭ����#b\r\n\r\n#L1#���֮��#l \r\n#L2#����֮��#l \r\n#L3#�籩֮��#l \r\n#L4#�ڰ�֮��#l \r\n#L5#����֮��#l \r\n#r#L7#�鿴����#l#k");
            }
        } else if (status == 1) {
            if (selection == 1) {
                cm.warp(271030201,0);
                cm.dispose();
            }else if (selection == 2) {
                cm.warp(271030202,0);
                cm.dispose();      
            }else if (selection == 3) {
                cm.warp(271030203,0);
                cm.dispose(); 
            }else if (selection == 4) {
                cm.warp(271030204,0);
                cm.dispose(); 
            }else if (selection == 5) {
                cm.warp(271030205,0);
                cm.dispose(); 
            }else if (selection == 6) {
                cm.warp(271040000,0);
                cm.dispose();
		   }else if (selection == 7) {
			   cm.sendOk("��ֱ��������5����ͼ�ռ������㹻�ĵ���\r\n\r\n#v4000660# x10��#v4000661# x10�� #v4000662# x10��#v4000663# x10�� #v2430200# x1��\r\n�ռ����Ժ�ʹ��������֮���ռ�����#v2430200##r˫���򿪣��Զ���ϳ�Կ��#v4032923#");
			   cm.dispose();
            }
        }
    }
}
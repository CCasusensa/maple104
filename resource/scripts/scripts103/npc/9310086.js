
/* 
*��ű� 
*/ 
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
  
            cm.sendSimple("#d���,���ǡ�����ϡ����Ʒ������NPC,,����Ҫ��ѡ��: \r\n#L1# ����������ON.1�� \r\n#L2# ����������ON.2�� \r\n#L3# ����������ON.3��");  
        } else if (status == 1) { 
            if (selection == 1) { 
                if (cm.haveItem(4000124, 50)) { 
                    cm.gainItem(4000124, -50); 
                    cm.gainItem(4031225, 10); 
                    cm.gainItem(1402037, 1);
                    cm.gainItem(1012070, 1);
                    cm.gainItem(1012071, 1);
                    cm.gainItem(1012072, 1);
                    cm.gainItem(1012073, 1); 
                    cm.sendOk("#r����̫��л����,�����һ�������Ҫ�Ĳ��ϣ�#r ������������ ȥ����һ������"); 
                    cm.dispose(); 
                } else { 
                    cm.sendOk("#b�����������á�"+cm.GetSN()+"�����ȥ�Ա�ʤ�Ͳ�С��Ūʧ���ҵļӹ�Ʒ�����ڼ���Ҫ50��#v4000124#����԰����һ������㽫��þ��˰�ġ�ѩ�⡿��װ��һ�ѡ�#v1402037#��һ����#v1012070#��һ���� #v1012071#��һ���� #v1012072#��һ���� #v1012073#");  
                    cm.dispose(); 
                } 
            } else if (selection == 2) { 
                if (cm.itemQuantity(4031225) >= 10) { 
                    if ((cm.haveItem(4005000, 1)) && (cm.haveItem(4005001)) && (cm.haveItem(4005002)) && (cm.haveItem(4005003))) { 
                        cm.sendOk("#r�ۣ���ô����ռ����ˣ��ð��Ұ�#v3010111#��������");
                        cm.gainItem(4005000, -10); 
                        cm.gainItem(4005001, -10); 
                        cm.gainItem(4005002, -10); 
                        cm.gainItem(4005003, -10); 
                        cm.gainItem(3010111, 1); 
                        cm.gainItem(4031018, 1); 
                        cm.dispose(); 
                    } else{ 
                        cm.sendOk("#g(*^__^*) �����������㰡������ҪҪ���¼ӹ���������Ҫ�ܶ��ʯ�� ���������ռ���Щ�� 10��#v4005000#10��#v4005001#10��#v4005002#10��#v4005003# �㽫��þ��˰��#v3010111#"); 
                        cm.dispose(); 
                    } 
  
                } else{ 
                    cm.sendOk("#e��û����ɡ�����һ��"); 
                    cm.dispose(); 
                } 
  
            } else if (status == 3) { 
            } else if (selection == 3 && cm.itemQuantity(4031018) >= 1) { 
                if (cm.getBossLog('renwu') < 1){ 
                    if ((cm.haveItem(1382060, 1)) && (cm.haveItem(1442068)) && (cm.haveItem(1452060)) && (cm.haveItem(1002812))) { 
                        cm.sendOk("#r��ѽ ����ѽ �ҵ��찡 �����������Ѽ��õ� ����̫��л�� �� �������� �պ���"); 
                        cm.gainItem(1382060, -1); 
                        cm.gainItem(1442068, -1); 
                        cm.gainItem(1452060, -1); 
                        cm.gainItem(1002812, -1); 
                        cm.gainItem(1402014, 1); 
                        cm.gainItem(1142002, 1); 
                        cm.gainItem(1142189, 1); 
                        cm.serverNotice("������桻����ϲ"+ cm.getChar().getName() +"�����������˻�л�ȡ �ܹ���ȡ�� ������ ������ �¶ȼ� ���!"); 
                        cm.dispose(); 
                    } else{ 
                        cm.sendOk("#k��������ˡ��ۣ�������������С�����ˣ���������Ҫ��һ����#v1382060#��һ����#v1442068#��һ����#v1452060#��һ����#v1002812# �����ɺ��������ĥ����һ�� �������º��ġ��¶ȼơ�#v1402014#����Ҫ�����㡾�������ѫ�¡�һö#v1142002# ��VIP#v1142189#һ��"); 
cm.dispose(); 
                    } 
  
                } else { 
                    cm.sendOk("���Ѿ�����Һܶ��� ȥ��Ϣһ�����"); 
                    mode = 1; 
                    status = -1; 
                } 
            } else{ 
                cm.sendOk("��û����ɡ��������"); 
                mode = 1; 
                status = -1; 
            } 
        } 
    } 
} 

var mmm="#fEffect/CharacterEff/1112905/0/1#";
function start() {

    cm.sendSimple (mmm+"����Ҫ����һ��#v4031579#�Ϳ��Ի���120����ְҵ����װӴ\r\n#r��װ����[����,ñ��,�·�,����,Ь��,����]\r\n����ʱ����ע�ⱳ����������5����λ��,��Ȼû�õ�������\r\n#L0##b��ȡһ��[#rսʿ��װ#b]#k#L1##b��ȡһ��[#rħ��ʦ��װ#k#b]#k\r\n#r#L2##b��ȡһ��[#r��������װ#b]#k#r#L3##b��ȡһ��[#r������װ#b]#k\r\n#L4##b��ȡһ��[#r������װ#b]#k")
    }

function action(mode, type, selection) {
        cm.dispose();

    switch(selection){
        case 0: 
            if(cm.haveItem(4031579, 1)) {
            cm.sendOk("�һ��ɹ�");
	    cm.gainItem(1402046,1) ; //����
	    cm.gainItem(1432047,1) ; //����
	    cm.gainItem(1002776,1) ; //ñ��
	    cm.gainItem(1082234,1) ; //����
	    cm.gainItem(1052155,1) ; //�·�
	    cm.gainItem(1072355,1) ; //Ь
            cm.gainItem(4031579, -1);
            cm.dispose();
            }else{
            cm.sendOk("��û��һ��#v4031579#");
            cm.dispose();
            }
        break;
        case 1: 
            if(cm.haveItem(4031579, 1)) {
            cm.sendOk("�һ��ɹ�");
	    cm.gainItem(1382057,1) ; //����
	    cm.gainItem(1002777,1) ; //ñ��
	    cm.gainItem(1082235,1) ; //����
	    cm.gainItem(1052156,1) ; //�·�
	    cm.gainItem(1072356,1) ; //Ь
            cm.gainItem(4031579, -1);
            cm.dispose();
            }else{
            cm.sendOk("��û��һ��#v4031579#");
            cm.dispose();
            }
        break;
        case 2:
            if(cm.haveItem(4031579, 1)) {
            cm.sendOk("�һ��ɹ�");
	    cm.gainItem(1452057,1) ; //����
	    cm.gainItem(1002778,1) ; //ñ��
	    cm.gainItem(1082236,1) ; //����
	    cm.gainItem(1052157,1) ; //�·�
	    cm.gainItem(1072357,1) ; //Ь
            cm.gainItem(4031579, -1);
            cm.dispose();
            }else{
            cm.sendOk("��û��һ��#v4031579#");
            cm.dispose();
            }
        break;
        case 3:
            if(cm.haveItem(4031579, 1)) {
            cm.sendOk("�һ��ɹ�");
	    cm.gainItem(1332074,1) ; //����
	    cm.gainItem(1002779,1) ; //ñ��
	    cm.gainItem(1082237,1) ; //����
	    cm.gainItem(1052158,1) ; //�·�
	    cm.gainItem(1072358,1) ; //Ь
            cm.gainItem(4031579, -1);
            cm.dispose();
            }else{
            cm.sendOk("��û��һ��#v4031579#");
            cm.dispose();
            }
        break;
        case 4:
            if(cm.haveItem(4031579, 1)) {
            cm.sendOk("�һ��ɹ�");
	    cm.gainItem(1492023,1) ; //����
	    cm.gainItem(1002780,1) ; //ñ��
	    cm.gainItem(1082238,1) ; //����
	    cm.gainItem(1052159,1) ; //�·�
	    cm.gainItem(1072359,1) ; //Ь
            cm.gainItem(4031579, -1);
            cm.dispose();
            }else{
            cm.sendOk("��û��һ��#v4031579#");
            cm.dispose();
            }
        break;
        case 5:
            if(cm.haveItem(4001126, 500)) {
            cm.sendOk("�һ��ɹ�")
            cm.gainItem(4001126, -500);
            cm.modifyNx(2000);//���þ�
            cm.dispose();
            } else {
                cm.sendOk("����Ҫ#b500#k��#v4001126#\r\n�������ı������Ƿ���500��������ȡ��")
                cm.dispose();    
            };
        break;
        case 6:
            if(cm.haveItem(4001126, 1000)) {
            cm.sendOk("�һ��ɹ�")
            cm.gainItem(4001126, -1000);
            cm.gainItem(4002000, +1);
            cm.dispose();
            } else {
                cm.sendOk("����Ҫ#b1000#k��#v4001126#\r\n�������ı������Ƿ���1000��������ȡ��")
                cm.dispose();
            };
        break;
        case 7:
            if(cm.haveItem(4001126, 2000)) {
            cm.sendOk("�һ��ɹ�")
            cm.gainItem(4001126, -2000);
            cm.gainItem(4031454, +1);
            cm.dispose();
            } else {
                cm.sendOk("#e����Ҫ2000��#v4001126#\r\n�������ı������Ƿ���2000��������ȡ��")
                cm.dispose();
            };  
        break;
        case 8:
            if(cm.getMeso() >= 1900000000) {
                       cm.sendOk("��ȷ����ı�����������19E�������һ�"); 
			 cm.dispose();
                       } else if(cm.haveItem(4031549, 1)) {
                          cm.gainMeso(+100000000);
                          cm.gainItem(4031549, -1);
                          cm.sendOk("�һ��ɹ�")
			 cm.dispose();
                    } else { 
                       cm.sendOk("��û��1��#v4031549#"); 
                       cm.dispose();   
				}
        break;
        case 9:
            if(cm.haveItem(4000171, 0)) {
            cm.sendOk("����500��#v4000171#�ѱ��ջ�!Ϊ�˻ر��㣬�Ҹ���2����Ұ�!")
            cm.gainItem(4000171, -0);
var ii = net.sf.odinms.server.MapleItemInformationProvider.getInstance();		                
var type = ii.getInventoryType(1002140); //���װ��������
//var temptime = new java.sql.Timestamp(java.lang.System.currentTimeMillis() + 10 * 24 * 60 * 60 * 100); //ʱ��
var toDrop = ii.randomizeStats(ii.getEquipById(1002140)).copy(); // ����һ��Equip��
toDrop.setLocked(1);
var temptime = new java.sql.Timestamp(java.lang.System.currentTimeMillis() + 10 * 24 * 60 * 60 * 0); //ʱ��
toDrop.setExpiration(temptime); //��װ��ʱ��
cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������
cm.getC().getSession().write(net.sf.odinms.tools.MaplePacketCreator.addInventorySlot(type, toDrop)); //ˢ�±���
            cm.dispose();
            } else {
                cm.sendOk("#e����Ҫ #b500#k �� #v4000171#\r\n�������ı������Ƿ���500��������ȡ��")
                cm.dispose();
            };  
        }
    }

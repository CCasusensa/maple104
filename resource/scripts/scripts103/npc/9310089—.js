var typed=0;

var status = 0;
function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (status >= 0 && mode == 0) {
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
                              cm.sendSimple("            #v3991056##v3991057##v3991058##v3991059#\r\n\r\n#e#bħ��������ã������Ƕ���һһ�����ʮ���ա�����ڿ쵽�ˡ�����ħ�������վ��ǽ��졣���ߵ���Ҷ����Ե�����������ȡħ���͵ĺ�����������ϣ����Ҷ��֧��ħ��ð�յ���ħ��ð�յ�Gm�ڴ˱�ʾ��л��!#k#l\r\n\r\n     #L9##e#rף��ħ��Gm���տ���#k#l ");
		} else if (status == 1) {
			 if (selection == 0) {
		} else if (selection == 1) {//�����޸�
  						var statup = new java.util.ArrayList();
	   					var p = cm.c.getPlayer();
				 	        if(p.getExp() < 0){
							p.setExp(0) 
					                statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.EXP, java.lang.Integer.valueOf(0))); 
				 		        p.getClient().getSession().write (net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
			   				cm.sendOk("����ֵ���޸����");
							cm.dispose();
						}else{
						        cm.sendOk("���ľ���ֵ����,�����޸�!");
							cm.dispose();
						}
						}else if (selection == 9){
							if (cm.getChar().getBossLog('ZQJ') >= 1) {
                                                        cm.sendOk("#e#g�˻�Խ���.!���ڴ��´λ.!#k#l");
                                                        cm.dispose();
                                                        }else{
							cm.sendOk("#e#r�˻�Խ���.!���ڴ��´λ.!#k#l");
							cm.dispose();
							}
				cm.dispose();

			}
		}
	}
}

/**
 *�ҷ�ʱ�г��� Ϊ�ͻ�weinan9988����
 **/

function start() {

    if(cm.countMonster()< 1) {
        cm.sendSimple ("#b�װ���#r#h ##k#b���ã��ҿ���Ϊ���ٻ�BOSS ��ѡ��:\r\n#L0#����#l\r\n#L1#�뿪��ͼ��ȥ#l\r\n\r\n        �����ˣ��ҷ�ʱ�г��� ");
    } else {
        cm.sendOk("һ�β��ܳ�����ֻBOSS,���뿪�����½���.")
    }
}
function action(mode, type, selection) {
    cm.dispose();
    if (selection == 0) {
    if (cm.getPlayer().getMeso() < 1){  
        cm.sendOk("���ð�ձҲ�������1")
        cm.dispose();
       }else{	
        cm.gainItem(4001433,-1);
        //����ID, X���꣬Y����
	cm.changeMusic("Bgm10/Eregos");
        cm.spawnMob(8800200, -202, 593);   
        cm.dispose();
        }
} else if (selection == 1) {//�뿪��ͼ
            cm.warp(910000000, 0);
            cm.dispose();
			
        }
    }
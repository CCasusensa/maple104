var status = 0;
var fstype=0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;           
        if (status == 0) {  
			cm.sendSimple("���ΰ���#b#h ##k����ϵͳ���ս��ߵ���ɫӴ��Ҳ����һ�ȡ������Ϸ�ҵķ�ʽ����������´�ϵͳ\r\n��ʼ�򹤺����NPC�ṩ�������������󣬿��Խ�����һ���򹤽׶Σ�Ҳ�����ڵ�ǰ�׶ξͽ��㹤�ʣ���Ȼ�׶�Խ�߽���Ľ���Խ�࣬�����ڸߵļ����׶ν��㻹�м��ʻ������ϡ�е��ߣ�����������뿴#r���ʱ�#k������ɣ����ж�������\r\n#rע�⣺ÿ���ֻ�ܽ���һ�ι��ʣ������׶ι���#k\r\n#L0##d��ʼ��#l#k��#L1##b���㹤��#l#k��#L2##r���ʱ�#l#k");
        } else if (status == 1) {
            if (selection==0){//��ʼ��
		fstype=1;
		if(cm.getChar().getMrsq() == 0){
		text = "#h #���,��Ŀǰ�򹤽׶�Ϊ#r[" + cm.getChar().getMrsq() + "]#k�����޷����㹤��Ӵ\r\n";
		text += "����������һ�׶εĴ򹤹�������Ҵ�����\r\n";
		text += "#i4000034#x30��#i4000135#x30��\r\n";
		text += "#L0##r[�Ƽ�]#d�ύ������һ���򹤽׶�#k#l"; 
		cm.sendSimple(text);
		}else if(cm.getChar().getMrsq() == 1){
		text = "#h #���,��Ŀǰ�򹤽׶�Ϊ#r[" + cm.getChar().getMrsq() + "]#k��ֻ�ܽ��㲻��Ĺ���Ӵ\r\n";
		text += "����������һ�׶εĴ򹤹�������Ҵ�����\r\n";
		text += "#i4000180#x40��#i4000110#x40��\r\n";
		text += "#L1##r[�Ƽ�]#d�ύ������һ���򹤽׶�#k#l"; 
		cm.sendSimple(text);
		}else if(cm.getChar().getMrsq() == 2){
		text = "#h #���,��Ŀǰ�򹤽׶�Ϊ#r[" + cm.getChar().getMrsq() + "]#k��ֻ�ܽ��㲻��Ĺ���Ӵ\r\n";
		text += "����������һ�׶εĴ򹤹�������Ҵ�����\r\n";
		text += "#i4000268#x50��#i4000465#x50��\r\n";
		text += "#L2##r[�Ƽ�]#d�ύ������һ���򹤽׶�#k#l"; 
		cm.sendSimple(text);
		}else if(cm.getChar().getMrsq() == 3){
		text = "#h #���,��Ŀǰ�򹤽׶�Ϊ#r[" + cm.getChar().getMrsq() + "]#k��ֻ�ܽ��㲻��Ĺ���Ӵ\r\n";
		text += "����������һ�׶εĴ򹤹�������Ҵ�����\r\n";
		text += "#i4000009#x50��#i4000007#x50��\r\n";
		text += "#L3##r[�Ƽ�]#d�ύ������һ���򹤽׶�#k#l"; 
		cm.sendSimple(text);
		}else if(cm.getChar().getMrsq() == 4){
		text = "#h #���,��Ŀǰ�򹤽׶�Ϊ#r[" + cm.getChar().getMrsq() + "]#k���ܽ���һ�ʲ��ٵĹ�����Ӵ\r\n";
		text += "����������һ�׶εĴ򹤹�������Ҵ�����\r\n";
		text += "#i4000267#x60��#i4000035#x50��\r\n";
		text += "#L4##r[�Ƽ�]#d�ύ������һ���򹤽׶�#k#l"; 
		cm.sendSimple(text);
		}else if(cm.getChar().getMrsq() == 5){
		text = "#h #���,��Ŀǰ�򹤽׶�Ϊ#r[" + cm.getChar().getMrsq() + "]#k���ܽ���һ�ʲ��ٵĹ�����Ӵ\r\n";
		text += "����������һ�׶εĴ򹤹�������Ҵ�����\r\n";
		text += "#i4000039#x60��#i4000129#x50��\r\n";
		text += "#L5##r[�Ƽ�]#d�ύ������һ���򹤽׶�#k#l"; 
		cm.sendSimple(text);
		}else if(cm.getChar().getMrsq() == 6){
		text = "#h #���,��Ŀǰ�򹤽׶�Ϊ#r[" + cm.getChar().getMrsq() + "]#k���ܽ���һ�ʽ϶�Ĺ�����Ӵ\r\n";
		text += "����������һ�׶εĴ򹤹�������Ҵ�����\r\n";
		text += "#i4000274#x60��#i4000232#x60��\r\n";
		text += "#L6##r[�Ƽ�]#d�ύ������һ���򹤽׶�#k#l"; 
		cm.sendSimple(text);
		}else if(cm.getChar().getMrsq() == 7){
		text = "#h #���,��Ŀǰ�򹤽׶�Ϊ#r[" + cm.getChar().getMrsq() + "]#k���ٴ�һ�ξ��ܻ�ô����Ĺ���Ӵ\r\n";
		text += "����������һ�׶εĴ򹤹�������Ҵ�����\r\n";
		text += "#i4000034#x100��#i4000171#x100��#i4000035#x100��\r\n";
		text += "#L7##r[�Ƽ�]#d�ύ������һ���򹤽׶�#k#l"; 
		cm.sendSimple(text);
		}else if(cm.getChar().getMrsq() == 8){
		cm.sendOk("�~�治�����ţ���Ȼ��������н׶εĹ�������ȥ���㹤�ʰ����꣡"); 
		cm.dispose();
		}else{
		cm.sendOk("δ֪����..");
		cm.dispose();
			}
            }else if (selection==1){//���㹤��
				fstype=2;
				cm.sendNext("��Ŀǰ��" + cm.getChar().getMrsq() + "�򹤽׶Σ�ȷ�Ͻ��㹤����һ��ֻ�ܽ���һ��Ӵ");
            }else if (selection==2){//���ʱ�
				cm.sendOk("#r====================���ʱ�=======================#k\r\n#d�򹤽׶�#k#r[1]#k_������[1000W]\r\n#d�򹤽׶�#k#r[2]#k_������[2000W]\r\n#d�򹤽׶�#k#r[3]#k_������[4000W][�л��ʻ��#z2430483#]\r\n#d�򹤽׶�#k#r[4]#k_������[8000W][�л��ʻ��#z2430483#]\r\n#d�򹤽׶�#k#r[5]#k_������[1.6E] [100%�ʻ��#z2430483#]\r\n#d�򹤽׶�#k#r[6]#k_������[3.2E] [100%�ʻ��#z2430483#]\r\n#d�򹤽׶�#k#r[7]#k_������[6.4E] [100%�ʻ��#z2430483#]\r\n#d�򹤽׶�#k#r[8]#k_������[12.8E][�л��ʻ��#z2430030#]"); 
				cm.dispose();
			}
       } else if (status == 2) {
			if(fstype==1){//�����ύ
				if(selection==0){
				if (cm.haveItem(4000034,30) && cm.haveItem(4000135,30)){
					cm.getChar().setMrsq(1);
					cm.gainItem(4000034,-30);
					cm.gainItem(4000135,-30);
					cm.getChar().setXw(cm.getChar().getXw() + 5);
					cm.sendOk("��ϲ���Խ��н׶�1�Ĵ�");
					cm.dispose();
				}else{
					cm.sendOk("�����㻹û���ռ�������Ҫ����Ʒ,������Ҫ�����ĵ�..���Ͱ�!!!..!");
					cm.dispose();
				}
				}else if(selection==1){
				if (cm.haveItem(4000180,40) && cm.haveItem(4000110,40)){
					cm.getChar().setMrsq(2);
					cm.gainItem(4000180,-40);
					cm.gainItem(4000110,-40);
					cm.getChar().setXw(cm.getChar().getXw() + 5);
					cm.sendOk("��ϲ���Խ��н׶�2�Ĵ�");
					cm.dispose();
				}else{
					cm.sendOk("�����㻹û���ռ�������Ҫ����Ʒ,������Ҫ�����ĵ�..���Ͱ�!!!..!");
					cm.dispose();
				}
				}else if(selection==2){
				if (cm.haveItem(4000268,50) && cm.haveItem(4000465,50)){
					cm.getChar().setMrsq(3);
					cm.gainItem(4000268,-50);
					cm.gainItem(4000465,-50);
					cm.getChar().setXw(cm.getChar().getXw() + 5);
					cm.sendOk("��ϲ���Խ��н׶�3�Ĵ�");
					cm.dispose();
				}else{
					cm.sendOk("�����㻹û���ռ�������Ҫ����Ʒ,������Ҫ�����ĵ�..���Ͱ�!!!..!");
					cm.dispose();
				}
				}else if(selection==3){
				if (cm.haveItem(4000009,50) && cm.haveItem(4000007,50)){
					cm.getChar().setMrsq(4);
					cm.gainItem(4000009,-50);
					cm.gainItem(4000007,-50);
					cm.getChar().setXw(cm.getChar().getXw() + 5);
					cm.sendOk("��ϲ���Խ��н׶�4�Ĵ�");
					cm.dispose();
				}else{
					cm.sendOk("�����㻹û���ռ�������Ҫ����Ʒ,������Ҫ�����ĵ�..���Ͱ�!!!..!");
					cm.dispose();
				}
				}else if(selection==4){
				if (cm.haveItem(4000267,60) && cm.haveItem(4000035,50)){
					cm.getChar().setMrsq(5);
					cm.gainItem(4000267,-60);
					cm.gainItem(4000035,-50);
					cm.getChar().setXw(cm.getChar().getXw() + 5);
					cm.sendOk("��ϲ���Խ��н׶�5�Ĵ�");
					cm.dispose();
				}else{
					cm.sendOk("�����㻹û���ռ�������Ҫ����Ʒ,������Ҫ�����ĵ�..���Ͱ�!!!..!");
					cm.dispose();
				}
				}else if(selection==5){
				if (cm.haveItem(4000039,60) && cm.haveItem(4000129,50)){
					cm.getChar().setMrsq(6);
					cm.gainItem(4000039,-60);
					cm.gainItem(4000129,-50);
					cm.getChar().setXw(cm.getChar().getXw() + 5);
					cm.sendOk("��ϲ���Խ��н׶�6�Ĵ�");
					cm.worldMessage("[��ϵͳ]�����["+cm.getChar().getName()+"]�򹤽��е���6�׶Σ�����Ŭ��������");
					cm.dispose();
				}else{
					cm.sendOk("�����㻹û���ռ�������Ҫ����Ʒ,������Ҫ�����ĵ�..���Ͱ�!!!..!");
					cm.dispose();
				}
				}else if(selection==6){
				if (cm.haveItem(4000274,60) && cm.haveItem(4000232,60)){
					cm.getChar().setMrsq(7);
					cm.gainItem(4000274,-60);
					cm.gainItem(4000232,-60);
					cm.getChar().setXw(cm.getChar().getXw() + 5);
					cm.sendOk("��ϲ���Խ��н׶�7�Ĵ�");
					cm.worldMessage("[��ϵͳ]�����["+cm.getChar().getName()+"]�򹤽��е���7�׶Σ�����Ŭ��������");
					cm.dispose();
				}else{
					cm.sendOk("�����㻹û���ռ�������Ҫ����Ʒ,������Ҫ�����ĵ�..���Ͱ�!!!..!");
					cm.dispose();
				}
				}else if(selection==7){
				if (cm.haveItem(4000034,100) && cm.haveItem(4000171,100) && cm.haveItem(4000035,100)){
					cm.getChar().setMrsq(8);
					cm.gainItem(4000034,-100);
					cm.gainItem(4000171,-100);
					cm.gainItem(4000035,-100);
					cm.getChar().setXw(cm.getChar().getXw() + 5);
					cm.sendOk("��ϲ����������еĴ򹤣�ȥ���㹤�ʰ�");
					cm.dispose();
				}else{
					cm.sendOk("�����㻹û���ռ�������Ҫ����Ʒ,������Ҫ�����ĵ�..���Ͱ�!!!..!");
					cm.dispose();
				}
				}
				}		
			if(fstype==2){//���ʽ���
			if (cm.getBossLog("���ʽ���") == 1) {
		cm.sendOk("������Ѿ������1�ι�����,һ��ֻ�ܽ���һ�ι���");
		cm.dispose();
			}else if(cm.getChar().getMrsq() == 0){
			cm.sendOk("��û�д򹤣�����û�й��ʽ��㣬û�и�����û���ջ������");
			cm.dispose();
			}else if(cm.getChar().getMrsq() == 1){
			cm.getChar().setMrsq(0);
			cm.gainMeso(10000000);
			cm.setBossLog("���ʽ���");
			cm.sendOk("���㹤�ʳɹ���������\r\n��Ϸ�ң�10,000,000");
			cm.dispose();
			}else if(cm.getChar().getMrsq() == 2){
			cm.getChar().setMrsq(0);
			cm.gainMeso(20000000);
			cm.setBossLog("���ʽ���");
			cm.sendOk("���㹤�ʳɹ���������\r\n��Ϸ�ң�20,000,000");
			cm.dispose();
			}else if(cm.getChar().getMrsq() == 3){
			var chance = Math.floor(Math.random()*2);
			if(chance==1){
			cm.getChar().setMrsq(0);
			cm.gainMeso(40000000);
			cm.gainItem(2430483,+1);
			cm.setBossLog("���ʽ���");
			cm.sendOk("���㹤�ʳɹ���������\r\n��Ϸ�ң�40,000,000��#r#z2430483##k1��");
			cm.dispose();
			}else{
			cm.getChar().setMrsq(0);
			cm.gainMeso(40000000);
			cm.setBossLog("���ʽ���");
			cm.sendOk("���㹤�ʳɹ���������\r\n��Ϸ�ң�40,000,000");
			}
			}else if(cm.getChar().getMrsq() == 4){
			var chance = Math.floor(Math.random()*2);
			if(chance==1){
			cm.getChar().setMrsq(0);
			cm.gainMeso(80000000);
			cm.gainItem(2430483,+1);
			cm.setBossLog("���ʽ���");
			cm.sendOk("���㹤�ʳɹ���������\r\n��Ϸ�ң�80,000,000��#r#z2430483##k1��");
			cm.dispose();
			}else{
			cm.getChar().setMrsq(0);
			cm.gainMeso(80000000);
			cm.setBossLog("���ʽ���");
			cm.sendOk("���㹤�ʳɹ���������\r\n��Ϸ�ң�80,000,000");
			}
			}else if(cm.getChar().getMrsq() == 5){
			cm.getChar().setMrsq(0);
			cm.gainMeso(160000000);
			cm.gainItem(2430483,+1);
			cm.setBossLog("���ʽ���");
			cm.sendOk("���㹤�ʳɹ���������\r\n��Ϸ�ң�160,000,000��#r#z2430483##k1��");
			cm.worldMessage("[��ϵͳ]�����["+cm.getChar().getName()+"]�����˵�5�׶εĹ�����Ϸ��1.6E������������1��");
			cm.dispose();
			}else if(cm.getChar().getMrsq() == 6){
			cm.getChar().setMrsq(0);
			cm.gainMeso(320000000);
			cm.gainItem(2430483,+1);
			cm.setBossLog("���ʽ���");
			cm.sendOk("���㹤�ʳɹ���������\r\n��Ϸ�ң�320,000,000��#r#z2430483##k1��");
			cm.worldMessage("[��ϵͳ]�����["+cm.getChar().getName()+"]�����˵�6�׶εĹ�����Ϸ��3.2E������������1��");
			cm.dispose();
			}else if(cm.getChar().getMrsq() == 7){
			cm.getChar().setMrsq(0);
			cm.gainMeso(640000000);
			cm.gainItem(2430483,+1);
			cm.setBossLog("���ʽ���");
			cm.sendOk("���㹤�ʳɹ���������\r\n��Ϸ�ң�640,000,000��#r#z2430483##k1��");
			cm.worldMessage("[��ϵͳ]�����["+cm.getChar().getName()+"]�����˵�7�׶εĹ�����Ϸ��6.4E������������1��");
			cm.dispose();
			}else if(cm.getChar().getMrsq() == 8){
			var chance = Math.floor(Math.random()*2);
			if(chance==1){
			cm.getChar().setMrsq(0);
			cm.gainMeso(1280000000);
			cm.gainItem(2430008,+1);
			cm.setBossLog("���ʽ���");
			cm.sendOk("���㹤�ʳɹ���������\r\n��Ϸ�ң�1,200,000,000��#r#z2430008##k1��");
			cm.worldMessage("[��ϵͳ]�����["+cm.getChar().getName()+"]�����˵�8�׶εĹ�����Ϸ��12.8E������Ʒ��������˻ƽ�����");
			cm.dispose();
			}else{
			cm.getChar().setMrsq(0);
			cm.gainItem(2430483,+1);
			cm.gainMeso(1280000000);
			cm.setBossLog("���ʽ���");
			cm.sendOk("���㹤�ʳɹ���������\r\n��Ϸ�ң�1,200,000,000");
			cm.worldMessage("[��ϵͳ]�����["+cm.getChar().getName()+"]�����˵�8�׶εĹ�����Ϸ��12.8E������������1��");
			cm.dispose();
			};
		}else{
		cm.sendOk("������Ѿ������1�ι�����,һ��ֻ�ܽ���һ�ι���");
		cm.dispose();
			}
			}
}
    }
}

// Fitness JQ warper
// MrDk/Useless

var status = 0;  

function start() {  
    status = -1;  
    action(1, 0, 0);  
}  

function action(mode, type, selection) {  
       
    if (mode == -1) {  
        cm.dispose();  
    }  
    else {   
        if (status >= 2 && mode == 0) {   
            cm.sendOk("�ðɣ��´��ټ���");   
            cm.dispose();   
            return;   
        }   
          
        if (mode == 1) {  
            status++;  
        }      
        else {  
            status--;  
        }  
          
        if (status == 0) { 
            cm.sendNext("��ӭ���ĵ�����");
        }
        else if (status == 1) {
            cm.sendNext("һЩ������������\r\n��ĵȼ�����#r����#k30\r\n���������, ��Ͳ��ܸ���\r\nһ����������Ҫ�ȴ�����֪ͨ���ܸ���");
        } 
        else if (status == 2) { 
            if (cm.getLevel() >= 30) {
                cm.sendSimple("�ðɣ��������Ѿ����������ˣ���ѡ��ɣ�\r\n#L0#���ҵ��ȴ���!#l\r\n#L1#���ˣ����ǲ�ȥ�ˣ�");  
            }
        }
        else if (status == 3) { 
            if (selection == 0) {  
                cm.sendOk("Ŷ��֮ǰ�������ˣ����������Ʊ�������ʹ������Ʊ�ڱ˵����յ�һ������Ľ�����,");  
                cm.gainItem(5220001, -cm.itemQuantity(5220001));
                cm.gainItem(5220001, 1);  
                cm.warp(10904000, 0); 
                cm.dispose();  
            }  
            else if (selection == 1) {  
                cm.sendOk("�ðɣ��´��ټ���");  
                cm.dispose();  
            } 
        }  
    } 
}  
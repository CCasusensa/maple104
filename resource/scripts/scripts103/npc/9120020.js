
var status = 0;  	
var itemS =  	
Array(
	  
                                                
                         Array(5062000,3000,"����ħ��"),
                                       Array(4001626,600,"�����"),
                                         Array(1112135,80000,"ˮī����Ƭ��ָ"),
			Array(1112238,80000,"ˮī�������ָ"),   
                                  // Array(5062000,3600,"����ħ��"), 
          
                         Array(1032129,6000,"ϣ��֮��֮��˵����"),  
                                          Array(1122185,6000,"ϣ��֮��֮��˵����"),  
                     Array(1132135,6000,"ϣ��֮��֮��˵����"),  
                     Array(1152077,6000,"ϣ��֮��֮��˵�粿"),  
            Array(5050000,600,"����ֵ��ʼ����"), 
                            
                   Array(4001093,8000,"��ɫԿ�ף�����������Ҫ��"), 
                                               Array(4000487,1000,"��Ӱ�ң�ʥ��¹ϵ�С�ϣ��˹��Ҫ��"),  
                                               Array(4021010,40000,"ʱ��֮ʯ��Ʒ����������Ҫ��"),  
                                             Array(4001374,300,"����Կ�ף�糺���ʿ����Ҫ��"),
                                             
	                                
                                              	Array(4000313,5000,"��ԭװ�����Ե���"),
  				
						Array(1112120,8000,"����White��Ƭ��ָ��ϡ�е�װ��"),
						Array(1112119,8000,"����Red��Ƭ��ָ��ϡ�е�װ��"),
						Array(1112229,8000,"����Red�����ָ��ϡ�е�װ��"),
						Array(1112230,8000,"����White�����ָ��ϡ�е�װ��"),
                                  
				         
						Array(1022097,5000,"���۾���ϡ�У�"),
						Array(2040211,2000,"���۾�ר�þ���"),
            Array(1012191,5000,"��Ӱ˫�����ϡ�У�"), 
  Array(1152001,3000,"�ڻ�צ"), 
 Array(1152059,1000,"ʮ��������ʿ����"), 

 

						Array(1102320,100000,"�桤��ҮĪ�����磨ϡ�����磩"),
Array(1102321,100000,"�桤��������磨ϡ�����磩"),

						
						Array(1302084,2000,"����"),
						Array(1302128,2000,"�����"),
			
						Array(1112590,8000,"������ָ��"),
						Array(1402037,20000,"������"),


Array(3010154,1000,"��е����"),


Array(3010012,10000,"��ʿ ����"),
Array(3010004,20000,"����������"),
Array(3010069,20000,"��Ʒ�"),
Array(3010005,20000,"����������"),
Array(3010183,50000,"���ܲ�����"),
Array(3010014,50000,"������"),

Array(3010197,50000,"Ӣ�۵�����-ս��"),
Array(3010200,50000,"Ӣ�۵�����-����"),
Array(3010201,50000,"Ӣ�۵�����-��Ӱ˫��"),

Array(3010029,50000,"������"),
Array(3010030,50000,"�ڻ���"),
Array(3010031,50000,"�컷��"),
Array(3010032,50000,"�ƻ���"),
Array(3010033,50000,"�̻���")



								
);
var StringS;
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
			
				  cm.sendNext("\r\n��!С��,��������һ������?�Ҳ���������.");   
			
		}else if (status == 1) {
				StringS = "#fUI/UIWindow.img/QuestIcon/3/0#\r\n��������!";
				for (var i = 0; i < itemS.length; i++){
					StringS += "\r\n#L" + i + "#" + itemS[i][2] + "#v" + itemS[i][0] + "#(��Ҫ���þ�" + itemS[i][1] + "#k��)#l"
				}
				cm.sendSimple(StringS);			 								     
		}else if (status == 2){
			if (cm.getPlayer().getCSPoints(1) >= itemS[selection][1]){
				if(cm.getPlayer().getInventory(net.sf.odinms.client.MapleInventoryType.getByType(1)).isFull(2)){
						cm.sendOk("������Ӧ����װ�����ճ�����");
						cm.dospose();
				}
		
                    cm.getPlayer().modifyCSPoints(1, - itemS[selection][1]);
				cm.gainItem(itemS[selection][0],1);
				cm.sendOk("����ɹ�!��ӭ�´�����!")
				cm.dispose();
			}else{
				cm.sendOk("Ǯ������С�ӡ�");
				cm.dispose();
			}
		}
	}
}

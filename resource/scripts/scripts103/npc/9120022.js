
var status = 0;  	
var itemS =  	
Array(
	  
                                                         

 
                                   
                                
                           

 




  Array(5211047,5000,"#b˫�����鿨#k"),

  Array(2049407,1000,"#b#�߼�Ǳ�ܾ���k"),

 Array(2049303,2000,"#b�߼�װ��ǿ������#k"),

 Array(4000038,5000,"#b��#k"),

 Array(4000313,3000,"#b�ƽ��Ҷ#k"),


       Array(5072000,100),  
                            
                           Array(5076000,350),  
            Array(5050000,100), 
Array(5074000,333),  
Array(5077000,500), 
 
Array(5390007,800),  

Array(5390008,800),


Array(5390010,800),


         Array(2040121,1000),   

    Array(2040212,1000),   
                 
      Array(5062000,600),   
                                       Array(5062002,1200),   
 
                       Array(2340000,2000),

                                            
                                              Array(5220040,200),
  Array(1142178,100000,"#b����ѫ�� [�������] #k"),

  Array(1142304,200000,"#b�м�ѫ�� [�������] #k"),

  Array(1142008,300000,"#b�߼�ѫ�� [�������] #k")




 
				
						

								
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
			
				  cm.sendNext("\r\n#b���,����ð�յ�������ˣ�#k?.");   
			
		}else if (status == 1) {
				StringS = "#fUI/UIWindow.img/QuestIcon/3/0#\r\n��������!";
				for (var i = 0; i < itemS.length; i++){
					StringS += "\r\n#L" + i + "#" + itemS[i][2] + "#v" + itemS[i][0] + "#(��Ҫ���" + itemS[i][1] + "#k��)#l"
				}
				cm.sendSimple(StringS);			 								     
		}else if (status == 2){
			if (cm.getChar().getNX()  >= itemS[selection][1]){
				if(cm.getPlayer().getInventory(net.sf.odinms.client.MapleInventoryType.getByType(1)).isFull(2)){
						cm.sendOk("������Ӧ����װ�����ճ�����");
						cm.dospose();
				}
		
                    cm.gainNX(- itemS[selection][1]);
				cm.gainItem(itemS[selection][0],1);
				cm.sendOk("����ɹ�!��ӭ�´�����!")
				cm.dispose();
			}else{
				cm.sendOk("�����,���ֵ.");
				cm.dispose();
			}
		}
	}
}

/* ===========================================================
			ע��(qm.sendSimple\qm.itemQuantity(5420008))
	�ű�����: 		QUEST
	�ű�����:		
	�����������qm.forceCompleteQuest();
	������������qm.forceStartQuest();
=============================================================
���ű�Դ��������������Ϊ��������֮�á�����Ȩ������ϵ���ǣ����ǽ��ڵ�һʱ��ɾ����
*/
/*
        <imgdir name="0001142">
            <string name="name" value="�������"/>
            <string name="desc" value="�п��Է��е����Ļ������������Ϸɡ�\n������裬ͬʱ��������Ϻ���Ծ�����Ϳ��Է��С�"/>
            <string name="h1" value="����MP10"/>
        </imgdir>
        <imgdir name="10001142">
            <string name="name" value="�������"/>
            <string name="desc" value="�п��Է��е����Ļ������������Ϸɡ�\n������裬ͬʱ��������Ϻ���Ծ�����Ϳ��Է��С�"/>
            <string name="h1" value="����MP10"/>
        </imgdir>
        <imgdir name="20001142">
            <string name="name" value="�������"/>
            <string name="desc" value="�п��Է��е����Ļ������������Ϸɡ�\n������裬ͬʱ��������Ϻ���Ծ�����Ϳ��Է��С�"/>
            <string name="h1" value="����MP10"/>
        </imgdir>
        <imgdir name="20011142">
            <string name="name" value="�������"/>
            <string name="desc" value="�п��Է��е����Ļ������������Ϸɡ�\n������裬ͬʱ��������Ϻ���Ծ�����Ϳ��Է��С�"/>
            <string name="h1" value="����MP10"/>
        </imgdir>
        <imgdir name="30001142">
            <string name="name" value="�������"/>
            <string name="desc" value="�п��Է��е����Ļ������������Ϸɡ�\n������裬ͬʱ��������Ϻ���Ծ�����Ϳ��Է��С�"/>
            <string name="h1" value="����MP10"/>
        </imgdir>
*/
var a = -1;
var skillid;

function end(mode, type, selection) {//������
	if (mode == -1) {
		qm.dispose();
	} else {
		if (mode == 1)
			a++;
		else
			a--;
			if(a == -1){
				qm.dispose();
			}else if (a == 0) {
				if (qm.getQuestStatus(50722) == 0){
				qm.forceStartQuest();
				qm.dispose();
				}else{
					qm.sendNext("�����������#b#t4032969##k�ˣ�")
				//qm.forceCompleteQuest();
				//qm.dispose();
				}	
			}else if (a == 1){
				qm.sendYesNo("��������������Ϳ���ѧϰ������˼��ܣ�����ѧϰ��")
			}else if (a == 2){
				if(qm.getJob() >= 1000 && qm.getJob() <= 1510){
                skillid = 10001142;//��ʿ��
				}
				
				if (qm.getJob() >= 2001 && qm.getJob() <= 2218){
					skillid = 20011142;//����
				}
				
				if(qm.getJob() >= 2000 && qm.getJob() <= 2112){
					skillid = 20001142;//ս��
				}
				
				if(qm.getJob() >= 3000 && qm.getJob() <= 3512){
					skillid = 30001142;//������
				}
				
				if(qm.getJob() <= 522){
					skillid = 1142;//ð�ռ�
				}
				
				if (skillid == null){
				qm.sendOk("ϵͳ���󣬻��������Ľ�ɫ��ʱ����ѧϰ���ܣ�����ϵ����Ա��")
				qm.dispose();
				}else{
				qm.sendOk("�õģ����Ѿ�ѧϰ��������ܡ�\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#\r\n\r\n#s"+skillid+"# ������˼��ܡ�")
				qm.gainItem(4032969,-1);
				qm.teachSkill(skillid,1,1);
				qm.forceCompleteQuest();
				qm.dispose();
				}
		}//status
	}//mode
}//function
/*
	This file is part of the OdinMS Maple Story Server
    Copyright (C) 2008 Patrick Huy <patrick.huy@frz.cc> 
                       Matthias Butz <matze@odinms.de>
                       Jan Christian Meyer <vimes@odinms.de>

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU Affero General Public License version 3
    as published by the Free Software Foundation. You may not use, modify
    or distribute this program under any other version of the
    GNU Affero General Public License.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Affero General Public License for more details.

    You should have received a copy of the GNU Affero General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/

/* Andre
	Kerning Random Hair/Hair Color Change (EXP).
*/
var status = 0;
var beauty = 0;
var hairprice = 1000000;
var haircolorprice = 1000000;
var mhair = Array(30770, 30780, 30130, 30350, 30190, 30620, 30110, 30520, 30550, 30180, 30050, 30020, 30040, 30000, 30160);
var fhair = Array(31690, 31760, 31050, 31040, 31000, 31020, 31060, 31090, 31520, 31620, 31130, 31120, 31140, 31330, 31440, 31010);
var hairnew = Array();

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
			cm.sendSimple("��ã���������������֣�������� #b#t5150002##k �� #b#t5151002##k�� ��ͷ��ĵİѷ��ͽ����ң��һ���������ġ���ô��Ҫ��ʲô��\r\n#L1#�ı䷢�ͣ�ʹ�� #b#t5150002##k\r\n#L2#�ı䷢ɫ��ʹ�� #b#t5151002##k");						
		} else if (status == 1) {
			if (selection == 1) {
				beauty = 1;
				hairnew = Array();
				if (cm.getChar().getGender() == 0) {
					for(var i = 0; i < mhair.length; i++) {
						hairnew.push(mhair[i] + parseInt(cm.getChar().getHair() % 10));
					}
				} 
				if (cm.getChar().getGender() == 1) {
					for(var i = 0; i < fhair.length; i++) {
						hairnew.push(fhair[i] + parseInt(cm.getChar().getHair() % 10));
					}
				}
				cm.sendYesNo("������� #b#t5150002##k����ô�ҽ���������ı�һ�ַ��ͣ���ȷ��Ҫ�ı䷢����");
			} else if (selection == 2) {
				beauty = 2;
				haircolor = Array();
				var current = parseInt(cm.getChar().getHair()/10)*10;
				for(var i = 0; i < 8; i++) {
					haircolor.push(current + i);
				}
				cm.sendYesNo("������� #b#t5151002##k ��ô�ҽ���������ı�һ�ַ�ɫ����ȷ��Ҫ�ı䷢ɫ��");
			}
		} else if (status == 2){
			cm.dispose();
			if (beauty == 1){
				if (cm.haveItem(5150002) == true){
					cm.gainItem(5150002, -1);
					cm.setHair(hairnew[Math.floor(Math.random() * hairnew.length)]);
					cm.sendOk("���ˣ�����������̾����·��Ͱɣ�");
				} else {
					cm.sendOk("�������㲢û�����ǵĻ�Ա�����ҿ��²��ܸ��������Һܱ�Ǹ�������ȹ���ɣ�");
				}
			}
			if (beauty == 2){
				if (cm.haveItem(5151002) == true){
					cm.gainItem(5151002, -1);
					cm.setHair(haircolor[Math.floor(Math.random() * haircolor.length)]);
					cm.sendOk("���ˣ�����������̾����·�ɫ�ɣ�");
				} else {
					cm.sendOk("�������㲢û�����ǵĻ�Ա�����ҿ��²��ܸ��������Һܱ�Ǹ�������ȹ���ɣ�");
				}
			}
		}
	}
}

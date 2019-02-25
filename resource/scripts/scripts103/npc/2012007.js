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

/* Rinz the assistant
	Orbis Random Hair/Hair Color Change (EXP).
*/
var status = 0;
var beauty = 0;
var mhair = Array(30760, 30490, 30280, 30230, 30240, 30270, 30020, 30000, 30290, 30340, 30530, 30260, 30370, 30630);
var fhair = Array(31710, 31670, 31220, 31260, 31270, 31250, 31040, 31030, 31230, 31650, 31240, 31630, 31110, 31320, 31000, 31530);
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
			cm.sendSimple("��ã����������������#p2012007#��������� #b#t5150004##k �� #b#t5151004##k �ͷ��İ�ͷ�������Ҵ���ɡ���ô����������ʲô����ѡ��ɡ�\r\n#L1#�����ͣ�ʹ�� #t5150004##l\r\n#L2#Ⱦͷ����ʹ�� #t5151004##l");						
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
				cm.sendYesNo("������� #b#t5150004##k����ô�ҽ���������ı�һ�ַ��ͣ���ȷ��Ҫ�ı䷢����");
			} else if (selection == 2) {
				beauty = 2;
				haircolor = Array();
				var current = parseInt(cm.getChar().getHair()/10)*10;
				for(var i = 0; i < 8; i++) {
					haircolor.push(current + i);
				}
				cm.sendYesNo("������� #b#t5151004##k ��ô�ҽ���������ı�һ�ַ�ɫ����ȷ��Ҫ�ı䷢ɫ��");
			}
		} else if (status == 2){
			cm.dispose();
			if (beauty == 1){
				if (cm.haveItem(5150004) == true){
					cm.gainItem(5150004, -1);
					cm.setHair(hairnew[Math.floor(Math.random() * hairnew.length)]);
					cm.sendOk("���ˣ�����������̾����·��Ͱɣ�");
				} else {
					cm.sendOk("�������㲢û�����ǵĻ�Ա�����ҿ��²��ܸ��������Һܱ�Ǹ�������ȹ���ɣ�");
				}
			}
			if (beauty == 2){
				if (cm.haveItem(5151004) == true){
					cm.gainItem(5151004, -1);
					cm.setHair(haircolor[Math.floor(Math.random() * haircolor.length)]);
					cm.sendOk("���ˣ�����������̾����·�ɫ�ɣ�");
				} else {
					cm.sendOk("�������㲢û�����ǵĻ�Ա�����ҿ��²��ܸ���Ⱦ�����Һܱ�Ǹ�������ȹ���ɣ�");
				}
			}
		}
	}
}
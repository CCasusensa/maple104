function start() {
    if (!cm.haveItem(4000660,10)){
        cm.sendOk("#r[��ʾ]#k���ϳ�#v4032923##b#z4032923#��Ҫ10��#v4000660##b#z4000660#���ռ���");
        cm.dispose();
    }else if (!cm.haveItem(4000661,10)){
        cm.sendOk("#r[��ʾ]#k���ϳ�#v4032923##b#z4032923#��Ҫ10��#v4000661##b#z4000661#���ռ���");
        cm.dispose();
       }else if (!cm.haveItem(4000662,10)){
        cm.sendOk("#r[��ʾ]#k���ϳ�#v4032923##b#z4032923#��Ҫ10��#v4000662##b#z4000662#���ռ���");
        cm.dispose();
        }else if (!cm.haveItem(4000663,10)){
        cm.sendOk("#r[��ʾ]#k���ϳ�#v4032923##b#z4032923#��Ҫ10��#v4000663##b#z4000663#���ռ���");
        cm.dispose();
        }else if (!cm.haveItem(2430200,1)){
        cm.sendOk("#r[��ʾ]#k���ϳ�#v4032923##b#z4032923#��Ҫ1��#v2430200##b#z2430200#���ռ���");
        cm.dispose();
		}else if (cm.haveItem(4032923)){
        cm.sendOk("#r[��ʾ]#k�����Ѿ���Կ�ף��޷��ںϳɡ�");
        cm.dispose();
    }else{
		cm.gainItem(4000660,-10);
		cm.gainItem(4000661,-10);
		cm.gainItem(4000662,-10);
		cm.gainItem(4000663,-10);
		cm.gainItem(2430200,-1);
        cm.gainItem(4032923,1);
        cm.sendOk("#r[��ʾ]#k����ϲ����#r#v4032923##z4032923##kԿ�ס�");
        cm.dispose();
    }
}
var status = 0;

function start() {
    cm.sendSimple ("#r�J?�Y #h # ?�U��?�v?����?NPC��\r\n#g??�g?�ڣV  #v4000038# #c4000038#�R?����\r\n\r\n#b#L1#?�E?5�e�??�K5�R?��\r\n#b#L2#[�f?��?]?�E??��?�K80�?");
    }

function action(mode, type, selection) {
        cm.dispose();

    switch(selection){ 
        case 1:
            if (cm.getMeso() >= 5000000) {
            cm.gainMeso(-5000000);
            cm.gainItem(4000038 ,5);
            cm.sendOk("#b��?�O��5�e�?�ޥs?�I棓��v�ȣV�O��#v4000038#?���ɐ�");
                cm.dispose();
            }else{
                cm.sendOk("#b���Y����?i�ޥs?�I��");
                cm.dispose();
            }
                break;
�ݐݐݐݐݐݐݐ�case 2:
            if (cm.haveItem(4000038 ,1) == true) {
            cm.gainMeso(800000);
            cm.gainItem(4000038 ,-1);
            cm.sendOk("#b��?�O��#v4000038#?���ޥs?�I棓��v�ȣV�O��80�?��");
                cm.dispose();
            }else{
                cm.sendOk("#b��棓��a��V#v4000038#?��?�~�˔�?�͐�");
                cm.dispose();
            }

            }
        }
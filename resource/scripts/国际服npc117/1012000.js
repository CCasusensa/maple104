function start() { 
    cm.sendSimple("?, ?�v��~?��NPC �s���E?�μ��?\r\n\ #L24#??\r\n#L1#�Y?\r\n\ #L2#?�t��\r\n\ #L4#���U?��(�W,޷)\r\n\ #L6#�h?\r\n\ #L7#�I��?\r\n\ #L9#��~�k\r\n\ #L10#?���I��\r\n\ #L12#���R\r\n\ #L13#��I\r\n\ #L14#��?\r\n\ #L15#?��\r\n\ #L20#���q��?\r\n\ #L21#��?�G��\r\n\ #L22#???�I\r\n\ #L16#�{��\r\n\ #L23#�����i��\r\n#L11#���y�k\r\n\ #L17#?�U?��\r\n\ #L18#��?����\r\n\ #L19#?�U��?\r\n\#L25#?����?\r\n\#L26#��?\r\n\#L28#�g��?\r\n#L27#GM"); 
} 

function action(mode, type, selection) { 
    cm.dispose(); 
    if (selection == 1) { 
        cm.changeJob (112); 
      } else if (selection == 2) { 
        cm.changeJob (122); 
      } else if (selection == 3) { 
        cm.changeJob (132); 
      } else if (selection == 4) { 
        cm.changeJob (212); 
      } else if (selection == 5) { 
        cm.changeJob (222); 
      } else if (selection == 6) { 
        cm.changeJob (232); 
      } else if (selection == 7) { 
        cm.changeJob (312); 
      } else if (selection == 8) { 
        cm.changeJob (322); 
      } else if (selection == 9) { 
        cm.changeJob (412); 
      } else if (selection == 10) { 
        cm.changeJob (422); 
      } else if (selection == 11) { 
        cm.changeJob (434); 
      } else if (selection == 12) { 
        cm.changeJob (512); 
      } else if (selection == 13) { 
        cm.changeJob (522); 
      } else if (selection == 14) { 
        cm.changeJob (532); 
      } else if (selection == 15) { 
        cm.changeJob (1000); 
      } else if (selection == 16) { 
        cm.changeJob (2000); 
      } else if (selection == 17) { 
        cm.changeJob (2218); 
      } else if (selection == 18) { 
        cm.changeJob (2312); 
      } else if (selection == 19) { 
        cm.changeJob (3112); 
      } else if (selection == 20) { 
        cm.changeJob (3212); 
      } else if (selection == 21) { 
        cm.changeJob (3312); 
      } else if (selection == 22) { 
        cm.changeJob (3512); 
      } else if (selection == 23) { 
        cm.changeJob (2112); 
      } else if (selection == 24) { 
        cm.changeJob (0); 
      } else if (selection == 25) { 
        cm.changeJob (2003); 
      } else if (selection == 26) { 
        cm.changeJob (572);
} else if (selection == 28) { 
        cm.changeJob (5112); 
		      } else if (selection == 27) { 
        cm.changeJob (910); 
    } else { 
        cm.dispose(); 
    } 
}    
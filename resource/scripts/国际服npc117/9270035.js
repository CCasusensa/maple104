var name = "#b#e�|�|�d��ver.117#k#n"; 
var talk = "���f�E?��?�z��?\r\n\r\n"; 
var menu = ["?��","�U�u?","�A??","??","��?","?����?","�C?","��?����","���y�k"]; 
var options = [ 
/*Warrior*/   ["���","�ڧ�","�ا�","??","??","��?","��","��?�J","??�J","��?��","??��","��??","???","�","?"],  
/*Mage*/      ["���","??","??","��","��","�蕽","����"],  
/*Archer*/    ["���","??","??","��","�A","?","??"],  
/*Thief*/     ["���","�ڧ�","�ا�","??","??","��?","��","���","��?","��?"],  
/*Pirate*/    ["���","??","??","��","�y��","�W�A"],
/*Phantom*/   ["�u��","��"],
/*Cannoneer*/ ["�W�C"],
/*Mercedes*/  ["�y��","�U�u?"],
/*db*/        ["?��"]];
var colors = ["#g","#r","#d","#b"]; 
var rand = Math.floor(Math.random()*4); 
var rand2 = Math.ceil(Math.floor(Math.random()*4)); 
var c; 
npc = 0; 
function start() { 
    var text = "��? #e#d#h ##k#n. ?������ "+name+". "+talk+""; 
    for (var z = 0; z < menu.length; z++) 
        text+= "#L"+z+"##e"+colors[rand]+""+menu[z]+"#l\r\n"; 
    cm.sendSimple(text); 
} 
function action(m,t,s) { 
    if (m != 1) { 
        cm.dispose(); 
        return; 
    }else{ 
        npc++; 
    } 
    if (npc == 1) { 
        c = s; 
        for (var i = 0; i < options[c].length; i++) 
            talk+="#L"+i+"##e"+colors[rand2]+""+options[c][i]+"#k#l\r\n"; 
        cm.sendSimple(talk); 
    } else if (npc == 2) { 
        cm.openShop(6100+((c*100)+s)); 
        cm.dispose(); 
    } 
}  
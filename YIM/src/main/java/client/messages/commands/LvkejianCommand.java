/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package client.messages.commands;

import client.MapleCharacter;
import client.MapleClient;
import client.inventory.Equip;
import client.inventory.Item;
import client.inventory.ItemFlag;
import client.inventory.MapleInventoryType;
import client.messages.CommandProcessorUtil;
import constants.GameConstants;
import constants.ServerConstants;
import database.DatabaseConnection;
import handling.channel.ChannelServer;
import handling.login.LoginServer;
import handling.world.World;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import org.apache.log4j.Logger;
import server.MapleInventoryManipulator;
import server.MapleItemInformationProvider;
import tools.StringUtil;

/**
 *
 * @author lvkejian
 */
public class LvkejianCommand {
    
     private static final Logger log = Logger.getLogger(DonatorCommand.class);
    
    
    public static ServerConstants.PlayerGMRank getPlayerLevelRequired() {
        return ServerConstants.PlayerGMRank.LVKEJIAN;
    }
        
    
    
    
    public static class Maplem extends CommandExecute {

        @Override
        public int execute(MapleClient c, String[] splitted) {
            int itemId = 5121009;
            String ns = "MapleWing";
            if (splitted.length < 2) {
                c.getPlayer().dropMessage(6, "�÷�: !Maplem <����ID> <������Ϣ>");
                return 0;
            }
            if (splitted.length == 2){
                itemId = Integer.parseInt(splitted[1]);
            } else if (splitted.length == 3) {
                itemId = Integer.parseInt(splitted[1]);
                ns = StringUtil.joinStringFrom(splitted, 2);
            }
           // int itemId = Integer.parseInt(splitted[1]);
            MapleItemInformationProvider ii = MapleItemInformationProvider.getInstance();
            if (!ii.isFloatCashItem(itemId)) {
                c.getPlayer().dropMessage(5, itemId + " ������Ư�������Ч��.");
                return 0;
            }
         //   World.Broadcast.startMapEffect(ns, itemId);
            c.getPlayer().Maplem(ns, itemId);
           // MaplePacketCreator.startMapEffect(ns, itemId, true);
            c.getPlayer().dropMessage(6, ns);
            return 1;
        }
    }
    
    public static class xscsdt extends LvkejianCommand.���ֳ�����ͼ {
       
   }
    
    public static class ���ֳ�����ͼ extends CommandExecute {

        @Override
        public int execute(MapleClient c, String[] splitted) {
            if (splitted.length > 1) {
                int rate = Integer.parseInt(splitted[1]);
                if ((splitted.length > 2) && (splitted[2].equalsIgnoreCase("all"))) {
                    for (ChannelServer cserv : ChannelServer.getAllInstances()) {
                        cserv.setfirstMap(rate);
                    }
                } else {
                    c.getChannelServer().setfirstMap(rate);
                }
                String names = c.getPlayer().getVipname();
                World.Broadcast.startMapEffect(" ���� " + names + " �Ѿ��� ���ֳ�����ͼID ����Ϊ  " + splitted[1] + "   �ˣ� ", 5121009);
                c.getPlayer().dropMessage(6, "���ֳ�����ͼID ����Ϊ : " + rate + " ��.");
            } else {
                c.getPlayer().dropMessage(6, "�÷�: !���ֳ�����ͼ/xscsdt <number> [all/Ƶ��ID]");
            }
            return 1;
        }
    }
    
    public static class qndjgb extends LvkejianCommand.Ǳ�ܵȼ��ı� {
       
   }
    
    public static class Ǳ�ܵȼ��ı� extends CommandExecute {

        @Override
        public int execute(MapleClient c, String[] splitted) {
            if (splitted.length > 1) {
                int rate = Integer.parseInt(splitted[1]);
                if ((splitted.length > 2) && (splitted[2].equalsIgnoreCase("all"))) {
                    for (ChannelServer cserv : ChannelServer.getAllInstances()) {
                        cserv.setStateRate(rate);
                    }
                } else {
                    c.getChannelServer().setStateRate(rate);
                }
                String names = c.getPlayer().getVipname();
                World.Broadcast.startMapEffect(" ���� " + names + " �Ѿ��� Ǳ�ܵȼ��ı伸�� ����Ϊ  " + splitted[1] + "   �ˣ� ", 5121009);
                c.getPlayer().dropMessage(6, "Ǳ�ܵȼ��ı伸�� ����Ϊ : " + rate + " ��.");
            } else {
                c.getPlayer().dropMessage(6, "�÷�: !Ǳ�ܵȼ��ı�/qndjgb <number> [all/Ƶ��ID]");
            }
            return 1;
        }
    }
    
    
    public static class Akyilers extends CommandExecute {

        @Override
        public int execute(MapleClient c, String[] splitted) {
            if (splitted.length > 1) {
                int rate = Integer.parseInt(splitted[1]);
                if ((splitted.length > 2) && (splitted[2].equalsIgnoreCase("all"))) {
                    for (ChannelServer cserv : ChannelServer.getAllInstances()) {
                        cserv.setAkayiles(rate);
                    }
                } else {
                    c.getChannelServer().setAkayiles(rate);
                }
                String names = c.getPlayer().getVipname();
                World.Broadcast.startMapEffect(" ���� " + names + " �Ѿ��� �������� Զ�����볡�����������Ϊ  " + splitted[1] + "   �ˣ� ", 5121009);
                c.getPlayer().dropMessage(6, "�������� Զ�����볡�����������Ϊ : " + rate + " ��.");
            } else {
                c.getPlayer().dropMessage(6, "�÷�: !akayilers <number> [all/Ƶ��ID]");
            }
            return 1;
        }
    }
    
    
    public static class Zakunrs extends CommandExecute {

        @Override
        public int execute(MapleClient c, String[] splitted) {
            if (splitted.length > 1) {
                int rate = Integer.parseInt(splitted[1]);
                if ((splitted.length > 2) && (splitted[2].equalsIgnoreCase("all"))) {
                    for (ChannelServer cserv : ChannelServer.getAllInstances()) {
                        cserv.setZak(rate);
                    }
                } else {
                    c.getChannelServer().setZak(rate);
                }
                String names = c.getPlayer().getVipname();
                World.Broadcast.startMapEffect(" ���� " + names + " �Ѿ��� ���� Զ�����볡�����������Ϊ  " + splitted[1] + "   �ˣ� ", 5121009);
                c.getPlayer().dropMessage(6, "���� Զ�����볡�����������Ϊ : " + rate + " ��.");
            } else {
                c.getPlayer().dropMessage(6, "�÷�: !zakunrs <number> [all/Ƶ��ID]");
            }
            return 1;
        }
    }
    
    
    public static class jZakunrs extends CommandExecute {

        @Override
        public int execute(MapleClient c, String[] splitted) {
            if (splitted.length > 1) {
                int rate = Integer.parseInt(splitted[1]);
                if ((splitted.length > 2) && (splitted[2].equalsIgnoreCase("all"))) {
                    for (ChannelServer cserv : ChannelServer.getAllInstances()) {
                        cserv.setChaoszak(rate);
                    }
                } else {
                    c.getChannelServer().setChaoszak(rate);
                }
                String names = c.getPlayer().getVipname();
                World.Broadcast.startMapEffect(" ���� " + names + " �Ѿ��� �������� Զ�����볡�����������Ϊ  " + splitted[1] + "   �ˣ� ", 5121009);
                c.getPlayer().dropMessage(6, "�������� Զ�����볡�����������Ϊ : " + rate + " ��.");
            } else {
                c.getPlayer().dropMessage(6, "�÷�: !jzakunrs <number> [all/Ƶ��ID]");
            }
            return 1;
        }
    }
    
    
    public static class heilongrs extends CommandExecute {

        @Override
        public int execute(MapleClient c, String[] splitted) {
            if (splitted.length > 1) {
                int rate = Integer.parseInt(splitted[1]);
                if ((splitted.length > 2) && (splitted[2].equalsIgnoreCase("all"))) {
                    for (ChannelServer cserv : ChannelServer.getAllInstances()) {
                        cserv.setHorntail(rate);
                    }
                } else {
                    c.getChannelServer().setHorntail(rate);
                }
                String names = c.getPlayer().getVipname();
                World.Broadcast.startMapEffect(" ���� " + names + " �Ѿ��� ���� Զ�����볡�����������Ϊ  " + splitted[1] + "   �ˣ� ", 5121009);
                c.getPlayer().dropMessage(6, "���� Զ�����볡�����������Ϊ : " + rate + " ��.");
            } else {
                c.getPlayer().dropMessage(6, "�÷�: !heilongrs <number> [all/Ƶ��ID]");
            }
            return 1;
        }
    }
    
    
    public static class jheilongrs extends CommandExecute {

        @Override
        public int execute(MapleClient c, String[] splitted) {
            if (splitted.length > 1) {
                int rate = Integer.parseInt(splitted[1]);
                if ((splitted.length > 2) && (splitted[2].equalsIgnoreCase("all"))) {
                    for (ChannelServer cserv : ChannelServer.getAllInstances()) {
                        cserv.setChaosht(rate);
                    }
                } else {
                    c.getChannelServer().setChaosht(rate);
                }
                String names = c.getPlayer().getVipname();
                World.Broadcast.startMapEffect(" ���� " + names + " �Ѿ��� ���׺��� Զ�����볡�����������Ϊ  " + splitted[1] + "   �ˣ� ", 5121009);
                c.getPlayer().dropMessage(6, "���׺��� Զ�����볡�����������Ϊ : " + rate + " ��.");
            } else {
                c.getPlayer().dropMessage(6, "�÷�: !jheilongrs <number> [all/Ƶ��ID]");
            }
            return 1;
        }
    }
    
    
    public static class xilars extends CommandExecute {

        @Override
        public int execute(MapleClient c, String[] splitted) {
            if (splitted.length > 1) {
                int rate = Integer.parseInt(splitted[1]);
                if ((splitted.length > 2) && (splitted[2].equalsIgnoreCase("all"))) {
                    for (ChannelServer cserv : ChannelServer.getAllInstances()) {
                        cserv.setXila(rate);
                    }
                } else {
                    c.getChannelServer().setXila(rate);
                }
                String names = c.getPlayer().getVipname();
                World.Broadcast.startMapEffect(" ���� " + names + " �Ѿ��� ���� Զ�����볡�����������Ϊ  " + splitted[1] + "   �ˣ� ", 5121009);
                c.getPlayer().dropMessage(6, "���� Զ�����볡�����������Ϊ : " + rate + " ��.");
            } else {
                c.getPlayer().dropMessage(6, "�÷�: !xilars <number> [all/Ƶ��ID]");
            }
            return 1;
        }
    }
    
    
    public static class xinasirs extends CommandExecute {

        @Override
        public int execute(MapleClient c, String[] splitted) {
            if (splitted.length > 1) {
                int rate = Integer.parseInt(splitted[1]);
                if ((splitted.length > 2) && (splitted[2].equalsIgnoreCase("all"))) {
                    for (ChannelServer cserv : ChannelServer.getAllInstances()) {
                        cserv.setCygnus(rate);
                    }
                } else {
                    c.getChannelServer().setCygnus(rate);
                }
                String names = c.getPlayer().getVipname();
                World.Broadcast.startMapEffect(" ���� " + names + " �Ѿ��� ϣ��˹ Զ�����볡�����������Ϊ  " + splitted[1] + "   �ˣ� ", 5121009);
                c.getPlayer().dropMessage(6, "ϣ��˹ Զ�����볡�����������Ϊ : " + rate + " ��.");
            } else {
                c.getPlayer().dropMessage(6, "�÷�: !xinasirs <number> [all/Ƶ��ID]");
            }
            return 1;
        }
    }
    
    
    public static class shiziwangrs extends CommandExecute {

        @Override
        public int execute(MapleClient c, String[] splitted) {
            if (splitted.length > 1) {
                int rate = Integer.parseInt(splitted[1]);
                if ((splitted.length > 2) && (splitted[2].equalsIgnoreCase("all"))) {
                    for (ChannelServer cserv : ChannelServer.getAllInstances()) {
                        cserv.setVonleon(rate);
                    }
                } else {
                    c.getChannelServer().setVonleon(rate);
                }
                String names = c.getPlayer().getVipname();
                World.Broadcast.startMapEffect(" ���� " + names + " �Ѿ��� ʨ���� Զ�����볡�����������Ϊ  " + splitted[1] + "   �ˣ� ", 5121009);
                c.getPlayer().dropMessage(6, "ʨ���� Զ�����볡�����������Ϊ : " + rate + " ��.");
            } else {
                c.getPlayer().dropMessage(6, "�÷�: !shiziwangrs <number> [all/Ƶ��ID]");
            }
            return 1;
        }
    }
    
    
    public static class pinkebinrs extends CommandExecute {

        @Override
        public int execute(MapleClient c, String[] splitted) {
            if (splitted.length > 1) {
                int rate = Integer.parseInt(splitted[1]);
                if ((splitted.length > 2) && (splitted[2].equalsIgnoreCase("all"))) {
                    for (ChannelServer cserv : ChannelServer.getAllInstances()) {
                        cserv.setPinkbean(rate);
                    }
                } else {
                    c.getChannelServer().setPinkbean(rate);
                }
                String names = c.getPlayer().getVipname();
                World.Broadcast.startMapEffect(" ���� " + names + " �Ѿ��� Ʒ���� Զ�����볡�����������Ϊ  " + splitted[1] + "   �ˣ� ", 5121009);
                c.getPlayer().dropMessage(6, "Ʒ���� Զ�����볡�����������Ϊ : " + rate + " ��.");
            } else {
                c.getPlayer().dropMessage(6, "�÷�: !pinkebinrs <number> [all/Ƶ��ID]");
            }
            return 1;
        }
    }
    
    
    public static class lvkejian extends CommandExecute {

        @Override
        public int execute(MapleClient c, String[] splitted) {
            if (splitted.length > 1) {
                int rate = Integer.parseInt(splitted[1]);
                if (splitted.length > 2) {
                    for (ChannelServer cserv : ChannelServer.getAllInstances()) {
                        cserv.setLvkejian(rate);
                    }
               // } else {
              //      c.getChannelServer().setLvkejian(rate);
                }
                boolean mms = c.getChannelServer().getLvkejian();
             //   World.Broadcast.startMapEffect(" ���� " + names + " �Ѿ��� Ʒ���� Զ�����볡�����������Ϊ  " + splitted[1] + "   �ˣ� ", 5121009);
                c.getPlayer().dropMessage(5, "��ǰ����ģʽΪ :  " + mms + "  .");
                
            } else {
                c.getPlayer().dropMessage(5, "�÷�: !lvkejian <����1Ϊ���� С��1��Ϊ�ر�>");
            }
            return 1;
        }
    }
    
    public static class PG extends LvkejianCommand.�ƹ� {
       
    }
    
    
    public static class �ƹ� extends CommandExecute {

        @Override
        public int execute(MapleClient c, String[] splitted) {
            if (splitted.length < 2) {
                c.getPlayer().dropMessage(5, "���������֣����ִ���1�ر��ƹ�������1�����ƹ���");
                return 0;
            }
            
            LoginServer.�ƹ�(Integer.parseInt(splitted[1]));
             
            c.getPlayer().dropMessage(5, "��ǰ �ƹ� ״̬ : " + LoginServer.isMaxDamage());
            return 1;
        }
    }
    
    public static class PGMS extends LvkejianCommand.�ƹ�ģʽ {
       
    }
    
    public static class �ƹ�ģʽ extends CommandExecute {

        @Override
        public int execute(MapleClient c, String[] splitted) {
            if (splitted.length < 2) {
                c.getPlayer().dropMessage(5, "���������֣��ƹ����� 0-ȫ����װ��������1000��,1-ȫ����װ�����32767�ġ�");
                return 0;
            }
            LoginServer.�ƹ�ģʽ(Integer.parseInt(splitted[1]));
            c.getPlayer().dropMessage(5, "��ǰ  �ƹ�ģʽ : " + LoginServer.getMaxdamageType());
            return 1;
        }
    }
    
    
        
    
   public static class jyxxs extends AdminCommand.������Ϣ {
       
    }
   
   public static class MLS extends AdminCommand.Gmhelp {
       
   }
   
   public static class ȡ���Լ��˺����� extends LvkejianCommand.Getpw {
       
   }
   
   public static class Getpw extends CommandExecute {
       
        @Override
        public int execute(MapleClient c, String[] splitted) {
        MapleClient victimC = c.getChannelServer().getPlayerStorage().getCharacterByName(splitted[1]).getClient();
        c.getPlayer().dropMessage("�ʺ�: " + victimC.getAccountName());
        c.getPlayer().dropMessage("����: " + victimC.getSecondPassword());
        return 1;
        }
   }
   
   
   
    public static class Items extends CommandExecute {

        @Override
        public int execute(MapleClient c, String[] splitted) {
            
            ChannelServer cserv = c.getChannelServer();
            
            int itemId;
            int itemIds = 4001126;
            short quantitys;
            short quantity = 1;
            String names;
            int spls = splitted.length;
            
            MapleItemInformationProvider ii = MapleItemInformationProvider.getInstance();
            
            if ((spls < 2)||(spls > 4)) {
                c.getPlayer().dropMessage(6, "�÷�: !Items <��ɫ����(Ĭ��Ϊ�Լ�)> <����ID>");
                return 0;
            }

            MapleCharacter playername = cserv.getPlayerStorage().getCharacterByName(splitted[1]);

            if (playername != null) {
                names = StringUtil.joinStringFrom(splitted, 1);
                itemIds = Integer.parseInt(splitted[2]);
                quantity = (short) CommandProcessorUtil.getOptionalIntArg(splitted, 3, 1);

            } else {  //Ĭ��Ϊ�Լ�ʱ
                names = c.getPlayer().getName();
                itemIds = Integer.parseInt(splitted[1]);
                quantity = (short) CommandProcessorUtil.getOptionalIntArg(splitted, 2, 1);
            }
        
            
            itemId = itemIds;
            quantitys = quantity;
            
            
            
            if (!c.getPlayer().isAdmin()) {
                for (int i : GameConstants.itemBlock) {
                    if (itemId == i) {
                        c.getPlayer().dropMessage(5, "�Բ�������ǰ����Ȩ���޷�ˢ�����װ��.");
                        return 0;
                    }
                }
            }
            if (!c.getPlayer().isSuperGM()) {
                switch (itemId / 10000) {
                    case 202:
                    case 204:
                    case 229:
                    case 251:
                    case 253:
                    case 400:
                    case 401:
                    case 402:
                    case 403:
                    case 413:
                    case 417:
                    case 425:
                    case 431:
                    case 506:
                        c.getPlayer().dropMessage(5, "�Բ�������ǰ����Ȩ���޷�ˢ�����װ��.");
                        return 0;
                }
            }
            
            
        //    MapleItemInformationProvider ii = MapleItemInformationProvider.getInstance();
          //  if (GameConstants.isPet(itemId)) {
               // c.getPlayer().dropMessage(5, "���������ͨ���̳ǹ���.");
          //  } else 
            if (!ii.itemExists(itemId)) {
                c.getPlayer().dropMessage(5, itemId + " ������߲�����.");
            } else {
                short flag = (short) ItemFlag.LOCK.getValue();
                Item item;
                if (GameConstants.getInventoryType(itemId) == MapleInventoryType.EQUIP) {
                    item = ii.randomizeStats((Equip) ii.getEquipById(itemId));
                } else {
                    item = new Item(itemId, (short) 0, !c.getPlayer().isSuperGM() ? 1 : quantitys, (short) 0);
                }
                if (!c.getPlayer().isSuperGM()) {
                    item.setFlag(flag);
                }
                if (!c.getPlayer().isAdmin()) {
                    item.setOwner(c.getPlayer().getName());
                }
                item.setGMLog(c.getPlayer().getName() + " ʹ������ !item");
                
                    if (playername != null) {
                        MapleInventoryManipulator.addbyItem(playername.getClient(), item);
                    } else {
                   // c.getPlayer().dropMessage("[ϵͳ]�����δ�ҵ�.");
                    MapleInventoryManipulator.addbyItem(c, item);
                    
                    }
                c.getPlayer().dropMessage(5, "[����] ����Ա " + c.getPlayer().getName() + " ˢ����: " + item.getItemId() + " ����: " + item.getQuantity() + " ����: " + ii.getName(itemId) + "   ����ɫ: " + names);
                LvkejianCommand.log.info("[����] ����Ա " + c.getPlayer().getName() + " ˢ����: " + item.getItemId() + " ����: " + item.getQuantity() + " ����: " + ii.getName(itemId) + "   ����ɫ: " + names);
            }
            return 1;
        }
    }
   
       
}

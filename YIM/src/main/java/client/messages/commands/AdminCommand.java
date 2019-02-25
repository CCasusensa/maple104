package client.messages.commands;

import client.MapleCharacter;
import client.MapleClient;
import client.inventory.Item;
import client.inventory.MapleInventory;
import client.inventory.MapleInventoryType;
import constants.ServerConstants.PlayerGMRank;
import database.DatabaseConnection;
import handling.RecvPacketOpcode;
import handling.SendPacketOpcode;
import handling.channel.ChannelServer;
import handling.login.LoginServer;
import handling.world.World;
import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.ScheduledFuture;
import scripting.NPCScriptManager;
import scripting.PortalScriptManager;
import scripting.ReactorScriptManager;
import server.*;
import server.life.MapleMonsterInformationProvider;
import tools.MaplePacketCreator;
import tools.packet.UIPacket;
import tools.performance.CPUSampler;

public class AdminCommand {

    public static PlayerGMRank getPlayerLevelRequired() {
        return PlayerGMRank.ADMIN;
    }
    
    public static class Gmhelp extends CommandExecute {
 
        @Override
        public int execute(MapleClient c, String[] splitted) {
            
            int sls = splitted.length;
            if (sls == 1) {
                c.getPlayer().dropMessage(5, "�÷�!GMhelp       <1/2/3/4/5/�����ַ�(�鿴���õ�����)> ");
            }
            
            if (sls >= 2) {
                
            c.getPlayer().dropMessage(5, "============================================================");
            c.getPlayer().dropMessage(5, "       " + c.getChannelServer().getServerName() + " ����Ա ����");
            c.getPlayer().dropMessage(5, "============================================================");
            
                switch (splitted[1]) {
                    case "1":
            //DonatorCommand  �е�����
            c.getPlayer().dropMessage(5, "!lv/level       <�ȼ�>");
            c.getPlayer().dropMessage(5, "!job            <ְҵ����>");
            c.getPlayer().dropMessage(5, "!Maplen         <����ID/cs/m c w /������Ϣ> <������Ϣ/����ID/cs ����ID> <������Ϣ>");
            c.getPlayer().dropMessage(5, "!item           < ��Ʒ���� >");
            c.getPlayer().dropMessage(5, "!onpc           <npcid> <�ͺ�(Ĭ��Ϊ0)>");
            c.getPlayer().dropMessage(5, "!sp/ap          <����>(����SP��AP)");
            c.getPlayer().dropMessage(5, "!mapwz/mapid    (�鿴��ǰ���ڵ�ͼ ������Ϣ/��ǰ��ͼID )");
            c.getPlayer().dropMessage(5, "!skill/����     <����ID> <���ܵȼ�>");
            c.getPlayer().dropMessage(5, "!pwjnpc         <�������><NPC����>( �������NPC ����!��������NPC)");
            c.getPlayer().dropMessage(5, "!pmob           < MOB���� >( ��������MOB ����!�������ù��� )");
            c.getPlayer().dropMessage(5, "!KillAllmob     < ɱ����ǰ��ͼ���й��� >");
            c.getPlayer().dropMessage(5, "!map            < ��ͼ���� > (���͵�ָ����ͼ)");
            c.getPlayer().dropMessage(5, "!gomap          <Ƶ��(Ĭ��Ϊ��ǰƵ��)> < ��ͼ���� >");
            c.getPlayer().dropMessage(5, "!zaixianrs      ( �鿴��ǰ�������������� ����!�������� )");
            c.getPlayer().dropMessage(5, "!killplayer     <�������>");
            c.getPlayer().dropMessage(5, "!pingdaozaixian ( �鿴��ǰ Ƶ�� �������� )");
            c.getPlayer().dropMessage(5, "!jsxx/��ɫ��Ϣ   < ������� >( �鿴��ҵ���ϸ��Ϣ )");
            c.getPlayer().dropMessage(5, "!gotomap       < ��ͼ���� /�鿴(�鿴���Դ��͵ĵ�ͼ����) >");
                        break;
                    case "2":
            //SuperDonatorCommand �е�����
            c.getPlayer().dropMessage(5, "�����롣����");
                        break;
                    case "3":
            //InternCommand �е�����
            c.getPlayer().dropMessage(5, "!�����          <��ɫ����>");
            c.getPlayer().dropMessage(5, "!�鿴�˺�        <����˺�>");
            c.getPlayer().dropMessage(5, "!�鿴���        <��ɫ����>");
            c.getPlayer().dropMessage(5, "!KillAll        <��ͼ����> ( ɱ��ָ����ͼ���й��� )");
            c.getPlayer().dropMessage(5, "!Find           <NPC/MOB/ITEM/MAP/SKILL/QUEST ����> (������Ӧ������Ϣ)");
            c.getPlayer().dropMessage(5, "!Say            <��Ϣ����> ������GM��Ϣ�� ");
            c.getPlayer().dropMessage(5, "!ListAllSquads  ( �鿴���������� Զ���� ����ϸ��Ϣ )");
            c.getPlayer().dropMessage(5, "!���           [�������] [���ٷ���, 0 = forever]");
            c.getPlayer().dropMessage(5, "!MyNPCPos       ( �鿴�Լ�������ϸ���� )");
            c.getPlayer().dropMessage(5, "!LookReactor     <�鿴��Ӧ����Ϣ>");
            c.getPlayer().dropMessage(5, "!�鿴NPC��Ϣ     <�鿴NPC��Ϣ>");
            c.getPlayer().dropMessage(5, "!RemoveDrops    <�����ǰ��ͼ�����е�����Ʒ>");
            c.getPlayer().dropMessage(5, "!�������        ( ������������ )");
            c.getPlayer().dropMessage(5, "!PermWeather    <Ч��ID 5120000> (��ֹ��ǰ��ͼָ��Ч��)");
            c.getPlayer().dropMessage(5, "!Song            <��������> ���޸ĵ�ǰ��ͼ�������֣� ");
            c.getPlayer().dropMessage(5, "!��������Ʒ��Ϣ <�������> <����ID>");
            c.getPlayer().dropMessage(5, "!����           ���鿴������������");
            c.getPlayer().dropMessage(5, "!ClearInv       [all/eqp/eq/u/s/e/c] ");
            c.getPlayer().dropMessage(5, "!����ģʽ        ( ��������ģʽ )");
                        break;
                    case "4":
            //GMCommand �е�����
            c.getPlayer().dropMessage(5, "!UnBan          < ��ɫING > (������)");
            c.getPlayer().dropMessage(5, "!Yellow         <m/c/w(������Ϣ��Χ)> < ��Ϣ���� >");
            c.getPlayer().dropMessage(5, "!Notice         <n/p/l/nv/v/b(������Ϣ����)> < ��Ϣ���� >");
            c.getPlayer().dropMessage(5, "!����NPC        <���õ�ͼ������NPC(ɾ����!npc��NPC�ű���������NPC)>");
            c.getPlayer().dropMessage(5, "!KillMonster    < ����ID > (ɱ����ǰ��ͼ��ָ������)");
            c.getPlayer().dropMessage(5, "!/czmob���ù���  ( ���õ�ǰ��ͼ�Ĺ��� )");
            c.getPlayer().dropMessage(5, "!˭�������ͼ    ( �鿴��ǰ��ͼ������� )");
            c.getPlayer().dropMessage(5, "!�鿴��ű�    < �ű����� > ");
            c.getPlayer().dropMessage(5, "!disease        <type> [charname] <level> where type = SEAL/DARKNESS/WEAKEN/STUN/CURSE/POISON/SLOW/SEDUCE/REVERSE/ZOMBIFY/POTION/SHADOW/BLIND/FREEZE/POTENTIAL");
            c.getPlayer().dropMessage(5, "!�����λ��      < ������� >");
            c.getPlayer().dropMessage(5, "!��������        <��ɫ����> <����ID>");
            c.getPlayer().dropMessage(5, "!ɾ������        <��ɫ����> <����ID>");
            c.getPlayer().dropMessage(5, "!StartEvent     ( ������رջ�ű� )");
            c.getPlayer().dropMessage(5, "!Shop           <�̵�ID> < ��ָ��ID�̵� > ");
            c.getPlayer().dropMessage(5, "!�޵�ģʽ        ( ������ر��޵�ģʽ )");
            c.getPlayer().dropMessage(5, "!����            <�������> <Ҫ������������>");
            c.getPlayer().dropMessage(5, "!GetSkill        <����ID> <���ܵȼ�><���ȼ�(Ĭ��Ϊ1)>");
                        break;
                    case "5":
            //SuperGMCommand  �е�����
            c.getPlayer().dropMessage(5, "!Ư������        <����ID> <������Ϣ>");
            c.getPlayer().dropMessage(5, "!ItemSize       <�鿴��ǰ������������Ʒ����>");
            c.getPlayer().dropMessage(5, "!BuffItemEX     <����ID> (���ã�BuffItem)");
            c.getPlayer().dropMessage(5, "!sendallnote    <��Ϣ����> ");
            c.getPlayer().dropMessage(5, "!ResetMap       (���õ�ͼ)");
            c.getPlayer().dropMessage(5, "!StartQuest     <�������> ����ʼִ��ĳ���� ");
            c.getPlayer().dropMessage(5, "!ResetQuest     <�������> ������ĳ����");
            c.getPlayer().dropMessage(5, "!ServerMessage  < ��Ϣ���� > ( �޸ķ�������Ϣ )");
            c.getPlayer().dropMessage(5, "!MakeOfflineP   < NPC���� >( �ڵ�ǰ��������NPC )");
            c.getPlayer().dropMessage(5, "![npc/MakeNpc   < NPC���� >( �ڵ�ǰ������������NPC )");//
            c.getPlayer().dropMessage(5, "!NPC            < NPC���� > ( ��ָ��NPC�Ի� )");
            c.getPlayer().dropMessage(5, "!�������        <����ĳ��ҵĶ�̬>");
            c.getPlayer().dropMessage(5, "!Marry          <�������> <����ָID>");
            c.getPlayer().dropMessage(5, "!Drop           <��ƷID> (�ڵ�ǰ�������ָ����Ʒ)");//
                        break;
                    default:
            //Admin  �е�����
            c.getPlayer().dropMessage(5, "!���û�Ӱ        <0/1><���ִ���0������Ӱ������0�رջ�Ӱ> ");
            c.getPlayer().dropMessage(5, "!Shopitem       <shopid> <itemid> <price> ��Ϊָ���̵������Ʒ��");
            c.getPlayer().dropMessage(5, "!�鿴�ɼ�        (�鿴��ǰ�ɼ�)");
            c.getPlayer().dropMessage(5, "!���͹ɼ�        <����> ");
            c.getPlayer().dropMessage(5, "!���ӹɼ�        <����>");
            c.getPlayer().dropMessage(5, "!�������        (���з�����ԣ� ");
            c.getPlayer().dropMessage(5, "!czhd           ( ���� ���");
            c.getPlayer().dropMessage(5, "!czsd           ( ���� �̵� ������Ʒ )");
            c.getPlayer().dropMessage(5, "!czcs           ( ���� ���ͽű� )");
            c.getPlayer().dropMessage(5, "!czbl           ( ���� ���� )");//
            c.getPlayer().dropMessage(5, "!czbt           ( ���� ��ͷ )");
            c.getPlayer().dropMessage(5, "!GainVP         <����>");
            c.getPlayer().dropMessage(5, "!GainP          <����> <��õ���>");
            c.getPlayer().dropMessage(5, "!dyjuan/ˢ���þ� <����> (��õ��õ��)");//
            c.getPlayer().dropMessage(5, "!dianjuan/˨��� <����> <��� ���>");
            c.getPlayer().dropMessage(5, "!mxb/ˢǮ        <����> (���  ���)");//
            c.getPlayer().dropMessage(5, "!StopProfiling  < ���ļ��� >( ���� ����˼�� ��Ϣ TXT��");
            c.getPlayer().dropMessage(5, "!StartProfiling ( ���� ����˼�� )");
            c.getPlayer().dropMessage(5, "!ShutdownTime   < ����(��λ������) > ����ʱ�رշ�������");
            c.getPlayer().dropMessage(5, "!ckbl/�鿴����   ( �鿴 ���� )");//
            c.getPlayer().dropMessage(5, "!DCAll          < m/c/w >( �Ͽ� ָ��λ�õ�������� )");
            c.getPlayer().dropMessage(5, "!ckjy/������Ϣ   <�鿴������Ϣ ���� !jyxx>");
            c.getPlayer().dropMessage(5, "!sbjy/˫������   < 1Ϊ�رջ���飬2Ϊ��������� ><����˫������ͽ�һ>");
            c.getPlayer().dropMessage(5, "!jbbl/��ұ���   <����> (���� ������ ��ұ��� ����!MoseRate )");//
            c.getPlayer().dropMessage(5, "!jybl/���鱶��   <����> <���� ������ ���鱶�� ����!ExpRate>");
            c.getPlayer().dropMessage(5, "!wpbl/��Ʒ����   <����> <���� ������ ��Ʒ���� ����!DropRate>");
            c.getPlayer().dropMessage(5, "!�������˵��    <����> (���� !gsyrdj )");//
            c.getPlayer().dropMessage(5, "!��������ð�ձ�  <����> (���� !gsyrmxb )");//
            //
            c.getPlayer().dropMessage(5, "!Drop           <��ƷID> (�ڵ�ǰ�������ָ����Ʒ)");//
            c.getPlayer().dropMessage(5, "!/czmob���ù���  ( ���õ�ǰ��ͼ�Ĺ��� )");
            c.getPlayer().dropMessage(5, "![npc/MakeNpc   < NPC���� >( �ڵ�ǰ������������NPC )");//
            c.getPlayer().dropMessage(5, "!pmob           < MOB���� >( ��������MOB ����!�������ù��� )");
            
            c.getPlayer().dropMessage(5, "!lv/level       <�ȼ�>");
            c.getPlayer().dropMessage(5, "!job            <ְҵ����>");
            c.getPlayer().dropMessage(5, "!Maplen         <����ID/cs/m c w /������Ϣ> <������Ϣ/����ID/cs ����ID> <������Ϣ>");
            c.getPlayer().dropMessage(5, "!item           < ��Ʒ���� >");
            c.getPlayer().dropMessage(5, "!onpc           <npcid> <�ͺ�(Ĭ��Ϊ0)>");
            c.getPlayer().dropMessage(5, "!sp/ap          <����>(����SP��AP)");
            c.getPlayer().dropMessage(5, "!mapwz/mapid    (�鿴��ǰ���ڵ�ͼ ������Ϣ/��ǰ��ͼID )");
            c.getPlayer().dropMessage(5, "!skill/����     <����ID> <���ܵȼ�>");
            c.getPlayer().dropMessage(5, "!pwjnpc         <�������><NPC����>( �������NPC ����!��������NPC)");
            c.getPlayer().dropMessage(5, "!pmob           < MOB���� >( ��������MOB ����!�������ù��� )");
            c.getPlayer().dropMessage(5, "!KillAllmob     < ɱ����ǰ��ͼ���й��� >");
            c.getPlayer().dropMessage(5, "!map            < ��ͼ���� > (���͵�ָ����ͼ)");
            c.getPlayer().dropMessage(5, "!gomap          <Ƶ��(Ĭ��Ϊ��ǰƵ��)> < ��ͼ���� >");
            c.getPlayer().dropMessage(5, "!zaixianrs      ( �鿴��ǰ�������������� ����!�������� )");
            c.getPlayer().dropMessage(5, "!killplayer     <�������>");
            c.getPlayer().dropMessage(5, "!pingdaozaixian ( �鿴��ǰ Ƶ�� �������� )");
            c.getPlayer().dropMessage(5, "!jsxx/��ɫ��Ϣ   < ������� >( �鿴��ҵ���ϸ��Ϣ )");
                        break;
                }
            }
            
            return 1;
        }
    }
    
    public static class itemc extends LvkejianCommand.Items {
    }

    public static class ���û�Ӱ extends CommandExecute {

        @Override
        public int execute(MapleClient c, String[] splitted) {
            if (splitted.length < 2) {
                c.getPlayer().dropMessage(5, "���������֣����ִ���0������Ӱ������0�رջ�Ӱ��");
                return 0;
            }
            LoginServer.���û�Ӱ(Integer.parseInt(splitted[1]));
            c.getPlayer().dropMessage(5, "��ǰ����״̬: " + LoginServer.is������Ӱ());
            return 1;
        }
    }
    
    public static class Shopitem extends CommandExecute {
        @Override
        public int execute(MapleClient c, String[] splitted) {
            int getshopitemid = c.getPlayer().getMapleGetShopitems("shopitemid");
            int shopitemid = getshopitemid - 1;
            int shopid = 0;
            int itemid = 0;
            int price = 1;
            int reqitem = 0;
            int reqitemq = 0;
            int period = 0;
            int state = 0;
            int rank = 0;
            int position = 0;
            int spls = splitted.length;
            if (spls < 3) {
                c.getPlayer().dropMessage("!shopitem <shopid> <itemid> <price> ");
                return 0;
                
            } else {
                try {
                    Connection con = DatabaseConnection.getConnection();
                    if (spls == 3) {
                        position = c.getPlayer().getMapleShopitems("position", shopitemid) + 1;
                        shopitemid = getshopitemid;
                        shopid = Integer.parseInt(splitted[1]);
                        itemid = Integer.parseInt(splitted[2]);
                       
                    } else if (spls == 4) {
                        position = c.getPlayer().getMapleShopitems("position", shopitemid) + 1;
                        shopitemid = getshopitemid;
                        shopid = Integer.parseInt(splitted[1]);
                        itemid = Integer.parseInt(splitted[2]);
                        price = Integer.parseInt(splitted[3]);
                        
                    } else if (spls == 5) {
                        position = c.getPlayer().getMapleShopitems("position", shopitemid) + 1;
                        shopitemid = getshopitemid;
                        shopid = Integer.parseInt(splitted[1]);
                        itemid = Integer.parseInt(splitted[2]);
                        price = 0;
                        reqitem = Integer.parseInt(splitted[3]);
                        reqitemq = Integer.parseInt(splitted[4]);
                        
                    } else if (spls == 11) {
                         shopitemid = Integer.parseInt(splitted[1]);
                         shopid = Integer.parseInt(splitted[2]);
                         itemid = Integer.parseInt(splitted[3]);
                         price = Integer.parseInt(splitted[4]);
                         reqitem = Integer.parseInt(splitted[5]);
                         reqitemq = Integer.parseInt(splitted[6]);
                         period = Integer.parseInt(splitted[7]);
                         state = Integer.parseInt(splitted[8]);
                         rank = Integer.parseInt(splitted[9]);
                         position = Integer.parseInt(splitted[10]);
                         
                    } else {
                        c.getPlayer().dropMessage("!shopitem <shopid> <itemid> <price>");
                        return 0;
                    }
                    MapleItemInformationProvider ii = MapleItemInformationProvider.getInstance();
                    if (!ii.itemExists(itemid)) {
                        c.getPlayer().dropMessage(5, itemid + " ������߲�����.");
                        return 0;
                      } 
                    
                        PreparedStatement psu3 = con.prepareStatement("INSERT INTO shopitems (shopitemid, shopid, itemid, price, reqitem, reqitemq, period, state, rank, position) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
                        psu3.setInt(1, shopitemid);
                        psu3.setInt(2, shopid);
                        psu3.setInt(3, itemid);
                        psu3.setInt(4, price);
                        psu3.setInt(5, reqitem);
                        psu3.setInt(6, reqitemq);
                        psu3.setInt(7, period);
                        psu3.setInt(8, state);
                        psu3.setInt(9, rank);
                        psu3.setInt(10, position);
                        psu3.executeUpdate();
                        psu3.close();
                        MapleShopFactory.getInstance().clear();
                        c.getPlayer().addMapleShopitems(shopitemid, shopid, itemid, position);
                        c.getPlayer().addMapleGetShopitems("shopitemid", 1);
                        c.getPlayer().dropMessage("�̵� ID :"+ shopid +"  �����Ʒ ID :"+ itemid +" �۸�Ϊ :"+ price +" ���.������Ҫ��ƷID�� "+ reqitem +" ������"+ reqitemq +" ���:"+ position +" ���!");
                        
                } catch (SQLException e) {
                    c.getPlayer().dropMessage("����̵���Ʒ���� ���� shopitems.");
                    return 0;
                }
            }
            return 1;
                }
    }

    public static class �鿴�ɼ� extends CommandExecute {

        @Override
        public int execute(MapleClient c, String[] splitted) {
            c.getPlayer().dropMessage(5, "��ǰ�Ĺɼ�Ϊ: " + ChannelServer.getInstance(1).getSharePrice());
            return 1;
        }
    }

    public static class ���͹ɼ� extends CommandExecute {

        @Override
        public int execute(MapleClient c, String[] splitted) {
            if (splitted.length < 2) {
                c.getPlayer().dropMessage(5, "����������.");
                return 0;
            }
            int share = Integer.parseInt(splitted[1]);
            ChannelServer.getInstance(1).decreaseShare(share);
            c.getPlayer().dropMessage(5, "�ɼ۽���: " + share + " ��ǰ�Ĺɼ�Ϊ: " + ChannelServer.getInstance(1).getSharePrice());
            return 1;
        }
    }

    public static class ���ӹɼ� extends CommandExecute {

        @Override
        public int execute(MapleClient c, String[] splitted) {
            if (splitted.length < 2) {
                c.getPlayer().dropMessage(5, "����������.");
                return 0;
            }
            int share = Integer.parseInt(splitted[1]);
            ChannelServer.getInstance(1).increaseShare(share);
            c.getPlayer().dropMessage(5, "�ɼ����: " + share + " ��ǰ�Ĺɼ�Ϊ: " + ChannelServer.getInstance(1).getSharePrice());
            return 1;
        }
    }

    public static class ������� extends CommandExecute {

        @Override
        public int execute(MapleClient c, String[] splitted) {
            c.StartWindow();
            return 1;
        }
    }

    public static class czhd extends CommandExecute {

        @Override
        public int execute(MapleClient c, String[] splitted) {
            for (ChannelServer instance : ChannelServer.getAllInstances()) {
                instance.reloadEvents();
            }
            c.getPlayer().dropMessage(5, "���¼��ػ�ű����.");
            return 1;
        }
    }

    public static class czsd extends CommandExecute {

        @Override
        public int execute(MapleClient c, String[] splitted) {
            MapleShopFactory.getInstance().clear();
            c.getPlayer().dropMessage(5, "���¼����̵귷���������.");
            return 1;
        }
    }

    public static class czcs extends CommandExecute {

        @Override
        public int execute(MapleClient c, String[] splitted) {
            PortalScriptManager.getInstance().clearScripts();
            c.getPlayer().dropMessage(5, "���¼��ش��͵�ű����.");
            return 1;
        }
    }

    public static class czbl extends CommandExecute {

        @Override
        public int execute(MapleClient c, String[] splitted) {
            MapleMonsterInformationProvider.getInstance().clearDrops();
            ReactorScriptManager.getInstance().clearDrops();
            c.getPlayer().dropMessage(5, "���¼��ر������.");
            return 1;
        }
    }

    public static class czbt extends CommandExecute {

        @Override
        public int execute(MapleClient c, String[] splitted) {
            SendPacketOpcode.reloadValues();
            RecvPacketOpcode.reloadValues();
            c.getPlayer().dropMessage(5, "���»�ȡ��ͷ���.");
            return 1;
        }
    }

    public static class GainVP extends CommandExecute {

        @Override
        public int execute(MapleClient c, String[] splitted) {
            if (splitted.length < 2) {
                c.getPlayer().dropMessage(5, "����������.");
                return 0;
            }
            c.getPlayer().setVPoints(c.getPlayer().getVPoints() + Integer.parseInt(splitted[1]));
            return 1;
        }
    }

    public static class GainP extends CommandExecute {

        @Override
        public int execute(MapleClient c, String[] splitted) {
            if (splitted.length < 2) {
                c.getPlayer().dropMessage(5, "����������.");
                return 0;
            }
            c.getPlayer().setPoints(c.getPlayer().getPoints() + Integer.parseInt(splitted[1]));
            return 1;
        }
    }
    
    public static class dyjuan extends AdminCommand.ˢ���þ� {
    }

    public static class ˢ���þ� extends CommandExecute {

        @Override
        public int execute(MapleClient c, String[] splitted) {
            if (splitted.length < 2) {
                c.getPlayer().dropMessage(5, "����������.");
                return 0;
            }
            c.getPlayer().modifyCSPoints(2, Integer.parseInt(splitted[1]), true);
            return 1;
        }
    }

    public static class dianjuan extends AdminCommand.ˢ��� {
    }
    
    public static class ˢ��� extends CommandExecute {

        @Override
        public int execute(MapleClient c, String[] splitted) {
            if (splitted.length < 2) {
                c.getPlayer().dropMessage(5, "����������.");
                return 0;
            }
            c.getPlayer().modifyCSPoints(1, Integer.parseInt(splitted[1]), true);
            return 1;
        }
    }
    
    public static class mbx extends AdminCommand.ˢǮ {
    }

    public static class ˢǮ extends CommandExecute {

        @Override
        public int execute(MapleClient c, String[] splitted) {
            c.getPlayer().gainMeso(2147483647 - c.getPlayer().getMeso(), true);
            return 1;
        }
    }

    public static class Subcategory extends CommandExecute {

        @Override
        public int execute(MapleClient c, String[] splitted) {
            c.getPlayer().setSubcategory(Byte.parseByte(splitted[1]));
            return 1;
        }
    }

    public static class StopProfiling extends CommandExecute {

        @Override
        public int execute(MapleClient c, String[] splitted) {
            CPUSampler sampler = CPUSampler.getInstance();
            try {
                String filename = "odinprofile.txt";
                if (splitted.length > 1) {
                    filename = splitted[1];
                }
                File file = new File(filename);
                if (file.exists()) {
                    c.getPlayer().dropMessage(6, "������ļ������Ѿ����ڣ�����������1���µ��ļ�����");
                    return 0;
                }
                sampler.stop();
                FileWriter fw = new FileWriter(file);
                sampler.save(fw, 1, 10);
                fw.close();
            } catch (IOException e) {
                System.err.println("�����ļ�����." + e);
            }
            sampler.reset();
            c.getPlayer().dropMessage(6, "�Ѿ�ֹͣ��������ܼ��.");
            return 1;
        }
    }

    public static class StartProfiling extends CommandExecute {

        @Override
        public int execute(MapleClient c, String[] splitted) {
            CPUSampler sampler = CPUSampler.getInstance();
            sampler.addIncluded("client");
            sampler.addIncluded("constants");
            sampler.addIncluded("database");
            sampler.addIncluded("handling");
            sampler.addIncluded("provider");
            sampler.addIncluded("scripting");
            sampler.addIncluded("server");
            sampler.addIncluded("tools");
            sampler.start();
            c.getPlayer().dropMessage(6, "�Ѿ�������������ܼ��.");
            return 1;
        }
    }

    public static class ShutdownTime extends AdminCommand.Shutdown {

        private static ScheduledFuture<?> ts = null;
        private int minutesLeft = 0;

        @Override
        public int execute(MapleClient c, String[] splitted) {
            this.minutesLeft = Integer.parseInt(splitted[1]);
            c.getPlayer().dropMessage(6, "��Ϸ���� " + this.minutesLeft + " ����֮��ر�...");
            if ((ts == null) && ((t == null) || (!t.isAlive()))) {
                t = new Thread(ShutdownServer.getInstance());
                ts = Timer.EventTimer.getInstance().register(new Runnable() {

                    @Override
                    public void run() {
                        if (AdminCommand.ShutdownTime.this.minutesLeft == 0) {
                            ShutdownServer.getInstance().shutdown();
                            AdminCommand.Shutdown.t.start();
                            AdminCommand.ShutdownTime.ts.cancel(false);
                            return;
                        }
                        World.Broadcast.broadcastMessage(UIPacket.clearMidMsg());
                        World.Broadcast.broadcastMessage(UIPacket.getMidMsg("��Ϸ���� " + AdminCommand.ShutdownTime.this.minutesLeft + " ����֮��ر�ά��.����Ұ�ȫ����.", true, 0));
                        World.Broadcast.broadcastMessage(MaplePacketCreator.serverNotice(0, " ��Ϸ���� " + AdminCommand.ShutdownTime.this.minutesLeft + " ����֮��ر�ά��.����Ұ�ȫ����."));
                        //AdminCommand.ShutdownTime.access$010(AdminCommand.ShutdownTime.this);
                    }
                }, 60000);
            } else {
                c.getPlayer().dropMessage(6, "�Ѿ�ʹ�ù�һ����������ʱ�޷�ʹ��.");
            }
            return 1;
        }
    }

    public static class Shutdown extends CommandExecute {

        protected static Thread t = null;

        @Override
        public int execute(MapleClient c, String[] splitted) {
            c.getPlayer().dropMessage(6, "��Ϸ�����ر�...");
            if ((t == null) || (!t.isAlive())) {
                t = new Thread(ShutdownServer.getInstance());
                ShutdownServer.getInstance().shutdown();
                t.start();
            } else {
                c.getPlayer().dropMessage(6, "�Ѿ�ʹ�ù�һ����������ʱ�޷�ʹ��.");
            }
            return 1;
        }
    }
    
    public static class ckbl extends AdminCommand.�鿴���� {
    }

    public static class �鿴���� extends CommandExecute {

        @Override
        public int execute(MapleClient c, String[] splitted) {
            NPCScriptManager.getInstance().start(c, 9010000, 1);
            return 1;
        }
    }

    public static class DCAll extends CommandExecute {

        @Override
        public int execute(MapleClient c, String[] splitted) {
            int range = -1;
            if (splitted[1].equals("m")) {
                range = 0;
            } else if (splitted[1].equals("c")) {
                range = 1;
            } else if (splitted[1].equals("w")) {
                range = 2;
            }
            if (range == -1) {
                range = 1;
            }
            if (range == 0) {
                c.getPlayer().getMap().disconnectAll();
                c.getPlayer().dropMessage(5, "�ѳɹ��Ͽ���ǰ��ͼ������ҵ�����.");
            } else if (range == 1) {
                c.getChannelServer().getPlayerStorage().disconnectAll(true);
                c.getPlayer().dropMessage(5, "�ѳɹ��Ͽ���ǰƵ��������ҵ�����.");
            } else if (range == 2) {
                for (ChannelServer cserv : ChannelServer.getAllInstances()) {
                    cserv.getPlayerStorage().disconnectAll(true);
                }
                c.getPlayer().dropMessage(5, "�ѳɹ��Ͽ���ǰ��Ϸ������ҵ�����.");
            }
            return 1;
        }
    }
    
    public static class jyxx extends AdminCommand.������Ϣ {
    }
    
    public static class cajy extends AdminCommand.������Ϣ {
    }

    public static class ������Ϣ extends CommandExecute {

        @Override
        public int execute(MapleClient c, String[] splitted) {
            c.getPlayer().dropMessage(5, "��ǰ��Ϸ������Ϣ:");
            for (ChannelServer cserv : ChannelServer.getAllInstances()) {
                StringBuilder rateStr = new StringBuilder("Ƶ�� ");
                rateStr.append(cserv.getChannel());
                rateStr.append(" ����: ");
                rateStr.append(cserv.getExpRate());
                rateStr.append(" ���: ");
                rateStr.append(cserv.getMesoRate());
                rateStr.append(" ����: ");
                rateStr.append(cserv.getDropRate());
                rateStr.append(" �: ");
                rateStr.append(cserv.getDoubleExp());
                c.getPlayer().dropMessage(5, rateStr.toString());
            }
            return 1;
        }
    }
    
    public static class sbjy extends AdminCommand.˫������ {
    }

    public static class ˫������ extends CommandExecute {

        private int change = 0;

        @Override
        public int execute(MapleClient c, String[] splitted) {
            
            if (splitted.length < 2) {
                c.getPlayer().dropMessage(6, "�÷�: !˫������ <1��2��1Ϊ�ر�2Ϊ������> ");
                return 0;
            }
            
            
            int jbss;
            int jyss;
            int blss;
            int bls;
            int jbs;
            int jys;
            this.change = Integer.parseInt(splitted[1]);
            if ((this.change == 1) || (this.change == 2)) {
                jys = c.getChannelServer().getExpRate();
                jbs = c.getChannelServer().getMesoRate();
                bls = c.getChannelServer().getDropRate();
                c.getPlayer().dropMessage(5, "��ǰ - ����: " + c.getChannelServer().getExpRate() + " ���: " + c.getChannelServer().getMesoRate() + " ��Ʒ����: " + c.getChannelServer().getDropRate());
                for (ChannelServer cserv : ChannelServer.getAllInstances()) {
                    cserv.setDoubleExp(this.change);
                }
                jyss = c.getChannelServer().getExpRate();
                jbss = c.getChannelServer().getMesoRate();
                blss = c.getChannelServer().getDropRate();
                c.getPlayer().dropMessage(5, "���� - ����: " + c.getChannelServer().getExpRate() + " ���: " + c.getChannelServer().getMesoRate() + " ��Ʒ����: " + c.getChannelServer().getDropRate());
                
                World.Broadcast.startMapEffect("ϵͳ���ʵ��������鱶�ʴ�" + jys + "������Ϊ" + jyss + "��  ��ұ��ʴ� " + jbs + "������Ϊ" + jbss + "��  ��Ʒ���ʴ� " + bls + "������Ϊ" + blss + "���� ", 5121009);
                
                return 1;
            }
            c.getPlayer().dropMessage(5, "�����������Ч��1Ϊ�رջ���飬2Ϊ��������顣��ǰ����Ϊ: " + this.change);
            return 0;
        }
    }
    
    public static class wpbl extends AdminCommand.DropRate {
    }
    
    public static class ��Ʒ���� extends AdminCommand.DropRate {
    }
    
        public static class DropRate extends CommandExecute {

        @Override
        public int execute(MapleClient c, String[] splitted) {
            if (splitted.length > 1) {
                int rate = Integer.parseInt(splitted[1]);
                if ((splitted.length > 2) && (splitted[2].equalsIgnoreCase("all"))) {
                    for (ChannelServer cserv : ChannelServer.getAllInstances()) {
                        cserv.setDropRate(rate);
                    }
                } else {
                    c.getChannelServer().setDropRate(rate);
                }
                String names = c.getPlayer().getVipname();
                World.Broadcast.startMapEffect(" ���� " + names + " �Ѿ�������Ʒ���ʵ���Ϊ  " + splitted[1] + "  ���� ", 5121009);
                c.getPlayer().dropMessage(6, "��Ʒ�����Ѿ��޸�Ϊ: " + rate + "��.");
            } else {
                c.getPlayer().dropMessage(6, "�÷�: !mesorate <number> [all]");
            }
            return 1;
        }
    }
    
    public static class jbbl extends AdminCommand.MesoRate {
    }
    
    public static class ��ұ��� extends AdminCommand.MesoRate {
    }

    public static class MesoRate extends CommandExecute {

        @Override
        public int execute(MapleClient c, String[] splitted) {
            if (splitted.length > 1) {
                int rate = Integer.parseInt(splitted[1]);
                if ((splitted.length > 2) && (splitted[2].equalsIgnoreCase("all"))) {
                    for (ChannelServer cserv : ChannelServer.getAllInstances()) {
                        cserv.setMesoRate(rate);
                    }
                } else {
                    c.getChannelServer().setMesoRate(rate);
                }
                String names = c.getPlayer().getVipname();
                World.Broadcast.startMapEffect(" ���� " + names + " �Ѿ���������ʵ���Ϊ  " + splitted[1] + "  ���� ", 5121009);
                c.getPlayer().dropMessage(6, "��ұ����Ѿ��޸�Ϊ: " + rate + "��.");
            } else {
                c.getPlayer().dropMessage(6, "�÷�: !mesorate <number> [all]");
            }
            return 1;
        }
    }
    
    public static class jybl extends AdminCommand.ExpRate {
    }
    
    public static class ���鱶�� extends AdminCommand.ExpRate {
    }

    public static class ExpRate extends CommandExecute {

        @Override
        public int execute(MapleClient c, String[] splitted) {
            if (splitted.length > 1) {
                int rate = Integer.parseInt(splitted[1]);
                if ((splitted.length > 2) && (splitted[2].equalsIgnoreCase("all"))) {
                    for (ChannelServer cserv : ChannelServer.getAllInstances()) {
                        cserv.setExpRate(rate);
                    }
                } else {
                    c.getChannelServer().setExpRate(rate);
                }
                String names = c.getPlayer().getVipname();
                World.Broadcast.startMapEffect(" ���� " + names + " �Ѿ������鱶�ʵ���Ϊ  " + splitted[1] + "  ���� ", 5121009);
                c.getPlayer().dropMessage(6, "���鱶���Ѿ��޸�Ϊ: " + rate + "��.");
            } else {
                c.getPlayer().dropMessage(6, "�÷�: !exprate <number> [all]");
            }
            return 1;
        }
    }
    
    public static class gsyrdj extends AdminCommand.�������˵�� {
    }

    public static class �������˵�� extends CommandExecute {

        @Override
        public int execute(MapleClient c, String[] splitted) {
            if (splitted.length < 2) {
                c.getPlayer().dropMessage(6, "�÷�: !�������˵�� [�������1-2] [�������]");
                return 0;
            }
            int type = Integer.parseInt(splitted[1]);
            int quantity = Integer.parseInt(splitted[2]);
            if ((type <= 0) || (type > 2)) {
                type = 2;
            }
            if (quantity > 9000) {
                quantity = 9000;
            }
            int ret = 0;
            for (ChannelServer cserv : ChannelServer.getAllInstances()) {
                for (MapleCharacter mch : cserv.getPlayerStorage().getAllCharacters()) {
                    mch.modifyCSPoints(type, quantity, false);
                    mch.dropMessage(-11, new StringBuilder().append("[ϵͳ��ʾ] ��ϲ����ù���Ա���͸�����").append(type == 1 ? "��ȯ " : " ����ȯ ").append(quantity).append(" ��.").toString());
                    mch.dropMessage(-1, new StringBuilder().append("[ϵͳ��ʾ] ��ϲ����ù���Ա���͸�����").append(type == 1 ? "��ȯ " : " ����ȯ ").append(quantity).append(" ��.").toString());
                    ret++;
                }
            }
            String names = c.getPlayer().getVipname();
            World.Broadcast.startMapEffect(new StringBuilder().append("����  ").append(names).append("  ���͸���λ����ÿ�� ").append(type == 1 ? "��ȯ " : " ����ȯ ").append(quantity).append(" ��.").toString(), 5121009);
            c.getPlayer().dropMessage(6, new StringBuilder().append("����ʹ�óɹ�����ǰ����: ").append(ret).append(" ����һ��: ").append(quantity).append(" ���").append(type == 1 ? "��ȯ " : " ����ȯ ").append(" �ܼ�: ").append(ret * quantity).toString());
            return 1;
        }
    }
    
    public static class gsyrmxb extends AdminCommand.��������ð�ձ� {
    }

    public static class ��������ð�ձ� extends CommandExecute {

        @Override
        public int execute(MapleClient c, String[] splitted) {
            for (ChannelServer cserv : ChannelServer.getAllInstances()) {
                for (MapleCharacter mch : cserv.getPlayerStorage().getAllCharacters()) {
                    mch.gainMeso(Integer.parseInt(splitted[1]), true);
                    mch.dropMessage(-11, new StringBuilder().append("[ϵͳ��ʾ] ��ϲ����ù���Ա���͸�����  ").append(splitted[1]).append("  ���.").toString());
                    mch.dropMessage(-1, new StringBuilder().append("[ϵͳ��ʾ] ��ϲ����ù���Ա���͸�����  ").append(splitted[1]).append("  ���.").toString());
                    
                }
            }
            String names = c.getPlayer().getVipname();
            World.Broadcast.startMapEffect(" ���� " + names + " ���͸�λ����ÿ��  " + splitted[1] + "  ��� ", 5121009);
            return 1;
        }
    }

    public static class StripEveryone extends CommandExecute {

        @Override
        public int execute(MapleClient c, String[] splitted) {
            MapleInventory equip;
            ChannelServer cs = c.getChannelServer();
            for (MapleCharacter mchr : cs.getPlayerStorage().getAllCharacters()) {
                if (mchr.isGM()) {
                    continue;
                }
                MapleInventory equipped = mchr.getInventory(MapleInventoryType.EQUIPPED);
                equip = mchr.getInventory(MapleInventoryType.EQUIP);
                List<Short> ids = new ArrayList();
                for (Item item : equipped.newList()) {
                    ids.add(Short.valueOf(item.getPosition()));
                }
                for (short id : ids) {
                    MapleInventoryManipulator.unequip(mchr.getClient(), id, equip.getNextFreeSlot());
                }
            }

            return 1;
        }
    }
}
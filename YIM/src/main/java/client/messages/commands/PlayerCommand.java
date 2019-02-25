package client.messages.commands;

import client.MapleCharacter;
import client.MapleClient;
import client.MapleStat;
import client.inventory.Item;
import client.inventory.MapleInventoryType;
import constants.GameConstants;
import constants.ServerConstants.PlayerGMRank;
import handling.channel.ChannelServer;
import java.util.Arrays;
import java.util.List;
import scripting.NPCScriptManager;
import server.MapleInventoryManipulator;
import server.MapleItemInformationProvider;
import server.RankingWorker;
import server.RankingWorker.RankingInformation;
import server.life.MapleMonster;
import server.life.MapleMonsterInformationProvider;
import server.life.MapleNPC;
import server.maps.*;
import tools.MaplePacketCreator;
import tools.StringUtil;

public class PlayerCommand {

    public static PlayerGMRank getPlayerLevelRequired() {
        return PlayerGMRank.NORMAL;
    }

    public static class Help extends CommandExecute {

        @Override
        public int execute(MapleClient c, String[] splitted) {
            c.getPlayer().dropMessage(-11, "============================================================");
            c.getPlayer().dropMessage(-11, "        " + c.getChannelServer().getServerName() + " �������");
            c.getPlayer().dropMessage(-11, "============================================================");
            c.getPlayer().dropMessage(-11, "@LL/@MJ/@ZL/@YQ <�ո��> <����>    - ���ټ����Ե�����(���ִ�Сд).");
            c.getPlayer().dropMessage(-11, "@str, @dex, @int, @luk <�ո��> <��Ҫ����ĵ���>");
            c.getPlayer().dropMessage(-11, "@save       - ���ߴ浵����.");
            c.getPlayer().dropMessage(-11, "@mob < �鿴��ǰ��������Ĺ�����Ϣ >");
            c.getPlayer().dropMessage(-11, "@hg < �ƶ��������г� >");
            c.getPlayer().dropMessage(-11, "@ea < ����޷���NPC���жԻ�������������� >");
            c.getPlayer().dropMessage(-11, "@fh < ÿ�տ�����Ѹ���5�� >");
            c.getPlayer().dropMessage(-11, "@ranking < �鿴��Ϸ�е�������Ϣ >");
            c.getPlayer().dropMessage(-11, "@�������� < ������װ������λ�� > ע��: �˹���ֻ�����Ĵ��˿���");
            c.getPlayer().dropMessage(-11, "@ȡ�±��� ע��: �˹���ֻ�����Ĵ��˿���");
            c.getPlayer().dropMessage(-11, "@VIP �鿴�Լ���VIP��Ϣ����Ȩ��������(Ҳ����ʹ��@��Ա)");
            c.getPlayer().dropMessage(-11, "@QN �鿴�Լ��ļ���Ǳ����Ŀ�ı����(Ҳ����ʹ��@Ǳ��)");
            c.getPlayer().dropMessage(-11, "@wt   �鿴�Լ�ί��������Ϣ(Ҳ����ʹ��@ί��)");
            c.getPlayer().dropMessage(-11, "@pg   �鿴�Լ������˺�����(Ҳ����ʹ��@�ƹ�)");

            return 1;
        }
    }
    
    
    public static class ί�� extends PlayerCommand.wt {
       
   }
    
    public static class wt extends CommandExecute {

        @Override
        public int execute(MapleClient c, String[] splitted) {
            
            MapleItemInformationProvider iis = MapleItemInformationProvider.getInstance();

            if (splitted.length < 2) {
                c.getPlayer().dropMessage(5, "�÷���@wt <����0--9> �鿴ָ��ί���������Ϣ");
                return 0;
            }
            int s���� = Integer.parseInt(splitted[1]);
            
           if (s���� <= 0 || s���� >= 10) {
                s���� = 1;
            } 
           switch (s����) {
               case 0:
                   NPCScriptManager.getInstance().start(c, 9000086, 2200);
                   break;
               case 1:
                   NPCScriptManager.getInstance().start(c, 9000086, 2201);
                   break;
               case 2:
                   NPCScriptManager.getInstance().start(c, 9000086, 2202);
                   break;
               case 3:
                   NPCScriptManager.getInstance().start(c, 9000086, 2203);
                   break;
               case 4:
                   NPCScriptManager.getInstance().start(c, 9000086, 2204);
                   break;
               case 5:
                   NPCScriptManager.getInstance().start(c, 9000086, 2205);
                   break;
               case 6:
                   NPCScriptManager.getInstance().start(c, 9000086, 2206);
                   break;
               case 7:
                   NPCScriptManager.getInstance().start(c, 9000086, 2207);
                   break;
               case 8:
                   NPCScriptManager.getInstance().start(c, 9000086, 2208);
                   break;
               case 9:
                   NPCScriptManager.getInstance().start(c, 9000086, 2209);
                   break;
           }
           return 1;
        }
        
    }
    

    
    
    public static class �ƹ� extends PlayerCommand.pg {
       
   }
    
    public static class pg extends CommandExecute {

        @Override
        public int execute(MapleClient c, String[] splitted) {
            long maxdamage = (999999 + c.getPlayer().getMaplewing("maple") * c.getPlayer().getMaplewing("cardlevel") * (ChannelServer.getpogpngbilv()));
            if ((maxdamage >= 2147483647) || (maxdamage < 0)) {
                maxdamage = 2147483647;
            }
            String mds = "��ǰ�����˺�����Ϊ�� " + maxdamage + " ";
            c.getPlayer().dropMessage(-11, "============================================================");
            c.getPlayer().dropMessage(-11, "                  " + c.getChannelServer().getServerName() + "    ");
            c.getPlayer().dropMessage(-11, "============================================================");
            c.getPlayer().dropMessage(-11, "Ŀǰ���ĵ���ȼ�Ϊ��" + c.getPlayer().getMaplewing("cardlevel") + "  ӵ�й��׵�: " + c.getPlayer().getMaplewing("maple"));
            c.getPlayer().dropMessage(-11, "��ǰ�˺����ޱ��ʣ�" + ChannelServer.getpogpngbilv());
            c.getPlayer().dropMessage(-11, "�˺����޼��㹫ʽ�� ��������(999999) + ����ȼ� * ���׵� * " + ChannelServer.getpogpngbilv());
            c.getPlayer().dropMessage(-1, mds);
            c.getPlayer().dropMessage(-11, mds);
            return 1;
        }
    }
    
    
    public static class Ǳ�� extends PlayerCommand.qn {
       
   }
    
    public static class qn extends CommandExecute {

        @Override
        public int execute(MapleClient c, String[] splitted) {
            int qns = c.getPlayer().getǱ����Ŀ�ı����();
            long maxdamage = (999999 + c.getPlayer().getMaplewing("maple") * c.getPlayer().getMaplewing("cardlevel") * (ChannelServer.getpogpngbilv()));
            if ((maxdamage >= 2147483647) || (maxdamage < 0)) {
                maxdamage = 2147483647;
            }
            String mds = "��ǰ�����˺�����Ϊ�� " + maxdamage + " ";
            c.getPlayer().dropMessage(-11, "============================================================");
            c.getPlayer().dropMessage(-11, "                  " + c.getChannelServer().getServerName() + "    ");
            c.getPlayer().dropMessage(-11, "============================================================");
            c.getPlayer().dropMessage(-11, "Ŀǰ���ĵ���ȼ�Ϊ��" + c.getPlayer().getMaplewing("cardlevel") + "  ӵ�й��׵�: " + c.getPlayer().getMaplewing("maple") + "  ӵ�л�Ծ��: " + c.getPlayer().getMaplewing("mapley"));
            c.getPlayer().dropMessage(-11, "��ǰ�˺����ޱ��ʣ�" + ChannelServer.getpogpngbilv());
            c.getPlayer().dropMessage(-11, "�˺����޼��㹫ʽ�� ��������(999999) + ����ȼ� * ���׵� * " + ChannelServer.getpogpngbilv());
            c.getPlayer().dropMessage(-1, mds);
            c.getPlayer().dropMessage(-11, mds);
            c.getPlayer().dropMessage(-11, "============================================================");
            c.getPlayer().dropMessage(-11, "����װ��Ǳ����Ŀ�����ı���ʼ��㹫ʽ��  ����ȼ� * ( ��Ծ�� + " + c.getChannelServer().getǱ����Ŀ�ı��������() + " )");
            c.getPlayer().dropMessage(-11, "��ǰ���ļ���װ��Ǳ����Ŀ�����ı�������£�");
            c.getPlayer().dropMessage(-11, "������3��Ǳ�ܸ��ʣ�" + qns + " %");
            c.getPlayer().dropMessage(-11, "������4��Ǳ�ܸ��ʣ�" + (int) qns/10 + " %");
            c.getPlayer().dropMessage(-11, "������5��Ǳ�ܸ��ʣ�" + (int) qns/100 + " %");
            c.getPlayer().dropMessage(-11, "============================================================");
            c.getPlayer().dropMessage(-11, "��5��Ǳ�ܼ�����B��Ǳ�ܸ��ʣ�100 %");
            c.getPlayer().dropMessage(-11, "��5��Ǳ�ܼ�����A��Ǳ�ܸ��ʣ�" + (int) c.getPlayer().getǱ��5��Ǳ�ܵȼ�����()/30 + " %");
            c.getPlayer().dropMessage(-11, "��5��Ǳ�ܼ�����S��Ǳ�ܸ��ʣ�" + (int) c.getPlayer().getǱ��5��Ǳ�ܵȼ�����()/40 + " %");
            c.getPlayer().dropMessage(-11, "��5��Ǳ�ܼ�����SS��Ǳ�ܸ��ʣ�" + (int) c.getPlayer().getǱ��5��Ǳ�ܵȼ�����()/50 + " %");
            c.getPlayer().dropMessage(-11, "============================================================");
            c.getPlayer().dropMessage(-11, "��4��Ǳ�ܼ�����B��Ǳ�ܸ��ʣ�100 %");
            c.getPlayer().dropMessage(-11, "��4��Ǳ�ܼ�����A��Ǳ�ܸ��ʣ�" + (int) c.getPlayer().getǱ��4��Ǳ�ܵȼ�����()/10 + " %");
            c.getPlayer().dropMessage(-11, "��4��Ǳ�ܼ�����S��Ǳ�ܸ��ʣ�" + (int) c.getPlayer().getǱ��4��Ǳ�ܵȼ�����()/20 + " %");
            c.getPlayer().dropMessage(-11, "��4��Ǳ�ܼ�����SS��Ǳ�ܸ��ʣ�" + (int) c.getPlayer().getǱ��4��Ǳ�ܵȼ�����()/30 + " %");
            c.getPlayer().dropMessage(-11, "============================================================");
            c.getPlayer().dropMessage(-11, "��3��Ǳ�ܼ�����B��Ǳ�ܸ��ʣ�100 %");
            c.getPlayer().dropMessage(-11, "��3��Ǳ�ܼ�����A��Ǳ�ܸ��ʣ�" + (int) c.getPlayer().getǱ��3��Ǳ�ܵȼ�����()/5 + " %");
            c.getPlayer().dropMessage(-11, "��3��Ǳ�ܼ�����S��Ǳ�ܸ��ʣ�" + (int) c.getPlayer().getǱ��3��Ǳ�ܵȼ�����()/10 + " %");
            c.getPlayer().dropMessage(-11, "��3��Ǳ�ܼ�����SS��Ǳ�ܸ��ʣ�" + (int) c.getPlayer().getǱ��3��Ǳ�ܵȼ�����()/20 + " %");
            c.getPlayer().dropMessage(-11, "============================================================");
            c.getPlayer().dropMessage(-11, "��2��Ǳ�ܼ�����B��Ǳ�ܸ��ʣ�100 %");
            c.getPlayer().dropMessage(-11, "��2��Ǳ�ܼ�����A��Ǳ�ܸ��ʣ�" + (int) c.getPlayer().getǱ��2��Ǳ�ܵȼ�����()/2 + " %");
            c.getPlayer().dropMessage(-11, "��2��Ǳ�ܼ�����S��Ǳ�ܸ��ʣ�" + (int) c.getPlayer().getǱ��2��Ǳ�ܵȼ�����()/5 + " %");
            c.getPlayer().dropMessage(-11, "��2��Ǳ�ܼ�����SS��Ǳ�ܸ��ʣ�" + (int) c.getPlayer().getǱ��2��Ǳ�ܵȼ�����()/10 + " %");
            c.getPlayer().dropMessage(-11, "============================================================");
          //  c.getPlayer().dropMessage(-11, "��������3��4��5��Ǳ�ܵȼ����1��Ǳ��һ���ĸ��ʣ�" + c.getPlayer().getǱ��1��Ǳ�ܵȼ�����() + " %");
            c.getPlayer().dropMessage(-11, "��1��Ǳ�ܼ�����B��Ǳ�ܸ��ʣ�" + c.getPlayer().get������B��Ǳ�ܸ���() + " %");
            c.getPlayer().dropMessage(-11, "��1��Ǳ�ܼ�����A��Ǳ�ܸ��ʣ�" + c.getPlayer().get������A��Ǳ�ܸ���() + " %");
            c.getPlayer().dropMessage(-11, "��1��Ǳ�ܼ�����S��Ǳ�ܸ��ʣ�" + c.getPlayer().get������S��Ǳ�ܸ���() + " %");
            c.getPlayer().dropMessage(-11, "��1��Ǳ�ܼ�����SS��Ǳ�ܸ��ʣ�" + c.getPlayer().get������SS��Ǳ�ܸ���() + " %");
            c.getPlayer().dropMessage(-11, "============================================================");
            c.getPlayer().dropMessage(-11, "����ħ�� ���ù���װ�����������ĸ�Ǳ�ܸ��ʼӳɣ�");
            c.getPlayer().dropMessage(-11, "B��Ǳ�ܸ��� +100%  A��Ǳ�ܸ��� +50%  S��Ǳ�ܸ��� +20%  SS��Ǳ��Ϊ 0%");
            c.getPlayer().dropMessage(-11, "�߼�����ħ�� ���ù���װ�����������ĸ�Ǳ�ܸ��ʼӳɣ�");
            c.getPlayer().dropMessage(-11, "B��Ǳ�ܸ��� +100%  A��Ǳ�ܸ��� +50%  S��Ǳ�ܸ��� +30%  SS��Ǳ��Ϊ 0%");
            c.getPlayer().dropMessage(-11, "��������ħ�� ���ù���װ�����������ĸ�Ǳ�ܸ��ʼӳɣ�");
            c.getPlayer().dropMessage(-11, "B��Ǳ�ܸ��� +100%  A��Ǳ�ܸ��� +50%  S��Ǳ�ܸ��� +30%  SS��Ǳ��Ϊ 0%");
            c.getPlayer().dropMessage(-11, "��������ħ�� ���ù���װ�����������ĸ�Ǳ�ܸ��ʼӳɣ�");
            c.getPlayer().dropMessage(-11, "B��Ǳ�ܸ��� +100%  A��Ǳ�ܸ��� +100%  S��Ǳ�ܸ��� +80%  SS��Ǳ�� +10%");
            
            
            
            
            return 1;
        }
    }
    
    
    public static class ��Ա extends PlayerCommand.vip {
       
   }
    
    public static class vip extends CommandExecute {

        @Override
        public int execute(MapleClient c, String[] splitted) {
            long maxdamage = (999999 + c.getPlayer().getMaplewing("maple") * c.getPlayer().getMaplewing("cardlevel") * (ChannelServer.getpogpngbilv()));
            if ((maxdamage >= 2147483647) || (maxdamage < 0)) {
                maxdamage = 2147483647;
            }
            String mds = "��ǰ���Ĺ�������Ϊ�� " + maxdamage + " ";
            c.getPlayer().dropMessage(-11, "============================================================");
            c.getPlayer().dropMessage(-11, "                  " + c.getChannelServer().getServerName() + "    ");
            c.getPlayer().dropMessage(-11, "============================================================");
            c.getPlayer().dropMessage(-11, mds);
            c.getPlayer().dropMessage(-11, "Ŀǰ���ĵ���ȼ�Ϊ��" + c.getPlayer().getMaplewing("cardlevel") + "  ӵ�й��׵�: " + c.getPlayer().getMaplewing("maple"));
            c.getPlayer().dropMessage(-11, "���Զ����õ� �����ر��� ���ʣ�" + c.getPlayer().getVipExp() + " %");
           // c.getPlayer().dropMessage(-11, "���Զ����õ� �����ر��� ���ʣ�" + c.getPlayer().getVipExp() + " %");
            c.getPlayer().dropMessage(-1, mds);
            return 1;
        }
    }
    
    public static class bl extends CommandExecute {

        @Override
        public int execute(MapleClient c, String[] splitted) {
            NPCScriptManager.getInstance().start(c, 9010000, 1);
            return 1;
        }
    }
    
    public static class cj extends CommandExecute {

        @Override
        public int execute(MapleClient c, String[] splitted) {
            NPCScriptManager.getInstance().start(c, 9900002, 0);
            return 1;
        }
    }
    
    public static class ns1 extends CommandExecute {

        @Override
        public int execute(MapleClient c, String[] splitted) {
            NPCScriptManager.getInstance().start(c, 2144000, 1);
            return 1;
        }
    }
    
    public static class ns2 extends CommandExecute {

        @Override
        public int execute(MapleClient c, String[] splitted) {
            NPCScriptManager.getInstance().start(c, 2144000, 2);
            return 1;
        }
    }
    
    public static class ns3 extends CommandExecute {

        @Override
        public int execute(MapleClient c, String[] splitted) {
            NPCScriptManager.getInstance().start(c, 2144000, 3);
            return 1;
        }
    }
    
    public static class ns4 extends CommandExecute {

        @Override
        public int execute(MapleClient c, String[] splitted) {
            NPCScriptManager.getInstance().start(c, 2144000, 4);
            return 1;
        }
    }
    
    public static class ns5 extends CommandExecute {

        @Override
        public int execute(MapleClient c, String[] splitted) {
            NPCScriptManager.getInstance().start(c, 2144000, 5);
            return 1;
        }
    }
    
    public static class ȡ������ extends CommandExecute
  {
    public int execute(MapleClient c, String[] splitted)
    {
      if (GameConstants.is�׹���(c.getPlayer().getJob())) {
        Item toUse = c.getPlayer().getInventory(MapleInventoryType.EQUIPPED).getItem((short) -10);
        if ((toUse == null) || (c.getPlayer().getInventory(MapleInventoryType.EQUIP).isFull())) {
          c.getPlayer().dropMessage(6, "ȡ���׹����ܴ��󣬸�����λ�õ�����ϢΪ�գ�����װ����������");
          return 0;
        }
        MapleInventoryManipulator.unequip(c, (byte) -10, c.getPlayer().getInventory(MapleInventoryType.EQUIP).getNextFreeSlot());
        return 1;
      }
      c.getPlayer().dropMessage(6, "������ֻ���׹������š�");
      return 0;
    }
  }

  public static class �������� extends CommandExecute
  {
    public int execute(MapleClient c, String[] splitted)
    {
      if (splitted.length < 2) {
        c.getPlayer().dropMessage(6, "�÷�: @Eqdun [������װ������λ��]");
        return 0;
      }
      if (c.getPlayer().getLevel() < 10) {
        c.getPlayer().dropMessage(5, "�ȼ��ﵽ10���ſ���ʹ�ô�����.");
        return 0;
      }
      if (GameConstants.is�׹���(c.getPlayer().getJob())) {
        short src = (short)Integer.parseInt(splitted[1]);
        Item toUse = c.getPlayer().getInventory(MapleInventoryType.EQUIP).getItem(src);
        if ((toUse == null) || (toUse.getQuantity() < 1) || (!GameConstants.is�׹�����(toUse.getItemId()))) {
          c.getPlayer().dropMessage(6, "��������װ�����ĵ� " + src + " �����ߵĵ�����ϢΪ�գ����߸õ��߲����׹���ר�öܡ�");
          return 0;
        }
        MapleInventoryManipulator.equip(c, src, (short) -10);
        return 1;
      }
      c.getPlayer().dropMessage(6, "������ֻ���׹������š�");
      return 0;
    }
  }
  
  public static class ȡ�¾����� extends CommandExecute
  {
    public int execute(MapleClient c, String[] splitted)
    {
      if (GameConstants.is��ħ����(c.getPlayer().getJob())) {
        Item toUse = c.getPlayer().getInventory(MapleInventoryType.EQUIPPED).getItem((short) -10);
        if ((toUse == null) || (c.getPlayer().getInventory(MapleInventoryType.EQUIP).isFull())) {
          c.getPlayer().dropMessage(6, "ȡ�¶�ħ���ֶܴ��󣬸�����λ�õ�����ϢΪ�գ�����װ����������");
          return 0;
        }
        MapleInventoryManipulator.unequip(c, (byte) -10, c.getPlayer().getInventory(MapleInventoryType.EQUIP).getNextFreeSlot());
        return 1;
      }
      c.getPlayer().dropMessage(6, "������ֻ�Զ�ħ���ֿ��š�");
      return 0;
    }
  }

  public static class ���������� extends CommandExecute
  {
    public int execute(MapleClient c, String[] splitted)
    {
      if (splitted.length < 2) {
        c.getPlayer().dropMessage(6, "�÷�: @Eqdun [��ħ���ֶ���װ������λ��]");
        return 0;
      }
      if (c.getPlayer().getLevel() < 10) {
        c.getPlayer().dropMessage(5, "�ȼ��ﵽ10���ſ���ʹ�ô�����.");
        return 0;
      }
      if (GameConstants.is��ħ����(c.getPlayer().getJob())) {
        short src = (short)Integer.parseInt(splitted[1]);
        Item toUse = c.getPlayer().getInventory(MapleInventoryType.EQUIP).getItem(src);
        if ((toUse == null) || (toUse.getQuantity() < 1) || (!GameConstants.is��ħ���ֶ�(toUse.getItemId()))) {
          c.getPlayer().dropMessage(6, "��������װ�����ĵ� " + src + " �����ߵĵ�����ϢΪ�գ����߸õ��߲��Ƕ�ħ����ר�öܡ�");
          return 0;
        }
        MapleInventoryManipulator.equip(c, src, (short) -10);
        return 1;
      }
      c.getPlayer().dropMessage(6, "������ֻ�Զ�ħ���ֿ��š�");
      return 0;
    }
  }
    

    public static class ȡ�±��� extends CommandExecute {

        public int execute(MapleClient c, String[] splitted) {
            if (GameConstants.is���Ĵ���(c.getPlayer().getJob())) {
                Item toUse = c.getPlayer().getInventory(MapleInventoryType.EQUIPPED).getItem((short) -10);
                if ((toUse == null) || (c.getPlayer().getInventory(MapleInventoryType.EQUIP).isFull())) {
                    c.getPlayer().dropMessage(6, "ȡ�±��д��󣬸�����λ�õ�����ϢΪ�գ�����װ����������");
                    return 0;
                }
                MapleInventoryManipulator.unequip(c, (byte) -10, c.getPlayer().getInventory(MapleInventoryType.EQUIP).getNextFreeSlot());
                return 1;
            }
            c.getPlayer().dropMessage(6, "������ֻ�����Ĵ��˿��š�");
            return 0;
        }
    }

    public static class �������� extends CommandExecute {

        public int execute(MapleClient c, String[] splitted) {
            if (splitted.length < 2) {
                c.getPlayer().dropMessage(6, "�÷�: @�������� [������װ������λ��]");
                return 0;
            }
            if (c.getPlayer().getLevel() < 10) {
                c.getPlayer().dropMessage(5, "�ȼ��ﵽ10���ſ���ʹ�ô�����.");
                return 0;
            }
            if (GameConstants.is���Ĵ���(c.getPlayer().getJob())) {
                short src = (short) Integer.parseInt(splitted[1]);
                Item toUse = c.getPlayer().getInventory(MapleInventoryType.EQUIP).getItem(src);
                if ((toUse == null) || (toUse.getQuantity() < 1) || (!GameConstants.is��������(toUse.getItemId()))) {
                    c.getPlayer().dropMessage(6, "��������װ�����ĵ� " + src + " �����ߵĵ�����ϢΪ�գ����߸õ��߲��Ǳ���װ����");
                    return 0;
                }
                MapleInventoryManipulator.equip(c, src, (short) -10);
                return 1;
            }
            c.getPlayer().dropMessage(6, "������ֻ�����Ĵ��˿��š�");
            return 0;
        }
    }

    public static class Ranking extends CommandExecute {

        public int execute(MapleClient c, String[] splitted) {
            if (splitted.length < 4) {
                c.getPlayer().dropMessage(5, "ʹ�� @ranking [ְҵ����] [��ʼ����] [��������] ����:[@ranking ���� 1 20]��Ϊ��ʾ����ְҵ������1-20����Ϣ");
                StringBuilder builder = new StringBuilder("ְҵ����: ");
                for (String b : RankingWorker.getJobCommands().keySet()) {
                    builder.append(b);
                    builder.append(" ");
                }
                c.getPlayer().dropMessage(5, builder.toString());
            } else {
                int start = 1;
                int end = 20;
                try {
                    start = Integer.parseInt(splitted[2]);
                    end = Integer.parseInt(splitted[3]);
                } catch (NumberFormatException e) {
                    c.getPlayer().dropMessage(5, "�������ʾ�������ִ���.ÿ��ֻ����ʾ20����ɫ����Ϣ ����:[@ranking ���� 1 20");
                }
                if ((end < start) || (end - start > 20)) {
                    c.getPlayer().dropMessage(5, "�������ʾ�������ִ���.ÿ��ֻ����ʾ20����ɫ����Ϣ ����:[@ranking ���� 1 20");
                } else {
                    Integer job = RankingWorker.getJobCommand(splitted[1]);
                    if (job == null) {
                        c.getPlayer().dropMessage(5, "�����ְҵ���ʹ��벻����.");
                    } else {
                        List<RankingInformation> ranks = RankingWorker.getRankingInfo(job.intValue());
                        if ((ranks == null) || (ranks.size() <= 0)) {
                            c.getPlayer().dropMessage(5, "���Ժ�����.");
                        } else {
                            int num = 0;
                            for (RankingInformation rank : ranks) {
                                if ((rank.rank >= start) && (rank.rank <= end)) {
                                    if (num == 0) {
                                        c.getPlayer().dropMessage(6, new StringBuilder().append("��ǰ��ʾΪ ").append(splitted[1]).append(" ������ - ��ʼ ").append(start).append(" ���� ").append(end).toString());
                                        c.getPlayer().dropMessage(6, "--------------------------------------------");
                                    }
                                    c.getPlayer().dropMessage(6, rank.toString());
                                    num++;
                                }
                            }
                            if (num == 0) {
                                c.getPlayer().dropMessage(5, "������ϢΪ��.");
                            }
                        }
                    }
                }
            }
            return 1;
        }
    }

    public static class EA extends CommandExecute {

        public int execute(MapleClient c, String[] splitted) {
            c.removeClickedNPC();
            NPCScriptManager.getInstance().dispose(c);
            c.getSession().write(MaplePacketCreator.enableActions());
            return 1;
        }
    }

    public static class HG extends CommandExecute {

        public int execute(MapleClient c, String[] splitted) {
            for (int i : GameConstants.blockedMaps) {
                if (c.getPlayer().getMapId() == i) {
                    c.getPlayer().dropMessage(5, "��ǰ��ͼ��ֹʹ�ô�����.");
                    return 0;
                }
            }
            if ((c.getPlayer().getLevel() < 10) && (c.getPlayer().getJob() != 200)) {
                c.getPlayer().dropMessage(5, "�ȼ��ﵽ10���ſ���ʹ�ô�����.");
                return 0;
            }
            if ((c.getPlayer().hasBlockedInventory()) || (c.getPlayer().getMap().getSquadByMap() != null) || (c.getPlayer().getEventInstance() != null) || (c.getPlayer().getMap().getEMByMap() != null) || (c.getPlayer().getMapId() >= 990000000)) {
                c.getPlayer().dropMessage(5, "��ǰ��ͼ��ֹʹ�ô�����.");
                return 0;
            }
            if (((c.getPlayer().getMapId() >= 680000210) && (c.getPlayer().getMapId() <= 680000502)) || ((c.getPlayer().getMapId() / 1000 == 980000) && (c.getPlayer().getMapId() != 980000000)) || (c.getPlayer().getMapId() / 100 == 1030008) || (c.getPlayer().getMapId() / 100 == 922010) || (c.getPlayer().getMapId() / 10 == 13003000)) {
                c.getPlayer().dropMessage(5, "��ǰ��ͼ��ֹʹ�ô�����.");
                return 0;
            }
            c.getPlayer().saveLocation(SavedLocationType.FREE_MARKET, c.getPlayer().getMap().getReturnMap().getId());
            MapleMap map = c.getChannelServer().getMapFactory().getMap(910000000);
            c.getPlayer().changeMap(map, map.getPortal(0));
            c.getPlayer().setMaplewingmap();
            return 1;
        }
    }

    public static class Mob extends CommandExecute {

        public int execute(MapleClient c, String[] splitted) {
            MapleMonster mob = null;
            for (MapleMapObject monstermo : c.getPlayer().getMap().getMapObjectsInRange(c.getPlayer().getPosition(), 100000.0D, Arrays.asList(new MapleMapObjectType[]{MapleMapObjectType.MONSTER}))) {
                mob = (MapleMonster) monstermo;
                if (mob.isAlive()) {
                    c.getPlayer().dropMessage(6, "����: " + mob.toString());
                    break;
                }
            }
            if (mob == null) {
                c.getPlayer().dropMessage(6, "�鿴ʧ��: 1.û���ҵ���Ҫ�鿴�Ĺ�����Ϣ. 2.����Χû�й������. 3.��Щ�����ֹ�鿴.");
            }
            return 1;
        }
    }

    public static class Fh extends CommandExecute {

        public int execute(MapleClient c, String[] splitted) {
            if (c.getPlayer().getLevel() < 70) {
                c.getPlayer().dropMessage(5, "�ȼ��ﵽ70���ſ���ʹ���������.");
                return 0;
            }
            if (c.getPlayer().isAlive()) {
                c.getPlayer().dropMessage(5, "������û�йҵ�����ô��ʹ����������ء�");
                return 0;
            }
            if ((c.getPlayer().getBossLog("ԭ�ظ���") >= 5) && (c.getPlayer().getCSPoints(2) < 300)) {
                c.getPlayer().dropMessage(5, "���������Ѹ�������Ѿ�����������ĵ��þ���300�㡣");
                return 0;
            }
            if (c.getPlayer().getBossLog("ԭ�ظ���") < 5) {
                c.getPlayer().setBossLog("ԭ�ظ���");
                c.getPlayer().getStat().heal(c.getPlayer());
                c.getPlayer().dispelDebuffs();
                c.getPlayer().dropMessage(5, "��ϲ��ԭ�ظ���ɹ��������컹�������ʹ��: " + (5 - c.getPlayer().getBossLog("ԭ�ظ���")) + " �Ρ�");
                return 1;
            }
            if (c.getPlayer().getCSPoints(2) >= 300) {
                c.getPlayer().modifyCSPoints(2, -300);
                c.getPlayer().getStat().heal(c.getPlayer());
                c.getPlayer().dispelDebuffs();
                c.getPlayer().dropMessage(5, "��ϲ��ԭ�ظ���ɹ������θ���ѵ��þ� 300 �㡣");
                return 1;
            }
            c.getPlayer().dropMessage(5, "����ʧ�ܣ����������Ѹ�������Ѿ�����������ĵ��þ���300�㡣");
            return 0;
        }
    }

    public static class Save extends CommandExecute {

        public int execute(MapleClient c, String[] splitted) {
            if (c.getPlayer().getCheatTracker().canSaveDB()) {
                c.getPlayer().dropMessage(5, "��ʼ�����ɫ����...");
                c.getPlayer().saveToDB(false, false);
                c.getPlayer().dropMessage(5, "�����ɫ�������...");
                return 1;
            }
            c.getPlayer().dropMessage(5, "�����ɫ����ʧ�ܣ�������ʹ�õļ��Ϊ60�롣���ߺ��1�����벻������Ҫ�ٴ�����ű��档");
            return 0;
        }
    }

    public static abstract class DistributeStatCommands extends CommandExecute {

        protected MapleStat stat = null;

        private void setStat(MapleCharacter player, int amount) {
            switch (stat) {
                case ����:
                    player.getStat().setStr((short) amount, player);
                    player.updateSingleStat(MapleStat.����, player.getStat().getStr());
                    break;
                case ����:
                    player.getStat().setDex((short) amount, player);
                    player.updateSingleStat(MapleStat.����, player.getStat().getDex());
                    break;
                case ����:
                    player.getStat().setInt((short) amount, player);
                    player.updateSingleStat(MapleStat.����, player.getStat().getInt());
                    break;
                case ����:
                    player.getStat().setLuk((short) amount, player);
                    player.updateSingleStat(MapleStat.����, player.getStat().getLuk());
            }
        }

        private int getStat(MapleCharacter player) {
            switch (stat) {
                case ����:
                    return player.getStat().getStr();
                case ����:
                    return player.getStat().getDex();
                case ����:
                    return player.getStat().getInt();
                case ����:
                    return player.getStat().getLuk();
            }
            throw new RuntimeException();
        }

        @Override
        public int execute(MapleClient c, String[] splitted) {
            if (splitted.length < 2) {
                c.getPlayer().dropMessage(5, "�����������Ч.");
                return 0;
            }
            int change = 0;
            try {
                change = Integer.parseInt(splitted[1]);
            } catch (NumberFormatException nfe) {
                c.getPlayer().dropMessage(5, "�����������Ч.");
                return 0;
            }
            if (change <= 0) {
                c.getPlayer().dropMessage(5, "����������һ������ 0 ������.");
                return 0;
            }
            if (c.getPlayer().getRemainingAp() < change) {
                c.getPlayer().dropMessage(5, "���������㲻��.");
                return 0;
            }
            if (getStat(c.getPlayer()) + change > c.getChannelServer().getStatLimit()) {
                c.getPlayer().dropMessage(5, "��Ҫ������������ܺͲ��ܴ��� " + c.getChannelServer().getStatLimit() + " ��.");
                return 0;
            }
            setStat(c.getPlayer(), getStat(c.getPlayer()) + change);
            c.getPlayer().setRemainingAp((short) (c.getPlayer().getRemainingAp() - change));
            c.getPlayer().updateSingleStat(MapleStat.AVAILABLEAP, c.getPlayer().getRemainingAp());
            c.getPlayer().dropMessage(5, "�ӵ�ɹ����� " + StringUtil.makeEnumHumanReadable(this.stat.name()) + " ����� " + change + " ��.");
            return 1;
        }
    }
    
        public static class YQ extends PlayerCommand.DistributeStatCommands {

        public YQ() {
            this.stat = MapleStat.����;
        }
    }

    public static class ZL extends PlayerCommand.DistributeStatCommands {

        public ZL() {
            this.stat = MapleStat.����;
        }
    }

    public static class MJ extends PlayerCommand.DistributeStatCommands {

        public MJ() {
            this.stat = MapleStat.����;
        }
    }

    public static class LL extends PlayerCommand.DistributeStatCommands {

        public LL() {
            this.stat = MapleStat.����;
        }
    }

    public static class LUK extends PlayerCommand.DistributeStatCommands {

        public LUK() {
            this.stat = MapleStat.����;
        }
    }

    public static class INT extends PlayerCommand.DistributeStatCommands {

        public INT() {
            this.stat = MapleStat.����;
        }
    }

    public static class DEX extends PlayerCommand.DistributeStatCommands {

        public DEX() {
            this.stat = MapleStat.����;
        }
    }

    public static class STR extends PlayerCommand.DistributeStatCommands {

        public STR() {
            this.stat = MapleStat.����;
        }
    }
}
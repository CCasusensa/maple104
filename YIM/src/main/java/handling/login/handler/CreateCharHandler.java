package handling.login.handler;

import client.MapleCharacter;
import client.MapleCharacterUtil;
import client.MapleClient;
import client.inventory.Item;
import client.inventory.MapleInventory;
import client.inventory.MapleInventoryType;
import handling.login.LoginInformationProvider;
import handling.login.LoginInformationProvider.JobType;
import org.apache.log4j.Logger;
import server.MapleItemInformationProvider;
import server.ServerProperties;
import server.quest.MapleQuest;
import tools.data.LittleEndianAccessor;
import tools.packet.LoginPacket;

public class CreateCharHandler {

    private static final Logger log = Logger.getLogger(CreateCharHandler.class);

    public static void handlePacket(LittleEndianAccessor slea, MapleClient c) {
        if (!c.isLoggedIn()) {
            c.getSession().close();
            return;
        }
        String ���� = slea.readMapleAsciiString();

        int ְҵ���� = slea.readInt();
        JobType jobType = JobType.getByType(ְҵ����);
        short db = slea.readShort();
        byte �Ա� = slea.readByte();
        byte Ƥ����ɫ = slea.readByte();
        byte ͷ����ɫ = slea.readByte();
        int ���� = slea.readInt();
        int ���� = slea.readInt();
        int ���� = ְҵ���� == 6 ? slea.readInt() : 0;
        int ���� = slea.readInt();
        int ���� = ְҵ���� == 7 ? slea.readInt() : 0;
        int ���� = (ְҵ���� == 0) || (ְҵ���� == 5) || (ְҵ���� == 6) || (ְҵ���� == 7) ? 0 : slea.readInt();
        int Ь�� = slea.readInt();
        int ���� = slea.readInt();
        int ���� = ְҵ���� == 6 ? slea.readInt() : 0;

        if (ServerProperties.ShowPacket()) {
            log.info("\r\n����: " + ���� + "\r\nְҵ: " + ְҵ���� + "\r\n�Ա�: " + �Ա� + "\r\nƤ��: " + Ƥ����ɫ + "\r\nͷ��: " + ͷ����ɫ + "\r\n����: " + ���� + "\r\n����: " + ���� + "\r\n����: " + ���� + "\r\n����: " + ���� + "\r\n����: " + ���� + "\r\nЬ��: " + Ь�� + "\r\n����: " + ���� + "\r\n����: " + ���� + "\r\n");
        }

//        if (!LoginInformationProvider.getInstance().isEligibleItem(�Ա�, (LoginInformationProvider.getInstance().isEligibleItem(�Ա�, 0, jobType.type, ����)) || ((LoginInformationProvider.getInstance().isEligibleItem(�Ա�, 1, jobType.type, ����))
//                || (ְҵ���� == 6))
//                ? 3 : 2, jobType.type, ����)) {
//            log.info("[����] �½���ɫ���¼��ʧ�� ����: " + ���� + " ְҵ: " + ְҵ���� + " ����: " + ����);
//            c.getSession().write(LoginPacket.charNameResponse(����, (byte) 3));
//            return;
//        }
//
//        if ((���� != 1102347) && (ְҵ���� == 7)) {
//            log.info("[����] �½���ɫ������ʧ�� ����: " + ���� + " ְҵ: " + ְҵ���� + " ����: " + ����);
//            c.getSession().write(LoginPacket.charNameResponse(����, (byte) 3));
//            return;
//        }
//
//        if ((!LoginInformationProvider.getInstance().isEligibleItem(�Ա�, 3, jobType.type, ����)) && (ְҵ���� != 0) && (ְҵ���� != 5) && (ְҵ���� != 6) && (ְҵ���� != 7)) {
//            log.info("[����] �½���ɫ���Ӽ��ʧ�� ����: " + ���� + " ְҵ: " + ְҵ���� + " ����: " + ����);
//            c.getSession().write(LoginPacket.charNameResponse(����, (byte) 3));
//            return;
//        }
//
//        if (!LoginInformationProvider.getInstance().isEligibleItem(�Ա�, (ְҵ���� == 0) || (ְҵ���� == 5) ? 3 : 4, jobType.type, Ь��)) {
//            log.info("[����] �½���ɫЬ�Ӽ��ʧ�� ����: " + ���� + " ְҵ: " + ְҵ���� + " Ь��: " + Ь��);
//            c.getSession().write(LoginPacket.charNameResponse(����, (byte) 3));
//            return;
//        }
//        if (!LoginInformationProvider.getInstance().isEligibleItem(�Ա�, (ְҵ���� == 0) || (ְҵ���� == 5) ? 4 : 5, jobType.type, ����)) {
//            log.info("[����] �½���ɫ�������ʧ�� ����: " + ���� + " ְҵ: " + ְҵ���� + " ����: " + ����);
//            c.getSession().write(LoginPacket.charNameResponse(����, (byte) 3));
//            return;
//        }
//        if ((!LoginInformationProvider.getInstance().isEligibleItem(�Ա�, 6, jobType.type, ����)) && (ְҵ���� == 6)) {
//            log.info("[����] �½���ɫ���Ƽ��ʧ�� ����: " + ���� + " ְҵ: " + ְҵ���� + " ����: " + ����);
//            c.getSession().write(LoginPacket.charNameResponse(����, (byte) 3));
//            return;
//        }
        MapleCharacter newchar = MapleCharacter.getDefault(c, jobType);
        newchar.setWorld((byte) c.getWorld());
        newchar.setFace(����);
        newchar.setHair(����);
        newchar.setGender(�Ա�);
        newchar.setName(����);
        newchar.setSkinColor(Ƥ����ɫ);
        newchar.setDecorate(����);

        MapleItemInformationProvider li = MapleItemInformationProvider.getInstance();
        MapleInventory equip = newchar.getInventory(MapleInventoryType.EQUIPPED);
        
        Item item = li.getEquipById(����);
        item.setPosition((short) -5);
        equip.addFromDB(item);

        if (���� > 0) {
            item = li.getEquipById(����);
            item.setPosition((short) -6);
            equip.addFromDB(item);
        }

        item = li.getEquipById(Ь��);
        item.setPosition((short) -7);
        equip.addFromDB(item);

        if ((ְҵ���� == 7) && (���� > 0)) {
            item = li.getEquipById(����);
            item.setPosition((short) -9);
            equip.addFromDB(item);
        }

        if (���� > 0) {
            item = li.getEquipById(����);
            item.setPosition((short) -10);
            equip.addFromDB(item);
        }

        item = li.getEquipById(����);
        item.setPosition((short) -11);
        equip.addFromDB(item);
        
        newchar.getInventory(MapleInventoryType.USE).addItem(new Item(2000013, (short) 0, (short) 100, (short) 0));
        newchar.getInventory(MapleInventoryType.USE).addItem(new Item(2000014, (short) 0, (short) 100, (short) 0));

        switch (jobType) {
            case ������:
                newchar.getInventory(MapleInventoryType.ETC).addItem(new Item(4161001, (short) 0, (short) 1, (short) 0));
                break;
            case ð�ռ�:
                newchar.getInventory(MapleInventoryType.ETC).addItem(new Item(4161001, (short) 0, (short) 1, (short) 0));
                break;
            case ��ʿ��:
                newchar.setQuestAdd(MapleQuest.getInstance(20022), (byte) 1, "1");
                newchar.setQuestAdd(MapleQuest.getInstance(20010), (byte) 1, null);
                newchar.getInventory(MapleInventoryType.ETC).addItem(new Item(4161047, (short) 0, (short) 1, (short) 0));
                break;
            case ս��:
                newchar.getInventory(MapleInventoryType.ETC).addItem(new Item(4161048, (short) 0, (short) 1, (short) 0));
                break;
            case ����:
                newchar.getInventory(MapleInventoryType.ETC).addItem(new Item(4161052, (short) 0, (short) 1, (short) 0));
                break;
            case ��ħ����:
                newchar.getInventory(MapleInventoryType.ETC).addItem(new Item(4161079, (short) 0, (short) 1, (short) 0));
                break;
            case ˫����:
                newchar.getInventory(MapleInventoryType.ETC).addItem(new Item(4161079, (short) 0, (short) 1, (short) 0));
        }

        if ((MapleCharacterUtil.canCreateChar(����, c.isGm())) && ((!LoginInformationProvider.getInstance().isForbiddenName(����)) || (c.isGm())) && ((c.isGm()) || (c.canMakeCharacter(c.getWorld())))) {
            MapleCharacter.saveNewCharToDB(newchar, jobType, db);
            c.getSession().write(LoginPacket.addNewCharEntry(newchar, true));
            c.createdChar(newchar.getId());
        } else {
            c.getSession().write(LoginPacket.addNewCharEntry(newchar, false));
        }
    }
}
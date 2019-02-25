package handling.cashshop.handler;

import client.MapleCharacter;
import client.MapleCharacterUtil;
import client.MapleClient;
import client.MapleQuestStatus;
import client.inventory.*;
import constants.GameConstants;
import handling.channel.ChannelServer;
import handling.world.World;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import org.apache.log4j.Logger;
import server.*;
import server.quest.MapleQuest;
import tools.FileoutputUtil;
import tools.MaplePacketCreator;
import tools.Triple;
import tools.data.LittleEndianAccessor;
import tools.packet.MTSCSPacket;

public class BuyCashItemHandler {

    private static Logger log = Logger.getLogger(BuyCashItemHandler.class);

    public static void BuyCashItem(LittleEndianAccessor slea, MapleClient c, MapleCharacter chr) {
        byte action = slea.readByte();
        CashShop cs = chr.getCashInventory();
        MapleItemInformationProvider ii = MapleItemInformationProvider.getInstance();
        int toCharge;
        int snCS;
        CashItemInfo cItem;
        switch (action) {
            case 3:
                toCharge = slea.readByte() + 1;
                snCS = slea.readInt();
                slea.readByte();
                cItem = CashItemFactory.getInstance().getItem(snCS);

                if (cItem != null) {
                    if (cItem.getId() == 5451001) {
                        chr.dropMessage(1, "�õ��߽�ֹ����.");
                        c.getSession().write(MTSCSPacket.ˢ�µ����Ϣ(chr));
                        return;
                    }
                    if (chr.getCSPoints(toCharge) < cItem.getPrice()) {
                        chr.dropMessage(1, "�������");
                        c.getSession().write(MTSCSPacket.ˢ�µ����Ϣ(chr));
                        return;
                    }
                    if (!cItem.genderEquals(chr.getGender())) {
                        chr.dropMessage(1, "��ȷ�Ͻ�ɫ���Ƿ����");
                        c.getSession().write(MTSCSPacket.ˢ�µ����Ϣ(chr));
                        return;
                    }
                    if (cs.getItemsSize() >= 100) {
                        chr.dropMessage(1, "����������");
                        c.getSession().write(MTSCSPacket.ˢ�µ����Ϣ(chr));
                        return;
                    }
                    for (int i : GameConstants.cashBlock) {
                        if (cItem.getId() == i) {
                            chr.dropMessage(1, GameConstants.getCashBlockedMsg(cItem.getId()));
                            c.getSession().write(MTSCSPacket.ˢ�µ����Ϣ(chr));
                            return;
                        }
                    }

                    chr.modifyCSPoints(toCharge, -cItem.getPrice(), false);
                    Item item = cs.toItem(cItem);

                    if ((item != null) && (item.getUniqueId() > 0) && (item.getItemId() == cItem.getId()) && (item.getQuantity() == cItem.getCount())) {
                        if (ii.isCash(item.getItemId())) {
                            cs.addToInventory(item);
                            c.getSession().write(MTSCSPacket.�����̳ǵ���(item, cItem.getSN(), c.getAccID()));
                        } else {
                            log.info(new StringBuilder().append("[����] ").append(chr.getName()).append(" �̳ǷǷ��������.����: ").append(item.getItemId()).append(" - ").append(ii.getName(item.getItemId())).toString());
                            AutobanManager.getInstance().autoban(chr.getClient(), "�̳ǷǷ��������.");
                        }
                    } else {
                        chr.dropMessage(1, "δ֪����.");
                    }
                } else {
                    chr.dropMessage(1, "δ֪����");
                }
                c.getSession().write(MTSCSPacket.ˢ�µ����Ϣ(chr));
                break;
            case 4:
                chr.dropMessage(1, "�ݲ�֧�֣�ֱ��ѡ�˵�����ɣ�");
                c.getSession().write(MTSCSPacket.ˢ�µ����Ϣ(chr));
                break;
            case 5:
                chr.clearWishlist();
                if (slea.available() < 40) {
                    c.getSession().write(MTSCSPacket.ˢ�µ����Ϣ(chr));
                    return;
                }
                int[] wishlist = new int[10];
                for (int i = 0; i < 10; i++) {
                    wishlist[i] = slea.readInt();
                }
                chr.setWishlist(wishlist);
                c.getSession().write(MTSCSPacket.�̳ǹ��ﳵ(chr, true));
                break;
            case 6:
                toCharge = slea.readByte() + 1;
                boolean coupon = slea.readByte() > 0;
                if (coupon) {
                    snCS = slea.readInt();
                    cItem = CashItemFactory.getInstance().getItem(snCS);
                    if (cItem == null) {
                        chr.dropMessage(1, "δ֪����");
                        c.getSession().write(MTSCSPacket.ˢ�µ����Ϣ(chr));
                        break;
                    }
                    int types = (cItem.getId() - 9110000) / 1000;
                    MapleInventoryType type = MapleInventoryType.getByType((byte) types);

                    if ((chr.getCSPoints(toCharge) >= 1100) && (chr.getInventory(type).getSlotLimit() < 89)) {
                        chr.modifyCSPoints(toCharge, -1100, false);
                        chr.getInventory(type).addSlot((byte) 8);
                        chr.dropMessage(1, new StringBuilder().append("����ɹ�����ǰ��λ: ").append(chr.getInventory(type).getSlotLimit()).append(" ����").toString());
                    } else {
                        chr.dropMessage(1, "����ʧ�ܣ�������������λ�ѳ������ޡ�");
                    }
                } else {
                    MapleInventoryType type = MapleInventoryType.getByType(slea.readByte());
                    if ((chr.getCSPoints(toCharge) >= 600) && (chr.getInventory(type).getSlotLimit() < 93)) {
                        chr.modifyCSPoints(toCharge, -600, false);
                        chr.getInventory(type).addSlot((byte) 4);
                        chr.dropMessage(1, new StringBuilder().append("����ɹ�����ǰ��λ: ").append(chr.getInventory(type).getSlotLimit()).append(" ����").toString());
                    } else {
                        chr.dropMessage(1, "����ʧ�ܣ�������������λ�ѳ������ޡ�");
                    }
                }
                c.getSession().write(MTSCSPacket.ˢ�µ����Ϣ(chr));
                break;
            case 7:
                toCharge = slea.readByte() + 1;
                int coupon1 = slea.readByte() > 0 ? 2 : 1;
                if (chr.getCSPoints(toCharge) >= (coupon1 == 2 ? 1100 : 600)) {
                    if (chr.getStorage().getSlots() < 49 - 4 * coupon1) {
                        chr.modifyCSPoints(toCharge, coupon1 == 2 ? -1100 : -600, false);
                        chr.getStorage().increaseSlots((byte) (4 * coupon1));
                        chr.getStorage().saveToDB();
                        chr.dropMessage(1, new StringBuilder().append("�ֿ�����ɹ�����ǰ��λ: ").append(chr.getStorage().getSlots()).append(" ����").toString());
                        break;
                    }
                }
                chr.dropMessage(1, "�ֿ�����ʧ�ܣ�������������λ�ѳ������ޡ�");

                c.getSession().write(MTSCSPacket.ˢ�µ����Ϣ(chr));
                break;
            case 8:
                toCharge = slea.readByte() + 1;
                cItem = CashItemFactory.getInstance().getItem(slea.readInt());
                int slots = c.getCharacterSlots();
                if ((cItem == null) || (chr.getCSPoints(toCharge) < cItem.getPrice()) || (slots > 15) || (cItem.getId() != 5430000)) {
                    chr.dropMessage(1, "��ɫ������ʧ�ܣ�������������λ�ѳ������ޡ�");
                    c.getSession().write(MTSCSPacket.ˢ�µ����Ϣ(chr));
                    return;
                }
                if (c.gainCharacterSlot()) {
                    chr.modifyCSPoints(toCharge, -cItem.getPrice(), false);
                    chr.dropMessage(1, new StringBuilder().append("��ɫ������ɹ�����ǰ��λ: ").append(slots + 1).toString());
                } else {
                    chr.dropMessage(1, "��ɫ������ʧ�ܡ�");
                }
                c.getSession().write(MTSCSPacket.ˢ�µ����Ϣ(chr));
                break;
            case 9:
                toCharge = slea.readByte() + 1;
                int sn = slea.readInt();
                cItem = CashItemFactory.getInstance().getItem(sn);
                chr.dropMessage(1, "��ʱ��֧�֡�");
                c.getSession().write(MTSCSPacket.ˢ�µ����Ϣ(chr));
                break;
            case 10:
                toCharge = slea.readByte() + 1;
                sn = slea.readInt();
                cItem = CashItemFactory.getInstance().getItem(sn);
                if ((cItem == null) || (chr.getCSPoints(toCharge) < cItem.getPrice() * 10) || (cItem.getId() / 10000 != 555)) {
                    chr.dropMessage(1, "��������ʧ�ܣ����������߳�����������");
                    c.getSession().write(MTSCSPacket.ˢ�µ����Ϣ(chr));
                    return;
                }
                MapleQuestStatus marr = chr.getQuestNoAdd(MapleQuest.getInstance(122700));
                if ((marr != null) && (marr.getCustomData() != null) && (Long.parseLong(marr.getCustomData()) >= System.currentTimeMillis())) {
                    chr.dropMessage(1, "��������ʧ�ܣ����Ѿ����й��������䡣");
                } else {
                    long days = 0L;
                    if (cItem.getId() == 5550000) {
                        days = 30;
                    } else if (cItem.getId() == 5550001) {
                        days = 7;
                    }
                    String customData = String.valueOf(System.currentTimeMillis() + days * 24 * 60 * 60 * 1000);
                    chr.getQuestNAdd(MapleQuest.getInstance(122700)).setCustomData(customData);
                    chr.modifyCSPoints(toCharge, -cItem.getPrice() * 10, false);
                    chr.dropMessage(1, new StringBuilder().append("��������ɹ����������仨��:\r\n").append(toCharge == 1 ? "���" : "���þ�").append(cItem.getPrice() * 10).append(" �㣬����ʱ��Ϊ: ").append(days).append(" �졣").toString());
                }
                c.getSession().write(MTSCSPacket.ˢ�µ����Ϣ(chr));
                break;
            case 14:
                Item item1 = cs.findByCashId((int) slea.readLong());
                if (item1 == null) {
                    c.getSession().write(MTSCSPacket.ˢ�µ����Ϣ(chr));
                    return;
                }
                if (chr.getInventory(GameConstants.getInventoryType(item1.getItemId())).addItem(item1) == -1) {
                    break;
                }
                cs.removeFromInventory(item1);
                c.getSession().write(MTSCSPacket.�̳ǵ�����(item1));
                break;
            case 15:
                int cashId = (int) slea.readLong();
                byte type = slea.readByte();
                MapleInventory mi = chr.getInventory(MapleInventoryType.getByType(type));
                item1 = mi.findByUniqueId(cashId);
                if (item1 == null) {
                    c.getSession().write(MTSCSPacket.ˢ�µ����Ϣ(chr));
                    return;
                }
                if (cs.getItemsSize() < 100) {
                    sn = CashItemFactory.getInstance().getSnFromId(item1.getItemId());
                    cs.addToInventory(item1);
                    mi.removeSlot(item1.getPosition());
                    c.getSession().write(MTSCSPacket.�������̳�(item1, c.getAccID(), sn));
                } else {
                    chr.dropMessage(1, "�ƶ�ʧ�ܡ�");
                }
                break;
            case 29:
                slea.readMapleAsciiString();
                toCharge = 2;
                int uniqueId = (int) slea.readLong();
                item1 = cs.findByCashId(uniqueId);
                if (item1 == null) {
                    c.getSession().write(MTSCSPacket.ˢ�µ����Ϣ(chr));
                    return;
                }
                snCS = CashItemFactory.getInstance().getSnFromId(item1.getItemId());
                cItem = CashItemFactory.getInstance().getItem(snCS);
                if (cItem == null) {
                    chr.dropMessage(1, "����ʧ�ܣ���ǰ���߲�֧�ֻ�����");
                    c.getSession().write(MTSCSPacket.ˢ�µ����Ϣ(chr));
                    return;
                }
                if (!ii.isCash(cItem.getId())) {
                    AutobanManager.getInstance().autoban(chr.getClient(), "�̳ǷǷ���������.");
                    return;
                }

                int Money = cItem.getPrice() / 10 * 3;
                cs.removeFromInventory(item1);
                chr.modifyCSPoints(toCharge, Money, false);
                c.getSession().write(MTSCSPacket.�̳ǻ�������(uniqueId, Money));

                c.getSession().write(MTSCSPacket.ˢ�µ����Ϣ(chr));

                break;
            case 32:
            case 39:
                slea.readMapleAsciiString();
                toCharge = 1;
                cItem = CashItemFactory.getInstance().getItem(slea.readInt());
                String partnerName = slea.readMapleAsciiString();
                String msg = slea.readMapleAsciiString();
                if ((cItem == null) || (!GameConstants.isEffectRing(cItem.getId())) || (chr.getCSPoints(toCharge) < cItem.getPrice()) || (msg.length() > 73) || (msg.length() < 1)) {
                    c.getSession().write(MTSCSPacket.�̳Ǵ�����ʾ(0));
                    return;
                }
                if (!cItem.genderEquals(chr.getGender())) {
                    c.getSession().write(MTSCSPacket.�̳Ǵ�����ʾ(7));
                    return;
                }
                if (chr.getCashInventory().getItemsSize() >= 100) {
                    c.getSession().write(MTSCSPacket.�̳Ǵ�����ʾ(24));
                    return;
                }
                if (!ii.isCash(cItem.getId())) {
                    AutobanManager.getInstance().autoban(chr.getClient(), "�̳ǷǷ������ָ����.");
                    return;
                }
                for (int i : GameConstants.cashBlock) {
                    if (cItem.getId() == i) {
                        chr.dropMessage(1, GameConstants.getCashBlockedMsg(cItem.getId()));
                        c.getSession().write(MTSCSPacket.ˢ�µ����Ϣ(chr));
                        return;
                    }
                }
                Triple info = MapleCharacterUtil.getInfoByName(partnerName, chr.getWorld());
                if ((info == null) || (((Integer) info.getLeft()).intValue() <= 0)) {
                    c.getSession().write(MTSCSPacket.�̳Ǵ�����ʾ(7));
                } else if ((((Integer) info.getMid()).intValue() == c.getAccID()) || (((Integer) info.getLeft()).intValue() == chr.getId())) {
                    c.getSession().write(MTSCSPacket.�̳Ǵ�����ʾ(6));
                } else {
                    if ((((Integer) info.getRight()).intValue() == chr.getGender()) && (action == 32)) {
                        c.getSession().write(MTSCSPacket.�̳Ǵ�����ʾ(26));
                        return;
                    }
                    int err = MapleRing.createRing(cItem.getId(), chr, partnerName, msg, ((Integer) info.getLeft()).intValue(), cItem.getSN());
                    if (err != 1) {
                        c.getSession().write(MTSCSPacket.�̳Ǵ�����ʾ(1));
                        return;
                    }
                    c.getPlayer().modifyCSPoints(toCharge, -cItem.getPrice(), false);
                    c.getSession().write(MTSCSPacket.�̳�����(cItem.getId(), cItem.getCount(), partnerName));
                }
                c.getSession().write(MTSCSPacket.ˢ�µ����Ϣ(chr));

                break;
            case 34:
                toCharge = slea.readByte() + 1;
                snCS = slea.readInt();
                if ((snCS == 10200551) || (snCS == 10200552) || (snCS == 10200553)) {
                    chr.dropMessage(1, "��ǰ������δ���Ź����̳ǻ������ĵ���.");
                    c.getSession().write(MTSCSPacket.ˢ�µ����Ϣ(chr));
                    return;
                }
                cItem = CashItemFactory.getInstance().getItem(snCS);
                List ccc = null;
                if (cItem != null) {
                    ccc = CashItemFactory.getInstance().getPackageItems(cItem.getId());
                }
                if ((cItem == null) || (ccc == null)) {
                    chr.dropMessage(1, "δ֪����");
                    c.getSession().write(MTSCSPacket.ˢ�µ����Ϣ(chr));
                    return;
                }
                if (chr.getCSPoints(toCharge) < cItem.getPrice()) {
                    c.getSession().write(MTSCSPacket.�̳Ǵ�����ʾ(3));
                    c.getSession().write(MTSCSPacket.ˢ�µ����Ϣ(chr));
                    return;
                }
                if (!cItem.genderEquals(c.getPlayer().getGender())) {
                    chr.dropMessage(1, "�Ա𲻷���");
                    c.getSession().write(MTSCSPacket.ˢ�µ����Ϣ(chr));
                    return;
                }
                if (c.getPlayer().getCashInventory().getItemsSize() >= 100 - ccc.size()) {
                    c.getSession().write(MTSCSPacket.�̳Ǵ�����ʾ(24));
                    c.getSession().write(MTSCSPacket.ˢ�µ����Ϣ(chr));
                    return;
                }
                for (int iz : GameConstants.cashBlock) {
                    if (cItem.getId() == iz) {
                        chr.dropMessage(1, GameConstants.getCashBlockedMsg(cItem.getId()));
                        c.getSession().write(MTSCSPacket.ˢ�µ����Ϣ(chr));
                        return;
                    }
                }
                Map ccz = new HashMap();
                for (Iterator i$ = ccc.iterator(); i$.hasNext();) {
                    int i = ((Integer) i$.next()).intValue();
                    CashItemInfo cii = CashItemFactory.getInstance().getSimpleItem(i);
                    if (cii == null) {
                        continue;
                    }
                    Item itemz = chr.getCashInventory().toItem(cii);
                    if ((itemz == null) || (itemz.getUniqueId() <= 0)) {
                        continue;
                    }
                    for (int iz : GameConstants.cashBlock) {
                        if (itemz.getItemId() == iz) {
                            continue;
                        }
                    }
                    if (!ii.isCash(itemz.getItemId())) {
                        log.info(new StringBuilder().append("[����] ").append(chr.getName()).append(" �̳ǷǷ������������.����: ").append(itemz.getItemId()).append(" - ").append(ii.getName(itemz.getItemId())).toString());
                        AutobanManager.getInstance().autoban(chr.getClient(), "�̳ǷǷ������������.");
                        continue;
                    }
                    ccz.put(Integer.valueOf(i), itemz);
                    chr.getCashInventory().addToInventory(itemz);
                }
                chr.modifyCSPoints(toCharge, -cItem.getPrice(), false);

                chr.dropMessage(1, "�������ɹ�.");
                c.getSession().write(MTSCSPacket.�̳ǵ�������Ϣ(c));
                c.getSession().write(MTSCSPacket.ˢ�µ����Ϣ(chr));

                break;
            case 35:
                slea.readMapleAsciiString();
                cItem = CashItemFactory.getInstance().getItem(slea.readInt());
                partnerName = slea.readMapleAsciiString();
                msg = slea.readMapleAsciiString();

                if ((cItem == null) || (chr.getCSPoints(1) < cItem.getPrice()) || (msg.length() > 73) || (msg.length() < 1)) {
                    c.getSession().write(MTSCSPacket.�̳Ǵ�����ʾ(3));

                    return;
                }
                info = MapleCharacterUtil.getInfoByName(partnerName, chr.getWorld());
                if ((info == null) || (((Integer) info.getLeft()).intValue() <= 0)) {
                    c.getSession().write(MTSCSPacket.�̳Ǵ�����ʾ(7));
                } else if ((((Integer) info.getLeft()).intValue() == chr.getId()) || (((Integer) info.getMid()).intValue() == c.getAccID())) {
                    c.getSession().write(MTSCSPacket.�̳Ǵ�����ʾ(6));
                } else if (!cItem.genderEquals(((Integer) info.getRight()).intValue())) {
                    c.getSession().write(MTSCSPacket.�̳Ǵ�����ʾ(8));
                } else {
                    for (int i : GameConstants.cashBlock) {
                        if (cItem.getId() == i) {
                            chr.dropMessage(1, GameConstants.getCashBlockedMsg(cItem.getId()));
                            c.getSession().write(MTSCSPacket.ˢ�µ����Ϣ(chr));
                            return;
                        }
                    }
                    if (!ii.isCash(cItem.getId())) {
                        log.info(new StringBuilder().append("[����] ").append(chr.getName()).append(" �̳ǷǷ������������.����: ").append(cItem.getId()).append(" - ").append(ii.getName(cItem.getId())).toString());
                        chr.dropMessage(1, "�����̳�������߳��ִ���.");
                        c.getSession().write(MTSCSPacket.ˢ�µ����Ϣ(chr));

                        return;
                    }

                    chr.getCashInventory().gift(((Integer) info.getLeft()).intValue(), chr.getName(), msg, cItem.getSN(), MapleInventoryIdentifier.getInstance());
                    chr.modifyCSPoints(1, -cItem.getPrice(), false);
                    chr.dropMessage(1, new StringBuilder().append("�ɹ�����͸�[").append(partnerName).append("]���ѵ��").append(cItem.getPrice()).append("��.").toString());

                    chr.sendNote(partnerName, new StringBuilder().append(partnerName).append(" �����յ�").append(chr.getName()).append("�͸��������������ֽ��̳ǲ鿴��").toString());
                    MapleCharacter receiver = ChannelServer.getCharacterByName(partnerName);
                    if (receiver != null) {
                        receiver.showNote();
                    }
                }
                c.getSession().write(MTSCSPacket.ˢ�µ����Ϣ(chr));

                break;
            case 36:
                cItem = CashItemFactory.getInstance().getItem(slea.readInt());
                if ((cItem == null) || (!MapleItemInformationProvider.getInstance().isQuestItem(cItem.getId()))) {
                    chr.dropMessage(1, "�õ��߲���������Ʒ");
                    c.getSession().write(MTSCSPacket.ˢ�µ����Ϣ(chr));
                    return;
                }
                if (chr.getMeso() < cItem.getPrice()) {
                    chr.dropMessage(1, "��Ҳ���");
                    c.getSession().write(MTSCSPacket.ˢ�µ����Ϣ(chr));
                    return;
                }
                if (chr.getInventory(GameConstants.getInventoryType(cItem.getId())).getNextFreeSlot() < 0) {
                    chr.dropMessage(1, "�����ռ䲻��");
                    c.getSession().write(MTSCSPacket.ˢ�µ����Ϣ(chr));
                    return;
                }
                for (int iz : GameConstants.cashBlock) {
                    if (cItem.getId() == iz) {
                        chr.dropMessage(1, GameConstants.getCashBlockedMsg(cItem.getId()));
                        c.getSession().write(MTSCSPacket.ˢ�µ����Ϣ(chr));
                        return;
                    }
                }
                if ((cItem.getId() == 4031063) || (cItem.getId() == 4031191) || (cItem.getId() == 4031192)) {
                    byte pos = MapleInventoryManipulator.addId(c, cItem.getId(), (short) cItem.getCount(), null, new StringBuilder().append("�̳�: ������Ʒ �� ").append(FileoutputUtil.CurrentReadable_Date()).toString());
                    if (pos < 0) {
                        c.getSession().write(MTSCSPacket.ˢ�µ����Ϣ(chr));
                        return;
                    }
                    chr.gainMeso(-cItem.getPrice(), false);
                    c.getSession().write(MTSCSPacket.�̳ǹ����������(cItem.getPrice(), (short) cItem.getCount(), pos, cItem.getId()));
                } else {
                    AutobanManager.getInstance().autoban(chr.getClient(), "�̳ǷǷ������������.");
                }
                break;
            case 47:
                snCS = slea.readInt();
                if ((snCS == 50200031) && (chr.getCSPoints(1) >= 500)) {
                    chr.modifyCSPoints(1, -500, false);
                    chr.modifyCSPoints(2, 500, false);
                    chr.dropMessage(1, "�һ����þ�ɹ�");
                } else if ((snCS == 50200032) && (chr.getCSPoints(1) >= 1000)) {
                    chr.modifyCSPoints(1, -1000, false);
                    chr.modifyCSPoints(2, 1000, false);
                    chr.dropMessage(1, "�һ����þ�ɹ�");
                } else if ((snCS == 50200033) && (chr.getCSPoints(1) >= 5000)) {
                    chr.modifyCSPoints(1, -5000, false);
                    chr.modifyCSPoints(2, 5000, false);
                    chr.dropMessage(1, "�һ����þ�ɹ�");
                } else {
                    chr.dropMessage(1, "û���ҵ�������ߵ���Ϣ��");
                }
                c.getSession().write(MTSCSPacket.ˢ�µ����Ϣ(chr));
                break;
            case 49:
                c.getSession().write(MTSCSPacket.redeemResponse());
                break;
            case 11:
            case 12:
            case 13:
            case 16:
            case 17:
            case 18:
            case 19:
            case 20:
            case 21:
            case 22:
            case 23:
            case 24:
            case 25:
            case 26:
            case 27:
            case 28:
            case 30:
            case 31:
            case 33:
            case 37:
            case 38:
            case 40:
            case 41:
            case 42:
            case 43:
            case 44:
            case 45:
            case 46:
            case 48:
            case 62://��ʿ�ų���������
                
        short slot = slea.readShort();
        int itemid = slea.readInt();
        boolean useCash = slea.readByte() > 0;
        Item toUse = chr.getInventory(MapleInventoryType.ETC).getItem((short) (byte) slot);
      //  if ((toUse == null) || (toUse.getQuantity() <= 0) || (toUse.getItemId() != itemid) || (chr.hasBlockedInventory())) {
      //      c.getSession().write(MaplePacketCreator.enableActions());
       //     return;
     //   }


        int keyIDforRemoval = 0;

     //   MapleItemInformationProvider iis = MapleItemInformationProvider.getInstance();
        int reward;
        String box;
        String key;
        int price;
        switch (toUse.getItemId()) {
            case 5533002:
                reward = RandomRewards.getGoldBoxReward();
                keyIDforRemoval = 5533002;
                box = "��ʿ�ų�����������";
                key = "��ʿ�ų�����������";
                price = 0;
                break;
            default:
                return;
        }
        
        int amount = 1;
        switch (reward) {
            case 2000004:
                amount = 200;
                break;
            case 2000005:
                amount = 100;
        }
                
     //  if ((chr.getInventory(MapleInventoryType.CASH).countById(keyIDforRemoval) > 0) || ((useCash) && (chr.getCSPoints(2) > price))) {
            Item item = MapleInventoryManipulator.addbyId_Gachapon(c, reward, (short) amount);
            if (item == null) {
                chr.dropMessage(1, "����  ʧ�ܣ�������һ�Ρ�");
                c.getSession().write(MaplePacketCreator.enableActions());
                return;
            }
            MapleInventoryManipulator.removeFromSlot(c, MapleInventoryType.ETC, (short) (byte) slot, (short) 1, true);
            if (useCash) {
                chr.modifyCSPoints(2, -price, true);
            } else {
                MapleInventoryManipulator.removeById(c, MapleInventoryType.CASH, keyIDforRemoval, 1, true, false);
            }
            c.getSession().write(MaplePacketCreator.getShowItemGain(reward, (short) amount, true));
            byte rareness = GameConstants.gachaponRareItem(item.getItemId());
            if (rareness > 0) {
                World.Broadcast.broadcastMessage(MaplePacketCreator.getGachaponMega(c.getPlayer().getName(), new StringBuilder().append(" : ��").append(box).append("�л��{").append(ii.getName(item.getItemId())).append("}�����һ��ϲ���������ɣ�������").toString(), item, rareness, c.getChannel()));
            }
     //   }
                
                
                
                
            default:
                label1243:
                c.getSession().write(MTSCSPacket.ˢ�µ����Ϣ(chr));
                System.out.print(new StringBuilder().append("δ֪�Ĳ���ָ�� (").append(action).append(").\r\n").toString());
        }
    }

    public static void �̳�����(LittleEndianAccessor slea, MapleClient c, MapleCharacter chr) {
        slea.readMapleAsciiString();
        CashItemInfo item = CashItemFactory.getInstance().getItem(slea.readInt());
        MapleItemInformationProvider ii = MapleItemInformationProvider.getInstance();
        String partnerName = slea.readMapleAsciiString();
        String msg = slea.readMapleAsciiString();

        if ((item == null) || (chr.getCSPoints(1) < item.getPrice()) || (msg.length() > 73) || (msg.length() < 1)) {
            c.getSession().write(MTSCSPacket.�̳Ǵ�����ʾ(3));

            return;
        }
        Triple info = MapleCharacterUtil.getInfoByName(partnerName, chr.getWorld());
        if ((info == null) || (((Integer) info.getLeft()).intValue() <= 0)) {
            c.getSession().write(MTSCSPacket.�̳Ǵ�����ʾ(7));
        } else if ((((Integer) info.getLeft()).intValue() == chr.getId()) || (((Integer) info.getMid()).intValue() == c.getAccID())) {
            c.getSession().write(MTSCSPacket.�̳Ǵ�����ʾ(6));
        } else if (!item.genderEquals(((Integer) info.getRight()).intValue())) {
            c.getSession().write(MTSCSPacket.�̳Ǵ�����ʾ(8));
        } else {
            for (int i : GameConstants.cashBlock) {
                if (item.getId() == i) {
                    chr.dropMessage(1, GameConstants.getCashBlockedMsg(item.getId()));
                    c.getSession().write(MTSCSPacket.ˢ�µ����Ϣ(chr));
                    return;
                }
            }
            if (!ii.isCash(item.getId())) {
                log.info(new StringBuilder().append("[����] ").append(chr.getName()).append(" �̳ǷǷ������������.����: ").append(item.getId()).append(" - ").append(ii.getName(item.getId())).toString());
                chr.dropMessage(1, "�����̳�������߳��ִ���.");
                c.getSession().write(MTSCSPacket.ˢ�µ����Ϣ(chr));

                return;
            }

            chr.getCashInventory().gift(((Integer) info.getLeft()).intValue(), chr.getName(), msg, item.getSN(), MapleInventoryIdentifier.getInstance());
            chr.modifyCSPoints(1, -item.getPrice(), false);
            c.getSession().write(MTSCSPacket.�̳�����(item.getId(), item.getCount(), partnerName));
            c.getSession().write(MTSCSPacket.ˢ�µ����Ϣ(chr));

            chr.sendNote(partnerName, new StringBuilder().append(partnerName).append(" �����յ�").append(chr.getName()).append("�͸��������������ֽ��̳ǲ鿴��").toString());
            MapleCharacter receiver = ChannelServer.getCharacterByName(partnerName);
            if (receiver != null) {
                receiver.showNote();
            }
        }
    }

    private static MapleInventoryType getInventoryType(int id) {
        switch (id) {
            case 50200075:
                return MapleInventoryType.EQUIP;
            case 50200074:
                return MapleInventoryType.USE;
            case 50200073:
                return MapleInventoryType.ETC;
        }
        return MapleInventoryType.UNDEFINED;
    }
}

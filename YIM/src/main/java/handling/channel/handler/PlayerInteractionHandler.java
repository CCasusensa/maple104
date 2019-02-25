package handling.channel.handler;

import client.MapleCharacter;
import client.MapleClient;
import client.MapleLieDetector;
import client.inventory.Item;
import client.inventory.ItemFlag;
import client.inventory.MapleInventory;
import client.inventory.MapleInventoryType;
import constants.GameConstants;
import handling.channel.ChannelServer;
import handling.world.World.Broadcast;
import java.io.PrintStream;
import java.util.Arrays;
import java.util.List;
import org.apache.log4j.Logger;

import server.MapleInventoryManipulator;
import server.MapleItemInformationProvider;
import server.MapleTrade;
import server.maps.FieldLimitType;
import server.maps.MapleMap;
import server.maps.MapleMapObject;
import server.maps.MapleMapObjectType;
import server.shops.HiredMerchant;
import server.shops.IMaplePlayerShop;
import server.shops.MapleMiniGame;
import server.shops.MaplePlayerShop;
import server.shops.MaplePlayerShopItem;
import tools.FileoutputUtil;
import tools.MaplePacketCreator;
import tools.Pair;
import tools.data.LittleEndianAccessor;
import tools.packet.PlayerShopPacket;

public class PlayerInteractionHandler {

    private static final Logger log = Logger.getLogger(PlayerInteractionHandler.class);

    public static enum Interaction {

        ������Ʒ(0),
        ���ý��(1),
        ��ɽ���(2),
        ����(6),
        ����(9),
        ROOM(10),
        ��������(11),
        �ܾ�����(12),
        ����(14),
        �����¼�(15),
        ��(16),
        �˳�(18),
        ����̵�_��ӵ���(255),
        ����̵�_�������(255),
        ��Ӷ�̵�_ά��(20),
        �����Ʒ(21),
        BUY_ITEM_STORE(255),
        ��Ӷ�̵�_�������(22),
        ��Ӷ�̵�_�󹺵���(23),
        �Ƴ���Ʒ(28),
        ��Ӷ�̵�_����(29),
        ��Ӷ�̵�_����(30),
        ��Ӷ�̵�_�ر�(31),
        ��Ӷ�̵�_�ر����(32),
        ADMIN_STORE_NAMECHANGE(255),
        ��Ӷ�̵�_�鿴��������(36),
        ��Ӷ�̵�_�鿴������(37),
        ��Ӷ�̵�_��Ӻ�����(38),
        ��Ӷ�̵�_�Ƴ�������(39),
        ����_��Ӷ�̵�(51),
        REQUEST_TIE(255),
        ANSWER_TIE(255),
        GIVE_UP(255),
        REQUEST_REDO(255),
        ANSWER_REDO(255),
        EXIT_AFTER_GAME(255),
        CANCEL_EXIT(255),
        READY(255),
        UN_READY(255),
        EXPEL(255),
        START(255),
        SKIP(255),
        MOVE_OMOK(255),
        SELECT_CARD(255);
        public byte action;

        private Interaction(int action) {
            this.action = (byte) action;
        }

        public byte getCode() {
            return this.action;
        }

        public static Interaction getByAction(int i) {
            for (Interaction s : values()) {
                if (s.action == i) {
                    return s;
                }
            }
            return null;
        }
    }

    public static void PlayerInteraction(LittleEndianAccessor slea, MapleClient c, MapleCharacter chr) {
        byte mode = slea.readByte();
        Interaction action = Interaction.getByAction(mode);
        if ((chr == null) || (action == null)) {
            System.out.println("��һ���δ֪�Ĳ�������: " + mode + " " + slea.toString());
            c.getSession().write(MaplePacketCreator.enableActions());
            return;
        }
        if (chr.getAntiMacro().inProgress()) {
            chr.dropMessage(5, "��ʹ�ò����ʱ�޷�������");
            c.getSession().write(MaplePacketCreator.enableActions());
            return;
        }
        chr.setScrolledPosition((short) 0);
        if (chr.isAdmin()) {
            chr.dropMessage(5, "��һ�����������: " + action);
        }
        switch (action) {
            case ����: {
                if ((chr.getPlayerShop() != null) || (c.getChannelServer().isShutdown()) || (chr.hasBlockedInventory())) {
                    c.getSession().write(MaplePacketCreator.enableActions());
                    return;
                }
                byte createType = slea.readByte();
                if (createType == 3) {
                    MapleTrade.startTrade(chr);
                } else {
                    if ((createType != 1) && (createType != 2) && (createType != 4) && (createType != 5)) {
                        break;
                    }
                    if ((!chr.getMap().getMapObjectsInRange(chr.getTruePosition(), 20000.0D, Arrays.asList(new MapleMapObjectType[]{MapleMapObjectType.SHOP, MapleMapObjectType.HIRED_MERCHANT})).isEmpty()) || (!chr.getMap().getPortalsInRange(chr.getTruePosition(), 20000.0D).isEmpty())) {
                        chr.dropMessage(1, "�޷�������ط�ʹ��.");
                        c.getSession().write(MaplePacketCreator.enableActions());
                        return;
                    }
                    if (((createType == 1) || (createType == 2)) && ((FieldLimitType.Minigames.check(chr.getMap().getFieldLimit())) || (chr.getMap().allowPersonalShop()))) {
                        chr.dropMessage(1, "�޷�������ط�ʹ��.");
                        c.getSession().write(MaplePacketCreator.enableActions());
                        return;
                    }

                    String desc = slea.readMapleAsciiString();
                    String pass = "";
                    if (slea.readByte() > 0) {
                        pass = slea.readMapleAsciiString();
                    }
                    if ((createType == 1) || (createType == 2)) {
                        int piece = slea.readByte();
                        int itemId = createType == 1 ? 4080000 + piece : 4080100;
                        if ((!chr.haveItem(itemId)) || ((c.getPlayer().getMapId() >= 910000001) && (c.getPlayer().getMapId() <= 910000022))) {
                            return;
                        }
                        MapleMiniGame game = new MapleMiniGame(chr, itemId, desc, pass, createType);
                        game.setPieceType(piece);
                        chr.setPlayerShop(game);
                        game.setAvailable(true);
                        game.setOpen(true);
                        game.send(c);
                        chr.getMap().addMapObject(game);
                        game.update();
                    } else if (chr.getMap().allowPersonalShop()) {
                        Item shop = c.getPlayer().getInventory(MapleInventoryType.CASH).getItem((short) (byte) slea.readShort());
                        if ((shop == null) || (shop.getQuantity() <= 0) || (shop.getItemId() != slea.readInt()) || (c.getPlayer().getMapId() < 910000001) || (c.getPlayer().getMapId() > 910000022)) {
                            return;
                        }
                        if (createType == 4) {
                            MaplePlayerShop mps = new MaplePlayerShop(chr, shop.getItemId(), desc);
                            chr.setPlayerShop(mps);
                            chr.getMap().addMapObject(mps);
                            c.getSession().write(PlayerShopPacket.getPlayerStore(chr, true));
                        } else if (HiredMerchantHandler.UseHiredMerchant(chr.getClient(), false)) {
                            HiredMerchant merch = new HiredMerchant(chr, shop.getItemId(), desc);
                            chr.setPlayerShop(merch);
                            chr.getMap().addMapObject(merch);
                            c.getSession().write(PlayerShopPacket.getHiredMerch(chr, merch, true));
                        }
                    }
                }
                break;
            }
            case ��������: {
                if (chr.getMap() == null) {
                    return;
                }
                MapleCharacter chrr = chr.getMap().getCharacterById(slea.readInt());
                if ((chrr == null) || (c.getChannelServer().isShutdown()) || (chrr.hasBlockedInventory())) {
                    c.getSession().write(MaplePacketCreator.enableActions());
                    return;
                }
                MapleTrade.inviteTrade(chr, chrr);
                break;
            }
            case �ܾ�����: {
                MapleTrade.declineTrade(chr);
                break;
            }
            case ����: {
                if (c.getChannelServer().isShutdown()) {
                    c.getSession().write(MaplePacketCreator.enableActions());
                    return;
                }
                if ((chr.getTrade() != null) && (chr.getTrade().getPartner() != null) && (!chr.getTrade().inTrade())) {
                    MapleTrade.visitTrade(chr, chr.getTrade().getPartner().getChr());
                } else {
                    if ((chr.getMap() == null) || (chr.getTrade() != null)) {
                        break;
                    }
                    int obid = slea.readInt();
                    MapleMapObject ob = chr.getMap().getMapObject(obid, MapleMapObjectType.HIRED_MERCHANT);
                    if (ob == null) {
                        ob = chr.getMap().getMapObject(obid, MapleMapObjectType.SHOP);
                    }
                    if (((ob instanceof IMaplePlayerShop)) && (chr.getPlayerShop() == null)) {
                        IMaplePlayerShop ips = (IMaplePlayerShop) ob;
                        if ((ob instanceof HiredMerchant)) {
                            HiredMerchant merchant = (HiredMerchant) ips;
                            if ((merchant.isOwner(chr)) && (merchant.isOpen()) && (merchant.isAvailable())) {
                                merchant.setOpen(false);
                                merchant.removeAllVisitors(18, 1);
                                chr.setPlayerShop(ips);
                                c.getSession().write(PlayerShopPacket.getHiredMerch(chr, merchant, false));
                            } else if ((!merchant.isOpen()) || (!merchant.isAvailable())) {
                                chr.dropMessage(1, "�������������̵���Ʒ\r\n���Ժ��ٶȹ��٣�");
                            } else if (ips.getFreeSlot() == -1) {
                                chr.dropMessage(1, "�����Ѵﵽ�������\r\n���Ժ��ٶȹ��٣�");
                            } else if (merchant.isInBlackList(chr.getName())) {
                                chr.dropMessage(1, "�㱻��ֹ����õ���");
                            } else {
                                chr.setPlayerShop(ips);
                                merchant.addVisitor(chr);
                                c.getSession().write(PlayerShopPacket.getHiredMerch(chr, merchant, false));
                            }

                        } else if (((ips instanceof MaplePlayerShop)) && (((MaplePlayerShop) ips).isBanned(chr.getName()))) {
                            chr.dropMessage(1, "�㱻��ֹ����õ���");
                        } else if ((ips.getFreeSlot() < 0) || (ips.getVisitorSlot(chr) > -1) || (!ips.isOpen()) || (!ips.isAvailable())) {
                            c.getSession().write(PlayerShopPacket.getMiniGameFull());
                        } else {
                            if ((slea.available() > 0L) && (slea.readByte() > 0)) {
                                String pass = slea.readMapleAsciiString();
                                if (!pass.equals(ips.getPassword())) {
                                    c.getPlayer().dropMessage(1, "����������벻��ȷ.");
                                    return;
                                }
                            } else if (ips.getPassword().length() > 0) {
                                c.getPlayer().dropMessage(1, "����������벻��ȷ.");
                                return;
                            }
                            chr.setPlayerShop(ips);
                            ips.addVisitor(chr);
                            if ((ips instanceof MapleMiniGame)) {
                                ((MapleMiniGame) ips).send(c);
                            } else {
                                c.getSession().write(PlayerShopPacket.getPlayerStore(chr, false));
                            }
                        }
                    }
                }

                break;
            }
            case ����: {
                chr.updateTick(slea.readInt());
                String message = slea.readMapleAsciiString();
                if (chr.getTrade() != null) {
                    chr.getTrade().chat(message);
                } else {
                    if (chr.getPlayerShop() == null) {
                        break;
                    }
                    IMaplePlayerShop ips = chr.getPlayerShop();
                    ips.broadcastToVisitors(PlayerShopPacket.shopChat(chr.getName() + " : " + message, ips.getVisitorSlot(chr)));
                    if (ips.getShopType() == 1) {
                        ips.getMessages().add(new Pair(chr.getName() + " : " + message, Byte.valueOf(ips.getVisitorSlot(chr))));
                    }
                    if (chr.getClient().isMonitored()) {
                        Broadcast.broadcastGMMessage(MaplePacketCreator.serverNotice(6, chr.getName() + " said in " + ips.getOwnerName() + " shop : " + message));
                    }
                }
                break;
            }
            case �˳�: {
                if (chr.getTrade() != null) {
                    MapleTrade.cancelTrade(chr.getTrade(), chr.getClient(), chr);
                } else {
                    IMaplePlayerShop ips = chr.getPlayerShop();
                    if (ips == null) {
                        return;
                    }
                    if ((ips.isOwner(chr)) && (ips.getShopType() != 1)) {
                        ips.closeShop(false, ips.isAvailable());
                    } else {
                        ips.removeVisitor(chr);
                    }
                    chr.setPlayerShop(null);
                }
                break;
            }
            case ��: {
                IMaplePlayerShop shop = chr.getPlayerShop();
                if ((shop == null) || (!shop.isOwner(chr)) || (shop.getShopType() >= 3) || (shop.isAvailable())) {
                    break;
                }
                if (chr.getMap().allowPersonalShop()) {
                    if (c.getChannelServer().isShutdown()) {
                        chr.dropMessage(1, "�����������ر�ά������ʱ�޷����д˲�����.");
                        c.getSession().write(MaplePacketCreator.enableActions());
                        shop.closeShop(shop.getShopType() == 1, false);
                        return;
                    }
                    if ((shop.getShopType() == 1) && (HiredMerchantHandler.UseHiredMerchant(chr.getClient(), false))) {
                        HiredMerchant merchant = (HiredMerchant) shop;
                        merchant.setStoreid(c.getChannelServer().addMerchant(merchant));
                        merchant.setOpen(true);
                        merchant.setAvailable(true);
                        shop.saveItems();
                        chr.getMap().broadcastMessage(PlayerShopPacket.spawnHiredMerchant(merchant));
                        chr.setPlayerShop(null);
                    } else {
                        if (shop.getShopType() != 2) {
                            break;
                        }
                        shop.setOpen(true);
                        shop.setAvailable(true);
                        shop.update();
                    }
                } else {
                    c.getSession().close();
                }
                break;
            }
            case ������Ʒ: {
                MapleItemInformationProvider ii = MapleItemInformationProvider.getInstance();
                MapleInventoryType ivType = MapleInventoryType.getByType(slea.readByte());
                Item item = chr.getInventory(ivType).getItem((short) (byte) slea.readShort());
                short quantity = slea.readShort();
                byte targetSlot = slea.readByte();
                if ((chr.getTrade() == null) || (item == null) || (((quantity > item.getQuantity()) || (quantity < 0)) && (!GameConstants.isThrowingStar(item.getItemId())) && (!GameConstants.isBullet(item.getItemId())))) {
                    break;
                }
                chr.getTrade().setItems(c, item, targetSlot, quantity);
                break;
            }
            case ���ý��: {
                MapleTrade trade = chr.getTrade();
                if (trade == null) {
                    break;
                }
                trade.setMeso(slea.readInt());
                break;
            }
            case ����̵�_��ӵ���:
            case �����Ʒ: {
                MapleInventoryType type = MapleInventoryType.getByType(slea.readByte());
                byte slot = (byte) slea.readShort();
                short bundles = slea.readShort();
                short perBundle = slea.readShort();
                int price = slea.readInt();
                if ((price <= 0) || (bundles <= 0) || (perBundle <= 0)) {
                    chr.dropMessage(1, "�����Ʒ���ִ���(1)");
                    c.getSession().write(MaplePacketCreator.enableActions());
                    return;
                }
                IMaplePlayerShop shop = chr.getPlayerShop();
                if ((shop == null) || (!shop.isOwner(chr)) || ((shop instanceof MapleMiniGame))) {
                    return;
                }
                Item ivItem = chr.getInventory(type).getItem((short) slot);
                MapleItemInformationProvider ii = MapleItemInformationProvider.getInstance();
                if (ivItem == null) {
                    break;
                }
                long check = bundles * perBundle;
                if ((check > 32767L) || (check <= 0L)) {
                    return;
                }
                short bundles_perbundle = (short) (bundles * perBundle);

                if (ivItem.getQuantity() >= bundles_perbundle) {
                    short flag = ivItem.getFlag();
                    if ((ItemFlag.UNTRADEABLE.check(flag)) || (ItemFlag.LOCK.check(flag))) {
                        c.getSession().write(MaplePacketCreator.enableActions());
                        return;
                    }
                    if (((ii.isDropRestricted(ivItem.getItemId())) || (ii.isAccountShared(ivItem.getItemId())))
                            && (!ItemFlag.KARMA_EQ.check(flag)) && (!ItemFlag.KARMA_USE.check(flag))) {
                        c.getSession().write(MaplePacketCreator.enableActions());
                        return;
                    }

                    if ((bundles_perbundle >= 50) && (ivItem.getItemId() == 2340000)) {
                        c.setMonitored(true);
                    }
                    if (GameConstants.getLowestPrice(ivItem.getItemId()) > price) {
                        c.getPlayer().dropMessage(1, "The lowest you can sell this for is " + GameConstants.getLowestPrice(ivItem.getItemId()));
                        c.getSession().write(MaplePacketCreator.enableActions());
                        return;
                    }
                    if ((GameConstants.isThrowingStar(ivItem.getItemId())) || (GameConstants.isBullet(ivItem.getItemId()))) {
                        MapleInventoryManipulator.removeFromSlot(c, type, (short) slot, ivItem.getQuantity(), true);
                        Item sellItem = ivItem.copy();
                        shop.addItem(new MaplePlayerShopItem(sellItem, (short) 1, price));
                    } else {
                        MapleInventoryManipulator.removeFromSlot(c, type, (short) slot, bundles_perbundle, true);
                        Item sellItem = ivItem.copy();
                        sellItem.setQuantity(perBundle);
                        shop.addItem(new MaplePlayerShopItem(sellItem, bundles, price));
                    }
                    c.getSession().write(PlayerShopPacket.shopItemUpdate(shop));
                } else {
                    chr.dropMessage(1, "�����Ʒ��������������Ƿ��ڣ��ӵ�֮������˺��ڽ��з�����");
                }
                break;
            }
            case ��ɽ���:
            case ��Ӷ�̵�_�������:
            case BUY_ITEM_STORE: //  case 15: 
            {
                if (chr.getTrade() != null) {
                    MapleTrade.completeTrade(chr);
                } else {
                    int item = slea.readByte();
                    short quantity = slea.readShort();

                    IMaplePlayerShop shop = chr.getPlayerShop();
                    if ((shop == null) || (shop.isOwner(chr)) || ((shop instanceof MapleMiniGame)) || (item >= shop.getItems().size())) {
                        chr.dropMessage(1, "������߳��ִ���(1)");
                        c.getSession().write(MaplePacketCreator.enableActions());
                        return;
                    }
                    MaplePlayerShopItem tobuy = (MaplePlayerShopItem) shop.getItems().get(item);
                    if (tobuy == null) {
                        chr.dropMessage(1, "������߳��ִ���(2)");
                        c.getSession().write(MaplePacketCreator.enableActions());
                        return;
                    }
                    long check = tobuy.bundles * quantity;
                    long check2 = tobuy.price * quantity;
                    long check3 = tobuy.item.getQuantity() * quantity;
                    if ((check <= 0L) || (check2 > 2147483647L) || (check2 <= 0L) || (check3 > 32767L) || (check3 < 0L)) {
                        chr.dropMessage(1, "������߳��ִ���(3)");
                        c.getSession().write(MaplePacketCreator.enableActions());
                        return;
                    }
                    if (chr.getMeso() - check2 < 0L) {
                        c.getSession().write(PlayerShopPacket.Merchant_Buy_Error((byte) 2));
                        c.getSession().write(MaplePacketCreator.enableActions());
                        return;
                    }
                    if ((tobuy.bundles < quantity) || ((tobuy.bundles % quantity != 0) && (GameConstants.isEquip(tobuy.item.getItemId()))) || (chr.getMeso() - check2 > 2147483647L) || (shop.getMeso() + check2 < 0L) || (shop.getMeso() + check2 > 2147483647L)) {
                        chr.dropMessage(1, "������߳��ִ���(4)");
                        c.getSession().write(MaplePacketCreator.enableActions());
                        return;
                    }
                    if ((quantity >= 50) && (tobuy.item.getItemId() == 2340000)) {
                        c.setMonitored(true);
                    }
                    shop.buy(c, item, quantity);
                    shop.broadcastToVisitors(PlayerShopPacket.shopItemUpdate(shop));
                }
                break;
            }
            case ��Ӷ�̵�_�󹺵���: {
                chr.dropMessage(1, "��ǰ�������ݲ�֧���󹺵���.");
                break;
            }
            case ��Ӷ�̵�_ά��: {
                slea.readByte();
                slea.readInt();
                int obid = slea.readInt();
                MapleMapObject ob = chr.getMap().getMapObject(obid, MapleMapObjectType.HIRED_MERCHANT);
                if ((!(ob instanceof IMaplePlayerShop)) || (chr.getPlayerShop() != null)) {
                    break;
                }
                IMaplePlayerShop ips = (IMaplePlayerShop) ob;
                if ((ob instanceof HiredMerchant)) {
                    HiredMerchant merchant = (HiredMerchant) ips;
                    if ((merchant.isOwner(chr)) && (merchant.isOpen()) && (merchant.isAvailable())) {
                        merchant.setOpen(false);
                        merchant.removeAllVisitors(18, 1);
                        chr.setPlayerShop(ips);
                        c.getSession().write(PlayerShopPacket.getHiredMerch(chr, merchant, false));
                    } else if ((!merchant.isOpen()) || (!merchant.isAvailable())) {
                        chr.dropMessage(1, "�������������̵���Ʒ\r\n���Ժ��ٶȹ��٣�");
                    } else if (ips.getFreeSlot() == -1) {
                        chr.dropMessage(1, "�����Ѵﵽ�������\r\n���Ժ��ٶȹ��٣�");
                    } else if (merchant.isInBlackList(chr.getName())) {
                        chr.dropMessage(1, "�㱻��ֹ����õ���");
                    }
                }

                break;
            }
            case �Ƴ���Ʒ: {
                slea.skip(1);
                int slot = slea.readShort();
                IMaplePlayerShop shop = chr.getPlayerShop();
                if (chr.isGM()) {
                    chr.dropMessage(5, "�Ƴ��̵���߳���: �������� " + shop.getItems().size() + " slot " + slot);
                }
                if ((shop == null) || (!shop.isOwner(chr)) || ((shop instanceof MapleMiniGame)) || (shop.getItems().size() <= 0) || (shop.getItems().size() <= slot) || (slot < 0)) {
                    return;
                }
                MaplePlayerShopItem item = (MaplePlayerShopItem) shop.getItems().get(slot);
                if ((item != null)
                        && (item.bundles > 0)) {
                    Item item_get = item.item.copy();
                    long check = item.bundles * item.item.getQuantity();
                    if ((check < 0L) || (check > 32767L)) {
                        if (chr.isGM()) {
                            chr.dropMessage(5, "�Ƴ��̵���߳���: check " + check);
                        }
                        return;
                    }
                    item_get.setQuantity((short) (int) check);
                    if ((item_get.getQuantity() >= 50) && (item.item.getItemId() == 2340000)) {
                        c.setMonitored(true);
                    }
                    if (MapleInventoryManipulator.checkSpace(c, item_get.getItemId(), item_get.getQuantity(), item_get.getOwner())) {
                        MapleInventoryManipulator.addFromDrop(c, item_get, false);
                        item.bundles = 0;
                        shop.removeFromSlot(slot);
                    }
                }

                c.getSession().write(PlayerShopPacket.shopItemUpdate(shop));
                break;
            }
            //      case 19:
            //   case 20: {
            //   IMaplePlayerShop shop = chr.getPlayerShop();
            //   if ((shop != null) && ((shop instanceof HiredMerchant)) && (shop.isOwner(chr)) && (shop.isAvailable())) {
            //   shop.setOpen(true);
            //   shop.saveItems();
            //   shop.getMessages().clear();
            //   shop.removeAllVisitors(-1, -1);
            //    }
            //   c.getSession().write(MaplePacketCreator.enableActions());
            //      break;
            //   }
            case ��Ӷ�̵�_����: {
                IMaplePlayerShop imps = chr.getPlayerShop();
                if ((imps == null) || (!imps.isOwner(chr)) || ((imps instanceof MapleMiniGame))) {
                    break;
                }
                for (int i = 0; i < imps.getItems().size(); i++) {
                    if (((MaplePlayerShopItem) imps.getItems().get(i)).bundles == 0) {
                        imps.getItems().remove(i);
                    }
                }
                if (chr.getMeso() + imps.getMeso() > 0) {
                    chr.gainMeso(imps.getMeso(), false);
                    log.info("[��Ӷ] " + chr.getName() + " ��Ӷ�����ý��: " + imps.getMeso() + " ʱ��: " + FileoutputUtil.CurrentReadable_Date());
                    imps.setMeso(0);
                }
                c.getSession().write(PlayerShopPacket.shopItemUpdate(imps));
                break;
            }
            case ��Ӷ�̵�_�ر�: {
                IMaplePlayerShop merchant = chr.getPlayerShop();
                if ((merchant != null) && (merchant.getShopType() == 1) && (merchant.isOwner(chr))) {
                    c.getSession().write(PlayerShopPacket.hiredMerchantOwnerLeave());
                    merchant.removeAllVisitors(-1, -1);
                    chr.setPlayerShop(null);
                    merchant.closeShop(true, true);
                } else {
                    chr.dropMessage(1, "�ر��̵����δ֪����.");
                    c.getSession().write(MaplePacketCreator.enableActions());
                }
                break;
            }
            case ADMIN_STORE_NAMECHANGE:
                break;
            case ��Ӷ�̵�_�鿴��������: {
                IMaplePlayerShop merchant = chr.getPlayerShop();
                if ((merchant == null) || (merchant.getShopType() != 1) || (!merchant.isOwner(chr))) {
                    break;
                }
                ((HiredMerchant) merchant).sendVisitor(c);
                break;
            }
            case ��Ӷ�̵�_�鿴������: {
                IMaplePlayerShop merchant = chr.getPlayerShop();
                if ((merchant == null) || (merchant.getShopType() != 1) || (!merchant.isOwner(chr))) {
                    break;
                }
                ((HiredMerchant) merchant).sendBlackList(c);
                break;
            }
            case ��Ӷ�̵�_��Ӻ�����: {
                IMaplePlayerShop merchant = chr.getPlayerShop();
                if ((merchant == null) || (merchant.getShopType() != 1) || (!merchant.isOwner(chr))) {
                    break;
                }
                ((HiredMerchant) merchant).addBlackList(slea.readMapleAsciiString());
                break;
            }
            case ��Ӷ�̵�_�Ƴ�������: {
                IMaplePlayerShop merchant = chr.getPlayerShop();
                if ((merchant == null) || (merchant.getShopType() != 1) || (!merchant.isOwner(chr))) {
                    break;
                }
                ((HiredMerchant) merchant).removeBlackList(slea.readMapleAsciiString());
                break;
            }
            case GIVE_UP: {
                IMaplePlayerShop ips = chr.getPlayerShop();
                if ((ips == null) || (!(ips instanceof MapleMiniGame))) {
                    break;
                }
                MapleMiniGame game = (MapleMiniGame) ips;
                if (game.isOpen()) {
                    break;
                }
                game.broadcastToVisitors(PlayerShopPacket.getMiniGameResult(game, 0, game.getVisitorSlot(chr)));
                game.nextLoser();
                game.setOpen(true);
                game.update();
                game.checkExitAfterGame();
                break;
            }
            case EXPEL: {
                IMaplePlayerShop ips = chr.getPlayerShop();
                if ((ips == null) || (!(ips instanceof MapleMiniGame))
                        || (!((MapleMiniGame) ips).isOpen())) {
                    break;
                }
                ips.removeAllVisitors(3, 1);
                break;
            }
            case READY:
            case UN_READY: {
                IMaplePlayerShop ips = chr.getPlayerShop();
                if ((ips == null) || (!(ips instanceof MapleMiniGame))) {
                    break;
                }
                MapleMiniGame game = (MapleMiniGame) ips;
                if ((!game.isOwner(chr)) && (game.isOpen())) {
                    game.setReady(game.getVisitorSlot(chr));
                    game.broadcastToVisitors(PlayerShopPacket.getMiniGameReady(game.isReady(game.getVisitorSlot(chr))));
                }
                break;
            }
            case START: {
                IMaplePlayerShop ips = chr.getPlayerShop();
                if ((ips == null) || (!(ips instanceof MapleMiniGame))) {
                    break;
                }
                MapleMiniGame game = (MapleMiniGame) ips;
                if ((game.isOwner(chr)) && (game.isOpen())) {
                    for (int i = 1; i < ips.getSize(); i++) {
                        if (!game.isReady(i)) {
                            return;
                        }
                    }
                    game.setGameType();
                    game.shuffleList();
                    if (game.getGameType() == 1) {
                        game.broadcastToVisitors(PlayerShopPacket.getMiniGameStart(game.getLoser()));
                    } else {
                        game.broadcastToVisitors(PlayerShopPacket.getMatchCardStart(game, game.getLoser()));
                    }
                    game.setOpen(false);
                    game.update();
                }
                break;
            }
            case REQUEST_TIE: {
                IMaplePlayerShop ips = chr.getPlayerShop();
                if ((ips == null) || (!(ips instanceof MapleMiniGame))) {
                    break;
                }
                MapleMiniGame game = (MapleMiniGame) ips;
                if (game.isOpen()) {
                    break;
                }
                if (game.isOwner(chr)) {
                    game.broadcastToVisitors(PlayerShopPacket.getMiniGameRequestTie(), false);
                } else {
                    game.getMCOwner().getClient().getSession().write(PlayerShopPacket.getMiniGameRequestTie());
                }
                game.setRequestedTie(game.getVisitorSlot(chr));
                break;
            }
            case ANSWER_TIE: {
                IMaplePlayerShop ips = chr.getPlayerShop();
                if ((ips == null) || (!(ips instanceof MapleMiniGame))) {
                    break;
                }
                MapleMiniGame game = (MapleMiniGame) ips;
                if (game.isOpen()) {
                    break;
                }
                if ((game.getRequestedTie() > -1) && (game.getRequestedTie() != game.getVisitorSlot(chr))) {
                    if (slea.readByte() > 0) {
                        game.broadcastToVisitors(PlayerShopPacket.getMiniGameResult(game, 1, game.getRequestedTie()));
                        game.nextLoser();
                        game.setOpen(true);
                        game.update();
                        game.checkExitAfterGame();
                    } else {
                        game.broadcastToVisitors(PlayerShopPacket.getMiniGameDenyTie());
                    }
                    game.setRequestedTie(-1);
                }
                break;
            }
            case SKIP: {
                IMaplePlayerShop ips = chr.getPlayerShop();
                if ((ips == null) || (!(ips instanceof MapleMiniGame))) {
                    break;
                }
                MapleMiniGame game = (MapleMiniGame) ips;
                if (game.isOpen()) {
                    break;
                }
                if (game.getLoser() != ips.getVisitorSlot(chr)) {
                    ips.broadcastToVisitors(PlayerShopPacket.shopChat("Turn could not be skipped by " + chr.getName() + ". Loser: " + game.getLoser() + " Visitor: " + ips.getVisitorSlot(chr), ips.getVisitorSlot(chr)));
                    return;
                }
                ips.broadcastToVisitors(PlayerShopPacket.getMiniGameSkip(ips.getVisitorSlot(chr)));
                game.nextLoser();
                break;
            }
            case MOVE_OMOK: {

                IMaplePlayerShop ips = chr.getPlayerShop();
                if ((ips == null) || (!(ips instanceof MapleMiniGame))) {
                    break;
                }
                MapleMiniGame game = (MapleMiniGame) ips;
                if (game.isOpen()) {
                    break;
                }
                if (game.getLoser() != game.getVisitorSlot(chr)) {
                    game.broadcastToVisitors(PlayerShopPacket.shopChat("Omok could not be placed by " + chr.getName() + ". Loser: " + game.getLoser() + " Visitor: " + game.getVisitorSlot(chr), game.getVisitorSlot(chr)));
                    return;
                }
                game.setPiece(slea.readInt(), slea.readInt(), slea.readByte(), chr);
                break;
            }
            case SELECT_CARD: {
                IMaplePlayerShop ips = chr.getPlayerShop();
                if ((ips == null) || (!(ips instanceof MapleMiniGame))) {
                    break;
                }
                MapleMiniGame game = (MapleMiniGame) ips;
                if (game.isOpen()) {
                    break;
                }
                if (game.getLoser() != game.getVisitorSlot(chr)) {
                    game.broadcastToVisitors(PlayerShopPacket.shopChat("Card could not be placed by " + chr.getName() + ". Loser: " + game.getLoser() + " Visitor: " + game.getVisitorSlot(chr), game.getVisitorSlot(chr)));
                    return;
                }
                if (slea.readByte() != game.getTurn()) {
                    game.broadcastToVisitors(PlayerShopPacket.shopChat("Omok could not be placed by " + chr.getName() + ". Loser: " + game.getLoser() + " Visitor: " + game.getVisitorSlot(chr) + " Turn: " + game.getTurn(), game.getVisitorSlot(chr)));
                    return;
                }
                int slot = slea.readByte();
                int turn = game.getTurn();
                int fs = game.getFirstSlot();
                if (turn == 1) {
                    game.setFirstSlot(slot);
                    if (game.isOwner(chr)) {
                        game.broadcastToVisitors(PlayerShopPacket.getMatchCardSelect(turn, slot, fs, turn), false);
                    } else {
                        game.getMCOwner().getClient().getSession().write(PlayerShopPacket.getMatchCardSelect(turn, slot, fs, turn));
                    }
                    game.setTurn(0);
                    return;
                }
                if ((fs > 0) && (game.getCardId(fs + 1) == game.getCardId(slot + 1))) {
                    game.broadcastToVisitors(PlayerShopPacket.getMatchCardSelect(turn, slot, fs, game.isOwner(chr) ? 2 : 3));
                    game.setPoints(game.getVisitorSlot(chr));
                } else {
                    game.broadcastToVisitors(PlayerShopPacket.getMatchCardSelect(turn, slot, fs, game.isOwner(chr) ? 0 : 1));
                    game.nextLoser();
                }
                game.setTurn(1);
                game.setFirstSlot(0);
                break;
            }
            case EXIT_AFTER_GAME:
            case CANCEL_EXIT: {
                IMaplePlayerShop ips = chr.getPlayerShop();
                if ((ips == null) || (!(ips instanceof MapleMiniGame))) {
                    break;
                }
                MapleMiniGame game = (MapleMiniGame) ips;
                if (game.isOpen()) {
                    break;
                }
                game.setExitAfter(chr);
                game.broadcastToVisitors(PlayerShopPacket.getMiniGameExitAfter(game.isExitAfter(chr)));
                break;
            }
            default:
                System.out.println("��һ���δ֪�Ĳ�������: " + mode + " " + slea.toString());
                c.getSession().write(MaplePacketCreator.enableActions());
        }
    }
}
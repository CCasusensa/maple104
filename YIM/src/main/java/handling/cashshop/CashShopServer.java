package handling.cashshop;

import handling.MapleServerHandler;
import handling.channel.PlayerStorage;


import java.net.InetSocketAddress;

import handling.netty.MapleSession;
import handling.netty.NettyServerConnection;
import org.apache.log4j.Logger;
import server.MTSStorage;
import server.ServerProperties;

public class CashShopServer {
    private static final Logger log = Logger.getLogger(CashShopServer.class);
    private static String ip;
    private static NettyServerConnection acceptor;
    private static PlayerStorage players;
    private static PlayerStorage playersMTS;
    private static boolean finishedShutdown = false;
    private static final short DEFAULT_PORT = 8900;

    public static void run_startup_configurations() {
        int port = Integer.valueOf(ServerProperties.getProperty("cashshop.port", String.valueOf(8900)));
        ip = ServerProperties.getProperty("world.host") + ":" + port;

        players = new PlayerStorage(-10);//ԭ��ֵΪ  -10
        playersMTS = new PlayerStorage(-20);

        acceptor = new NettyServerConnection(port, 0, -1, true);
        try {
            acceptor.run();
            log.info("�̳Ƿ������󶨶˿�: " + port + ".");
        } catch (Exception e) {
            log.error("�󶨶˿�ʧ��.", e);
        }

    }

    public static String getIP() {
        return ip;
    }

    public static PlayerStorage getPlayerStorage() {
        return players;
    }

    public static PlayerStorage getPlayerStorageMTS() {
        return playersMTS;
    }

    public static void shutdown() {
        if (finishedShutdown) {
            return;
        }
        log.info("���ڹر��̳Ƿ�����...");
        players.disconnectAll();
        playersMTS.disconnectAll();
        MTSStorage.getInstance().saveBuyNow(true);
        log.info("�̳Ƿ���������˿ڰ�...");
        acceptor.close();
        finishedShutdown = true;
    }

    public static boolean isShutdown() {
        return finishedShutdown;
    }
}
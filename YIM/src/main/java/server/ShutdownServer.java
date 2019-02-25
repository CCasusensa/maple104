package server;

import database.DatabaseConnection;
import handling.cashshop.CashShopServer;
import handling.channel.ChannelServer;
import handling.login.LoginServer;
import handling.world.World.Alliance;
import handling.world.World.Broadcast;
import handling.world.World.Family;
import handling.world.World.Guild;
import java.lang.management.ManagementFactory;
import java.sql.SQLException;
import javax.management.MBeanServer;
import javax.management.ObjectName;
import org.apache.log4j.Logger;
import tools.MaplePacketCreator;
/**
 * ����˹ر�
 */
public class ShutdownServer  implements ShutdownServerMBean {

    private static final Logger log = Logger.getLogger(ShutdownServer.class);
    public static ShutdownServer instance;
    public int mode = 0;

    public static void registerMBean() {
        MBeanServer mBeanServer = ManagementFactory.getPlatformMBeanServer();
        try {
            instance = new ShutdownServer();
            mBeanServer.registerMBean(instance, new ObjectName("server:type=ShutdownServer"));
        } catch (Exception e) {
            System.out.println("Error registering Shutdown MBean");
        }
    }

    public static ShutdownServer getInstance() {
        return instance;
    }

    @Override
    public void shutdown() {
        run();
    }

    @Override
    public void run() {
        if (this.mode == 0) {
            Broadcast.broadcastMessage(MaplePacketCreator.serverNotice(0, " ��Ϸ���������ر�ά��������Ұ�ȫ����..."));
            for (ChannelServer cs : ChannelServer.getAllInstances()) {
                cs.setShutdown();
                cs.setServerMessage("��Ϸ���������ر�ά��������Ұ�ȫ����...");
                cs.closeAllMerchants();
            }
            Guild.save();
            Alliance.save();
            Family.save();
            System.out.println("����˹ر��¼� 1 �����.");
            this.mode += 1;
        } else if (this.mode == 1) {
            this.mode += 1;
            System.out.println("����˹ر��¼� 2 ��ʼ...");
            try {
                Broadcast.broadcastMessage(MaplePacketCreator.serverNotice(0, " ��Ϸ���������ر�ά��������Ұ�ȫ����..."));
                Integer[] chs = (Integer[]) ChannelServer.getAllInstance().toArray(new Integer[0]);
                for (int i:chs) {
                    try {
                        ChannelServer cs = ChannelServer.getInstance(i);
                        synchronized (this) {
                            cs.shutdown();
                        }
                    } catch (Exception e) {
                        log.error("�رշ���˴��� - 3" + e);
                    }
                }
                LoginServer.shutdown();
                CashShopServer.shutdown();
                DatabaseConnection.closeAll();
            } catch (SQLException e) {
                log.error("�رշ���˴��� - 4" + e);
            }
            Timer.WorldTimer.getInstance().stop();
            Timer.MapTimer.getInstance().stop();
            Timer.BuffTimer.getInstance().stop();
            Timer.CloneTimer.getInstance().stop();
            Timer.EventTimer.getInstance().stop();
            Timer.EtcTimer.getInstance().stop();
            Timer.PingTimer.getInstance().stop();
            System.out.println("����˹ر��¼� 2 �����.");
            try {
                Thread.sleep(5000);
            } catch (Exception e) {
            }
            System.exit(0);
        }
    }
}
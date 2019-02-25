package server;

import client.MapleCharacter;
import client.SkillFactory;
import client.inventory.MapleInventoryIdentifier;
import commons.services.LoggingService;
import commons.utils.MapleInfos;
import constants.ServerConstants;
import database.DatabaseConnection;
import handling.MapleServerHandler;
import handling.cashshop.CashShopServer;
import handling.channel.ChannelServer;
import handling.channel.MapleGuildRanking;
import handling.channel.PlayerStorage;
import handling.login.LoginInformationProvider;
import handling.login.LoginServer;
import handling.world.World;
import handling.world.family.MapleFamily;
import handling.world.guild.MapleGuild;

import java.io.File;
import java.io.PrintStream;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.concurrent.atomic.AtomicInteger;

import org.apache.log4j.Logger;
import server.Timer.BuffTimer;
import server.Timer.CloneTimer;
import server.Timer.EtcTimer;
import server.Timer.EventTimer;
import server.Timer.MapTimer;
import server.Timer.PingTimer;
import server.Timer.WorldTimer;
import server.events.MapleOxQuizFactory;
import server.life.MapleLifeFactory;
import server.life.MapleMonsterInformationProvider;
import server.life.MobSkillFactory;
import server.life.PlayerNPC;
import server.maps.MapleMap;
import server.maps.MapleMapFactory;
import server.quest.MapleQuest;
import tools.GetMACAddress;

public class Start {
    public static final Logger log = Logger.getLogger(Start.class);
    public static long startTime = System.currentTimeMillis();
    public static final Start instance = new Start();
    public static AtomicInteger CompletedLoadingThreads = new AtomicInteger(0);
    private int rankTime;
    private boolean ivCheck;
    //  private ChannelServer chr;

    public Start() {
        this.ivCheck = false;
    }


    public void run() throws InterruptedException {
        try {
            File file = new File(System.getProperty("resourcePath") + File.separator + "config/log4j.xml");
            LoggingService.init(file.toURI().toURL());
            MapleInfos.printAllInfos();
        } catch (Exception e) {
            log.error("������־�ļ�����:",e);
        }
        this.rankTime = Integer.parseInt(ServerProperties.getProperty("world.rankTime", "30"));
        this.ivCheck = Boolean.parseBoolean(ServerProperties.getProperty("world.ivCheck", "false"));
        if ((Boolean.parseBoolean(ServerProperties.getProperty("world.admin"))) || (ServerConstants.Use_Localhost)) {
            ServerConstants.Use_Fixed_IV = false;
            System.out.println("[!!! �ѿ���ֻ�ܹ���Ա��¼ģʽ !!!]");
        }
        try {
            PreparedStatement ps = DatabaseConnection.getConnection().prepareStatement("UPDATE accounts SET loggedin = 0");
            ps.executeUpdate();
            ps.close();
        } catch (SQLException ex) {
            log.error("�����û���¼״̬����",ex);
            throw new RuntimeException("[EXCEPTION] Please check if the SQL server is active.");
        }

        printSection("���������");
        World.init();
        log.info("����������������...");

        printSection("ʱ���߳�");
        WorldTimer.getInstance().start();
        EtcTimer.getInstance().start();
        MapTimer.getInstance().start();
        CloneTimer.getInstance().start();
        EventTimer.getInstance().start();
        BuffTimer.getInstance().start();
        PingTimer.getInstance().start();
        log.info("ʱ���̼߳������...");

        printSection("���ؼ���");
        MapleGuildRanking.getInstance().load();
        MapleGuild.loadAll();
        log.info("������Ϣ�������...");

        printSection("����ѧԺ");
        MapleFamily.loadAll();
        log.info("ѧԺ��Ϣ�������...");

        printSection("��������");
        long startQuestTime = System.currentTimeMillis();
        MapleLifeFactory.loadQuestCounts();
        MapleQuest.initQuests();
        log.info("������Ϣ������� ��ʱ: " + (System.currentTimeMillis() - startQuestTime) / 1000 + " ��..");

        printSection("���ص���");
        long startItemsTime = System.currentTimeMillis();
        MapleItemInformationProvider.getInstance().runEtc();
        MapleItemInformationProvider.getInstance().runItems();
        log.info("������Ϣ������� ��ʱ: " + (System.currentTimeMillis() - startItemsTime) / 1000 + " ��..");

        printSection("���ر���");
        long startDropTime = System.currentTimeMillis();
        MapleMonsterInformationProvider.getInstance().load();
        MapleMonsterInformationProvider.getInstance().addExtra();

        log.info("������Ϣ������� ��ʱ: " + (System.currentTimeMillis() - startDropTime) / 1000 + " ��..");

        printSection("���ؼ���");
        long startSkillsTime = System.currentTimeMillis();
        SkillFactory.loadAllSkills();
        log.info("����������Ϣ������� ��ʱ: " + (System.currentTimeMillis() - startSkillsTime) / 1000 + " ��..");

        printSection("BasicLoader");
        long startBasicTime = System.currentTimeMillis();
        LoginInformationProvider.getInstance();
        RandomRewards.load();
        MapleOxQuizFactory.getInstance();
        MapleCarnivalFactory.getInstance();
        MobSkillFactory.getInstance();
        SpeedRunner.loadSpeedRuns();
        MTSStorage.load();
        log.info("BasicLoader������� ��ʱ: " + (System.currentTimeMillis() - startBasicTime) / 1000 + " ��..");

        printSection("MIILoader");
        long startMIITime = System.currentTimeMillis();
        MapleInventoryIdentifier.getInstance();
        log.info("MIILoader������� ��ʱ: " + (System.currentTimeMillis() - startMIITime) / 1000 + " ��..");

        printSection("�����̳ǵ���");
        long startCashItemTime = System.currentTimeMillis();
        CashItemFactory.getInstance().initialize();
        log.info("�̳ǵ��߼������ ��ʱ: " + (System.currentTimeMillis() - startCashItemTime) / 1000 + " ��..");

        MapleServerHandler.initiate();
        printSection("��¼������");
        LoginServer.run_startup_configurations();


        //  if (Boolean.parseBoolean(ServerProperties.getProperty("world.ServerControl"))) {
        // System.out.println("�Ƿ��� [ ������̨ ] ��" + (Boolean.parseBoolean(ServerProperties.getProperty("world.ServerControl"))) + " ");
        //   }

        printSection("Ƶ��������");
        ChannelServer.startChannel_Main();

        printSection("�̳Ƿ�����");
        CashShopServer.run_startup_configurations();

        Timer.CheatTimer.getInstance().register(AutobanManager.getInstance(), 60000L);
        Runtime.getRuntime().addShutdownHook(new Thread(new Shutdown()));
        printSection("ˢ���߳�");
        World.registerRespawn();
        if (Boolean.valueOf(ServerProperties.getProperty("world.RandDrop"))) {
            log.info("[�г�������Ʒ����]");
            ChannelServer.getInstance(1).getMapFactory().getMap(910000000).spawnRandDrop();
        }
        ShutdownServer.registerMBean();
        ServerConstants.registerMBean();
        PlayerNPC.loadAll();
        printSection("�������");
        LoginServer.setOn();
        log.info("[�������������ϣ���ʱ " + (System.currentTimeMillis() - startQuestTime) / 1000L + " ��]");
        printSection("ˢ������");
        RankingWorker.start();
        if (Boolean.parseBoolean(ServerProperties.getProperty("world.��������"))) {
            printSection("������Ҿ�������");
            MapleDonation.start();
        }

        log.info("\r\n��ӭ��ʹ��  " + "ð�յ������" + "  ����ǰ����˰汾Ϊ:  Ver. " + ServerConstants.MAPLE_VERSION + " . " + ServerConstants.MAPLE_PATCH + " \r\n");

        if (Boolean.parseBoolean(ServerProperties.getProperty("world.AccCheck", "false"))) {
            printSection("�������");
            startCheck();
        }

    }

    public static void startCheck() {
        Timer.WorldTimer.getInstance().register(new Runnable() {

            public void run() {
                for (ChannelServer cserv_ : ChannelServer.getAllInstances()) {
                    for (MapleCharacter chr : cserv_.getPlayerStorage().getAllCharacters()) {
                        if (chr != null) {
                            chr.startCheck();
                        }
                    }
                }
            }
        }, 30000);
    }

    public static void printSection(String s) {
        s = "-[ " + s + " ]";
        while (s.getBytes().length < 79) {
            s = "=" + s;
        }
        System.out.println(s);
    }

    /* public static void main(String[] args) throws InterruptedException {
         String[] macs = {"00-26-9E-B2-1B-D2", "02-00-4C-4F-4F-50", "00-53-45-00-00-00", "10-BF-48-7B-10-8B", "38-60-77-59-A1-2F", "90-E6-BA-DE-F0-45", "38-60-77-59-A3-3F"};

         String localMac = GetMACAddress.getMACAddress();

         if (localMac != null) {
             for (int i = 0; i < macs.length; i++) {
                 if (macs[i].equals(localMac)) {
                     instance.run();
                     break;
                 }
            }
         } else {
             System.exit(0);
         }
     }*/
    public static void main(final String args[]) throws InterruptedException {
        instance.run();
    }

    public int getRankTime() {
        return this.rankTime;
    }

    public void setRankTime(int rankTime) {
        this.rankTime = rankTime;
    }

    public boolean isIvCheck() {
        return this.ivCheck;
    }

    private static class NotifyingRunnable
            implements Runnable {

        private String LoadingThreadName;
        private long StartTime;
        private Runnable WrappedRunnable;
        private final Object ToNotify;

        private NotifyingRunnable(Runnable r, Object o, String name) {
            this.WrappedRunnable = r;
            this.ToNotify = o;
            this.LoadingThreadName = name;
        }

        public void run() {
            this.StartTime = System.currentTimeMillis();
            this.WrappedRunnable.run();
            System.out.println("[�������] " + this.LoadingThreadName + " | ���غ�ʱ " + (System.currentTimeMillis() - this.StartTime) / 1000 + " ��. (" + Start.CompletedLoadingThreads.get() + "/10)");
            synchronized (this.ToNotify) {
                this.ToNotify.notify();
            }
        }
    }

    private static class LoadingThread extends Thread {

        protected String LoadingThreadName;

        private LoadingThread(Runnable r, String t, Object o) {
            super();
            this.LoadingThreadName = t;
        }

        public synchronized void start() {
            System.out.println("[����...] ���� " + this.LoadingThreadName + " �߳�.");
            super.start();
        }
    }

    public static class Shutdown
            implements Runnable {

        public void run() {
            ShutdownServer.getInstance().run();
            ShutdownServer.getInstance().run();
        }
    }
}
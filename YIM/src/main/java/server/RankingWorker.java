package server;

import database.DatabaseConnection;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.*;
import tools.FileoutputUtil;
import tools.StringUtil;

public class RankingWorker {

    private static final Map<Integer, List<RankingInformation>> rankings = new HashMap();
    private static final Map<String, Integer> jobCommands = new HashMap();
    private static final List<PokemonInformation> pokemon = new ArrayList();
    private static final List<PokedexInformation> pokemon_seen = new ArrayList();
    private static final List<PokebattleInformation> pokemon_ratio = new ArrayList();

    public static Integer getJobCommand(String job) {
        return (Integer) jobCommands.get(job);
    }

    public static Map<String, Integer> getJobCommands() {
        return jobCommands;
    }

    public static List<RankingInformation> getRankingInfo(int job) {
        return (List) rankings.get(Integer.valueOf(job));
    }

    public static List<PokemonInformation> getPokemonInfo() {
        return pokemon;
    }

    public static List<PokedexInformation> getPokemonCaught() {
        return pokemon_seen;
    }

    public static List<PokebattleInformation> getPokemonRatio() {
        return pokemon_ratio;
    }

    public static void start() {
        System.out.println("ϵͳ�Զ����������������������...");
        System.out.println(new StringBuilder().append("���¼��ʱ��Ϊ: ").append(Start.instance.getRankTime()).append(" ����1�Ρ�").toString());
        Timer.WorldTimer.getInstance().register(new Runnable() {

            public void run() {
                RankingWorker.jobCommands.clear();
                RankingWorker.rankings.clear();
                RankingWorker.pokemon.clear();
                RankingWorker.pokemon_seen.clear();
                RankingWorker.pokemon_ratio.clear();
                RankingWorker.updateRank();
            }
        }, 60000 * Start.instance.getRankTime());
    }

    public static void updateRank() {
        System.out.println("��ʼ�����������...");
        long startTime = System.currentTimeMillis();
        loadJobCommands();
        try {
            Connection con = DatabaseConnection.getConnection();
            updateRanking(con);
            updatePokemon(con);
            updatePokemonRatio(con);
            updatePokemonCaught(con);
        } catch (Exception ex) {
            FileoutputUtil.outputFileError("log\\Script_Except.log", ex);
            System.err.println("���������������");
        }
        System.out.println(new StringBuilder().append("�������������� ��ʱ: ").append((System.currentTimeMillis() - startTime) / 1000L).append(" ��..").toString());
    }

    public static void printSection(String s) {
        s = new StringBuilder().append("-[ ").append(s).append(" ]").toString();
        while (s.getBytes().length < 79) {
            s = new StringBuilder().append("=").append(s).toString();
        }
        System.out.println(s);
    }

    private static void updateRanking(Connection con) throws Exception {
        StringBuilder sb = new StringBuilder("SELECT c.id, c.job, c.exp, c.level, c.name, c.jobRank, c.rank, c.fame");
        sb.append(" FROM characters AS c LEFT JOIN accounts AS a ON c.accountid = a.id WHERE c.gm = 0 AND a.banned = 0 AND c.level >= 120");
        sb.append(" ORDER BY c.level DESC , c.exp DESC , c.fame DESC , c.rank ASC");

        PreparedStatement charSelect = con.prepareStatement(sb.toString());
        ResultSet rs = charSelect.executeQuery();
        PreparedStatement ps = con.prepareStatement("UPDATE characters SET jobRank = ?, jobRankMove = ?, rank = ?, rankMove = ? WHERE id = ?");
        int rank = 0;
        Map rankMap = new LinkedHashMap();
        for (Iterator i$ = jobCommands.values().iterator(); i$.hasNext();) {
            int i = ((Integer) i$.next()).intValue();
            rankMap.put(Integer.valueOf(i), Integer.valueOf(0));
            rankings.put(Integer.valueOf(i), new ArrayList());
        }
        while (rs.next()) {
            int job = rs.getInt("job");
            if (!rankMap.containsKey(Integer.valueOf(job / 100))) {
                continue;
            }
            int jobRank = ((Integer) rankMap.get(Integer.valueOf(job / 100))).intValue() + 1;
            rankMap.put(Integer.valueOf(job / 100), Integer.valueOf(jobRank));
            rank++;
            ((List) rankings.get(Integer.valueOf(-1))).add(new RankingInformation(rs.getString("name"), job, rs.getInt("level"), rs.getInt("exp"), rank, rs.getInt("fame")));
            ((List) rankings.get(Integer.valueOf(job / 100))).add(new RankingInformation(rs.getString("name"), job, rs.getInt("level"), rs.getInt("exp"), jobRank, rs.getInt("fame")));
            ps.setInt(1, jobRank);
            ps.setInt(2, rs.getInt("jobRank") - jobRank);
            ps.setInt(3, rank);
            ps.setInt(4, rs.getInt("rank") - rank);
            ps.setInt(5, rs.getInt("id"));
            ps.addBatch();
        }
        ps.executeBatch();
        rs.close();
        charSelect.close();
        ps.close();
    }

    private static void updatePokemon(Connection con) throws Exception {
        StringBuilder sb = new StringBuilder("SELECT count(distinct m.id) AS mc, c.name, c.totalWins, c.totalLosses ");
        sb.append(" FROM characters AS c LEFT JOIN accounts AS a ON c.accountid = a.id");
        sb.append(" RIGHT JOIN monsterbook AS m ON m.charid = a.id WHERE c.gm = 0 AND a.banned = 0");
        sb.append(" ORDER BY c.totalWins DESC, c.totalLosses DESC, mc DESC LIMIT 50");

        PreparedStatement charSelect = con.prepareStatement(sb.toString());
        ResultSet rs = charSelect.executeQuery();
        int rank = 0;
        while (rs.next()) {
            rank++;
            pokemon.add(new PokemonInformation(rs.getString("name"), rs.getInt("totalWins"), rs.getInt("totalLosses"), rs.getInt("mc"), rank));
        }
        rs.close();
        charSelect.close();
    }

    private static void updatePokemonRatio(Connection con) throws Exception {
        StringBuilder sb = new StringBuilder("SELECT (c.totalWins / c.totalLosses) AS mc, c.name, c.totalWins, c.totalLosses ");
        sb.append(" FROM characters AS c LEFT JOIN accounts AS a ON c.accountid = a.id");
        sb.append(" WHERE c.gm = 0 AND a.banned = 0 AND c.totalWins > 10 AND c.totalLosses > 0");
        sb.append(" ORDER BY mc DESC, c.totalWins DESC, c.totalLosses ASC LIMIT 50");

        PreparedStatement charSelect = con.prepareStatement(sb.toString());
        ResultSet rs = charSelect.executeQuery();
        int rank = 0;
        while (rs.next()) {
            rank++;
            pokemon_ratio.add(new PokebattleInformation(rs.getString("name"), rs.getInt("totalWins"), rs.getInt("totalLosses"), rs.getDouble("mc"), rank));
        }
        rs.close();
        charSelect.close();
    }

    private static void updatePokemonCaught(Connection con) throws Exception {
        StringBuilder sb = new StringBuilder("SELECT count(distinct m.id) AS mc, c.name ");
        sb.append(" FROM characters AS c LEFT JOIN accounts AS a ON c.accountid = a.id");
        sb.append(" RIGHT JOIN monsterbook AS m ON m.charid = a.id WHERE c.gm = 0 AND a.banned = 0");
        sb.append(" ORDER BY mc DESC LIMIT 50");

        PreparedStatement charSelect = con.prepareStatement(sb.toString());
        ResultSet rs = charSelect.executeQuery();
        int rank = 0;
        while (rs.next()) {
            rank++;
            pokemon_seen.add(new PokedexInformation(rs.getString("name"), rs.getInt("mc"), rank));
        }
        rs.close();
        charSelect.close();
    }

    public static void loadJobCommands() {
        jobCommands.put("����", Integer.valueOf(-1));
        jobCommands.put("����", Integer.valueOf(0));
        jobCommands.put("սʿ", Integer.valueOf(1));
        jobCommands.put("ħ��ʦ", Integer.valueOf(2));
        jobCommands.put("������", Integer.valueOf(3));
        jobCommands.put("����", Integer.valueOf(4));
        jobCommands.put("����", Integer.valueOf(5));
        jobCommands.put("������", Integer.valueOf(10));
        jobCommands.put("����ʿ", Integer.valueOf(11));
        jobCommands.put("����ʿ", Integer.valueOf(12));
        jobCommands.put("����ʹ��", Integer.valueOf(13));
        jobCommands.put("ҹ����", Integer.valueOf(14));
        jobCommands.put("��Ϯ��", Integer.valueOf(15));
        jobCommands.put("Ӣ��", Integer.valueOf(20));
        jobCommands.put("ս��", Integer.valueOf(21));
        jobCommands.put("����", Integer.valueOf(22));
        jobCommands.put("˫����", Integer.valueOf(23));
        jobCommands.put("��Ӱ��͵", Integer.valueOf(24));
        jobCommands.put("������", Integer.valueOf(30));
        jobCommands.put("��ħ����", Integer.valueOf(31));
        jobCommands.put("���鶷ʦ", Integer.valueOf(32));
        jobCommands.put("������", Integer.valueOf(33));
        jobCommands.put("��еʦ", Integer.valueOf(35));
        jobCommands.put("�׹���", Integer.valueOf(50));
    }

    public static class PokebattleInformation {

        public String toString;

        public PokebattleInformation(String name, int totalWins, int totalLosses, double caught, int rank) {
            StringBuilder builder = new StringBuilder("Rank ");
            builder.append(rank);
            builder.append(" : #e");
            builder.append(name);
            builder.append("#n - #rRatio: ");
            builder.append(caught);
            builder.append("\r\n");
            this.toString = builder.toString();
        }

        @Override
        public String toString() {
            return this.toString;
        }
    }

    public static class PokedexInformation {

        public String toString;

        public PokedexInformation(String name, int caught, int rank) {
            StringBuilder builder = new StringBuilder("���� ");
            builder.append(rank);
            builder.append(" : #e");
            builder.append(name);
            builder.append("#n - #rCaught: ");
            builder.append(caught);
            builder.append("\r\n");
            this.toString = builder.toString();
        }

        public String toString() {
            return this.toString;
        }
    }

    public static class PokemonInformation {

        public String toString;

        public PokemonInformation(String name, int totalWins, int totalLosses, int caught, int rank) {
            StringBuilder builder = new StringBuilder("���� ");
            builder.append(rank);
            builder.append(" : #e");
            builder.append(name);
            builder.append("#n - #rʤ��: ");
            builder.append(totalWins);
            builder.append("#b ʧ��: ");
            builder.append(totalLosses);
            builder.append("#k Caught:");
            builder.append(caught);
            builder.append("\r\n");
            this.toString = builder.toString();
        }

        @Override
        public String toString() {
            return this.toString;
        }
    }

    public static class RankingInformation {

        public String toString;
        public int rank;

        public RankingInformation(String name, int job, int level, int exp, int rank, int fame) {
            this.rank = rank;
            StringBuilder builder = new StringBuilder("���� ");
            builder.append(StringUtil.getRightPaddedStr(String.valueOf(rank), ' ', 3));
            builder.append(" : ");
            builder.append(StringUtil.getRightPaddedStr(name, ' ', 13));
            builder.append(" �ȼ�: ");
            builder.append(StringUtil.getRightPaddedStr(String.valueOf(level), ' ', 3));
            builder.append(" ְҵ: ");
            builder.append(StringUtil.getRightPaddedStr(MapleCarnivalChallenge.getJobNameById(job), ' ', 10));

            builder.append("\r\n");
            this.toString = builder.toString();
        }

        @Override
        public String toString() {
            return this.toString;
        }
    }
}
package server.achievement;

import java.util.LinkedHashMap;
import java.util.Map;

public class MapleAchievements {

    private Map<Integer, MapleAchievement> achievements = new LinkedHashMap();
    private static MapleAchievements instance = new MapleAchievements();

    protected MapleAchievements() {
        this.achievements.put(Integer.valueOf(1), new MapleAchievement("�״�ͨ��������", 100, 0, 0, true));
        this.achievements.put(Integer.valueOf(2), new MapleAchievement("�״εȼ��ﵽ30��", 300, 0, 300000, true));
        this.achievements.put(Integer.valueOf(3), new MapleAchievement("�״εȼ��ﵽ70��", 500, 0, 500000, true));
        this.achievements.put(Integer.valueOf(4), new MapleAchievement("�״εȼ��ﵽ120��", 1000, 0, 1000000, true));
        this.achievements.put(Integer.valueOf(5), new MapleAchievement("�״εȼ��ﵽ200��", 2000, 0, 2000000, true));
        this.achievements.put(Integer.valueOf(7), new MapleAchievement("�״������ﵽ50��", 1000, 0, 0, true));
        this.achievements.put(Integer.valueOf(9), new MapleAchievement("�״δ�������װ��", 300, 0, 0, true));
        this.achievements.put(Integer.valueOf(10), new MapleAchievement("�״δ�������װ��", 500, 0, 0, true));
        this.achievements.put(Integer.valueOf(11), new MapleAchievement("˵ϲ�����ǵ���Ϸ", 200, 0, 0, true));
        this.achievements.put(Integer.valueOf(12), new MapleAchievement("�״λ���BOSSŮ�ϰ�", 500, 0, 0, true));
        this.achievements.put(Integer.valueOf(13), new MapleAchievement("�״λ���������ͼ˹", 500, 0, 0, true));
        this.achievements.put(Integer.valueOf(14), new MapleAchievement("�״λ���Ƥ��ū˹", 500, 0, 0, true));
        this.achievements.put(Integer.valueOf(15), new MapleAchievement("�״λ�������", 1000, 0, 0, true));
        this.achievements.put(Integer.valueOf(16), new MapleAchievement("�״λ��ܰ�������", 2000, 0, 0, true));
        this.achievements.put(Integer.valueOf(17), new MapleAchievement("�״λ���ʱ��ĳ����Ʒ����", 3000, 0, 0, true));
        this.achievements.put(Integer.valueOf(18), new MapleAchievement("�״�ɱ��1��BOSS", 200, 0, 0, true));
        this.achievements.put(Integer.valueOf(19), new MapleAchievement("�״���ɻ���� 'OX Quiz'", 600, 0, 0, true));
        this.achievements.put(Integer.valueOf(20), new MapleAchievement("�״���ɻ���� 'MapleFitness'", 600, 0, 0, true));
        this.achievements.put(Integer.valueOf(21), new MapleAchievement("�״���ɻ���� 'Ola Ola'", 600, 0, 0, true));
        this.achievements.put(Integer.valueOf(22), new MapleAchievement("defeating BossQuest HELL mode", 600, 0, 0, true));
        this.achievements.put(Integer.valueOf(23), new MapleAchievement("�״λ��ܽ�������", 3000, 0, 0, true));
        this.achievements.put(Integer.valueOf(24), new MapleAchievement("�״λ��ܽ��װ�������", 3000, 0, 0, true));
        this.achievements.put(Integer.valueOf(25), new MapleAchievement("�״���ɻ���� 'Survival Challenge'", 600, 0, 0, true));
        this.achievements.put(Integer.valueOf(26), new MapleAchievement("�״ι������� 10000 ��", 200, 0, 0, true));
        this.achievements.put(Integer.valueOf(27), new MapleAchievement("�״ι������� 50000 ��", 300, 0, 0, true));
        this.achievements.put(Integer.valueOf(28), new MapleAchievement("�״ι������� 100000 ��", 400, 0, 0, true));
        this.achievements.put(Integer.valueOf(29), new MapleAchievement("�״ι������� 500000 ��", 500, 0, 0, true));
        this.achievements.put(Integer.valueOf(30), new MapleAchievement("�״ι����ﵽ 999999 ��", 1000, 0, 0, true));
        this.achievements.put(Integer.valueOf(31), new MapleAchievement("�״�ӵ�� 1 000 000 ���", 200, 0, 0, true));
        this.achievements.put(Integer.valueOf(32), new MapleAchievement("�״�ӵ�� 10 000 000 ���", 400, 0, 0, true));
        this.achievements.put(Integer.valueOf(33), new MapleAchievement("�״�ӵ�� 100 000 000 ���", 600, 0, 0, true));
        this.achievements.put(Integer.valueOf(34), new MapleAchievement("�״�ӵ�� 1 000 000 000 ���", 800, 0, 0, true));
        this.achievements.put(Integer.valueOf(35), new MapleAchievement("�״γɹ���������", 800, 0, 0, true));
        this.achievements.put(Integer.valueOf(36), new MapleAchievement("�״γɹ�����ѧԺ", 600, 0, 0, true));
        this.achievements.put(Integer.valueOf(37), new MapleAchievement("�״����1���������", 600, 0, 0, true));
        this.achievements.put(Integer.valueOf(38), new MapleAchievement("�״λ��ܰࡤ�װ�", 2500, 0, 0, true));
        this.achievements.put(Integer.valueOf(39), new MapleAchievement("�״λ���ϣ��˹", 3000, 0, 0, true));
        this.achievements.put(Integer.valueOf(40), new MapleAchievement("�״δ���130��װ��", 800, 0, 0, true));
        this.achievements.put(Integer.valueOf(41), new MapleAchievement("�״δ���140��װ��", 1200, 0, 0, true));
        this.achievements.put(Integer.valueOf(42), new MapleAchievement("�״��Ҿ�ɹ�", 300, 0, 0, true));
        this.achievements.put(Integer.valueOf(43), new MapleAchievement("�״μ���װ��", 300, 0, 0, true));
        this.achievements.put(Integer.valueOf(44), new MapleAchievement("�״μ��ǳɹ�", 300, 0, 0, true));
        this.achievements.put(Integer.valueOf(45), new MapleAchievement("�״�װ���ﵽ10��", 3000, 0, 0, true));
        this.achievements.put(Integer.valueOf(46), new MapleAchievement("�״�����ﵽ60��", 800, 0, 0, true));
        this.achievements.put(Integer.valueOf(47), new MapleAchievement("�״ζ���ﵽ60��", 800, 0, 0, true));
        this.achievements.put(Integer.valueOf(48), new MapleAchievement("�״���־�ﵽ60��", 800, 0, 0, true));
        this.achievements.put(Integer.valueOf(49), new MapleAchievement("�״��ּ��ﵽ60��", 800, 0, 0, true));
        this.achievements.put(Integer.valueOf(50), new MapleAchievement("�״θ��Դﵽ60��", 800, 0, 0, true));
        this.achievements.put(Integer.valueOf(51), new MapleAchievement("�״������ﵽ60��", 800, 0, 0, true));
        this.achievements.put(Integer.valueOf(52), new MapleAchievement("�״μ����� A ��װ��", 300, 0, 300000, true));
        this.achievements.put(Integer.valueOf(53), new MapleAchievement("�״μ����� S ��װ��", 600, 0, 600000, true));
        this.achievements.put(Integer.valueOf(54), new MapleAchievement("�״μ����� SS ��װ��", 1200, 0, 1200000, true));
    }

    public static MapleAchievements getInstance() {
        return instance;
    }

    public MapleAchievement getById(int id) {
        return (MapleAchievement) this.achievements.get(Integer.valueOf(id));
    }

    public Integer getByMapleAchievement(MapleAchievement ma) {
        for (Map.Entry achievement : this.achievements.entrySet()) {
            if (achievement.getValue() == ma) {
                return (Integer) achievement.getKey();
            }
        }
        return null;
    }
}
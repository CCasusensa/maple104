package handling.world.family;

import client.MapleBuffStat;
import client.MapleCharacter;
import client.MapleClient;
import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.ScheduledFuture;

import server.MapleItemInformationProvider;
import server.MapleStatEffect;
import server.MapleStatEffect.CancelEffectAction;
import server.Timer.BuffTimer;
import tools.MaplePacketCreator;
import tools.Pair;

public enum MapleFamilyBuff {

    ˲��("˲��", "[����] ���Լ�\n[Ч��] ��������˲�Ƶ��Լ���ȥ����ѧԺ��Ա���ڵ����.", 0, 0, 0, 300, 190000),
    �ٻ�("�ٻ�", "[����] ѧԺ��Ա1��\n[Ч��] �����ٻ��Լ����ٻ���ѧԺ��Ա���Լ������.", 1, 0, 0, 500, 190001),
    ����15����("�ҵı��� 1.2��(15����)", "[����] ���Լ�\n[����ʱ��] 15����\n[Ч��] ���Թ���ʱ�������ﱬ�� #c1.2��#.\n�� �뱬�ʻ�ص�ʱЧ��������.", 2, 15, 120, 700, 190002),
    ����15����("�ҵľ���ֵ 1.2��(15����)", "[����] ���Լ�\n[����ʱ��] 15����\n[Ч��] ���Թ���ʱ�������ﾭ��ֵ#c1.2��#.\n�� �뾭��ֵ��ص�ʱЧ��������.", 3, 15, 120, 900, 190003),
    ����30����("�ҵı��� 1.2��(30����)", "[����] ���Լ�\n[����ʱ��] 30����\n[Ч��] ���Թ���ʱ�������ﱬ��#c1.2��#.\n�� �뱬�ʻ�ص�ʱЧ��������.", 2, 30, 120, 1500, 190004),
    ����30����("�ҵľ���ֵ 1.2��(30����)", "[����] ���Լ�\n[����ʱ��] 30����\n[Ч��] ���Թ���ʱ�������ﾭ��ֵ #c1.2��#.\n�� �뾭��ֵ��ص�ʱЧ��������.", 3, 30, 120, 2000, 190005),
    �Ž�("�Ž�(30����)", "[��������]ѧԺ��ϵͼ���¶���ѧԺ��Ա��6����������ʱ\n[����ʱ��] 30����\n[Ч��] ��������,����ֵ#c1.5��#. �� �뱬�ʾ���ֵ��ص�ʱ,Ч��������.", 4, 30, 150, 3000, 190006);
    public String name;
    public String desc;
    public int rep;
    public int type;
    public int questID;
    public int duration;
    public int effect;
    public List<Pair<MapleBuffStat, Integer>> effects;

    private MapleFamilyBuff(String name, String desc, int type, int duration, int effect, int rep, int questID) {
        this.name = name;
        this.desc = desc;
        this.rep = rep;
        this.type = type;
        this.questID = questID;
        this.duration = duration;
        this.effect = effect;
        setEffects();
    }

    public int getEffectId() {
        switch (this.type) {
            case 2:
                return 2022694;
            case 3:
                return 2450018;
        }
        return 2022332;
    }

    public void setEffects() {
        this.effects = new ArrayList();
        switch (this.type) {
            case 2:
                this.effects.add(new Pair(MapleBuffStat.DROP_RATE, Integer.valueOf(this.effect)));
                this.effects.add(new Pair(MapleBuffStat.MESO_RATE, Integer.valueOf(this.effect)));
                break;
            case 3:
                this.effects.add(new Pair(MapleBuffStat.EXPRATE, Integer.valueOf(this.effect)));
                break;
            case 4:
                this.effects.add(new Pair(MapleBuffStat.EXPRATE, Integer.valueOf(this.effect)));
                this.effects.add(new Pair(MapleBuffStat.DROP_RATE, Integer.valueOf(this.effect)));
                this.effects.add(new Pair(MapleBuffStat.MESO_RATE, Integer.valueOf(this.effect)));
        }
    }

    public void applyTo(MapleCharacter chr) {
        chr.getClient().getSession().write(MaplePacketCreator.giveBuff(-getEffectId(), this.duration * 60000, this.effects, null));
        MapleStatEffect eff = MapleItemInformationProvider.getInstance().getItemEffect(getEffectId());
        chr.cancelEffect(eff, true, -1L, this.effects);
        long starttime = System.currentTimeMillis();
        MapleStatEffect.CancelEffectAction cancelAction = new MapleStatEffect.CancelEffectAction(chr, eff, starttime, this.effects);
        ScheduledFuture schedule = BuffTimer.getInstance().schedule(cancelAction, this.duration * 60000);
        chr.registerEffect(eff, starttime, schedule, this.effects, false, this.duration, chr.getId());
    }
}
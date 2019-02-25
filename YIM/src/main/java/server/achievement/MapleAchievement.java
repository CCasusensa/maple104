package server.achievement;

import client.MapleCharacter;
import handling.world.World.Broadcast;
import tools.MaplePacketCreator;

public class MapleAchievement {

    private String name;
    private int cashReward = 0;
    private int expReward = 0;
    private int mesoReward = 0;
    private int itemReward = 0;
    private boolean notice;

    public MapleAchievement(String name, int cash, int exp, int meso) {
        this.name = name;
        this.cashReward = cash;
        this.expReward = exp;
        this.mesoReward = meso;
        this.notice = true;
    }

    public MapleAchievement(String name, int cash, int exp, int meso, boolean notice) {
        this.name = name;
        this.cashReward = cash;
        this.expReward = exp;
        this.mesoReward = meso;
        this.notice = notice;
    }

    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getCashReward() {
        return this.cashReward;
    }

    public void setCashReward(int cash) {
        this.cashReward = cash;
    }

    public int getExpReward() {
        return this.expReward;
    }

    public void setExpReward(int exp) {
        this.expReward = exp;
    }

    public int getMesoReward() {
        return this.mesoReward;
    }

    public void setMesoReward(int meso) {
        this.mesoReward = meso;
    }

    public int getItemReward() {
        return this.itemReward;
    }

    public void setItemReward(int itemId) {
        this.itemReward = itemId;
    }

    public boolean getNotice() {
        return this.notice;
    }

    public void finishAchievement(MapleCharacter chr) {
        String message = " ��� ";
        if (getCashReward() > 0) {
            message = message + this.cashReward + " ����þ� ";
            chr.modifyCSPoints(2, this.cashReward, true);
        }
        if (getExpReward() > 0) {
            message = message + this.expReward + " �㾭�� ";
            chr.gainExp(this.expReward, true, true, true);
        }
        if (getMesoReward() > 0) {
            message = message + this.mesoReward + " ���.";
            chr.gainMeso(this.mesoReward, true, true);
        }
        chr.setAchievementFinished(MapleAchievements.getInstance().getByMapleAchievement(this).intValue());
        if ((this.notice) && (!chr.isIntern())) {
            Broadcast.broadcastMessage(MaplePacketCreator.serverNotice(6, "[�ɾ�ϵͳ] ף�� " + chr.getLevel() + "�� ���: " + chr.getName() + " " + this.name + message));
        } else {
            chr.getClient().getSession().write(MaplePacketCreator.serverNotice(5, "[�ɾ�ϵͳ] ����Ϊ " + this.name + message));
        }
    }
}
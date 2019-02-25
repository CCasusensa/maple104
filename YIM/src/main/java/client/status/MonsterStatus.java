package client.status;

import client.MapleDisease;
import constants.GameConstants;
import handling.Buffstat;
import java.io.Serializable;

public enum MonsterStatus implements Serializable, Buffstat {

    �﹥(0x1, 1),
    ���(0x2, 1),
    ħ��(0x4, 1),
    ħ��(0x8, 1),
    ����(0x10, 1),
    �ر�(0x20, 1),
    �ٶ�(0x40, 1),
    ѣ��(0x80, 1),
    ���(0x100, 1),
    �ж�(0x200, 1),
    ��ӡ(0x400, 1),
    ����(0x800, 1),
    �﹥����(0x1000, 1),
    �������(0x2000, 1),
    ħ������(0x4000, 1),
    ħ������(0x8000, 1),
    �׶�(0x10000, 1),
    Ӱ��(0x20000, 1),
    �����﹥(0x40000, 1),
    ����ħ��(0x40000, 1),
    �����˺�(0x80000, 1),
    ���߷���(0x200000, 1),
    ��������(0x400000, 1),
    �ֻ�(0x1000000, 1),
    �������(0x2000000, 1),
    �����﹥(0x20000000, 1),
    ����ħ��(0x40000000, 1),
    ��ѹ(0x2, 2),
    ��̷�(0x4, 2),
    ����ը��(0x8, 2),
    ħ����Ч(0x10, 2),
    �հ�BUFF(0x8000000, 1, true),
    �ٻ�����(0x80000000, 1, true),
    EMPTY_1(0x20, 2, !GameConstants.GMS),
    EMPTY_2(0x40, 2, true),
    EMPTY_3(0x80, 2, true),
    EMPTY_4(0x100, 2, GameConstants.GMS),
    EMPTY_5(0x200, 2, GameConstants.GMS),
    EMPTY_6(0x04000, 2, GameConstants.GMS);
    static final long serialVersionUID = 0L;
    private final int i;
    private final int first;
    private final boolean end;

    private MonsterStatus(int i, int first) {
        this.i = i;
        this.first = first;
        this.end = false;
    }

    private MonsterStatus(int i, int first, boolean end) {
        this.i = i;
        this.first = first;
        this.end = end;
    }

    public int getPosition() {
        return this.first;
    }

    public boolean isEmpty() {
        return this.end;
    }

    public int getValue() {
        return this.i;
    }

    public static MonsterStatus getBySkill_Pokemon(int skill) {
        switch (skill) {
            case 120:
                return ��ӡ;
            case 121:
                return �ֻ�;
            case 123:
                return ѣ��;
            case 125:
                return �ж�;
            case 126:
                return �ٶ�;
            case 137:
                return ���;
            case 122:
            case 124:
            case 127:
            case 128:
            case 129:
            case 130:
            case 131:
            case 132:
            case 133:
            case 134:
            case 135:
            case 136:
        }
        return null;
    }

    public static MapleDisease getLinkedDisease(MonsterStatus skill) {
        switch (skill) {
            case ѣ��:
            case Ӱ��:
                return MapleDisease.STUN;
            case �ж�:
            case �������:
                return MapleDisease.POISON;
            case ��ӡ:
            case ħ����Ч:
                return MapleDisease.SEAL;
            case ���:
                return MapleDisease.FREEZE;
            case �����﹥:
                return MapleDisease.DARKNESS;
            case �ٶ�:
                return MapleDisease.SLOW;
        }
        return null;
    }
}
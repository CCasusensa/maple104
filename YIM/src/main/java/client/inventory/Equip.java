package client.inventory;

import constants.GameConstants;
import java.io.Serializable;
import server.MapleItemInformationProvider;
import server.Randomizer;

public class Equip extends Item implements Serializable {

    public static final int ARMOR_RATIO = 350000;
    public static final int WEAPON_RATIO = 700000;
    private byte upgradeSlots = 0;//����������
    private byte level = 0;//����������
    private byte vicioushammer = 0;//���Ӵ���
    private byte state = 0;//�����ȼ�
    private byte enhance = 0;//װ���Ǽ�
    private short str = 0;//����
    private short dex = 0;//����
    private short _int = 0;//����
    private short luk = 0;//����
    private short hp = 0;//HP
    private short mp = 0;//MP
    private short watk = 0;//������
    private short matk = 0;//ħ������
    private short wdef = 0;//�������
    private short mdef = 0;//ħ������
    private short acc = 0;//������
    private short avoid = 0;//�ر�
    private short hands = 0;//�ֻ�
    private short speed = 0;//�ƶ��ٶ�
    private short jump = 0;//��Ծ��
    private short charmExp = 0;
    private short pvpDamage = 0;
    private int itemEXP = 0;
    private int durability = -1;
    private int incSkill = -1;
    private int statemsg = 0;
    private int potential1 = 0;//Ǳ��1
    private int potential2 = 0;//Ǳ��2
    private int potential3 = 0;//Ǳ��3
    private int potential4 = 0;//Ǳ��4
    private int potential5 = 0;//Ǳ��5
    private int socket1 = -1;
    private int socket2 = -1;
    private int socket3 = -1;
    private int itemSkin = 0;
    private MapleRing ring = null;
    private MapleAndroid android = null;
    
 //   private MapleCharacter chr;

    public Equip(int id, short position, byte flag) {
        super(id, position, (short) 1, (short) flag);
    }

    public Equip(int id, short position, int uniqueid, short flag) {
        super(id, position, (short) 1, flag, uniqueid);
    }

    @Override
    public Item copy() {
        Equip ret = new Equip(getItemId(), getPosition(), getUniqueId(), getFlag());
        ret.str = this.str;
        ret.dex = this.dex;
        ret._int = this._int;
        ret.luk = this.luk;
        ret.hp = this.hp;
        ret.mp = this.mp;
        ret.matk = this.matk;
        ret.mdef = this.mdef;
        ret.watk = this.watk;
        ret.wdef = this.wdef;
        ret.acc = this.acc;
        ret.avoid = this.avoid;
        ret.hands = this.hands;
        ret.speed = this.speed;
        ret.jump = this.jump;
        ret.upgradeSlots = this.upgradeSlots;
        ret.level = this.level;
        ret.itemEXP = this.itemEXP;
        ret.durability = this.durability;
        ret.vicioushammer = this.vicioushammer;
        ret.state = this.state;
        ret.enhance = this.enhance;
        ret.potential1 = this.potential1;
        ret.potential2 = this.potential2;
        ret.potential3 = this.potential3;
        ret.potential4 = this.potential4;
        ret.potential5 = this.potential5;
        ret.charmExp = this.charmExp;
        ret.pvpDamage = this.pvpDamage;
        ret.incSkill = this.incSkill;
        ret.statemsg = this.statemsg;
        ret.socket1 = this.socket1;
        ret.socket2 = this.socket2;
        ret.socket3 = this.socket3;
        ret.setGMLog(getGMLog());
        ret.setGiftFrom(getGiftFrom());
        ret.setOwner(getOwner());
        ret.setQuantity(getQuantity());
        ret.setExpiration(getExpiration());
        ret.setInventoryId(getInventoryId());
        return ret;
    }

    @Override
    public byte getType() {
        return 1;
    }

    public byte getUpgradeSlots() {
        return this.upgradeSlots;
    }

    public short getStr() {
        return this.str;
    }

    public short getDex() {
        return this.dex;
    }

    public short getInt() {
        return this._int;
    }

    public short getLuk() {
        return this.luk;
    }

    public short getHp() {
        return this.hp;
    }

    public short getMp() {
        return this.mp;
    }

    public short getWatk() {
        return this.watk;
    }

    public short getMatk() {
        return this.matk;
    }

    public short getWdef() {
        return this.wdef;
    }

    public short getMdef() {
        return this.mdef;
    }

    public short getAcc() {
        return this.acc;
    }

    public short getAvoid() {
        return this.avoid;
    }

    public short getHands() {
        return this.hands;
    }

    public short getSpeed() {
        return this.speed;
    }

    public short getJump() {
        return this.jump;
    }

    public void setStr(short str) {
        if (str < 0) {
            str = 0;
        }
        this.str = str;
    }

    public void setDex(short dex) {
        if (dex < 0) {
            dex = 0;
        }
        this.dex = dex;
    }

    public void setInt(short _int) {
        if (_int < 0) {
            _int = 0;
        }
        this._int = _int;
    }

    public void setLuk(short luk) {
        if (luk < 0) {
            luk = 0;
        }
        this.luk = luk;
    }

    public void setHp(short hp) {
        if (hp < 0) {
            hp = 0;
        }
        this.hp = hp;
    }

    public void setMp(short mp) {
        if (mp < 0) {
            mp = 0;
        }
        this.mp = mp;
    }

    public void setWatk(short watk) {
        if (watk < 0) {
            watk = 0;
        }
        this.watk = watk;
    }

    public void setMatk(short matk) {
        if (matk < 0) {
            matk = 0;
        }
        this.matk = matk;
    }

    public void setWdef(short wdef) {
        if (wdef < 0) {
            wdef = 0;
        }
        this.wdef = wdef;
    }

    public void setMdef(short mdef) {
        if (mdef < 0) {
            mdef = 0;
        }
        this.mdef = mdef;
    }

    public void setAcc(short acc) {
        if (acc < 0) {
            acc = 0;
        }
        this.acc = acc;
    }

    public void setAvoid(short avoid) {
        if (avoid < 0) {
            avoid = 0;
        }
        this.avoid = avoid;
    }

    public void setHands(short hands) {
        if (hands < 0) {
            hands = 0;
        }
        this.hands = hands;
    }

    public void setSpeed(short speed) {
        if (speed < 0) {
            speed = 0;
        }
        this.speed = speed;
    }

    public void setJump(short jump) {
        if (jump < 0) {
            jump = 0;
        }
        this.jump = jump;
    }

    public void setUpgradeSlots(byte upgradeSlots) {
        this.upgradeSlots = upgradeSlots;
    }

    public byte getLevel() {
        return this.level;
    }

    public void setLevel(byte level) {
        this.level = level;
    }

    public byte getViciousHammer() {
        return this.vicioushammer;
    }

    public void setViciousHammer(byte ham) {
        this.vicioushammer = ham;
    }

    public int getItemEXP() {
        return this.itemEXP;
    }

    public void setItemEXP(int itemEXP) {
        if (itemEXP < 0) {
            itemEXP = 0;
        }
        this.itemEXP = itemEXP;
    }

    public int getEquipExp() {
        if (this.itemEXP <= 0) {
            return 0;
        }

        if (GameConstants.isWeapon(getItemId())) {
            return this.itemEXP / WEAPON_RATIO;
        }
        return this.itemEXP / ARMOR_RATIO;
    }

    public int getEquipExpForLevel() {
        if (getEquipExp() <= 0) {
            return 0;
        }
        int expz = getEquipExp();
        for (int i = getBaseLevel(); (i <= GameConstants.getMaxLevel(getItemId()))
                && (expz >= GameConstants.getExpForLevel(i, getItemId())); i++) {
            expz -= GameConstants.getExpForLevel(i, getItemId());
        }

        return expz;
    }

    public int getExpPercentage() {
        if ((getEquipLevel() < getBaseLevel()) || (getEquipLevel() > GameConstants.getMaxLevel(getItemId())) || (GameConstants.getExpForLevel(getEquipLevel(), getItemId()) <= 0)) {
            return 0;
        }
        return getEquipExpForLevel() * 100 / GameConstants.getExpForLevel(getEquipLevel(), getItemId());
    }

    public int getEquipLevel() {
        if (GameConstants.getMaxLevel(getItemId()) <= 0) {
            return 0;
        }
        if (getEquipExp() <= 0) {
            return getBaseLevel();
        }
        int levelz = getBaseLevel();
        int expz = getEquipExp();
        for (int i = levelz; (GameConstants.getStatFromWeapon(getItemId()) == null ? i <= GameConstants.getMaxLevel(getItemId()) : i < GameConstants.getMaxLevel(getItemId()))
                && (expz >= GameConstants.getExpForLevel(i, getItemId())); i++) {
            levelz++;
            expz -= GameConstants.getExpForLevel(i, getItemId());
        }

        return levelz;
    }

    public int getBaseLevel() {
        return GameConstants.getStatFromWeapon(getItemId()) == null ? 1 : 0;
    }

    public void setQuantity(short quantity) {
        if ((quantity < 0) || (quantity > 1)) {
            throw new RuntimeException("Setting the quantity to " + quantity + " on an equip (itemid: " + getItemId() + ")");
        }
        super.setQuantity(quantity);
    }

    public int getDurability() {
        return this.durability;
    }

    public void setDurability(int dur) {
        this.durability = dur;
    }

    public byte getEnhance() {
        return this.enhance;
    }

    public void setEnhance(byte en) {
        this.enhance = en;
    }

    public int getPotential1() {
        return this.potential1;
    }

    public void setPotential1(int en) {
        this.potential1 = en;
    }

    public int getPotential2() {
        return this.potential2;
    }

    public void setPotential2(int en) {
        this.potential2 = en;
    }

    public int getPotential3() {
        return this.potential3;
    }

    public void setPotential3(int en) {
        this.potential3 = en;
    }

    public int getPotential4() {
        return this.potential4;
    }

    public void setPotential4(int en) {
        this.potential4 = en;
    }

    public int getPotential5() {
        return this.potential5;
    }

    public void setPotential5(int en) {
        this.potential5 = en;
    }
//Ǳ��
    public byte getState() {
        int pots = this.potential1 + this.potential2 + this.potential3 + this.potential4 + this.potential5;
        if (this.potential1 >= 40000 || this.potential2 >= 40000 || this.potential3 >= 40000 || this.potential4 >= 40000 || this.potential5 >= 40000) {
            return 20;//ss��
        } else if (this.potential1 >= 30000 || this.potential2 >= 30000 || this.potential3 >= 30000 || this.potential4 >= 30000 || this.potential5 >= 30000) {
            return 19;//s��
        } else if (this.potential1 >= 20000 || this.potential2 >= 20000 || this.potential3 >= 20000 || this.potential4 >= 20000 || this.potential5 >= 20000) {
            return 18;//A��
        } else if (pots >= 1) {
            return 17;//B��
        } else if (pots < 0) {
            return 1;
        }
        return 0;
    }

    public void setState(byte en) {
        this.state = en;
    }

    public void resetPotential_Fuse(boolean half, int potentialState) {
        potentialState = -potentialState;
        if (Randomizer.nextInt(100) < 4) {
            potentialState -= (Randomizer.nextInt(100) < 4 ? 2 : 1);
        }
        setPotential1(potentialState);
        setPotential2(Randomizer.nextInt(half ? 5 : 10) == 0 ? potentialState : 0);
        setPotential3(0);
        setPotential4(0);
        setPotential5(0);
    }

    public void resetPotential() {
        int rank = Randomizer.nextInt(100) < 4 ? -18 : Randomizer.nextInt(100) < 4 ? -19 : -17;
        setPotential1(rank);
        setPotential2(Randomizer.nextInt(10) == 0 ? rank : 0);
        setPotential3(0);
        setPotential4(0);
        setPotential5(0);
    }
    
    public void resetPotentialA() {
        //int rank = Randomizer.nextInt(100) < 4 ? -18 : Randomizer.nextInt(100) < 4 ? -19 : -17;
        setPotential1(-18);
        setPotential2(-18);
        setPotential3(0);
        setPotential4(0);
        setPotential5(0);
    }
    
    public void resetPotentialS() {
      //  int rank = Randomizer.nextInt(100) < 4 ? -18 : Randomizer.nextInt(100) < 4 ? -19 : -17;
        setPotential1(-19);
        setPotential2(-19);
        setPotential3(0);
        setPotential4(0);
        setPotential5(0);
    }
    
    public void resetPotentialSS() {
        //int rank = Randomizer.nextInt(100) < 4 ? -18 : Randomizer.nextInt(100) < 4 ? -19 : -17;
        setPotential1(-20);
        setPotential2(-20);
        setPotential3(0);
        setPotential4(0);
        setPotential5(0);
    }

    public void renewPotential(int type) {
        renewPotential(type, 4);
    }
    
    
    public void renewPotential(int type, int rate) {
        if (Randomizer.nextInt(100) < rate);
        int rank = getState() != (type == 3 ? 20 : 19) ? -(getState() + 1) : type == 2 ? -18 : -getState();
        setPotential1(rank);
        if (getPotential3() > 0) {
            setPotential2(rank);
        } else {
            switch (type) {
                case 1:
                    setPotential2(Randomizer.nextInt(10) == 0 ? rank : 0);
                    break;
                case 2:
                    setPotential2(Randomizer.nextInt(10) <= 1 ? rank : 0);
                    break;
                case 3:
                    setPotential2(Randomizer.nextInt(10) <= 2 ? rank : 0);
                    break;
                default:
                    setPotential2(0);
            }
        }

        if (getPotential4() > 0) {
            setPotential3(rank);
        } else if (type == 3) {
            setPotential3(Randomizer.nextInt(100) <= 2 ? rank : 0);
        } else {
            setPotential3(0);
        }
        if (getPotential5() > 0) {
            setPotential4(rank);
        } else if (type == 3) {
            setPotential4(Randomizer.nextInt(100) <= 1 ? rank : 0);
        } else {
            setPotential4(0);
        }
        setPotential5(0);
    }
    
//Ǳ�ܸ�������  ȷ���������Ǳ��
    
    
    //type == 3 ���Լ�����SS ȫ����20
    /*
     * typr == 0 --����ħ��
     * type == 1 --��������ħ��
     * type == 2 --δ֪
     * type == 3 --�߼�����ħ�� ������SS
     * 
     * Ǳ�ܾ���Ч����
     * ��ͨ���Ӿ������ó�ʼ�����ȼ�Ϊ -17 == B��Ǳ��
     * A�����Ӿ��� ���ü����ȼ�Ϊ -18 == A��Ǳ��
     * S�����Ӿ��� ���ü����ȼ�Ϊ -19 == S��Ǳ��
     * SS�����Ӿ������ü����ȼ�Ϊ -20 == SS��Ǳ��
     */
    
    public void renewPotentials(int type, int rate, int B������, int A������, int S������, int SS������, int Ǳ�ܵȼ�����2, int Ǳ�ܵȼ�����3, int Ǳ�ܵȼ�����4, int Ǳ�ܵȼ�����5) {
        
        int B�� = -17;
        int A�� = -18;
        int S�� = -19;
        int SS�� = -20;
        
        int po3 = (int) rate;
        int po4 = (int) rate/100;
        int po5 = (int) rate/1000;
        
       // if (Randomizer.nextInt(100) < rate);
        //SS==20 S == 19 A == 18 B==17
        if (type == 3) {
            B������ += 100;
            A������ += 100;
            S������ += 80;
            SS������ += 10;
        } else if (type == 2) {
            B������ += 100;
            A������ += 50;
            S������ += 30;
            SS������ = 0;
        } else if (type == 1) {
            B������ += 100;
            A������ += 50;
            S������ += 30;
            SS������ = 0;
        } else {
            B������ += 100;
            A������ += 30;
            S������ += 10;
            SS������ = 0;
        }
        
        int ranks;
        
        if ((Randomizer.nextInt(100) <= SS������) && ((type == 3) || (type == 2))) {
            ranks = SS��;
            
        } else if (Randomizer.nextInt(100) <= S������) {
            ranks = S��;
        } else if (Randomizer.nextInt(100) <= A������) {
            ranks = A��;
        } else if (Randomizer.nextInt(100) <= B������) {
            ranks = B��;
        } else {
            ranks = B��;
        }
        
        int rank1 = ranks;
        int rank2 = B��;
        int rank3 = B��;
        int rank4 = B��;
        int rank5 = B��;
        //rank ΪǱ�ܵȼ���
        //int rank = getState() != (type == 3 ? 20 : 19) ? -(getState() + 1) : type == 2 ? -18 : -getState();
        
        if ((rank1 > -17) || (rank1 < -20)) {
                rank1 = B��;
        }
        
        //Ǳ��2
            if (((Randomizer.nextInt(100) <= ((int) Ǳ�ܵȼ�����2/10))) && ((type == 3) || (type == 2))) {
                rank2 = SS��;
            } else if (Randomizer.nextInt(100) <= ((int) Ǳ�ܵȼ�����2/5)) {
                rank2 = S��;
            } else if (Randomizer.nextInt(100) <= ((int) Ǳ�ܵȼ�����2/2)) {
                rank2 = A��;
            } else if (Randomizer.nextInt(100) <= ((int) Ǳ�ܵȼ�����2)) {
                rank2 = B��;
            } else {
                rank2 += 1;
            }
            if ((rank2 > -17) || (rank2 < -20)) {
                rank2 = B��;
            }
        
        //Ǳ��3
            if ((Randomizer.nextInt(100) <= ((int) Ǳ�ܵȼ�����3/20)) && ((type == 3) || (type == 2))) {
                rank3 = SS��;
            } else if (Randomizer.nextInt(100) <= ((int) Ǳ�ܵȼ�����3/10)) {
                rank3 = S��;
            } else if (Randomizer.nextInt(100) <= ((int) Ǳ�ܵȼ�����3/5)) {
                rank3 = A��;
            } else if (Randomizer.nextInt(100) <= ((int) Ǳ�ܵȼ�����3)) {
                rank3 = B��;
            } else {
                rank3 += 1;
            }
            if ((rank3 > -17) || (rank3 < -20)) {
                rank3 = B��;
            }
            //Ǳ��4
            
            if ((Randomizer.nextInt(100) <= ((int) Ǳ�ܵȼ�����4/30)) && ((type == 3) || (type == 2))) {
                rank4 = SS��;
            } else if (Randomizer.nextInt(100) <= ((int) Ǳ�ܵȼ�����4/20)) {
                rank4 = S��;
            } else if (Randomizer.nextInt(100) <= ((int) Ǳ�ܵȼ�����4/10)) {
                rank4 = A��;
            } else if (Randomizer.nextInt(100) <= ((int) Ǳ�ܵȼ�����4)) {
                rank4 = B��;
            } else {
                rank4 += 1;
            }
            if ((rank4 > -17) || (rank4 < -20)) {
                rank4 = B��;
            }
            //Ǳ��5
            if (((Randomizer.nextInt(100) <= Ǳ�ܵȼ�����5/50)) && ((type == 3) || (type == 2))) {
                rank5 = SS��;
            } else if (Randomizer.nextInt(100) <= ((int) Ǳ�ܵȼ�����5/40)) {
                rank5 = S��;
            } else if (Randomizer.nextInt(100) <= ((int) Ǳ�ܵȼ�����5/30)) {
                rank5 = A��;
            } else if (Randomizer.nextInt(100) <= ((int) Ǳ�ܵȼ�����5)) {
                rank5 = B��;
            } else {
                rank5 += 1;
            }
            if ((rank5 > -17) || (rank5 < -20)) {
                rank5 = B��;
            }
            

        
        
        //���õ�һǱ�ܵȼ�
        setPotential1(rank1);

        if (getPotential3() > 0) {
            setPotential2(rank2);
            
        } else if ((type == 1) || (type == 3)) {
            //��������2������
            setPotential2(rank2);
        } else {
            setPotential2(0);
        }
        

        if (getPotential4() > 0) {
            setPotential3(rank3);
            
        } else if ((type == 1) || (type == 3)) {
            
            //����������������
            setPotential3(Randomizer.nextInt(100) <= po3 ? rank3 : 0);
            
        } else {
            setPotential3(0);
        }
        
        if (getPotential5() > 0) {
            setPotential4(rank4);
            
        } else if (type == 3) {
            
            //���������������Եĸ���
            setPotential4(Randomizer.nextInt(100) <= po4 ? rank4 : 0);
        } else {
            setPotential4(0);
        }
        
        if (getPotential5() > 0) {
            setPotential5(rank5);
            
        } else if (type == 3) {
            //��������5�����Եĸ���
            setPotential4(Randomizer.nextInt(100) <= po5 ? rank5 : 0);
        } else {
        setPotential5(0);
         }
        
    }

    public int getIncSkill() {
        return this.incSkill;
    }

    public void setIncSkill(int inc) {
        this.incSkill = inc;
    }

    public short getCharmEXP() {
        return this.charmExp;
    }

    public void setCharmEXP(short s) {
        this.charmExp = s;
    }

    public short getPVPDamage() {
        return this.pvpDamage;
    }

    public void setPVPDamage(short p) {
        this.pvpDamage = p;
    }

    public MapleRing getRing() {
        if ((!GameConstants.isEffectRing(getItemId())) || (getUniqueId() <= 0)) {
            return null;
        }
        if (this.ring == null) {
            this.ring = MapleRing.loadFromDb(getUniqueId(), getPosition() < 0);
        }
        return this.ring;
    }

    public void setRing(MapleRing ring) {
        this.ring = ring;
    }

    public MapleAndroid getAndroid() {
        if ((getItemId() / 10000 != 166) || (getUniqueId() <= 0)) {
            return null;
        }
        if (this.android == null) {
            this.android = MapleAndroid.loadFromDb(getItemId(), getUniqueId());
        }
        return this.android;
    }

    public void setAndroid(MapleAndroid ring) {
        this.android = ring;
    }

    public int getStateMsg() {
        return this.statemsg;
    }

    public void setStateMsg(int en) {
        if (en >= 3) {
            this.statemsg = 3;
        } else if (en < 0) {
            this.statemsg = 0;
        } else {
            this.statemsg = en;
        }
    }

    public short getSocketState() {
        short flag = 0;
        MapleItemInformationProvider ii = MapleItemInformationProvider.getInstance();
        boolean isSocketItem = ii.isActivatedSocketItem(getItemId());
        if (isSocketItem) {
            flag = (short) (flag | SocketFlag.������Ƕ.getValue());
            if ((this.socket1 == -1) && (isSocketItem)) {
                setSocket1(0);
            }
            if (this.socket1 != -1) {
                flag = (short) (flag | SocketFlag.�Ѵ��01.getValue());
            }
            if (this.socket2 != -1) {
                flag = (short) (flag | SocketFlag.�Ѵ��02.getValue());
            }
            if (this.socket3 != -1) {
                flag = (short) (flag | SocketFlag.�Ѵ��03.getValue());
            }
            if (this.socket1 > 0) {
                flag = (short) (flag | SocketFlag.����Ƕ01.getValue());
            }
            if (this.socket2 > 0) {
                flag = (short) (flag | SocketFlag.����Ƕ02.getValue());
            }
            if (this.socket3 > 0) {
                flag = (short) (flag | SocketFlag.����Ƕ03.getValue());
            }
        }
        return flag;
    }

    public int getSocket1() {
        return socket1;
    }

    public void setSocket1(int socket) {
        socket1 = socket;
    }

    public int getSocket2() {
        return socket2;
    }

    public void setSocket2(int socket) {
        socket2 = socket;
    }

    public int getSocket3() {
        return socket3;
    }

    public void setSocket3(int socket) {
        socket3 = socket;
    }

    public static enum ScrollResult {
        �ɹ�, ʧ��, ��ʧ;
    }
}
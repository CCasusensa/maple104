@echo off
@title Dump
set CLASSPATH=.;dist\*
ECHO.
ECHO --------------------------------------------------------------
ECHO                 1 - ���ع��＼��
ECHO                 2 - ���¹��＼��
ECHO                 3 - �˳�
ECHO --------------------------------------------------------------
ECHO.
SET /P Ares=��ѡ��:
IF %Ares%==1 GOTO ALL
IF %Ares%==2 GOTO UPDATA
IF %Ares%==3 GOTO QUIT

:ALL
ECHO ��ʼ���ع��＼��
java -Dwzpath=wz\ tools.wztosql.DumpMobSkills
pause
exit

:UPDATA
ECHO ��ʼ���¹��＼��
java -Dwzpath=wz\ tools.wztosql.DumpMobSkills -update
pause
exit

:QUIT
exit
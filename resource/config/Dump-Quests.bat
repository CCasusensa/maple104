@echo off
@title Dump
set CLASSPATH=.;dist\*
ECHO.
ECHO --------------------------------------------------------------
ECHO                 1 - ����������Ϣ
ECHO                 2 - ����������Ϣ
ECHO                 3 - �˳�
ECHO --------------------------------------------------------------
ECHO.
SET /P Ares=��ѡ��:
IF %Ares%==1 GOTO ALL
IF %Ares%==2 GOTO UPDATA
IF %Ares%==3 GOTO QUIT

:ALL
ECHO ��ʼ����������Ϣ
java -Xms256m -Xmx512m -Dwzpath=wz\ tools.wztosql.DumpQuests
pause
exit

:UPDATA
ECHO ��ʼ����������Ϣ
java -Xms256m -Xmx512m -Dwzpath=wz\ tools.wztosql.DumpQuests -update
pause
exit

:QUIT
exit
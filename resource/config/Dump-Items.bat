@echo off
@title Dump
set CLASSPATH=.;dist\*
ECHO.
ECHO --------------------------------------------------------------
ECHO                 1 - ���ص�����Ϣ
ECHO                 2 - ���µ�����Ϣ
ECHO                 3 - �˳�
ECHO --------------------------------------------------------------
ECHO.
SET /P Ares=��ѡ��:
IF %Ares%==1 GOTO ALL
IF %Ares%==2 GOTO UPDATA
IF %Ares%==3 GOTO QUIT

:ALL
ECHO ��ʼ���ص�����Ϣ
java -Xms256m -Xmx512m -Dwzpath=wz\ tools.wztosql.DumpItems
pause
exit

:UPDATA
ECHO ��ʼ���µ�����Ϣ
java -Xms256m -Xmx512m -Dwzpath=wz\ tools.wztosql.DumpItems -update
pause
exit

:QUIT
exit
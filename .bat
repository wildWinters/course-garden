@echo off
REM Шукаємо всі className у папках src, app, modules, shared, ui
findstr /S /I /C:"className=\"" src\*.tsx src\*.jsx src\*.js src\*.ts app\*.tsx app\*.jsx app\*.js app\*.ts modules\*.tsx modules\*.jsx modules\*.js modules\*.ts shared\*.tsx shared\*.jsx shared\*.js shared\*.ts ui\*.tsx ui\*.jsx ui\*.js ui\*.ts > tailwind-classes.txt

echo --------------------------------------------------
echo Кількість рядків із className:
find /C /V "" tailwind-classes.txt
echo --------------------------------------------------

echo Усі результати збережені у файлі tailwind-classes.txt
pause

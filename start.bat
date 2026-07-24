@echo off
echo ===========================================
echo   OGDCL 3D Promotional Video Frame
echo ===========================================
echo.
echo Installing dependencies... (this may take a minute)
call npm install
echo.
echo Starting development server...
echo Your browser will open automatically or go to http://localhost:5173
echo.
call npm run dev

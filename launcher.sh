#!/bin/bash

#screen -dm bash -c 'cd /home/pi/jsclock && git pull'

export DISPLAY=:0

#firefox  --private-window --kiosk file:///home/pi/jsclock/index.html &

chromium-browser file:///home/pi/jsclock/index.html  --kiosk --noerrdialogs --disable-infobars --no-first-run --enable-features=OverlayScrollbar --start-maximized &

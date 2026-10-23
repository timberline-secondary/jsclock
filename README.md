# HackerClock

The clock shown on the projector in the Hackerspace: the time, the current block, and the
time left until the next one. It's a web page (`index.html`) shown full-screen in Chromium on
**pi-projector**, from `/home/pi/jsclock`.

## Setup

Place the autostart in /home/pi/.config/lxsession/LXDE-pi or ~/.config/lxsession/LXDE-pi so that the launcher.sh will be called on startup.

## Schedules

The usual way to change the schedules is the **Projector Clock** panel in the
[control panel](https://github.com/timberline-secondary/control-panel). It saves them on the
Pi in `schedules.js` (not in git), keeps a copy of the old ones in `backups/` each time, and
restarts the clock so the change shows.

If there's no `schedules.js`, the clock uses the ones in `schedule_data.js`.

Each schedule has:

- `description`: its name, e.g. `4-Block Semester Schedule.`
- `days`: the days of the week it's for, `0` (Sunday) to `6` (Saturday).
- `dates` (optional): particular dates it's for, e.g. `["2026-10-30"]`. On those dates it's
  used instead of the usual schedule for that day of the week.
- `values`: its periods, each with
  - `text`: what's shown, e.g. `A Block`;
  - `start`: when it starts, e.g. `08:50` (the first starts at `00:00`; each ends when the
    next starts);
  - `end`: not used by the clock;
  - `type`: `Block`, `Break`, `Lunch` or `Transition` (shown as "Time Until Next Block");
  - `colour`: the colour behind the clock, as red, green, blue (`239, 52, 24`), or
    `default` for the usual dark one.

The clock reads the schedules when it starts, and again each midnight.

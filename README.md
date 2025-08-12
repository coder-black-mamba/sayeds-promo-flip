# FlipClock Pomodoro Timer

A simple yet powerful Pomodoro timer built on top of FlipClock.us, featuring automatic session switching and full-screen mode for distraction-free productivity.

## 🚀 Features

- **Pomodoro Timer**: Pre-configured with standard Pomodoro intervals (25/50 minutes)
- **Break Timer**: Automatic switching to break timers (5/10 minutes)
- **Full-Screen Mode**: Focus mode with a single click
- **Simple Controls**: Easy-to-use interface with clear buttons
- **Responsive Design**: Works on desktop browsers
- **Minimalist**: Clean interface with no distractions

## 🎯 Purpose

This project was created to enhance the FlipClock.us website by adding Pomodoro timer functionality with automatic session switching, which was missing from the original implementation.

## 🛠️ Installation

No installation required! Simply open `index.html` in your web browser.

## 🎮 Usage

1. **Basic Controls**:
   - **Clock**: Returns to the default FlipClock view
   - **Stop**: Stops the current timer
   - **Reset**: Resets the timer to default

2. **Pomodoro Modes**:
   - **25 min**: Starts a 25-minute Pomodoro session, then automatically switches to a 5-minute break
   - **50 min**: Starts a 50-minute Pomodoro session, then automatically switches to a 10-minute break

3. **Break Modes**:
   - **5 min**: Starts a 5-minute break, then automatically switches to a 25-minute Pomodoro
   - **10 min**: Starts a 10-minute break, then automatically switches to a 50-minute Pomodoro

4. **Full Screen**:
   - Click "Enter Full Screen" to enter distraction-free mode
   - Press `Esc` to exit full screen

## 🎨 Customization

You can easily customize the timer durations by modifying the following constants in `main.js`:

```javascript
const PROMODORO_LINK_25="https://flipclock.us/#/c/0h25m0s"
const PROMODORO_LINK_50="https://flipclock.us/#/c/0h50m0s"
const BREAK_LINK_5="https://flipclock.us/#/c/0h5m0s"
const BREAK_LINK_10="https://flipclock.us/#/c/0h10m0s"
```

## 🌟 Credits

- Built with [FlipClock.us](https://flipclock.us/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Font: [Orbitron](https://fonts.google.com/specimen/Orbitron)
- Developed by [Abusayed](https://absyd.xyz)

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

💡 **Tip**: For best results, use this timer in full-screen mode to minimize distractions and maximize productivity during your Pomodoro sessions!

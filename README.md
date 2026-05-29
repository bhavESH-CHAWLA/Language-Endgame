# Language: Endgame 🎮

A fun and interactive word-guessing game built with React and Vite. Guess the word within 8 attempts to keep the programming world safe from Assembly!

## 🎯 Game Overview

Language: Endgame is a programming-themed hangman game where you guess letters to reveal a hidden word. Each wrong guess eliminates a programming language. Can you guess the word before Assembly takes over?

## 🚀 Features

- **Interactive Gameplay** - Click letter buttons or use keyboard shortcuts to guess
- **Progressive Difficulty** - 8 programming languages are eliminated one by one with wrong guesses
- **Game Over Animation** - Keyboard shortcut (Escape) to trigger game over for testing
- **Win Celebration** - Confetti animation bursts across the screen when you win! 🎉
- **Visual Feedback** - 
  - Correct guesses appear in green
  - Incorrect guesses appear in red
  - All letters are revealed when game ends
  - Language chips are marked with skull emoji when eliminated
- **Responsive Design** - Works on desktop browsers

## 🛠 Technology Stack

- **React** - UI framework
- **Vite** - Build tool and dev server
- **Canvas Confetti** - Confetti animation library
- **clsx** - Utility for conditional className binding

## 📦 Installation

1. Clone the repository and navigate to the frontend folder:
```bash
cd Language\ Endgame/frontend
```

2. Install dependencies:
```bash
npm install
```

## 🎮 Running the Game

### Development Server
```bash
npm run dev
```
The game will run on `http://localhost:5173`

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## 🎮 How to Play

1. **Guess Letters** - Click on letter buttons to make guesses
2. **Correct Guess** - Letters in the word are revealed (green)
3. **Wrong Guess** - A programming language is eliminated (red)
4. **Win** - Reveal all letters before reaching 8 wrong guesses to win! 🎉
5. **Lose** - If you make 8 wrong guesses, it's game over and Assembly wins

## ⌨️ Keyboard Shortcuts

- **Letter Keys (A-Z)** - Make letter guesses
- **Escape** - Trigger game over (for testing)

## 🎨 Game Status

- **During Gameplay** - Farewell messages appear when you make a wrong guess
- **Win** - "You win! Well done! 🎉" with confetti animation
- **Lose** - "Game over! You lose! Better start learning Assembly 😭"

## 📂 Project Structure

```
frontend/
├── src/
│   ├── App.jsx           # Main game component
│   ├── main.jsx          # React entry point
│   ├── index.css         # Styling
│   ├── language.js       # Language data with colors
│   ├── word.js           # Word list
│   └── utlils.js         # Utility functions
├── package.json          # Dependencies
├── vite.config.js        # Vite configuration
└── index.html            # HTML template
```

## 🎨 Languages Included

The game features 8 programming languages:
1. Python
2. JavaScript
3. Java
4. C
5. C++
6. C#
7. Typescript
8. Assembly

## 🐛 Troubleshooting

**Confetti not showing?**
- Make sure `canvas-confetti` is installed: `npm install canvas-confetti`
- Clear browser cache and refresh

**Game not starting?**
- Ensure you're in the `frontend` directory
- Run `npm install` to install all dependencies
- Check that port 5173 is available

## 🤝 Contributing

Feel free to fork and submit pull requests for improvements!

## 📝 License

This project is open source and available for educational purposes.

## 🎯 Future Improvements

- Difficulty levels with different word lists
- Multiplayer mode
- Leaderboard
- Sound effects
- Dark/Light theme toggle
- More programming languages

---

Enjoy the game and good luck! 🚀

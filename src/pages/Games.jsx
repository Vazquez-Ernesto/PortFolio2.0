import { useState, useEffect } from 'react'
import './Games.css'

function Games() {
  const [currentGame, setCurrentGame] = useState('menu')
  const [score, setScore] = useState(0)
  const [level, setLevel] = useState(1)
  const [timeLeft, setTimeLeft] = useState(30)
  const [gameCompleted, setGameCompleted] = useState(false)
  const [certificate, setCertificate] = useState(null)

  // Quiz questions
  const quizQuestions = [
    {
      question: "¿Cuál es la diferencia entre testing funcional y no funcional?",
      options: [
        "Funcional prueba qué hace el software, no funcional prueba cómo lo hace",
        "Funcional es manual, no funcional es automático",
        "Funcional prueba código, no funcional prueba UI",
        "No hay diferencia, son lo mismo"
      ],
      correct: 0,
      explanation: "El testing funcional verifica QUÉ hace el software (funcionalidades), mientras que el no funcional verifica CÓMO lo hace (rendimiento, seguridad, usabilidad)."
    },
    {
      question: "¿Qué framework NO es para testing E2E?",
      options: ["Cypress", "Playwright", "Jest", "Selenium"],
      correct: 2,
      explanation: "Jest es un framework de testing unitario, no E2E. Cypress, Playwright y Selenium son frameworks E2E."
    },
    {
      question: "¿Cuál es el código HTTP para 'No autorizado'?",
      options: ["400", "401", "403", "404"],
      correct: 1,
      explanation: "401 Unauthorized indica que la solicitud requiere autenticación del usuario."
    },
    {
      question: "¿Qué tipo de testing verifica la integración entre módulos?",
      options: ["Unit Testing", "Integration Testing", "System Testing", "Acceptance Testing"],
      correct: 1,
      explanation: "Integration Testing verifica cómo interactúan los diferentes módulos/componentes del sistema."
    },
    {
      question: "¿Cuál NO es una buena práctica en testing?",
      options: [
        "Escribir tests antes del código (TDD)",
        "Usar datos de prueba realistas",
        "Probar solo casos positivos",
        "Automatizar tests repetitivos"
      ],
      correct: 2,
      explanation: "Debes probar tanto casos positivos como negativos, edge cases y casos de error."
    }
  ]

  // Bug finding challenges
  const bugChallenges = [
    {
      id: 1,
      title: "Bug en Login Form",
      image: "🔒",
      description: "Encuentra el bug en este formulario de login",
      bugs: [
        { x: 30, y: 40, description: "Campo password acepta menos de 8 caracteres" },
        { x: 70, y: 60, description: "Botón 'Login' no está centrado" },
        { x: 20, y: 80, description: "Texto 'Forgot password?' tiene enlace roto" }
      ],
      found: []
    },
    {
      id: 2,
      title: "Bug en API Response",
      image: "📡",
      description: "Identifica inconsistencias en esta respuesta JSON",
      bugs: [
        { x: 25, y: 35, description: "Campo 'userId' debería ser 'id'" },
        { x: 60, y: 50, description: "Array 'permissions' está vacío" },
        { x: 40, y: 70, description: "Campo 'createdAt' tiene formato incorrecto" }
      ],
      found: []
    }
  ]

  const [currentQuizQuestion, setCurrentQuizQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [showExplanation, setShowExplanation] = useState(false)
  const [currentBugChallenge, setCurrentBugChallenge] = useState(0)

  // Timer effect
  useEffect(() => {
    if (currentGame === 'quiz' && timeLeft > 0 && !gameCompleted) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000)
      return () => clearTimeout(timer)
    }
  }, [timeLeft, currentGame, gameCompleted])

  // Función de sonidos
  const playSound = (type) => {
    try {
      const audioContext = new (window.AudioContext || window.webkitAudioContext)();
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();
      
      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);
      
      if (type === 'hover') {
        // Sonido suave para hover
        oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
        oscillator.type = 'sine';
        gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.2);
      } else if (type === 'correct') {
        // Sonido positivo para respuesta correcta
        oscillator.frequency.setValueAtTime(523, audioContext.currentTime); // Do
        oscillator.frequency.setValueAtTime(659, audioContext.currentTime + 0.1); // Mi
        oscillator.frequency.setValueAtTime(784, audioContext.currentTime + 0.2); // Sol
        oscillator.type = 'triangle';
        gainNode.gain.setValueAtTime(0.2, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.4);
      } else if (type === 'incorrect') {
        // Sonido de error para respuesta incorrecta
        oscillator.frequency.setValueAtTime(200, audioContext.currentTime);
        oscillator.frequency.setValueAtTime(150, audioContext.currentTime + 0.1);
        oscillator.type = 'sawtooth';
        gainNode.gain.setValueAtTime(0.15, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
      }
      
      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + (type === 'correct' ? 0.4 : 0.3));
    } catch (error) {
      // Si Web Audio API no está disponible, no hacer nada
      console.log('Audio no disponible');
    }
  };

  const startQuiz = () => {
    setCurrentGame('quiz')
    setScore(0)
    setLevel(1)
    setTimeLeft(30)
    setCurrentQuizQuestion(0)
    setGameCompleted(false)
    setCertificate(null)
  }

  const startBugHunt = () => {
    setCurrentGame('bughunt')
    setScore(0)
    setCurrentBugChallenge(0)
    setGameCompleted(false)
    setCertificate(null)
  }

  const handleQuizAnswer = (answerIndex) => {
    setSelectedAnswer(answerIndex)
    setShowExplanation(true)
    
    // Agregar sonido según si es correcta o incorrecta
    if (answerIndex === quizQuestions[currentQuizQuestion].correct) {
      playSound('correct')
      const timeBonus = timeLeft * 10
      const correctBonus = 100
      setScore(prev => prev + correctBonus + timeBonus)
    } else {
      playSound('incorrect')
    }
    
    setTimeout(() => {
      if (currentQuizQuestion < quizQuestions.length - 1) {
        setCurrentQuizQuestion(currentQuizQuestion + 1)
        setSelectedAnswer(null)
        setShowExplanation(false)
        setTimeLeft(30)
      } else {
        generateCertificate()
      }
    }, 3000)
  }

  const handleBugClick = (event, challengeIndex) => {
    const rect = event.target.getBoundingClientRect()
    const x = ((event.clientX - rect.left) / rect.width) * 100
    const y = ((event.clientY - rect.top) / rect.height) * 100
    
    const challenge = bugChallenges[challengeIndex]
    const foundBug = challenge.bugs.find(bug => 
      Math.abs(bug.x - x) < 10 && Math.abs(bug.y - y) < 10 &&
      !challenge.found.some(f => f.x === bug.x && f.y === bug.y)
    )
    
    if (foundBug) {
      challenge.found.push(foundBug)
      setScore(prev => prev + 150)
      
      if (challenge.found.length === challenge.bugs.length) {
        setTimeout(() => {
          if (currentBugChallenge < bugChallenges.length - 1) {
            setCurrentBugChallenge(currentBugChallenge + 1)
          } else {
            generateCertificate()
          }
        }, 2000)
      }
    }
  }

  const generateCertificate = () => {
    const certificates = [
      { title: "QA Novice", emoji: "🌱", color: "#ff6b6b" },
      { title: "Testing Apprentice", emoji: "🛠️", color: "#4ecdc4" },
      { title: "Bug Hunter", emoji: "🕵️", color: "#45b7d1" },
      { title: "QA Master", emoji: "👑", color: "#f9ca24" },
      { title: "Testing Legend", emoji: "⭐", color: "#ff9ff3" }
    ]
    
    const certIndex = Math.min(Math.floor(score / 500), certificates.length - 1)
    setCertificate(certificates[certIndex])
    setGameCompleted(true)
  }

  const resetGame = () => {
    setCurrentGame('menu')
    setScore(0)
    setGameCompleted(false)
    setCertificate(null)
  }

  return (
    <div className="games">
      <section className="games-hero section">
        <div className="container">
          <h1 className="fade-in">🎮 Mini-Juegos QA</h1>
          <p className="games-subtitle">
            Pon a prueba tus conocimientos en QA Automation de forma divertida
          </p>
        </div>
      </section>

      <section className="games-content section">
        <div className="container">
          {currentGame === 'menu' && (
            <div className="game-menu">
              <div className="score-display">
                <h3>🏆 Puntaje Actual: <span className="score">{score}</span></h3>
              </div>
              
              <div className="game-options">
                <div className="game-card card" onClick={startQuiz}>
                  <div className="game-icon">🧠</div>
                  <h3>Quiz de Conocimientos QA</h3>
                  <p>Pon a prueba tus conocimientos sobre testing, automatización y mejores prácticas</p>
                  <div className="game-meta">
                    <span>⏱️ 30s por pregunta</span>
                    <span>💯 100 puntos</span>
                  </div>
                </div>

                <div className="game-card card" onClick={startBugHunt}>
                  <div className="game-icon">🔍</div>
                  <h3>Encuentra el Bug</h3>
                  <p>Identifica bugs en screenshots y código. ¡Sé el mejor Bug Hunter!</p>
                  <div className="game-meta">
                    <span>🎯 Click para encontrar</span>
                    <span>💎 150 puntos</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {currentGame === 'quiz' && !gameCompleted && (
            <div className="quiz-game">
              <div className="game-header">
                <div className="timer">⏱️ {timeLeft}s</div>
                <div className="progress">
                  Pregunta {currentQuizQuestion + 1} de {quizQuestions.length}
                </div>
                <div className="current-score">🏆 {score}</div>
              </div>

              <div className="question-card card">
                <h3>{quizQuestions[currentQuizQuestion].question}</h3>
                
                <div className="options">
                  {quizQuestions[currentQuizQuestion].options.map((option, index) => (
                    <button
                      key={index}
                      className={`option-btn ${selectedAnswer !== null ? 
                        (index === quizQuestions[currentQuizQuestion].correct ? 'correct' : 
                         index === selectedAnswer ? 'incorrect' : '') : ''}`}
                      onClick={() => handleQuizAnswer(index)}
                      onMouseEnter={() => playSound('hover')}
                      disabled={selectedAnswer !== null}
                    >
                      {option}
                    </button>
                  ))}
                </div>

                {showExplanation && (
                  <div className="explanation">
                    <h4>💡 Explicación:</h4>
                    <p>{quizQuestions[currentQuizQuestion].explanation}</p>
                  </div>
                )}
              </div>
            </div>
          )}

          {currentGame === 'bughunt' && !gameCompleted && (
            <div className="bug-hunt-game">
              <div className="game-header">
                <div className="current-score">🏆 {score}</div>
                <div className="challenge-progress">
                  Desafío {currentBugChallenge + 1} de {bugChallenges.length}
                </div>
              </div>

              <div className="bug-challenge card">
                <h3>{bugChallenges[currentBugChallenge].title}</h3>
                <p>{bugChallenges[currentBugChallenge].description}</p>
                
                <div 
                  className="bug-screenshot"
                  onClick={(e) => handleBugClick(e, currentBugChallenge)}
                >
                  <div className="screenshot-placeholder">
                    {bugChallenges[currentBugChallenge].image}
                  </div>
                  
                  {/* Mostrar bugs encontrados */}
                  {bugChallenges[currentBugChallenge].found.map((bug, index) => (
                    <div 
                      key={index}
                      className="found-bug"
                      style={{ left: `${bug.x}%`, top: `${bug.y}%` }}
                    >
                      ✅
                    </div>
                  ))}
                </div>

                <div className="bugs-found">
                  <h4>Bugs encontrados: {bugChallenges[currentBugChallenge].found.length}/{bugChallenges[currentBugChallenge].bugs.length}</h4>
                  {bugChallenges[currentBugChallenge].found.map((bug, index) => (
                    <div key={index} className="bug-description">
                      🎯 {bug.description}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {gameCompleted && certificate && (
            <div className="certificate-modal">
              <div className="certificate card">
                <div className="certificate-header">
                  <h2>🎉 ¡Felicitaciones!</h2>
                  <div className="certificate-badge" style={{color: certificate.color}}>
                    {certificate.emoji}
                  </div>
                </div>
                
                <h3>{certificate.title}</h3>
                <p>Has completado el Mini-Juego QA con un puntaje de:</p>
                <div className="final-score">{score} puntos</div>
                
                <div className="certificate-actions">
                  <button className="btn" onClick={resetGame}>
                    🎮 Jugar de Nuevo
                  </button>
                  <button className="btn btn-secondary" onClick={() => window.print()}>
                    🖨️ Imprimir Certificado
                  </button>
                </div>
              </div>
            </div>
          )}

          {currentGame !== 'menu' && !gameCompleted && (
            <button className="back-btn" onClick={resetGame}>
              ← Volver al Menú
            </button>
          )}
        </div>
      </section>
    </div>
  )
}

export default Games
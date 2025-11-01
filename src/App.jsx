import { useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./styles/App.css";

// Importa tus páginas
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import Projects from './pages/Projects';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const containerRef = useRef(null);

  useEffect(() => {
    const particles = [];
    const particleCount = 18; // Número de lupas celulares
    
    // Crear partículas celulares
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.className = 'magnifier-particle';
      
      // Posición inicial aleatoria
      const x = Math.random() * 90 + 5; // 5% - 95% para evitar bordes
      const y = Math.random() * 90 + 5;
      
      particle.style.left = x + '%';
      particle.style.top = y + '%';
      
      // Tamaño variable (16px - 28px)
      const size = 16 + Math.random() * 12;
      particle.style.setProperty('--particle-size', size + 'px');
      
      // Delay inicial para entrada escalonada
      particle.style.animationDelay = (i * 0.2) + 's';
      
      containerRef.current.appendChild(particle);
      
      particles.push({
        element: particle,
        x: x,
        y: y,
        baseX: x,  // Posición base en %
        baseY: y,  // Posición base en %
        size: size,
        mouseOffset: { x: 0, y: 0 }, // Offset del mouse en px
        mouseInfluence: 0 // Influencia del mouse para opacidad
      });
    }

    // Sistema de animación ultra robusto
    let animationId = null;
    let isAnimating = true;

    // Función de repulsión celular corregida con unidades consistentes
    const handleMouseMove = (e) => {
      const mouseX = (e.clientX / window.innerWidth) * 100;  // Mantener en %
      const mouseY = (e.clientY / window.innerHeight) * 100; // Mantener en %
      
      particles.forEach(particle => {
        const dx = mouseX - particle.baseX;
        const dy = mouseY - particle.baseY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        // Radio de influencia en porcentaje (más consistente)
        const influenceRadiusPercent = 15; // 15% de la pantalla
        const force = Math.max(0, influenceRadiusPercent - distance) / influenceRadiusPercent;
        
        // Calcular repulsión en píxeles, pero consistente
        const angle = Math.atan2(dy, dx);
        const repelDistance = force * 25; // Reducido para mejor control
        
        // Suavizar la transición guardando el offset anterior
        const currentOffset = particle.mouseOffset || { x: 0, y: 0 };
        const targetOffset = {
          x: -Math.cos(angle) * repelDistance,
          y: -Math.sin(angle) * repelDistance
        };
        
        // Interpolación suave (lerp) para transiciones fluidas
        const lerpFactor = 0.1;
        particle.mouseOffset = {
          x: currentOffset.x + (targetOffset.x - currentOffset.x) * lerpFactor,
          y: currentOffset.y + (targetOffset.y - currentOffset.y) * lerpFactor
        };
        
        // Guardar influencia para opacidad
        particle.mouseInfluence = force;
      });
    };

    const animateParticles = () => {
      if (!isAnimating) return;
      
      try {
        const time = Date.now() * 0.001;
        
        particles.forEach((particle, index) => {
          if (!particle || !particle.element || !particle.element.parentNode) return;
          
          // Movimiento base sinusoidal más pronunciado y continuo
          const baseX = Math.sin(time * 0.8 + index * 0.7) * 12; // Aumentado a ±12px
          const baseY = Math.cos(time * 0.6 + index * 0.5) * 12; // Aumentado a ±12px
          
          // Calcular offset del mouse (convertido a píxeles consistentes)
          const mouseOffset = particle.mouseOffset || { x: 0, y: 0 };
          
          // Combinar movimientos: base + mouse con mayor peso al movimiento base
          const totalX = baseX + mouseOffset.x;
          const totalY = baseY + mouseOffset.y;
          
          // Aplicar transformación unificada
          particle.element.style.transform = `translate(${totalX}px, ${totalY}px)`;
          
          // Cambiar opacidad sutilmente basada en el tiempo y proximidad del mouse
          const baseOpacity = 0.4 + (Math.sin(time + index) * 0.1);
          const mouseInfluence = particle.mouseInfluence || 0;
          const finalOpacity = Math.max(0.2, baseOpacity - mouseInfluence * 0.3);
          particle.element.style.opacity = finalOpacity;
        });
        
        // Continuar la animación
        animationId = requestAnimationFrame(animateParticles);
        
      } catch (error) {
        console.warn('Error en animación de partículas:', error);
        // Reiniciar la animación si hay error
        setTimeout(() => {
          if (isAnimating) {
            animationId = requestAnimationFrame(animateParticles);
          }
        }, 100);
      }
    };

    // Función para iniciar animación
    const startAnimation = () => {
      if (!isAnimating) {
        isAnimating = true;
        animateParticles();
      }
    };

    // Función para detener animación
    const stopAnimation = () => {
      isAnimating = false;
      if (animationId) {
        cancelAnimationFrame(animationId);
        animationId = null;
      }
    };

    // Event listeners
    window.addEventListener('mousemove', handleMouseMove);
    startAnimation(); // Iniciar movimiento continuo

    // Cleanup mejorado
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      stopAnimation();
      
      // Limpiar partículas más cuidadosamente
      particles.forEach(particle => {
        if (particle && particle.element && particle.element.parentNode) {
          try {
            particle.element.parentNode.removeChild(particle.element);
          } catch (e) {
            console.warn('Error al limpiar partícula:', e);
          }
        }
      });
    };
  }, []);

  return (
    <Router basename="/PortFolio2.0">
      <div ref={containerRef} className="app">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
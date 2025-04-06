import { useRef } from 'react';
import './App.css'

function App() {

  const featuresRef = useRef(null);
  const faqRef = useRef(null);
  const contactRef = useRef(null);

  const scrollTo = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="App">
      <header className="header">
        <h1>ExpenseTracker</h1>
        <nav className="nav">
          <a href="#features" onClick={() => scrollTo(featuresRef)}>Features</a>
          <a href="#faq" onClick={() => scrollTo(faqRef)}>FAQ</a>
          <a href="#contact" onClick={() => scrollTo(contactRef)}>Contact</a>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-content">
          <h2>Track Your Spending, Simply.</h2>
          <p>Manage your expenses with ease. Stay on top of your budget anytime, anywhere.</p>

          <a href="https://nate-expenses.netlify.app" target="_blank" rel="noopener noreferrer">
            <button>Try It Now</button>
          </a>

        </div>
      </section>

      <section className="features" id="features" ref={featuresRef}>
        <h3>Features</h3>
        <ul>
          <li>💵 Add and categorize your expenses</li>
          <li>📊 Instantly see your total spending</li>
          <li>🗑️ Easy to edit or delete items</li>
          <li>📱 Responsive interface</li>
        </ul>
      </section>

      <section className="faq" id="faq" ref={faqRef}>
        <h3>Frequently Asked Questions</h3>
        <div className="faq-item">
          <h4>Is this app free?</h4>
          <p>Yes, 100% free to use.</p>
        </div>
        <div className="faq-item">
          <h4>Do I need to create an account?</h4>
          <p>No sign-up required. Just start tracking!</p>
        </div>
      </section>

      <footer className="footer" id="contact" ref={contactRef}>
        <p>🚀 Built with 💚 by Nate | © 2025</p>
      </footer>
    </div>
  );
}

export default App;

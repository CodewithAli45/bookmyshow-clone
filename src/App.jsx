import { motion } from 'framer-motion'

function App() {
  return (
    <div className="app-container">
      <header className="hero">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Welcome to Book My Shows
        </motion.h1>
      </header>
      
      <main>
        {/* Main content will go here */}
      </main>

      <footer className="footer">
        <p>Thank you The Movie DB</p>
      </footer>
    </div>
  )
}

export default App

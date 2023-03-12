import { Routes, Route } from 'react-router-dom'
import { Home } from './components/home'
import { Services } from './components/services'
import { Threads } from './components/threads'
import { Contact } from './components/contact'
import { Header } from './components/header'
import { Footer } from './components/footer'

function App() {
  return (
    <>
      <div className="JMaria-devScrooge-web">
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='services' element={<Services />} />
          <Route path='threads' element={<Threads />} />
          <Route path='contact' element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App

import { Routes, Route } from 'react-router-dom'
import { Home } from './component/Home'
import { LoginPage } from './component/LoginPage'

const App = () => {

  return (
    <div>
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/home' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App

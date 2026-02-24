import './App.css'
import Login from './assets/pages/login/login'
import Registration from './assets/pages/Registration/registration'
import Home from './assets/pages/home/home'
import CategoryBlogs from './assets/pages/category/CategoryBlogs'
import DedicatedBlog from './assets/pages/dedicatedBlog/DedicatedBlog'
import Navbar from './assets/components/navbar/Navbar'
import Footer from './assets/components/footer/footer'
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      {/* <Login /> */}
      {/* <Registration /> */}
      {/* <Home /> */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/category/:blog" element={<CategoryBlogs />} />
        <Route path="/blog/:id" element={<DedicatedBlog />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App

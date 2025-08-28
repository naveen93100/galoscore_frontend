import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Navbar from "./components/Navbar"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Footer from "./components/Footer"
import Student from "./components/Student"
import Corporate from "./components/Corporate"
import StudentDashboard from './pages/Dashboard/Student/StudentDashboard';
import { useSelector } from "react-redux"
import StudentProfile from "./pages/Dashboard/Student/StudentProfile"
import StudentHome from "./pages/Dashboard/Student/StudentHome"
import TestLayout from "./pages/Dashboard/Student/TestLayout"
import Cse from "./pages/Dashboard/Student/Cse"
import Ece from "./pages/Dashboard/Student/Ece"
import Me from "./pages/Dashboard/Student/Me"
import Contact from "./pages/Contact"
import Certificate from "./pages/Certificate"
import Blogs from "./pages/Blogs"


const App = () => {

  const { token } = useSelector(state => state.auth);

  return (
    <>
      {!token &&
        <Navbar />
      }
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/certificate" element={<Certificate/>}/>
        <Route path="/recruiter" element={<Corporate />} />
        <Route path="/blogs" element={<Blogs/>}/>
        {/* <Route path="/practice" element={<Practice/>}/> */}
        {token ?
          <Route path="/student" element={<StudentDashboard />} >
            <Route index element={<StudentHome />} />
            <Route path="profile" element={<StudentProfile />} />
            <Route path="tests" element={<TestLayout />}>
              <Route path="cse" element={<Cse/>} />
              <Route path="ece" element={<Ece/>}/>
              <Route path="me" element={<Me/>}/>
            </Route>
          </Route>
          :
          <>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/fresher" element={<Student/>}/>
          </>
        }
      </Routes>
      {!token &&
        <Footer />
      }
    </>
  )
}

export default App
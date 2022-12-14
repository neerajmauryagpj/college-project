import Layout from './layout/Layout';
import { Routes, Route } from "react-router-dom";

import TestComponent from "./pages/Test"
import Login from "./pages/authentication/Login"
import Profile from "./pages/profile/Profile"
import About from "./pages/About"
import Dashboard from "./pages/Dashboard"
import Users from './pages/profile/Users';
import Subjects from './pages/Subjects';
import Student from './pages/student/Student'
import StudentCreate from './pages/student/StudentCreate'

function Router() {
  return (
    <div className="Router">
        <Routes>
            <Route path="/" element={<Layout/>}>
              <Route path="/" element={<Dashboard />} />
              <Route path="/subject/:Id" element={<Subjects />} />
              <Route path="/about" element={<About />} />
              <Route path="/profile/:name" element={<Profile />} />
              <Route path="/test" element={<TestComponent />} />
              <Route path="/users" element={<Users />} />
              <Route path="/student" element={<Student />} />
              <Route path="/student/create" element={<StudentCreate />} />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route
                path="*"
                element={
                    <main style={{ padding: "1rem" }}>
                      <h1 className='text-center py-5'>404</h1>
                    </main>
                }
            />
          </Routes>
    </div>
    
  );
}
export default Router;

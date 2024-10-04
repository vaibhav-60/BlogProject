import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Signup } from "./pages/Signup";
import { Signin } from "./pages/Signin";
import { Blog } from "./pages/Blog";
import { Blogs } from "./pages/Blogs";
import { Publish } from "./pages/Publish";
import ProtectedRoute from "./components/ProtectedRoute";
import { CompleteProfile } from "./pages/CompleteProfile";

function App() {
  const isAuthenticated = true;

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/blog/:id" element={<Blog />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="*" element={<Blogs />} />
          <Route path="/complete-profile" element={<CompleteProfile />} />
          <Route
            path="/publish"
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                
                <Publish />
                
                
                
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

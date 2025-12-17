import { Routes, Route } from "react-router-dom"
import SignIn from "../components/auth/SignIn"
import SignUp from "../components/auth/SignUp"
import ForgotPassword from "../components/auth/ForgotPassword"
import VerifyOTP from "../components/auth/VerifyOTP"
import Dashboard from "../components/Dashboard"

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<SignIn/>}/>
        <Route path="signup" element={<SignUp/>}/>
        <Route path="forgot-password" element={<ForgotPassword/>}/>
        <Route path="verify-otp" element={<VerifyOTP/>}/>
        <Route path="dashboard" element={<Dashboard/>}/>
      </Route>
    </Routes>
  )
}

export default AppRoutes

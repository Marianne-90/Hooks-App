import { Routes, Route, Navigate } from "react-router-dom";
import { HomePage, LoginPage, AboutPage, NavBar } from './'
import { UserProvider } from './context/UserProvider.jsx'
export const MainApp = () => {
  return (
    <UserProvider>
      <NavBar />
      <hr />
      <code>Go to login and click the button</code>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="/*" element={<Navigate to='/about' />} />
      </Routes>
    </UserProvider>
  )
}
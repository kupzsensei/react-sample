import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LoginPage from './pages/LoginPage/index.jsx'
import HomeTab from './pages/Tabs/home.jsx'
import AboutTab from './pages/Tabs/About.jsx'
import ContactsTab from './pages/Tabs/Contacts.jsx'

const router = createBrowserRouter(
  [
    {
      path:'/',
      element: <App />,
      children: [
        {
          path: '',
          element: <HomeTab />
        },
        {
          path: 'about',
          element: <AboutTab />
        },
        {
          path: 'contacts',
          element: <ContactsTab />
        }
      ]
    },
    {
      path: '/login',
      element: <LoginPage />
    }
  ]
)

createRoot(document.getElementById('root')).render(
  
    <RouterProvider router={router} />
  
)

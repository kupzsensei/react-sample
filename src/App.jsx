import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"

function App() {
  

  return (
   <main className="w-screen h-screen bg-cyan-600 flex flex-col">
      <Navbar />
      <section className="flex flex-1 min-h-0">
          <aside className="font-bold flex flex-col gap-5 h-full bg-gray-200 p-5">
            <a href="#" className="hover:text-yellow-300">Laboratory</a>
            <a href="#" className="hover:text-yellow-300">Lecture Room</a>
            <a href="#" className="hover:text-yellow-300">Gym</a>
            <a href="#" className="hover:text-yellow-300">Faculty</a>
            <a href="#" className="hover:text-yellow-300">Registrar</a>
          </aside>
      </section>
   </main>
  )
}

export default App

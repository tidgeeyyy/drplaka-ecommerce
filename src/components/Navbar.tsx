import { Button } from "@/components/ui/button"
import { BiStore } from "react-icons/bi";
import Login from './pages/login.tsx'
import { useNavigate } from 'react-router-dom'



export default function NavBar() {
  const nav = useNavigate();
  const goToRoute = () => { nav(routePath) }

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Doktor Plaka</h1>
      <div className="flex space-x-6">
        <Button>Log In</Button>
        <Button variant="secondary">Sign Up</Button >
        <Button variant="outline">
          <BiStore />
          Marketplace
        </Button>
      </div>
    </header>
  );
}

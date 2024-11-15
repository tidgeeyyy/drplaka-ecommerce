export default function NavBar() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Doktor Plaka</h1>
      <nav>
        <ul className="flex space-x-6">
          <li>Log In</li>
          <li>Sign Up</li>
          <li>Marketplace</li>
        </ul>
      </nav>
    </header>
  );
}

import { Link, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="flex flex-col h-screen text-sm">
      <header className="bg-white shadow p-4 grid grid-cols-3 items-center text-base font-medium">
        <Link to="/" className='hover:text-blue-600'>🏠 Главная</Link>
        <div className="flex justify-center gap-10">
          <Link to="/races" className='hover:text-blue-600'>🚩 Гонки</Link>
          <Link to="/carts" className='hover:text-blue-600'>🛒 Тележки</Link>
          <Link to="/leaderboard" className='hover:text-blue-600'>🏆 Лидеры</Link>
        </div>
        <div className="flex justify-end gap-10">
          <Link to="/profile" className='hover:text-blue-600'>👤 Профиль</Link>
          <Link to="/login" className='hover:text-blue-600'>🔑 Вход</Link>
        </div>
      </header>
      <main className="p-6">
        <Outlet />
      </main>
    </div>
  )
}
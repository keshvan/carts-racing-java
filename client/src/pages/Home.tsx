export default function Home() {
  return (
    <div className="flex justify-between px-52">
      <section>
        <h2 className="text-xl font-semibold">Ближайшие гонки</h2>
        <div className="bg-white shadow-md rounded-lg p-4 flex flex-col w-[500px]">
          <div>
            <p className="text-gray-600">20.05.2025 • Кумысная поляна</p>
          </div>
          <div className="flex gap-3">
            <button className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-500">
              Подробнее
            </button>
            <button className="bg-green-600 text-white px-4 py-1 rounded hover:bg-green-500">
              Участвовать
            </button>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Топ гонщиков</h2>
        <div className="bg-white shadow-md rounded-lg p-4 flex flex-col w-[500px]">
          <div className="flex items-center gap-4">
            <div>
              <h3 className="text-lg font-semibold">Чювак</h3>
              <p className="text-gray-500 text-sm">Побед: 10 • Очков: 15</p>
            </div>
          </div>
          <div>
            <button className="text-blue-600 hover:underline">Профиль</button>
          </div>
        </div>
      </section>
    </div>
  )
}
const carts = [
  {id: 1, imageUrl: "https://preview.redd.it/my-friends-and-i-did-the-red-bull-soapbox-race-as-wallace-v0-9l38w7vi85a91.jpg?width=640&crop=smart&auto=webp&s=9c88653ca667c0d03fe8469c166e631121d90d5e", name: "тачка", points: 21}, 
  {id: 2, imageUrl: "https://preview.redd.it/my-friends-and-i-did-the-red-bull-soapbox-race-as-wallace-v0-9l38w7vi85a91.jpg?width=640&crop=smart&auto=webp&s=9c88653ca667c0d03fe8469c166e631121d90d5e", name: "тачка", points: 21}
]

const results = [
  {raceId: 1, raceName: "Кумысная поляна", position: 1, time:"05:30"},
  {raceId: 2, raceName: "Кумысная поляна", position: 2, time:"06:30"},
]

export default function UserProfilePage() {

  return (
    <div className="p-6 max-w-3xl mx-auto space-y-8">
      <h1 className="text-2xl font-bold">Чювак</h1>

      <section>
        <h2 className="text-xl font-semibold mb-2">🛒 Тележки</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {carts.map((cart) => (
            <div
              key={cart.id}
              className="border rounded p-4 shadow bg-white flex items-center gap-4"
            >
              <img src={cart.imageUrl} alt={cart.name} className="w-24 h-24 object-cover rounded" />
              <div>
                <h3 className="font-bold">{cart.name}</h3>
                <p>Очки: {cart.points}</p>
                <p
                  className="text-blue-600 text-sm underline"
                >
                  Подробнее
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Результаты участий */}
      <section>
        <h2 className="text-xl font-semibold mb-2">🏁 Участие в гонках</h2>
        <ul className="space-y-2">
          {results.map((result) => (
            <li
              key={result.raceId}
              className="border rounded px-4 py-2 bg-gray-50"
            >
              <p className="font-bold text-blue-600 underline">
                {result.raceName}
              </p>
              <div>Позиция: {result.position ?? "DNF"}</div>
              <div>Время: {result.time ?? "—"}</div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

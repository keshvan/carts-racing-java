import { Link } from "react-router-dom";


const cart = {
  id: 1,
  name: "Тачка",
  imageUrl: "https://preview.redd.it/my-friends-and-i-did-the-red-bull-soapbox-race-as-wallace-v0-9l38w7vi85a91.jpg?width=640&crop=smart&auto=webp&s=9c88653ca667c0d03fe8469c166e631121d90d5e",
  points: 6,
  wins: 2,
  owner: {
    id: 10,
    username: "Чювак",
  },
  raceHistory: [
    {
      id: 10,
      name: "Кумысная поляна",
      date: "04-04-2025",
      position: 2,
      time: "02:41",
    },
    {
      id: 12,
      name: "Кумысная поляна",
      date: "10-05-2025",
      position: null,
      time: null,
    },
  ],
};

export default function CartPage() {
  return (
    <div className="max-w-3xl mx-auto p-6 space-y-6">
      <div className="flex items-center gap-6">
        <img
          src={cart.imageUrl}
          alt={cart.name}
          className="w-40 h-40 object-cover rounded shadow"
        />
        <div>
          <h1 className="text-3xl font-bold">{cart.name}</h1>
          <p className="text-gray-600">Очки: {cart.points}</p>
          <p className="text-gray-600">Побед: {cart.wins}</p>
          <p className="mt-2">
            Владелец:{" "}
            <Link
              to={`/users/${cart.owner.id}`}
              className="text-blue-600 underline"
            >
              {cart.owner.username}
            </Link>
          </p>
        </div>
      </div>

      <section>
        <h2 className="text-xl font-semibold mb-2">История участия</h2>
        {cart.raceHistory.length === 0 ? (
          <p className="text-gray-500">Эта тележка пока не участвовала.</p>
        ) : (
          <ul className="space-y-2">
            {cart.raceHistory.map((race) => (
              <li
                key={race.id}
                className="p-4 border rounded bg-white shadow flex justify-between items-center"
              >
                <div>
                  <h3 className="font-bold">
                    <p
                      className="text-blue-600 underline"
                    >
                      {race.name}
                    </p>
                  </h3>
                  <p className="text-sm text-gray-500">
                    {race.date} — позиция:{" "}
                    {race.position ? race.position : "не доехал"}
                  </p>
                </div>
                <span className="text-sm text-gray-700">
                  Время: {race.time ?? "—"}
                </span>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}
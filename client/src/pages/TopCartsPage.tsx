import { Link } from "react-router-dom";

const topCarts = [
  {
    id: 1,
    name: "Тачка",
    imageUrl: "https://preview.redd.it/my-friends-and-i-did-the-red-bull-soapbox-race-as-wallace-v0-9l38w7vi85a91.jpg?width=640&crop=smart&auto=webp&s=9c88653ca667c0d03fe8469c166e631121d90d5e",
    owner: { id: 10, name: "Чювак" },
    wins: 7,
    points: 21,
  },
  {
    id: 2,
    name: "Тачка",
    imageUrl: "https://preview.redd.it/my-friends-and-i-did-the-red-bull-soapbox-race-as-wallace-v0-9l38w7vi85a91.jpg?width=640&crop=smart&auto=webp&s=9c88653ca667c0d03fe8469c166e631121d90d5e",
    owner: { id: 11, name: "Чювак" },
    wins: 5,
    points: 15,
  },
  {
    id: 3,
    name: "Тачка",
    imageUrl: "https://preview.redd.it/my-friends-and-i-did-the-red-bull-soapbox-race-as-wallace-v0-9l38w7vi85a91.jpg?width=640&crop=smart&auto=webp&s=9c88653ca667c0d03fe8469c166e631121d90d5e",
    owner: { id: 12, name: "Чювак" },
    wins: 3,
    points: 9,
  },
];

export default function TopCartsPage() {
  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Топ тележек</h1>
      <div className="space-y-4">
        {topCarts.map((cart) => (
          <div
            key={cart.id}
            className="bg-white rounded shadow overflow-hidden flex items-center p-4 gap-6"
          >
            <img
              src={cart.imageUrl}
              alt={cart.name}
              className="w-32 h-32 object-cover rounded"
            />
            <div className="flex-1">
              <h2 className="text-xl font-semibold">{cart.name}</h2>
              <p className="text-gray-600 mt-1">
                Владелец:{" "}
                <Link
                  to={`/users/${cart.owner.id}`}
                  className="text-blue-600 hover:underline"
                >
                  {cart.owner.name}
                </Link>
              </p>
              <div className="mt-2 text-sm text-gray-700">
                Побед: <span className="font-bold">{cart.wins}</span> | Очки:{" "}
                <span className="font-bold">{cart.points}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
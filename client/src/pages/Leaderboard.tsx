import { Link } from "react-router-dom";

const topRacers = [
  {
    id: 1,
    name: "Чювак",
    wins: 10,
    points: 30,
  },
  {
    id: 2,
    name: "Чювак",
    wins: 9,
    points: 27,
  },
  {
    id: 3,
    name: "Чювак",
    wins: 8,
    points: 24,
  },
];

export default function Leaderboard() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Лидеры</h1>
      <div className="space-y-4">
        {topRacers.map((user, index) => (
          <div
            key={user.id}
            className="bg-white shadow rounded p-4 flex items-center justify-between"
          >
            <div>
              <h2 className="text-lg font-semibold">
                #{index + 1}{" "}
                <Link
                  to={`/user-profile`}
                  className="text-blue-600 hover:underline"
                >
                  {user.name}
                </Link>
              </h2>
              <p className="text-gray-600 text-sm mt-1">
                Побед: <span className="font-bold">{user.wins}</span> | Очки:{" "}
                <span className="font-bold">{user.points}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
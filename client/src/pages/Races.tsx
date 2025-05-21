import { useNavigate } from "react-router-dom";

const races = [
  {
    id: 1,
    name: "Кумысная поляна",
    location: "Кумысная поляна",
    date: "2025-06-10T15:00",
    status: "Регистрация желающих",
  },
  {
    id: 2,
    name: "Кумысная поляна",
    location: "Кумысная поляна",
    date: "2025-05-25T20:00",
    status: "В прогрессе",
  },
  {
    id: 3,
    name: "Кумысная поляна",
    location: "Кумысная поляна",
    date: "2025-02-01T13:30",
    status: "Завершена",
  },
];

export default function Races() {
  const navigate = useNavigate();
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Все гонки</h1>
      <div className="space-y-4">
        {races.map((race) => (
          <div
            key={race.id}
            className="bg-white shadow rounded p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
          >
            <div>
              <h2 className="text-xl font-semibold">{race.name}</h2>
              <p className="text-gray-600">{new Date(race.date).toLocaleString("ru-RU")}</p>
              <p className="text-gray-600">{race.location}</p>
            </div>
            <div className="flex items-center gap-4">
              {race.status}
              <button onClick={() => navigate("/race-page")}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                Подробнее
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
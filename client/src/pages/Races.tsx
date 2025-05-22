import { useState } from "react";
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
  const [editOpen, setEditOpen] = useState(false);
  return (
    <div className="max-w-3xl mx-auto p-6">
      {editOpen && (
        <div className="fixed top-0 left-0 w-screen h-screen bg-black/50 flex items-center justify-center z-50">
          <form
            className="bg-white rounded shadow-lg p-6 w-full max-w-2xl space-y-4"
          >
            <h2 className="text-xl font-bold">Создать гонку</h2>

            <div>
              <label className="block font-medium mb-1">Название:</label>
              <input
                name="name"
                className="w-full border rounded px-3 py-2"
              />
            </div>

            <div>
              <label className="block font-medium mb-1">Место:</label>
              <input
                name="location"
                className="w-full border rounded px-3 py-2"
              />
            </div>

            <div>
              <label className="block font-medium mb-1">Дата:</label>
              <input
                type="date"
                name="date"
                className="w-full border rounded px-3 py-2"
              />
            </div>

            <div>
              <label className="block font-medium mb-1">Описание:</label>
              <textarea
                name="description"
                className="w-full border rounded px-3 py-2"
                rows={3}
              />
            </div>

            <div className="flex gap-4">
              <div className="flex-1">
                <label className="block font-medium mb-1">Макс. зрителей:</label>
                <input
                  type="number"
                  name="maxViewers"
                  className="w-full border rounded px-3 py-2"
                />
              </div>
              <div className="flex-1">
                <label className="block font-medium mb-1">Макс. участников:</label>
                <input
                  type="number"
                  name="maxParticipants"
                  className="w-full border rounded px-3 py-2"
                />
              </div>
            </div>

            <div>
              <label className="block font-medium mb-1">Ссылка на трансляцию (опционально):</label>
              <input
                name="streamUrl"
                placeholder="https://youtube.com/..."
                className="w-full border rounded px-3 py-2"
              />
            </div>

            <div className="flex justify-end gap-4 pt-4">
              <button
                type="button"
                className="px-4 py-2 rounded border border-gray-400 hover:bg-gray-100"
              >
                Отмена
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
              >
                Cоздать
              </button>
            </div>
          </form>
        </div>
      )}
      <h1 className="text-3xl font-bold mb-6 text-center">Все гонки</h1>
      <button className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700" onClick={()=>setEditOpen(true)}>Создать</button>
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
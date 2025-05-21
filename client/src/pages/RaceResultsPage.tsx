import { useState } from "react";
import { useParams } from "react-router-dom";


const raceParticipants = [
  { id: 1, name: "Чювак", cart: "Тачка", number: 1 },
  { id: 2, name: "Чювак", cart: "Тачка", number: 2 },
  { id: 3, name: "Чювак", cart: "Тачка", number: 3 },
  { id: 3, name: "Чювак", cart: "Тачка", number: 4 }
];

export default function RaceResultsPage() {
  const { raceId } = useParams();

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow rounded">
      <h1 className="text-3xl font-bold mb-6">Результаты гонки "Кумысная поляна"</h1>

      <form>
        <div className="space-y-4">
          {raceParticipants.map((p, i) => (
            <div
              key={p.id}
              className="border rounded p-4 flex flex-col sm:flex-row sm:items-center gap-4"
            >
              <div className="flex-1">
                <h3 className="font-semibold">
                  №{p.number} — {p.name}
                </h3>
                <p className="text-sm text-gray-500">Тележка: {p.cart}</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <select
                  className="border px-2 py-1 rounded"
                >
                  <option value="true">✅ Доехал</option>
                  <option value="false">❌ Не доехал</option>
                </select>

                <input
                  type="number"
                  min="1"
                  placeholder="Позиция"
                  className="border px-2 py-1 rounded w-24"
                />

                <input
                  type="time"
                  placeholder="Время (мм:сс)"
                  className="border px-2 py-1 rounded w-28"
                />
              </div>
            </div>
          ))}
        </div>

        <button
          type="submit"
          className="mt-6 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
        >
          Сохранить результаты
        </button>
      </form>
    </div>
  );
}
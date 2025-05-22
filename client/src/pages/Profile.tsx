import { useState } from "react";

const carts = [
  { id: 1, imageUrl: "https://preview.redd.it/my-friends-and-i-did-the-red-bull-soapbox-race-as-wallace-v0-9l38w7vi85a91.jpg?width=640&crop=smart&auto=webp&s=9c88653ca667c0d03fe8469c166e631121d90d5e", name: "тачка", points: 21 },
  { id: 2, imageUrl: "https://preview.redd.it/my-friends-and-i-did-the-red-bull-soapbox-race-as-wallace-v0-9l38w7vi85a91.jpg?width=640&crop=smart&auto=webp&s=9c88653ca667c0d03fe8469c166e631121d90d5e", name: "тачка", points: 21 }
]

const visits = [
  { id: 1, name: "Кумысная поляна", date: "21.05.2025" },
  { id: 2, name: "Кумысная поляна", date: "21.05.2025" },
]

const results = [
  { raceId: 1, raceName: "Кумысная поляна", position: 1, time: "05:30" },
  { raceId: 2, raceName: "Кумысная поляна", position: 2, time: "06:30" },
]

export default function Profile() {
  const [showModal, setShowModal] = useState(false);
  const [newCart, setNewCart] = useState({ name: "", imageUrl: "" });
  const [preview, setPreview] = useState<string | null>(null);

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const localUrl = URL.createObjectURL(file);
      setPreview(localUrl)
    } else {
      setPreview(null);
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto space-y-8">
      <h1 className="text-2xl font-bold">artem</h1>

      <section>
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-xl font-semibold">Мои тележки</h2>
          <button
            onClick={() => setShowModal(true)}
            className="bg-blue-600 text-white px-4 py-1 rounded"
          >
            + Добавить тележку
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {carts.map((cart) => (
            <div
              key={cart.id}
              className="border rounded p-4 shadow bg-white flex items-center gap-4"
            >
              <img
                src={cart.imageUrl}
                alt={cart.name}
                className="w-24 h-24 object-cover rounded"
              />
              <div>
                <h3 className="font-bold">{cart.name}</h3>
                <p>Очки: {cart.points}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">Посещённые гонки</h2>
        <ul className="list-disc pl-6 space-y-1">
          {visits.map((race) => (
            <li key={race.id}>
              <p className="text-blue-600 underline">
                {race.name} — {race.date}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">Результаты</h2>
        <ul className="space-y-2">
          {results.map((result) => (
            <li
              key={result.raceId}
              className="border rounded px-4 py-2 bg-gray-50"
            >
              <p className="font-bold text-blue-600 underline">
                {result.raceName}
              </p>
              <div>Позиция: {result.position ?? "Не дошел"}</div>
              <div>Время: {result.time ?? "—"}</div>
            </li>
          ))}
        </ul>
      </section>

      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded shadow w-full max-w-md space-y-4">
            <h2 className="text-xl font-semibold">Создать тележку</h2>
            <form className="space-y-4">
              <div>
                <label className="block font-medium">Название</label>
                <input
                  type="text"
                  value={newCart.name}
                  onChange={(e) =>
                    setNewCart((prev) => ({ ...prev, name: e.target.value }))
                  }
                  className="w-full border rounded px-3 py-1"
                  required
                />
              </div>
              <div>
                <label className="block font-medium">Изображение</label>
                <input
                  type="file"
                  accept="image/*"
                  id="fileInput"
                  className="hidden"
                  onChange={handleImageChange}
                />

                <label
                  htmlFor="fileInput"
                  className="inline-block px-4 py-2 bg-blue-600 text-white rounded cursor-pointer hover:bg-blue-700 transition"
                >
                  Загрузить изображение
                </label>
                {preview && (
                  <img
                    src={preview}
                    alt="Превью"
                    className="mt-2 w-64 h-64 object-cover rounded shadow"
                  />
                )}
              </div>
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-4 py-1 border rounded"
                >
                  Отмена
                </button>
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-4 py-1 rounded"
                >
                  Сохранить
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
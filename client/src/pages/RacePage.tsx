import { useState } from "react";
import { useNavigate } from "react-router-dom";

const participants = [
    {
        id: 1,
        number: 1,
        userName: "Чювак",
        cartName: "Тачка",
        cartImage: "https://preview.redd.it/my-friends-and-i-did-the-red-bull-soapbox-race-as-wallace-v0-9l38w7vi85a91.jpg?width=640&crop=smart&auto=webp&s=9c88653ca667c0d03fe8469c166e631121d90d5e",
    },
    {
        id: 2,
        number: 2,
        userName: "Чювак",
        cartName: "Тачка",
        cartImage: "https://preview.redd.it/my-friends-and-i-did-the-red-bull-soapbox-race-as-wallace-v0-9l38w7vi85a91.jpg?width=640&crop=smart&auto=webp&s=9c88653ca667c0d03fe8469c166e631121d90d5e",
    },
    {
        id: 3,
        number: 3,
        userName: "Чювак",
        cartName: "Тачка",
        cartImage: "https://preview.redd.it/my-friends-and-i-did-the-red-bull-soapbox-race-as-wallace-v0-9l38w7vi85a91.jpg?width=640&crop=smart&auto=webp&s=9c88653ca667c0d03fe8469c166e631121d90d5e",
    },
    {
        id: 4,
        number: 4,
        userName: "Чювак",
        cartName: "Тачка",
        cartImage: "https://preview.redd.it/my-friends-and-i-did-the-red-bull-soapbox-race-as-wallace-v0-9l38w7vi85a91.jpg?width=640&crop=smart&auto=webp&s=9c88653ca667c0d03fe8469c166e631121d90d5e",
    },
];

const carts = [
  {id: 1, imageUrl: "https://preview.redd.it/my-friends-and-i-did-the-red-bull-soapbox-race-as-wallace-v0-9l38w7vi85a91.jpg?width=640&crop=smart&auto=webp&s=9c88653ca667c0d03fe8469c166e631121d90d5e", name: "тачка", points: 21}, 
  {id: 2, imageUrl: "https://preview.redd.it/my-friends-and-i-did-the-red-bull-soapbox-race-as-wallace-v0-9l38w7vi85a91.jpg?width=640&crop=smart&auto=webp&s=9c88653ca667c0d03fe8469c166e631121d90d5e", name: "тачка", points: 21}
]


export default function RacePage() {
    const navigate = useNavigate();
    const [showForm, setShowForm] = useState<boolean>(false);
    const [editOpen, setEditOpen] = useState<boolean>(false);
    const [joinOpen, setJoinOpen] = useState<boolean>(false);
    const [role, setRole] = useState<string | null>(null);

    return (
        <div className="space-y-6">
            {showForm && (
                <div className="fixed inset-0 bg-black/50 h-screen flex items-center justify-center z-50">
                    <form
                        className="bg-white rounded shadow-lg p-6 max-w-md w-full mx-4"
                    >
                        <h2 className="text-xl font-bold mb-4">🎥 Ссылка на трансляцию (необязательно)</h2>
                        <input
                            type="text"
                            className="w-full border border-gray-300 rounded px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <div className="flex justify-end gap-4">
                            <button
                                type="button"
                                className="px-4 py-2 rounded border border-gray-300 hover:bg-gray-100"
                            >
                                Отмена
                            </button>
                            <button
                                type="submit"
                                className="px-4 py-2 rounded bg-green-600 text-white hover:bg-green-700"
                            >
                                ✅ Начать гонку
                            </button>
                        </div>
                    </form>
                </div>
            )}
            {editOpen && (
                <>
                    {editOpen && (
                        <div className="fixed top-0 left-0 w-screen h-screen bg-black/50 flex items-center justify-center z-50">
                            <form
                                className="bg-white rounded shadow-lg p-6 w-full max-w-2xl space-y-4"
                            >
                                <h2 className="text-xl font-bold">Редактировать гонку</h2>

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
                                        Cохранить
                                    </button>
                                </div>
                            </form>
                        </div>
                    )}
                </>
            )}
            {joinOpen && (
                <div className="fixed top-0 left-0 w-screen h-screen bg-black/50 flex items-center justify-center z-50">
                    <form
                        className="bg-white rounded shadow-lg p-6 w-full max-w-md space-y-4"
                    >
                        <h2 className="text-xl font-bold">Участие в гонке</h2>

                        {/* Выбор роли */}
                        <div className="space-y-2">
                            <label className="flex items-center gap-2">
                                <input
                                    type="radio"
                                    name="role"
                                    value="viewer"
                                    checked={role === "viewer"}
                                    onChange={() => setRole("viewer")}
                                />
                                Зритель
                            </label>

                            <label className="flex items-center gap-2">
                                <input
                                    type="radio"
                                    name="role"
                                    value="racer"
                                    checked={role === "racer"}
                                    onChange={() => setRole("racer")}
                                />
                                Гонщик
                            </label>
                        </div>
                        {role === "racer" && (
                            <div>
                                <label className="block mb-1 font-medium">Выберите тележку:</label>
                                <select
                                    className="w-full border rounded px-3 py-2"
                                >
                                    <option value="">-- Выберите тележку --</option>
                                    {carts.map((cart) => (
                                        <option key={cart.id} value={cart.id}>
                                            {cart.name} (Очки: {cart.points})
                                        </option>
                                    ))}
                                </select>
                            </div>
                        )}
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
                                Подтвердить
                            </button>
                        </div>
                    </form>
                </div>
            )}
            <div className="space-y-6">
                <h1 className="text-3xl font-bold">Гонка "Кумысная поляна"
                    <div className={"inline-block w-5 h-5 mx-5 bg-green-600 rounded-full"}>
                    </div>
                </h1>

                <div className="bg-white rounded shadow p-4">
                    <h2 className="text-xl font-semibold mb-2">Описание</h2>
                    <p className="text-gray-700">
                        Описание описание описание
                    </p>
                </div>

                <div className="bg-white rounded shadow p-4">
                    <h2 className="text-xl font-semibold mb-2">Место проведения</h2>
                    <p className="text-gray-700">Кумысная поляна</p>
                </div>

                <div className="bg-white rounded shadow p-4">
                    <h2 className="text-xl font-semibold mb-2">Дата</h2>
                    <p className="text-gray-700">
                        20.02.25 -  18:00
                    </p>
                </div>
            </div>

            <iframe width="720" height="405" src="https://rutube.ru/play/embed/ff3898778e481d4c7eb3b9488e0cf46f/" frameBorder="0" allow="clipboard-write; autoplay"></iframe>
            <section>
                <h2 className="text-2xl font-semibold mb-4">Участники 4/5</h2>
                <div className="grid gap-4 md:grid-cols-2">
                    {participants.map((p) => (
                        <div key={p.id} className="bg-white shadow p-4 rounded flex gap-4 items-center">
                            <img src={p.cartImage} alt={p.cartName} className="w-24 h-24 rounded object-cover border" />
                            <div>
                                Номер: {p.number}
                                <h3 className="font-semibold">{p.userName}</h3>
                                <p className="text-gray-500">{p.cartName}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <div>
                <button className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700" onClick={() => setJoinOpen(true)}>
                    Участвовать
                </button>
                <p className="inline-block">15/20</p>
            </div>

            <section className="mt-10 border-t pt-6">
                <div className="flex gap-4 flex-wrap">
                    <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700" onClick={() => setShowForm(true)}>
                        Начать гонку
                    </button>
                    <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700" onClick={() => navigate("/race-results")}>
                        Завершить гонку
                    </button>
                    <button className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600" onClick={() => navigate("/applications")}>
                        Заявки
                    </button>
                    <button className="ml-4 text-sm text-gray-600 hover:underline" onClick={() => setEditOpen(true)}>
                        ✏️ Редактировать
                    </button>
                </div>
            </section>
        </div>
    );
}
import { Link } from "react-router-dom";

const race = {
    name: "Кумысная поляна",
    location: "Кумысная поляна",
    date: "20-05-2025",
    description: "норм",
    streamUrl: "https://rutube.ru/play/embed/ff3898778e481d4c7eb3b9488e0cf46f/",
    winner: {
        id: 1,
        username: "Чювак",
        cart: { id: 11, name: "Тачка", imageUrl: "https://preview.redd.it/my-friends-and-i-did-the-red-bull-soapbox-race-as-wallace-v0-9l38w7vi85a91.jpg?width=640&crop=smart&auto=webp&s=9c88653ca667c0d03fe8469c166e631121d90d5e" },
    },
    results: [
        {
            number: 7,
            user: { id: 1, username: "Чювак" },
            cart: { id: 11, name: "Тачка", imageUrl: "https://preview.redd.it/my-friends-and-i-did-the-red-bull-soapbox-race-as-wallace-v0-9l38w7vi85a91.jpg?width=640&crop=smart&auto=webp&s=9c88653ca667c0d03fe8469c166e631121d90d5e" },
            time: "02:34",
            position: 1,
        },
        {
            number: 12,
            user: { id: 2, username: "Чювак" },
            cart: { id: 14, name: "Тачка", imageUrl: "https://preview.redd.it/my-friends-and-i-did-the-red-bull-soapbox-race-as-wallace-v0-9l38w7vi85a91.jpg?width=640&crop=smart&auto=webp&s=9c88653ca667c0d03fe8469c166e631121d90d5e" },
            time: "02:50",
            position: 2,
        },
        {
            number: 22,
            user: { id: 3, username: "Чювак" },
            cart: { id: 18, name: "Тачка", imageUrl: "https://preview.redd.it/my-friends-and-i-did-the-red-bull-soapbox-race-as-wallace-v0-9l38w7vi85a91.jpg?width=640&crop=smart&auto=webp&s=9c88653ca667c0d03fe8469c166e631121d90d5e" },
            time: null,
            position: null,
        },
    ],
};

export default function FinishedRacePage() {
    return (
        <div className="p-6 max-w-5xl mx-auto space-y-10">
            <div className="space-y-6">
                <h1 className="text-3xl font-bold">Гонка "Кумысная поляна"
                    <div className={"inline-block w-5 h-5 mx-5 bg-red-600 rounded-full"}>
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

            <div className="bg-yellow-100 border border-yellow-400 rounded p-4 text-center shadow">
                <h2 className="text-xl font-semibold mb-2">Победитель: {race.winner.username}</h2>
                <div className="flex flex-col items-center md:flex-row md:justify-center gap-4 mt-4">
                    <img
                        src={race.winner.cart.imageUrl}
                        alt={race.winner.cart.name}
                        className="w-32 h-32 object-cover rounded shadow"
                    />
                    <div className="space-y-1 text-left">
                        <p className="font-bold">{race.winner.cart.name}</p>
                        <div className="flex gap-4">
                            <Link to={`/users/${race.winner.id}`} className="text-blue-600 underline">
                                Профиль
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <section>
                <h2 className="text-xl font-semibold mb-4">Результаты</h2>
                <div className="space-y-4">
                    {race.results.map((r) => (
                        <div key={r.user.id} className="flex items-center gap-4 p-4 bg-white rounded shadow">
                            <img
                                src={r.cart.imageUrl}
                                alt={r.cart.name}
                                className="w-24 h-24 object-cover rounded"
                            />
                            <div className="flex-1 space-y-1">
                                <h3 className="font-bold text-lg">
                                    <div>
                                        {r.position ? (<>#{r.position}</>) : (<>Не доехал</>)}
                                    </div>
                                    <Link to={`/user-profile`} className="text-blue-600 underline">
                                        {r.user.username}
                                    </Link>
                                </h3>
                                <p>
                                </p>
                                <div className="text-sm text-gray-600">
                                    Номер: {r.number}
                                </div>
                                <div className="text-sm text-gray-600">
                                    Время: {r.time ?? "—"}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {race.streamUrl && (
                <section>
                    <h2 className="text-xl font-semibold mb-2">Запись трансляции</h2>
                    <div className="aspect-w-16 aspect-h-9">
                        <iframe
                            src={race.streamUrl}
                            title="Трансляция"
                            allowFullScreen
                            className="w-full h-96 rounded"
                        />
                    </div>
                </section>
            )}
        </div>
    );
}
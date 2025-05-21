import { useState } from "react";

interface Application {
  id: number,
  userName: string,
  cartName: string,
  status: string,
  cartImage: string
}


export default function ApplicationPage() {
  const applicationsData: Application[] = [
    { id: 1, userName: "Чювак", cartName: "Тачка", status: "pending", cartImage: "https://preview.redd.it/my-friends-and-i-did-the-red-bull-soapbox-race-as-wallace-v0-9l38w7vi85a91.jpg?width=640&crop=smart&auto=webp&s=9c88653ca667c0d03fe8469c166e631121d90d5e" },
    { id: 2, userName: "Чювак", cartName: "Тачка", status: "pending", cartImage: "https://preview.redd.it/my-friends-and-i-did-the-red-bull-soapbox-race-as-wallace-v0-9l38w7vi85a91.jpg?width=640&crop=smart&auto=webp&s=9c88653ca667c0d03fe8469c166e631121d90d5e" },
    { id: 3, userName: "Чювак", cartName: "Тачка", status: "accepted", cartImage: "https://preview.redd.it/my-friends-and-i-did-the-red-bull-soapbox-race-as-wallace-v0-9l38w7vi85a91.jpg?width=640&crop=smart&auto=webp&s=9c88653ca667c0d03fe8469c166e631121d90d5e" },
  ];

  const [applications, setApplications] = useState<Application[]>(applicationsData);

  function updateStatus(id: any, newStatus: any) {
    setApplications((apps: any) =>
      apps.map((app: any) =>
        app.id === id ? { ...app, status: newStatus } : app
      )
    );
  }

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Заявки на гонку "Кумысная поляна"</h1>
      <table className="w-full bg-white rounded shadow overflow-hidden">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 text-left">Пользователь</th>
            <th className="p-3 text-left">Тележка</th>
            <th className="p-3 text-left">Статус</th>
            <th className="p-3 text-left">Действия</th>
          </tr>
        </thead>
        <tbody>
          {applications.map(({ id, userName, cartName, status, cartImage }) => (
            <tr key={id} className="border-t">
              <td className="p-3">{userName}</td>
              <td className="p-3">
                <img src={cartImage} className="w-24 h-24 rounded object-cover border" />
                {cartName}
              </td>
              <td className="p-3 capitalize">{status}</td>
              <td className="p-3 space-x-2">
                {status === "pending" && (
                  <>
                    <button
                      onClick={() => updateStatus(id, "accepted")}
                      className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700"
                    >
                      Принять
                    </button>
                    <button
                      onClick={() => updateStatus(id, "rejected")}
                      className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
                    >
                      Отклонить
                    </button>
                  </>
                )}
                {status !== "pending" && (
                  <span className="italic text-gray-600">Заявка {status}</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
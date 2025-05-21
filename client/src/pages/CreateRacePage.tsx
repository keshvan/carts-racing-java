import { useState } from "react";

export default function CreateRacePage() {
  return (
    <div className="max-w-2xl mx-auto bg-white shadow p-6 rounded">
      <h1 className="text-2xl font-bold mb-6">Создание новой гонки</h1>
      <form className="space-y-4">
        
        <div>
          <label className="block font-medium mb-1">Название гонки</label>
          <input
            type="text"
            name="name"
            required
            className="w-full border px-3 py-2 rounded"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Описание</label>
          <textarea
            name="description"
            rows={4}
            className="w-full border px-3 py-2 rounded"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Место</label>
          <input
            type="text"
            name="location"
            required
            className="w-full border px-3 py-2 rounded"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Дата и время</label>
          <input
            type="datetime-local"
            name="date"
            required
            className="w-full border px-3 py-2 rounded"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Кол-во мест для участников</label>
          <input
            type="number"
            name="maxParticipants"
            required
            min="1"
            className="w-full border px-3 py-2 rounded"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Кол-во мест для зрителей</label>
          <input
            type="number"
            name="maxSpectators"
            required
            min="1"
            className="w-full border px-3 py-2 rounded"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
        >
          ✅ Создать гонку
        </button>
      </form>
    </div>
  );
}
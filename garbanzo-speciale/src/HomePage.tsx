import React from "react";

export default function HomePage() {
    const [count, setCount] = React.useState(0);
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="max-w-xl w-full bg-white shadow-xl rounded-2xl p-8">
        <h1 className="text-3xl font-bold mb-4 text-center text-gray-800">
          Bienvenido a mi Página Web
        </h1>
        <p className="text-gray-600 mb-6 text-center">
          Esta es una página inicial creada con React, TypeScript y Tailwind CSS.
        </p>
        <div className="flex justify-center">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700 transition">
            Saber más
          </button>
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
        </div>
      </div>
    </div>
  );
}

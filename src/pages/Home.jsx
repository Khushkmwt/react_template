export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 max-w-2xl w-full text-center">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">
          🚀 React + Vite + Tailwind + Zustand Template
        </h1>

        <p className="text-gray-700 mb-6">
          Welcome! This is a ready-to-clone React template built for speed and scalability. Just clone, install, and start building your app.
        </p>

        <div className="flex flex-wrap justify-center gap-3 mb-6">
          {["React", "Vite", "Tailwind CSS", "Zustand", "Express API", "CORS Ready"].map((tech) => (
            <span
              key={tech}
              className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="bg-gray-100 p-4 rounded text-sm font-mono text-left text-gray-700 mb-4 overflow-x-auto">
          <p className="font-semibold mb-2">📁 Folder Structure:</p>
          <pre className="whitespace-pre">
            {`client/
            ├── src/
            │   ├── store/
            │   ├── api/
            │   ├── components/
            │   └── pages/
            server/
            └── routes/`}
           </pre>
        </div>


        <p className="text-sm text-gray-500">
          Start customizing by editing <code className="font-mono text-blue-600">Home.jsx</code>.
        </p>
      </div>
    </div>
  )
}

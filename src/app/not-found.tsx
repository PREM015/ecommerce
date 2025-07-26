// src/app/not-found.tsx
export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center flex-col text-center p-6">
      <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
        404 - Page Not Found
      </h1>
      <p className="text-gray-600 dark:text-gray-400 mb-6">
        The page you're looking for doesn't exist.
      </p>
      <a
        href="/"
        className="text-sm font-medium text-white bg-black px-4 py-2 rounded hover:bg-gray-800 transition"
      >
        Go Home
      </a>
    </div>
  );
}

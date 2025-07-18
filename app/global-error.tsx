'use client';

import Link from 'next/link';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
          <div className="text-center">
            <h1 className="text-6xl font-bold mb-4">500</h1>
            <h2 className="text-2xl mb-4">Sunucu Hatası</h2>
            <p className="mb-8 text-gray-400">
              Bir şeyler ters gitti. Lütfen tekrar deneyin.
            </p>
            <div className="space-x-4">
              <button
                onClick={reset}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors"
              >
                Tekrar Dene
              </button>
              <Link 
                href="/"
                className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded transition-colors"
              >
                Ana Sayfaya Dön
              </Link>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
} 
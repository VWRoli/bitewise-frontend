import { Button } from '@/app/components/ui/button';
import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="max-w-md rounded-lg border border-gray-200 bg-white p-6 text-center shadow-lg">
        <h1 className="mb-4 text-4xl font-bold text-gray-800">404</h1>
        <h2 className="mb-2 text-2xl font-semibold text-gray-600">
          Page Not Found
        </h2>
        <p className="mb-6 text-gray-700">
          Sorry, the page you are looking for does not exist.
        </p>
        <Link href="/">
          <Button className="w-full">Go Back Home</Button>
        </Link>
      </div>
    </main>
  );
}

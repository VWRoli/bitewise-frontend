'use client';

import { Button } from '@/app/components/ui/button';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="max-w-md rounded-lg border border-gray-200 bg-white p-6 shadow-lg">
        <h2 className="mb-4 text-2xl font-semibold text-red-600">
          Something went wrong!
        </h2>
        <p className="mb-6 text-gray-700">
          {error.message || 'An unexpected error occurred. Please try again.'}
        </p>
        {error.digest && (
          <p className="mb-6 text-sm text-gray-500">
            Error Code: {error.digest}
          </p>
        )}
        <Button onClick={() => reset()} className="w-full">
          Try Again
        </Button>
      </div>
    </main>
  );
}

import { Button } from "@/components/ui/button";
import prisma from "@/lib/prisma";
import Link from "next/link";

// export const dynamic = "force-dynamic";

export default async function Home() {
  const snippets = await prisma.snippet.findMany();

  if (!snippets) {
    return <h1 className="text-center text-xl text-gray-500 mt-10">No Snippets Found</h1>;
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-4xl font-extrabold text-gray-900 text-center">Code Snippets</h1>

      <div className="flex justify-between items-center bg-gray-100 shadow-md rounded-lg p-4 mt-6">
        <h3 className="text-lg font-semibold text-gray-700">Your Snippets</h3>
        <Link href="/snippet/new">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md shadow-md transition-all">
            + Add New
          </Button>
        </Link>
      </div>

      <div className="mt-6 space-y-4">
        {snippets.map((snippet) => (
          <div
            key={snippet.id}
            className="flex justify-between items-center p-4 border rounded-lg shadow-sm hover:shadow-lg transition-all bg-white"
          >
            <h1 className="text-lg font-medium text-gray-800">{snippet.title}</h1>
            <Link href={`/snippet/${snippet.id}`}>
              <Button className="text-blue-600 hover:text-blue-800 transition-all">
                View →
              </Button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

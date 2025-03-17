import { Button } from '@/components/ui/button';
import prisma from '@/lib/prisma'
import Link from 'next/link';
import React from 'react'
import { deleteSnippet } from '@/action';

const snippetDetail = async ({ params, }: { params: Promise<{ id: string }> }) => {
    const id = Number((await params).id);
    const snippet = await prisma.snippet.findUnique({
        where: {
            id
        }
    })
    const deleteSnippetData = deleteSnippet.bind(null, snippet?.id);

    if (!snippet) {
        return <h1>snippet not found</h1>
    }
    return (
        <>
            <div>
                <div className='flex justify-between'>
                    <h1>{snippet?.title}</h1>
                    <div className='flex gap-2'>
                        <Link href={`/snippet/${snippet.id}/edit`}><Button className=' cursor-pointer'>Edit</Button></Link>
                        <form action={deleteSnippetData}><Button type='submit' className=' cursor-pointer' variant={'destructive'}>Delete</Button></form>

                    </div>
                </div>
                <pre className='rounded p-2 bg-gray-200 mt-3'>
                    {snippet.code}
                </pre>
            </div>
        </>
    )
}

export default snippetDetail

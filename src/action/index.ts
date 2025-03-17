"use server"

import prisma from "@/lib/prisma"
import { redirect } from "next/navigation"
import { revalidatePath } from "next/cache"

export const saveSnippet = async (id: number, code: string) => {
    await prisma.snippet.update({
        where: { id },
        data: { code }
    })

    redirect(`/snippet/${id}`);
}
export const deleteSnippet = async (id: number = 0) => {
    await prisma.snippet.delete({
        where: { id },
    })

    revalidatePath('/');
    redirect('/');
}
export async function createSnippets(prev: { message: string }, formdata: FormData) {
    'use server'
    const title = formdata.get('title')
    const code = formdata.get('code')

    if (typeof title !== 'string' || title.length < 4) {
        return { message: 'title is required and must be longer' }
    }
    if (typeof code !== 'string' || code.length < 4) {
        return { message: 'code is required and must be longer' }
    }

    const snippets = await prisma.snippet.create({
        data: {
            title,
            code
        }
    })

    console.log('data', snippets);

    revalidatePath('/')
    redirect('/');
}
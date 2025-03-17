import React from 'react';
import prisma from '@/lib/prisma';
import EditForm from '@/components/ui/EditForm';

const EditSnippetPage = async ({ params }: { params: Promise<{ id: string }> }) => {
    const id = parseInt((await params).id);
    const snippet = await prisma.snippet.findUnique({
        where: { id },
    });

    // Handle snippet not found
    if (!snippet) {
        return <h1>Snippet not found</h1>;
    }

    return (
        <>
            <EditForm snippet={snippet} />
        </>
    );
};

export default EditSnippetPage;

"use client";
import type { Snippet } from "@prisma/client";
import { Editor } from "@monaco-editor/react";
import React, { useState } from "react";
import { Button } from "./button";
import { saveSnippet } from '@/action/index'

const EditForm = ({ snippet }: { snippet: Snippet }) => {
    const [code, setCode] = useState(snippet?.code || "");

    function handleChange(value: string = "") {
        setCode(value);
    }
    const saveSnippetData = saveSnippet.bind(null, snippet.id, code);

    return (
        <>
            <form action={saveSnippetData} className="flex justify-between mb-3">
                <h1 className="font-bold text-2xl">Your Code Editor</h1>
                <Button type="submit" className=" cursor-pointer">Save</Button>
            </form>
            <Editor
                height="40vh"
                theme="vs-dark"
                language="javascript"
                value={code}
                onChange={handleChange}
            />
        </>
    );
};

export default EditForm;

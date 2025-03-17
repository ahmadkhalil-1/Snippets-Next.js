"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { createSnippets } from "@/action";
import React, { useActionState } from "react";

const CreateSnippetsPage = () => {
    const [formState, action] = useActionState(createSnippets, { message: "" });

    return (
        <div>
            <form action={action} className="flex flex-col gap-2">
                <h1 className="text-center font-semibold text-3xl">Add new Snippet</h1>

                <Label htmlFor="title">Title:</Label>
                <Input
                    type="text"
                    name="title"
                    id="title"
                    placeholder="Enter title..."
                    required
                />

                <Label htmlFor="code">Code:</Label>
                <Textarea
                    name="code"
                    id="code"
                    placeholder="Enter code..."
                    required
                />
                {formState.message && (
                    <p className="text-red-500 mt-2">{formState.message}</p>
                )}
                <Button className="mt-2 cursor-pointer" type="submit">Add Snippet</Button>
            </form>
        </div>
    );
};

export default CreateSnippetsPage;

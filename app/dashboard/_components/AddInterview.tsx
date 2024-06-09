"use client";
import React, { ChangeEvent, FormEvent, useState } from 'react';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

function AddInterview() {
    const [openDialog, setOpenDialog] = useState<boolean>(false);
    const [jobPosition, setJobPosition] = useState<string | null>();
    const [jobDesc, setJobDesc] = useState<string | null>();
    const [jobExperience, setJobExperience] = useState<string | null>();

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }
    return (
        <div>
            <div className="p-10 border rounded-lg hover:scale-105 transtion-all hover:shadow-md cursor-pointer" onClick={() => setOpenDialog(true)}>
                <h1 className="font-bold text-lg text-center">+ Add New</h1>
            </div>
            <Dialog open={openDialog}>
                <DialogTrigger></DialogTrigger>
                <DialogContent className="max-w-2xl">
                    <DialogHeader>
                        <DialogTitle className="text-2xl">Get prepared for your Job Interview</DialogTitle>

                        <DialogDescription>
                            <form onSubmit={onSubmit}>
                                <div>
                                    <h2>Include more details about your job position/role, Job description and your years of experience</h2>
                                    <div className="mt-7 my-3">
                                        <label>Job position/Role</label>
                                        <Input placeholder="eg. Fullstack developer" required
                                            onChange={(e: ChangeEvent<HTMLInputElement>) => setJobPosition(e.target.value)} />
                                    </div>
                                    <div className="my-3">
                                        <label>Job Description</label>
                                        <Textarea placeholder="eg. React Angular NodeJs etc" required
                                            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setJobDesc(e.target.value)} />
                                    </div>
                                    <div className=" my-3">
                                        <label>Years of Experience</label>
                                        <Input placeholder="1" type="number" max="50" required
                                            onChange={(e: ChangeEvent<HTMLInputElement>) => setJobExperience(e.target.value)} />
                                    </div>
                                </div>

                                <div className="flex justify-end gap-4">
                                    <Button type="button" variant="outline" onClick={() => setOpenDialog(false)}>Cancel</Button>
                                    <Button type="submit">Start Interview</Button>
                                </div>
                            </form>
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>

        </div>
    )
}

export default AddInterview

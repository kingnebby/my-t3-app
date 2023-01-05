import { type NextPage } from "next";
import Head from "next/head";
import { ChangeEvent, useState } from "react";

import { api } from "../utils/api";

interface FormData {
  title: string,
  description: string
}



const NewNote: NextPage = () => {

  const utils = api.useContext()
  // utils.client.notes.newNote.mutate()
  // utils.notes.
  const newNote = api.notes.newNote.useMutation()

  const [data, setData] = useState<FormData>({
    title: '',
    description: '',
  })

  const handleTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setData({ title: event.target.value, description: data.description })
  }
  const handleDescriptionChange = (event: ChangeEvent<HTMLInputElement>) => {
    setData({ description: event.target.value, title: data.title })
  }

  return (
    <>
      <Head>
        <title>Sha-bang Notes App</title>
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center">
        form to add new note

        <form onSubmit={(event) => {
          event.preventDefault()

          newNote.mutate({
            ...data
          })
          setData({
            title: '',
            description: '',
          })
          // submit handler
        }}>
          <input type="text" value={data.title} placeholder="title" className="block ring mb-2 border-green-800 w-full rounded-sm border-3 px-4 py-2 focus:outline-none" onChange={(e) => handleTitleChange(e)} />
          <input type="text" value={data.description} placeholder="description" className="block ring mb-2 border-green-800 w-full rounded-sm border-3 px-4 py-2 focus:outline-none" onChange={(e) => handleDescriptionChange(e)} />

          <button type="submit" className="inline-block rounded-lg bg-green-600 ring-1 ring-green-600 py-1.5 px-4 text-white">
            Add a Note
          </button>
        </form>

      </main>
    </>
  );
};

export default NewNote;

import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

import { api } from "../utils/api";

const Home: NextPage = () => {
  // const hello = api.example.hello.useQuery({ text: "from tRPC" });
  const subQuery = api.subscribe.sub.useQuery({ text: 'Jemini.io' })

  return (
    <>
      <Head>
        <title>Sha-bang Notes App</title>
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-5xl font-extrabold tracking-tight text-black sm:text-[5rem]">
            Shabang Notes App
          </h1>
          <Link className="inline-block rounded-lg bg-green-600 ring-1 ring-green-600 py-1.5 px-4 text-white" href="/newnote">
            Add a Note
          </Link>

        </div>
      </main>
    </>
  );
};

export default Home;

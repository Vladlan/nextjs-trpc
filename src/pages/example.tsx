import { type NextPage } from "next";
import Head from "next/head";
import hljs from "highlight.js/lib/core";
import typescript from "highlight.js/lib/languages/typescript";
hljs.registerLanguage("typescript", typescript);
import { api } from "~/utils/api";
import "highlight.js/styles/github-dark.css";

const Example: NextPage = () => {
  const exampleTsFile = api.example.exmpletsfile.useQuery();
  const myHtml = exampleTsFile.data
    ? hljs.highlight(exampleTsFile.data, { language: "typescript" }).value
    : "";

  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            example.ts file
          </h1>
          <pre className="text-white">
            <code dangerouslySetInnerHTML={{ __html: myHtml }} />
          </pre>
        </div>
      </main>
    </>
  );
};

export default Example;

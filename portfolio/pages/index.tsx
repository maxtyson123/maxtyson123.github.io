import Link from 'next/link';

export default function Home() {
   var NavButtonStyling = "text-3xl font-bold bg-blue-800 hover:bg-blue-600 p-3";

  return (
      <div id="NavBar" className="flex flex-row justify-center w-screen bg-green-900 space-x-10">
          <h1 className="text-3xl font-bold p-3 self-stretch">
              <Link href="/"> LOGO </Link>
          </h1>
          <h1 className="p-3 w-1/3"></h1>
          <h1 className={NavButtonStyling}>
              <Link href="/"> Home </Link>
          </h1>
          <h1 className={NavButtonStyling}>
            <Link href="/projects/test-project"> About </Link>
          </h1>
          <h1 className={NavButtonStyling}>
              <Link href="/projects/test-project"> Skills </Link>
          </h1>
          <h1 className={NavButtonStyling}>
              <Link href="/projects/test-project"> Project </Link>
          </h1>
          <h1 className={NavButtonStyling}>
              <Link href="/projects/test-project"> Contact </Link>
          </h1>
      </div>
  )
}

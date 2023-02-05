import Link from "next/link";

// @ts-ignore - this ignores the props warning
export default function NavBar({ page }){

    //Styling
    const NavButtonStyling = "text-3xl font-bold bg-blue-800 hover:bg-blue-600 p-3 rounded-br-lg rounded-bl-lg";
    const NavButtonStylingActive_BG = 'blue';

    //Properties
    let title = page ? page : 'Default Title';


    return(
        <>
            <div id="NavBar" className="flex flex-row justify-center w-screen space-x-10">
                <h1 className="text-3xl font-bold p-3 self-stretch">
                    <Link href="/"> MAX TYSON </Link>
                </h1>
                <h1 className="p-3 w-1/3"></h1>
                <h1 className={NavButtonStyling}  style={{backgroundColor:  title == "Home" ? NavButtonStylingActive_BG : ''}}>
                    <Link href="/"> Home </Link>
                </h1>
                <h1 className={NavButtonStyling}  style={{backgroundColor:  title == "About" ? NavButtonStylingActive_BG : ''}}>
                    <Link href="/about"> About </Link>
                </h1>
                <h1 className={NavButtonStyling}  style={{backgroundColor:  title == "Skills" ? NavButtonStylingActive_BG : ''}}>
                    <Link href="/skills"> Skills </Link>
                </h1>
                <h1 className={NavButtonStyling}  style={{backgroundColor:  title == "Project" ? NavButtonStylingActive_BG : ''}}>
                    <Link href="/project"> Projects </Link>
                </h1>
                <h1 className={NavButtonStyling}  style={{backgroundColor:  title == "Contact" ? NavButtonStylingActive_BG : ''}}>
                    <Link href="/contact"> Contact </Link>
                </h1>
            </div>
        </>

    );
}
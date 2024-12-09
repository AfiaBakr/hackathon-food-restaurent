import react from "react";
import Image from "next/image";
import { MdKeyboardArrowRight } from "react-icons/md";
import StarterMenu from "../Components/OurMenu/StarterMenu";
import OverView from "../Components/OurMenu/OverView";
import DessertDrink from "../Components/OurMenu/DessetDrink";
import PartnerClient from "../Components/OurMenu/PartnerClient";


const Menu = () => {

    return(
        <main className="bg-white ">
            <header className="bg-cover bg-center h-52 flex flex-col text-center" style={{ backgroundImage: "url('/menu pic/headerpc.png')" }}>
                <h1 className="text-5xl font-bold text-white tracking-wide mt-16">Our Menu</h1>
                <div className="flex items-center justify-center text-[28px]">
                <h1 className="text-white">Home</h1><MdKeyboardArrowRight className="text-white"/><h1 className="text-[#ff9f0d]"><u> Menu</u></h1>
                </div>
            </header>
            <StarterMenu/>
            <OverView/>
            <DessertDrink/>
            <PartnerClient/>

        </main>
    )
};
export default Menu;
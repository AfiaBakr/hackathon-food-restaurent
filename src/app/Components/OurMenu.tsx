import react from "react";
import Image from "next/image";
import StarterMene from "../Components/StarterMenu";
import OverView from "../Components/OverView";
import DessertDrink from "../Components/DessetDrink"; 
import PartnerClient from "../Components/PartnerClient";


const OurMenu = ()=> {
    return(
        <main id="Menu">
            <title>Our Menu</title>
            <StarterMene/>           
            <OverView/>
            <DessertDrink/>
            <PartnerClient/>

           
        </main>
    )
};
export default OurMenu;
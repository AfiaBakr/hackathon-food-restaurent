import react from "react";
import Image from "next/image";
import StarterMenu from "../Components/OurMenu/StarterMenu";
import OverView from "../Components/OurMenu/OverView";
import DessertDrink from "../Components/OurMenu/DessetDrink"; 
import PartnerClient from "../Components/OurMenu/PartnerClient";


const OurMenu = ()=> {
    return(
        <main id="Menu">
            <title>Our Menu</title>
            <StarterMenu/>            
            <OverView/>
            <DessertDrink/>
            <PartnerClient/>

           
        </main>
    )
};
export default OurMenu;
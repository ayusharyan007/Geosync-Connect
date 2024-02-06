import React from "react";
import './landing.css';
import { Button } from "@/components/ui/button"

const Landingpage = ()=>{
    return(

        <section id="landing">
            <div className="line1">Welcome to the most secure <br /> <span className="line1_1">videochat</span> website.</div>
            <div className="line2">We're very concerned about your safe and <br />enjoyable journey on the internet</div>
            <Button variant="outline" className= "button" >Smash Me</Button>

        </section>
);
}
export default Landingpage;
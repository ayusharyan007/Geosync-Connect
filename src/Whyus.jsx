import React from 'react'
import './why.css'
import cards_1 from './cards-11.jpg'
import cards_2 from './cards_2.jpg'
import cards_3 from './cards-3.jpg'
import { FcVideoCall } from "react-icons/fc";
import { IoMdChatboxes } from "react-icons/io";
import { MdOutlineSecurity } from "react-icons/md";
import { Button } from "@/components/ui/button"
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
  } from "@/components/ui/resizable"
  
const Whyus = () => {
    return(
        <section id = 'Why'>
            <div className="heading"> Why Geosync Connect</div>
            <div className='cards'>
    <ResizablePanelGroup
      direction="vertical"
      className="min-h-[200px] max-w-md rounded-lg border"
    >
      <ResizablePanel defaultSize={75}>
        <div className="flex h-full items-center justify-center p-6">
        <img  className = 'cards-1' src = {cards_1} ></img>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
    <ResizablePanelGroup
      direction="vertical"
      className="min-h-[200px] max-w-md rounded-lg border"
    >
      <ResizablePanel defaultSize={75}>
        <div className="flex h-full items-center justify-center p-6">
        <img  className = 'cards-2'src = {cards_2} ></img>        </div>
      </ResizablePanel>
  
    </ResizablePanelGroup>

    <ResizablePanelGroup
      direction="vertical"
      className="min-h-[200px] max-w-md rounded-lg border"
    >
      <ResizablePanel defaultSize={75}>
        <div className="flex h-full items-center justify-center p-6">
        <img  className = 'cards-3'src = {cards_3} ></img>
        </div>
      </ResizablePanel>
      <ResizableHandle />
    </ResizablePanelGroup>
            </div>
            <div className="content">
              <p>Geosync Connect provides u with a chance to socially engage with new<br /> people without the expense of going out.
                It's the most secure website <br /> where u can explore and express yourself without worrying for your security <br />
                We provide multifactor authentication , adult content warning system ,<br /> face reognition login system and actively  
                keep watch on our ban sysytem<br /> so that no intruder can get past our security system to your life.
              </p>
              <div className="icons">
                <ul>
                  <li><FcVideoCall size ={25} color='green'/> <strong>Video Chat</strong> live with new people.</li>
                  <li><IoMdChatboxes size={25} color='green'/><strong>Text Chat</strong> with person you are on call with.</li>
                  <li><MdOutlineSecurity size ={25} color='green'/> <strong>High Security</strong> to express yourself freely.</li>
                </ul>
              </div>

            </div>
            <div className="footer">Checkout our chat rules</div>
            <Button variant="outline" className =" button1">Rules</Button>
  </section>
    );
}
export default Whyus;

import {
  Accordion,
  AccordionBody,
  AccordionHeader,
} from "@material-tailwind/react";

import { useState } from "react";

const FAQ = () => {
  const [open, setOpen] = useState(1);

  const handleOpen = (value) => setOpen(open == value? 0 : value);
  return (
    <div className="mt-36">
      <div className="wrapper">
        <h1 className="head_text mb-9 text-center">
          We've got <span className="green_text">answers</span>
        </h1> 

        <Accordion open = {open == 1} className="max-w-[860px] mx-auto">

          <AccordionHeader onClick={() => handleOpen(1)} className="text-dark-gray">
            Why to go with CabChase ? 

          </AccordionHeader>

          <Accordion>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
             Unde totam dolorum sequi voluptate magni atque non animi
              debitis reiciendis magnam.
          </Accordion>

        </Accordion>
        <Accordion open = {open == 1} className="max-w-[860px] mx-auto">

          <AccordionHeader onClick={() => handleOpen(1)} className="text-dark-gray">
            Why to go with CabChase ? 

          </AccordionHeader>

          <Accordion>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
             Unde totam dolorum sequi voluptate magni atque non animi
              debitis reiciendis magnam.
          </Accordion>

        </Accordion>
        <Accordion open = {open == 1} className="max-w-[860px] mx-auto">

          <AccordionHeader onClick={() => handleOpen(1)} className="text-dark-gray">
            Why to go with CabChase ? 

          </AccordionHeader>

          <Accordion>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
             Unde totam dolorum sequi voluptate magni atque non animi
              debitis reiciendis magnam.
          </Accordion>

        </Accordion>
        <Accordion open = {open == 1} className="max-w-[860px] mx-auto">

          <AccordionHeader onClick={() => handleOpen(1)} className="text-dark-gray">
            Why to go with CabChase ? 

          </AccordionHeader>

          <Accordion>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
             Unde totam dolorum sequi voluptate magni atque non animi
              debitis reiciendis magnam.
          </Accordion>

        </Accordion>
      </div>
    </div>
  )
};

export default FAQ;

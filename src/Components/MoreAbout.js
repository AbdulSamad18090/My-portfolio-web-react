import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function MoreAbout(props) {
  return (
    <div className="md:m-10 m-2">
      <Accordion className="my-2">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>EXPERIENCE</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <p>
              Hi,
              <br />
              Myself Abdul Samad and as a skilled web developer, I'm proficient
              in various programming languages, such as HTML, CSS, JavaScript,
              React.js, and Next.js. <br /> I have experience in creating
              dynamic, responsive, and user-friendly web pages. I have a deep
              understanding of web development concepts, such as web design,
              user experience, and web standards, and I am up-to-date with the
              latest trends and technologies in the field. <br />
              I'm detail-oriented and focused on creating high-quality,
              error-free code that performs well and is optimized for speed and
              accessibility. Overall, I'm a combination of technical skills,
              creativity, attention to detail, and the ability to work
              effectively in a team.
            </p>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion className="my-2">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>PROFESSIONAL SKILLS</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <ul>
              <span className="text-[#6254f3] font-bold">• Next.js</span> – Also
              Implemented File-based routing, Dynamic and Nested Routing, and
              much more.
            </ul>
            <ul>
              <span className="text-[#6254f3] font-bold">• React.js</span> –
              Also implemented MUI (Material UI), Dynamic Routing, Hooks, and
              Infinite Scroll.
            </ul>
            <ul>
              <span className="text-[#6254f3] font-bold">• Axios</span> –
              Implemented all CRUD operations.
            </ul>
            <ul>
              <span className="text-[#6254f3] font-bold">• Java-script</span> –
              Implemented Basic to Advance.
            </ul>
            <ul>
              <span className="text-[#6254f3] font-bold">• CSS 3</span> –
              Tailwind CSS – Bootstrap – Modern Designs
            </ul>
            <ul>
              <span className="text-[#6254f3] font-bold">• HTML5</span> –
              Implemented Basic to Advance.
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion className="my-2">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>EDUCATION</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <span className="font-bold ">2021 - PRESENT</span> <br />
            <span className="text-[#6254f3] font-bold">
              Bachelor of Science in Computer Science/SZABIST University,
              Islamabad.
            </span>{" "}
            Currently, I am studying in the 4th semester, but I started learning
            web development during the 1st semester under the guideline of my
            family IT background. Currently, my CGPA is 3.83, but most of my
            focus is to obtain technical as well as leadership skills according
            to my field. <br /> <br />
            <span className="font-bold ">2019 - 2021</span> <br />
            <span className="text-[#6254f3] font-bold">
              Intermediate in Computer Science/Fuji Foundation Collage,
              Rawalpindi.
            </span>{" "}
            I have completed my intermediate in computer science with a 90%
            score. In this era, I focused on my Object-Oriented-Programming
            skills in C++ as per my course. This really built my logic building.{" "}
            <br /> <br />
            <span className="font-bold ">2017 - 2019</span> <br />
            <span className="text-[#6254f3] font-bold">
              Matric in Computer Science/IQRA School, Rawalpindi.
            </span>{" "}
            I have completed a Matric major in Computer Science with an 86%
            score. After matric, I started my learning.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion className="my-2">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>OTHER SKILLS</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <ul className="text-[#6254f3] font-bold">• Teamwork</ul>
            <ul className="text-[#6254f3] font-bold">
              • Ability to work efficiently in a team
            </ul>
            <ul className="text-[#6254f3] font-bold">• Supportive</ul>
            <ul className="text-[#6254f3] font-bold">
              • I'm detail-oriented and focused on creating high-quality work.
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion className="my-2">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>CERTIFICATIOS</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <span className="font-bold ">2023 - PRESENT</span> <br />I have
            enrolled in the{" "}
            <span className="text-[#6254f3] font-bold">
              “Web 3 and Metaverse”
            </span>{" "}
            Course Offered by the government at Air University.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

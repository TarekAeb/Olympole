import Footer from "./components/Footer";
import Hero from "./components/Hero"
import Section from "./components/Section";
import footballImage from "./assets/football.jpg";
import handballImage from "./assets/handball.jpg";
import runningImage from "./assets/running.jpg";
import volleyballImage from "./assets/volleyball.jpg";
import basketballImage from "./assets/basketball.jpg";
import cleaningImage from "./assets/cleaning.jpg";
import drawingImage from "./assets/drawing.jpg";
import chessImage from "./assets/chess.jpg";
import knowledgeImage from "./assets/knowledge.jpg";
import mathImage from "./assets/math.jpg";
import FAQ from "./components/FAQ";

const sections: { title: string; text: string[]; readmore?: string; image: string; align: 'left' | 'right'; link: string }[] = [
  {
    title: "Football",
    text: ["Kick off the month with exciting matches!", "Join the game and score your goals."],
    readmore: "The teams consist of 5 members with 3 additional replacements (optional).",
    image: footballImage,
    align: "right",
    link: "https://docs.google.com/forms/d/e/1FAIpQLScHuw0iigGcRovptc-NoEh9Z8bb8QYSxkIEt9Ewbx4f70gPRg/viewform"
  },
  {
    title: "Handball",
    text: ["Join the handball fun and show your skills!"],
    readmore: "The teams consist of 7 members with 1 additional replacement (optional).",
    image: handballImage,
    align: "left",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSfFLxjb2QZyenwwXEiVQvg2nPjLKWMXoh4vRXgJ8_R8POx5kA/viewform"
  },
  {
    title: "The Racing",
    text: ["Step into your running shoes and be part of an unforgettable marathon experience."],
    readmore: "It's a one-day event, with 100m and 400m sprints.",
    image: runningImage,
    align: "right",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSctSD8hgg0RDaGrrZUYwdtJwQ-4rYwPRMnhNQvHhqDYEPJxzw/viewform"
  },
  {
    title: "Volleyball",
    text: ["Team up and enjoy thrilling matches!"],
    readmore: "The teams consist of 6 members with 1 additional replacement (optional).",
    image: volleyballImage,
    align: "left",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSepB0IGzakn5XNtXTjnxRDSA4ExESIbZH7dvPBp16DPUMJU6A/viewform"
  },
  {
    title: "Basketball",
    text: ["Dribble, shoot, and score! Join us for a basketball showdown!"],
    // readmore: "",
    image: basketballImage,
    align: "right",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSfY6G-Z5tFYzPRyF283MeCGQ0_E3ioUSNtQfCKyhvvl4oTzsw/viewform"
  },
  {
    title: "Clean-Up Campaign",
    text: ["Explore fun activities and express yourself!", "Join us for an exciting cleaning day for a greener tomorrow!"],
    // readmore: "",
    image: cleaningImage,
    align: "left",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSdlQA3CI29dNzdmmiq3IvYFqD5hm4498L69QzRfSyUqG6eENA/viewform"
  },
  {
    title: "Carpe Diem",
    text: ["No Rules, Just Art!", "Carpe Diem, the ultimate artistic experience at OlymPole!", "Qur'an Recitation, Drawing & Painting, Photography & Editing, and more..."],
    readmore: `Filmit: 
Teams of three will create a short film based on a theme revealed during the opening ceremony. Participants must collaborate to craft a compelling story within the given theme.  

Open Talent Competition: 
A one-day event open to anyone with a talent to showcase. Whether it's music, performance, or any unique skill, this is the perfect stage to shine.  

Paint It:
A one-day art competition where participants can express their creativity. Details will be revealed at the opening ceremony, so start warming up your artistic skills.  

Qur'an Recitation:  
Participants will recite assigned passages from the Qur’an using any qira’a of their choice. This competition highlights the beauty and mastery of Qur'anic recitation.  

Literature:
A one-day challenge to write a literary piece in poetry or prose (شِعر أو نَثر) in any chosen style, showcasing creativity and storytelling skills.`,
    image: drawingImage,
    align: "right",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSf_rPtOiCmPGXel67DuBdtsA9C6f5SAHw2OVrSmoi7OuqdNAA/viewform"
  },
  {
    title: "Mind Your Move",
    text: ["A strategic chess showdown where intelligence meets competition!"],
    readmore: `It is 3 days event each participing individually in which in The first two days we will filter the winners, who will all play against one mysterious chess master at the same time (Simultaneous Exhibition) on the last day.`,
    image: chessImage,
    align: "left",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSfxldc6MjDhFwA2tfyd1LcCzns5CP9DtJGTeeaM4c6TZFz9ag/viewform"
  },
  {
    title: "Knowledge Cup",
    text: ["A battle of brains at OlymPôle!", "Get ready for a mental showdown between schools and show us your problem-solving skills!"],
    readmore: `It's a 3-day event. Each team consists of 5 members, with one team per school in our Pole.
    (1 team will be directly placed in the finals).
    
    - Question types cover general and specific themes and areas.
    - Day 1: Each 2 teams compete against each other; 2 will advance to the next stage.
    - Day 2: The two winning teams will face each other to advance to the final stage.
    - Day 3: The winning team will face the one that was advanced to the final match to win the KNOWLEDGE CUP.`,
    image: knowledgeImage,
    align: "right",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSccZ9z92ES6m46pMs3QBKlzs5tuZvVCv_G412TEX0Xxve5Xyw/viewform"
  },
  {
    title: "To the Infinity!",
    text: ["Solve mind-bending math problems and showcase your logical and analytical genius!"],
    readmore: `Individual participation, 1-day event.
    - Olympiad of math-like problems that do not depend on your academic level as much as on your intelligence and mathematical thinking.`,
    image: mathImage,
    align: "left",
    link: "https://docs.google.com/forms/d/e/1FAIpQLScqHjvoOltJ6lu0LUr1aoZ905bHlLWcjTkydPIuXVRCyqgT_Q/viewform"
  }
];


function App() {
  return (
    <main className='w-screen flex flex-col  bg-gradient-to-r from-[#32C5F4] to-[#A3D390] text-[#2E368F] select-none'>
      <Hero />
      <section id="activities" className="flex flex-col items-center gap-8 w-screen py-5">
        {sections.map((section, index) => (
          <Section key={index} title={section.title} text={section.text} image={section.image} align={section.align} link={section.link} readmore={section.readmore} />
        ))}
      </section>
      <FAQ />
      <Footer />
    </main>
  )
}

export default App

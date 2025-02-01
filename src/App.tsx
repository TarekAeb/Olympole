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

const sections: { title: string; text: string[]; image: string; align: 'left' | 'right'; link: string }[] = [
  {
    title: "Football",
    text: ["Kick off the month with exciting matches!", "Join the game and score your goals"],
    image: footballImage,
    align: "right",
    link: "https://docs.google.com/forms/d/e/1FAIpQLScHuw0iigGcRovptc-NoEh9Z8bb8QYSxkIEt9Ewbx4f70gPRg/viewform"
  },
  {
    title: "Handball",
    text: ["Join the handball fun and show your skills!"],
    image: handballImage,
    align: 'left',
    link: "https://docs.google.com/forms/d/e/1FAIpQLSfFLxjb2QZyenwwXEiVQvg2nPjLKWMXoh4vRXgJ8_R8POx5kA/viewform"
  },
  {
    title: "The Racing & Dual Sprints",
    text: ["Step into you running shoes and be part of an unforgettable marathon experience"],
    image: runningImage,
    align: 'right',
    link: "https://docs.google.com/forms/d/e/1FAIpQLSctSD8hgg0RDaGrrZUYwdtJwQ-4rYwPRMnhNQvHhqDYEPJxzw/viewform"
  },
  {
    title: "Volleyball",
    text: ["Team up and enjoy thrilling matches!"],
    image: volleyballImage,
    align: 'left',
    link: "https://docs.google.com/forms/d/e/1FAIpQLSepB0IGzakn5XNtXTjnxRDSA4ExESIbZH7dvPBp16DPUMJU6A/viewform"
  },
  {
    title: "Basketball",
    text: ["Dribble, shoot, and score! Join us for a basketball showdown!"],
    image: basketballImage,
    align: 'right',
    link: "https://docs.google.com/forms/d/e/1FAIpQLSfY6G-Z5tFYzPRyF283MeCGQ0_E3ioUSNtQfCKyhvvl4oTzsw/viewform"
  },
  {
    title: "Clean-Up Campaign",
    text: ["Explore fun activities and express yourself! ", "Join us for an exciting cleaning day for a greener tomorrow !"],
    image: cleaningImage,
    align: 'left',
    link: "https://docs.google.com/forms/d/e/1FAIpQLSdlQA3CI29dNzdmmiq3IvYFqD5hm4498L69QzRfSyUqG6eENA/viewform"
  },
  {
    title: "Carpe Diem",
    text: ["No Rules, Just Art!", "Carpe Diem, the ultimate artistic experience at OlymPole!", "Qur'an Recitation, Drawing &Painting, Photography &Editing, and more ..."],
    image: drawingImage,
    align: 'right',
    link: "https://docs.google.com/forms/d/e/1FAIpQLSf_rPtOiCmPGXel67DuBdtsA9C6f5SAHw2OVrSmoi7OuqdNAA/viewform"
  },
  {
    title: "Mind Your Move",
    text: ["a strategic chess showdown where intelligence meets competition!"],
    image: chessImage,
    align: 'left',
    link: "https://docs.google.com/forms/d/e/1FAIpQLSfxldc6MjDhFwA2tfyd1LcCzns5CP9DtJGTeeaM4c6TZFz9ag/viewform"
  },
  {
    title: "Knowledge Cup",
    text: ["A battle of Brains at OlymPôle!", "Get ready for a mental showdown between schools! and show us your problem solving skills"],
    image: knowledgeImage,
    align: 'right',
    link: "https://docs.google.com/forms/d/e/1FAIpQLSccZ9z92ES6m46pMs3QBKlzs5tuZvVCv_G412TEX0Xxve5Xyw/viewform"
  },
  {
    title: "To the Infinity!",
    text: ["Solve mind-bending math problems and Showcase your logical and analytical genius"],
    image: mathImage,
    align: 'left',
    link: "https://docs.google.com/forms/d/e/1FAIpQLScqHjvoOltJ6lu0LUr1aoZ905bHlLWcjTkydPIuXVRCyqgT_Q/viewform"
  }
];

function App() {
  return (
    <main className='w-screen flex flex-col  bg-gradient-to-r from-[#32C5F4] to-[#A3D390] text-[#2E368F] select-none'>
      <Hero />
      <section id="activities" className="flex flex-col items-center gap-8 w-screen py-5">
        {sections.map((section, index) => (
          <Section key={index} title={section.title} text={section.text} image={section.image} align={section.align} link={section.link} />
        ))}
      </section>
      <FAQ />
      <Footer />
    </main>
  )
}

export default App

import Footer from "./components/Footer";
import Hero from "./components/Hero"
import Section from "./components/Section";

const sections: { title: string; text: string[]; image: string; align: 'left' | 'right'; link: string }[] = [
  {
    title: "Football",
    text: ["Kick off the month with exciting matches!", "Join the game and score your goals"],
    image: "src/assets/football.jpg",
    align: "right",
    link: "https://www.google.com"
  },
  {
    title: "Handball",
    text: ["Join the handball fun and show your skills!"],
    image: "src/assets/handball.jpg",
    align: 'left',
    link: "https://www.google.com"
  },
  {
    title: "The Marathon & Dual Sprints",
    text: ["Step into you running shoes and be part of an unforgettable marathon experience"],
    image: "src/assets/running.jpg",
    align: 'right',
    link: "https://www.google.com"
  },
  {
    title: "Volleyball",
    text: ["Team up and enjoy thrilling matches!"],
    image: "src/assets/volleyball.jpg",
    align: 'left',
    link: "https://www.google.com"
  },
  {
    title: "Clean-Up Campaign",
    text: ["Explore fun activities and express yourself! ", "Join us for an exciting cleaning day for a greener tomorrow !"],
    image: "src/assets/cleaning.jpg",
    align: 'right',
    link: "https://www.google.com"
  },
  {
    title: "Carpe Diem",
    text: ["No Rules, Just Art!", "Carpe Diem, the ultimate artistic experience at OlymPole!", "Qur'an Recitation, Drawing &Painting, Photography &Editing, and more ..."],
    image: "src/assets/drawing.jpg",
    align: 'left',
    link: "https://www.google.com"
  },
  {
    title: "Mind Your Move",
    text: ["a strategic chess showdown where intelligence meets competition!"],
    image: "src/assets/chess.jpg",
    align: 'right',
    link: "https://www.google.com"
  },
  {
    title: "Knowledge Cup",
    text: ["A battle of Brains at OlymPôle!", "Get ready for a mental showdown between schools! and show us your problem solving skills"],
    image: "src/assets/puzzle.jpg",
    align: 'left',
    link: "https://www.google.com"
  },
  {
    title: "To the Infinity!",
    text: ["Solve mind-bending math problems and Showcase your logical and analytical genius"],
    image: "src/assets/math.jpg",
    align: 'right',
    link: "https://www.google.com"
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
      <Footer />
    </main>
  )
}

export default App

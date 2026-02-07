import './App.css';
import Carousel from './Carrusel';
import flower from './media/flower_1.jpg';
import flower2 from './media/flower_3.jpg';
import LinkedIn from './media/linkedin.png'; 
import Inst from './media/instagram.png';
import Git from './media/github.png';
import BKG from './media/background_end.jpg';
  
function App() {
  return (
    <>
      <div style={{ marginBottom: '70px' }}>
        <h1>Daniel Beltrán´s Portfolio</h1>
        <img 
          src={flower} 
          alt="Flor" 
          style={{ 
            width: '300px',
            display: 'block', 
            margin: '0 auto' 
          }}
        />
        <h3> Software Developer Associate 💻 | Social Worker 🫂 | Software Engineer in training 🪴</h3>
        <h4> English | Spanish 🌟 Bogota | Colombia </h4>
      </div>
      
      <div style={{ display: "flex", gap: "70px", marginBottom: '90px' }}>
        <p>About_me:</p>
        <div style={{ width: "5px", height: "80px", backgroundColor: "#7c09e7" }} />
        <p>
          A Software Developer Associate with expertise in the elicitation of requirements, design, coding and 
          debugging of digital solutions for non-governmental organizations. With Knowledge on Software Architecture, 
          Javascript, React, Node.js, PostgreSQL and MySQL. 
        </p>
      </div>
      
      <div>
        <img 
          src={flower2} 
          alt="Flor" 
          style={{ 
            width: '300px',
            display: 'block', 
            margin: '0 auto' 
          }}
        />
      </div>      
      
      <div>
        <h2>Projects I´m working on:</h2>
        <Carousel />
        <h3>Mi Vivero</h3>
        <p>
          Mi Vivero is a managing inventory tool designed specifically for 
          small farmers that want to have an organized inventory system of 
          small ornamental plants. Created from the work and stories with 
          farmers of Sibate, Colombia, this project combines a framework on 
          React Typescript, Node.js, and a MySQL database. It´s perfect for 
          low connection areas, enterprises with little computing knowledge
          and tools, and a desire to optimize their products and materials 
          to the next level.
          
          Currently in the phase of evaluation. 
        </p>
        <a href="https://proyecto-adso-posm.onrender.com/" target="_blank" rel="noopener noreferrer">
            <button>See project</button>
        </a>
        <a href="https://github.com/Mael22Jimenez/Proyecto-ADSO-POSM" target="_blank" rel="noopener noreferrer">
            <button>See code on GitHub</button>
        </a> 
      </div>
      
      <h2>Reach me in my socials</h2>

      <div style={{ display: "flex", gap: "70px", marginBottom: '50px', alignItems: "center" }}>
        <a href="https://www.linkedin.com/in/dabeltranq" target="_blank" rel="noopener noreferrer">
          <img 
            src={LinkedIn} 
            alt="LinkedIn" 
            style={{ 
              width: '70px',
              display: 'block', 
              margin: '0 auto',
              cursor: 'pointer' // cambia el cursor al pasar sobre la imagen
            }}
          />
        </a>

        <a href="https://www.instagram.com/comuniratio/" target="_blank" rel="noopener noreferrer">
          <img 
            src={Inst} 
            alt="Instagram" 
            style={{ 
              width: '70px',
              display: 'block', 
              margin: '0 auto',
              cursor: 'pointer'
            }}
          />
        </a>
        <a href="https://github.com/dabeltranq" target="_blank" rel="noopener noreferrer">
          <img 
            src={Git} 
            alt="GitHub" 
            style={{ 
              width: '70px',
              display: 'block', 
              margin: '0 auto',
              cursor: 'pointer'
            }}
          />
        </a>
      </div>

      <div style={{
          width: '100vw',
          marginLeft: 'calc(-50vw + 50%)',
          marginTop: '50px'
        }}>
          <img 
            src={BKG} 
            alt="Background" 
            style={{ 
              width: '100%',
              display: 'block'
            }}
          />
      </div>
    </>
  )
}

export default App

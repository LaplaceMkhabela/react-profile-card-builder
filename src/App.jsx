import './App.css'
import alicePic from './assets/alice.jpg'
import aliceWebp from './assets/alice.webp'
import bobPic from './assets/bob.jpg'
import bobWebp from './assets/bob.webp'
import johnPic from './assets/john.jpg'
import johnWebp from './assets/john.webp'
import { Userprofile } from './UserProfile';

function App() {
  const user1 = {
  name: "Alice Johnson",
  job: "Senior Frontend Developer",
  bio: "Passionate about building accessible and performant web applications. 5+ years of experience with React, TypeScript, and modern CSS frameworks."
};

const user2 = {
  name: "Bob Smith",
  job: "Product Designer",
  bio: "Focused on creating intuitive user experiences and design systems. Skilled in Figma, user research, and interaction design."
};

const user3 = {
  name: "John Williams",
  job: "Backend Engineer",
  bio: "Specializes in building scalable microservices and distributed systems. Proficient in Node.js, Python, and cloud infrastructure."
};

const pic1 = {
  image: alicePic,
  webp: aliceWebp,
  alt: "Alice Johnson"
}

const pic2 = {
  image: bobPic,
  webp: bobWebp,
  alt: "Bob Smith"
}

const pic3 = {
  image: johnPic,
  webp: johnWebp,
  alt: "John Williams"
}

  return (
    <>
       <Userprofile image={pic1}  profile={user1}/>
       <Userprofile image={pic2}  profile={user2}/>
       <Userprofile image={pic3}  profile={user3}/>
    </>
  )
}

export default App

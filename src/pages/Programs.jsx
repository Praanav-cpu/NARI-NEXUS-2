import { Award, Lightbulb, Users, Sparkles, Calendar, BookOpen, Target, Globe } from 'lucide-react'
import SectionTitle from '../components/SectionTitle'
import Button from '../components/Button'
import Card from '../components/Card'
import TestimonialCard from '../components/TestimonialCard'
import GeometricBackground from '../components/GeometricBackground'
import GeometricBackground2 from '../components/GeometricBackground2'
import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import { SiX } from 'react-icons/si'; // X icon


const Programs = () => {
  return (
    <div  >
      {/* Hero Section */}
      <section className="relative  overflow-hidden">
        <GeometricBackground className="opacity-30" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
          <SectionTitle title="Our Programs" centered={true} />
            <p className="text-xl text-gray-300 mb-8">
              Comprehensive initiatives designed to empower women at every stage of their personal and professional journey.
            </p>
          </div>
        </div>

        {/* Leadership Programs */}

        <div className="container mx-auto px-4 text-center">

  <GeometricBackground2 className="opacity-40" />
    <SectionTitle 
      title="Hack4Maha KickOff Session" 
      subtitle="Building Tomorrow's Leaders"
      titleGradient="from-pink-500 to-purple-600"
    />
    
    <p className="text-gray-300 max-w-2xl mx-auto mt-6 mb-12">
      Our programs empower women to become confident, inclusive, and visionary leaders through mentorship, hands-on training, and strategic development.
    </p>

    <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-28">
      {/* Left Image */}
      <div className="flex flex-col items-center">
      <img 
        src="/img/Swati.jpeg" 
        alt="Leader" 
    className="w-56 h-56 rounded-full object-cover border-4 border-purple-600 shadow-lg"
      />

<h3 className="text-white text-xl font-semibold mt-4">Swati Awasthi</h3>
<p className="text-gray-300 text-sm">Founder, Women in Product India</p>

      <div className="flex gap-4 mt-4">
        <a href=" https://www.instagram.com/awasthiswati/" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="text-white text-2xl hover:opacity-75 transition-opacity" />
        </a>
        <a href="https://www.linkedin.com/in/swati-awasthi" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-white text-2xl hover:opacity-75 transition-opacity" />
        </a>
        <a href="https://x.com/swatiawasthi08" target="_blank" rel="noopener noreferrer">
          <SiX className="text-white text-2xl hover:opacity-75 transition-opacity" />
        </a>
      </div>
    </div>
      {/* Paragraph Content */}
      <div className="text-gray-300 max-w-lg text-center">
        <p>
          Our leadership development initiatives focus on creating a supportive environment where women can learn from each other and gain the skills to lead effectively. These programs are designed to foster a community of strong, confident leaders who can excel in both personal and professional spheres.
        </p>
      </div>

      {/* Right Image */}
      <div className="flex flex-col items-center">
        <img 
          src="/img/Amrit.png" 
          alt="Leader 2" 
          className="w-56 h-56 rounded-full object-cover border-4 border-purple-600 shadow-lg"
        />
        <h3 className="text-white text-xl font-semibold mt-4">Amrit Raj</h3>
<p className="text-gray-300 text-sm">Cofounder- Sheleads technologies </p>

      <div className="flex gap-4 mt-4">
        <a href="https://www.instagram.com/amrit_rj/?hl=en" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="text-white text-2xl hover:opacity-75 transition-opacity" />
        </a>
        <a href="www.linkedin.com/in/amritraj02" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-white text-2xl hover:opacity-75 transition-opacity" />
        </a>
        {/* <a href="https://x.com/swatiawasthi08" target="_blank" rel="noopener noreferrer">
          <SiX className="text-white text-2xl hover:opacity-75 transition-opacity" />
        </a> */}
      </div>
    </div>
      
    </div>
  </div>
    {/* All Programs */}

    <div className="mt-26 relative">
  <SectionTitle title="Upcoming Events" centered={true} />
  <GeometricBackground2 className="opacity-30" />
  {/* First Row */}
  <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-8 mb-8">
    <div className="event-card bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden group hover:border-white/20 transition-all duration-300">
      <div className="h-48 bg-gradient-to-r from-pink-500 to-purple-600 relative">
        <div className="absolute inset-0 flex items-center justify-center">
        {/* <Lightbulb className="w-16 h-16 text-white event-icon" /> */}
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-black/50 backdrop-blur-sm p-3">
          <p className="text-sm font-medium">10th May - Hack4Maha KickOff Session</p>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">Get ready to ignite your innovation!</h3>
        <p className="text-gray-300 mb-4">
          Get ready for the Hack4Maha Kickoff Session on 10th May! 🚀
          Know the themes, guidelines, and start your journey towards innovation.
          Let’s gear up for an exciting hackathon ahead!
        </p>
      </div>
    </div>

    <div className="event-card bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden group hover:border-white/20 transition-all duration-300">
      <div className="h-48 bg-gradient-to-r from-purple-600 to-orange-500 relative">
        <div className="absolute inset-0 flex items-center justify-center">
        {/* <Users className="w-16 h-16 text-white event-icon" /> */}
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-black/50 backdrop-blur-sm p-3">
          <p className="text-sm font-medium">16th May - Pixel Art Drawing Contest</p>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">Dive into the world of creativity and color!</h3>
        <p className="text-gray-300 mb-4">
          Dive into the world of creativity with the Pixel Art Drawing Contest on 16th May! 🎨
          Bring your ideas to life, pixel by pixel, and show us your artistic flair.
        </p>
      </div>
    </div>

    <div className="event-card bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden group hover:border-white/20 transition-all duration-300">
      <div className="h-48 bg-gradient-to-r from-orange-500 to-pink-500 relative">
        <div className="absolute inset-0 flex items-center justify-center">
        {/* <Users className="w-16 h-16 text-white event-icon" />
         */}
         {/* <Users className="w-16 h-16 text-white event-icon" /> */}
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-black/50 backdrop-blur-sm p-3">
          <p className="text-sm font-medium">17th May - Idea to MVP Session</p>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">Join us on 17th May for the Idea to MVP Session! 🚀</h3>
        <p className="text-gray-300 mb-4">
          Learn how to transform raw ideas into working prototypes, and take your first step towards building real-world solutions.
        </p>
      </div>
    </div>
  </div>

  {/* Second Row */}
  <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-8">
    <div className="event-card bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden group hover:border-white/20 transition-all duration-300">
    <div className="h-48 bg-gradient-to-r from-orange-500 to-pink-500 relative">
        <div className="absolute inset-0 flex items-center justify-center">
          {/* <Calendar className="w-16 h-16 text-white event-icon" /> */}
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-black/50 backdrop-blur-sm p-3">
          <p className="text-sm font-medium">23rd May - Scribble Gaming Night
</p>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">Scribble Gaming Night</h3>
        <p className="text-gray-300 mb-4">
        Join us on 23rd May for a thrilling evening of fun and friendly competition at Scribble Gaming Night! Battle it out in exciting games, showcase your skills, and connect with fellow gaming enthusiasts. Don’t miss out on the fun! 
        </p>
      </div>
    </div>

    <div className="event-card bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden group hover:border-white/20 transition-all duration-300">
    <div className="h-48 bg-gradient-to-r from-orange-500 to-pink-500 relative">
        <div className="absolute inset-0 flex items-center justify-center">
          {/* <Lightbulb className="w-16 h-16 text-white event-icon" /> */}
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-black/50 backdrop-blur-sm p-3">
          <p className="text-sm font-medium">Hack4Brahma KickOff Session</p>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">Get ready to ignite your innovation!</h3>
        <p className="text-gray-300 mb-4">
        Get ready to kickstart your journey at Hack4Brahma on 24th May! Join us for an inspiring session to begin an exciting hackathon adventure. 
        </p>
      </div>
    </div>

   
  </div>
 

          

          
        </div>
      </section>
 
     
      <section>   
         

        {/* Testimonials   */}

         {/* <div className="container mx-auto px-4">
          <SectionTitle
            title="Testimonial"
            subtitle="Voices of Empowerment"
            centered={true}
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 testimonial-container">
            <div className="testimonial-item">
              <TestimonialCard
                quote="Nari-Nexus transformed my career trajectory. The leadership program gave me the confidence to pursue my goals and the network to make them happen."
                author="Priya Sharma"
                role="Tech Entrepreneur"
                image="/placeholder.svg?height=200&width=200"
              />
            </div>

            <div className="testimonial-item">
              <TestimonialCard
                quote="The mentorship I received through Nari-Nexus was invaluable. My mentor helped me navigate challenges and seize opportunities I never thought possible."
                author="Aisha Johnson"
                role="Software Engineer"
                image="/placeholder.svg?height=200&width=200"
              />
            </div>

            <div className="testimonial-item">
              <TestimonialCard
                quote="From a small idea to a thriving business, Nari-Nexus supported me every step of the way with resources, connections, and encouragement."
                author="Maya Patel"
                role="Founder & CEO"
                image="/placeholder.svg?height=200&width=200"
              />
            </div>
          </div>
        </div> */}
      </section>  

       
    </div>
  )
}

export default Programs

import { Award, Sparkles, Lightbulb } from "lucide-react";
import SectionTitle from "../components/SectionTitle";
import GeometricBackground from "../components/GeometricBackground";
import GeometricBackground3 from "../components/GeometricBackground3";
import Card from "../components/Card";

const About = () => {
  return (
    <div>
      {/* Hero & About Section */}
      <section id="about" className="relative overflow-hidden">
        <GeometricBackground3 className="opacity-40" />

        <div
          className="container mx-auto px-4 relative z-10"
          style={{ fontFamily: '"Playfair Display", serif' }}
        >
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-600 to-orange-500">
              About NariNexus
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              We’re not waiting for doors to open — we’re building our own.
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle
                title="Our Story"
                titleGradient="from-pink-500 to-purple-600"
                className="ml-4 md:ml-18"
              />

              <p className="text-gray-300 mb-6 transform translate-x-4 md:translate-x-18">
                NariNexus is a vibrant community initiative dedicated to
                empowering women in technology and related fields. We provide a
                dynamic platform for women to connect, learn, and lead through a
                variety of events, including hackathons, webinars, seminars, and
                mentorship programs across India.
              </p>

              <p className="text-gray-300 mb-6 transform translate-x-4 md:translate-x-18">
                Women remain underrepresented in key sectors like tech, gaming,
                and sports. They hold only 26.7% of tech jobs globally, just 5%
                of professional esports roles, and 13% of top positions in
                cricket. NariNexus is working to close this gap by creating
                inclusive spaces for mentorship, learning, and growth.
              </p>

              <p className="text-gray-300 transform translate-x-4 md:translate-x-18">
                NariNexus is for aspiring and established women in tech, gaming,
                and sports who seek growth and visibility. Whether you're looking
                to upskill, connect, or create impact — NariNexus is your
                platform to thrive in fields traditionally led by men.
              </p>
            </div>

            <div className="relative">
              <div className="aspect-square max-w-md mx-auto bg-gradient-to-br from-pink-500 via-purple-600 to-orange-500 rounded-2xl p-1">
                <div className="w-full h-full bg-black rounded-xl overflow-hidden">
                  <img
                    src="img/grp.jpg"
                    alt="Nari-Nexus founding members"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              {/* Decorative background elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-purple-600/30 rounded-xl rotate-12"></div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-orange-500/30 rounded-xl -rotate-12"></div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Provide Section */}
      <section className="py-20 relative bg-gradient-to-b from-black to-purple-900/20 min-h-[300px] opacity-100">
      <GeometricBackground className="opacity-30 pointer-events-none absolute inset-0 z-0" />

        <div className="container mx-auto px-4 relative z-10">
          <div style={{ marginTop: "-20px" }}>
            <SectionTitle title="What We Provide ?" centered={true} />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
            <div className="program-card">
              <Card
                title="Leadership Development"
                description="Training programs to build leadership and confidence in women."
                icon={Award}
                gradient="from-pink-500 to-purple-600"
              />
            </div>
            <div className="program-card">
              <Card
                title="Entrepreneurship"
                description="Resources, mentorship, and funding opportunities for women entrepreneurs to launch and scale their businesses."
                icon={Sparkles}
                gradient="from-purple-600 to-orange-500"
              />
            </div>
            <div className="program-card">
              <Card
                title="Tech Skills Training"
                description="Hands-on workshops and courses in coding, digital marketing, and other in-demand tech skills."
                icon={Lightbulb}
                gradient="from-orange-500 to-pink-500"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

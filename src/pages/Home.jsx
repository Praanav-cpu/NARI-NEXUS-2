import { useState, useEffect } from "react";
import {
  ArrowRight,
  Users,
  Lightbulb,
  Award,
  Sparkles,
  Calendar,
  BookOpen,
} from "lucide-react";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import BgBox from "../components/BgBox";
import Button from "../components/Button";
import SectionTitle from "../components/SectionTitle";
import Card from "../components/Card";
import TestimonialCard from "../components/TestimonialCard";
import Footer from "../components/Footer";
import GeometricBackground from "../components/GeometricBackground";
import GeometricBackground2 from "../components/GeometricBackground2";
import GeometricBackground3 from "../components/GeometricBackground3";
import HeroHeading from "../components/HeroHeading";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// ✅ Add this function
const initAnimations = () => {
  gsap.from(".scroll-fade", {
    scrollTrigger: {
      trigger: ".scroll-fade",
      start: "top 80%",
      toggleActions: "play none none none",
    },
    opacity: 0,
    y: 50,
    duration: 1,
    ease: "power2.out",
  });
};

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    initAnimations();

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <GeometricBackground className="opacity-50" />
        <div className="container mx-auto px-4 py-32 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div
              className={`transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ fontFamily: '"Playfair Display", serif' }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 transform translate-x-4 md:translate-x-18 transition-all duration-500">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-600 to-orange-500">
                  Empowering Women,
                </span>
                <br />
                Inspiring Futures
              </h1>

              <HeroHeading />

              <p
                className="text-xl text-gray-300 mb-8 transform translate-x-4 md:translate-x-18 transition-all duration-500"
                style={{ fontFamily: '"Roboto", sans-serif' }}
              >
                संयोगे शक्तिः, नवोन्नतेः मार्गः
                <br />
                <br />
              </p>

              <div
                className="flex flex-wrap gap-4 transform translate-x-4 md:translate-x-18 transition-all duration-500"
                style={{ fontFamily: '"Roboto", sans-serif' }}
              >
                <Button href="#programs" size="lg">
                  Explore Programs
                </Button>
              </div>
            </div>

            <div
              className={`relative transition-all duration-1000 delay-300 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <div className="relative w-full aspect-square max-w-md mx-auto">
                <div
                  className="absolute inset-0 rounded-full blur-xl opacity-80 z-0"
                  style={{
                    background:
                      "conic-gradient(from 0deg, #ec4899, #a855f7, #f97316, #ec4899)",
                    animation: "spinGradient 10s linear infinite",
                  }}
                />
                <div className="absolute inset-4 rounded-full bg-white flex items-center justify-center z-10 shadow-2xl">
                  <img
                    src="/img/logo.png"
                    alt="Centered Logo"
                    className="object-contain rounded-full w-3/4 h-3/4"
                  />
                </div>

                <style>
                  {`
                    @keyframes spinGradient {
                      0% { transform: rotate(0deg); }
                      100% { transform: rotate(360deg); }
                    }
                  `}
                </style>
              </div>
            </div>
          </div>
        </div>
      </section>

 
      
    </div>
  );
};

export default Home;

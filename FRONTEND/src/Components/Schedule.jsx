import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { gsap } from "gsap";

// 🎯 Simplified data structure
const schedule = {
  "Day 1": [
    { time: "9:00 AM", title: "🎤 Inauguration", description: "Opening ceremony by guests and lighting the lamp." },
    { time: "10:30 AM", title: "💡 Idea Pitch", description: "Teams present startup ideas to panel." },
    { time: "12:00 PM", title: "⚔️ Code Clash", description: "Coding challenge for problem-solvers." },
    { time: "2:00 PM", title: "🎮 Game Arena", description: "LAN gaming session: CS & Valorant." },
    { time: "4:00 PM", title: "🎭 Talent Show", description: "Students showcase non-tech skills." }
  ],
  "Day 2": [
    { time: "10:00 AM", title: "🧠 Tech Quiz", description: "Challenging minds with tech questions." },
    { time: "11:30 AM", title: "🔍 Debugging War", description: "Fastest bug-fixers battle." },
    { time: "1:00 PM", title: "🚀 Project Expo", description: "Students showcase their tech innovations." },
    { time: "3:00 PM", title: "🎨 UI/UX Challenge", description: "Design challenge for creatives." },
    { time: "5:00 PM", title: "🏆 Award Ceremony", description: "Closing ceremony & prize distribution." }
  ]
};

export default function Schedule() {
  const [activeDay, setActiveDay] = useState("Day 1");
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [countdown, setCountdown] = useState("");

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    gsap.fromTo(
      ".timeline-line",
      { height: 0 },
      {
        height: "100%",
        duration: 2,
        ease: "power2.inOut",
        delay: 0.2,
      }
    );

    const firstEventTime = schedule[activeDay][0].time;
    const today = new Date();
    const eventDate = new Date(today.toDateString() + " " + firstEventTime);
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = eventDate.getTime() - now;
      if (distance < 0) return setCountdown("🚀 Started");

      const hrs = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const secs = Math.floor((distance % (1000 * 60)) / 1000);
      setCountdown(`${hrs}h ${mins}m ${secs}s`);
    }, 1000);
    return () => clearInterval(interval);
  }, [activeDay]);

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-black via-[#111] to-black text-white py-24 px-4 overflow-hidden">
      {/* Particle glow */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {Array.from({ length: 40 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-pink-500 rounded-full opacity-30 animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 3 + 2}s`,
              filter: "blur(2px)",
            }}
          />
        ))}
      </div>

      {/* Cursor */}
      <style>{`
        * { cursor: url('https://cur.cursors-4u.net/symbols/sym-7/sym696.ani'), auto !important; }
      `}</style>

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl md:text-5xl font-extrabold text-center mb-12 drop-shadow-[0_0_20px_rgba(255,51,204,0.8)]"
      >
        🌟 Crossroad Fest Timeline
      </motion.h1>

      {/* Day Selector */}
      <div className="flex justify-center gap-4 mb-6 flex-wrap">
        {Object.keys(schedule).map((day) => (
          <button
            key={day}
            onClick={() => {
              setActiveDay(day);
              setExpandedIndex(null);
            }}
            className={`px-6 py-2 text-lg font-semibold rounded-full transition-all duration-300 ${
              activeDay === day
                ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white scale-105 shadow-lg shadow-pink-400"
                : "bg-white text-purple-800 hover:bg-purple-100"
            }`}
          >
            {day}
          </button>
        ))}
      </div>

      {/* Countdown Timer */}
      <div className="text-center text-pink-400 text-lg font-medium mb-10 animate-pulse">
        ⏰ First Event Countdown: {countdown}
      </div>

      {/* Timeline */}
      <div className="relative max-w-6xl mx-auto z-0">
        <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-1 bg-gradient-to-b from-pink-400 to-purple-600 timeline-line" />

        <AnimatePresence mode="wait">
          <motion.div
            key={activeDay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {schedule[activeDay].map((event, index) => (
              <motion.div
                key={index}
                data-aos="fade-up"
                className={`relative z-0 mb-20 flex flex-col sm:flex-row ${
                  index % 2 === 0 ? "sm:flex-row-reverse" : ""
                }`}
              >
                <div className="absolute left-1/2 -translate-x-1/2 w-6 h-6 rounded-full z-0 border-4 border-white bg-gradient-to-br from-purple-600 to-pink-500 animate-pulse shadow-[0_0_20px_rgba(255,105,180,0.8)]" />

                <div
                  onClick={() => setExpandedIndex(index === expandedIndex ? null : index)}
                  className={`cursor-pointer w-full sm:w-1/2 px-6 py-6 mt-3 rounded-2xl border border-purple-400 bg-white/10 backdrop-blur-xl shadow-xl hover:scale-105 hover:border-pink-400 hover:shadow-pink-500 transition-transform duration-300 ${
                    index % 2 === 0 ? "sm:ml-auto" : "sm:mr-auto"
                  }`}
                >
                  <div className="flex items-center gap-2 mb-2 text-sm text-purple-300">
                    <span className="px-3 py-1 bg-purple-900 text-pink-300 rounded-full font-semibold shadow-inner animate-pulse">
                      {event.time}
                    </span>
                    <span className="text-pink-400 font-medium">{activeDay}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-1">{event.title}</h3>
                  {expandedIndex === index && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      transition={{ duration: 0.3 }}
                      className="text-purple-100 leading-relaxed mt-2"
                    >
                      {event.description}
                    </motion.p>
                  )}
                  <p className="text-sm text-pink-300 mt-2">
                    {expandedIndex === index ? "Tap to collapse ↑" : "Tap to expand ↓"}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

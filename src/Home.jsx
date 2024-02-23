import { useEffect, useState } from "react";
import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Price from "./components/Price";
import Roadmap from "./components/Roadmap";
import Security from "./components/Security";
import Seen from "./components/Seen";
import Shibainu from "./components/Shibainu";
import Smart from "./components/Smart";
import Tokenmonic from "./components/Tokenmonic";

import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
  const [language, setLanguage] = useState(localStorage.getItem('selectedLanguage') || 'en');

  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      // once: true,
      // offset: 50,
      delay: 300,
      duration: 800
    });
  }, []);
  useEffect(() => {
    AOS.refresh();
  }, []);

  return (
    <div className="page-wrapper">
      <div className="video">
        <div
          data-poster-url="videos/clair-bg-video-poster-00001.jpg"
          data-video-urls="videos/clair-bg-video-transcode.mp4,videos/clair-bg-video-transcode.webm"
          data-autoplay="true"
          data-loop="false"
          data-wf-ignore="true"
          className="main-background-video w-background-video w-background-video-atom"
        >
          <video
            id="9a4f6ca0-5ed5-6e89-1a9d-be8834aeb7ab-video"
            autoPlay
            style={{
              backgroundImage: 'url("videos/clair-bg-video-poster-00001.jpg")',
            }}
            muted
            playsInline
            data-wf-ignore="true"
            data-object-fit="cover"
          >
            <source
              src="videos/clair-bg-video-transcode.mp4"
              data-wf-ignore="true"
            />
            <source
              src="videos/clair-bg-video-transcode.webm"
              data-wf-ignore="true"
            />
          </video>
        </div>
        <div className="video-overlay" />
      </div>
      <Header setLanguage={setLanguage} language={language} />
      <main>
        <Hero language={language} />
        <Price language={language} />
        <Seen language={language} />
        <About language={language} />
        <Tokenmonic language={language} />
        <Security language={language} />
        <Smart language={language} />
        <Roadmap language={language} />
        <Shibainu language={language} />
      </main>
      <Footer language={language} />
    </div>
  );
};

export default Home;

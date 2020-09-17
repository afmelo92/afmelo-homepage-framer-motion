import React from 'react';
import { motion, useTransform, useViewportScroll } from 'framer-motion';
import { FaNodeJs, FaReact, FaAws, FaGithub, FaLinkedin } from 'react-icons/fa';
import profileImg from '../../assets/profile.jpg';

import { Sticky } from '../../styles';

const FirstAndSecond: React.FC = () => {
  const { scrollYProgress } = useViewportScroll();

  const frameOpacity = useTransform(scrollYProgress, [0.196, 0.198], [0, 1]);
  const frameScale = useTransform(
    scrollYProgress,
    [0.558, 0.627],
    [0.511, 0.8],
  );
  return (
    <Sticky className="second">
      <First />
      <motion.div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '100vh',
          border: '5px solid #fff',
          borderRadius: '10px',
          opacity: frameOpacity,
          scale: frameScale,
        }}
      />
    </Sticky>
  );
};

const First: React.FC = () => {
  const { scrollYProgress } = useViewportScroll();
  const firstScale = useTransform(
    scrollYProgress,
    [0.198, 0.264, 0.558, 0.627],
    [1, 0.511, 0.511, 1],
  );
  const firstRadius = useTransform(
    scrollYProgress,
    [0.198, 0.264, 0.558, 0.627],
    [0, 4, 4, 0],
  );
  const leftSideHeight = useTransform(
    scrollYProgress,
    [0, 0.058],
    ['20vh', '100vh'],
  );

  const rightSideY = useTransform(
    scrollYProgress,
    [0.047, 0.093],
    ['58vh', '0vh'],
  );

  const rightSideScale = useTransform(
    scrollYProgress,
    [0.047, 0.093],
    [0, 0.511],
  );

  const offsetY = useTransform(
    scrollYProgress,
    [0.328, 0.397, 0.461, 0.53],
    ['0%', '-100%', '-100%', '-200%'],
  );

  return (
    <Sticky
      className="first"
      style={{ scale: firstScale, borderRadius: firstRadius }}
    >
      <motion.div className="offset" style={{ y: offsetY }}>
        <div className="a">
          <motion.div
            className="left-side"
            style={{
              height: leftSideHeight,
            }}
          >
            <div className="first-banner">
              <div className="first-banner-text">
                <h1 className="points">***</h1>
                <h1>BORA CODAR!</h1>
                <motion.button
                  animate={{ rotate: 360 }}
                  whileHover={{ scale: 2 }}
                  className="first-banner-button"
                >
                  Fale comigo!
                </motion.button>
              </div>
            </div>

            <div className="whoami">
              <div className="text-box">
                <h1>WHO AM I</h1>
                <p>
                  Desde sempre aficcionado por tecnologia, após uma jornada
                  entre a vida de estudante e empresário, dediquei-me ao
                  primeiro amor: a programação.
                </p>
              </div>
            </div>
          </motion.div>

          <div className="right-side">
            <motion.div
              className="right-image"
              style={{ y: rightSideY, scale: rightSideScale }}
            >
              <img src={profileImg} alt="me" />
            </motion.div>
          </div>
        </div>
        <div className="techs-section">
          <h1>Tecnologias que estudo</h1>
          <div className="techs-row">
            <div className="tech-box">
              <FaNodeJs size={150} color="#fff" />
            </div>
            <div className="tech-box">
              <FaReact size={150} color="#fff" />
            </div>
            <div className="tech-box">
              <FaAws size={150} color="#fff" />
            </div>
          </div>
        </div>
        <div className="social-section">
          <h1>Mídias sociais</h1>
          <div className="social-row">
            <motion.a href="https://github.com/afmelo92">
              <div className="social-box">
                <FaGithub size={150} color="#fff" />
              </div>
            </motion.a>
            <a href="https://linkedin.com/in/afdmelo">
              <div className="social-box">
                <FaLinkedin size={150} color="#fff" />
              </div>
            </a>
          </div>
        </div>
      </motion.div>
    </Sticky>
  );
};

export default FirstAndSecond;

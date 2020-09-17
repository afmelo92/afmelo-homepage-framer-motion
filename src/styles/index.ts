import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Main = styled.main`
  .first {
    background: red;
    overflow: hidden;

    .offset {
      width: 100%;
      height: 100%;
    }

    .a {
      background: #121214;
      height: 100%;
      display: flex;
      align-items: flex-end;

      .left-side {
        background: #00cc00;
        width: 50%;
        height: 100%;
        display: flex;
        flex-direction: column;

        .first-banner {
          .points {
            color: #f50057;
          }
          .first-banner-text {
            display: flex;

            margin-top: -500px;
            margin-left: 150px;
            font-size: 150px;
            color: #fff;

            .first-banner-button {
              border: 0;
              background: #00cc00;
              height: 150px;
              width: 200px;
              font-weight: bold;
              font-size: 30px;
              color: #fff;
              padding: 0 30px;
              margin: 150px 0 0 40px;
            }
          }
        }

        .whoami {
          height: 100%;

          .text-box {
            width: 80%;
            margin: 180px auto;

            h1 {
              font-size: 120px;
              font-weight: bold;
              color: #f50057;
            }

            p {
              font-size: 60px;
              font-weight: 100;
            }
          }
        }
      }

      .right-side {
        width: 50%;
        height: 100%;

        .right-image {
          width: 100%;
          height: 100%;

          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
      }
    }

    .techs-section {
      background: #00cc00;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-evenly;

      h1 {
        font-size: 100px;
        font-weight: bold;
        color: #fff;
      }

      .techs-row {
        display: flex;

        .tech-box {
          background: #f50057;
          padding: 40px;
          border-radius: 20px;
          box-shadow: 5px 10px #fff;

          :nth-child(2) {
            margin: 0 20px 0 20px;
          }
        }
      }
    }

    .social-section {
      background: #121214;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-evenly;

      h1 {
        font-size: 100px;
        font-weight: bold;
        color: #fff;
      }

      .social-row {
        display: flex;

        .social-box {
          background: #f50057;
          padding: 40px;
          border-radius: 20px;
          box-shadow: 5px 10px #fff;

          :nth-child(1) {
            margin: 0 20px 0 20px;
          }
        }
      }
    }
  }

  .second {
    background: #202024;
  }

  .third {
    background: #f50057;
  }

  .fourth {
    background: #00cc00;
  }
`;

export const Section = styled.section`
  position: relative;
`;

export const Sticky = styled(motion.div)`
  height: 100vh;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
`;

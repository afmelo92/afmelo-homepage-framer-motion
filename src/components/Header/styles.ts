import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Container = styled(motion.header)`
  width: 100%;
  height: 150px;

  position: fixed;
  top: 0;
  z-index: 9999;

  nav {
    height: 100%;
    display: flex;
    align-items: center;
    background: #202024;

    div.nav-items {
      width: 100%;
      max-height: 80px;
      max-width: 1200px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;

      .logo {
        display: flex;
        align-items: center;

        img {
          width: 80px;
          height: 80px;
        }

        h1 {
          color: #fff;
          font-size: 50px;
          font-weight: bold;
          margin-left: -40px;
        }
      }

      .nav-link-row {
        display: flex;
        align-items: center;

        a {
          text-decoration: none;
          color: #fff;
          font-weight: bold;
          font-size: 20px;
          margin-left: 10px;
        }

        button {
          border: none;
          background: #00cc00;
          color: #fff;
          font-weight: bold;
          font-size: 20px;
          padding: 10px 20px;
          margin-left: 30px;

          :hover {
            border-left: 5px solid #f50057;
            border-bottom: 5px solid #f50057;
          }
        }
      }
    }
  }
`;

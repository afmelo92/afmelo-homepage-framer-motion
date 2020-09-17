/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
// eslint-disable-next-line no-use-before-define
import React, { useEffect } from 'react';
import FirstAndSecond from './components/FirstAndSecond';
import Header from './components/Header';
import { Main, Section, Sticky } from './styles';
import GlobalStyle from './styles/global';

function App() {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <>
      <GlobalStyle />

      <Header />
      <Main style={{ height: '1610vh' }}>
        <Section style={{ height: '72.7%' }}>
          <FirstAndSecond />
        </Section>

        <Section style={{ height: '9.7%' }}>
          <Sticky className="third" />
        </Section>

        <Section style={{ height: '10.1%' }}>
          <Sticky className="fourth" />
        </Section>
      </Main>
    </>
  );
}

export default App;

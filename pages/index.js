import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';

import { T } from '../components';
import { HELLOWORLD } from '../constants';
import Image from '../components/Image';

const IndexPage = () => {
  return (
    <Main>
      <Head>
        <title>BMS Rent</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
      </Head>
      <T id="title"></T>
      <T id="uitleg"></T>
      <Image id="1"></Image>
    </Main>
  );
};

const Main = styled.main`
  padding: 3rem;
  background: var(--dark);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    color: var(--focus);
  }
`;

export default IndexPage;

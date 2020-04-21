import React, { useContext, useState } from 'react';
import Head from 'next/head';
import { PictureContext } from './_app';

import styled from 'styled-components';

import { T } from '../components';
import Image from '../components/Image';

const IndexPage = () => {
  const pics = useContext(PictureContext).map((x) => x.id);
  const [picId, setPicId] = useState(0);

  const nextPic = () => {
    setPicId((picId + 1) % pics.length);
  };
  console.log(picId);
  return (
    <Main onClick={nextPic} id={picId}>
      <Head>
        <title>BMS Rent</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
      </Head>
      <T id="title"></T>
      <T id="uitleg"></T>
      <Image id={pics[picId]}></Image>
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

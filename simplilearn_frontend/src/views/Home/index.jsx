/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/no-did-update-set-state */
/* eslint-disable no-shadow */
import React from 'react';
import Header from 'components/Layout/Header';
import {
  Row,
} from 'antd';

const Home = () => (
  <>
    <Header />
    <Row type="flex" justify="center">
      logged in
    </Row>
  </>
);


export default Home;

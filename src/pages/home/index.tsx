import React from 'react';
import logo from './images/logo.svg';
import './home.css';
import { Counter } from '@features/counter';

export const Home: React.FC = () => (
  <main className="page page--home">
    <section className="hero">
      <img src={logo} className="hero__logo" alt="logo" />
      <Counter className="hero__counter" />
      <p>
        Edit
        <pre>src/App.js</pre>
        and save to reload.
      </p>
      <a
        className="hero__link"
        href="https://effector.now.sh/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn Effector
      </a>
    </section>
  </main>
);

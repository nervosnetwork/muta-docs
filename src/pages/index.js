import React, { useState, useEffect } from 'react';

import Diagram from '@site/src/components/Diagram';
import Heading from '@theme/Heading';
import InstallationCommand from '@site/src/components/InstallationCommand';
import Jump from '@site/src/components/Jump';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import PerformanceTests from '@site/src/components/PerformanceTests';
import SVG from 'react-inlinesvg';
import TabItem from '@theme/TabItem';
import Tabs from '@theme/Tabs';

import classnames from 'classnames';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import repoUrl from '@site/src/exports/repoUrl';
import cloudify from '@site/src/exports/cloudify';

import _ from 'lodash';
import styles from './index.module.css';

import './index.css';

const AnchoredH2 = Heading('h2');

const features = [
  {
    title: 'High Performance',
    icon: 'zap',
    description: (
      <>
        With Overlord Consensus built-in, implemented by <a href="https://www.rust-lang.org/">Rust</a>, Muta could achieve thousands of TPS, aiming to handle the most demanding environments.
      </>
    ),
  },
  {
    title: 'Easiest to use',
    icon: 'unlock',
    description: (
      <>
        Muta provides you with all the core components needed to build a blockchain so that you can focus on developing your business logic. It's just as easy as writing a smart contract. 
      </>
    ),
  },
  {
    title: 'Interoperability',
    icon: 'codepen',
    description: (
      <>
       Your can not only get interoperability with other chain built by Muta, but also can connect your chain with <a href="https://github.com/nervosnetwork/ckb">Nervos-CKB</a> to leverage its security.
      </>
    ),
  },
  {
    title: 'Robust Architecture',
    icon: 'shuffle',
    description: (
      <>
        Muta was the based framework in <a href="https://github.com/HuobiGroup/huobi-chain">Huobichain</a>, one of the leading financial public chain, which have runnning steadily for around half a year.
      </>
    ),
  },
  {
    title: 'Rich Toolchain',
    icon: 'code',
    description: (
      <>
        Muta comes with a rich toolchain eocosystem for free, incluing <a href="https://github.com/homura/hermit-purple-ui">Explorer</a>, <a href="https://github.com/nervosnetwork/muta-sdk-js">JS-SDK</a>, <a href="https://github.com/nervosnetwork/muta-sdk-java">JAVA-SDK</a>, <a href="https://github.com/nervosnetwork/muta-benchmark">Benchmark-tool</a> and so on.
      </>
    ),
  },
  {
    title: 'Production Ready',
    icon: 'shield',
    description: (
      <>
        Audited by <a href="https://www.slowmist.com/en/index.html">SlowMist</a>, one of the top international blockchain security company, Muta is ready for production.
      </>
    ),
  },
];

function Features({features}) {
  let rows = [];

  let i,j,temparray,chunk = 3;
  for (i=0,j=features.length; i<j; i+=chunk) {
    let featuresChunk = features.slice(i,i+chunk);

    rows.push(
      <div key={`features${i}`} className="row">
        {featuresChunk.map((props, idx) => (
          <Feature key={idx} {...props} />
        ))}
      </div>
    );
  }

  return (
    <section className={styles.features}>
      <div className="container">
        <AnchoredH2 id="features">Why Muta?</AnchoredH2>
        {rows}
      </div>
    </section>
  );
}

function Feature({icon, title, description}) {
  return (
    <div className={classnames('col col--4', styles.feature)}>
      <div className={styles.featureIcon}>
        <i className={classnames('feather', `icon-${icon}`)}></i>
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;

  return (
    <Layout title={`${siteConfig.title} - ${siteConfig.tagline}`} description={siteConfig.tagline}>
      <header className={classnames('hero', 'hero--full-height', styles.indexHeroBanner)}>
        <div className="container container--fluid">
          <h1>Build your own blockchain, today</h1>
          <p className="hero--subtitle">
            Muta is a highly customizable and high performance blockchain framework.
          </p>
          <div className="hero--buttons">
            <Link to="https://github.com/nervosnetwork/muta/" className="button button--primary"><i className="feather icon-github"></i> View on Github</Link>
            <Link to="/docs/" className="button button--primary">Getting Started</Link>
          </div>
          <img
                alt="Muta logo"
                className={styles.heroLogo}
                src={useBaseUrl('/img/muta-logo.png')}
                width={360}
                height={360}
              />
          <p className="hero--subsubtitle">
            Muta is Developed by <strong><em>Nervos Team</em></strong>.
          </p>
        </div>
      </header>
      <main>
        {features && features.length && <Features features={features} />}
      </main>
    </Layout>
  );
}

export default Home;

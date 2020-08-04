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
        Muta was used in <a href="https://github.com/HuobiGroup/huobi-chain">Huobichain</a>, one of the leading financial public chain, which have runnning steadily for around half years.
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

function Performance() {
  return (
    <section className={styles.performance}>
      <div className="container">
        <AnchoredH2 id="performance">Performance That Doesn't Deter</AnchoredH2>
        <div className="sub-title">Built for the most demanding production environments</div>

        <PerformanceTests />
      </div>
    </section>
  );
}

function Correctness() {
  return (
    <section className={styles.correctness}>
      <div className="container">
        <AnchoredH2 id="correctness">Correct To The Smallest Details</AnchoredH2>
        <div className="sub-title">We're obsessed with getting the details right</div>

        <div className="table-responsive">
          <table className="comparison">
            <thead>
              <tr>
                <th></th>
                <th className="vector">Vector</th>
                <th>Filebeat</th>
                <th>FluentBit</th>
                <th>FluentD</th>
                <th>Logstash</th>
                <th>SplunkHF</th>
                <th>SplunkUF</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="row-label"><a target="_blank" href="https://github.com/timberio/vector-test-harness/tree/master/cases/disk_buffer_persistence_correctness">Disk buffer persistence</a></td>
                <td className="result passed vector"><i className="feather icon-check"></i></td>
                <td className="result passed"><i className="feather icon-check"></i></td>
                <td className="result failed"><i className="feather icon-x"></i></td>
                <td className="result failed"><i className="feather icon-x"></i></td>
                <td className="result warning"><i className="feather icon-alert-triangle"></i></td>
                <td className="result passed"><i className="feather icon-check"></i></td>
                <td className="result passed"><i className="feather icon-check"></i></td>
              </tr>
              <tr>
                <td className="row-label"><a target="_blank" href="https://github.com/timberio/vector-test-harness/tree/master/cases/file_rotate_create_correctness">File rotate (create)</a></td>
                <td className="result passed vector"><i className="feather icon-check"></i></td>
                <td className="result passed"><i className="feather icon-check"></i></td>
                <td className="result passed"><i className="feather icon-check"></i></td>
                <td className="result passed"><i className="feather icon-check"></i></td>
                <td className="result passed"><i className="feather icon-check"></i></td>
                <td className="result passed"><i className="feather icon-check"></i></td>
                <td className="result passed"><i className="feather icon-check"></i></td>
              </tr>
              <tr>
                <td className="row-label"><a target="_blank" href="https://github.com/timberio/vector-test-harness/tree/master/cases/file_rotate_truncate_correctness">File rotate (copytruncate)</a></td>
                <td className="result passed vector"><i className="feather icon-check"></i></td>
                <td className="result failed"><i className="feather icon-x"></i></td>
                <td className="result failed"><i className="feather icon-x"></i></td>
                <td className="result failed"><i className="feather icon-x"></i></td>
                <td className="result failed"><i className="feather icon-x"></i></td>
                <td className="result passed"><i className="feather icon-check"></i></td>
                <td className="result passed"><i className="feather icon-check"></i></td>
              </tr>
              <tr>
                <td className="row-label"><a target="_blank" href="https://github.com/timberio/vector-test-harness/tree/master/cases/file_truncate_correctness">File truncation</a></td>
                <td className="result passed vector"><i className="feather icon-check"></i></td>
                <td className="result passed"><i className="feather icon-check"></i></td>
                <td className="result passed"><i className="feather icon-check"></i></td>
                <td className="result passed"><i className="feather icon-check"></i></td>
                <td className="result passed"><i className="feather icon-check"></i></td>
                <td className="result passed"><i className="feather icon-check"></i></td>
                <td className="result passed"><i className="feather icon-check"></i></td>
              </tr>
              <tr>
                <td className="row-label"><a target="_blank" href="https://github.com/timberio/vector-test-harness/tree/master/cases/sighup_correctness">Process (SIGHUP)</a></td>
                <td className="result passed vector"><i className="feather icon-check"></i></td>
                <td className="result failed"><i className="feather icon-x"></i></td>
                <td className="result failed"><i className="feather icon-x"></i></td>
                <td className="result failed"><i className="feather icon-x"></i></td>
                <td className="result warning"><i className="feather icon-alert-triangle"></i></td>
                <td className="result passed"><i className="feather icon-check"></i></td>
                <td className="result passed"><i className="feather icon-check"></i></td>
              </tr>
              <tr>
                <td className="row-label"><a target="_blank" href="https://github.com/timberio/vector-test-harness/tree/master/cases/tcp_stream_correctness">TCP Streaming</a></td>
                <td className="result passed vector"><i className="feather icon-check"></i></td>
                <td className="result failed"><i className="feather icon-x"></i></td>
                <td className="result failed"><i className="feather icon-x"></i></td>
                <td className="result failed"><i className="feather icon-x"></i></td>
                <td className="result failed"><i className="feather icon-x"></i></td>
                <td className="result passed"><i className="feather icon-check"></i></td>
                <td className="result passed"><i className="feather icon-check"></i></td>
              </tr>
              <tr>
                <td className="row-label"><a target="_blank" href="https://github.com/timberio/vector-test-harness/tree/master/cases/wrapped_json_correctness">JSON (wrapped)</a></td>
                <td className="result passed vector"><i className="feather icon-check"></i></td>
                <td className="result passed"><i className="feather icon-check"></i></td>
                <td className="result failed"><i className="feather icon-x"></i></td>
                <td className="result passed"><i className="feather icon-check"></i></td>
                <td className="result passed"><i className="feather icon-check"></i></td>
                <td className="result passed"><i className="feather icon-check"></i></td>
                <td className="result passed"><i className="feather icon-check"></i></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

function Integrations() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  const {metadata: {sources, transforms, sinks}} = siteConfig.customFields;

  const classes = {
    'aws_s3_sink': 'large',
    'clickhouse_sink': 'medium',
    'dedupe': 'medium',
    'docker_source': 'large',
    'elasticsearch_sink': 'large',
    'file_source': 'medium',
    'http_sink': 'small',
    'kafka_source': 'large',
    'log_to_metric_transform': 'large',
    'loki_sink': 'medium',
    'lua_transform': 'medium',
    'prometheus_sink': 'large',
    'regex_parser': 'medium',
    'socket_sink': 'medium',
    'syslog_source': 'medium',
    'tag_cardinality_limit': 'large',
  }

  return (
    <section className={classnames(styles.integrations, 'integrations')}>
      <div className="container">
        <AnchoredH2 id="integrations">Quality Integrations Built Into The Core</AnchoredH2>
        <div className="sub-title">Actively maintained integrations. Gone are the days of dormant low-quality plugins.</div>

        <div className={classnames(styles.components, 'components')}>
          <h3>
            <div>
              <span className="line-break">{Object.keys(sources).length} sources</span>
              <span className="line-break">{Object.keys(transforms).length} transforms</span>
              <span className="line-break">{Object.keys(sinks).length} sinks</span>
            </div>
          </h3>
          <div className={styles.componentsCanvas} id="component-canvas"></div>
          <ul>
            {Object.keys(sources).map((key, index) => (
              <li className={classes[`${key}_source`]} key={index}><Link to={`/docs/reference/sources/${key}/`}>{sources[key].name}</Link></li>
            ))}
            {Object.keys(transforms).map((key, index) => (
              <li className={classes[`${key}_transform`]} key={index}><Link to={`/docs/reference/transforms/${key}/`}>{transforms[key].name}</Link></li>
            ))}
            {Object.keys(sinks).map((key, index) => (
              <li className={classes[`${key}_sink`]} key={index}><Link to={`/docs/reference/sinks/${key}/`}>{sinks[key].name}</Link></li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}


function Topologies() {
  return (
    <section className="topologies">
      <div className="container">
        <AnchoredH2 id="topologies">One Tool For Your Entire Pipeline</AnchoredH2>
        <div className="sub-title">Get data from A to B without patching tools together</div>

        <Tabs
          centered={true}
          className="rounded"
          defaultValue="centralized"
          values={[
            { label: <><i className="feather icon-shuffle"></i> Distributed</>, value: 'distributed', },
            { label: <><i className="feather icon-box"></i> Centralized</>, value: 'centralized', },
            { label: <><i className="feather icon-shield"></i> Stream-based</>, value: 'stream-based', },
          ]}>
          <TabItem value="distributed">
            <div className={styles.topology}>
              <SVG src="/img/topologies-distributed.svg" className={styles.topologyDiagram} />
              <Link to="/docs/setup/deployment/topologies/#distributed">Learn more about the distributed topology</Link>
            </div>
          </TabItem>
          <TabItem value="centralized">
            <div className={styles.topology}>
              <SVG src="/img/topologies-centralized.svg" className={styles.topologyDiagram} />
              <Link to="/docs/setup/deployment/topologies/#centralized">Learn more about the centralized topology</Link>
            </div>
          </TabItem>
          <TabItem value="stream-based">
            <div className={styles.topology}>
              <SVG src="/img/topologies-stream-based.svg" className={styles.topologyDiagram} />
              <Link to="/docs/setup/deployment/topologies/#stream-based">Learn more about the stream-based topology</Link>
            </div>
          </TabItem>
        </Tabs>
      </div>
    </section>
  )
}

function InstallationSection() {
  return (
    <section className={styles.installation}>
      <div className="container">
        <AnchoredH2 id="installation">Installs Everywhere</AnchoredH2>
        <div className="sub-title">Fully static, no dependencies, no runtime, memory safe</div>

        <div className={styles.installationPlatforms}>
          <Link to="/docs/setup/installation/platforms/docker/"><SVG src="/img/docker.svg" /></Link>
          <Link to="/docs/setup/installation/operating-systems/"><SVG src="/img/linux.svg" /></Link>
          <Link to="/docs/setup/installation/operating-systems/raspbian/"><SVG src="/img/raspbian.svg" /></Link>
          <Link to="/docs/setup/installation/operating-systems/windows/"><SVG src="/img/windows.svg" /></Link>
          <Link to="/docs/setup/installation/operating-systems/macos/"><SVG src="/img/apple.svg" /></Link>
        </div>

        <div className={styles.installationChecks}>
          <div>
            <i className="feather icon-package"></i> Fully static, no deps
          </div>
          <div>
            <i className="feather icon-cpu"></i> X86_64, ARM64, & ARMv7
          </div>
          <div>
            <i className="feather icon-feather"></i> Light-weight, only 7mb
          </div>
          <div>
            <i className="feather icon-zap"></i> No runtime, mem-safe
          </div>
        </div>

        <h3 className={styles.installSubTitle}>Install with a one-liner:</h3>

        <InstallationCommand />

        <h3 className={styles.installSubTitle}>Or choose your preferred method:</h3>

        <div className="row">
          <div className="col">
            <Jump to="/docs/setup/installation/platforms/">Platforms</Jump>
          </div>
          <div className="col">
            <Jump to="/docs/setup/installation/package-managers/">Package Managers</Jump>
          </div>
          <div className="col">
            <Jump to="/docs/setup/installation/operating-systems/">Operating Systems</Jump>
          </div>
          <div className="col">
            <Jump to="/docs/setup/installation/manual/">Manual</Jump>
          </div>
        </div>
      </div>
    </section>
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

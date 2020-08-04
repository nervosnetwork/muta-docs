import React from 'react';

import Heading from '@theme/Heading';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

import styles from './community.module.css';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

const AnchoredH2 = Heading('h2');
const AnchoredH3 = Heading('h3');

function Community() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  const {metadata: {team}} = siteConfig.customFields;

  return (
    <Layout title="Community" description="Join the Muta community. Connect with other Muta users and help make Muta better.">
      <header className="hero hero--clean">
        <div className="container container--fluid">
          <h1>Muta Community</h1>
          <div className="hero--subtitle">Join the Muta community. Connect with other Muta users and help make Muta better.</div>
        </div>
      </header>
      <main>
        <section>
          <div className="container">
            <div className="row">
              <div className="col">
                <a href="https://discord.gg/QXkFT88" target="_blank" className="panel panel--button">
                  <div className="panel--icon">
                    <i className="feather icon-message-circle"></i>
                  </div>
                  <div className="panel--title">Discord</div>
                  <div className="panel--description">Ask questions and get help</div>
                </a>
              </div>
              <div className="col">
                <a href="https://twitter.com/Zoe_YunZhouv" target="_blank" className="panel panel--button">
                  <div className="panel--icon">
                    <i className="feather icon-twitter" title="Twitter"></i>
                  </div>
                  <div className="panel--title">@muta</div>
                  <div className="panel--description">Follow us in real-time</div>
                </a>
              </div>
              <div className="col">
                <a href="https://github.com/nervosnetwork/muta" target="_blank" className="panel panel--button">
                  <div className="panel--icon">
                    <i className="feather icon-github"></i>
                  </div>
                  <div className="panel--title">Github nervosnetwork/muta</div>
                  <div className="panel--description">Issues, code, and development</div>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <AnchoredH2 id="team">Meet The Team</AnchoredH2>
            <div className="sub-title">We are still hiring!</div>

            <div className={styles.coreTeam}>
              {team.map((member, idx) => (
                <Link key={idx} to={member.github} className="avatar avatar--vertical">
                  <img
                    className="avatar__photo avatar__photo--xl"
                    src={member.avatar}
                  />
                  <div className="avatar__intro">
                    <h4 className="avatar__name">{member.name}</h4>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <AnchoredH2 id="faqs">FAQs</AnchoredH2>

            <AnchoredH3 id="contribute" className="header--flush">How do I contribute to Muta?</AnchoredH3>

            <p>
              Muta is <a href="https://github.com/nervosnetwork/muta">open-source</a> and welcomes contributions. A few guidelines to help you get started:
            </p>
            <ol>
              <li>Read our <a href="https://github.com/nervosnetwork/muta/blob/master/CONTRIBUTING.md">contribution guide</a>.</li>
              <li>Start with <a href="https://github.com/nervosnetwork/muta/issues">good first issues</a>.</li>
              <li>Join our <a href="https://discord.gg/QXkFT88">discord</a> if you have any questions. We are happy to help!</li>
            </ol>

            <AnchoredH3 id="contribute" className="header--flush margin-top--lg">What is the connection between Nervos and Muta?</AnchoredH3>

            <p>
            Muta is an important division of Nervos Network. It uses CKB as the value and security anchor to extend user scenarios and scalability. For example, the Nervos Foundation is cooperating with Huobi Group to build Huobi Chain, to explore regulation-friendly decentralized financial services, which is based on the Muta framework. Muta will play a pioneering role in the mass adoption of Nervos Network.
            </p>
            <ol>
              <li><a href="https://www.nervos.org/roadmap-2020/" target="_blank">Nervos Network 2020 Roadmap</a></li>
              <li><a href="https://www.nervos.org/" target="_blank">Nervos Network Official Website</a></li>
            </ol>

          </div>
        </section>
      </main>
    </Layout>
  );
}

export default Community;

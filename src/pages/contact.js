import React from 'react';

import Layout from '@theme/Layout';

import styles from './community.module.css';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

function Contact() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  const {metadata: {team}} = siteConfig.customFields;

  return (
    <Layout title="Contact" description="Contact the Muta team">
      <header className="hero">
        <div className="container container--fluid">
          <h1>Contact</h1>
          <div className="hero--subtitle">
            Muta is a <a href="https://www.nervos.org/">Nervos Network</a> open-source product. You can contact the Muta &amp; Nervos team using any of the options below.
          </div>
        </div>
      </header>
      <main>
        <section>
          <div className="container">
            <div className="row">
              <div className="col">
                <a href="mailto:hi-muta@cryptape.com" className="panel text--center">
                  <div className="panel--icon">
                    <i className="feather icon-mail"></i>
                  </div>
                  <div className="panel--title">hi-muta@cryptape.com</div>
                  <div className="panel--description">Shoot us an email</div>
                </a>
              </div>
              <div className="col">
                <a href="https://twitter.com/nervosnetwork" target="_blank" className="panel text--center">
                  <div className="panel--icon">
                    <i className="feather icon-twitter"></i>
                  </div>
                  <div className="panel--title">@nervosnetwork</div>
                  <div className="panel--description">
                    Tweet at us
                  </div>
                </a>
              </div>
              <div className="col">
                <a href="https://discord.com/invite/rN35fe8" target="_blank" className="panel text--center">
                  <div className="panel--icon">
                    <i className="feather icon-message-circle"></i>
                  </div>
                  <div className="panel--title">Discord</div>
                  <div className="panel--description">Join our discord</div>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default Contact;
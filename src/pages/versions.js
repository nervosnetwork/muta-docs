import React from 'react';

import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';

import versions from '../../versions.json';

const AnchoredH2 = Heading('h2');

function Version() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  const latestVersion = versions[0];
  const pastVersions = versions.filter((version) => version !== latestVersion);
  const repoUrl = `https://github.com/${siteConfig.organizationName}/${siteConfig.projectName}`;
  return (
    <Layout
      permalink="/versions"
      description="Muta Versions page listing all documented site versions">
      <header className="hero hero--clean">
         <div className="container container--fluid">
          <h1>Muta Versions</h1>
          <div className="hero--subtitle">In production environment, we highly recommend to use stable version.</div>
        </div>
      </header>

      <main>
        <section>
          <div className="container">
          <AnchoredH2 id="latest">Latest version (Stable)</AnchoredH2>
          <div className="sub-titles">Here you can find the latest stable version.</div>
          <table className="versions">
            <tbody>
              <tr>
                <th>{latestVersion}</th>
                <td>
                  <Link to={useBaseUrl('/docs/about/what-is-muta')}>
                    Documentation
                  </Link>
                </td>
                <td>
                  <a href={`${repoUrl}/releases/tag/v${latestVersion}`}>
                    Release Notes
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
          </div>
        </section>

        <section>
          <div className="container">
          <AnchoredH2 id="latest">Next version (Unreleased)</AnchoredH2>
          <div className="sub-titles">Here you can find the unreleased version.</div>
          <table className="versions">
            <tbody>
              <tr>
                <th>master</th>
                <td>
                  <Link to={useBaseUrl('/docs/next/about/what-is-muta')}>
                    Documentation
                  </Link>
                </td>
                <td>
                  <a href={repoUrl}>Source Code</a>
                </td>
              </tr>
            </tbody>
          </table>
          </div>
        </section>

        <section>

          {pastVersions.length > 0 && (
          <div className="container">
            <AnchoredH2 id="latest">Past Versions</AnchoredH2>
            <div className="sub-titles">Here you can find the previous versions.</div>
            <table className="versions">
              <tbody>
                {pastVersions.map((version) => (
                  <tr key={version}>
                    <th>{version}</th>
                    <td>
                      <Link to={useBaseUrl(`/docs/${version}/about/what-is-muta`)}>
                        Documentation
                      </Link>
                    </td>
                    <td>
                      <a href={`${repoUrl}/releases/tag/v${version}`}>
                        Release Notes
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        </section>
      </main>

    </Layout>
  );
}

export default Version;
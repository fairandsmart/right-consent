import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {RedocStandalone} from 'redoc';

export default function ApiReference() {
    const {siteConfig} = useDocusaurusContext();
    const options = {
        scrollYOffset: '.navbar', // makes the fixed sidebar and scrolling play nicey with docusaurus navbar
        theme: {
            sidebar: {
                width: '300px' // about the same as the sidebar in the docs area, for consistency
            }
        }
    };
    return (
        <Layout>
            <main>
                <RedocStandalone spec={siteConfig.customFields.apiSpec} options={options}/>
            </main>
        </Layout>
    );
}

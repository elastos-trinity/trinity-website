import React from 'react';
import { useTranslation, Trans } from "react-i18next";

import ConicGradiSection from '../components/ConicGradiSection';
import Schema from '../components/Home/Schema';
import Summary from '../components/Home/Summary';

const Home = () => {
    const { t } = useTranslation();

    return (
        <>
            <ConicGradiSection title={<Trans>We build (on) Elastos.</Trans>} titleAlign="center" scrollDown={true}/>
            <Schema />
            <Summary type='sdk' />
            <Summary type='app' />
        </>
    );
}

export default Home;
import React, { Fragment } from 'react';

import { Switch, Route } from 'react-router-dom';

import Header from './components/header/Header';
import Home from './pages/home/Home';
import CadastroVideo from './pages/cadastroVideo/CadastroVideo';
import Footer from './components/footer/Footer';

export default function App() {
    return (
        <Fragment>
            < Header />
            <main>
                <Switch>
                    <Route path="/" component={Home} exact />
                    <Route path="/cadastro/video" component={CadastroVideo} />
                    <Route path="/" component={Home} />
                </Switch>
            </main>
            <Footer />
        </Fragment>
    );
}

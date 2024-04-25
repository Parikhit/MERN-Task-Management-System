import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';

//Components
import Header from './components/Header.component';
import Footer from './components/Footer.component';

//pages
import HomePage from './pages/Home.page';
import ProjectPage from './pages/Project.page';
import NotFoundPage from './pages/NotFound.page';

const cache = new InMemoryCache({
    typePolicies: {
        Query: {
            fields: {
                clients: {
                    merge(existing, incoming) {
                        return incoming;
                    },
                },
            },

            projects: {
                merge(existing, incoming) {
                    return incoming;
                },
            },
        },
    },
});

const client = new ApolloClient({
    uri: '/api/graphql',
    cache,
});

const App = () => {
    return (
        <>
            <ApolloProvider client={client}>
                <BrowserRouter>
                    <Header />
                    <div className='container w-100'>
                        <Routes>
                            <Route
                                path='/'
                                element={<HomePage />}
                            />
                            <Route
                                path='/projects/:id'
                                element={<ProjectPage />}
                            />
                            <Route
                                path='*'
                                element={<NotFoundPage />}
                            />
                        </Routes>
                    </div>
                    <Footer />
                </BrowserRouter>
            </ApolloProvider>
        </>
    );
};

export default App;

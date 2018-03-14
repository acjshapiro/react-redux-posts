import React from 'react';
import { Link } from 'react-router-dom';
import { Header } from 'semantic-ui-react';

const Home = () => (
    <Header textAlign="center" as="h1"> Welcome to Alex's House of {' '}
    <Link to="/posts">Posts</Link></Header>
)

export default Home;
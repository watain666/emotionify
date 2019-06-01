import React from 'react';
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import banner from '../../img/banner.png';
import { Token } from '../../Models';

interface IProps {
    token: Token | null,
    user: SpotifyApi.CurrentUsersProfileResponse | null
}

const Home: React.SFC<IProps> = (props: IProps) => {
    return <>
        <section className="jumbotron jumbotron-fluid text-center">
            <Container>
                <h1 className="sr-only">Emotionify</h1>
                <img src={banner} className="mb-2" style={{ width: 800, maxWidth: '100%' }} alt="Emotionify Banner Logo" />
                <p className="lead col-md-7 mt-2 mx-auto">Easily create emotionally gradiented Spotify playlists for smoother emotional transitions in your listening</p>
            </Container>
        </section>

        {/* Testing */}
        <section>
            <Container>
                <h2 className="text-center">Testing</h2>
                <p>Token: {props.token !== null ? props.token.value : ''} (expires: {props.token !== null ? props.token.expiry.toLocaleString() : ''})</p>
                <p>User: {props.user !== null ? props.user.display_name : 'N/A'}</p>
                <Link to="/spotify-authorization"><Button>/spotify-authorization</Button></Link>
                <Button onClick={() => {localStorage.clear(); window.location.reload(true);}}>Clean and refresh</Button>
            </Container>
        </section>
    </>
}

export default Home;

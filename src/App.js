import { styled } from 'styled-components';
import Contents from './Components/Contents/Contents';
import Sides from './Components/Sides/Sides';
import Header from './Components/Header/Header';

const MainWrapper = styled.div`
    position: relative;
    height: 100%;
    color: var(--text-100);
    background-color: var(--bg-100);
    display: grid;
    grid-template-columns: 7fr 3fr;
`;

function App() {
    return (
        <MainWrapper>
            <Header />
            <Contents />
            <Sides />
        </MainWrapper>
    );
}

export default App;

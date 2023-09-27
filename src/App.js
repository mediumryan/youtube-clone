import { styled } from 'styled-components';
import Contents from './Components/Contents/Contents';
import Sides from './Components/Sides/Sides';
import Header from './Components/Header/Header';

const MainWrapper = styled.div`
    height: 100%;
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

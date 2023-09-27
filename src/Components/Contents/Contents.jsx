import { styled } from 'styled-components';
import Video from './Video';
import Metadata from './Metadata';

const ContentsWrapper = styled.div``;

export default function Contents() {
    return (
        <ContentsWrapper>
            <Video />
            <Metadata />
        </ContentsWrapper>
    );
}

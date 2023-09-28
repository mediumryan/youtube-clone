import { styled } from 'styled-components';
import Video from './Video';
import Metadata from './Metadata/Metadata';
import Comments from './Comments';

const ContentsWrapper = styled.div`
    margin-top: var(--margin-huge);
`;

export default function Contents() {
    return (
        <ContentsWrapper>
            <Video />
            <Metadata />
            <Comments />
        </ContentsWrapper>
    );
}

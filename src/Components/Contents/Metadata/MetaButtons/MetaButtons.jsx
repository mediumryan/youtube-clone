import { styled } from 'styled-components';
import MetaChannel from './MetaChannel';
import MetaOtherButtons from './MetaOtherButtons';
// channel image

const MetaDataButtonsWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export default function MetaButtons() {
    return (
        <MetaDataButtonsWrapper>
            <MetaChannel />
            <MetaOtherButtons />
        </MetaDataButtonsWrapper>
    );
}

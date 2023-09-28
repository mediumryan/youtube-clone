import { styled } from 'styled-components';
import MetaChannel from './MetaChannel';
import MetaOtherButtons from './MetaOtherButtons';
// channel image

const MetaDataButtonsWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media only screen and (min-width: 320px) and (max-width: 768px) {
        flex-direction: column;
        align-items: flex-start;
    }
`;

export default function MetaButtons() {
    return (
        <MetaDataButtonsWrapper>
            <MetaChannel />
            <MetaOtherButtons />
        </MetaDataButtonsWrapper>
    );
}

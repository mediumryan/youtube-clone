import { styled } from 'styled-components';

const MetaDataTitle = styled.h4`
    font-size: var(--font-size-medium);
    margin-bottom: var(--margin-medium);
`;

export default function MetaTitle() {
    return <MetaDataTitle>Squirrel is so cute</MetaDataTitle>;
}

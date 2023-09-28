import React from 'react';
import MetaTitle from './MetaTitle';
import MetaButtons from './MetaButtons/MetaButtons';
import MetaDescription from './MetaDescription';
import { styled } from 'styled-components';

const MetaDataWrapper = styled.div`
    padding: 0 var(--padding-medium-large);
`;

export default function Metadata() {
    return (
        <MetaDataWrapper>
            <MetaTitle />
            <MetaButtons />
            <MetaDescription />
        </MetaDataWrapper>
    );
}

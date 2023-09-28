import React from 'react';
import { styled } from 'styled-components';
import SideTB from './SideTB';
import SideDescription from './SideDescription';

const SideItemWrapper = styled.div`
    display: flex;
    margin: var(--margin-medium) 0;
    cursor: pointer;
`;

export default function SideItems({ item }) {
    return (
        <SideItemWrapper>
            <SideTB item={item} />
            <SideDescription item={item} />
        </SideItemWrapper>
    );
}

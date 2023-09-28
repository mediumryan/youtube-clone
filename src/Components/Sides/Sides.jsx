import { styled } from 'styled-components';
import SideItems from './SideItems';

const SidesWrapper = styled.div`
    background-color: blue;
    margin-top: var(--margin-huge);
`;

export default function Sides() {
    return (
        <SidesWrapper>
            <SideItems />
            <SideItems />
            <SideItems />
            <SideItems />
            <SideItems />
            <SideItems />
            <SideItems />
        </SidesWrapper>
    );
}

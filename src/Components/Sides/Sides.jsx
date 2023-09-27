import { styled } from 'styled-components';
import SideItems from './SideItems';

const SidesWrapper = styled.div``;

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

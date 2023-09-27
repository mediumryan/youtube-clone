import { styled } from 'styled-components';
// components
import HeaderMenuLogo from './HeaderMenuLogo';
import HeaderFind from './HeaderFind';
import HeaderOthers from './HeaderOthers';

const HeaderWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: var(--padding-small);
`;

export default function Header() {
    return (
        <HeaderWrapper>
            <HeaderMenuLogo />
            <HeaderFind />
            <HeaderOthers />
        </HeaderWrapper>
    );
}

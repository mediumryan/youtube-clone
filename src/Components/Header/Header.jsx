import { styled } from 'styled-components';
// components
import HeaderMenuLogo from './HeaderMenuLogo';
import HeaderFind from './HeaderFind';
import HeaderOthers from './HeaderOthers';

const HeaderWrapper = styled.div`
    position: fixed;
    top: 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: var(--padding-small);
    background-color: var(--bg-100);
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

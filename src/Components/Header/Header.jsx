import { styled } from 'styled-components';
// components
import HeaderMenu from './HeaderMenu';
import HeaderLogo from './HeaderLogo';
import HeaderFind from './HeaderFind';
import HeaderOthers from './HeaderOthers';

const HeaderWrapper = styled.div``;

export default function Header() {
    return (
        <HeaderWrapper>
            <HeaderMenu />
            <HeaderLogo />
            <HeaderFind />
            <HeaderOthers />
        </HeaderWrapper>
    );
}

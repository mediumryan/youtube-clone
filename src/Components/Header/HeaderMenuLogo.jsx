import { styled } from 'styled-components';
// icon
import { AiOutlineMenu } from 'react-icons/ai';
import { FaYoutube } from 'react-icons/fa';

const HeaderMenuLogoWrapper = styled.div`
    display: flex;
    align-items: center;
`;

const HeaderMenu = styled(AiOutlineMenu)`
    color: var(--text-100);
    font-size: var(--font-size-medium-large);
    margin: 0 var(--margin-medium);
    padding: var(--padding-small);
    border-radius: 50%;
    &:hover {
        background-color: var(--bg-300);
    }
`;

const HeaderLogo = styled.div`
    display: flex;
    align-items: center;
    margin-right: var(--margin-large);
    svg {
        color: var(--primary-100);
        font-size: var(--font-size-medium-large);
        margin-right: var(--margin-micro);
    }
    span {
        letter-spacing: -2px;
    }
`;

export default function HeaderMenuLogo() {
    return (
        <HeaderMenuLogoWrapper>
            <HeaderMenu />
            <HeaderLogo>
                <FaYoutube />
                <span>RyanTube</span>
            </HeaderLogo>
        </HeaderMenuLogoWrapper>
    );
}

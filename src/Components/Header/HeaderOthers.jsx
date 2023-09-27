import { styled } from 'styled-components';
// icon
import { BiVideoPlus } from 'react-icons/bi';
import { AiOutlineBell } from 'react-icons/ai';
import { RxAvatar } from 'react-icons/rx';

const HeaderOthersWrapper = styled.div`
    display: flex;
    align-items: center;
    svg {
        font-size: var(--font-size-medium-large);
        padding: 8px;
        margin: 0 var(--margin-small);
        border-radius: 50%;
        &:hover {
            background-color: var(--bg-300);
        }
    }
`;

export default function HeaderOthers() {
    return (
        <HeaderOthersWrapper>
            <BiVideoPlus />
            <AiOutlineBell />
            <RxAvatar />
        </HeaderOthersWrapper>
    );
}

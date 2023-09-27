import { styled } from 'styled-components';
// icon
import { FaMagnifyingGlass } from 'react-icons/fa6';

const FindForm = styled.form`
    display: flex;
    align-items: center;
    width: 40%;
`;

const FindInput = styled.input`
    width: 85%;
    height: 40px;
    background-color: var(--bg-200);
    border-radius: 40px 0 0 40px;
    border: 1px solid var(--bg-300);
    outline: none;
    font-size: var(--font-size-small);
    padding-left: var(--padding-medium);
    &:focus {
        outline: 1px solid var(--accent-100);
    }
`;

const FindSubmit = styled.button`
    width: 15%;
    height: 40px;
    border-radius: 0 40px 40px 0;
    border: 1px solid var(--bg-300);
    border-left: none;
    color: var(--text-100);
    background-color: var(--bg-200);
    svg {
        font-size: 24px;
    }
`;

export default function HeaderFind() {
    return (
        <FindForm>
            <FindInput placeholder="Search" />
            <FindSubmit>
                <FaMagnifyingGlass />
            </FindSubmit>
        </FindForm>
    );
}

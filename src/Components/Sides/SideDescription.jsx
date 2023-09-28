import { styled } from 'styled-components';

const SideDescriptionWrapper = styled.div`
    font-size: var(--font-size-micro);
    flex-basis: 65%;
    display: flex;
    flex-direction: column;
    cursor: pointer;
    span {
        margin: var(--margin-micro) 0;
    }
    span:nth-child(2),
    span:nth-child(3) {
        font-size: 12px;
        color: var(--text-200);
    }
`;

export default function SideDescription({ item }) {
    return (
        <SideDescriptionWrapper>
            <span>{item.title}</span>
            <span>Ryan</span>
            <span>
                {item.views} | {item.date}
            </span>
        </SideDescriptionWrapper>
    );
}

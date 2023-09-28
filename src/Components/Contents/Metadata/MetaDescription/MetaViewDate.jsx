import { styled } from 'styled-components';

const ViewDateWrapper = styled.div`
    span {
        margin-right: var(--margin-medium);
    }
    span:last-child {
        color: var(--text-200);
    }
    span:nth-child(3) {
        font-size: 12px;
    }
`;

export default function MetaViewDate() {
    return (
        <ViewDateWrapper>
            <span>Views</span>
            <span>32.5M</span>
            <span>1day ago</span>
            <span>#Squirrel #is #so #cute</span>
        </ViewDateWrapper>
    );
}

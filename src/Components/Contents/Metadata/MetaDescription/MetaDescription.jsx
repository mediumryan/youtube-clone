import { styled } from 'styled-components';
import MetaViewDate from './MetaViewDate';
import MetaRecommend from './MetaRecommend';
import MetaViewAll from './MetaViewAll';

const MetaDescriptionWrapper = styled.div`
    display: flex;
    flex-direction: column;
    background-color: var(--bg-200);
    padding: var(--padding-medium);
    margin: var(--margin-medium) 0;
    border-radius: 20px;
    div {
        margin: var(--margin-small) 0;
        font-size: var(--font-size-micro);
    }
    &:hover {
        background-color: var(--bg-300);
    }
`;

export default function MetaDescription() {
    return (
        <MetaDescriptionWrapper>
            <MetaViewDate />
            <MetaRecommend />
            <MetaViewAll />
        </MetaDescriptionWrapper>
    );
}

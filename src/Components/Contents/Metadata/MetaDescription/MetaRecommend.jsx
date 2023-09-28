import { styled } from 'styled-components';
// icons
import { FaLongArrowAltRight } from 'react-icons/fa';

const RecommendWrapper = styled.div`
    display: flex;
    align-items: center;
    span {
        margin-right: var(--margin-medium);
    }
`;

export default function MetaRecommend() {
    return (
        <RecommendWrapper>
            <span>Recommends</span>
            <span>
                <FaLongArrowAltRight />
            </span>
            <span>Hamster, Wallaby, Prairie dog</span>
        </RecommendWrapper>
    );
}

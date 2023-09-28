import { styled } from 'styled-components';

const SideTBWrapper = styled.div`
    flex-basis: 35%;
    margin-right: var(--margin-small);
    img {
        width: 100%;
        border-radius: 20px;
    }
`;

export default function SideTB({ item }) {
    return (
        <SideTBWrapper>
            <img src={item.image_path} alt={item.title} />
        </SideTBWrapper>
    );
}

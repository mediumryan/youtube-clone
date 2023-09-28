import { styled } from 'styled-components';

const ViewAll = styled.span`
    cursor: pointer;
    font-size: 12px;
`;

export default function MetaViewAll() {
    return (
        <ViewAll>
            <span>...more</span>
        </ViewAll>
    );
}

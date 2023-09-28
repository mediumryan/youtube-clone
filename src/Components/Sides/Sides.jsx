import { styled } from 'styled-components';
import SideItems from './SideItems';
import { useRecoilValue } from 'recoil';
import { sideItems } from '../../atom';

const SidesWrapper = styled.div`
    margin-top: var(--margin-huge);
    padding-right: var(--padding-large);
    @media only screen and (min-width: 320px) and (max-width: 768px) {
        margin-top: var(--margin-medium);
        padding: 0 var(--padding-medium-large);
    }
`;

export default function Sides() {
    const item = useRecoilValue(sideItems);

    return (
        <SidesWrapper>
            {item.map((i) => {
                return <SideItems key={i.id} item={i} />;
            })}
        </SidesWrapper>
    );
}

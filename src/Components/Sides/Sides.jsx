import { styled } from 'styled-components';
import SideItems from './SideItems';
import { useRecoilValue } from 'recoil';
import { sideItems } from '../../atom';

const SidesWrapper = styled.div`
    margin-top: var(--margin-huge);
    padding-right: var(--padding-large);
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

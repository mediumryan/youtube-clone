import { styled } from 'styled-components';
// channel logo
import Ryan from './../../../../Images/kakao-ryan.jpeg';
// icons
import { AiOutlineBell } from 'react-icons/ai';
import { FaAngleDown } from 'react-icons/fa';

const Channel = styled.div`
    display: flex;
    align-items: center;
`;
const ChannelLogo = styled.img`
    width: 45px;
    height: 45px;
    border-radius: 50%;
`;
const ChannelDescription = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 var(--margin-medium);
`;
const ChannelName = styled.span`
    font-size: var(--font-size-small);
    margin-bottom: var(--margin-micro);
`;
const ChannelSub = styled.span`
    font-size: var(--font-size-micro);
    color: var(--text-200);
`;
const SubButton = styled.button`
    color: var(--text-100);
    background-color: var(--bg-200);
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    font-size: var(--font-size-micro);
    height: 36px;
    border-radius: 36px;
    padding: 0 var(--padding-small);
    span {
        margin: 0 var(--margin-small);
    }
    &:hover {
        background-color: var(--bg-300);
    }
`;

export default function MetaChannel() {
    return (
        <Channel>
            <ChannelLogo src={Ryan} alt="Channel image" />
            <ChannelDescription>
                <ChannelName>RyanTV</ChannelName>
                <ChannelSub>3.5M</ChannelSub>
            </ChannelDescription>
            <SubButton>
                <AiOutlineBell />
                <span>Subscribing</span>
                <FaAngleDown />
            </SubButton>
        </Channel>
    );
}

import { styled } from 'styled-components';
// icons
import { AiOutlineDownload } from 'react-icons/ai';
import { PiShareFatBold } from 'react-icons/pi';
import { FaEllipsisH, FaRegThumbsDown, FaRegThumbsUp } from 'react-icons/fa';

const OtherButtons = styled.div`
    display: flex;
    align-items: center;
`;

const LikeHate = styled.div`
    display: flex;
    align-items: center;
    padding: var(--padding-small) var(--padding-medium);
`;

const Like = styled.button`
    font-size: var(--font-size-micro);
    color: var(--text-100);
    background-color: var(--bg-200);
    padding: 0 var(--padding-medium-large);
    border-right: 1px solid var(--text-200);
    height: 36px;
    border-radius: 36px 0 0 36px;
    span {
        margin-left: var(--margin-micro);
    }
    &:hover {
        background-color: var(--bg-300);
    }
`;

const Hate = styled.button`
    font-size: var(--font-size-micro);
    color: var(--text-100);
    background-color: var(--bg-200);
    padding: 0 var(--padding-medium-large);
    height: 36px;
    border-radius: 0 36px 36px 0;
    &:hover {
        background-color: var(--bg-300);
    }
`;

const Share = styled.div`
    font-size: var(--font-size-micro);
    height: 36px;
    border-radius: 36px;
    display: flex;
    align-items: center;
    background-color: var(--bg-200);
    padding: var(--padding-small) var(--padding-medium);
    cursor: pointer;
    span {
        margin-left: var(--margin-small);
    }
    &:hover {
        background-color: var(--bg-300);
    }
`;

const OfflineSave = styled.div`
    font-size: var(--font-size-micro);
    height: 36px;
    border-radius: 36px;
    display: flex;
    align-items: center;
    background-color: var(--bg-200);
    padding: var(--padding-small) var(--padding-medium);
    margin: 0 var(--margin-small);
    cursor: pointer;
    span {
        margin-left: var(--margin-small);
    }
    &:hover {
        background-color: var(--bg-300);
    }
`;

const OthersMenu = styled.button`
    font-size: var(--font-size-micro);
    height: 36px;
    border-radius: 36px;
    color: var(--text-100);
    background-color: var(--bg-200);
    padding: var(--padding-small) var(--padding-medium);
    &:hover {
        background-color: var(--bg-300);
    }
`;

export default function MetaOtherButtons() {
    return (
        <OtherButtons>
            <LikeHate>
                <Like>
                    <FaRegThumbsUp />
                    <span>3.2k</span>
                </Like>
                <Hate>
                    <FaRegThumbsDown />
                </Hate>
            </LikeHate>
            <Share>
                <PiShareFatBold />
                <span>share</span>
            </Share>
            <OfflineSave>
                <AiOutlineDownload />
                <span>Download Offline</span>
            </OfflineSave>
            <OthersMenu>
                <FaEllipsisH />
            </OthersMenu>
        </OtherButtons>
    );
}

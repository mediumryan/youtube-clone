import { styled } from 'styled-components';

const OtherButtons = styled.div`
    display: flex;
    align-items: center;
`;

const LikeHate = styled.div``;

const Like = styled.button``;

const Hate = styled.button``;

const Share = styled.div``;

const OfflineSave = styled.div``;

const OthersMenu = styled.button``;

export default function MetaOtherButtons() {
    return (
        <OtherButtons>
            <LikeHate>
                <Like></Like>
                <Hate></Hate>
            </LikeHate>
            <Share></Share>
            <OfflineSave></OfflineSave>
            <OthersMenu></OthersMenu>
        </OtherButtons>
    );
}

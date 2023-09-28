import { styled } from 'styled-components';
// video
import video from './../../Videos/main.mp4';

const VideoWrapper = styled.div`
    width: 100%;
    padding: 0 var(--padding-medium-large);
    video {
        width: 100%;
        border-radius: 20px;
    }
`;

export default function Video() {
    return (
        <VideoWrapper>
            <video src={video} controls />
        </VideoWrapper>
    );
}

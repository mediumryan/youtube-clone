import { atom } from 'recoil';
// image
import Spinning from './Images/spinning.jpeg';

export const sideItems = atom({
    key: 'side_items',
    default: [
        {
            id: 0,
            title: 'Hamster spinning a chat wheel',
            image_path: Spinning,
            date: '1day ago',
            views: '10k',
        },
        {
            id: 1,
            title: 'Hamster spinning a chat wheel',
            image_path: Spinning,
            date: '21Hours ago',
            views: '2m',
        },
        {
            id: 2,
            title: 'Hamster spinning a chat wheel',
            image_path: Spinning,
            date: '3Weeks ago',
            views: '3.5k',
        },
        {
            id: 3,
            title: 'Hamster spinning a chat wheel',
            image_path: Spinning,
            date: '2days ago',
            views: '5.7k',
        },
        {
            id: 4,
            title: 'Hamster spinning a chat wheel',
            image_path: Spinning,
            date: '2Month ago',
            views: '1.2m',
        },
        {
            id: 5,
            title: 'Hamster spinning a chat wheel',
            image_path: Spinning,
            date: '26Days ago',
            views: '300m',
        },
        {
            id: 6,
            title: 'Hamster spinning a chat wheel',
            image_path: Spinning,
            date: '3Hours ago',
            views: '20k',
        },
        {
            id: 7,
            title: 'Hamster spinning a chat wheel',
            image_path: Spinning,
            date: '4Weeks ago',
            views: '5k',
        },
        {
            id: 8,
            title: 'Hamster spinning a chat wheel',
            image_path: Spinning,
            date: '6Hours ago',
            views: '400',
        },
        {
            id: 9,
            title: 'Hamster spinning a chat wheel',
            image_path: Spinning,
            date: '1Day ago',
            views: '6',
        },
    ],
});

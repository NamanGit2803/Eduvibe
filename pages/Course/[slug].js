import React from 'react'
import { CldVideoPlayer } from 'next-cloudinary';
import 'next-cloudinary/dist/cld-video-player.css';

const cour = () => {
    return (
        <div>
            <CldVideoPlayer
                width="1920"
                height="1080"
                src=""
            />
        </div>
    )
}

export default cour
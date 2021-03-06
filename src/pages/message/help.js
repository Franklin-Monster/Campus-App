// image
import Photo from './img/photo'
import Camera from './img/camera'
import Video from './img/video'
import Place from './img/place'
import Pay from './img/pay'
import File from './img/file'

import {
    goRoute
} from '@/static/js/fun'

const sendPlusItemArr = [{
        img: Photo,
        text: '照片'
    },
    {
        img: Camera,
        text: '拍摄',
        onClick: () => {
            goRoute('/takephoto')
        }
    },
    {
        img: Video,
        text: '视频通话',
        onClick: () => {
            goRoute('/videochat')
        }
    },
    {
        img: Place,
        text: '位置'
    },
    {
        img: Pay,
        text: '转账'
    },
    {
        img: File,
        text: '文件'
    },
]


export {
    sendPlusItemArr
}
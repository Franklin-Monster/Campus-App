import React, { useState } from 'react'
import './css/write-dynamic'

// component
import { ImagePicker } from 'antd-mobile'
import ReturnTitle from '@c/return-title'

// image
import Tag from './img/tag'
import Public from './img/public'
import Publish from './img/publish'
import Franklin from './img/Franklin'

const WriteDynamic = props => {
    const [dynamicImage, setDynamicImage] = useState([])
    const [dynamicText, setDynamicText] = useState('')

    // 监听files变化
    const onImagePickerChange = (files, type, index) => {
        setDynamicImage(files)
    };

    // 发布动态
    const publishDynamic = () => {
        const dynamicImageArr = []
        dynamicImage.forEach(item => {
            dynamicImageArr.push(item.url)
        })
        const newDynamic = {
            name: 'Franklin',
            avator: Franklin,
            content: {
                text: dynamicText,
                image: dynamicImageArr.length === 0 ? null : dynamicImageArr
            },
            time: '刚刚',
            isLike: false,
            likeList: [],
            commentList: []
        }
        props.history.push({
            pathname: '/friendcircle',
            query: newDynamic
        })
    }

    // 更新动态文本
    const updateDynamicText = e => {
        setDynamicText(e.target.value)
    }

    return (
        <div id="WriteDynamic">
            <div className="dynamic-header">
                <ReturnTitle
                    text="发动态"
                    arrowColor="black"
                    background="#fff"
                    color='#000'
                    rightImg={Publish}
                    rightImgClick={publishDynamic} />
            </div>
            <div className="dynamic-body">
                <div className="textarea-content">
                    <textarea
                        name="dynamic"
                        cols="30"
                        rows="10"
                        placeholder="分享您的日常"
                        onChange={updateDynamicText}
                    />
                </div>
                <div className="select-image-content">
                    <ImagePicker
                        length="3"
                        files={dynamicImage}
                        onChange={onImagePickerChange}
                        selectable={dynamicImage.length < 10}
                        multiple={true}
                    />
                </div>
                <div className="add-tag-content">
                    <span><img src={Tag} alt="tag" />添加标签</span>
                    <span><img src={Public} alt="public" />公开</span>
                </div>
            </div>
            <div className="dynamic-footer"></div>
        </div>
    )
}

export default WriteDynamic
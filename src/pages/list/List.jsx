import React from 'react'
import './List.scss'

// component
import SearchBar from '@c/search-bar'
import ArrowMenu from '@c/arrow-menu'

// image
import Avator from './img/user'
import Arrow from './img/eee-arrow'
const List = (props) => {
    return (
        <div id="List">
            <div className="list-header">
                <div className="header-searchBar">
                    <SearchBar placeholder="搜索"></SearchBar>
                </div>
                <div className="header-item">
                    <ArrowMenu frontImg={Avator} endImg={Arrow} text="新朋友"></ArrowMenu>
                    <ArrowMenu frontImg={Avator} endImg={Arrow} text="新朋友"></ArrowMenu>
                    <ArrowMenu frontImg={Avator} endImg={Arrow} text="新朋友"></ArrowMenu>
                    <ArrowMenu frontImg={Avator} endImg={Arrow} text="新朋友"></ArrowMenu>
                    <ArrowMenu frontImg={Avator} endImg={Arrow} text="新朋友"></ArrowMenu>
                    <ArrowMenu frontImg={Avator} endImg={Arrow} text="新朋友"></ArrowMenu>
                    <ArrowMenu frontImg={Avator} endImg={Arrow} text="新朋友"></ArrowMenu>
                </div>
            </div>
            <div className="list-body">

            </div>
            <div className="list-footer">

            </div>
        </div>
    )
}

export default List
import React from 'react'
import SearchBar from '../../components/search-bar'
import ArrowMenu from '../../components/arrow-menu'
import './List.scss'
import Avator from './img/user.png'
import Arrow from './img/eee-arrow.png'
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
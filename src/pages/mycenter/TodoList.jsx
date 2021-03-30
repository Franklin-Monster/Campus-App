import React from 'react'
import './css/todo-list'

// component
import ReturnTitle from '@c/return-title'

// image 
import Add from './img/add'

const TodoList = () => {
    return (
        <div id="TodoList">
            <div className="todo-list-header">
                <ReturnTitle text="全部" rightImg={Add} />
                <div className="todo-list-title">提醒</div>
            </div>
            <div className="todo-list-body">
                <div className="todo-list-content">
                    <div className="todo-list-item">
                        <div className="todo-item-left">
                            <div className="todo-item-circle"></div>
                        </div>
                        <div className="todo-item-right">
                            <div className="todo-item-text">
                                哈哈哈哈哈哈
                                </div>
                            <div className="todo-item-time">
                                20201/1/24 16:00
                            </div>
                        </div>
                    </div>
                    <div className="todo-list-item">
                        <div className="todo-item-left">
                            <div className="todo-item-circle"></div>
                        </div>
                        <div className="todo-item-right">
                            <div className="todo-item-text">
                                哈哈哈哈哈哈
                                </div>
                            <div className="todo-item-time">
                                20201/1/24 16:00
                            </div>
                        </div>
                    </div>
                    <div className="todo-list-item">
                        <div className="todo-item-left">
                            <div className="todo-item-circle"></div>
                        </div>
                        <div className="todo-item-right">
                            <div className="todo-item-text">
                                哈哈哈哈哈哈
                                </div>
                            <div className="todo-item-time">
                                20201/1/24 16:00
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="todo-list-footer"> </div>
        </div>
    )
}

export default TodoList
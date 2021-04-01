import React, { useState, useRef } from 'react'
import './css/todo-list'
import { formatNowTime } from '@/static/js/fun'
import { todoItemList } from './help'

// component
import { List, Switch, DatePicker } from 'antd-mobile'
import ReturnTitle from '@c/return-title'

// image 
import Add from './img/add'

const TodoList = () => {
    const [todoList, setTodoList] = useState(todoItemList)
    const [newTodoTime, setNewTodoTime] = useState(new Date(Date.now()))
    const [newRemainTime, setNewRemainTime] = useState(new Date(Date.now()))
    const [newName, setNewName] = useState('')
    const [newRemark, setNewRemark] = useState('')
    const [newIsRepeat, setNewIsRepeat] = useState(false)
    const overflowRef = useRef()
    const addTodoRef = useRef()



    // 添加新的待办事项
    const addTodoItem = () => {
        const tempTodoObj = {
            name: newName,
            todoTime: formatNowTime(newTodoTime),
            remark: newRemark,
            remainTime: formatNowTime(newRemainTime),
            isRepeact: newIsRepeat,
            isFinish: false
        }
        setTodoList(() => {
            todoList.push(tempTodoObj)
            return [...todoList]
        })
        closeAddTodoItem()
    }

    // 展示待办事项详情
    const showTodoItemDetail = () => {

    }

    // 显示添加事项弹窗
    const showAddTodoItem = () => {
        overflowRef.current.style.display = 'block'
        addTodoRef.current.style.display = 'block'
    }

    // 关闭添加事项弹窗
    const closeAddTodoItem = () => {
        overflowRef.current.style.display = 'none'
        addTodoRef.current.style.display = 'none'
    }
    return (
        <div id="TodoList">
            <div className="todo-list-header">
                <ReturnTitle text="全部" />
                <div className="todo-list-title">提醒</div>
            </div>
            <div className="overflow-black" ref={overflowRef}></div>
            <div className="todo-list-body" >
                <div className="todo-list-content">
                    {
                        todoList.map((item, index) => {
                            return (
                                <div className="todo-list-item"
                                    key={item.name + index}
                                    onClick={showTodoItemDetail}
                                >
                                    <div className="todo-item-left">
                                        <div className="todo-item-circle"></div>
                                    </div>
                                    <div className="todo-item-right">
                                        <div className="todo-item-text">
                                            {item.name}
                                        </div>
                                        <div className="todo-item-time">
                                            {item.todoTime}
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className="add-todo-item-content" ref={addTodoRef}>
                <div className="add-todo-title">添加待办事项</div>
                <div className="add-todo-text-content">
                    <List>
                        <div className="add-todo-item">
                            <div className="add-todo-item-left">名称：</div>
                            <div>
                                <input type="text" placeholder="新的待办事项名称"
                                    onChange={e => setNewName(e.target.value)} />
                            </div>
                        </div>
                        <DatePicker
                            value={newTodoTime}
                            onChange={time => setNewTodoTime(time)}>
                            <List.Item arrow="horizontal">事项时间</List.Item>
                        </DatePicker>
                        <div className="add-todo-item">
                            <div className="add-todo-item-left">备注：</div>
                            <div>
                                <input type="text" placeholder="有何备注"
                                    onChange={e => setNewRemark(e.target.value)} />
                            </div>
                        </div>
                        <DatePicker
                            value={newRemainTime}
                            onChange={time => setNewRemainTime(time)}>
                            <List.Item arrow="horizontal">提醒时间</List.Item>
                        </DatePicker>
                        <List.Item
                            extra={<Switch
                                checked={newIsRepeat}
                                onChange={() => {
                                    setNewIsRepeat(!newIsRepeat)
                                }}
                            />}
                        >重复</List.Item>
                    </List>
                </div>
                <div className="add-todo-button-content">
                    <div className="add-button" onClick={addTodoItem}>添加</div>
                    <div className="cancel-button"
                        onClick={closeAddTodoItem}>取消</div>
                </div>
            </div>
            <div className="todo-list-footer-block"></div>
            <div className="todo-list-footer">
                <img src={Add} alt="add" onClick={showAddTodoItem} />
                <span>新待办事项</span>
            </div>
        </div>
    )
}

export default TodoList
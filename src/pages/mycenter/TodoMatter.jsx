import React from 'react'
import './css/todo-matter'

// component
import SearchBar from '@c/search-bar'
import ReturnTitle from '@c/return-title'

// image
import AllTodo from './img/all-todo'
import PlanTodo from './img/plan-todo'
import TodayTodo from './img/today-todo'

const TodoMatter = props => {
    return (
        <div id="TodoMatter">
            <div className="todo-header">
                <ReturnTitle text="待办事项" />
                <div className="todo-search-bar-content">
                    <SearchBar placeholder="搜索待办事项" />
                </div>
            </div>
            <div className="todo-body">
                <div className="plan-content">
                    <div className="today-content"
                        onClick={() => props.history.push('/todolist')}>
                        <div className="plan-content-item-left">
                            <img src={TodayTodo} alt="todo" />
                            <div className="plan-content-item-text">今天</div>
                        </div>
                        <div className="plan-content-item-right">
                            0
                        </div>
                    </div>
                    <div className="todo-content"
                        onClick={() => props.history.push('/todolist')}>
                        <div className="plan-content-item-left">
                            <img src={PlanTodo} alt="todo" />
                            <div className="plan-content-item-text">计划</div>
                        </div>
                        <div className="plan-content-item-right">
                            0
                        </div>
                    </div>
                </div>
                <div className="plan-content">
                    <div className="all-todo-content"
                        onClick={() => props.history.push('/todolist')}>
                        <div className="plan-content-item-left">
                            <img src={AllTodo} alt="todo" />
                            <div className="plan-content-item-text">全部</div>
                        </div>
                        <div className="plan-content-item-right">
                            0
                        </div>
                    </div>
                </div>
            </div>
            <div className="todo-footer"></div>
        </div>
    )
}

export default TodoMatter
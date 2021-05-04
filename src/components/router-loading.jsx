import React from 'react'

const RouterLoading = ({ isLoading, error }) => {
    if (isLoading) {
        return <div className="spinner">
            <div className="rect1"></div>
            <div className="rect2"></div>
            <div className="rect3"></div>
            <div className="rect4"></div>
            <div className="rect5"></div>
        </div>
    }
    else if (error) {
        return <div>Sorry, there was a problem loading the page.</div>
    }
    else {
        return null;
    }
}
export default RouterLoading
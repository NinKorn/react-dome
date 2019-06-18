import React, { Component } from 'react';
import $http from 'axios';

class News extends Component {
    state = {
        list: []
    }
    componentDidMount() {
        $http.get('http://api.tianapi.com/generalnews/', {
            params: {
                key: 'beb23c1dae2568064f121a596f4cf782',
                num: 10,
                page: 1,
                word: '四川'
            }
        }).then(
            (res) => {
                console.log(res);
                if (res.data.code === 200) {
                    this.setState({
                        list: res.data.newslist
                    })
                }
            }
        )
    }
    render() {
        const { list } = this.state
        return (<div className="news">
            {
                list.map((item, index) => (
                    <div className='news-item' key={index}>
                        <div className="news-content">
                            <img src="{ item.picUrl }" alt="" />
                            <div className="news-title">
                                {item.title}
                            </div>
                        </div>
                        <div className="news-time">
                            <p>{item.ctime}</p>
                        </div>
                    </div>
                ))
            }
        </div>)
    }
}
export default News;
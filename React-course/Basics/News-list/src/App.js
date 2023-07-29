import { Component } from "react";
import Search from "./components/search"
import NewsList from './components/news-list'
import NEWSLIST from './news.json';
export default class App extends Component {

    constructor() {
        super()
        // console.log(NEWSLIST)
        this.state = {
            newsList: NEWSLIST,
            filteredList: NEWSLIST
        }
    }
    filterList = (keywords) => {
        // console.log(keywords)
        const filteredList = this.state.newsList.filter((item) => {
            return item.title.toLowerCase().includes(keywords.toLowerCase())
        })

        this.setState({ filteredList: filteredList })
    }
    render() {
        return (
            <div>
                <h1 className="header">NewsDemo</h1>
                <Search onKeywordsChange={this.filterList} />
                <NewsList list={this.state.filteredList} />
                {/* newsList({list:[]}) */}
                {/* {new Search()} */}
            </div>
        )
    }
}

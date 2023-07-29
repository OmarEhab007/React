const NewsList = (props) => {
    console.log(props)
    if (props.list.length > 0) {
        const newsListElements = props.list.map((item) => {
            return (<div className="list-item" key={item.id}>
                <h3>{item.title}</h3>
                <p>{item.feed}</p>
            </div>)
        })
        return (
            <div className="list-comp">
                {newsListElements}
            </div>
        )
    }
    else
        return <p>No elements available</p>

}
export default NewsList;
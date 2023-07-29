import { Component } from 'react'
import Header from './components/header';
class App extends Component {
    constructor() {
        super()

        this.state = {
            name: "Mohamed",
            source: "./coco/1.jpg"
        }
    }
    clicked = () => {
        console.log('clicked')
        this.setState({ source: './coco/3.jpg' })
    }

    render() {
        console.log('render')
        const styles = {
            header: {
                background: "red",
                color: "white",
                padding: "5px",
                borderRadius: "5px"
            },
            text: {
                fontWeight: "Bold"
            }
        }
        return (
            (<div>
                <Header />
                <Header />
                <Header />
                <Header />
                <p style={styles.text}>
                    Et eirmod accusam amet voluptua et no ipsum diam. Lorem gubergren sanctus ut erat sed erat erat duo invidunt. Amet.
                </p>
                <img src={this.state.source} alt='img'/>
                <input type="text" value={this.state.name} onChange={(e) => {
                    this.setState({ name: e.target.value })
                }} />
                <input type="button" onClick={this.clicked} value="click" />
                {this.state.name}
            </div>)
        )
    }
}

export default App;




















// const App =  ()=>{
// let name = "Mohamed"
// const styles = {
//     header: {
//         background: "red",
//         color: "white",
//         padding: "5px",
//         borderRadius: "5px"
//     },
//     text: {
//         fontWeight: "Bold"
//     }
// }
//     return (<div>
//     <h1 className="header" style={styles.header}>Hello world!. {4 + 5}</h1>
//     <p style={styles.text}>
//         Et eirmod accusam amet voluptua et no ipsum diam. Lorem gubergren sanctus ut erat sed erat erat duo invidunt. Amet.
//                 </p>
//     <div id="test">
//         <p>test and test</p>
//         <p>test and test</p>
//         <p>test and test</p>
//     </div>
//     <input type="text"  onChange={(e) => {
//         name = "Default"
//         console.log(name)
//     }} />
//     {name}
// </div>)
// }

// export default App;
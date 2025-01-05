import './homePage.scss'
import SearchBar from '../../components/searchBar/SearchBar'
function HomePage(){
    return(
        <div className="homePage">
            <div className="textContainer">
                <div className="wrapper">
                    <h1>买房租房，就上蜗蜗找房</h1>
                    <p>蜗蜗找房，专业的租房、买房、租房平台，提供专业的租房、买房、租房服务，让您轻松找到满意的房源。</p>
                    <SearchBar />
                    <div className="boxes">
                        <div className="box">
                            <h1>10+</h1>
                            <h2>年行业经验</h2>
                        </div>
                        <div className="box">
                            <h1>90w+</h1>
                            <h2>满意客户</h2>   
                        </div>
                        <div className="box">
                            <h1>100w+</h1>
                            <h2>优质房源</h2>
                        </div>
                    </div>  
                </div>
            </div>
            <div className="imgContainer">
                <img src="/bg.png" alt="" />
            </div>
        </div>
    )
}
export default HomePage;
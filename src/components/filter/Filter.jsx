import './Filter.scss'

function Filter() {
    return (
        <div className="filter">
            <h1>找到结果<b>台州</b></h1>
            <div className="top">
                <div className="item">
                    <label htmlFor="city">城市</label>
                    <input type="text" id="city" name="city" placeholder="请输入城市" />
                </div>
            </div>
            <div className="bottom">
                <div className="item">
                    <label htmlFor="type">买房/租房</label>
                    <select name="type" id="type">
                        <option value="">请选择</option>
                        <option value="buy">买房</option>
                        <option value="rent">租房</option>
                    </select>
                </div>
                <div className="item">
                    <label htmlFor="property">房产类型</label>
                    <select name="property" id="property">
                        <option value="">请选择</option>
                        <option value="apartment">公寓</option>
                        <option value="house">别墅</option>
                        <option value="condo">联排</option>
                        <option value="land">商铺</option>
                    </select>
                </div>
                <div className="item">
                    <label htmlFor="minPrice">最低价</label>
                    <input
                        type="number"
                        id="minPrice"
                        name="minPrice"
                        placeholder="请输入"
                    />
                </div>
                <div className="item">
                    <label htmlFor="maxPrice">最高价</label>
                    <input
                        type="text"
                        id="maxPrice"
                        name="maxPrice"
                        placeholder="请输入"
                    />
                </div>
                <div className="item">
                    <label htmlFor="bedroom">卧室数量</label>
                    <input
                        type="text"
                        id="bedroom"
                        name="bedroom"
                        placeholder="请输入"
                    />
                </div>
                <button>
                    <img src="/search.png" alt="" />
                </button>
            </div>
        </div>
    )
}

export default Filter
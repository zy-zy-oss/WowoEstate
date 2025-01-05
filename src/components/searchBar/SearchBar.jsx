import './searchBar.scss'
import { useState } from 'react'
const types = ['buy', 'rent']
function SearchBar() {
    const [query, setQuery] = useState({
        type: 'buy',
        location: '',
        minPrice: 0,
        maxPrice: 0,

    })
    const switchType = (val) => {
        setQuery(prev => ({ ...prev, type: val }))
    }
    return (
        <div className="searchBar">
            <div className="type">
                {types.map((type) => (
                    <button key={type} onClick={() => switchType(type)} className={query.type === type ? 'active' : ''}>
                        {type === 'buy' ? '买房' : '租房'}
                    </button>
                ))}
            </div>
            <form action="">
                <input type="text" name="location" placeholder="请输入地区" />
                <input type="number" name="minPrice" min={0} max={10000000} placeholder="最低价" />
                <input type="number" name="maxPrice" min={0} max={10000000} placeholder="最高价" />
                <button type="submit">
                    <img src="/search.png" alt="" />
                </button>
            </form>


        </div>
    )
}
export default SearchBar;
import './navbar.scss'
import { useState } from 'react';
function Navbar(){
    const [open, setOpen] = useState(false);
    return(
        <nav>
            <div className="left">
                <a className="logo" href="/">
                    <img src="/logo.png"  alt="" />
                    <span>蜗蜗找房</span>
                </a>
                <a href="/">首页</a>
                <a href="/">关于我们</a>
                <a href="/">联系我们</a>
                <a href="/">房源</a>
            </div>
            <div className="right">
                <a href="/">登录</a>
                <a href="/" className="register">注册</a>
                <div className="menuIcon" onClick={() => setOpen(prev => !prev)}>
                    <img src="/menu.png" alt="" />
                </div>
                <div className={`menu ${open ? 'active' : ''}`}>
                <a href="/">首页</a>
                <a href="/">关于我们</a>
                <a href="/">联系我们</a>
                <a href="/">房源</a>
                <a href="/">登陆</a>
                <a href="/">注册</a>
                </div>
            </div>
        </nav>
    )
    
}
export default Navbar;
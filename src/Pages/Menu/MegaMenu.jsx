import { useState } from 'react'
import './MegaMenu.css'
import MenuItem from './MenuItem'
const data_menu = [
    {
        id: 'lap_top',
        title: 'Laptop',
        icon: <i className="bi bi-laptop"></i>
    },
    {
        id: 'lap_top_gaming',
        title: "Laptop Gaming",
        icon:<i className="bi bi-laptop-fill"></i>
    },
    {
        id: 'mouse',
        title:"Mouse",
        icon:<i className="bi bi-mouse2"></i>
    },
    {
        id: 'headphone',
        title: "HeadPhone",
        icon:<i className="bi bi-headphones"></i>
    },
    {
        id: 'keyboard',
        title: "KeyBoard",
        icon:<i className="bi bi-keyboard"></i>
    },
    {
        id: 'pcspecial',
        title: "Pc Special",
        icon:<i className="bi bi-pc-display-horizontal"></i>
    },
    {
        id: 'linhkienpc',
        title: "Linh kiện PC",
        icon:<i className="bi bi-cpu"></i>
    },
    {
        id: 'apple',
        title: "Apple",
        icon:<i className="bi bi-apple"></i>
    },
    {
        id: 'chuot+lotchuot',
        title: "Chuột + lót chuột",
        icon:<i className="bi bi-mouse2-fill"></i>
    },
    {
        id: 'Ghevaban',
        title: "Ghế và bàn",
        icon:<i className="bi bi-wallet-fill"></i>
    }
   
]
export default function MegaMenu() {
    const [isShowMenuItem, setIsShowMenuItem] = useState(false)
    const [typedata, setTypeData] = useState(null)

    const handleWhenHover = (id) => {
        setIsShowMenuItem(true)
        setTypeData(id)
    }

    return <>
    <div className="wrap-list-megamenu">
    <ul  onMouseLeave={()=>setIsShowMenuItem(false)}>
        {
            data_menu.map((item) => (
                <li className="item-megamenu"
                    key={item.id}
                    onMouseEnter={() => handleWhenHover(item.id)}
                >
                    {item.icon}-   
                    {item.title}
                </li>
            )
            )
        }
        {isShowMenuItem && <MenuItem typedata={typedata} />}
    </ul>
    </div>
    </>
}

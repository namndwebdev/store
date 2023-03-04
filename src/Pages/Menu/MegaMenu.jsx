import { useState, useEffect } from 'react'
import './MegaMenu.css'
import MenuItem from './MenuItem'

export default function MegaMenu() {
    const [dataMega, SetDataMega] = useState([])
    const [isShowMenuItem, setIsShowMenuItem] = useState(false)
    const [typedata, setTypeData] = useState(null)
    const [idactive,SetIdActive] = useState(null)
    

    useEffect(() => {
        fetch('https://backoffice.nodemy.vn/api/categories')
            .then((res) => res.json())
            .then((data) => {
                SetDataMega(data.data);
            })
    }, [])

   const handleWhenHover = (id) => {
        setIsShowMenuItem(true)
        setTypeData(id)
        SetIdActive(id)
    }

    return <>
        <div className="wrap-list-megamenu">
            <ul onMouseLeave={() => setIsShowMenuItem(false)}>
                {
                    dataMega.map((item) => (
                        <li
                            className="item-megamenu hovermegamenu"
                            key={item.id}
                            onMouseEnter={() =>handleWhenHover(item.id)}
                            onMouseLeave={()=>{SetIdActive(null)}}
                        >
                            {item.attributes.name}
                        </li>
                    )
                    )
                }
                {isShowMenuItem && <MenuItem typedata={typedata} />}
            </ul>
        </div>
    </>
}

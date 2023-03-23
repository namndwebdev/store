import { useState, useEffect } from 'react'
import './MegaMenu.css'
import MenuItem from './MenuItem'

export default function MegaMenu() {
  const [dataMega, SetDataMega] = useState([]);
  const [isShowMenuItem, setIsShowMenuItem] = useState(false);
  const [typedata, setTypeData] = useState(null);
  const [idactive, SetIdActive] = useState(null);

  useEffect(() => {
    fetch(
      "https://backoffice.nodemy.vn/api/dropdown-tabs?populate[0]=section&populate[1]=section.image&populate[2]=section.link"
    )
      .then((res) => res.json())
      .then((data) => {
        SetDataMega(data.data);
      });
  }, []);

  const handleWhenHover = (data) => {
    setIsShowMenuItem(true);
    setTypeData(data);
    SetIdActive(data);
  };

    return <>
        <div className="wrap-list-megamenu">
            <ul onMouseLeave={() => setIsShowMenuItem(false)}>
                {
                    dataMega.map((item) => (
                        <li
                            className="item-megamenu hovermegamenu"
                            key={item.id}
                            onMouseEnter={() =>handleWhenHover(item.attributes)}
                            onMouseLeave={()=>{SetIdActive(null)}}
                        >
                            <span dangerouslySetInnerHTML={{ __html: item.attributes.icon }} />-
                            {item.attributes.label}
                        </li>
                    )
                    )
                }
                {isShowMenuItem && <MenuItem typedata={typedata}   />}
            </ul>
        </div>
    </>
}

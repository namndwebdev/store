import { useState, useEffect } from "react";
import "./MegaMenu.css";
import MenuItem from "./MenuItem";
import ContentMenu from "./ContentMenu";
export default function MegaMenu() {
  const [dataMega, SetDataMega] = useState([]);
  const [isShowMenuItem, setIsShowMenuItem] = useState(false);
  const [typedata, setTypeData] = useState(null);
  const [idactive, SetIdActive] = useState(null);

  useEffect(() => {
    fetch(
      "https://backoffice.nodemy.vn/api/dropdown-tabs?populate[0]=section&populate[1]=section.image&populate[2]=section.link&populate[3]=bannerFeatures"
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

    const handleWhenHover = (data) => {
        setIsShowMenuItem(true)
        setTypeData(data)
        SetIdActive(data)
    }

    return <>
        <div onMouseLeave={() => setIsShowMenuItem(false)} className="wrap-list-megamenu">
            
            <ul 
            
            >
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
            </ul >
            <div  className='content-70'>
                <ContentMenu></ContentMenu>
            </div> 
            {isShowMenuItem && <MenuItem typedata={typedata} />}
        </div>

        {isShowMenuItem && <MenuItem typedata={typedata} />}
      </div>
    </>
  );
}

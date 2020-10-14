import React, {useState} from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  font-size: 24px;
  > ul{
    display: flex;
    background: #1DA161;
    color: white;
    >li{
      width: 50%;
      text-align: center;
      padding: 16px 0;
      position: relative;
      &.selected::after{
        position: absolute;
        display: block;
        content: '';
        height: 3px;
        background: #333333;
        bottom: 0;
        width: 100%;
        left: 0;
      }
    }
  }

`;
const CategorySection: React.FC = () => {
  const [categoryList] = useState<("-" | "+")[]>(["+", "-"]);
  const [category, setCategory] = useState("-");
  const categoryMap = {"+": "收入", "-": "支出"};
  return (
    <Wrapper>
      <ul>
        {categoryList.map(c =>
          <li className={category === c ? "selected" : ""}
              onClick={() => setCategory(c)} key={c}
          >{categoryMap[c]}</li>
        )}

      </ul>
    </Wrapper>

  );
};
export {CategorySection};
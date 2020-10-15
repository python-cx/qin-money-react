import Layout from "../components/Layout";
import React, {useState} from "react";
import styled from "styled-components";
import {TagsSection} from "components/money/TagsSection";
import {NotesSection} from "components/money/NotesSection";
import {CategorySection} from "components/money/categorySection";
import {NumberPadSection} from "../components/money/NumberPadSection";
import {useRecords} from "../icons/useRecords";


type Category = "-" | "+"
const MyLayout = styled(Layout)`
//给通用组件传入指定的className及样式
 display: flex;
 flex-direction: column;
`;
const defaultFromData = {

  tagIds: [] as number[],
  note: "",
  category: "-" as Category,
  amount: 0

};
const Money = () => {
  const {records, addRecord} = useRecords();
  const [selected, setSelected] = useState(defaultFromData);
  console.log(selected);
  const onChange = (obj: Partial<typeof selected>) => {
    setSelected({
      ...selected,
      ...obj
    });
  };
  const submit = () => {
    if (addRecord(selected)) {
      alert("保存成功");
    }
    setSelected(defaultFromData);
    window.history.go(0);
  };
  return (
    <MyLayout>
      {JSON.stringify(records)}
      <TagsSection value={selected.tagIds} onChange={tagIds => onChange({tagIds})}/>
      <NotesSection value={selected.note} onChange={note => onChange({note})}/>
      <CategorySection value={selected.category} onChange={category => onChange({category})}/>
      <NumberPadSection value={selected.amount} onChange={amount => onChange({amount})}
                        onOk={submit}/>
    </MyLayout>);
};

export default Money;
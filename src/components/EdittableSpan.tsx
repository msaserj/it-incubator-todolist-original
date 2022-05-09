import React, {ChangeEvent, useState} from 'react';

type EdittableSpanPropstype = {
    title: string
    callBack: (newTitle: string)=> void
}

export const EdittableSpan = (props: EdittableSpanPropstype) => {

    let[edit, setEdit]=useState(false)
    let [newTitle, setNewTitle] = useState(props.title)

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTitle(e.currentTarget.value)
    }

    const onDubleClickHandler = () => {
      setEdit(!edit)
        props.callBack(newTitle)
    }
    return (

        edit
           ? <input value={newTitle} onChange={onChangeHandler} onBlur={onDubleClickHandler} autoFocus />
           : <span onDoubleClick={onDubleClickHandler} >{props.title}</span>
    );
};

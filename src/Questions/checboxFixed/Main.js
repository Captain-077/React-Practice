import React, { useState } from 'react';
import List from './List';

export default function Main() {
    const arr = ["play cricket", "Read a book", "Play video game"];
    const [list, setList] = useState(arr);
    const [checkedItems, setCheckedItems] = useState({});

    const handleDelete = (target) => {
        let newArr = list.filter((_, index) => index !== target);
        setList(newArr);

        // Update checkedItems to remove the deleted item
        let newCheckedItems = { ...checkedItems };
        delete newCheckedItems[target];
        setCheckedItems(newCheckedItems);
    };

    const handleCheck = (index, isChecked) => {
        setCheckedItems(prevState => ({ ...prevState, [index]: isChecked }));
    };

    return (
        <div className='flex flex-col items-center gap-10'>
            <h1>CheckList</h1>
            {list.map((item, index) => (
                <List
                    key={index}
                    item={item}
                    index={index}
                    handleDelete={handleDelete}
                    handleCheck={handleCheck}
                    isChecked={checkedItems[index] || false}
                />
            ))}
        </div>
    );
}

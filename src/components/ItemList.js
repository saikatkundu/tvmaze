import React from 'react';
import Item from './Item';

const ItemList = ({ data }) => {
    return (
        <div>
            {
                data && data.map(d => {
                    const { name, id, image, summary } = d?.show;
                    return (
                        <Item
                            key={id} name={name}
                            id={id} image={image}
                            summary={summary}
                        />
                    )
                })
            }
        </div>
    )
}

export default ItemList

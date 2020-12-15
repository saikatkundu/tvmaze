import React from 'react'

const Item = ({ image, name, summary }) => {
    return (
        <div className="card cardDataContainer">
            <div className="card-body row bg-default ">
                <div className="col-6 col-md-4 col-lg-3">
                    <div className="imgContainer shadow rounded">
                        <img className="itemImg" src={image?.medium} alt={name} />
                    </div>
                </div>
                <div className="col-6 col-md-8 col-lg-9">
                    <h1 className="blue title">{name}</h1>
                    <span className="text-justify text gray" dangerouslySetInnerHTML={{ __html: summary }}></span>
                    <button className="btn btn-blue btn-sm mt-2">Show Episodes</button>
                </div>
            </div>
        </div>
    )
}

export default Item

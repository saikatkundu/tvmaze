import React, { useState } from 'react';

const SearchInput = ({ fetchApi }) => {
    const [searchInput, setSearchInput] = useState("");
    return (
        <form className="row mt-5 d-flex justify-content-center">
            <div className="col-sm-6 mb-2 ">
                <input type="text" className="form-control form-control-lg searchInput"
                    id="inputPassword2" placeholder="search show titles"
                    value={searchInput} onChange={e => setSearchInput(e.target.value)}
                />
            </div>
            <div className="col-2 col-md-1">
                <button type="submit"
                    className="btn btn-blue btn-lg mb-2"
                    onClick={e => fetchApi(e, searchInput)}>Search</button>
            </div>
        </form>
    )
}

export default SearchInput

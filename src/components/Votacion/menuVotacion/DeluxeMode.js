import React from 'react'

export const DeluxeMode = ({data, inputChange, competidor, total}) => {

    return (
        <div className="mode__main">
            <p>{competidor}</p>
            <div>
                <input name="input1" value={data.input1} onChange={inputChange} autoComplete="off"  className="mode__input"/>
                <input name="input2" value={data.input2} onChange={inputChange} autoComplete="off"  className="mode__input"/>
                <input name="input3" value={data.input3} onChange={inputChange} autoComplete="off"  className="mode__input"/>
                <input name="input4" value={data.input4} onChange={inputChange} autoComplete="off"  className="mode__input2"/>
                <input name="input5" value={data.input5} onChange={inputChange} autoComplete="off"  className="mode__input"/>
                <input name="input6" value={data.input6} onChange={inputChange} autoComplete="off"  className="mode__input"/>
                <input name="input7" value={data.input7} onChange={inputChange} autoComplete="off"  className="mode__input"/>
                <input name="input8" value={data.input8} onChange={inputChange} autoComplete="off"  className="mode__input"/>
                <input name="input9" value={data.input9} onChange={inputChange} autoComplete="off"  className="mode__input"/>
                <input name="input10" value={data.input10} onChange={inputChange} autoComplete="off"  className="mode__input"/>
                <input name="input11" value={data.input11} onChange={inputChange} autoComplete="off"  className="mode__input"/>
                <input name="input12" value={data.input12} onChange={inputChange} autoComplete="off"  className="mode__input2"/>
                <input name="input13" value={data.input13} onChange={inputChange} autoComplete="off"  className="mode__input"/>
                <input name="input14" value={data.input14} onChange={inputChange} autoComplete="off"  className="mode__input"/>
                <input value={total} readOnly tabIndex="-1"  className="mode__total"/>
            </div>
        </div>
    )
}

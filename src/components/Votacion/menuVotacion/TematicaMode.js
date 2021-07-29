import React from 'react'

export const TematicaMode = ({data, inputChange, competidor, total}) => {

    return (
        <div className="mode__main">
            <p>{competidor}</p>
            <div>
                <input name="input1" value={data.input1} onChange={inputChange} autoComplete="off"  className="mode__input"/>
                <input name="input2" value={data.input2} onChange={inputChange} autoComplete="off"  className="mode__input"/>
                <input name="input3" value={data.input3} onChange={inputChange} autoComplete="off"  className="mode__input"/>
                <input name="input4" value={data.input4} onChange={inputChange} autoComplete="off"  className="mode__input"/>
                <input name="input12" value={data.input12} onChange={inputChange} autoComplete="off"  className="mode__input2"/>
                <input name="input13" value={data.input13} onChange={inputChange} autoComplete="off"  className="mode__input"/>
                <input name="input14" value={data.input14} onChange={inputChange} autoComplete="off"  className="mode__input"/>
                <input value={total} readOnly tabIndex="-1"  className="mode__total"/>
            </div>
        </div>
    )
}

import React from 'react'

export const DefaultModeRes = ({data, inputChange, competidor, inputChangeEx, total}) => {

    return (
        <div className="mode__main">
            <p>{competidor}</p>
            <div className="mode__res">
                <div className="mode__inputRes">
                    <input name="input1" value={data.input1} onChange={inputChangeEx} autoComplete="off" className="mode__input"/>
                    <input name="input15" checked={data.input15} onChange={inputChange} type="checkbox" tabIndex="-1" className="mode__checkbox"/>
                </div>
                <div className="mode__inputRes">
                    <input name="input2" value={data.input2} onChange={inputChangeEx} autoComplete="off" className="mode__input"/>
                    <input name="input16" checked={data.input16} onChange={inputChange} type="checkbox" tabIndex="-1" className="mode__checkbox"/>
                </div>
                <div className="mode__inputRes">
                    <input name="input3" value={data.input3} onChange={inputChangeEx} autoComplete="off" className={`mode__input ${data.input17 && "mode__borderInput"}`} />
                    <input name="input17" checked={data.input17} onChange={inputChange} type="checkbox" tabIndex="-1" className="mode__checkbox"/>
                </div>
                <div className="mode__inputRes">
                    <input name="input4" value={data.input4} onChange={inputChangeEx} autoComplete="off" className="mode__input"/>
                    <input name="input18" checked={data.input18} onChange={inputChange} type="checkbox" tabIndex="-1" className="mode__checkbox"/>
                </div>
                <div className="mode__inputRes">
                    <input name="input5" value={data.input5} onChange={inputChangeEx} autoComplete="off" className="mode__input"/>
                    <input name="input19" checked={data.input19} onChange={inputChange} type="checkbox" tabIndex="-1" className="mode__checkbox"/>
                </div>
                <div className="mode__inputRes">
                    <input name="input6" value={data.input6} onChange={inputChangeEx} autoComplete="off" className="mode__input"/>
                    <input name="input20" checked={data.input20} onChange={inputChange} type="checkbox" tabIndex="-1" className="mode__checkbox"/>
                </div>
                <div className="mode__inputRes">
                    <input name="input12" value={data.input12} onChange={inputChange} autoComplete="off" className="mode__input2"/>
                    <input type="checkbox" className="opacity-0" tabIndex="-1"/>
                </div>
                <div className="mode__inputRes">
                    <input name="input13" value={data.input13} onChange={inputChange} autoComplete="off" className="mode__input"/>
                    <input type="checkbox" className="opacity-0" tabIndex="-1"/>
                </div>
                <div className="mode__inputRes">
                    <input name="input14" value={data.input14} onChange={inputChange} autoComplete="off" className="mode__input"/>  
                    <input type="checkbox" className="opacity-0" tabIndex="-1"/>
                </div>
                <div className="mode__inputRes">
                    <input value={total} readOnly tabIndex="-1" className="mode__total"/>
                    <input type="checkbox" className="opacity-0" tabIndex="-1"/>
                </div>
            </div>
        </div>
    )
}

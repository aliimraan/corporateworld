import React from 'react'

export default function Input({type,placeholder,label,onChange}) {
    return (
        <div>
             <div className="form-group">
                         <label className="form-control-label text-muted">{label}</label>
                        <input type={type}  placeholder={placeholder} className="form-control" onChange={onChange}/>
                         </div>
        </div>
    )
}

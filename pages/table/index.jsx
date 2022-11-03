import React, { useState, useEffect } from "react"

export default function Table({tableData}) {
    

    const renderColumns = (
        tableData.columns.map((c, index) => {
            return (
                <th key={index} >{c}</th>
            )
        })
    )

    const renderRows = (
        tableData.rows.map((r) => {
           return (
                <tbody key={r.folio} >
                    <tr>
                        <th><input type="radio" /></th>
                        <td className='num'>{r.folio}</td>
                        <td>{r.proveedor}</td>
                        <td>{r.tipo}</td>
                        <td className='num'>{`$${r.monto}`}</td>
                        <td>{r.fechaDePago}</td>
                    </tr>
                </tbody>
            )
        })
    )
    
    return (
        <div className="table">
            <div className="table-container">
                <table className="table-container-components">
                    <thead>
                        <tr>
                            <th><input type="radio" /></th>
                            {renderColumns}
                        </tr>
                    </thead>

                    {renderRows}

                </table>
            </div>
        </div>

    )
}

// Pendiente
// 1. cambiar colores de las lineas mediante array en <SASS></SASS>
// 2. cuadrar la parte del fondo de las columnas azul en table, tal vez directamente en performance no afecte el responsive
// 3. hacer la pagina responsive 
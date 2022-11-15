import React, { useState, useEffect } from "react"
import formatNumber from "../../services/formatNumber";


export default function Table({tableData}) {
    
    const [data, setData] = useState([])

    useEffect( () => {
        setData(tableData.rows)
    },[]);

    useEffect( () => {},[data]);

    async function orderTable(arr, type) {
        const orderArray = await arr.sort((a, b) => {
            if (a[type] > b[type]) return 1;
            if (a[type] < b[type]) return -1;
            return 0;
        });

        await setData(orderArray)
    }

    const handleFilter = (e) => {
        setData([])

        if(e.target.id === 'N° Folio') orderTable(tableData.rows, 'folio')
        if(e.target.id === 'Proveedor')  orderTable(tableData.rows, 'proveedor')
        if(e.target.id === 'Tipo') orderTable(tableData.rows, 'tipo')
        if(e.target.id === 'Monto') orderTable(tableData.rows, 'monto')
        if(e.target.id === 'Fecha de pago') orderTable(tableData.rows, 'fechaDePago')
    }

    const renderColumns = (
        tableData.columns.map((c, index) => {
            return (
                <th onClick={(e) => {handleFilter(e)}} className='th' id={c} key={index}>{c}</th>
            )
        })
    )

    const renderRows = (
        data && data.length > 0
        ?   data.map((r) => {
                return (
                        <tbody key={r.folio} >
                            <tr>
                                <th><input className="radio" type="radio" /></th>
                                <td className='num'>${formatNumber(r.folio)}</td>
                                <td>{r.proveedor}</td>
                                <td>{r.tipo}</td>
                                <td className='num'>${formatNumber(r.monto)}</td>
                                <td>{r.fechaDePago}</td>
                            </tr>
                        </tbody>
                    )
                }
            )
        :   <div></div>
    )
    
    return (
        <div className="table">
        {
            data && data.length > 0
            ?   <div className="table-container">
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
            :   <div className="table-loader">
                    <p>Loading...</p>
                </div>
        }
        </div>
        

    )
}

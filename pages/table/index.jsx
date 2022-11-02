export default function Table({tableData}) {

    const renderColumns = (
        tableData.columns.map((c) => {
            return (
                <th>{c}</th>
            )
        })
    )

    const renderRows = (
        tableData.rows.map((r) => {
           return (
                <tbody>
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
                <div className="table-container-on"/>
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
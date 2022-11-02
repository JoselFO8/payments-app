export default function Table() {
    return (
        <div className="table">
            <div className="table-container">
                <div className="table-container-on"/>
                <table className="table-container-components">
                    <thead>
                        <tr>
                            <th><input type="radio" /></th>
                            <th>N° Folio</th>
                            <th>Proveedor</th>
                            <th>Tipo</th>
                            <th>Monto</th>
                            <th>Fecha de pago</th>
                        </tr>
                    </thead>
                    
                    <tbody>
                        <tr>
                            {/* <th scope="row">1</th> */}
                            <th><input type="radio" /></th>
                            <td className='num'>654654</td>
                            <td>Soc import Y Export Bach Ltda</td>
                            <td>Cedida</td>
                            <td className='num'>$100.448.159</td>
                            <td>Fecha de pago</td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <th><input type="radio" /></th>
                            <td className='num'>654654</td>
                            <td>Soc import Y Export Bach Ltda</td>
                            <td>Cedida</td>
                            <td className='num'>$100.448.159</td>
                            <td>Fecha de pago</td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <th><input type="radio" /></th>
                            <td className='num'>654654</td>
                            <td>Soc import Y Export Bach Ltda</td>
                            <td>Cedida</td>
                            <td className='num'>$100.448.159</td>
                            <td>Fecha de pago</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

    )
}
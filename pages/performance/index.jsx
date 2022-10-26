export default function Performance () {
    return (
        <div className="performance-container">

            <div className="performance-container__payments">
                <h4 className="performance-container__payments-title"></h4>
                <p className="performance-container__payments-secondary">Linea de credito</p>
                <div className="performance-container__payments-line">
                    <p className="performance-container__payments-line-primary">$ 150.000.000</p>
                    <button className="performance-container__payments-line-button">Incrementar linea</button>
                </div>
                <div className="performance-container__payments-consumed">
                    <p className="performance-container__payments-consumed-quaternary">Consumido</p>
                    <p className="performance-container__payments-consumed-quaternary">Disponible</p>
                    <div className="row">
                        <p className="performance-container__payments-consumed-secondary">1 150.000.000</p>
                        <p className="performance-container__payments-consumed-secondary">1 0</p>
                    </div>
                    <p className="performance-container__payments-consumed-progress">barra progreso</p>
                    <div className="row">
                        <p className="performance-container__payments-consumed-terciary">Proxima deuda a pagar</p>
                        <p className="performance-container__payments-consumed-terciary">07 de octubre de 2021</p>
                    </div>
                </div>
            </div>
 
            <div className="performance-container__graphic">
                <h4 className="performance-container__graphic-title">Performance</h4>
                <select name="" id="" className="performance-container__graphic-order"></select>
                <div className="performance-container__graphic-statistics"></div>
            </div>

            <div className="performance-container__pending-payments">
                {/* Crear en un componente aparte, de tal forma que se pueda reutilizar mediante el link mostrar todo */}
                <h4 className="performance-container__pending-payments-title">Facturas por pagar</h4>
                <a href="" className="performance-container__pending-payments-link">Ver todo</a>
                <table className="performance-container__pending-payments-table">
                    <thead>
                        <tr>
                            <th>N° Folio</th>
                            <th>Proveedor</th>
                            <th>Tipo</th>
                            <th>Monto</th>
                            <th>Fecha de pago</th>
                        </tr>
                    </thead>
                    
                    <tbody>
                        <tr>
                            <td>654654</td>
                            <td>Soc import Y Export Bach Ltda</td>
                            <td>Cedida</td>
                            <td>$ 100.448.159</td>
                            <td>Fecha de pago</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            
        </div>
    )
}
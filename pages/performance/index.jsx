import Graphyc from '../graphyc/index'

export default function Performance () {
    return (
        <div className="performance-container">
 
            <div className="performance-container__graphic">
                <div className="performance-container__graphic-row">
                    <h4 className="performance-container__graphic-row-title">Performance</h4>
                    <select name="" id="" className="performance-row-container__graphic-order"></select>
                </div>
                <div className="performance-container__graphic-statistics">
                    <Graphyc/>
                </div>
            </div>

            <div className="performance-container__pending-payments">
                {/* Crear en un componente aparte, de tal forma que se pueda reutilizar mediante el link mostrar todo */}
                <div className="performance-container__pending-payments-row">
                    <h4 className="performance-container__pending-payments-title">Facturas por pagar</h4>
                    <a href="" className="performance-container__pending-payments-link">Ver todo</a>
                </div>
                <table className="table table-striped performance-container__pending-payments-table">
                    <thead className="head">
                        <tr>
                            <th scope="col">N° Folio</th>
                            <th scope="col">Proveedor</th>
                            <th scope="col">Tipo</th>
                            <th scope="col">Monto</th>
                            <th scope="col">Fecha de pago</th>
                        </tr>
                    </thead>
                    
                    <tbody>
                        <tr>
                            {/* <th scope="row">1</th> */}
                            <td className='num'>654654</td>
                            <td>Soc import Y Export Bach Ltda</td>
                            <td>Cedida</td>
                            <td className='num'>$100.448.159</td>
                            <td>Fecha de pago</td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            {/* <th scope="row">1</th> */}
                            <td className='num'>654654</td>
                            <td>Soc import Y Export Bach Ltda</td>
                            <td>Cedida</td>
                            <td className='num'>$100.448.159</td>
                            <td>Fecha de pago</td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            {/* <th scope="row">1</th> */}
                            <td className='num'>654654</td>
                            <td>Soc import Y Export Bach Ltda</td>
                            <td>Cedida</td>
                            <td className='num'>$100.448.159</td>
                            <td>Fecha de pago</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="performance-container__payments">
                <div className="performance-container__payments-row">
                    <h4 className="performance-container__payments-row-title">Payments</h4>
                </div>

                <p className="performance-container__payments-secondary">Linea de credito</p>

                <div className="performance-container__payments-line">
                    <p className="performance-container__payments-line-primary">$150.000.000</p>
                    <button className="performance-container__payments-line-button">Incrementar linea</button>
                </div>

                <div className="performance-container__payments-consumed">

                    <div className="performance-container__payments-consumed-row">
                        <p className="performance-container__payments-consumed-row-quaternary">Consumido</p>
                        <p className="performance-container__payments-consumed-row-quaternary">Disponible</p>
                    </div>
                    <div className="performance-container__payments-consumed-row">
                        <p className="performance-container__payments-consumed-row-secondary">$150.000.000</p>
                        <p className="performance-container__payments-consumed-row-secondary">$0</p>
                    </div>
                    <progress 
                        className="performance-container__payments-consumed-progress" 
                        // id="file" 
                        max="100" 
                        value="70"
                    > 70% </progress>
                    <div className="performance-container__payments-consumed-row">
                        <p className="performance-container__payments-consumed-row-terciary">Proxima deuda a pagar</p>
                        <p className="performance-container__payments-consumed-row-terciary">07 de octubre de 2021</p>
                    </div>
                </div>

                <div className="performance-container__payments-payroll">
                    <p className="performance-container__payments-payroll-secondary">Mis nominas</p>
                    
                    <div className="performance-container__payments-payroll-invoice">
                        <div className="performance-container__payments-payroll-invoice-date">
                            <p>Facturas del 07 Octubre</p>
                        </div>
                        <div className="performance-container__payments-payroll-invoice-table">
                            <table className="table table-hover">
                                <thead className="head">
                                    <tr>
                                        <th className="borders" scope="col">Facturas</th>
                                        <th className="borders" scope="col">Proveedores</th>
                                        <th className="borders" scope="col">Monto</th>
                                        <th className="borders" scope="col">Fecha de pago</th>
                                    </tr>
                                </thead>
                                
                                <tbody className="body">
                                    <tr>
                                        <td className="borders num">238</td>
                                        <td className="borders num">32</td>
                                        <td className="borders num">$148017159</td>
                                        <td className="borders num">07 Oct. 2021</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="performance-container__payments-payroll-invoice">
                        <div className="performance-container__payments-payroll-invoice-date">
                            <p>Facturas del 07 Octubre</p>
                        </div>
                        <div className="performance-container__payments-payroll-invoice-table">
                            <table className="table table-hover">
                                <thead className="head">
                                    <tr>
                                        <th className="borders" scope="col">Facturas</th>
                                        <th className="borders" scope="col">Proveedores</th>
                                        <th className="borders" scope="col">Monto</th>
                                        <th className="borders" scope="col">Fecha de pago</th>
                                    </tr>
                                </thead>
                                
                                <tbody className="body">
                                    <tr>
                                        <td className="borders num">238</td>
                                        <td className="borders num">32</td>
                                        <td className="borders num">$148017159</td>
                                        <td className="borders num">07 Oct. 2021</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>

            </div>
            
        </div>
    )
}
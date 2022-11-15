import Graphyc from './graphyc/index'
import Table from './table/index'
import formatNumber from '../services/formatNumber'

export default function Performance () {
    const data = {
        chartData: {
            labels: [ 'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto' , 'Setiembre'], 
            item1: [ 50, 110, 80, 160, 105, 140, 175, 96, 80 ],
            item2: [ 60, 130, 150, 165, 130, 120, 160, 150, 150 ]
        },
    
        tableData: {
            columns: [ 'N° Folio', 'Proveedor', 'Tipo', 'Monto', 'Fecha de pago' ],
            rows: [ 
                { folio: 6574743, proveedor: 'Soc. Import. Y Exp. Bash Ltda.', tipo: 'Cedida', monto: 100448159, fechaDePago: '21-10-15' },
                { folio: 6574742, proveedor: 'Cairns & associates S.A.', tipo: 'In process', monto: 200500000, fechaDePago: '21-10-07' },
                { folio: 6574741, proveedor: 'Actions and services S.A.S.', tipo: 'Cedida', monto: 80789100, fechaDePago: '21-10-01' },
            ]
        }
    }

    const renderLines = (
        Object.keys(data.chartData).filter(i => i.includes('item')).map((i, index) => {
           return (
                <div className="performance-container__graphic-row-labels-label" key={i}>
                    <div className={`performance-container__graphic-row-labels-label-line-${index}`}></div>
                    <p className="performance-container__graphic-row-labels-label-name">{`Linea ${index + 1}`}</p>
                </div>
            )
        })
    )

    return (
        <div className="performance-container">
 
            <div className="performance-container__graphic">
                <div className="performance-container__graphic-row">
                    <h4 className="performance-container__graphic-row-title">Performance</h4>
                    <div className="performance-container__graphic-row-labels">
                        {/* Line colors */}
                        {renderLines}
                    </div>
                    <select name="" id="" className="performance-container__graphic-row-order">
                        <option value="" disabled selected>Filtrar por</option>
                    </select>
                </div>
                <div className="performance-container__graphic-statistics">
                    <Graphyc chartData={data.chartData} />
                </div>
            </div>

            <div className="performance-container__pending-payments">
                <div className="performance-container__pending-payments-row">
                    <h4 className="performance-container__pending-payments-row-title">Facturas por pagar</h4>
                    <a href="" className="performance-container__pending-payments-row-link">VER TODO</a>
                </div>
                
                <div className="performance-container__pending-payments-table">
                    <div className="performance-container__pending-payments-table-on"/>
                    <div className='performance-container__pending-payments-table-component'>
                        <Table tableData={data.tableData}/>
                    </div>
                </div>

            </div>

            <div className="performance-container__payments">
                <div className="performance-container__payments-row">
                    <h2 className="performance-container__payments-row-title">Payments</h2>
                </div>

                <p className="performance-container__payments-secondary">Linea de credito</p>

                <div className="performance-container__payments-line">
                    <p className="performance-container__payments-line-primary">${formatNumber(150000000)}</p>
                    <button className="performance-container__payments-line-button">Incrementar linea</button>
                </div>

                <div className="performance-container__payments-consumed">

                    <div className="performance-container__payments-consumed-row">
                        <p className="performance-container__payments-consumed-row-quaternary">Consumido</p>
                        <p className="performance-container__payments-consumed-row-quaternary">Disponible</p>
                    </div>
                    <div className="performance-container__payments-consumed-row">
                        <p className="performance-container__payments-consumed-row-secondary">${formatNumber(150000000)}</p>
                        <p className="performance-container__payments-consumed-row-secondary">$0</p>
                    </div>
                    <div className="performance-container__payments-consumed-bar">
                        <progress 
                            className="performance-container__payments-consumed-bar-progress" 
                            // id="file" 
                            max="100" 
                            value="100"
                        > 70% </progress>
                    </div>
                    <div className="performance-container__payments-consumed-row donw">
                        <p className="performance-container__payments-consumed-row-terciary">Proxima deuda a pagar:</p>
                        <p className="performance-container__payments-consumed-row-terciary">07 de octubre de 2021</p>
                    </div>
                </div>

                <div className="performance-container__payments-payroll">
                    <div className="performance-container__payments-payroll-row">
                        <p className="performance-container__payments-payroll-row-secondary">Mis nóminas</p>
                        <select name="" id="" className='performance-container__payments-payroll-row-select'>
                            <option value="" disabled selected>En proceso de revisión</option>
                        </select>
                    </div>
                    
                    <div className="performance-container__payments-payroll-invoice">
                        <div className="performance-container__payments-payroll-invoice-date">
                            <p>Facturas del 07 Octubre</p>
                        </div>
                        <div className="performance-container__payments-payroll-invoice-table">
                            <div className="performance-container__payments-payroll-invoice-table-container">
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
                                            <td className="borders num">${formatNumber(1480171590)}</td>
                                            <td className="borders num">07 Oct. 2021</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="performance-container__payments-payroll-invoice">
                        <div className="performance-container__payments-payroll-invoice-date">
                            <p>Facturas del 07 Octubre</p>
                        </div>
                        <div className="performance-container__payments-payroll-invoice-table">
                            <div className="performance-container__payments-payroll-invoice-table-container">
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
                                            <td className="borders num">${formatNumber(1800930210)}</td>
                                            <td className="borders num">07 Oct. 2021</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
            
        </div>
    )
}

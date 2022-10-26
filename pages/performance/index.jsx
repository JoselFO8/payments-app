export default function Performance () {
    return (
        <div className="panel-container">
            <div className="panel-container__performance">
                <h4 className="panel-container__performance-title">Performance</h4>
                <select name="" id="" className="panel-container__performance-order"></select>
                <div className="panel-container__performance-graphic"></div>
            </div>

            <div className="panel-container__pending-payments">
                <h4 className="panel-container__pending-payments-title">Facturas por pagar</h4>
                <a href="" className="panel-container__pending-payments-link"></a>
                <table className="panel-container__pending-payments-table"></table>
            </div>

            <div className="panel-container__payments">
                <h4 className="panel-container__payments-title"></h4>
                <p className="panel-container__payments-secondary">Linea de credito</p>
                <div className="panel-container__payments-line">
                    <p className="panel-container__payments-line-primary">$ 150.000.000</p>
                    <button className="panel-container__payments-line-button">Incrementar linea</button>
                </div>
                <div className="panel-container__payments-consumed">
                    <p className="panel-container__payments-consumed-quaternary">Consumido</p>
                    <p className="panel-container__payments-consumed-quaternary">Disponible</p>
                    <div className="row">
                        <p className="panel-container__payments-consumed-secondary">1 150.000.000</p>
                        <p className="panel-container__payments-consumed-secondary">1 0</p>
                    </div>
                    <p className="panel-container__payments-consumed-progress">barra progreso</p>
                    <div className="row">
                        <p className="panel-container__payments-consumed-terciary">Proxima deuda a pagar</p>
                        <p className="panel-container__payments-consumed-terciary">07 de octubre de 2021</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
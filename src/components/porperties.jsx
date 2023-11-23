import Article from "./article"
export default function Properties() {
  return (
    <div className='container-fluid mt-4 mb-5'>
      <div className='row'>
        <div className='col-12 pb-4'>
          <h2 className='tittle pt-5 pb-3'>
            Propiedades a la venta en Nueva{ } esparta
          </h2>
          <hr />
        </div>
        <div className='row'>
          <Article />
          <Article />
          <Article />
          <Article />
        </div>
      </div>
    </div>
  )
}
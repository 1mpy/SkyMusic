import { useParams } from 'react-router-dom'

function Category() {
  const params = useParams()
  return (
    <div>
      <h1>Подборка {params.id}</h1>
    </div>
  )
}
export default Category

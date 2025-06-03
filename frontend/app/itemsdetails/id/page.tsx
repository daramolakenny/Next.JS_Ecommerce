import dataMap from '@/data';

interface PageProps {
  params: {
    id: number;
  }
}
const ItemDetailsPage = ({ params }: PageProps) => {
  const { id } = params;

  const item = Object.values(dataMap).flat().find(item => item.id === (id));
  if (!item) return <div>Item not found</div>;

  return (
    <div>
      <h2>{item.name}</h2>
      <img src={item.icon} alt={item.name} />
      <p>{item.price}</p>
      <button>{item.Order}</button>
      <button>{item.remove_order}</button>
    </div>
  )
}

export default ItemDetailsPage
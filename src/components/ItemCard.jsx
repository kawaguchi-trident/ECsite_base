export default function ItemCard({ item }) {
  return (
    <article className="item-card">
      <div className="item-card__image">
        <img src={item.image} alt={item.name} />
        {item.status === "soldout" && (
          <span className="item-card__badge">soldout</span>
        )}
      </div>
      <h3 className="item-card__name">{item.name}</h3>
      <p className="item-card__price">¥{item.price.toLocaleString()}</p>
    </article>
  );
}

import { X } from "lucide-react";

const CartItem = ({ product, index, onRemove, onQuantityChange }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-4 border rounded-lg shadow-lg p-4 mb-4 bg-white hover:shadow-xl transition-shadow duration-300">
      <div className="flex items-center gap-4">
        <img
          src={product.image}
          alt={product.name}
          className="w-24 h-24 object-cover rounded-md"
        />
        <div>
          <h3 className="text-lg font-semibold">{product.name}</h3>
          <p className="text-gray-500">Ksh {product.price}</p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <input
          type="number"
          value={product.quantity}
          min="1"
          onChange={(e) => onQuantityChange(index, parseInt(e.target.value))}
          className="w-16 px-2 py-1 border rounded-md"
        />
        <button
          onClick={() => onRemove(index)}
          className="text-red-500 hover:text-red-700"
        >
          <X />
        </button>
      </div>
    </div>
  );
};

export default CartItem;

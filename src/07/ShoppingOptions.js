export default function ShoppingOptions({ logo, title, description, price }) {
  return (
    <div className="w-[285px] rounded-xl bg-[#FFFFFF] p-10 shadow-md">
      {logo}
      <h2 className="mt-3 text-lg font-semibold">{title}</h2>
      <p className="mb-5 text-sm">{description}</p>
      <div className="mb-10 text-2xl font-bold">
        {price},-<p className="inline-block text-sm font-light">/month</p>
      </div>
      <button className="rounded-full bg-[#F0F0F6] px-6 py-4 shadow-md hover:bg-[#171435] hover:text-blue-50">
        Add subscription
      </button>
    </div>
  );
}

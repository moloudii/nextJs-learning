import { notFound } from "next/navigation";

interface IProductProps {
  params: Promise<{ id: string }>;
  searchParams: Promise<object>;
}
async function Product(props: IProductProps) {
  const { id } = await props.params;
  if (parseInt(id) > 100) {
    return notFound();
  }

  return <div>Product: {id}</div>;
}

export default Product;

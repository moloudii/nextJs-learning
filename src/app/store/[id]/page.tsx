interface IProductProps {
  params: Promise<{ id: string }>;
  searchParams: Promise<object>;
}
async function Product(props: IProductProps) {
  const { id } = await props.params;
  console.log(id);

  return <div>Product: {id}</div>;
}

export default Product;

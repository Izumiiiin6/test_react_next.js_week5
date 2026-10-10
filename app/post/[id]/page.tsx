export default function PostPage({ params }: { params: { id: string } }) {
  return <h1>記事ID: {params.id}</h1>;
}

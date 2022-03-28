export default function Custom404(props: any) {
  return (
    <div>
      <h1>404 - Page Not Found</h1>
      {JSON.stringify(props, null, 2)}
    </div>
  );
}

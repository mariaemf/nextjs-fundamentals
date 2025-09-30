export default async function Home() {
  //falmos que queremos chamar a funcao resolve por 2 segundos
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const response = await fetch("https://api.github.com/users/mariaemf");
  const data = await response.json();
  console.log(data);

  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}

import "../styles/global.css";

export default function App({ Component, pageProps }) {
  return (
    <div>
      <header>12</header>
      <Component {...pageProps} />
    </div>
  );
}

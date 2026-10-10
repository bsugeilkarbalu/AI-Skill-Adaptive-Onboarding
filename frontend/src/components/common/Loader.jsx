function Loader({ text = "AI is analyzing..." }) {
  return (
    <div className="loader-box">
      <div className="ai-loader"></div>
      <p>{text}</p>
    </div>
  );
}

export default Loader;

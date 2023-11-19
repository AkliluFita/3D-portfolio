const Link = ({ url, children }) => {
  return (
    <a
      rel="noreferrer"
      href={url}
      target="_blank"
      className="p-0 px-2 rounded-lg"
    >
      {children}
    </a>
  );
};

export default Link;

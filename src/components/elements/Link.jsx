const Link = ({ url, children }) => {
  return (
    <a rel="noreferrer" href={url} target="_blank" className="px-2 rounded-lg ">
      {children}
    </a>
  );
};

export default Link;

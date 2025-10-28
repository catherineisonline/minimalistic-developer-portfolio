import "./Footer.sass";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <a href="https://github.com/catherineisonline/" target="_blank" rel="noopener noreferrer">
        Designed & Built by Sophia &copy;2023 - {currentYear}
      </a>
    </footer>
  );
};

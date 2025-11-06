const Footer: React.FC = () => {
  return (
    <footer className="flex justify-center items-center h-16 bg-clap-green text-white">
      <p>&copy; {new Date().getFullYear()} ClapMoney. All rights reserved.</p>
    </footer>
  );
};

export default Footer;

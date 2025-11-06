const Footer: React.FC = () => {
  return (
    <footer className="flex justify-center items-center h-16 bg-primary/30 text-white">
      <p>&copy; {new Date().getFullYear()} ClapMoney. All rights reserved.</p>
    </footer>
  );
};

export default Footer;

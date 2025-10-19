const SimpleCard = ({ children, className = "" }) => {
  return (
    <div className={`simple-card h-fit cursor-pointer border border-blue-950 transition-all duration-300 relative text-slate-100 rounded-lg hover:border-slate-700 w-full ${className}`}>
      {children}
    </div>
  );
};

export default SimpleCard;

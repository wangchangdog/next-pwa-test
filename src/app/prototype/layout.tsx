const PrototypeHeader: React.FC<{
  logo?: string
}> = ({
  logo = '/logo.svg',
}) => (
  <div className="prototype-header">
    <div className="prototype-header__logo">
      {/*  eslint-disable-next-line @next/next/no-img-element */}
      { logo && <img src={logo} alt="Logo" /> }
    </div>
  </div>
);


const PrototypeLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="">
    <div className="">
      <PrototypeHeader />
    </div>
    <div className="prototype-layout__main">
      {children}
    </div>
  </div>
);


export default PrototypeLayout;
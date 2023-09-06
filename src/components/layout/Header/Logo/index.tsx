
export const Logo: React.FC<{
  logo?: string
}> = ({
  logo = '/logo.svg',
}) => (
  <div className="prototype-header__logo">
    {/*  eslint-disable-next-line @next/next/no-img-element */}
    { logo && <img src={logo} alt="Logo" /> }
  </div>
);
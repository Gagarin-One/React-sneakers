import ContentLoader from "react-content-loader";

const CartSkeleton = () => {
  return (

      <ContentLoader 
    speed={2}
    width={429}
    height={700}
    viewBox="0 0 429 700"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    
  >
    <rect x="106" y="245" rx="0" ry="0" width="0" height="1" /> 
    <rect x="2" y="1" rx="8" ry="8" width="423" height="66" /> 
    <rect x="125" y="104" rx="0" ry="0" width="0" height="1" /> 
    <rect x="2" y="110" rx="5" ry="5" width="423" height="156" /> 
    <rect x="101" y="640" rx="0" ry="0" width="17" height="0" /> 
    <rect x="2" y="309" rx="5" ry="5" width="425" height="391" />
  </ContentLoader>

  );
};
export default CartSkeleton;

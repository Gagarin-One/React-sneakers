import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = () => (
  <ContentLoader 
    speed={2}
    width={246}
    height={304}
    viewBox="0 0 246 304"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="106" y="245" rx="0" ry="0" width="0" height="1" /> 
    <rect x="82" y="283" rx="8" ry="8" width="77" height="18" /> 
    <rect x="-1" y="1" rx="8" ry="8" width="245" height="246" /> 
    <rect x="125" y="104" rx="0" ry="0" width="0" height="1" /> 
    <rect x="46" y="260" rx="6" ry="6" width="149" height="16" />
  </ContentLoader>
)

export default MyLoader
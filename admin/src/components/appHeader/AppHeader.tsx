import { useNavigate } from "react-router-dom";


export const PageHeader = ({ children, title }) => {
  const navigate = useNavigate();
  return (
    <div className='flex items-center justify-between my-4'>
      <div
        className='flex gap-3 items-center'
        style={{ textTransform: "uppercase" }}>
        <div className='cursor-pointer' onClick={() => navigate(-1)}>
          {/* <BackIcon width={25} height={25} /> */}
        </div>
        {title}
      </div>
      {children}
    </div>
  );
};
const Loading = ({theme}) => {
    return ( 
        <div className="d-flex justify-content-center m-auto bg-black">
            <div className={`loading sppiner-border text-${theme || "success" }`}></div>
        </div>
     );
}
 
export default Loading;
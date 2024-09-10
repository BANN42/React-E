export const SubTop = function ({src}){
     return (
          <div className=" container min-h-50 bg-light shadow shadow-sm p-4 rounded rounded-2 align-items-center justify-content-center d-flex m-4 flex-wrap">
               <div className="col-sm-12 col-lg-6 d-flex flex-column h-50 justify-content-center p-1 ">
                    <h2>Join ENPO and SAVE OUR PLANET.</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam, vitae nihil! Fuga reprehenderit sequi eum voluptatum nemo optio cum. Sed, nisi esse?</p>
               </div>
               <div className="col-sm-12 col-lg-6 h-50">
                 <img src={src} alt="Something About" className="rounded rounded-1 w-75 h-100 shadow shadow-lg" />
               </div>
          </div>
     )
}

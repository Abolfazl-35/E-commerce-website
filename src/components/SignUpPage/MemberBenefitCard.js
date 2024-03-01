import React from 'react'

function MemberBenefitCard(props) {
  return (
   
        <li className="card-item relative w-max p-2    ">
              <img
                alt="Membershipimage"
                src={props.item.image}
               
                className="sm:min-w-[400px] sm:max-w-[400px]   "
              />
              <div className="membership-benefits flex  flex-col space-y-5 justify-center items-center">
                <p className="w-max font-medium text-white text-2xl font-Oswald tracking-wider">
                  {props.item.description}
                </p>
                <h1 className="w-max font-semibold text-base sm:text-2xl text-white font-Oswald tracking-wider">
                {props.item.description_2}
                </h1>
                <button className=" w-max bg-slate-100 p-3 rounded-full text-xl font-medium hover:bg-slate-500">
                  {props.item.buttonText}
                </button>
              </div>
            </li>
  
  )
}

export default MemberBenefitCard

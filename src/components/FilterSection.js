import React from 'react'
import classNames from 'classnames'
import FilterSectionCss from "./FilterSection.css"

function FilterSection(props) {
  return (
    <>
              <div
            className={classNames(
              " flex-col border-b border-slate-850 p-5 md:text-base pl-5 space-y-5   font-serif font-semibold  hidden md:flex sm:text-base",
              { open: props.filterVisibility }
            )}
            id="filter-col"
          >
            <h1 className=" cursor-pointer text-start font-serif hover:bg-slate-950 hover:text-white p-1 rounded">
              Lifestyle
            </h1>
            <h1
              className=" cursor-pointer text-start font-serif hover:bg-slate-950 hover:text-white p-1 rounded"
              onClick={() => props.Handleset()}
            >
              Jordan
            </h1>
            <h1 className=" cursor-pointer text-start font-serif hover:bg-slate-950 hover:text-white p-1 rounded">
              Running
            </h1>
            <h1 className=" cursor-pointer text-start font-serif hover:bg-slate-950 hover:text-white p-1 rounded">
              {" "}
              Training & Gym
            </h1>
            <h1 className=" cursor-pointer text-start font-serif hover:bg-slate-950 hover:text-white p-1 rounded">
              Soccer
            </h1>
            <h1 className=" cursor-pointer text-start font-serif hover:bg-slate-950 hover:text-white p-1 rounded">
              Skateboarding
            </h1>
            <h1 className=" cursor-pointer text-start font-serif hover:bg-slate-950 hover:text-white p-1 rounded">
              Football
            </h1>
            <h1 className=" cursor-pointer text-start font-serif hover:bg-slate-950 hover:text-white p-1 rounded">
              Baseball
            </h1>
            <h1 className=" cursor-pointer text-start font-serif hover:bg-slate-950 hover:text-white p-1 rounded">
              Golf
            </h1>
            <h1 className=" cursor-pointer text-start font-serif hover:bg-slate-950 hover:text-white p-1 rounded">
              Nike By You
            </h1>
          </div>
    
    
    </>
  )
}

export default FilterSection
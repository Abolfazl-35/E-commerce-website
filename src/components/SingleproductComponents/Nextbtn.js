import React from 'react'
import classNames from 'classnames'
function Nextbtn(props) {
  console.log(props)
  return (
    <>
         <button onClick={props.NextSlider}>
                    <i
                      className={classNames(
                        {
                          "bi bi-arrow-right-circle-fill text-black  text-4xl":
                            props.imageIndex < props.images.length - 1,
                        },
                        {
                          "bi bi-arrow-right-circle-fill text-greyish-0  text-4xl":
                            props.imageIndex === props.images.length.length - 1,
                        }
                      )}
                    ></i>
                  </button>
    </>
  )
}

export default Nextbtn
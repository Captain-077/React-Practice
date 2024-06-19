import React from 'react'

function EventPropagation() {

  const handleGrandParent = () => {

console.log("grand parent clicked")

  }

  const handleParent = () => {

    console.log("parent clicked")

  }


  const handleChild = (event) => {
    console.log("child clicked")
    event.stopPropagation()


  }


  return (
    <section className='main-div'>
      <div className="g-div" onClickCapture={handleGrandParent}>

        <div className="p-div" onClickCapture={handleParent}>

          <button className="c-div" onClickCapture={handleChild}>

            Child Div

          </button>


        </div>


      </div>




    </section>
  )
}

export default EventPropagation
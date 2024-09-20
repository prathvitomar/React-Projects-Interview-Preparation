import React from 'react'
import CustomTab from './CustomTab'

function MainCustomTab() {
    const data = [
        {
            title : "tab 1",
            description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam magni iure iusto quae perferendis in temporibus fuga, molestias voluptates enim. Ipsa a quibusdam adipisci dolores vel. Repudiandae, dicta sint? Sequi!"
        },
        {
            title : "tab 2",
            description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam magni iure iusto quae perferendis in temporibus fuga, molestias voluptates enim. Ipsa a quibusdam adipisci dolores vel. Repudiandae, dicta sint? Sequi!"
        },
        {
            title : "tab 3",
            description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam magni iure iusto quae perferendis in temporibus fuga, molestias voluptates enim. Ipsa a quibusdam adipisci dolores vel. Repudiandae, dicta sint? Sequi!"
        },
        {
            title : "tab 4",
            description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam magni iure iusto quae perferendis in temporibus fuga, molestias voluptates enim. Ipsa a quibusdam adipisci dolores vel. Repudiandae, dicta sint? Sequi!"
        },
    ]

    

    const clickEvent = (e)=>{

    }

  return (
    <>
        <div className='flex wrap'>
            {
                data.map((item)=>(
                    <CustomTab 
                    title={item.title} 
                    description={item.description}
                    />
                ))
            }
        </div>
    </>
  )
}

export default MainCustomTab
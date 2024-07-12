import React from 'react'

export default function index({
    categories:{strCategory,strCategoryThumb}
}) {
  return (
    <>
        <div className='categories-list'>
            <ul>{strCategory}</ul>
            <img src={strCategoryThumb} alt={strCategory} />
        </div>
    </>
  )
}

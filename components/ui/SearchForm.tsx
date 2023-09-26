import Image from 'next/image'
import React from 'react'

function SearchForm() {
    return (
        <form action="">
            <label htmlFor="">
                <Image
                    src='/magnifying-glass.svg'
                    className='absolute left-8'
                    width={32}
                    height={32}
                    alt='Search Icon'
                />
            </label>
        </form>
    )
}

export default SearchForm
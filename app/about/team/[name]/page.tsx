import react from 'react'

const Name = async({params}:any) => {
    const nam = (await params).name
    return (
        <div className='text-white text-5xl'>
            Name - {nam}
        </div>
    )
}

export default Name;